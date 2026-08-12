---
id: ex-viete-first-nested-radical-approximants
kind: example
title: "The first Viete nested-radical products approximate two over pi"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-viete-finite-cosine-product-and-nested-radicals, thm-viete-product-for-pi, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Imperial College London, History of Mathematics, Problems VI solutions"
      url: "https://www.ma.imperial.ac.uk/~bin06/HoM/HoM17/m3hsoln6.pdf"
pipeline_run: null
---

## Example

Write $a_1=\sqrt2$ and $a_{n+1}=\sqrt{2+a_n}$. The first four finite Viète products are

$$P_1=\frac{a_1}{2},\qquad P_2=\frac{a_1a_2}{2^2},\qquad P_3=\frac{a_1a_2a_3}{2^3},\qquad P_4=\frac{a_1a_2a_3a_4}{2^4}.$$

## Facts & Assumptions
**Given:** The positive nested radicals $a_n$ and the products $P_n$ above.

[L1] For every real $x$ and natural $n$, $$\sin x=2^n\sin(x/2^n)\prod_{k=1}^{n}\cos(x/2^k),$$ with empty product $1$ at $n=0$; at $x=\pi/2$, its cosine factors are the positive half-angle nested radicals ([[lem-viete-finite-cosine-product-and-nested-radicals]]).

[L2] These finite products satisfy $P_n\to2/\pi$ ([[thm-viete-product-for-pi]]).

[L3] Reciprocals and quotients of convergent real sequences have their corresponding limits when the limiting denominator is nonzero ([[thm-algebra-of-limits]]).



## Verification

**Proof technique:** direct.

1.1 Starting with $a_1=\sqrt2$, the recurrence gives $$a_2=\sqrt{2+\sqrt2},\quad a_3=\sqrt{2+\sqrt{2+\sqrt2}},\quad a_4=\sqrt{2+\sqrt{2+\sqrt{2+\sqrt2}}}.$$ [given, algebra]

1.2 Since every $a_k$ is positive, each $P_n>0$, and $$\Pi_n:=\frac2{P_n}=\frac{2^{n+1}}{a_1a_2\cdots a_n}$$ is defined. [given, algebra]

2.1 Substitution into $\prod_{k=1}^n(a_k/2)$ gives exactly the four products displayed in the Example, as also identified by [L1]. [step 1.1, L1, algebra]

3.1 By [L2] and [L3], the nonzero-limit quotient law gives $\Pi_n\to2/(2/\pi)=\pi$. Thus doubling the reciprocals of the displayed finite products gives certified approximants to $\pi$, with convergence supplied by the finite identity rather than a numerical pattern. [step 1.2, L2, L3, algebra] ∎
