# Batch 29 — Coxeter Euler Forms and Sortable Chamber Cones (design CG-26)

Run `frontier-42-coxeter-32`; role beta; pair CG-26 (batch **29**), orders 1774 (A,
`coxeter-euler-forms-and-sortable-chamber-cones`) and 1775 (B,
`coxeter-euler-forms-and-sortable-chamber-cones-examples`), category `coxeter-groups`.

Outputs of this batch (paths under `research/`):

- `frontier-42-coxeter-32-batch-29.pages.json` — 14 A items, 4 B items;
- `frontier-42-coxeter-32-batch-29.coverage.json` — 3 sources per page, 45 harvested
  results, all six source entries fetch-stamped;
- `frontier-42-coxeter-32-batch-29.cross-batch-dependencies.json` — 105 reviewed edges
  (2 page-level, 103 item-level), all `open`;
- `frontier-42-coxeter-32-step1-<item>.json` — 18 readiness records (`ready`).

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L525–547 (CG-26). The
`plan-spec.json` entries for orders 1774/1775 agree with the design in id, title, category,
companion and `requires`; their item lists are empty, with `scaffold` pointing at the track
plan, so there is **no design/plan conflict to record**.

All twelve design contracts are scaffolded in prerequisite order, together with the two local
additions below and the four B-page constructions of the design's B companion (Euler/skew
form of `s1s2s3` in A3; all skips and cone walls of a short sorting word; a source–sink move
and the sign convention; a rank-two inversion set violating the criterion).

Recorded observation (plan-level, not a mathematical defect): `validate-plan` reports that
the A page's `requires` entry `finite-reflection-arrangements-and-spherical-coxeter-complexes`
is *redundant* — it is already reached through `weak-order-inversions-and-lattice-operations`.
The `requires` list is fixed by the design and `plan-spec.json` and is not a
scaffold-editable field, so it is retained unchanged and recorded here for the owner.

## Sources read for this batch (full text; all stamped)

- N. Reading and D. E. Speyer, *Sortable elements in infinite Coxeter groups*,
  arXiv:0803.2722v3 — read: §2.4–2.7 (`w_J`, Lemma 2.6, Theorem 2.7, Propositions 2.9–2.11,
  Lemmas 2.14–2.17, 2.22–2.27), §3 (Lemma 3.3, Lemmas 3.7–3.10, Proposition 3.11,
  Lemma 3.12, Proposition 3.13), §4 (Proposition 4.1, Theorem 4.3), §5 (Propositions 5.1–5.4,
  Lemmas 5.6–5.11), §6 (Theorem 6.1, Corollary 6.2, Theorems 6.3–6.4, Lemma 6.6,
  Propositions 6.7–6.11, Lemma 6.12, Proposition 6.13). The arXiv LaTeX source of the same
  version was also inspected to fix the exact convention of `ufs_cs`/`ufs_sc` in
  Propositions 5.3/5.4.
- N. Reading, *Sortable elements and Cambrian lattices*, arXiv:math/0512339v1 — the finite-type
development of §2–3 (c-sorting words and the sequence of subsets; Lemmas 2.1–2.3,
Proposition 2.4, Lemmas 2.7–2.10; the recursion (3.1) with Proposition 3.2 and
Corollary 3.3).
- A. Björner and F. Brenti, *Combinatorics of Coxeter Groups*, GTM 231 — Chapters 1–3
  (presentations, exchange/deletion, Coxeter elements; roots, inversion sets, weak order and
  parabolics; Matsumoto and the lattice property).

Fetch status: all six coverage source entries carry `fetch_verified` stamps written with
`tools/source-fetch-check.mjs --stamp`; `tools/url-sweep.mjs` (scoped to this batch's
coverage) reports 3/3 live. No source needed a drop or re-harvest.

## Local additions (already scaffolded before this review)

1. `lem-cg-positive-span-of-transported-simple-roots` — the finite sharpening of RS
   Lemma 2.6 (transported simple roots lie in the positive span of `e_s` and the inversion
   roots, with coefficient 1 on `e_s`). It is the induction step for the reducedness of
   Coxeter words and is used by the greedy/sorting and alignment items.
2. `lem-cg-coxeter-word-transport-and-form-independence` — reducedness of Coxeter words,
   commutation connectivity, descent characterization and independence of `E_c`, `ω_c` from
   the chosen Coxeter word. It is the well-definedness discharge of the Euler/skew forms.

## Verification and repairs performed in this review pass

The scaffold draft written by the earlier attempts was read item by item and checked against
the sources above. The following mathematical repairs were made in this pass (all inside the
batch's own manifest; no published content, plan, engine state or verdict was touched):

1. `lem-cg-coxeter-word-transport-and-form-independence`:
   - strategy (1) was garbled and effectively circular ("…the clean argument: …"); replaced
     by a clean induction: a reduced prefix `w_j = s_1…s_j` has support `{s_1,…,s_j}`, so
     `s_{j+1} ∉ S(w_j)` and the positive-span lemma gives `ρ(w_j)e_{s_{j+1}} ∈ Φ₊`, whence
     `ℓ(w_j s_{j+1}) = ℓ(w_j)+1` by the root-length criterion.
   - strategy (4) claimed the false identity `K(e_r,e_s) = K(e_r,e_t)` for the comparison of
     two words differing by one commuting transposition; replaced by the correct
     position-based argument (each of the four entries with a third index is read off from
     the unchanged relative position).
2. `lem-cg-finite-rank-two-inversion-set-recognition`:
   - clause (3)(a) was stated as closure under *sums* of roots; the simple-root step (3)(b)
     needs closure under *positive rank-two combinations* (the height-descent writes
     `α = ρ(s)α + 2B(α,e_s)e_s` with the multiplier `2B(α,e_s) > 0`). Clause and strategy
     were restated as positive-combination closure, which also matches the design route.
   - the proof of (i)⇒(ii) cited a *later* item on the same page; replaced by a self-contained
     argument: `N(w)` and its complement are closed under positive rank-two combinations by
     linearity of `ρ(w)`, and in a rank-two angular order closure plus coclosure force the
     intersection to be empty, initial or final.
3. Dependency completion (declared edges now match the proof uses): added
   `thm-cg-parabolic-intersections-and-coset-factorization`,
   `thm-cg-root-length-criterion-and-faithfulness`,
   `lem-cg-reflection-representation-descends-and-root-norms`,
   `def-cg-parabolic-quotient-and-two-sided-minima`,
   `lem-cg-positive-span-of-transported-simple-roots`,
   `lem-cg-coxeter-word-transport-and-form-independence`,
   `lem-cg-greedy-sorting-word-and-rank-two-alignment`,
   `lem-cg-weak-order-is-a-graded-partial-order`,
   `def-cg-initial-letter-sortable-projection`, and
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (for the A3 example)
   to the items whose strategies or statements use them.
4. `def-cg-sortable-element-skip-roots-and-cone`: added the design's required
   `justified_by: [lem-cg-sortable-skips-basis-and-cover-decomposition]` (well-definedness
   discharge of the skip roots; the edge is deliberately not in `deps`).
5. `lem-cg-sortable-recursion-output-and-initial-choice-independence`: hypothesis typo
   `w ≠_R s` corrected to `w ≱_R s` (the mixed identity of RS Lemma 6.6).
6. `lem-cg-sortable-skips-basis-and-cover-decomposition`: the restricted Coxeter elements of
   RS Propositions 5.3/5.4 were disambiguated — `ufs_{cs}` (delete the final letter) in the
   final case and `ufs_{sc}` (delete the initial letter) in the initial case — and the
   `ufs_c` notation was normalized.
7. `dependency_level` labels recomputed against the run manifests; the only change is
   `lem-cg-positive-span-of-transported-simple-roots` 12 → 13.

### Points recorded for Step-3 authoring (no unresolved blocker)

- Clause (3)(c) of `lem-cg-finite-rank-two-inversion-set-recognition` (`I ↦ s(I∖{e_s})`
  preserves the segment criterion) has a compressed strategy; the author must check the two
  cases subsystem-by-subsystem as described (subsystems containing `e_s` use the extremality
  of `e_s` in the plane and the finite angular order).
- The A3 computations (`ex-cg-euler-and-skew-form-in-a3`,
  `ex-cg-skips-and-cone-walls-for-a-sorting-word-in-a3`,
  `ex-cg-source-sink-move-and-sign-convention`, `cex-cg-rank-two-inversion-set-violating-closure`)
  were recomputed by hand in this pass and agree with the displayed entries; they stay
  `ai-generated` computations with no computer input.
- RS Propositions 5.3/5.4 are stated there for arbitrary Coxeter groups; the item restricts
  them to finite type, where the cover-join input (Reading 2005 Lemmas 2.7–2.8) is supplied
  by the same page.

## Cross-batch dependencies (this batch as consumer)

`frontier-42-coxeter-32-batch-29.cross-batch-dependencies.json` reviews every declared
cross-batch edge whose consumer lives in batch 29: 103 item edges and 2 page edges
(`weak-order-inversions-and-lattice-operations`, batch 23; `finite-reflection-arrangements-and-spherical-coxeter-complexes`,
batch 17). A ledger collect run confirms that exactly these 105 derived edges exist, that all
of them carry a review from this file, and that the file has no orphaned reviews. All edges
are `open`: the suppliers are scaffolded in their batches and their proofs are Step-3 work;
no statement, hypothesis or direction mismatch was found against the suppliers' current
scaffold statements.

## Checks actually run (results)

- `coverage-checklist ... --require-destination`: 2 pages, 45 harvested results, 0 errors.
- `source-fetch-check --coverage <this batch>`: 6/6 sources fetch-verified.
- `url-sweep --coverage <this batch>`: 3/3 URLs live.
- `manifest-deps` (whole run, final pass): 255 items, 0 errors.
- `content-policy --manifest-only` (whole run, final pass): 255 scoped items, 0 errors,
  0 warnings. (The whole-run counts track the other in-flight batches as they are written.)
- `manifest-integrity --run`: 64 pages owed / 64 present, no scope drift.
- `frontier-item-gate --tool validate-plan`: pass (warnings only; the one affecting this
  batch is the redundant page `requires` noted above).
- `item-dependency-levels check`: no error for either page of batch 29; the 12 remaining
  errors are the other in-flight batches' empty scaffold inventories.
- `step1-decisions check`: the 18 items of this batch each carry a `ready` record with the
  current contract hash (checked after the last manifest edit).
- `drift-review-check --run`: 32 pages reviewed, no blocked edges.
- `source-backing --coverage <this batch>`: every authored result still backed by an
  openable source (run against the current run liveness file).
- Engine artifact predicate simulated against the live snapshot: manifest and coverage
  present, no dependency-cycle error, every batch-29 item's readiness record closed and every
  `dependency_level` equal to the computed level — the batch's scaffold artifact is complete.
- `frontier-item-gate --tool extcheck` (whole run, Step-1 boundary): `extcheck: 0 items,
  0 recorded-not-proved, 0 resting on them`; it returns 255 `focus-item-unknown` errors
  because the frontier focus file names planned items whose authored files deliberately do
  not exist at Step 1 (the engine runs this tool after authoring). No external-record
  dependency is present in this batch: no `external_refs` are declared and the coverage has
  no `deferred` row reaching a recorded-but-not-proved result.

Note for later gates: four wikilinks in this batch point to later items on the *same* page
(the two definitions pointing at their later development, the recognition lemma pointing at
the later projection theorem, and the rank-two counterexample pointing at the cover-join
lemma). These are ordinary intra-page links; they deliberately stay out of `deps` (they would
invert an existing edge and create a cycle) and `justified_by` is used where the pointer is a
well-definedness discharge. `depcheck` may report them as `cited-not-in-deps` warnings; they
do not affect resolution or acyclicity.

## Unresolved findings

None mathematical for this pair. The only open items are the ordinary downstream ones: the
suppliers listed in the cross-batch file are still Step-3 drafts, and the fuller engine gate
(reviewer/refuter/adjudicator, Step 5) has not yet run. This batch's records are not
independent proof approval.
