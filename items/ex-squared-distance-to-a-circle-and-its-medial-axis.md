---
id: ex-squared-distance-to-a-circle-and-its-medial-axis
kind: example
title: "Squared distance to a circle is Morse for centers off the medial axis and degenerate at the center"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-generic-squared-distance-functions-are-morse]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct computation
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
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Example

On the unit circle $S^1\subseteq\mathbb R^2$, the squared-distance function
from a center $p=(a,b)$ is Morse for every $p\neq0$, while at the center it is
constant and therefore maximally degenerate. For this example, the medial axis
is just the single point $0$.

## Facts & Assumptions

**Given:** The unit circle $S^1\subseteq\mathbb R^2$ and a center $p=(a,b)\in\mathbb R^2$.

[L1] Generic centers give Morse squared-distance functions on a compact embedded manifold ([[thm-generic-squared-distance-functions-are-morse]]).

## Verification

**Proof technique:** direct computation.

1.1 Parametrize the circle by $x(\theta)=(\cos\theta,\sin\theta)$. Then $$d_p(\theta)=\|x(\theta)-p\|^2=1+a^2+b^2-2(a\cos\theta+b\sin\theta).$$ Therefore $$d_p'(\theta)=2(a\sin\theta-b\cos\theta)\quad\text{and}\quad d_p''(\theta)=2(a\cos\theta+b\sin\theta).$$ [given, algebra]

2.1 If $p\neq0$, the equation $a\sin\theta=b\cos\theta$ has exactly two solutions modulo $2\pi$, corresponding to the two points where the radius through $p$ meets the circle. At those two points one has $d_p''(\theta)=\pm2\sqrt{a^2+b^2}\neq0$, so both critical points are nondegenerate and $d_p$ is Morse. This matches the generic-center theorem [L1]. [L1, step 1.1, algebra]

2.2 If $p=0$, then $d_0(\theta)\equiv1$ is constant. Every point of the circle is critical, so the function is degenerate and not Morse. [step 1.1, algebra]

3.1 Thus centers off the medial axis yield Morse squared-distance functions, while the center itself is the exceptional degenerate case. [step 2.1, step 2.2] ∎
