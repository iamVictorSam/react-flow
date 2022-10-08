import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const graphStyles = { width: "100%", height: "100vh" };

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const elements = [
    { id: "1", data: { label: "Parent" }, position: { x: 500, y: 150 } },
    { id: "2", data: { label: "First child" }, position: { x: 400, y: 250 } },
    { id: "e1-2", source: "1", target: "2", animated: true },
  ];

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      //   onNodesChange={onNodesChange}
      //   onEdgesChange={onEdgesChange}
      //   onConnect={onConnect}
      //   elements={elements}
      //   style={graphStyles}
    >
      fitView
    </ReactFlow>
  );
}

export default Flow;
