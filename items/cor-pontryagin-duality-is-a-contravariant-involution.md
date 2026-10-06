---
id: cor-pontryagin-duality-is-a-contravariant-involution
kind: corollary
title: Dualisation is a contravariant involution
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 22
deps: [def-axiom-of-choice, def-dependent-choice, def-group-homomorphism, def-homeomorphism-and-open-maps, def-pontryagin-dual-and-compact-open-topology, def-topological-group, lem-biduality-is-stable-under-products-closed-subgroups-and-quotients, lem-dual-homomorphisms-are-continuous-and-functorial, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-pontryagin-biduality]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorems C.12-C.13 and the homomorphism-dual paragraph following C.13, printed p. 437: evaluation biduality and contravariant pullback. Naturality is computed here.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $\varphi:G\to H$ be a continuous homomorphism of locally compact Hausdorff abelian groups. Then $\widehat\varphi:\widehat H\to\widehat G$, $\widehat\varphi(\gamma):=\gamma\circ\varphi$, is a continuous homomorphism, $\widehat{\operatorname{id}_G}=\operatorname{id}_{\widehat G}$, and for composable $\varphi,\psi$ one has $\widehat{\psi\circ\varphi}=\widehat\varphi\circ\widehat\psi$; thus $(-)^\wedge$ is a contravariant functor into locally compact Hausdorff abelian groups. Moreover the evaluation maps are natural, $$\Phi_H\circ\varphi=\widehat{\widehat\varphi}\circ\Phi_G,$$ so that $\Phi$ is a natural isomorphism from the identity functor to the double-dual functor; dualisation is therefore a contravariant involution of the category of locally compact Hausdorff abelian groups, and it preserves finite products, closed subgroups and quotients in the sense of [[lem-biduality-is-stable-under-products-closed-subgroups-and-quotients]].

## Facts & Assumptions

**Given:** Continuous homomorphisms $\varphi:G\to H$, $\psi:H\to J$ of locally compact Hausdorff abelian groups.

[F1] Pullback along a continuous homomorphism is a continuous group homomorphism; the dual of a locally compact Hausdorff abelian group is again locally compact Hausdorff and abelian; pullback carries identities to identities and reverses composition. ([[lem-dual-homomorphisms-are-continuous-and-functorial]], [[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-topological-group]], [[def-group-homomorphism]], [[def-homeomorphism-and-open-maps]])

[F2] For every locally compact Hausdorff abelian group $A$ the evaluation map $\Phi_A(a)(\lambda)=\lambda(a)$ is an isomorphism of topological groups $A\to\widehat{\widehat A}$. ([[thm-pontryagin-biduality]])

[F3] Naturality of evaluation is the direct computation $\Phi_H(\varphi(x))(\gamma)=\gamma(\varphi(x))=\Phi_G(x)(\gamma\circ\varphi)=\big(\widehat{\widehat\varphi}(\Phi_G(x))\big)(\gamma)$ for $x\in G$, $\gamma\in\widehat H$. ([[def-pontryagin-dual-and-compact-open-topology]], [[def-group-homomorphism]])

[F4] Biduality commutes with finite products, closed subgroups and quotients, with the evaluation isomorphisms intertwining the exact sequences. ([[lem-biduality-is-stable-under-products-closed-subgroups-and-quotients]])

## Proof

1.1 Functoriality: $\widehat\varphi(\gamma)=\gamma\circ\varphi$ is a continuous homomorphism by [F1]; $\widehat{\mathrm{id}_G}(\gamma)=\gamma\circ\mathrm{id}_G=\gamma$; and for composable $\psi:H\to J$ one computes $\widehat{\psi\circ\varphi}(\gamma)=\gamma\circ\psi\circ\varphi=\widehat\varphi(\widehat\psi(\gamma))$, that is $\widehat{\psi\circ\varphi}=\widehat\varphi\circ\widehat\psi$. [F1]

1.2 Naturality: by the computation of [F3], $\Phi_H\circ\varphi=\widehat{\widehat\varphi}\circ\Phi_G$ for every continuous homomorphism $\varphi$. [F3]

2.1 Since every $\Phi_A$ is an isomorphism of topological groups by [F2] and the family is natural by step 1.2, $\Phi$ is a natural isomorphism from the identity functor of the category of locally compact Hausdorff abelian groups to the double-dual functor; because $(-)^\wedge$ is contravariant by step 1.1 and $\Phi$ is a natural isomorphism, dualisation is a contravariant involution. Its compatibility with finite products, closed subgroups and quotients is [F4], which also records that $H^{\perp\perp}=H$ for closed subgroups. [F2, F4, step 1.1, step 1.2] ∎