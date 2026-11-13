---
id: lem-author-9e2ffff7db46-spacetime-map-transfer
kind: lemma
domain: mathematics
title: Transfer of a compatible spacetime norm through the free forcing map
status: draft
deps:
  - lem-author-9e2ffff7db46-free-continuous-convolution
  - lem-author-9e2ffff7db46-global-real-evolution
  - lem-author-9e2ffff7db46-bochner-variation-of-constants
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-topological-vector-space-for-local-convexity
dependency_roles:
  lem-author-9e2ffff7db46-free-continuous-convolution: mathematical-premise
  lem-author-9e2ffff7db46-global-real-evolution: mathematical-premise
  lem-author-9e2ffff7db46-bochner-variation-of-constants: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-topological-vector-space-for-local-convexity: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Use the free-convolution, global-evolution and Bochner variation-of-constants interfaces on a prescribed forward interval $I=[a,b]\subset[0,T]$, retaining their group and perturbation hypotheses, including Countable Choice. Regard $E$, $C(I;E)$ and $L^1(I;E)$ as real spaces. Let $Y_I$ be a real Banach space of time-dependent functions or distributions, with $Y_I$ and $C(I;E)$ injected by real-linear maps into the same Hausdorff real topological vector space $\mathcal A_I$. Equality in $\mathcal A_I$ is the compatibility convention for their representatives. Assume the actual free orbit $H_ax(t)=W(t-a)x$ and the actual retarded operator $D_ag(t)=\int_a^tW(t-s)g(s)\,ds$ define bounded real-linear maps into $Y_I$ with norms at most $A_I$ and $B_I$, respectively, for every $x\in E$ and every $g\in L^1(I;E)$. Then the forced solution $u(t)=S(t,a)x+\int_a^tS(t,s)f(s)\,ds$ lies in $Y_I$ and $\|u\|_{Y_I}\le A_I\|x\|+B_I((b-a)K C_I(\|x\|+\|f\|_1)+\|f\|_1)$, where $C_I=M\exp(MK(b-a))$. Bounds on subintervals are asserted with their stated constants; uniform bounds require uniform $A_I,B_I$. Backward spacetime bounds hold if the same orbit and forcing-map hypotheses are supplied after time reflection, with group $W(-t)$ and the reflected coefficient $-P$.

## Statement references

[[lem-author-9e2ffff7db46-free-continuous-convolution]]

[[lem-author-9e2ffff7db46-global-real-evolution]]

[[lem-author-9e2ffff7db46-bochner-variation-of-constants]]

[[math:def-banach-space]]

[[math:def-bounded-linear-operator]]

[[math:def-topological-vector-space-for-local-convexity]]

## Facts & Assumptions

**Given:** The compatible injections, the two bounded free maps on the named interval, and $L^1(I;E)$ forcing.

**Goal:** Obtain the additional spacetime estimate by applying a bounded map already supplied, without integrating into $Y_I$.

[F1] [[lem-author-9e2ffff7db46-free-continuous-convolution]] defines the actual retarded free forcing map in $C(I;E)$, while the hypotheses here supply its compatible $Y_I$ value for the same input.

[F2] [[lem-author-9e2ffff7db46-global-real-evolution]] and [[lem-author-9e2ffff7db46-bochner-variation-of-constants]] give the solution and the estimate $\|u\|_{C(I;E)}\le C_I(\|x\|+\|f\|_1)$ with initial time $a$.

[F3] The real Banach-space convention and its norm structure are supplied by [[math:def-banach-space]]. The bounds for the real-linear maps $H_a:E\to Y_I$ and $D_a:L^1(I;E)\to Y_I$ have the meaning of [[math:def-bounded-linear-operator]] with common scalar field $\mathbb R$. The ambient space is a Hausdorff TVS over $\mathbb R$ in [[math:def-topological-vector-space-for-local-convexity]]; the injections are real-linear, and equality of their images is the stated compatibility convention.

## Proof

**Given:** The compatible injections, the two bounded free maps on the named interval, and $L^1(I;E)$ forcing.

**Goal:** Obtain the additional spacetime estimate by applying a bounded map already supplied, without integrating into $Y_I$.

1.1 The continuous function $P(t)u(t)$ has $L^1(I;E)$ norm at most $(b-a)K\|u\|_C$. Hence $g=Pu+f$ belongs to $L^1(I;E)$. The solution identity is $u=H_ax+D_ag$ in $C(I;E)$ by [F2]. Both terms on the right have compatible images in $Y_I$ by the two map hypotheses. Their sum therefore represents $u$ in $\mathcal A_I$, proving membership in $Y_I$ with the declared compatibility. [F1, F2, F3, given]

2.1 The triangle inequality and the assumed map bounds give $\|u\|_{Y_I}\le A_I\|x\|+B_I((b-a)K\|u\|_C+\|f\|_1)$. Substituting [F2] proves the displayed estimate. This uses no $Y_I$-valued Bochner integral; all integrals used to identify the free map were taken in $E$. Thus a nonseparable spatial factor in a chosen spacetime norm introduces no additional integration claim. [F1, F2, F3, step 1.1, given]

3.1 Restricting to a shorter interval gives exactly its stated free-map constants, so uniformity cannot be inferred without their uniform bounds. For a backward interval ending at $b$, set $\tau=b-t$ and $\sigma=b-s$. Changing variables in the oriented Volterra equation replaces $W(t-s)$ by $W(-\tau+\sigma)$, the perturbation by $-P(b-\sigma)$ and the forcing by $-f(b-\sigma)$. This is the same forward problem with reflected group $\widetilde W(\tau)=W(-\tau)$ and coefficient $\widetilde P(\sigma)=-P(b-\sigma)$. Applying steps 1.1–2.1 under its supplied free-map hypotheses proves the final assertion. [F1, F2, step 1.1, step 2.1] ∎
