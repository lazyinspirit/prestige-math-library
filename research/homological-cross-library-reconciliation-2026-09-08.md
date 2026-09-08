# Homological algebra cross-library reconciliation

Scope: published HA items and the HA-18–HA-24 future supplier block, with
cross-category consumers. Published items and library pages remain read-only.

## Repairs

- Replaced HA-18–HA-23 serial dependency placeholders with exact external
  suppliers and the preceding row inputs used by their prose proof routes.
  HA-24's explicit additive-category contracts are retained.
- Added the Tor/flatness A page to HA-18's prose, local page manifest and
  canonical prerequisites. Right-side flatness is not output projectivity.
- Bound HA-21's finite replacement argument to the published left-Noetherian
  module theorem and positive-index syzygy criterion. The similarly titled
  commutative-only complex-analysis lemma is not an adequate substitute.
- Bound HA-23's total/termwise Hochschild comparison to HA-15's exact
  finite-filtration abutment theorem. Negative Hochschild degrees do not
  justify an unqualified first-quadrant invocation. The source proof is
  [Stacks 012K, Lemma 12.24.11](https://stacks.math.columbia.edu/tag/012K).
- Rechecked the distinct perfect-complex and bounded-derived K-zero
  comparisons against [Stacks 0FJG](https://stacks.math.columbia.edu/tag/0FJG).
  Source consultation is recorded in the HA source manifest.

## Published repairs deferred to Phase 3

Two published items consume the B example
`ex-a-degreewise-split-sequence-with-nonzero-connecting-map`:

- `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor`;
- `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor`.

Neither has further published consumers. Both can instead use the published
A-page cone-sequence and cone-connecting-map theorems, specializing inline to
the identity of Z[0]. The scaffold specifies the full sign-change witness.
No new pair is needed and no published proof was edited.

## Body-level cross-category scouting

A repository search for Soergel, Kazhdan–Lusztig, Rouquier, Khovanov, quantum
groups, braid groups, Hochschild, KLR, crystal bases and Grothendieck groups
also checked likely unlinked cross-track appeals. The published free-presentation
five-term lemma does appeal to an external LHS sequence, but its repair is
already assigned to `thm-free-presentation-homology-five-term-sequence` in
the group-theory scaffold and ledger. Do not restore the withdrawn generic
HA five-term route or create a duplicate Phase-2 obligation.

The published tensor-category and category-O Grothendieck-group definitions
already give their own generators-and-relations constructions. They do not
consume future HA-19. HA-19 generalizes the shared construction for new
consumers; it does not retroactively make those definitions unpublished.
The keyword pass is targeted scouting, not a complete semantic proof audit.

## Phase-2 disposition

All seven HA enrichment pairs remain registered future scaffolds. None of
their 92 proposed items has an explicit direct or transitive published
consumer in the combined graph. Their planned braid, quantum, KL and
symmetric-group consumers remain in the cross-track inventory. This landing
adds no Phase-2 root. Tor and the HA-15/HA-16 spectral-sequence suppliers are
already covered by the provisional Phase-2 inventory; Tor is page-release-only.

`research/audit-four-track-dependencies.mjs` checks actual YAML, aliases,
proposed inventories and page prerequisites. It deliberately exposes
prose-only supplier boundaries: the HA-15 abutment item has an exact prose
owner but is not yet authored. It does not certify unpublished proofs or
unlinked mathematical appeals in published proof bodies. Recorded results
are never admissible suppliers.
