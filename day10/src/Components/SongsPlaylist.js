import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../images/play.svg'
import { ReactComponent as HeartIcon } from '../images/heart.svg'
import { ReactComponent as NoteIcon } from '../images/note.svg'

const PlaylistPage = () => {

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://i.pinimg.com/564x/a5/a6/ee/a5a6ee6b9cfff53c010c2b9d400cb10e.jpg"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Play List</p>
            <h1>Top 50</h1>

            <p className="tagline">
              Top 50 songs of all languages English, Hindi, Bengali...
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>299,428 likes</span>
              <span>2hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon-iconsHeart">
                <HeartIcon />
              </div>
              <div className="icon-iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Faded</h3>
                <span>Alan Walker</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Fearless Pt. II</h3>
                <span>Lost Sky, Chris Linton</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
              <h3>Superhero</h3>
                  <span>Unknown Brain, Chris Linton</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
              <h3>Heros Tonight</h3>
                  <span>Janji, Johnning</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Burj Khalifa</h3>
                <span>Shashi - Dj Khushi</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
              </div>
              <div className="songDetails">
                <h3>Hold On</h3>
                <span>Justin Bieber</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlaylistPage