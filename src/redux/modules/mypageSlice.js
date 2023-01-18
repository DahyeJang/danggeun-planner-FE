import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../core/api";

const initialState = {
  data: {
    email: "",
    username: "",
    profileImage: "",
    totalCarrot: "",
  },
  isLoading: false,
  error: "",
};

export const __putUsername = createAsyncThunk(
  "username/add",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.putUsernameApi(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const __getUserInfo = createAsyncThunk(
  "userinfo/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getUserInfoApi();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const __putProfileImg = createAsyncThunk(
  "profileImg/put",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.putProfileImgApi(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // 닉네임 등록
      .addCase(__putUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...state.data, username: action.payload.data.username };
      })
      .addCase(__putUsername.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload;
      })

      // 마이페이지 유저정보 가져오기
      .addCase(__getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = { ...action.payload };
      })
      .addCase(__getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      })

      // 프로필이미지 변경하기
      .addCase(__putProfileImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putProfileImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = {
          ...state.data,
          profileImage: action.payload.profileImage,
        };
      })
      .addCase(__putProfileImg.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
