# Step 3a scope review — CAT Comparison, Link Criteria, and Local Globalization (CG-08)

- Run: `frontier-42-coxeter-32` · role alpha · batch 11
- A page: `cat-comparison-link-criteria-and-local-globalization` (order 1738, 8 items)
- B page: `cat-comparison-link-criteria-and-local-globalization-examples` (order 1739, 4 items)
- Decision: **sufficient** (recorded via `tools/step3-decisions.mjs record-scope`)
- Scope of review: scope only. No proof-correctness claim is made; item proofs are Step-3b authoring obligations. No scaffold file was edited.

## Inputs read
- Manifests: `research/frontier-42-coxeter-32-batch-11.pages.json`; all 32 current run batch manifests scanned for consumers; `research/frontier-42-coxeter-32-scope-ledger.json`; plan-spec entries for orders 1738/1739.
- Coverage: `research/frontier-42-coxeter-32-batch-11.coverage.json`; `research/coxeter-scaffold/geometric-source-report.md` (G3/G4/G5, CAT(0)-globalization and systole supplements).
- Prose: `library/coxeter-groups/cat-comparison-link-criteria-and-local-globalization{,-examples}.md`.
- Plan: `research/plan-coxeter-groups-track.md` §CG-08 (lines 242–260), and the consumer sections §CG-12 (line 307), §CG-17 (line 418), §CG-27 (line 548).
- Owner decisions: `research/frontier-42-coxeter-32-owner-scope.json`, `research/frontier-42-coxeter-32-owner-authoring-direction.md`; drift review `research/frontier-42-coxeter-32-alpha-step1-drift.md` (§cat-…, VERDICT: no-drift).
- Scaffold notes/readiness: `research/frontier-42-coxeter-32-batch-11.notes.md`; the 12 `research/frontier-42-coxeter-32-step1-<id>.json` readiness records.

## Scope evidence

**Design alignment (1:1).** The manifest's 8 A items equal, in order, the §CG-08 "Local supplier contract" table and the audited `research/coxeter-scaffold/inventory.json` CG-08 list (checked programmatically: plan == inventory == manifest). The 4 B items equal the design's four promised companion checks (intervals and metric trees CAT(0); unit circle at the strict perimeter boundary; failure for a shorter circle; complete locally CAT(0) circle whose π₁ prevents global CAT(0)). Page `requires` equals plan-spec; the definition item's justifier is `lem-cg-comparison-convexity-and-model-spaces` as recorded in `definition-justifications.json`.

**Intended role and consumers (clause-level).** The pair is a stage-1 supplier of the geometric branch (`library/coxeter-groups/_pathway.md`). Current scaffold consumers: CG-12 batch 15 (`short-loop-polygons-and-quantitative-energy-decrease`), CG-17 batch 22 (`large-spherical-metric-flags-and-the-moussong-girth-theorem`), CG-27 batch 30 (`davis-cat-zero-geometry-and-finite-subgroup-fixed-points`). Every consumer reference resolves to a clause present in the scaffold statements: A1 clauses (3) CAT inequalities, (4) truncated angular metrics on links, (7) round and isometrically embedded circles; A2 (i)–(vi) (Euclidean/spherical comparison, cosine rule and midpoint identity, CAT(0) convexity/uniqueness, CAT(1) short-geodesic estimates in radius-<π/2 balls, round-circle criterion "S¹_ℓ is CAT(1) iff ℓ ≥ 2π"); A4 (i) Berestovskii cone equivalence, (ii) polyhedral link criterion with the local product chart R^k × C(Lk_X(F)); A7 (i)–(iii) globalization, uniqueness and geodesic contraction; A8 (i)–(ii) compact short-circle criterion with injectivity radius. The B page is a dependency leaf: no run item outside the pair depends on any B item (checked across all 32 current batch manifests).

**Source coverage.** `batch-11.coverage.json` records 34 harvested results over two independent full texts — Bridson–Haefliger, *Metric Spaces of Non-Positive Curvature* (I.2.1–2.19, I.3.14–3.22, I.5.6–5.21, II.1.1–1.12, II.4.1–4.17, II.5.1–5.5; I.3.28 and I.7.39/I.7.55–59 inspected in place) and Davis, *The Geometry and Topology of Coxeter Groups* (App. I.2.6–2.19, I.3.1–3.7) — with `included`/`inline` dispositions for every contract and recorded reasons for the `out-of-scope` (directions/tangent cones; CAT(κ) 4-point condition) and `deferred` items. Deferred destinations exist and are scaffolded: metric flag + Moussong's Lemma → CG-17; fixed points/Bruhat–Tits → CG-27; asphericity → CG-27, where `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`(4) proves Σ contractible. The Bowditch short-loop material is explicitly owned by CG-12 and claimed nowhere here. Both source stamps verify.

**Prerequisite availability (no unmet prerequisite found).** All 63 distinct dependency ids of the 12 items resolve: 47 published items on disk (`items/*.md`) and 16 current-run scaffold items (batch 6: polyhedral gluing, chain metric/coherence, properness, minimizing geodesics, length reparametrization; batch 8: spherical Gram simplex/angular link, cone–join metrics and local product chart; batch 11: own page). None is absent from both the published library and the current scaffold, and no dependency points to a later batch. No pre-existing published item states CAT(0)/CAT(1) comparison or a link criterion, so the pair does not duplicate an existing home.

## Non-blocking observations for the owner

1. **Undeclared published homes (plan-declaration gap, not an unmet prerequisite).** Four used item deps are homed outside the declared `requires` closure: `def-principal-inverse-sine-and-cosine` (home `further-trigonometric-identities-and-inverses`; used by A1–A4 and B2–B4) and `def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`, `thm-cauchy-schwarz-in-an-inner-product-space` (home `hilbert-space-geometry-and-riesz-representation`; used by A2). Both homes are published (`library/real-analysis/…`, `library/functional-analysis/…`), so the prerequisites are met; only the page-level declaration is incomplete — the same pattern already recorded for batch 8's pair. `validate-plan`'s `undeclared-prereq` teeth can fire at the Step-4 splice; owner plan reconciliation is recommended. No scaffold edit was made.
2. **CAT(1) global short-uniqueness boundary.** A2(v) states geodesic uniqueness only inside balls of radius <π/2; the global statement ("pairs at distance <π in a CAT(1) space are joined by a unique geodesic, continuously") is claimed and proved on the consumer side (CG-12 `lem-cg-cat-one-short-and-closed-local-geodesics`(i), an authorized local addition citing A1+A2). The scope boundary is explicit and deliberate, so it is not a missing prerequisite; whether to hoist it as a one-line A2 enrichment is an owner/authoring choice.
3. **Coverage wording.** The coverage `deferred` line names "asphericity" as proved on the Davis page; the Davis page proves contractibility of Σ, from which asphericity follows. No run item claims asphericity, so no scope loss; wording could be tightened if a future page consumes the term.

## Checks run (current bytes)

| check | result |
| --- | --- |
| `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-11.pages.json` | 12 items, 0 errors |
| `tools/content-policy.mjs --manifest-only` (all 32 run manifests) | 302 items, 0 errors |
| `tools/coverage-checklist.mjs …batch-11.coverage.json --require-destination` | 1 page, 34 results, 0 errors |
| `tools/source-fetch-check.mjs --coverage …batch-11.coverage.json` | 2/2 fetch-verified; 2/2 resolved |
| plan == inventory == manifest item ids; consumer clause scan; dep-resolution and requires-closure scan; B-item consumer scan | as reported above |

## Decision

**sufficient** — the planned definitions, results and examples cover the intended subject for the pair's role in the library, with the source coverage and prerequisite availability evidenced above. Recorded with `tools/step3-decisions.mjs record-scope` for page `cat-comparison-link-criteria-and-local-globalization`. Owner authority over any enrichment or merger is unaffected; no scaffold edit was made.
