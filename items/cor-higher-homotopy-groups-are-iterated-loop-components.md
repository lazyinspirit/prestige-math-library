---
id: cor-higher-homotopy-groups-are-iterated-loop-components
kind: corollary
title: Higher homotopy groups are iterated loop components
deps: ["prop-loop-suspension-adjunction-on-based-homotopy-classes", "prop-cubical-and-spherical-models-of-higher-homotopy-agree", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 9 §1 p.65
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a based CGWH space X and n≥1, $\pi_n(X,x_0)\cong\pi_0(\Omega^nX)$ naturally. The operation on components on the right is induced by concatenating the first cube coordinate of the adjoint n-loop, and this bijection respects it.

## Facts & Assumptions

[F1] Based interval transposition descends to homotopy classes. [[prop-loop-suspension-adjunction-on-based-homotopy-classes]]

[F2] The cubical model is the based spherical homotopy set. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]

[F3] The cube operation gives groups, abelian above degree one. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Iterate the interval transpose of F1 n times. A boundary-constant $a:I^n\to X$ becomes a point of $\Omega^nX$: fixing any interval endpoint makes the appropriate loop constant. Conversely evaluation at all n parameters recovers a. The inverse identities follow one coordinate at a time. F2 identifies these with the stated spherical homotopy groups as well. [F1, F2]

2.1 Apply the same transpositions with a further time variable. Boundary-fixed cubical homotopies become paths in $\Omega^nX$, and paths evaluate to such homotopies. Thus the map induces inverse bijections between cube classes and components. On the two halves of coordinate 1 the evaluated concatenation is exactly $a(2s_1,u)$ or $b(2s_1-1,u)$, so the component operation matches the cubical group operation of F3. Evaluation also commutes with based postcomposition, giving naturality. [F1, F2, F3, step 1.1] ∎
