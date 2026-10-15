---
id: lem-qft-scalar-poincare-action
kind: lemma
title: Strongly continuous scalar one-particle Poincare action
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - lem-qft-mass-shell-measure-invariant
  - lem-qft-mass-shell-test-range-dense
  - lem-qft-mass-shell-test-restriction-continuity
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-time-orientation-and-future-causal-sets
  - thm-chain-rule-for-total-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-dominated-convergence
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-mass-shell-measure-invariant: mathematical-premise
  lem-qft-mass-shell-test-range-dense: mathematical-premise
  lem-qft-mass-shell-test-restriction-continuity: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted HTML text of chapter 2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Sections 2.4.1 and 2.6, relativistic one-particle normalization and the Poincare-covariant Heisenberg field.
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapters 3–4
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; chapter 3 relativistic shell normalization and chapter 4 free scalar modes.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Use the proper
orthochronous Poincare group
$G=\mathbb R^4\rtimes SO^+(1,3)$ in the coordinates of
[[def-qft-scalar-mass-shell]]. For $g=(a,\Lambda)\in G$, define
$$f_g(x)=f(\Lambda^{-1}(x-a)),\qquad
[U_\mu(g)h](p)=e^{ip\circ a}h(\Lambda^{-1}p).$$
Then $f_g\in\mathscr S(\mathbb R^4)$, $U_\mu(g)$ is a well-defined unitary
on $H_\mu$, $g\mapsto U_\mu(g)$ is a strongly continuous representation, and
$$K_\mu f_g=U_\mu(g)K_\mu f
\qquad(f\in\mathscr S(\mathbb R^4)).$$
The group product convention is
$(a,\Lambda)(b,\Gamma)=(a+\Lambda b,\Lambda\Gamma)$.

## Facts & Assumptions

**Given:** Countable Choice, the scalar shell phase and test restriction,
the invariant shell measure, and the proper orthochronous Minkowski action.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The shell phase $p\circ x=-\eta(p,x)$ is Lorentz invariant and the
test restriction is $\mathcal F_+f$ on the shell.
[[def-qft-scalar-mass-shell]]

[F2] The shell measure is locally finite, sigma-finite, and Lorentz invariant.
[[lem-qft-mass-shell-measure-invariant]]

[F3] $C_c^\infty(\mathbb R^3\setminus\{0\})$ is contained in the shell
restriction range in the massless chart and is dense there; the massive
$C_c^\infty(\mathbb R^3)$ chart functions are also in the range and dense.
[[lem-qft-mass-shell-test-range-dense]]

[F4] $K_\mu$ maps every Schwartz test continuously into $H_\mu$.
[[lem-qft-mass-shell-test-restriction-continuity]]

[F5] Proper orthochronous Lorentz maps preserve $\eta$, future orientation
and orientation; in particular $|\det\Lambda|=1$.
[[def-sr-affine-minkowski-model]]
[[def-lorentz-form-and-inertia]]
[[def-time-orientation-and-future-causal-sets]]

[F6] The chain rule applies to differentiable compositions.
[[thm-chain-rule-for-total-derivatives]]

[F7] A $C^1$ diffeomorphism between open Euclidean sets satisfies
change of variables for nonnegative measurable functions under Countable Choice.
[[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F8] Dominated convergence applies to an integrable majorant.
[[thm-dominated-convergence]]

## Proof

1.1 The affine pullback $f_g(x)=f(\Lambda^{-1}(x-a))$ preserves Schwartz
space. Repeated chain rule [F6] expresses each derivative as a finite linear
combination of derivatives of $f$ at $\Lambda^{-1}(x-a)$. Also
$1+|x|\le C(1+|\Lambda^{-1}(x-a)|)$ for a finite constant $C$ depending on
$a,\Lambda$. Thus every polynomially weighted derivative remains bounded by
the corresponding finite sum of Schwartz seminorms. [A1,F6,given,algebra]

1.2 Multiplication by $e^{ip\circ a}$ preserves the $H_\mu$ norm.
Composition with $\Lambda^{-1}$ also preserves that norm by [F2]; it
preserves null-equivalence classes for the same reason. Therefore $U_\mu(g)$
is a well-defined isometry. Its inverse is the corresponding formula for
$g^{-1}$, so it is unitary. Direct substitution and Lorentz invariance of
$p\circ x$ give
$U_\mu(a,\Lambda)U_\mu(b,\Gamma)
=U_\mu(a+\Lambda b,\Lambda\Gamma)$. [A1,F1,F2,F5,given,algebra]

2.1 In the Fourier integral for $K_\mu f_g$, change variables
$x=a+\Lambda y$; [F5] gives $|\det\Lambda|=1$ and [F7] justifies the
change of variables. Lorentz invariance of the phase then gives
$$K_\mu f_g(p)=e^{ip\circ a}K_\mu f(\Lambda^{-1}p).$$
Both sides belong to $H_\mu$ by [F4], so this equality is also equality of
Hilbert-space vectors. This is the action formula used in step 1.2.
[A1,F1,F4,F5,F7,step 1.2,given,construct]

3.1 Let $h\in C_c^\infty$ in the shell chart, with support away from the
massless apex. If $g\to g_0$ in the Poincare group, $U_\mu(g)h$ converges
pointwise to $U_\mu(g_0)h$. In a compact neighborhood of $g_0$, the supports
lie in one compact chart subset $C$ away from the apex; $\nu_\mu(C)<\infty$
by [F2]. The squared pointwise difference is bounded by
$4\|h\|_\infty^2\mathbf1_C$, so [F8] gives norm continuity for this dense
family. Density follows from [F3]. For arbitrary $v\in H_\mu$, choose such
$h$ with $\|v-h\|<\epsilon$; unitarity gives
$$\|U_\mu(g)v-U_\mu(g_0)v\|
\le2\epsilon+\|U_\mu(g)h-U_\mu(g_0)h\|.$$
First take $g\to g_0$ and then $\epsilon\downarrow0$. This proves strong
continuity on all of $H_\mu$. [A1,F2,F3,F8,step 1.2,given,algebra] ∎
