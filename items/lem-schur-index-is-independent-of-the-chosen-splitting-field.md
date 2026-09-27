---
id: lem-schur-index-is-independent-of-the-chosen-splitting-field
kind: lemma
title: "The Schur index is independent of the splitting field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-schur-index-of-an-irreducible-character, lem-base-change-of-intertwiner-spaces, thm-scalar-extension-of-an-irreducible-finite-group-representation, cor-change-of-rings-for-extension-of-scalars, cor-cyclotomic-field-splits-a-finite-group, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (lem-schur-index-is-independent-of-the-chosen-splitting-field). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Proposition 2.3.13 and Corollary 2.5.4"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Statement

Assume the Axiom of Choice. For an irreducible character $\chi$ of a finite group, the common multiplicity
in the scalar-extension orbit used in
[[def-schur-index-of-an-irreducible-character]] is unchanged when the finite
Galois splitting field is replaced by a larger finite Galois splitting field.

## Facts & Assumptions

**Given:** AC, $K=\mathbb Q(\chi)$, the irreducible $K$-module $V$ attached to $\chi$ by the definition, and finite Galois splitting fields $E\subseteq L$ over $K$.

[L1] Scalar extension is associative: $L\otimes_KV\cong L\otimes_E(E\otimes_KV)$ ([[cor-change-of-rings-for-extension-of-scalars]]).

[L2] Over either splitting field, an irreducible $K$-module extends as one Galois orbit with a common multiplicity ([[thm-scalar-extension-of-an-irreducible-finite-group-representation]]).

## Proof

**Proof technique:** direct.

1.1 Under AC, the attached $V$ exists by [[def-schur-index-of-an-irreducible-character]]. Write $E\otimes_KV$ as $m$ times its orbit of pairwise inequivalent absolutely irreducible constituents, using [L2]. [L2, given]

2.1 Each constituent remains irreducible after extension from $E$ to the splitting field $L$, and distinct constituents remain distinct; therefore [L1] writes $L\otimes_KV$ with the same coefficient $m$. [L1, step 1.1]

3.1 Applying [L2] directly over $L$ identifies its common multiplicity with that coefficient.  Hence both choices give $m$, proving independence. [L2, step 2.1] ∎
