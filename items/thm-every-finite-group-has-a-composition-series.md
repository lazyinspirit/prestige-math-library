---
id: thm-every-finite-group-has-a-composition-series
kind: theorem
title: "Every finite group has a composition series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-composition-series-composition-factors-and-length, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every finite group has a composition series ([[def-composition-series-composition-factors-and-length]]). The trivial group has composition length zero.

## Facts & Assumptions

**Given:** A finite group $G$.

[F1] A composition series is a finite strictly descending subnormal series whose factors are simple; the trivial group has the length-zero series ([[def-composition-series-composition-factors-and-length]]).

[L1] For $N\trianglelefteq G$, subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, and normal subgroups correspond under this bijection ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** induction.

1.1 If $|G|=1$, the one-term chain $G=1$ is a composition series of length zero. [F1, base]

1.2 Assume $|G|>1$ and that every group of order smaller than $|G|$ has a composition series. [ih]

2.1 The finite nonempty set of proper normal subgroups of $G$ contains $1$, so choose one, say $N$, of maximum cardinality. This is finite maximization and uses no choice principle. [step 1.2, choose]

3.1 The quotient $G/N$ is simple: a nontrivial proper normal subgroup of $G/N$ would correspond by [L1] to a proper normal subgroup of $G$ strictly containing $N$, contrary to maximality. [step 2.1, L1]

3.2 Since $N$ is proper, $|N|<|G|$, so the induction hypothesis supplies a composition series $N=N_0\triangleright\cdots\triangleright N_r=1$. [step 1.2, step 2.1, ih]

4.1 Prepending $G\triangleright N$ to the series of step 3.2 gives a strict subnormal series whose new factor $G/N$ is simple by step 3.1 and whose remaining factors are simple by induction; hence it is a composition series of $G$. [step 3.1, step 3.2, F1, discharge-induction] ∎
