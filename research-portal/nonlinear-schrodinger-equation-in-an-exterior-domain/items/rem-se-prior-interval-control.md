---
id: rem-se-prior-interval-control
kind: remark
domain: mathematics
title: Prior interval and rectangle NLS control results
status: draft
deps:
  - def-se-periodic-space
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-control-language
dependency_roles:
  def-se-periodic-space: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-control-language: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 2, §1.2; references [16], [17], [20], [22], [32], [33]
      statement: The introduction attributes interval control results to Illner, Lange
        and Teismann [16,17], Lange and Teismann [20], Rosier and Zhang [32],
        and Laurent [22], and rectangle results using Bourgain spaces to Rosier
        and Zhang [33]; it uses the notation H^s for every s >= 0 for the
        extension attributed to [32].
      hypotheses: Attribution-only use of the introduction's historical paragraph. The
        underlying equations, state and control spaces, boundary conventions,
        time requirements and hypotheses remain those of the individual cited
        works; no underlying control theorem is imported.
      reading_limits: Read the frozen v2 extracted text at PDF page 2, section 1.2,
        paragraph beginning 'For the nonlinear equation'. The cited works [16],
        [17], [20], [22], [32] and [33] were not independently read for this
        remark, and their theorem statements and proofs were not checked.
dependency_level: 1
---

## Statement

Assume the Axiom of Choice and Countable Choice. The article's introduction reports the following prior work on nonlinear Schrödinger control. Illner, Lange and Teismann [16,17] obtained local exact internal controllability on an interval with periodic boundary conditions in $H^1_p(-\pi,\pi)$. Lange and Teismann [20] obtained local controllability in $H^1_0$ near a ground state for Dirichlet boundary conditions. Rosier and Zhang [32] are reported there to have extended these results to what the introduction calls “$H^s$ for every $s\geq 0$” and to have treated boundary controls at one endpoint. Laurent [22] obtained semiglobal controllability and stabilization in the one-dimensional setting. For rectangles, Rosier and Zhang [33] combined sharp linear estimates with Bourgain spaces.

The quoted expression “$H^s$ for every $s\geq 0$” reproduces the introduction's notation only. This remark specifies no fractional Sobolev space, domain or boundary convention and invokes no theorem on such a space.

Here $H^1_p(-\pi,\pi)$ is the $H^1$ space whose endpoint traces agree, and $H^1_0$ is the closure of smooth compactly supported functions in the $H^1$ norm. Exact controllability means that an admissible control steers each allowed initial state to each allowed final state in the specified time; local exact controllability restricts the endpoints to a neighborhood of a reference trajectory.

The terms internal control, boundary control, ground state, semiglobal controllability, stabilization and Bourgain spaces in the historical paragraph are the terminology reported by the introduction; this remark supplies no separate definitions of them. The exact equations, solution and control classes, constraints, time requirements and hypotheses are those of the individual cited works. The present remark records the article's attributions and does not assert a theorem with those omitted hypotheses.

## Statement references

[[def-se-periodic-space]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-control-language]]

## Source notes

The frozen article is cited for its introductory account and bibliography, not as proof of the underlying prior results. The works it cites have not been independently read for this remark. No equivalence between the different control formulations, nor a specific decay rate, is asserted here.
