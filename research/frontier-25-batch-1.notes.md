# frontier-25 · Beta · batch notes — `valuation-rings-and-discrete-valuation-rings` (steps 1-2)

Run `frontier-25`, batch `1`, one A/B pair, category `commutative-algebra`.
Author: Beta. Session date: Sunday, August 30, 2026.
Design section: `research/plan-commutative-algebra-track.md:748`.

Artifacts owned by this batch:
`research/frontier-25-batch-1.pages.json`,
`research/frontier-25-batch-1.coverage.json`,
and this file.

---

## 1. Shape and split check

- `valuation-rings-and-discrete-valuation-rings` (A): **19 items**.
- `valuation-rings-and-discrete-valuation-rings-examples` (B): **8 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The opening block fixes the ordered-group and valuation conventions, proves
  the local and ideal-comparability characterizations of valuation rings, and
  recovers the value-group construction from the ring itself.
- The middle block treats discrete valuations and DVRs in the route the design
  chose: uniformisers, unit-times-power normal form, ideal classification,
  prime-spectrum collapse to dimension one, and the four-way DVR
  characterization.
- The closing A-page results keep the two payoffs the next CA pages will spend:
  the Noetherian valuation-ring iff field-or-DVR theorem, the length/valuation
  computation for principal quotients, and the height-one localization criterion
  for normal Noetherian domains.
- The B page keeps the design's witness mix: one explicit arithmetic DVR, one
  localization-of-a-PID application, one singular local ring failing the DVR
  criterion, two non-discrete valuation examples, and three worked exercises on
  ideals, lengths, and uniformisers.

I did **not** adopt the later additive block
`#### CA-8 additions — valuation-rings-and-discrete-valuations and companion`
at `research/plan-commutative-algebra-track.md:3360`. It uses a different page
slug, broadens scope into completions and associated graded rings, and is not
the design section named by the dispatch or the live `plan-spec` entry.

---

## 2. Design control and drift

I checked the dispatch, the live spec entry in `research/plan-spec.json`, and
the run-level drift receipt in `research/frontier-25-alpha-step0-drift.md`.

- The dispatch and `plan-spec` agree on the A/B page ids, orders `111.015` and
  `111.016`, titles, companion relation, and the page-level spec prerequisite
  `noether-normalisation-and-nullstellensatz-examples`.
- The controlling CA-8 design block states a broader mathematical prerequisite
  list: CA-1 through CA-3, CA-6, and the published fraction-field,
  localization, PID, and UFD interfaces. That is not a batch-local conflict to
  settle here. The run-level drift review already records CA-8 as `VERDICT:
  no-drift`, because those suppliers are already in the declared closure.
- Accordingly I kept the spec `requires` field unchanged in the manifest and
  used the broader design list only to choose item-level dependencies and proof
  strategies.

No order or page-level prerequisite defect remains for this batch.

---

## 3. Source stack and URL discipline

Formal harvest sources recorded in the coverage file:

1. `https://web.mit.edu/18.705/www/13Ed.pdf`
   Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*,
   13th ed.
2. `https://www.jmilne.org/math/xnotes/CA.pdf`
   J. S. Milne, *A Primer of Commutative Algebra*, v4.03.

Why these two are enough for the formal harvest:

- Altman-Kleiman is the textbook treatment that covers both halves of this
  page: §23 gives the DVR normal form and characterization, while §26 gives the
  valuation-ring definition, ideal ordering, normality, value-group
  construction, and the non-discrete ordered-group examples.
- Milne is the independent full lecture-note treatment for the DVR half:
  `Z_(p)`, the unit-times-power and ideal-power normal forms, the
  Noetherian-normal-one-prime characterization, and the localization facts that
  feed the height-one-localization theorem.

Exact-URL fetch receipts reused on Sunday, August 30, 2026:

- Altman-Kleiman: reused the exact fetch stamp already present for the same URL
  in `research/frontier-23-batch-3.coverage.json`:
  `1459195` bytes, SHA-256 prefix `d3273e492ae9f1fd`.
- Milne: reused the exact fetch stamp already present for the same URL in
  `research/frontier-24-batch-1.coverage.json`:
  `969570` bytes, SHA-256 prefix `1839ca7a488ab05c`.

Both exact recorded URLs were also re-opened in the web reader on Sunday,
August 30, 2026 at the locators recorded in the coverage file.

Design-control reads performed through the web reader but **not** copied into
the formal coverage roster:

1. `https://websites.umich.edu/~mmustata/CAnotes.pdf`
2. `https://stacks.math.columbia.edu/tag/00I8`
3. `https://stacks.math.columbia.edu/tag/00P7`

I re-read those URLs to check the CA-8 conventions against the design:
ordered-group plus infinity conventions, the valuation-ring-to-value-group
recovery, the `field or DVR` Noetherian criterion, and the stated DVR
equivalences. The runner cannot mint new shell-side fetch stamps for fresh URLs
in this workspace: a direct Node `fetch` probe on the Mustaţă PDF failed with
`ENOTFOUND`. Because the Altman/Milne pair already closes the scaffold
mathematically and carries durable exact-URL fetch receipts, I kept the formal
coverage on those two stamped document URLs instead of adding unstamped rows.

---

## 4. Local scaffold choices

- I kept the valuation-ring half as one theorem
  `thm-valuation-ring-characterisations` instead of adopting the later additive
  overlay's seven-way split into unit tests, divisibility lemmas, and Bezout
  corollaries. The CA-8 design at line `748` does not call for that finer
  granularity, and the later CA-9/CA-18 consumers only need the combined
  characterization and finite-generation consequence.

- I kept `thm-every-valuation-ring-arises-from-its-value-group` as a theorem,
  not a definition remark. The design's well-definedness ledger explicitly says
  the quotient order must be proved representative-independent, antisymmetric,
  total, and translation-invariant, so that work deserves its own carrier.

- I retained `thm-dvr-ideal-and-module-length` on CA-8 rather than deferring it
  to the Artinian-length page or the later completion page. The Dedekind and
  regular-local developments will want the valuation-as-length calculation
  locally, and the proof is short once the ideal-power filtration is already on
  the page.

- I kept `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` on
  the A page even though the proof is an application of the preceding theorem.
  The next page, `dedekind-domains-and-ideal-classes`, spends exactly this
  height-one local criterion, and dropping it would force CA-9 either to import
  an unproved local claim or to reprove CA-8's main local theorem.

- The two non-discrete B-page examples stay source-grounded without depending
  on new URLs: Altman's Example `(26.12)` explicitly names both the
  lexicographically ordered product and the subgroup generated by two
  incommensurate reals, so it supports the design's rank-two and irrational
  rank-one examples directly.

- `ex-localisation-of-a-pid-at-a-prime` and `ex-plane-curve-local-ring-not-dvr`
  remain B-page theorem-application examples, not new A-page lemmas. The page
  needs concrete witnesses for the characterization theorem, not a separate
  localization theorem or a second singularity theorem in the main spine.

---

## 5. Known limits and downstream caution

- The formal coverage file is intentionally narrower than the full design
  bibliography. Mustaţă and the Stacks section pages were re-read and used to
  control the scaffold route, but the durable harvest rows stay on the two exact
  URLs that already have reusable fetch receipts in-repo.

- I did not extend CA-8 to the later additive topics `completion-of-a-dvr`,
  `associated-graded-ring-of-a-dvr`, or explicit domination/intersection
  theorems for arbitrary valuation rings. Those belong to later pages in the
  commutative-algebra track and would turn this scaffold into the broader,
  non-spec block at line `3360`.

- The height-one theorem stops at the local DVR conclusion. It does **not**
  pre-scaffold the stronger global results that a normal Noetherian domain is
  the intersection of its codimension-one localizations or that Serre's
  conditions characterize normality. Those are later-page material.

- I did **not** create `research/frontier-25-batch-1.proof-contracts.json`.
  This dispatch is the scaffold-and-harvest pass, not step-5 authoring.

---

## 6. Validator results

- `node tools/coverage-checklist.mjs research/frontier-25-batch-1.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  Result: **pass** — `content-policy: 59 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** — validator ended:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.
  ```

  The printed warnings are the repository's standing run-wide
  `redundant-prereq` notices, not a batch-1 defect.

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-1.coverage.json`
  Result: **pass** — `source-fetch-check: 2/2 source(s) fetch-verified`.

- `git diff --check`
  Result: **pass**.

---

## Step-3 fix pass

- Finding id: **none issued for batch 1** in
  `research/frontier-25-alpha-a-step3-scaffold-review.md`. The only
  batch-local stable review conclusion is the unnumbered verdict row for
  `valuation-rings-and-discrete-valuation-rings`: `sufficient`.
  Disposition: **accepted; no scaffold repair needed**.
  Evidence: on Sunday, August 30, 2026, I re-checked the live CA-8 design block
  at `research/plan-commutative-algebra-track.md:748-817`, reran a
  manifest-to-coverage audit, and confirmed that all 19 A-page items in
  `research/frontier-25-batch-1.pages.json` still have current coverage
  carriers in `research/frontier-25-batch-1.coverage.json` with no missing
  item ids. I also re-checked the three Dedekind-domain harvest rows deferred
  from Milne §20 (`Definition 20.3`, `Proposition 20.4`, `Corollary 20.6`) and
  they still point honestly to `dedekind-domains-and-ideal-classes`, matching
  the CA-8/CA-9 boundary fixed by the design and restated in the group-`a`
  review.
  Changed scaffold record: **none**. `research/frontier-25-batch-1.pages.json`
  and `research/frontier-25-batch-1.coverage.json` stay unchanged.

- Finding id: **source verification refresh for recorded URLs**.
  Disposition: **accepted; no source repair needed**.
  Evidence: both recorded coverage URLs remained live when reopened on Sunday,
  August 30, 2026:
  `https://web.mit.edu/18.705/www/13Ed.pdf` still exposes the contents entries
  for §§23 and 26 and the valuation-ring text at the recorded locator range,
  and `https://www.jmilne.org/math/xnotes/CA.pdf` still exposes §20
  `Discrete valuation rings` and `Proposition 20.2` at the recorded locator
  range. `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-1.coverage.json`
  also passed with `source-fetch-check: 2/2 source(s) fetch-verified`.
  Changed scaffold record: **none**.

- Finding id: **required validator rerun**.
  Disposition: **accepted; batch 1 remains ready for authoring**.
  Evidence:
  `node tools/coverage-checklist.mjs research/frontier-25-batch-1.coverage.json --require-destination`
  passed with `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  passed with `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`;
  the item count is higher than the step-2 note because the whole-run manifest
  set has advanced since the earlier batch-local pass. `node tools/validate-plan.mjs research/plan-spec.json`
  passed and ended with `OK — declared page order is acyclic and consistent;
  no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 540 page(s) with item lists.` The accompanying
  `redundant-prereq` messages are still run-wide standing warnings, not a
  batch-1 defect.
  Changed scaffold record: **none**.

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

Authored page files:

- `library/commutative-algebra/valuation-rings-and-discrete-valuation-rings.md`
- `library/commutative-algebra/valuation-rings-and-discrete-valuation-rings-examples.md`

Authored A-page items:

- `def-totally-ordered-abelian-group`
- `def-valuation-on-a-field`
- `def-valuation-ring`
- `lem-valuation-ring-is-local`
- `thm-valuation-ring-characterisations`
- `def-value-group-of-a-valuation-ring`
- `thm-every-valuation-ring-arises-from-its-value-group`
- `thm-valuation-ring-is-integrally-closed`
- `def-discrete-valuation`
- `def-discrete-valuation-ring`
- `def-uniformising-parameter`
- `thm-dvr-element-normal-form`
- `thm-ideals-in-a-dvr`
- `cor-prime-ideals-and-dimension-of-a-dvr`
- `thm-equivalent-characterisations-of-a-dvr`
- `thm-noetherian-valuation-ring-characterisation`
- `thm-dvr-ideal-and-module-length`
- `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`
- `cor-dvr-is-a-pid`

Authored B-page items:

- `ex-p-adic-dvr`
- `ex-localisation-of-a-pid-at-a-prime`
- `ex-plane-curve-local-ring-not-dvr`
- `ex-rank-two-valuation-ring-not-dvr`
- `ex-nondiscrete-ordered-subgroup-valuation`
- `ex-dvr-length-computation`
- `ex-uniformisers-and-dvr-ideal-arithmetic`
- `ex-valuation-ring-ideals-linearly-ordered`

Artifact created:

- `research/frontier-25-batch-1.proof-contracts.json`

Provenance rationale:

- All twenty-seven batch-1 statements remain `literature-derived`, matching the Step-2 harvest and the CA-8 design route. The page content is source-backed by the Altman-Kleiman and Milne coverage pair already recorded in `research/frontier-25-batch-1.coverage.json`.
- Every proof-bearing item was authored as `proof: ai-altered`: the written proofs follow the harvested literature route but are adapted to the library's phase-format proof contract, local dependency graph, and on-disk theorem interfaces.
- All authored pages and items remain `status: draft`, and no `verification.judge` record was introduced.

Narrowed or dropped claims:

- None. The authored statements stayed at the batch scaffold's exact scope.
- I did make one non-mathematical cleanup after the first strict contract run: `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` no longer declares the unused localisation-spectrum fact row. The proof itself and its claim were unchanged.

Blockers:

- None for batch 1 on Sunday, August 30, 2026.

Checks run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-valuation-ring-is-local.md ... items/ex-valuation-ring-ideals-linearly-ordered.md`
  Result: **pass** — `20 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-25-batch-1.pages.json`
  Result: **pass** — `content-policy: 27 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** — `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.`

Advisory checks run:

- `node tools/proof-contract.mjs research/frontier-25-batch-1.proof-contracts.json --strict`
  Result: **pass** — `proof-contract: 0 error(s), 0 warning(s), 20/20 item(s) checked`.
- `git diff --check`
  Result: **pass**.
