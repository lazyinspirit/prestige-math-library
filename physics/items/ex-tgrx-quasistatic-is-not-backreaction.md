---
id: ex-tgrx-quasistatic-is-not-backreaction
kind: example
title: Emitter diagnostic does not bound a coupled equation
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 6
deps:
  - post-tgrx-semiclassical-equation
  - def-tgrx-hadamard-stress-contract
  - lem-tgr-emitter-quasistatic-bounds
  - def-countable-choice
dependency_roles:
  post-tgrx-semiclassical-equation: formulation-prerequisite
  def-tgrx-hadamard-stress-contract: formulation-prerequisite
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume the Axiom of Countable Choice, meaning every at most countable family of
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

[F1] [[lem-tgr-emitter-quasistatic-bounds]]: the fixed-reference ideal-emitter ODE supplies $M(t_\infty)=(M_0^3-3\alpha t_\infty)^{1/3}$, $\alpha=\eta\hbar c^4/(15360\pi G^2)$, and $\epsilon_{\mathrm{qs}}=2G\alpha/(c^3M^2)$; under its positive-mass cutoff hypotheses it proves the stated scalar bounds.

[F2] [[post-tgrx-semiclassical-equation]]: the new model equation is a tensor equation for a metric, fixed curvature counterterms, a specified state, and the renormalized stress tensor under a chosen prescription.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every at most countable family of nonempty sets has a choice function; this is the exact choice hypothesis in [F1].

[F3] [[def-tgrx-hadamard-stress-contract]]: the prescription supplies a fixed smooth symmetric state-independent local correction $C_{ab}$, with stress-energy units, added to the diagonal bidifferential expression. Its conditions are locality, overlap compatibility, covariance under embeddings preserving the scalar operator, and conservation of the resulting stress. No bound on the finite normalization constants is imposed.

## Verification

**Given:** Countable choice, the scalar ODE and diagnostic of [F1], and the candidate-data contracts [F2]–[F3]. Candidates are not assumed to solve the adopted field equation.

1.1 By [A1] and [F1], $M\ge M_{\min}>0$ gives $\epsilon_{\mathrm{qs}}=2G\alpha/(c^3M^2)\le2G\alpha/(c^3M_{\min}^2)\le\epsilon_0$ under the stated threshold. These formulas involve only the ODE constants and mass history. [given, A1, F1, algebra]

1.2 Fix any supplied candidate on a nonempty modeled domain, with its metric $g$, operator $P$, state $\omega$, kernels, scale, curvature tensors and finite couplings. This is the candidate supplied in the Example, not a claimed general existence theorem. Its residual is a smooth tensor by [F2]–[F3]. No identification of this metric or state with the scalar mass history is part of [F1]. [given, F1, F2, F3]

2.1 For any finite real constant $q$ with units $\mathrm{J\,m^{-3}}$, replace only the finite local correction by $C^{(q)}_{ab}:=C_{ab}+qg_{ab}$, including $q$ among the fixed finite normalization conditions for this new prescription. This is another prescription admitted by [F3]: $qg$ is smooth, symmetric, state-independent and pointwise local; it agrees on overlaps and pulls back under the allowed isometries. Moreover $\nabla^a(qg_{ab})=0$ because $q$ is constant and $\nabla g=0$. Thus stress conservation is preserved. The same positive Hadamard state, smooth remainder, operator and cutoff geometry are retained, and $T^{(q)}=T^{(0)}+qg$. Each prescription fixes $q$ throughout its domain; this comparison does not vary a coupling along a solution. [given, F2, F3, step 1.2, construct, algebra]

3.1 Put $\kappa:=8\pi G/c^4>0$. The residuals in step 2.1 satisfy $\mathcal R^{(q)}=\mathcal R^{(0)}-\kappa qg$. At any point $p$, choose a timelike tangent vector $u$ normalized by $g_p(u,u)=-1$, possible by the Lorentzian signature and positive rescaling of any negative-norm vector. Write $r_0:=\mathcal R^{(0)}_p(u,u)$; then $\mathcal R^{(q)}_p(u,u)=r_0+\kappa q$. For any proposed finite nonnegative bound $B$ of units $\mathrm{m^{-2}}$ determined only by the fixed ODE data, take a positive $b$ of those units and the finite $q=(B+|r_0|+b)/\kappa$. This gives $\mathcal R^{(q)}_p(u,u)>B$ while step 1.1 and its entire ODE input remain unchanged. Hence those inputs alone cannot bound even this normalized tensor component uniformly over the admitted candidate prescriptions. [given, F2, F3, step 1.1, step 2.1, choose, algebra]

4.1 Step 3.1 establishes the asserted limit of the ODE diagnostic. It does not assert divergence or instability within one fixed prescription, or empirical validity of any candidate. Bounds after further fixing the metric/state relation, normalization conditions and admissible input class require additional estimates; none is supplied by the ODE ratio alone. No singular-state construction, coupled solution or physical backreaction history is inferred. [given, F1, F2, F3, step 1.1, step 3.1] ∎
