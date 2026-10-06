---
id: def-annihilator-of-a-subgroup
kind: definition
title: The annihilator of a subgroup
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, def-group-homomorphism, def-pontryagin-dual-and-compact-open-topology, def-subgroup, def-topological-group, lem-compact-open-character-group-operations-are-continuous, lem-dual-homomorphisms-are-continuous-and-functorial, lem-local-compact-subgroups-of-hausdorff-groups-are-closed, thm-dual-of-an-lca-group-is-locally-compact-abelian]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Definition 14.1 and Lemma 14.2(i), printed p. 27: the annihilator and its closedness.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.13, printed p. 437: the closed-subgroup annihilator and quotient-dual identifications; the extension to arbitrary subgroups is established in the definition here.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $G$ be an abelian topological group ([[def-topological-group]]) written additively, with Pontryagin dual $\widehat G$ carrying the compact-open topology and pointwise multiplication ([[def-pontryagin-dual-and-compact-open-topology]]), and let $H\le G$ be a subgroup ([[def-subgroup]]).

The **annihilator** of $H$ is the set of characters trivial on $H$: $$H^\perp:=\{\gamma\in\widehat G:\gamma(h)=1\ \text{for every}\ h\in H\}.$$ It is a subgroup of $\widehat G$: it contains the identity character $x\mapsto1$; if $\gamma_1(h)=\gamma_2(h)=1$ for all $h\in H$ then $(\gamma_1\gamma_2)(h)=1$ and $\gamma_1^{-1}(h)=1$ for all $h\in H$, because multiplication and inversion in $\widehat G$ are pointwise ([[lem-compact-open-character-group-operations-are-continuous]]). Moreover $H^\perp$ is exactly the kernel of the restriction homomorphism $\widehat G\to\widehat H$, $\gamma\mapsto\gamma|_H$, which is a continuous group homomorphism by the functoriality of the dual under pullback along the inclusion $H\hookrightarrow G$ ([[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-group-homomorphism]]). Consequently $H^\perp$ is a closed subgroup of $\widehat G$: it is the kernel of a continuous homomorphism between Hausdorff topological groups, and $\widehat G$ is Hausdorff ([[lem-compact-open-character-group-operations-are-continuous]]). In particular the closedness of $H^\perp$ holds whenever $H$ is closed in $G$, and no closedness of $H$ is needed for it.

**Annihilators in the dual and in the bidual.** Let $L\le\widehat G$ be a subgroup of the dual. Its annihilator is $$L^\perp:=\{x\in G:\lambda(x)=1\ \text{for all}\ \lambda\in L\}\le G .$$ The definition uses only the evaluation pairing and makes no isomorphism claim. Two conventions are recorded and used throughout this page.

1. $(H)^\perp=(\overline H)^\perp$ for every subgroup $H\le G$. Indeed a character $\gamma$ is continuous, so it is trivial on $H$ if and only if it is trivial on the closure of $H$; equivalently, $\gamma$ is trivial on $H$ exactly when its kernel, a closed subgroup, contains $\overline H$. The convention lets every annihilator be computed with closed subgroups.
2. For a closed subgroup $H\le G$ the subgroup $H^\perp\le\widehat G$ is closed by the kernel argument above. If $G$ is locally compact Hausdorff abelian and the Axiom of Choice is assumed ([[def-axiom-of-choice]]), then $\widehat G$ is LCA by [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], and its closed subgroup $H^\perp$ is LCA by [[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]]. Its own annihilator in the bidual is written $H^{\perp\perp}\le\widehat{\widehat G}$ and is identified with a subgroup of $G$ through the evaluation map $\Phi$ of [[thm-pontryagin-biduality]] when that identification is available.

Forming the annihilator and proving its subgroup and closedness properties use no choice principle. The additional local-compactness assertion in convention 2 assumes AC as stated.
