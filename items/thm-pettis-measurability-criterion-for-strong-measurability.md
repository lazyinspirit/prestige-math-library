---
id: thm-pettis-measurability-criterion-for-strong-measurability
kind: theorem
title: "Pettis measurability criterion for strong measurability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-strongly-measurable-banach-valued-function, def-dual-space-of-a-normed-space, def-complete-measure-space, def-measurable-function-between-measurable-spaces, def-separable-space, thm-hahn-banach-dominated-extension]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Theorem 11.34 and complete proof, printed pp. 335--336"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice, let $(\Omega,\mathcal A,\mu)$ be a complete measure
space, and let $X$ be a real or complex Banach space. A function
$f:\Omega\to X$ is strongly measurable if and only if both conditions hold:

1. $f$ is **weakly measurable**: $x^*\circ f$ is scalar measurable for every
   $x^*\in X^*$;
2. $f$ is **essentially separably valued**: there are a null set $N$ and a
   separable closed subspace $Y\subseteq X$ such that
   $f(\Omega\setminus N)\subseteq Y$.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] Strong measurability is a.e. pointwise norm approximation by measurable
simple functions ([[def-strongly-measurable-banach-valued-function]]).

[L2] The dual consists of bounded scalar-valued linear functionals
([[def-dual-space-of-a-normed-space]]).

[L3] On a complete measure space, every subset of a measurable null set is
measurable ([[def-complete-measure-space]]), and measurability means that Borel
preimages are measurable ([[def-measurable-function-between-measurable-spaces]]).

[L4] Separability means existence of an at most countable dense subset
([[def-separable-space]]).

[L5] Under AC, a dominated real linear functional extends to the whole real
space ([[thm-hahn-banach-dominated-extension]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and the two conditions in the Statement.

1.1 Strong measurability gives an essentially separable range. [given, L1, L4]
Assume first that $f$ is strongly measurable, witnessed by $s_n$ and $N$
as in [L1]. The union of the finite ranges of the $s_n$ is countable. Its closed
linear span $Y$ is separable by [L4], and every $f(\omega)$ with $\omega\notin N$
is a norm limit of points of $Y$. Thus $f$ is essentially separably valued.
[given, L1, L4]

1.2 Strong measurability gives weak measurability. [given, L1, L2, L3]
For $x^*\in X^*$, [L2] gives
$x^*(s_n(\omega))\to x^*(f(\omega))$ off $N$. Each $x^*\circ s_n$ is scalar
simple and measurable. A pointwise scalar limit is measurable off $N$, and [L3]
makes its arbitrary values on subsets of $N$ measurable as well. Hence $f$ is
weakly measurable. [given, L1, L2, L3]

1.3 Fix countable dense data for the reverse implication. [given, L4, choose]
Conversely assume conditions 1 and 2. If $Y=\{0\}$, the constant zero
simple functions converge to $f$ off $N$, so suppose $Y\neq\{0\}$. By [L4]
choose a sequence $(y_m)$ dense in $Y$ and a sequence $(z_k)$ dense in its unit
sphere. [given, L4, choose]

2.1 Construct a countable norming family. [A1, L2, L5, step 1.3]
For each $k$, in the complex case define on the underlying real plane
$\mathbb Cz_k$ the norm-one real functional $u_k(az_k)=\operatorname{Re}a$;
in the real case use $u_k(az_k)=a$ on $\mathbb Rz_k$. Apply [L5] and [A1] to extend these simultaneously to
real functionals $U_k$ on the underlying real space of $X$. In the complex case
put $x_k^*(x)=U_k(x)-iU_k(ix)$; in the real case put $x_k^*=U_k$. Then
$x_k^*\in X^*$, $\|x_k^*\|=1$, and $x_k^*(z_k)=1$. Consequently, for $y\in Y$,
[A1, L2, L5, step 1.3]

$$\|y\|=\sup_k|x_k^*(y)|.$$

Indeed the upper bound is immediate, while a unit vector arbitrarily close to
some $z_k$ makes the corresponding value arbitrarily close to $1$.

3.1 Norm distances to fixed centres are measurable. [L3, step 2.1]
For fixed $y\in Y$, step 2.1 and weak measurability give, off $N$,
$\|f-y\|=\sup_k|x_k^*(f-y)|$. The right side is the supremum of a countable
family of measurable scalar functions. With any values assigned on $N$, [L3]
therefore makes $\omega\mapsto\|f(\omega)-y\|$ measurable. [L3, step 2.1]

4.1 Build finite-valued nearest-centre approximants. [L1, step 1.3, step 3.1]
For each $n\geq1$ and $\omega\notin N$, choose the least
$m\in\{1,\ldots,n\}$ minimizing $\|f(\omega)-y_m\|$; put $s_n(\omega)=y_m$
there and $s_n=0$ on $N$. The finitely many tie-broken Voronoi cells are
measurable by step 3.1, so $s_n$ is a measurable simple function. Density of
$(y_m)$ gives $\|s_n(\omega)-f(\omega)\|\to0$ for every $\omega\notin N$.
[L1, step 1.3, step 3.1]

5.1 Steps 1.1--1.2 prove the forward implication, and step 4.1 supplies the
simple approximants required by [L1] for the reverse implication. The only
non-finite choice is [A1]: it supplies the Hahn--Banach extensions in step 2.1
(and hence also covers their countable simultaneous selection). [A1, L1, step 1.1, step 1.2, step 4.1] ∎
