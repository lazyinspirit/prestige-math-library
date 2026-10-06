---
id: lem-character-extension-from-a-closed-subgroup-of-an-lca-group
kind: lemma
title: Characters of a closed subgroup extend to the ambient LCA group
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 19
deps: [def-annihilator-of-a-subgroup, def-axiom-of-choice, def-dependent-choice, def-homeomorphism-and-open-maps, def-pontryagin-dual-and-compact-open-topology, def-quotient-group, def-quotient-topology, def-subgroup, def-topological-group, lem-annihilator-reverses-inclusion-and-double-annihilator-closes, lem-continuous-characters-separate-points-of-an-lca-group, lem-dual-homomorphisms-are-continuous-and-functorial, lem-local-compact-subgroups-of-hausdorff-groups-are-closed, lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-pontryagin-biduality, thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Theorem 14.3, printed p. 27: every character of a closed subgroup extends to the ambient LCA group.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group and let $H\le G$ be a closed subgroup. Then the restriction homomorphism $$R:\widehat G\to\widehat H,\qquad R(\gamma):=\gamma|_H,$$ is surjective: every continuous character of $H$ extends to a continuous character of $G$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$, a closed subgroup $H\le G$, and the restriction map $R:\widehat G\to\widehat H$.

[F1] $R(\gamma)=\gamma|_H$ is a continuous group homomorphism with kernel $H^\perp=\{\gamma\in\widehat G:\gamma(h)=1\text{ for all }h\in H\}$, which is a closed subgroup of $\widehat G$. ([[def-annihilator-of-a-subgroup]], [[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-pontryagin-dual-and-compact-open-topology]])

[F2] In a locally compact Hausdorff abelian group, $(L^\perp)^\perp=\overline L$ for every subgroup $L$ of its dual, and $(H^\perp)^\perp=H$ for a closed subgroup $H$. ([[lem-annihilator-reverses-inclusion-and-double-annihilator-closes]])

[F3] For a closed subgroup $B$ of a locally compact Hausdorff abelian group $A$, the quotient $A/B$ is locally compact Hausdorff abelian and the pullback of the quotient map is a topological group isomorphism of $(A/B)\widehat{\ }$ onto $B^\perp$. ([[thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator]], [[lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca]], [[def-quotient-group]], [[def-quotient-topology]])

[F4] Continuous characters separate points: for $h\ne0$ in $G$ there is $\gamma\in\widehat G$ with $\gamma(h)\ne1$. ([[lem-continuous-characters-separate-points-of-an-lca-group]])

[F5] The closed subgroup $H$ is LCA by [[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]], and the dual of any LCA group is LCA under AC by [[thm-dual-of-an-lca-group-is-locally-compact-abelian]]. The evaluation maps $\Phi_A:A\to\widehat{\widehat A}$ are isomorphisms of topological groups; pullback along a continuous homomorphism of abelian topological groups is a continuous homomorphism, composition of pullbacks reverses order, and the dual of a topological isomorphism is a topological isomorphism. ([[thm-pontryagin-biduality]], [[lem-dual-homomorphisms-are-continuous-and-functorial]], [[def-homeomorphism-and-open-maps]])

[F6] A subgroup which is locally compact in the subspace topology is closed in a Hausdorff topological group. ([[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]], [[def-topological-group]], [[def-subgroup]])

## Proof

1.1 $R$ is a continuous group homomorphism with kernel $H^\perp$ by [F1], so $H^\perp$ is a closed subgroup of $\widehat G$; let $L:=R(\widehat G)\le\widehat H$ be its image. [F1]

1.2 The annihilator of $L$ inside $H$ is trivial: $L^\perp=\{h\in H:\gamma(h)=1\text{ for all }\gamma\in\widehat G\}=\{0\}$, because a nonzero $h$ is separated from $0$ by some character of $G$ by [F4]. [F1, F4]

2.1 Applying the double-annihilator identity [F2] in the locally compact Hausdorff abelian group $\widehat H$ gives $\overline L=(L^\perp)^\perp=\{0\}^\perp=\widehat H$; that is, $L$ is dense in $\widehat H$. [F2, step 1.2]

2.2 Because $\ker R=H^\perp$, the map $R$ factors as $R=\psi\circ q$ with $q:\widehat G\to\widehat G/H^\perp$ the quotient homomorphism and $\psi:\widehat G/H^\perp\to\widehat H$ the injective continuous homomorphism $\psi(\gamma H^\perp)=\gamma|_H$; the group $\widehat G/H^\perp$ is locally compact Hausdorff abelian by [F3]. Thus [F5] applies to this quotient. [F1, F3, F5, step 1.1]

3.1 The quotient-dual theorem [F3], applied to the group $\widehat G$ and its closed subgroup $H^\perp$, gives a topological isomorphism $\Xi:(\widehat G/H^\perp)\widehat{\ }\to(H^\perp)^\perp$, $\Xi(\xi)=\xi\circ q$, onto the annihilator of $H^\perp$ inside $\widehat{\widehat G}$; by the double-annihilator identity [F2] in the group $G$ and closedness of $H$, this annihilator is $\Phi_G(H)$, the image of $H$ under the biduality identification. Composing $\Xi$ with $\Phi_G^{-1}$ therefore identifies $(\widehat G/H^\perp)\widehat{\ }$ topologically with $H$ itself. [F2, F3, step 2.2]

4.1 The transpose $\widehat\psi:\widehat{\widehat H}\to(\widehat G/H^\perp)\widehat{\ }$ is a topological isomorphism. Indeed for $h\in H$ and $\gamma\in\widehat G$ one computes $\widehat\psi(\Phi_H(h))(\gamma H^\perp)=\Phi_H(h)(\psi(\gamma H^\perp))=\gamma(h)=\Phi_G(h)(\gamma)$, so $\widehat\psi\big(\Phi_H(h)\big)=\Xi^{-1}\big(\Phi_G(h)\big)$ for every $h$, that is $\widehat\psi=\Xi^{-1}\circ\Phi_G|_H\circ\Phi_H^{-1}$; here $\Phi_H:H\to\widehat{\widehat H}$, $\Phi_G|_H:H\to\Phi_G(H)$ and $\Xi^{-1}:\Phi_G(H)\to(\widehat G/H^\perp)\widehat{\ }$ are topological isomorphisms by [F5] and step 3.1. [F5, step 3.1]

5.1 Since $\widehat\psi$ is a topological isomorphism, so is its dual $\widehat{\widehat\psi}$, and naturality of evaluation $\Phi_{\widehat H}\circ\psi=\widehat{\widehat\psi}\circ\Phi_{\widehat G/H^\perp}$ (a direct computation from $\Phi_A(a)(\lambda)=\lambda(a)$) exhibits $\psi$ as the composite $\Phi_{\widehat H}^{-1}\circ\widehat{\widehat\psi}\circ\Phi_{\widehat G/H^\perp}$ of topological isomorphisms; hence $\psi$ is a homeomorphism onto its image $L$. Therefore $L$ is locally compact in the subspace topology and, being a subgroup of the Hausdorff group $\widehat H$, is closed in $\widehat H$ by [F6]. [F5, F6, step 4.1]

6.1 The image $L$ is dense in $\widehat H$ by step 2.1 and closed by step 5.1, so $L=\widehat H$: the restriction map $R$ is surjective, that is, every continuous character of $H$ extends to a continuous character of $G$. [step 2.1, step 5.1] ∎