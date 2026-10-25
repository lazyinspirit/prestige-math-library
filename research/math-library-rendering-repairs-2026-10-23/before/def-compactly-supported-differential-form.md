---
id: def-compactly-supported-differential-form
title: "Compact support of a differential form"
kind: definition
status: published
origin: pipeline
deps: ["def-smooth-differential-k-form", "def-interior-closure-boundary-top", "def-compact-space"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Merry Definition 26.7, Lecture 26 p.2 / PDF p.214"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $M$ be a smooth manifold, possibly with boundary, and $k\geq0$. For $\omega\in\Omega^k(M)$ define
$$\operatorname{supp}\omega=\overline{\{p\in M:\omega_p\neq0\}}^{\,M},\qquad \Omega_c^k(M)=\{\omega\in\Omega^k(M):\operatorname{supp}\omega\text{ is compact}\}.$$
The closure and compactness are in $M$, including its genuine boundary. Zero is the intrinsic zero of each exterior-power fiber, so this definition is independent of trivialization. The zero form has empty support.
