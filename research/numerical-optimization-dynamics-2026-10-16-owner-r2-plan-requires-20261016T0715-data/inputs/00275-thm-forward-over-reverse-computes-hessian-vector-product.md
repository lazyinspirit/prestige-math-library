---
id: thm-forward-over-reverse-computes-hessian-vector-product
kind: theorem
title: "Forward-over-reverse mode computes the Hessian-vector product"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, lem-finite-straight-line-program-defines-c2-map, alg-forward-over-reverse-hessian-vector-product, thm-forward-mode-computes-directional-derivative, thm-reverse-mode-computes-gradient, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 3
---

## Statement

Let $f$ be the scalar output of a finite $C^2$ graph on a fixed strict branch. At every admissible $x$ and direction $v$, the forward-over-reverse algorithm returns $D(\operatorname{grad} f)(x)v$, the Hessian-vector product $H_f(x)v$. No Hessian symmetry assumption is needed for this identity.

## Facts & Assumptions

**Given:** The $C^2$ graph, input $x$, and direction $v$.

[F1] [[def-finite-straight-line-computational-program]]: the program uses finite $C^2$ real primitive maps on a fixed strict branch.

[F2] [[lem-finite-straight-line-program-defines-c2-map]]: the scalar output $f$ is $C^2$, so its gradient map is differentiable.

[F3] [[thm-forward-mode-computes-directional-derivative]]: the forward tangent at each node equals the directional derivative of that node value.

[F4] [[thm-reverse-mode-computes-gradient]]: at each internal node, the reverse accumulator is the derivative of the downstream output with respect to an independent node value; at inputs it is the gradient of $f$.

[F5] [[alg-forward-over-reverse-hessian-vector-product]]: the reverse update is $A^T\bar z_j$ and its directional derivative update is $A^T\dot{\bar z}_j+(DA[\dot z_{pa}])^T\bar z_j$.

[F6] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: composition and bounded-bilinear product obey the chain and product rules; finite-dimensional matrix multiplication is such a product.

## Proof

**Proof technique:** differentiate the exact reverse recurrence in direction $v$.

1.1 By [F4], the input reverse accumulator is the function $x\mapsto\operatorname{grad} f(x)$. Since $f$ is $C^2$ by [F2] under the primitive hypotheses in [F1], its directional derivative at $x$ exists. By [F3], the forward recurrence supplies every primitive-input direction $\dot z_{pa}=Dz_{pa}(x)v$. [F2, F3, F4, given]

2.1 At a node $j$, the exact reverse contribution to parent slot $i$ is $A^T\bar z_j$. Since each primitive is $C^2$, $A$ is $C^1$; the finite reverse recurrence is therefore differentiable, as it consists of sums and bounded bilinear matrix-vector products of $C^1$ maps. Differentiate this matrix-vector product along $x+tv$. The product rule [F6] gives $A^T\dot{\bar z}_j+(DA[\dot z_{pa}])^T\bar z_j$, exactly the second recurrence in [F5]. Reverse topological induction therefore shows that every $\dot{\bar z}_i$ equals the directional derivative of the corresponding exact reverse accumulator. [F3, F5, F6, step 1.1, algebra]

3.1 At the inputs, step 2.1 identifies the returned vector with $D(\operatorname{grad} f)(x)v$, which by definition is $H_f(x)v$. [F2, step 2.1] ∎
