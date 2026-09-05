---
id: ex-dirichlet-character-orthogonality-table
kind: example
title: "An orthogonality table for Dirichlet characters"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dirichlet-character-orthogonality, cor-dirichlet-character-residue-class-indicator, ex-dirichlet-characters-modulo-three-four-and-five]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Corollary 4.3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Modulo $5$, the character table from
[[ex-dirichlet-characters-modulo-three-four-and-five]] verifies both
orthogonality relations and the residue-class indicator numerically.

## Facts & Assumptions

**Given:** The four characters modulo $5$, the orthogonality theorem, and the
indicator corollary ([[ex-dirichlet-characters-modulo-three-four-and-five]],
[[thm-dirichlet-character-orthogonality]],
[[cor-dirichlet-character-residue-class-indicator]]).

## Verification

**Proof technique:** direct.

1.1 Using the four rows $(1,1,1,1)$, $(1,i,-i,-1)$, $(1,-1,-1,1)$, and $(1,-i,i,-1)$ on the unit classes $1,2,3,4$, the row inner products are $4$ on the diagonal and $0$ off the diagonal. Likewise the column sums $\sum_\chi\chi(a)\overline{\chi(b)}$ are $4$ when $a=b$ and $0$ otherwise. This is the theorem [[thm-dirichlet-character-orthogonality]] in the concrete case $q=5$. [given, algebra]

2.1 Taking $a=2$, the weighted average $\frac14\sum_\chi\overline{\chi(2)}\chi(n)$ is $1$ at the class $2$ and $0$ at the other residue classes, exactly as [[cor-dirichlet-character-residue-class-indicator]] predicts. [step 1.1, given, algebra] ∎
