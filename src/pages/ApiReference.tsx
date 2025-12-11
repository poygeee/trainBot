export const ApiReference = () => {
  return (
    <div className="bg-white">
      <div className="container section">
        <div className="container-narrow">
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>TrainBot API Reference</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Comprehensive documentation for integrating with the TrainBot simulation platform.
            This guide covers core functionalities, authentication, and provides code examples
            in Python and C++.
          </p>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              The TrainBot API provides a powerful interface for developers to programmatically
              interact with our high-fidelity simulation environment. You can control robots,
              retrieve real-time sensor data, manage simulation assets, and automate complex
              testing and training workflows. Our API is designed for flexibility, performance,
              and seamless integration into your existing development pipelines.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginTop: '1rem' }}>
              This reference guide details all available endpoints, data structures, and usage
              patterns. Whether you're developing advanced AI for autonomous systems or
              performing rigorous validation tests, the TrainBot API offers the tools you need.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>2. Authentication</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              All requests to the TrainBot API must be authenticated using an API key.
              You can generate and manage your API keys from your TrainBot user dashboard
              under the "API Settings" section.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginTop: '1rem' }}>
              Include your API key in the <code>Authorization</code> header of every HTTP request
              as a Bearer token:
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              <strong>Example (Python):</strong>
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
{`import requests

API_KEY = "YOUR_API_KEY"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.get("https://api.trainbot.com/v1/simulations", headers=HEADERS)
print(response.json())`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginTop: '1rem' }}>
              <strong>Example (C++ using cURL):</strong>
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
{`#include <iostream>
#include <string>
#include <curl/curl.h>

int main() {
    CURL *curl;
    CURLcode res;

    curl_global_init(CURL_GLOBAL_ALL);
    curl = curl_easy_init();
    if(curl) {
        std::string api_key = "YOUR_API_KEY";
        std::string auth_header = "Authorization: Bearer " + api_key;
        
        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, auth_header.c_str());
        headers = curl_slist_append(headers, "Content-Type: application/json");

        curl_easy_setopt(curl, CURLOPT_URL, "https://api.trainbot.com/v1/simulations");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, [](char *ptr, size_t size, size_t nmemb, void *userdata){
            ((std::string*)userdata)->append(ptr, size * nmemb);
            return size * nmemb;
        });
        std::string response_string;
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response_string);

        res = curl_easy_perform(curl);
        if(res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\\n", curl_easy_strerror(res));
        else
            std::cout << response_string << std::endl;

        curl_easy_cleanup(curl);
        curl_slist_free_all(headers);
    }
    curl_global_cleanup();
    return 0;
}`}
              </code>
            </pre>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>3. Base URL</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              The base URL for all API endpoints is:
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
https://api.trainbot.com/v1
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginTop: '1rem' }}>
              All endpoint paths listed below are relative to this base URL.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>4. Endpoints</h2>

            {/* Simulations */}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>4.1. Simulations</h3>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Manage and control simulation instances. A simulation instance represents a running
              or paused simulation environment.
            </p>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>POST /simulations</code> - Create a new simulation instance</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Initializes and starts a new simulation. You can specify the environment,
              robots, and whether to run it in headless mode.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Request Body:</strong></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "environment_id": "string", // Required: ID of the environment to load (e.g., "env_warehouse_01")
  "robot_ids": ["string"],    // Optional: Array of robot IDs to spawn (e.g., ["robot_arm_v4"])
  "headless": true            // Optional: Run simulation without a graphical interface (default: false)
}`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>201 Created</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "simulation_id": "sim_abc123",
  "status": "running",
  "environment_id": "env_warehouse_01"
}`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              <strong>Example (Python):</strong>
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
{`payload = {
    "environment_id": "env_factory_floor",
    "robot_ids": ["robot_gripper_v2"],
    "headless": True
}
response = requests.post("https://api.trainbot.com/v1/simulations", headers=HEADERS, json=payload)
print(response.json())`}
              </code>
            </pre>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>GET /simulations/{`{id}`}</code> - Retrieve details of a specific simulation</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Fetches the current status and configuration of a simulation instance.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>200 OK</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "simulation_id": "sim_abc123",
  "status": "running", // "running", "paused", "terminated"
  "environment_id": "env_warehouse_01",
  "active_robots": ["robot_arm_v4"],
  "start_time": "2024-01-01T12:00:00Z"
}`}
              </code>
            </pre>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>POST /simulations/{`{id}`}/start</code> - Start a paused simulation</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Resumes a simulation that is currently in a 'paused' state.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>200 OK</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{ "simulation_id": "sim_abc123", "status": "running" }`}
              </code>
            </pre>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>POST /simulations/{`{id}`}/pause</code> - Pause a running simulation</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Pauses a simulation that is currently in a 'running' state.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>200 OK</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{ "simulation_id": "sim_abc123", "status": "paused" }`}
              </code>
            </pre>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>DELETE /simulations/{`{id}`}</code> - Terminate a simulation</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Permanently stops and removes a simulation instance. All associated resources are released.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>204 No Content</code></p>

            {/* Robots */}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', marginTop: '2.5rem' }}>4.2. Robots</h3>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Interact with individual robots within a specific simulation instance.
            </p>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>GET /simulations/{`{sim_id}`}/robots/{`{robot_id}`}/state</code> - Get current state of a robot</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Retrieves the current pose (position and orientation), joint angles, and other
              relevant state information for a specified robot.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>200 OK</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "position": {"x": 1.2, "y": 0.5, "z": 0.8},
  "orientation": {"x": 0.0, "y": 0.0, "z": 0.707, "w": 0.707}, // Quaternion
  "joint_states": {
    "joint_1": 0.1,
    "joint_2": -0.5
  },
  "linear_velocity": {"x": 0.1, "y": 0.0, "z": 0.0},
  "angular_velocity": {"x": 0.0, "y": 0.0, "z": 0.2}
}`}
              </code>
            </pre>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>POST /simulations/{`{sim_id}`}/robots/{`{robot_id}`}/command</code> - Send movement or action commands</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Sends a command to a robot, such as moving to a target pose, setting joint
              velocities, or triggering an action.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Request Body:</strong></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "command_type": "string", // e.g., "move_joint", "set_velocity", "grasp"
  "target_pose": {          // For "move_to_pose" command
    "position": {"x": float, "y": float, "z": float},
    "orientation": {"x": float, "y": float, "z": float, "w": float}
  },
  "joint_name": "string",   // For "move_joint" command
  "target_angle": float,    // For "move_joint" command
  "linear_velocity": {"x": float, "y": float, "z": float}, // For "set_velocity"
  "angular_velocity": {"x": float, "y": float, "z": float}  // For "set_velocity"
}`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response:</strong> <code>202 Accepted</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{ "message": "Command received and being processed." }`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              <strong>Example (Python - Move Joint):</strong>
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
{`sim_id = "sim_abc123"
robot_id = "robot_arm_v4"
payload = {
    "command_type": "move_joint",
    "joint_name": "shoulder_joint",
    "target_angle": 1.57 # radians
}
response = requests.post(f"https://api.trainbot.com/v1/simulations/{sim_id}/robots/{robot_id}/command", headers=HEADERS, json=payload)
print(response.json())`}
              </code>
            </pre>

            {/* Sensors */}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', marginTop: '2.5rem' }}>4.3. Sensors</h3>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Retrieve data from virtual sensors attached to robots or the environment.
            </p>

            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', marginTop: '1.2rem' }}><code>GET /simulations/{`{sim_id}`}/sensors/{`{sensor_id}`}/data</code> - Get latest sensor reading</h4>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Fetches the most recent data from a specified sensor. The response format
              varies depending on the sensor type (e.g., camera, lidar, force-torque).
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}><strong>Response (Lidar Example):</strong> <code>200 OK</code></p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <code>
{`{
  "timestamp": "2024-01-01T12:00:01.234Z",
  "sensor_type": "lidar",
  "ranges": [0.5, 0.6, 0.55, ..., 0.7], // Array of distance readings
  "angle_min": -1.57, // radians
  "angle_max": 1.57,  // radians
  "angle_increment": 0.01
}`}
              </code>
            </pre>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              <strong>Example (Python - Get Lidar Data):</strong>
            </p>
            <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '4px', overflowX: 'auto', fontSize: '0.95rem' }}>
              <code>
{`sim_id = "sim_abc123"
sensor_id = "robot_arm_v4_lidar"
response = requests.get(f"https://api.trainbot.com/v1/simulations/{sim_id}/sensors/{sensor_id}/data", headers=HEADERS)
lidar_data = response.json()
print(f"Lidar ranges: {lidar_data['ranges'][:5]}...") # Print first 5 ranges`}
              </code>
            </pre>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>5. Error Codes</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              The TrainBot API uses standard HTTP status codes to indicate the success or
              failure of an API request.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li><code>200 OK</code> - The request was successful.</li>
              <li><code>201 Created</code> - A new resource was successfully created.</li>
              <li><code>202 Accepted</code> - The request was accepted for processing.</li>
              <li><code>204 No Content</code> - The request was successful, but there is no content to return (e.g., DELETE requests).</li>
              <li><code>400 Bad Request</code> - The request was malformed or invalid parameters were provided.</li>
              <li><code>401 Unauthorized</code> - Authentication failed (missing or invalid API key).</li>
              <li><code>403 Forbidden</code> - The authenticated user does not have permission to access the resource.</li>
              <li><code>404 Not Found</code> - The requested resource could not be found.</li>
              <li><code>405 Method Not Allowed</code> - The HTTP method used is not supported for this endpoint.</li>
              <li><code>429 Too Many Requests</code> - Rate limit exceeded.</li>
              <li><code>500 Internal Server Error</code> - An unexpected error occurred on the server.</li>
              <li><code>503 Service Unavailable</code> - The server is currently unable to handle the request due to temporary overloading or maintenance.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>6. SDKs and Libraries</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              To simplify integration, we provide official Software Development Kits (SDKs)
              for popular programming languages. These SDKs handle authentication, request
              formatting, and response parsing, allowing you to focus on your application logic.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li><strong>Python:</strong> Install via pip: <code>pip install trainbot-sdk</code></li>
              <li><strong>C++:</strong> Available via Conan package manager. Refer to our GitHub repository for setup instructions.</li>
            </ul>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', marginTop: '1rem' }}>
              For other languages, you can use standard HTTP client libraries to interact
              directly with the REST API as demonstrated in the examples above.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
