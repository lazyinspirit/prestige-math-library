# Step 3b — A/B pair `em-experiment-analysis-prerequisites` / `em-experiment-analysis-prerequisites-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 20, 2026-10-09.
Owned A page order 317 (`em-experiment-analysis-prerequisites`), B page order 318
(`em-experiment-analysis-prerequisites-examples`), category
`classical-electromagnetism-mathematics`, library `mathematics`.

Two dispatches of this step covered the pair: the first pass (label
`…-c1df49436aa49741`) authored the carriers and ran the first battery; the
re-dispatched attempt (label `…-5a3f0e2bee8f647c`, 2026-10-09T07:22:53Z)
re-read the current carriers, re-ran the whole battery on the current hashes
and re-recorded both item decisions (`accept`, confidence 1) with that
attempt's evidence — see "Re-verification pass" below. The re-dispatched pass
made no content edit: every check passed on the unchanged carriers (the first
pass's own edits — its added published dependencies and the restored comma in
the Example section before its final decision — are recorded below).

## Owned item IDs (authoring order)

Level 1: `thm-em-uncertainty-analysis` (A page).
Level 2: `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries` (B page).

## Open obligations at entry (reconciled before handoff)

- O1: author both owned items with complete proofs, run explicit-path
  `precheck.mts`, `proof-layout.mjs`, `rendercheck.mjs`, scoped `depcheck.mjs`
  and `content-policy.mjs`, and record per-item Step-3b decisions with examined
  dependency IDs.
- O2: create the pair's library pages (A and B) and the category carrier
  `library/classical-electromagnetism-mathematics/_category.md` if still absent,
  preserving sibling rows in shared files.
- O3: write `research/physics-em-sr-40-2026-10-08-batch-20.proof-contracts.json`
  (strict) for both owned items.
- O4: the pair's only in-run supplier is `lem-em-bounded-error-model-comparison`
  (batch 16, `em-expanded-analysis-prerequisites`, order 310, level 0). At
  entry it had no authored carrier; it has since appeared on disk. Its exact
  statement (interval with at least two elements, `theta_0 in I`, `f` of class
  `C^1` with `f(theta_0)=0`, `f' >= m > 0`, bounds `|yhat| <= s` and
  `|y - yhat| <= delta`, model value `y = f(theta)`) is the interface consumed
  at steps 9.1–10.1 of `thm-em-uncertainty-analysis`. The item decision for
  `thm-em-uncertainty-analysis` stays `escalate` unless that supplier's own
  current Step-3b decision is closed at decision time; the exact state is
  recorded under "Open gaps" below. **Resolved before handoff:** the supplier
  carrier exists and its Step-3b decision is closed (`repaired`, confidence 1,
  item sha256 `750cd957…`) at the decision time of both consumer records, so
  both owned items were recorded `accept`, not `escalate`.
- O5: run `manifest-deps.mjs`, `item-dependency-levels.mjs`,
  `validate-plan.mjs` against `research/plan-spec.json` and the physics content
  gate for the containing batch; report any pre-splice plan mismatch for Step 4.

## Re-verification pass — current dispatch (label `…-5a3f0e2bee8f647c`)

The run controller re-dispatched the pair at 2026-10-09T07:22:53Z (the first
pass's process was not durably observed to exit). This pass re-read the
current on-disk carriers — both item files, both library pages, the category
carrier, the batch-20 manifest, the proof contracts, the cross-batch rows and
the in-run supplier — re-checked the mathematical route step by step against
the recorded U1 argument (page 310 notation) and the recorded source example,
confirmed both item sections equal the batch-20 manifest statements
whitespace-normalised, and re-ran the full Step-3 battery on the current
hashes. No item, page, manifest, contract or coverage content edit was
needed: every check below passed unchanged.

Re-run checks at the current hashes (2026-10-09T07:25–07:29Z, from `physics/`):

| check | command | result |
|---|---|---|
| proof layout | `node tools/physics-support/proof-layout.mjs items/thm-em-uncertainty-analysis.md items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md` | 2 items, 18 steps, 0 defects |
| precheck | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <both item files>` | 2 checked, 0 failing |
| render | `node tools/physics-support/rendercheck.mjs <both items, both pages, _category.md>` | 5 files clean |
| content policy | `node tools/physics-support/content-policy.mjs research/…-batch-20.pages.json` | 2 scoped items, 0 errors, 0 warnings |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/…-batch-20.pages.json` | 2 items, 0 normalized, 0 errors |
| proof contracts | `node tools/physics-support/proof-contract.mjs research/…-batch-20.proof-contracts.json --strict` | 2/2 items, 0 errors, 0 warnings |
| boundary audit | `node tools/physics-support/boundary-audit.mjs research/…-batch-20.proof-contracts.json` | 16 rows, no contradicted disposition |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/…-batch-20.proof-contracts.json` | 49 quotes, none not found, no widening |
| depcheck (focused) | `node tools/physics-support/depcheck.mjs --items-file /tmp/scope-batch20.json` | focused item/page and prerequisite-cycle checks pass |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 473 items, 0 errors; declared levels 1 and 2 exact |
| plan | `node tools/physics-support/validate-plan.mjs research/plan-spec.json` | exit 0; no finding for this pair |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/…-batch-20.coverage.json --require-destination` | 0 errors, the one known `coverage-low-yield` advisory |
| physics content (scoped) | `validatePhysicsContent` over both items and both pages, `requireBodies` | 0 errors |

Re-recorded decisions: `thm-em-uncertainty-analysis`, item sha256
`d93a53428515b884…` at 07:28:27Z, and
`ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`, item sha256
`17e334914e939793…` at 07:28:32Z. Both hashes are identical to the first-pass
item hashes (the content did not change), and both replay `closed` under
`step3-decisions.mjs check --phase final`; the run-wide check still lists 464
unclosed items belonging to other in-flight pairs, none of them in batch 20.
The in-run supplier `lem-em-bounded-error-model-comparison` (batch 16,
order 310) is authored, decision-closed at the same current hash as in the
first pass, and its use at steps 9.1–10.1 of the theorem was re-read against
the authored Statement (interval with at least two elements, centre `0`, `g`
of class `C^1` with `g(0)=0` and `g' ≥ m > 0`, both bounds for
`y = g(\theta)`).

## Scaffold audit and local repairs (entry pass)

- The A scaffold's proof route is sound in outline but incomplete at one
  precise point: it differentiates the affine components
  `theta |-> (theta_0)_j + theta u_j` with [[lem-derivative-of-a-power]] and
  [[thm-algebra-of-derivatives]] without establishing that a point of the open
  interval `I` is a limit point of `I` (needed for `def-derivative` to apply at
  all) and without connecting the one-variable derivative to the directional
  derivative in the `R^1` coordinate direction; it also assembles the
  `R^n`-valued partial derivative from its components without a supplier.
  Repairs: declare `def-derivative`, `def-interval`, `def-limit-point-r`,
  `def-neighbourhood-r`, `def-open-and-closed-in-r`, `def-function-limit`,
  `def-vector-valued-functions-limits-and-continuity`,
  `thm-componentwise-limits-and-continuity`, `lem-standard-basis-of-f-n`,
  `def-norm-and-normed-space`, `def-continuity-real`,
  `def-ck-and-multi-index-notation-in-several-variables`,
  `def-total-derivative-in-euclidean-space` and `def-injection-surjection-bijection`
  as `mathematical-premise` dependencies of `thm-em-uncertainty-analysis`, and
  `def-derivative`, `def-directional-and-partial-derivatives`,
  `def-ck-euclidean-maps-and-diffeomorphisms` for the example. Every added id
  already lies in the pair's declared transitive closure, so the pair's
  dependency closure, its computed levels (1 and 2) and the recorded Step-3a
  scope hash are unchanged; the additions are recorded in the batch-20
  manifest rows and in this report.
- No item was added, renamed or dropped; both promised claims, titles and page
  metadata are preserved.

## Per-item checkpoints

### 1. `thm-em-uncertainty-analysis` (A page, level 1) — authored, accepted

- File `items/thm-em-uncertainty-analysis.md`; statement and title preserved
  verbatim from the batch-20 manifest (the scope hash is untouched).
- Conventions: `n >= 1`, open `U` in `R^n`, unit `u`, open interval `I` with
  `0 in I` and `gamma(theta) = theta_0 + theta u in U` on `I`, `F: U -> R` of
  class `C^1` with `F(theta_0) = 0` and `D_uF(theta_0+theta u) =
  <grad F(theta_0+theta u), u> >= m > 0` on `I`; user-supplied `s, delta >= 0`
  and `|yhat| <= s`, `|y - yhat| <= delta`; conclusion `|theta| <= (s+delta)/m`
  and `||theta u||_2 = |theta|`, with the explicit no-sampling-law clause.
- Proof: 14 steps (1.1-1.4 setup/continuity/displacement, 2.1-2.2 component
  differentiability and composite continuity, 3.1 directional/ordinary
  derivative identification, 4.1-5.1 partial derivative equals the constant
  `u` and is continuous, 6.1 total differentiability of the path with
  `D gamma(theta)(1) = u`, 7.1 chain rule and `g' = <grad F(gamma), u> >= m`,
  8.1 continuity of `g'`, 9.1 recap, 10.1 lemma application). Each step is one
  paragraph with trailing tags; all step references are backward.
- Exact supplier uses: `lem-em-bounded-error-model-comparison` at steps
  9.1-10.1 (hypotheses instantiated exactly); `def-derivative`,
  `def-interval`, `def-limit-point-r`, `def-neighbourhood-r`,
  `def-open-and-closed-in-r` at steps 1.1, 2.1, 3.1 (interval openness and
  nondegeneracy, limit points, restriction of the domain); `def-directional-and-partial-derivatives`
  and `lem-standard-basis-of-f-n` at steps 3.1, 4.1, 6.1 (`e_0 = 1` in `R^1`);
  `def-function-limit` at step 3.1 (epsilon-delta conditions coincide under
  `x = theta + t`); `thm-componentwise-limits-and-continuity` at step 4.1;
  `def-vector-valued-functions-limits-and-continuity` at step 5.1;
  `def-total-derivative-in-euclidean-space` and
  `thm-continuous-partial-derivatives-imply-total-differentiability` at step
  6.1; `thm-total-derivative-computes-directional-and-partial-derivatives` at
  steps 6.1 and 7.1; `def-ck-euclidean-maps-and-diffeomorphisms` and
  `def-ck-and-multi-index-notation-in-several-variables` at steps 1.2 and 2.2;
  `thm-chain-rule-for-total-derivatives` at step 7.1;
  `thm-gradient-represents-directional-derivatives-and-steepest-ascent` at
  step 1.2; `def-jacobian-matrix-and-gradient` and
  `def-euclidean-inner-product` at steps 1.4, 4.1, 8.1;
  `thm-metric-continuity-characterisations`, `def-metric-continuity`,
  `lem-real-and-metric-notions-agree` and `thm-algebra-of-continuous-functions`
  at steps 1.3, 2.2, 8.1; `def-continuity-real` at step 8.1 via the dictionary;
  `def-injection-surjection-bijection` at step 2.2; `def-norm-and-normed-space`
  and `thm-cauchy-schwarz-and-the-euclidean-norm` at steps 1.3, 1.4.
- Choice: no choice principle is used. Step 2.2 uses only the choice-free
  (a)<->(b) equivalence of continuity and openness of preimages from
  `thm-metric-continuity-characterisations`; nothing is selected from a family
  of nonempty sets; no `def-axiom-of-choice` dependency is declared.
- Source use: the statement's own two cited published treatments (Lebl,
  *Basic Analysis I* Ch. 4, printed pp. 154-168; Luke, *Multivariable Calculus
  notes* sections 2-3 and 7) are the recorded pair sources; every mathematical
  premise is carried by an exact imported item, checked directly.

### 2. `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries` (B page, level 2) — authored, accepted

- File `items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md`;
  statement and title preserved verbatim from the batch-20 manifest;
  `provenance.statement = ai-generated` with `generation.role: example`
  (permitted leaf construction; it is a dependency of nothing).
- Verification: 4 steps (1.1 hypothesis check for `F(theta) = m theta` at
  `n = 1`, `U = I = R`, `u = 1`; 1.2 compatible set exactly
  `|theta| <= delta/m`, attained at `theta = +/- delta/m`, `delta = 0` forcing
  `theta = 0`; 1.3 failure without the positive lower bound; 2.1 no empirical
  content). All step references are to facts only; witnesses are explicit and
  no choice principle is used.
- Exact supplier uses: `thm-em-uncertainty-analysis` (statement instantiated
  verbatim) in steps 1.1-1.2; `lem-derivative-of-a-power` and
  `thm-algebra-of-derivatives` in step 1.1 (and 1.3), with `def-derivative`,
  `def-limit-point-r`, `def-directional-and-partial-derivatives`,
  `lem-standard-basis-of-f-n` for the derivative/directional identification at
  steps 1.1 and 1.3; `def-jacobian-matrix-and-gradient` for the gradient in
  `R^1`; `def-euclidean-inner-product`, `thm-of-square-roots` for
  `<grad F, 1> = m` and `||1||_2 = 1`; `def-abs-value` and `lem-of-abs-value`
  for `|m theta| = m |theta|` and the `delta = 0` case;
  `def-ck-euclidean-maps-and-diffeomorphisms` and
  `def-ck-and-multi-index-notation-in-several-variables` for the `C^1` claim;
  `def-interval` and `def-open-and-closed-in-r` for `I = R`.

### Supplier reconciliation (`lem-em-bounded-error-model-comparison`)

- The batch-16 supplier (order 310, level 0) was scaffold-only at entry. Its
  authored carrier now exists; its Statement matches the recorded cross-batch
  claim exactly (interval with at least two elements, centre in `I`, `C^1`
  lower-bounded derivative, two bounds, conclusion
  `|theta - theta_0| <= (s + delta)/m`, deterministic). Its current Step-3b
  decision (`repaired`, confidence 1, sha256 `750cd957...`) is closed at its
  current hash, and the consumer's actual use at steps 9.1-10.1 was re-read
  against the authored text before recording the consumer decision.
- The batch-20 cross-batch review input
  `research/physics-em-sr-40-2026-10-08-batch-20.cross-batch-dependencies.json`
  now records both of this pair's rows as `verified` with the exact
  reconciliation evidence; the derived shared ledger was not rewritten here
  (serial reconciler ownership).

## Checks run

First-pass runs (2026-10-09T07:03–07:06Z). The re-dispatched attempt re-ran the
same battery at 07:25–07:29Z; every result below was reproduced unchanged
(exact commands and outputs in the re-verification table above).

- `node tools/physics-support/proof-layout.mjs items/thm-em-uncertainty-analysis.md items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md`
  — 2 items, 18 steps, 0 defects (final run after the last edit).
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <both item files>` — 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs <both items, both pages, category file>` —
  5 files, all clean.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-20.pages.json` —
  2 scoped items, 0 errors, 0 warnings.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-20.proof-contracts.json --strict` —
  2/2 items, 0 errors, 0 warnings; `boundary-audit.mjs` 16 rows, no
  contradictions; `citation-fidelity.mjs` no quote mismatches and no widening
  candidates.
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-20.pages.json` —
  2 items, 0 errors; manifest and item-file dependency lists agree exactly.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` —
  no finding for either owned item; declared levels 1 and 2 equal the computed
  levels. (On this first pass the run-wide check still reported four findings on
  in-flight SR items of other batches; the re-run after those batches finished
  is clean — see the re-verification table.)
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json` —
  OK: acyclic page order, no item-level cycles, forward references, B-page
  dependencies or unresolved ids; no pre-splice mismatch attributable to this
  pair for Step 4. (Advisory `redundant-prereq` lines concern other pages that
  still carry empty item lists.)
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-20.coverage.json --require-destination` —
  1 page, 18 harvested results, 0 errors, the previously confirmed
  low-yield advisory only.
- Physics content gate, scoped: `validatePhysicsContent` over the two owned
  items and both pages (requireBodies) — 0 errors (classification, kind
  prefixes, domains, dependency roles, DAG, page-library consistency).
- `node tools/physics-support/depcheck.mjs <both item files>` — no finding for
  either owned item (all cited items are declared; every dependency resolves;
  no cycles).
- Decisions: `step3-decisions.mjs record-item` recorded `accept`, confidence 1,
  for `thm-em-uncertainty-analysis` (sha256 `d93a5342...`) and for
  `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries`
  (final sha256 `17e33491...`, re-recorded after the Example section was
  restored to the manifest statement verbatim, one comma; no proof, fact or
  dependency changed in that edit); both replay as closed under
  `itemDecision`, with the pair scopes still closed.

## Open gaps / escalations

- None for this pair. Both items are fully authored, checked and accepted; the
  in-run supplier is authored, decision-closed and its actual use reconciled;
  both library pages and the category carrier exist and render.
- Source gate rechecked on the current coverage file:
  `source-fetch-check.mjs --coverage …-batch-20.coverage.json` reports
  `2/2 source(s) fetch-verified` and `2/2 source(s) resolved`, with the two
  durable stamps (Lebl pp. 154–168; Luke PDF pp. 5–6, 9–13) intact at
  `9c204ae1f1ee1641`/`a7ee4d7785961ae3`. The first pass's `url-sweep`
  (2/2 live) and `source-backing` (0 errors) results stand on the unchanged
  coverage file. Artifact accounting:
  `checkPairAuthorArtifacts` for this pair reports `6/6` required carriers
  present (report, batch-20 contracts, both pages, both items).
- Observations for the serial reconciler / sibling owners (in-flight, not part
  of this pair), first recorded on the first pass and rechecked on the current
  pass: the four `item-dependency-levels` findings on SR items
  (`lem-sr-endpoint-displacement-of-a-future-timelike-worldline`,
  `thm-sr-endpoint-proper-time-bound-and-flat-maximum`,
  `ex-sr-two-leg-itinerary-versus-straight-clock`,
  `cex-sr-past-directed-itinerary-attains-the-endpoint-bound`) that the
  first-pass run-wide check reported **no longer appear**: the re-run is
  `473 item(s) checked across 80 page(s); maximum level 24` with exit 0. The
  malformed frontmatter then observed in
  `items/lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface.md`
  has likewise been repaired by its owner: the current file carries a block
  `dependency_roles` mapping and passes `rendercheck.mjs` (1 file, clean).
  Nothing in this paragraph concerns batch 20 or this pair.
- Maintenance note: any later edit to an owned item or to any item in its
  dependency closure (including `lem-em-bounded-error-model-comparison`)
  restales the corresponding `accept` receipt and requires a fresh current
  decision, as the engine's hash-bound replay intends.
