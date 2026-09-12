# phase-2-next-17 — Step 5A group g (batch 11)

Run: `phase-2-next-17`. Role: alpha (5a-g), covering batch 11 ("covers: 11").
Date: 2026-09-12. Output pair: this report and
`research/phase-2-next-17-alpha-g-5a-decisions.json` (40 routed decisions,
`version: 1`).

Scope read from disk before working: `briefs/alpha-step5.md`, the dispatch,
`research/phase-2-next-17-step5-scope-11.json`,
`research/phase-2-next-17-batch-11.pages.json`, `.proof-contracts.json`,
`.coverage.json`, `.cross-batch-dependencies.json`, `.notes.md`,
`research/phase-2-next-17-alpha-g-scope-decisions.json`, the Step-3b group
report `research/phase-2-next-17-step3b-g.md`, and the four authored page files.
The live engine state was read from `.autopilot/phase-2-next-17/state.json`
(stage `5a-adjudicate`, no blockers), not from any historical RESUME file.

## Inventory and verdict summary

Obligations: 36 items + 4 pages = 40 direct obligations, all decided once.

| verdict | items | pages |
|---|---|---|
| accepted | 36 | 4 |
| repaired | 0 | 0 |
| escalated | 0 | 0 |

No item or page was edited, no item/page/pair was added, no manifest, contract
scope, `deps`, `justified_by`, provenance, page order, coverage or shared-plan
claim was changed except the 31 required `risk_review` dispositions written into
`research/phase-2-next-17-batch-11.proof-contracts.json` (see below). The two
author-created local suppliers (`lem-finite-stage-l-history-and-limit-level-absoluteness`,
`lem-dense-forcing-name-translations-preserve-forcing`) are inside the frozen
pre-5a scope, so they received ordinary direct decisions like the preserved
originals; I created no new supplier, so there is no auditor-created item in this
dispatch.

## What was actually reviewed

I reviewed the authored arguments, not the Step-3 scaffold checklists, and did not
repeat the Step-3 scope/source-inventory audit. For every item I read the full
current body, its `Facts & Assumptions` restatements, and the statements of the
declared dependency items it cites, then re-derived the load-bearing inferences.
Where a source mattered I opened the complete relevant argument (see "Source
evidence"). The interesting outcomes:

**A677 `condensation-gch-and-diamond-in-l`.** The two hull items are sound: the
least-witness functions are set functions by Separation with the canonical order,
parameter-free formulas make the hull of the empty seed nonempty, and the
Tarski–Vaught test closes because the hull is closed under every least-witness
function; the term-counting bound uses one fixed `kappa x kappa` bijection, so it
needs no choice, and the finite-seed case correctly yields `omega subset H`.
`lem-finite-stage-l-history-and-limit-level-absoluteness`, the custom supplier,
was checked step by step: the total numerical `Enum`/`Decode` formulas and their
absoluteness in transitive carriers containing HF; the two-branch `Decode` with
the exact `Def(empty)={empty}` clause and unused parameters; the fixed finite
level overhead for assignment graphs, the exact assignment set and the truth
tables (`eta+k < lambda` for limit `lambda`); `L_omega=V_omega` with no Infinity
and the fixed sentence `C` in every nonzero limit level; the external induction
that makes internal `Hist` witnesses actual; the hierarchy and augmented-order
histories with their stated finite `L`-level bounds; and the converse that every
nonempty transitive model of `C` is `L_beta` with `beta=N cap Ord`, by actuality
plus level exhaustion. The stated `+8`/`+32`/`+40` bounds are loose but true
(rank `H_gamma = gamma+3`, and similarly for the order histories); the
limit-stage prefix is legitimately a subset of `L_lambda` because `delta+3<lambda`
for `delta<lambda`. Condensation, the subset-stage bound, GCH, diamond and the
Suslin corollary then follow along the standard routes; I verified that AC is
spent only where declared (inside `L` for GCH, imported from `V=L` for the
Suslin construction), that the successor in the subset-stage theorem is the
Hartogs successor, and that the diamond argument proves stationarity.

For `thm-v-equals-l-implies-diamond` I specifically checked the step that a
sketch can hide a gap in: `X cap omega_1` is an ordinal. The hull contains the
seed; it is closed under the definable successor, so `omega subset X`; and for
`zeta in X cap omega_1` elementarity transfers `"zeta is countable"` to `X`, so
`X` contains an `f` with `X models "f: omega onto zeta"`; elementarity makes `f`
a real surjection, and since `omega subset X` each of its values at a real
natural number lies in `X` (the internal function application has a unique
ground witness), hence `zeta subset X`. This
is exactly the argument Kunen gives at this point (`omega subset Y`, then
`zeta in Y cap omega_1` implies `zeta subset Y`), and with it the rest of the
proof (least failure pair, collapse computations, internal leastness versus the
initial-segment property, contradiction at `delta in C`) is correct.

**B678.** Both examples are conditional computations that match their declared
suppliers; the real example's collapse computation is correct, and the sealing
example proves only the stage operation it assumes (its page summary says so).

**A681 `the-forcing-theorem-and-formal-consistency-transfer`.** The atomic
clauses (common-extension subset test, equality conjunction, dense membership),
the sorted-rank recursion, the scheme-per-formula definition of quantified
forcing, persistence/density closure/decision, the truth lemma's bad-set
converse, the extension-axiom verification and ordinal preservation are all
correct as written; I re-derived the equality direction of the truth lemma and
the K-set argument, the negation and existential steps of persistence/density
closure, and the ZF/ZFC extension proof branch by branch (Separation over
`dom(sigma) x P`, Union via descendant names, Replacement via least witness
ranks, Power Set via `P(dom(sigma) x P)^M`). The dense-name translation lemma was
checked in full: the refinement calculation from dense image plus compatibility
reflection, both recursive translations, the coefficient-closure form of the
round trip, the direct equality rules on sorted rank triples, the equality
equivalence in both directions, membership transport, `R(T(sigma))=sigma` by
equality reflection, the generic correspondences and the two valuation
identities. No AC/BPI and no inverse choice is smuggled in.

**B682.** The four computations and two false statements are correct as written;
the non-monotonicity witness uses the `{p}` witness set that is dense below `p`
but not below `1`, and the two consistency statements keep their distinct
hypotheses (`Con(S)`, `S=ZFC+Con(ZFC)`, for the countermodel; external `Con(ZFC)`
plus second incompleteness for unprovability) and the explicit `Con(ZF)` for the
`V=L` refutation.

Mechanical checks confirm the same bodies: 32 proof-bearing items pass
precheck, 40 files render, content policy passes 36 scoped items, strict proof
contracts pass 36/36, and the advisory boundary/citation detectors report no
candidates.

## Source evidence

- Kenneth Kunen, *Set Theory: An Introduction to Independence Proofs*,
  Chapter VI §5: complete Lemma 5.1 and Theorem 5.2 with proof (printed
  pp. 177–179). Read from the full-text extraction of the Delft PDF already
  fetch-verified for this batch (`/tmp/phase2next17-b11.swTID3/kunen.txt`,
  lines 10320–10430; URL
  `https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf`).
  This is the source of the `omega subset X`, `zeta subset X` argument used for
  `X cap omega_1` in the diamond proof, and of the least-failure-pair shape.
- The published suppliers whose statements carry the batch's external load were
  read on disk, not assumed from the scaffold: `thm-collapse-of-elementary-membership-submodels`,
  `lem-collapse-fixes-transitive-parts-and-orders-ordinals`,
  `def-definable-subsets-of-a-membership-structure`,
  `thm-constructible-inner-model-semantic-and-formal-schema`,
  `def-effective-interpretation-and-proof-translation`,
  `lem-interpretation-translates-finite-derivations`,
  `thm-formal-relative-consistency-from-verified-proof-reduction`,
  `lem-separative-quotient-of-a-forcing-preorder`,
  `thm-forcing-preorders-have-regular-open-completions`,
  `def-complete-boolean-algebra-and-regular-open-sets`,
  `thm-diamond-constructs-normal-suslin-tree`,
  `prop-atomless-generics-are-not-ground-model-elements`,
  `thm-consistency-does-not-supply-a-transitive-zfc-model`.
- Forcing spine, read in the same cached extractions (Neeman §1, printed pp. 4–8:
  `Definition 1.18`, `Claim 1.19`, `Lemma 1.21`/`Definition 1.18`'s Case 1–2
  atomic clauses and the `K_1`/`K_2` dense-union truth argument; Karagila §2.2–2.4,
  printed pp. 7–13: `Definition 2.10` (all five clauses), `Proposition 2.11`,
  `Definition 2.31`/`Proposition 2.32` (dense embedding) and
  `Definition 2.33`/`Theorem 2.34` (Boolean completion with `0_B` omitted)).
  I confirmed that the authored common-extension subset/membership clauses are
  interderivable with Neeman's density-below formulation, that the authored
  `K_{sigma,tau}` bad set is the source's `K_1`/`K_2` argument, and that the
  authored dense-name lemma uses a genuinely weaker hypothesis than Karagila's
  dense embedding (monotone + compatibility-preserving-and-reflecting + dense
  image), which its own refinement calculation covers. The one printed-source
  imprecision the author flagged (Neeman's Claim 1.19 needing `p in G`) is
  handled by the authored hypothesis.
- Lietz §7.2–7.3 was not re-read this dispatch; the L-side items lean on the two
  custom local suppliers, which I checked mathematically as described above, and
  on published items read on disk. Where a claim is standard (condensation,
  level counting, GCH, diamond) I verified the item's own inferences rather than
  an appeal to the citation.

## Risk reviews (high/critical)

31 items are high or critical under `tools/risk-report.mjs`. All 31 received a
complete item-specific `risk_review` disposition written in this same read, via
`tools/apply-risk-reviews.mjs --run phase-2-next-17 --file <reviews>`, landing in
`research/phase-2-next-17-batch-11.proof-contracts.json` (applied 31, orphans 0).
`node tools/risk-report.mjs research/phase-2-next-17-batch-11.proof-contracts.json
--require-reviewed` reports 0 errors over 36 routed items. The remaining five
items score moderate/ordinary (3, 3, 4, 0, 0) and were reviewed as ordinary
authored content.

## Published findings

No published item was found defective by this read, so the canonical
`research/published-consumer-supplier-ledger.md` was not edited and no lock was
taken.

The publication-state concern raised by the Step-3b group report (published page
`boolean-algebras-stone-duality-and-the-prime-ideal-theorem` exposing five items
whose headers said `status: draft`) is **resolved on disk**: the page is still
`status: published` and all five items —
`def-forcing-preorder-compatibility-and-filter`,
`lem-separative-quotient-of-a-forcing-preorder`,
`def-complete-boolean-algebra-and-regular-open-sets`,
`thm-regular-open-sets-form-a-complete-boolean-algebra`,
`thm-forcing-preorders-have-regular-open-completions` — now say
`status: published`. `tools/depcheck.mjs --quiet` reports no draft item on a
published page. A current-state mismatch no longer exists, so there is nothing
for Phase 3 to repair here; this is a status observation, not a re-audit of those
five mathematics.

## Checks actually run

- `node tools/tsx-run.mjs tools/author-check.mts phase-2-next-17 11` — pass:
  32 proof-bearing items precheck, 40 item/page files render, content policy 36
  scoped items 0 errors/0 warnings, strict proof contracts 36/36.
- `node tools/proof-contract.mjs research/phase-2-next-17-batch-11.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 36/36 (after the risk-review write).
- `node tools/risk-report.mjs research/phase-2-next-17-batch-11.proof-contracts.json --require-reviewed`
  — 0 errors, 36 items routed.
- `node tools/citation-fidelity.mjs research/phase-2-next-17-batch-11.proof-contracts.json --fail-on-missing-quote`
  — no widening candidates, no missing quotes.
- `node tools/boundary-audit.mjs research/phase-2-next-17-batch-11.proof-contracts.json`
  (advisory) — no template reuse, no contradicted dispositions.
- `node tools/depcheck.mjs --quiet`, `node tools/fwdcheck.mjs`, `node tools/extcheck.mjs`
  — pass; no cycle, all references resolve, no draft item on a published page,
  no undeclared forward reference and no unproved supplier from this batch.
  `extcheck` prints one non-owned advisory note (`thm-urysohn-lemma` is
  published and rests on recorded-not-proved material); that item is outside
  batch 11 and I did not investigate or touch it.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; the four owned
  rows are spliced with exactly the manifest inventories
  (677: 13, 678: 2, 681: 15, 682: 6 items) and their `requires` match. The global
  duplicate-id debt reported by the Step-3b group at its snapshot is no longer
  present.
- `node tools/coverage-checklist.mjs research/phase-2-next-17-batch-11.coverage.json --require-destination`
  — 2 pages, 68 harvested results, 0 errors, 0 warnings; and
  `node tools/manifest-deps.mjs research/phase-2-next-17-batch-11.pages.json` —
  36 items, 0 normalized, 0 errors.
- Decision coverage: independent recomputation from the group assignment and the
  batch manifest gives exactly the 40 obligations
  `authored:11:<id>`; my decisions file matches that set with no extra, no
  missing and no wrong route.
- `node tools/step5-scope.mjs check --run phase-2-next-17 --phase adjudicate` —
  the only errors naming group g are `decision-stale` for the 40 decisions,
  which is expected because `subject_sha256` is written by the engine's
  `step5-decision-stamp` gate (`tools/autopilot/stages/mathlib.step5.mts`); the
  remaining errors are the six other groups' missing `-5a-decisions.json`
  files. Obligation, route, verdict, evidence and `defect_ids` validation passed
  before the hash comparison. I did not run `stamp` myself, and no defect id is
  referenced.

## Shared-plan and Phase-2 amendments for the serial lead

- None required for batch 11's mathematics. The preserved claims, IDs, pages,
  orders and prerequisites are correct as authored and spliced; no claim was
  weakened and no new supplier was needed.
- The Step-3b report's three "required remedies" are discharged by the authored
  text on disk: the finite-history supplier exists and proves the weak-level
  characterization, the formal-interpretation tail is authored as a conditional
  PA statement over the certified presentations, and the dense-name supplier
  exists. The report's prose bullet asking the serial lead to "replace the claim
  that finite reflection alone proves arbitrary-limit condensation" is already
  reflected in the page summary; no further prose change is needed.
- Bookkeeping only: the two author-created suppliers still need the engine's
  ordinary certification path (they are in the frozen pre-5a scope and are not
  auditor-created items), and the engine must run its stamp gate before the
  group's decisions can pass `--phase adjudicate`.

## Blockers

None. No item or page was left unresolved, no prerequisite was missing, and no
owner decision is required from this group. No proposed withdrawal exists.

Owned frontier-dependency record: `research/phase-2-next-17-batch-11.cross-batch-dependencies.json`
is `[]`, the unified `research/phase-2-next-17-cross-batch-dependencies.json`
lists batch 11 under `reviewed_batches` with no edge naming a batch-11 consumer,
and a fresh scan of the current-run manifests found no batch-11 item, page,
`justified_by` or `forward_refs` edge to another batch. I made no
ledger edit and no input edit, so no refresh was required; the serial lead's
Step-8 reconciliation can re-read the unified ledger as-is.
