import { Column, Entity } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

@Entity({ name: "pull_request_github_events" })
export class DbRepoRelease {
  @ApiModelProperty({
    description: "Release title",
    example: "Big changes have arrived",
  })
  @Column({
    type: "text",
    select: false,
    insert: false,
  })
  public title: string;

  @ApiModelProperty({
    description: "Number of commits for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  commits: number;

  @ApiModelProperty({
    description: "Number of PRs created for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  prs_created: number;

  @ApiModelProperty({
    description: "Number of PRs reviewed for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  prs_reviewed: number;

  @ApiModelProperty({
    description: "Number of issues created for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  issues_created: number;

  @ApiModelProperty({
    description: "Number of commit comments for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  commit_comments: number;

  @ApiModelProperty({
    description: "Number of issue comments for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  issue_comments: number;

  @ApiModelProperty({
    description: "Number of pr review comments for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  pr_review_comments: number;

  @ApiModelProperty({
    description: "Number of total comments for login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  comments: number;

  @ApiModelProperty({
    description: "Number of total contributions for a login in repo within the time range",
    example: 0,
    type: "integer",
  })
  @Column({
    type: "bigint",
    select: false,
    insert: false,
  })
  total_contributions: number;
}
