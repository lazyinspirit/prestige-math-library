# Group-D owner contract reconciliation

Date: 2026-09-20
Run: `phase-2-remaining-27`
Dispatch: `owner-contract-reconcile-d`

## Scope and evidence read

I read the complete owner follow-up
`research/phase-2-remaining-27-escalation-sol-1-raw-filtration-follow-up.md`,
all fifteen item files named there, the affected entries in the batch-7 and
batch-8 page manifests and coverage files, the four batch-7 and eleven batch-8
proof-contract entries, and the exact current sections of every dependency
whose stored quotation had become stale. I also checked the group assignment:
group D owns batches 7, 8 and 6; only batches 7 and 8 are involved here.

For the optional-sampling question below I checked the complete relevant
passage in A. W. van der Vaart, *Martingales, Diffusions and Financial
Mathematics*, not a search-result excerpt:
<https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf>.
The source calls Theorem 2.42 the discrete-time optional-stopping theorem and
proves the continuous-time result separately as Theorem 4.22 by upward grid
discretization plus uniform integrability.

No item, manifest, coverage file, judge ledger, adjudication, terminal
resolution, queue, owner-licence row, pass stamp, engine-state file or tool was
edited.

## Reconciled contract entries

### Batch 7

- `def-natural-and-usual-augmented-brownian-filtrations`: changed only the
  `nonempty-choice` boundary evidence. It now anchors the completion and
  countable null-envelope/raw-representative choices to the Definition and
  identifies the intermediate time in clause (b) as canonical. Citations,
  derivations and the risk review were unchanged.
- `thm-strong-markov-property-of-brownian-motion`: regenerated `citations` and
  `derivations` from the current proof. In particular the F1/F2 quotations now
  quote the repaired ambient-completion/usual-filtration definition exactly,
  and every use maps to current steps 1.1--9.1.
- `lem-planar-brownian-annular-exit-probability`: regenerated `citations` and
  `derivations` from the current proof. The F1 quotation now uses the canonical
  continuous-path-space definition of `P_x`; F1 is mapped at step 1.1; and the
  derivation map now records the coordinate process `Z`, the almost-sure
  finiteness argument, and the corrected infinite-tie/null-event distinction.
- `def-brownian-motion-started-at-x`: no contract change was needed; its
  definition-only entry already passed the strict selected check.

All four selected batch-7 entries pass strictly with zero errors and zero
warnings.

### Batch 8

- `thm-stopping-an-ito-integral`: regenerated `citations` and `derivations`
  against the repaired localized-integral statement and current steps 1.1--4.1;
  removed the mechanical duplicate F4 citation to the same supplier.
- `thm-integration-by-parts-for-brownian-ito-processes`: regenerated
  `citations` and `derivations`, including current almost-sure local-energy,
  localization, stopped-integral and covariation interfaces and the current
  seven-step proof.
- `thm-ito-formula-one-dimensional`: regenerated `citations` and
  `derivations` against the current continuous-Ito-process, localization,
  stopping, quadratic-covariation and smoothing interfaces and current steps
  1.1--7.1.
- `thm-multidimensional-ito-formula-for-brownian-driven-processes`:
  regenerated `citations` and `derivations` against the current vector-process,
  localization, stopping and full covariance-matrix interfaces and current
  steps 1.1--7.1.
- `thm-space-time-harmonic-functions-yield-brownian-local-martingales`:
  regenerated `citations` and `derivations`; this adds the previously omitted
  F3 quotation rows for the mollifier definition and convolution theorem and
  maps the repaired lifetime-local proof at steps 1.1--5.1.
- `ex-harmonic-functions-of-planar-brownian-motion`: regenerated `citations`
  and `derivations` against the repaired lifetime-local supplier and the
  current four-step Verification.
- `thm-brownian-filtration-martingale-representation`: regenerated current
  `citations` and `derivations`, changed all six boundary references from stale
  step 11.1 to current step 12.1, corrected the choice row to name step 10.1,
  and updated the risk-review step range without weakening its status or
  conclusion. This entry remains intentionally nonpassing for the exact F12
  blocker below.
- `thm-localized-ito-integral` and
  `def-continuous-brownian-ito-process`: no contract changes were needed; both
  current entries already passed strictly.

The eight nonblocked batch-8 items listed above (excluding the martingale
representation item) pass the strict selected check with zero errors and zero
warnings. The three blocked entries below remain visible in the all-eleven
selected check; no contract text was invented to make them pass.

## Frontier and coverage reconciliation

No source-coverage row needed a change: the current batch-7 and batch-8
coverage files already include the relevant source contents and dispositions.

In `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json` I:

- added a current `verified` row from
  `ex-harmonic-functions-of-planar-brownian-motion` to
  `def-natural-and-usual-augmented-brownian-filtrations`, for the usual
  conditions and the F0-measurable null-event normalization used by the
  Example, Given and steps 1.1--3.1;
- added the analogous current `verified` row for
  `ex-logarithm-of-geometric-brownian-motion`;
- changed the logarithmic example's superseded edge to
  `def-continuous-time-stopping-time` from `verified` to `removed`, because
  that supplier is absent from the current item deps, Facts and Verification.
  The batch-8 page manifest still declares the edge, so the unified ledger
  correctly retains it as a declared edge with a `removed` review for Step 8
  to reconcile; this dispatch did not edit the manifest.

The frontier merger was run after these changes. The two new usual-filtration
edges have current reviews, and the superseded stopping-time edge remains
visible rather than being concealed.

## Blockers left uncertified

1. `ex-brownian-hitting-probability-from-an-exponential-martingale` remains a
   mathematical blocker. Fact F4 and Verification step 1.1 apply
   `thm-optional-sampling-for-bounded-stopping-times` directly to the
   continuous stopping time `tau wedge T`. The local supplier's proof is the
   discrete-time Theorem 2.42 argument (finite sums indexed by integers), and
   the authoritative source separately proves continuous optional stopping as
   Theorem 4.22 using upward discretizations and uniform integrability. The
   current example supplies neither that discretization/UI argument nor a
   continuous-time optional-stopping dependency. Because item edits are
   forbidden here, its stale contract entry was not regenerated or certified.

2. `ex-logarithm-of-geometric-brownian-motion` remains a mathematical/type
   blocker. Its F2 bound literally contains
   `xe^{-|mu-\sigma^2/2|T-|\sigma|K_T}` and the corresponding upper bound,
   where `mu` is an undefined product of symbols rather than the declared
   parameter `\mu`. The intended correction is evident but the displayed
   claim as written is ill-typed, and this dispatch cannot edit the item. Its
   stale contract entry was therefore not regenerated or certified.

3. `thm-brownian-filtration-martingale-representation` remains a carrier
   blocker after the otherwise current reconciliation. Fact F12 cites
   `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, but no current
   proof step explicitly cites F12. The strict contract grammar therefore
   rejects an empty `uses` list, while assigning step 4.1 would manufacture an
   explicit proof citation that the item does not contain. The proof's product
   law/density argument is already carried by F9, so the item must either cite
   F12 at its actual use or remove the unused fact/dependency in an authorized
   item edit. I left the exact strict failure visible.

The all-eleven batch-8 selected check currently reports 48 errors, all confined
to these three items: one F12-use error for the martingale representation item,
forty stale-map errors for the logarithmic example, and seven stale-map errors
for the hitting-probability example. The other eight selected batch-8 entries
are clean.

## Merge and validation

The batch contracts were merged into
`research/phase-2-remaining-27-proof-contracts.json` after the final contract
edits; the merger reported 980 scoped items from the fifteen batch contract
files. A direct comparison of all fifteen affected entries found no mismatch
between their batch contract and merged-contract copies.

The report-only prosecheck completed with no errors. It emitted four
`count-in-prose` warnings for literal cardinalities in this evidence report;
none is a positional claim or a specification contradiction.

Repository-wide depcheck completed and failed on seven unrelated
`b-leaf-content` dependency errors, none involving an affected group-D item or
an artifact edited by this dispatch:

- `def-chern-character-of-a-complex-vector-bundle` to
  `ex-cellular-homology-of-complex-projective-space`;
- `ex-complex-k-ahss-for-complex-projective-space` to
  `ex-complex-k-ring-of-complex-projective-space`;
- `ex-euler-class-of-the-universal-oriented-two-plane` to
  `ex-chern-class-of-the-universal-complex-line-bundle`;
- `lem-ma-produces-an-uncountable-q-set` to
  `ex-cardinality-of-the-borel-sigma-algebra`;
- `ex-standard-inner-products-on-kn-ell-two-and-l-two` to
  `ex-counting-measure-and-ell-p-spaces`;
- `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`
  to `ex-c-of-a-compact-space-is-banach`;
- `ex-ito-formula-for-brownian-powers` to
  `ex-integral-of-brownian-motion-against-itself-preview`.

Scoped `git diff --check` passed for the two batch contracts, merged contract,
batch-8 frontier input, unified frontier ledger and this report.
