---
id: pthm-string-amplitude-sewing-factorization
kind: physics-theorem
title: Local string amplitude sewing and channel factorization
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 10
domain: physics
physical_scope: Conditional factorization at one specified node for a complete convergent state-pairing input; no global stable
  compactification, unitarity, or all-channel theorem is asserted.
deps:
- def-string-plumbing-propagator-and-long-tube
- def-string-vertex-operator-and-covariant-insertion
- def-string-punctured-moduli-amplitude-form
- def-string-local-state-sum-sewing-input
- def-cft-plumbing-and-sewing-parameter
dependency_roles:
  def-string-plumbing-propagator-and-long-tube: formulation-prerequisite
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-punctured-moduli-amplitude-form: formulation-prerequisite
  def-string-local-state-sum-sewing-input: formulation-prerequisite
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: 'Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview'
    url: https://arxiv.org/pdf/1304.2832v4
    locator: §§3.2.1–3.2.3, PDF pp. 31–36, bosonic and superstring separating-degeneration factors and physical poles.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the local state-sum sewing input of Declared local state-sum sewing input on one closed node and the declared amplitude form, pairing, intercepts, and analytic continuation. Let $\Delta$ be the local holomorphic continuation coordinate for a closed level-matched state's weight, with $\Delta=L_0^m-a=\bar L_0^m-\bar a$, and let $C_\alpha(\Delta)=A_L(e_\alpha;\Delta)A_R(e^\alpha;\Delta)$ be its holomorphic paired component coefficient. For $\operatorname{Re}\Delta>0$, the collar integral over $0<|q|<\epsilon$ contributes $C_\alpha(\Delta)\pi\epsilon^{2\Delta}/\Delta$, whose meromorphic continuation has at most a simple pole at $\Delta=0$ with residue $\pi C_\alpha(0)$. Only level-matched terms contribute.

For a separate open real collar, assume its own declared complete open state-pairing sewing equality, with plumbing factor $dq/q\,q^\Delta$, where $\Delta$ is the local holomorphic continuation coordinate for the open $L_0^m-a$ weight exponent. Require its complete dual basis $e_\alpha,e^\alpha$ to be finite or countably infinite; for a countable basis require absolute and locally uniform convergence on compact subintervals of the stated collar. Define $C^{\mathrm{op}}_\alpha(\Delta):=A_L^{\mathrm{op}}(e_\alpha;\Delta)A_R^{\mathrm{op}}(e^\alpha;\Delta)$ and require it to be holomorphic near $\Delta=0$. On each compact continuation parameter set $K$, require the set of open states whose exponent can vanish on $K$ to be finite. After removing those terms, require the remaining open collar density $R^{\mathrm{op}}(q,\Delta)$ to satisfy $|R^{\mathrm{op}}(q,\Delta)|\le G_K(q)$ for $\Delta\in K$, with measurable $G_K$ and $\int_0^\epsilon G_K(q)\,dq/q<\infty$, and require its integrated remainder to extend holomorphically near $K$. These are additional open-channel inputs, not supplied by the closed collar hypothesis. The open collar term then integrates to $C^{\mathrm{op}}_\alpha(\Delta)\epsilon^\Delta/\Delta$ for $\operatorname{Re}\Delta>0$ and has at most a simple pole at $\Delta=0$ with residue $C^{\mathrm{op}}_\alpha(0)$. This is a one-node local result, not S-matrix unitarity.

## Statement references

[[def-string-local-state-sum-sewing-input]]

## Facts & Assumptions

**Given:** One closed plumbing collar, $d^2q=dxdy$, $0<\epsilon<1$, a complete nondegenerate state pairing, the stated closed sewing equality, and a local continuation coordinate $\Delta$ for which the state weights and paired coefficients vary holomorphically. Near a pole only finitely many state terms can be singular; the local state-sum input requires the remaining collar density to have a uniform integrable majorant and holomorphic integrated remainder.

[F1] [[def-string-local-state-sum-sewing-input]]: the collar correlator is the declared convergent sum of component coefficients paired through a complete dual basis.

[F2] [[def-string-plumbing-propagator-and-long-tube]]: a closed term has factor $d^2q/|q|^2 q^{\Delta}\bar q^{\bar\Delta}$ and the angular integral imposes level matching; the open factor is $dq/q\,q^\Delta$.

[F3] [[def-string-punctured-moduli-amplitude-form]] is only a local chartwise correlator form; its existence and gauge fixing are assumed for this chart.

[F4] [[def-cft-plumbing-and-sewing-parameter]] supplies the local equation $zw=q$; it does not supply the state-sum axiom [F1].

[A1] The weight difference is an integer on the single-valued closed channel, the selected physical sector is level matched, and all analytic continuation data are fixed as in Given.

[A2] For the open analogue only, the real collar, its own complete finite or countable dual basis, the open state-pairing equality and $dq/q\,q^\Delta$ factor, local uniform convergence when the basis is countable, holomorphic coefficients $C^{\mathrm{op}}_\alpha(\Delta)$, finite singular set on compact parameter sets, uniform integrable remainder for $dq/q$, and holomorphic integrated remainder stated above are supplied separately.

## Proof

1.1 For one closed state term, write $q=re^{i\theta}$. Then $d^2q/|q|^2=dr\,d\theta/r$ and the conformal factor is $r^{\Delta+\bar\Delta}e^{i\theta(\Delta-\bar\Delta)}$. By [A1], the angular integral is zero unless $\Delta-\bar\Delta=0$, in which case it is $2\pi$. For a retained state, radial integration gives $2\pi\int_0^\epsilon r^{2\Delta-1}dr=\pi\epsilon^{2\Delta}/\Delta$ for $\operatorname{Re}\Delta>0$. Multiplying by its coefficient gives $C_\alpha(\Delta)\pi\epsilon^{2\Delta}/\Delta$. [given, F1, F2, A1, algebra]

2.1 Since $C_\alpha(\Delta)$ is holomorphic, $C_\alpha(\Delta)\epsilon^{2\Delta}$ is holomorphic at $0$ with value $C_\alpha(0)$; division by $\Delta$ therefore gives at most a simple pole with residue $\pi C_\alpha(0)$. By [F1] and Given, after the finite singular set is removed the remainder has an integrable majorant uniform on compact parameter subsets and its integrated remainder is holomorphic. Thus adding the finitely many explicit pole terms gives the claimed local meromorphic form without exchanging an uncontrolled infinite sum and boundary integral. [given, F1, F3, F4, step 1.1, algebra]

3.1 Under the separate open-channel input [A2], direct integration gives $\int_0^\epsilon q^{\Delta-1}dq=\epsilon^\Delta/\Delta$ for $\operatorname{Re}\Delta>0$. Multiplication by the holomorphic open coefficient $C^{\mathrm{op}}_\alpha(\Delta)$ gives at most a simple pole with residue $C^{\mathrm{op}}_\alpha(0)$. The stipulated open remainder is holomorphic after integration, so it adds no pole. No conclusion about unitarity or other degeneration strata is used. [given, F2, A2, algebra] ∎

## Remarks

The A-page local sewing input is an adopted per-model hypothesis because the required general analytic sewing result is not a supplied carrier here. The theorem's local state-pairing deduction is complete conditional on it.
