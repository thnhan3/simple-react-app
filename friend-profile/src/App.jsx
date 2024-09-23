import { useEffect, useState } from "react";
import Friend from "./component/Friend"
import Bill from "./component/Bill";

const listFriends = [
  {id: 1, name: "Clark", img: "https://i.pinimg.com/236x/e4/1b/e6/e41be6c6e77d8406aa3066b85fe3e935.jpg", msg: "You owe Clark 7$", sharedValue: 7.0, billValue: 10, expense: 0, whoPaid: null},
  {id: 2, name: "Sarah", img: "https://i.pinimg.com/736x/f0/10/84/f01084c1c641beefd8b385204024505b.jpg", msg: "Sarah owes you 20$", sharedValue: 20.0, billValue: 10, expense: 0, whoPaid: null},
  {id: 3, name: "Anthony", img: "https://i.pinimg.com/236x/69/57/d8/6957d80d173b020712d7861d8553880a.jpg", msg: "You owe Anthony 98$", sharedValue: 98.0, billValue: 10, expense: 0, whoPaid: null},
]

export default function App() {
  const [friends, setFriends] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(null)

  useEffect(() => {
    setFriends(listFriends)
  }, [])

  const handleSelectFriend = (id) => {
    const friend = friends.find(f => f.id === id)
    setSelectedFriend(friend)
  }

  return (
    <div className="p-4 flex">
      <div className="w-1/2">
        {friends.map(friend => (
          <Friend 
            key={friend.id}
            id={friend.id}
            name={friend.name} 
            img={friend.img} 
            onSelectFriend={handleSelectFriend} 
            sharedValue={friend.sharedValue} 
          />
        ))}
      </div>
      {selectedFriend && (
        <div className="w-1/2">
          <Bill 
            billValue={selectedFriend.billValue} 
            expense={selectedFriend.expense} 
            sharedValue={selectedFriend.sharedValue}  
            name={selectedFriend.name} 
          />
        </div>
      )}
    </div>
  )
}