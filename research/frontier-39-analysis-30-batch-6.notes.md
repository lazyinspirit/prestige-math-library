# Frontier 39 analysis 30, batch 6: Step 1 construction notes

Owned pair: `bmo-john-nirenberg-and-h1-duality` (A page, order 458.02609) and
`bmo-john-nirenberg-and-h1-duality-examples` (B page, order 458.02610), both
`fourier-analysis`. No published item, shared plan, engine state or verdict was
edited. `research/frontier-39-analysis-30-owner-authoring-direction.md` does not
exist for this run; `research/frontier-39-analysis-30-step1-owner-resolution.md`
concerns PDE-17/18, Hamilton–Jacobi, Kostant and Bochner/LCA, none of them in
this batch. Alpha's Step-1 drift note records `VERDICT: no-drift` for this pair
and directs the converse duality through a local mean-zero L²→H¹ estimate plus
glued Riesz representatives, with general pairings built only as extensions from
finite atomic sums; the scaffold follows exactly that route. The batch consumes
the in-run FR-9 scaffold (batch 5), published FR-7/FR-8 items and published
measure-theory and functional-analysis items; it supplies batch 7
(Littlewood–Paley), whose owner owns that review row.

## Design, plan and conflicts

- Controlling design: section FR-10 of `research/plan-fourier-analysis-track.md`
  (heading at line 804, per-pair row at line 40). It fixes the A/B inventory, the
  cube-based BMO convention modulo constants, the John–Nirenberg stopping-cube
  engine, the finite-atom pairing for the canonical map, the local mean-zero L²
  estimate and the Riesz-representative gluing for the converse, the L∞→BMO
  endpoint by local/far decomposition, and the hard obligations, all of which
  are preserved: the zero-seminorm case is interpreted through an a.e. constant
  representative; the dual is BMO modulo constants; pairings are defined on
  finite atoms and never by an unjustified global Lebesgue integral; the L∞
  extension is a BMO class, not a normalised function.
- `research/plan-spec.json` carries the pair at orders 458.02609/.02610, kinds
  A/B, category `fourier-analysis`, the same `requires` list as the dispatch,
  and empty item arrays. No page-level plan conflict exists.
- Every out-of-run supplier page reached by an item `deps` edge is in the
  transitive `requires` closure of the A page (checked against
  `plan-spec.json`): the FR-7 and FR-8 pages, FR-9,
  `the-maximal-function-and-lebesgue-differentiation`,
  `the-baire-principles-of-functional-analysis`,
  `hilbert-space-geometry-and-riesz-representation`,
  `orthonormal-bases-parseval-and-fourier-series`,
  `filters-and-ultrafilters` (ultrafilter lemma) and
  `banach-alaoglu-goldstine-and-krein-milman`.
- Recorded design defects, not escalated (the FR-10 table is read by ID, not by
  row number): it numbers two different rows `11`
  (`lem-the-dual-representative-has-uniform-bmo-oscillation` and
  `thm-real-hone-bmo-duality`); the IDs are unique and each item is minted once.
- Recorded design/plan reconciliation: design row 6 is
  `cor-linfinity-embeds-properly-into-bmo` and asserts strictness. Strictness is
  proved by the B-page leaf `ex-logarithm-is-in-bmo-but-not-linfinity`, and an A
  item may not depend on a B item, so the A item is minted as
  `cor-linfinity-embeds-continuously-into-bmo` (continuous injection, with
  strictness explicitly deferred to the companion); the design's own rationale
  column already placed the strict witness on B.
- Recorded source-range observation: the FR-10 design cites Kinnunen ch. 3,
  printed pp. 34–64, while the harvest reads §§3.1–3.5, printed pp. 34–56; the
  unused remainder (completeness of BMO, local exponential integrability) is
  disposed `out-of-scope` with result-specific reasons.

## Inventory

26 items, every one with an explicit `deps` array and a `dependency_level`
consistent with the run-wide computation (maximum level 8 on A, 4 on B; the
batch is inside the 100-item page cap).

A page, 20 items — the fourteen designed FR-10 ids:
`def-bmo-seminorm-and-quotient-by-constants` (0),
`lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` (1),
`lem-john-nirenberg-stopping-cubes-have-geometric-decay` (1),
`thm-john-nirenberg-exponential-inequality` (2),
`cor-bmo-lp-oscillation-norms-are-equivalent` (3),
`cor-linfinity-embeds-continuously-into-bmo` (1),
`lem-bmo-functions-pair-uniformly-with-hone-atoms` (1),
`thm-bmo-defines-a-bounded-functional-on-hone` (6),
`lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` (4),
`lem-hone-functional-has-compatible-local-ltwo-representatives` (5),
`lem-the-dual-representative-has-uniform-bmo-oscillation` (6),
`thm-real-hone-bmo-duality` (8),
`thm-calderon-zygmund-operators-map-linfinity-to-bmo` (1),
`cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` (2);
plus six necessary local prerequisites:

1. `lem-range-truncations-preserve-bmo-seminorm` (1) — the Banach–Alaoglu step
   of `thm-bmo-defines-a-bounded-functional-on-hone` needs an L∞ approximant of
   a general BMO class with a uniform seminorm bound; Kinnunen Theorem 3.6(1)
   and Remark 3.7 give the 3/2 one-sided and 9/4 two-sided constants and the
   componentwise complex case gives the 9/2 used.
2. `lem-ltwo-atoms-have-uniform-hone-quasinorm` (3) — the FR-9 supplier
   `lem-an-hp-atom-has-uniform-hp-quasinorm` covers the (p,∞,s) atoms of its
   atomic decomposition; the converse-duality Riesz step needs the L²-normalised
   (1,2)-atom bound, proved here directly from the grand-maximal
   characterisation and the Hardy–Littlewood L² bound (Williams Prop 7.35).
3. `lem-linfinity-bmo-functions-dualise-hone-boundedly` (5) — the bounded case
   of the canonical map, from finite atomic sums.
4. `lem-finite-atomic-sums-are-dense-in-hone` (5) — density is used both to
   extend the atom pairing uniquely and to identify the weak-star cluster point.
5. `lem-bmo-classes-are-determined-by-their-atom-pairings` (7) — injectivity of
   the canonical map (uniqueness of the BMO class), needed by the duality.
6. `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators` (0) —
   verifies the published FR-8 CZ contract (off-support representation, L² norm
   at most 1, standard 1-Hölder constants) for the FR-7 Hilbert and Riesz
   transforms before the endpoint corollary consumes it.

The remaining A items have levels 1–8 as listed in
`research/frontier-39-analysis-30-batch-6.pages.json`. B page, 6 items:
`ex-logarithm-is-in-bmo-but-not-linfinity` (2),
`ex-bmo-seminorm-is-unchanged-by-adding-a-constant` (1),
`cex-bmo-functions-need-not-be-globally-integrable` (3),
`ex-john-nirenberg-tail-integration` (4),
`rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` (1), and
`ex-lacunary-exponential-sums-belong-to-bmo` (1). No B-page item is a
dependency target anywhere in the run.

## Dependency and supplier audit

- `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` is the
  designed scale-control tool and has no transitive consumer in the run
  scaffold. `cor-bmo-lp-oscillation-norms-are-equivalent` is consumed by
  `ex-john-nirenberg-tail-integration`, `lem-bmo-classes-are-determined-by-their-atom-pairings`
  and, through the latter, `thm-real-hone-bmo-duality`;
  `thm-calderon-zygmund-operators-map-linfinity-to-bmo` is consumed by
  `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo`. All other
  dependencies are inside the A page or lead to the suppliers below. No cycle,
  no forward reference and no B-page dependency exists.
- The 14 batched cross-batch rows
  (`research/frontier-39-analysis-30-batch-6.cross-batch-dependencies.json`) are
  one page row to the FR-9 A page and thirteen item rows to FR-9 scaffold items;
  each records the exact claim and hypothesis the page needs and was marked
  `verified` after reading the batch-5 FR-9 scaffold. Interfaces re-read for
  this audit: `def-hp-atom-with-moment-order` (p=1 gives the classical
  |a| ≤ |Q|⁻¹ zero-mean atoms and the (p,q) variants agree up to support
  constants), `def-grand-maximal-test-class-of-order-n` (N ≥ ⌊n/p⌋+1
  admissible), `def-real-hardy-space-by-a-radial-maximal-function` (H¹ norm,
  norm status at p=1), `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`
  (Borel measurability used to integrate M_N a),
  `thm-maximal-function-characterisations-of-real-hardy-spaces` (M_N ⇄ M⁰),
  `thm-atomic-characterisation-of-real-hp` and
  `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` (ℓ¹ atomic
  representation, S′ and H¹ convergence, coefficient bound). These suppliers
  are scaffold-level at this stage; Step 3 must re-verify the uses when the
  FR-9 items are authored.
- Out-of-run published items read for the interface check:
  `def-calderon-zygmund-kernel-and-principal-value-operator` (annular size (1),
  Hörmander (2), off-support representation (3)),
  `def-standard-holder-calderon-zygmund-kernel` (pointwise bound only on the
  regime |x| ≥ 2|y| > 0 — this regime is what forced the λ_nQ repair below),
  `lem-holder-cz-kernels-satisfy-hormander-cancellation`, the published
  `lem-calderon-zygmund-decomposition-at-height-lambda` and
  `lem-maximal-dyadic-cubes-at-height-lambda`, and the functional-analysis /
  Baire items `thm-riesz-representation-for-hilbert-space`,
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `thm-banach-alaoglu`, `thm-ultrafilter-lemma`. No defective actual
  prerequisite was found, so no published defect is recorded for the canonical
  ledger from this batch.
- Axiom audit: `thm-bmo-defines-a-bounded-functional-on-hone` and
  `thm-real-hone-bmo-duality` state the Axiom of Choice and carry
  `def-axiom-of-choice`, `thm-banach-alaoglu` and `thm-ultrafilter-lemma`; the
  use is the weak-star cluster point of the truncated functionals in the dual
  of H¹ (bounded ball, Banach–Alaoglu under the ultrafilter lemma). All other
  items state Countable Choice only (countable dyadic enumeration and the
  countable stopping constructions). No item reaches
  `deferred-set-theory-beyond-choice` through any path.
- `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` is `proved_here: false` (a
  remark with a Mei, arXiv:math/0304417 `external_dependency`, no Proof section
  and no judge stamp planned); no item consumes it.

## Sources (full text fetched and stamped)

`research/frontier-39-analysis-30-batch-6.coverage.json` was verified with
`node tools/source-fetch-check.mjs --coverage ...` in check mode
(`11/11 source(s) fetch-verified`, `11/11 resolved`) and with
`node tools/coverage-checklist.mjs ... --require-destination`
(`2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`).
Eleven source entries (seven on A, four on B) covering eight documents:

| source | locator read | supports |
|---|---|---|
| W, Mark Williams, Notes on Harmonic Analysis | ch. 3 §3.1 pp. 6–8; ch. 7 §§7.1–7.2, 7.6–7.7 pp. 29–33, 40–47; proofs of Thm 7.5, Prop 7.6, Prop 7.7, Prop 7.35, Def 7.39 and Thm 7.40 read in full | BMO def, John–Nirenberg, L^q oscillation bound, nested-cube telescoping, L∞→BMO SIO mapping, L² atoms, H¹–BMO duality; §3.1 inline into the Hilbert/Riesz CZ lemma |
| K, Juha Kinnunen, Harmonic Analysis | ch. 3 §§3.1–3.5, printed pp. 34–56; proofs of Thm 3.15 and Thm 3.28 read in full | BMO def and optimal-constant bounds, L∞⊂BMO, truncation constants 3/2 and 9/4, John–Nirenberg, L^q equivalence |
| TaoA, Math 247A notes 4 | note 4 §3, printed pp. 10–14 | BMO modulo constants, the localisation of Tf for L∞, Prop 3.4, Prop 3.5, Cor 3.6 |
| UW lecture 18 | handwritten notes, scanned pp. 1–2 | dyadic one-grid BMO/John–Nirenberg (orientation for the B-page one-grid distinction; disposed out-of-scope as a model) |
| UW lecture 20 | scanned pp. 1–3 | dyadic reverse inclusion with the Haar expansion; cited corroboratively in `lem-hone-functional-has-compatible-local-ltwo-representatives` while the operative gluing is W Thm 7.40(b) |
| UW lecture 21 | scanned pages | dyadic atomic decomposition by Haar-tree pruning; disposed out-of-scope (FR-9 owns atoms) |
| UW lecture 22 | scanned pages | final dyadic duality step and T(1); disposed out-of-scope |
| Mei, C. R. Acad. Sci. Paris 336 (2003) | abstract and introduction, printed p. 1 | the two-grid dyadic BMO theorem recorded in `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` |

Harvest: 51 source-anchored rows — 22 `included`, 9 `inline`, 17
`out-of-scope` (each with a result-specific reason) and 3 `deferred`: two to
`real-hardy-spaces-maximal-functions-and-atoms` (the maximal/Riesz/Poisson
characterisations, and the atomic decomposition) and one to
`littlewood-paley-theory-and-square-functions` (the square-function
characterisation of H¹, W Prop 7.30, re-pointed from FR-9 during this
construction because that form belongs to the planned Littlewood–Paley page).

Fetch history: every source carries a `fetch_verified` stamp (bytes, sha256_16
and page count) and a `recovery_attempts` entry. Kinnunen's usual path
`~jkkinnunen/files/harmonic_analysis.pdf` returned HTTP 404; the first alternate
`~jkkinnun/files/harmonic_analysis.pdf` is the identical file (sha256_16
`3e77f01971ffab23`, 1 885 449 bytes, 112 pages) and was stamped. One retry, well
inside the five-retry allowance; no `source_resolution` drop was needed and no
source was lost.

## Post-construction repair (three scaffold defects found on the closure re-read)

All three were repaired in the manifest (and in the scratch generator
`/tmp/fr10_gen.py`) before the readiness records were finalised; no dependency
list or dependency level changed for any item, and no escalation or owner-held
record was overwritten.

1. `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` — the old
   strategy chose m as the least integer with 2^mℓ(Q) ≥ ℓ(R) and asserted
   R ⊆ R′, which is false for off-centre nested cubes (e.g. Q = [0,1],
   R = [−0.4, 1.6]). The strategy now chooses m least with R ⊆ R′, notes that
   the centre of Q lies in R so the centres are within ℓ(R)/2 coordinatewise,
   so R ⊆ R′ already once 2^mℓ(Q) ≥ 2ℓ(R), while minimality gives
   2^mℓ(Q) < 4ℓ(R), hence |R′| < 4^n|R| and the claim with
   C_n = 2^{n+1} + 4^n. The statement is unchanged.
2. `cor-bmo-lp-oscillation-norms-are-equivalent` — the old statement claimed
   the per-cube lower bound c_{n,q}‖b‖_BMO ≤ (⨍_Q|b−b_Q|^q)^{1/q} for every
   cube, which is false (an affine function has arbitrarily small oscillation
   on a sufficiently small cube). The statement now defines
   ‖b‖_{BMO,q} = sup_Q (⨍_Q|b−b_Q|^q)^{1/q} and asserts the global equivalence
   ‖b‖_BMO ≍ ‖b‖_{BMO,q} together with the per-cube upper bound; the lower
   bound is Hölder on each cube, the upper bound is layer cake against the
   John–Nirenberg tail.
3. `thm-calderon-zygmund-operators-map-linfinity-to-bmo` — the localisation used
   2Q, but the published pointwise δ-Hölder condition requires
   |a−y| ≥ 2|x−a|, which fails near the boundary of 2Q for cubes (the source's
   ball factor 2 has no cube analogue at factor 2). The localisation is now
   λ_nQ with λ_n = 1 + 4√n, so |a−y| ≥ 2√n ℓ(Q) ≥ 2|x−a| holds on the
   complement; the tail bound, the λ_n^{n/2}B local bound, the nested-cube
   constancy and the a.e. agreement with the L² action (compare x, x′ on a
   full-measure subsequential convergence set) are recomputed accordingly. The
   claimed constant C_{n,δ}(A₂′+B) is unchanged.

Re-recorded `ready` after the repairs (same dependency lists; refreshed item
hashes): the three repaired items and their four transitive consumers
`ex-john-nirenberg-tail-integration`,
`lem-bmo-classes-are-determined-by-their-atom-pairings`,
`thm-real-hone-bmo-duality` and
`cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo`. All 25 batch-6
readiness records are hash-current afterwards; the dependency levels were
recomputed with `tools/item-dependency-levels.mjs` and are unchanged (max 8).

Operational note (no mathematical effect): an intermediate repair pass
accidentally replaced one source's harvested-content array in the coverage file
while splitting a deferred row. The coverage file was regenerated from its
generator with all fetch stamps and recovery histories preserved, and the
intended split re-applied correctly; the final file has the original 50 rows
plus the split (51 rows, 0 checklist errors, 11/11 fetch-verified). The
manifest-level labels were likewise restored from the tool after a regeneration
that had dropped them, and the generator now emits them.

## Original handoff checks (results copied from the terminal; before the owner-directed Q4 enrichment)

- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-6.coverage.json --require-destination`
  — `coverage-checklist: 2 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-6.coverage.json`
  — `11/11 source(s) fetch-verified`; `11/11 source(s) resolved (0 documented drops; not fetch stamps)`.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  — `manifest-deps: 458 item(s), 0 normalized, 0 error(s)` (run-wide).
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — `458 scoped item(s), 1 error(s), 0 warning(s)`; the single error is the
  unrelated batch-27 item `lem-positive-compactly-supported-transform-bump-on-the-dual`
  missing its declared supplier `thm-unique-left-haar-measure-up-to-scale`. No
  batch-6 line appears.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no line names a batch-6 item (grep count 0); the remaining errors are other
  batches' empty scaffold inventories. Batch 6 alone: 26 items, 0 errors,
  maximum level 8.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (run-wide notes
  about planned pages that carry no item list yet; none for this pair).
- `node tools/extcheck.mjs` — OK; the `unproved-on-published` warnings are other
  published items; none names batch 6.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` — no
  batch-6 item or page in the work list; the remaining pending records belong to
  other batches still being constructed.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — `refreshed and deduplicated`; batch 6 is in `reviewed_batches` with all 14
  declared rows `verified`. `--require-reviewed` still fails run-wide
  (`Cross-batch review incomplete: supply every batch input and review every
  declared edge`) because other batches have not yet supplied inputs; the one
  edge with batch 6 as supplier (batch 7's
  `littlewood-paley-theory-and-square-functions` → this A page) has no review
  row yet and is owned by batch 7's consumer owner.

## Residual uncertainty recorded honestly

1. The three repairs above were made by this worker on a closure re-read; they
   are standard arguments but they are still this worker's own reading. Step 3
   authors must re-check them and Steps 5–8 provide the independent review.
2. The FR-9 suppliers used here are in-run scaffold items of batch 5, not yet
   authored; the interface verification is scaffold-level. Batch 5's notes
   record its own residual uncertainty (one pointwise estimate in the maximal
   characterisation proof cited to Stein), which propagates indirectly to the
   items here that consume that theorem.
3. `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` is deliberately an
   unproved recorded remark; nothing depends on it.
4. The UW lecture-20 citation in
   `lem-hone-functional-has-compatible-local-ltwo-representatives` is
   corroborative while the coverage row for that named dyadic result is
   `out-of-scope`; the operative route is Williams Theorem 7.40(b). Step 5 may
   reclassify or re-point that row if it judges the corroboration load-bearing.
5. Run-wide gate noise (the batch-27 content-policy error, the ledger's
   unreviewed batches, other batches' missing readiness records and empty
   inventories) is not batch-6 debt and was not repaired by this worker.

Owner/operator reconciliation and the full engine gate follow construction;
neither this worker exit nor these readiness records is independent
mathematical approval. Step 3 and Step 5 provide that review.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.


## Owner-directed Q4 enrichment (2026-10-05)

TaoA Exercise Q4 is now preserved as the sixth FR-10 B-page item `ex-lacunary-exponential-sums-belong-to-bmo`; the A page remains at 20 items and the pair total is 26. The source claim assumes finite support and frequencies satisfying a 2^n comparability bound. The proof selects the low-frequency value at the interval centre and bounds its variation by a geometric square sum; for high frequencies, integration by parts gives a rapidly decaying Gram matrix with uniformly bounded row sums. The only direct dependency is the BMO definition. The item, FR-10 B manifest/page, B6 coverage, proof contract and FR-10 design row were updated; the B7 deferral now names this destination item. A Step-1 readiness record is present. The new item has not received its Step-3 owner receipt yet. Focused proof-layout, proof-contract, manifest, coverage and page-render checks are recorded in the current Step-3b addendum.

## Current-hash Step 3 repair: Schwartz test tails in the atom near field

The closure audit of `lem-ltwo-atoms-have-uniform-hone-quasinorm` found that
its former Step 1.1 treated every test in the grand class as supported in
`B(0,1)`. The class consists of Schwartz functions and permits noncompact
support, so the estimate that restricted the convolution integral to
`B(y,t)` was not justified. The proof now uses the actual class bound
`|psi(u)| <= (1+|u|)^(-N)`, splits into the unit ball and dyadic annuli, and
compares each annulus to a centered Hardy–Littlewood average. The resulting
series is bounded by a constant times
`1 + sum_{k>=1} 2^(k(n-N))`, which converges because the chosen order satisfies
`N >= n+1`. The statement and B6 scope are unchanged; the proof and direct
ball-volume dependency changed. The atom estimate remains independent of the
atom and cube, and no later atomic estimate is used in its proof.
