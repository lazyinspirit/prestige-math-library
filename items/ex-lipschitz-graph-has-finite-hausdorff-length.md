---
id: "ex-lipschitz-graph-has-finite-hausdorff-length"
kind: "example"
title: "A Lipschitz graph has finite Hausdorff length"
deps: ["thm-hausdorff-measure-under-lipschitz-maps", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-hausdorff-dimension-critical-exponent"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264G and 264Xf(i) (specialised Lipschitz graph)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. If $f:[0,1]\to\mathbb R$ is $L$-Lipschitz, $0\le L<\infty$, its graph $\Gamma=\{(x,f(x)):0\le x\le1\}$ satisfies

$$1\le\mathcal H^1(\Gamma)\le\sqrt{1+L^2},\qquad\dim_H\Gamma=1.$$

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, an $M$-Lipschitz map with $M>0$ multiplies $\mathcal H^1$ by at most $M$. [[thm-hausdorff-measure-under-lipschitz-maps]]

[F2] Under the standing Countable Choice hypothesis, for every subset $A\subseteq\mathbb R$, $\mathcal H^1(A)=\lambda_1^*(A)$. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F3] Finite positive $\mathcal H^1$ implies dimension one. [[thm-hausdorff-dimension-critical-exponent]]

## Verification

1.1 The graph map $g(x)=(x,f(x))$ satisfies $|g(x)-g(y)|^2=|x-y|^2+|f(x)-f(y)|^2\le(1+L^2)|x-y|^2$. Its Lipschitz constant is at most $\sqrt{1+L^2}$, which is positive even for $L=0$. Since the unit interval has Lebesgue length one, [F2] gives $\mathcal H^1([0,1])=1$ and hence the upper measure bound. [F1, F2]

2.1 The coordinate projection $\pi:\Gamma\to[0,1]$ is $1$-Lipschitz and onto. Therefore $1=\mathcal H^1([0,1])\le\mathcal H^1(\Gamma)$. Both bounds show finite positive measure, and thus dimension one. For $L=0$ both measure bounds equal one. [F1, F2, F3, step 1.1] ∎
