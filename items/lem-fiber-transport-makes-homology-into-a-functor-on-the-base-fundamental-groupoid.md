---
id: lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid
kind: lemma
title: Fiber transport is functorial on the base fundamental groupoid
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-fiber-homology-local-system-of-a-serre-fibration, lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems, prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent, def-local-system-of-r-modules-and-its-pullback, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lecture 24"
      url: "https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 24, fiber transport and local coefficient systems"
---

## Statement

For a Serre fibration $p:E\to B$, a commutative ring $R$, and $q\geq0$, the homology assignment $\mathcal H_q(p;R)$ is a choice-free local system: constant paths act identically, endpoint-fixed homotopic paths act equally, and
$$\mathcal H_q([\gamma*\eta])=\mathcal H_q([\eta])\,\mathcal H_q([\gamma])$$
for composable paths $\gamma:b\to c$ and $\eta:c\to d$.

Assume AC for the cohomological comparison in the preceding definition. Then $\mathcal H^q(p;R)$ satisfies the same covariant functor laws. In particular reversal before cohomological pullback gives
$$\mathcal H^q([\gamma*\eta])=\mathcal H^q([\eta])\,\mathcal H^q([\gamma]).$$

## Facts & Assumptions

**Given:** The Serre fibration, coefficient ring, degree, and composable endpoint-fixed path classes.

[F1] [[def-fiber-homology-local-system-of-a-serre-fibration]] gives the two strict-fiber transport formulas and separates the choice-free homology branch from the AC-dependent cohomology branch.

[F2] [[lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems]] gives the corresponding Hurewicz local-system identities.

[F3] [[prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent]] supplies the path-homotopy, constant, composition, and inverse transport laws used by [F2].

[F4] [[def-local-system-of-r-modules-and-its-pullback]] defines a local system as a functor from the fundamental groupoid.

[F5] [[def-axiom-of-choice]] is assumed only for the cohomological comparison maps $K_b$ from [F1].

## Proof

**Proof technique:** conjugation of the Hurewicz functor laws.

1.1 Write $J_b:H_q(F_b;R)\to H_q(F'_b;R)$ for the homology comparison. By [F1], $$\tau_\gamma=J_c^{-1}H_q(T_\gamma)J_b.$$ For the constant path, [F2]–[F3] give $H_q(T_{c_b})=\operatorname{id}$, so $\tau_{c_b}=\operatorname{id}$. Endpoint-fixed homotopic paths have equal middle maps. For composable $\gamma,\eta$, the middle identity $H_q(T_{\gamma*\eta})=H_q(T_\eta)H_q(T_\gamma)$ makes the adjacent $J_cJ_c^{-1}$ cancel and gives $\tau_{\gamma*\eta}=\tau_\eta\tau_\gamma$. Thus [F4] applies, with no choice. [F1, F2, F3, F4]

1.2 Under [F5], write $K_b=(j_b)^*:H^q(F'_b;R)\to H^q(F_b;R)$. The formula in [F1] is $$s_\gamma=K_cH^q(T_{\bar\gamma})K_b^{-1}.$$ Since $\overline{\gamma*\eta}=\bar\eta*\bar\gamma$, [F2]–[F3] give $T_{\overline{\gamma*\eta}}\simeq T_{\bar\gamma}T_{\bar\eta}$. Contravariance gives $H^q(T_{\overline{\gamma*\eta}})=H^q(T_{\bar\eta})H^q(T_{\bar\gamma})$. Cancelling $K_cK_c^{-1}$ now yields $s_{\gamma*\eta}=s_\eta s_\gamma$. Constants and endpoint-fixed homotopies are handled identically, so [F4] gives the cohomology local system. [F1, F2, F3, F4, F5]

2.1 If a component has empty fibers, all its stalks and maps are zero; a point fiber, the zero ring, and $q=0$ obey the same conjugation formulas. Reversal interchanges the two endpoints exactly as typed in step 1.2, and reversing twice returns the original class. The homology proof uses supplied maps and finite algebra only. The cohomology proof uses AC precisely through [F5] and does not spend it again. These checks establish every claimed functor law. [F1, F4, F5, step 1.1, step 1.2] ∎
