---
id: pthm-aqft-matching-and-running-scale-independence
kind: physics-theorem
title: Scale independence of compatible EFT matching and running
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-aqft-scheme-and-wilson-coefficients
  - def-aqft-threshold-matching-map
  - thm-aqft-truncated-coupled-rge-wellposedness
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-scheme-and-wilson-coefficients: mathematical-premise
  def-aqft-threshold-matching-map: formulation-prerequisite
  thm-aqft-truncated-coupled-rge-wellposedness: mathematical-premise
physical_scope: Conditional scale independence for a declared finite-order EFT pair with supplied locally Lipschitz RG fields, matching maps, and common renormalized amplitudes; no generic continuum or coefficient-calculation claim.
axiom_base: "ZF + AC_omega, inherited through the physical operator-data and declared gauge/connection interface; the transport proof itself uses no choice principle and no full Axiom of Choice is asserted."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Aneesh V. Manohar, Introduction to Effective Field Theories (full Les Houches lecture notes)
      url: https://arxiv.org/pdf/1804.05863
      locator: Chapter 5, §§5.5–5.7 and §5.10, on matching contributions, scale separation, RG evolution, and operator mixing.
    - title: C. P. Burgess, Introduction to Effective Field Theory (full review)
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §§2.2.1–2.2.2 on cancellation of intermediate-scale dependence and §4.1.4 on matching at charged-particle thresholds.
verification:
  precheck: pass
---

## Statement

Let $K=[t_i,t_f]$ be a compact interval contained in the common open logarithmic-scale domains of a finite-order high-energy EFT and its lower-energy EFT. Use the realified coefficient coordinates, RG vector fields $\beta_+$ and $\beta_-$, flow maps $\Phi_\pm$, and realified matching map $\widehat M_t$ of the finite-order threshold-matching definition. Assume each beta field is continuous and locally Lipschitz in the coefficient coordinates, locally uniformly in scale, and assume every flow used below exists on $K$. Assume the high-energy trajectory remains in the matching-family domain throughout $K$ and its matched image lies in the low-energy beta-field domain. Assume the matching family is jointly continuously differentiable in scale and coefficient coordinates and RG-compatible throughout these domains. For an initial high-energy realified coefficient vector $x_i$ with $(t_i,x_i)\in\Omega_+$ and any matching scale $s\in K$, define the low-energy vector at the fixed final scale by
$$x_-^{(s)}(t_f):=\Phi_-\!\left(t_f,s\right)\!\left(\widehat M_s\!\left(\Phi_+(s,t_i)x_i\right)\right).$$
Then $x_-^{(s)}(t_f)$ is independent of $s$. Consequently, each selected renormalized low-energy amplitude or Green-function value, evaluated at the same final scale, external states, kinematics, infrared regulator, and operator truncation, is independent of the intermediate matching scale through the retained orders. The matching definition makes that low-energy amplitude agree with its selected high-energy counterpart through those same orders. The same conclusion holds for any finite ordered sequence of thresholds when each matching map satisfies the stated compatibility condition and the required flows exist. Contributions beyond the retained loop order, operator dimension, and mass expansion remain separate theoretical uncertainties; this result assigns them no numerical bounds. This is a conditional deduction from the supplied RG and matching data; it neither calculates beta functions or matching coefficients nor establishes a continuum QFT.

## Statement references

[[def-aqft-scheme-and-wilson-coefficients]]

[[def-aqft-threshold-matching-map]]

[[thm-aqft-truncated-coupled-rge-wellposedness]]

[Manohar, full EFT lecture notes](https://arxiv.org/pdf/1804.05863)

[Burgess, full EFT review](https://arxiv.org/pdf/hep-th/0701053)

## Facts & Assumptions

**Given:** A high-energy realified trajectory $x_+(t)$ on $K$ with $x_+(t_i)=x_i$, the supplied low-energy trajectory starting at each matched value, and the differentiability, flow-existence, and RG-compatibility hypotheses in the Statement.

[F1] [[def-aqft-scheme-and-wilson-coefficients]]: each EFT coefficient vector lies in a finite complex coordinate space whose realification is isometric to a finite-dimensional real space; its logarithmic-scale trajectory solves the supplied realified beta-vector equation.

[F2] [[def-aqft-threshold-matching-map]]: the realified matching family is jointly continuously differentiable in scale and coefficient coordinates on an open domain where both beta fields are defined; RG compatibility means $\partial_t\widehat M_t(x)+D_x\widehat M_t(x)\beta_+(t,x)=\beta_-(t,\widehat M_t(x))$. Its selected high- and low-energy amplitudes are matched with the same infrared regulator through the declared truncation.

[F3] [[thm-aqft-truncated-coupled-rge-wellposedness]]: for a supplied continuous RG vector field locally Lipschitz in the coefficient coordinates locally uniformly in scale, the realified initial-value problem has a unique local solution, and any two solutions through the same initial data agree on every common interval containing that initial scale. The proof below uses the uniqueness clause on the common interval $K$.

[A1] Every full- and low-energy coefficient trajectory appearing in the Statement exists on the common compact interval $K$; the high-energy trajectory stays in the matching-family domain and its matched image stays in the low-energy beta-field domain. The local ODE theorem supplies local existence and uniqueness but does not supply this interval-wide existence.

[A2] The matching map is RG-compatible on the full interval $K$: its scale derivative and its derivative along the high-energy beta flow equal the low-energy beta flow.

[A3] The selected low-energy amplitude or Green-function value at the fixed final scale is the same function of the final low-energy coefficients for every choice of intermediate matching scale. This is the fixed scheme, external-state, kinematic, infrared-regulator, and truncation convention in the Statement.

[A4] For a finite sequence of thresholds, every active-theory flow used in the ordered transport exists on its specified interval, and every matching family is jointly continuously differentiable and RG-compatible on the relevant trajectory domains.

## Proof

**Proof technique:** transport a high-energy solution through the matching map and use uniqueness of the low-energy initial-value problem.

**Given:** [F1]–[F3] and [A1]–[A4].

1.1 Let $x_+(t)=\Phi_+(t,t_i)x_i$ and set $y(t)=\widehat M_t(x_+(t))$. The chain rule and [A2] give $y'(t)=\partial_t\widehat M_t(x_+(t))+D_x\widehat M_t(x_+(t))\,\beta_+(t,x_+(t))=\beta_-(t,y(t))$ for every $t\in K$. Thus $y$ is a low-energy RG trajectory on the whole common interval. [given, F1, F2, A1, A2, algebra]

2.1 Fix any $s\in K$. The low-energy trajectory obtained by matching at $s$ starts at $\widehat M_s(x_+(s))=y(s)$ and solves the low-energy RG equation. Since $y$ solves that same initial-value problem, [F3] implies that the two solutions agree on their common interval $K$. Therefore $x_-^{(s)}(t_f)=y(t_f)$, which does not depend on $s$. [F2, F3, A1, step 1.1, algebra]

3.1 At the fixed final scale, the selected amplitude or Green-function value is evaluated from the same low-energy coefficient vector $y(t_f)$ with the same external states, kinematics, regulator, and truncation [A3]. It is therefore identical for every matching scale $s$. Apply the matching equality in [F2] at scale $t_f$ to the high-energy coefficient $x_+(t_f)$ and its matched image $y(t_f)=\widehat M_{t_f}(x_+(t_f))$; the low-energy value equals the selected high-energy value through the retained orders. [F2, A3, step 2.1, algebra]

4.1 For finitely many thresholds, apply steps 1.1–3.1 to the first matching map, then to each subsequent map in the ordered composition. Each compatible map transports its incoming trajectory to a solution of the next theory's RG equation, and uniqueness identifies that solution independently of the selected matching scale. Finite induction gives the same final coefficient vector and selected prediction for every compatible choice of intermediate scales. [F2, F3, A4, step 1.1, step 2.1, step 3.1, induction] ∎

## Remarks

The compatibility identity is a substantive hypothesis about a particular set of beta functions, matrix elements, and matching coefficients. Matching-scale independence does not calculate those data. The conclusion is exact only after projection to the declared truncation; discarded loop and operator orders are not assigned a numerical error bound.
