---
id: def-wall-crossing-functor-and-unit-counit
kind: definition
title: The wall-crossing functor and its unit and counit
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-projective-functors-on-a-regular-integral-category-o-block,
       def-translation-functor-between-o-blocks,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       def-dot-action-facets-and-single-wall-translation-data,
       thm-translation-to-and-from-a-wall-on-standard-modules,
       def-axiom-of-choice, lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       prop-highest-weight-of-the-dual-representation]
justified_by: [thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.4 'Verschiebung durch die Wand' and Corollary 1: V B_s = C^mu \\otimes_{C^s} V, with B_on, B_out the two wall translations (preprint pp. 15-17)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Definition 4.6: 'We define the wall-crossing functor Theta_s := T^0_mu o T^mu_0 : O_0 -> O_0. It doesn't depend on mu and is self-biadjoint.' (printed p. 7)"
    - title: "Jonathan Brundan, Representations of the general linear Lie superalgebra in the BGG category O (survey; Section 4 with Soergel's Endomorphismensatz and Struktursatz)"
      url: "https://darkwing.uoregon.edu/~brundan/papers/supero.pdf"
      locator: "Section 4, the standard description of translation functors and the references to Soergel's theorems"
---

## Definition

Assume the Axiom of Choice, inherited from the published block and
translation theory ([[def-axiom-of-choice]],
[[def-translation-functor-between-o-blocks]]).

Fix the dominant regular integral representative $\lambda$ of a regular
integral block $\mathcal O_\lambda$
([[def-regular-integral-category-o-block-and-its-antidominant-weight]]) and an
integral weight $\mu$ such that $\lambda+\rho$ is regular dominant and
$\mu+\rho$ is dominant with dot stabilizer exactly $\{1,s\}$ for a reflection
$s=s_\alpha$; this is the dominant-chamber version of single-wall translation
data, the published
[[def-dot-action-facets-and-single-wall-translation-data]] being stated with
antidominant representatives, and the dominant standard counts below are
proved through the norm-distance and extremal-weight bounds
([[lem-dominant-norm-distance-comparison]],
[[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]) rather than
by applying that datum literally. Let $\nu$ be the unique dominant element of
the linear Weyl orbit of $\mu-\lambda$ and let
$E=L(\nu)$ be the finite-dimensional simple module of highest weight $\nu$, so
that $\mu-\lambda$ is an extremal weight of $E$; write
$E^{*}=L(-w_0\nu)$ for its dual
([[prop-highest-weight-of-the-dual-representation]]).

With $\chi_\lambda,\chi_\mu$ the generalized central characters and
$\operatorname{pr}$ the exact central projections of
[[def-translation-functor-between-o-blocks]], define the **onto-wall** and
**out-of-wall** translations
$$T_{\mathrm{on}}:=\operatorname{pr}_{\chi_\mu}\circ(E\otimes-)\big|_{\mathcal O_{\chi_\lambda}},\qquad T_{\mathrm{out}}:=\operatorname{pr}_{\chi_\lambda}\circ(E^{*}\otimes-)\big|_{\mathcal O_{\chi_\mu}},$$
and the **wall-crossing functor**
$$\theta_s:=T_{\mathrm{out}}\circ T_{\mathrm{on}}\colon\mathcal O_\lambda\longrightarrow\mathcal O_\lambda .$$

**Basic properties.** Both translations are exact, and $T_{\mathrm{out}}$ is
both a left and a right adjoint of $T_{\mathrm{on}}$
([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]); hence
$\theta_s$ is exact and, as a composite of restriction-of-scalars and central
block projection applied to tensoring by $E^{*}\otimes E$, it is a natural
direct summand of the endofunctor
$\operatorname{pr}_{\chi_\lambda}\circ((E^{*}\otimes E)\otimes-)\circ\operatorname{incl}_{\chi_\lambda}$,
so it is a projective functor on $\mathcal O_\lambda$ in the sense of
[[def-projective-functors-on-a-regular-integral-category-o-block]]. On
standard objects the dominant-chamber counts are
$T_{\mathrm{on}}\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$ and the
two-factor flag $[\Delta(w\cdot\lambda)]+[\Delta(w\cdot s\cdot\lambda)]$ for
$T_{\mathrm{out}}\Delta(w\cdot\mu)$, by
[[thm-translation-to-and-from-a-wall-on-standard-modules]] applied after
transporting the wall datum to its antidominant representative.

**Unit and counit.** The two tensor-block adjunctions supply natural
transformations
$$\eta\colon\operatorname{id}_{\mathcal O_\lambda}\longrightarrow\theta_s,\qquad\varepsilon\colon\theta_s\longrightarrow\operatorname{id}_{\mathcal O_\lambda},$$
where $\eta$ is the unit of the adjunction $T_{\mathrm{on}}\dashv T_{\mathrm{out}}$
and $\varepsilon$ the counit of the adjunction $T_{\mathrm{out}}\dashv T_{\mathrm{on}}$;
each satisfies the triangle identities with its companion counit or unit on
the wall category, and these identities are part of the data. The pair
$(\theta_s,\eta,\varepsilon)$ is determined by the choice of the
biadjunction maps, which are fixed once and for all.

**Independence of the auxiliary weight.** Up to natural equivalence the
functor $\theta_s$ depends only on the wall $s$ and the block
$\mathcal O_\lambda$, not on the chosen ambient weight $\mu$: this
well-definedness statement is discharged forward by
[[thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]],
which lifts the equality of the evaluations on standard objects to a natural
equivalence; it is recorded in `justified_by` and is not used to construct
$\theta_s$ or to generate objects.
