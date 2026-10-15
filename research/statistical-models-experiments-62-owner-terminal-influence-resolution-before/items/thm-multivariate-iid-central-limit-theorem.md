---
id: thm-multivariate-iid-central-limit-theorem
kind: theorem
title: Multivariate iid central limit theorem
deps: ["thm-lindeberg-levy-iid-central-limit-theorem", "def-multivariate-normal-law", "thm-cramer-wold-device", "thm-nonnegative-integral-zero-iff-zero-almost-everywhere", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-cauchy-schwarz-and-the-euclidean-norm", "thm-continuous-mapping-theorem", "def-moments-variance-and-covariance", "def-convergence-in-distribution-of-random-elements", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Theorem 3.10.7'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Theorem 8.4
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC and let $d\ge1$ be a finite integer. Let $(X_k)_{k\ge1}$ be iid $\mathbb R^d$-valued random vectors with $\mathbb E\|X_1\|^2<\infty$, mean m and covariance Sigma. Then $$n^{-1/2}\sum_{k=1}^n(X_k-m)\Rightarrow N_d(0,\Sigma).$$ The covariance may be singular.

## Facts & Assumptions

[F1] The scalar iid CLT applies in each positive-variance projection. [[thm-lindeberg-levy-iid-central-limit-theorem]].

[F2] The Gaussian target with a positive semidefinite covariance exists, including singular covariance. [[def-multivariate-normal-law]].

[F3] Convergence of every projection to those of a specified Borel probability implies vector weak convergence. [[thm-cramer-wold-device]].

[F4] A nonnegative measurable function of integral zero vanishes almost everywhere. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]].

[F5] Finite means and covariance expansions obey linearity. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F6] The Euclidean Cauchy–Schwarz inequality bounds a projection by the vector norm. [[thm-cauchy-schwarz-and-the-euclidean-norm]].

[F7] Continuous scalar scaling preserves convergence in distribution. [[thm-continuous-mapping-theorem]].

## Proof

**Given:** Assume AC and let $d\ge1$ be a finite integer. Let $(X_k)_{k\ge1}$ be iid $\mathbb R^d$-valued random vectors with $\mathbb E\|X_1\|^2<\infty$, mean m and covariance Sigma. Then $$n^{-1/2}\sum_{k=1}^n(X_k-m)\Rightarrow N_d(0,\Sigma).$$ The covariance may be singular.

1.1 For each fixed $u\in\mathbb R^d$ set $Y_k=u\cdot(X_k-m)$. These are iid: inverse images under the continuous projection preserve the finite independence identities and the common law. By [F6], $|Y_k|^2\le\|u\|^2\|X_k-m\|^2$; the latter is integrable since $\|X_k-m\|^2\le2\|X_k\|^2+2\|m\|^2$. Each centered coordinate product is integrable by $2|ab|\le a^2+b^2$, and symmetry of these products gives $\Sigma_{ij}=\Sigma_{ji}$. Finite linearity gives $\mathbb EY_k=0$ and $\mathbb EY_k^2=u^T\Sigma u=:v\ge0$. Because this holds for every $u$, the symmetric matrix $\Sigma$ is positive semidefinite. Consequently [F2] supplies the target law $G=N_d(0,\Sigma)$. [F2, F5, F6]

2.1 If v>0, [F1] gives $(nv)^{-1/2}\sum_{k=1}^nY_k\Rightarrow N(0,1)$. Scaling by $\sqrt v$ is continuous; [F7] gives $n^{-1/2}\sum_kY_k\Rightarrow N(0,v)$, which is the u-projection of G by [F2]. If v=0, [F4] applied to $Y_k^2$ gives $Y_k=0$ almost surely for each k. For each fixed n the union of the finitely many exceptional null sets is null, so the projected row sum is zero almost surely and has exactly the law N(0,0). Thus the same projection convergence holds without dividing by v. [step 1.1, F1, F2, F4, F7]

3.1 The preceding convergence holds for every fixed u to the projections of the same specified probability G. [F3] therefore proves the vector conclusion. AC is inherited in the scalar CLT, Gaussian construction and Cramer–Wold theorem. A common null set across all u is neither claimed nor needed. When Sigma=0 all projections are in the zero-variance case. For d=1 this agrees with the scalar result after scaling. [step 2.1, F3] ∎
