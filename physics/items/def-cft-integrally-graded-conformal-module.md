---
id: def-cft-integrally-graded-conformal-module
kind: definition
title: Integrally graded conformal module
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-conformal-vertex-algebra
  - def-virasoro-algebra
  - def-vertex-algebra-module
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
justified_by:
  - lem-cft-aut-o-action-and-coordinate-covariance
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§9.1–9.4 and 10.1–10.5
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Module gradings, integer L(0) spectrum, and exponentiation of positive Virasoro modes to Aut O.
    - title: Edward Frenkel, Vertex Algebras and Algebraic Curves, Séminaire Bourbaki 875 (2000), §§4.1–4.3
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: CFT-type grading and the Aut O action on the state space.
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type. An **integrally graded conformal $V$-module** is a module $M$ for which the conformal field has modes $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$, $L_M(0)$ is diagonalizable, and
$$M=\bigoplus_{d\in\mathbb Z,\ d\ge d_0}M_d,\qquad L_M(0)|_{M_d}=d\,\mathrm{id},\qquad L_M(n)M_d\subseteq M_{d-n}$$
for some integer lower bound $d_0$. The operators $L_M(n)$ satisfy the Virasoro relations with the same central charge as $V$. The sum is algebraic: each vector has finitely many nonzero homogeneous components. No finite-dimensionality of $M_d$ is required. Integer weights make $a^{L_M(0)}$ single-valued for $a\in\mathbb C^*$; the lower bound makes each positive-mode exponential used in the formal-coordinate action locally finite. Modules with fractional $L(0)$ weights require additional tangent or root data and are outside this definition.

## Definition references

[[def-conformal-vertex-algebra]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

[[def-vertex-algebra-module]]

[[lem-cft-aut-o-action-and-coordinate-covariance]]
