---
id: lem-h1-stabilizes-downward-point-removal
kind: lemma
title: "Adding points never raises h^1, and h^1 stabilizes"
status: draft
origin: pipeline
deps:
  - cor-projective-cohomology-finite-dimensional-field
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-support-positive-negative-parts
  - def-divisor-smooth-proper-curve
  - def-little-l-divisor
  - def-sheaf-cohomology-derived-global-sections
  - lem-add-one-point-exact-sequence-line-bundle
  - lem-degree-effective-divisor-nonnegative
  - lem-quotient-basis-lifts-to-an-adapted-basis
  - lem-riemann-roch-space-finite-dimensional
  - thm-first-isomorphism-theorem-for-vector-spaces
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-rank-nullity
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
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the sheaf-cohomology suppliers
below. Let $k$ be a field, let $C$ be a smooth proper geometrically integral
curve over $k$ ([[def-algebraic-curve-over-field]]), let $D$ be a divisor on
$C$ ([[def-divisor-smooth-proper-curve]]) and let $p\in C$ be a closed point
with residue degree $d=[\kappa(p):k]$
([[def-degree-divisor-proper-curve]]). Write
$h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ ([[def-little-l-divisor]]).

1. The long exact sequence of the short exact sequence
   $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ contains,
   after identifying $H^0(C,i_{p,*}\kappa(p))$ with $\kappa(p)$, the exact
   sequence of finite-dimensional $k$-vector spaces and $k$-linear maps
   $$0\to H^0(C,\mathcal O_C(D))\to H^0(C,\mathcal O_C(D+p))\to\kappa(p)\xrightarrow{\ \partial\ }H^1(C,\mathcal O_C(D))\to H^1(C,\mathcal O_C(D+p))\to0,$$
   whose middle arrow $\partial$ is the connecting map. Consequently
   $$H^1(C,\mathcal O_C(D+p))\cong H^1(C,\mathcal O_C(D))/\operatorname{im}\partial,$$
   so that $h^1(D+p)\le h^1(D)$, with equality if and only if
   $\partial=0$, and
   $$h^1(D)-h^1(D+p)=\dim_k\operatorname{im}\partial\le d.$$
2. Consequently for every effective divisor $E\ge0$ one has
   $h^1(D+E)\le h^1(D)$: the integer $h^1$ is antitone in the divisor
   ([[def-divisor-support-positive-negative-parts]]).
3. In particular, for a fixed divisor $D_0$ and a fixed effective divisor
   $A\ge0$, the sequence $n\mapsto h^1(D_0+nA)$ is non-increasing and
   therefore stabilizes: it is constant for all sufficiently large $n$.
   Equivalently, removing points from a divisor can only raise or preserve
   $h^1$: if $D'\le D''$ then $h^1(D'')\le h^1(D')$.

The short exact sequence and the cohomology of the skyscraper
$i_{p,*}\kappa(p)$ are supplied by
[[lem-add-one-point-exact-sequence-line-bundle]]. Its construction uses the
current Cartier-divisor and order interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, divisors $D$, $D_0$, $A$ on $C$ with $A\ge0$, and a closed point $p\in C$.

[F1] Divisors and degrees. A divisor on $C$ is a finite formal sum $\sum_xn_x[x]$ over the closed points, $D\le E$ means that $E-D$ is effective, $\deg_k$ is additive and $\deg_k(E)\ge0$ for effective $E$, and the residue degree satisfies $[\kappa(p):k]=\dim_k\kappa(p)\ge1$ for every closed point $p$ ([[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]], [[def-degree-divisor-proper-curve]], [[lem-degree-effective-divisor-nonnegative]]).

[F2] Adding one point. The sequence $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ is a short exact sequence of coherent $\mathcal O_C$-modules, $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ with $k$-dimension $d=[\kappa(p):k]$, and $H^q(C,i_{p,*}\kappa(p))=0$ for every $q\ge1$ ([[lem-add-one-point-exact-sequence-line-bundle]]).

[F3] Long exact sequence. A short exact sequence of abelian sheaves on $C$ gives a natural long exact sequence of sheaf cohomology groups $H^q$, with the connecting map $H^0\to H^1$ ([[thm-long-exact-sequence-sheaf-cohomology]], [[def-sheaf-cohomology-derived-global-sections]]).

[F4] Finiteness and the notation $h^i$. For every divisor $D'$ the groups $H^q(C,\mathcal O_C(D'))$ are finite-dimensional $k$-vector spaces for all $q\ge0$, vanishing for $q\ge2$, and $h^i(D')=\dim_kH^i(C,\mathcal O_C(D'))$ is a nonnegative integer ([[def-little-l-divisor]], [[lem-riemann-roch-space-finite-dimensional]], [[cor-projective-cohomology-finite-dimensional-field]], [[def-dimension]]).

[F5] $k$-linearity of the long exact sequence. For an $\mathcal O_C$-module $\mathcal F$ the cohomology groups are the right derived objects of the global-sections functor of [[def-sheaf-cohomology-derived-global-sections]], and multiplication by a scalar $c\in k$ on $\mathcal F$ is the $\mathcal O_C$-module endomorphism given by multiplication by the global function $c$, so functoriality of the derived objects turns it into the scalar action on $H^q(C,\mathcal F)$; a morphism of $\mathcal O_C$-modules commutes with these endomorphisms and hence induces a $k$-linear map on cohomology. Consequently the maps and the connecting map in the long exact sequence of [F3], applied to a short exact sequence of $\mathcal O_C$-modules, are $k$-linear, and the terms are the finite-dimensional $k$-vector spaces of the proper finiteness theorem ([[cor-projective-cohomology-finite-dimensional-field]], [[thm-long-exact-sequence-sheaf-cohomology]]).

[F6] Linear algebra over $k$. For a linear map $T:V\to W$ with $V$ finite-dimensional one has $\dim_kV=\dim_k\ker T+\dim_k\operatorname{im}T$ ([[thm-rank-nullity]]), the formula $\widetilde T(v+\ker T)=T(v)$ defines an isomorphism $V/\ker T\to\operatorname{im}T$ ([[thm-first-isomorphism-theorem-for-vector-spaces]]), and for $W\le V$ with $V$ finite-dimensional, $\dim_k(V/W)=\dim_kV-\dim_kW$ ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

[F7] The Axiom of Choice is used exactly through the sheaf-cohomology suppliers [F2], [F3] and the finiteness supplier [F4]; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; read the segment of the long exact sequence around the connecting map at one point, compute the dimension drop through the first isomorphism theorem, iterate over the points of an effective divisor, and observe that a non-increasing sequence of nonnegative integers is eventually constant.

1.1 The exact segment. By [F2] the sequence $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ is a short exact sequence of coherent $\mathcal O_C$-modules with $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ and $H^1(C,i_{p,*}\kappa(p))=0$. The long exact sequence of [F3] therefore contains the exact segment $H^0(C,\mathcal O_C(D))\to H^0(C,\mathcal O_C(D+p))\to H^0(C,i_{p,*}\kappa(p))\xrightarrow{\partial}H^1(C,\mathcal O_C(D))\to H^1(C,\mathcal O_C(D+p))\to H^1(C,i_{p,*}\kappa(p))$; substituting the identification $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ of [F2] and its vanishing in degree one, and using the injectivity of the first map and the exactness at $H^0(C,\mathcal O_C(D+p))$, gives the exact sequence $0\to H^0(C,\mathcal O_C(D))\to H^0(C,\mathcal O_C(D+p))\to\kappa(p)\xrightarrow{\partial}H^1(C,\mathcal O_C(D))\to H^1(C,\mathcal O_C(D+p))\to0$, with $\partial$ the connecting map; by [F4] and [F5] all six terms are finite-dimensional $k$-vector spaces and all maps are $k$-linear. [F2, F3, F4, F5]

2.1 The dimension drop. Exactness of the sequence of step 1.1 at $H^1(C,\mathcal O_C(D))$ identifies $\operatorname{im}\partial$ with the kernel of the map $H^1(C,\mathcal O_C(D))\to H^1(C,\mathcal O_C(D+p))$, and exactness at $H^1(C,\mathcal O_C(D+p))$ says that this map is surjective; hence the first isomorphism theorem of [F6] identifies the $k$-vector spaces $H^1(C,\mathcal O_C(D+p))$ and $H^1(C,\mathcal O_C(D))/\operatorname{im}\partial$. Taking dimensions with the quotient formula of [F6] gives $h^1(D+p)=\dim_kH^1(C,\mathcal O_C(D))-\dim_k\operatorname{im}\partial=h^1(D)-\dim_k\operatorname{im}\partial$, so $h^1(D+p)\le h^1(D)$, with equality exactly when $\operatorname{im}\partial=0$, that is, exactly when the connecting map $\partial$ is zero. Since $\partial$ is $k$-linear out of the finite-dimensional space $\kappa(p)$ of dimension $d$, rank-nullity gives $\dim_k\operatorname{im}\partial=\dim_k\kappa(p)-\dim_k\ker\partial\le\dim_k\kappa(p)=d$ by [F4], so the drop is at most $d$. [F4, F5, F6, step 1.1]

3.1 Antitonicity in the divisor. Let $E\ge0$ be effective and write its finite support with multiplicities as $E=\sum_ic_i[x_i]$; consider the finite chain of divisors $D\le D+[x_1]\le D+2[x_1]\le\cdots\le D+E$ that adds one copy of a closed point at a time. Every consecutive pair is of the form $D'\le D'+q$ for a closed point $q$, so step 2.1 applied to the divisor $D'$ and the point $q$ gives $h^1(D'+q)\le h^1(D')$; chaining these inequalities along the finite chain gives $h^1(D+E)\le h^1(D)$. [F1, step 2.1]

4.1 Stabilization and the downward reading. Fix a divisor $D_0$ and an effective divisor $A\ge0$. For every $n\ge0$ one has $D_0+nA\le D_0+(n+1)A$, so step 3.1 applied to the divisor $D_0+nA$ gives $h^1(D_0+(n+1)A)\le h^1(D_0+nA)$: the sequence $n\mapsto h^1(D_0+nA)$ is non-increasing. Its values are nonnegative integers bounded above by $h^1(D_0)$ by step 3.1; a strict decrease lowers the value by at least one, so the sequence has at most $h^1(D_0)$ strict decreases and is therefore constant for all sufficiently large $n$, which is the asserted stabilization. Finally, if $D'\le D''$ are divisors, then $D''=D'+E$ for the effective divisor $E=D''-D'$ and step 3.1 gives $h^1(D'')\le h^1(D')$; reading $D'$ as obtained from $D''$ by removing the points of $E$, removing points from a divisor can only raise or preserve $h^1$. [F1, F4, step 3.1]

5.1 Conclusion and choice accounting. Step 1.1 gives the exact sequence and the identification of the connecting map, step 2.1 the inequality, the equality criterion and the bound $d$ on the drop, step 3.1 the antitonicity for every effective divisor, and step 4.1 the stabilization and the equivalent downward reading; this proves parts (1), (2) and (3) of the Statement. The Axiom of Choice is used only through the sheaf-cohomology suppliers of [F2] and [F3] and the finiteness supplier of [F4], as recorded in [F7]; the point $q$ added at each stage of step 3.1 is one of the finitely many points of $E$, so no further selection is made. [F2, F3, F4, F7, step 1.1, step 2.1, step 3.1, step 4.1] ∎
