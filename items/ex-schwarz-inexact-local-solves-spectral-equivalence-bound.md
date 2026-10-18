---
id: ex-schwarz-inexact-local-solves-spectral-equivalence-bound
kind: example
title: "Inexact local solves enter through spectral-equivalence constants"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-additive-schwarz-stable-decomposition-condition-number
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1, pp. 585–592: subspace correction,
        point-Jacobi splitting, and additive condition estimates."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §§3.2–3.4, pp. 41–50: overlapping local spaces and
        coarse-grid correction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Take $A=I_2$ and the two coordinate subspaces. Exact local matrices are
$A_1=A_2=1$, so the exact preconditioner is $B=I_2$ and its condition number
is $1$. Choose inexact local matrices
$\widetilde A_1=4$ and $\widetilde A_2=1/2$. They satisfy
$\frac14 A_i\preceq\widetilde A_i\preceq4A_i$, while
$\widetilde B=\operatorname{diag}(1/4,2)$ and
$\kappa_A(\widetilde BA)=8$. The theorem's bound is
$(\beta/\alpha)C_0C_1=16$.

## Facts & Assumptions

**Given:** $A=I_2$, $V_i=\operatorname{span}\{e_i\}$ for $i=1,2$, and the
inexact local matrices above.

[F1] The additive Schwarz theorem gives
$\kappa_A(\widetilde BA)\le(\beta/\alpha)C_0C_1$ under
$\alpha A_i\preceq\widetilde A_i\preceq\beta A_i$
([[thm-additive-schwarz-stable-decomposition-condition-number]]).

[F2] The Schwarz definition gives
$B=\sum_iR_iA_i^{-1}R_i^{\mathsf T}$ and
$\widetilde B=\sum_iR_i\widetilde A_i^{-1}R_i^{\mathsf T}$
([[def-overlapping-schwarz-subspace-correction-data]]).

## Verification

1.1 The coordinate decomposition is stable with $C_0=1$, and its synthesis bound is $C_1=1$ because $\|z_1e_1+z_2e_2\|_2^2=z_1^2+z_2^2$. Exact local matrices equal $1$, so [F2] gives $B=I_2$ and condition number $1$. [F2, given, algebra]

1.2 The inexact local inverses are $1/4$ and $2$, so [F2] gives $\widetilde B=\operatorname{diag}(1/4,2)$. Its eigenvalues are $1/4$ and $2$, hence $\kappa_A(\widetilde BA)=8$. The choices $\alpha=1/4$ and $\beta=4$ satisfy the local order bounds. [F2, given, algebra]

2.1 Substitution of $C_0=C_1=1$, $\alpha=1/4$, and $\beta=4$ into [F1] gives the rigorous upper bound $16$, which contains the directly computed value $8$. [F1, step 1.1, step 1.2, algebra] ∎
