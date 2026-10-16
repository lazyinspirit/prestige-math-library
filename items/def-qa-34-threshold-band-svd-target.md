---
id: def-qa-34-threshold-band-svd-target
kind: definition
title: Threshold-band singular-value approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-singular-value-decomposition
  - def-orthogonal-projection
  - def-frobenius-matrix-norm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Definition

Let $A:\mathbb R^n\to\mathbb R^m$ have a singular value decomposition $A=U\Sigma V^T$ as in [[thm-singular-value-decomposition]], let $\sigma>0$, and let $0<\eta\le1$. Write $P_>$ for the orthogonal projection onto the span of right singular vectors whose singular values are at least $\sigma(1+\eta)$, and $E$ for the span of right singular vectors whose singular values lie in $[\sigma(1-\eta),\sigma(1+\eta))$. For any orthogonal projection $P_E$ with range contained in $E$, a **threshold-band target** is
$$A_{\sigma,\eta}:=A(P_>+P_E).$$

The choice inside the threshold band is allowed to vary; all singular directions above the band are retained and all directions below it are discarded. The definition is independent of the choice of orthonormal bases within singular subspaces because it is stated using their subspaces. If a singular value equals the upper endpoint it belongs to $P_>$; equality at the lower endpoint belongs to $E$. A range contained in $\ker A$ contributes zero to $A_{\sigma,\eta}$. However, an allowed $P_E$ can mix nullspace directions with nonzero singular directions when both lie in $E$, so changing that projection can change the target.
