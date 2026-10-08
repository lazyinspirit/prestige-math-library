# Frontier 43 — batch 6 Step 1 scaffold notes

**Owner:** beta (batch 6). **Pair:** `quantized-enveloping-algebras-and-quantum-serre-relations`
(A, order 1524) / `quantized-enveloping-algebras-and-quantum-serre-relations-examples` (B),
category `special-topics-in-representation-theory`, design label QG-1. This file records
scaffold construction, evidence and checks; it is not Step 3 mathematical approval and
nothing here publishes content.

## Scope and binding inputs

Read: `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`,
`briefs/tasks/beta-batch.md`, the generated tasks
`research/frontier-43-complex-representation-15-beta-6.task.md` and
`...-beta-batch.task.md`, the binding
`research/frontier-43-complex-representation-15-owner-authoring-direction.md`, the design
`research/plan-quantum-groups-track.md` §QG-1 and §2 (QG-1 examples, lines 40–100 and
253–262), the controlling `research/plan-spec.json` (orders 1524/1525 and the QG track
orders 1524–1539), the run scope ledger, the drift review
`research/frontier-43-complex-representation-15-alpha-step1-drift.md`, and the populated
sibling manifests.

The owner authoring direction contains no batch-6 clause; it resolves Batches 13, 14, 1, 5
and 4 only. Its cross-cutting constraints are respected here: no `proved_here: false`, no
`not-supplied` theorem fallbacks, no `external_refs` and no external-dependency
substitutes appear in this manifest or coverage file. No unresolved branch arose, so
nothing is held. Content remains draft.

## Design / plan reconciliation (recorded conflicts)

1. **`requires`.** The design writes the prerequisites as "Kac–Moody, tensor products,
   permutation statistics and Harish–Chandra". The controlling plan (order 1524) names
   five page IDs and adds `free-groups-and-presentations` (the drift review's
   `drift-applied` addition, because `def-symmetrizable-cartan-datum-for-a-quantum-group`
   uses the published `def-free-abelian-group`). The manifest reproduces the plan's five
   IDs exactly. Plan controls; no edge was changed.
2. **Item inventory.** The design's §QG-1 table proposes 20 A items; the manifest
   scaffolds 21. The one addition is
   `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix`, which the design
   folds into `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`
   ("prove that the symmetric matrix DA has a nonsingular r-by-r principal minor ... use it
   to choose the extended Cartan coordinates"). It is split out as its own lemma so that
   the matrix fact precedes both its shuffle-algebra consumer and the Borel-duality lemma,
   as the brief's "add every necessary local lemma before its consumers" requires. All 20
   design IDs and all four B-companion IDs (design §2, lines 258–262) are scaffolded under
   their design names.
3. **Standing conventions.** The design's coefficient convention is followed: ordinary
   symmetrizable generalized Cartan datum, no imaginary simple roots, `q` an indeterminate
   (so `Q(q)` and `C[[ℏ]]`, `q=e^ℏ` in the formal part), and the `e=2` double-edge Cartan
   entry included explicitly in the B companion.
4. **Hopf foundations.** The design states that the library has no citable A-page owner for
   bialgebra/Hopf foundations, so `def-bialgebra-counit-and-antipode` and
   `lem-an-antipode-is-unique` are authored here. Batch 8 of this same run independently
   scaffolds `def-graded-bialgebra-and-hopf-algebra` (graded, connected); no dependency
   edge exists in either direction (the completed formal setting here is not the graded
   case), so batch 6 is not a consumer of batch 8.

## Sources (fetched full text, inspected)

Two independent treatments back the A page (a book-length lecture-note set and a research
paper), plus two further independent treatments; every URL was fetched in full by
`source-fetch-check --stamp` and inspected:

- **Borcherds–Haiman–Johnson-Freyd–Reshetikhin–Serganova, *Berkeley Lectures on Lie
  Groups and Quantum Groups*** (book-length lecture notes, 2024) —
  <https://categorified.net/LieQuantumGroups.pdf>, 364 pages, stamp
  `sha256_16 ffeb74a5a0304b6f`, 2 118 866 bytes. Read: Ch. 10 §10.4.2 (printed
  pp. 244–246: Lie bialgebras, the sl(2) example with dual Borels, Cartan data, the
  Gabber–Kac corank-one block form), Ch. 12 §12.1.2 (p. 274: antipode uniqueness) and
  §12.2 (pp. 275–281: U_q sl(2), strings, finite-dimensional simple modules), Ch. 13
  §§13.1.1–13.1.4, 13.2.1–13.2.4 (pp. 302–327: Drinfeld double, Definition 13.1.2.5,
  Remark 13.1.3.7, Lemma 13.1.3.9, Corollary 13.1.3.10, Definition 13.1.3.12,
  Theorem 13.1.3.22).
- **Enriquez, *PBW and Duality Theorems for Quantum Groups and Quantum Current
  Algebras***, J. Lie Theory 13 (2003), 21–64 —
  <https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf>, 44 pages, stamp
  `sha256_16 00731481131cc731`, 436 680 bytes. Read: §1.1 (pp. 21–24: Theorems 1.1–1.2,
  Corollaries 1.1–1.3, the principal-block nondegeneracy standing assumption), §2.1
  (pp. 30–37: the shuffle algebra Sh(V), Lemmas 2.1–2.4, Propositions 2.1, Lemmas
  2.10–2.11, the proof of Theorem 1.1 with displays (25)–(27)), §2.2 (pp. 37–38: the
  radical of the pairing and the proof of Theorem 1.2), §2.3 (pp. 38–41: the double
  algebra; the R-matrix form left out of scope), §2.4 (p. 38: generic transfer), Appendix
  A (pp. 62–63: Lemma A1, Corollary A1 on finitely generated C[[ℏ]]-modules).
- **Jeong–Kang–Kashiwara, *Crystal Bases for Quantum Generalized Kac–Moody Algebras***,
  arXiv:math/0305390 — <https://arxiv.org/pdf/math/0305390>, 60 pages, stamp
  `sha256_16 f873e27305536ded`, 503 316 bytes. Read: §1 (pp. 3–6), Definition 1.1,
  displays (1.1), (1.4), (1.5), (1.6), (1.7), Remark 1.3.
- **Etingof–Semenyakin, *A Brief Introduction to Quantum Groups*** (CMSA lecture notes,
  2020) — <https://cmsa.fas.harvard.edu/media/Etinghof_skoltechlect2-1.pdf>, 43 pages,
  stamp `sha256_16 61a1445f50d7ef09`, 595 075 bytes. Read: §2.1 (p. 4, Definition 2.1),
  §2.2.1 (p. 4, Proposition 2.2), §2.2.2 (p. 5, Example 2.3(iv)), §3.5 exercises (7),
  (11), (12) (pp. 10–11).

Every harvested heading in the range read carries a disposition in
`research/frontier-43-complex-representation-15-batch-6.coverage.json` (44 rows; 16
`included`, 8 `inline`, 3 `deferred` with resolvable destinations, 4 `out-of-scope`).
`coverage-checklist --require-destination` passes with 0 errors and 0 warnings.

## Mathematical corrections made in this attempt (owned manifest only)

The manifest was re-derived and audited item by item. The load-bearing corrections were:

1. **`lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix`:** the claim that
   *every* real rank-`r` matrix has a nonsingular principal `r×r` minor is false
   (`[[0,1],[0,0]]`), so the statement now starts from the real **symmetric** matrix
   `B = DA` (where the Schur-complement argument is valid) and derives the principle
   minor of `A` from `det B_J = (∏_{i∈J} d_i) det A_J`.
2. **`lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`:** replaced
   the unspecified grouplike factors by the exact verified identity
   `Δ(Serre⁺_{ij}) = Serre⁺_{ij} ⊗ K_i^{−m}K_j^{−1} + 1 ⊗ Serre⁺_{ij}` and
   `Δ(Serre⁻_{ij}) = Serre⁻_{ij} ⊗ 1 + K_i^{m}K_j ⊗ Serre⁻_{ij}` (`m = 1−a_{ij}`), with the
   signed crossing computation (`q_i^{a_{ij}} = q_j^{a_{ji}}`, i.e. `d_i a_{ij} = d_j a_{ji}`)
   and the reindexing sign recorded in the strategy. The identity was checked by direct
   symbolic expansion in the rank-two cases `A_2` (`m=2`), `B_2` in both orientations
   (`m=2`), and the double edge `a_{ij} = −2` (`m=3`); in each case every mixed bidegree
   component cancels exactly and the two survivors carry the stated grouplike factors.
   (General rank reduces to rank two because `Δ(E_i), Δ(E_j)` involve no other simple
   roots.)
3. **`thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`:** corrected the antipode
   identities: in the JKK convention `S(E_i) = −E_iK_i`, one has `S²(E_i) = q_i^{−2}E_i`,
   `S²(F_i) = q_i^{2}F_i` (the earlier draft had the reciprocal exponents), and the
   Serre images are `S(Serre^{±}_{ij}) = −K_i^{±m}K_j^{±1} Serre^{±}_{ij}` (the sign is
   always `−1`, not `(−1)^{a_{ij}}`; both m=2 spot checks and the general crossing-count
   were verified). The claims that `S` is non-involutive and that `Δ` is non-cocommutative
   require `E_i ≠ 0` and `K_i ≠ 1`, which are not available before the triangular
   decomposition; they are now stated conditionally in the strategy and exercised, with
   the nonvanishing input, in `ex-quantized-sl-two-relations-coproduct-and-antipode`.
4. **`lem-q-binomial-expansion-for-q-commuting-elements`:** corrected the collected
   coefficient to `binom(N−1,r)_t + t^{N−r} binom(N−1,r−1)_t = binom(N,r)_t` and recorded
   the reciprocal substitution `binom(N,r)_{t^{-1}} = t^{−r(N−r)} binom(N,r)_t`, which the
   negative-family and shuffle applications use.
5. **`lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`:**
   the invariant form is degenerate on the coroot span when `A` is singular (affine case);
   the statement now uses the complementary Cartan coordinates `D_j` dual to the coroots
   outside a nonsingular principal block (whose existence is the new lemma), making the
   Cartan pairing nondegenerate exactly as in the source's construction. The
   enveloping-algebra pairing extension now names the two adjunction rules.
6. **`def-formal-quantum-shuffle-borel-...`:** the existence of `p_ℏ` is no longer asserted
   in the definition; it is conditional on the Serre sums vanishing (proved by the next
   lemma) and its properties are analysed in the embedding theorem. Dependencies added for
   the formal power series ring and the tensor algebra.
7. **`thm-the-formal-quantum-serre-half-...` (and `...-generic-quantum-serre-halves-...`):**
   the torsion step now records the inline DVR facts for `C[[ℏ]]` (units, order, PID,
   torsion decomposition) with the published suppliers listed in `deps`; the generic
   transfer names faithful scalar extension. No external-dependency substitute is used.
8. **`thm-quantized-sl-two-string-formulas`:** restructured. The previous "if `E_iv_N=0`,
   `K_iv_N=q_i^N v_N`, then the `v_t` are nonzero" is false without the termination
   hypothesis; the module is now constructed as the quotient of the cyclic module
   `A_i/(A_iE_i + A_i(K_i−q_i^N))` by `A_iF_i^{(N+1)}v_N`, with linear independence from
   the triangular decomposition, nonzero-ness of the string basis, simplicity, and
   uniqueness-up-to-isomorphism each carrying its argument. The rank-one copy statement
   is proved from the same PBW basis.
9. **`lem-an-antipode-is-unique`:** kept as uniqueness only (design scope). The stronger
   antimultiplicativity claim from the discarded draft had a circular proof and is not
   needed anywhere on this page.
10. **Semilinearity and credits:** `lem-quantum-serre-relations-are-stable-under-the-
    chevalley-involutions` now records that `ψ,τ` are semilinear over `q ↦ q^{−1}`;
    "Galber–Kac" is corrected to Gabber–Kac (the source's typo) in both the item and the
    coverage locator.

All other statements, strategies, source rows and dependency edges were preserved after
re-reading against the sources.

## Dependency audit (what was actually checked)

- 25 items (21 A, 4 B), 101 declared dependency edges: 56 in-batch and 45 to published
  items; 57 distinct suppliers. Every external supplier was checked to exist on disk with
  `status: published`; none resolves to an examples-only (B) page; no B page supplies an A
  item; no in-batch edge is a forward reference or a cycle.
- `dependency_level` recomputed for every item: A page 0…15, B page 7 and 16; the
  `item-dependency-levels` check reports exactly the labels (its only errors are the
  sibling batches' empty inventories).
- The load-bearing interfaces were read against the drafts: the PBW basis and filtration
  items used by the coideal lemma; the Kac–Moody triangular decomposition, Serre
  presentation, root-space finiteness and invariant-form items used by the Borel-duality
  lemma; the q-integer/Askey conventions of the published
  `def-q-integer-q-factorial-and-q-multinomial` (asymmetric `1+t+…+t^{m−1}`) reconciled
  with the symmetric `[m]_i = (q_i^m − q_i^{−m})/(q_i − q_i^{−1})` of this page, including
  `binom(m,r)_i = q_i^{−r(m−r)} binom(m,r)_{q_i^2}`; and the formal power series / DVR
  items used in the torsion step.
- No item, proof, prerequisite or implicit use reaches
  `deferred-set-theory-beyond-choice`; no Recorded result is consumed to prove its
  replacement; no choice principle is used by any item, so no AC declaration or
  `def-axiom-of-choice` dependency is added.
- Cross-batch: batch 6 declares **no** cross-batch item or page prerequisite; its
  `research/frontier-43-complex-representation-15-batch-6.cross-batch-dependencies.json`
  is `[]`. (The pair's five `requires` pages are all published; its item dependencies are
  in-batch or published.)

## Readiness and dependency inputs

- 25/25 items recorded `ready` with
  `node tools/step1-decisions.mjs record --run frontier-43-complex-representation-15`
  in level order, each naming its examined dependency IDs and the evidence. No
  escalations. `step1-decisions check` closes all 25 of this batch's records (the whole-run
  check still lists the not-yet-scaffolded sibling batches).
- `research/frontier-43-complex-representation-15-batch-6.cross-batch-dependencies.json`
  is `[]` as above.

## Checks run (exact results)

| check | result |
|---|---|
| `coverage-checklist.mjs … --require-destination` | 1 page, 44 harvested result(s), 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage … --stamp` | 4/4 source(s) fetch-verified (4 newly stamped); 4/4 resolved |
| `source-fetch-check.mjs` (check mode) | 4/4 source(s) fetch-verified, 4/4 resolved |
| `manifest-deps.mjs` (all run manifests) | 217 item(s), 0 errors (the count rises as sibling batches are scaffolded concurrently) |
| `content-policy.mjs --manifest-only` (all run manifests) | 217 scoped item(s), 1 error — a sibling-batch edge in batch 10 (`lem-point-divisor-exact-sequence-and-euler-characteristic-step` depends on `def-local-normal-form-holomorphic-map-riemann-surfaces`, declared in no manifest) — and 0 warnings; no batch-6 item is involved |
| `item-dependency-levels.mjs check --run` | only `empty scaffold inventory` errors from the sibling batches not yet scaffolded (2, 4, 5, 11, 13, 14 at the final read; 7 and 10 were scaffolded during this session); zero errors on this batch (no cycle, every label exact) |
| `manifest-integrity.mjs --run` | 30 page(s) owed, 30 in the manifests; no scope drift |
| `drift-review-check.mjs --run` | 15 page(s) reviewed, 3 spec edits applied, no blocked edges; 37 same-category requires edges checked, every owed A and B page above 95% published-or-earlier-in-run |
| `url-sweep.mjs --coverage … --out /tmp/… --recover --fail-on-dead` | 4/4 live; 0 failed; 0 recoverable; 0 suspect; 4 citation decision(s) |
| `source-backing.mjs --coverage … --liveness /tmp/…` | 16 authored result(s) across 1 file, every one still backed by an openable source |
| `validate-plan.mjs research/plan-spec.json --run` | not fully evaluable at Step 1: the whole-run frontier selection aborts with `Empty frontier page divisors-riemann-roch-and-duality` (batch 10 has no items yet). This is sibling-batch state, not a batch-6 finding; the focused structural check on this manifest (kind/ID prefixes, page ids/categories, `requires` published or in-run, dependency resolution) passed. |
| `frontier-dependency-ledger.mjs refresh --run …` | `--require-reviewed` exits 1 with `Cross-batch review incomplete: supply every batch input and review every declared edge` (unreviewed: 2, 4, 5, 10, 11, 13, 14); the derived ledger has zero rows involving batch 6, so this batch's input is present and empty |
| `frontier-item-gate --tool extcheck` / `--tool fwdcheck` | fail closed on absent `items/*.md` carriers (`focus-item-unknown`, e.g. `thm-unitarity-of-the-sl2-complementary-series`), which is the documented Step-1 state: these item validators run after authoring, and the step-1 battery uses `content-policy --manifest-only` for the retired external-record fields. No batch-6 manifest or coverage defect is reported. |
| `step1-decisions.mjs check --run` | 217 run items, 191 ready; every batch-6 record closed with a current hash. Open entries: five owner-held batch-1 Glimm-branch items (per the owner direction) and the batches still writing (batch 10's items had no readiness records yet, batches 2/4/5/11/13/14 are empty) |

The liveness/reharvest artifacts for the last checks were written to `/tmp` so that the
stage-level run files (`research/<run>-url-liveness.json`) stay engine-owned. The engine's
stage-1 `validate-plan`, `url-liveness` and `source-backing` gates re-run over the whole
run after every batch writes its artifacts; their current failures are the missing
sibling batches.

## Unresolved findings (owner-held)

- Sibling-batch observations made while this batch worked (recorded, not repaired — outside this batch's write scope):
  batch 10's manifest at the time of writing contains one undeclared dependency edge
  (`lem-point-divisor-exact-sequence-and-euler-characteristic-step` →
  `def-local-normal-form-holomorphic-map-riemann-surfaces`), flagged by `content-policy
  --manifest-only`; its items also still lack readiness records. Neither finding touches
  batch 6.
- Nothing blocks batch 6. The whole-run gates `step1-readiness`,
  `item-dependency-levels`, `step1-dependency-ledger`, `validate-plan` (frontier
  selection), `url-liveness` and `source-backing` stay open on the sibling batches still
  being scaffolded; they are those batches' assignments, and no batch-6 artifact needs a
  change for them.
- No entry of `research/published-consumer-supplier-ledger.md` or the defect ledger
  identifies a defective prerequisite used here. The published
  `def-q-integer-q-factorial-and-q-multinomial` uses the asymmetric convention; the
  reconciliation is proved inside `def-quantum-integers-factorials-and-divided-powers-at-q-i`
  and `lem-quantum-pascal-recurrence-and-gaussian-integrality`, not assumed.
- Recorded for the ledger: the two numerical verifications reported in corrections 2–3
  (rank-two quasiprimitivity; the `B_2` unsymmetrized failure) were performed as direct
  symbolic expansions during scaffold review and are reproduced in the item strategies;
  they are scaffold evidence, not Step-3 proof acceptance.

## Appendix — verified expansions quoted by the item strategies

Direct symbolic expansion in the free algebra modulo the toral relations (convention
`Δ(E_i) = E_i⊗K_i^{−1} + 1⊗E_i`, toral factors moved to the right of each tensor factor;
entries are `left word, left K exponents, right word, right K exponents, q-Laurent
coefficient`).

**A_2 (m = 2) and B_2 (m = 2, symmetrized `d = (2,1)`)**: `Δ(Serre⁺₁₂)` equals
`Serre⁺₁₂ ⊗ K₁^{−2}K₂^{−1} + 1 ⊗ Serre⁺₁₂` exactly; the six aggregated components are

```
E1E1E2 ⊗ K1^-2K2^-1 : 1        E1E2E1 ⊗ K1^-2K2^-1 : [2] (with its sign)
E2E1E1 ⊗ K1^-2K2^-1 : 1        1 ⊗ E1E1E2 : 1
1 ⊗ E1E2E1 : [2] (with its sign)   1 ⊗ E2E1E1 : 1
```

(A_2: coefficient `−q−q^{−1}`; B_2: coefficient `−q²−q^{−2}`.) No mixed component
survives.

**m = 3, double edge `a₁₂ = a₂₁ = −2` (and the asymmetric orientation
`a₁₂ = −2, a₂₁ = −1, d = (1,2)`)**: `Δ(Serre⁺₁₂) = Serre⁺₁₂ ⊗ K₁^{−3}K₂^{−1} + 1 ⊗ Serre⁺₁₂`
exactly, all mixed components cancelling through
`Σ_{r=0}^{3}(−1)^r q^{2r} binom(3,r)_q = 0`; the negative family gives
`Serre⁻₁₂ ⊗ 1 + K₁^{3}K₂ ⊗ Serre⁻₁₂` (checked for A_2 and confirmed by the sign-reversed
computation).

**B_2 with the unsymmetrized parameters `q₁ = q₂ = q`** (`d = (1,1)`), the counterexample:
the nine aggregated components of `Δ(Serre⁺₁₂)` are

```
E1E1E2 ⊗ K1^-2K2^-1 : 1
E1E2   ⊗ E1K1^-1K2^-1 : q^-2 - q^-1 + 1 - q          = q^-2(1-q)(1+q^2)
E1E2E1 ⊗ K1^-2K2^-1 : -q - q^-1
E2E1   ⊗ E1K1^-1K2^-1 : -q^-1 + 1 - q + q^2          = -q^-1(1-q)(1+q^2)
E2E1E1 ⊗ K1^-2K2^-1 : 1
E2     ⊗ E1E1K2^-1   : 1 - q + q^3 - q^4            = (1-q)(1+q^3)
1 ⊗ E1E1E2 : 1
1 ⊗ E1E2E1 : -q - q^-1
1 ⊗ E2E1E1 : 1
```

The three mixed components are nonzero, and the `(2,1)`-part
(`q^{-2}(1-q)(1+q^2) E_1E_2 ⊗ E_1K_1^{-1}K_2^{-1} - q^{-1}(1-q)(1+q^2) E_2E_1 ⊗ E_1K_1^{-1}K_2^{-1}`)
is not in `I_+⊗T + T⊗I_+`, whose `(2,1)`-component is zero. Re-running the same expansion
with `q₁ = q², q₂ = q` returns the six-component quasiprimitive form above.


## Current Codex round-1 authoring repair

The historical Step-1 record above is preserved. Current mathematical claims and choice declarations are those of the authored carriers and [the focused round-1 report](frontier-43-complex-representation-15-quantum-normalization-round1.md). Twelve carriers, their manifest rows, exact contracts and source coverage have been repaired supplier-first. Full braided Hopf pairing, generic PBW lifts, unconditional tensor-space triangular decomposition, correct total grading, standard rank-one strings and the full unsymmetrized B2 counterexample are proved locally. The inherited AC use is confined to formal embedding/classical PBW ranks; the crossed tensor construction and B2 representation are choice-free. No new in-run cross-batch edge was introduced, and the cross-batch input remains `[]`. The A page adds the backward Burau prerequisite for the actual Laurent-polynomial supplier; B reaches it through A. Final owner certification and origin handling remain root-owned.
