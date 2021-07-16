/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ResponseNewsletterDto } from '../dto/response-newsletter.dto';

@Injectable()
export class NewsletterService {
  constructor(private httpService: HttpService) {}
  /**
   * This function get all publication
   * @returns {ResponseNewsletterDto} all publication data
   */
  async getAllPublications(): Promise<ResponseNewsletterDto> {
    try {
      // get all notification with http end point
      const findAllPublication = this.httpService.get(
        'http://localhost:3001/publications',
      );
      // return all publication
      return ResponseNewsletterDto.factory(true, findAllPublication);
    } catch (error) {
      // return error message
      return ResponseNewsletterDto.factory(false, error.message);
    }
  }
  /**
   * takes all comments from a post
   * @param publicationUUID publication uuid
   * @returns
   */
  async getCommentPublication(
    publicationUUID: string,
  ): Promise<ResponseNewsletterDto> {
    try {
      // get all comments from an publication
      const getCommentPublication = this.httpService.get(
        `http://localhost:3002/comments/publication${publicationUUID}`,
      );
      // return comments data
      return ResponseNewsletterDto.factory(true, getCommentPublication);
    } catch (error) {
      // return error message
      return ResponseNewsletterDto.factory(false, error.message);
    }
  }
  /**
   * Get all user publications
   * @param {string} userUUID user uuid
   * @returns {ResponseNewsletterDto} all user publications
   */
  async getAllUserPublications(
    userUUID: string,
  ): Promise<ResponseNewsletterDto> {
    try {
      // get all user publications with microservice
      const findAllUserPublications = this.httpService.get(
        `http://localhost:3001/publications/user${userUUID}`,
      );
      // return user publication data
      return ResponseNewsletterDto.factory(true, findAllUserPublications);
    } catch (error) {
      // return error message
      return ResponseNewsletterDto.factory(false, error.message);
    }
  }
  async getUserInfo(userUUID: string): Promise<ResponseNewsletterDto> {
    try {
      // find user information
      const findUserInfo = this.httpService.get(
        `http://localhost:3003/users/${userUUID}`,
      );
      // return user data
      return ResponseNewsletterDto.factory(true, findUserInfo);
    } catch (error) {
      // return error message
      return ResponseNewsletterDto.factory(false, error.message);
    }
  }
}
