# Batch 14 authoring notes — APP-RATIONAL

## Scope and evidence

Run: `numerical-analysis-remaining-71-2026-10-17` · batch 14 · pair
`barycentric-rational-and-aaa-approximation` plus its examples page. The
scaffold inventory contains 26 A items and 3 B examples (29 total). The batch
was scheduled at dependency level 1 with prerequisite batch 4 and scheduling
input SHA-256 2aed71642cb28e23c2603f054827734cae6e6d98ce20c180147cde12f1a2e064.
The A-page item dependency levels recompute to 0–8; local suppliers precede their
consumers. The page cap is not approached.

Read `CLAUDE.md`, `SCHEMA.md`, every `WORKFLOW.md` chunk, the complete assigned
design section, the matching `plan-spec.json` entries, owner direction, batch
14 dependency-level input, and the full APP-RATIONAL proof packet. Source
coverage is `numerical-analysis-remaining-71-2026-10-17-batch-14.coverage.json`;
fetch hashes are recorded there. The full text was inspected for Floater–
Hormann, AAA, Berrut–Trefethen, ATAP Chapter 5, and Gonnet–Güttel–Trefethen.
The FH author preprint and complete AAA and Padé papers were read at the
locators recorded in coverage. ATAP provides the book treatment. Each source
result has an inline or explicit out-of-scope disposition. The earlier FH
published-paper endpoint's one-page JavaScript/security challenge is retained
as source history at
https://www.inf.usi.ch/hormann/papers/Floater.2007.BRI.pdf; the historical
report has no timestamp, so none is reconstructed. The full author-hosted
17-page preprint was retrieved and verified instead.
No source remains unresolved.

## Planning conflicts and reconciliation

- The design section L1320 declares an NA-10 to polynomial-interpolation page
  edge, while the plan-spec and dispatch `requires` list SVD and Minimax and do
  not list the polynomial page. The published polynomial interpolation page
  and exact `def-cardinal-polynomial-interpolation` /
  `thm-cardinal-polynomial-interpolant-exists-uniquely` bodies were inspected
  and are direct item suppliers to three local interpolation lemmas. No extra
  page-level `requires` token was added. This resolves the mathematical input
  but leaves the design-vs-manifest page-edge question for owner reconciliation.
- The design's old sentence says no external canonical item is consumed as a
  proof premise. The plan-spec and dispatch require the published SVD page,
  and the exact SVD theorem is a premise of the AAA minimum-residual result.
  The canonical published theorem and algorithms are reused without
  duplication. The pair does not use a Minimax theorem as an item-level premise.
- The dispatch and plan-spec require the Minimax page (batch 4); its current
  page remains draft. This unresolved page-level edge is recorded with exact
  supplier ID in `batch-14.cross-batch-dependencies.json`. No authored item
  claim depends on a Minimax conclusion. Item-level proofs and contracts are
  complete; page dependency closure remains pending.
- The owner direction and updated plan-spec supersede the stale generic
  C^(d+1)-seminorm Floater–Hormann rate. The batch proves the requested BV and
  C^(d+2) bounds and includes the uniform-grid counterexample to the false
  seminorm-only estimate.

## Mathematical checks and corrections

The FH no-pole proof is local and covers node values, every open node gap, and
both exterior intervals. The C^(d+2) parity bounds retain the even-`n-d`
leftover term and the source's `d=0` local ratio. The BV extension is proved
from the simplex formula and total variation; it is not attributed to the
FH paper. The uniform-grid counterexample fixes `d`, uses mesh ratio one, and
makes the normalized error grow logarithmically.

The planning packet's I3 adjacent-weight ratio has an extra leading minus.
Direct cancellation of factors gives
`mu_(i+1)/mu_i = (x-x_i)/(x_(i+d+1)-x)`, which is negative on an I3 block
inside a node gap. The local gap-partial-sum and no-pole proofs use this
corrected ratio; the backward I1 ratio is checked separately.

The barycentric denominator definition initially depended on its own support
interpolation proposition. A local polynomial nonzero lemma now precedes the
definition; the proposition depends on both. Definitions and algorithm
carriers are not justified by results that consume them. Local polynomial
uniqueness now cites the published cardinal interpolation theorem rather than
duplicating its root-count proof.
The explicit natural-number induction suppliers and the compact-interval
extreme-value supplier are declared where used; all resulting arguments stay
choice-free.

AAA is an exact-arithmetic finite-sample procedure. Its unit minimum-singular
vector is selected deterministically at every multiplicity; zero weights,
pole status, QR-budget exhaustion, tolerance, and support-budget branches are
explicit. The Padé algorithm uses specified exact Gaussian elimination,
reports inconsistent and rank-deficient systems separately, and its theorem
proves local Taylor order only for a solved normalized system.

The transfer-function example specifies a one-sweep exact SVD budget and
works through the 2-by-2 Householder and shifted-QR path; the small-sample
example specifies a zero sweep budget because its tolerance branch returns
before any SVD call.

## Handoff blockers and readiness scope

The only unavailable cross-batch supplier is page-level:
minimax-approximation-and-remez-algorithms (batch 4) is still draft. It affects
the A-page requirement relationship, not an item proof premise. The separate
NA-10 discrepancy is page metadata: the polynomial interpolation page is
published and its exact theorem is used as an item dependency, while its
page-level presence in the required-page list differs between the prose
design and dispatch/spec and needs owner reconciliation.

The authored item bodies and proof contracts are complete for the declared
item dependencies. This record is Step 1 authoring evidence, not proof
acceptance or independent approval. Run-wide checks may remain open because
other batches still have empty scaffold inventories; no other batch files or
engine state were changed here.

## Final scoped checks and run-wide blockers

- Batch-14 dependency calculation: 29 items, levels 0–8, no cycles or label
  mismatches. The run-wide dependency command still reports 59 other empty
  page inventories and 13 dependency-level mismatches outside batch 14. The
  mismatched items are alg-incremental-planar-delaunay-edge-flips,
  alg-incremental-three-dimensional-regular-cavity-repair,
  alg-randomized-history-dag-point-location,
  thm-incremental-planar-delaunay-correctness-and-termination,
  thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination,
  thm-randomized-history-dag-expected-location-cost,
  thm-three-dimensional-delaunay-output-size-quadratic,
  ex-cocircular-four-site-lexicographic-tie,
  ex-collinear-sites-lower-dimensional-output,
  ex-scattered-linear-interpolation-over-delaunay-cell,
  thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas,
  ex-same-center-s-orbital-integrals, and
  ex-godunov-fv-captures-stationary-burgers-shock.
- Strict proof-contract check: 22/22 proof-bearing items pass with no
  warnings. Proof layout on the 29 explicitly changed item files: 68 steps,
  0 defects. Source fetch check: 5/5 sources fetch-verified and resolved,
  0 new stamps.
- Run-wide proof-contract coverage cannot load the incomplete frontier; its
  current missing external item is
  alg-randomized-history-dag-point-location, outside this pair. The batch
  contract scope itself matches all 22 proof-bearing items on these pages.
- Run-wide Step 1 check reports 865 items, 487 ready, 433 work entries, and
  remains open elsewhere. All 29 batch-14 item receipts are current, ready,
  and hash-valid; none is listed as work. The page-level Minimax prerequisite
  remains pending as recorded above.
- The three FH rate/counterexample item IDs use canonical lowercase slugs to
  satisfy the repository's frontier item-ID validator; their item files,
  manifests, source coverage, contracts, and readiness records are aligned.

## Owner interface reconciliation after native writer drain

At 2026-10-17T12:33:27.773930+00:00, root verified genuine native batch14 completion at 2026-10-17T12:30:47.391Z. The controlling APP-RATIONAL design now matches the unchanged plan-spec/manifest/page required-page list (published SVD plus same-frontier Minimax). Existing published polynomial interpolation remains an explicit item supplier; no new pair or duplicate method is needed. Minimax draft status is the intended frontier state and does not by itself establish a missing mathematical supplier; its internal page-edge review will close with the consolidated dependency handoff. The original author's pending finding is preserved above. No item Statement, proof, dependency, existing readiness record or proof acceptance stamp was changed by this reconciliation. The original design excerpt and exact disposition are preserved under owner-planning-integration.
