---
id: lem-midpoint-nystrom-collective-compactness-and-consistency
kind: lemma
title: Composite midpoint Nyström operators are collectively compact and consistent
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - lem-continuous-kernel-integral-operator-is-compact-on-c
  - alg-composite-midpoint-rule
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - thm-arzela-ascoli-for-real-ck
  - thm-heine-cantor-metric
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - lem-uniform-integral-error-bound
  - thm-c-k-complete-in-the-sup-metric
  - thm-heine-borel-rn
  - ex-c-of-a-compact-space-is-banach
  - def-bounded-linear-operator
  - def-finite-sum
  - lem-finite-sum-laws
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies Countable Choice and Dependent Choice for the local
  continuous-kernel compactness lemma and the real Arzelà–Ascoli compactness
  step. The consistency estimate itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Theorem 3.19 and its proof, printed pp. 63–64."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and
        Computational Methods in Photonics: Tutorial Notes, §§1.3–1.4"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computa\
        tional%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Theorems 1.11–1.12 and their proofs, printed pp. 15–16."
verification:
  precheck: pass
---

## Statement

Assume AC. Let $k:[0,1]^2\to\mathbb R$ be continuous and let $K$ be its integral
operator from [[def-nystrom-quadrature-and-finite-rank-operators]]. For each
$N\ge1$, let $K_N$ use the composite midpoint rule with $h=1/N$. Then each
$K_N$ is a bounded linear map $X\to X$, $K$ is compact, the family $(K_N)_{N\ge1}$
is collectively compact (the union of the
images of the unit ball has compact closure in $X$), and
$$\|K_Nu-Ku\|_\infty\longrightarrow0\qquad\text{for every }u\in X.$$

## Facts & Assumptions

**Given:** AC, the continuous kernel $k$, its integral operator $K$, and the composite midpoint operators $K_N$ on $X=C([0,1],\mathbb R)$.

[A1] [[def-axiom-of-choice]] and [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]: AC supplies both Countable Choice and Dependent Choice, as required by the local compactness and Arzelà–Ascoli suppliers.

[F1] [[def-nystrom-quadrature-and-finite-rank-operators]]: $K_Nu(x)=h\sum_{j=0}^{N-1}k(x,(j+\tfrac12)h)u((j+\tfrac12)h)$.

[F2] [[lem-continuous-kernel-integral-operator-is-compact-on-c]]: under Countable Choice and Dependent Choice, the continuous-kernel integral operator $K:X\to X$ is bounded and compact.

[F3] [[alg-composite-midpoint-rule]]: the midpoint rule on $N$ uniform panels uses $h=1/N$, one midpoint per panel, and weight $h$.

[F4] [[thm-heine-cantor-metric]]: the kernel $k$ and, for each fixed $u\in X$, the function $(x,y)\mapsto k(x,y)u(y)$ are uniformly continuous on the compact square.

[F5] [[thm-arzela-ascoli-for-real-ck]]: under Countable Choice and Dependent Choice, a pointwise bounded equicontinuous family in $C([0,1],\mathbb R)$ has compact closure.

[F6] [[thm-additivity-over-subintervals]], [[thm-monotonicity-of-the-integral]], and [[lem-uniform-integral-error-bound]]: midpoint panel integrals add, and a uniformly bounded continuous panel error has integral bounded by panel length times its supremum.

[F7] [[thm-c-k-complete-in-the-sup-metric]]: the continuous kernel is bounded on the compact square, so $M:=\|k\|_\infty<\infty$.

[F8] The interval $[0,1]$ and square $[0,1]^2$ with their Euclidean metrics are nonempty compact metric spaces ([[thm-heine-borel-rn]]).

[F9] $X=C([0,1],\mathbb R)$ is a Banach space with the supremum norm ([[ex-c-of-a-compact-space-is-banach]]).

[F10] A linear map between normed spaces is bounded when one constant bounds its output norm by that constant times the input norm ([[def-bounded-linear-operator]]).

[F11] Additivity and scalar homogeneity of finite sums make the midpoint finite-sum formula linear in $u$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof


**Given:** AC, $N\ge1$, $h=1/N$, $M:=\|k\|_\infty$, and the operators in the Statement.

1.1 Compactness of $K$ is [F2], whose Countable Choice and Dependent Choice hypotheses follow from [A1]. [A1, F2]

1.2 By [F8], the square is compact, so [F7] makes $M=\|k\|_\infty$ finite. Each finite sum in [F1] is continuous in $x$, so $K_Nu\in X$. The formula is linear in $u$ by [F11], and for arbitrary $u\in X$ it gives $|K_Nu(x)|\le hNM\|u\|_\infty=M\|u\|_\infty$, so $K_N$ is bounded in the Banach norm of [F9] by [F10]. For $\|u\|_\infty\le1$, [F1] and [F3] give $|K_Nu(x)|\le M$ for every $x$. For $x,x'\in[0,1]$ they also give $|K_Nu(x)-K_Nu(x')|\le\sup_{y\in[0,1]}|k(x,y)-k(x',y)|.$ Uniform continuity of $k$ on the square makes the right side a common modulus tending to zero as $|x-x'|\to0$. Thus the union of all unit-ball images is pointwise bounded and equicontinuous. [given, F1, F3, F4, F7, F8, F9, F10, F11, algebra]

2.1 By [F5] on the compact interval supplied by [F8] and [A1], the closure of that union is compact, so $(K_N)$ is collectively compact. The Banach space $X$ is normed by [F9], and its metric is the supremum metric used here. [A1, F5, F8, F9, step 1.2]

3.1 Fix $u\in X$ and put $G_u(x,y):=k(x,y)u(y)$. By [F4] on the compact square from [F8], its uniform modulus in the $y$ variable, $\omega_u(\rho):=\sup\{|G_u(x,y)-G_u(x,y')|:x\in[0,1],\ |y-y'|\le\rho\}$, tends to zero as $\rho\downarrow0$. On each midpoint panel $I_j=[jh,(j+1)h]$ with midpoint $m_j$, [F6] gives $\left|hG_u(x,m_j)-\int_{I_j}G_u(x,y)\,dy\right|\le h\,\omega_u(h/2).$ Adding the $N$ panel bounds and using $Nh=1$ yields $\|K_Nu-Ku\|_\infty\le\omega_u(h/2)\to0$. [given, F1, F3, F4, F6, F8, algebra] ∎

