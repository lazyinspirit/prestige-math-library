# Wave 1 number-theory Audit-Beta findings

## Continuity checkpoint — 2026-08-03

- Current substage: A1 source matching and A2 contract assembly after the complete item-by-item mathematical read.
- Owned artifacts: `research/audit/wave1-number-theory.provenance.jsonl`, `research/audit/wave1-number-theory.findings.md`, and `research/audit/wave1-number-theory.proof-contracts.json`.
- Completed checks: all 27 manifest items and both page texts read; all numbered proof steps read skeptically; every direct fact citation and every linked dependency target checked on disk; arithmetic witnesses checked; proof-bearing scope determined as 25 items.
- Open constraints: finish reputable-source matching with HTTP-200 verification; encode exact source clauses and honest step-use maps; record the stale p-adic example quotation, page-summary decay, unused Fact rows, and nonfatal sub-30-second gaps; do not edit published items or pages.
- Exact next action: complete the literature searches and URL checks, classify every statement and proof, then generate and validate the provenance ledger and proof-contract artifact.

## Scope and outcome

The scope of record is the 27 manifest items on `primes-and-the-fundamental-theorem-of-arithmetic` and `primes-and-the-fundamental-theorem-of-arithmetic-examples`. There are 25 proof-bearing items; the two definitions have no separate proof section. No mathematical falsehood, invalid inference, counterexample to an asserted true claim, or incorrect dependency proposition was found.

All 18 distinct literature URLs in the provenance ledger returned HTTP 200 after redirects. No item uses `established-knowledge`, so no provisional classification needs Alpha concurrence. The sole URL-free row is the positively identified bespoke worked computation `ex-prime-factorisation-worked`, recorded as `ai-generated` with `trivial` evidence after every displayed calculation was recomputed.

## A1 classifications

| Item | Statement | Evidence | Proof |
|---|---|---|---|
| `def-prime` | ai-altered | semantic-source | not-applicable |
| `lem-prime-not-dividing-is-coprime` | ai-altered | semantic-source | ai-generated |
| `thm-euclids-lemma` | literature-derived | exact-source | literature-derived |
| `cor-prime-iff-euclid-property` | ai-altered | semantic-source | ai-generated |
| `cor-euclids-lemma-for-finite-products` | ai-altered | semantic-source | ai-generated |
| `lem-every-integer-above-one-has-a-prime-divisor` | ai-altered | semantic-source | ai-generated |
| `thm-prime-factorisation-exists` | ai-altered | semantic-source | ai-generated |
| `thm-fundamental-theorem-of-arithmetic` | ai-altered | semantic-source | ai-generated |
| `cor-factorisation-of-a-nonzero-integer` | literature-derived | exact-source | ai-generated |
| `thm-euclid-infinitude-of-primes` | ai-altered | semantic-source | ai-altered |
| `def-p-adic-valuation` | ai-altered | semantic-source | not-applicable |
| `lem-p-adic-valuation-basic` | ai-altered | semantic-source | ai-generated |
| `lem-p-adic-valuation-additive` | ai-altered | semantic-source | ai-generated |
| `thm-canonical-prime-factorisation` | ai-altered | semantic-source | ai-generated |
| `lem-divisibility-via-valuations` | ai-altered | semantic-source | ai-generated |
| `thm-gcd-and-lcm-from-valuations` | ai-altered | semantic-source | ai-generated |
| `lem-p-adic-valuation-on-q` | ai-altered | semantic-source | ai-generated |
| `cor-rational-root-of-an-integer-is-an-integer` | ai-altered | semantic-source | ai-generated |
| `ex-prime-factorisation-worked` | ai-generated | trivial | ai-generated |
| `ex-two-is-the-only-even-prime` | literature-derived | exact-source | literature-derived |
| `ex-no-rational-square-root-of-three` | ai-altered | semantic-source | ai-generated |
| `ex-arbitrarily-long-runs-of-composites` | ai-altered | semantic-source | ai-altered |
| `cex-hilbert-monoid-factorisation-not-unique` | ai-altered | semantic-source | ai-generated |
| `cex-calling-one-prime-destroys-uniqueness` | literature-derived | exact-source | ai-altered |
| `fs-euclids-product-of-primes-plus-one-is-prime` | literature-derived | exact-source | ai-altered |
| `fs-n-squared-plus-n-plus-forty-one-is-always-prime` | ai-altered | semantic-source | ai-altered |
| `fs-every-fermat-number-is-prime` | ai-altered | semantic-source | ai-altered |

The detailed convention deltas, positive novelty determination, source URLs, and proof-provenance rationales are in `wave1-number-theory.provenance.jsonl`.

## A2 repair proposals

### Citation-precision: stale quotation in `lem-p-adic-valuation-on-q`

The first Remark currently says that `ex-p-adic-ultrametric` “said it did not have” general well-definedness and quotes the target as saying the general valuation needs primality and unique factorisation, “neither of which this item develops or assumes.” The current target says the opposite: those results “are therefore available here”; it nevertheless develops \(p=2\) from parity alone.

Proposed replacement:

> **Relation to the published \(2\)-adic example.** The published [[ex-p-adic-ultrametric]] records that the general \(p\)-adic machinery is available, but nevertheless develops \(p=2\) from parity alone. The present lemma supplies the general algebraic extension: representation-independence is exactly the assertion that \(ad=cb\) forces the two candidate values to agree.

Class: citation-precision. Source: the current on-disk Example section of `ex-p-adic-ultrametric`. This is a definite A3 proposal.

### Citation-precision: the same stale quotation in the A-page summary

The paragraph beginning “Two consequences that reach outside this page” repeats the obsolete claim and quotation. If repaired independently of the complete summary rewrite below, replace its discussion of the target by:

> The published [[ex-p-adic-ultrametric]] records that the general machinery is available, but nevertheless develops \(p=2\) from parity alone; [[lem-p-adic-valuation-on-q]] supplies the quotient-field formula and its representation-independence.

Class: citation-precision. The full page replacement below subsumes this repair.

### Citation-precision: unused Fact rows

Fourteen Fact rows across eleven items have direct source links but no proof step cites their label. The proof contract therefore records an empty `uses` array for all 30 linked sources rather than inventing a use:

- `lem-every-integer-above-one-has-a-prime-divisor`: L1, L7
- `cor-factorisation-of-a-nonzero-integer`: L9
- `lem-p-adic-valuation-additive`: L8
- `thm-canonical-prime-factorisation`: L10, L11, L12
- `thm-gcd-and-lcm-from-valuations`: L8
- `ex-no-rational-square-root-of-three`: L7
- `ex-arbitrarily-long-runs-of-composites`: L5
- `cex-hilbert-monoid-factorisation-not-unique`: L11
- `fs-euclids-product-of-primes-plus-one-is-prime`: L5
- `fs-n-squared-plus-n-plus-forty-one-is-always-prime`: L4
- `fs-every-fermat-number-is-prime`: L5

The smallest repair is to remove each redundant row, except where the owner instead wants an actual proof step to cite a genuinely used clause. Because deletion is owner-only, these rows belong in the A10 queue. Class: citation-precision.

### Unambiguous nonmathematical falsehood in the A-page summary

Old text:

> No ring vocabulary appears anywhere on this page.

This is false on disk. The page and its items repeatedly say “commutative ring,” cite `thm-int-comm-ring`, and discuss ring constants and monoid powers. A minimal faithful replacement is:

> The page works with prime integers in \(\mathbb Z\); it does not introduce the general distinction between prime and irreducible elements.

Class: unambiguous falsehood, but nonmathematical and nonfatal under triage. The full page replacement below subsumes it.

### Debatable A-page summary rewrite

The A-page body has 10 prose paragraphs and approximately 1,267 words rather than exactly two nonempty paragraphs of fewer than 150 words each. It also contains prohibited reading-position claims (“next page,” “far above,” “at this point”), self-survey language, and a decay-prone explicit item/landmark count. The current count is arithmetically accurate; the defect is the summary contract and unstable prose, not mathematics.

Proposed complete replacement:

> Divisibility in \(\mathbb Z\), Bézout’s identity, the gcd characterisation, and the coprime-divides-product lemma provide the arithmetic background. In particular, [[lem-coprime-divides-product]] converts coprimality into divisibility of a factor without assuming primality, while [[def-monoid-finite-product]] supplies the finite-product convention used throughout. Integer order, absolute value, and the natural-number embedding control positivity, signs, induction, and the empty product.
>
> This page defines prime integers and \(p\)-adic valuations, proves Euclid’s lemma and its finite-product form, establishes existence and uniqueness of prime factorisation, and proves that the primes are infinite. It then expresses canonical factorisation, divisibility, gcd, and lcm through valuations, extends \(v_p\) from nonzero integers to nonzero rationals, and derives that a rational \(k\)th root of an integer is itself an integer. The companion examples apply these results to explicit factorisations, irrational roots, composite runs, and failures of naive uniqueness and primality claims.

Both proposed paragraphs are under 150 words. Class: debatable restatement. The rewrite and the reading-order deletions require owner action at A10.

## Nonfatal observations under the 30-second rule

- `thm-euclid-infinitude-of-primes` introduces the finiteness assumption before proving clause 1, although the clause-1 derivation does not use it; the scope is immediately recoverable.
- `thm-canonical-prime-factorisation` obtains \(v_q(n)=0\) from \(q\nmid n\) and \(v_q(n)\ge1\iff q\mid n\), leaving the elementary natural-number dichotomy implicit.
- `ex-prime-factorisation-worked` applies the canonical-factorisation and gcd/lcm clauses after asserting that \((2,3,5,7)\) covers all prime divisors of 360 and 84; repeated Euclid’s lemma from the displayed products supplies the omitted one-line check.
- `ex-two-is-the-only-even-prime` concludes that every other prime is odd without defining “odd” locally; the even/odd dichotomy is conventional and immediate.

These are explicitly nonfatal and do not open repair proposals.

## Proof-contract validation

The contract contains 25 scoped items, 532 exact Fact-to-source clauses, 242 numbered steps mapped exactly once, and all 200 eight-case boundary dispositions. `tools/proof-contract.mjs --strict` checks all 25 contracts and reports only the 30 `citation-uses` errors caused by the 14 published unused Fact rows above. It reports no quote mismatch, missing source, undeclared dependency, step-map error, boundary error, or warning.

`tools/finite-smoke.mjs` passes with no applicable finite-model checks. `tools/risk-report.mjs` routes 3 items as high and 22 as critical for the standard independent risk review, with no tool error; this mechanical routing is not an unresolved-defect escalation.

## Defect and escalation totals

- Unambiguous falsehood: 1 nonmathematical A-page scope claim; 0 mathematical falsehoods.
- Citation-precision: 16 defects: 2 stale quotations and 14 unused Fact rows.
- Provenance retag: 0 mis-tags; the 27 new A1 classifications are audit results, not corrections to existing tags.
- Debatable restatement: 1 A-page summary rewrite.
- Escalations to Alpha for undecidable provenance or mathematics: 0.

No repair was applied; A4 was outside this dispatch.

## Coverage

Every mathematical-content item in both manifest pages was classified. Every one of the 242 numbered proof, verification, counterexample, and refutation steps was read skeptically. Every Fact citation, every direct dependency citation, and every cited target’s canonical on-disk mathematical section was read and checked for hypotheses, quantifiers, direction, and legality. Both page bodies and all Remarks were read. There is no coverage exception.

## A4 apply record (wave 1b)

Applied the A3 order to all 27 scoped items: each now carries the ledger's
statement/proof provenance, and 31 missing reader-visible reference entries
were reconciled. `ex-prime-factorisation-worked` also carries the
schema-appropriate `generation.role: example` marker. The 14 approved unused
Fact rows were deleted across 11 items, their proof contracts were updated, and
23 dependency edges that became genuinely unused were removed. The A-page
scope falsehood was removed as part of the approved exact-two-paragraph summary
rewrite. The 11 materially changed items had stale judge and owner verification
stamps removed. No `verification.verified` or `verification.audited` stamp was
written. Alpha/A6 independent verification is still required.

The refreshed corpus graph contradicts A3's cone-0 premise for
`ex-prime-factorisation-worked`: it has one direct-citation consumer,
`lem-p-adic-valuation-additive`, through that item's forward-reference/wikilink.
The `genrisk --receipt` gate therefore leaves its disposition pending for
Alpha/A6 rather than treating it as a contained leaf.
