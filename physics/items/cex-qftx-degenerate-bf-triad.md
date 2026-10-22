---
id: cex-qftx-degenerate-bf-triad
kind: counterexample
title: "A degenerate BF triad defines no Lorentz metric"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; an explicit classical configuration, with no empirical or quantum claim."
dependency_level: 3
deps:
  - def-countable-choice
  - def-qftx-cs-bf-actions
  - prop-qftx-three-dimensional-gravity-bf
justified_by: []
forward_refs: []
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-cs-bf-actions: mathematical-premise
  prop-qftx-three-dimensional-gravity-bf: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§2, pp. 5–6: BF solutions with a non-injective triad and degenerate induced metric."
    - title: "Steven Carlip, Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe"
      url: "https://arxiv.org/pdf/gr-qc/0409039"
      locator: "§2.3, the invertible-triad restriction following equations (2.3.2)–(2.3.4)."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

Every smooth solution of the zero-cosmological-constant three-dimensional BF equations has an invertible triad and determines a nondegenerate Lorentz metric satisfying the vacuum Einstein equation.

## Statement references

[[def-qftx-cs-bf-actions]]

[[prop-qftx-three-dimensional-gravity-bf]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a nonempty oriented three-manifold $M$ with a global trivialization, and the zero-cosmological-constant BF field equations.

[A1] [[def-countable-choice]]: countable choice, as required by the conditional gravity proposition used for comparison.

[F1] [[def-qftx-cs-bf-actions]]: the BF curvature is $F_\omega=d\omega+\tfrac12[\omega,\omega]$ and the covariant derivative of the BF field is $D_\omega e$.

[F2] [[prop-qftx-three-dimensional-gravity-bf]]: the BF equations are $F_\omega=0$ and $D_\omega e=0$, and only the invertible-coframe sector defines a nondegenerate Lorentz metric equivalent to vacuum gravity.

## Counterexample

1.1 Take $M$ to be the closed unit three-ball, choose the trivial $\mathfrak{so}(2,1)$ bundle, and set $e\equiv0$ and $\omega\equiv0$. Direct substitution gives $F_\omega=d0+\tfrac12[0,0]=0$ and $D_\omega e=d0+[0,0]=0$, so [F2] says this is a BF solution. [A1, F1, F2, given, construct]

2.1 At every $x\in M$, the map $e_x:T_xM\to\mathbb R^{2,1}$ has rank zero, so it is not invertible. The induced symmetric tensor $g_e(X,Y)=\eta(eX,eY)$ is identically zero and therefore degenerate; it is not a Lorentz metric. This solution lies outside the metric-gravity sector, refuting the statement. [F2, step 1.1, algebra] ∎
