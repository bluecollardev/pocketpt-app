// tslint:disable
/**
 * Mediashare
 * Mediashare API
 *
 * The version of the OpenAPI document: 0.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthorProfileDto, MediaItem, PlaylistCategoryType, PlaylistItemResponseDto, TagKeyValue } from './';

/**
 * @export
 * @interface PlaylistResponseDto
 */
export interface PlaylistResponseDto {
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  readonly _id: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  readonly createdAt: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  readonly updatedDate?: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  createdBy: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  userId: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  title: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  description: string;
  /**
   * @type {string}
   * @memberof PlaylistResponseDto
   */
  imageSrc: string;
  /**
   * @type {Array<string>}
   * @memberof PlaylistResponseDto
   */
  mediaIds: Array<string> | null;
  /**
   * @type {PlaylistCategoryType}
   * @memberof PlaylistResponseDto
   */
  category?: PlaylistCategoryType;
  /**
   * @type {Array<TagKeyValue>}
   * @memberof PlaylistResponseDto
   */
  tags: Array<TagKeyValue> | null;
  /**
   * @type {AuthorProfileDto}
   * @memberof PlaylistResponseDto
   */
  authorProfile: AuthorProfileDto;
  /**
   * @type {Array<MediaItem>}
   * @memberof PlaylistResponseDto
   */
  mediaItems: Array<MediaItem>;
  /**
   * @type {Array<PlaylistItemResponseDto>}
   * @memberof PlaylistResponseDto
   */
  playlistItems: Array<PlaylistItemResponseDto>;
  /**
   * @type {number}
   * @memberof PlaylistResponseDto
   */
  shareCount: number;
  /**
   * @type {number}
   * @memberof PlaylistResponseDto
   */
  viewCount: number;
  /**
   * @type {number}
   * @memberof PlaylistResponseDto
   */
  likesCount: number;
}