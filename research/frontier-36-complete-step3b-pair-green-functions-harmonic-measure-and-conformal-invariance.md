# Step 3b report — pair `green-functions-harmonic-measure-and-conformal-invariance` (batch 26)

Run: `frontier-36-complete`. Role: `alpha-high`. Label:
`step3b-pair-green-functions-harmonic-measure-and-conformal-invariance-3144bc2ca1d61136`.
Owned pair: A `green-functions-harmonic-measure-and-conformal-invariance`
(order 831, 15 items after owner repair; 14 in the original author dispatch) and B `green-functions-harmonic-measure-and-conformal-invariance-examples`
(order 832, 7 items). Output page carrier: `research/frontier-36-complete-batch-26.pages.json`.

## Deliverables and current state after owner repair

| Artifact | State |
|---|---|
| `research/frontier-36-complete-batch-26.pages.json` | 2 pages, 22 items after an owner-added A logarithmic-modulus supplier; every row has current dependencies and recomputed levels |
| `research/frontier-36-complete-batch-26.proof-contracts.json` | 22/22 entries, 0 errors / 0 warnings under strict check; B-leaf citations replaced by the A supplier or local derivations |
| `items/<id>.md` (22 files) | 21 files in the original author dispatch and one A supplier added by the owner; focused precheck/rendercheck and batch content policy pass |
| `research/frontier-36-complete-step3b-review-<id>.json` (22 receipts) | original author supplied 21; owner refreshed affected decisions and recorded the added supplier with current transitive dependency hashes |
| `research/frontier-36-complete-batch-26.coverage.json` | 51 harvested results, 0 errors/warnings with require-destination; the owner added a logarithmic-potential disposition for the new A supplier |
| `library/complex-analysis/green-functions-harmonic-measure-and-conformal-invariance*.md` (2 pages) | required Step-3b page files omitted by the original author; created by the owner after dispatch exit, with A/B inventories and rendering checked |
| `research/frontier-36-complete-batch-26.cross-batch-dependencies.json` | 13 rows, all `verified` (the 5 original edges plus the 8 further declared batch-11 edges found by `frontier-dependency-ledger collect`); 0 orphaned reviews |
| `research/frontier-36-complete-batch-26.notes.md` | Step-1 scaffold evidence (unchanged by this dispatch) |

## Checkpoint log (authored in dispatch dependency-level order)

- Level 0: `def-green-function-plane-domain`, `def-harmonic-measure-plane-domain`,
  `lem-analytic-exhaustion-of-plane-domains`, `lem-planar-barrier-controls-perron-solutions`,
  `ex-upper-half-plane-harmonic-measure-density`.
- Level 1: `thm-green-function-simply-connected-plane-domain`,
  `thm-harmonic-measure-is-well-defined`, `thm-planar-green-kernel-conformal-covariance`,
  `ex-green-function-disc-with-nonzero-pole`, `ex-interval-harmonic-measure-in-upper-half-plane`.
- Level 2: `thm-harmonic-measure-conformal-invariance`,
  `thm-harmonic-measure-disc-poisson-density`,
  `thm-harmonic-measure-maximum-principle-and-domain-comparison`,
  `ex-annulus-harmonic-measure-of-boundary-circles`,
  `ex-slit-plane-green-function-from-square-root`.
- Level 3: `ex-harmonic-measure-of-a-disc-arc`.
- Level 4: `thm-green-function-exists-on-bounded-plane-domains`.
- Level 5: `lem-analytic-boundary-green-corrector-is-smooth`,
  `ex-punctured-disc-irregular-boundary-green-function`.
- Level 6: `thm-green-function-uniqueness-symmetry-and-monotonicity`.
- Level 8: `thm-green-function-harmonic-measure-representation` (authored this session:
  18 numbered steps; compactness; uniform integrability of the logarithmic kernel;
  Green existence, containment bound and continuity off the diagonal; the C¹/analytic
  interface; the volume potential `V` with `ΔT_V = −T_f` by Fubini and the batch-11
  Dirac identity; Weyl's lemma giving `u−V` harmonic; boundary values via
  `V→0`; the representation formula with the exact `−1/(2π)` coefficient; and the
  dense-class passage identifying `ω` with `−(1/2π)∂_ν g ds` in the analytic case).
  Two proof repairs were required by the strict-contract gate: `4.2` derives
  `J(δ)→0` from dominated convergence (the cited finiteness alone did not), and
  `9.1` justifies second countability of the compact metric boundary from rational
  boxes; the dependency typo `thm-green-function-representation-formula` was corrected
  to `thm-green-representation-formula`.

Local scaffold repairs actually made: `lem-analytic-exhaustion-of-plane-domains`
(rewritten around rational discs + polynomial bumps + Sard + the analytic implicit
function theorem; Statement repaired to the one-sided real-analytic graph form consumed
by the corrector lemma and the bounded `C^1`-domain definition), and
`ex-punctured-disc-irregular-boundary-green-function` (boundary-datum analysis repaired:
`H_b = h` by dominating every Perron lower function with `w = v − h + ε log|z|`, and
`h + ε log|z|` exhibited as a lower function, so the puncture limit is `log(1/|a|) > 0`).
Declaration repair: `lem-analytic-boundary-green-corrector-is-smooth` now declares
`def-barrier-and-regular-boundary-point`, which its Statement cites (a `depcheck`
finding, fixed before the receipts were re-recorded).

## Original author dispatch checks (before owner artifact and B-leaf repair)

| Command | Result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts items/<21 explicit paths>` | `19 checked, 0 failing` (definitions have no proof steps) |
| `node tools/rendercheck.mjs items/<21 explicit paths>` | OK — no wikilink in math, balanced delimiters, KaTeX parses, YAML parses |
| `node tools/content-policy.mjs research/frontier-36-complete-batch-26.pages.json` | 21 scoped items, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs research/frontier-36-complete-batch-26.proof-contracts.json --strict` | 0 errors, 0 warnings, 21/21 |
| `node tools/item-dependency-levels.mjs check --run frontier-36-complete` | 933 items, 60 pages, maximum level 18 — pass |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic and consistent (379 itemless planned pages outside this scope) |
| `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-26.coverage.json --require-destination` | 1 page, 50 harvested, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-36-complete-batch-26.pages.json` | 21 items, 0 normalized, 0 errors |
| `node tools/manifest-integrity.mjs --run frontier-36-complete` | 60 pages owed, 60 in the manifests, no scope drift |
| `node tools/extcheck.mjs --quiet` | OK (pre-existing published warnings elsewhere; none for batch 26) |
| `node tools/depcheck.mjs --quiet` | FAIL whole-run: 269 findings, **none for batch 26** (e.g. `library/scheme-theory/finite-proper-and-projective-morphisms-examples.md` lists items that do not exist) |
| `node tools/fwdcheck.mjs --quiet` | FAIL whole-run: 13 findings, **none for batch 26** (e.g. `items/thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces.md` has an undeclared forward reference to page #609) |
| `node tools/prosecheck.mjs --strict` | OK — no positional claim contradicts the spec |
| `node tools/step3-decisions.mjs check --run frontier-36-complete --phase final` | all 21 batch-26 items closed (run-wide 501/933; other batches still in flight) |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete` | refreshed; batch-26 edges 13, unreviewed 0, orphaned reviews 0 |

## Axiom-of-Choice / Dependent-Choice accounting

- `thm-green-function-simply-connected-plane-domain` assumes **AC** and uses it only
  through `thm-riemann-mapping-theorem`; the transport formula itself is choice-free.
- `thm-green-function-exists-on-bounded-plane-domains`, `ex-punctured-disc-irregular-boundary-green-function`
  and `thm-green-function-uniqueness-symmetry-and-monotonicity` assume **Countable Choice**,
  used exactly through the cited batch-11 distributional identity, the published Perron
  envelope theorem, and the batch-11 PDE symmetry/representation theorems.
- `def-harmonic-measure-plane-domain`, `thm-harmonic-measure-is-well-defined`,
  `thm-harmonic-measure-disc-poisson-density`, `thm-harmonic-measure-conformal-invariance`,
  `thm-harmonic-measure-maximum-principle-and-domain-comparison`,
  `thm-green-function-harmonic-measure-representation`, `ex-harmonic-measure-of-a-disc-arc`
  and `ex-annulus-harmonic-measure-of-boundary-circles` assume **Dependent Choice**,
  feeding the published positive `C₀` Riesz–Markov theorem; the representation theorem
  also states that DC implies CC and draws CC through Weyl's lemma and the PDE
  representation theorem.
- `ex-upper-half-plane-harmonic-measure-density` and
  `ex-interval-harmonic-measure-in-upper-half-plane` assume **AC_ω**, used only for the
  improper-Riemann-to-Lebesgue identification; their arctangent calculations are choice-free.
- The exhaustion lemma, the local barrier lemma, the corrector lemma, the conformal
  covariance theorem, the disc kernel example and the slit-plane example are choice-free
  (least-index selections from explicitly enumerated countable rational families, least
  positive integers, and explicit constructions only).
- Every item that assumes a choice principle declares the corresponding definition id in
  `deps` (`def-axiom-of-choice`, `def-countable-choice`, or `def-dependent-choice`); no
  item infers arbitrary-index choice from finite choice.

## Local suppliers added (beyond the design target list)

`lem-analytic-exhaustion-of-plane-domains` (analytic-boundary exhaustion for symmetry),
`lem-planar-barrier-controls-perron-solutions` (barrier→regularity from the lower Perron
family, bypassing the published barrier implication), and
`lem-analytic-boundary-green-corrector-is-smooth` (regularity plus `C²` correctors at
analytic boundaries). All three are registered in the manifest, coverage, contracts and
authored items.

## Published concerns (for the canonical ledger; report only, nothing edited here)

1. **`thm-perron-envelope-is-harmonic` (published, unmodified in the working tree) —
   axiom-strength gap, statement true.** Its proof step 2.1 selects points `z_n → z_0`
   and then, for every `n`, a lower function `v_n` with `v_n(z_n) > U_φ(z_n) − 1/n`:
   countably many arbitrary selections from a varying family of nonempty sets, while the
   item declares no choice principle in its Statement or deps. Confidence: high on the
   mechanism (read directly in the current proof text); this is a missing hypothesis, not
   a false claim. Required suppliers: the Perron family definition and local boundedness
   lemmas already cited. Repair strategy: declare Countable Choice (or a specific
   selection principle) in the Statement and deps, or replace the selection with a
   proved choice-free construction. Batch-26 consumers `thm-green-function-exists-...`
   (CC declared) and `thm-harmonic-measure-is-well-defined` (DC declared) already carry
   strong enough assumptions, so no consumer in this dispatch is weakened.
2. **`thm-barrier-characterization-of-regular-boundary-points` (published) — previously
   reported defect now repaired in the working tree (uncommitted).** The forward
   implication previously applied the maximum principle to `H_φ ± φ(ζ) ± ε + Ab` as if
   `H_φ` had boundary limsup at irregular points; the current text (deps updated,
   `verification.audited: 2026-09-27`) instead applies it to `v + Ab − φ(ζ) − ε` for an
   arbitrary lower function `v`, which is the Axler–Bourdon–Ramey route. I verified the
   rewritten steps 1.1, 2.1 and 3.1 by hand and they are sound as written. No batch-26
   item depends on this item (the pair consumes its own local barrier lemma).
3. **`thm-exterior-disc-and-exterior-cone-points-are-regular` (published, unmodified) —
   consumer of item 2.** Its two constructions are sound and its inference `[L1] ⇒ regular`
   is licensed once the repaired statement-level theorem is available; it needs the
   reconciler to record the published-consumer event for the item-2 repair and to recheck
   it against the committed repair.

No other potentially defective published item was found in this dispatch. Suspicion
level: items 1 and 3 are the only remaining open published concerns touching this
neighbourhood; both are recorded here rather than edited.

## Plan, scope, and owner artifact repair

- `research/plan-spec.json` carries this A page with `requires` equal to the manifest's
  seven prerequisites and an **empty item list** for both pages, so there is no planned
  item inventory to compare. The owner-created Step-3b page files now carry the 22-item manifest inventory; Step 4 consumes those files.
- The manifest `statement` fields are the Step-1 scaffold synopses, not the authored
  `## Statement` / `## Definition` sections — the same convention as batches 23–27. Step 4
  should take the authored sections from `items/<id>.md`.
- The original author omitted both required Step-3b page files. After dispatch exit, the owner created the A and B files under library/complex-analysis/, checked their inventories, and passed rendercheck on both. The files are owner repair artifacts, not original author deliverables.
- `manifest-integrity` reports no scope drift; `validate-plan` reports no cycle or
  ordering conflict for the pair.

## Open obligations

- The derived unified ledger `research/frontier-36-complete-cross-batch-dependencies.json`
  was regenerated with the sanctioned atomic, lock-protected command
  `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete` after the
  input edit; the batch input file above is the authored carrier and was not hand-merged
  into the unified file.
- The 13 cross-batch rows to batch 11 are `verified` at the **interface** level, against
  the supplier items' current `status: draft` Statements. The supplier proofs remain
  subject to their own Step-3/5 review; any later change to a supplier Statement
  invalidates the corresponding row, and for `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`,
  `thm-green-function-symmetry` and `thm-green-representation-formula` it also invalidates
  the batch-26 item receipts whose closures contain them.
- The published concerns above are owner-held repairs; batch 26 does not consume the
  defective texts (the barrier implication is bypassed by the local lemma, and the Perron
  envelope theorem is consumed only under stronger declared choice assumptions).
- Whole-run `depcheck` (269) and `fwdcheck` (13) failures belong to other groups' files
  and are reported here, not repaired.
- This dispatch does not send its own authored items through a Step-3 self-review; they
  enter Step 4 with the owner-created page files, post-repair inventory comparison,
  current contracts, receipts and checks. This does not represent independent judge review.


## Owner repair after dispatch exit

The owner created the two required page files omitted by the original author. The
owner then repaired 12 B-leaf dependency edges found by repo-wide depcheck.
A new A item, lem-log-modulus-is-harmonic-off-its-centre, proves the smooth
harmonicity of log|z-a| by shifted-coordinate differentiation and replaces
nine direct citations to the published B example. The analytic-exhaustion
lemma proves convex path connectedness by line segments and compact distance
attainment by its existing A extreme-value theorem, replacing two B examples.
The Green definition retains its selected clauses and uses a local
punctured-disc candidate argument in its illustrative remark, replacing one
B counterexample citation without asserting puncture irregularity there.

The owner synchronized all affected item dependencies, both page inventories,
the batch manifest and its dependency levels, the coverage destination, and
all 22 proof contracts. The existing 13 cross-batch interface rows to batch 11
retain their suppliers; no new cross-batch interface was introduced. The
Step-3 scope and affected item receipts were refreshed after the carriers
stabilized. This repair is an owner intervention, not independent author or
judge certification.
