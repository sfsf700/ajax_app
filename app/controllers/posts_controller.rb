class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content]) #新たに投稿されたメモの内容を変数postに格納
    render json:{ post: post } #{ post: post }というデータをJSON形式で返却することが出来る
  end
end
