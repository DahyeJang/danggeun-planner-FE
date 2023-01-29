import { useNavigate } from "react-router-dom";
import { api } from "../../../core/api";
import Landing from "./Landing";
import { PATH } from "../../../constants/index";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakao = async () => {
    try {
      const { data, status, headers } = await api.postKakaoLoginApi(code);

      if (status === 202) {
        localStorage.setItem("accessToken", headers.accesstoken);
        localStorage.setItem("refreshToken", headers.refreshtoken);
        if (data.data.isExistUsername) {
          navigate(PATH.timer);
        } else {
          navigate(PATH.username);
        }
      }
      // 여기서 로컬 스토리지에 acc, refresh 저장  저장하고 이제 navigate 로 이동
    } catch (error) {
      navigate(PATH.intro);
    }
  };
  kakao();

  return <Landing />;
};

export default KakaoLogin;
