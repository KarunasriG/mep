import { Edit2, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function EventCard({ event, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3>{event.title}</h3>
            <StatusBadge status={event.state} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
            <div>
              <p className="text-gray-500">Start</p>
              <p>{new Date(event.timings.from).toLocaleString()}</p>
            </div>

            <div>
              <p className="text-gray-500">End</p>
              <p>{new Date(event.timings.to).toLocaleString()}</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p>{event.location}</p>
            </div>

            <div>
              <p className="text-gray-500">Prize</p>
              <p>₹{event.prizeMoney.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={onEdit} className="btn-secondary">
            <Edit2 className="w-4 h-4" /> Edit
          </button>
          <button onClick={onDelete} className="btn-danger">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
