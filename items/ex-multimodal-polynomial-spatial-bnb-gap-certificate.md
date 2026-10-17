---
id: ex-multimodal-polynomial-spatial-bnb-gap-certificate
kind: example
title: A multimodal quartic receives an exact spatial branch-and-bound gap certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound-examples
dependency_level: 7
deps: [alg-certified-spatial-branch-and-bound, alg-interval-dag-box-enclosure-and-bound, thm-interval-lipschitz-bound-sound-consistent, thm-of-square-roots, lem-of-square-monotone, thm-spatial-bnb-gap-certificate-sound]
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

Let $f(x)=x^4-x^2$ on $D_0=[-1,1]$, with exact dyadic interval evaluation, $\varepsilon=9/10$, and node budget $N=3$. This polynomial has two global minimizers, while a natural interval extension gives a simple certified gap after one split.

## Facts & Assumptions

**Given:** The unconstrained interval $[-1,1]$, $f(x)=x^4-x^2$ represented by the DAG $t=x\times x$, $u=t\times t$, $f=u-t$, exact interval operation results for the displayed dyadic endpoints, and the procedure [[alg-certified-spatial-branch-and-bound]] with $N=3$ and the interval oracle [[alg-interval-dag-box-enclosure-and-bound]].

[F1] A finite interval-DAG evaluation encloses every exact objective value; a verified upper/lower pair with gap at most epsilon is a global certificate. [[thm-interval-lipschitz-bound-sound-consistent]], [[thm-spatial-bnb-gap-certificate-sound]]

[F2] Every nonnegative real has a unique nonnegative square root. [[thm-of-square-roots]]

## Verification

1.1 The identity $f(x)=(x^2-\tfrac12)^2-\tfrac14$ shows $f(x)\ge-\tfrac14$, with equality at $x=\pm\sqrt{1/2}$. If $s=\sqrt{1/2}$, then $s\ge0$ and $s^2=1/2$ by [F2], so $s>0$. We have $s<1$: otherwise either $s=1$, contradicting $s^2=1/2$, or $1<s$, which by strict monotonicity of squaring on nonnegatives gives $1<s^2=1/2$, also impossible. Hence both minimizers lie in $[-1,1]$, and they are distinct because $s>0$. [[lem-of-square-monotone]] [given, F2, algebra]

1.2 At the root box, the DAG product $t=x\times x$ encloses as $[-1,1]$ under ordinary interval multiplication; then $u=t\times t$ also encloses as $[-1,1]$, so $f=u-t$ encloses as $[-2,2]$. The root midpoint is $0$, with exact feasible value $f(0)=0$; its initial gap is $0-(-2)=2>9/10$, so the root cannot yet be closed as a global certificate. [given, F1, algebra]

2.1 The root uses the first call. Bisect at zero and evaluate the lower child on the second call and the upper child on the third call, completing both reports within $N=3$. On each child $[-1,0]$ and $[0,1]$, ordinary interval multiplication gives $t=x\times x\in[0,1]$, then $u=t\times t\in[0,1]$, so $f=u-t$ has lower bound $-1$. The child midpoints are $-1/2$ and $1/2$, and both give $f=1/16-1/4=-3/16$, so the incumbent becomes $U=-3/16$ and the global lower bound is $L=-1$. [given, F1, step 1.2, algebra]

3.1 The gap is $U-L=13/16<9/10$. The feasible midpoint and the complete two-leaf ledger therefore certify epsilon-global optimality. Its actual objective is $1/16$ above the minimum, within the declared tolerance. [F1, step 2.1, algebra] ∎

