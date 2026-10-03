---
id: def-strict-transform-closed-subscheme
kind: definition
title: "Strict transform of a closed subscheme"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - thm-pullback-center-ideal-invertible
  - def-exceptional-divisor-blowup
  - def-closed-immersion-schemes
  - def-scheme-theoretic-image
  - thm-localisation-of-modules-is-exact
  - thm-qc-ideal-closed-subscheme-correspondence-complete
  - lem-spectrum-localization-open-immersion
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
that is, the scheme-theoretic image $Y':=\overline U$ of $j$
([[def-scheme-theoretic-image]]). This image exists for all the data above:
the kernel ideal sheaf
$\mathcal K=\ker(\mathcal O_{Y\times_X\operatorname{Bl}}\to j_*\mathcal O_U)$
is quasi-coherent by the chart calculation below. The corresponding closed
subscheme exists by [[thm-qc-ideal-closed-subscheme-correspondence-complete]]
and is the smallest closed subscheme through which $j$ factors. Its
structural map $Y'\to Y$ is the restriction of the projection.

**Chartwise description.** The strict transform is determined by its
restriction to the standard affine charts of the blowup. Let
$U_0=\operatorname{Spec}A\subseteq X$ be an affine open and let $a\in
\Gamma(U_0,\mathcal I)$; on the chart
$\operatorname{Spec}A[\mathcal I/a]\subseteq\operatorname{Bl}_{\mathcal I}X$
the exceptional subscheme is cut out by $a$ by [[lem-affine-blowup-algebra-properties]] and
[[def-exceptional-divisor-blowup]], the
inverse image of $Y$ is cut out by the ideal $JA[\mathcal I/a]$, where
$J=\Gamma(U_0,\mathcal I_Y)$, and the strict transform meets the chart in the
closed subscheme defined by the **saturation**
$$(JA[\mathcal I/a]:a^\infty)=\bigl\{f\in A[\mathcal I/a]:a^nf\in JA[\mathcal I/a]\text{ for some }n\ge0\bigr\},$$
the largest ideal of the chart ring containing $JA[\mathcal I/a]$ whose
localisation at $a$ equals the localisation of $JA[\mathcal I/a]$.
To verify both existence and this description, put $C=A[\mathcal I/a]$
and $H=JC$. The inverse image of $Y$ on this chart is
$\operatorname{Spec}(C/H)$, and its intersection with $U$ is $D(a)$
([[lem-spectrum-localization-open-immersion]]). The kernel of
$C\to(C/H)_a$ is precisely $(H:a^\infty)$: a class becomes zero after
localization exactly when some power of $a$ annihilates it. For every
$g\in C$, localization of this kernel at $g$ is the kernel of
$C_g\to(C/H)_{ag}$, by [[thm-localisation-of-modules-is-exact]]. Thus
$\mathcal K$ on $\operatorname{Spec}(C/H)$ is the associated sheaf of
$(H:a^\infty)/H$, so it is quasi-coherent without any Noetherian hypothesis.
These kernels agree on chart overlaps, since they all consist of sections
whose restriction to $U$ is zero; equivalently the ratio transition of
[[thm-affine-blowup-standard-charts]] makes $a$ and $b$ unit multiples.
Consequently the chart subschemes glue to the closed subscheme cut out by
$\mathcal K$. Its ideal restricts to zero on $U$, so $j$ factors through it.
Any other closed subscheme through which $j$ factors has ideal contained in
$\mathcal K$, and therefore contains this one. This proves that the glued
saturation construction is the scheme-theoretic closure in all cases,
including an empty deleted open, whose closure is empty.

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

- The strict transform depends on the scheme structure of the center, not
  just its underlying closed set. Multiplication of its ideal by an invertible
  ideal can preserve the blowup canonically while changing the center,
  exceptional locus and deleted open; it need not preserve strict transforms.
  For example, on $\mathbb A^2_k$ the ideals $\mathcal O$ and $(x)$ both have
  identity blowup. The strict transform of $V(x)$ is $V(x)$ for the first center
  and empty for the second.
- The chartwise saturation description is the one used in computations:
  the strict transform of a hypersurface with local equation $f$ in the chart
  of $a$ is cut out by the saturation $(f:a^\infty)$, which removes the
  components supported inside the exceptional divisor; no closure operation is
  visible beyond this saturation.
- No reducedness, regularity or normality of $X$ or $Y$ is assumed; the
  reducedness conclusion above is a statement about the strict transform, not
  about $Y\times_X\operatorname{Bl}_{\mathcal I}X$, which need not be reduced
  even for reduced $Y$.
