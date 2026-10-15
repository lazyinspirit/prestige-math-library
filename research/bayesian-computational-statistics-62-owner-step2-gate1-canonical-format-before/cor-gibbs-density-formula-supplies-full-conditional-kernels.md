---
id: cor-gibbs-density-formula-supplies-full-conditional-kernels
kind: corollary
title: A joint density supplies a proper full conditional kernel
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-gibbs-full-conditional-kernel
  - thm-conditional-density-formula
  - def-regular-conditional-distribution
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "The stated kernel and event identities use the choice-free branch of the conditional-density supplier. AC is needed only for its optional interpretation through the library's conditional-expectation classes; that branch is not used here."
---

## Statement

Let $(S_B,\mathcal S_B,\mu)$ and $(S_{-B},\mathcal S_{-B},\nu)$ be sigma-finite measure spaces. Suppose a probability law $\pi$ on their product has a nonnegative product-measurable density $p(u,z)$ with respect to $\mu\times\nu$. Fix a supplied probability measure $\rho$ on $S_B$ and put
$$m(z)=\int_{S_B}p(u,z)\,\mu(du),\qquad D=\{z:0<m(z)<\infty\}.$$
Then
$$K_B(z,A)=\begin{cases}\displaystyle \frac{\int_Ap(u,z)\,\mu(du)}{m(z)},&z\in D,\\[4pt]\rho(A),&z\notin D,\end{cases}$$
is a proper full conditional kernel for $\pi$.

## Facts & Assumptions

**Given:** The density model and the supplied filler probability measure in the Statement.

[F1] The density construction gives an everywhere probability kernel; the second marginal gives full mass to $D$; and the rectangle event identity is the defining regular conditional distribution identity. [[thm-conditional-density-formula]].

[F2] A proper full conditional kernel is an everywhere probability kernel satisfying the block event identities against the retained-coordinate marginal. [[def-gibbs-full-conditional-kernel]].

[F3] Finite measures agreeing on generating rectangles agree on the product sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

[F4] Integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the source point. [[thm-measurability-of-integration-against-a-kernel]].

[F5] Increasing nonnegative measurable functions pass through an integral by monotone convergence. [[thm-monotone-convergence-for-the-integral]].

[F6] The nonnegative integral is additive on finite sums. [[cor-additivity-of-the-nonnegative-lebesgue-integral]].

## Proof
**Given:** The density model and the supplied filler probability measure in the Statement.

1.1 Apply [F1] with the block coordinate as target and the retained coordinates as conditioning variable. Its formula gives probability sections on $D$ by normalization and uses $\rho$ on every exceptional fibre; the supplier proves measurability of evaluations and that the exceptional set has zero marginal mass. Thus $K_B(z,\cdot)$ is a probability measure for every $z$, not only almost every $z$. [F1]

2.1 Fix any measurable $F\subseteq S_{-B}$. Under the coordinate grouping $S\cong S_B\times S_{-B}$, the inverse image under $\operatorname{splice}_B$ of a measurable rectangle $A\times C$ is $C\times A$. Since such rectangles generate the finite-product sigma-algebra ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]), the function $(z,u)\mapsto\mathbf1_E(\operatorname{splice}_B(z,u))$ is product-measurable for every product-measurable $E\subseteq S$. The kernel integration theorem [F4] therefore makes $z\mapsto K_B(z,E_z)$ measurable. Define $\nu_F(E)=\int_FK_B(z,E_z)\,\pi_{-B}(dz)$; this integral is defined for every such $E$. [F1, F4]

2.2 The set function $E\mapsto\pi(E\cap p_{-B}^{-1}(F))$ is a finite measure by restriction of $\pi$. The set function $\nu_F$ is also a finite measure: it vanishes at $\varnothing$, and $\nu_F(S)=\int_F1\,d\pi_{-B}=\pi_{-B}(F)\le1$. If $(E_n)$ are pairwise disjoint product-measurable sets, their sections $(E_n)_z$ are pairwise disjoint, so $K_B(z,(\bigcup_nE_n)_z)=\sum_nK_B(z,(E_n)_z)$. The partial sums are measurable by step 2.1 and increase; applying [F5] to $\mathbf1_F(z)\sum_{n=1}^N K_B(z,(E_n)_z)$ and [F6] to each finite sum gives $\nu_F(\bigcup_nE_n)=\lim_N\sum_{n=1}^N\nu_F(E_n)=\sum_n\nu_F(E_n)$. [F1, F5, F6, step 2.1]

2.3 For a coordinate rectangle $E=A\times C$, the density event identity [F1] gives $\pi(E\cap p_{-B}^{-1}(F))=\pi(A\times(C\cap F))=\int_{C\cap F}K_B(z,A)\,\pi_{-B}(dz)=\nu_F(E)$. The coordinate rectangles form a generating pi-system and include the whole space. The two finite measures agree on that system and have the common finite total mass $\pi_{-B}(F)$, so the constant sequence consisting of the whole space is a finite-measure exhaustion in [F3]. Measure uniqueness yields $\pi(E\cap p_{-B}^{-1}(F))=\nu_F(E)$ for every product-measurable $E$. Since $F$ was arbitrary, [F2] holds for the displayed kernel. The kernel/event construction itself uses no AC; the optional conditional-expectation-class convention is not invoked. [F1, F2, F3, step 2.1, step 2.2] ∎


## Remarks

The sets where $m=0$ or $m=\infty$ are not normalized by a quotient. The supplied filler handles them pointwise, and the formula asserts no density-based conditional value on those marginal-null fibres.

