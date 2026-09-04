---
id: lem-p-adic-balls-are-clopen
kind: lemma
title: "P-adic balls are clopen and intersecting comparable balls are nested"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field-of-p-adic-numbers, thm-p-adic-absolute-value-is-nonarchimedean]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
pipeline_run: null
---

## Statement

In $\mathbb Q_p$, every open or closed ball is both open and closed. Moreover,
if two balls of radii $r \le s$ intersect, then the smaller one is contained in
the larger.

## Facts & Assumptions

**Given:** Points $a,b,x \in \mathbb Q_p$ and positive radii $r \le s$.

[L1] The absolute value on $\mathbb Q_p$ is nonarchimedean ([[thm-p-adic-absolute-value-is-nonarchimedean]]).

[L2] $\mathbb Q_p$ is the $p$-adic completion field ([[def-field-of-p-adic-numbers]]).

## Proof

**Proof technique:** direct.

1.1 If $x$ lies in the open ball $B(a,r)$, then $|x-a|_p < r$. For any $y$ with $|y-x|_p < r$, [L1] gives $$|y-a|_p \le \max\{|y-x|_p,|x-a|_p\} < r,$$ so $y \in B(a,r)$. Thus every point of an open ball is again a center, hence every open ball is open and every closed ball is open by the same argument with $\le r$. [L1, L2, given, algebra]

2.1 If $|y-x|_p < |x-a|_p$, then [L1] forces $|y-a|_p = |x-a|_p$. Hence, if $x \notin B(a,r)$, then $|x-a|_p \ge r$ and so $y \notin B(a,r)$; and if $x$ lies outside the closed ball of radius $r$ around $a$, then $|x-a|_p > r$ and so $y$ lies outside that closed ball as well. Thus the complement of either the open or the closed ball around $a$ is a union of open balls. Therefore every open or closed ball is also closed. [L1, step 1.1, given, algebra]

3.1 If $B(a,r)$ and $B(b,s)$ intersect, choose $x$ in the intersection. For any $y \in B(a,r)$, $$|y-b|_p \le \max\{|y-x|_p,|x-b|_p\} < \max\{r,s\} = s,$$ so $y \in B(b,s)$. The same proof works for closed balls. Hence intersecting comparable balls are nested. [L1, given, algebra] ∎
