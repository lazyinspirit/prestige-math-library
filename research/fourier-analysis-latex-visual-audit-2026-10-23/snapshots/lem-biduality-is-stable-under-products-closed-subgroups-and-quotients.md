---
id: lem-biduality-is-stable-under-products-closed-subgroups-and-quotients
kind: lemma
title: Biduality commutes with products, closed subgroups and quotients
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 21
deps: [def-annihilator-of-a-subgroup, def-axiom-of-choice, def-dependent-choice, def-homeomorphism-and-open-maps, def-pontryagin-dual-and-compact-open-topology, def-product-topology, def-quotient-group, def-quotient-topology, def-subgroup, lem-annihilator-reverses-inclusion-and-double-annihilator-closes, lem-character-extension-from-a-closed-subgroup-of-an-lca-group, lem-dual-homomorphisms-are-continuous-and-functorial, lem-duals-of-finite-products-and-discrete-direct-sums, lem-local-compact-subgroups-of-hausdorff-groups-are-closed, lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca, thm-dual-of-a-closed-subgroup-is-the-dual-quotient, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-finite-products-of-compact-spaces, thm-pontryagin-biduality, thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator, thm-product-universal-property, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemmas 14.2 and 14.4, printed p. 27: quotient/subgroup duals and finite-product duality. The evaluation compatibility is computed here.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.13 and the homomorphism-dual paragraph following it, printed p. 437: subgroup, quotient and functorial duality.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]).

(1) For locally compact Hausdorff abelian groups $G_1,\dots,G_n$, under the product-dual identification $\widehat{G_1\times\cdots\times G_n}\cong\widehat G_1\times\cdots\times\widehat G_n$ of [[lem-duals-of-finite-products-and-discrete-direct-sums]] one has $\Phi_{G_1\times\cdots\times G_n}=\Phi_{G_1}\times\cdots\times\Phi_{G_n}$.

(2) For a closed subgroup $H\le G$ of a locally compact Hausdorff abelian group $G$, the evaluation isomorphisms intertwine the exact sequences $0\to H\to G\to G/H\to0$ with their duals: under the identifications $\widehat H\cong\widehat G/H^\perp$ and $\widehat{G/H}\cong H^\perp$ of [[thm-dual-of-a-closed-subgroup-is-the-dual-quotient]] and [[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]], the restrictions of $\Phi_G$ recover $\Phi_H$ and $\Phi_{G/H}$, and $H^{\perp\perp}=H$.

(3) The analogous statements hold for finite products of closed subgroups and of quotients.

## Facts & Assumptions

**Given:** Locally compact Hausdorff abelian groups $G,G_1,\dots,G_n$, a closed subgroup $H\le G$, and the evaluation maps $\Phi_A(a)(\lambda)=\lambda(a)$.

[F1] The product-dual map $\Psi:\widehat G_1\times\cdots\times\widehat G_n\to\widehat{G_1\times\cdots\times G_n}$, $\Psi(\gamma_1,\dots,\gamma_n)(x_1,\dots,x_n)=\prod_j\gamma_j(x_j)$, is an isomorphism of topological groups, and it is natural for the projections. The evaluation pairing of the product is computed coordinatewise. ([[lem-duals-of-finite-products-and-discrete-direct-sums]], [[def-product-topology]], [[thm-product-universal-property]], [[def-pontryagin-dual-and-compact-open-topology]])

[F2] Closed subgroups of LCA groups are LCA ([[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]]), as are quotients by closed subgroups ([[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]]) and finite products: products inherit continuous operations and the Hausdorff property, and products of compact neighbourhoods give compact neighbourhoods ([[thm-finite-products-of-compact-spaces]]). Their duals are LCA under AC ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]]). For every locally compact Hausdorff abelian group $A$ the evaluation map $\Phi_A:A\to\widehat{\widehat A}$ is an isomorphism of topological groups. ([[thm-pontryagin-biduality]])

[F3] For a closed subgroup $H\le G$: restriction $R:\widehat G\to\widehat H$ is an open continuous surjection with kernel $H^\perp$ inducing $\widehat G/H^\perp\cong\widehat H$; the pullback $\widehat{q}$ of the quotient map $q:G\to G/H$ is a topological isomorphism $\widehat{G/H}\to H^\perp$; and $H^{\perp\perp}=H$ under the biduality identification. ([[thm-dual-of-a-closed-subgroup-is-the-dual-quotient]], [[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]], [[lem-annihilator-reverses-inclusion-and-double-annihilator-closes]], [[lem-character-extension-from-a-closed-subgroup-of-an-lca-group]], [[def-quotient-group]], [[def-quotient-topology]], [[def-annihilator-of-a-subgroup]])

[F4] Naturality of evaluation is a direct computation: for a continuous homomorphism $\varphi:A\to B$ of locally compact Hausdorff abelian groups and all $a\in A$, $\lambda\in\widehat B$, one has $\Phi_B(\varphi(a))(\lambda)=\lambda(\varphi(a))=(\lambda\circ\varphi)(a)=\Phi_A(a)(\widehat{\varphi}\lambda)=\big(\widehat{\widehat\varphi}(\Phi_A(a))\big)(\lambda)$, so $\Phi_B\circ\varphi=\widehat{\widehat\varphi}\circ\Phi_A$. ([[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-homeomorphism-and-open-maps]])

[F5] The quotient universal property makes the inclusion-induced restriction and the quotient pullback the transposes of the inclusion $H\hookrightarrow G$ and of the quotient map $G\to G/H$ respectively. ([[thm-quotient-universal-property]], [[def-subgroup]], [[def-quotient-group]])

## Proof

1.1 Part (1): under the identification of the double dual of the product $\widehat{\widehat{G_1\times\cdots\times G_n}}$ with $\widehat{\widehat G_1}\times\cdots\times\widehat{\widehat G_n}$ obtained by applying [F1] twice, both $\Phi_{G_1\times\cdots\times G_n}(x_1,\dots,x_n)$ and $(\Phi_{G_1}(x_1),\dots,\Phi_{G_n}(x_n))$ are characters of $\widehat G_1\times\cdots\times\widehat G_n$, and on $(\gamma_1,\dots,\gamma_n)$ both take the value $\prod_j\gamma_j(x_j)$; hence the two coincide. [F1, F2]

2.1 Part (2), inclusion: the restriction $R:\widehat G\to\widehat H$ is the transpose of the inclusion $\iota:H\hookrightarrow G$, so naturality [F4] applied to $\iota$ gives $\Phi_G\circ\iota=\widehat R\circ\Phi_H$: for $h\in H$ the character $\Phi_H(h)$ pulled back along $R$ is $\Phi_G(h)$, that is, the two evaluations agree on $H$. [F3, F4, F5, step 1.1]

2.2 Part (2), quotient: the pullback $\widehat{q}:\widehat{G/H}\to\widehat G$ of the quotient map $q:G\to G/H$ is the transpose of $q$, so [F4] applied to $q$ gives $\Phi_{G/H}\circ q=\widehat{\widehat{q}}\circ\Phi_G$: for $x\in G$ and $\eta\in\widehat{G/H}$ one has $\Phi_{G/H}(q(x))(\eta)=\eta(q(x))=\Phi_G(x)(\eta\circ q)$, so $\Phi_{G/H}(x+H)$ is recovered by restricting $\Phi_G(x)$ to the subgroup $H^\perp$ under $\widehat q$; this restriction depends only on the coset $x+H$. [F3, F4, F5, step 1.1]

3.1 Part (2), conclusion: the two naturality identities of steps 2.1 and 2.2 intertwine the exact sequence with its dual, and $H^{\perp\perp}=H$ is the closed-subgroup case of [F3]. [F3, step 2.1, step 2.2]

3.2 Part (3): for finite products of closed subgroups $H_j\le G_j$ the statements follow coordinatewise from part (1) and steps 2.1 and 2.2 applied in each factor; finite products of quotients are handled the same way, since $\prod_j(G_j/H_j)\cong(\prod_jG_j)/(\prod_jH_j)$: the product of the quotient maps is a continuous open surjection (images of basic open rectangles are open rectangles) with kernel $\prod_jH_j$, so its induced bijection on the quotient is continuous and open. [F1, F5, step 1.1, step 2.1, step 2.2]

4.1 Parts (1), (2) and (3) are proved in steps 1.1, 3.1 and 3.2; this is the statement. [step 1.1, step 3.1, step 3.2] ∎ 