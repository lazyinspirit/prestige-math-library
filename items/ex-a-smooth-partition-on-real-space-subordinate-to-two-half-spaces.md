---
id: ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces
kind: example
title: "A smooth partition on real space subordinate to two half-spaces"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-the-standard-smooth-step-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Example

Let $n\ge 1$. On $\mathbb R^n$, let $U_-:=\{x:x_1<2\}$ and $U_+:=\{x:x_1>-2\}$, and define $\phi_+(x):=\sigma((x_1+1)/2)$ and $\phi_-(x):=1-\phi_+(x)$. Then $(\phi_-,\phi_+)$ is a smooth partition of unity subordinate to $(U_-,U_+)$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$ and the standard smooth step function $\sigma$.

[F1] The function $\sigma$ is smooth, equals $0$ on $(-\infty,0]$, and equals $1$ on $[1,\infty)$ ([[def-the-standard-smooth-step-function]]).

## Verification

**Proof technique:** direct.

1.1 Because $x\mapsto (x_1+1)/2$ is smooth, so are $\phi_+$ and $\phi_-=1-\phi_+$. [F1, given]

2.1 The functions are nonnegative and sum to $1$; moreover $\phi_+=0$ when $x_1\le -1$, so $\operatorname{supp}(\phi_+)\subseteq \{x:x_1\ge -1\}\subseteq U_+$, and $\phi_-=0$ when $x_1\ge 1$, so $\operatorname{supp}(\phi_-)\subseteq \{x:x_1\le 1\}\subseteq U_-$. [F1, step 1.1]

3.1 Hence $(\phi_-,\phi_+)$ is the required smooth partition. [step 2.1] ∎
