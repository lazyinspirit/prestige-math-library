---
id: ex-free-presentation-five-term-sequence-for-a-cyclic-group
kind: example
title: "A cyclic presentation and its five-term sequence"
status: published
origin: pipeline
deps: [thm-free-presentation-homology-five-term-sequence]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

For $m\geq1$, the presentation $F=\mathbb Z\twoheadrightarrow C_m=\mathbb Z/m\mathbb Z$ has kernel $R=m\mathbb Z$, and its five-term sequence is $0\to0\to m\mathbb Z\hookrightarrow\mathbb Z\twoheadrightarrow\mathbb Z/m\mathbb Z\to0$. Thus $H_2(C_m;\mathbb Z)=0$.

## Facts & Assumptions

**Given:** m is a positive integer; F is the free group on one generator, written additively; use the inherited DC and supplied-resolution convention.

[F1] A free presentation gives an exact sequence with injection from H2 into R/[F,R] and the inclusion and quotient maps on abelianizations. ([[thm-free-presentation-homology-five-term-sequence]]).

## Verification

1.1 Every element of the free group on one generator has a unique integer exponent, so identify F with $\mathbb Z$. Reduction modulo m is onto and has kernel $m\mathbb Z$. All elements of F commute, hence $[F,R]=0$, $F_{\rm ab}=\mathbb Z$, and $(C_m)_{\rm ab}=C_m$. F1 therefore gives $0\to H_2(C_m;\mathbb Z)\xrightarrow{j}m\mathbb Z\xrightarrow{\iota}\mathbb Z\to\mathbb Z/m\mathbb Z\to0$, where $\iota$ is the actual subgroup inclusion. [F1, algebra]

2.1 The inclusion has zero kernel. Exactness gives $\operatorname{im}j=0$, while j is injective, so $H_2(C_m;\mathbb Z)=0$. Under the isomorphism $\mathbb Z\to m\mathbb Z$, $a\mapsto ma$, the middle map becomes multiplication by m; its image is exactly the kernel of reduction modulo m. For m=1 this map is identity and the final quotient is zero. [step 1.1, algebra] ∎
