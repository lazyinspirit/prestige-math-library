# Step 3a scope review — `geometric-fixed-parts-and-gauss-manin-semisimplicity` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 42 · 2026-10-10
- A page: `geometric-fixed-parts-and-gauss-manin-semisimplicity` (order 1819, category
  `algebraic-geometry`, 7 items)
- B page: `geometric-fixed-parts-and-gauss-manin-semisimplicity-examples` (order 1823, 1
  example); companion pointers agree A ↔ B
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-geometric-fixed-parts-and-gauss-manin-semisimplicity.json`,
  reviewed scope hash `446d77fc2522fb911e02d93176fd1f64836d50d6a1bd59825da52ffde0a02bce`;
  manifest bytes reviewed
  `research/frontier-44-special-representation-examples-28-batch-42.pages.json` sha256
  `1aced497718e3a0f8105e3a67e70415f12c7b80188c93d1f97946992a1590c69`). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or coverage edit.

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §“Geometric Fixed Parts And
  Gauss Manin Semisimplicity”, **L1029–1102** (the next section “Affine Perverse Vanishing And
  Universal Hyperplanes” begins L1103). Author carriers:
  `research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/`
  `items/` and `pages/`, with the author packet
  `research/frontier-44-…-klr-foundation-monodromy-report.md`. The batch notes record that the
  batch task cited a stale pointer at L868; I located the section by title and confirm L1029.
- Design ↔ manifest, item by item: all 7 designed A suppliers and the 1 designed B example are
  present with the design's IDs, kinds, titles and order, and their manifest statements equal
  the carrier statements (checked one by one):
  `def-geometric-polarizable-hodge-variation`,
  `lem-algebraic-open-inclusion-surjects-on-fundamental-groups`,
  `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`,
  `lem-regular-trace-kernel-descends-the-complex-socle`,
  `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`,
  `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`,
  `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`,
  `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`.
  Nothing designed was dropped, moved or weakened, and no item beyond the design was added;
  the page carriers carry the same inventories (`items:` lists, 7 and 1).
- Dependency additions beyond the design's declared inputs (all inside the declared `requires`
  closure, recorded in the batch notes and re-checked): AC ⇒ AC_ω discharge for the
  perturbation route; SNC compactification existence for the fixed-part clause; proper base
  change and product projection for the sheaf/fibre identifications; Grassmannian compactness
  for the openness-of-irreducibility step; background definitions (socle, semisimple module,
  local systems, roots of unity, Jacobian criterion). `node tools/validate-plan.mjs
  research/plan-spec.json --run frontier-44-special-representation-examples-28` exits 0, lists
  both pages with their 7/1 item inventories, and reports **no `undeclared-prereq`** for either
  page (only plan-wide `redundant-prereq` advisories on the plan-prescribed `requires`).
- One statement-level deviation, recorded in the batch notes and confirmed here: the
  fixed-part theorem's last clause is stated for an **SNC** smooth projective compactification
  (design wording: “a smooth projective compactification”). The batch-38 logarithmic supplier
  is proved for exactly the SNC class and additionally supplies existence and
  compactification-independence, so the stated class is the one the proof route covers; no
  current consumer reads the wider form (§4). Classified as a precision refinement, not a scope
  loss — see Advisories.
- Owner decision read: `research/frontier-44-…-owner-authoring-direction.md` §“Owner
  same-frontier prerequisite extension — 2026-10-09” binds this pair as one of the 21 appended
  prerequisite pairs of this original frontier, keeps the original manifests, and requires the
  prose design to be built (not cited). Step-1 records exist for all 8 items, each `ready` with
  examined dependency lists matching the manifest counts (2/11/10/7/6/12/13/7); no escalation.
- Intended role in the library: the A page is a page-level prerequisite of batch 48
  `projective-perverse-hard-lefschetz-and-decomposition`, where
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  consumes `lem-algebraic-open-inclusion-…` and `thm-smooth-projective-gauss-manin-…`, and
  `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`
  consumes `lem-characteristic-zero-scalar-extension-…`; batch 49
  `quiver-full-flag-projective-semisimplicity` consumes
  `lem-algebraic-open-inclusion-…` in `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`.
  No published `items/` or `library/` file references any of the 8 IDs (checked by search). The
  B page is a leaf: only its A page requires it. The fixed-part and family-construction items
  are internal suppliers of the semisimplicity theorem before the page's external consumers.

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-42.coverage.json`: 2 pages, 31
  harvested rows, `coverage-checklist … --require-destination` reports 0 errors / 0 warnings.
  A page 27 rows: Deligne II (8 `included`, 1 `inline` into the trace-kernel lemma, 2
  `out-of-scope`), Voisin (6 `included`, 2 `out-of-scope`), Gualtieri (2 `included`, 2
  `deferred` to the published `sard-theorem-and-transversality` page), Deligne III (4
  `deferred` to the in-run `proper-hyperresolutions-…` page). B page 4 rows (Deligne II 1
  `included` + 1 `inline`, Voisin 2 `inline`). Every decline names a destination and a reason;
  the analytic-level declines (Deligne II 4.2.6's footnote invoking unpublished Schmid results
  and Griffiths; Voisin Cor 3.7 and Thm 3.8/Prop 3.9 on finite monodromy orbits and the Hodge
  locus) exactly match the design's boundary “no claim is made for every polarized analytic
  variation on a punctured disk.”
- Independent re-verification (fetched today to `/tmp/b42src/`; byte sizes and sha256 prefixes
  equal the recorded `fetch_verified` stamps in every case): Deligne II 5,404,038 B
  `748edefb44fded8a` (54 pp.); Voisin 522,134 B `18223101f6b0894c` (65 pp.); Deligne III
  6,791,148 B `d78d4f46742916cd`; Gualtieri 580,723 B `ac10d54d44b543ec`. Bounded anchor reads:
  Deligne II PDF pp. 35–42 (printed 39–46) — Cor 3.2.17/3.2.18, Théorème 4.1.1(i)(ii) with the
  codimension-two π₁ surjectivity on p. 41 and the Gysin left-inverse step, Corollaire 4.1.2
  (largest constant subsystem, base-point-independent Hodge substructure), Définition 4.2.4,
  Proposition 4.2.5, Théorème 4.2.6 with its Schmid footnote, Lemme 4.2.7 with the “W defined
  over Q” abbreviation; Voisin PDF pp. 37–39 — Theorems 3.1–3.3, Corollaries 3.4–3.7, Theorem
  3.8; Gualtieri PDF pp. 28, 30, 31 — Corollary 3.12, Lemma 3.15, Corollary 3.18 (Baby Sard),
  Theorem 3.20. Every load-bearing locator is real and correctly located.
- Boundary honesty: the pair keeps the ordinary geometric statements with algebraic
  realization and full integral lattice, uses the 4.2.6–4.2.7 proof route (with the rational
  descent of the complex socle supplied by its own trace-kernel lemma instead of Deligne's
  abbreviation), and states no analytic-variation or finite-orbit result. This matches Deligne
  II 4.2.4–4.2.7 and Voisin 3.3–3.5 at the clause level.

## 3. Prerequisite audit (unmet prerequisites)

Method: (i) direct `deps` of the 8 items from the current manifest; (ii) full transitive
closure following manifest `deps` plus published front-matter `deps`/`justified_by`; (iii)
classification of every closure node against `items/*.md` and all 100 current run manifest
pages; (iv) the two pages' `requires` against published page files and current scaffolds.

- Closure: 4,717 nodes; **0 nodes absent from both the published library and the current
  scaffold**; 0 nodes planned in `plan-spec.json` but unscaffolded. All 68 direct dependency
  entries (44 distinct: 27 published + 17 in-run) resolve. The batch's cross-batch input
  `…-batch-42.cross-batch-dependencies.json` carries 20/20 edges `verified` (7 page + 13 item).
- Page-level `requires`: all 20 entries resolve — 13 published library pages
  (`chain-conditions-and-semisimple-modules`, `flat-smooth-and-etale-morphisms`,
  `local-coefficients-twisted-homology-and-duality`,
  `modular-representations-and-projective-covers`,
  `principal-series-representations-of-gl-n-over-a-finite-field`,
  `reeb-stability-and-global-foliation-constructions`, `relations-functions-and-quotients`,
  `sard-theorem-and-transversality`,
  `schemes-subschemes-and-morphisms-locally-of-finite-type`,
  `singular-cohomology-and-coefficient-theorems`, `triangularisation-and-jordan-canonical-form`,
  `whitney-embedding-tubular-neighbourhoods-and-approximation`,
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini`) and 7 in-run scaffolded pages
  with nonempty inventories (30: 6 items, 33: 6, 34: 5, 35: 6, 38: 3, 39: 6, 40: 9).
- In-run supplier clauses read at statement level and matched to their uses:
  batch 38 `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`
  (`W_nH^n(U)=im(H^n(X)→H^n(U))`, compactification independence) and
  `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` (existence,
  domination); batch 33 `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` (abstract
  splitting; explicitly not primitive-compatible); batch 34 `def-rational-mixed-hodge-structure`
  and `lem-morphisms-of-mixed-hodge-structures-are-strict` (strictness, pure image of
  extremal-weight morphisms); batch 35
  `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`; batch 39
  `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` and
  `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties`; batch 40
  `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` (proper
  base change; product projection `Rpr_*pr^*B ≃ B⊗C^*(F;k)`); batch 30
  `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`.
- Published interfaces spot-checked (statement read; front-matter `status: published`): the
  Jacobson/Wedderburn/column-module/trace-form/finite-length/nilpotent-endomorphism algebra
  chain (Clifford theory of the trace-form lemma), `def-socle-of-a-module`,
  `def-semisimple-module`, `def-local-system-of-r-modules-and-its-pullback`,
  `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`,
  `thm-parametric-transversality` and
  `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family`
  (both AC_ω), `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`,
  `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`,
  `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`,
  `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex`,
  `thm-jacobian-criterion-smooth-morphism`, `def-roots-of-unity-in-a-field`,
  `def-stiefel-space-grassmannian-and-tautological-bundle`,
  `thm-continuous-image-of-a-compact-space-is-compact`, `cor-heine-borel-in-the-product-topology`.
  No hypothesis mismatch found at statement level (AC chains, finite-freeness, positive
  dimension, compact-source perturbations all line up).
- Read-only checks re-run today with observed results: `item-dependency-levels check` — 858
  items / 100 pages, no label, shape or cycle error; `coverage-checklist` — 0/0;
  `content-policy --manifest-only` — 858 items, 0 errors / 0 warnings; `manifest-integrity` —
  100/100, no scope drift; `validate-plan` — exit 0, acyclic and consistent; `source-fetch-check`
  — 6/6 resolved (0 documented drops).
- **No unmet prerequisite found.** Residual uncertainty: this audit is availability- and
  declared-clause-level (I did not re-derive published proofs), and proof correctness of this
  pair is Steps 3b/5a work; all 8 items are un-authored scaffolds today. The Deligne III 8.2.6
  deferral destination `proper-hyperresolutions-and-mixed-hodge-restriction-images` is
  scaffolded in-run (batch 46, 4 + 1 items) but is not in this pair's `requires` and is not
  consumed by any item (see Advisories 2).

## 4. Consumer-interface spot checks (scope view)

- batch 48 `lem-projective-hodge-perverse-package-…`: needs π₁ surjectivity for Zariski opens
  and semisimplicity of geometric Gauss–Manin local systems; both are in the consumed
  statements.
- batch 48 `thm-projective-pushforward-of-smooth-constant-sheaves-…`: needs semisimplicity
  over an arbitrary characteristic-zero coefficient field without an embedding into ℂ; stated
  verbatim by `lem-characteristic-zero-scalar-extension-…`.
- batch 49 `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`: needs the
  π₁ surjectivity clause; stated.
- No consumer needs the excluded analytic-level claims, the finite-orbit corollaries, or a
  compactification clause beyond the SNC form.

## 5. Advisories (no scope change, no action requested at Step 3a)

1. **SNC refinement** of the fixed-part theorem (design: “a smooth projective
   compactification”; manifest: “an SNC smooth projective compactification”). Documented in the
   batch notes and confirmed consistent with the batch-38 supplier; no current consumer needs
   the wider form. Recovering the literal design generality for an arbitrary smooth projective
   compactification would need the domination/independence step on the consumer side; recorded
   for owner awareness only.
2. **Coverage wording**: the Deligne III deferral reason says the proper-hyperresolution page
   is one “this pair lists among its prerequisites”, but the A page's `requires` does not
   contain `proper-hyperresolutions-and-mixed-hodge-restriction-images` and no item consumes it.
   Wording-only; the deferred proper-restriction results are genuinely outside this pair, and
   the destination page is scaffolded (batch 46).
3. **Adjacent unharvested results**: Deligne II 4.1.3.x (Griffiths type-constancy,
   Grothendieck, Katz finite monodromy) and Voisin Cor 3.6 (rigidity) are not harvested. They
   are adjacent subjects the design does not claim; possible future enrichment, not omissions
   of this pair's subject.
4. **Plan-prescribed `requires` hygiene**: entries such as
   `modular-representations-and-projective-covers`,
   `principal-series-representations-of-gl-n-over-a-finite-field` and
   `reeb-stability-and-global-foliation-constructions` are not consumed by any item and produce
   plan-wide `redundant-prereq` advisories; owner/Step-4 concern, not an availability gap, and
   outside this task's authority.
5. This is a scope assessment only: no scaffold, manifest, coverage, plan or page edit; no item
   approved; no owner record written.

## 6. Decision and next action

- `sufficient` for `geometric-fixed-parts-and-gauss-manin-semisimplicity`: the planned
  definitions, results and example realize the prose design in full, the source treatment is
  complete and honest about its boundaries, and every prerequisite resolves inside the
  published library or the current scaffold. No enrichment, merger or scaffold edit is
  indicated.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page
  geometric-fixed-parts-and-gauss-manin-semisimplicity --decision sufficient`, reason naming
  this report path.
- Next action: Step 3b authors the 7 A items and 1 B example in dependency order once the Step
  3a stage drains. Any change to a statement, title or inventory changes the scope hash and
  requires a fresh scope decision before item bookkeeping can use it.
