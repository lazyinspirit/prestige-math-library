---
id: def-c-soft-sheaf
kind: definition
title: "c-soft sheaves"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-sheaf-on-topological-space, def-inverse-image-presheaf-and-sheaf,
       def-compact-space, lem-sections-near-a-compact-set-are-sections-on-that-set,
       def-flasque-sheaf, def-section-restriction-and-global-section,
       def-locally-compact-space, def-hausdorff-space,
       def-global-sections-functor-sheaves]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.2, Definition 11.2.1, printed p. 207: for X locally compact, a sheaf F is c-soft if for any compact subset K of X the map Gamma(X;F) -> Gamma(K;F) is surjective; Proposition 11.2.2 then records the equivalent formulations used later'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§1.4, the terminology of sheaves mous (c-mou) for compact supports and the role of c-softness in the finite-dimensionality of f_!'
---

## Definition

Let $X$ be a locally compact Hausdorff space ([[def-locally-compact-space]],
[[def-hausdorff-space]]) and let $\mathcal F$ be a sheaf of abelian groups on
$X$ ([[def-sheaf-on-topological-space]]); this covers in particular every sheaf
of $k$-vector spaces over a field $k$, which is the case used by the
compact-support calculus, and for such a sheaf the groups below are $k$-vector
spaces and the maps $k$-linear. Global sections are written
$\Gamma(X,-)$ ([[def-global-sections-functor-sheaves]]). For a compact subset
$K\subseteq X$ ([[def-compact-space]]) let $i:K\hookrightarrow X$ be the
inclusion and consider the canonical restriction map
$$\Gamma(X,\mathcal F)\longrightarrow\Gamma(K,i^{-1}\mathcal F)=(i^{-1}\mathcal F)(K),\qquad s\longmapsto s|_K,$$
which sends a global section ([[def-section-restriction-and-global-section]]) to
the section of the inverse image sheaf ([[def-inverse-image-presheaf-and-sheaf]])
that it induces on $K$. Then $\mathcal F$ is **c-soft**, also **soft for
compact supports**, when this map is surjective for every compact subset
$K\subseteq X$, that is: every section of $\mathcal F$ over a compact subset of
$X$ extends to a global section of $\mathcal F$. For sheaves of abelian groups
$\Gamma_c$ and $H^q_c$ of
[[def-compactly-supported-global-sections]] are the compactly supported
analogues of $\Gamma$ and $H^q$.

Two consistency facts hold; both are immediate from the definitions and from
the extension lemma for sections on a compact set, and they are recorded here
because the compact-support calculus uses the first constantly and the second
for injective sheaves.

1. **Neighbourhood formulation.** By
   [[lem-sections-near-a-compact-set-are-sections-on-that-set]], the target of
   the restriction map is the defining colimit of the
   inverse-image presheaf,
   $(i^{-1}\mathcal F)(K)=\varinjlim_{U\supseteq K}\mathcal F(U)$, so that
   $\mathcal F$ is c-soft if and only if for every compact $K$ and every open
   neighbourhood $U$ of $K$, every section $s\in\mathcal F(U)$ agrees with a
   global section of $\mathcal F$ on some open neighbourhood of $K$. It
   therefore suffices, for c-softness, to test the extended sections only
   locally near $K$.
2. **Flasque implies c-soft.** If $\mathcal F$ is flasque
   ([[def-flasque-sheaf]]) then $\mathcal F$ is c-soft: a class in
   $(i^{-1}\mathcal F)(K)$ is represented by a section $s$ over an open
   neighbourhood $U$ of $K$, and flasqueness extends $s$ to a global section
   $t\in\mathcal F(X)$ with $t|_U=s$, so $t$ is a preimage of that class.

C-softness is a property of the pair $(X,\mathcal F)$ and not of the sheaf
alone: the compact subsets of the base space are part of the test. Nothing is
assumed about the support of the extended global sections, and c-softness is
not the same condition as flasqueness, only implied by it.

## Remarks

- Terminology and provenance. The term is Schapira's *c-soft* ("mou pour les
  compacts"), Definition 11.2.1 of his lecture notes; Verdier's expose uses
  *c-mou* for the same condition on a locally compact space. The definition
  needs only the compact subsets of $X$, and local compactness together with
  Hausdorffness supplies the ambient facts the later arguments use: compact
  subsets are closed, and disjoint compact sets are separated by disjoint open
  sets.

- The neighbourhood formulation is the form in which c-softness is verified in
  the compact-support calculus of this page: there one
  is given sections over a compact set as representatives on an open
  neighbourhood, and must produce, or compare with, global sections agreeing
  near the compact set.
