---
id: def-the-antidominant-projective-and-the-soergel-functor
kind: definition
title: The antidominant projective and the Soergel functor
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-projective-functors-on-a-regular-integral-category-o-block,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       def-projective-object, def-axiom-of-choice,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       cor-central-characters-are-dot-weyl-orbits, thm-bgg-reciprocity,
       thm-projectives-in-category-o-have-verma-flags,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       prop-highest-weight-of-the-dual-representation,
       thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights,
       def-injective-object, thm-bgg-verma-homomorphism-criterion,
       def-translation-functor-between-o-blocks,
       thm-central-character-summands-split-into-linkage-blocks,
       lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective,
       lem-block-projection-preserves-projectives]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 1.2: 'Sei P in O ein antidominanter Projektiver ... Wir definieren den Funktor V = V_P = Hom_g(P, ): O -> mod-End_g(P)' (preprint p. 4)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Definition 4.17: P_{w_0} := P(w_0.0) and V := Hom_{O_0}(P_{w_0},-): O_0 -> mod-End_{O_0}(P_{w_0}) (printed p. 10)"
---

## Definition

Assume the Axiom of Choice, inherited from the published block theory
([[def-axiom-of-choice]],
[[thm-central-character-summands-split-into-linkage-blocks]]).

In the regular integral block $\mathcal O_\lambda$ of
[[def-regular-integral-category-o-block-and-its-antidominant-weight]] fix the
antidominant weight $w_0\cdot\lambda$ and let
$$P:=P(w_0\cdot\lambda)$$ be a projective cover of $L(w_0\cdot\lambda)$
([[thm-category-o-has-enough-projectives]]); it is unique up to isomorphism and
indecomposable ([[prop-projective-covers-in-o-are-indecomposable-and-unique]],
[[def-projective-object]]), and it is an injective object of
$\mathcal O_\lambda$. The **Soergel functor** is
$$V:=\operatorname{Hom}_{\mathcal O}(P,-)\colon\mathcal O_\lambda\longrightarrow \operatorname{End}_{\mathcal O}(P)^{\mathrm{op}}\text{-}\mathbf{mod},\qquad M\longmapsto \operatorname{Hom}_{\mathcal O}(P,M),$$
with the left action of $\operatorname{End}_{\mathcal O}(P)$ on
$\operatorname{Hom}_{\mathcal O}(P,M)$ induced by composition on the right of
the source: $a\cdot f=f\circ a$
([[def-projective-functors-on-a-regular-integral-category-o-block]]). Its
values on the standard objects and on the indecomposable projectives are
written $V\Delta(w\cdot\lambda):=V(\Delta(w\cdot\lambda))$ and
$VP(w\cdot\lambda):=V(P(w\cdot\lambda))$. The functor $V$ is exact, because
$P$ is projective, and hence left exact; the identity
$VP\cong\operatorname{End}_{\mathcal O}(P)$ with its regular module structure
is the Yoneda identification. Replacing the chosen projective cover $P$ by an
isomorphic one changes $V$ by a natural equivalence of functors compatible
with the endomorphism-ring identification, so the construction depends only
on the isomorphism class of $P$.

**Well-definedness: $P$ is injective.** We prove that $P$ is an injective
object of $\mathcal O_\lambda$ using only the listed suppliers, following the
argument of [Soe90, Sections 1.2 and 2.1] in its algebraic form. Put
$\eta:=-\rho$; then $W\cdot\eta=\{\eta\}$, because $w\cdot\eta=w(\eta+\rho)-\rho=-\rho$
for every $w$ ([[cor-central-characters-are-dot-weyl-orbits]]). By
[[thm-simple-objects-of-category-o-are-highest-weight-modules]] the simple
objects are the $L(\mu)$ with $L(\mu)$ determined by $\mu$, and the composition
factors of $M(\eta)$ have highest weights in $W\cdot\eta\cap(\eta-Q^+)=\{\eta\}$;
hence $M(\eta)=L(\eta)$ is simple. By BGG reciprocity
([[thm-bgg-reciprocity]]) applied to the single-label block, and the existence
of Verma flags for projectives ([[thm-projectives-in-category-o-have-verma-flags]]),
the projective cover $P(\eta)$ has a Verma flag with the single factor
$\Delta(\eta)=M(\eta)=L(\eta)$, so $P(\eta)\cong L(\eta)$; the block
$\mathcal O_\eta$ has a single simple object, which is projective, hence is
semisimple by enough projectives ([[thm-category-o-has-enough-projectives]]),
and therefore every object of $\mathcal O_\eta$, in particular $L(\eta)$, is
injective as well as projective in $\mathcal O_\eta$
([[def-injective-object]]). A projective object of a block is projective in
$\mathcal O$ ([[lem-block-projection-preserves-projectives]]), and an
injective object of a block is injective in $\mathcal O$ because the block
decomposition is a direct sum of abelian subcategories and the exact
projections restrict split exactness blockwise. Second, we identify a
projective-injective object
in the block $\mathcal O_\lambda$: let $E=L(\lambda+\rho)$ be the
finite-dimensional simple module of highest weight $\lambda+\rho$
([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]])
and set
$$Q:=\operatorname{pr}_{\chi_\lambda}\bigl(E\otimes L(\eta)\bigr)\in\mathcal O_\lambda,$$
the exact central projection of [[def-translation-functor-between-o-blocks]].
Since $L(\eta)$ is projective and injective in $\mathcal O$, the tensor product
$E\otimes L(\eta)$ is projective and injective
([[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]]),
and its direct summand $Q$ is projective and injective in $\mathcal O$; the
general exact tensor-block biadjunction of
[[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]] gives the
same conclusion with all adjoints and, by
[[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]],
injectivity (equivalently, $Q$ is a direct summand of a projective-injective
object, and injectivity passes to summands). Third, we compute a
one-dimensional Hom space: since $M(a)$ with $a=w_0\cdot\lambda$ is simple by
the same top-weight argument as for $\eta$ (every other highest weight in
$W\cdot a$ lies strictly above $a$ in the root order), the tensor product
$E^{*}\otimes M(a)$ has a finite Verma flag whose factors are the
$\Delta(a+\nu)$ with $\nu$ running through the weights of the dual module
$E^{*}$, by
[[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]; here
$E^{*}=L(-w_0(\lambda+\rho))$ ([[prop-highest-weight-of-the-dual-representation]]).
Projecting to the central character $\chi_\eta$ retains exactly the factors
with $a+\nu\in W\cdot\eta=\{\eta\}$, that is $\nu=-w_0(\lambda+\rho)$, the
highest weight of $E^{*}$ of multiplicity one, so
$$\operatorname{pr}_{\chi_\eta}\bigl(E^{*}\otimes M(a)\bigr)=L(\eta).$$
The tensor-hom adjunction and the tensor-block adjunction now give
$$\operatorname{Hom}_{\mathcal O}(Q,L(a))\cong\operatorname{Hom}_{\mathcal O}(L(\eta),E^{*}\otimes M(a))\cong\operatorname{Hom}_{\mathcal O}(L(\eta),L(\eta))\cong\mathbb C,$$
because every homomorphism from the block-$\eta$ simple lands in the
$\chi_\eta$-summand and $L(\eta)$ is simple. Choose the nonzero, hence
surjective, element $q:Q\to L(a)$ and lift it through the projective cover
$P(a)\to L(a)$ to a map $Q\to P(a)$; its image is a submodule of $P(a)$
surjecting onto the head $L(a)$, hence is all of $P(a)$ by essentiality of a
projective cover, so the lift is surjective and splits by projectivity of
$P(a)$. Therefore $P(a)$ is a direct summand of the injective object $Q$
([[def-injective-object]]), and direct summands of injective objects are
injective, so $P=P(w_0\cdot\lambda)$ is injective. This argument uses
[[thm-bgg-verma-homomorphism-criterion]] only through the standard embedding
criterion implicit in the top-weight computations, and it does not assume the
Endomorphismensatz.
