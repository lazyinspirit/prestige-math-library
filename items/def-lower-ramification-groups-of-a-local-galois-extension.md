---
id: def-lower-ramification-groups-of-a-local-galois-extension
kind: definition
title: "Lower ramification groups of a finite Galois local extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-finite-galois-extension-and-galois-group
justified_by:
  - thm-local-ramification-groups-normal-and-terminate
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Lemma 7.57 and Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter II, Section 10"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ and $L$ be nonarchimedean local fields with finite residue fields, and
let $L/K$ be a finite Galois extension. Normalize the discrete valuation
$v_L:L\to\mathbb Z\cup\{+\infty\}$ so that it is surjective on $L^\times$,
and write $\mathcal O_L=\{x\in L:v_L(x)\ge0\}$ and
$\mathfrak m_L=\{x\in L:v_L(x)>0\}$. Put $G=\operatorname{Gal}(L/K)$ and
$G_{-1}=G$. For each integer $i\ge0$, define the lower ramification subset
$$G_i=\{\sigma\in G:v_L(\sigma(x)-x)\ge i+1\text{ for every }x\in\mathcal O_L\}.$$
The set $G_0$ is the inertia subgroup, consisting of the automorphisms that
act trivially on the residue field $\mathcal O_L/\mathfrak m_L$; the sets
$G_i$ for $i\ge1$ are the higher lower-numbered ramification groups.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-extension-degree-and-finite-extension]]

[[def-finite-galois-extension-and-galois-group]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Lemma 7.57 and Theorem 7.58](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Jürgen Neukirch, *Algebraic Number Theory*, Chapter II, Section 10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)
