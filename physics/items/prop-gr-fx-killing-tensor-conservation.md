---
id: prop-gr-fx-killing-tensor-conservation
kind: proposition
title: "Conservation of quadratic geodesic integrals"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "Conditional mathematical statement about affine geodesics of a metric-selected connection; no physical trajectory or observation is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-killing-tensor
  - def-geodesic-of-an-affine-connection
  - def-covariant-derivative-along-a-curve
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - cor-zero-derivative-implies-constant
  - def-countable-choice
dependency_roles:
  def-gr-fx-killing-tensor: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.5, PDF pp. 97-100"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $(\mathcal M,g)$ be a smooth Lorentzian four-manifold, with no global
time orientation assumed, and let $\nabla$ be its metric-selected connection,
namely the unique torsion-free affine connection with $\nabla g=0$.
Let $K$ be a smooth symmetric covariant $2$-tensor satisfying
$\nabla_{(a}K_{bc)}:=(\nabla_aK_{bc}+\nabla_bK_{ca}+\nabla_cK_{ab})/3=0$.
Here a **rank-two Killing tensor** means precisely such a $K$; this extends
the time-oriented definition by the same tensor equation. If
$\gamma:I\to\mathcal M$ is an affinely parametrized geodesic on a connected
open interval $I$, with tangent $v=\dot\gamma$, then

$$\lambda\longmapsto K_{ab}(\gamma(\lambda))v^a(\lambda)v^b(\lambda)$$

is constant on $I$.

## Facts & Assumptions

**Given:** The metric-selected connection, a smooth rank-two Killing tensor
$K$, and a smooth affinely parametrized geodesic $\gamma:I\to\mathcal M$.

[F1] [[def-gr-fx-killing-tensor]] defines a Killing tensor on a time-oriented Lorentzian four-manifold by symmetry and the cyclic equation $\nabla_{(a}K_{bc)}=0$. In the Statement we explicitly use that same equation without a time-orientation assumption; symmetry and the equation are hypotheses, not an application of that definition outside its scope.

[F2] [[def-geodesic-of-an-affine-connection]]: affine parameter means $D_\lambda v=0$ along $\gamma$.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] supplies the unique metric-selected connection and the contraction product rule for every smooth nondegenerate symmetric metric on a smooth four-manifold, without time orientation; [[def-covariant-derivative-along-a-curve]] defines its induced derivative along $\gamma$.

[F4] [[cor-zero-derivative-implies-constant]]: a differentiable function on an interval whose derivative vanishes everywhere is constant.

[A1] The metric-selected connection and tangent-bundle convention use only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

1.1 Define $I_K(\lambda):=K_{ab}(\gamma(\lambda))v^a(\lambda)v^b(\lambda)$. The product rule in [F3] gives $I_K'=(\nabla_vK)(v,v)+2K(D_\lambda v,v)$. [given, A1, F3, algebra]

2.1 By [F2], $D_\lambda v=0$. Also $v^av^bv^c$ is symmetric in its indices, so $(\nabla_vK)(v,v)=v^av^bv^c\nabla_aK_{bc} =v^av^bv^c\nabla_{(a}K_{bc)}=0$ by [F1]. Thus $I_K'=0$ on $I$. [F1, F2, step 1.1, algebra]

3.1 Apply [F4] to $I_K$ on the connected interval $I$. Therefore $K_{ab}v^av^b$ is constant along $\gamma$. [F4, step 2.1] ∎

