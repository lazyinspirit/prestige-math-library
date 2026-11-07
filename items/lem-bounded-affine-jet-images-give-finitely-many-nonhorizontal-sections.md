---
dependency_level: 0
id: lem-bounded-affine-jet-images-give-finitely-many-nonhorizontal-sections
kind: lemma
title: Bounded affine jet images give finitely many nonhorizontal sections
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-derivation-algebra
  - thm-differentials-smooth-locally-free
  - lem-ag-differentials-transitivity
  - cor-noether-normalisation-module-finiteness
  - thm-normalization-glues-integral-finite-type-curves
  - thm-regular-equals-smooth-over-perfect-field
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-valuative-criterion-properness
  - lem-proper-stable-base-change
  - thm-proper-morphism-closed-image
  - thm-affine-domain-dimension-transcendence-degree
  - thm-global-functions-proper-integral-variety
  - lem-proper-cohomology-field-extension
  - thm-ag-standard-smooth-geometric-regularity
  - lem-proper-stable-composition
  - thm-finite-morphism-integral-closed
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-projective-space-proper-over-base
  - cor-finite-morphism-proper
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §3(2–4), printed pp. 141–142; constructible parameter formulation"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §2(C), printed pp. 67–69"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $R$ be a smooth affine
integral $k$-variety of positive dimension, and let $\pi:X\to R$ be a
smooth proper family of geometrically integral curves, with $X$ integral.
Let $F\to X$ be the affine bundle of splittings of
$$0\to T_{X/R}\to T_{X/k}\to\pi^*T_{R/k}\to0.$$
A rational section $s:R\dashrightarrow X$ has its derivative jet
$j(s):R\dashrightarrow F$, the splitting given by its differential.

Suppose a finite-type affine integral $R$-scheme $Y$ has a morphism
$\varphi:F\to Y$ over $R$, and there are closed subsets $E\subseteq F$
and $B\subseteq Y$ such that $\varphi$ induces an isomorphism
$F\setminus E\cong Y\setminus B$. Choose affine $k$-algebra generators
$y_1,\ldots,y_m$ of $\Gamma(Y,\mathcal O_Y)$. Assume there are fixed
finite-dimensional $k$-vector spaces $W_i\subseteq\Gamma(R,\mathcal O_R)$
such that, for every rational section $s$, the rational function
$y_i\circ\varphi\circ j(s)$ belongs to $W_i$.

Then only finitely many rational sections $s$ have their generic derivative
jet outside $E$. The displayed bounded-space hypothesis is an assumption
of this lemma, not a consequence asserted here.

## Facts & Assumptions

**Given:** AC, the family, splitting bundle, affine morphism, exceptional
subsets, generators and fixed bounded coordinate spaces of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Differentials of a smooth morphism are locally free of the relative
dimension. Their transitivity sequence is right exact. In a standard smooth
presentation, the invertible Jacobian block solves the dependent
differentials in terms of the base differentials and the free coordinates.
Derivations satisfy the chain and quotient rules.
[[thm-differentials-smooth-locally-free]]
[[lem-ag-differentials-transitivity]] [[def-derivation-algebra]]

[F2] Noether normalization gives a finite map from an affine integral
variety to affine space of its dimension. A finite-type domain has
dimension equal to its function-field transcendence degree.
[[cor-noether-normalisation-module-finiteness]]
[[thm-affine-domain-dimension-transcendence-degree]]
Finite morphisms are closed. A nonempty affine scheme of finite type over
algebraically closed $k$ has a $k$-point, by taking a maximal ideal and its
finite residue field.
[[thm-finite-morphism-integral-closed]]
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F3] Normalization of an integral curve is finite and birational; its
closed local rings are DVRs. Over perfect $k$ a regular finite-type curve is
smooth. Completing an affine curve projectively and normalizing therefore
gives a smooth proper curve containing its normalization as an open.
[[thm-normalization-glues-integral-finite-type-curves]]
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[lem-proper-stable-composition]]
Projective space is proper, and finite morphisms are proper, so the projective
closure and its finite normalization are proper.
[[thm-projective-space-proper-over-base]] [[cor-finite-morphism-proper]]

[F4] Properness gives unique lifts of valuative diagrams, including
those from local DVRs of a smooth source. Properness is preserved by base
change, and proper maps have closed images.
[[thm-valuative-criterion-properness]]
[[lem-proper-stable-base-change]] [[thm-proper-morphism-closed-image]]

[F5] A smooth finite-type scheme over a field has regular local rings;
products of smooth schemes are smooth by their standard presentations.
[[thm-ag-standard-smooth-geometric-regularity]]
At a codimension-one point its regular Noetherian local ring is a DVR.
[[thm-one-dimensional-regular-local-rings-are-dvrs]]

[F6] Global functions on a proper integral curve over algebraically
closed $k$ are $k$. Proper coherent cohomology commutes with every field
extension, also in degree zero.
[[thm-global-functions-proper-integral-variety]]
[[lem-proper-cohomology-field-extension]]

## Axiom use

AC is inherited through [F1]–[F6]. The construction uses finitely many
coordinate spaces and charts; no cardinal finiteness of a vector space over
infinite $k$ is assumed.

## Proof

**Proof technique:** direct; express possible jets by a constructible set of
bounded coefficient tuples and exclude positive-dimensional parameter curves
using properness.

1.1 The splitting bundle is a finite-type affine bundle. Indeed in a standard smooth presentation for $X/R$ of relative dimension one, the Jacobian block in [F1] solves every dependent differential in terms of the base differentials and one free relative differential. Thus the transitivity sequence is locally split exact on the left as well. Dualizing gives the tangent sequence in the Statement, with locally free quotient. Lifting a local basis of that quotient constructs local splittings; any two differ by a map $\pi^*T_R\to T_{X/R}$. These affine spaces glue with affine-linear transitions and represent $F$. Differentiating a section gives its jet, and differentiating a family in the $R$ direction gives a regular family of jets wherever the underlying family is regular. [F1, given, construct]

1.2 Choose a basis $w_{ij}$ of each $W_i$. The coordinate tuples $v_i=\sum_j a_{ij}w_{ij}$ are parameterized by a finite affine space $V$ over $k$. Finitely many equations of $Y$ and of the condition that its composite to $R$ be the identity become polynomial identities in the field $k(R)$ with parameter variables $a_{ij}$. Such an identity is equivalent to finitely many polynomial equations over $k$: collect the finitely many coefficients in $k(R)$, choose a basis of their finite-dimensional $k$-span, and set each coefficient polynomial to zero. The condition that the generic point avoid $B$ is open, since it is the nonvanishing of at least one of finitely many generators of its ideal, again interpreted as a rational identity on $R$. [given, construct, algebra]

2.1 On this open locus, the inverse of the given isomorphism produces a rational map $u_v:R\dashrightarrow F$. Cover $F$ by finitely many affine charts and their images in $Y\setminus B$ by finitely many principal opens of the affine scheme $Y$. On each such parameter stratum the coordinates of $u_v$ are rational expressions in the $v_i$, with denominators required to be nonzero in $k(R)$. Shrink a nonempty affine open of $R$ to trivialize its tangent bundle. On the chart, the conditions $u_v=j(s_v)$, where $s_v$ is its projection to $X$, are the finitely many chain-rule identities saying that its tangent coordinates equal the derivatives of the coordinates of $s_v$. Base derivations act on the fixed $w_{ij}$ and on the rational chart coefficients, and kill the parameter variables. Clearing the finitely many denominators converts these identities and their required nonvanishing conditions into finite polynomial equations and inequalities over $k$, by step 1.2. Hence the parameter set $P\subseteq V$ of these jets is constructible. Each of its $k$-points gives a rational section with generic jet outside $E$, and every such section gives one of these points by the bounded-space hypothesis. The correspondence is injective because the inverse isomorphism recovers the jet and then the section. [F1, given, algebra, step 1.1, step 1.2]

3.1 Work in one of the finitely many parameter strata of step 2.1 that contains infinitely many points. Then $P$ would contain a nonconstant affine parameter curve $Q$, after normalization. To justify this without a cardinality assumption on $V$, an infinite constructible subset has a positive-dimensional irreducible closure and contains a nonempty open of some such component. Noether-normalize that affine component by [F2]. The finite map takes the closed complement of the open to a proper closed subset of affine space, since its dimension is smaller by [F2]. A line through a point outside that image is not contained in it. A component of the finite inverse image dominating that line is a curve meeting the open; restrict to its intersection with the open and normalize by [F3]. This gives a nonconstant map $Q\to P\subseteq V$. In dimension zero the normalization is a finite algebra over $k$, so the original constructible set would have been finite. [F2, F3, given, step 2.1]

4.1 Complete $Q$ to a smooth proper curve $\overline Q$ by [F3]. The underlying family gives a rational map $R\times\overline Q\dashrightarrow X$ over $R$. The source is smooth and regular by [F5]. At every codimension-one point its local ring is a DVR, so [F4] extends the map there. Each local lift spreads to a neighbourhood: choose an affine target chart, express its finitely many generators as fractions in the source local ring, and clear their finitely many denominators; the relations still hold because the source ring embeds in its function field. The map's indeterminacy is therefore a closed subset of codimension at least two. Its dimension is at most $\dim R-1$. Its projection to $R$ is closed by properness of $\overline Q$ and [F4], and has no larger dimension by [F2]. Remove that proper image to obtain a nonempty open $R'\subseteq R$ on which the whole family is regular on $R'\times\overline Q$. [F2, F3, F4, F5, given, step 3.1]

5.1 Its derivative jets in the $R'$ direction are regular on this product by step 1.1. Compose them with $\varphi$ and each affine coordinate $y_i$. On the generic fibre over $R'$, this is a global regular function on $\overline Q_{k(R)}$. By [F6], that function belongs to $k(R)$ and is independent of the parameter. Restrict back to $Q$, where it is $\sum_j a_{ij}(q)w_{ij}$. Choose $q_0\in Q(k)$. Subtracting the value at $q_0$ gives $\sum_j (a_{ij}(q)-a_{ij}(q_0))w_{ij}=0$. The $k$-independent elements $w_{ij}$ remain independent after tensoring with the coordinate ring of $Q$, so every coefficient is zero. Thus every parameter coordinate is constant on $Q$, contradicting the nonconstant map $Q\to V$ of step 3.1. Hence $P(k)$ is finite and so are the sections in the Statement. [F6, given, algebra, step 1.1, step 2.1, step 3.1, step 4.1] ∎
