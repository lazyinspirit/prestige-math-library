---
id: thm-pe26-nontrivial-spectrum-bddc-feti-dp
kind: theorem
title: BDDC and FETI-DP have matching nontrivial spectra
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-pe26-feti-dp-dual-system-and-preconditioner, def-pe26-scaled-averaging-and-bddc-preconditioner, lem-pe26-complementary-primal-dual-spectrum]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the comparison is finite-dimensional linear algebra."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §4"
      url: "https://arxiv.org/pdf/0708.4031"
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 90–93"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
---

## Statement

For BDDC and FETI-DP built from the same positive definite partially assembled Schur operator, primal constraints, and scaled averaging, all eigenvalues of the two preconditioned operators other than $1$ agree with multiplicity. With the multiplier space fixed as $\Lambda=\operatorname{range}B$, neither operator has a zero eigenvalue; retaining all redundant row coordinates instead would add only multiplier null modes that are removed by this convention. The multiplicity of $1$ is not asserted to agree.

## Facts & Assumptions

**Given:** A positive definite partial Schur operator, a conforming trace subspace, a primal projection, and a jump map with multiplier space $\operatorname{range}B$.

[F1] [[def-pe26-scaled-averaging-and-bddc-preconditioner]]: $E_0R=I_{\widehat W}$ and $R E_0$ is the BDDC projection.

[F2] [[def-pe26-feti-dp-dual-system-and-preconditioner]]: $BB_D^T=I_\Lambda$ and $B_D^TB+R E_0=I_{\widetilde W}$.

[F3] [[lem-pe26-complementary-primal-dual-spectrum]]: if $L_iT_i=I$ and $T_1L_1+T_2L_2=I$, the associated abstract products have matching nonunit eigenvalues with multiplicity.

## Proof

1.1 Take $V=\widetilde W$, $U_1=\widehat W$, $U_2=\Lambda$, $A=\widetilde S$, $L_1=E_0$, $T_1=R$, $L_2=B$, and $T_2=B_D^T$. By [F1] and [F2], $L_iT_i=I$ and $T_1L_1+T_2L_2=I$. The first abstract product in [F3] is $(E_0\widetilde S^{-1}E_0^T)(R^T\widetilde S R)$, exactly the BDDC preconditioned operator by [F1]; the second is $(B_D\widetilde S B_D^T)(B\widetilde S^{-1}B^T)$, exactly the FETI-DP product by [F2]. [given, F1, F2, F3, algebra]

2.1 Apply [F3] to conclude equal eigenvalues and multiplicities for every eigenvalue other than $1$. The identities $E_0R=I$ and $BB_D^T=I$ make $R$ and $B_D^T$ injective and $E_0$ and $B$ surjective onto their ranges; since $\widetilde S$ is positive definite, the four Gram operators in the two products are positive definite on their respective spaces. Thus both preconditioned products have positive eigenvalues. Taking $\Lambda=\operatorname{range}B$ removes redundant multiplier null modes. No step determines the multiplicity of eigenvalue $1$. [given, F1, F2, F3, step 1.1, algebra] ∎
