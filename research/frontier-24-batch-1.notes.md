# frontier-24 · Beta · batch notes — `noether-normalisation-and-nullstellensatz` (steps 1-2)

Run `frontier-24`, batch `1`, one A/B pair, category `commutative-algebra`.
Author: Beta. Session date: Saturday, August 29, 2026.
Design section: `research/plan-commutative-algebra-track.md:3324`.

Artifacts owned by this batch:
`research/frontier-24-batch-1.pages.json`,
`research/frontier-24-batch-1.coverage.json`,
and this file.

---

## 1. Shape and split check

- `noether-normalisation-and-nullstellensatz` (A): **28 items**.
- `noether-normalisation-and-nullstellensatz-examples` (B): **7 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The opening field-theory block keeps transcendence-basis work local, but only
  at the granularity the CA-7 overlay actually spends: maximal independent
  subsets, exchange, and tower additivity for finite transcendence degree.
- The normalization block follows the design's explicit trap repair: infinite
  fields get a triangular linear-change lemma, finite fields get a separate
  rapid-exponent substitution lemma, and both feed one-relation reduction and
  the induction to module finiteness.
- The Zariski/Nullstellensatz block splits the classical theorem chain into the
  precise steps the later authoring pass will need: one-variable denominator
  obstruction, localized polynomial rings not fields, transcendence-basis
  reduction, the field-form Zariski lemma, maximal-ideal residue fields,
  evaluation ideals, weak Nullstellensatz, and the three Rabinowitsch moves.
- The closing block keeps the affine/Jacobson seam algebraic: points as
  `k`-algebra maps, radicality and zero-locus lemmas, point separation over an
  algebraically closed field, and the finite-type-over-a-field Jacobson
  corollary needed to detect radicals by maximal ideals.

---

## 2. Design control and drift

I checked the live spec entry in `research/plan-spec.json` against the dispatch
and the controlling CA-7 overlay.

- The live spec and the dispatch agree on the page ids, orders `111.013` and
  `111.014`, title, companion relationship, and page-level prerequisite
  `integral-extensions-and-going-up-examples`.
- The controlling design block at line `3324` refines the earlier coarse CA-7
  summary at lines `688-703`. That earlier block names generic items such as
  `def-algebraic-independence-and-transcendence-basis`,
  `def-transcendence-degree`, and `thm-finite-type-algebras-over-jacobson-rings`;
  the later CA-7 overlay deliberately replaces them on this page by the more
  focused item list beginning
  `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis`.
- I treated the later overlay as the controlling scaffold granularity and kept
  the live spec's page metadata unchanged. This is a refinement, not a
  contradictory order/prerequisite drift, so there is no batch-local drift
  disposition to settle.

---

## 3. Source stack and URL discipline

Formal harvest sources recorded in the coverage file:

1. `https://www.jmilne.org/math/CourseNotes/FT.pdf`
   J. S. Milne, *Fields and Galois Theory*, v5.10.
2. `https://www.jmilne.org/math/xnotes/CA.pdf`
   J. S. Milne, *A Primer of Commutative Algebra*, v4.03.
3. `https://web.mit.edu/18.705/www/13Ed.pdf`
   Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*,
   13th ed.

These give two independent treatments in the sense the task requires:

- Altman-Kleiman is the primary textbook route for Noether normalization,
  Zariski's lemma, weak/strong Nullstellensatz, the Jacobson appendix, and the
  finite-type-over-Jacobson generalization.
- Milne's commutative-algebra notes are the independent full lecture-note route
  for the normalization, weak/strong Nullstellensatz, and Jacobson seams.
- Milne's field notes supply the missing transcendence-basis preliminaries that
  the CA-7 overlay now spends explicitly: exchange, maximal independent sets,
  and the finite-cardinality/transcendence-degree discussion. This avoids
  reviving the coarser track-level `def-` items solely to carry those facts.

Exact-URL stamp reuse on Saturday, August 29, 2026:

- Milne FT: reused the exact fetch stamp already present for the same URL in
  `research/frontier-19-batch-3.coverage.json`:
  `1853550` bytes, SHA-256 prefix `5c43ea0bf4ec190b`.
- Milne CA: reused the exact fetch stamp already present for the same URL in
  `research/frontier-22-batch-2.coverage.json`:
  `969570` bytes, SHA-256 prefix `1839ca7a488ab05c`.
- Altman-Kleiman: reused the exact fetch stamp already present for the same URL
  in `research/frontier-22-batch-2.coverage.json`:
  `1459195` bytes, SHA-256 prefix `d3273e492ae9f1fd`.

All three exact recorded URLs are therefore already fetch-verified for
`source-fetch-check` gate mode, and each was re-opened through the web reader at
the recorded headings/results before writing this scaffold.

---

## 4. Local scaffold choices

- I kept the CA-7 overlay's first and last seams as lemmas rather than adding
  new coarse `def-` items for transcendence bases or Jacobson rings. The
  earlier track summary already reserves those broad claims elsewhere, and
  duplicating them here would create two competing local carriers for the same
  content.

- The normalization route follows the overlay exactly:
  `lem-noether-normalisation-nonzero-polynomial-made-monic` handles the
  infinite-field triangular change, and
  `lem-noether-normalisation-finite-field-exponent-substitution` isolates the
  finite-field weight argument so the later proof does not silently assume the
  base field infinite.

- I kept `lem-noether-normalisation-one-relation-reduction` and
  `lem-noether-normalisation-inductive-integrality` separate. Altman and Milne
  each prove the theorem as one proof spine, but the page genuinely needs the
  one-relation integrality step as a reusable intermediate result.

- The field-form Zariski lemma is split into the exact three proof moves the
  page spends:
  `lem-zariski-lemma-one-variable-localisation-not-finite`,
  `lem-zariski-lemma-localised-polynomial-ring-not-field`, and
  `lem-zariski-lemma-transcendence-basis-reduction`.
  That keeps the denominator obstruction explicit instead of hiding it inside a
  black-box theorem.

- Weak Nullstellensatz is scaffolded in the coordinate form the design wants.
  The page proves `lem-evaluation-ideal-is-maximal` separately before
  `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`, so the later
  authoring pass does not bury the evaluation-kernel computation inside the
  maximal-ideal theorem.

- Strong Nullstellensatz is deliberately decomposed into
  `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus`,
  `lem-rabinowitsch-unit-ideal-consequence`,
  `lem-rabinowitsch-substitution-clears-denominators`, and the final
  `cor-strong-nullstellensatz-two-inclusions`. This matches the overlay and
  keeps the hard implication auditable.

- I stopped the dimension seam at
  `cor-noether-normalisation-dimension-lower-bound`.
  The full affine-domain equality with transcendence degree belongs to the later
  CA-10 page `krull-dimension-and-height-theorems`, which is already where the
  main track places `thm-affine-domain-dimension-transcendence-degree`.

---

## 5. Known limits and downstream caution

- The coverage stack is intentionally narrower than the bibliography behind the
  design memo. I did not record the design's `TN`, `BU`, `BM`, or `Stacks`
  references in this batch because the three stamped sources above already close
  the scaffold mathematically and validator-cleanly. The page still follows the
  design's chosen route: finite-field normalization is separated, Jacobson work
  stays algebraic, and full affine-dimension equality is left for CA-10.

- The page's transcendence-basis language is locally carried by the first three
  A-page items rather than by the earlier coarse track-level items
  `def-algebraic-independence-and-transcendence-basis` and
  `def-transcendence-degree`. This is deliberate. The later overlay is the live
  scaffold contract for this page, and rebuilding both granularities in one page
  would be duplicate scope.

- `lem-finite-type-jacobson-residue-extension` is stated only at the residue
  field level, not as the full generic theorem "finite-type algebras over
  Jacobson rings are Jacobson". The companion corollary
  `cor-affine-closed-points-detect-radicals` proves exactly the field-base
  consequence this page needs, and no more.

- I did **not** create `research/frontier-24-batch-1.proof-contracts.json`.
  This dispatch is the scaffold-and-source pass, not step-5 authoring.

---

## 6. Validator results

- `node -e "JSON.parse(...pages...); JSON.parse(...coverage...);"`
  Result: **pass** — `json-ok`.

- `node tools/coverage-checklist.mjs research/frontier-24-batch-1.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-24-batch-*.pages.json --manifest-only`
  Result: **pass** — `content-policy: 329 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass with run-wide warnings only**. The validator ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.
  ```

  The printed warnings are the repository's standing `redundant-prereq` notices
  on other pages, not a batch-1-specific defect.

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-1.coverage.json`
  Result: **pass** — `source-fetch-check: 3/3 source(s) fetch-verified`.

## Step-3 fix pass

Stable review file checked: `research/frontier-24-alpha-a-step3-scaffold-review.md`.
That review does not assign separate `B1-*` ids for batch `1`, so I did not
invent numbering in this receipt. The concrete review findings are recorded
under the exact scaffold item ids Alpha named at lines `24-30`.

- `lem-zariski-lemma-one-variable-localisation-not-finite` — disposition:
  **already correct on current bytes**. Evidence: Alpha's batch-1 review lists
  this item among the omitted coverage carriers at
  `research/frontier-24-alpha-a-step3-scaffold-review.md:24-32`; the live
  manifest still declares it at `research/frontier-24-batch-1.pages.json:104`,
  and the live coverage now carries the canonical `included` row at
  `research/frontier-24-batch-1.coverage.json:274-277`. Changed scaffold

## Step-5 authoring

Date: 2026-08-29.

Authored ids:

- A-page items: `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis`, `lem-transcendence-basis-exchange`, `cor-transcendence-degree-tower-additivity`, `lem-noether-normalisation-nonzero-polynomial-made-monic`, `lem-noether-normalisation-finite-field-exponent-substitution`, `lem-noether-normalisation-one-relation-reduction`, `lem-noether-normalisation-inductive-integrality`, `cor-noether-normalisation-module-finiteness`, `cor-noether-normalisation-dimension-lower-bound`, `lem-zariski-lemma-one-variable-localisation-not-finite`, `lem-zariski-lemma-localised-polynomial-ring-not-field`, `lem-zariski-lemma-transcendence-basis-reduction`, `cor-field-finite-type-over-a-field-is-a-finite-extension`, `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`, `lem-evaluation-ideal-is-maximal`, `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`, `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus`, `lem-rabinowitsch-unit-ideal-consequence`, `lem-rabinowitsch-substitution-clears-denominators`, `cor-strong-nullstellensatz-two-inclusions`, `lem-affine-algebra-points-as-k-algebra-maps`, `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field`, `lem-vanishing-ideal-is-radical`, `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical`, `cor-affine-radical-ideal-point-separation`, `lem-jacobson-ring-prime-as-intersection-of-maximals`, `lem-finite-type-jacobson-residue-extension`, `cor-affine-closed-points-detect-radicals`.
- B-page items: `ex-transcendence-basis-and-algebraic-remainder`, `ex-noether-normalisation-triangular-change`, `ex-noether-normalisation-finite-field-weight-choice`, `ex-zariski-lemma-denominator-obstruction`, `ex-weak-nullstellensatz-over-real-numbers`, `ex-strong-nullstellensatz-nonradical-ideal`, `ex-rabinowitsch-identity-explicit`.
- Page files: `library/commutative-algebra/noether-normalisation-and-nullstellensatz.md`, `library/commutative-algebra/noether-normalisation-and-nullstellensatz-examples.md`.
- Batch contract: `research/frontier-24-batch-1.proof-contracts.json`.

Provenance rationale:

- The transcendence-basis, normalization, Zariski-lemma, weak/strong Nullstellensatz, and Jacobson-radical spine was written as `literature-derived` statements from the Milne and Altman-Kleiman coverage stack, with local proofs marked `ai-altered` where the page decomposes a source theorem into the scaffolded intermediate lemmas.
- The two scaffolded generated examples stayed exactly where the design put them: `ex-transcendence-basis-and-algebraic-remainder` and `ex-strong-nullstellensatz-nonradical-ideal` carry `provenance.statement: ai-generated` with `generation.role: example`. No generated statement was made a dependency target.
- Every authored page and item remains `status: draft`. No `verification.judge` record was written on any in-flight item.

Narrowed or otherwise adjusted claims:

- `cor-noether-normalisation-dimension-lower-bound` now states `Assume the Axiom of Choice.` because its written proof cites `cor-integral-extension-lifts-finite-prime-chains`, whose exact published statement carries that hypothesis.
- `lem-rabinowitsch-unit-ideal-consequence` likewise now states `Assume the Axiom of Choice.` because its proof uses `thm-proper-ideal-contained-in-maximal-ideal`.
- `lem-rabinowitsch-substitution-clears-denominators` was narrowed from an arbitrary displayed generating family to a nonempty list `m >= 1`. This matches the proof actually written, which takes a maximum of the finitely many denominator exponents. The batch still covers the zero ideal case in downstream use, since one may present `(0)` with the one-term list `(0)`.
- `cor-affine-closed-points-detect-radicals` now states the empty-intersection convention explicitly and proves the `J = A` branch separately before reducing to the proper-radical case.
- No planned item was dropped, merged, or converted to `proved_here: false`.

Canonical proof-shape repair applied:

- Ran `node tools/tsx-run.mjs tools/reflow.mts ...owned files...` after the first `precheck` pass, because the checker requires each numbered proof row to live on one physical source line. No mathematical content changed in that repair.

Checks run on 2026-08-29:

- `node tools/tsx-run.mjs tools/precheck.mts $(jq -r '.[].items[].id' research/frontier-24-batch-1.pages.json | sed 's#^#items/#; s#$#.md#')`
  Result: `35 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs $(jq -r '.[].items[].id' research/frontier-24-batch-1.pages.json | sed 's#^#items/#; s#$#.md#') library/commutative-algebra/noether-normalisation-and-nullstellensatz.md library/commutative-algebra/noether-normalisation-and-nullstellensatz-examples.md`
  Result: `OK — 37 file(s)`.
- `node tools/content-policy.mjs research/frontier-24-batch-1.pages.json`
  Result: `content-policy: 35 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK — declared page order is acyclic and consistent`, with only the repository's standing `redundant-prereq` warnings outside this batch.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-1.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-24-batch-1.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 35/35 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-24-batch-1.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: no contradicted dispositions and no template-reuse cluster.

Blockers:

- No batch-local authoring blocker remains on the current bytes.
  record: no further edit in this pass; the repair is already present in
  `research/frontier-24-batch-1.coverage.json`.

- `lem-vanishing-ideal-is-radical` — disposition:
  **already correct on current bytes**. Evidence: Alpha's omitted-carrier list
  names this item at
  `research/frontier-24-alpha-a-step3-scaffold-review.md:27-32`; the live
  manifest still declares it at `research/frontier-24-batch-1.pages.json:244`,
  and the live coverage now carries the canonical `included` row at
  `research/frontier-24-batch-1.coverage.json:278-281`. Changed scaffold
  record: no further edit in this pass; the repair is already present in
  `research/frontier-24-batch-1.coverage.json`.

- `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` —
  disposition: **already correct on current bytes**. Evidence: Alpha's
  omitted-carrier list names this item at
  `research/frontier-24-alpha-a-step3-scaffold-review.md:27-32`; the live
  manifest still declares it at `research/frontier-24-batch-1.pages.json:253`,
  and the live coverage now carries the canonical `included` row at
  `research/frontier-24-batch-1.coverage.json:283-286`. Changed scaffold
  record: no further edit in this pass; the repair is already present in
  `research/frontier-24-batch-1.coverage.json`.

- `cor-affine-radical-ideal-point-separation` — disposition:
  **already correct on current bytes**. Evidence: Alpha's omitted-carrier list
  names this item at
  `research/frontier-24-alpha-a-step3-scaffold-review.md:27-32`; the live
  manifest still declares it at `research/frontier-24-batch-1.pages.json:263`,
  and the live coverage now carries the canonical `included` row at
  `research/frontier-24-batch-1.coverage.json:288-291`. Changed scaffold
  record: no further edit in this pass; the repair is already present in
  `research/frontier-24-batch-1.coverage.json`.

- Batch-1 scope-decision rows — disposition: **stand unchanged**. Evidence:
  `research/frontier-24-alpha-a-step3-scaffold-review.md:56-59` and
  `research/frontier-24-alpha-a-scope-decisions.json` still record Milne
  Theorem `9.5` and Altman-Kleiman Corollary `(15.6)` as deliberate exclusions,
  and the current CA-7 scaffold still spends only the exchange, tower
  additivity, residue-field, point-form maximal-ideal, Jacobson, and lower
  dimension-bound route. Changed scaffold record: none in
  `research/frontier-24-batch-1.pages.json` or
  `research/frontier-24-batch-1.coverage.json`.

- Source verification for this fix pass on Saturday, August 29, 2026:
  I re-opened the three recorded batch-1 source URLs through the web reader at
  the locators recorded in `research/frontier-24-batch-1.coverage.json`. Milne
  FT still exposes the Chapter `9` transcendence-basis headings and named
  results used for the opening field-theory block; Milne CA still exposes the
  recorded §`8`, §`13`, and §`15` headings used for normalization,
  Zariski/Nullstellensatz, and Jacobson results; and Altman-Kleiman still
  exposes §`15` and Appendix `Jacobson Rings` at the recorded locator. Changed
  scaffold record: no URL recovery, archive substitution, or re-sourcing was
  needed.

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-24-batch-1.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  Result: **pass** — `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** — the validator again ended
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.`
  The printed warnings remain the repository's standing `redundant-prereq`
  advisories outside batch `1`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-1.coverage.json`
  Result: **pass** — `source-fetch-check: 3/3 source(s) fetch-verified`.
