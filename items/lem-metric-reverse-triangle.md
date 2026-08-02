---
id: lem-metric-reverse-triangle
kind: lemma
title: "The reverse triangle inequality $|d(x,z) - d(y,z)| \\le d(x,y)$ in any metric space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-space, lem-of-abs-value, lem-of-add-order, def-ordered-field,
       def-abs-value, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "reverse triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Triangle inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_inequality"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$x, y, z \in X$. Then

$$|d(x,z) - d(y,z)| \le d(x,y),$$

where $|\cdot|$ is the absolute value of $\mathbb{R}$ ([[def-abs-value]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and points $x, y, z \in X$; write $t := d(x,z) - d(y,z)$.

[A1] The triangle inequality (M3): $d(a,c) \le d(a,b) + d(b,c)$ for all $a,b,c \in X$ ([[def-metric-space]]).

[A2] Symmetry (M2): $d(a,b) = d(b,a)$ for all $a,b \in X$ ([[def-metric-space]]).

[L1] For every real $u$, the value $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Adding a constant to an inequality: if $a \le b$ then $a + c \le b + c$. [[lem-of-add-order]] states the strict form $a < b \Rightarrow a + c < b + c$; the nonstrict form used here is that strict form together with the case $a = b$, in which the two sides are equal, the order being total ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] at $(a,b,c) = (x,y,z)$: $d(x,z) \le d(x,y) + d(y,z)$. [A1]

1.2 By [A1] at $(a,b,c) = (y,x,z)$: $d(y,z) \le d(y,x) + d(x,z)$, and by [A2] $d(y,x) = d(x,y)$, so $d(y,z) \le d(x,y) + d(x,z)$. [A1, A2]

2.1 Adding $-d(y,z)$ to both sides of step 1.1 gives $t = d(x,z) - d(y,z) \le d(x,y)$. [step 1.1, L2]

2.2 Adding $-d(x,z)$ to both sides of step 1.2 gives $d(y,z) - d(x,z) \le d(x,y)$, that is $-t \le d(x,y)$. [step 1.2, L2]

3.1 By [L1] the real number $|t|$ is either $t$ or $-t$, and both of these are at most $d(x,y)$ by steps 2.1 and 2.2, so $|d(x,z) - d(y,z)| = |t| \le d(x,y)$. [step 2.1, step 2.2, L1] ∎

## Remarks

- **Read with $z$ fixed, this says the function $u \mapsto d(u,z)$ does not
  increase distances**: its values at $x$ and at $y$ differ by at most $d(x,y)$.
  That is the model for [[lem-distance-to-set-is-lipschitz]], which proves the
  same estimate with the point $z$ replaced by a nonempty set.
- The inequality specialises, on $\mathbb{R}$ with $d(u,v) = |u-v|$
  ([[lem-real-line-is-a-metric-space]]), to the familiar
  $\big||x - z| - |y - z|\big| \le |x - y|$.
