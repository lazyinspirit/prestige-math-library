---
id: thm-nrqm-orbital-and-spin-weighted-angular-completeness
aliases: [nrqm-orbital-and-spin-weighted-angular-completeness]
kind: theorem
domain: mathematics
title: "Weighted angular completeness"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-real-stone-weierstrass-general, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-factorial-and-falling-factorial, lem-derivative-of-a-power, def-natural-numbers, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-real-stone-weierstrass-general: mathematical-premise
  lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, printed pp. 77-83 (Spherical Harmonic Decomposition of L2(S); Stone-Weierstrass density step in the proof of Theorem 5.12)"
      url: "https://www.axler.net/HFT.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §18.2(viii), 'Uniqueness of Orthogonality Measure and Completeness' (completeness criterion and bounded-interval conclusion for orthogonal polynomial systems)"
      url: "https://dlmf.nist.gov/18.2"
    - title: "NIST Digital Library of Mathematical Functions, §18.3, Table 18.3.1 (Legendre orthogonality, weight, and standardization)"
      url: "https://dlmf.nist.gov/18.3"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $P_l$ be the Legendre polynomials of
[[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]] and $w_{lm}$ the associated functions of
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], and let $L^2=L^2((-1,1),dt;\mathbb C)$ with
inner product linear in the first argument ([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]]). Then, for each fixed $m\in\mathbb N$:

(a) for every $l\ge m$ the polynomial $P_l^{(m)}$ has degree $l-m$ and nonzero leading coefficient, and for
every $d\in\mathbb N$ the polynomials $P_m^{(m)},P_{m+1}^{(m)},\dots,P_{m+d}^{(m)}$ form a basis of the space of
polynomial functions of degree at most $d$ on $[-1,1]$;

(b) the family $(w_{lm})_{l\ge m}$ has dense linear span in $L^2$: if $f\in L^2$ satisfies
$\int_{-1}^1f(t)w_{lm}(t)\,dt=0$ for every $l\ge m$, then $f=0$ almost everywhere; consequently the orthogonal
family $(w_{lm})_{l\ge m}$ is complete in $L^2$ and its normalization $(w_{lm}/\|w_{lm}\|_2)_{l\ge m}$ is a
Hilbert basis of $L^2$, so every $f\in L^2$ has
$f=\sum_{l\ge m}\bigl(\int_{-1}^1f\,w_{lm}\,dt\bigr)\|w_{lm}\|_2^{-2}w_{lm}$ with the finite-subset-net
convergence of [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]];

(c) for every fixed $m$ the orthogonal projection of $L^2$ onto the one-dimensional span of $w_{mm}$ is
$f\mapsto\|w_{mm}\|_2^{-2}\bigl(\int_{-1}^1f\,w_{mm}\,dt\bigr)w_{mm}$, and $w_{mm}(t)=(-1)^m\frac{(2m)!}{2^mm!}(1-t^2)^{m/2}$.

## Facts & Assumptions

**Given:** $m\in\mathbb N$; the Legendre polynomials $P_l$; the functions $w_{lm}$; the complex Hilbert space $L^2((-1,1),dt)$.

[F1] $P_l$ is a polynomial of degree $l$ with nonzero leading coefficient $a_l=\frac{(2l)!}{2^l(l!)^2}$ ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]]). Iterating the monomial derivative rule ([[lem-derivative-of-a-power]]) and factorial recursion ([[def-factorial-and-falling-factorial]]) gives, for $l\ge m$, leading term $a_l l!/(l-m)!\,t^{l-m}$ in $P_l^{(m)}$; lower-degree terms either vanish or have smaller degree. Thus its degree is $l-m$, and $P_m^{(m)}=a_m m!$.

[F2] $w_{lm}=(-1)^m(1-t^2)^{m/2}P_l^{(m)}$ is continuous on $[-1,1]$, the family $(w_{lm})_{l\ge m}$ is orthogonal in $L^2$, and $\|w_{lm}\|_2^2=\int_{-1}^1w_{lm}^2\,dt\in(0,\infty)$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]).

[F3] The real polynomial functions are uniformly dense in the real continuous functions on $[-1,1]$: for every continuous $g:[-1,1]\to\mathbb R$ and every $\varepsilon>0$ there is a polynomial $p$ with $\sup_{[-1,1]}|g-p|<\varepsilon$ ([[thm-real-stone-weierstrass-general]]).

[F4] Under Countable Choice, for every bounded interval $(a,b)$ the complex continuous functions on $[a,b]$ are dense in complex $L^p((a,b))$ for $1\le p<+\infty$, in particular in $L^2$ ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]] (2)). For continuous $g$, integrating $|g(t)|^2\le\|g\|_\infty^2$ over $(a,b)$ gives $\|g\|_2^2\le(b-a)\|g\|_\infty^2$, hence $\|g\|_2\le\sqrt{b-a}\|g\|_\infty$ by the defining $L^2$ norm ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] $\|fg\|_1\le\|f\|_2\|g\|_2$ and $|\int f\overline g|\le\|f\|_2\|g\|_2$ in $L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F6] For a family that is orthonormal and complete in a Hilbert space, the expansion, Parseval identity and coefficient formulas hold with finite-subset-net convergence ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).



## Proof

1.1 [(a)] By [F1], $P_l^{(m)}$ has degree $l-m$ and nonzero leading coefficient for each $l\ge m$. Hence in the ordered list $P_m^{(m)},P_{m+1}^{(m)},\dots,P_{m+d}^{(m)}$ the $j$-th polynomial has degree $j$, $0\le j\le d$: the leading-degree matrix is triangular with nonzero diagonal, so the polynomials are linearly independent; they are $d+1$ vectors in the $(d+1)$-dimensional space of polynomials of degree at most $d$, hence a basis. [F1, algebra]

2.1 [(b), first reduction] Let $f\in L^2$ satisfy $\int_{-1}^1fw_{lm}\,dt=0$ for all $l\ge m$, and put $g(t):=f(t)(1-t^2)^{m/2}$. Since $t\mapsto(1-t^2)^{m/2}$ is continuous and bounded on $[-1,1]$, $g\in L^2$ and $\|g\|_2\le\|f\|_2$; moreover for every $l\ge m$, $\int_{-1}^1g\,P_l^{(m)}\,dt=(-1)^m\int_{-1}^1fw_{lm}\,dt=0$ by [F2]. By step 1.1, every polynomial $q$ of degree at most $d$ is a linear combination of $P_m^{(m)},\dots,P_{m+d}^{(m)}$, so $\int_{-1}^1gq\,dt=0$ for every polynomial $q$. [step 1.1, F2, algebra]

3.1 [(b), density step] Polynomials are dense in $L^2((-1,1))$: given $\varphi\in L^2$ and $\varepsilon>0$, [F4] supplies a continuous $h$ on $[-1,1]$ with $\|\varphi-h\|_2<\varepsilon/2$, and apply [F3] separately to the real and imaginary parts of $h$, obtaining real polynomials $p_1,p_2$ whose respective uniform errors are below $\varepsilon/(4\sqrt2)$, and put $p=p_1+ip_2$; then $\sup_{[-1,1]}|h-p|<\varepsilon/(2\sqrt2)$, so $\|h-p\|_2<\varepsilon/2$ by [F4] (applied to the interval length $2$), whence $\|\varphi-p\|_2<\varepsilon$. Applying this to the complex-valued $g$ componentwise (real and imaginary parts) gives polynomials $q_j$ with $\|g-q_j\|_2\to0$; since $\int gq=0$ for all polynomials, Cauchy–Schwarz [F5] gives $\|g\|_2^2=\int g\overline g=\lim_j\int g\overline{q_j}=0$, so $g=0$ almost everywhere. On $(-1,1)$ the factor $(1-t^2)^{m/2}$ is strictly positive, so $f=g/(1-t^2)^{m/2}=0$ almost everywhere. [step 2.1, F3, F4, F5, algebra]

4.1 [(b), completeness and expansion] By [F2] the family $(w_{lm})_{l\ge m}$ is orthogonal with all norms nonzero, so $(w_{lm}/\|w_{lm}\|_2)_{l\ge m}$ is orthonormal; if a vector of $L^2$ is orthogonal to the whole family, it is orthogonal to every $w_{lm}$ and vanishes by step 3.1, so the orthonormal family is complete in the sense of [F6]; the expansion, normalization and coefficient formulas follow from [F6]. [step 3.1, F2, F6, algebra]

5.1 [(c)] The orthogonal projection onto the span of a unit vector $u$ is $x\mapsto\langle x,u\rangle u$, and for an unnormalized nonzero vector $w$ it is $x\mapsto\|w\|_2^{-2}\langle x,w\rangle w$; with $w=w_{mm}$ and the inner product linear in the first argument this is the displayed formula. Indeed its value lies in the span of $w$, and its residual has zero inner product with $w$, uniquely determining the orthogonal projection; Cauchy–Schwarz bounds its norm by $\|x\|_2$. The explicit value of $w_{mm}$ follows from $P_m^{(m)}=\frac{(2m)!}{2^mm!}$ (the leading coefficient of $P_m$ times $m!$) inserted into the definition of $w_{lm}$. [step 4.1, F1, F2, F5, algebra] ∎
