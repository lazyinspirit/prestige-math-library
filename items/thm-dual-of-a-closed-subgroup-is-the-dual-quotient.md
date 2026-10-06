---
id: thm-dual-of-a-closed-subgroup-is-the-dual-quotient
kind: theorem
title: The dual of a closed subgroup is a quotient of the dual
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 20
deps: [def-annihilator-of-a-subgroup, def-axiom-of-choice, def-dependent-choice, def-homeomorphism-and-open-maps, def-pontryagin-dual-and-compact-open-topology, def-quotient-group, def-quotient-topology, def-subgroup, lem-annihilator-reverses-inclusion-and-double-annihilator-closes, lem-character-extension-from-a-closed-subgroup-of-an-lca-group, lem-dual-homomorphisms-are-continuous-and-functorial, lem-local-compact-subgroups-of-hausdorff-groups-are-closed, lem-open-or-closed-surjection-is-quotient, lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-pontryagin-biduality, thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemma 14.2(iv), printed p. 27: the dual of a closed subgroup is the quotient of the dual by its annihilator.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.13, second bullet, printed p. 437: the closed-subgroup dual is the dual quotient.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$ and let $H\le G$ be a closed subgroup. Then restriction $$R:\widehat G\to\widehat H,\qquad R(\gamma):=\gamma|_H,$$ is an open continuous surjection with kernel $H^\perp$ ([[def-annihilator-of-a-subgroup]]), and it induces an isomorphism of topological groups $$\widehat G/H^\perp\;\cong\;\widehat H .$$

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$, a closed subgroup $H\le G$, the restriction map $R$, and the quotient map $q:\widehat G\to\widehat G/H^\perp$.

[F1] $R$ is a continuous group homomorphism with kernel $H^\perp$, a closed subgroup of $\widehat G$; the quotient $\widehat G/H^\perp$ is a locally compact Hausdorff abelian group, and $q$ is a continuous surjection. ([[def-annihilator-of-a-subgroup]], [[lem-dual-homomorphisms-are-continuous-and-functorial]], [[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]], [[def-quotient-group]], [[def-quotient-topology]], [[def-homeomorphism-and-open-maps]])

[F2] $R$ is surjective: every continuous character of $H$ extends to a continuous character of $G$. ([[lem-character-extension-from-a-closed-subgroup-of-an-lca-group]])

[F3] The quotient-dual theorem applied to the group $\widehat G$ and its closed subgroup $H^\perp$ gives a topological isomorphism $\Xi:(\widehat G/H^\perp)\widehat{\ }\to(H^\perp)^\perp$, $\Xi(\xi)=\xi\circ q$, and by the double-annihilator identity in $G$ one has $(H^\perp)^\perp=\Phi_G(H)$, the image of $H$ under the biduality identification. ([[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]], [[lem-annihilator-reverses-inclusion-and-double-annihilator-closes]], [[thm-pontryagin-biduality]])

[F4] A closed subgroup $H$ of an LCA group is LCA ([[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]]), and its dual is LCA under AC ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]]). The evaluation maps are topological isomorphisms and natural: for a continuous homomorphism $\psi:A\to B$ of locally compact Hausdorff abelian groups one has $\Phi_B\circ\psi=\widehat{\widehat\psi}\circ\Phi_A$, and the dual of a topological isomorphism is a topological isomorphism. ([[thm-pontryagin-biduality]], [[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-pontryagin-dual-and-compact-open-topology]])

[F5] An open continuous surjection is a quotient map, and a map out of a quotient is continuous exactly when its composite with the quotient map is; the quotient map of a topological group by a subgroup is open. ([[thm-quotient-universal-property]], [[lem-open-or-closed-surjection-is-quotient]], [[def-quotient-topology]], [[def-subgroup]])

## Proof

1.1 The map $\psi:\widehat G/H^\perp\to\widehat H$ given by $\psi(\gamma H^\perp):=\gamma|_H$ is well defined, because $R$ has kernel $H^\perp$; it is continuous and injective by the quotient universal property, and $R=\psi\circ q$. [F1, F5]

2.1 The map $R$ is surjective by [F2], hence $\psi$ is bijective and its image is all of $\widehat H$. [F2, step 1.1]

2.2 The transpose $\widehat\psi:\widehat{\widehat H}\to(\widehat G/H^\perp)\widehat{\ }$ is a topological isomorphism. Indeed for $h\in H$ and $\gamma\in\widehat G$ one computes $\widehat\psi(\Phi_H(h))(\gamma H^\perp)=\Phi_H(h)(\psi(\gamma H^\perp))=\gamma(h)=\Phi_G(h)(\gamma)$, so $\widehat\psi=\Xi^{-1}\circ\Phi_G|_H\circ\Phi_H^{-1}$ is a composite of topological isomorphisms by [F3] and [F4]. [F3, F4, step 1.1]

3.1 Naturality of evaluation, $\Phi_{\widehat H}\circ\psi=\widehat{\widehat\psi}\circ\Phi_{\widehat G/H^\perp}$ (a direct computation from $\Phi_A(a)(\lambda)=\lambda(a)$), writes $\psi=\Phi_{\widehat H}^{-1}\circ\widehat{\widehat\psi}\circ\Phi_{\widehat G/H^\perp}$ as a composite of topological isomorphisms, so $\psi$ is a topological isomorphism of $\widehat G/H^\perp$ onto $\widehat H$. [F4, step 2.2]

4.1 Finally $R=\psi\circ q$ is continuous, open (a composite of the open quotient map $q$ of [F5] with the homeomorphism $\psi$) and surjective, its kernel is $\ker q=H^\perp$, and the induced map $\widehat G/H^\perp\to\widehat H$ is the topological isomorphism $\psi$; this is the statement. [F5, step 1.1, step 2.1, step 3.1] ∎ 