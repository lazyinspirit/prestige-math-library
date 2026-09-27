---
id: "rem-differentials-detect-infinitesimals-not-all-singularities-alone"
kind: "remark"
title: "Differential rank alone does not prove smoothness"
status: published
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["def-smooth-relative-dimension-via-differentials", "lem-differential-of-morphism-via-cotangent-map", "thm-formally-unramified-differentials-zero", "def-unramified-morphism-finite-type"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Morphisms 29.35.13 (tag 02G2) and the warning following it"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
    - title: "Stacks Morphisms, Lemma 29.36.2: unramifiedness and vanishing differentials"
      url: "https://stacks.math.columbia.edu/tag/02G3"
    - title: "Stacks Algebra 10.137.1, smoothness of a ring map via finite presentation and the naive cotangent complex"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
---

## Remark

The vanishing, or the local freeness of constant rank, of $\Omega_{X/S}$
records first-order infinitesimal information about a morphism
$f\colon X\to S$. The differential-rank condition of
[[def-smooth-relative-dimension-via-differentials]] is therefore not a
smoothness criterion. Vanishing of $\Omega_{X/S}$ is equivalent to formal
unramifiedness ([[thm-formally-unramified-differentials-zero]]), a uniqueness
statement about square-zero lifts; it does not by itself imply existence of
lifts or flatness. It does have further consequences under finiteness
hypotheses: if $f$ is locally of finite type, vanishing of $\Omega_{X/S}$
makes $f$ unramified ([[def-unramified-morphism-finite-type]]). The warning
here is that differential rank alone does not establish smoothness, not that
vanishing differentials carry no geometric information.

The source treatment makes the separation explicitly. Smoothness of a ring map
is defined by finite presentation together with a condition on the naive
cotangent complex, not by the module of differentials alone; and after defining
the relative-dimension condition the Stacks text records that it is *not*
enough to assume that $f$ is flat, of finite presentation, and
$\Omega_{X/S}$ finite locally free of rank $d$: a counterexample is given by
$$\operatorname{Spec}(\mathbb F_p[t])\longrightarrow \operatorname{Spec}(\mathbb F_p[t^{p}]).$$
That morphism is flat of finite presentation with $\Omega$ free of rank one,
and it is precisely the Frobenius morphism discussed below; the rank of
$\Omega$ is not the fibre-dimension computation and no regularity of the fibres
follows from it.

The same distinction appears at the level of tangent maps. A morphism
$F\colon\mathbb A^{1}_{k}\to\mathbb A^{1}_{k}$ over $\mathbb F_p$ can have
$\mathrm dF=0$ as a map between the absolute modules
$F^{*}\Omega_{\mathbb A^{1}_{k}/k}\to\Omega_{\mathbb A^{1}_{k}/k}$
([[lem-differential-of-morphism-via-cotangent-map]]), so that its dual fibre
map vanishes at every point (with the target cotangent space extended to the
source residue field), while the **relative** module
$\Omega_{\mathbb A^{1}_{k}/\mathbb A^{1}_{k},F}$ of the morphism is nonzero, so
that $F$ is not formally unramified and hence not formally etale. The companion
examples page records this Frobenius witness; the moral is that a zero map on
absolute differentials checks a different module from the one whose vanishing
would give formal unramifiedness, and that a rank computation may not be substituted
for the flatness, finiteness and fibre hypotheses that enter smoothness. In
particular, no item on this page may conclude smoothness from a differential
rank computation alone.
