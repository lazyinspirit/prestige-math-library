---
id: lem-gts-deligne-character-comparison
kind: lemma
title: Deligne and Cheeger–Simons models agree under geometric cycle inputs
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-smooth-deligne-cohomology-model
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - lem-gts-deligne-exact-sequences
  - def-gts-character-diagram-geometric-input
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - thm-the-cone-long-exact-sequence
  - thm-stokes-theorem-for-smooth-singular-chains
  - def-axiom-of-choice
  - def-gts-good-cover-singular-cech-comparison-input
dependency_roles:
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  lem-gts-deligne-exact-sequences: mathematical-premise
  def-gts-character-diagram-geometric-input: mathematical-premise
  thm-five-lemma-for-a-morphism-of-long-exact-sequences: mathematical-premise
  thm-the-cone-long-exact-sequence: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.5, Definitions 3.126–3.128 and Corollary 3.131, PDF pp. 67–68.
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, Character Diagram, PDF pp. 2–4.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC, the category-level input of [[def-gts-character-diagram-geometric-input]], and the good-cover comparison input of [[def-gts-good-cover-singular-cech-comparison-input]]. On the full subcategory $\mathcal C_{\mathrm{geo}}$ of that item, the degree-$k$ smooth Deligne model on a good cover is naturally isomorphic to the degree-$k$ Cheeger–Simons differential-character group. The isomorphism preserves curvature, integral characteristic class, the action of forms, smooth pullback, and cover refinement.

## Statement references

[[def-gts-smooth-deligne-cohomology-model]]

[[def-gts-cheegersimons-differential-character]]

## Facts & Assumptions

**Given:** Full AC, the stated category-level input on $\mathcal C_{\mathrm{geo}}$, the good-cover comparison input, a good cover of an object $M$, and $k\ge1$.

[F1] [[def-gts-smooth-deligne-cohomology-model]] is hypercohomology of the stated Cech total complex; [[lem-gts-deligne-exact-sequences]] proves its curvature, characteristic, and form-action exact sequence.

[F2] [[def-gts-cheegersimons-differential-character]] defines characters on every smooth integral $(k-1)$-cycle with curvature tested on every smooth integral $k$-chain.

[F3] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]] gives the exact Character Diagram for the Cheeger–Simons model.

[F4] [[def-gts-character-diagram-geometric-input]] supplies the local acyclic neighborhoods and null-homologous cycle representatives required to define evaluation on cycles. Its third condition uses the explicit map $\Psi^k_{\infty,M,\mathcal U}=H^k(\iota^*)\circ\Psi^k_{M,\mathcal U,\mathbb Z}$ from fixed-cover integral Cech cohomology to smooth-singular integral cohomology, and identifies the Deligne integer cocycle with $[\operatorname{Int}(R)-\delta\widetilde\chi]$ in that target.

[F5] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]: a morphism of exact sequences with isomorphisms on the four surrounding terms is an isomorphism on the middle term.

[F6] [[thm-the-cone-long-exact-sequence]] supplies the long exact sequence for the short exact sequence of complexes used below, by its mapping-cone identification.

[F7] [[thm-stokes-theorem-for-smooth-singular-chains]] supplies Stokes for the smooth integral chains below.

## Proof

1.1 In the truncated integer-form model of [F1], let $\mathcal A_k$ be the subcomplex with $\Omega^j$ in degree $j+1$ for $0\le j<k$ and zero elsewhere. The quotient is the constant integer sheaf in degree zero, so $0\to\mathcal A_k\to\mathcal D_k\to\underline{\mathbb Z}\to0$ is a short exact sequence of complexes. The partition-of-unity contraction of the form rows, as in the proof of [F1]'s exact sequence, computes $\mathbb H^k(\mathcal A_k)=\Omega^{k-1}/d\Omega^{k-2}$ and $\mathbb H^{k+1}(\mathcal A_k)=0$, with $\Omega^{-1}=0$. The resulting long exact sequence gives a form action $a_{\mathrm{all}}:\Omega^{k-1}\to\widehat H^k_{\mathrm{Del}}$ with image $\ker I$. Normalize this action by the cone cocycle $(0,d\eta,-\eta)$. Under [F1]'s projection, the degree-$(k-1)$ form component is multiplied by $(-1)^{k-1}$, so $a_{\mathrm{all}}(\eta)$ is represented by $(-1)^k\eta$ in the global top-form term of the truncated integer-form complex. The cone differential is $(z,\alpha,b)\mapsto(dz,d\alpha,-db+z-\alpha)$; hence this cocycle has curvature $d\eta$ and agrees with [F1]'s $a$ on closed forms. If $a_{\mathrm{all}}(\eta)=0$, its curvature gives $d\eta=0$, and [F1]'s exact sequence then says $[\eta]_{\mathrm{dR}}$ is the real image of an integral class. Conversely any such closed form acts trivially by that sequence. By de Rham evaluation these are precisely the closed integral-period forms. Thus $\ker a_{\mathrm{all}}=\Omega^{k-1}_{\mathbb Z}$. These constructions commute with restriction. [F1, F6, given, algebra]

2.1 Let $z$ be a smooth integral $(k-1)$-cycle. By [F4], choose an open neighborhood $U$ of its compact image with $H^k(U;\mathbb Z)=0$. Step 1.1 supplies a representative $a_{\mathrm{all}}(\eta)$ of the restricted Deligne class, for $\eta\in\Omega^{k-1}(U)$; define $\chi(z)=\int_z\eta\pmod{\mathbb Z}$. Two choices differ by a closed integral-period form, so give the same value. Given a second neighborhood, [F4] supplies a smaller such neighborhood inside their intersection; the kernel calculation of step 1.1 there proves independence of the neighborhood as well. [F1, F4, step 1.1, given]

3.1 A common neighborhood for the finite union of two cycle supports gives one form representative, so integration proves additivity in cycles and in the Deligne class. For a boundary $z=\partial c$, use [F4]'s cycle-representative condition to write $z-P=\partial b$ inside a neighborhood $U$ with $H^k(U;\mathbb Z)=0$, where $P$ is the supplied pseudomanifold fundamental cycle. The same condition supplies $y$ with $\partial y=P$ in a neighborhood $V$ with $H^k(V;\mathbb Z)=0$. Choose representatives $\eta$ on $U$ and $\eta'$ on $V$ by step 1.1. On $U\cap V$ their form-action classes agree, so $\eta-\eta'$ has integral periods. Since $P$ lies in the intersection, $\int_P\eta=\int_P\eta'\pmod{\mathbb Z}$. Stokes and $d\eta=d\eta'=R(\widehat x)$ give $\chi(z)=\int_bR(\widehat x)+\int_yR(\widehat x)\pmod{\mathbb Z}$. Now $c-b-y$ is a smooth integral $k$-cycle, and [F1] implies that $R(\widehat x)$ has integral periods. Therefore $\chi(\partial c)=\int_cR(\widehat x)\pmod{\mathbb Z}$, proving the character identity. For a smooth map, choose a form representative near the image cycle and pull it back near the original cycle; a smaller neighborhood as in step 2.1 proves equality of evaluations. Restriction and refinement naturality follow in the same way. [F1, F2, F4, F7, step 1.1, step 2.1, algebra]

4.1 The construction commutes with the form-action map by its defining integral. Its characteristic class is the connecting class of the local integer Cech cocycle: the third condition in [F4] states the precise equality $\Psi^k_{\infty,M,\mathcal U}(c_{\mathrm{Del}})=[\operatorname{Int}(R)-\delta\widetilde\chi]$ in $H^k(C^*_\infty(M;\mathbb Z))$, with independence of the cochain lift supplied by [F2]. Thus the comparison commutes with $I$ as well as $R$ and the form action; naturality of restriction and refinement gives the same compatibility for pullbacks and cover refinements. [F1, F2, F4, step 2.1, step 3.1]

5.1 The induced map between the exact rows is the identity on the form quotient, closed integral forms, real cohomology and integral cohomology terms identified in [F1] and [F3]. By [F5] it is an isomorphism on the middle differential-cohomology group. The proof is conditional on [F4]; no claim is made here that every smooth manifold has that local geometric input. [F1, F3, F4, F5, step 3.1, step 4.1] ∎
