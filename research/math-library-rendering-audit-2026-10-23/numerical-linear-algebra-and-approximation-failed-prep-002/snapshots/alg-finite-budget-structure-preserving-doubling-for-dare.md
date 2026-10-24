---
id: alg-finite-budget-structure-preserving-doubling-for-dare
kind: algorithm
title: "Finite-budget structure-preserving doubling iteration for the DARE"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-point-verified-linear-system-certifier
  - thm-point-verified-linear-system-certifier-soundness
justified_by:
  - lem-riccati-finite-budget-wrappers-return-a-status
  - lem-sda-doubling-composition-and-psd-invariants
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.2, DARE structure-preserving doubling formulas and subspace
        iteration"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§2, finite and infinite generalized eigenvalues"
verification:
  precheck: n/a
---

## Definition

Input $F\in\{\mathbb R,\mathbb C\}$, dimensions $n,m,p\ge1$, standard DARE data $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$, and $R\in F^{m\times m}$ with $R=R^*\succ0$, a nonnegative integer iteration budget $N$, and the operationwise arithmetic/range controller. In finite mode the stored input entries are exact dyadics; also supply stored dyadic inverse and solution proposals for every recurrence and residual solve. In exact mode set $G_0=BR^{-1}B^*$, $H_0=Q=C^*C$, and $A_0=A$, the standard DARE coefficients of [[def-standard-continuous-and-discrete-riccati-equations]].

For finite-mode initialization, first solve $RV=B^*$ by the exact complete-pivoting elimination rule below, using order $m$ and the $n$ right-hand sides of $B^*$ in place of $M_j$ and $I$. Perform this preprocessing in exact rational arithmetic on the dyadic inputs. Form $BV$ and $C^*C$ exactly, then round each real and imaginary component once to the declared stored format (nearest, with ties to even), obtaining stored $G_0$ and $H_0$; set stored $A_0=A$. A zero pivot returns `inverse-inconclusive`; a component outside the controller's admitted range returns `range-failure`. On an initialization failure return the inputs, zero completed updates, any formed initial matrices and solve data, and unavailable for every unformed matrix or diagnostic. The finite-mode notation $G_0,H_0$ denotes these rounded matrices, not an assertion that $BR^{-1}B^*$ is dyadic. Record $V$ and the initialization rounding differences separately. This exact rational preprocessing has no asserted bit-cost bound and adds no point-certifier calls.

In exact mode, for each $j=0,\ldots,N-1$, form $M_j=I+G_jH_j$ and solve $M_jW_j=I$ by Gaussian elimination with complete pivoting: at stage $k$, scan the remaining submatrix, choose a nonzero entry of largest exact modulus with lexicographic tie-breaking, swap its row and column into pivot position, eliminate below it, and back-substitute for all columns of $I$, undoing the accumulated column permutation in the solution. If the remaining submatrix is exactly zero before all pivots, return `inverse-inconclusive`. This is a finite exact-arithmetic procedure; no bit-complexity bound is asserted.

In finite arithmetic, form the stored dyadic matrix $\widehat M_j=\operatorname{fl}(I+G_jH_j)$. For each standard basis vector $e_k$, call [[alg-point-verified-linear-system-certifier]] with $(\widehat M_j,e_k,R_j,\widehat w_{j,k})$, using the supplied stored dyadic inverse and solution proposals. Assemble the returned solution centers as $\widehat W_j$. If any call returns `range-failure`, return `range-failure`; if any call is `inconclusive`, return `inverse-inconclusive`; otherwise apply the recurrence updates below using $\widehat W_j$ and the declared operationwise arithmetic. The point certifier's solution balls are diagnostics for the stored solve and do not make the rounded recurrence an exact PSD-preserving recurrence.

In exact mode let $W_j$ be the exact solve result; in finite mode let $W_j=\widehat W_j$. The recurrence formulas are
$$
A_{j+1}=A_jW_jA_j,\qquad G_{j+1}=G_j+A_jW_jG_jA_j^*,\qquad H_{j+1}=H_j+A_j^*H_jW_jA_j.
$$
These formulas use no inverse of $A_j$. Any range failure while forming a stored matrix or applying an update returns `range-failure` with the current raw matrices.

After successful initialization, if all $N$ updates finish without a recurrence failure, return `budget-exhausted` with $N$ completed updates, including when $N=0$. This status records only completion of the prescribed budget; the diagnostics below remain required.

At initialization and after each update, preserve the raw matrices and report $\|G_j-G_j^*\|_F$ and $\|H_j-H_j^*\|_F$. To report the standard DARE residual, form $S_j=R+B^*H_jB$ exactly from the current $H_j$ and original input entries. In exact mode, $S_j$ need not be dyadic: independently solve $S_jV_j=I$ by the same exact elimination rule, using order $m$, and evaluate the residual from [[def-standard-continuous-and-discrete-riccati-equations]] exactly using $V_j$. In finite mode, $S_j$ is dyadic because the original inputs and current stored $H_j$ are dyadic; apply the point-certified solve rule to its $m$ columns with the separate residual proposal packet, and outward-evaluate the residual over the certified solution balls. If the residual solve or evaluation is unavailable or inconclusive, mark the residual unavailable without changing the recurrence status. Symmetrization may be used only to form a candidate and must be followed by fresh residual and positivity checks. On every exit return the current raw matrices, status, completed updates, symmetry defects, and available residual and solve certificates. No exact positive-semidefinite or structure-preserving backward-error claim is made from a rounded recurrence alone.

