/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import HTTP_METHOD = GSS.ART.Util.Types.HTTP_METHOD;

export abstract class HTTPBaseService {
  protected baseUrl = "";
  protected controller = "";
  protected token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  protected instance: AxiosInstance;

  constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
      this.instance = axios.create({
          baseURL: this.baseUrl
      });

      this.initializeRequestInterceptor();
      this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
      this.instance.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
      this.instance.interceptors.response.use(response => {
          if (response.headers && response.headers.authorization) {
              console.log("axios interceptors response");
          }
          return response;
      }, this.handleError);
  }

  private handleRequest = (config: AxiosRequestConfig) => {
      console.log("handleRequest");
      console.log("token", this.token);
      if (config.headers)
          config.headers["Authorization"] = `Bearer ${this.token}`;
      return config;
  };

  private handleError = async (error: AxiosError) => {
      if (error.response?.status === 401) {
          // handle 401 error
      }
      if (error.response?.status === 404) {
          // handle 404 error
      }
      if (error.response?.status === 500) {
          // handle 500 error
      }
  }

  protected async call<T>(method: HTTP_METHOD, resource?: string, params?: any, data?: T): Promise<T | null | undefined>{
      let url = `${this.baseUrl}/${this.controller}`;
      
      if (resource) url += `/${resource}`;
      
      const requestConfig : AxiosRequestConfig = {
          params: params,
          data: data
      };
      
      switch (method){
          case "GET":
              return await this.get(url, requestConfig);
          case "POST": 
              return await this.post(url, requestConfig);
          case "PUT":
              return await this.put(url, requestConfig);
          case "DELETE": 
              return await this.delete(url, requestConfig);
          default:
              return null;
      }
  }

  protected async get<T>(url: string, requestConfig: AxiosRequestConfig): Promise<T | null | undefined> {
    try{
      const { data } = await this.instance.get<T>(url, requestConfig);
      return data;
    } catch(error) {
      console.log(error)
    }
  }

  protected async post<T>(url: string, requestConfig: AxiosRequestConfig): Promise<T | null | undefined> {
    try{
      const { data } = await this.instance.post<T>(url, requestConfig);
      return data;
    } catch(error) {
      console.log(error)
    }
  }

  protected async put<T>(url: string, requestConfig: AxiosRequestConfig): Promise<T | null | undefined> {
    try{
      const { data } = await this.instance.put<T>(url, requestConfig);
      return data;
    } catch(error) {
      console.log(error)
    }
  }

  protected async delete<T>(url: string, requestConfig: AxiosRequestConfig): Promise<T | null | undefined> {
    try{
      const { data } = await this.instance.delete<T>(url, requestConfig);
      return data;
    } catch(error) {
      console.log(error)
    }
  }
}
