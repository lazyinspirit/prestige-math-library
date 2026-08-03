# Wave 1 linear-algebra Audit-Beta findings

## Continuity checkpoint — post-compaction, A1/A2 in progress

- Current substage: source verification and dependency-clause audit after the complete first reading of both pages and all 28 in-scope items.
- Owned artifacts: `research/audit/wave1-linear-algebra.provenance.jsonl`, `research/audit/wave1-linear-algebra.findings.md`, and `research/audit/wave1-linear-algebra.proof-contracts.json`. Only this checkpoint file exists at this point.
- Completed checks: all normative documents were read in the required order; the manifest hash was re-verified as `306d87f85dc87e7334876b298ef9b537360db1bc9655ee1f1049bce15000025e`; all 28 item statements, proofs, verifications, counterexamples, refutations, and remarks were read once; both page bodies were read; candidate literature sources were located.
- Open mathematical constraints: verify every cited target's precise source clause on disk; confirm HTTP 200 for every URL retained; finalize statement and proof provenance without treating a failed search as evidence of invention; build and validate 25 proof contracts; distinguish nonfatal page-summary decay from repair-class defects.
- Exact next action: inspect every out-of-scope dependency target's Definition, Statement, Example, or Statement-refuted clause, then reconcile those clauses with all 416 direct fact citations.

## Scope and result

The manifest contains 28 items: 20 on linear-independence-bases-and-dimension and 8 on linear-independence-bases-and-dimension-examples. Every Statement, Definition, Example, Statement refuted, proof, verification, counterexample, refutation, and Remark in those items was read. The A-page body and the empty B-page body were also read.

No mathematical falsehood and no debatable convention restatement was found. Every dependency target exists, is declared in the source item's dependency metadata, and has a Definition, Statement, Example, or Statement-refuted clause that licenses the cited use. The 49 cross-category targets were checked from their on-disk source clauses rather than inferred from their provenance tags.

## Provenance determinations

All retained literature URLs returned HTTP 200 on 2026-08-03. No statement uses established-knowledge, none, or an unverified URL. There is no provenance uncertainty requiring Alpha's independent classification concurrence.

| item | statement | proof | evidence |
|---|---|---|---|
| def-linear-independence | ai-altered | not-applicable | semantic-source |
| lem-independent-list-is-injective | ai-altered | ai-generated | semantic-source |
| lem-dependent-iff-a-vector-lies-in-the-span-of-the-others | ai-altered | ai-altered | semantic-source |
| lem-independence-has-finite-character | ai-altered | ai-generated | semantic-source |
| lem-adjoining-a-vector-outside-the-span | ai-altered | ai-altered | semantic-source |
| def-linear-basis | ai-altered | not-applicable | semantic-source |
| thm-unique-coordinates-with-respect-to-an-ordered-basis | ai-altered | ai-altered | semantic-source |
| lem-basis-iff-maximal-independent-iff-minimal-spanning | literature-derived | ai-altered | exact-source |
| thm-steinitz-exchange | ai-altered | ai-altered | semantic-source |
| cor-independent-set-is-no-larger-than-a-finite-spanning-set | ai-altered | ai-generated | semantic-source |
| thm-any-two-finite-bases-have-the-same-size | ai-altered | ai-generated | semantic-source |
| def-dimension | ai-altered | not-applicable | semantic-source |
| thm-every-independent-set-extends-to-a-basis | ai-altered | ai-altered | semantic-source |
| cor-every-spanning-set-contains-a-basis | ai-altered | ai-generated | semantic-source |
| cor-every-vector-space-has-a-basis | literature-derived | ai-generated | exact-source |
| lem-standard-basis-of-f-n | ai-altered | ai-generated | semantic-source |
| thm-dimension-of-a-linear-subspace | ai-altered | ai-generated | semantic-source |
| cor-a-linear-subspace-has-a-complement | literature-derived | ai-altered | exact-source |
| thm-dimension-formula | ai-altered | ai-altered | semantic-source |
| cor-dimension-of-a-direct-sum | ai-altered | ai-generated | semantic-source |
| ex-coordinates-depend-on-the-ordered-basis | ai-generated | ai-generated | trivial |
| ex-basis-of-the-eventually-zero-families | ai-altered | ai-generated | semantic-source |
| ex-hamel-basis-of-r-over-q | ai-altered | ai-generated | semantic-source |
| cex-independent-set-that-does-not-span | ai-altered | ai-generated | semantic-source |
| cex-spanning-set-that-is-not-independent | ai-altered | ai-generated | semantic-source |
| cex-proper-subspace-with-an-equinumerous-basis | ai-altered | ai-generated | semantic-source |
| cex-dimension-formula-fails-for-three-subspaces | ai-altered | ai-generated | semantic-source |
| fs-union-of-two-independent-sets-is-independent | ai-altered | ai-generated | semantic-source |

The exact worked construction in ex-coordinates-depend-on-the-ordered-basis is the sole truth-risk statement. It is positively identified as a locally designed witness, not merely an unsourced standard claim. Direct substitution gives

$$
(1,2)=1e_0+2e_1=2e_1+1e_0=2(1,1)-(1,0),
$$

and the nonstandard ordered basis has determinant -1, so the trivial evidence classification is complete.

## Proof contracts and citation audit

There are 25 proof-bearing items and 148 numbered steps. The contract file maps every step exactly once, records 415 distinct fact-to-source links with exact on-disk source clauses and all actual using steps, and supplies all eight boundary dispositions for each proof-bearing item.

The contract validator accepts all 25 item entries, all 148 step mappings, all exact quotes, all dependency declarations, and all boundary worksheets except for the published unused fact described below. Formula names (F1), (F2), and (F3) occurring inside proof text are encoded as step F1, step F2, and step F3 in the input maps solely to distinguish them from top-level [F#] fact labels in the validator's token namespace.

## A3 repair proposals

### (b) Citation precision — one item

cex-proper-subspace-with-an-equinumerous-basis declares:

> [L8] If dim_F V = n and U is a linear subspace of V with dim_F U = n, then U = V (thm-dimension-of-a-linear-subspace, claim 2).

No numbered counterexample step cites [L8]. Every other declared fact has at least one exact using step. The proof-contract validator therefore reports the single residual error citation-uses for [L8] to thm-dimension-of-a-linear-subspace.

The smallest mathematically neutral repair is to delete the unused [L8] fact block. Old text is the quoted block; new text is no block. The cited equality theorem is correct, but it does not license or participate in any step of this counterexample. Because deletion is owner-only under the dispatch, this proposal belongs in the A10 queue; nothing was changed.

### (c) Provenance retag — 28 items

All 28 in-scope items lack a provenance block. At A4, after approval, each should receive the statement and proof classifications in the ledger and the working literature URLs should be reconciled into sources.references. No item has a legacy authorship line to delete. These are pure retro-tags unless A3 combines one with another approved repair.

### (a) Falsehood — none

No statement, construction, proof step, counterexample computation, refutation, or mathematical Remark requires a falsehood repair.

### (d) Debatable restatement — none

No convention conflict or mathematically substantive restatement requires adjudication.

## Nonfatal published-page observation

The A page has ten long authored sections and retells the item sequence. This exceeds the canonical page-body limit of at most two short paragraphs and is published-page contract decay. Its numerical claims are currently accurate: 3 definitions, 6 lemmas, 6 theorems, 5 corollaries, 20 items, and 13 landmarks. No mathematical falsehood was found in the summary, so this prose/schema defect is recorded and not chased under the triage rule. The B page has no authored body.

## Coverage

Every numbered proof step and every dependency citation in both manifest pages was read. There is no coverage exception. No item or page file was edited, no judge was run, and no verification stamp was written.

## A4 apply record (wave 1b)

Applied the A3 order to all 28 scoped items: each now carries the ledger's
statement/proof provenance, and 31 missing reader-visible reference entries
were reconciled. `ex-coordinates-depend-on-the-ordered-basis` also carries the
schema-appropriate `generation.role: example` marker. In
`cex-proper-subspace-with-an-equinumerous-basis`, the unused `[L8]` block was
deleted and the proof contract was updated; its dependency remains because the
item cites it outside the numbered proof. That material item had its stale
judge and owner verification stamps removed. No `verification.verified` or
`verification.audited` stamp was written. Alpha/A6 independent verification is
still required.
