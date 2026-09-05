---
id: def-hilbert-symbol-over-a-rational-completion
kind: definition
title: "The Hilbert symbol over a rational completion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-local-fields]
justified_by: []
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Definition 10.1"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $v\le\infty$ be a place of $\mathbb Q$, and let $a,b\in Q_v^\times$. The
**Hilbert symbol** $(a,b)_v$ is defined by

$$(a,b)_v= \begin{cases} 1,&\text{if }ax^2+by^2=1\text{ has a solution in }Q_v,\\ -1,&\text{otherwise.} \end{cases}$$

The variables $x,y$ are allowed to be any elements of $Q_v$. The next lemma
recasts the same condition as isotropy of a ternary form and as a norm
condition from the quadratic algebra $Q_v[T]/(T^2-a)$, which is a quadratic
field extension when $a$ is nonsquare and a split algebra when $a$ is square.
