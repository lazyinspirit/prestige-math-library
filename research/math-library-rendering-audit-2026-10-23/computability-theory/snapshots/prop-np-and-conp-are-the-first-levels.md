---
id: prop-np-and-conp-are-the-first-levels
kind: proposition
title: "Np and conp are the first levels"
status: published
origin: pipeline
deps: [def-polynomial-hierarchy-levels, def-np-by-verifiers, def-conp]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §5.2 Remark5.5, p92."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

$\Sigma_1^p=NP$ and $\Pi_1^p=coNP$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] First-level existential and universal polynomial-time predicates define the first hierarchy levels. ([[def-polynomial-hierarchy-levels]]).

[F2] NP consists of languages admitting polynomial-time verifiers with polynomially bounded certificates. ([[def-np-by-verifiers]]).

[F3] coNP consists of complements of NP languages in the same binary-string universe. ([[def-conp]]).


## Proof

1.1 A first-level existential predicate is a polynomial-time verifier with a polynomial-length certificate, so it defines an NP language. Conversely, encode a bounded-length verifier certificate by a length field and padding; a total decoding onto all allowed certificates preserves existence and gives the first-level predicate. This includes length zero and the empty input. [F1, F2]

2.1 Negating that existential formula yields a universal formula for the complement. Conversely negating a universal formula yields an NP verifier. By the definition of coNP these are exactly the languages of $\Pi_1^p$. [F3, step 1.1] ∎
