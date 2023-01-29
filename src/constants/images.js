import { ReactComponent as Menu } from "../assets/images/menuicon.svg";
import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as CompleteCarrot } from "../assets/images/timer/completeCarrot.svg";
import { ReactComponent as BlingCarrot } from "../assets/images/timer/blingCarrot.svg";
import { ReactComponent as GroupAdd } from "../assets/images/group/groupAdd.svg";
import { ReactComponent as GroupListPeople } from "../assets/images/group/groupListPeople.svg";
import { ReactComponent as NextArrow } from "../assets/images/calendar/next_month.svg";
import { ReactComponent as PreviousArrow } from "../assets/images/calendar/previous_month.svg";
import { ReactComponent as DownArrow } from "../assets/images/group/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/images/group/up-arrow.svg";
import { ReactComponent as InviteIcon } from "../assets/images/group/inviteIcon.svg";
import { ReactComponent as CalendarIcon } from "../assets/images/planner/calendarIcon.svg";
import { ReactComponent as AddBtn } from "../assets/images/planner/plan_add.svg";
import { ReactComponent as RangeBtn } from "../assets/images/planner/range_button.svg";
import { ReactComponent as MemberCarrot } from "../assets/images/group/member-carrot.svg";
import { ReactComponent as Search } from "../assets/images/group/search.svg";
import { ReactComponent as BlockCircle } from "../assets/images/group/block_circle.svg";
import { ReactComponent as CheckCircle } from "../assets/images/group/check_circle.svg";
import { ReactComponent as EmptyCircle } from "../assets/images/group/empty_circle.svg";
import { ReactComponent as CarrotSticker } from "../assets/images/planner/carrot.svg";
import { ReactComponent as CheckBtn } from "../assets/images/planner/check.svg";
import { ReactComponent as Trash } from "../assets/images/planner/trash_icon.svg";
import { ReactComponent as Lock } from "../assets/images/planner/lock.svg";
import { ReactComponent as Fold } from "../assets/images/mypage/fold_icon.svg";
import { ReactComponent as Edit } from "../assets/images/mypage/NotePencil.svg";
import { ReactComponent as DownArrowS } from "../assets/images/downArrowS.svg";
import { ReactComponent as UpArrowS } from "../assets/images/upArrowS.svg";
import { ReactComponent as SearchIcon } from "../assets/images/searchIcon.svg";
import { ReactComponent as XIcon } from "../assets/images/group/xIcon.svg";
import { ReactComponent as Gold } from "../assets/images/group/gold.svg";
import { ReactComponent as Silver } from "../assets/images/group/silver.svg";
import { ReactComponent as Bronze } from "../assets/images/group/bronze.svg";
import { ReactComponent as MenuCarrot } from "../assets/images/menuCarrot.svg";
import { ReactComponent as TodayBtnIcon } from "../assets/images/calendar/todayBtnIcon.svg";
import { ReactComponent as Bell } from "../assets/images/bell.svg";

export const IMAGES = {
  // 로그인
  kakao: require("../assets/images/login/kakao.png"),
  naver: require("../assets/images/login/naver.png"),
  google: require("../assets/images/login/google.png"),
  logo: require("../assets/images/login/logo.png"),

  // 마이페이지
  fold: <Fold />,
  edit: <Edit />,
  camera: require("../assets/images/mypage/camera.svg"),
  gift: require("../assets/images/mypage/gift.png"),

  //캘린더
  todayBtnIcon: <TodayBtnIcon />,

  // 타이머 이미지
  defalut: require("../assets/images/timer/default.png"),
  step1: require("../assets/images/timer/step1.png"),
  step2: require("../assets/images/timer/step2.png"),
  step3: require("../assets/images/timer/step3.png"),
  step4: require("../assets/images/timer/step4.png"),
  step5: require("../assets/images/timer/step5.png"),
  step6: require("../assets/images/timer/step6.png"),
  rest: require("../assets/images/timer/rest.png"),
  // 테스트용 이미지 추후 삭제
  test: require("../assets/images/rabbit_icon.png"),

  // 플래너
  calendarIcon: <CalendarIcon />,
  addBtn: <AddBtn />,
  rangeBtn: <RangeBtn />,
  carrotSticker: <CarrotSticker />,
  checkBtn: <CheckBtn />,
  trashBtn: <Trash />,
  lock: <Lock />,
  //
  menu: <Menu />,
  home: <Home />,
  completeCarrot: <CompleteCarrot />,
  blingCarrot: <BlingCarrot />,
  groupAdd: <GroupAdd />,
  nextArrow: <NextArrow />,
  previousArrow: <PreviousArrow />,
  groupListPeople: <GroupListPeople />,
  downArrow: <DownArrow />,
  upArrow: <UpArrow />,
  inviteIcon: <InviteIcon />,
  memberCarrot: <MemberCarrot />,
  search: <Search />,
  checkCircle: <CheckCircle />,
  blockCircle: <BlockCircle />,
  emptyCircle: <EmptyCircle />,
  xIcon: <XIcon />,
  goldSvg: <Gold />,
  silverSvg: <Silver />,
  bronzeSvg: <Bronze />,
  goldPng: require("../assets/images/group/gold.png"),
  silverPng: require("../assets/images/group/silver.png"),
  bronzePng: require("../assets/images/group/bronze.png"),

  //작은화살표
  downArrowS: <DownArrowS />,
  upArrowS: <UpArrowS />,

  //메뉴
  searchIcon: <SearchIcon />,
  menuCarrot: <MenuCarrot />,
  bell: <Bell />,

  //인트로
  introBack1: require("../assets/images/intro/introBack1.png"),
  introContent1: require("../assets/images/intro/introContent1.png"),

  // 경고창
  alertImg: require("../assets/images/element/alert.png"),
};
