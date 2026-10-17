---
id: ex-multimodal-polynomial-spatial-bnb-gap-certificate
kind: example
title: A multimodal quartic receives an exact spatial branch-and-bound gap certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound-examples
dependency_level: 7
deps: [alg-certified-spatial-branch-and-bound, alg-interval-dag-box-enclosure-and-bound, thm-interval-lipschitz-bound-sound-consistent, thm-of-square-roots, thm-spatial-bnb-gap-certificate-sound]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§11–12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Example

Let $f(x)=x^4-x^2$ on $D_0=[-1,1]$, with exact dyadic interval evaluation and $\varepsilon=9/10$. This polynomial has two global minimizers, while a natural interval extension gives a simple certified gap after one split.

## Facts & Assumptions

**Given:** The unconstrained interval $[-1,1]$, $f(x)=x^4-x^2$, exact interval operation results for the displayed dyadic endpoints, and the procedure [[alg-certified-spatial-branch-and-bound]] with the interval oracle [[alg-interval-dag-box-enclosure-and-bound]].

[F1] A finite interval-DAG evaluation encloses every exact objective value; a verified upper/lower pair with gap at most epsilon is a global certificate. [[thm-interval-lipschitz-bound-sound-consistent]], [[thm-spatial-bnb-gap-certificate-sound]]

[F2] Every nonnegative real has a nonnegative square root. [[thm-of-square-roots]]

## Verification

1.1 The identity $f(x)=(x^2-\tfrac12)^2-\tfrac14$ shows $f(x)\ge-\tfrac14$, with equality at $x=\pm\sqrt{1/2}\in[-1,1]$. Thus the objective is multimodal with two distinct global minimizers. [given, F2, algebra]

1.2 At the root box, interval multiplication gives $x^2\in[0,1]$ and $x^4\in[0,1]$, so the natural enclosure for $f$ is $[-1,1]$. The root midpoint is $0$, with exact feasible value $f(0)=0$; its initial gap is $0-(-1)=1>9/10$, so the root cannot yet be closed as a global certificate. [given, F1, algebra]

2.1 Bisect at zero. On each child $[-1,0]$ and $[0,1]$, the same operationwise interval calculation gives lower bound $-1$. The child midpoints are $-1/2$ and $1/2$, and both give $f=1/16-1/4=-3/16$, so the incumbent becomes $U=-3/16$ and the global lower bound is $L=-1$. [given, F1, step 1.2, algebra]

3.1 The gap is $U-L=13/16<9/10$. The feasible midpoint and the complete two-leaf ledger therefore certify epsilon-global optimality. Its actual objective is $1/16$ above the minimum, within the declared tolerance. [F1, step 2.1, algebra] ∎

