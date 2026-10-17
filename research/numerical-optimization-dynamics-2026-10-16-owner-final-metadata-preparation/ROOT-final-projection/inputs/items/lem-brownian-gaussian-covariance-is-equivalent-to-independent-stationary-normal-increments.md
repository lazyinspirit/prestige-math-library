---
id: lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments
kind: lemma
title: "Brownian covariance is equivalent to independent stationary normal increments"
status: published
origin: pipeline
deps: [def-gaussian-process, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, lem-characteristic-function-of-a-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-uniqueness-of-a-law-from-its-characteristic-function, thm-factorization-of-expectations-for-independent-variables, thm-rectangle-criterion-for-independent-random-elements, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Sections 6.1-6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Nobuaki Yoshida, Probability Theory, Lemma 6.1.3"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X=(X_t)_{t\ge0}$ be a real process with
$X_0=0$ almost surely. The following are equivalent:

1. $X$ is a centered Gaussian process with
   $\operatorname{Cov}(X_s,X_t)=\min(s,t)$ for all $s,t\ge0$.
2. For every finite list $0=t_0<t_1<\cdots<t_n$, the increments
   $X_{t_j}-X_{t_{j-1}}$, $1\le j\le n$, are mutually independent and have
   laws $N(0,t_j-t_{j-1})$.

## Facts & Assumptions

**Given:** AC, a real process $X$ with $X_0=0$ almost surely, and either condition 1 or condition 2.

[F1] Finite evaluation vectors of a Gaussian process are possibly singular multivariate normal, and every finite linear combination is normal. [[def-gaussian-process]]

[F2] Under AC, $N_n(m,\Sigma)$ exists for every positive semidefinite $\Sigma$ and has a realization $m+\Sigma^{1/2}Z$ with independent standard normal coordinates. [[def-multivariate-normal-law]]

[F3] Under AC, the characteristic function of $N_n(m,\Sigma)$ is $u\mapsto\exp(iu\cdot m-u^T\Sigma u/2)$ and uniquely determines the vector law. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F4] A scalar $N(m,\sigma^2)$ law has characteristic function $u\mapsto\exp(imu-\sigma^2u^2/2)$, including $\sigma=0$. [[lem-characteristic-function-of-a-normal-law]]

[F5] Characteristic functions respect affine maps and multiply for finite sums of mutually independent real random variables. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[F6] Under AC, equality of scalar characteristic functions determines the law. [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F7] Mutual independence is the finite measurable-rectangle factorization property and hence depends only on the joint law. [[thm-rectangle-criterion-for-independent-random-elements]]

[F8] Products of integrable functions of independent random variables factor in expectation. [[thm-factorization-of-expectations-for-independent-variables]]

## Proof

**Proof technique:** direct.

1.1 Assume condition 1 and fix $0=t_0<t_1<\cdots<t_n$. By [F1], the increment vector $\Delta=(X_{t_j}-X_{t_{j-1}})_{j=1}^n$ is multivariate normal. It is centered, and $$\operatorname{Var}(\Delta_j)=t_j-t_{j-1}.$$ If $i<j$, expanding the four covariance terms and using $t_{i-1}<t_i\le t_{j-1}<t_j$ gives $$\operatorname{Cov}(\Delta_i,\Delta_j)=t_i-t_i-t_{i-1}+t_{i-1}=0.$$ Thus $\Delta\sim N_n(0,D)$ for $D=\operatorname{diag}(t_j-t_{j-1})$, by [F3]. [given, F1, F3, algebra]

1.2 Conversely assume condition 2. Given any finite time list, discard repetitions only for the construction and write its distinct positive values as $0=r_0<r_1<\cdots<r_k$. Put $\Delta_\ell=X_{r_\ell}-X_{r_{\ell-1}}$. Then condition 2 makes these independent with $\Delta_\ell\sim N(0,r_\ell-r_{\ell-1})$, and telescoping with $X_0=0$ gives $X_t=\sum_{\ell:r_\ell\le t}\Delta_\ell$ almost surely at every time in the original list. [given]

2.1 By [F2], $N_n(0,D)$ is also the joint law of the vector $(\sqrt{t_j-t_{j-1}}Z_j)_{j=1}^n$ with independent standard normals $Z_j$. The joint-law identity in step 1.1 transfers every measurable-rectangle probability, so [F7] makes the $\Delta_j$ mutually independent; their one-coordinate laws are $N(0,t_j-t_{j-1})$. For $n=0$ this is the vacuous empty family. Hence condition 2 holds. [step 1.1, F2, F7]

2.2 For coefficients $a_1,\ldots,a_m$ attached to the original time list, step 1.2 rewrites $$\sum_{j=1}^m a_jX_{t_j}=\sum_{\ell=1}^k b_\ell\Delta_\ell,\qquad b_\ell=\sum_{j:r_\ell\le t_j}a_j.$$ By [F4]–[F5], its characteristic function is $$\prod_{\ell=1}^k\exp\!\left(-\tfrac12u^2b_\ell^2(r_\ell-r_{\ell-1})\right)=\exp\!\left(-\tfrac12u^2\sum_{\ell=1}^k b_\ell^2(r_\ell-r_{\ell-1})\right).$$ By [F4] and [F6], this is a centered normal law, including the empty sum and variance zero. Since the list and coefficients were arbitrary, [F1] makes $X$ a centered Gaussian process. [step 1.2, F1, F4, F5, F6, algebra]

3.1 For $0\le s\le t$, condition 2 decomposes $X_t=X_s+(X_t-X_s)$ into independent centered normal variables. Consequently [F8] gives $$E[X_sX_t]=E[X_s^2]+E[X_s]E[X_t-X_s]=s,$$ while both means are zero by step 2.2; symmetry gives $\operatorname{Cov}(X_s,X_t)=\min(s,t)$ for every order of $s,t$. The cases $s=0$, $s=t$, and $t=0$ follow from the same formula and $X_0=0$ almost surely. Thus condition 1 holds. AC is used exactly in [F1]–[F4] and [F6], for the library's normal-law constructions and characteristic-function uniqueness; no path regularity is asserted. [step 1.2, step 2.2, F4, F7, F8, algebra] ∎

## Source notes

Yoshida's Lemma 6.1.3, printed pp. 173–174, proves both directions, including Gaussianity from independent normal increments. Sousi, Sections 6.1–6.2, uses the same characterization. The reverse direction here is stated for an arbitrary process, repairing the scaffold's circular assumption that the process was already Gaussian.
