---
id: lem-hilbert-symbol-depends-only-on-square-classes
kind: lemma
title: "The Hilbert symbol depends only on square classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hilbert-symbol-over-a-rational-completion]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

For $a,b,u,v\in Q_w^\times$,

$$
(a,b)_w=(au^2,bv^2)_w.
$$

In particular, the Hilbert symbol depends only on the square classes of its two
arguments.

## Facts & Assumptions

**Given:** A place $w$ of $\mathbb Q$ and nonzero elements $a,b,u,v\in Q_w$.

[L1] By definition, $(c,d)_w=1$ exactly when $cx^2+dy^2=1$ is solvable over
$Q_w$ ([[def-hilbert-symbol-over-a-rational-completion]]).

## Proof

**Proof technique:** direct.

1.1 If $(a,b)_w=1$, choose $x,y$ with $ax^2+by^2=1$ by [L1]. Then $(xu^{-1},yv^{-1})$ solves $(au^2)X^2+(bv^2)Y^2=1$, so $(au^2,bv^2)_w=1$. [L1, given, algebra]

2.1 The same argument with $u^{-1}$ and $v^{-1}$ shows that if $(au^2,bv^2)_w=1$, then $(a,b)_w=1$. Hence the two symbols are equal, and only the square classes matter. [L1, step 1.1, algebra] ∎
