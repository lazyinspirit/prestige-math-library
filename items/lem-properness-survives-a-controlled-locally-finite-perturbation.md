---
id: lem-properness-survives-a-controlled-locally-finite-perturbation
kind: lemma
title: "A locally finite shellwise perturbation with rapidly decaying size preserves properness of a smooth exhaustion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement

Let $h:M\to[0,\infty)$ be a smooth proper function, and for each $n\ge1$ let
$u_n:M\to\mathbb R$ be smooth with
$$\operatorname{supp}(u_n)\subseteq h^{-1}([n-1,n+2])\qquad\text{and}\qquad \|u_n\|_\infty\le 2^{-n-2}.$$
Assume the family $(\operatorname{supp}(u_n))_{n\ge1}$ is locally finite. Then
the sum
$$u:=\sum_{n\ge1}u_n$$
is smooth, and $h+u$ is still proper.

## Facts & Assumptions

**Given:** A smooth proper function $h:M\to[0,\infty)$ and a locally finite shellwise family $(u_n)_{n\ge1}$ as in the statement.

[L1] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[A1] The geometric series $\sum_{n\ge1}2^{-n-2}$ converges to $1/4$.

[A2] Closed subsets of compact spaces are compact.

## Proof

**Proof technique:** direct.

1.1 The family of supports is locally finite, so [L1] makes the sum $u=\sum_nu_n$ a smooth function. [L1, given]

2.1 For every $x\in M$, the pointwise estimate gives $$|u(x)|\le \sum_{n\ge1}|u_n(x)|\le \sum_{n\ge1}2^{-n-2}=\tfrac14$$ by [A1]. Hence $(h+u)(x)\ge h(x)-\tfrac14$ for all $x$. [A1, step 1.1, algebra]

3.1 If $(h+u)(x)\le c$, then step 2.1 gives $h(x)\le c+\tfrac14$. Therefore $$\{x:(h+u)(x)\le c\}\subseteq \{x:h(x)\le c+\tfrac14\}.$$ The right-hand side is compact because $h$ is proper, and the left-hand side is closed because $h+u$ is continuous. By [A2], the left-hand side is compact. [A2, step 2.1, given, algebra]

4.1 Thus $h+u$ is proper, and the shellwise perturbation preserves properness. [step 3.1] ∎
