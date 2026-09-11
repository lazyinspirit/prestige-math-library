# Step 5A — Alpha group h (batches 13 and 14)

Run `phase-2-next-20`, role alpha, label `5a-h`, covers 13, 14. This report is a
scoped authored-content review, not an independent judge certification, not a
source stamp, and not a whole-closure audit of inherited published material.

## Scope and outcome

- Batch 13: 36 items + 4 pages. Batch 14: 48 items + 2 pages. All 90 obligations
  were read and decided `accepted` with `defect_ids: []`.
- No item text, page text, manifest, dependency record or published item was
  edited. No repair was needed; no local definition or lemma had to be created.
- The only content edits are the 64 `risk_review` dispositions recorded in the
  two owned batch contracts during this same read (23 in batch 13, 41 in batch
  14), plus the two Step-5A artifacts.
- Decisions: `research/phase-2-next-20-alpha-h-5a-decisions.json` (90 decisions,
  engine-stamped carrier hashes).

## Review method

Every item was read in full, not from the Step 3 checklist: statement or
definition, facts/assumptions, every numbered step, boundary cases, and the
cited supplier interfaces used at the point of use. The pages were read against
their item inventories and the manifest order. For the two deep interface
theorems the route was additionally checked against authoritative published
sources (below), and the owner's independent review records already on disk
were read as context, not as a substitute for the read.

## Source evidence checked in this read

1. J. Bagaria and S. G. da Silva, "omega_1-strongly compact cardinals and
   normality", Topology and its Applications 323 (2023) 108276. Retrieved
   `https://diposit.ub.edu/bitstreams/d5caf92a-962e-496a-a31e-5630dafa67ec/download`
   (13 pp., read pp. 6-10). Lemma 2.8 (pp. 6-7): for omega_1-strongly compact
   kappa and cf(lambda) > kappa there are I, a mu-complete ultrafilter U and
   f_alpha: I -> kappa (alpha < lambda) with `{i: f_alpha(i) < f_beta(i)} in U`
   for alpha < beta and `{i: f_alpha(i) != delta} in U` for delta < kappa.
   Theorem 2.9 (p. 8): for kappa > c and a kappa-complete free U, the random
   extension carries the Solovay measure `nu(A) = lim_{b in G} nu_b(A-dot)`,
   well-defined via Radon-Nikodym, kappa-additive, defined on every subset of I
   and extending chi_U. Theorem 2.10 (pp. 8-10): with the f_alpha used to pull
   the Solovay measure back to 2^lambda, PMEA_sigma holds in the random
   extension. The paper states in the preamble to these results: "Our proof will
   follow the lines of Kunen's proof of the consistency of PMEA from strongly
   compact cardinals". This corroborates the route and conclusions of
   `lem-lc-fine-measure-coordinate-family`, `lem-lc-solovay-density-locality-and-null-joins`,
   `lem-lc-generic-evaluation-of-measurable-densities`,
   `lem-lc-solovay-measure-on-generic-subsets`,
   `lem-lc-random-coordinate-product-measure-pullback` and
   `thm-lc-strong-compactness-product-measure-extension-interface`. Our item
   adapts Lemma 2.8 to a strongly compact cardinal with no cofinality
   restriction and derives the stronger `{f_alpha > delta} in U`; both changes
   were checked against the authored proof and are correct for the uses made
   (finite F and supports of size below kappa). The paper's PMEA_sigma is the
   countably additive statement; our target's stronger "null ideal closed under
   fewer than continuum many sets" is obtained from kappa-additivity together
   with the authored lemma that the random algebra makes the continuum kappa
   (the paper's Theorem 2.9 hypothesis `kappa > c` matches our lemma's
   `|[0,1]| < kappa`).
2. J. D. Hamkins, "The Lottery Preparation" (arXiv math/9808012; 45 pp. read at
   the relevant points). The paper's opening states that the Laver preparation
   "spectacularly makes any supercompact cardinal kappa indestructible by
   <kappa-directed closed forcing"; Corollary 4.6 (printed p. 40) proves
   indestructibility after a lottery preparation by factoring `j(P)` at the
   anticipated stage and descending the supercompactness measure (the proof
   text shows the measure is in the extension because the tail forcing
   `G_tail * j(g)` is `<=(theta)`-directed closed and "could not have added
   mu"). This corroborates the route of `thm-lc-supercompact-preparation-interface`
   (reverse-Easton iteration with gap markers, factorization `j(P) = P * Q-dot * R`,
   two lifts, master condition, bounded measure descent). The lottery support
   convention is not the Laver support convention; the authored item states and
   proves its own support and directed-closure clauses rather than importing
   Hamkins's strategic-closure setup, as its own `risk_review` records.

No new source claim is made here beyond these reads. In particular the original
Laver (1978) four-page proof remains unrecovered; the item's provenance records
that honestly and its proof is the locally authored alternative, which in this
read agreed with the published description of the theorem and its argument.

## Batch 13 (constructibility and forcing)

All 36 items and 4 pages accepted. The checks that carried the most weight:

- Finite satisfaction and Def: finite-tuple absoluteness (steps 1.1-4.1) and
  `Def^N(A)=Def(A)` were checked including the `A=empty` special clause and the
  refusal to identify internal and external `A^omega`.
- Levels, rank and reflection: `L_alpha subset V_alpha`, `L_alpha ∩ Ord = alpha`,
  `L_alpha in L_{alpha+1}`, the first-successor rank characterisation, and the
  fixed-formula reflection application to `W_gamma = L_gamma` were re-derived.
- ZF in L: Separation by reflected Def, Power Set by ambient rank bounds plus
  internal Separation, Replacement by ambient image plus rank bound, with no
  circular use of internal Power Set or Replacement.
- Canonical order and AC: the code well-order, the successor order as a sum with
  least codes, the limit initial-segment minimum (one existential witness, not
  AC), and internal AC from the definable order were checked.
- HOD: OD closure under fixed operations, hereditary closure, Separation/Power
  Set/Replacement in HOD, the OD witness-code well-order, and internal AC with
  the least-element graph shown to be HOD; no HOD^HOD absoluteness is assumed.
- Forcing: filter/genericity conventions, Rasiowa-Sikorski with its single AC
  use and its ZF least-index branch, the countable-model corollary, name and
  rank absoluteness, valuation, check names (with the nonempty-G convention),
  transitivity and rank bound, pair/function/ordinal names, and the atomic
  Boolean recursion with the sorted-rank complexity and cone overlap argument.
  The source caution recorded by Step 3 (Marks' printed filter direction and
  rank-code indexing) is handled by the authored all-conditions conventions.

## Batch 14 (large cardinals, forcing preparations, product measures)

All 48 items and 2 pages accepted. The checks that carried the most weight:

- Inaccessibility, rank segments and measurability: the small-union/square
  estimates, `|V_alpha| < kappa`, the club of strong limits, `V_kappa |= ZFC`
  with its AC instance, `V_kappa`-absoluteness of inaccessibility, small-fibre
  and coordinate-decision arguments, and the inaccessible-below-measurable
  conclusion.
- Ultraproducts and embeddings: quotient well-definedness and Los with AC spent
  only on coordinate witnesses, the Scott representative recursion and
  set-likeness, the universe Los schema with rank-bounded witness selection,
  countable completeness iff well-foundedness with the explicit descending
  chain, the critical point and `V_kappa`-fixing, and both directions of the
  normal-measure/embedding correspondence including the diagonal-intersection
  equivalence.
- Infinitary logic and weak compactness: the syntax/satisfaction conventions,
  infinitary Los, the tree/partition equivalence (the lexicographic coding and
  eventual-constancy argument the Step-1 coverage note left unverified were
  re-derived here), the Henkin truth tree (using realizable partial truth
  assignments rather than Monk's printed condition (4)), the regressive
  injection lemma with its endpoint/successor/limit cases, stationary
  reflection, and Mahloness.
- Strong compactness and supercompactness: the fine-measure/logic equivalences,
  the fine ultrapower seed and normality, the covering-embedding
  characterisation, the closed-embedding characterisation with the sequence
  graph argument and reindexing, and the implication ledger as a finite-proof
  transfer.
- Laver function: the bounded least-failure recursion, the closure observation
  `H_{mu^+} subset M` via the internal Mostowski collapse, the exact factor
  comparison `k(pi_U[f]) = j(f)(s)` with `k o j_0 = j`, hereditary fixing of
  anticipated objects, agreement of measures between `M` and `V`, the
  set-quotient collapse absoluteness of `j_U(ell)(kappa)`, and the
  least-failure contradiction.
- Preparation and PMEA interfaces: both items were read completely (43 and 7
  steps). For the preparation item I checked the mixing/membership condition
  that the owner's independent review had flagged, the uniform support bounds,
  kappa-cc, the two lifts, the master condition and the bounded-name measure
  descent; for the PMEA item I checked the finite-fragment extraction, the
  reflection/collapse/generic steps and the soundness contradiction. The
  external corroboration of their routes is recorded above. My acceptance of
  the preparation item is an acceptance of the authored argument as read here,
  with the residual points below stated honestly.
- Solovay/random block: the probability-algebra completeness and ccc facts, the
  density existence/locality/null-join lemma, rational-cut generic evaluation,
  the measure on all extension subsets of the ground index set, cardinal
  preservation and continuum kappa for the inaccessible random algebra, the
  pullback with exact cylinder probabilities, and the consistency transfer.

Boundary cases checked across the batch include: empty theories and empty
families, `alpha = 0` and empty `V_0`, `D = empty` in probability algebras,
`beta = 0` in the null-closure clauses, empty quantifier blocks, `F = empty`
and `S = empty` in the coordinate-family lemma, `lambda = kappa`, `x = empty`
in the Laver definition, and the singleton-forcing boundary of the false
statement about generic filters.

## Edits made

- `research/phase-2-next-20-batch-13.proof-contracts.json`: 23 `risk_review`
  entries (all items the risk report tiers high or critical).
- `research/phase-2-next-20-batch-14.proof-contracts.json`: 41 `risk_review`
  entries (40 required plus the ordinary item `def-lc-weakly-compact-cardinal`).
- `research/phase-2-next-20-alpha-h-5a-decisions.json` (new).
- `research/phase-2-next-20-alpha-h-5a.md` (this report).
No `risk_review` was left absent for a high/critical item in either batch. No
`escalated` verdict and no `repair_confidence` below 1 exists in the decisions.

## Local suppliers

No new local suppliers were needed: every dependency used by the reviewed
arguments already exists as an authored item in the same batch or as a
supplier on a planned/published page, and every dependency declared in the
manifests and contracts resolves. The same-batch supplier chains actually
relied on (all read) include `thm-lc-laver-function-existence` ->
`thm-lc-supercompact-preparation-interface`, and
`lem-lc-fine-measure-coordinate-family` +
`lem-lc-solovay-density-locality-and-null-joins` +
`lem-lc-generic-evaluation-of-measurable-densities` +
`lem-lc-solovay-measure-on-generic-subsets` ->
`lem-lc-random-coordinate-product-measure-pullback` ->
`thm-lc-strong-compactness-product-measure-extension-interface`, and in batch 13
`def-boolean-valued-name-semantics` -> `lem-lc-boolean-generic-*` (batch 14).

## Required shared-plan and Phase-2 amendments

None required from this review. Checked against the current tree:

- Both batch manifests match the Step-5 scope inventories exactly, so the plan
  splice already carries all 84 items and six pages (stage 4-splice passed on
  the current tree).
- The batch-14 cross-batch input has 19 current rows (18 `verified`, one
  deliberate `removed` edge) covering every batch-14 consumer of batch-13
  pages/items that this read exercised; batch 13's input is an empty array, as
  it has no cross-batch consumers.
- The page pair `the-constructible-hierarchy-and-inner-models` /
  `forcing-orders-names-and-generic-extensions` and the
  `large-cardinals-measures-and-elementary-embeddings` page prerequisite on the
  forcing page are already declared and verified.

One residual provenance item for the serial lead's records (not a mathematical
blocker and not a shared-plan amendment): the Laver (1978) original remains
unrecovered, and `thm-lc-supercompact-preparation-interface` relies on the
locally authored alternative proof with the owner-recorded repair decision and
independent review. The item and its provenance say this honestly; no source
stamp is claimed here.

## Published findings

No published item defect was established within the reviewed scope. The
published suppliers whose interfaces are actually used by these batches were
checked at their statements and, where the use is delicate, at the cited clause:
`thm-montague-levy-finite-reflection` (general definable-class clause),
`thm-recursion-on-well-founded-setlike-relations`, `def-cumulative-hierarchy-stages`
and `prop-cumulative-hierarchy-transitivity-and-growth`,
`thm-set-structure-satisfaction-recursion`, `lem-satisfaction-coincidence`,
`thm-ordinals-and-omega-are-absolute-in-transitive-models`,
`lem-bounded-definitions-of-basic-set-operations`, `def-axiom-of-choice`,
`thm-ultrafilter-characterisation`, `def-club-subsets-of-ordinals`,
`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
`thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`,
`thm-mostowski-collapse-for-extensional-relations`, `thm-hessenberg`,
`thm-downward-lowenheim-skolem-with-parameters`,
`thm-collapse-of-elementary-membership-submodels`, `thm-fodor-pressing-down`,
`prop-basic-stationary-set-calculus`, and the published interface nodes of the
Measure/Integral and Boolean-algebra pages used by the Solovay block. No
defective published item was found, so no row was added to
`research/published-consumer-supplier-ledger.md`; the ledger was not edited and
no lock was taken. This is a statement about the interfaces read, not an
exhaustive audit of the published closure.

## Checks run

- `node tools/risk-report.mjs research/phase-2-next-20-batch-13.proof-contracts.json --require-reviewed` -> exit 0, 0 error(s).
- `node tools/risk-report.mjs research/phase-2-next-20-batch-14.proof-contracts.json --require-reviewed` -> exit 0, 0 error(s).
- `node tools/proof-contract.mjs ... --strict` (both batches) -> 36/36 and 48/48 items, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template --json` (both) -> exit 0.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` (both) -> exit 0.
- `node tools/coverage-checklist.mjs` for batch 13 (101 harvested, 0 errors) and
  batch 14 (83 harvested, 0 errors) -> exit 0.
- `node tools/manifest-deps.mjs` with both manifests -> 84 item(s), 0 error(s).
- `node tools/content-policy.mjs` with both manifests -> 84 scoped item(s), 0 error(s), 0 warning(s).
- `node tools/splice-plan.mjs --run phase-2-next-20 --verify` -> 44 page(s) across 15 manifest(s), plan and manifests agree.
- `node tools/step5-scope.mjs stamp --run phase-2-next-20 --group h` -> 90 carrier hashes stamped.
- `node tools/step5-scope.mjs check --run phase-2-next-20 --phase adjudicate --batch 13` -> 40 obligation(s), 0 error(s).
- `node tools/step5-scope.mjs check --run phase-2-next-20 --phase adjudicate --batch 14` -> 50 obligation(s), 0 error(s).
- `node tools/step5-scope.mjs check-escalations --run phase-2-next-20` -> no owner escalations.
- Read-only repository-wide gates on the current tree: `precheck` 13630 checked,
  0 failing; `depcheck` exit 0; `fwdcheck` exit 0; `prosecheck` 0 errors;
  `rendercheck` OK; `pathcheck` 0 errors.
- A merged-contract run of `risk-report --require-reviewed` (run-wide, not a
  group-owned check) reports 36 missing reviews, none of them in batches 13 or
  14; those belong to groups still in flight. No group-h item lacks a review.
These are local checks of the current tree, reported as such.

## Blockers and residual uncertainty

- No mathematical blocker prevents acceptance of the 90 obligations as written.
- Residual uncertainty, stated honestly: `thm-lc-supercompact-preparation-interface`
  is a long compressed proof of a deep theorem (43 steps covering a reverse
  Easton iteration, two lifts, a master condition and a bounded measure
  descent). I read it completely and checked its key local arguments and its
  cited suppliers, and its route matches the published descriptions and
  Hamkins's Laver-argument sketch, but I did not independently formalise every
  global iteration/support detail; that is the limit of this acceptance.
  The same applies, to a lesser degree, to `thm-lc-laver-function-existence`
  and to the consistency-transfer interface `thm-lc-strong-compactness-product-measure-extension-interface`.
- Residual provenance: the Laver (1978) source is still unrecovered; its
  coverage record carries the owner's alternative-proof/source-drop decision.
  If the serial lead wants an owner-visible statement of that residue, it is in
  `research/phase-2-next-20-preparation-owner-completion.md`,
  `research/phase-2-next-20-laver-local-proof.md`, and the batch-14 coverage
  file — none of which this review alters.
- Nothing in this review should be read as clearing another group's escalation
  or as a cross-group impact closure; those remain with the 5B lead.
