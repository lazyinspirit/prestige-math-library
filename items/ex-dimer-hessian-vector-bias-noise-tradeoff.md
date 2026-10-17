---
id: ex-dimer-hessian-vector-bias-noise-tradeoff
kind: example
title: "Dimer finite-difference bias competes with force-evaluation error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-dimer-central-force-hessian-vector-error
  - def-hessian-and-euclidean-critical-point
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Graeme Henkelman and Hannes Jónsson, A dimer method for finding saddle points on high dimensional potential surfaces using only first derivatives"
      url: "https://hj.hi.is/papers/paperDimer.pdf"
      locator: "§II A, equations (2)–(3): central paired-force approximation of a Hessian direction"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, Simplified and improved string method for computing the minimum energy paths in barrier-crossing events"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/SimplifiedString.pdf"
      locator: "§V B, equations (28)–(31): finite-difference Hessian-vector error and force noise"
---

## Example

On $\mathbb R^2$, let $V(x,y)=x^4/24+y^2/2$, take the point $(0,0)$ and direction $v=e_1$. The exact Hessian action is $\nabla^2V(0,0)e_1=0$. With exact gradients, the central dimer estimate is $D_\epsilon=(\epsilon^2/6)e_1$. If the two gradient evaluations have errors $+\eta e_1$ and $-\eta e_1$, each of norm $\eta$, the computed estimate becomes $\widehat D_\epsilon=(\epsilon^2/6+\eta/\epsilon)e_1$. The truncation bias decreases with $\epsilon$, while this permitted noise contribution increases as $\epsilon$ shrinks.

## Facts & Assumptions

**Given:** The potential, point, direction, finite-difference distance $\epsilon>0$, and opposite evaluation errors of magnitude $\eta\ge0$.

[F1] [[def-hessian-and-euclidean-critical-point]]: the Hessian is the Jacobian of the gradient; at the origin its action on $e_1$ is zero.

[F2] [[lem-dimer-central-force-hessian-vector-error]]: for $C^4$ potentials the paired central gradient difference has truncation error $O(\epsilon^2)$ and force-evaluation contribution at most $\eta/\epsilon$.



**Given:** The data in the Example.

## Proof

1.1 The gradient is $\nabla V(x,y)=(x^3/6,y)$. Thus $\nabla V(\epsilon e_1)=(\epsilon^3/6,0)$ and $\nabla V(-\epsilon e_1)=(-\epsilon^3/6,0)$. Their central difference is $((\epsilon^3/3)/(2\epsilon),0)=(\epsilon^2/6)e_1$. The Hessian at the origin is $\operatorname{diag}(0,1)$, so [F1] gives $He_1=0$. [F1, given, algebra]

2.1 Adding the stated force errors changes the numerator by $2\eta e_1$; division by $2\epsilon$ adds $\eta e_1/\epsilon$. Hence the computed estimate is exactly $\widehat D_\epsilon=(\epsilon^2/6+\eta/\epsilon)e_1$. This realizes both contributions in [F2] for this example. [F2, step 1.1, given, algebra]

3.1 For fixed $\eta>0$, the deterministic term $\epsilon^2/6$ tends to zero as $\epsilon\to0$, but the permitted error term $\eta/\epsilon$ grows without bound. Therefore reducing the dimer separation does not monotonically improve the Hessian-vector estimate when force evaluations are inexact. [step 2.1, algebra] ∎

