---
id: thm-fletcher-reeves-liminf-gradient-under-strong-wolfe
kind: theorem
title: "Fletcher–Reeves has vanishing gradient liminf under strong Wolfe"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - lem-fr-descent-and-direction-growth-bound
  - def-wolfe-and-strong-wolfe-conditions
  - thm-zoutendijk-summability-for-wolfe-steps
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.2, Theorem 3.2, and Chapter 5 §5.2, Theorem 5.7 and complete proof, printed pp. 38–40 and 127–130."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§2, Theorem 2.1, and §3, Lemma 3.1 and Theorem 3.2, printed pp. 23–27. The local proof below avoids the source's bounded-level-set hypothesis."
---

## Statement

Let $D\subseteq\mathbb R^n$ be open, $f:D\to\mathbb R$ be $C^1$, and $x_0\in D$. Let $L_0=\{x\in D:f(x)\le f(x_0)\}$, and suppose $f$ is bounded below on $L_0$. Suppose an open set $N\subseteq D$ contains every trial segment $x_k+[0,t_k]d_k$ and, for one $L>0$,
$$ \|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2\qquad(u,v\in N). $$
Consider an infinite sequence following the FR recurrence
$d_0=-g_0$, $d_k=-g_k+(\|g_k\|_2^2/\|g_{k-1}\|_2^2)d_{k-1}$
from [[alg-nonlinear-conjugate-gradient-methods]], with $g_k=\nabla f(x_k)\ne0$, feasible updates $x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step for constants $0<c_1<c_2<1/2$. Then
$$ \liminf_{k\to\infty}\|g_k\|_2=0. $$
This is a theorem about the infinite recurrence and successful updates, not
an infinite execution of the finite-$K$ algorithm. The conclusion is a liminf statement; it does not assert $\|g_k\|_2\to0$.

## Facts & Assumptions

**Given:** The domain, objective, lower bound, uniform Lipschitz-gradient neighborhood, FR recurrence, and successful strong Wolfe steps in the Statement.

[F1] [[lem-fr-descent-and-direction-growth-bound]]: with $\delta=(1-2c_2)/(1-c_2)$ and $C_3=(1+c_2)/(1-c_2)$, $q_k=-g_k^Td_k/\|g_k\|_2^2$ satisfies $q_k\ge\delta>0$ and $\|d_k\|_2^2\le C_3\|g_k\|_2^4\sum_{j=0}^k\|g_j\|_2^{-2}$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: every strong Wolfe step is a Wolfe step.

[F3] [[thm-zoutendijk-summability-for-wolfe-steps]]: under the stated lower-bound, smoothness, feasibility, descent, and Wolfe hypotheses, $\sum_{k\ge0}\cos^2\theta_k\|g_k\|_2^2<\infty$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 By [F1], every $d_k$ is a strict descent direction. By [F2], the accepted strong Wolfe steps are Wolfe steps. The hypotheses therefore match [F3], so $\sum_{k=0}^\infty\cos^2\theta_k\|g_k\|_2^2<\infty.$ [given, F1, F2, F3]

1.2 Suppose instead that $\liminf_k\|g_k\|_2>0$. Choose $\gamma>0$ and an integer $K\ge1$ such that $\|g_j\|_2\ge\gamma$ for every $j\ge K$. Then for $k\ge K$, $S_k:=\sum_{j=0}^k\frac1{\|g_j\|_2^2} \le k\left(\sum_{j=0}^{K-1}\frac1{\|g_j\|_2^2}+\gamma^{-2}\right)=:A_0k,$ where $A_0>0$. [given, choose, algebra]

2.1 From [F1], $\|d_k\|_2^2\le C_3A_0k\|g_k\|_2^4$. Since $q_k=-g_k^Td_k/\|g_k\|_2^2$ and $\cos\theta_k=-g_k^Td_k/(\|g_k\|_2\|d_k\|_2)$, $\cos^2\theta_k\|g_k\|_2^2 =\frac{(g_k^Td_k)^2}{\|d_k\|_2^2} =\frac{q_k^2\|g_k\|_2^4}{\|d_k\|_2^2} \ge\frac{\delta^2}{C_3A_0k}.$ The harmonic series diverges, contradicting step 1.1. Thus the supposition is false and $\liminf_k\|g_k\|_2=0$. [F1, step 1.1, step 1.2, algebra, contradiction] ∎

## Remarks

The source proofs use bounded initial level sets to obtain bounded gradients. The argument here does not: the local direction-growth estimate in [F1] is normalized by the current gradient and leads directly to the harmonic contradiction under the hypotheses stated above.
