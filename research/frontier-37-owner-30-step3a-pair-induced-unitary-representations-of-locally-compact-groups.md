# Step 3a scope review — induced-unitary-representations-of-locally-compact-groups

- Run `frontier-37-owner-30`, batch 16, role alpha, label
  `step3a-pair-induced-unitary-representations-of-locally-compact-groups-38738a6e42444f53`,
  covers `induced-unitary-representations-of-locally-compact-groups`.
- A page `induced-unitary-representations-of-locally-compact-groups` (order
  510.075, representation-theory, 18 items). B page
  `induced-unitary-representations-of-locally-compact-groups-examples` (order
  510.076, 4 items). Companion pointers agree A↔B; the B page requires only its
  A page.
- Decision: **sufficient**. Scope only — no item approval, no owner record, and
  no edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- `research/frontier-37-owner-30-batch-16.pages.json` (18 A + 4 B items with
  statements, strategies, `deps`, `dependency_level` 0–8, provenance,
  per-item source references), `.coverage.json` (one entry keyed to the A page,
  four sources, 51 harvested rows), `.notes.md`,
  `.cross-batch-dependencies.json` = `[]`.
- Prose design: `research/plan-representation-theory-groups-track.md` RG-23
  section L1686–1732 (heading, 12-row A table L1694–1713, hard proof plan
  L1715–1718, 4-row B table L1727–1732); per-pair source matrix row L2335;
  harvest crosswalk RG-23/H1–H5 L2473–2477; §10 source rows L2288–2290
  (Colojoară–Gheondea; Vogan's two notes); binding `requires` row §15.2 L2726
  with consumers L2727 (`mackeys-imprimitivity-theorem`) and L2731
  (`sl2-r-principal-and-complementary-series`); §15.5 count L2854
  ("RG-23 16"); track conventions L198–212.
- Plan contract: `research/plan-spec.json` rows 510.075/510.076 (empty item
  arrays; requires equal to the manifest), plus the two consumer rows
  510.077 and RG-28's order.
- Run records: `research/frontier-37-owner-30-alpha-step1-drift.md` L80–83
  (verdict `no-drift`; the design's "disintegration" mention reviewed as not
  requiring a separate page for this construction),
  `research/frontier-37-owner-30-drift-evidence.json` (entry carries exactly
  the manifest's seven declared requirements),
  `research/frontier-37-owner-30-scope-ledger.json` (pair present, batch 16),
  and all 22 `research/frontier-37-owner-30-step1-<item>.json` readiness
  records (22/22 present, every `decision: ready`, each with examined
  dependency IDs and a named source locator). No owner decision exists for
  this pair: `research/frontier-37-owner-30-owner-authoring-direction.md` is
  absent and no Step-3a owner receipt exists.
- Sources re-verified at review time (2026-09-30): all four coverage URLs
  re-downloaded and byte counts / hashes re-checked against the coverage
  `fetch_verified` stamps — Bekka–de la Harpe–Valette 1,971,873 B
  `0281823290dfb42e` (523 pp.), Bruhat 599,589 B `f96f18587433e1df` (140 pp.),
  Vogan, *Unitary induced representations* 82,682 B `6c02526f63133db5`
  (5 pp.), Vogan, *Invariant measures on homogeneous spaces* 50,109 B
  `73b97b2d24d645f779997dd3316c431ca7124805a7ab5b24e517c8c314e71d3f`
  (3 pp.). All four match exactly.

## Scope against the prose design

- All 16 designed ids are present in the manifest — 12 A (design L1694–1713)
  and 4 B (L1727–1732), no drops, no renames, no kind changes: quasi-invariant
  measure, rho-function, rho/measure existence, Weil formula, Radon–Nikodym
  cocycle, covariant-function model, inner product, unitary action, strong
  continuity, unitary induction, independence of rho/measure, induction in
  stages; and the four B leaves (trivial subgroup → regular representation,
  cocompact lattice → quasi-regular, finite-group counting model, affine
  counterexample). Every design "what it is for" column is realised by the
  corresponding manifest statement.
- Six further A items beyond the design table are local suppliers of the
  design's own hard proof plan (L1715–1718) and of the plan's binding proof
  routes: quotient topology/averaging and compact lifts, the normalized Bruhat
  cutoff, the invariant-measure criterion, density of averaged covariant
  generators, local Radon–Nikodym densities for equivalent quotient
  representatives, and the two-level composition of Weil integrals used for
  induction in stages. Each is inside the page's declared subject, each is
  disposed `included` in the coverage against a harvested heading (BHV
  B.1.1/B.1.2/B.1.7, E.1.1/E.1.3, Bruhat 7.3.3–7.3.4, Vogan integration
  Theorems 4/6/8), and the A inventory stays at 18 < 60 rows. This is
  scaffolding for the designed scope, not scope expansion.
- Design hard-proof-plan clauses are all carried: measure class before the
  Hilbert space; both modular functions carried through every covariance
  formula (`def-rho-function`, `thm-existence`, `thm-weil`,
  `lem-radon-nikodym-cocycle`); compact-coset-support sections first, then
  completion (`def-covariant-function-model`,
  `lem-compactly-supported-covariant-generators-are-dense`); explicit
  multiplication unitary for independence
  (`thm-induced-representation-is-independent-of-rho-function-and-measure-representative`
  with `lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities`);
  the H=G, H={e} and invariant-measure cases in
  `thm-unitary-induction-from-a-closed-subgroup` (with
  `ex-unitary-induction-from-the-trivial-subgroup` and
  `prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree`).
- Design/plan deviation examined and already adjudicated: the design's
  Requires line (L1690) names "the measure-theory pages on Radon–Nikodym
  derivatives and disintegration", while the plan-spec/binding row (L2726)
  names the seven published pages (no disintegration page). The Step-1 drift
  review recorded `no-drift` with the reason that the construction needs no
  separate disintegration page (L83), and the scaffold in fact uses no
  disintegration result: the composition lemma
  `lem-composition-of-quotient-integrals-for-subgroup-chains` supplies the
  only iterated-quotient identity any assigned claim consumes (stages), and
  no item strategy mentions a disintegration theorem. I re-checked this
  against the design's own hard proof plan and found no clause that requires
  one.
- Deliberate boundary, not an omission: BHV E.2.1 (functoriality), E.2.2
  (direct sums), E.2.3 (irreducibility passes down) and E.2.5/E.2.6 (tensor
  identity and corollary) are disposed out-of-scope with item-specific
  reasons, and no designed item, H-row, or in-run consumer uses them. BHV
  E.1.8(iii) (SL2(R) principal series) is deferred to the planned page
  `sl2-r-principal-and-complementary-series` (present in `plan-spec.json`),
  which is where the design places the principal-series identification.
  BHV B.2 (lattices) and the B.3/E.4 exercise sections are outside the pair's
  subject and were not harvested.

## Source coverage and fidelity checks

- Harvest shape: 51 rows — BHV 27, Bruhat 12, Vogan *Unitary induced
  representations* 7, Vogan *Invariant measures* 5 — with dispositions
  `included` (mapped to scaffolded ids), `inline`,
  `already-published`, `deferred`, or `out-of-scope` with written reasons.
  `coverage-checklist.mjs` reports `1 page(s), 51 harvested result(s), 0
  error(s), 0 warning(s)`.
- Locators I re-read from the re-fetched texts: BHV B.1.1–B.1.9 (printed
  pp. 343–351): compact lifts, surjective averaging, the rho covariances of
  Lemma B.1.3, Theorem B.1.4(i)–(iii), full support B.1.5, relatively
  invariant character B.1.6, invariant criterion B.1.7, unimodular-subgroup
  corollary B.1.8, quasi-regular definition B.1.9; BHV E.1.3–E.1.8 (printed
  pp. 408–412) including the action formula (∗∗), Proposition E.1.4,
  independence E.1.5, definition E.1.6, remark E.1.7, examples E.1.8(i)–(iii);
  BHV E.2.1–E.2.6 (printed pp. 411–413). Bruhat Chapter 7 §§3.3–3.4 (printed
  pp. 63–68): Proposition 2, Lemma 1 (normalized cutoff), Proposition 3
  (descent and modular criterion), the quasi-invariant definition,
  Proposition 4, Lemma 2 (positive rho from the cutoff). Vogan
  *Unitary induced representations* §§1–4 in full (§3 covariant functions
  incl. compactly supported mod H; Proposition 4.1; Corollary 4.2). Vogan
  *Invariant measures on homogeneous spaces* in full (Theorems 2, 4, 6;
  Definitions 7; Theorem 8).
- Conventions verified against the sources rather than assumed: BHV's
  induced-action formula (∗∗) is exactly the manifest's
  `Π_ρ(g)F = D_g^{1/2}F(g^{-1}·)` with `D_g(xH)=ρ(g^{-1}x)/ρ(x)` derived
  from B.1.4(i); BHV Definition B.1.9 supplies the quasi-regular model for
  the cocompact-lattice example; Vogan's (2b) modular character agrees with
  the library's Δ convention; Vogan Definition 7 and Bruhat Lemma 2 give the
  rho covariance in the manifest's right-H form
  `ρ(xh)=Δ_H(h)Δ_G(h)^{-1}ρ(x)`. The design's phrase "Δ_G/Δ_H covariance"
  is realised in this orientation, as the batch notes recorded.
- One source defect is genuinely stripped: BHV Theorem B.1.4(ii) ("every
  quasi-invariant regular Borel measure is associated to a rho-function"),
  read against BHV's own definition of quasi-invariance as equivalence of
  measure classes, is false as literally stated — for H={e} the measure
  `(1+1_Q)dx` is Radon, quasi-invariant, and not a.e. equal to any continuous
  positive density. The coverage disposes it out-of-scope for exactly this
  reason, and the pair covers the needed generality instead through
  `def-quasi-invariant-measure-on-a-homogeneous-space`,
  `lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities`
  (σ-compact components) and the independence theorem. No designed content is
  lost; the replacement is correct where the source sentence is not.
- Source-record observations (non-blocking; see below): the design's named
  full treatment A, Colojoară–Gheondea Ch. 4 §§1–4, is not among the four
  coverage sources; and BHV Appendix E.3 (invariant-vector characterization,
  printed pp. 414–416), named in the design's range line L1696/L2335 but in
  no H-row, has no harvest row.

## Dependency integrity and role in the library

- Page closure: the transitive `requires` closure of the A page is 198 pages,
  every prerequisite with smaller plan order than 510.075; all seven declared
  prerequisite pages are published `library/` pages
  (`haar-measure-existence-and-uniqueness`,
  `the-modular-function-and-l1-group-algebras`,
  `unitary-representations-positive-type-and-gns`,
  `partitions-of-unity-and-paracompactness`,
  `radon-measures-and-the-riesz-markov-kakutani-theorem`,
  `the-radon-nikodym-theorem-and-lebesgue-decomposition`,
  `banach-valued-integration-and-the-radon-nikodym-property`).
- Item closure: recursive declared-edge traversal from the 22 owned items
  reaches 1,300 ids = 22 owned + 1,278 `items/*.md` files, all
  `status: published`, with 0 missing, 0 drafts, 0 `proved_here: false`,
  0 foreign in-run suppliers (consistent with
  `.cross-batch-dependencies.json` = `[]`), and no cycle among the owned
  items. The 19 external direct dependencies are published, including the
  σ-finite Radon–Nikodym theorem (used only on σ-compact quotient
  components), the Bochner criterion, `C_c`-density in L^p for Radon
  measures (DC), and the finite-group induced-module definition the B example
  compares to. The published compact-kernel commuting-integral lemma that
  several strategies use is stated for LCH spaces and compactly supported
  kernels, exactly the use made of it.
- Role: per the binding table the pair feeds
  `mackeys-imprimitivity-theorem` (L2727; the design's reconstruction proof
  is built "directly in the RG-23 model", and the manifest supplies the
  covariant-section Hilbert model, the quasi-invariant measure class and the
  invariant-measure criterion) and `sl2-r-principal-and-complementary-series`
  (L2731; `def-normalized-principal-series-i-epsilon-nu` consumes normalized
  induction, which is exactly the square-root-cocycle action proved here).
  Both consumer pages are future runs, so no consumer manifest exists to
  check; their designed interfaces are present. No other page in this run's
  plan requires this pair.

## Uncertainty and observations for the owner (not scope findings)

1. **Design-named source not read.** The §11 matrix (L2335) names
   Colojoară–Gheondea Ch. 4 §§1–4 as the pair's full treatment A. The
   coverage instead backs the same H1–H5 rows with BHV Appendix B §B.1 and
   Appendix E §§E.1–E.2, Bruhat Ch. 1/7, and both Vogan notes — four
   fetch-verified treatments, of which at least two (BHV, Bruhat) are
   independent full treatments of the quotient-measure half and BHV/Vogan of
   the induction half. Every assigned claim and every H-row is source-mapped
   to an inspected text. Recommendation: record the substitution in the
   coverage/notes (or add the Ch. 4 §§1–4 read at Step 5) so the matrix row is
   not later misread as "source read and unused".
2. **E.3 not harvested.** The design's range line names BHV App. E §§E.1–E.3;
   the coverage's locator stops at E.2 and E.3.1 (Ind has an invariant vector
   iff G/H carries a finite invariant measure and 1_H ⊂ σ) has no row. It is
   in no H-row, no designed id, and no in-run or designed consumer (RG-29's
   design does not use it), so nothing promised is missing; if the range
   claim is to be read literally, it merits an explicit `out-of-scope` row
   rather than silence.
3. **Bookkeeping.** The design §15.5 count for RG-23 is 16 (12 A + 4 B); the
   manifest holds 22 (18 A + 4 B) because of the six local suppliers. Same
   pattern as the RG-19/RG-21 pairs in sibling batches; not drift.
4. **Authoring contract details.** (a) "Cocompact"/"uniform lattice" is not
   currently a published definition in `items/`; the cocompact-lattice
   example should define it in place (or a support item should be added) so
   the statement is self-contained. (b) The B leaf
   `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model` is
   correctly kept free of the general measurable machinery (its only dep is
   the published finite-group induced-module definition). (c) AC/DC
   declarations match the strategies where I spot-checked (A items declare
   `def-axiom-of-choice` and, for the σ-compact/local-RN routes,
   `thm-choice-implies-dependent-implies-countable-choice`).
5. Proof correctness, statement-by-statement source fidelity, dependency
   minimality and AC bookkeeping were **not** judged here; those belong to
   Step 3b and Step 5. In particular the design's note that the strong
   continuity proof still needs source-level verification during authoring
   (drift review L83) remains open as an authoring obligation.

## Checks run

| Check | Result |
|---|---|
| `coverage-checklist.mjs research/frontier-37-owner-30-batch-16.coverage.json` | exit 0: 1 page, 51 harvested rows, 0 errors, 0 warnings |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-16.pages.json` | exit 0: 22 items, 0 errors |
| `manifest-integrity.mjs --run frontier-37-owner-30` | 60/60 pages owed and present, no scope drift |
| `validate-plan.mjs research/plan-spec.json` | exit 0: order acyclic/consistent; no item cycles, forward references, B-page dependencies or unresolved ids among 1,300 pages with item lists (only unrelated redundant-prereq notes) |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0: 778 items over 60 pages, maximum level 31 |
| Step-1 readiness records for the 22 batch-16 items | 22/22 present and `ready` |
| Design-to-manifest identifier diff (RG-23 section) | 16/16 design ids present; 6 extra ids, each a recorded local supplier |
| Source re-verification (4 URLs, byte count + sha256 + page count) | 4/4 match the coverage fetch stamps exactly |
| Page-level `requires` closure of the A page | 198 pages, all with order < 510.075 |
| Item-level closure of the 22 owned items | 1,300 ids (22 owned + 1,278 published), 0 missing/draft/`proved_here:false`/foreign, 0 cycles |

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — the quasi-invariant measure class on G/H, rho-functions and the
modular correction, the Weil quotient integration formula, the continuous
Radon–Nikodym cocycle, the covariant-function Hilbert model with its unitary
and strongly continuous action, independence of the auxiliary choices, and
induction in stages — at design breadth: 12/12 designed A results and 4/4
designed B leaves are present, with six source-mapped local suppliers of the
design's own proof plan, four independently fetch-verified treatments whose
load-bearing results I re-read against the manifest's statements and
conventions, a published and order-safe prerequisite closure, and the
interfaces the two designed consumer pages need. Recorded: **sufficient**.

## Appendix — inventory this decision is bound to

Scope receipt
`research/frontier-37-owner-30-step3a-review-induced-unitary-representations-of-locally-compact-groups.json`
is hash-bound to the current pair scope
(`39ff7ea8824794cb8d114bd5f7bc30b67b876072e1ea492117dc081954afaa8b`).
A page (18 items, manifest order):

1. `lem-closed-subgroup-quotient-averaging-and-compact-lifts` (lemma, supplier)
2. `def-quasi-invariant-measure-on-a-homogeneous-space` (definition, designed)
3. `def-rho-function-for-a-closed-subgroup` (definition, designed)
4. `lem-bruhat-cutoff-on-a-closed-subgroup-quotient` (lemma, supplier)
5. `thm-weil-quotient-integration-formula-with-rho-function` (theorem, designed)
6. `thm-existence-of-rho-functions-and-quasi-invariant-measures-on-g-mod-h` (theorem, designed)
7. `prop-invariant-measure-on-g-mod-h-iff-modular-functions-agree` (proposition, supplier)
8. `lem-radon-nikodym-cocycle-of-a-homogeneous-measure` (lemma, designed)
9. `def-covariant-function-model-of-unitary-induction` (definition, designed)
10. `lem-the-induced-inner-product-is-independent-of-coset-representatives` (lemma, designed)
11. `lem-compactly-supported-covariant-generators-are-dense` (lemma, supplier)
12. `lem-the-induced-action-is-unitary` (lemma, designed)
13. `lem-the-induced-action-is-strongly-continuous` (lemma, designed)
14. `thm-unitary-induction-from-a-closed-subgroup` (theorem, designed)
15. `lem-equivalent-radon-measures-on-a-homogeneous-space-have-local-densities` (lemma, supplier)
16. `thm-induced-representation-is-independent-of-rho-function-and-measure-representative` (theorem, designed)
17. `lem-composition-of-quotient-integrals-for-subgroup-chains` (lemma, supplier)
18. `thm-unitary-induction-in-stages` (theorem, designed)

B page (4 items, all designed):

1. `ex-unitary-induction-from-the-trivial-subgroup` (example)
2. `ex-unitary-induction-from-a-cocompact-lattice` (example)
3. `ex-unitary-induction-for-a-finite-group-recovers-the-counting-model` (example)
4. `cex-g-mod-h-need-not-have-an-invariant-measure` (counterexample)
