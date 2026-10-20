---
id: ex-finite-width-quadratic-network-has-changing-features-and-ntk
kind: example
title: A finite-width quadratic feature network has a changing NTK
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-neural-tangent-kernel
  - thm-picard-lindelof-local-existence-and-uniqueness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat, Edouard Oyallon, and Francis Bach, On Lazy Training in Differentiable Programming"
      url: "https://arxiv.org/pdf/1812.07956"
      locator: "§1.1 and §2.1, finite-width parameter-Jacobian tangent operator; the quadratic path is computed here"
---

## Example

Consider the scalar one-hidden-unit model $f_{a,w}(1)=aw^2$ with parameters $(a,w)\in\mathbb R^2$ and cost $C(a,w)=\tfrac12 f_{a,w}(1)^2$. At $(a,w)=(1,1)$, gradient flow for this cost has $\dot a=-1$ and $\dot w=-2$. Its two parameter features are $\partial_a f=w^2$ and $\partial_w f=2aw$, and its neural tangent kernel at the single input is $K(a,w)=w^4+4a^2w^2$. Along the local gradient-flow solution from $(1,1)$, both features change immediately and $\frac{d}{dt}K(a(t),w(t))|_{t=0}=-32$, so this finite-width model does not have a fixed NTK.

## Example references

[Chizat, Oyallon, and Bach, §§1.1 and 2.1, tangent operator of a differentiable parameterized model](https://arxiv.org/pdf/1812.07956)

[[def-neural-tangent-kernel|The scalar NTK is the sum of parameter-feature products]]

## Facts & Assumptions

**Given:** The model $f_{a,w}(1)=aw^2$, the cost $C=\tfrac12f^2$, and initial parameters $(a,w)=(1,1)$.

[F1] The scalar neural tangent kernel is the sum of squares of the parameter derivatives ([[def-neural-tangent-kernel]]).

[F2] A polynomial vector field has a unique local solution through each initial point ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

## Verification
**Proof technique:** direct differentiation.

1.1 Differentiating $f=aw^2$ gives $\partial_af=w^2$ and $\partial_wf=2aw$. By [F1], $K(a,w)=(w^2)^2+(2aw)^2=w^4+4a^2w^2.$ At $(1,1)$, $f=1$, $\partial_aC=fw^2=1$, and $\partial_wC=2faw=2$, so the negative-gradient vector field has the stated initial velocity. [F1, given, algebra]

2.1 The vector field $(\dot a,\dot w)=(-aw^4,-2a^2w^3)$ is polynomial, hence locally Lipschitz; [F2] gives a differentiable local solution through $(1,1)$. Along it, $\frac{d}{dt}K=4w^3\dot w+8aw^2\dot a+8a^2w\dot w,$ which equals $-8-8-16=-32$ at $t=0$. Also $\frac{d}{dt}(w^2)|_{0}=2w\dot w=-4$ and $\frac{d}{dt}(2aw)|_{0}=2(\dot a w+a\dot w)=-6$, so both parameter features vary. A differentiable scalar function with nonzero derivative at zero is not constant on any right neighborhood of zero. [F2, step 1.1, algebra] ∎
