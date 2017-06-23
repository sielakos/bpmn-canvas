module.exports = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.4.0">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>SequenceFlow_1sxp5ci</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_19v6peg">
      <bpmn:incoming>SequenceFlow_1sxp5ci</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0sdtdza</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1sxp5ci" sourceRef="StartEvent_1" targetRef="Task_19v6peg" />
    <bpmn:endEvent id="EndEvent_05gomkj">
      <bpmn:incoming>SequenceFlow_0sdtdza</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0sdtdza" sourceRef="Task_19v6peg" targetRef="EndEvent_05gomkj" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="193" y="272" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="211" y="308" width="0" height="0" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_19v6peg_di" bpmnElement="Task_19v6peg">
        <dc:Bounds x="256" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1sxp5ci_di" bpmnElement="SequenceFlow_1sxp5ci">
        <di:waypoint xsi:type="dc:Point" x="229" y="290" />
        <di:waypoint xsi:type="dc:Point" x="256" y="290" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="243" y="265" width="0" height="0" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_05gomkj_di" bpmnElement="EndEvent_05gomkj">
        <dc:Bounds x="402" y="272" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="420" y="308" width="0" height="0" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0sdtdza_di" bpmnElement="SequenceFlow_0sdtdza">
        <di:waypoint xsi:type="dc:Point" x="356" y="290" />
        <di:waypoint xsi:type="dc:Point" x="402" y="290" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="379" y="265" width="0" height="0" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
