---
id: def-gr-fx-bianchi-i-curvature
kind: definition
title: "C2 curvature for the diagonal Bianchi I quotient metric"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-fx-bianchi-i-data
  - def-gr-periodic-torus-and-sobolev-spaces
  - def-gr-curvature-tensor-and-derived-tensors
  - def-countable-choice
dependency_roles:
  def-gr-fx-bianchi-i-data: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
    - title: "Diego L. Cáceres, Leonardo Castañeda, and Juan M. Tejeiro, Shear Dynamics in Bianchi I Cosmology, arXiv:1003.3491v1 (2010), Section 2, equations (2.1)–(2.2), printed p. 2 (PDF p. 3)"
      url: "https://arxiv.org/pdf/1003.3491"
verification:
  precheck: pending
---

## Definition

For a diagonal Bianchi I datum, use local quotient coordinates $x^0=t,x^1,x^2,x^3$, with indices $a,b,c,d\in\{0,1,2,3\}$, and let $(g_{ab})$ and $(g^{ab})$ be the displayed metric matrix and its inverse. At this $C^2$ regularity, define

$$\Gamma^a{}_{bc}:=\frac12g^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}\bigr),$$

$$R^a{}_{bcd}:=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_{e=0}^3\bigl(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}\bigr),$$

$$\operatorname{Ric}_{bd}:=\sum_{a=0}^3R^a{}_{bad},\qquad \mathcal R:=\sum_{b,d=0}^3g^{bd}\operatorname{Ric}_{bd},\qquad G_{ab}:=\operatorname{Ric}_{ab}-\frac12\mathcal R\,g_{ab},\qquad G^a{}_b:=\sum_{c=0}^3g^{ac}G_{cb}.$$

Repeated upper and lower indices in the first two displays are summed over $\{0,1,2,3\}$. The first formula gives coefficients symmetric in $b,c$ and, by expansion,

$$\Gamma^d{}_{ca}g_{db}+\Gamma^d{}_{cb}g_{ad}=\frac12(\partial_cg_{ab}+\partial_ag_{cb}-\partial_bg_{ca})+\frac12(\partial_cg_{ab}+\partial_bg_{ac}-\partial_ag_{cb})=\partial_cg_{ab}.$$

Thus these coefficients define a torsion-free, metric-compatible connection in every local quotient chart. It is unique: if $\Gamma'$ is another such connection, the lowered difference $C_{abc}:=g_{ad}(\Gamma'^d{}_{bc}-\Gamma^d{}_{bc})$ is symmetric in its last two indices by torsion freedom and skew in its first two by metric compatibility. Hence

$$C_{abc}=C_{acb}=-C_{cab}=-C_{cba}=C_{bca}=C_{bac}=-C_{abc},$$

so $C=0$. The curvature sign and index order agree with the smooth convention cited in the references below. Since $g$ is $C^2$, the coefficients $\Gamma$ are $C^1$ and the curvature and Ricci components are continuous. On overlaps, two local lifts differ by a constant translation: the Jacobian is the identity and all second derivatives of the transition map vanish. The metric arrays and their derivatives therefore agree, so the displayed connection and curvature arrays patch consistently over the quotient atlas. This is a local $C^2$ extension for this fixed atlas; no general low-regularity tensoriality theorem is being assumed. It inherits only $\mathrm{AC}_\omega$ from the torus and product definitions.

## Definition references

[[def-gr-fx-bianchi-i-data]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]
