# Batch 31 authoring notes — `csm-mean-field-hierarchy`

## Plan and scope

- Read the binding owner direction, complete plan section at `research/plan-classical-statistical-mechanics-track.md` L200 onward, the current content model inventory and worker proof routes D6-D9, and `research/plan-spec.json`.
- The page metadata (order 497, title, category, library, companion and four declared prerequisites) matches `plan-spec.json`; no plan/spec conflict was found. The complete design inventory reserves eight A items. Three local mathematical prerequisites were added on the A page: the imported ODE theorem assumes joint time-state smoothness while the Vlasov force is initially only continuous in time; the planned phase-space Wasserstein metric must be defined before use; and smooth compact tests need a proved measure-determination interface for the weak uniqueness and density branches. This keeps the design claims and proof route intact.
- The A page has 11 items and the B page has one example, below the 100-item cap. No excluded category or other pair was authored.

## Cross-batch supplier inspected

The initial batch-31 coverage note that `def-csm-dk-hamiltonian-flow-measure`
had no carrier was stale. `research/physics-remaining-80-2026-10-17-batch-30.pages.json`
lists the item, the current batch-30 A page includes it, and
`items/def-csm-dk-hamiltonian-flow-measure.md` is present. The item is a draft
**definition**, not a theorem; it has no proof claim. Its actual interface was
read: on a cotangent bundle it uses tautological `theta`, `omega=-dtheta`,
`i_X omega=dH`, `Omega=omega^n/n!`, and reference density `|Omega|/a0^n`; its
complete-invariant-domain definition does not assert global completeness. The
mean-field model specializes the canonical conventions to `T* T_L^d`, and the
finite-N proof establishes completeness itself before applying local
Liouville preservation. The draft status is preserved explicitly in both
consumers and is not treated as proof approval. Cross-page and item edges are
recorded as verified for carrier/interface availability in
`batch-31.cross-batch-dependencies.json`.

The upstream page-level requirement `csm-hamiltonian-statistics` is current
and its page manifest contains the above definition. The only upstream item
claim used by this pair is that definition; no result from another unfinished
batch-30 theorem is used as a proved premise.

## Supplier and proof audit

- The exact imported math statements and proofs used by this pair were read, including the symplectic canonical-volume convention and Liouville preservation, smooth ODE existence/local flow, dominated convergence, Dynkin pi-lambda, product measure/Tonelli/Fubini, Ionescu-Tulcea, full Choice and countable Choice. The intrinsic symplectic density measure and completed-product BBGKY argument each carry countable choice; the iid product construction retains the full Axiom-of-Choice hypothesis.
- The design's stale `nr-cm-e2-ode` carrier is not a current canonical item. The local A-page lemma `lem-csm-dk-continuous-time-field-smooth-flow` proves the needed complete second-order flow and state jets for continuous-time, smooth-state bounded force. This avoids silently applying the imported joint-time-smooth theorem in the Vlasov branch. For the smooth-density branch, joint time smoothness is derived from all initial velocity moments before using the smooth-time clause.
- The exact BBGKY proof retains its normalized `(N-k)/N` cross coefficient and all finite-N correlations. The finite-N particle law is an exact Vlasov characteristic solution only because the self-force term is zero (`k(0)=0`). The phase-space stability exponent is `(1+2A)|s|`; Golse's cited first-order exponent is not substituted.
- The local ODE lemma now explicitly assumes joint continuity of every state derivative, matching the compact-uniform-continuity step in its smooth-dependence proof. The iid marginal argument distinguishes the empirical-product law conditional on a fixed configuration from the collision-free law after averaging over the exchangeable particle vector.
- The compact iid proof uses an explicit finite partition coupling, fourth-moment frequency estimates plus a direct tail-union argument for almost-sure convergence, and the with-replacement collision estimate for fixed marginals. Jabin-Wang's relative-entropy and combinatorial route is recorded out of scope because its theorem hypotheses and proof are different.

## Sources and retrieval

Coverage and verified source hashes are recorded in `batch-31.coverage.json`.
Three full texts were retrieved and inspected: the complete 23-page Golse
course notes (Secs. 1.1.1, 1.2.1, Part I and Appendices I.A-I.B); the complete
37-page Jabin-Wang paper (§§1.1-1.4, §§2.1-2.2 and Appendix 3); and Teschl's
364-page ODE textbook (Chapter 2 §2.2, printed pp. 36-40; §2.4, pp. 42-48,
including Theorem 2.10's joint time-state `C^k` hypothesis; and §2.6, pp.
50-53). Golse and Jabin-Wang are independent mean-field treatments; Teschl is
the book-length ODE treatment. The coverage file records item-level support,
exclusions and dispositions. Retrieval succeeded; there were no failed fetches
and no recovery or source-resolution entry was needed.

## Dependency levels and readiness

Recomputed levels follow the batch dependency-level input: the local ODE lemma
is 0; the periodic model is 1 from the current batch-30 definition; the phase
Wasserstein definition, postulate and finite-N flow are 2; exact BBGKY and the
local smooth-test measure lemma are 3; global Vlasov is 4; Dobrushin and the B
example are 5 and 4 respectively; compact iid propagation is 6; the qualified
physics theorem is 7. The Vlasov and Dobrushin items use the local measure
determination lemma, which proves the exact phase-space test-class interface
before either argument uses it. The remaining assigned items have
current carriers and their proof arguments and contracts are complete. The
draft batch-30 definition is used at its inspected definition interface, not
as an unproved theorem. No mathematical prerequisite, cycle, source-retrieval
failure, or capacity issue remains for this pair; the readiness-record issue
is listed below. Readiness records are
authoring completion records only and do not constitute independent review.

## Final scoped checks and unresolved run-wide gates

- `proof-layout.mjs` on all 12 assigned items: 12 items, 38 proof steps, 0
  defects. `precheck.mts`: 12 files, 10 proof-bearing/nonproof structures
  checked, 0 failures. `proof-contract.mjs --strict`: 10/10 scoped entries,
  0 errors and 0 warnings.
- `rendercheck.mjs` on the 12 items and two pages: all 14 files render; math
  and YAML parsing pass. Authored `content-policy` on the batch manifest:
  12 items, 0 errors/warnings. `coverage-checklist --require-destination`:
  19 harvested results, 0 errors/warnings. `source-fetch-check --stamp`:
  all 3/3 sources fetch-verified, 0 newly stamped. Focused `depcheck` on the
  assigned items and their closure: 0 errors/warnings.
- The batch manifest contains all 12 full item records, and its A/B item IDs
  match the current page frontmatter inventories exactly.
- The 12 item dependency levels were recomputed with the inspected batch-30
  supplier represented in the in-run graph: 13 items, 0 errors. Levels are
  ODE lemma 0; periodic model 1; Wasserstein definition, postulate and finite-N
  flow 2; exact BBGKY and smooth-test lemma 3; global Vlasov 4; Dobrushin 5;
  compact iid 6; qualified physics theorem 7; B example 4.
- The run-wide `item-dependency-levels` check is not clean: it reports 130
  errors outside batch 31 (80 empty scaffold inventories, 8 absent level
  labels and 42 stale levels in EMG/TGR items). No batch-31 item is reported.
  These other batches were left unchanged. The run-wide `step1-decisions
  check` reports 385 items, 163 ready, and 302 unresolved work records/pages;
  221 unresolved items are outside this pair, in addition to 80 empty pages.
- Eleven batch-31 readiness records are current and `ready`. The existing
  `def-csm-dk-periodic-mean-field-model` record remains escalated with its
  earlier reason that the batch-30 supplier was a bare manifest string. That
  reason is stale: the supplier now appears as a full item record, and its
  exact definition interface was inspected and matches this use. The
  dispatch explicitly forbids overwriting an escalation and forbids `--owner`,
  so that record was preserved; owner reconciliation is required before this
  item can be recorded ready.
- The run-wide batch dependency-level check reports a stale shared snapshot.
  Current recomputation succeeds with input hash
  `9e41fc02ab32e30c9b7a838d92375e0e7febfd049f94786e8ed4abc427923840`; the
  recorded snapshot hash is
  `2b0e38d9ce131c5b1a59cdf62fdf2db00d53ff1caf9f9aa9a69959280f084269`.
  The recomputed rows are batch 30 at level 0 with no prerequisites and
  batch 31 at level 1 requiring batch 30. The run-wide snapshot was left
  unchanged as owner scheduling state; the owner must recompute it after
  run-wide authoring is drained.

The pair's content, source coverage, proof contracts and scoped dependency
graph are complete. Run-wide dependency snapshots and the preserved stale
model escalation remain owner-level closeout work.
