---
id: thm-gts-character-diagram-uniqueness-for-ordinary-differential-cohomology
kind: theorem
title: Character-diagram uniqueness for ordinary differential cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - def-gts-character-functor-and-character-diagram
  - def-gts-character-diagram-geometric-input
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - thm-stokes-theorem-for-smooth-singular-chains
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  def-gts-character-functor-and-character-diagram: mathematical-premise
  def-gts-character-diagram-geometric-input: mathematical-premise
  thm-five-lemma-for-a-morphism-of-long-exact-sequences: mathematical-premise
  cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Theorem 1.1 and complete proof, PDF pp. 4–8; geometric Facts 2.1–2.3, PDF pp. 11–15.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.5, Deligne and Cheeger–Simons comparison, PDF pp. 67–68.
---

## Statement

Assume full AC and that the full subcategory $\mathcal C_{\mathrm{geo}}$ of manifolds defined by [[def-gts-character-diagram-geometric-input]] satisfies its stated character-diagram geometric input conditions. Let $\widehat G$ be a Character Functor on smooth manifolds with the exact diagram of [[def-gts-character-functor-and-character-diagram]]. On $\mathcal C_{\mathrm{geo}}$, there is a unique natural isomorphism $\Phi:\widehat G^k\to\widehat H^k(-;\mathbb Z)$ which is the identity on the adjacent diagram entries and commutes with $i_1,i_2,R,I$.

## Statement references

[[def-gts-character-functor-and-character-diagram]]

[[def-gts-cheegersimons-differential-character]]

[[def-gts-character-diagram-geometric-input]]

## Facts & Assumptions

**Given:** Full AC, the stated category-level geometric input on $\mathcal C_{\mathrm{geo}}$, and a Character Functor $\widehat G$.

[F1] [[def-gts-character-functor-and-character-diagram]] supplies the natural maps and the two exact rows.

[F2] [[def-gts-cheegersimons-differential-character]] defines $\widehat H^k$ by evaluation on every smooth integral $(k-1)$-cycle and fixes its curvature convention.

[F3] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]] proves the exact rows for $\widehat H^k$.

[F4] [[def-gts-character-diagram-geometric-input]] supplies the local neighborhoods and cycle representatives needed to define the comparison map, plus natural rigidity of the integral characteristic functor.

[F5] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]: a morphism of the two exact rows that is an isomorphism on the adjacent terms is an isomorphism on the middle term.

[F6] [[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]]: because $\mathbb R/\mathbb Z$ is divisible, evaluation identifies $H^{k-1}(U;\mathbb R/\mathbb Z)$ with $\operatorname{Hom}(H_{k-1}(U;\mathbb Z),\mathbb R/\mathbb Z)$ for every open $U$ in the stated smooth-chain comparison scope.

[F7] [[thm-stokes-theorem-for-smooth-singular-chains]]: integration of an exterior derivative over a smooth chain equals integration over its oriented boundary.

## Proof

1.1 Let $M\in\mathcal C_{\mathrm{geo}}$, $g\in\widehat G^k(M)$, and $a\in Z_{k-1}^\infty(M;\mathbb Z)$. By [F4], choose an open neighborhood $U$ of $|a|$ with $H^k(U;\mathbb Z)=0$. Exactness of the second row in [F1] then gives a form class $[\theta]\in\Omega^{k-1}(U)/\Omega^{k-1}_{\mathbb Z}(U)$ whose form-action image is the restriction of $g$. Define $\Phi(g)(a)=\int_a\theta\pmod{\mathbb Z}$. Changing $\theta$ by a closed integral-period form does not change the value. If $U'$ is another choice, a common smaller neighborhood from [F4] and naturality of the restriction maps show that both definitions restrict to the same form class and give the same integral. Thus $\Phi(g)(a)$ is well-defined. [F1, F4, given]

2.1 To see additivity in the cycle, apply [F4] to the finite union of supports of $a,b,a+b$ and use one common neighborhood $U$. There $\Phi(g)(a+b)=\int_{a+b}\theta=\int_a\theta+\int_b\theta=\Phi(g)(a)+\Phi(g)(b)$. Additivity in $g$ follows because the exact-row form-action map is a homomorphism and the same local representatives add. [F1, step 1.1]

2.2 Let $a=\partial e$ be a boundary, with $e$ a smooth integral $k$-chain. By [F4], replace $a$ by the fundamental cycle $P$ of an oriented piecewise-smooth pseudomanifold, with $a-P=\partial b$ in a neighborhood $U$ on which $g=i_2[\theta]$; this local form exists because $H^k(U;\mathbb Z)=0$ and the second exact row of [F1] is onto. The same input supplies a chain $y$ with $\partial y=P$ in a neighborhood $U'$ on which $g=i_2[\theta']$. [F7] gives $\int_a\theta-\int_P\theta=\int_bR(g)$ and $\int_P\theta'=\int_yR(g)$. On $U\cap U'$, injectivity of $i_2$ in [F1] implies $\theta-\theta'$ has integral periods, so its integral on $P$ is an integer. Since $\partial(e-b-y)=0$, the integral of $R(g)$ on $e-b-y$ is an integer by $R(g)\in\Omega^k_{\mathbb Z}$ in [F1]. Combining these equalities gives $\Phi(g)(a)=\int_eR(g)\pmod{\mathbb Z}$. Thus $\Phi(g)$ is a differential character with curvature $R(g)$. [F1, F2, F4, F7, step 1.1, algebra]

3.1 Let $u\in H^{k-1}(M;\mathbb R/\mathbb Z)$ and let $a$ be a smooth integral cycle. Choose $U$ from [F4]. Since $H^k(U;\mathbb Z)=0$, the Bockstein of $u|_U$ vanishes and the coefficient long exact sequence gives a real class reducing to $u|_U$. Choose a closed de Rham representative $\eta$ of that real class. Commutativity $i_1\alpha=i_2\beta$ in [F1] then gives $i_1(u)|_U=i_2([\eta])$, where $[\eta]$ here denotes the form class modulo integral-period forms. The definition of $\Phi$ yields $\Phi(i_1(u))(a)=\int_a\eta\pmod{\mathbb Z}$, which equals $u([a])$ by the evaluation identification [F6]; smooth-chain comparison [F2] makes this the same homology class used by $i_1$. Hence $\Phi$ is the identity on the flat subgroup. On $i_2$, the same definition is integration of the supplied form; step 2.2 gives compatibility with $R$. The construction commutes with smooth maps because cycles and local forms pull back, and step 1.1 removes neighborhood choices. Thus $\Phi$ is a natural morphism of the first exact rows in [F1] and [F3], with identity maps on $H^{k-1}(M;\mathbb R/\mathbb Z)$ and $\Omega^k_{\mathbb Z}(M)$. [F1, F2, F3, F4, F6, step 1.1, step 2.2, algebra]

4.1 Apply [F5] to the two first exact rows in [F1] and [F3]. Step 3.1 gives identity maps on the outer terms, so the middle comparison $\Phi$ is an isomorphism. [F1, F3, F5, step 3.1]

5.1 Now define $\tau:H^k(-;\mathbb Z)\to H^k(-;\mathbb Z)$ by $\tau(I_{\widehat G}(g))=I_{\widehat H}(\Phi(g))$. Exactness and $i_2$ compatibility make this well-defined, and applying the same construction to $\Phi^{-1}$ shows it is a natural automorphism. Every torsion class is a Bockstein $t=B u$ because real cohomology has no torsion and the coefficient sequence is exact. Since $I i_1=-B$, represent $t$ by $i_1(-u)$. Step 3.1 gives $\Phi(i_1(-u))=i_1(-u)$, so $\tau(t)=I_{\widehat H}(i_1(-u))=B u=t$. The rigidity condition in [F4] forces $\tau=\mathrm{id}$, proving compatibility with $I$ and hence with the full Character Diagram. [F1, F3, F4, step 3.1, step 4.1]

6.1 If $\Phi'$ is another natural morphism fixing the diagram entries, then for any cycle $a$ choose a neighborhood $U$ as in [F4]; the restriction of a class is a form-action class there, and both natural transformations give its same integral over $a$. Therefore $\Phi'(g)(a)=\Phi(g)(a)$ for every cycle, so $\Phi'=\Phi$. This proves uniqueness conditional on the geometric input in the Statement. [F1, F3, F4, step 3.1, step 4.1, step 5.1] ∎

## Remarks

The conditional proof has not established that every smooth manifold satisfies the local pseudomanifold-neighborhood and integral-cohomology-rigidity hypotheses. The source gives a geometric proof sketch for those facts; the exact missing local argument is recorded in batch notes, so this item is escalated rather than treated as an unconditional ready supplier.
