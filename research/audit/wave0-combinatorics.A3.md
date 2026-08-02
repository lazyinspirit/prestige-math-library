# Wave 0 · combinatorics — A3 orchestrator adjudication (2026-08-02)

Verified from disk: D1's "only by coincidence of this example" clause at step
3.1 of `cex-a-count-that-double-counts` (the identity is structural:
S ↦ S ∪ {0,1} bijects the subsets of X∖{0,1} with A₀∩A₁ for any finite X
containing 0 and 1 — an elementary, checkable derivation); D2's two unused
facts ([L6] referenced only by a Remark; [L3] referenced nowhere), matching
the 2 `proof-contract --strict` errors.

## Decisions

- **Provenance retags: APPROVED, all 40.** The 7 `ai-generated`/`trivial`
  rows are bespoke worked instances/witnesses with positive novelty
  rationales — exactly what the positive-determination rule reserves the
  label for — and the corpus-wide `deps` scan shows zero consumers (no
  genrisk cone opens). The borderline
  (`cex-same-cardinality-without-a-canonical-bijection`) goes to Alpha at A6
  for label review. The 4 falsehood items reclassified `ai-altered`/
  `semantic-source` (sourced statement with a sourced hypothesis deleted) are
  correct under the new rule.
- **D1 APPROVED (class a, unambiguous falsehood, elementary derivation)** —
  replace the "only by coincidence" clause with the structural fact as
  proposed; material change, delete stale judge + audited stamps.
- **D2 APPROVED as deletions** — `fs-the-product-rule-makes-a-product-larger`:
  delete [L6] from Facts, keep the Remark's reference as an inline wikilink
  `[[thm-cantor-powerset]]` and keep the deps entry for it (same ruling as
  abstract-algebra D1: no step-padding to justify an unused edge).
  `fs-stars-and-bars-holds-for-every-number-of-parts`: delete the unreferenced
  [L3]; if its "true statement" content is not already in a Remark, carry it
  there with the inline wikilink, and keep/drop the `thm-stars-and-bars` deps
  entry accordingly.
- **D3 APPROVED** — the three fact-restatement fixes (restore the
  `binom(m,1)=m` clause Pascal's [L2] needs with its correct license;
  reattribute Vandermonde's [L7] cardinality clauses; point the two
  `lem-nat-mult-identity` cites at `def-nat-multiplication`), smallest
  corrections.
- **D4 partially APPROVED** — fix the three title/URL mismatches at A4; the
  corpus-wide Stanley/Halmos about-the-book URL pattern goes to the A10
  owner queue (also flagged by the dedekind batch for Rudin).
- **D5** — the 8-paragraph legacy summary: recorded, not chased (forward-
  looking contract). The `ex-anagrams` Remark's wrong invariance clause for a
  true claim: APPROVED, minimal citation fix.
- **D6** — no decay; no action.
