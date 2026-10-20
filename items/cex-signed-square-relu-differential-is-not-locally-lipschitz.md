---
id: cex-signed-square-relu-differential-is-not-locally-lipschitz
kind: counterexample
title: The signed-square ReLU differential need not be locally Lipschitz
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-signed-square-relu-feature-map]
justified_by: []
proof_strategy: direct
axiom_use: "The Gaussian counterexample and its estimates are choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement refuted

**Refuted claim:** the differential of the signed-square ReLU feature map is locally Lipschitz near the parameter $(1,1)$.

For input law with density $p(x)=(2\pi)^{-1/2}e^{-x^2/2}$ on $\mathbb R$, define $\Phi(w,b)(x)=\max\{w|w|x+b|b|,0\}$ as an element of $L^2(p(x)dx)$. This feature map is Fréchet differentiable near $(1,1)$, but its differential is not locally Lipschitz there.

## Statement references

[[def-signed-square-relu-feature-map]]

[Chizat and Bach, Proposition 4.3 and Lemma D.5](https://arxiv.org/pdf/1805.09545)


[[def-signed-square-relu-feature-map]]

[Chizat and Bach, Appendix D.4.2](https://arxiv.org/pdf/1805.09545)
## Facts & Assumptions

**Given:** The signed-square feature and Gaussian density in the Statement.

[F1] The Gaussian density is continuous, positive on every real interval, and has finite second moment, so the feature belongs to $L^2$ and the kink hyperplane has measure zero. [[def-signed-square-relu-feature-map]]

[F2] For $w,b>0$, the preactivation is $r_{w,b}(x)=w^2x+b^2$ and its unique zero is $c(w,b)=-b^2/w^2$. [[def-signed-square-relu-feature-map]]

## Counterexample

**Given:** $\Phi$, $p$, and [F1]–[F2] in the Statement.

1.1 On a small neighborhood of $(1,1)$ with $w,b>0$, the root $c(w,b)$ is a smooth function of parameters. For an increment $h=(h_1,h_2)$, $$r_{(w,b)+h}(x)-r_{w,b}(x)=2wh_1x+2bh_2+h_1^2x+h_2^2.$$ The candidate differential is $D\Phi_{(w,b)}h=\mathbf1_{x>c(w,b)}(2wh_1x+2bh_2)$. Outside the interval between $c(w,b)$ and $c((w,b)+h)$, the two preactivations have the same sign; there the ReLU remainder is either zero or $h_1^2x+h_2^2$, whose $L^2(pdx)$ norm is $O(|h|^2)$ by the finite second moment in [F1]. The interval between the two roots has length $O(|h|)$ and lies in a fixed bounded neighborhood of $-1$; on it the pointwise remainder is $O(|h|)$, so its $L^2(pdx)$ norm is $O(|h|^{3/2})$. Thus the full remainder is $o(|h|)$, proving Fréchet differentiability and the displayed differential. [F1, F2, given, algebra]

2.1 At $(1,1)$ the derivative in direction $e_w=(1,0)$ is $2x\mathbf1_{x>-1}$. At $(1,1+\delta)$ it is $2x\mathbf1_{x>-(1+\delta)^2}$. For $0<\delta\le1/4$, their squared $L^2$ distance is $$4\int_{-(1+\delta)^2}^{-1}x^2p(x)\,dx\ge8p(2)\delta,$$ because the interval lies in $[-2,-1]$, where $x^2\ge1$ and $p(x)\ge p(2)$, and has length $2\delta+\delta^2\ge2\delta$. The operator norm difference of the two differentials is at least their difference on the unit vector $e_w$. Dividing by the parameter distance $\delta$ gives a quotient at least $\sqrt{8p(2)}/\sqrt\delta$, which diverges as $\delta\downarrow0$. Therefore the differential is not locally Lipschitz at $(1,1)$. [F1, step 1.1, algebra] ∎

## Source note

Chizat and Bach's Lemma D.5 establishes differentiability under a finite-second-moment density assumption. The proposition's application does not establish local Lipschitzness of this differential, which is a separate feature-energy hypothesis.
