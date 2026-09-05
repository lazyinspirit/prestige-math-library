---
id: thm-real-hilbert-symbol-formula
kind: theorem
title: "The real Hilbert symbol formula"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hilbert-symbol-over-a-rational-completion]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Theorem 10.3"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.1"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

For $a,b\in\mathbb R^\times$,

$$(a,b)_\infty= \begin{cases} 1,&\text{if }a>0\text{ or }b>0,\\ -1,&\text{if }a<0\text{ and }b<0. \end{cases}$$

## Facts & Assumptions

**Given:** Nonzero real numbers $a$ and $b$.

[L1] By definition, $(a,b)_\infty=1$ exactly when $ax^2+by^2=1$ has a real solution ([[def-hilbert-symbol-over-a-rational-completion]]).

## Proof

**Proof technique:** direct.

1.1 If $a>0$, then $x=1/\sqrt a$ and $y=0$ solve $ax^2+by^2=1$, so [L1] gives $(a,b)_\infty=1$; the same argument works when $b>0$. [L1, given, algebra]

2.1 If $a<0$ and $b<0$, then $ax^2\le0$ and $by^2\le0$ for all real $x,y$, so $ax^2+by^2$ can never equal $1$. Therefore [L1] gives $(a,b)_\infty=-1$. Combining with step 1.1 proves the formula. [L1, step 1.1, algebra] ∎
