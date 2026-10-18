---
id: thm-midpoint-nystrom-smooth-solution-error
kind: theorem
title: Smooth-solution error bound for composite midpoint Nyström discretization
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-finite-node-equation-reconstruction-equivalence
  - lem-continuous-kernel-integral-operator-is-compact-on-c
  - thm-collectively-compact-operator-stability-and-error
  - lem-midpoint-nystrom-collective-compactness-and-consistency
  - thm-composite-midpoint-error-bound
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - ex-c-of-a-compact-space-is-banach
  - thm-heine-borel-rn
  - def-continuous-real-functions-on-a-compact-metric-space
justified_by: []
proof_strategy: direct
axiom_use: "AC is used only through the collectively compact stability theorem
  and the Arzelà–Ascoli input establishing collective compactness; the
  fixed-solution quadrature estimate is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Corollary 3.20 and Remark 3.21, printed pp. 64–65; the rate is derived
        from the quadrature error of the actual solution integrand."
    - title: "MATH 373 Lecture Notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "§8.2, printed pp. 37–38/PDF pp. 3–4, composite midpoint error formula and its second-derivative regularity hypothesis; the uniform bound used here is also supplied by the published local midpoint theorem."
verification:
  precheck: pass
---

## Statement

Assume AC. Let $k:[0,1]^2\to\mathbb R$ be continuous, $K$ its integral
operator, and $K_N$ its composite midpoint Nyström operator with panel width
$h=1/N$. Suppose $I-K$ is injective and $u$ solves $(I-K)u=f$. Assume that
$g_x(y):=k(x,y)u(y)$ is twice continuously differentiable in $y$ for every
$x$, with the uniform bound
$$M_2:=\sup_{x,y\in[0,1]}|\partial_y^2g_x(y)|<\infty.$$
Then there are $N_0$ and $C<\infty$ such that for every $N\ge N_0$ the Nyström
matrix is nonsingular, its reconstruction $u_N$ solving $(I-K_N)u_N=f_N$
exists for each $f_N\in X$, and
$$\|u_N-u\|_\infty\le C\left(\|f_N-f\|_\infty+\frac{h^2}{24}M_2\right).$$
In the standard Nyström method $f_N=f$. The regularity assumption is on the
actual function $k(x,\cdot)u(\cdot)$, not on every function in the unit ball of
$C([0,1],\mathbb R)$.

## Facts & Assumptions

**Given:** AC, $k$, $K$, $K_N$, $u$, $f$, $f_N$, and $M_2$ as in the Statement.

[F1] [[def-nystrom-quadrature-and-finite-rank-operators]]: the Nyström equation is $(I-K_N)u_N=f_N$.

[F2] [[lem-finite-node-equation-reconstruction-equivalence]]: nonsingularity of the finite grid matrix is equivalent to bijective solvability of the reconstructed equation.

[F3] [[lem-continuous-kernel-integral-operator-is-compact-on-c]]: the continuous-kernel operator $K$ is compact; AC supplies its Countable Choice and Dependent Choice hypotheses by [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]].

[F4] [[lem-midpoint-nystrom-collective-compactness-and-consistency]]: each composite midpoint operator is bounded linear, the family is collectively compact, and $K_Nx\to Kx$ in norm for every $x\in X$.

[F5] [[thm-collectively-compact-operator-stability-and-error]]: under AC, compactness of $K$, collective compactness and pointwise convergence of $K_N$, and injectivity of $I-K$ give eventual bounded inverses with a uniform bound and the residual solution estimate.

[F6] [[thm-composite-midpoint-error-bound]]: for a $C^2$ real integrand $g$ on $[0,1]$, the composite midpoint rule satisfies $|\int_0^1g-Q_Ng|\le h^2\|g''\|_\infty/24$.

[F7] The interval $[0,1]$ is a nonempty compact metric space ([[thm-heine-borel-rn]]), so $X=C([0,1],\mathbb R)$ with the supremum norm is Banach ([[ex-c-of-a-compact-space-is-banach]]).

[F8] The constant function $1$ belongs to $X$ and is nonzero by the definition of continuous real-valued functions ([[def-continuous-real-functions-on-a-compact-metric-space]]), so $X\ne\{0\}$.

## Proof


**Given:** AC, the continuous kernel and exact solution in the Statement, and $h=1/N$.

1.1 By [F7] and [F8], the space $X$ satisfies the Banach and nonzero hypotheses of [F5]. By [F3], $K$ is compact; [F4] gives bounded linear $K_N$ with the required collective compactness and pointwise convergence; the Statement assumes $I-K$ injective. Thus [F5] supplies $N_0$ and a common bound $C$ for $(I-K_N)^{-1}$ for all $N\ge N_0$. [given, F3, F4, F5, F7, F8]

1.2 For each fixed $x$, apply [F6] to the $C^2$ function $g_x(y)=k(x,y)u(y)$. The common derivative bound gives $|K_Nu(x)-Ku(x)|\le h^2M_2/24$ for every $x$, hence $\|K_Nu-Ku\|_\infty\le h^2M_2/24$. [given, F6]

2.1 The function-equation inverse from step 1.1 and [F2] make the finite matrix nonsingular and define its unique reconstruction $u_N$. Subtracting the exact and discrete equations gives $(I-K_N)(u_N-u)=f_N-f+(K_N-K)u.$ Applying the inverse bound $C$ from step 1.1, then the triangle inequality and step 1.2, proves the stated estimate. [F1, F2, step 1.1, step 1.2, algebra] ∎

