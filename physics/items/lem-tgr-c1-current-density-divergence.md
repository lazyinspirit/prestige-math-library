---
id: lem-tgr-c1-current-density-divergence
kind: lemma
title: "Metric divergence density identity for a C¹ current"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - lem-gr-metric-divergence-and-density-formula
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes, 12 October 2022, §8.7 and §9.1, printed pp. 109–111 (PDF pp. 110–112)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§8.7 relates current-form Stokes flux to metric divergence; §9.1 uses the metric divergence theorem. The C¹ extension is proved locally from the stated smooth-metric density identities."
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, Michaelmas Term 2019, §3.2.4, printed pp. 110–112 (PDF pp. 117–119)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "The section states the curved-space divergence formula and the trace of the Christoffel symbols. Its displayed matrix-log derivation is not used for a Lorentzian metric with negative determinant; the local proof uses the exact cofactor-based published density lemma."
---

## Statement

Assume the Countable Choice convention $\mathrm{AC}_\omega$ of
[[def-countable-choice]] used by the smooth tangent-bundle structure in
[[def-gr-smooth-lorentzian-objects]]. Let $(M,g,N)$ be a time-oriented smooth
Lorentzian four-manifold of signature $(-,+,+,+)$ with its metric-selected
connection $\nabla$, and let $(U,x)$ be a smooth chart. Write
$w=\sqrt{|\det(g_{ab})|}$. Let $J$ be a $C^1$ vector field on $U$; the
connection derivative on such a field is defined by its usual chart formula
$$\nabla_bJ^a:=\partial_bJ^a+\Gamma^a{}_{cb}J^c,$$
whose coefficients are continuous. Then, throughout $U$,
$$\nabla_aJ^a=w^{-1}\partial_a(wJ^a).$$
The right-hand side is the chart expression of the scalar divergence
$\nabla_aJ^a$; no higher regularity of $J$ than $C^1$ is required.

## Facts & Assumptions

**Given:** The $\mathrm{AC}_\omega$ background, a smooth Lorentzian metric and
its metric-selected connection, a smooth chart $(U,x)$, and a $C^1$ vector
field $J$ on $U$.

[A1] The tangent-bundle smooth structure used by the cited Lorentzian supplier
records the Axiom of Countable Choice $\mathrm{AC}_\omega$; this is the only
choice principle inherited here ([[def-countable-choice]]).

[F1] For $w=\sqrt{|\det(g_{ab})|}$, the metric-density derivative and the
Christoffel trace satisfy
$\partial_a w=\tfrac12wg^{bc}\partial_ag_{bc}$ and
$\Gamma^b{}_{ba}=w^{-1}\partial_aw$
([[lem-gr-metric-divergence-and-density-formula]] clauses (a)–(b)). These
clauses concern the smooth metric and do not require a smooth current.

[F2] The metric-selected connection has smooth Christoffel coefficients
$\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$;
its derivative on a vector field has components
$\partial_bJ^a+\Gamma^a{}_{cb}J^c$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clauses (a),
(c)). The same coordinate rule is defined for $C^1$ components by the $C^1$
chain rule, so the resulting first derivative is continuous.

## Proof


**Proof technique:** direct.

1.1 By [F1], $w$ is smooth and positive and the Christoffel trace obeys $\Gamma^a{}_{ab}=w^{-1}\partial_bw$ after renaming the dummy index. The identity follows from the metric-density derivative and its trace formula, both valid for the given smooth metric. [A1, F1]

2.1 Since $J$ is $C^1$, [F2] gives $\nabla_aJ^a=\partial_aJ^a+\Gamma^a{}_{ab}J^b$. Multiplying by $w$ and substituting step 1.1 yields $$w\nabla_aJ^a=w\partial_aJ^a+(\partial_aw)J^a=\partial_a(wJ^a),$$ by the product rule for $C^1$ functions. Dividing by $w>0$ proves the stated identity. [step 1.1, F2, algebra] ∎

## Remarks

The published density lemma states its divergence formula for smooth vector
fields. This local extension uses exactly the first-derivative coordinate
formula and therefore covers the $C^1$ currents required by the finite-slab
balance; it does not change the published supplier.
