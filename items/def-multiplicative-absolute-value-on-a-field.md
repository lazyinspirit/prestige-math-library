---
id: def-multiplicative-absolute-value-on-a-field
kind: definition
title: "Absolute values on a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 5"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes5.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Definition

Let $F$ be a field. An **absolute value** on $F$ is a function
$|\cdot| : F \to \mathbb R_{\ge 0}$ such that for all $x,y \in F$:

$$|x| = 0 \iff x = 0,\qquad |xy| = |x||y|,\qquad |x+y| \le |x| + |y|.$$

It is **nonarchimedean** when it satisfies the stronger inequality

$$|x+y| \le \max\{|x|,|y|\}$$

for all $x,y \in F$.

It is **trivial** when $|x| = 1$ for every nonzero $x \in F$.
