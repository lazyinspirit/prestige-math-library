---
id: thm-winding-number-equals-circle-degree
kind: theorem
title: "For loops in C times, the winding number about 0 equals the circle degree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-winding-number-closed-complex-contour,
       cor-winding-number-is-the-normalized-argument-increment,
       def-degree-of-a-circle-loop,
       thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle,
       cor-geometric-unit-circle-has-fundamental-group-z]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Ch. 4, §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Let $\gamma:[0,1]\to\mathbb C^\times$ be a closed rectifiable loop with
$\gamma(0)=\gamma(1)=1$, and define

$$\alpha(t)=\frac{\gamma(t)}{|\gamma(t)|}\in\{z\in\mathbb C:|z|=1\}.$$

Under the standard homeomorphism $[s]\mapsto(\cos 2\pi s,\sin 2\pi s)$ from
$\mathbb R/\mathbb Z$ to the unit circle, the loop $\alpha$ determines a based
loop in $\mathbb R/\mathbb Z$ at $[0]$, and

$$n(\gamma,0)=\deg(\alpha).$$

Equivalently, the winding number of $\gamma$ about $0$ is exactly the integer
that classifies the normalized circle loop of $\gamma$.

## Facts & Assumptions

**Given:** A closed rectifiable loop $\gamma:[0,1]\to\mathbb C^\times$ with $\gamma(0)=1$.

[L1] For a closed complex contour $\sigma$ in $\mathbb C^\times$ and a continuous argument $\theta$ of $\sigma$ about $0$, one has
$$n(\sigma,0)=\frac{\theta(1)-\theta(0)}{2\pi}$$
([[cor-winding-number-is-the-normalized-argument-increment]], [[def-winding-number-closed-complex-contour]]).

[L2] The map $h([s])=(\cos 2\pi s,\sin 2\pi s)$ is a homeomorphism from $\mathbb R/\mathbb Z$ to the unit circle and sends $[0]$ to $(1,0)$ ([[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L3] The degree of a based loop in $\mathbb R/\mathbb Z$ is the endpoint of its unique lift to $\mathbb R$ beginning at $0$ ([[def-degree-of-a-circle-loop]]).

[L4] The unit circle has fundamental group $\mathbb Z$ under the standard trigonometric normalization ([[cor-geometric-unit-circle-has-fundamental-group-z]]).

## Proof

**Proof technique:** direct.

1.1 Because $\gamma(t)\ne0$ for every $t$, the normalized map $\alpha(t)=\gamma(t)/|\gamma(t)|$ is a continuous loop in the unit circle based at $1$. Using the homeomorphism of [L2], regard the same loop as a based loop $\beta:[0,1]\to\mathbb R/\mathbb Z$ at $[0]$. Let $\widetilde\beta:[0,1]\to\mathbb R$ be its lift with $\widetilde\beta(0)=0$, and define $\theta(t)=2\pi\widetilde\beta(t)$. [given, L2, L3, construct]

2.1 By the definition of $h$ in [L2], the lift from step 1.1 supplies a continuous argument. [step 1.1, L1, L2, algebra]
$$\alpha(t)=\cos\theta(t)+i\sin\theta(t)=e^{i\theta(t)}.$$
Hence
$$\gamma(t)=|\gamma(t)|e^{i\theta(t)},$$
so $\theta$ is a continuous argument of $\gamma$ about $0$. Therefore [L1] gives
$$n(\gamma,0)=\frac{\theta(1)-\theta(0)}{2\pi}=\widetilde\beta(1).$$

3.1 Since $\widetilde\beta(1)$ is exactly the degree of $\beta$ by [L3], step 2.1 shows $n(\gamma,0)=\deg(\beta)$, which is the asserted degree of the normalized circle loop of $\gamma$. Fact [L4] records that this is the same integer that classifies the loop class in the usual $\pi_1(S^1)\cong\mathbb Z$ convention. [step 2.1, L3, L4] ∎
