import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";

export default function EventForm({ initialData, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    from: "",
    to: "",
    prizeMoney: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description || "",
        location: initialData.location,
        from: initialData.timings.from.slice(0, 16),
        to: initialData.timings.to.slice(0, 16),
        prizeMoney: initialData.prizeMoney,
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      description: formData.description,
      location: formData.location,
      timings: {
        from: new Date(formData.from),
        to: new Date(formData.to),
      },
      prizeMoney: Number(formData.prizeMoney),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            {initialData ? "Edit Event" : "Create Event"}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Title</label>
            <input
              className="input"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Description
            </label>
            <textarea
              className="input min-h-[80px]"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Location</label>
            <input
              className="input"
              required
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Start Time
              </label>
              <input
                type="datetime-local"
                className="input"
                required
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                End Time
              </label>
              <input
                type="datetime-local"
                className="input"
                required
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Prize Money (₹)
            </label>
            <input
              type="number"
              min="0"
              className="input"
              required
              value={formData.prizeMoney}
              onChange={(e) =>
                setFormData({ ...formData, prizeMoney: e.target.value })
              }
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <Save className="w-4 h-4" />
              {initialData ? "Update Event" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
