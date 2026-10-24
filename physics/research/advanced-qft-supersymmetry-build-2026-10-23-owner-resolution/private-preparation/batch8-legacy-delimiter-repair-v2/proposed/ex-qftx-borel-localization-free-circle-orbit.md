---
id: ex-qftx-borel-localization-free-circle-orbit
kind: example
title: A free circle orbit has zero localized Borel cohomology
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-character-localization
  - thm-borel-localization-for-compact-torus-actions
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - lem-qftx-singular-cohomology-homotopy-invariance
dependency_roles:
  def-qftx-character-localization: mathematical-premise
  thm-borel-localization-for-compact-torus-actions: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  lem-qftx-singular-cohomology-homotopy-invariance: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, orbit-isotropy support, printed pp. 5–8.
landmark: false
---

## Example

Let $T=M=\mathbb R/\mathbb Z$ act on $M$ by left translation $t\cdot[x]=[t+x]$, and use the product Milnor Borel model with $k\in\{\mathbb Q,\mathbb R\}$. This action has no fixed point. The map $[e,x]\mapsto e\cdot x$ identifies $ET\times_TT$ with $ET$, so $H_T^*(T;k)\cong k$ in degree zero and is zero in positive degrees. Every positive-degree class in $A_T(k)$ acts as zero, so localization at the nontrivial character classes gives $\mathscr S_T(k)^{-1}H_T^*(T;k)=0$, agreeing with restriction to the empty fixed set.

## Example references

[Character localization and Borel conventions] [[def-qftx-character-localization]]

[Contractible free Milnor model] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[Compact-torus Borel localization theorem] [[thm-borel-localization-for-compact-torus-actions]]

[Orbit-isotropy support argument] [Atiyah–Bott, Section 3, printed pp. 5–8](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

## Facts & Assumptions

**Given:** The left translation action, the selected right Milnor model, and $k\in\{\mathbb Q,\mathbb R\}$.

[F1] The Borel quotient uses $(e,x)\cdot h=(e\cdot h,h^{-1}x)$, and $ET$ is contractible with a free right $T$-action. [[def-qftx-character-localization]] [[thm-milnor-join-model-is-a-contractible-free-g-space]]

[F2] Homotopy-equivalent spaces have isomorphic singular cohomology with coefficients in $k$. [[lem-qftx-singular-cohomology-homotopy-invariance]]

[F3] The localization set contains the class $u$ of the nontrivial weight-one character. The real supplier readiness record is currently missing, so the $k=\mathbb R$ coefficient interface is conditional. [[def-qftx-character-localization]]

[F4] The theorem identifies localized Borel cohomology with that of the fixed set, including the empty-set case. [[thm-borel-localization-for-compact-torus-actions]]

## Verification

**Given:** The action and Borel conventions in the Example.

1.1 Define $\Phi([e,x])=e\cdot x$. If $(e,x)$ is replaced by $(e\cdot h,h^{-1}x)$, then $(e\cdot h)\cdot(h^{-1}x)=e\cdot x$, so $\Phi$ is well-defined. Its inverse is $e\mapsto[e,0]$, where $0$ is the identity of the additive circle: $\Phi([e,0])=e$, and the quotient relation gives $[e,x]=[e\cdot x,0]$. Both maps are continuous by the quotient topology, hence $ET\times_TT\cong ET$. Contractibility of $ET$ and [F2] give cohomology $k$ in degree zero and zero in positive degrees. [F1, F2, construct]

2.1 The projection $ET\to BT$ is null-homotopic because $ET$ is contractible, so every positive-degree element of $A_T(k)$ pulls back to zero and acts by zero on $H^*(ET;k)$. In particular the invertible denominator $u\in\mathscr S_T(k)$ annihilates every class; for any $a$, $a/1=(ua)/u=0$ in the localization. The fixed set is empty, and [F4] gives the same zero localized group for the target. [F1, F3, F4, step 1.1, algebra] ∎
