---
id: rem-m2-physical-general-flux-descent-obligation
kind: remark
title: M2 Physical General Flux Descent Obligation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 11
axiom_strength: Full AC inherited from the stated geometric and flux interfaces.
deps:
  - def-m2-combined-fermion-cfield-descent-data
  - def-f4-crepant-resolution-and-matter-surface
  - post-f4-mtheory-g4-shifted-quantization
  - post-f4-g4-supersymmetry-transversality-conditions
  - def-axiom-of-choice
dependency_roles:
  def-m2-combined-fermion-cfield-descent-data: mathematical-premise
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  post-f4-mtheory-g4-shifted-quantization: formulation-prerequisite
  post-f4-g4-supersymmetry-transversality-conditions: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
physical_scope: >-
  Held construction target on the explicitly specified resolved compact
  sectioned elliptic Calabi–Yau fourfolds, for every selected oriented rational
  fibral charge and gauge-preserving shifted flux, without assuming an algebraic
  flux lift or a smooth matter curve. Singular curve/fibre limits and closing
  spectral gaps remain construction obligations, not existence assertions.
proof_status: held local physical construction obligation; not a theorem or open-problem status claim
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§5.2, PDF pp. 36–37: closed smooth Euclidean source model only; it does not construct the original F4 regulated physical sector or its singular degeneration."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: https://arxiv.org/pdf/1806.01854v1
      locator: "§§9.1–9.2, printed pp. 84–87, flux versus flat background and constraints; §9.5.1, pp. 93–95, the algebraic-background curve reduction. These do not supply the general physical construction requested here."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

**HELD OBLIGATION, not an existence theorem or physical postulate.** The F4 target here consists of the following specified data. Work under full AC. Fix a smooth compact connected Kähler complex fourfold $\widehat Y_4$ with holomorphically trivial canonical line, a flat sectioned elliptic projection $\widehat\pi:\widehat Y_4\to B_3$ to a smooth integral complex algebraic threefold, and a chosen crepant resolution of its Weierstrass model. Use the crepant-resolution and matter-surface definition: the resolution is proper and birational and identifies the canonical lines; its chamber specifies chosen irreducible fibral curve components. Fix a matter curve $C\subset D\subset B_3$ (a reduced integral closed curve in the specified divisor, with geometric generic fibre configuration different from that over $D$), and a selected reduced integral matter surface $\mathcal S_R\subset\widehat Y_4$ whose restriction $q_R:\mathcal S_R\to C$ is proper and flat with nonempty pure one-dimensional geometric fibres and selected geometric generic fibre $\mathbb P^1$. The wrapped charge is this chosen fibre component with its specified orientation, rather than the full generic elliptic fibre; its charge labels relative to any specified gauge divisors are their integral intersection numbers with this oriented component.

The flux data range over all real degree-four classes $g$ satisfying the shifted-quantization and gauge-preserving supersymmetry interfaces, with their stated leading-order physical qualifications. Explicitly, supply the spin eleven-manifold and internal tangent splitting required by the shifted-quantization interface; use $c=\hbar=1$, $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ and $g=[G_{4,\mathrm{CJS}}]/((2\pi)^3\ell_p^3)$ conditional on its physical normalization identification. Here $\ell_p$ has units of length and $T_{M2}$ of inverse length cubed. Require $g+\rho(c_2(T^{1,0}\widehat Y_4))/2\in\operatorname{im}\rho$, where $\rho:H^4(\widehat Y_4;\mathbb Z)\to H^4_{\mathrm{dR}}(\widehat Y_4;\mathbb R)$ is coefficient change followed by inverse de Rham comparison and $c_2$ is the integral second Chern class. For the specified Kähler class $[J]$, zero-section class $[Z_0]$, and Cartan divisor classes $[E_i]$, require Hodge type $(2,2)$, $[J]\smile g=0$, and
$$\int_{\widehat Y_4}g\smile\widehat\pi^*d_a\smile\widehat\pi^*d_b=\int_{\widehat Y_4}g\smile[Z_0]\smile\widehat\pi^*d_a=\int_{\widehat Y_4}g\smile[E_i]\smile\widehat\pi^*d_a=0.$$
Here $d_a,d_b$ range over the real span of first Chern classes of algebraic line bundles on $B_3$, divisor classes are real Poincaré duals, and integration means evaluation on the complex-oriented fundamental class. These conditions specify the adopted target regime; they prove no vacuum exists. No algebraic cycle representing $g$ is required. All integral lifts, torsion and flat refinements compatible with the fixed shift remain in scope, rather than being identified merely because they have the same real curvature.

For every such geometric and flux datum, construct the physical regulated fermion/C-field descent and identify its reduction to the actual curve twist, meaning the bundle or singular-curve replacement in which the reduced physical wavefunctions take values, with its connection and operator domain. Construct and match the shifted cocycle $(u,a,t,\omega)$ and the supplied operator and line data of the combined Euclidean descent package; its convention is $\delta t=\operatorname{Int}(\omega)-a_{\mathbb R}-u_{\mathbb R}/2$. Neither a free-period class nor an abstract package supplies this physical identification. In a smooth reduction, the Berry factor means the actual light-state bundle $\operatorname{im}P$ with connection $P\nabla^{\mathscr H}$, for a smooth finite-rank orthogonal spectral projection $P$ on the regulated Hilbert bundle $\mathscr H$ with its supplied unitary connection; construct these objects and retain their gradings, rather than assume a rank-one vacuum.

Compatibility is required at every singular point of $C$ and every point where $q_R$ fails to be a smooth submersion, including reducible or nonreduced special fibres. Specify a finite set $\Delta\subset C$ containing these points and an actual smooth proper submersion over $C\setminus\Delta$. At each point of $\Delta$, and at any additional parameter value where the light/high spectral gap closes, construct the branch and vertex states, their transfer maps, the closed limiting operator domains and the regulator comparison; include states becoming light before using an inverse on the high sector. A smooth-family calculation alone supplies no extension there. State the exact subset on which any proposed construction succeeds and identify each excluded case; exclusions remain outstanding portions of this target. This unsupplied interface neither disproves a standard index relation nor claims a literature-wide open problem.

## Statement references

[[def-f4-crepant-resolution-and-matter-surface]]

[[post-f4-mtheory-g4-shifted-quantization]]

[[post-f4-g4-supersymmetry-transversality-conditions]]

[[def-m2-combined-fermion-cfield-descent-data]]

[[def-axiom-of-choice]]

## Status

This item records a scoped authoring obligation. It does not claim that the obligation is a genuinely open problem in the literature, and it is not a logical supplier to a theorem.

## Current boundary

The local transgression calculation in [[lem-m2-smooth-family-wess-zumino-transgression]] applies to an actual smooth family and an actual normalized three-form potential. It does not identify that potential, its flat data, or its quantum phase with a physical M2 C-field. The installed shifted-flux premise records free periods but does not provide the full differential/flat refinement. The closed smooth Euclidean source pairing, even if completed, would not construct physical quantum states over wrapped spatial fibres or identify their Berry line. No rank-one even vacuum, prescribed curve degree, or degeneration law is adopted as an assumption to force the desired answer.

The classical M2 action and the adopted flux conditions specify coupling and target conventions, not a construction of quantum states. The missing input is an actual regulated physical combined descent package and a proved comparison to the curve twist over the full target specified above, including classes without an algebraic lift and singular curves. This remains a held owner-level construction obligation after the local authoring in this batch.

## Sources

- [Freed–Moore, *Setting the Quantum Integrand of M-Theory*, §5.2](https://arxiv.org/pdf/hep-th/0409135v3): the closed smooth Euclidean source model and its stated scope.
- The current local data boundary is explicit in the Definition and Remarks of [[def-m2-combined-fermion-cfield-descent-data]] and in Current boundary above. The previously cited historical research note is unavailable in this workspace; no claim of having inspected it is made.
