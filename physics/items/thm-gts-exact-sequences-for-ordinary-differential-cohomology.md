---
id: thm-gts-exact-sequences-for-ordinary-differential-cohomology
kind: theorem
title: Exact sequences for ordinary differential cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - thm-de-rham-theorem
  - lem-gts-differential-character-structure-maps-well-defined
  - lem-gts-integral-period-forms-lift-to-characters
  - def-axiom-of-choice
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - cor-homology-of-spheres
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  lem-gts-differential-character-structure-maps-well-defined: mathematical-premise
  lem-gts-integral-period-forms-lift-to-characters: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  cor-homology-of-spheres: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
justified_by: []
forward_refs:
  - gts-differential-cohomology-deligne-gerbes-examples
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
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
      locator: Section 1, Character Diagram and differential-character construction, PDF pp. 2–4.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, exact sequence (20), PDF pp. 36–39.
---

## Statement

Assume full AC. For a finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary and $k\ge1$, let $\widehat H^k(M;\mathbb Z)$ be the degree-$k$ Cheeger–Simons differential characters, let $\Omega^j_{\mathbb Z}(M)$ denote closed smooth $j$-forms with integral periods, and let $a(\eta)(z)=\int_z\eta\pmod{\mathbb Z}$. For $u\in H^{k-1}(M;\mathbb R/\mathbb Z)$ and a smooth integral $(k-1)$-cycle $z$, define
$$i_1(u)(z):=\langle u,\iota_*[z]\rangle\in\mathbb R/\mathbb Z,$$
where $\iota_*:H_{k-1}^\infty(M;\mathbb Z)\to H_{k-1}(M;\mathbb Z)$ is induced by inclusion of smooth chains into ordinary singular chains and $\langle u,-\rangle$ is cohomology-homology evaluation. Then the two natural sequences
$$0\longrightarrow H^{k-1}(M;\mathbb R/\mathbb Z)\xrightarrow{i_1}\widehat H^k(M;\mathbb Z)\xrightarrow{R}\Omega^k_{\mathbb Z}(M)\longrightarrow0$$
and
$$0\longrightarrow \Omega^{k-1}(M)/\Omega^{k-1}_{\mathbb Z}(M)\xrightarrow{a}\widehat H^k(M;\mathbb Z)\xrightarrow{I}H^k(M;\mathbb Z)\longrightarrow0$$
are exact. In particular, curvature and characteristic class together need not determine a differential character.

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[lem-gts-smooth-integral-chains-compute-singular-homology]]

[[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]]

## Facts & Assumptions

**Given:** Full AC, $M$ and $k$ as stated.

[F1] [[def-gts-cheegersimons-differential-character]]: a character is a homomorphism on all smooth integral $(k-1)$-cycles with a unique curvature form and the cochain-extension characteristic class.

[F2] [[lem-gts-differential-character-structure-maps-well-defined]]: the curvature and characteristic maps are well-defined and natural.

[F3] [[lem-gts-integral-period-forms-lift-to-characters]]: every closed integral-period $k$-form is a curvature.

[F4] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]: the coefficient UCT gives the evaluation short exact sequence with its Ext term for integral cohomology.

[F5] [[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]]: for divisible coefficients $G$, cohomology of a free chain complex identifies with $\operatorname{Hom}(H_*,G)$.

[F6] [[lem-gts-smooth-integral-chains-compute-singular-homology]]: smooth integral chains compute ordinary integral homology under $\mathrm{AC}_\omega$.

[F7] [[thm-de-rham-theorem]]: under its $\mathrm{AC}_\omega$ hypothesis, integration identifies real de Rham cohomology with real singular cohomology; full AC implies that hypothesis.

[F8] [[cor-homology-of-spheres]] gives $H_1(S^1;\mathbb Z)=\mathbb Z$ and $H_2(S^1;\mathbb Z)=0$; [F4] gives $H^2(S^1;\mathbb Z)=0$ and [F5] gives $H^1(S^1;\mathbb R/\mathbb Z)\cong\operatorname{Hom}(\mathbb Z,\mathbb R/\mathbb Z)\cong\mathbb R/\mathbb Z$.

[F9] [[thm-stokes-theorem-for-smooth-singular-chains]]: integration of an exterior derivative over a smooth singular simplex equals integration of the form over its oriented boundary.

## Proof

1.1 For $\eta\in\Omega^{k-1}(M)$ define $a(\eta)(z)=\int_z\eta\pmod{\mathbb Z}$. [F9] gives $a(\eta)(\partial c)=\int_c d\eta\pmod{\mathbb Z}$, so $a(\eta)$ is a differential character with curvature $d\eta$. The real cochain $\operatorname{Int}(\eta)$ extends $a(\eta)$ from cycles, and [F9] gives $\operatorname{Int}(d\eta)-\delta\operatorname{Int}(\eta)=0$; hence $I(a(\eta))=0$. If $\eta-\eta'$ is closed with integral periods then $a(\eta)=a(\eta')$. Conversely, if $a(\eta)=0$, then for every smooth integral $k$-simplex $\sigma$, its boundary is a cycle and [F9] gives $\int_\sigma d\eta=\int_{\partial\sigma}\eta\in\mathbb Z$. In a coordinate chart, take oriented affine $k$-simplices of diameter tending to zero based at any point. Their integrals of $d\eta$ are integer-valued, vary continuously with the simplex scale, and tend to zero, so they vanish for all sufficiently small scales. Dividing by their $k$-dimensional volume and taking the limit shows $d\eta$ vanishes at that point. If $k$ exceeds the chart dimension, $d\eta=0$ for degree reasons. Thus $d\eta=0$ everywhere; since $a(\eta)=0$, all its cycle periods are integral, so $\eta\in\Omega^{k-1}_{\mathbb Z}(M)$. The converse follows directly from the definition of integral periods. Therefore $\ker a=\Omega^{k-1}_{\mathbb Z}(M)$ and the left map of the second row is injective. [F1, F2, F9, given]

1.2 If $R(h)=0$, the defining boundary identity says $h(\partial c)=0$, so $h$ factors through $H_{k-1}^\infty(M;\mathbb Z)$. Since $\mathbb R/\mathbb Z$ is divisible, [F5] identifies the corresponding homomorphisms with smooth singular cohomology $H^{k-1}_\infty(M;\mathbb R/\mathbb Z)$; [F6] identifies this with $H^{k-1}(M;\mathbb R/\mathbb Z)$. Conversely each such class defines a flat character. Hence $\ker R=\operatorname{im}i_1$ and $i_1$ is injective. [F1, F5, F6, given]

1.3 The coefficient cochains on the free smooth integral chain groups form a short exact sequence $0\to C^*(M;\mathbb Z)\to C^*(M;\mathbb R)\to C^*(M;\mathbb R/\mathbb Z)\to0$: injectivity is coefficient inclusion and AC chooses a real lift on each simplex generator. For a cocycle $u$ with values in $\mathbb R/\mathbb Z$, choose a real cochain lift $\widetilde u$; then $\delta\widetilde u$ is an integral cocycle. Its class is independent of the lift because any two lifts differ by an integral cochain. If this class is zero, write $\delta\widetilde u=\delta v$ with $v$ integral; then $\widetilde u-v$ is a real cocycle lifting $u$. Conversely a class lifted from a real cocycle has zero connecting class. This proves that the kernel of the Bockstein $H^{k-1}(M;\mathbb R/\mathbb Z)\to H^k(M;\mathbb Z)$ is the image of real cohomology. For exactness at real cohomology, suppose a real cocycle $r$ reduces to a coboundary modulo integers, say $\bar r=\delta u$. Lift $u$ to a real cochain $\widetilde u$; then $r-\delta\widetilde u$ is an integral cocycle and maps to $[r]$. In degree zero the same conclusion follows directly because an integer-valued locally constant function is an integral zero-cocycle. Thus the kernel of real reduction is exactly the image of integral cohomology. With the characteristic-class convention $I(h)=[\operatorname{Int}(R(h))-\delta\widetilde h]$, a flat class represented by $u$ has $I(h)=[-\delta\widetilde u]= -\beta[u]$; the sign does not change its kernel or image. [F1, F4, given]

1.4 Let $c\in H^k(M;\mathbb Z)$ and choose an integral cocycle representative. By [F7], its real image has a closed-form representative $\omega$. Evaluation on smooth cycles shows that $\omega$ has integral periods. As the real integration cochain and $c_{\mathbb R}$ represent the same class, choose a real cochain $\widetilde h$ with $\delta\widetilde h=\operatorname{Int}(\omega)-c_{\mathbb R}$ and put $h(z)=\widetilde h(z)\pmod{\mathbb Z}$. Then $h(\partial b)=\int_b\omega\pmod{\mathbb Z}$ and the definition of $I$ gives $I(h)=c$. Hence $I$ is onto. [F1, F6, F7, given, choose]

2.1 The curvature map lands in $\Omega^k_{\mathbb Z}(M)$ by [F2]. It is onto by [F3]. Together with step 1.2 this proves exactness of the first row. [F2, F3, step 1.2]

2.2 Let $h$ satisfy $I(h)=0$. The cochain formula defining $I$ shows that the real singular cohomology class of $\operatorname{Int}(R(h))$ is the realification of $I(h)$, so [F7] gives a form $\eta$ with $d\eta=R(h)$. Then $h-a(\eta)$ is flat and has zero characteristic class. By step 1.3 its flat class is the reduction of a real cohomology class; [F7] represents that class by a closed $(k-1)$-form $\theta$. Thus $h=a(\eta)+a(\theta)=a(\eta+\theta)$, proving $\ker I\subseteq\operatorname{im}a$. The reverse inclusion is step 1.3 and the form-action calculation in step 1.1. [F1, F2, F7, step 1.1, step 1.3]

3.1 On $M=S^1$ and $k=2$, [F8] gives a nonzero flat class in $H^1(S^1;\mathbb R/\mathbb Z)$. By the first exact sequence already proved in steps 1.2 and 2.1 it gives a nonzero character with $R=0$. Its characteristic class lies in $H^2(S^1;\mathbb Z)=0$ by [F8], so it has the same $(I,R)$ pair as the zero character. This proves that the two maps need not determine a character. [F1, F4, F5, F6, F8, step 1.2, step 2.1, algebra] ∎

## Remarks

The two invariants $(I,R)$ do not determine a character pointwise. On the oriented circle, the characters $h_\theta(z)=\theta[z]$ for $\theta\in\mathbb R/\mathbb Z$ all have $I=R=0$ and have distinct holonomy on the positive fundamental cycle; the full calculation is on [[gts-differential-cohomology-deligne-gerbes-examples]]. The second exact sequence is not a uniqueness assertion.
