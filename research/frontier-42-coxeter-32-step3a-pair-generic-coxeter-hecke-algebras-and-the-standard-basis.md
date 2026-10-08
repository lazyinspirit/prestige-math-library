# Step 3a scope review — `generic-coxeter-hecke-algebras-and-the-standard-basis`

- Run: `frontier-42-coxeter-32`, batch 3, role alpha (Step 3a scope review).
- A page: `generic-coxeter-hecke-algebras-and-the-standard-basis` (order 1710, category `hopf-hecke-algebras`, design label HH-12).
- B page: `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` (order 1711, companion of the A page).
- Scope decision: **sufficient** (receipt `research/frontier-42-coxeter-32-step3a-review-generic-coxeter-hecke-algebras-and-the-standard-basis.json`).
- This report decides scope only. It is not an item approval, not a proof review, and not an owner record; no scaffold, manifest, item, coverage, batch or owner file was edited.

## Inputs read (exact paths)

- Design: `research/plan-hopf-hecke-algebras-track.md` §HH-12 at L340–356 — Requires L344, prose L346, five-row item table L348–354, Examples L356; HH-13 handoff L360–364 (L362 requires this page). Index row L110 ("Hecke independence and associative multiplication | HH-12 commuting left/right length operators on a free module | No cancellation of torsion before basis theorem; all six length cases checked").
- Contract: `research/plan-spec.json` orders 1710/1711 (labels HH-12 / HH-12-B; A `requires` = `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `polynomial-rings-and-roots`; B requires the A page; both planned item arrays empty). Consumer list: orders 1712, 1714, 1716, 1718, 1720, 1722 and 1744 require the A page.
- Manifest: `research/frontier-42-coxeter-32-batch-3.pages.json` — A page 5 items, B page 4 items; only this pair in the batch. Orders, ids, titles, companion, category and both `requires` lists agree with the plan verbatim.
- Prose scaffolds: `library/hopf-hecke-algebras/generic-coxeter-hecke-algebras-and-the-standard-basis.md` and `…-examples.md` (title, obligation list and companion pointer agree with the manifest and the design).
- Coverage: `research/frontier-42-coxeter-32-batch-3.coverage.json` — A page, 3 sources, 36 harvested rows (18 `included`, 5 `inline`, 11 `deferred`, 2 `out-of-scope`); every deferred row names a destination that exists in `plan-spec.json`.
- Step-1 records: `research/frontier-42-coxeter-32-batch-3.notes.md`; nine `research/frontier-42-coxeter-32-step1-<id>.json` (9/9 `ready`, checked against the current manifest); `research/frontier-42-coxeter-32-alpha-step1-drift.md` L29–37 (verdict **no-drift** for this page).
- Dependency records: `research/frontier-42-coxeter-32-batch-3.cross-batch-dependencies.json` (2 page rows + 20 item rows, each `open` with the exact required claim and use site); the unified run ledger; `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` (this page reported "current scope review required"; no owner or review receipt existed before this review).
- Owner decisions: `research/frontier-42-coxeter-32-owner-authoring-direction.md` ("HH-12 supplies the actual coefficient-compatible Hecke basis and bar/normalization proofs before CG-11 uses them"); `research/frontier-42-coxeter-32-owner-scope.json` (this pair is in `additional_supplier_pairs` and `selected_pairs`; no pair-local enrichment, merger or split order exists).
- Binding design inputs: `research/hopf-hecke-scaffold/inventory.json` HH-12 (the same five contracts); `research/hopf-hecke-scaffold/independent-audit.md` and `.json` (HH-12 ordinary edges and the definition binding `def-hh-universal-coxeter-hecke-parameters-and-presentation` ↔ `lem-hh-reduced-word-independence-and-length-multiplication`, `thm-hh-generic-coxeter-hecke-standard-basis`); `research/hopf-hecke-scaffold/hecke-source-report.md` (selected Lusztig operator route, stated limits).
- Consumers read: this run's `research/frontier-42-coxeter-32-batch-14.pages.json` items `lem-cg-hecke-and-lie-seam-contract-compatibility` and `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` (both declare A1, A2, A4, A5 as deps); HH-13–HH-18 contracts in `research/plan-hopf-hecke-algebras-track.md` L358 ff.; published application pages `principal-series-representations-of-gl-n-over-a-finite-field` and `hecke-markov-traces-and-polynomial-link-invariants` (both `status: published`).

## Design vs delivered scaffold

All five design rows are present id-for-id, and the Examples paragraph is realized as four B items:

| Design row (L350–354) | Delivered item | Scope content |
|---|---|---|
| universal parameters and presentation | `def-hh-universal-coxeter-hecke-parameters-and-presentation` | finite `S` (`W` may be infinite); `R = Z[v_1^{±1},…,v_c^{±1}]`, one unit parameter per odd-edge component; free-associative quotient by (Q) and (B); universal property; simple-generator conjugacy criterion; explicit no-freeness disclaimer |
| reduced-word independence and length multiplication | `lem-hh-reduced-word-independence-and-length-multiplication` | `T_w` well defined only via HH-11 Matsumoto; both length-multiplication rules; spanning; explicit "no independence here" scope clause |
| commuting left/right length operators | `lem-hh-commuting-left-right-hecke-length-operators` | `P_s`, `Q_s` on the free module `E`; the six length configurations; quadratics and inverse; braid relations; `P_{s_1}…P_{s_k}(e_1)=e_w` and `P_w` |
| standard basis theorem | `thm-hh-generic-coxeter-hecke-standard-basis` | `ρ: H → End_R(E)`, `ρ(T_w)=P_w`, `ρ(T_w)(e_1)=e_w`; independence, freeness, `{T_w}` basis, faithfulness and base change over an arbitrary commutative `R'` without flatness/torsion assumptions |
| anti-involution, bar, normalization | `lem-hh-hecke-anti-involution-bar-and-normalization` | reversal anti-automorphism `T_s↦T_s`, `T_w↦T_{w^{-1}}`; generator invertibility; bar operator `T_s↦T_s^{-1}`, `T_w-bar = T_{w^{-1}}^{-1}`; `S_s = v_sT_s` with `(S_s−Q_s)(S_s+1)=0` |
| Examples paragraph (L356) | `ex-hh-rank-one-…`, `ex-hh-s3-…`, `ex-hh-unequal-parameter-dihedral-consistency`, `ex-hh-hecke-specialization-at-v-equals-one` | rank-one table; complete normalized 6×6 S3 table plus the determining multiplicative rows; odd-edge forced equality vs even-edge freedom with the `(u_t−u_s)e_{wt}` difference; specialization `v=1` to the group ring and the general-units boundary |

Recorded design deviations, all scope-preserving and evidenced (not re-decided here):

1. The inventory dependency `lem-hh-dihedral-root-recurrence-and-root-sign` of the definition is dropped as a direct edge (`batch-3.notes.md` §"Dropped inventory edge"): the conjugacy criterion is proved from the defining relator and class-sign homomorphisms, so no rank-two order or root input is consumed.
2. `lem-hh-hecke-anti-involution-bar-and-normalization` deliberately claims only the generator-level bar identity and `T_w-bar = T_{w^{-1}}^{-1}` (Lusztig 4.2(b)), not the generally false `T_w^{-1} = T_{w^{-1}}`; the R-polynomial expansion is deferred to the Kazhdan–Lusztig page, exactly as the design's "record this conversion before comparing application homes" clause permits.
3. The design's application links ("type-A principal-series and braid-trace pages as applications with existing item homes") are realized as reading pointers inside `ex-hh-hecke-specialization-at-v-equals-one`, which names the two published pages; no item is duplicated, matching the design's "with existing item homes".
4. The design's two-part warning is honored: `lem-hh-reduced-word-independence-and-length-multiplication` stops at spanning and `thm-hh-generic-coxeter-hecke-standard-basis` proves independence before specialization; no torsion-freeness or semisimplicity claim is made.

No designed topic, result or example is missing, and nothing beyond local proof closure was added (5 A + 4 B = 9 items against the 100-item cap).

## Subject coverage and intended role

- The intended subject — generic Coxeter Hecke algebras with unequal parameters, the construction of `T_w`, the regular-module length-operator proof of the standard basis, its base change, and the involution/bar/normalization conventions that applications consume — is covered item-for-item as tabulated above.
- In-run consumer CG-11 (batch 14, order 1744) consumes A1, A2, A4 and A5 by declared item edges. Its uses — the Artin index map `Θ(b_w)=T_w` with coefficient compatibility, the `R'`-base-change basis, and the four quadratics conversions — are all inside the delivered statements (A1 universal property; A2 `T_w`; A4 parts 1–4; A5 part 4), and batch-14's strategies cite exactly those parts.
- Planned later consumers in the Hopf/Hecke track (HH-13 order 1712, HH-14 1714, HH-15 1716, HH-16 1718, HH-17 1720, HH-18 1722) require the A page. Their designs need precisely the standard basis (+ indexed `T_w`), the parabolic embedding via `T_u` and the dual trace basis, base-change freeness and the multiplicative normalization; deferred source rows for the symmetric trace (`hecke-parabolic-induction-and-symmetrizing-traces`) and specialization/semisimplicity (`hecke-base-change-semisimplicity-and-deformation`) name those planned pages. Honest limit: those pages are not yet scaffolded in any run, so this check used the design contracts and plan-spec requires rows, not authored item statements.
- The B page is a genuine dependency leaf: no item or page in all 32 batch manifests depends on any B item and no page requires the B page (verified by scanning every manifest), matching its prose ("supplies no theorem to another page").

## Source coverage (independent re-check, 2026-10-07)

- All three recorded fetch stamps were reproduced byte-for-byte from the live URLs: Lusztig `https://arxiv.org/pdf/math/0108172` 699,863 bytes / sha256-16 `b3864c762502759f`; Geck `https://arxiv.org/pdf/math/0511548` 556,351 bytes / `14d4c03b212ad0b1`; Björner–Brenti `…/EntireBook.pdf` 4,320,702 bytes / `ad1e7d9260127bb2`.
- Direct content checks against the downloaded PDFs (PyMuPDF): Lusztig §3.1 weight functions with `L(s)=L(s')` for finite odd `m` and §3.2 the algebra with relations (a)/(b), the `T_w` definition, both multiplication rules and the spanning statement (PDF pp. 8–9); §3.3's six-case verification and the basis conclusion with `e_se_w` products; §3.4 the anti-automorphism carrying `T_w` to `T_{w^{-1}}` and §3.5 the †-involution; §4.1 `T_s^{-1}=T_s−(v_s−v_s^{-1})`; Lemma 4.2 bar with `T_w-bar = T_{w^{-1}}^{-1}` (PDF p. 10); Proposition 1.10 exact statement (PDF p. 5). Geck §2 printed p. 7 (`π(s)=π(t)` for conjugate `s,t`, `T_sT_w = π(s)T_sw+(π(s)−1)T_w`) and §4 printed p. 15 (`v^{2L(s)}`, specialization §4.1). Björner–Brenti §6.1 printed p. 174 (`Z[q^{1/2},q^{-1/2}]`, basis `{T_w}`, `T_sT_w=qT_sw+(q−1)T_w` for `sw<w`, `T_s^{-1}=(q^{-1}−1)T_e+q^{-1}T_s`, the `R`-polynomial expansion of `T_{w^{-1}}^{-1}`, the order-two bar involution).
- Dispositions: each of the nine items is mapped by at least one harvested row (A1 `inline`×3, A2 `included`×4, A3 `inline`×1 + `included`×3, A4 `included`×4, A5 `included`×4 + `inline`×1). The 11 `deferred` rows name `coxeter-presentations-exchange-and-reduced-word-theorems`, `bruhat-subword-order-and-lifting`, `affine-coxeter-diagrams-and-semidefinite-classification`, `hecke-parabolic-induction-and-symmetrizing-traces`, `hecke-base-change-semisimplicity-and-deformation`, `kazhdan-lusztig-bases-polynomials-and-cells` — all present in `plan-spec.json`. The 2 `out-of-scope` rows (Lusztig §3.5 †-involution; Geck §2/Theorems 2.5–2.6 endomorphism-algebra route) carry specific reasons and have no consuming item in this pair or its consumers.
- Honest limits: the full 84/54/370-page bodies were not re-read in this review; the cited ranges above were re-inspected directly. The B items are computations from A items and carry no independent source rows, which matches their derived status.

## Prerequisite audit (unmet-prerequisite check)

- Method: transitive closure over declared `deps` and `justified_by`, resolving each node against the 32 run manifests (`research/frontier-42-coxeter-32-batch-*.pages.json`) and published item front matter under `items/`.
- Result: 105 nodes = 9 own items + 9 run-scaffold suppliers (batch 1: `lem-hh-free-associative-ring-and-relations-descent`, `lem-hh-finite-polynomial-and-localization-constructions`, `lem-hh-universal-presentations-and-base-change`; batch 2: `def-hh-coxeter-matrix-word-group-and-length`, `def-hh-geometric-coxeter-representation-and-roots`, `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`) + 87 published items. **0 unresolved nodes**; all 87 published suppliers are `status: published`; a one-level scan of their single-line `deps` arrays found no unresolved id (multi-line arrays were not parsed by that scan; run-manifest id resolution is covered by the whole-run `manifest-deps`/`content-policy` gates, which passed at Step 1). No prerequisite of this pair is absent from both the published library and the current scaffold.
- Confirmed non-blocking dependency-record corrections (suppliers exist; for the Step-3b author/owner, none is a scope omission, merger or enrichment ground):
  1. `lem-hh-commuting-left-right-hecke-length-operators` strategy 3.5 cites `thm-hh-matsumoto-reduced-word-theorem` load-bearingly (well-definedness of `P_w` from braid-equivalence of reduced expressions) but the manifest `deps` omit it. Recommended: add the direct edge (Matsumoto is batch-2, level 4) and recompute affected levels.
  2. `thm-hh-generic-coxeter-hecke-standard-basis` strategy 4.1 uses the universal property of `def-hh-universal-coxeter-hecke-parameters-and-presentation` directly; A1 is not in its `deps` (reachable only through A2/A3). Recommended: add the direct edge.
  3. `lem-hh-hecke-anti-involution-bar-and-normalization` strategy 5.1 cites `lem-hh-free-associative-ring-and-relations-descent` for descent of the anti-automorphism through `F/I`, not in its `deps` (reachable through A1). Recommended: add the direct edge.
  4. `lem-hh-commuting-left-right-hecke-length-operators` declares `def-linear-map` (published, "between vector spaces over the same field") while the use is `R`-linear endomorphisms of a free module over the commutative ring `R`; the applicable published suppliers are `def-module-homomorphism-kernel-image-and-cokernel` (and `def-hom-groups-and-induced-hom-maps`, already reached via `def-endomorphism-ring-of-a-module`). Recommended: author cites the module-level item; no new item is needed.
- Consistent, not flagged: the definition's `justified_by` edges (A2, A4) match the inventory and the independent audit, and its justifiers do depend on it; the dropped dihedral-root edge is replaced by the explicit relator/class-homomorphism argument (checked in the strategy text).

## Findings

- No omitted design topic or result and no scope expansion: the delivered pair is the design inventory plus documented local proof closure, so there is no insufficient-scope ground and no pair merger or enrichment is recommended. The scope decision is `sufficient`.
- No unmet prerequisite: every supplier in the closure exists (run scaffold or published). The four dependency-record observations above are for the Step-3b author (or an owner-authorized manifest touch-up) and do not affect the scope verdict.
- Boundary discipline recorded for the owner: the pair deliberately leaves the †-involution (Lusztig §3.5), the symmetrizing trace (`hecke-parabolic-induction-and-symmetrizing-traces`), specialization/semisimplicity (`hecke-base-change-semisimplicity-and-deformation`) and Kazhdan–Lusztig/R-polynomial material (`kazhdan-lusztig-bases-polynomials-and-cells`) to their named planned homes; none has a consumer here.

## Mechanical checks on the current batch (run today)

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-3.pages.json` | exit 0; 9 items, 0 errors |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-3.coverage.json --require-destination` | exit 0; 1 page, 36 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-3.coverage.json` | exit 0; 3/3 sources fetch-verified, 3/3 resolved |
| `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` | this page reported "current scope review required" (discharged by the receipt recorded below) |

## Decision

`sufficient` — the five A items realize the HH-12 contracts (unequal-parameter presentation and conjugacy criterion; reduced-word rules and spanning; length operators with the six-case commutation; free standard basis with base change; anti-involution, bar and normalization), the four B items realize the design's worked examples, the three sources are independently re-verified with matching locators, the 105-node dependency closure resolves with no gap, and the in-run consumer CG-11 and the planned HH-13–HH-18 consumers are supplied by the delivered claims.
