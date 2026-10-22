---
id: prop-gr-fx-diffeomorphism-current-identity
kind: proposition
title: Diffeomorphism Noether current identity and local charge
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-covariant-field-variations
  - def-gr-fx-covariant-presymplectic-current
  - lem-gr-fx-star-shaped-poincare-homotopy
  - thm-cartans-magic-formula
  - def-lie-derivative-of-a-differential-form
  - def-lie-derivative-of-a-tensor-field
  - def-pullback-of-a-differential-form
  - thm-the-exterior-derivative-commutes-with-pullback
dependency_roles:
  def-gr-fx-covariant-field-variations: mathematical-premise
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  lem-gr-fx-star-shaped-poincare-homotopy: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §4, equations (49)–(51)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $M$ be an oriented smooth four-manifold, let $\pi:E\to M$ be the chosen
smooth field bundle, and let $\mathcal L(\phi)$ be a local Lagrangian
four-form for its smooth sections, with a chosen first-variation decomposition
$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi)$. Let
$\xi$ be a smooth spacetime vector field with local flow $\Phi_t$. Suppose
there is a smooth local lift $\widetilde\Phi_t$ to fibre-preserving local
diffeomorphisms of $E$ over $\Phi_t$, with $\widetilde\Phi_0=\mathrm{id}$
and the local flow composition law. On the common domain define its induced
pullback action on sections by
$$ (A_t\phi)(x):=\widetilde\Phi_{-t}\bigl(\phi(\Phi_t(x))\bigr). $$
Write
$$\delta_\xi\phi:=\left.\frac{d}{dt}\right|_{t=0}A_t\phi,$$
the vertical field variation determined by this smooth family; at each $x$
it lies in $\ker(d\pi)_{\phi(x)}$, the tangent space to the fibre $E_x$.
In the tensor-field case where $A_t\phi=\Phi_t^*\phi$, it is the Lie
derivative $\mathcal L_\xi\phi$ defined by the local-flow derivative.
Assume the action preserves the chosen field domain, and assume covariance in the precise
sense $\mathcal L(A_t\phi)=\Phi_t^*\mathcal L(\phi)$ wherever both sides
are defined; thus its derivative satisfies
$\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L$. Define the Noether current
three-form

$$J_\xi:=\theta(\phi;\delta_\xi\phi)-\iota_\xi\mathcal L .$$

Then

$$d_MJ_\xi=-E_\phi[\delta_\xi\phi].$$

Here a solution means a field configuration $\phi$ at which the Euler
functional vanishes, that is, $E_\phi[\eta]=0$ for every smooth variation
$\eta$ in its domain. Thus $J_\xi$ is closed on solutions. For every chart
$\chi:U\to V\subseteq\mathbb R^4$ whose open image $V$ is star-shaped, a
solution has a local two-form $Q_\xi\in\Omega^2(U)$ with
$J_\xi|_U=d_MQ_\xi$.

## Statement references

[Some Properties of Noether Charge, §4](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.3](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §§2.3–2.4](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-field-variations]]

[[def-gr-fx-covariant-presymplectic-current]]

[[lem-gr-fx-star-shaped-poincare-homotopy]]

[[thm-cartans-magic-formula]]

[[def-lie-derivative-of-a-differential-form]]

[[def-lie-derivative-of-a-tensor-field]]

[[def-pullback-of-a-differential-form]]

[[thm-the-exterior-derivative-commutes-with-pullback]]

## Facts & Assumptions

**Given:** The selected first-variation decomposition, the local spacetime
flow $\Phi_t$, its specified smooth lift and induced section action $A_t$, and
the stated covariance of $\mathcal L$.

[A1] $\delta_\xi\phi=(d/dt)|_0A_t\phi$ and
$\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L$ by the specified lifted
action and covariance condition.

[F1] The first-variation decomposition is
$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi)$.
[[def-gr-fx-covariant-presymplectic-current]]

[F2] Cartan's identity is
$\mathcal L_\xi\alpha=d_M(\iota_\xi\alpha)+\iota_\xi(d_M\alpha)$ for every
differential form $\alpha$. [[thm-cartans-magic-formula]]

[F3] A closed smooth $k$-form on an open star-shaped domain in $\mathbb R^4$
has a primitive for each $1\le k\le4$.
[[lem-gr-fx-star-shaped-poincare-homotopy]]

[F4] For a tensor field and the local flow $\Phi_t$ of $\xi$,
$\mathcal L_\xi T=\left.\frac{d}{dt}\right|_0\Phi_t^*T$.
[[def-lie-derivative-of-a-tensor-field]]

[F5] Pullback is defined by evaluation on the differential of the map, and
$d(f^*\beta)=f^*(d\beta)$ for a smooth map $f$ and smooth form $\beta$.
[[def-pullback-of-a-differential-form]]
[[thm-the-exterior-derivative-commutes-with-pullback]]

## Proof

**Given:** As in [A1] and [F1]–[F5].

1.1 By the tensor-flow definition [F4], $\mathcal L_\xi\mathcal L$ is the derivative of the pullback of the spacetime four-form along $\Phi_t$. Since $\mathcal L$ has top degree on a four-manifold, $d_M\mathcal L=0$. Cartan's identity [F2] gives $\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L =d_M(\iota_\xi\mathcal L)$. [A1, F2, F4, algebra]

2.1 Apply [F1] to the variation $\delta_\xi\phi$ supplied by [A1] and equate it with step 1.1: $E_\phi[\delta_\xi\phi]+d_M\theta(\phi;\delta_\xi\phi) =d_M(\iota_\xi\mathcal L)$. Rearranging gives $d_MJ_\xi=-E_\phi[\delta_\xi\phi]$. [A1, F1, step 1.1, algebra]

3.1 If $E_\phi=0$, step 2.1 gives $d_MJ_\xi=0$. For a chart $\chi:U\to V$ as in the Statement, the form $(\chi^{-1})^*(J_\xi|_U)$ is closed on $V$ by [F5]. Apply [F3] with $k=3$ to obtain $\beta\in\Omega^2(V)$ with $d\beta=(\chi^{-1})^*(J_\xi|_U)$. Set $Q_\xi:=\chi^*\beta$; [F5] gives $d_MQ_\xi=J_\xi|_U$. [F3, F5, step 2.1] ∎

## Remarks

The primitive is local. This proposition gives no global Noether charge
without a separate cohomological argument. It asserts a classical identity
only; it constructs no measure, Hilbert space, or anomaly-free quantization.

The current sign in the cited sources is not uniform. Iyer--Wald's equation
(49) and Harlow--Wu's equation (2.44) use the current defined here.
Compère--Fiorucci's equation (1.59) uses
$J^{\mathrm{CF}}_\xi:=\iota_\xi\mathcal L-\theta(\phi;\mathcal L_\xi\phi)$,
which is $-J_\xi$ in the tensor-field case; its on-shell current identity and
local primitive therefore require the same sign conversion. The proof above
uses only the explicit local hypotheses stated here.
