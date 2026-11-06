---
id: def-cmp-consistent-truncation
kind: definition
title: Solution-preserving consistent truncation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 7
physical_scope: "Classical field equations from a specified higher-dimensional action and ansatz, including equations in every omitted field direction. Gauge quotients and nonlinear uplift maps must be stated separately."
deps:
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - thm-cmp-restricted-variation-and-full-eom-criterion
  - def-cmp-field-space-variation-splitting
dependency_roles:
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  thm-cmp-restricted-variation-and-full-eom-criterion: mathematical-premise
  def-cmp-field-space-variation-splitting: mathematical-premise
aliases: []
proof_strategy: direct
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
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Josep M. Pons and Pere Talavera, Consistent and Inconsistent Truncations: Some Results and the Issue of the Correct Uplifting of Solutions, arXiv:hep-th/0309079v2"
      url: "https://arxiv.org/pdf/hep-th/0309079v2"
      locator: "Introduction, PDF pp. 3–4; §§2.1–2.4, PDF pp. 6–13, especially reduced-density definition in §2.2 and equation (2.24); first-type hypotheses and solution uplift"
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: "https://arxiv.org/pdf/2106.08343v2"
      locator: "§3.1, PDF pp. 14–17; solution-uplift interpretation in the L-infinity formulation"
---

## Definition

Let $M_D$ and $M_d$ be specified spacetime manifolds, and let $\mathcal C_D$ and $\mathcal C_d$ be specified $C^1$ Banach manifolds of admissible $C^k$ full and retained field configurations on them, with $k$ large enough for the chosen action and equations. Fields are sections of declared bundles. Boundary data and either a gauge fixing or a smooth gauge quotient are part of each configuration space. Let $S_D:\mathcal C_D\to\mathbb R$ be the specified $C^1$ full action and $I:\mathcal C_d\to\mathcal C_D$ the specified $C^1$ uplift ansatz. The reduced action is the restricted variational principle $S_d:=S_D\circ I$, with internal integration already performed when appropriate; it is not an independently chosen action. Fix the action normalization and boundary terms before this equality. Removing a field-independent nonzero overall factor or a term with identically vanishing admissible first variation gives the same stationary configurations, but that change must be declared. Define the variational equation maps by
$$\mathcal E_D(\Psi):=D S_D|_\Psi\in T_\Psi^*\mathcal C_D,\qquad \mathcal E_d(\phi):=D S_d|_\phi\in T_\phi^*\mathcal C_d.$$
Their variational solution sets are $\mathrm{Sol}_D:=\{\Psi\in\mathcal C_D:\mathcal E_D(\Psi)=0\}$ and $\mathrm{Sol}_d:=\{\phi\in\mathcal C_d:\mathcal E_d(\phi)=0\}$. For a local action with vanishing boundary variation and a nondegenerate test-field pairing, these conditions are equivalently the corresponding Euler–Lagrange equations in the weak sense; no particular differential expression is assumed here.

The uplift ansatz $I$ is a **consistent truncation** for the specified actions and boundary/gauge data precisely when
$$I(\mathrm{Sol}_d)\subseteq\mathrm{Sol}_D.$$
Thus every retained solution must satisfy every full variational equation, including equations in field directions omitted by the ansatz. The map $I$ need not be linear and may encode omitted fields as functions of retained fields. If gauge-equivalence classes are used, $I$ must be well-defined on those classes and the equation maps must descend to the chosen quotient.

For tensor fields on an internal manifold $Y$, a symmetry-restricted or first-type reduction means choosing a smooth group action on $Y$, with pointwise independent fundamental vector fields $K_a$ satisfying the Killing equations $\mathcal L_{K_a}\hat g_Y=0$, and restricting tensor fields to the invariant sector $\mathcal L_{K_a}\Psi=0$. If the orbit space is used as a smooth quotient, the action is also required to be free and proper. The precise bosonic first-type result cited from Pons–Talavera §§2.1–2.4 uses local product coordinates $(x^\mu,y^\alpha)$, linearly independent internal Killing fields $K_a=K_a^\alpha(y)\partial_\alpha$ with constant Lie brackets, and an $x$-independent invariant frame $Y_a$ dual to one-forms $\omega^a$ with $d\omega^a=\tfrac12C^a{}_{bc}\omega^b\wedge\omega^c$. In that frame every retained bosonic tensor component $\Phi$ depends only on $x$, all such components are retained, and the local density has the form $\mathcal L=|\omega|\widetilde{\mathcal L}$, where $|\omega|=|\det(\omega^a{}_{\alpha})|$ is nonzero and fixed under field variations. The density $\widetilde{\mathcal L}$ depends on the components and their external and frame derivatives, with no explicit internal-coordinate dependence after imposing $Y_a\Phi=0$; the displayed source derivation treats derivatives through order two. Define $\mathcal L_R:=\widetilde{\mathcal L}|_{Y_a\Phi=Y_aY_b\Phi=0}$, rather than choosing a new reduced density. Boundary conditions remove all integration-by-parts terms. If the internal integral is used for an action, its finite nonzero field-independent factor $\int |\omega|\,d^ny$ is retained in $S_d$ (or explicitly absorbed into the normalization). Under these hypotheses and unimodularity $C^c{}_{ac}=0$ for every $a$, the source's equation (2.24) identifies the restricted full Euler–Lagrange derivatives with $|\omega|$ times those of $\mathcal L_R$, and §2.4 gives solution uplift. This is the cited local first-type case, not a claim that arbitrary symmetry restrictions or independent Killing fields alone guarantee consistency; fermionic reductions require their separately specified invariant vielbein and spinor conditions. A constraint-driven or second-type restriction is instead specified by a constraint map $C:\mathcal C_D\to Z$ into a declared space $Z$ and the constrained configurations $\{\Psi:C(\Psi)=0\}$, without adding Lagrange-multiplier terms to the original action. Such a restriction is consistent only if it satisfies the same solution-inclusion criterion above.

At a background $\bar\Psi$ where $S_D$ is $C^2$, a quadratic-mode comparison is the decomposition of the Hessian $D^2S_D|_{\bar\Psi}$, or its associated linearized operator, into declared retained and omitted directions. It tests the linearized spectrum only. Solving the omitted equations for a branch and substituting it into the action is a separate operation; a generic harmonic zero-mode ansatz or quadratic diagonalization alone does not establish consistent truncation. This item asserts no exact supergravity reduction.

## Definition references

[[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]

[[thm-cmp-restricted-variation-and-full-eom-criterion]]

## Facts & Assumptions

**Given:** A higher-dimensional action and field space, its full equations, an uplift ansatz $I$ with boundary conditions, and its restricted lower-dimensional action $S_d=S_D\circ I$ and equations.

[F1] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: the metric and mode choice are explicit ansatz data; a finite harmonic-mode ansatz is only a candidate restriction.

[F2] [[thm-cmp-restricted-variation-and-full-eom-criterion]]: $D S_d|_\phi=(D I_\phi)^*(D S_D|_{I(\phi)})$ for a restricted action, and vanishing on retained and omitted summands is equivalent to vanishing on the full tangent space.

[A1] The variational equation maps include every field component and every admissible tangent variation. If a local Euler–Lagrange expression is used, its pairing with all compactly supported test variations is nondegenerate and all boundary terms vanish under the declared boundary conditions.

## Proof

1.1  By definition, a consistent truncation has the solution-uplift property for every lower-dimensional variational solution; this condition tests the full covector $\mathcal E_D(I(\phi))$ on every admissible full variation, not only those tangent to the image of $I$. [given, A1, algebra]

1.2  The chain-rule theorem [F2] shows that reduced stationarity tests precisely the retained restriction of the full first variation. The full first variation vanishes exactly when its omitted restriction vanishes too, so the variational criterion tests all equations when every omitted direction is included. [given, F2, A1, algebra]

2.1  A restriction of internal dependence and a separate constraint define different admissible configuration spaces; neither changes the criterion that every reduced solution must solve every full equation. A quadratic Hessian comparison only checks the linearized operator, and solving for omitted fields defines a different, generally nonlinear ansatz; neither operation by itself proves the solution-inclusion property. [given, F1, F2, step 1.1, algebra] ∎
