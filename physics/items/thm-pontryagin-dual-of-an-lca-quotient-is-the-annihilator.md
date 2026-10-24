---
id: thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator
kind: theorem
title: The dual of a quotient is the annihilator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [cor-quotient-of-an-abelian-group-is-abelian, def-annihilator-of-a-subgroup, def-axiom-of-choice, def-pontryagin-dual-and-compact-open-topology, def-quotient-group, def-quotient-topology, lem-dual-homomorphisms-are-continuous-and-functorial, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 35B, printed p. 139: the topological quotient-dual identification.'
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemma 14.2(iii), printed p. 27: the quotient dual is the annihilator.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a locally compact Hausdorff abelian group and let $H\le G$ be a closed subgroup. Then the pullback of the quotient homomorphism $q:G\to G/H$, $$\widehat q:\widehat{G/H}\to\widehat G,\qquad \widehat q(\chi):=\chi\circ q,$$ is an isomorphism of topological groups onto the annihilator $H^\perp$ ([[def-annihilator-of-a-subgroup]]), which is therefore a closed subgroup of $\widehat G$ topologically isomorphic to $\widehat{G/H}$. The Axiom of Choice is used exactly as in the published compact-lift theorem for closed-subgroup quotients quoted below, and in no other place.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$, a closed subgroup $H\le G$, and the quotient homomorphism $q:G\to G/H$.

[F1] $G/H$ is the abelian quotient group of cosets with the quotient topology, and $q:G\to G/H$ is a continuous surjective homomorphism; continuity of a map out of $G/H$ is equivalent to continuity after composition with $q$. ([[def-quotient-group]], [[def-quotient-topology]], [[cor-quotient-of-an-abelian-group-is-abelian]], [[thm-quotient-universal-property]])

[F2] The annihilator is $H^\perp=\{\gamma\in\widehat G:\gamma(h)=1\text{ for every }h\in H\}$; it is a subgroup of $\widehat G$ and the kernel of the restriction homomorphism $\widehat G\to\widehat H$, hence closed in $\widehat G$. ([[def-annihilator-of-a-subgroup]])

[F3] For a continuous homomorphism $\varphi$ of abelian topological groups the pullback $\widehat\varphi(\gamma)=\gamma\circ\varphi$ is a continuous group homomorphism; and for a closed subgroup $H$ of a locally compact Hausdorff abelian group $G$, the pullback $\widehat q:\widehat{G/H}\to\widehat G$ of the quotient map is a topological group isomorphism onto $H^{\perp}=\{\gamma\in\widehat G:\gamma(h)=1\text{ for all }h\in H\}$, a closed subgroup of $\widehat G$. ([[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-pontryagin-dual-and-compact-open-topology]])

## Proof

1.1 The map $\widehat q(\chi)=\chi\circ q$ is a group homomorphism: for $x\in G$ one has $\widehat q(\chi_1\chi_2)(x)=\chi_1(q(x))\chi_2(q(x))=(\widehat q\chi_1)(x)(\widehat q\chi_2)(x)$, since evaluation is pointwise. It is continuous by the functoriality clause of [F3] applied to the continuous homomorphism $q$ of [F1]. Its image lies in $H^\perp$, because for $h\in H$ one has $\widehat q(\chi)(h)=\chi(q(h))=\chi(0)=1$, and it is injective because $q$ is surjective. [F1, F2, F3]

1.2 By the closed-subgroup clause of [F3] the map $\widehat q$ is a topological group isomorphism from $\widehat{G/H}$ onto $H^\perp$, where the annihilator is the subgroup displayed in [F2] and is closed in $\widehat G$. [F2, F3]

2.1 Combining steps 1.1 and 1.2, $\widehat q:\widehat{G/H}\to\widehat G$ is an isomorphism of topological groups onto $H^\perp$, and $H^\perp$ is a closed subgroup of $\widehat G$ topologically isomorphic to $\widehat{G/H}$; this is the statement. [step 1.1, step 1.2] ∎ 