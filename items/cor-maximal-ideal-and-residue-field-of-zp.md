---
id: cor-maximal-ideal-and-residue-field-of-zp
kind: corollary
title: "The maximal ideal and residue field of Z_p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-zp-is-the-valuation-ring-of-qp, thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, 18.782 Lecture 8, Remark 8.2"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes8.pdf"
pipeline_run: null
---

## Statement

The unique maximal ideal of $\mathbb Z_p$ is $p\mathbb Z_p$, and the quotient
$\mathbb Z_p/p\mathbb Z_p$ is canonically isomorphic to $\mathbb F_p$.

## Facts & Assumptions

**Given:** $\mathbb Z_p$ viewed inside $\mathbb Q_p$.

[L1] $\mathbb Z_p$ is the subring of $\mathbb Q_p$ cut out by $|x|_p \le 1$
([[cor-zp-is-the-valuation-ring-of-qp]]).

[L2] $\mathbb Z_p$ is also the compatible-residue inverse limit
([[thm-p-adic-completion-agrees-with-the-fraction-field-of-zp]]).

## Proof

**Proof technique:** direct.

1.1 An element $x \in \mathbb Z_p$ is a unit exactly when $|x|_p = 1$: if $|x|_p = 1$ then $|x^{-1}|_p = 1$ as well, so $x^{-1} \in \mathbb Z_p$ by [L1]; if $|x|_p < 1$ then $|x^{-1}|_p > 1$, so $x^{-1} \notin \mathbb Z_p$. Therefore the nonunits are precisely the elements with $|x|_p < 1$, which is the principal ideal $p\mathbb Z_p$. [L1, given, algebra]

2.1 In the compatible-residue model of [L2], multiplication by $p$ is exactly the condition that the first residue coordinate is $0$. Therefore the quotient by $p\mathbb Z_p$ remembers only the first residue class, giving a canonical map $$\mathbb Z_p/p\mathbb Z_p \to \mathbb Z/p\mathbb Z = \mathbb F_p.$$ This map is bijective because every residue class lifts to a compatible system and two systems differ by an element of $p\mathbb Z_p$ exactly when their first coordinates agree. [L2, step 1.1, algebra]

3.1 Since the quotient by $p\mathbb Z_p$ is the field $\mathbb F_p$, the ideal $p\mathbb Z_p$ is maximal, and step 1.1 shows it contains every nonunit, so it is the unique maximal ideal. [step 1.1, step 2.1] ∎
