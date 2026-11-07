---
dependency_level: 1
id: lem-bounded-affine-values-in-a-finite-family-give-a-constant-curve-dominator
kind: lemma
title: "Bounded affine values in a finite family give a constant curve dominator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-canonical-bounded-function-parameters-give-a-constant-curve-dominator
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - thm-line-bundle-rational-section-cartier-divisor
  - cor-projective-cohomology-finite-dimensional-field
  - thm-valuative-criterion-properness
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - lem-finite-morphism-affine
  - lem-curve-closed-subsets-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, finite-height parameter method; finite-family and arbitrary-dimensional pole proof supplied locally"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "Hans Grauert, Mordells Vermutung, §3, printed pp. 140–141, bounded parameters and constant-curve domination"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $K/k$ be finitely generated
of positive transcendence degree, and suppose a normal integral projective
$k$-scheme $B$ with function field $K$ is given. Let $Y$ be an affine
finite-type $K$-scheme with fixed coordinate generators $y_1,\ldots,y_m$,
let $U\subseteq Y$ be open, and let $Z\to U$ be finite. Let $Z'\subseteq Z$
be open and $\eta:Z'\to C$ a morphism to a regular proper geometrically
integral $K$-curve. Suppose $S\subseteq Z'(K)$ has infinite image in
$C(K)$ and each $y_i(s)$, for $s\in S$, lies in a fixed finite-dimensional
$k$-subspace of $K$.

There is a smooth projective geometrically integral curve $Q_0/k$ and a
nonconstant morphism $(Q_0)_K\to C$. No finiteness of the constant field,
finite cardinality of a vector space, or fixed nonvanishing denominator
at every member of $S$ is assumed. The finite family $Z$ may be reducible
or nonreduced.

## Facts & Assumptions

**Given:** AC and the schemes, functions, point set and uniform
finite-dimensional value spaces in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Given fixed finite-dimensional constant-field spaces for fraction
numerators and denominators, canonical normalization by the first RREF
row of their multiplication-relation kernel, and corresponding fixed
spaces for the scaled remaining curve coordinates, infinitely many
points yield a nonconstant morphism from a smooth projective geometrically
integral constant curve.
[[lem-canonical-bounded-function-parameters-give-a-constant-curve-dominator]]

[F2] Height-one local rings of a normal Noetherian domain are DVRs;
regularity at all height-one points detects regularity of a rational
function. Invertible-sheaf sections have the same test in local frames.
An effective Cartier pole divisor identifies such functions with a space
of global sections, finite-dimensional on a projective scheme over $k$.
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]
[[thm-line-bundle-rational-section-cartier-divisor]]
[[cor-projective-cohomology-finite-dimensional-field]]

[F3] Local rings of a regular curve at closed points are DVRs, so
properness extends a function-field map across each of them. A nonconstant
morphism of proper integral curves is finite and surjective; a finite
morphism is affine. Proper closed subsets of an integral curve are finite.
[[thm-one-dimensional-regular-local-rings-are-dvrs]]
[[thm-valuative-criterion-properness]]
[[thm-nonconstant-morphism-proper-curves-finite-surjective]]
[[lem-finite-morphism-affine]] [[lem-curve-closed-subsets-finite]]

## Axiom use

AC is inherited from [F1]–[F3]. All pole bounds concern finite lists of
functions; no cardinality argument over the infinite field $k$ is used.

## Proof

**Proof technique:** direct; monic equations bound poles in a finite
family, and canonical curve coordinates turn those bounds into an
injective constant-field parameter construction.

1.1 Finitely many principal opens $Y_t\subset U$ cover $U$, since it is a quasi-compact open of Noetherian affine $Y$. At least one receives points of $S$ with infinite $\eta$-image. Work on it. Write $A=\Gamma(Y,\mathcal O_Y)$ and $Z_{Y_t}=\operatorname{Spec}D$, with $D$ finite over $A[t^{-1}]$. Choose finitely many algebra generators $z_j$ of $D$ and monic equations for them. Choose $N_j\ge0$ so that $w_j=t^{N_j}z_j$ has a monic equation with coefficients in $A$: if $z_j^n+\sum_{l<n}a_lz_j^l=0$, take $N_j(n-l)$ at least the power of $t$ needed to clear the denominator of each $a_l$. Then $w_j^n+\sum_{l<n}t^{N_j(n-l)}a_lw_j^l=0$ has the required coefficients. Values of these coefficients, and of $t$, on $S$ lie in fixed finite-dimensional $k$-spaces, since they are fixed polynomials in the $y_i$ with coefficients in $K$. Choose an effective Cartier divisor $H$ on $B$ containing all their poles with adequate multiplicities. Such an $H$ exists: each rational function has finitely many polar prime divisors, and a projective hyperplane form vanishing on each such divisor but not on integral $B$ gives an effective Cartier divisor containing it; take a sufficiently high power of the product. [A1, F2, given, construct, algebra]

2.1 The values $w_j(s)$ have uniformly bounded poles. At a height-one valuation $v$, a root $w$ of a monic polynomial $w^n+\sum_{l<n}c_lw^l=0$ cannot satisfy $v(w)<\min_{c_l\ne0}v(c_l)/(n-l)$: its leading term would have strictly smaller valuation than every other nonzero term, contradicting their sum being zero. Zero coefficients are omitted; if all lower coefficients vanish the only field-valued root is zero. The common pole bound for the finitely many coefficients thus gives a uniform multiple of $H$ bounding all $w_j(s)$. By [F2] they belong to fixed spaces of global sections. Every fixed polynomial in their values and in the $y_i(s)$ therefore lies in a fixed finite-dimensional $k$-space. The original $z_j$ are obtained by dividing $w_j$ by powers of $t$, whose values do not vanish on the selected points. Hence a fixed rational expression in these generators, defined on a selected point, is a ratio of two elements of fixed finite-dimensional $k$-spaces, with nonzero denominator at that point. This conclusion allows the denominator and its zero divisor on $B$ to vary with the point. [F2, algebra, step 1.1]

3.1 Choose any nonconstant $a\in K(C)$. The rational map $C\dashrightarrow\mathbf P^1_K$ extends across its regular DVRs by [F3], and is finite and surjective by [F3]. Consequently $C_a=a^{-1}(\mathbf A^1_K)$ is affine, with coordinate algebra finite over $K[a]$. Choose algebra generators $b_1,\ldots,b_r$, each satisfying a monic equation with coefficients in $K[a]$. Removing the finitely many points of $C\setminus C_a$ leaves infinite $\eta$-image. The open $Z'\cap\eta^{-1}(C_a)$ has a finite cover by principal affine opens of $\operatorname{Spec}D$ on which all coordinates $a\eta,b_i\eta$ are fractions in $D$. Choose one with infinite image. On that set, step 2.1 bounds the numerator and denominator of $a\eta$ in one fixed finite-dimensional space $U_0\subset K$, enlarged to include $1$. In particular every selected curve point has a representation $a=u/c$ with $u,c\in U_0$ and $c\ne0$. [F3, construct, algebra, step 2.1]

4.1 Put $U=U_0$. For each selected value $a$, the space $\{(u,c)\in U^2:u=ac\}$ is nonzero. Its first nonzero RREF row is a canonical pair $(u(a),c(a))$ and has $c(a)\ne0$. It remains to bound the other curve coordinates for this canonical pair, not only for the original representatives. Write a monic equation of $b_i$ as $b_i^n+\sum_{l<n}d_l(a)b_i^l=0$, where $d_l\in K[a]$. Choose $N_i$ with $N_i(n-l)\ge\deg d_l$ for every nonzero $d_l$. Then $c^{N_i}b_i$ satisfies a monic equation whose lower coefficients are $c^{N_i(n-l)}d_l(u/c)$, polynomials in $u,c$ with fixed coefficients in $K$. For all $u,c\in U$ those polynomial values lie in fixed finite-dimensional $k$-spaces. Apply the valuation root bound of step 2.1 to obtain a fixed finite-dimensional pole space $V_i$ containing every $c(a)^{N_i}b_i$. There is no requirement that a single $c$ works for all points. [F1, F2, construct, algebra, step 3.1]

5.1 The affine curve $C_a$ is a closed subscheme of affine space with coordinates $(a,b_1,\ldots,b_r)$ by the chosen algebra generators. It is therefore a locally closed open of the proper curve $C$ in exactly the coordinate form required by [F1]. The infinitely many selected distinct points satisfy all the canonical fraction and scaled-coordinate bounds of step 4.1. Apply [F1] to construct a smooth projective geometrically integral $Q_0/k$ and a nonconstant $(Q_0)_K\to C$. Nilpotents or extra components of $Z$ do not affect the argument: its monic equations, affine covers, and field-valued evaluations were valid before any reduction. This proves the Statement. [F1, algebra, step 4.1] ∎
