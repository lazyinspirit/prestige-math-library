---
id: ex-the-wall-crossing-functor-on-verma-modules-in-rank-one
kind: example
title: The wall-crossing functor on Verma modules in rank one
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-wall-crossing-functor-and-unit-counit,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       def-verma-module, thm-translation-to-and-from-a-wall-on-standard-modules,
       def-verma-flag-and-its-multiplicities, def-axiom-of-choice,
       def-bgg-category-o,
       def-regular-integral-category-o-block-and-its-antidominant-weight]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.7 in the rank-one case and Definition 4.6 for the wall-crossing functor (printed pp. 7-8)"
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.1, the verification of the translation computation for the rank-one wall (the case of a single simple reflection), preprint pp. 8-9"
---

## Example

Assume the Axiom of Choice. Work in $\mathfrak{sl}_2$ with the conventions of
[[def-bgg-category-o]]: $\lambda=0$, $\rho=1$, so the regular standards are
$\Delta_1=M(0)$ and $\Delta_s=M(-2)$ for the two elements of
$W=\{1,s\}$, and the singular wall weight is $\mu=-1$, whose shifted value is
$\mu+\rho=0$. The dominant regular integral block is that of $\lambda=0$
([[def-regular-integral-category-o-block-and-its-antidominant-weight]]), and
the wall-crossing functor is that of
[[def-wall-crossing-functor-and-unit-counit]] built from the two-dimensional
translating module $E=L(1)$ with highest weight $\mu-\lambda=-1$ up to Weyl
conjugacy.

**Onto the wall.** Tensoring the two regular standards with the two-dimensional
module and projecting to the central character of the wall preserves the
unique wall standard: $T_{\mathrm{on}}\Delta_1\cong M(-1)$ and
$T_{\mathrm{on}}\Delta_s\cong M(-1)$, since $\Delta_1$ and $\Delta_s$ differ by
the single simple-root lowering and the tensor filtration retains exactly the
labels of weight $-1$ in the shifted parametrization, as in
[[thm-translation-to-and-from-a-wall-on-standard-modules]].

**Back out of the wall.** The wall block at $\mu=-1$ has a single simple
object $M(-1)=L(-1)$ and is semisimple; hence $M(-1)$ is projective and
injective there, and the exact biadjoint return translation
$T_{\mathrm{out}}$ sends it to a projective object of the regular block whose
Verma flag has the two factors $M(0)$ and $M(-2)$, once each, by
[[thm-translation-to-and-from-a-wall-on-standard-modules]]. By biadjunction, its Hom to $L(-2)$ is one-dimensional, since
$T_{\mathrm{on}}L(-2)=M(-1)$; its Hom to $L(0)$ is zero, since
$L(1)\otimes L(0)=L(1)$ has a different central character from $M(-1)$.
Thus its only simple quotient is $L(-2)$, once, and the projective-cover
decomposition identifies it with $P(-2)$.

**Conclusion.** Both $\theta_s\Delta_1$ and $\theta_s\Delta_s$ are therefore
isomorphic to the same nonsplit two-step extension
$$0\longrightarrow M(0)\longrightarrow P(-2)\longrightarrow M(-2)\longrightarrow 0,$$
with class $[\Delta_1]+[\Delta_s]$ in the Grothendieck group, in agreement with
[[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]].
Maximal-weight peeling puts $M(0)$ first in the flag; the extension is
nonsplit because $P(-2)$ is indecomposable as a projective cover. The wall
sits at highest weight $-1$, equivalently at shifted parameter $\mu+\rho=0$;
the regular highest weight $0$ is the dominant maximum of the block;
the antidominant minimum is $-2$.
