---
id: thm-f4-c2-even-for-smooth-weierstrass-cy4
kind: theorem
title: "Evenness of c2 for smooth global Weierstrass Calabi–Yau fourfolds"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the broad compact Calabi–Yau and characteristic-class suppliers."
deps:
  - def-axiom-of-choice
  - def-f4-weierstrass-model-on-a-line-bundle
  - thm-f4-weierstrass-canonical-bundle-formula
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - lem-f4-global-weierstrass-c2-class-formula
  - lem-f4-c2-plus-c1-square-is-even-on-a-complex-threefold
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-f4-weierstrass-model-on-a-line-bundle: mathematical-premise
  thm-f4-weierstrass-canonical-bundle-formula: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  lem-f4-global-weierstrass-c2-class-formula: mathematical-premise
  lem-f4-c2-plus-c1-square-is-even-on-a-complex-threefold: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrés Collinucci and Raffaele Savelli, On Flux Quantization in F-Theory, arXiv:1011.6388v2"
      url: "https://arxiv.org/pdf/1011.6388v2"
      locator: "§3, pp. 5–8, Proposition and proof for the restricted smooth global-Weierstrass Calabi–Yau fourfold class."
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
---

## Statement

Let $B_3$ be a smooth connected integral separated scheme of finite type over $\mathbb C$ and of dimension three, let $\mathcal L\to B_3$ be an algebraic line bundle, write $B_3^{\mathrm{an}}$ for its analytic manifold and $L=\mathcal L^{\mathrm{an}}$, and let $p:W\to B_3$ be the algebraic weighted projective bundle of type $(2,3,1)$ associated with $\mathcal L$. The coordinate twists are $x\in\mathcal O_W(2)\otimes p^*\mathcal L^2$, $y\in\mathcal O_W(3)\otimes p^*\mathcal L^3$, and $z\in\mathcal O_W(1)$. Let $Y_4\subset W$ be the hypersurface $y^2=x^3+fxz^4+gz^6$ for $f\in H^0(B_3,\mathcal L^4)$ and $g\in H^0(B_3,\mathcal L^6)$, and put $\pi=p|_{Y_4}$. Assume $\pi$ is proper (separated, of finite type, and universally closed), flat (each local ring $\mathcal O_{Y_4,y}$ is flat over $\mathcal O_{B_3,\pi(y)}$), and surjective, with the regular section $s$ given by the distinguished point $[1:1:0]$. For the generic point $\eta$ of $B_3$, set $Y_{4,\bar\eta}:=Y_4\times_{B_3}\operatorname{Spec}\overline{\kappa(\eta)}$; assume this geometric generic fiber is a smooth proper geometrically integral curve with $\dim_{\overline{\kappa(\eta)}}H^1(Y_{4,\bar\eta},\mathcal O_{Y_{4,\bar\eta}})=1$. Write $Y_4^{\mathrm{an}}$ and $\pi^{\mathrm{an}}:Y_4^{\mathrm{an}}\to B_3^{\mathrm{an}}$ for the analytifications. Assume $Y_4^{\mathrm{an}}$ is smooth, connected, and compact, admits a smooth real positive closed $(1,1)$-form, and has a holomorphic line-bundle isomorphism $K_{Y_4^{\mathrm{an}}}:=\det\Omega^1_{Y_4^{\mathrm{an}}/\mathbb C}\cong\mathcal O_{Y_4^{\mathrm{an}}}$. These are the broad Calabi–Yau conditions used here. Then the second Chern class of the holomorphic tangent bundle $T^{1,0}Y_4^{\mathrm{an}}$ satisfies $c_2(Y_4^{\mathrm{an}})\in 2H^4(Y_4^{\mathrm{an}};\mathbb Z)$. The conclusion is restricted to this smooth global-Weierstrass setting and is not asserted for a singular or resolved fourfold.

## Statement references

[[def-f4-weierstrass-model-on-a-line-bundle]]

[[lem-f4-global-weierstrass-c2-class-formula]]

[[lem-f4-c2-plus-c1-square-is-even-on-a-complex-threefold]]

## Facts & Assumptions

**Given:** The algebraic Weierstrass morphism and section, and its analytification $\pi^{\mathrm{an}}:Y_4^{\mathrm{an}}\to B_3^{\mathrm{an}}$ with smooth connected compact Kähler total space and holomorphically trivial canonical bundle as specified in the Statement.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]], inherited from the canonical-bundle and characteristic-class suppliers. The broad Calabi–Yau convention used in the Statement requires connected compact Kählerness and holomorphic triviality of the canonical bundle ([[def-gts-compact-calabiyau-manifold-conventions]]).

[F1] The Weierstrass model has a regular section $s:B_3\to Y_4$ with $\pi\circ s=\operatorname{id}_{B_3}$, and its analytic dualizing line satisfies $\omega_{Y_4^{\mathrm{an}}}\cong(\pi^{\mathrm{an}})^*(K_{B_3^{\mathrm{an}}}\otimes L)$ ([[def-f4-weierstrass-model-on-a-line-bundle]], [[thm-f4-weierstrass-canonical-bundle-formula]]). Since $Y_4^{\mathrm{an}}$ is smooth, $\omega_{Y_4^{\mathrm{an}}}=K_{Y_4^{\mathrm{an}}}$; the broad Calabi–Yau hypothesis supplies $K_{Y_4^{\mathrm{an}}}\cong\mathcal O_{Y_4^{\mathrm{an}}}$.

[F2] For this smooth global Weierstrass specialization with $L\cong K_{B_3^{\mathrm{an}}}^{-1}$, $a=c_1(B_3^{\mathrm{an}})=c_1(L)$, and section class $\sigma$, the integral Chern class formula is
$$c_2(Y_4^{\mathrm{an}})=(\pi^{\mathrm{an}})^*(c_2(B_3^{\mathrm{an}})+11a^2)+12\sigma\smile(\pi^{\mathrm{an}})^*a$$
([[lem-f4-global-weierstrass-c2-class-formula]]).

[F3] On any connected compact smooth complex threefold $B_3^{\mathrm{an}}$, the class $c_2(B_3^{\mathrm{an}})+c_1(B_3^{\mathrm{an}})^2$ lies in $2H^4(B_3^{\mathrm{an}};\mathbb Z)$ ([[lem-f4-c2-plus-c1-square-is-even-on-a-complex-threefold]]).

## Proof

**Proof technique:** derive the base line-bundle twist from the canonical formula and section, then rewrite the base Chern term as twice an integral class.

1.1 Pulling back $K_{Y_4^{\mathrm{an}}}\cong\mathcal O_{Y_4^{\mathrm{an}}}$ along the analytified section $s^{\mathrm{an}}$ and using [F1] gives $K_{B_3^{\mathrm{an}}}\otimes L\cong (s^{\mathrm{an}})^*K_{Y_4^{\mathrm{an}}}\cong\mathcal O_{B_3^{\mathrm{an}}}$, so $L\cong K_{B_3^{\mathrm{an}}}^{-1}$ and $a=c_1(T^{1,0}B_3^{\mathrm{an}})=c_1(L)$. Since $\pi^{\mathrm{an}}$ has a section it is surjective; compactness of $Y_4^{\mathrm{an}}$ therefore makes $B_3^{\mathrm{an}}=\pi^{\mathrm{an}}(Y_4^{\mathrm{an}})$ compact, and smooth integrality makes it connected. These are the exact base hypotheses needed below. [A1, F1, given, algebra]

1.2 By [F3], choose $\eta\in H^4(B_3^{\mathrm{an}};\mathbb Z)$ with $c_2(B_3^{\mathrm{an}})+a^2=2\eta$. [A1, F3, given, choose]

2.1 Substitute $c_2(B_3^{\mathrm{an}})=2\eta-a^2$ in [F2]. The exact class identity gives
$$c_2(Y_4^{\mathrm{an}})=(\pi^{\mathrm{an}})^*\bigl(2\eta+10a^2\bigr)+12\sigma\smile(\pi^{\mathrm{an}})^*a=2(\pi^{\mathrm{an}})^*(\eta+5a^2)+2\bigl(6\sigma\smile(\pi^{\mathrm{an}})^*a\bigr).$$
All classes inside the parentheses are integral, so this exhibits $c_2(Y_4^{\mathrm{an}})$ as twice an element of $H^4(Y_4^{\mathrm{an}};\mathbb Z)$. The result is conditional on the exact smooth global-Weierstrass hypotheses of the Statement; it does not extend to singular or resolved fourfolds. [A1, F1, F2, F3, given, step 1.1, step 1.2, algebra] ∎

## Remarks

The exactness of the coefficient sequence $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb F_2\to0$ makes the parity statement valid even when the integral cohomology has torsion. The result does not extend by itself to a singular Weierstrass hypersurface or to an arbitrary crepant resolution.
