# Step-3b global structural repair — 2026-09-26

The live `frontier-35-ten-categories` controller was paused during Step 3b. A
read-only `depcheck --json` diagnosis found six B-leaf dependencies, three
backward well-definedness references, and one Brauer page cycle, alongside 333
published proved-item audit-status failures and nine published recorded-result
source-check failures. The initial diagnostic is at
`/tmp/frontier35-depcheck.json`; the complete set of published-status IDs can
be recovered from that JSON or a fresh `depcheck --json`. The publication
status failures are separate from the structural repairs below and require
fresh authorized audit/source-check evidence after all content is stable.

## Run-owned draft repairs

- `lem-group-rings-have-invariant-basis-number-via-augmentation` now derives
  that the coefficient ring `Z` is nonzero directly from the published integer
  construction and operations: `0=[(0,0)]` and `1=[(1,0)]` are distinct since
  the natural numbers are `0=∅` and `1={0}`. Published `thm-int-comm-ring`
  supplies commutativity and the unit. This replaces the B-only integer-domain
  example without changing the augmentation/matrix proof.
- `lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group`
  now constructs path transport on fundamental groups from earlier published
  path, homotopy, and loop-group definitions. Its explicit contraction of
  `lambda * reverse(lambda)` and reparametrisation show that transport is an
  isomorphism; two paths differ by inner conjugation, which its existing K1
  fact kills on Whitehead groups. The late B-only basepoint example is removed
  from the dependency and proof contract.
- Batch-2 manifests and the two exact-citation proof contracts mirror these
  changes. The existing Step-3 author decisions and certificates must be
  refreshed only after all selected writers drain; this note is not a receipt.

## Published content and page repairs

- `ex-maximal-cohen-macaulay-module` and
  `ex-parameter-sequence-regular-in-a-hypersurface` previously imported
  `ex-formal-power-series-ring-regular` from a later B page. Each now proves
  the needed formal-series Noetherian local and dimension facts within its
  own Verification. For `r=1,2` or `r=1,2,3`, respectively, the coordinate
  localization of `k[x_1,...,x_r]` is Noetherian local of dimension `r` by
  the published polynomial Noetherian/dimension theorems and its coordinate
  prime chain. Its maximal-adic completion is `k[[x_1,...,x_r]]` by compatible
  truncations; the earlier published completion theorems preserve Noetherian
  locality and dimension under the examples' existing AC premise. The second
  example also notes the lowest-homogeneous-part proof that these series
  rings are domains. Their claims and examples remain unchanged.
- `fs-the-cartan-matrix-equals-the-decomposition-matrix` now refutes the
  universal statement directly with `C2` at `p=2`. Over the characteristic-zero
  fraction field, `g^2=1` splits every representation into `+1/-1`
  eigenspaces, yielding two ordinary irreducibles. The identity is its only
  `2`-regular class, so the published Brauer count gives one modular simple.
  The decomposition matrix is `2x1`, whereas the Cartan matrix `D^T D` is
  `1x1`. No B-page matrix example is used.
- `lem-block-idempotents-lift-uniquely-from-kh-to-oh` was a genuine supplier
  of the Brauer-character page's block-partition theorem but lived on the
  later Brauer second-main page. Its published item body is unchanged. Its
  sole home and plan row now immediately follow the block definition on the
  earlier Brauer-character A page; the old page row is removed. This breaks
  the remaining page cycle without dropping a mathematical premise.
- `def-complex-exponential` and
  `def-sine-and-cosine-by-power-series` cite earlier convergence lemmas for
  totality. Those lemmas do not use the definitions, so each is now a direct
  prerequisite rather than `justified_by`. Conversely,
  `thm-probability-convergence-is-metrized-by-d-zero` uses the proposed formula
  introduced by `def-probability-convergence-metric`; the theorem now declares
  that definition directly, preserving the forward well-definedness edge.
  The published plan rows mirror the changed edges.

The six edited published proof/definition carriers above received only a
bounded local repair, not an independent audit or renewed publication stamp.
Their canonical defect dispositions are in
`research/published-consumer-supplier-ledger.md`. The older block-lifting
lemma's proof and statement were not edited, and its page rehome is a page
dependency repair.

## Checks and remaining obligations

Focused proof contracts for the two batch-2 items passed. Focused
`rendercheck` passed all ten edited item/page carriers. Whole-plan
`validate-plan.mjs research/plan-spec.json` passed with acyclic order, no
B-page dependency, and no unresolved ID among pages with item lists. Focused
precheck initially requested canonical numbering of the two depth examples;
that numbering was adopted and both examples then passed. Run one final
targeted precheck and depcheck after the concurrent braid writer drains.

The latest structural diagnostic after the Brauer rehome had zero structural
errors; only 334 `published-unaudited` and nine `published-unchecked` errors
remained, including one newly changed two-strand braid theorem from the
concurrent owner repair. These 343 publication evidence failures are fatal in
Step 3b's bare repo-wide depcheck gate. The historical ledger and JSONL
receipts document many bounded repairs, but cleared stamps cannot be restored
mechanically: 321 of the original 333 proved-item subjects had changed bodies
relative to `ca0bbe31d`, while others had changed metadata, publication
status, or were new. Recertify only after all authoring and published repairs
are stable; then rerun the same rejecting gate before Step 4.
