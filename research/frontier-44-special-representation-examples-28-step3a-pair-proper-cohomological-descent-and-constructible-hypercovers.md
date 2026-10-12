# Step 3a scope review — `proper-cohomological-descent-and-constructible-hypercovers`

- Run `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-proper-cohomological-descent-and-constructible-hypercovers-8d908c4bb96679f6`.
- Pair: A `proper-cohomological-descent-and-constructible-hypercovers`
  (order 1824) / B `proper-cohomological-descent-and-constructible-hypercovers-examples`
  (order 1827), batch 45, category `special-topics-in-representation-theory`.
  A has 3 scaffolded items (2 lemmas + 1 theorem), B has 2 (two examples);
  20 harvested source rows over 3 documents (5 source instances).
- Decision: **sufficient** for the subject the current design fixes. Every
  design contract has a scaffolded item with the design statement; all 35
  declared dependency instances and all `[[…]]` references resolve (19 to
  published items, 16 to in-run scaffold items, 0 missing); `validate-plan`
  is clean (no unresolved ids, cycles, forward references or
  undeclared-prereq); the 3 sources re-fetch byte-identical to their stamps;
  the consumer interface used by batch 46 is present at declaration level.
  Findings F1–F2 are record wording/normalization observations; F3 is an
  honest applicability uncertainty (analytic properness route for the B
  example) with a recommended minimal local addition, already escalated to
  the owner in the batch notes.
- No prior reviewer or owner scope receipt existed for this page
  (`node tools/step3-decisions.mjs check --phase scope` reported "current
  scope review required"; no `…-step3a-review-…` / `…-step3a-owner-…` file;
  the retired sibling run's `frontier-44-klr-foundations-prerequisites`
  step3a/step3b task files are not current evidence). No scaffold, item,
  page, coverage, plan or owner record was edited by this review.

## Evidence read

- **Design (controlling).** `research/plan-klr-foundation-prerequisites.md`
  L1251–L1302 ("Proper Cohomological Descent And Constructible Hypercovers",
  next section at L1303): A contracts at L1259
  `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`,
  L1269 `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`,
  L1279 `thm-proper-hypercovers-compute-constructible-derived-cohomology`,
  and B examples at L1291 `ex-proper-cech-descent-does-not-require-acyclic-fibers`,
  L1297 `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`,
  with the declared inputs at L1287/L1295/L1301. The design's declared inputs
  now name the arbitrary-field batch-40 items (see F1), not the char-0
  equivariant theorem.
- **Research carriers.** The three author inputs under
  `research/frontier-44-special-representation-examples-28-klr-foundation-descent-drafts/items/`
  read in full (statements, facts and proof bodies). The two B construction
  contracts in `…-klr-foundation-descent-inventory-proofcontracts.json`
  (`B_proofcontracts`), the source ledger
  `…-klr-foundation-descent-source-readings.json` and the affected-consumer
  record `…-klr-foundation-descent-consumer-checks.md`.
- **Plan.** `research/plan-spec.json`: both pages at orders 1824/1827 with the
  design's ids, titles, category, companion, `requires` and the same 3 A + 2 B
  items. The plan's stored item deps equal the manifest's declared inputs
  (batch-40 six-functor and constructible-restriction items, batch-36
  locally-split Čech descent, the published normalization/totalisation/
  spectral-sequence items, AC).
- **Manifest and coverage.**
  `research/frontier-44-special-representation-examples-28-batch-45.pages.json`
  (5 items; full statements and strategies read) and
  `…-batch-45.coverage.json` (A page 14 rows: 4 `included`, 6 `inline`,
  3 `out-of-scope`, 1 `already-published`; B page 6 rows: 2 `included`,
  2 `inline`, 2 `out-of-scope`; every decline has a reason).
- **Owner decisions.** `…-owner-authoring-direction.md`, "Owner same-frontier
  prerequisite extension — 2026-10-09": this pair is one of the 21 appended
  prerequisite pairs and must live in this same native run; the direction
  requires reading actual supplier statements, full research proof bodies and
  source ledgers, and including the necessary intermediate lemmas with their
  actual homes and dependencies. No owner scope decision for this page exists
  yet.
- **Step-1 and drift records.** All 5 items have current `ready` step-1
  records (2026-10-09T13:42:26–49Z). Drift review
  `…-alpha-step1-drift.md` L352–356 and `…-alpha-step1-append-1-drift.md`
  L119–123: "VERDICT: no-drift (order 1824; declared closure complete;
  no change)", plus the recorded duplicate-design-entry and
  quiver-example cross-list notes that did not change any edge.
- **Batch notes.** `…-batch-45.notes.md`: conflicts 1–5 (design locator
  drift resolved word-for-word; supplier-id repair; title normalization; B
  dependency completion; design warnings preserved) and findings 1–5 for the
  owner (the equivariant-id reconciliation, the missing dedicated P¹ item,
  classical properness, consumer direction, stale snapshot order).
- **Cross-batch input.** `…-batch-45.cross-batch-dependencies.json`: 15
  declaration-level `verified` rows owned by this batch — 3 page edges
  (batches 40, 36, 41) and 12 item edges into batches 40 (×4), 36 (×2),
  30 (×5) and 37 (×1).
- **Tools re-run 2026-10-10.** `coverage-checklist --require-destination` →
  2 pages, 20 harvested, 0 errors, 1 explained `coverage-low-yield` warning
  (4/14 A-page rows with destinations; the rest are inline, already published
  or declined with reasons). `source-fetch-check` → 5/5 fetch-verified, 5/5
  resolved, 0 drops. `manifest-deps` → 5 items, 0 errors.
  `frontier-item-gate --tool validate-plan` → exit 0 ("no item-level cycles,
  forward references, B-page dependencies, or unresolved ids"; only
  pre-existing `redundant-prereq` advisories elsewhere in the run).
  `manifest-integrity` → 100/100 owed pages present, no scope drift.
  `drift-review-check` → 50 pages reviewed, no blocked edges.
  `step3-decisions check --phase scope` → this page is an outstanding scope
  decision.

## Inventory against the design

| design contract | scaffolded item(s) |
|---|---|
| L1259 bicosimplicial alternating-face total ≡ diagonal totalization, natural chain homotopy equivalence; normalization on either side; no finiteness/choice | `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization` (statement identical to the carrier; adds `def-direct-sum-total-complex-of-a-double-complex`, `def-chain-complex-in-an-abelian-category` for notation) |
| L1269 proper surjective f: Y→X gives augmented derived Čech quasi-isomorphism for F∈D^b_c over any field, arbitrary base change, finite diagonals, non-acyclic fibers allowed | `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves` (all clauses present; adds the coefficient-category and analytic-topology definitions; AC use exactly declared) |
| L1279 proper hypercovers compute F and RΓ, E₁ spectral sequence, finite diagonals, level cutoff m−a+1, refinement/common refinement, k_X first quadrant | `thm-proper-hypercovers-compute-constructible-derived-cohomology` (all clauses present; adds `def-simplicial-object-and-simplicial-commutative-ring` for skeleton/coskeleton/matching vocabulary) |
| L1291 B example: proper Čech descent without acyclic fibers | `ex-proper-cech-descent-does-not-require-acyclic-fibers` (P¹(C) two-chart model, H²≠0, contracted rows; dependency set completed with the published P¹/Ŝ², sphere-homology, field-duality and classical-projectivity route) |
| L1297 B example: total degree uses only a finite matching truncation; n+1 sharp for k_X | `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation` (degree bookkeeping + sharpness clause; adds the simplicial definition) |

Additions beyond the design are definition/vocabulary prerequisites only
(chain-complex/Tot, constructible category, analytic topology, simplicial
object); nothing in the design is dropped, no B item carries load-bearing
suppliers, both pages are far below the size ceiling, and in-run dependency
levels 0/17/18/18/19 are consistent with the written manifests.

## Sources re-verified

Re-fetched 2026-10-10 with `curl -sSL`; byte count and sha256 prefix compared
with the coverage stamps (the tool's check mode also reports 5/5):

| source | recorded | re-fetch |
|---|---|---|
| Dugger–Hollander–Isaksen, *Hypercovers and simplicial presheaves* | 495615 B, `2b9325100689b876` | match |
| Stacks, Hypercoverings (0DEG) | 503134 B, `89f0580d866924ba` | match |
| Stacks, Simplicial Methods (0G6Z) | 682694 B, `87847df7287b59af` | match |

Spot-read for scope (not proof audit): DHI PDF pp. 35–36 — Proposition A.4
(bounded hypercovers are weak equivalences in the Čech localization, by the
cosk_n induction with the bisimplicial Wᵣⱼ, diagonal D and retract argument)
and Lemma A.5 (U→cosk_n U is a generalized cover in every dimension), with
A.7–A.9 around pp. 37–38; the source ledger honestly records that A.2's proof
is deferred to A.12 and was not read or imported. Stacks tags 01G9 = 25.3.9
(hypercovering covering conditions), 01GC–01GF = 25.4.2–25.4.5 (25.4.4
three-covering acyclicity, 25.4.5 acyclicity of a hypercovering's associated
simplicial presheaf), 01GV–01GY = 25.5.1–25.5.3 (functorial map
s(F(K))→RΓ(X,F) and the E₂ first-quadrant hypercovering spectral sequence).
The scaffold's claims sit inside these statements with the qualifications
recorded in the manifest strategies.

## Role in the library and consumer closure

- Batch 46 `proper-hyperresolutions-and-mixed-hodge-restriction-images`
  consumes this A page (page edge in the plan and ledger) and the hypercover
  theorem specifically in
  `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
  and `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`, exactly
  as the design's declared inputs for those items require. The author's
  consumer-check record documents the direct-consumer checks and the repair of
  the nodal example's two-term normalization-Čech complex gap; the smooth
  hyperresolution construction's smoothness remains that consumer's own
  supplier, not asserted here.
- The B items are leaves: no item outside batch 45 depends on either example
  (validate-plan `b-leaf` clean, consumer scan empty).
- Page-level `requires` (7 entries) resolve to 3 in-run scaffold pages
  (batches 36/40/41) and 4 published pages; all are present
  (`manifest-integrity` 100/100; no scope drift).

## Prerequisites and uncertainty

- **Resolved.** All 35 declared dep instances of the 5 items resolve: 19 to
  published `items/*.md` (normalization/prism lemma, sum–product totalisation
  proposition, `thm-bounded-filtered-complex-spectral-sequence-…`,
  `def-axiom-of-choice`, sphere-homology and field-duality corollaries,
  one-point-compactification stereographic and homotopy-invariance items,
  `def-classical-algebraic-prevariety-regular-maps-and-varieties`,
  `def-projective-morphism-classical`, …) and 16 to in-run scaffold items:
  batch 40 `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
  and `lem-analytic-constructible-sheaves-admit-coherent-six-operations`
  (arbitrary field, D_c^b restriction, ordinary/extraordinary proper base
  change), batch 36 `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
  (uniform lower bound, finite diagonals; its local-section conclusion
  explicitly not used as proper descent), batch 30
  `def-algebraically-constructible-complex-of-analytic-field-sheaves` and
  `def-analytic-topology-and-finite-smooth-algebraic-stratifications`, and
  batch 37 `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
  (the "projective algebraic morphism ⇒ proper in the analytic topology"
  clause). Every `[[…]]` reference in the statements and strategies resolves
  (checked mechanically, 0 unresolved); a dependency-closure walk finds no
  path to the set-theory-recorded catalogue; validate-plan reports no
  `undeclared-prereq`.
- **Uncertainty 1 — analytic properness route (example 1).** The consuming
  item `ex-proper-cech-descent-does-not-require-acyclic-fibers` needs
  `S→pt` proper for S=P¹(C) presented as the two-chart classical variety. The
  only in-library route is the batch-37 clause above; there is no standalone
  item in the published library or this scaffold that defines properness for
  (analytic) maps of classical varieties — published `def-proper-morphism` is
  scheme-theoretic, `def-proper-map-between-euclidean-open-sets` is local
  Euclidean, and `lem-av7-proper-quasi-finite-factor-is-finite` uses the
  algebraic separated/finite-type/universally-closed reading. The needed
  implication is asserted inside a scaffolded theorem statement, so this is
  not a confirmed absence; it is an applicability obligation for Step 3b
  (the batch notes' finding 3 says the same). **Recommended owner action:**
  if the clause cannot be applied to the two-chart model, authorize a minimal
  local addition — a definition of properness for classical varieties in the
  analytic topology plus "classical projective morphisms are proper in the
  analytic topology" (for the terminal map, the direct compactness reduction
  via the already-present one-point-compactification items also suffices) —
  and escalate rather than weaken the example silently.
- **Uncertainty 2 — no standalone hypercover definition.** "Proper
  hypercover", skeleton/coskeleton and matching are fixed inline in the
  theorem statement and reused in the same convention by the batch-46
  consumer; this matches the design (which planned no definition item) and
  the Stacks Lemma 3.9 disposition `inline`. No current consumer needs a
  reusable definition; record only in case a later page wants one.
- No other unmet prerequisite found: the declines (model-category
  localization machinery, general-site definitions, Dold–Kan/prism
  extensions) are out of the intended scope with reasons, and every harvested
  row carries a disposition.

## Findings reported to the owner (none scope-blocking)

- **F1 (supplier-id reconciliation, resolved).** The batch notes' conflict 2
  (design/carriers/plan naming the characteristic-zero equivariant
  `thm-constructible-six-functors-proper-base-change-and-verdier-duality`)
  no longer holds: the current design (L1277/L1287), `plan-spec.json` item
  deps and both carrier frontmatters name
  `lem-analytic-constructible-sheaves-admit-coherent-six-operations` and
  `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
  (batch 40), which state the arbitrary-field bounded-constructible
  restriction the descent items consume; the cross-batch row records the
  replacement rationale. The page keeps the reading-order edge to
  `equivariant-constructible-perverse-foundations` with no equivariant item
  consumed. No action required.
- **F2 (coverage wording).** The A-page row "Appendix A acyclic-model
  construction: representable simplex-product models and specified
  contractions of their total and diagonal complexes" (disposition
  `included`, item 1) describes DHI's diagonal comparison, which DHI states
  via homotopy colimits ("standard homotopy theory"); the explicit chain-level
  contractions are reconstructed locally from the Stacks Simplicial §23/§27.1
  material. Recommend aligning that disposition's wording with the actual
  split of sources; no scope consequence.
- **F3 (analytic properness).** As in Uncertainty 1: a genuine applicability
  risk already raised in batch notes finding 3, with the recommended minimal
  local addition. Not a scope blocker for the pair as designed, but it must
  not be closed by silent weakening.
- **F4 (B-page depth, observation).** Both B items are substantive boundary
  checks (nonzero H² in the contracted rows; sharp n−a+1 level cutoff) and are
  exactly the design's planned examples; no enrichment is needed for scope.

## Boundary of this decision

This decision certifies **scope** only: that the planned definitions, results
and examples cover the intended subject, that the pair's declared
prerequisites exist in the published library or the current scaffold, and
that the consumer interfaces the ledger declares are present at declaration
level. It does not certify any statement or proof (Steps 3b and 5–9 own
those), does not audit the scaffold's proof strategies, and does not re-derive
the sources' proofs. Residual uncertainty: F3's applicability question, and
the general fact that the in-run supplier items are scaffold-level
declarations whose proofs are owed to Steps 3–5.

## Decision and receipt

```bash
node tools/step3-decisions.mjs record-scope \
  --run frontier-44-special-representation-examples-28 \
  --page proper-cohomological-descent-and-constructible-hypercovers --decision sufficient \
  --reason "Scope evidence: design L1251-1302 (A contracts L1259 bicosimplicial totalization, L1269 proper-surjection Cech descent for arbitrary field, L1279 proper-hypercover theorem with E1 spectral sequence/finite diagonals/refinement; B examples L1291 non-acyclic fibers, L1297 n-a+1 truncation) is realized item-for-item by 3 A + 2 B scaffolded items, all 5 step1-ready, drift no-drift order 1824; all 35 dep instances and all [[refs]] resolve (19 published, 16 in-run: batch 40 six-operations/constructible-restriction, batch 36 locally-split Cech descent, batch 30 constructible/analytic-topology defs, batch 37 projective-properness clause), validate-plan exit 0 with no undeclared-prereq, manifest-integrity 100/100; coverage 20 rows / 5 source instances over 3 URLs re-fetched byte-identical (DHI 495615/2b9325100689b876 pp.35-38 A.4/A.5/A.7-A.9; Stacks Hypercoverings 503134/89f0580d866924ba tags 01G9/01GC-01GF/01GV-01GY; Stacks Simplicial 682694/87847df7287b59af sec.23/27.1/28.1-2), 0 errors, 1 explained low-yield warning; batch-46 consumers present at declaration level, B items leaves. Findings: F1 earlier equivariant-vs-arbitrary-field supplier conflict is reconciled in design/plan/carriers (batch-40 lemma declared); F2 DHI item-1 coverage wording describes the homotopy-colimit diagonal comparison as explicit contractions (explicit chain-level argument is local, from Stacks sec.27.1) - recommend wording alignment; F3 uncertainty: example 1's S->pt analytic properness is routed through the batch-37 'projective algebraic morphism' clause with no standalone classical analytic properness definition in library or scaffold - if Step 3b cannot apply it, owner should authorize a minimal local properness definition/lemma (or the compactness reduction) and escalate rather than weaken; F4 B examples are the design's exact boundary checks, no enrichment needed. No scaffold edit made. Report: research/frontier-44-special-representation-examples-28-step3a-pair-proper-cohomological-descent-and-constructible-hypercovers.md"
```

Receipt to
`research/frontier-44-special-representation-examples-28-step3a-review-proper-cohomological-descent-and-constructible-hypercovers.json`
(reviewer role only; no owner record, no item approval, no scaffold edit).
