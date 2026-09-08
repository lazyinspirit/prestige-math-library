---
id: thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order
kind: theorem
title: "Positive integral homology is annihilated by the group order"
status: draft
origin: pipeline
deps: [lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology, lem-diagonal-bar-coinvariants-compute-group-homology]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
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

## Statement

For a finite group G and $n>0$, $|G|H_n(G;\mathbb Z)=0$, with trivial integral coefficients. Derived homology uses the inherited DC and supplied-resolution convention.

## Facts & Assumptions

**Given:** A finite group G and integer n>0.

[F1] Inclusion after transfer multiplies by the finite index ([[lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology]]).

[F2] Normalized diagonal bars compute group homology ([[lem-diagonal-bar-coinvariants-compute-group-homology]]).

## Proof

1.1 For the trivial group, every tuple of length at least two has adjacent equal vertices. Its normalized chain groups in positive degrees are consequently zero, so $H_n(1;\mathbb Z)=0$ for n>0. [F2, given]

2.1 Apply transfer to $1\le G$. Its index is $|G|$ and the composite factors through the zero group of step 1.1; F1 identifies this composite with multiplication by $|G|$. Hence it is zero. If G=1, this says the positive homology itself is zero. Degree zero is excluded: there it is $\mathbb Z$. [F1, step 1.1, algebra] ∎
