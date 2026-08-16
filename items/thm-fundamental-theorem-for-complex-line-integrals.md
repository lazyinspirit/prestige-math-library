---
id: thm-fundamental-theorem-for-complex-line-integrals
kind: theorem
title: "The line integral of a continuous function admitting a primitive is that primitive's endpoint increment along every rectifiable path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-primitive, thm-existence-of-complex-line-integrals-on-rectifiable-paths, cor-chord-length-is-at-most-arc-length, cor-continuous-complex-derivative-gives-c1-components, thm-gradient-theorem-for-line-integrals, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-lebesgue-number-lemma, thm-heine-cantor-metric, cor-ml-estimate-for-complex-line-integrals, thm-arc-length-is-additive-over-subintervals]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Weber, Lecture Notes in Complex Analysis, §1.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $F$ be a primitive of a continuous function $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$. If $F'=f$ is continuous, then
$$\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a)).$$

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma$ and a primitive $F$ with continuous derivative $f$.

[L1] A primitive is holomorphic and satisfies $F'=f$ ([[def-complex-primitive]]).

[L2] Every chord is at most the length of the corresponding subpath ([[cor-chord-length-is-at-most-arc-length]]).

[L3] A holomorphic function with continuous derivative has $C^1$ real and imaginary components ([[cor-continuous-complex-derivative-gives-c1-components]]).

[L4] For a $C^1$ real potential and a piecewise-$C^1$ path, the published gradient theorem gives the endpoint increment ([[thm-gradient-theorem-for-line-integrals]]).

[L5] Continuous integrands have complex line integrals along every rectifiable contour ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L6] A closed real interval is compact, and the continuous image of a compact metric space is compact ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

[L7] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

[L8] If $|g|\le M$ on a rectifiable contour, then $|\int g\,dz|\le M L$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L9] Arc length is additive across a split of the parameter interval, including endpoint splits ([[thm-arc-length-is-additive-over-subintervals]]).

[L10] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$. For a point $p$ of the trace let $S_p$ be the set of $r\in(0,1]$ such that $B(p,r)$ lies in the open domain and $|f(u)-f(p)|<\varepsilon/2$ for every $u\in B(p,r)$. Continuity of $f$ at $p$ and openness of the domain make $S_p$ nonempty, and $S_p$ is downward closed in $(0,1]$, so $r_p:=\tfrac12\sup S_p$ is a positive real belonging to $S_p$; the assignment $p\mapsto r_p$ is defined outright, not selected, so no choice principle is used. The balls $B(p,r_p)$ cover the compact trace by [L6], so [L7] supplies $\delta>0$ such that any two trace points at distance below $\delta$ lie in a single $B(p,r_p)$. That ball is convex, so the segment joining them stays inside it, and $|f(u)-f(z)|<\varepsilon$ all along that segment. [L1, L3, L6, L7, algebra]

2.1 For trace points $z,w$ as in step 1.1, apply [L4] componentwise to the straight segment and then [L8] to $f-f(z)$. This gives $F(w)-F(z)=f(z)(w-z)+r(z,w)$ with $|r(z,w)|\le\varepsilon|w-z|$. [step 1.1, L3, L4, L8]

3.1 By [L6] and [L10], choose $\eta>0$ so that every partition with mesh below $\eta$ has consecutive trace points within $\delta$. For every such partition, sum the identity of step 2.1: the left side telescopes to $F(\gamma(b))-F(\gamma(a))$, and by [L2] and repeated use of [L9] the total remainder is at most $\varepsilon L(\gamma)$. As the mesh tends to $0$, [L5] identifies the limit of the main sums with the complex integral, so $|F(\gamma(b))-F(\gamma(a))-\int_\gamma f\,dz|\le\varepsilon L(\gamma)$. [step 2.1, L2, L5, L6, L9, L10, choose]

4.1 Letting $\varepsilon\downarrow0$ proves the formula for every rectifiable contour. The argument also covers constant paths, for which [L2] gives length $0$ and both sides vanish. [step 3.1, L2] ∎
