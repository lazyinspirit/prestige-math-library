---
id: op-se-critical-large-data
kind: open-problem
domain: mathematics
title: Large-data control for energy-critical NLS
status: published
deps:
  - def-se-internal-systems
  - def-se-dirichlet-scale
  - def-se-nontrapping
  - math:def-axiom-of-choice
dependency_roles:
  def-se-internal-systems: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-nontrapping: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF p. 21, §5.2(C); p. 5, Corollary 1.6; p. 4, Theorem 1.3
      statement: Section 5.2(C) reports large-data controllability for energy-critical
        quintic NLS as open even in R³ and suggests combining stabilization with
        local controllability. Corollary 1.6 extends the small-data
        controllability conclusions of Theorem 1.3 to the quintic exterior
        Dirichlet equation near zero.
      hypotheses: Corollary 1.6 assumes a non-trapping obstacle, connected exterior, T
        > 0, n in {2,3}, and s in {1,2}; Theorem 1.3 requires sufficiently small
        initial and terminal data in H_D^s and uses the displayed cutoff
        control. Section 5.2(C) states an open question and a possible approach,
        not a large-data theorem.
      reading_limits: The statements on frozen v2 PDF pages 4–5 and the discussion in
        §5.2(C) on page 21 were read for attribution. Their proofs were not
        independently checked, no exterior-domain theorem is deduced from the
        status report, and no exhaustive subsequent-literature search was
        performed.
    - title: "Control of the Schrödinger equation in R³: The critical case"
      url: https://arxiv.org/html/2404.07749v3
      locator: Theorem 1.1 and §4(B)
      statement: Theorem 1.1 states small-data local null controllability in H¹(R³)
        for the displayed controlled quintic system; §4(B) raises large-data
        global control as an open issue.
      hypotheses: The theorem fixes T > 0, uses the cutoff control in equations
        (1.5)–(1.6), and assumes sufficiently small H¹ initial data.
      reading_limits: The theorem statement and the stated open issue were consulted;
        their proofs were not independently verified, and no exhaustive search
        for subsequent results was performed.
dependency_level: 8
---

## Open problem

Assume the Axiom of Choice and the geometry and cutoff of [[def-se-internal-systems]], in dimension three, with a non-trapping obstacle. For the internally controlled Dirichlet equation $i\partial_t v+\Delta v+\lambda|v|^4v=\varphi h$, can one obtain controllability for large initial data in the energy space $H_D^1(\Omega)=H_0^1(\Omega)$? In particular, determine conditions under which a control $h$ drives a prescribed initial state to zero, or connects prescribed initial and terminal states, in a suitable solution class and time. Here large data means that no smallness restriction on the energy-space norm is imposed. Exact controllability between two states means that the solution takes those states at the initial and terminal times; null controllability is the special case with zero terminal state.

The equation, boundary condition $v|_{\partial\Omega}=0$, control multiplier $\varphi$, and domain are those of [[def-se-internal-systems]]. The energy-space notation is that of [[def-se-dirichlet-scale]]; the Axiom of Choice is retained as required by those formulations. The question asks which control and solution spaces, times, signs of $\lambda$, and additional hypotheses permit a result; it does not assert that every such choice works.

## Status

The frozen article, §5.2(C), reports large-data control in the energy-critical case as open even on $\mathbb R^3$ and proposes combining stabilization with local controllability. Its Corollary 1.6 states a small-data result near zero in the exterior setting. These are attributed statements, not proofs supplied by this item.

In the independently consulted whole-space paper, Theorem 1.1 states null controllability for sufficiently small $H^1(\mathbb R^3)$ initial data with a cutoff control, and §4(B) identifies large-data control as an open issue for that system. This is a partial result and source-specific status, not a proof for exterior domains or a certification that no later solution exists. The source review was limited to the theorem statement and the stated open issue, consulted on 2026-11-13. No proof or exhaustive current-literature review is claimed.

## Source notes

The frozen article is the source of the question and its suggested stabilization approach. The whole-space reference provides context for the reported partial result and open status; its theorem is not used as a premise for an exterior-domain deduction.
