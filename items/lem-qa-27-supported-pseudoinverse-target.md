---
id: lem-qa-27-supported-pseudoinverse-target
kind: lemma
title: "Normalization and nonzero success weight of the supported pseudoinverse target"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-27-block-encoded-qlsp
  - def-qa-26-qlsp-task
  - thm-singular-value-decomposition
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the sums are finite and the argument uses the supplied singular decomposition."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: "https://arxiv.org/pdf/0811.3171"
      locator: "Appendix A, §§A1–A3, PDF pp.5–11."
---

## Statement

In the block-encoded QLSP model, let $|b\rangle$ be the normalized codomain input, let $\|A\|_{\rm op}\le\alpha$, and suppose $|b\rangle=\sum_{j=1}^r\beta_j|u_j\rangle$ is supported on positive singular values $\sigma_j\ge\gamma>0$. Then
$$\frac{(\delta/2)\bar A^+|b\rangle}{\|(\delta/2)\bar A^+|b\rangle\|}=\frac{A^+|b\rangle}{\|A^+|b\rangle\|},\qquad \left\|(\delta/2)\bar A^+|b\rangle\right\|^2\ge\frac{\delta^2}{4},\qquad \delta=\gamma/\alpha,\quad\bar A=A/\alpha.$$
In particular the ideal inverse-branch success probability is positive and has the stated crude lower bound.

## Facts & Assumptions

**Given:** The finite-dimensional map and singular-gap promise of [[def-qa-27-block-encoded-qlsp]], with $\|b\|=1$.

[F1] [[thm-singular-value-decomposition]]: there are orthonormal singular vectors $u_j,v_j$ and positive singular values $\sigma_j$ with $A v_j=\sigma_j u_j$ on the supported singular subspace.

[F2] [[def-qa-26-qlsp-task]]: the normalized input has $b\ne0$, $b\in\operatorname{ran}A$, and every nonzero supported singular coefficient has $\sigma_j\ge\gamma$.

[F3] [[def-moore-penrose-pseudoinverse]]: $B=A^+$ exactly when $ABA=A$, $BAB=B$, and $AB,BA$ are self-adjoint.

[F4] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: the matrix satisfying the four Penrose equations exists and is unique.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero finite-dimensional domain, $\|A\|_{\rm op}$ is the maximum of $\|Av\|$ over unit vectors $v$.

## Proof

1.1 By [F1], in ordered orthonormal singular bases write $A=U\Sigma V^*$ with positive diagonal entries $\sigma_1,\ldots,\sigma_r$. Define $B=V\Sigma^+U^*$ by replacing each positive $\sigma_j$ with $1/\sigma_j$ and leaving zeros zero. Direct multiplication gives $ABA=A$, $BAB=B$, $AB=U\operatorname{diag}(I_r,0)U^*$ and $BA=V\operatorname{diag}(I_r,0)V^*$, both self-adjoint. Thus [F3] makes $B$ a Moore–Penrose inverse, and [F4] gives $B=A^+=\sum_j\sigma_j^{-1}|v_j\rangle\langle u_j|$. [given, F1, F3, F4, construct, algebra]

2.1 Since $b$ is normalized and its coefficients in the orthonormal singular vectors are $\beta_j$, $\sum_j|\beta_j|^2=1$. Each $v_j$ is a unit vector and $Av_j=\sigma_j u_j$, so [F1] and [F5] give $\sigma_j=\|Av_j\|\le\|A\|_{\rm op}\le\alpha$. Step 1.1 therefore yields $\|A^+b\|^2=\sum_j|\beta_j|^2/\sigma_j^2\ge\alpha^{-2}>0$. Thus its normalized state is defined. [given, F1, F2, F5, step 1.1, algebra]

2.2 The singular values of $\bar A=A/\alpha$ are $\sigma_j/\alpha$ with the same left and right vectors. Repeating the construction in step 1.1 gives $(A/\alpha)^+=\alpha A^+$ because $\alpha>0$. Hence $(\delta/2)\bar A^+b=(\gamma/2)A^+b$, and multiplication by the positive scalar $\gamma/2$ preserves the normalized vector. [given, F1, step 1.1, algebra]

3.1 By [F2], coefficients outside the supported positive singular subspace vanish. By [F1] and [F5], each unit right singular vector satisfies $\sigma_j=\|Av_j\|\le\|A\|_{\rm op}\le\alpha$. Since $\delta=\gamma/\alpha$, step 2.2 gives $\| (\delta/2)\bar A^+b\|^2=\sum_{j=1}^r|\beta_j|^2(\gamma/(2\sigma_j))^2\ge\sum_{j=1}^r|\beta_j|^2\gamma^2/(4\alpha^2)=\delta^2/4$. This is the ideal QSVT flag weight; any implementation error requires a separate error budget. [given, F1, F2, F5, step 2.2, algebra] ∎
