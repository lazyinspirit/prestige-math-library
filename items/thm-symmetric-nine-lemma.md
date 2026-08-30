---
id: thm-symmetric-nine-lemma
kind: theorem
title: "Symmetric nine lemma"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sharp-nine-lemma,
       thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Homology, Chapter XII, Section 3"
      url: "https://link.springer.com/book/10.1007/978-3-642-62029-4"
pipeline_run: frontier-24
---

## Statement

In a commutative $3 \times 3$ diagram, suppose the middle row and middle column
are short exact. If any three of the remaining four rows and columns are short
exact, then the fourth is short exact.

## Facts & Assumptions

**Given:** The commutative $3 \times 3$ diagram in the statement.

[L1] The sharp nine lemma recovers a missing outer row from the two rows below
it and the three columns ([[thm-sharp-nine-lemma]]).

[L2] Passing to the opposite category preserves abelianity and reverses exact
sequences ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L3] Transposing the indexing of a commutative $3\times3$ diagram exchanges
rows with columns while preserving commutativity and exactness.

## Proof

**Proof technique:** direct.

1.1 If the missing exact line is the top row, [L1] applies directly. If it is the bottom row, apply [L1] in the opposite category and redraw the reversed exact sequences from top to bottom; [L2] then transports the result back. [L1, L2, assume-case top, assume-case bottom]

2.1 If the missing exact line is the left or right column, transpose the diagram using [L3]. The missing column becomes an outer row, so step 1.1 applies to the transposed diagram and transports back. [L1, L2, L3, step 1.1, cases]

3.1 Thus any one of the four outer rows and columns is forced by the other three together with the short exact middle row and middle column. [step 1.1, step 2.1, cases-exhaustive] ∎
