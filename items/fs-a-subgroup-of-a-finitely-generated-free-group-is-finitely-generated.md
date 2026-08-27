---
id: fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated
kind: false-statement
title: "FALSE: every subgroup of a finitely generated free group is finitely generated"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Every subgroup of a finitely generated free group is finitely generated.

## Facts & Assumptions

**Given:** The false claim above.

[L1] For a Schreier system, the nontrivial Schreier generators form a free basis
of the subgroup ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Refutation

**Proof technique:** direct.

1.1 In the free group $F(a,b)$, let $\phi:F(a,b)\to\mathbb Z$ send $a\mapsto1$ and $b\mapsto0$, and let $H=\ker\phi$. The right cosets of $H$ are $Ha^n$ for $n\in\mathbb Z$, and $\mathcal T=\{a^n:n\in\mathbb Z\}$ is a Schreier system. [given, construct]

2.1 For this system, the nontrivial Schreier generators are exactly the conjugates $a^n b a^{-n}$ for $n\in\mathbb Z$, because $s(a^n,a)=1$ and $s(a^n,b)=a^n b a^{-n}$. By [L1], this infinite family is a free basis of $H$. [L1, step 1.1, algebra]

3.1 A free basis cannot be finite when it contains infinitely many distinct elements, so $H$ is not finitely generated. This subgroup of the rank-two free group $F(a,b)$ refutes the statement. [step 2.1] ∎
