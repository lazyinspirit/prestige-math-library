---
id: def-projective-functors-on-a-regular-integral-category-o-block
kind: definition
title: Projective functors on a regular integral block
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-translation-functor-between-o-blocks,
       prop-tensoring-with-a-finite-dimensional-module-preserves-category-o,
       lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective,
       lem-block-projection-preserves-projectives,
       thm-category-o-has-enough-projectives, def-additive-category,
       def-axiom-of-choice,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. N. Bernstein, S. I. Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras, Compositio Math. 41 (1980) 245-285 (Numdam full text)"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Section 3.1, definition: 'The functor F: M^Zf -> M^Zf is called projective if it is isomorphic to a direct summand of the functor F_V|M^Zf for a finite dimensional g-module V'; Lemma 3.2(i)-(v) for the closure properties"
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.2 and Section 2.4: projective functors 'im Sinne von [BGe]', and their use in the proof of the structure theorem (preprint pp. 4-6 and 15-17)"
---

## Definition

Assume the Axiom of Choice, inherited from the published block theory
([[def-translation-functor-between-o-blocks]], [[def-axiom-of-choice]]).

Fix a regular integral block $\mathcal O_\lambda$ as in
[[def-regular-integral-category-o-block-and-its-antidominant-weight]], with
inclusion $\operatorname{incl}_\lambda:\mathcal O_\lambda\to\mathcal O$ and
exact projection $\operatorname{pr}_\lambda:\mathcal O\to\mathcal O_\lambda$
of [[def-translation-functor-between-o-blocks]], so that
$\operatorname{pr}_\lambda\circ\operatorname{incl}_\lambda=\operatorname{id}$;
the block is a direct summand of $\mathcal O$ and contains the projective
covers $P(w\cdot\lambda)$ of [[thm-category-o-has-enough-projectives]]. For a
finite-dimensional $\mathfrak h$-semisimple $\mathfrak g$-module $E$ define
the endofunctor
$$F_E:=\operatorname{pr}_\lambda\circ(E\otimes-)\circ\operatorname{incl}_\lambda\colon\mathcal O_\lambda\longrightarrow\mathcal O_\lambda .$$

**Basic properties.** The functor $F_E$ is well defined and additive:
$E\otimes-$ is an exact endofunctor of $\mathcal O$ and maps $\mathcal O$ into
itself ([[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]]),
and $\operatorname{pr}_\lambda$ is exact. Hence $F_E$ is exact as a composite of
exact functors. It preserves projective objects: if $P\in\mathcal O_\lambda$ is
projective, then $E\otimes P$ is projective in $\mathcal O$
([[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]]),
and $\operatorname{pr}_\lambda$ preserves projectives
([[lem-block-projection-preserves-projectives]]). The identity module $E=0$
gives the zero functor, and $E=\mathbb C$ the identity functor, since the
one-dimensional trivial module acts by the identity.

**Projective functors.** A **projective functor** on
$\mathcal O_\lambda$ is an endofunctor of $\mathcal O_\lambda$ isomorphic to a
direct summand of some $F_E$, $E$ finite dimensional and
$\mathfrak h$-semisimple. Write $\mathcal F_\lambda$ for the full subcategory
of the endofunctor category of $\mathcal O_\lambda$ whose objects are the
projective functors, with arbitrary natural transformations as morphisms; it is
additive with the pointwise biproducts of [[def-additive-category]], and
"direct summand" means a pair of mutually inverse idempotent splittings as in
the idempotent-completion convention of that definition.

**Closure properties.** The class of projective functors is closed under
finite direct sums, composition, direct summands and passage to adjoints:

1. $F_{E\oplus E'}\cong F_E\oplus F_{E'}$, since tensoring with a direct sum
distributes over direct sums and $\operatorname{pr}_\lambda$ is additive.
2. $F_E\circ F_{E'}\cong F_{E\otimes E'}$: inserting
$\operatorname{incl}_\lambda\circ\operatorname{pr}_\lambda$ between the two
factors and using the associativity of the tensor product of finite-dimensional
modules identifies the composite with
$\operatorname{pr}_\lambda\circ((E\otimes E')\otimes-)\circ\operatorname{incl}_\lambda$.
3. $F_{E^*}$ is both a left and a right adjoint of $F_E$: this is
[[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]] applied to
the two generalized central characters of the block, since
$F_{E^*}=\operatorname{pr}_\lambda\circ(E^*\otimes-)\circ\operatorname{incl}_\lambda$
is the translation functor $T_{\chi_\lambda,E^*,\chi_\lambda}$ and similarly for
$F_E$.
4. A direct summand of an exact additive functor is exact, and a direct summand
of a functor preserving projective objects again preserves projective objects:
apply the splitting to the image of each object. Hence every projective functor
is exact and preserves projective objects, and the class is closed under
composition and finite direct sums.

This is the definition of Bernstein-Gelfand [BGe, Section 3.1] and of
[Soe90, Section 1.2]; unlike the functors $T_\lambda^\mu$ of
[[def-translation-functor-between-o-blocks]], projective functors are not
required to come from a single finite-dimensional tensor functor, only from a
direct summand of one.
