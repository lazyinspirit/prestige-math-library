---
id: op-se-global
kind: open-problem
domain: mathematics
title: Global defocusing controllability in large time
status: draft
deps:
  - def-se-internal-systems
  - def-se-geometry
  - def-se-foundation-control-language
  - math:def-axiom-of-choice
  - def-se-nontrapping
  - def-se-cubic-boundary-system
dependency_roles:
  def-se-internal-systems: mathematical-premise
  def-se-geometry: mathematical-premise
  def-se-foundation-control-language: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-cubic-boundary-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Section 5.2(F), PDF page 22; Section 1.3, Theorem 1.3 and equation
        (1.8), PDF page 4
      statement: The authors propose obtaining global controllability in large time in
        two dimensions in the defocusing case by combining stabilization with
        their local controllability results. Theorem 1.3 states that for every T
        > 0, n in {2,3} and s in {1,2}, there is a delta > 0 such that every
        pair of endpoint states v0,vT in H_D^s(Omega), each of norm at most
        delta, can be joined by a solution v in C([0,T];H_D^s(Omega)) of (1.8),
        with control h in C([0,T];H_D^s(Omega)).
      hypotheses: The local result assumes a smooth compact non-trapping obstacle with
        connected exterior, n in {2,3}, s in {1,2}, T > 0, sufficiently small
        endpoints in the Dirichlet scale, and the cubic internally controlled
        equation (1.8) with homogeneous obstacle Dirichlet condition and the
        smooth exterior cutoff specified immediately before that equation.
        Section 5.2(F) concerns dimension two and the defocusing case; matching
        the geometric and functional assumptions of stabilization with those of
        the local results is left to future work.
      reading_limits: The frozen v2 text in Section 5.2(F) and Section 1.3, including
        Theorem 1.3 and (1.8), was read for the formulation and the attributed
        local theorem statement. The proof of Theorem 1.3 and the cited
        stabilization theorem are not independently verified by this citation.
        It establishes neither the proposed global conclusion nor the current
        worldwide status of the question.
dependency_level: 8
formulation_deps:
  - def-se-internal-systems
  - def-se-geometry
  - def-se-foundation-control-language
  - math:def-axiom-of-choice
  - def-se-nontrapping
  - def-se-cubic-boundary-system
argument_deps: []
---

## Open problem

Assume the Axiom of Choice, as in the controlled-system definition. In dimension two, for the defocusing cubic nonlinear Schrödinger equation in the exterior of a smooth compact obstacle, can one establish global controllability in sufficiently large time by combining stabilization with local controllability? The exterior is connected, and non-trapping has the complete-ray meaning of [[def-se-nontrapping]]. In the internal formulation the equation is $i\partial_t v+\Delta v+\lambda|v|^2v=\varphi h$, with zero Dirichlet condition on the obstacle, $\lambda<0$ in this sign convention, and control applied through the cutoff $\varphi$ outside a ball containing the obstacle.

Here exact controllability on a specified set of admissible states means that each ordered pair of states in that set can be joined by an admissible controlled solution in the specified time. A complete result must specify the state and control spaces, solution and trace notions, the admissible data, the geometry and any additional hypotheses, and whether the required time is uniform over all data or depends on a bound for them. A possible extension of this question is global controllability for the outer-boundary Dirichlet formulation on $\Omega_0=B_{R_0}(0)\setminus\Theta$, with $\Theta\subset B_{R_0}(0)$, $u=h$ on $\Gamma_1=\partial B_{R_0}(0)$ and $u=0$ on $\Gamma_2=\partial\Theta$. This boundary-control extension is proposed here. The passage from an exterior internal control to this boundary control requires its own compatible extension and trace properties.

## Open problem references

[[def-se-internal-systems]]

[[def-se-geometry]]

[[def-se-foundation-control-language]]

[[math:def-axiom-of-choice]]

[[def-se-cubic-boundary-system]]

## Status

As of the frozen v2 article, Section 5.2(F) presents this as a proposed direction, not a proved global theorem. It proposes combining the exponential stabilization result cited there as [14] with the paper's local controllability results, in the spirit of [15,23], and explicitly says that the functional settings and geometric assumptions must be matched. Exponential stabilization means decay to zero at an exponential rate in a specified norm for a specified damped evolution; neither the damping equation nor the admissibility of its feedback as a control for the present system is established by that terminology.

The article's local internal result concerns sufficiently small endpoint data in $H_D^s(\Omega)$ for $s\in\{1,2\}$ and any prescribed positive time, under its stated assumptions. This is a local result and does not settle the global question. A limited title-and-topic search identified the cited exterior-domain stabilization paper, but its full theorem and hypotheses were not independently checked here; no exhaustive current literature or worldwide novelty review is claimed. In particular, this item records the authors' question and does not assert that it remains unsolved in all subsequent literature.

## Source notes

The article is the source of the question and of the descriptions of its own local result and proposed route. Its references [14], [15] and [23] are contextual comparisons, not imported premises or independently verified statements in this item. Matching damping, control support, solution spaces, time reversal or an appropriate return construction, and uniformity of decay on the relevant data sets remain parts of the proposed program.

The outer-boundary Dirichlet formulation is supplied by [[def-se-cubic-boundary-system]]; its global-controllability extension above is a proposal in this item and is not expressly stated in Section 5.2(F).
