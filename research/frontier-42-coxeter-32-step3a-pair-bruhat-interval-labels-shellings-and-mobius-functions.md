# Step 3a scope review — pair `bruhat-interval-labels-shellings-and-mobius-functions`

- Run `frontier-42-coxeter-32` · role alpha · label
  `step3a-pair-bruhat-interval-labels-shellings-and-mobius-functions-929e816a94ce8250` ·
  design label CG-13 · batch 16.
- A page: `bruhat-interval-labels-shellings-and-mobius-functions` (order 1748, 4 items).
- B page: `bruhat-interval-labels-shellings-and-mobius-functions-examples` (order 1749, 3 items,
  dependency leaf).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record, no
  scaffold edit). Receipt:
  `research/frontier-42-coxeter-32-step3a-review-bruhat-interval-labels-shellings-and-mobius-functions.json`.

## Inputs read

Manifests `research/frontier-42-coxeter-32-batch-16.pages.json` (all 4 A + 3 B item statements and
strategies read) and `.cross-batch-dependencies.json` (44 item rows + 2 page rows, all `open`);
coverage `…-batch-16.coverage.json`; notes `…-batch-16.notes.md`; native prose
`library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions{,-examples}.md`;
plan `research/plan-coxeter-groups-track.md` §CG-13 (lines 326–339) and `research/plan-spec.json`
(orders 1748/1749, `requires`, empty item arrays); owner decisions
`research/frontier-42-coxeter-32-owner-scope.json`, `…-owner-authoring-direction.md`,
`…-scope-ledger.json`, drift section `…-alpha-step1-drift.md` §
`bruhat-interval-labels-shellings-and-mobius-functions` (verdict no-drift); the cited statements of
every in-run supplier (batches 2, 4, 5, 10, 12) and of the published suppliers in `items/`; the
already-recorded step-3a receipt of batch 5, which names this pair as a consumer of that pair's
rooted-chain-label framework and shelling lemma.

## 1. Prose design versus scaffold (A page)

All four CG-13 local supplier contracts are present, in order, as exactly one A item each, with the
designed claim, route and recorded warning:

| Design contract (§CG-13 and native prose) | Scaffolded item | Coverage |
|---|---|---|
| Fix a reduced expression of `v`; descending saturated chains delete a unique original position of the current retained subword; labels depend on the chain above the step; define the earlier-facet shelling criterion and recall the published Möbius function; no independence of different retained expressions | `def-cg-deletion-chain-labels-and-shelling` (1)–(5): maximal chains; recursion via cover criterion + reflection deletion; rooted intervals; the shelling criterion and order-complex facets; Möbius data | complete; the chain-dependence and fixed-expression caveats are stated explicitly, and no independence is asserted |
| Prove BB 2.7.2–2.7.4 for each retained top expression: at most one increasing chain; rank-two diamond with words `(i,j)` and `(p,m)`, `i<j≤p`; lex-first chain = unique increasing chain; local descent replacement | `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` (i)–(iv) | complete, in the rooted-interval form the shelling theorem consumes |
| Translate the local replacement into the facet-intersection shelling criterion for the open-interval order complex; full earlier/later-chain comparison; empty, rank-one, rank-two conventions | `thm-cg-bruhat-deletion-label-shelling` (i)–(iv) | complete; (ii) is the explicit earlier/later comparison `λ(k)≺λ(m)`, `m'∩m⊆k∩m`, `|k∩m|=|m|−1` |
| Prove `μ(u,v)=(−1)^(ℓ(v)−ℓ(u))` for full intervals by lifting-paired recurrence (or the falling-chain form derived locally); establish the cancellation formula first; refuse the parabolic-quotient transfer | `thm-cg-bruhat-eulerian-intervals-and-mobius` (i)–(iv) | complete; (i) is the cancellation formula, (ii) the sign formula, (iii) the falling-chain count-one form derived from the batch-5 formula, (iv) the scope refusal |

The native A-page prose matches the scaffold clause-for-clause; the empty item lists of the prose
page are the pre-authoring convention, not an omission. Richest designed forms are kept (the
rooted-interval generality, the full four-case-friendly statement of (N)/(L), and the explicit
earlier/later comparison rather than shelling terminology alone). No later Coxeter page consumes
this pair: a plan-spec and run-manifest scan finds only the B companion requiring the A page, and no
page requires the B page.

## 2. B companion versus design

| Design B task (§CG-13) | B item | Coverage |
|---|---|---|
| Label all maximal chains of a rank-three interval in `S_4` | `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` (i),(ii): interval `[e,2341]`, its 8 elements, 12 covers, and all 6 maximal chains with label words `(1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1)` | complete |
| Construct the lexicographically first chain | same item (iii),(iv): lex-first `2341⪧1342⪧1243⪧1234` with word `(1,2,3)` and the explicit local descent replacement | complete |
| Calculate its Möbius value from the recurrence | `ex-cg-s4-rank-three-interval-mobius-from-recurrence` (i)–(iii): `μ(1234,2341)=−1` from the recurrence, with parity balance (4 even / 4 odd) and the falling-chain check | complete |
| Include a quotient interval where an indiscriminate Eulerian claim fails | `cex-cg-parabolic-quotient-interval-eulerian-claim-fails`: `W^{s₁,s₃}` interval of 6 elements with `μ(1234,3412)=0≠(−1)^4`, and fullness identified as the exact dropped hypothesis (`1432≤3412` but `1432∉W^{s₁,s₃}`) | complete |

The B page is a consumption leaf as its prose requires: its items depend only on the A page and
earlier/published suppliers, and nothing depends on it.

## 3. Source coverage

The coverage file records three fetch-verified independent treatments of the planned claims with
stamps (sha256-16 / pages): Björner–Brenti GTM 231 `ad1e7d9260127bb2` / 370 pp (§2.2, §2.5, §2.7 and
the A2.2–A2.4 dispositions); Zhao `4d04ed19987217e2` / 9 pp (§§3–6); Jones arXiv:0904.4472v3
`d7bb8244cd47edc1` / 9 pp (§§1–2). All 21 harvested results carry a disposition; the out-of-scope
entries (BB Theorem 2.7.7, Theorem 2.7.12/Corollary 2.7.14 and the A2 facts; Zhao's type-A
comparison, EL-shelling and sphere sections; Jones's mask matching) each state a reason tied to the
design, which explicitly imports no sphere or Cohen–Macaulay statement. `coverage-checklist` on the
batch: 21 results, 0 errors, 0 warnings. The batch notes' source observations (Zhao's printed `=1`
corrected to parity balance; appendix facts cited not consumed) are honest handling, not defects.
Honest limit: I did not personally re-read the three source bodies today; I checked the recorded
fetch stamps and dispositions and re-verified the S_4 data independently (§5).

## 4. Dependencies and unmet-prerequisite audit

- **All resolve.** The 7 items carry 88 `deps` edges over 28 distinct targets: 10 published items on
  disk with `status: published` (`def-abstract-simplicial-complex`, `def-face-poset-and-order-complex`,
  `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`, `def-poset-mobius-function`,
  `lem-poset-mobius-recurrence`, `def-finite-cardinality`, `def-group`,
  `def-finite-symmetric-group-and-permutation-notation`, `def-inversions-inversion-number-and-sign`)
  and 18 current-run scaffold items: batch 2 (3), batch 4 (1), batch 5 (2), batch 10 (1), batch 12
  (6) and this pair (5). No target lies in a later batch; no target is missing.
- **Clause-level check of the consumed suppliers.** Read in the current manifests:
  `thm-cg-bruhat-lifting-and-cover-criterion` (1) four cases with the exact inequalities, (2) cover
  criterion, (3) reflection deletion with unique index; `lem-cg-bruhat-right-exchange-and-augmentation`
  (1) unique deleted index, (2) augmentation with minimal last deleted position;
  `lem-cg-bruhat-chain-refinement-and-gradedness` (1) finiteness, (3) grading;
  `thm-cg-bruhat-subword-characterization`; `def-cg-bruhat-order-by-reflection-chains` (3) inversion
  symmetry; `def-cg-finite-lattice-congruence-and-interval-projections` (2)–(4) rooted-chain labels,
  increasing/falling/descent/lexicographic order, (N)/(L);
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (i) first-divergence shelling, (ii)
  falling-chain Möbius formula; `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (3) inversion preserves length (the reversed reduced expression used by the mirror), (4) type-A
  `ℓ = inv`; `thm-hh-coxeter-exchange-deletion-and-faithfulness` (1) parity and `ℓ(ws)=ℓ(w)±1`;
  `def-cg-parabolic-quotient-and-two-sided-minima` (2) `W^I = {w : ℓ(ws)>ℓ(w) ∀s∈I}`;
  `thm-cg-bruhat-parabolic-projection-and-quotients` (1),(3),(4); published
  `lem-poset-mobius-recurrence` (including the uniqueness clause the Eulerian proof invokes).
  No consumer uses a clause the supplier does not state.
- **Closure.** Every dependency home lies inside the transitive `requires` closure of the A page
  (through `bruhat-subword-order-and-lifting` and `finite-lattice-projections-and-coxeter-chain-labels`),
  so the post-splice undeclared-prereq check cannot flag this pair.
- **Records.** The batch cross-batch file registers 44 item rows and 2 page rows, each naming the
  required claim and use, all `open` (the expected scaffold-stage status while suppliers are authored
  in batches 2/4/5/10/12). Drift review: no-drift, no prerequisite gap.
- **Read-only mechanical checks re-run today.** `manifest-deps`: 7 items, 0 errors. `item-dependency-levels
  check`: 302 items, no error naming a batch-16 item. `step1-decisions check`: 302/302 ready, no work
  entry for this pair. `content-policy --manifest-only`: 7 items with only the 44 expected
  `batch-dependency-missing` errors for in-run suppliers not yet materialised, 0 warnings, no shape or
  provenance error. Every `[[…]]` in the seven statements/strategies lies in `deps ∪ justified_by`.
  All 7 items are in `frontier-gate-items.json`, both pages in `frontier-gate-pages.json`.
- **No unmet prerequisite is confirmed.** Two findings are flagged in §6 (one confirmed
  consumption-eligibility defect local to the pair, one uncertain vocabulary gap), plus one
  convention note and one incidental observation.

## 5. Independent finite verification (my own enumeration, 2026-10-07)

I brute-forced `S_4` from the reflection-edge definition (24 elements; covers, intervals, maximal
chains, recurrences), independent of the batch's own machine checks. Zero discrepancies with the B
page: the interval `[1234,2341]` has the 8 stated elements and 12 stated covers;
its 6 maximal chains have exactly the six stated label words; `(3,2,1)` is the unique strictly
falling one; `μ(1234,2341)=−1`; parity is 4/4; `W^{s₁,s₃}` is exactly
`{1234,1324,1423,2314,2413,3412}` of lengths `0,1,2,2,3,4` with the six stated covers and Möbius
values `−1,0,0,0,0`; `1432≤3412` holds in the full order while `1432∉W^{s₁,s₃}`, and the full
interval has 14 > 6 elements. This is scope evidence for the finite data, not a proof substitute.

## 6. Findings and recommendations

### 6.1 Confirmed: B2's declared dependency on B1 is ineligible (in-pair, local repair; scope unchanged)

The consuming item `ex-cg-s4-rank-three-interval-mobius-from-recurrence` (B2) needs the cover list
and the six deleted-position label words of `[e,2341]`, currently homed in B1
`ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` and declared as B2's first `deps`
target. B1's `provenance.statement` is `ai-generated` (batch-16 manifest), and `tools/content-policy.mjs`
(deps loop: "an AI-generated statement stays ineligible even if its proof is sourced") with
`tools/level-coverage.mjs:242` makes such an edge an item-mode error `ai-generated-statement-dependency`;
the build's item-phase gate `content-policy-items` (defined at `tools/autopilot/stages/mathlib.mts:328`,
run inside the step-3–5 stage once item files exist) enforces it. Manifest-only mode does not flag it
today (checked: only the 44 expected cross-batch errors). Recommended local repair for Step 3b
(owner action; no scope change): have B2
recompute and restate the cover list and the six label words in its own argument and drop the edge,
or replace it with an eligible source-backed supplier. The prerequisite data is present in the
scaffold and B1 remains a legal example, so this does not make the pair's scope insufficient.
Same pattern elsewhere in the run, for the owner's sweep: batch 26
`ex-cg-b2-davis-complex-octagon-and-boundary-circle → ex-cg-a2-davis-complex-hexagon-and-boundary-circle`;
batch 28 `ex-cg-distributive-weak-intervals-of-fully-commutative-elements → ex-cg-heap-of-one-three-two-in-a3`
and `ex-cg-nondistributive-weak-interval-of-a-non-fully-commutative-element → ex-cg-heap-of-one-two-one-in-a2-and-long-braid`;
batch 29 `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3 → ex-cg-euler-and-skew-form-in-a3` and
`ex-cg-source-sink-move-and-sign-convention → ex-cg-euler-and-skew-form-in-a3`.

### 6.2 Uncertain, minor: the word "facet"

Consumed as a load-bearing notion by `def-cg-deletion-chain-labels-and-shelling` (4) ("facets listed
in a linear order"), by `thm-cg-bruhat-deletion-label-shelling` (iii),(iv), and by
`lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (i) in batch 5, with the required
meaning "maximal simplex of the abstract simplicial complex". Evidence of absence: the published
`def-abstract-simplicial-complex` defines simplices and dimension only; no published item defines
facets of a complex (the published occurrences are the codimension-one-face sense for a standard
simplex, e.g. `items/cor-homology-of-spheres.md`); no scaffold item defines the term either. Since
the term is standard and already used in the published corpus, I record this as uncertainty, not a
confirmed gap; an optional one-line addition to the A definition ("facets, i.e. the maximal
simplices under inclusion") would remove it.

### 6.3 Convention note: published `S_n` is 0-based, the S_4 examples are 1-based

The published `def-finite-symmetric-group-and-permutation-notation` and
`def-inversions-inversion-number-and-sign` use `{0,…,n−1}` and one-line lists of `0,…,n−1`, while
B1/B2/the quotient counterexample write `2341`, `s₁=(1 2)`, etc.; the batch-2 type-A clause writes
`s_i↦(i i+1)` and `ℓ=inv` on the same published items, and the published adjacent-transposition
theorem also uses `(1 2),…,(n−1 n)`, so the corpus mixes label sets. Recommended for Step 3b
(local, no scope impact): declare once in B1 the dictionary between the 1-based display and the
published 0-based one-line convention, or author the examples in the published convention.

### 6.4 Incidental observation (explicitly not a scope finding)

`thm-cg-bruhat-eulerian-intervals-and-mobius` strategy, Case 1, second half: "for `z` with
`ℓ(zs)<ℓ(z)`, lifting case (1d) applied to `u≤z` (with `ℓ(us)>ℓ(u)`) gives `u≤zs`". Against the
batch-12 table as stated (case (d): `ℓ(vs)>ℓ(v)`, `ℓ(us)<ℓ(u)`), the applicable case for the pair
`(u,z)` with `ℓ(zs)<ℓ(z)` and `ℓ(us)>ℓ(u)` is (1a) (case (a): `ℓ(vs)<ℓ(v)`, `ℓ(us)>ℓ(u)`, giving
`us≤v` and `u≤vs`). Proof correctness is outside this review's scope; recorded for the Step-3b
author. No published item is affected.

## 7. Uncertainty and limitations

- Scope review only: the seven items are proof contracts; their proofs and the proofs of the in-run
  suppliers in batches 2/4/5/10/12 remain Step-3 work. I verified the finite `S_4` data (§5) but did
  not verify any proof.
- The source bodies were not re-read by me today; I relied on the coverage file's fetch-verified
  stamps, dispositions and reasons, and read the cited supplier statements rather than their proofs.
  Printed locators are accepted from the coverage file and are not independently re-checked here.
- §6.1 is confirmed against the current manifests and tooling; §6.2 and §6.3 are uncertainties;
  none is a missing topic or result of the designed pair.

## 8. Decision and next action

Record **sufficient** for the A page: the planned definitions, results and examples of CG-13 are
present and adequately cover the intended subject, the sources cover the planned claims with all
results dispositioned, and every prerequisite is present in the published library or the current
scaffold with its homes inside the declared requires closure. No merger or enrichment is
recommended. Step 3b: apply §6.1's local repair to B2 (or obtain an eligible supplier), address the
§6.3 convention and the optional §6.2 definition, and keep §6.4 in view; then author the seven
items. This report records no item approval and no owner decision.
