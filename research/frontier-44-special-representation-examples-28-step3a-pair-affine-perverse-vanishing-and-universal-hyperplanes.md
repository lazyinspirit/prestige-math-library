# Step 3a scope review — `affine-perverse-vanishing-and-universal-hyperplanes` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 43 · 2026-10-10
- A page: `affine-perverse-vanishing-and-universal-hyperplanes` (order 1820, 7 lemmas)
- B page: `affine-perverse-vanishing-and-universal-hyperplanes-examples` (order 1825, 1 example)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (receipt `research/frontier-44-special-representation-examples-28-step3a-review-affine-perverse-vanishing-and-universal-hyperplanes.json`).
  Reviewed scope hash `25ffa5eaea6c4b8e38e0b84ad42aeed19e4a6e9186476607053e2f52c8a6a9f8`
  (recorded 2026-10-10T09:14:07.015Z).
  Manifest bytes reviewed: `research/…-batch-43.pages.json` sha256
  `37b5d908008e3e2e0bb4d01b6dc9f24a9df8e5e25123849ffc9877208180c2d2`; coverage
  `…-batch-43.coverage.json` sha256 `0b583a1fdf6b0019672958f2536d5ff277b4539b76352a779e010f34023ea1de`.

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §“Affine Perverse Vanishing
  And Universal Hyperplanes”, L1103–1184 (the batch task's L934 pointer is stale; the beta's
  notes already record this and no item is affected). The owner direction
  `…-owner-authoring-direction.md` L161–163 binds the 21 prerequisite pairs into this same
  native run and retires the separate `frontier-44-klr-foundations-prerequisites` attempt;
  only this run's scaffold is treated as evidence.
- Design ↔ manifest: all seven design suppliers and the one design example are present,
  statement-for-statement, with identical ids, declared inputs and requires in
  `research/plan-spec.json` (orders 1820/1825). Spot-read against the design: the distance
  exhaustion (equal critical values explicitly allowed), the stratified-Morse/complex-link
  item (no decomposition theorem, arithmetic purity or affine paving; ball-cut link not
  asserted affine), noncharacteristic pullback (restricted to transverse stratifications),
  Artin vanishing (sheaf bound by the support-closure dimension plus both perverse aisles),
  affine one-sided exactness (affine-open characterization, arithmetic purity replaced by
  the oriented local-cohomology detector), defect decrease (no counting-of-constants
  assumption; prescribed stratified transversality kept as a separate conditional
  supplier), and universal hyperplanes (both suppliers kept explicit, not identified with
  the absolute Artin bound). No claim is narrowed relative to the design.
- One metadata-only divergence (flagged by the beta, unchanged here): the Morse item carries
  the carrier title “Complex stratified Morse data, constructible transport and complex
  links” instead of the plan's machine title. Item titles are inside the scope hash, so any
  later retitling requires a fresh scope decision.
- Intended role: the pair supplies the perverse-sheaf geometry package for the projective
  theorem chain. Full run scan (858 items/100 pages): the only item consumer is
  `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  on `projective-perverse-hard-lefschetz-and-decomposition` (order 1830), which consumes
  five of the seven A items (Artin vanishing, affine exactness, noncharacteristic pullback,
  defect decrease, universal hyperplanes); the same page is the only page consumer. The
  pair then feeds the quiver-flag semisimplicity pair (1834) and the KLR chain (1836)
  transitively. The B page is a leaf; nothing consumes it. Sizes are 7 and 1 items, far
  below the 100-item cap; no split is indicated.

## 2. Source coverage

- `…-batch-43.coverage.json`: 38 harvested rows (A 34, B 4), `coverage-checklist
  --require-destination` 0 errors/0 warnings, `source-fetch-check` 7/7 fetch-verified.
- Independent re-fetch today: all five documents byte-identical to the recorded stamps —
  Goresky–MacPherson *Stratified Morse Theory* 25,209,903 B `87ec78b5948ef42f` (279 pp.);
  Goresky *Lecture Notes on Sheaves and Perverse Sheaves* 1,954,729 B `dfd4e0721c8c2e31`
  (168 pp.); Goresky *Morse theory, stratifications and sheaves* 470,721 B `5e563a72cb7f97a6`
  (42 pp.); BBD *Faisceaux pervers* 15,581,222 B `b1e10440e13cb6bf` (172 pp.); de Cataldo–
  Migliorini *The Hodge theory of algebraic maps* 676,708 B `35fcdf2d6c0688fa` (66 pp.).
- Decisive loci read in the fetched files: SMT §2.2.1–2.2.4 (existence/density of Morse
  functions, the submersion-family theorem 2.2.3, the distance example 2.2.4); all2 §17.7
  (complex-link/Morse-group vanishing and the perverse characterization) and §17.9
  (Stein/affine vanishing and the projective-hyperplane pair); ShMo §1.7.6 Lemma 2 and
  §1.8.1–1.8.2; BBD 4.1.1–4.1.8 (affine t-exactness, Artin corollaries, the affine-open
  converse, the local-system detector) and 5.4.11–5.4.13 (universal hyperplane family,
  maximal perverse subsheaf from the base, projective-bundle formula); dcM 3.5.4
  (`i^!K ≅ i^*K[−2d]`), 3.7 (t-exactness), and 4.7.1–4.7.9 (transversal embedding, Def. 4.7.2
  defect/semismall/small, Thm. 4.7.4, Lemma 4.7.6, Props. 4.7.7–4.7.9). All match the
  claims and locators they are cited for.
- Declines are routed, not dropped: SMT Part I Ch. 9–11 (relative/nonproper Morse theory)
  out-of-scope for a proper finite exhaustion; SMT Part II Ch. 4–6 and dcM §2–6 deferred to
  `projective-perverse-hard-lefschetz-and-decomposition` (order 1830, exists); BBD
  4.2.7–4.2.10 external tensor product out-of-scope (owned by the convolution pairs 1821
  and `signed-quiver-flag-convolution-and-klr-ext-realization`, both in-run).

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed every `deps` entry and `[[…]]` reference of the 8 pair items, classified
against `items/*.md`, the 858 in-run items and the plan-spec page graph; computed the A/B
`requires` closures.

- 33 distinct direct dependencies: 19 published library items, 8 in-run items on four
  supplier pages (`analytic-constructible-sheaf-foundations`@1796,
  `constructible-incidence-and-cochain-models`@1805, `complex-algebraic-stratified-topology`@1809,
  `analytic-derived-six-operations-and-duality`@1813), 6 own-pair items, **0 unresolved**.
  All supplier pages are inside the A page's computed 361-page `requires` closure (354
  published + 6 in-run prerequisite pages + the page itself); supplier statements were read
  at declaration level and match the consumed clauses (Whitney control data, six operations
  and duality, perverse t-structure, constructible derived category, controlled
  trivializations, finite triangulations, finite incidence model).
  `validate-plan` exits 0 with only `redundant-prereq` advisories on this page's plan-level
  `requires`; `content-policy` 858 items 0/0, `manifest-deps` 0 errors,
  `item-dependency-levels` clean (levels 2,17,18,18,19,0,20 / 1).
- **Finding (i) — strong plurisubharmonicity has no declared home.** Items 1 and 2 use
  “strongly plurisubharmonic” in their statements (item 2 twice, including
  `−log(R²−φ_a)`) and item 4's strategy uses the tangent-index bound for such functions.
  The library definition `def-levi-form-and-strict-plurisubharmonicity` is published on
  `domains-of-holomorphy-and-pseudoconvexity` (order 714), but that page is **not** in the
  computed `requires` closure, so declaring the edge produces a hard `undeclared-prereq`
  error. Confirmed, not uncertain. Recommended owner action: either add that page to the A
  page's `requires` (reading-order change) and declare the definition on items 1, 2 (and 4
  if used), or explicitly authorize the authoring route of verifying the concrete functions
  `φ_a = ‖z−a‖²` and `−log(R²−φ_a)` inline; the author must not silently import the SCV
  page.
- **Finding (ii) — the defect/semismallness notion has no definitional home anywhere.**
  “Semismall”/“small”/defect `r(f)` occur only in this scaffold and later scaffolds
  (batches 43, 44, 47, 48, 49); `grep -il semismall items/ library/` returns nothing, and
  no `def-*` item in the published library or the 858 in-run items defines the notion. The
  consuming planned results are A item 6 (which defines `r(f)` and smallness inline in its
  statement), the B example, the order-1830 consumer (defines `r(f)` inline), and the
  1834/1835 items that only deny needing semismallness (`ex-one-color-quiver-full-flags-need-not-be-semismall`
  computes the defect inline). Confirmed absence of a standalone home; uncertain only in
  the sense that inline definition in item 6 is a workable authoring route. Recommended:
  owner may authorize a definition item at this page (it is in the closure of 1830/1834/1835)
  or record that the inline definition in item 6 is the intended home.
- **Finding (iii) — the dual projective space `(ℙ^d)^∨` and the universal hyperplane
  incidence have no dedicated definition item.** The published `lem-linear-system-incidence-is-smooth`
  and `thm-bertini-smooth-hyperplane-section` (in closure through
  `zariski-tangent-spaces-regular-points-smoothness-and-bertini`) provide the scheme-level
  incidence, and the notation is standard; the beta's recommendation to keep the
  parametrisation inline (or escalate an owner-level edge) remains open. Not blocking.
- **Finding (iv) — item 6's “separately supplied stratified transversality theorem” is not
  identified among current suppliers.** No published or scaffolded item states that a
  generic hyperplane meets a prescribed finite algebraic Whitney stratification
  transversally. The clause is explicitly conditional (“when … applicable”), and the 1830
  consumer does not invoke it (checked its statement/strategy), so no current consumer
  depends on it; if a consumer later needs the unconditional statement, the owner must add
  the supplier.

## 4. Consumer-interface spot checks (scope view)

- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
  (1830) declares the five A items above; each consumed clause is present: perverse
  amplitude/support control on affine opens and `Ru_*`/`Ru_!` one-sidedness (item 5),
  absolute/relative Artin vanishing (item 4), `i^*[−c]`/`i^! = i^*[−2c]` for transverse
  noncharacteristic pullback (item 3), `r(f)` and hyperplane-section defect decrease with
  the small case (item 6), and the universal-hyperplane relative weak Lefschetz with the
  maximal perverse subobject/quotient from the base (item 7). This is a declared-clause
  mapping only; proof correctness is Steps 3b/5a work.
- B page: requires its A page plus `relations-functions-and-quotients`; its single example
  consumes item 6 and `def-axiom-of-choice`; `validate-plan`'s b-leaf/b-requires-a checks
  are clean. No consumer anywhere needs a claim routed elsewhere.

## 5. Checks run (exact results and boundaries)

- `node tools/frontier-item-gate.mjs --run … --tool validate-plan`: exit 0 run-wide; this
  pair has only `redundant-prereq` advisories (plan-wide hygiene, 947 run-wide), no
  `undeclared-prereq`, no ordering/cycle/b-leaf error.
- `content-policy --manifest-only` over all 100 batch files: 858 items, 0 errors, 0
  warnings. `manifest-deps`: 858 items, 0 errors. `item-dependency-levels check`: 858
  items/100 pages, clean, max level 47.
- `coverage-checklist --require-destination` (batch 43): 2 pages, 38 results, 0/0.
  `source-fetch-check --coverage` (batch 43): 7/7 fetch-verified, 7/7 resolved, 0 drops;
  all five distinct documents independently re-fetched byte-identically today (§2).
- `step1-decisions check`: 858/861 ready; the only three open items are on the
  `projective-functors-and-the-soergel-functor-in-category-o-examples` page, not this pair;
  all eight batch-43 items are closed at Step 1.
- Boundaries: scope assessment only. No scaffold was edited, no item approved, no proof
  content checked; the seven A items and the B example are un-authored scaffolds, and the
  suppliers' proofs remain owed to Steps 3–5. My source pass anchored the cited ranges in
  the fetched PDFs; the beta's recorded full-range readings remain the Step-1 evidence for
  the unread remainder. Residual uncertainty is limited to owner preferences in findings
  (i)–(iii), not to coverage of the designed subject.

## 6. Decision and next action

- `sufficient` for `affine-perverse-vanishing-and-universal-hyperplanes`: the planned
  results and example realize the seven design suppliers and the design example exactly,
  the five authoritative sources were independently re-verified at the cited loci with no
  gap in the pair's subject, every direct dependency resolves inside the declared requires
  closure, and the sole consumer's declared interfaces are present. The findings (i)–(iv)
  are interface/definition-home matters for the owner and do not block authoring as
  scaffolded; no enrichment or merger is required at Step 3a.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page affine-perverse-vanishing-and-universal-hyperplanes
  --decision sufficient` (reason names the evidence and this report).
- Next action: Step 3b authors the seven A items and the B example in dependency order once
  the 3a stage drains, resolving findings (i)–(iii) by the owner's recorded route; any
  change to a statement, title or inventory changes the scope hash and requires a fresh
  scope decision before item bookkeeping can use it.
