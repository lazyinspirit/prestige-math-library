---
id: cor-existence-rational-function-bounded-pole
kind: corollary
title: "Rational functions with poles bounded at one point"
status: published
origin: pipeline
deps:
  - def-invertible-sheaf-of-cartier-divisor
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-cartier-weil-divisors-curves-agree
  - cor-riemann-inequality-divisor-sections
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - def-order-codimension-one-rational-function
  - def-riemann-roch-space-of-divisor
  - lem-curve-closed-subsets-finite
  - thm-h0-structure-sheaf-proper-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice, inherited from the Riemann-Roch, proper-functions
and curve suppliers below. Let $k$ be a field, let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) with
genus $g=g(C)$ ([[def-genus-euler-characteristic-curve]]), and let $p\in C$ be
a closed point of residue degree $d=[\kappa(p):k]\ge1$
([[def-degree-divisor-proper-curve]]). Closed points of $C$ exist: the curve is
nonempty of chain dimension one, so besides its unique generic point it contains
a point, and every such point is closed
([[lem-curve-closed-subsets-finite]]). For every integer $n\ge1$ with
$$nd+1-g\ge2$$
there is a function $f\in L(np)$ that is not constant
([[def-riemann-roch-space-of-divisor]]). Every such $f$ is nonconstant, every
pole of $f$ lies at $p$ and has order at most $n$, and the pole divisor
$(f)_\infty$ of [[def-order-codimension-one-rational-function]] is a nonzero
effective divisor supported at $p$ ([[def-divisor-support-positive-negative-parts]]);
in particular $f$ has at least one pole at $p$.

The identification $L(D)=H^0(C,\mathcal O_C(D))$ and the sheaf
$\mathcal O_C(D)$ use the current interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]], inherited through
[[cor-riemann-inequality-divisor-sections]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ with genus $g=g(C)$, a closed point $p\in C$ of residue degree $d=[\kappa(p):k]$, and an integer $n\ge1$ with $nd+1-g\ge2$.

[F1] Curve and closed points: $C$ is nonempty, geometrically integral, separated, of finite type and of chain dimension one over $k$; its underlying space is Noetherian, it has a unique generic point $\eta_C$, and every point $x\ne\eta_C$ is a closed point of $C$ ([[def-algebraic-curve-over-field]], [[lem-curve-closed-subsets-finite]]). Since chain dimension one means that there is a strict chain of two nonempty irreducible closed subsets, $C$ has at least two points, hence a point different from $\eta_C$, and therefore at least one closed point.

[F2] Divisor and degree: a divisor on $C$ is a finite formal integral combination of closed points, and for a closed point $x$ the residue field $\kappa(x)$ is finite over $k$ with $[\kappa(x):k]\ge1$ and $\deg_k([x])=[\kappa(x):k]$ ([[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]]).

[F3] The Riemann-Roch space: for a divisor $D$ on $C$ with function field $k(C)$, $L(D)=\{f\in k(C)^\times:\operatorname{div}(f)+D\ge0\}\cup\{0\}$ is a $k$-subspace of $k(C)$, where $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$ uses the order of vanishing at each closed point; $L(D)$ is a $k$-vector space with $\dim_kL(D)=l(D)=h^0(D)$ and $l$ is a nonnegative integer ([[def-riemann-roch-space-of-divisor]], [[def-order-codimension-one-rational-function]], [[def-little-l-divisor]]).

[F4] The Riemann inequality: $l(D)\ge\deg_k(D)+1-g$ for every divisor $D$; for $D=np$ this gives $l(np)\ge nd+1-g\ge2$ by the hypothesis on $n$, using $\deg_k(np)=nd$ from [F2] ([[cor-riemann-inequality-divisor-sections]], [[def-degree-divisor-proper-curve]]).

[F5] Constants: $H^0(C,\mathcal O_C)$ is canonically $k$, and for every effective divisor $D\ge0$ each nonzero constant $c\in k^\times$ has $\operatorname{div}(c)=0$, while $0\in L(D)$ by definition; hence $k\cdot1\subseteq L(D)$; every $f\in L(0)$ is constant, since a nonzero such $f$ has $\operatorname{div}(f)\ge0$ and hence is regular everywhere, and zero is constant ([[thm-h0-structure-sheaf-proper-curve]], [[def-riemann-roch-space-of-divisor]], [[def-little-l-divisor]]).

[F6] The dimension of a $k$-vector space: if $\dim_kV=m>1$ and $W\subseteq V$ is a subspace of dimension one, then $W\ne V$ and there is $v\in V\setminus W$; dimensions of vector spaces are compared by inclusion and equality ([[def-dimension]]).

[F7] The current interfaces [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]] and [[thm-cartier-weil-divisors-curves-agree]] supply $\mathcal O_C(D)$ and the identification $L(D)=H^0(C,\mathcal O_C(D))$; the use of $l$ and the inequality below is inherited from [F4].

[F8] The Axiom of Choice is inherited from the curve, divisor, dimension, Riemann-inequality and proper-functions suppliers recorded in [F1]-[F7]; choosing a single function outside the constants needs no additional choice principle ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; find a closed point, use the Riemann inequality to make $L(np)$ at least two-dimensional, take a function outside the one-dimensional space of constants, and read the pole conditions off the membership in $L(np)$.

1.1 Existence of closed points and the residue degree. By [F1] the curve $C$ is nonempty with a unique generic point $\eta_C$, and its chain dimension one provides a strict chain of two nonempty irreducible closed subsets, so $C$ has at least two points and we may fix a point $p_0\ne\eta_C$; by [F1] every point other than $\eta_C$ is closed, so $p_0$ is a closed point of $C$. In particular closed points exist, and for every closed point $x$, such as the given $p$, the residue field is finite over $k$ with $[\kappa(x):k]\ge1$ by [F2]; the given residue degree is $d=[\kappa(p):k]\ge1$. [F1, F2]

1.2 The dimension bound. By [F4] applied to the divisor $np$, whose degree is $\deg_k(np)=nd$ by [F2], one has $l(np)\ge nd+1-g\ge2$; by [F3] the integer $l(np)$ is the $k$-dimension of $L(np)$, so $L(np)$ is a $k$-vector space of dimension at least two. [F2, F3, F4]

2.1 A nonconstant function with poles only at $p$. By [F5] the constants form the subspace $k\cdot1\subseteq L(np)$ of dimension one; since $\dim_kL(np)\ge2>1$, [F6] provides $f\in L(np)$ with $f\notin k\cdot1$, so $f$ is not a constant function. By [F3] membership $f\in L(np)$ means $\operatorname{div}(f)+np\ge0$, so $\operatorname{ord}_x(f)\ge0$ for every closed point $x\ne p$ and $\operatorname{ord}_p(f)\ge-n$; that is, every pole of $f$ lies at $p$ with order at most $n$. [F3, F5, F6, step 1.2]

3.1 $f$ has a pole, and the pole divisor. Since $f$ is nonconstant by step 2.1, $f\notin L(0)$: otherwise $\operatorname{div}(f)\ge0$ and [F5] would exhibit $f$ as a constant. Hence some order $\operatorname{ord}_x(f)$ is negative; by step 2.1 the only point where this can happen is $p$, so $f$ has a pole at $p$. Therefore the pole divisor $(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$ is a nonzero effective divisor supported at $p$, with coefficient $-\operatorname{ord}_p(f)$ between $1$ and $n$. [F3, F5, step 2.1]

4.1 Conclusion and choice accounting. For the given closed point $p$ and every $n\ge1$ with $nd+1-g\ge2$, steps 2.1 and 3.1 produce $f\in L(np)$ that is nonconstant, has all its poles at $p$ of order at most $n$, and has at least one pole there; moreover every $f\in L(np)\setminus k\cdot1$ has the same properties by steps 2.1 and 3.1 applied to it. The Axiom of Choice is inherited from the suppliers recorded in [F8], including the divisor and dimension interfaces [F2], [F3], [F6], [F7]; choosing the single function $f$ outside the one-dimensional subspace $k\cdot1$ is a single selection from a nonempty set and needs no choice principle, and the flagged dictionary [F7] records the inherited obligation on $\mathcal O_C(D)$. [F1, F4, F5, F7, F8, step 2.1, step 3.1] ∎
