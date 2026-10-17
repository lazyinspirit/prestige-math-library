---
id: ex-clustered-vibration-modes-with-block-lobpcg
kind: example
title: "A two-vector LOBPCG block resolves a clustered pair in one finite Rayleigh-Ritz update"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-block-lobpcg-with-rank-loss-status
  - lem-generalized-ritz-values-monotone-under-nested-subspaces
  - lem-block-principal-angle-squared-ritz-enclosure
  - thm-lobpcg-selected-ritz-values-do-not-increase
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §13.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "Andrew Knyazev, Recent implementations, applications, and extensions of LOBPCG, §1"
      url: "https://arxiv.org/pdf/1708.08354"
---

## Example

Consider the mass-normalized vibration matrix
$A=\operatorname{diag}(1,101/100,5,9)$ with $B=I$ and preconditioner $T=I$.
The two wanted lowest modes are close, while the next mode is separated. Run
the width-$q=2$ algorithm with residual tolerance $\tau=0$ and budget
$N_{\max}=1$. Start with the orthonormal block
$$x_1=(\sqrt{99}e_1+e_3)/10,\qquad x_2=(\sqrt{99}e_2+e_4)/10.$$

## Verification

**Given:** The matrix, metric, preconditioner, and two starting vectors above.

[F1] [[alg-block-lobpcg-with-rank-loss-status]]: LOBPCG forms $R=AX-BX\Theta$, $W=TR$, uses the trial span of $X,W,D$, and selects its q smallest Ritz values after Rayleigh-Ritz.

[F2] [[thm-lobpcg-selected-ritz-values-do-not-increase]]: on a successful update retaining $X$, each selected Ritz value cannot increase.

[F3] [[lem-block-principal-angle-squared-ritz-enclosure]]: if the first q generalized eigenvalues are separated and $\sin\vartheta$ is the maximum principal angle, then $\theta_q(S)\le\lambda_q+(\lambda_n-\lambda_q)\sin^2\vartheta$.

1.1 The vectors are orthonormal and have disjoint coordinate supports. Their initial Rayleigh quotients are $\theta_1=(99+5)/100=26/25$ and $\theta_2=((101/100)99+9)/100=10899/10000$. Each $x_i$ has two nonzero coordinates associated with distinct diagonal entries of $A$, so $r_i=(A-\theta_iI)x_i\ne0$; also $x_i^*r_i=x_i^*Ax_i-\theta_i x_i^*x_i=0$, and $r_i$ lies in the same two-coordinate plane as $x_i$. Thus $x_i,r_i$ are independent in that plane, and the disjoint planes make $[X,R]$ rank four. [given, F1, algebra]

2.1 Since $T=I$, $W=R$ and the first trial space is all of $\mathbb C^4$. Its Rayleigh-Ritz values are exactly $1,101/100,5,9$, and the selected block is $\operatorname{span}(e_1,e_2)$. The update is successful because the trial rank is four; the returned residuals are zero, so the algorithm returns converged. In particular, $1\le26/25$ and $101/100\le10899/10000$, as required by [F2]. [given, F1, F2, step 1.1, algebra]

3.1 For $U=\operatorname{span}(e_1,e_2)$, every unit vector in $S=\operatorname{span}(x_1,x_2)$ has squared norm $1/100$ in $U^\perp$, so $\sin^2\vartheta=1/100$. The strict gap $101/100<5$ holds, and [F3] gives $\theta_2(S)\le101/100+(9-101/100)/100=10899/10000$, attained by the computed $\theta_2$. The block captures both clustered modes; a one-dimensional trial space cannot contain this two-dimensional invariant subspace. [given, F3, step 1.1, algebra] ∎
