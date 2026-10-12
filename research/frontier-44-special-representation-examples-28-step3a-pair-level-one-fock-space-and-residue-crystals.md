# Step 3a dispatch report — `level-one-fock-space-and-residue-crystals`

- Run: `frontier-44-special-representation-examples-28` (batch 23, orders
  1576/1577, category `special-topics-in-representation-theory`; design label
  SYMR-10 of the symmetric-group track, with the QG-6 seam).
- Pair: A `level-one-fock-space-and-residue-crystals` (5 items: 2 definitions,
  1 lemma, 1 proposition, 1 theorem; declared dependency levels 13/15/18/19/21)
  and B `level-one-fock-space-and-residue-crystals-examples` (3 items:
  2 examples, 1 counterexample; levels 19/20/21).
- Role: alpha scope review of this pair only. No scaffold was edited; this
  report and the `record-scope` receipt are the only outputs. This is not an
  item approval, not a proof audit, and not an owner record.
- Decision: **`sufficient`** for the pair's promised scope — all 8 design rows
  are present with the designed ids/kinds, the coverage is fully dispositioned
  and was re-verified against all six source bodies today, and no prerequisite
  was found absent from the published library plus the current scaffold.
  Non-blocking observations are in §5.
- Date: 2026-10-10.

## 1. Inputs read

- Manifest: `research/frontier-44-special-representation-examples-28-batch-23.pages.json`
  (both pages, all 8 items with statements, strategies, kinds, deps, levels);
  batch notes `…-batch-23.notes.md` (scaffold reconciliation, supplier
  findings 1–5, the dated owner correction); coverage
  `…-batch-23.coverage.json`; dependency record
  `…-batch-23.cross-batch-dependencies.json` (27 edges, all with recorded
  owner/current-contract interface evidence); scope ledger
  `…-scope-ledger.json` (both pages owed, batch 23); gate page list
  `…-frontier-gate-pages.json` (both pages selected); `item-dependency-levels`
  and `manifest-deps` re-run for this batch; all 8 step-1 readiness records
  (`…-step1-<id>.json`, all `ready`).
- Design/prose: `research/plan-symmetric-group-representations-track.md`
  (SYMR-10 row, §7 dependency plan), `research/symmetric-group-planning/pages.json`,
  and the binding item inventory `research/symmetric-group-planning/proposed-inventory.md`
  §SYMR-10 (5 A rows + 3 B rows); `research/plan-spec.json` orders 1576/1577
  (ids, titles, kind, category, companion, `requires`; `items: []`);
  `research/plan-quantum-groups-track.md` rows QG-6 (lines 199–232, 441–445,
  476–479: the seam sentence that SYMR-10 consumes QG-6 without re-authoring
  the quantum affine relations, semi-infinite wedge or Misra–Miwa crystal).
- Owner/run records: `…-owner-authoring-direction.md` §"Final level-one Fock
  and modular interface direction" (2026-10-08: batches 9/23 retain 35 native
  ids / 37 subjects, 24A+5B and 5A+3B, adding only the finite-residue-cube and
  rank-one-Serre suppliers); `…-owner-quantum-fock-repair.md`;
  `…-owner-quantum-fock-final-interface-proposal.json`;
  `…-owner-quantum-fock-focused-checks.json`; `…-owner-current-supervision.json`.
- Supplier pages read for interface scope: batch 9 A `quantum-affine-type-a-and-level-one-fock-space`
  (24 items, including the corrected signature definition, finite-residue cube
  lemma, whole-Fock crystal theorem, empty-component theorem and basic
  lower-global theorem), batch 22 A `modular-branching-and-the-good-node-crystal`
  (13 items, including the residue-signature definition, crystal-operator
  definition, reachability proposition and good-node socle theorem), the batch 8
  `thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible` statement,
  and the batch 7 `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals`
  statement.
- Published prerequisites inspected on disk: `def-removable-and-addable-nodes-of-a-partition`,
  `def-partition-young-diagram-and-conjugate-partition`,
  `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
  `def-axiom-of-choice` (all `status: published`, content matching the declared
  uses).
- Sources: see §3.

## 2. Design ∶ scaffold comparison (scope only)

The current design (proposed-inventory §SYMR-10, itself the reconciled design
of record after the documented Step-1 amendments) lists exactly 5 A rows and
3 B rows; the manifest carries those 8 items with the designed ids and kinds
and no other item. No design row was dropped or merged.

| design row (SYMR-10) | manifest item | kind |
|---|---|---|
| residue/restricted/regular convention, linear transport J, label dictionary | `def-symmetric-group-level-one-residue-and-partition-label-convention` | definition |
| node reading orders and the conjugation dictionary | `lem-level-one-node-order-and-conjugation-dictionary` | lemma |
| QG Fock arrows = modular good-node operators | `prop-qg-fock-crystal-arrows-agree-with-the-modular-good-node-operators` | proposition |
| restricted component = basic crystal in the symmetric-group convention | `thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention` | theorem |
| level-one global-basis transition polynomials in the symmetric-group convention | `def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention` | definition |
| rank-four charge-zero crystal window at e = 3 | `ex-level-one-charge-zero-crystal-through-rank-four-at-e-three` | example |
| QG and transported E/F tables on (2,1) at e = 3 | `ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` | example |
| full Fock is not the irreducible basic module | `cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module` | counterexample |

The deviations recorded in `…-batch-23.notes.md` (a local node-order/conjugation
lemma inserted ahead of the arrow comparison; the arrow agreement stated
through the conjugation dictionary rather than as an unqualified label
identity; the `e = 0` clause read in Kleshchev's quantum-characteristic sense;
extra genuine dependencies; the residue index of the modular socle; inherited
AC) are all present in the current design and manifest and stay inside the
promised subject; they are not scope expansion.

The intended subject is the convention bridge, not QG-6 itself. The seam is
visible and respected: all quantum-affine action, semi-infinite wedge, full
partition crystal and ambient/basic lower-global constructions live on the QG-6
page; this pair only transports them and compares conventions. The guarding
distinctions the design demands are stated in the items themselves: linear
`J(M_lambda)=|lambda'>` with reflected colors and non-inverted `q`; restricted
vs regular labels; good = removable/`e` and cogood = addable/`f` in both
conventions; `p = e` prime only in the symmetric-group specialization; the
`e = 0` boundary as a source quantum-characteristic statement; the
conjugation model map kept distinct from the same-model Mullineux involution;
and lower transition data kept distinct from upper adjoint data. The B page
deliberately omits outgoing rank-4 edges instead of declaring them zero and
separates ordinary Chevalley coefficients from normalized crystal arrows.

## 3. Source coverage

The pair is backed by 6 sources (page A 6, page B the first 3), 42 harvested
content rows in total: 19 `included`, 10 `inline`, 1 `already-published`, 12
`out-of-scope`, 0 `missing`/`deferred`. All six bodies were re-obtained live
from the recorded URLs in this environment on 2026-10-10 and match the recorded
byte counts and sha256-16 stamps exactly; `source-fetch-check` in check mode
reports 9/9 fetch-verified and 9/9 resolved.

| source | bytes / pages | sha256-16 | re-verified |
|---|---|---|---|
| A. Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras*, arXiv:0909.4844 | 746 493 / 66 | `8685199608967fa7` | yes |
| M. Fayers, *Partition models for the crystal of the basic U_q(sl_n)-module*, arXiv:0906.4129 | 262 474 / 31 | `afea008b148b9600` | yes |
| B. Leclerc, *Fock space representations* (author-hosted lecture notes) | 302 817 / 38 | `32da60cfed68246e` | yes |
| J. Brundan, *Modular Branching Rules and the Mullineux Map …*, author manuscript | 321 117 / 34 | `c9739b545e24407f` | yes |
| Kashiwara–Miwa–Petersen–Yung, *Perfect crystals and q-deformed Fock spaces*, arXiv:q-alg/9603025 | 551 775 / 74 | `99bb8974806e51be` | yes |
| Lascoux–Leclerc–Thibon, *Canonical bases of q-deformed Fock spaces*, arXiv:q-alg/9602025 | 145 252 / 8 | `289637f0f37050c7` | yes |

Load-bearing passages read directly to check the dispositions (not merely
located): Kleshchev §3.4 top-to-bottom ordering, `-+` cancellation, leftmost
surviving `-` = good, rightmost surviving `+` = cogood, inverse property
(3.13), RP^κ generation (3.14); Example 3.2(i) `e > 0, l = 1` ⇒ `e`-restricted
partitions and Example 3.2(ii) for `e = 0`; Remark 5.5
`D^mu ≅ D(mu^t) ⊗ sgn`; Theorem 7.4(i) simple socle; Theorem 8.2(ii) the
crystal is that of `V(Λ)`. Fayers §2.3: Theorem 2.1 quoting [MM, Theorem 4.7],
the `n`-regular counterpart with the column order reversed and the explicit
Mullineux-map isomorphism between the two models; §4 the `±`-sequence
reduction (`+0…0-` ↦ zeros; good = last `-`, cogood = first `+`). This also
confirms the pair's expressed QG rule — increasing-content order, cancel `-+`,
`f` = last `+`, `e` = first `-` — is the reversal-equivalent form of Fayers'
`n`-regular model, so the "included" disposition is faithful to the source.
Leclerc: node formulas (38)(39) with the smaller-diagram exponent and
Exercise 15's `n = 2` calibration; Propositions 12 and 14 (global basis on
`n`-regular labels). LLT Theorem 4.1 (unitriangular lower global basis,
`n`-regular labels = lower crystal basis of `M(Λ0)`). Brundan Remark 2.4(II)
(transpose dictionary of normal nodes with the residue convention). KMPY
§4.1–4.3 and §5.2 (level-one Fock space) located in the body.

Out-of-scope rows carry reasons consistent with the design: the same-model
Mullineux algorithm (Theorem 11.8), higher-level/KLR/W-algebra material,
Fayers' general arm-sequence family and its proof architecture, the
Heisenberg/category-O and symmetric-function material, Brundan's large
partition Example 2.8 (carried by the batch-22 companion), and the QG-6
supplier construction. The B-page computations that are derived rather than
printed (the rank-four window tables, the (2,1) tables and the size-4
counterexample) are labelled as derived local calculations in the items
themselves; Leclerc Exercise 15 is used only as a calibration.

## 4. Prerequisites and unmet-prerequisite check

- Direct dependencies: 22 distinct ids across the 8 items — 18 current-scaffold
  items (batch 9: 8; batch 22: 4; batch 7: 1; batch 8: 1; batch 23 internal: 4)
  plus 4 published items (the two partition definitions, the James
  regular/restricted sign-dictionary proposition, and `def-axiom-of-choice`).
- Transitive closure: following manifest deps and published-item frontmatter,
  the full closure over the pair (1 240 items) resolves completely to published
  items or to items present in the current run manifests; zero unresolved ids.
  `manifest-deps` on batch 23 reports 8 items, 0 errors;
  `item-dependency-levels --run` reports 858 items across 100 pages with no
  cycle (maximum level 47).
- Page requirements: A requires batch 22 and batch 9; batch 9 itself requires
  batches 7 and 8, so the item-level edges into batches 7/8 lie inside the
  required closure. All 27 cross-batch edges of this pair have recorded
  owner/current-contract interface evidence in
  `…-batch-23.cross-batch-dependencies.json` (`status: open` means only that
  authored-page review of the suppliers is still owed, as expected at Step 3a).
- Consumer role: the B page depends on the A page; the only other planned
  consumer is `ariki-categorification-and-graded-decomposition-numbers`
  (batch 25, in-run), which consumes A1, A4 and A5 through 1 page edge and 14
  item edges (1 already `verified`, 14 `open` pending authored supplier
  review). No published library item references any of the A-page item ids.
- Historical supplier findings: the batch-23 notes flagged four defects in
  batch-9 items (wrong `e`-restricted gloss; a signature rule contradicting the
  Fock module action; the crystal theorem's arrow identification; conflating
  conjugation with the Mullineux involution). The current batch-9 manifest
  shows all four repaired: `def-level-one-partition-fock-space-and-node-residues`
  now states `lambda_r - lambda_(r+1) < e` and "a column of height e is
  allowed"; `def-good-and-cogood-nodes-by-residue-signature-reduction` now
  cancels `-+` in increasing-content order with `f` = last `+`, `e` = first
  `-`; `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`
  now operates on all partitions with the corrected signature; and
  `def-regular-partition-label-convention-and-mullineux-crystal-involution`
  now distinguishes the model-comparison conjugation from the same-model
  sign involution.
- **Unmet prerequisites:** none confirmed. No required claim was found absent
  from both the published library and the current scaffold, so no scaffold
  addition is recommended. Scope-review uncertainty is limited to proof
  adequacy of the in-scaffold suppliers (their own authoring/audit obligations
  belong to Steps 3–8), which is outside this review.

## 5. Non-blocking observations

1. The B page has no worked example dedicated to the global-basis transition
   side (A5); the design's B inventory is exactly the three items present, and
   A5 carries an inline `e = 2` example (`G_sym^*11 = (M11 + qM2)/(1 + q^2)`).
   This is adequate for the promised scope; a future enrichment example would
   be optional.
2. Framework proof inputs named in strategies but not direct deps (the batch-9
   finite-residue cube lemma, the batch-9 Mullineux definition) are reachable
   transitively through declared deps (`thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph`,
   `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis`);
   Step 3 bookkeeping may still want them declared directly.
3. The ariki consumer must honour the interfaces fixed here (linear `J`,
   reflected colors, restricted vs regular labels, lower vs upper bases,
   `p = e` prime only for symmetric groups); the manifest statements state
   exactly these guards.

## 6. Recording

```
node tools/step3-decisions.mjs record-scope --run frontier-44-special-representation-examples-28 \
  --page level-one-fock-space-and-residue-crystals --decision sufficient --reason "<see receipt>"
```

Report path: `research/frontier-44-special-representation-examples-28-step3a-pair-level-one-fock-space-and-residue-crystals.md`.
