---
id: thm-half-order-product-integration-fredholm-error
kind: theorem
title: Fredholm error bound for half-order product integration
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-half-order-product-integration
  - lem-half-order-product-integration-stability-and-consistency
  - thm-collectively-compact-operator-stability-and-error
  - lem-finite-node-equation-reconstruction-equivalence
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - thm-heine-borel-rn
  - ex-c-of-a-compact-space-is-banach
  - def-continuous-real-functions-on-a-compact-metric-space
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the compactness and Fredholm alternatives used for
  eventual discrete invertibility. The scalar singular weights and the O(h^2)
  interpolation residual are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Theorem 3.18, Theorem 3.19, and Corollary 3.20, printed pp. 62–64; the
        singular product weights are proved locally."
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2; the local item gives the
        specific diagonal-kernel limit and error bound."
verification:
  precheck: pass
---

## Statement

Assume AC. Let $a:[0,1]^2\to\mathbb R$ be continuous, let $K,K_n$ be the
half-order product-integration operators of
[[def-half-order-product-integration]], and suppose $I-K$ is injective. Let
$u$ solve $(I-K)u=f$, and assume each $g_x(y):=a(x,y)u(y)$ extends to a $C^2$
function on a neighborhood of $[0,1]$, with
$$M_2:=\sup_{x,y\in[0,1]}|\partial_y^2(a(x,y)u(y))|<\infty.$$
Then there are $n_0$ and $C<\infty$ such that for every $n\ge n_0$, the finite
Nyström grid matrix is nonsingular, its reconstructed solution $u_n$ exists,
and
$$\|u_n-u\|_\infty\le C\left(\|f_n-f\|_\infty+\frac{\sqrt2}{4}M_2h^2\right), \qquad h=1/n,$$
whenever $(I-K_n)u_n=f_n$. In particular, for the exact right-hand side
$f_n=f$, the solution error is $O(h^2)$ under the stated smoothness of the
regular factor times the exact solution.

## Facts & Assumptions

**Given:** AC, the continuous $a$, the operators $K,K_n$, an exact solution $u$, and the uniform second-derivative bound in the Statement.

[A1] [[def-axiom-of-choice]] and [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]: AC supplies the Countable Choice and Dependent Choice needed by the local Arzelà–Ascoli result.

[F1] [[def-half-order-product-integration]]: $K$ and $K_n$ are the improper-integral and weighted-hat interpolation operators, and $K_n$ has the finite-node form $\sum_j\psi_j(x)u(y_j)$ with coefficient functions $\psi_j(x)=w_{n,j}(x)a(x,y_j)$.

[F2] [[lem-half-order-product-integration-stability-and-consistency]]: $K$ and each $K_n$ are bounded linear maps, $K$ is compact, $K_n$ is collectively compact and pointwise norm convergent to $K$, each coefficient function $\psi_j$ is continuous, and $\|K_nu-Ku\|_\infty\le\sqrt2 M_2h^2/4$.

[F3] [[thm-collectively-compact-operator-stability-and-error]]: under AC and injectivity of $I-K$, the operators $I-K_n$ are boundedly invertible for all sufficiently large $n$ with one uniform inverse bound, and their solution errors satisfy the residual estimate.

[F4] [[lem-finite-node-equation-reconstruction-equivalence]]: bijective solvability of the reconstructed equation is equivalent to nonsingularity of its finite grid matrix.

[F5] On the nonempty compact interval $[0,1]$ ([[thm-heine-borel-rn]]), let $X=C([0,1],\mathbb R)$ with its supremum norm. Pointwise addition and real scalar multiplication preserve continuity. The supremum is finite by [[thm-c-k-complete-in-the-sup-metric]]; the pointwise absolute-value inequalities give $\|u+v\|_\infty\le\|u\|_\infty+\|v\|_\infty$ and $\|cu\|_\infty=|c|\|u\|_\infty$, and $\|u\|_\infty=0$ holds exactly when $u=0$. Thus this is a real norm ([[def-norm-and-normed-space]]). Its induced metric is the complete supremum metric of [[thm-c-k-complete-in-the-sup-metric]], so $X$ is Banach ([[def-banach-space]]). The constant function $1$ is a nonzero member of $X$ because the interval is nonempty ([[def-continuous-real-functions-on-a-compact-metric-space]]).

## Proof

**Given:** The hypotheses in the Statement and $h=1/n$.

1.1 By [F5], $X$ is a nonzero Banach space. By [F2], $K$ is compact and $(K_n)$ consists of bounded linear maps that are collectively compact and pointwise norm convergent to $K$. With AC and the assumed injectivity of $I-K$, [F3] gives $n_0$ and $C$ such that $I-K_n$ is invertible and $\|(I-K_n)^{-1}\|\le C$ for all $n\ge n_0$. [given, A1, F2, F3, F5]

2.1 The inverse in step 1.1 gives a unique solution to $(I-K_n)u_n=f_n$. By [F2] each coefficient function in [F1] is continuous, so [F4] applies: the finite grid matrix is nonsingular and its solution reconstructs exactly this $u_n$. [step 1.1, F1, F2, F4]

3.1 Subtracting $(I-K)u=f$ from $(I-K_n)u_n=f_n$ gives $(I-K_n)(u_n-u)=f_n-f+(K_n-K)u.$ Apply the inverse bound in [F3] and then the consistency bound in [F2]: $\|u_n-u\|_\infty\le C\bigl(\|f_n-f\|_\infty+\|K_nu-Ku\|_\infty\bigr) \le C\left(\|f_n-f\|_\infty+\frac{\sqrt2}{4}M_2h^2\right).$ This is the claimed error estimate. [given, F2, F3, step 1.1, algebra] ∎
