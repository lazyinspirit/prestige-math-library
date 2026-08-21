---
id: cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism
kind: counterexample
title: '$x\mapsto x^3$ is a $C^1$ bijection whose inverse is not differentiable at zero'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-c-one-map-and-local-inverse, thm-chain-rule, lem-derivative-of-a-power, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, thm-continuous-inverse, thm-nth-roots-exist, lem-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 8.5.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement refuted

A $C^1$ bijection between open subsets of the real line must be a $C^1$ diffeomorphism.

The counterexample below establishes: The map $x\mapsto x^3$ is a smooth open bijection of $\mathbb R$ with derivative zero at the origin, but its inverse is not differentiable there.

## Facts & Assumptions

**Given:** The map $f(x)=x^3$, the $C^1$ and diffeomorphism conventions ([[def-c-one-map-and-local-inverse]], [[def-ck-euclidean-maps-and-diffeomorphisms]]), and the fact that a continuous strictly monotone function on an interval has a continuous inverse [[thm-continuous-inverse]].

[L1] For every integer $d\ge1$, $p_d(x)=x^d$ is differentiable with $p_d'(x)=d x^{d-1}$ ([[lem-derivative-of-a-power]]).

[L2] If differentiable functions are composable, then their composite is differentiable and its derivative is the product of the two derivatives ([[thm-chain-rule]]).

[L3] A differentiable real function is continuous, and a continuous injective function on an interval has a continuous inverse onto its image ([[cor-differentiable-implies-continuous]], [[thm-continuous-inverse]]).

[L4] Sums and scalar multiples of differentiable real functions are differentiable with the expected derivatives ([[thm-algebra-of-derivatives]]).

[L5] The constant power $p_0(x)=1$ has derivative zero ([[lem-derivative-of-a-power]]).

[L6] Every nonnegative real has a unique nonnegative cube root ([[thm-nth-roots-exist]]).

[L7] The cube function is strictly increasing on the nonnegative reals ([[lem-power-monotone]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [L1], [L4], and [L5], the successive derivatives of the cube map are $3x^2$, $6x$, $6$, and then zero, so it is smooth. By [L7], the cube is strictly increasing on the nonnegative half-line; the identity $(-x)^3=-x^3$ then gives strict increase on the whole line. For $y\ge0$, [L6] supplies $x\ge0$ with $x^3=y$, while for $y<0$ the negative of the cube root of $-y$ maps to $y$. Thus the cube map is onto and hence bijective. By [L3] it and its inverse are continuous, so it is a homeomorphism and therefore open. Its derivative at zero is zero. [L1, L3, L4, L5, L6, L7, given, algebra]

2.1 Suppose its inverse $g$ were differentiable at zero. Applying [L2] to $g(x^3)=x$ at zero would give $g'(0)\,f'(0)=1$, but step 1.1 makes the left side zero. Therefore the inverse is not differentiable at zero. The map $x\mapsto x^3$ is a smooth open bijection of $\mathbb R$ with derivative zero at the origin, but its inverse is not differentiable there. [step 1.1, L2, assume-contra, algebra, discharge-contradiction] ∎
