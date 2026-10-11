---
id: def-regular-integral-category-o-block-and-its-antidominant-weight
kind: definition
title: The regular integral block and its antidominant weight
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-bgg-category-o, def-integral-weyl-group-of-a-weight,
       cor-central-characters-are-dot-weyl-orbits,
       thm-central-character-summands-split-into-linkage-blocks,
       def-verma-module, def-standard-and-costandard-objects-in-category-o,
       def-grothendieck-group-and-character-of-category-o,
       def-dot-action-facets-and-single-wall-translation-data,
       def-axiom-of-choice, thm-bgg-reciprocity,
       cor-projective-standard-labels-lie-above-the-head,
       cor-antidominant-verma-modules-are-simple,
       thm-verma-embedding-for-an-arbitrary-positive-root,
       thm-verma-module-has-a-unique-simple-quotient,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-category-o-has-enough-projectives,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       thm-projectives-in-category-o-have-verma-flags,
       def-root-reflections-and-the-weyl-group-action,
       def-verma-flag-and-its-multiplicities,
       thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.2: category O of [BGG2], 'P in O an antidominant projective, i.e. the projective cover in O of a simple Verma module', and the shift to the dot action w.mu = w(mu+rho)-rho (preprint p. 4)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Part 4, Sections 7-8: the block O_0, the bijection W -> Irr(O_0), w -> L(w.0), and Definition 4.6 with the chamber C_Z (printed pp. 7-9)"
---

## Definition

Assume the Axiom of Choice, inherited from the published block theory
([[thm-central-character-summands-split-into-linkage-blocks]],
[[def-standard-and-costandard-objects-in-category-o]], [[def-axiom-of-choice]]).

Work in category $\mathcal O$ of a finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ with the conventions of [[def-bgg-category-o]]: a Cartan
subalgebra $\mathfrak h$, a positive system with simple roots $\alpha_i$, the
Weyl group $W$ of [[def-root-reflections-and-the-weyl-group-action]], the Weyl
vector $\rho$, and the dot action $w\cdot\lambda=w(\lambda+\rho)-\rho$. Write
$Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$ and $\mu\le\lambda$ when
$\lambda-\mu\in Q^+$.

**The fixed weight.** Fix a weight $\lambda$ which is **integral**,
**dot-regular** and **dominant**: $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z$
for every root $\alpha$ (so the integral Weyl group $W_\lambda$ of
[[def-integral-weyl-group-of-a-weight]] is all of $W$), and
$\langle\lambda+\rho,\alpha^\vee\rangle\neq0$, respectively $>0$, for every
root, respectively every positive root ([[def-dot-action-facets-and-single-wall-translation-data]]).
The set $\Phi_\lambda$ of [[def-integral-weyl-group-of-a-weight]] is therefore
the full root system and $W_\lambda=W$.

**The block.** The regular point $\lambda+\rho$ lies in an open chamber. An element fixing
it preserves that chamber, so [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]
makes its stabilizer trivial; hence the linkage class
$$C=W_\lambda\cdot\lambda=W\cdot\lambda$$
has exactly $|W|$ elements. The **regular integral block** is the full
subcategory
$$\mathcal O_\lambda:=\mathcal O_C$$
of objects of $\mathcal O$ whose simple composition factors have labels in
$C$, as in [[thm-central-character-summands-split-into-linkage-blocks]]; it is
nonzero, abelian and extension-closed as a block, and
$K_0(\mathcal O_\lambda)$ is the subgroup of $K_0(\mathcal O)$ of
[[def-grothendieck-group-and-character-of-category-o]] spanned by the classes
of objects of the block.

**Its labelled objects.** For $w\in W$ define the standard and costandard
objects and the simple object by
$$\Delta(w\cdot\lambda):=M(w\cdot\lambda),\qquad \nabla(w\cdot\lambda):=D(M(w\cdot\lambda)),\qquad L(w\cdot\lambda):=M(w\cdot\lambda)/J(w\cdot\lambda),$$
where $M$ is the Verma module of [[def-verma-module]], $D$ the restricted dual
of [[def-standard-and-costandard-objects-in-category-o]], and $J(w\cdot\lambda)$
the sum of all proper submodules, so that $L(w\cdot\lambda)$ is the unique
simple quotient of $\Delta(w\cdot\lambda)$ by
[[thm-verma-module-has-a-unique-simple-quotient]]. By
[[thm-simple-objects-of-category-o-are-highest-weight-modules]] the simple
objects of $\mathcal O_\lambda$ are exactly the $L(w\cdot\lambda)$ for
$w\in W$, pairwise non-isomorphic. Let $P(w\cdot\lambda)$ denote a projective
cover of $L(w\cdot\lambda)$, which may be chosen inside the linkage class of
$w\cdot\lambda$ and is unique up to isomorphism and indecomposable
([[thm-category-o-has-enough-projectives]]); every such $P(w\cdot\lambda)$
carries a finite Verma flag
([[thm-projectives-in-category-o-have-verma-flags]],
[[def-verma-flag-and-its-multiplicities]]).

**Triangularity of the Verma-flag matrix.** For all $v,w\in W$,
$$[\Delta(w\cdot\lambda):L(v\cdot\lambda)]\neq0\ \Longrightarrow\ v\cdot\lambda\le w\cdot\lambda,\qquad [\Delta(w\cdot\lambda):L(w\cdot\lambda)]=1,$$
where the multiplicity is the composition multiplicity of
[[def-standard-and-costandard-objects-in-category-o]]. Indeed
$(P(v\cdot\lambda):\Delta(w\cdot\lambda))=[\Delta(w\cdot\lambda):L(v\cdot\lambda)]$
by [[thm-bgg-reciprocity]] and
$(P(v\cdot\lambda):\Delta(w\cdot\lambda))\neq0$ forces
$w\cdot\lambda-v\cdot\lambda\in Q^+$ while
$(P(v\cdot\lambda):\Delta(v\cdot\lambda))=1$ by
[[cor-projective-standard-labels-lie-above-the-head]].

**The antidominant weight.** Let $w_0\in W$ be the longest element. Since
$\langle w_0\cdot\lambda+\rho,\alpha^\vee\rangle
=\langle\lambda+\rho,w_0^{-1}\alpha^\vee\rangle<0$ for every positive root
$\alpha$, the antidominant Verma module $\Delta(w_0\cdot\lambda)$ is simple
([[cor-antidominant-verma-modules-are-simple]]), so
$$\Delta(w_0\cdot\lambda)=L(w_0\cdot\lambda)$$
and this is the unique standard object of the block that is simple: for
$w\neq w_0$ the regular weight $w\cdot\lambda$ is not antidominant, so some
positive root $\alpha$ has
$\langle w\cdot\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z_{>0}$, and
[[thm-verma-embedding-for-an-arbitrary-positive-root]] embeds
$M(s_\alpha\cdot(w\cdot\lambda))$ as a proper submodule of
$\Delta(w\cdot\lambda)$. The weight $w_0\cdot\lambda$ is called the
**antidominant weight** of the block and $\Delta(w_0\cdot\lambda)$ its
antidominant Verma module.

**Grothendieck group.** By [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]
applied to the finite label set $C=W\cdot\lambda$, both the classes
$[\Delta(w\cdot\lambda)]$ and the classes $[L(w\cdot\lambda)]$, $w\in W$,
form $\mathbb Z$-bases of $K_0(\mathcal O_\lambda)$, and the transition matrix
between them is unitriangular for any linear order of $W$ extending the order
on the dot orbit induced by $\le$.

Every statement above uses the published block, Verma, duality and
projective-cover theory named in the citations, and that theory assumes the
Axiom of Choice; the definition itself selects nothing further.
