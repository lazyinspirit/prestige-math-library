---
id: rem-decomposition-into-irreducible-summands-need-not-be-unique
kind: remark
title: "A decomposition into irreducible summands need not be unique even when the isotypic decomposition is"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 1.2.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Remark

Theorem
[[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]
identifies the canonical part of a semisimple decomposition: the block
$V_{(S)}$ attached to each irreducible type $S$.

What it does **not** canonically determine is a decomposition of one isotypic
block into particular irreducible summands. Inside a block with multiplicity
bigger than one, different complementary copies of the same irreducible can be
chosen. The two-dimensional trivial representation of $C_2$ already shows this:
both $ke_1 \oplus ke_2$ and $k(e_1+e_2) \oplus ke_2$ split the same isotypic
block into irreducible summands in different ways.
