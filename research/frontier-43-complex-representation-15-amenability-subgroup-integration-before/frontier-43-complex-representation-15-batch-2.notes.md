# Batch 2 — `amenability-reiter-nets-and-folner-conditions` (RG-27) construction evidence

Run: `frontier-43-complex-representation-15`. Owned output:
`research/frontier-43-complex-representation-15-batch-2.pages.json` (25 A-page + 4
B-page items), its coverage record, 29 current Step-1 readiness records, this note,
and the empty consumer-batch dependency input
`research/frontier-43-complex-representation-15-batch-2.cross-batch-dependencies.json`
(no in-run cross-batch edge: every supplier is a published item or an earlier
item of this batch).

Status: **28 items `ready`, 1 item `escalated`** (clause (i) of
`thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`).
The engine's run-wide `step1-readiness` gate cannot close on an escalated record;
this is an owner hold, not a pass. No published content, shared plan, engine state
or verdict was edited. These records are Step-1 construction evidence only.

## Controlling design and plan

- Design: `research/plan-representation-theory-groups-track.md` §RG-27
  (A page `amenability-reiter-nets-and-folner-conditions`; the design's 14 A items
  and 4 B items are all present in the manifest) and its §15.2 binding requires
  table (line ~2746) and §15.5/§15.6 corrections.
- Plan (`research/plan-spec.json`, orders 1234/1235) controls. It lists the eight
  requires values reproduced verbatim in the manifest. The only design/plan
  difference is that the binding §15.2 table lists seven requires (it omits
  `amenable-groups-and-folner-criteria`), while the RG-27 design names the
  discrete-group page and the run's drift review added it
  (`research/frontier-43-complex-representation-15-alpha-step1-drift.md`,
  "VERDICT: drift-applied"). **The plan's eight-page list is used and no conflict
  remains**; the discrete page supplies only the B-page comparisons.
- Owner authoring direction
  `research/frontier-43-complex-representation-15-owner-authoring-direction.md`
  exists and was read; it contains binding text for batches 13, 14, 1/5 and 4
  only, and no clause changes RG-27. Its prohibition of `proved_here: false`,
  `not-supplied` theorem fallbacks and external-dependency substitutes is
  respected: every manifest item is locally stated with a proof or
  proof-strategy, and no item relies on an `external_refs` record.
- The design's "Requires: RG-18–RG-20 and RG-25" sentence is superseded by the
  plan/§15.2 page list (Haar, modular/L¹, GNS, group-C*, the analytic and
  geometric Hahn–Banach pages, Banach–Alaoglu/Goldstine/Krein–Milman, and the
  discrete amenability page); recorded here as the design supersession.

## Inventory, added local suppliers and dependency audit

29 items, in prerequisite order within each page, explicit `deps` arrays,
`dependency_level` recomputed from in-run deps only (levels 0–8; no cycle), no
dep on any B-page item, no in-run cross-batch dep, no forward dep. The A page
holds 25 items, far below the 100-item cap.

The design's 14 A items and 4 B items are all present. Eleven local suppliers
were added because the design's own proof route ("keep means, Reiter functions
and Følner sets as three distinct notions until both directions between each
adjacent pair are proved") needs them and they are not published:

1. `def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group`
   (UCB(G), the space on which the mean action is norm-continuous).
2. `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous`
   (f∗φ ∈ UCB(G), the smoothing used by the topological-mean construction).
3. `lem-an-lch-group-has-an-open-sigma-compact-subgroup`.
4. `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets`
   (semifiniteness of Haar measure; this is the hidden input of BHV Exercise
   G.6.2 and is proved locally: finite case by outer/inner regularity, infinite
   case by coset decomposition over the open σ-compact subgroup).
5. `lem-averages-over-probability-densities-attain-the-essential-supremum`.
6. `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` (BHV
   Exercise G.6.2; the separation argument is reduced to the real part of m).
7. `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean`.
8. `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities`
   (Mazur closure and passage to norm compacta).
9. `lem-layer-cake-identity-for-nonnegative-integrable-functions` (BHV G.5.2).
10. `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions`
    (BHV G.2.1; needed by the abelian half of the base-classes proposition).
11. `lem-a-group-with-the-fixed-point-property-is-amenable` (apply the fixed
    point property to the weak-star compact convex mean space on UCB(G)); this
    is the elementary direction of BHV G.1.7, with no barycenter machinery.

Repairs made to the seeded drafts: the weak-star-density strategy's inequality
chain was corrected to `Re m(h) = m(Re h) ≤ ||Re h||∞` (the old chain confused
`||h||∞` with `||Re h||∞`); the semifiniteness lemma was restated for Borel sets
with the complete two-case proof; the Cohn citation was replaced by BHV plus the
standard uniqueness input.

Every external dep target resolves to a published item file; the internal dep
targets are earlier items of this batch. `node tools/item-dependency-levels.mjs
check --run frontier-43-complex-representation-15` reports level/cycle errors
only for the four still-unscaffolded batches (4, 10-15's empty pages); batch 2
itself has no level error.

## Escalated item (owner-held) — exact evidence

`thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions`.
Quotients (ii) and extensions (iii) have complete in-closure strategies: (ii)
pull back `UCB(G/N)` into `UCB(G)` along the quotient map and restrict the
invariant mean; (iii) the Fubini-type construction
`F(g) = m_N(h ↦ φ(gh))`, right-N-invariance, `F = ψ∘π`, `ψ ∈ UCB(G/N)`, and
`m = m_{G/N}∘(ψ)` is an invariant mean on `UCB(G)`. Both then use the batch's
UCB-mean ⇒ (P1) ⇒ invariant-mean chain. Clause (i), closed subgroups, has no
in-closure proof: the source route is Hulanicki–Reiter plus
`λ_G|_H ≺ λ_H` (BHV Proposition F.1.10, printed p. 426), and that proof is the
quasi-invariant-measure/rho-function/Bruhat-cutoff/Weil-formula computation for
`G/H`, published in this library only on
`induced-unitary-representations-of-locally-compact-groups` (order 1226,
published), whose items `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h`
and `thm-weil-quotient-integration-formula-with-rho-function` lie **outside the
transitive requires closure of this A page**. `validate-plan`'s
`undeclared-prereq` rule (tools/validate-plan.mjs line ~539) forbids depending
on a page outside the declared closure, so this is a plan-level decision:

- requested amendment (owner decision): add
  `induced-unitary-representations-of-locally-compact-groups` to the A page's
  `requires`, or license the four published induction items for this pair; then
  mint one local item `λ_G|_H ≺ λ_H` (BHV F.1.10) before the stability theorem;
- exact dependency chain for clause (i): stability theorem →
  (Hulanicki–Reiter: `1_H ≺ λ_H`) → local `λ_G|_H ≺ λ_H` → {rho-function
  existence, Weil formula, Bruhat cutoff, quasi-invariant measure} on the
  induced-representation page → Haar + modular pages (already in closure);
- A/B inventory of the amendment: no new page pair is needed; it is a single
  prerequisite edge plus one local item on this A page; the B page is unaffected.
No other clause of the theorem is weakened, and the full statement is preserved.

## Sources

Complete texts fetched on 2026-10-07 and stamped by
`source-fetch-check --stamp` (7/7 entries verified, 0 drops):

- Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*,
  <https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf> — Appendix G
  §§G.1–G.3 and §G.5 read in full (Theorems G.1.7, G.2.1, G.3.1, G.3.2, G.3.4,
  G.5.1, Lemma G.5.2, Remarks G.5.3 and F.1.10's role in G.3.4), with Exercise
  G.6.2 and Appendix F §F.1.
- Anne Thomas, Sydney Honours lectures 19 and 20 (Reiter; invariant mean ⇒
  Reiter), complete PDFs.
- Daws–Runde, arXiv:0705.3432v5, introduction and §1.
- Garrido, *Amenability*, §3 (discrete Følner model for the B page).

Every harvested heading has a disposition in the coverage record (83 rows,
0 errors/warnings): included items, inline absorptions, deferred rows with
destinations (the two owner-held Glimm-like obligations of G.1.7's barycenter
half and of F.1.10), or out-of-scope rows with specific reasons. The Paterson
*Amenability* chapters named by the design could not be matched to an
accessible complete full text in this pass; the pair's two independent
treatments are BHV (monograph) plus the Sydney lecture notes, with Daws–Runde
and Garrido as the independent confirmations, so no `source_resolution` and no
drop was used.

## Checks actually run (2026-10-07)

- `node tools/coverage-checklist.mjs …batch-2.coverage.json --require-destination`
  → exit 0, 2 pages, 83 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-2.coverage.json --stamp`
  → exit 0, 7/7 sources fetch-verified.
- `node tools/manifest-deps.mjs research/…batch-2.pages.json` → exit 0,
  29 items, 0 missing.
- `node tools/content-policy.mjs --manifest-only research/…batch-2.pages.json`
  → exit 0, 29 scoped items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run …` → exit 1 **only** for
  the empty inventories of other, still-scaffolded batches; batch 2's labels
  are consistent with the computed values (levels 0–8).
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <batch-2
  pages>` → exit 0; only pre-existing advisory `redundant-prereq` warnings on
  the shared plan. `--run` currently aborts on the other batches' empty
  frontier pages (not a batch-2 defect).
- `node tools/step1-decisions.mjs record` executed once per item (29 records;
  28 ready, 1 escalated). `check --run` → exit 1, run not closed: 261 items,
  240 ready; the only work row belonging to batch 2 is the owner-held
  escalation above (all 28 ready records are current; the other 20 rows are
  other batches' missing records).
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → the batch-2
  consumer input (`[]`) is supplied and batch 2 is a reviewed batch;
  `--require-reviewed` still fails because other batches have not supplied
  their inputs and edges are unreviewed (run-wide, expected at this boundary).
- `node tools/source-fetch-check.mjs --coverage …batch-2.coverage.json` (check
  mode, no network) → exit 0, 7/7 stamps present.
- Item-mode validators (`extcheck`, `depcheck`, `precheck`, `rendercheck`) were
  deliberately not run: at Step 1 no item files exist yet and the engine
  excludes them from this stage.

## Unresolved findings and owner handoff

- One escalation: the closed-subgroup clause above, with the exact missing
  published supplier and the requested plan amendment.
- No published defect was identified among the suppliers examined; all dep
  targets' statements matched their declared uses (notably Haar left invariance
  and semifiniteness, uniqueness up to scale, the weak-containment definition
  via coefficients, the almost-invariant-vector lemma, `thm-l2-group-algebra`
  style convolution facts, and the discrete nonamenability theorem for the B
  page).
- The design's mention of Paterson (Chapters 1 and 4) is recorded as an
  unchecked alternative treatment, not as evidence; the BHV/Sydney reading
  stands on its own and is fetch-verified.
