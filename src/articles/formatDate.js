const formatDate = (date) => {
  let postDate = new Date(date)
  postDate=postDate.toDateString().split(" ");
  postDate=`${postDate[1]} ${postDate[2]}`
  return postDate;
}

export default formatDate;