# Step 8 — scope-denial delta review, `phase-2-remaining-27`

Run: `phase-2-remaining-27`
Role: alpha, `step8-lead` (covers `all`)
Artifact owner: this dispatch
Date: 2026-09-22
Stage: `8-scope`

Inputs read: `briefs/tasks/frontier-dependency-ledger.md`,
`research/phase-2-remaining-27-alpha-step8.task.md` (this dispatch),
`research/phase-2-remaining-27-cross-batch-dependencies.json`,
`research/phase-2-remaining-27-step8-scope-delta.json`,
the five `research/phase-2-remaining-27-alpha-{a..e}-scope-decisions.json`,
`research/plan-spec.json`, `research/phase-2-remaining-27-scope-ledger.json`,
the fifteen batch coverage files, the affected item files, and the cited
sources (all listed in §5).

`research/phase-2-remaining-27-step8-mathematical-review.task.md` **does not
exist**; no supervising mathematical review was assigned, so none was
performed and no Step-8 blocking obligation is carried under that task.

**No mathematical item, page, manifest, contract, risk, splice, or coverage
artifact was changed by this dispatch.** Changed mathematical IDs: `[]`.
The only files written are the five group scope-decision files (decision
values and evidence for the pending rows) and `research/defect-ledger.jsonl`
(three Step-8 sweep rows, rendered). The review rows added to the eight batch
cross-batch-dependency inputs were written earlier in this same dispatch while
serving the frontier-ledger duty (§2).

## 1. Scope-denial delta

The engine's `scope-decisions prepare` produced the delta with
`total_declines = 57`, `pending_count = 48`; nine rows already carried current
hash-bound decisions (group b: 3, group e: 6) and were left untouched. Only the
48 pending rows were reviewed, exactly as the task requires.

Each pending row was checked against:

1. the destination's state in `plan-spec.json` (page exists; order; item
   inventory; `requires`) and, for deferred rows, whether the destination is
   one of the 54 pages this run owes (`phase-2-remaining-27-scope-ledger.json`);
2. the owning page's current item files, scanned for any consumer of the
   declined material (keyword sweep per row over the item files of the owning
   page and its companion examples page);
3. the cited source row in the batch coverage file and, where the locator
   mattered, the fetched source text itself (§5).

Result totals (57 decisions, 0 pending):

| Group | pending at prepare | `stands` (new) | `owner-decision` (new) | prior decisions retained | group total |
|-------|--------------------|----------------|------------------------|--------------------------|-------------|
| a     | 7                  | 7              | 0                      | 0                        | 7           |
| b     | 13                 | 12             | 1                      | 3                        | 16          |
| c     | 9                  | 9              | 0                      | 0                        | 9           |
| d     | 9                  | 9              | 0                      | 0                        | 9           |
| e     | 10                 | 7              | 3                      | 6                        | 16          |
| total | 48                 | 44             | 4                      | 9                        | 57          |

`node tools/scope-decisions.mjs check --run phase-2-remaining-27` reports
`57 current decline(s), 0 error(s)`; `delta` reports `0/57 decision(s)
requiring review`.

Representative verifications (the group files carry the per-row evidence
string):

- Deferred destinations inside this run are all real, owed pages with the
  material planned: AT-20 `chern-and-pontryagin-classes-by-splitting-and-complexification`
  (366.039, 33 items — Chern classes/character, Pontryagin classes),
  AT-20 B `...-examples` (366.04, 7 items), DG-33
  `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (507, 54 items —
  `thm-weyl-character-formula-for-compact-connected-lie-groups` plus the
  denominator/orthogonality/Weyl-integration lemmas in the order the binding
  owner direction fixes), FA-15 `compact-operators-and-riesz-schauder-theory`
  (288.075, 26 items), FA-16 `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`
  (288.077, 21 items — the trace-class development) and FA-19
  `continuous-functional-calculus-for-self-adjoint-and-normal-operators`
  (288.083, 26 items).
- Group-a DG declines match the binding owner direction: DG-30/31 contain no
  restricted-root item (0 inventory hits), and DG-34 carries
  `def-restricted-root-and-restricted-root-space`,
  `prop-restricted-root-systems-may-be-nonreduced` and
  `fs-restricted-root-systems-are-always-reduced`; the equal-rank
  Borel–de-Siebenthal refinement is absent from DG-34 (the only occurrence is
  the source locator inside `thm-classification-of-real-semisimple-lie-algebras`)
  and Knapp's Chapter VI equal-rank discussion confirms it is a later topic.
- The declined material is not consumed anywhere it is declined: 0 hits for
  `symmetric banach`/`hermitian banach` (Gelfand pages), `pontryagin`/`chern
  class` (SW/Euler pages), `chern character` (AHSS pages), `almost complex`
  (AT-20), `residual spectrum`/`continuous spectrum` (FA-15), `ideal` (batch-2
  HS pages), `half-range`, `transfinite`, `fejer`, `semimartingale`,
  `burkholder`/`bdg`, `feynman`/`kac`, `schwarz`/`mixed partial`, `taylor`,
  `collectionwise hausdorff`, `nonseparable` (except the reserving remark).
- Where an owning item already states the page convention, the decline is
  checked against that text: `def-stone-space-and-clopen-algebra` says the
  total-disconnectedness equivalence "is standard but is not needed below";
  `rem-representation-theory-of-noncompact-real-reductive-groups` and
  `rem-convexity-and-toric-classification-for-hamiltonian-torus-actions` state
  their topics lie beyond the page;
  `rem-general-semimartingale-calculus-is-outside-this-block` (hosted on
  `itos-formula-and-brownian-martingales`) excludes semimartingale calculus,
  SDE theory, Girsanov and jumps; `thm-hilbert-schmidt-norm-is-basis-independent`
  already carries the Hilbert–Schmidt quantity (so the separate norm-theorem
  row stands declined); `ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`
  (FA-16 examples page) carries the Mercer-type diagonal trace example.

### Owner-decision rows (exact identities and hashes)

| group | decline_id | page | name | row_sha256 | context_sha256 | why escalated |
|-------|-----------|------|------|------------|----------------|---------------|
| b | `42240b1dab4420160374124d937ccb5c8981db76a1e51db3622d1bd37d6504c6` | `gelfand-theory-and-commutative-c-star-algebras` | Example 3.10: group L1 convolution and Fourier transform | `c96b7bf0f4d4907de0d02bf311aea40cc1af3aad9821f450ca5e722ec3dce579` | `41aaa8f033b9d79cbf5e676caa7b7d657c4220df4e9eea7e9715146410be19b3` | destination is already `owner-decision`; L1(G) convolution needs Haar measure and belongs to the group/Fourier track, whose plan pages (`the-modular-function-and-l1-group-algebras` 510.067, `unitary-representations-positive-type-and-gns` 510.069) have 0 items and are not owed by this run |
| e | `0b49a2e785a6f08fb00e5dd1281f8756eb62475dd5c7279b9a401df1352ba495` | `banach-space-differential-calculus-and-banach-manifolds` | Theorem 2.19, Sard–Smale | `82f1c2157acb71398f6800b464d0a4fe936d98fcc749de19fa2311f2757a7d35` | `754426f707aee45d5261be0079d4ad38ff1291c37fdb468f540649161ba0d943` | destination is already `owner-decision`; the theorem is already published behind the topology track (e.g. `thm-parametric-transversality`, `lem-sard-slicing-for-compact-null-sections`, `lem-sard-on-the-nonflat-critical-strata`), and this batch has no authority to select or repair that interface |
| e | `34643b71c890bde3af0719b67e2fb283d4045a6e26e8b44a29396e37c6424772` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | General Lidskii trace formula | `7b8fbe34831bcc07a6f031219abe83072ff7a0ea5f92fa6ab7b8b5cd5f1407c7` | `eaed3bf19ce67271abd55b16341c5465eb828976041dd189f26c6ece2ac53c1a` | destination `fredholm-determinants-and-the-lidskii-trace-formula` exists in plan-spec (288.0801) but carries **0 items**, is absent from the run's owed scope-ledger and from every batch coverage; the binding FA direction leaves Lidskii to that pair, but its discharge is not verifiable in this run |
| e | `c48e0c40b0ff7dd29ce48124619f856fc36d12362603bd960251e6588bfb4a45` | `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | Fredholm determinant theory | `e69b9ace150709c97d47d620e3302d3720828a4be46b3e300cb6fab1829800a8` | `eaed3bf19ce67271abd55b16341c5465eb828976041dd189f26c6ece2ac53c1a` | same unbuilt destination; coverage itself records the topic is not needed for positive trace or cyclicity, so the deferral strands it on an unbuilt page |

No declined *owed* page or item is being dropped: every other deferred
destination is an in-run page this run owes and builds, and the four
escalations concern material outside this run's owed scope (or already
published elsewhere). No new page, forward dependency or reading-order change
was created by any decision.

## 2. Frontier dependency ledger

`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27
--require-reviewed` exits 0 ("refreshed and deduplicated"). Current unified
state: `reviewed_batches` 15/15, `unreviewed_batches` `[]`, 1111 declared
cross-batch edges with **0** edges lacking a review; 1096 edges carry only
`verified` reviews and 15 only `removed` reviews. `orphaned_reviews` = 940;
those are same-batch review rows the collector ignores by design (the ledger
is a cross-batch ledger) and are informational only.

At the start of this dispatch the refreshed ledger reported **46 declared
cross-batch edges with no review row**. Each was reviewed against the current
consumer use-site and the supplier's current statement and given one
`verified` review row in the owning batch input; the eight inputs updated are
`phase-2-remaining-27-batch-{3,4,5,6,9,12,13,15}.cross-batch-dependencies.json`.
Examples of the evidence pattern used: `def-hilbert-space-adjoint`'s
characterisation `⟨Tx,y⟩=⟨x,T*y⟩` supporting the FA consumers;
`lem-finite-rank-operators-are-compact`; the root-lattice `Q` and
`prop-weyl-length-equals-positive-root-inversion-number` rows for the DG
consumers; the Euler/Thom-class naturality rows 9→10; and
`thm-separable-complete-metric-baire-in-zf` for the batch-15 consumer.

The 15 `removed` edges were each verified against both carriers (the consumer
item file and the owning manifest): the current consumer contains no reference
to the supplier, so the removal is sound. They are: `def-boldface-sigma-one-three-measurability→lem-dependent-choice-implies-countable-choice` (15→2),
`ex-euler-class-of-the-universal-oriented-two-plane→ex-chern-class-of-tautological-and-hyperplane-lines-on-complex-projective-space` (10→9),
`ex-hyperbolic-space-as-so-zero-n-one-mod-so-n→cor-normalized-haar-measure-on-a-compact-lie-group` (13→12),
`ex-logarithm-of-geometric-brownian-motion→def-continuous-time-stopping-time` (8→7),
`lem-scalar-and-complex-measures-from-a-pvm→thm-hilbert-adjoint-properties` (5→1),
`lem-simple-pvm-integral-is-representation-independent→thm-hilbert-adjoint-properties` (5→1),
`lem-weak-and-strong-additivity-of-orthogonal-projections→thm-hilbert-adjoint-properties` (5→1),
`thm-analytic-and-root-system-weyl-groups-agree→prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` (12→13),
`thm-cartan-killing-classification-of-complex-simple-lie-algebras→prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` (11→12),
`thm-compact-connected-lie-groups-are-classified-by-root-data→prop-complexification-has-a-canonical-conjugation...` (12→13),
`thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems→thm-conjugacy-of-compact-real-forms` and `→thm-existence-of-a-compact-real-form` (12→13),
`thm-integration-by-parts-for-brownian-ito-processes→def-continuous-time-stopping-time` and `→def-quadratic-variation-along-a-partition-sequence` (8→7),
`thm-serre-presentation-theorem→prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` (11→12).
For the `ex-logarithm-of-geometric-brownian-motion` row, the item frontmatter
deps and the batch-8 pages manifest now agree that
`def-continuous-time-stopping-time` is not referenced, so no reconciliation
gap remains.

These rows are review evidence, not judge verdicts; no stamp or certification
was written.

## 3. Defect-ledger sweep

The run ledger had no row with disposition `open`. Six rows were in a
non-terminal disposition; each was inspected against the current artifacts:

| defect_id | disposition before | inspection | action |
|-----------|--------------------|------------|--------|
| `phase-2-remaining-27-fa-rank-zero-def-thom-euler-class-of-an-oriented-vector-bundle` | deferred (fatal) | current item guard hash `b21d5018…7006` equals the `post_sha256` of its published-repair licence row; the rank-zero paragraph is now restricted to the standard unit orientation and states `e_Th(0_B,o)=o`; owner terminal `research/phase-2-remaining-27-owner-thom-definition-terminal.md` accepted the item | closed `fixed` (Step-8 sweep row) |
| `phase-2-remaining-27-fa-rank-zero-thm-thom-isomorphism-for-oriented-vector-bundles` | deferred (fatal) | current item guard hash `256dbc70…861c` equals the latest `post_sha256`; proof 4.1 now states multiplication by the supplied orientation class `o` inverted by `o^{-1}`, identity only for the standard unit orientation, `-1` for the reversed generator | closed `fixed` (Step-8 sweep row) |
| `phase-2-remaining-27-fa-d-indistinguishability-completion` | deferred (fatal) | `def-law-modification-and-indistinguishability-of-processes` is unchanged (guard `f27b11e1…c90`) and still requires the all-times equality event to be measurable; there is **no** published-repair licence row for it; owner decisions (D3) record that a separate published-repair decision and its own judge verdict are owed | re-recorded `deferred` with Step-8 evidence; escalated to the owner |
| `p2r27-c-5a-019` (`lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`) | nonfatal-recorded | the recorded gap was subsequently repaired at Step 7; the later row `phase-2-remaining-27-step7-c-025` (7-adjudicate) records the fix | no action; terminal |
| `e-14-fleissner-conditions` (`thm-fleissner-normal-moore-space-construction`) | nonfatal-recorded | subsequently repaired; later fix rows `phase-2-remaining-27-step7-e-131`, `…-v2-impact-repeat-r1-u1-011`, `…-v2-ledger-gate-053/112` (7-adjudicate/7-rejudge) record the repairs | no action; terminal |
| `phase-2-remaining-27-a-5a-10` (`thm-additive-jordan-chevalley-decomposition`) | nonfatal-recorded | verified on disk: the Statement assumes AC while `deps` still lacks `def-axiom-of-choice`; all in-run consumers declare AC themselves. Published metadata gap; Step 8 has no repair authority over it | no action; recorded and flagged in §6 |

Three rows were appended with the prescribed interface
(`node tools/defect-ledger.mjs append --file …`, which re-rendered the view in
the same transaction; rendered fingerprint `f992d7fa5a69`). The post-sweep
gate command reports `1322 defect row(s) checked for phase-2-remaining-27,
0 error(s)`. The two fixed rows close only because the recorded condition (an
authorised published repair) is met in the current bytes; the repairs
themselves remain subject to the engine's Step-8 recertification, and no judge
verdict or stamp was written here.

## 4. Validations actually run

| command | result |
|---------|--------|
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27 --require-reviewed` | exit 0; "refreshed and deduplicated"; 0 unreviewed edges |
| `node tools/scope-decisions.mjs check --run phase-2-remaining-27` | `57 current decline(s), 0 error(s)` |
| `node tools/scope-decisions.mjs delta --run phase-2-remaining-27` | `0/57 decision(s) requiring review` |
| `node tools/defect-ledger.mjs append --file /tmp/step8work/sweep_rows.json` | appended 3 rows; re-rendered 10122 rows → `research/DEFECT-LEDGER.md` @ `f992d7fa5a69` |
| `node tools/defect-ledger.mjs check --run phase-2-remaining-27 --adjudications research/phase-2-remaining-27-judge-adjudications.jsonl --reader-decisions research/phase-2-remaining-27-step7-alert-decisions.jsonl --closure research/phase-2-remaining-27-judge-closure.json` | `1322 defect row(s) checked … 0 error(s)` |
| `git diff --check` | exit 0 (no whitespace errors) |
| `node tools/tsx-run.mjs tools/precheck.mts` | `16024 checked, 0 failing` |
| `node tools/depcheck.mjs` | exit 0; no cycles, all references resolve |
| `node tools/fwdcheck.mjs --quiet` | **exit 1 — 2 `forward-undeclared` errors, see §7** |
| `node tools/extcheck.mjs` | exit 0 |
| `node tools/rendercheck.mjs` | exit 0; 21295 files clean |
| `node tools/prosecheck.mjs` | exit 0 |
| `node tools/depsource.mjs` | 0 unresolved |
| `node tools/pathcheck.mjs` | 0 errors, 41 pre-existing warnings |
| `node tools/manifest-integrity.mjs --run phase-2-remaining-27` | 54/54 owed pages, no scope drift |

Not run by this dispatch (owned by the engine): judge closure recertification,
auditor-created certification, repo-wide/contract gates, and the mechanical
`8-scope-render` of the closed scope register (`research/phase-2-remaining-27-alpha-step8.md`).

## 7. Repo-wide gate blocker found by the Step-8 review (owner action needed)

`node tools/fwdcheck.mjs --quiet` currently exits 1 with:

```
[forward-undeclared] items/thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space.md:
  wikilink [[thm-choice-implies-dependent-implies-countable-choice]] points forward to
  weak-choice-principles-and-sierpinskis-theorem (#665); declare it in forward_refs
[forward-undeclared] items/thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space.md:
  same link and target
```

Both items belong to the published prerequisite page
`complete-metrizability-and-baire` (not an owed page of this run) and are
modified in the working tree relative to HEAD (`M`; mtimes 2026-09-22 15:54 and
16:13). `git show HEAD:items/…` contains zero occurrences of the cited id: an
in-flight repair added `thm-choice-implies-dependent-implies-countable-choice`
to `deps` and to a Facts block without a `forward_refs` declaration. No licence
row for either item exists in
`research/phase-2-remaining-27-step7-published-repairs.jsonl` and no current-run
defect row names them, so this fix is not registered against this run's ledger.

This will fail the `fwdcheck` gate of the `8-scope` battery. Repairing it means
editing two published items (adding the `forward_refs` entry), which is outside
this dispatch's write scope (Step 8 owns review and the ledger sweep, not item
edits) and would invalidate their current judge records; the engine/owner must
route it through the prescribed published-repair path with its own judge
verdict. Recorded here with exact paths and evidence as required.

## 5. Sources and locators consulted

Sources were fetched and read in-session (extracted text kept only in
`/tmp/step8work`, outside the repo). Locators that carried a decision:

- Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. — Theorem
  5.113 (Weyl character formula) and the Chapter VI equal-rank/restricted-root
  discussion; `Beyond2-clickable.pdf`.
- Allen Hatcher, *Vector Bundles and K-Theory* — Pontryagin classes and the
  rank-zero orientation normalisation (pp. 88, 91) as cited by the owner
  terminal.
- J. P. May, *A Concise Course in Algebraic Topology* — almost-complex
  structures on spheres (AT-20 decline).
- T. Bühler and D. Salamon, *Functional Analysis* — §§6.36–6.37, 7.27
  (unbounded operators; the declined realisations).
- A. van der Vaart, *Stochastic Integration and Differential Equations*,
  G. F. Lawler, *Stochastic Calculus*, and the Lawler/van der Vaart
  semimartingale, BDG, Girsanov, jump and SDE rows behind the group-d declines.
- D. H. Fremlin, *Real-valued-measurable cardinals*, and D. K. Burke, *The
  Normal Moore Space Problem* (ttu15) — group-e batch-14 rows.
- W. Shirbisheh (C\*-algebras), M. Tressl (Stone duality), A. Cannas da Silva
  and E. Meinrenken (symplectic), Z. Wang and Abbondandolo–Majer (Banach
  calculus), D. P. Williams (spectral theorem), Blackadar–Farah–Karagila
  (Hilbert spaces without AC), Etingof (Lie algebras) — the remaining rows.

The exact per-row locator evidence is carried in each decision row's
`evidence` field in the five group files, and the per-edge evidence in the
batch cross-batch-dependency inputs.

## 6. Unresolved uncertainty and escalations for the owner

1. Four scope decisions are `owner-decision` (exact IDs and hashes in §1):
  the two `owner-decision`-destined rows (general L1(G) convolution;
   Sard–Smale) and the two deferrals to the unbuilt
   `fredholm-determinants-and-the-lidskii-trace-formula` page.
2. `def-law-modification-and-indistinguishability-of-processes` (published):
   the all-times-equality-event measurability requirement is unchanged and
   still owes a published-repair decision plus its own judge verdict.
3. `thm-additive-jordan-chevalley-decomposition` (published): Statement assumes
   AC while `deps` lacks `def-axiom-of-choice` — recorded nonfatal, unrepaired
   this run.
4. `fredholm-determinants-and-the-lidskii-trace-formula` (288.0801) and its
   examples page (288.0802) carry no items and are not owed by this run; the
   Lidskii/Fredholm material deferred from FA-16 has no verified future home
   yet.
5. The 46 new cross-batch review rows and the 15 removals are review evidence
   only; they are not current judge coverage, and any published item changed
   by the Step-7 repair lanes still depends on the engine's Step-8
   recertification.

Changed mathematical IDs: `[]`.
