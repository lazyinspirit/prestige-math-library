---
id: cex-commutative-target-erases-the-a2-wall-crossing
kind: counterexample
title: "Commutativizing the target erases the A₂ wall-crossing identity"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-finite-acyclic-quiver-stability-data
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
  - thm-finite-quiver-hall-wall-crossing
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, Example 3.15"
      url: "https://arxiv.org/pdf/math/0611617"
verification:
  precheck: pass
---

## Statement refuted

The A₂ quantum-dilogarithm wall identity is not preserved if the skew quantum
torus product is replaced by ordinary commutative multiplication while its
factor normalization is kept. In the commutative formal power-series ring in
$x_1,x_2$ over $\mathbb Q(t)$, the resulting claimed equality is
$$E_{t^2}(x_2)E_{t^2}(x_1) =E_{t^2}(x_1)E_{t^2}(t x_1x_2)E_{t^2}(x_2),\qquad E_{t^2}(x)=\sum_{n\ge0}\frac{t^n x^n}{\prod_{r=1}^{n}(t^{2r}-1)}.$$

## Facts & Assumptions

**Given:** A formal variable $t$ and the series displayed in the refuted
claim.

[F1] The degree-one coefficient of $E_{t^2}(x)$ is
$c_1=t/(t^2-1)$, directly from its defining series.

[F2] The A₂ chamber products arise from the completed skew Hall integration
and the subobject-first normalization
([[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]],
[[thm-finite-quiver-hall-wall-crossing]]).

## Counterexample

**Given:** The commutative power-series ring and the displayed candidate
identity.

1.1 In the left side, the coefficient of bidegree $(1,1)$ can only come from the linear term of each of the two factors. It is therefore $c_1^2$. [F1, algebra]

1.2 In the right side, that bidegree receives the contribution $c_1^2$ from the linear terms of the first and third factors, and the contribution $tc_1$ from the linear term of the middle factor. All remaining terms have a coordinate degree exceeding $(1,1)$ in at least one variable. Thus its coefficient is $c_1^2+tc_1$. [F1, algebra]

2.1 The difference is $tc_1=t^2/(t^2-1)$, a nonzero rational function (and nonzero at every finite-field specialization $t=\sqrt q>1$). The two formal series are unequal, so ordinary commutative multiplication cannot retain the A₂ wall identity. This is exactly why the target skew twist is part of the theorem's normalization. [F1, F2, step 1.1, step 1.2, algebra] ∎
