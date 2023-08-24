import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sxwe1_list = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_list",
  async payload => {
    const response = await apiService.api_v1_sxwe1_list(payload)
    return response.data
  }
)
export const api_v1_sxwe1_create = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_create",
  async payload => {
    const response = await apiService.api_v1_sxwe1_create(payload)
    return response.data
  }
)
export const api_v1_sxwe1_retrieve = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_retrieve",
  async payload => {
    const response = await apiService.api_v1_sxwe1_retrieve(payload)
    return response.data
  }
)
export const api_v1_sxwe1_update = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_update",
  async payload => {
    const response = await apiService.api_v1_sxwe1_update(payload)
    return response.data
  }
)
export const api_v1_sxwe1_partial_update = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_partial_update",
  async payload => {
    const response = await apiService.api_v1_sxwe1_partial_update(payload)
    return response.data
  }
)
export const api_v1_sxwe1_destroy = createAsyncThunk(
  "sxwe1s/api_v1_sxwe1_destroy",
  async payload => {
    const response = await apiService.api_v1_sxwe1_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sxwe1sSlice = createSlice({
  name: "sxwe1s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sxwe1_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sxwe1_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sxwe1_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sxwe1_list,
  api_v1_sxwe1_create,
  api_v1_sxwe1_retrieve,
  api_v1_sxwe1_update,
  api_v1_sxwe1_partial_update,
  api_v1_sxwe1_destroy,
  slice: sxwe1sSlice
}
