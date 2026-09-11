---
id: "lem-forcing-names-and-name-ranks-are-absolute"
kind: "lemma"
title: "Absoluteness of names and their ranks"
deps: ["def-forcing-names-and-name-rank", "thm-ordinals-and-omega-are-absolute-in-transitive-models", "lem-bounded-definitions-of-basic-set-operations"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Definition 24.1 and following absoluteness paragraph p97
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, let M be a transitive ZF model containing P. Its P-names are exactly the actual P-names that belong to M, and internal and external name ranks agree on these names. Equality of internal and external name-stage power sets is not asserted.

## Facts & Assumptions

**Given:** ZF; transitive ZF M containing P. External membership-rank induction compares pair decoding, all subnames and the rank-supremum equations without asserting equality of name-stage power sets.

[F1] [[def-forcing-names-and-name-rank]]: Names are characterized recursively by their pair entries and name predecessors; rank is the supremum of predecessor ranks plus one.

[F2] [[thm-ordinals-and-omega-are-absolute-in-transitive-models]]: Ordinalhood and finite indices agree in M.

[F3] [[lem-bounded-definitions-of-basic-set-operations]]: Kuratowski pair decoding, membership, successor and union agree for sets in M; internal ZF supplies their existence.

## Proof

1.1 Induct externally in actual membership rank on $\tau\in M$. Whether every entry is a pair with second coordinate in P is absolute by transitivity and F3. Every first coordinate sigma then belongs to M and has smaller membership rank. By induction sigma is internally a name iff it is actually a name. F1 characterizes namehood by exactly these entry conditions in both universes; its stage-bound converse is available internally in M because M satisfies ZF. Thus namehood agrees, including the empty name. [F1, F3, given]

2.1 For a name tau, its internal set of predecessor ranks plus one exists by internal Replacement. The induction hypothesis identifies each predecessor rank, and F2 and F3 identify ordinal successors and the union giving the supremum. Both rank recursions consequently give the same value at tau. The empty predecessor set gives zero on both sides. No comparison of the full power sets at a name stage entered either induction. [F1, F2, F3, step 1.1] ∎
