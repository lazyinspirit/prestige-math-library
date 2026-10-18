---
id: thm-sda-convergence-and-eventual-quadratic-envelope
kind: theorem
title: "DARE structure-preserving doubling converges with a quantified quadratic
  error envelope"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - lem-sda-doubling-composition-and-psd-invariants
  - thm-dare-stabilizing-psd-solution-and-value
  - lem-powers-of-a-schur-stable-matrix-decay
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
  precheck: pass
---

## Statement

Under the discrete stabilizability and detectability hypotheses of [[thm-dare-stabilizing-psd-solution-and-value]], start the exact recurrence of [[alg-finite-budget-structure-preserving-doubling-for-dare]] from $A_0=A$, $G_0=BR^{-1}B^*$, and $H_0=Q$. Then all inverses exist, $G_j,H_j\succeq0$, and $H_j$ converges to the stabilizing DARE solution $X_*$. More quantitatively, there are $q\in(0,1)$, an index $j_0$, and $C>0$ such that
$$\|H_j-X_*\|_{F,W^{-1}}\le Cq^{2^{j+1}}\qquad(j\ge j_0),$$
where $W\succ0$ is a Stein witness constructed from the closed-loop matrix. The envelope $\epsilon_j=Cq^{2^{j+1}}$ obeys $\epsilon_{j+1}=\epsilon_j^2/C$. The constants are conditional on the closed-loop spectral separation and its norm conditioning; no uniform constant depending only on dimension is asserted.

## Facts & Assumptions

**Given:** The standard DARE data and the exact discrete stabilizability/detectability hypotheses.

[F1] [[thm-dare-stabilizing-psd-solution-and-value]]: the finite-horizon iterates $P_0=0$, $P_{k+1}=f(P_k)$ increase to $X_*$, and $A_c(X_*)$ is Schur stable.

[F2] [[lem-sda-doubling-composition-and-psd-invariants]]: the recurrence is well-defined, preserves $G_j,H_j\succeq0$, and $H_j=f^{2^j}(0)$.

[F3] [[lem-powers-of-a-schur-stable-matrix-decay]]: powers of every Schur-stable matrix have a geometric bound with any rate above its spectral radius.

[F4] [[thm-non-negative-square-root-exists-and-is-unique]]: a positive-semidefinite matrix has a positive-semidefinite square root; for $W\succ0$ this square root is positive definite.

[F5] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: compatible matrix products satisfy the induced Frobenius/operator norm bounds.

## Proof

1.1 By [F2], $H_j=P_{2^j}$ and $G_j,H_j$ remain positive semidefinite. Since [F1] gives $P_k\to X_*$, the subsequence $H_j=P_{2^j}$ also converges to $X_*$. No inverse of $A$ is used. [F1, F2, algebra]

1.2 Put $M=A_c(X_*)$. By [F1], $M$ is Schur stable; [F3] therefore makes $W=\sum_{k=0}^{\infty}(M^*)^kM^k$ converge in norm. It is positive definite, $W\succeq I$, and $M^*WM=W-I$. If $w=\|W\|_2$, then $v^*M^*WMv\le(1-w^{-1})v^*Wv$, so the induced $W$-norm $\|M\|_W:=\|W^{1/2}MW^{-1/2}\|_2$ is at most $q_0=\sqrt{1-w^{-1}}<1$. Choose $q$ with $q_0<q<1$. Since $P_k\to X_*$ and $A_c(P_k)$ is continuous on $P_k\succeq0$, choose $k_0$ so $\|A_c(P_k)\|_W\le q$ for all $k\ge k_0$. [F1, F3, F4, algebra]

2.1 Let $E_k=X_*-P_k\succeq0$. The Riccati-map difference identity in [F1] gives $E_{k+1}=M^*E_kA_c(P_k).$ Define $\|E\|_{F,W^{-1}}=\|W^{-1/2}EW^{-1/2}\|_F$. By [F5], for $k\ge k_0$, $\|E_{k+1}\|_{F,W^{-1}}\le\|M\|_W\|A_c(P_k)\|_W\|E_k\|_{F,W^{-1}}\le q^2\|E_k\|_{F,W^{-1}}.$ Iteration gives $\|E_k\|_{F,W^{-1}}\le\|E_{k_0}\|_{F,W^{-1}}q^{2(k-k_0)}$. Taking $k=2^j$ and setting $C=\max\{1,\|E_{k_0}\|_{F,W^{-1}}q^{-2k_0}\}$ proves the displayed envelope for all $2^j\ge k_0$. Since $C>0$, direct calculation gives $\epsilon_{j+1}=Cq^{2^{j+2}}=\epsilon_j^2/C$. [F1, F5, step 1.2, algebra, induction] ∎
