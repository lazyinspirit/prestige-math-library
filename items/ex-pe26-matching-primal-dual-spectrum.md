---
id: ex-pe26-matching-primal-dual-spectrum
kind: example
title: A finite-dimensional BDDC/FETI-DP spectral match
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-pe26-scaled-averaging-and-bddc-preconditioner, def-pe26-feti-dp-dual-system-and-preconditioner, lem-pe26-complementary-primal-dual-spectrum, thm-pe26-nontrivial-spectrum-bddc-feti-dp]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all matrices are explicit real 2 by 2 matrices."
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §§3–4"
      url: "https://arxiv.org/pdf/0708.4031"
---

## Example

Let $\widetilde W=\mathbb R^2$, $\widetilde S=A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, $\widehat W=\operatorname{span}(e_1)$, $R=e_1$, $E_0=(1\;0)$, $B=(0\;1)$, and $B_D^T=e_2$. Then $E_0R=1$, $BB_D^T=1$, and $R E_0+B_D^TB=I$. The single BDDC and FETI-DP preconditioned eigenvalues both equal $4/3$.

## Facts & Assumptions

**Given:** The matrices and maps in the Example; the BDDC operator is $(E_0A^{-1}E_0^T)(R^TAR)$ and the FETI-DP operator is $(B_DAB_D^T)(BA^{-1}B^T)$.

[F1] [[def-pe26-scaled-averaging-and-bddc-preconditioner]]: the BDDC preconditioned operator is formed from $E_0$, $R$ and the partially assembled energy.

[F2] [[def-pe26-feti-dp-dual-system-and-preconditioner]]: the dual operator and preconditioner use $B$ and its scaled right inverse $B_D^T$.

[F3] [[thm-pe26-nontrivial-spectrum-bddc-feti-dp]]: the two methods have matching positive nonunit eigenvalues.

## Verification

1.1 The determinant of $A$ is $3$, so $A^{-1}=\tfrac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$. The BDDC coarse operator is $R^TAR=2$, while $E_0A^{-1}E_0^T=2/3$; their product is $4/3$. [given, F1, algebra]

1.2 The dual operator is $BA^{-1}B^T=2/3$, and its preconditioner is $B_DAB_D^T=2$; their product is also $4/3$. Direct multiplication gives the three identities in the Example, so the abstract assumptions hold. [given, F2, algebra]

2.1 Both operators are one-dimensional, hence each has the single eigenvalue computed in steps 1.1 and 1.2. The common value is positive and different from $1$, consistent with [F3]. [given, F3, step 1.1, step 1.2] ∎
