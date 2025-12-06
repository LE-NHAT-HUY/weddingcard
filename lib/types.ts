export interface WeddingData {
  groomName: string
  brideName: string
  groomFullName: string
  brideFullName: string
  groomFatherName: string
  groomMotherName: string
  brideFatherName: string
  brideMotherName: string
  weddingDate: string
  weddingTime: string
  lunarDate: string
  venueName: string
  venueAddress: string
  message: string
  template: string
  primaryColor: string
  accentColor: string
  coverPhoto: string
  loveStory: LoveStoryItem[]
  gallery: string[]
  songTitle: string
  songArtist: string
  introText: string
  quoteText: string
}

export interface LoveStoryItem {
  id: string
  date: string
  title: string
  description: string
  image: string
}

export interface Wish {
  id: string
  name: string
  message: string
  createdAt: string
}
