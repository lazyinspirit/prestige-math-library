---
id: def-strict-transform-closed-subscheme
kind: definition
title: "Strict transform of a closed subscheme"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-exceptional-divisor-blowup
  - def-closed-immersion-schemes
  - def-scheme-theoretic-image
  - lem-schematic-closure-and-dense-agreement
  - def-quasi-coherent-ideal-sheaf
  - def-quasi-coherent-module-scheme
  - def-axiom-of-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.34.1 (tag 080D) and Lemma 31.34.2 (tag 080E) on strict transforms"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "The Blow-up Closure Lemma 19.2.6 and the discussion of the proper transform, pp. 381-383"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice, inherited from the relative Proj construction used
by the blowup ([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$
be a quasi-coherent ideal sheaf of finite type
([[def-quasi-coherent-ideal-sheaf]]), let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of
[[def-blowup-scheme-along-ideal]] with exceptional subscheme
$E=\pi^{-1}(Z)$ ([[def-exceptional-divisor-blowup]]), and let
$Y\hookrightarrow X$ be a closed subscheme
([[def-closed-immersion-schemes]]) with scheme-theoretic inverse image
$Y\times_X\operatorname{Bl}_{\mathcal I}X$. Write
$$U:=(Y\times_X\operatorname{Bl}_{\mathcal I}X)\smallsetminus E$$
for the open subscheme obtained by deleting $E$ from this inverse image, with
its open immersion $j\colon U\to Y\times_X\operatorname{Bl}_{\mathcal I}X$.

The **strict transform** (or **proper transform**) of $Y$ is the
scheme-theoretic closure of $U$ in $Y\times_X\operatorname{Bl}_{\mathcal I}X$,
that is, the scheme-theoretic image
$Y':=\overline{U}$ of $j$ ([[def-scheme-theoretic-image]]); when this image
exists it is a closed subscheme $Y'\hookrightarrow
Y\times_X\operatorname{Bl}_{\mathcal I}X$ with structural morphism
$Y'\to Y$ the restriction of the projection. When
$Y\times_X\operatorname{Bl}_{\mathcal I}X$ is locally
Noetherian and $j$ is quasi-compact, the closure exists and is computed by the
kernel description of [[lem-schematic-closure-and-dense-agreement]]: writing
$\mathcal K:=\ker\bigl(\mathcal O_{Y\times_X\operatorname{Bl}}\to
j_*\mathcal O_U\bigr)$, the closed subscheme $Z_{\mathcal K}$ cut out by
$\mathcal K$ is $Y'$, and it is the smallest closed subscheme of
$Y\times_X\operatorname{Bl}_{\mathcal I}X$ through which $j$ factors.

**Chartwise description.** The strict transform is determined by its
restriction to the standard affine charts of the blowup. Let
$U_0=\operatorname{Spec}A\subseteq X$ be an affine open and let $a\in
\Gamma(U_0,\mathcal I)$; on the chart
$\operatorname{Spec}A[\mathcal I/a]\subseteq\operatorname{Bl}_{\mathcal I}X$
the exceptional subscheme is cut out by $a$ (this is the chart computation of
[[def-blowup-scheme-along-ideal]] recorded in the affine presentation), the
inverse image of $Y$ is cut out by the ideal $JA[\mathcal I/a]$, where
$J=\Gamma(U_0,\mathcal I_Y)$, and the strict transform meets the chart in the
closed subscheme defined by the **saturation**
$$(JA[\mathcal I/a]:a^\infty)=\bigl\{f\in A[\mathcal I/a]:a^nf\in JA[\mathcal I/a]\text{ for some }n\ge0\bigr\},$$
the largest ideal of the chart ring containing $JA[\mathcal I/a]$ whose
localisation at $a$ equals the localisation of $JA[\mathcal I/a]$.
These local closed subschemes agree on overlaps of charts: on the overlap of
the charts of $a$ and $b$ the elements $a$ and $b$ differ by a unit, so the two
saturations coincide, and after localising at $a$ the saturation becomes the
inverse image ideal of $Y$ itself, matching the fact that the blowup is an
isomorphism over $X\smallsetminus Z$.
Hence the chartwise closed subschemes glue to a closed subscheme
$Y'\hookrightarrow Y\times_X\operatorname{Bl}_{\mathcal I}X$, and this glued
description gives the strict transform even when the scheme-theoretic closure
is not known to exist; where the closure exists the two agree, as the kernel
description of [[lem-schematic-closure-and-dense-agreement]] identifies the
closure with the saturation on each chart on which the exceptional divisor is
principal.

**Reducedness.** If $Y$ is reduced, then $Y'$ is reduced. Indeed, on a chart
as above the ring of the strict transform is
$A[\mathcal I/a]/(JA[\mathcal I/a]:a^\infty)$, and the saturation is by
construction the kernel of the localisation
$A[\mathcal I/a]/(JA[\mathcal I/a])\to A[\mathcal I/a][1/a]/(J)$, so this ring
embeds into $\bigl(A[\mathcal I/a]/(J)\bigr)[1/a]=(A/J)[1/a]$, which is reduced
when $Y$ is; a subring of a reduced ring is reduced, and reducedness is local,
so $Y'$ is reduced.

**Iteration.** The construction applies verbatim to a blowup of
$\operatorname{Bl}_{\mathcal I}X$ along any quasi-coherent ideal sheaf of
finite type on it: for a closed subscheme $W\hookrightarrow
\operatorname{Bl}_{\mathcal I}X$, its inverse image under a further blowup and
the deletion of that blowup's exceptional subscheme define the strict transform
of $W$, and the chartwise saturation description is unchanged. In particular a
strict transform of a strict transform may be formed along a further blowup.

## Remarks

- The strict transform depends on the ideal sheaf $\mathcal I$, not only on the
  closed subscheme $Z=V(\mathcal I)$: multiplication of $\mathcal I$ by an
  invertible ideal changes the blowup but not the underlying deletion
  $U$, so the two strict transforms are compared along the canonical
  isomorphism of [[def-blowup-fractional-ideal]].
- The chartwise saturation description is the one used in computations:
  the strict transform of a hypersurface with local equation $f$ in the chart
  of $a$ is cut out by the saturation $(f:a^\infty)$, which removes the
  components supported inside the exceptional divisor; no closure operation is
  visible beyond this saturation.
- No reducedness, regularity or normality of $X$ or $Y$ is assumed; the
  reducedness conclusion above is a statement about the strict transform, not
  about $Y\times_X\operatorname{Bl}_{\mathcal I}X$, which need not be reduced
  even for reduced $Y$.
