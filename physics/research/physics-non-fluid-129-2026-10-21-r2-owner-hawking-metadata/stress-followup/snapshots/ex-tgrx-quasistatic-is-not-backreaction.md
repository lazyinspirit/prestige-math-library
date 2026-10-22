---
id: ex-tgrx-quasistatic-is-not-backreaction
kind: example
title: Emitter diagnostic does not bound a coupled equation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-semiclassical-equation
  - lem-tgr-emitter-quasistatic-bounds
  - def-countable-choice
dependency_roles:
  post-tgrx-semiclassical-equation: formulation-prerequisite
  lem-tgr-emitter-quasistatic-bounds: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "A model-interface comparison between a fixed-reference photon-emitter ODE diagnostic and a semiclassical field-equation residual. It proves no backreaction estimate and makes no claim that a physical black hole follows either model."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF retrieved; §4.5, PDF pp. 16–17, equations (4.29)–(4.30), for the distinction between a fixed-background stress expectation and a semiclassical gravitational equation. Used for scope context only."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice, meaning every countable family of
nonempty sets has a choice function. Let $G,c,\hbar,M_0,M_{\min}>0$ and
$\eta$ dimensionless with $0<\eta\le1$, and $0<M_{\min}<M_0$; use SI units with $G$ in
$\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c$ in $\mathrm{m\,s^{-1}}$, $\hbar$ in
$\mathrm{J\,s}$, masses in kilograms, and $t_\infty$ in seconds. Put
$$\alpha:=\frac{\eta\hbar c^4}{15360\pi G^2},\qquad M(t_\infty):=(M_0^3-3\alpha t_\infty)^{1/3},\qquad \tau:=\frac{M_0^3-M_{\min}^3}{3\alpha}.$$
Here $\alpha$ has units $\mathrm{kg^3\,s^{-1}}$, $\tau$ has units seconds,
and $M(t_\infty)\ge M_{\min}>0$ on $[0,\tau]$.
On $[0,\tau]$ the exact ODE diagnostic is
$$\epsilon_{\mathrm{qs}}(t_\infty):=\frac{2G\alpha}{c^3M(t_\infty)^2}.$$
This diagnostic and the threshold $\epsilon_0>0$ are dimensionless.
For any $\epsilon_0>0$ such that $M_{\min}^2\ge2G\alpha/(c^3\epsilon_0)$, the scalar ratio obeys $\epsilon_{\mathrm{qs}}\le\epsilon_0$ throughout the interval. This ODE bound does not by itself bound the residual of the semiclassical field equation. For a supplied candidate metric $g$ and state $\omega$ on the modeled domain, not assumed to solve the adopted equation, together with its scale and renormalization prescription, define that tensor residual by
$$\mathcal R_{ab}[g,\omega]:=G_{ab}+\Lambda_{\mathrm{cc}}g_{ab}+\alpha_{\mathrm{ct}}H^{(R^2)}_{ab}+\beta_{\mathrm{ct}}H^{(\operatorname{Ric}^2)}_{ab}-\frac{8\pi G}{c^4}T^{\mathrm{ren}}_{ab}[g,\omega].$$
Here $G_{ab}$ is the Einstein tensor, $\alpha_{\mathrm{ct}}$ and
$\beta_{\mathrm{ct}}$ are curvature-counterterm couplings, the $H$ tensors
are the specified curvature-squared variation tensors, and $T^{\mathrm{ren}}_{ab}$ is the
fixed Hadamard-subtracted state-dependent stress tensor.
The ODE bound concerns only its scalar mass history; it supplies no coupled field-equation solution or estimate of the curvature and renormalized stress along a changing geometry.

## Example references

[[lem-tgr-emitter-quasistatic-bounds]]

[[post-tgrx-semiclassical-equation]]

## Facts & Assumptions

[F1] [[lem-tgr-emitter-quasistatic-bounds]]: the ideal emitter ODE supplies $M(t_\infty)$ and the dimensionless diagnostic $\epsilon_{\mathrm{qs}}=2G\alpha/(c^3M^2)$; the lemma proves its ODE bounds and explicitly states that they give no error bound against an unconstructed Einstein-quantum backreaction solution.

[F2] [[post-tgrx-semiclassical-equation]]: the new model equation is a tensor equation for a metric, fixed curvature counterterms, a specified state, and the renormalized stress tensor under a chosen prescription.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every countable family of nonempty sets has a choice function; this is the exact choice hypothesis in [F1].

## Verification

**Given:** Countable choice, the scalar ODE and diagnostic of [F1], and the metric/state-dependent equation of [F2].

1.1 Under [A1], apply the exact diagnostic formula and bound in [F1]. They depend only on the ODE mass history and constants in that ODE; neither contains a spacetime metric $g$, state $\omega$, curvature tensor, or renormalized stress tensor. [A1, F1, algebra]

1.2 [F1], under [A1], explicitly states that the ODE bounds give no error estimate against an unconstructed Einstein-quantum backreaction solution. This is a boundary on what the scalar-model calculation establishes, not a claim that a coupled solution exists. [A1, F1]

2.1 By [F2], the residual $\mathcal R_{ab}[g,\omega]$ depends on a supplied metric, its curvature tensors, the selected state and the renormalized stress prescription. These are additional inputs and are not quantities in the ODE diagnostic of step 1.1. [F2, step 1.1]

3.1 The ODE diagnostic in step 1.1 supplies no state or renormalized-stress estimate for the residual in step 2.1, and neither [F1] nor [F2] supplies a relation that bounds the candidate metric and state in terms of that scalar diagnostic. Hence no component estimate for $\mathcal R_{ab}$ follows from the ODE bound alone. Obtaining one would require an additional metric/state relation and curvature/stress estimates. This is a limit of the stated inputs; it asserts neither an unbounded residual nor an instability. [A1, F1, F2, step 1.1, step 1.2, step 2.1] ∎

