# frontier-25 · Beta · batch notes — `arithmetic-functions-and-dirichlet-convolution` (step 1 scaffold)

Run `frontier-25`, batch `5`, one A/B pair, category `number-theory`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:
`research/frontier-25-batch-5.pages.json`,
`research/frontier-25-batch-5.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design location opened:

- `research/plan-number-theory-track.md` lines `933-994` for NT-9
- `research/frontier-25-alpha-step0-drift.md` lines `53-56` for the live drift decision

Shape after scaffolding:

- `arithmetic-functions-and-dirichlet-convolution` (A): **19 items**
- `arithmetic-functions-and-dirichlet-convolution-examples` (B): **8 items**

The A page stays far below the 60-item split ceiling, so no split is proposed.

The scaffold follows the design's route literally:

- arithmetic functions, multiplicativity, complete multiplicativity, and the
  Dirichlet-convolution definitions first;
- the finite convolution algebra next, including the ring structure, the
  inverse criterion, multiplicativity preservation, and prime-power
  determination;
- the standard divisor-function package after that;
- the von Mangoldt and Mertens tail last, with the finite-field irreducible
  polynomial count carried here exactly where the design says the closed form
  finally becomes legal.

I kept the design's seam decisions:

- no local re-minting of the already-published number-theoretic Mobius
  definition, agreement theorem, inversion theorem, or multiplicativity
  corollary;
- no Euler products or Dirichlet-series arguments on this page, only finite
  divisor sums and finite reindexings;
- the B-page totient example is a new local worked identity
  `ex-euler-totient-as-a-mobius-convolution`, not a dependency on the older
  published example `ex-euler-totient-recovered-by-mobius-inversion`;
- the Mertens conjecture counterexample stays explicitly non-load-bearing on
  the B page.

---

## 2. Drift and control issues

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- The design and `research/plan-spec.json` both place the A page at order
  `348.001`.
- The design and `research/plan-spec.json` both place the B page at order
  `348.002`.

### Finding 2 — the generated dispatch table is stale about prerequisites

- The generated dispatch table still shows only
  `bloch-schottky-and-picard-examples`.
- The live spec at `research/plan-spec.json` now requires both
  `bloch-schottky-and-picard-examples`
  and
  `incidence-algebras-and-mobius-inversion`.
- The step-0 drift report explains why:
  NT-9 explicitly reuses the four published Mobius items on
  `incidence-algebras-and-mobius-inversion`, so the old one-edge closure was
  incomplete.

I therefore followed the live spec and wrote the scaffold manifest with both
page prerequisites.

### Finding 3 — no further page-level drift was surfaced locally

The design's prose prerequisite description is broader than a page list:
positive integers, divisors, FTA, totient material, finite sums, complex
arithmetic, and the four published Mobius items. I treated that as the
mathematical closure the item graph must respect, not as a second competing
`requires` array to hand-edit into the plan.

---

## 3. Source stack and harvest boundaries

Only the A page carries the coverage harvest. The B page is an example leaf.

Recorded harvest sources:

1. Victor Shoup, *A Computational Introduction to Number Theory and Algebra*:
   `https://www.shoup.net/ntb/ntb-v2.pdf`
2. Kiran S. Kedlaya, *An Introduction to Analytic Number Theory*, Chapter 3:
   `https://kskedlaya.org/ant/chapter-3.html`
3. Karl-Dieter Crisman, *Number Theory: In Context and Interactive*,
   Section 23.3:
   `https://math.gordon.edu/ntic/ntic2017/section-new-funcs.html`
4. Karl-Dieter Crisman, *Number Theory: In Context and Interactive*,
   Section 23.4:
   `https://math.gordon.edu/ntic/ntic2020/section-gen-moebius.html`
5. Tom Sanders, *Topics in Analytic Number Theory*:
   `https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf`

### Why these five

- Shoup is the batch's qualifying primary treatment: a live official textbook
  PDF with a clear table of contents and a clean elementary presentation of
  arithmetic functions, convolution, divisor functions, and the Mangoldt
  exercise package.
- Kedlaya gives an independent official lecture-note treatment with the exact
  `epsilon`, `1`, `id`, `id^k`, `sigma_k`, complete-multiplicativity, and
  `Lambda = mu * log` conventions the design wants.
- Crisman Section `23.3` is the cleanest live source I found for the Liouville
  definition and for the explicit `phi * u = N`, `N * mu = phi` example route.
- Crisman Section `23.4` supplies the general inverse criterion and the two
  multiplicativity-preservation propositions in a directly harvestable form.
- Sanders covers the `Lambda` / `M(x)` tail and records exactly the next-page
  average-order results that must be deferred rather than smuggled into NT-9.

### Why the design-listed Hackman source is not in coverage

The design names Hackman Chapter `F` as the primary backing. I searched for a
stable live full-text URL for that exact text in this runtime and found only
old course references and mirror/reader pages, not a clean fetch-verifiable
author or publisher file. Because the dispatch explicitly forbids retaining a
harvest row for text I did not verify, I did **not** record Hackman in the
coverage ledger. The mathematical route still follows the design; the live
harvest just uses the verifiable Shoup/Kedlaya/Crisman/Sanders stack instead.

### Coverage boundaries I kept explicit

- I did **not** scaffold a separate definition item for the arithmetic-function
  logarithm `n |-> log n`; it is introduced inline inside the von Mangoldt
  divisor-sum identity and then reused immediately.
- I did **not** import later Euler-product or Dirichlet-series consequences
  even when Kedlaya or Sanders mention them. Those rows are either kept inline
  only for local terminology or recorded out of scope.
- I deferred Sanders Propositions `1.3`-`1.5` to
  `average-orders-divisor-sums-and-representation-counts`, because that is
  exactly where the next page begins using asymptotics, hyperbola estimates,
  and summatory Mobius cancellation.
- I treated the finite-field closed formula
  `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` as a
  canonical batch row, because on this page it is primarily a library-level
  cash-out of the already-published finite-field divisor-sum identity plus the
  already-published Mobius inversion theorem.
- I likewise recorded the square-indicator role of `1 * lambda` canonically at
  the page level rather than pretending one of the chosen sources isolated it as
  a standalone headed theorem in exactly the form the design wants.

### URL verification status

On Sunday, August 30, 2026 I reopened the five recorded source URLs through the
web reader before finalizing the coverage ledger. So every recorded row is tied
to a URL I actually opened during this dispatch.

---

## 4. Local scaffold decisions

### Decision 1 — keep the finite algebra package on one page

I did not split the algebra of arithmetic functions into a second page or add a
preparatory lemma layer beyond what the design already decided. The finite
reindexing proofs for the ring structure, inverse recursion, and multiplicative
closure all remain modest enough to author honestly on one A page.

### Decision 2 — keep `epsilon` and `1` separate as load-bearing notation

The page explicitly distinguishes the convolution identity `epsilon` from the
constant-one function. This is not cosmetic: later identities like
`1 * Lambda = log` and `mu * 1 = epsilon` become error-prone if the notation is
blurred.

### Decision 3 — the totient example is intentionally not the old published example

The design warns that the older B-page example
`ex-euler-totient-recovered-by-mobius-inversion` is not a dependency. I kept a
new local example id whose mathematical role is the arithmetic-function
identity `phi = mu * id_1`, not just the old worked computation at `n = 12`.

### Decision 4 — the finite-field closed formula belongs here, not back on GA-3

The library already published the divisor-sum identity for irreducible
polynomials and explicitly remarked there that the closed form was being left
for later. This page is the later page: its published Mobius supplier items now
make the closed formula legal without moving Mobius inversion earlier in the
reading order.

### Decision 5 — Mertens stays definitional at NT-9

The page defines `M(x)` because Sanders uses it immediately after the
von Mangoldt identity and because the historical B-page counterexample needs a
carrier. But none of the deeper quantitative claims about `M(x)` are made here;
they are deferred to the next analytic-number-theory page family.

---

## 5. Known limits

- The page does **not** develop Euler products, Dirichlet series, or absolute
  convergence. Kedlaya's and Sanders' later comments were harvested only where
  they support finite identities or later deferrals.
- The page does **not** rebuild the Mobius inversion theorem or the
  multiplicativity of the number-theoretic Mobius function; both are already
  published and now formally present in the page prerequisite closure.
- The page does **not** add an `omega(n)` item, despite Crisman introducing it
  right next to `lambda(n)`. That function belongs to later prime-factor-count
  and average-order material, not to the current dependency closure.
- The page does **not** make the Mertens conjecture disproof load-bearing. The
  B-page counterexample is historical and sourced, but the A-page mathematics
  remains entirely finite and elementary.

---

## 6. Validator results

Commands run on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs research/frontier-25-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-5.coverage.json --stamp`
- `git diff --check -- research/frontier-25-batch-5.pages.json research/frontier-25-batch-5.coverage.json research/frontier-25-batch-5.notes.md`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 55 harvested result(s), 0 error(s), 0 warning(s)`
- whole-run `content-policy --manifest-only`:
  `content-policy: 269 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` passed. Its output is the usual full plan order plus standing
  repository-wide `redundant-prereq` notes, and it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.
  ```

- `source-fetch-check --stamp` failed on every recorded source URL with sandbox
  DNS resolution errors:

  ```text
  ERROR fetch-check-dead: arithmetic-functions-and-dirichlet-convolution: https://www.shoup.net/ntb/ntb-v2.pdf — ENOTFOUND
  ERROR fetch-check-dead: arithmetic-functions-and-dirichlet-convolution: https://kskedlaya.org/ant/chapter-3.html — ENOTFOUND
  ERROR fetch-check-dead: arithmetic-functions-and-dirichlet-convolution: https://math.gordon.edu/ntic/ntic2017/section-new-funcs.html — ENOTFOUND
  ERROR fetch-check-dead: arithmetic-functions-and-dirichlet-convolution: https://math.gordon.edu/ntic/ntic2020/section-gen-moebius.html — ENOTFOUND
  ERROR fetch-check-dead: arithmetic-functions-and-dirichlet-convolution: https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf — ENOTFOUND
  source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED
  ```

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

### Authored files and ids

- A page file: `library/number-theory/arithmetic-functions-and-dirichlet-convolution.md`
- B page file: `library/number-theory/arithmetic-functions-and-dirichlet-convolution-examples.md`
- Proof-contract artifact: `research/frontier-25-batch-5.proof-contracts.json`
- A-page item ids:
  `def-arithmetic-function`,
  `def-multiplicative-arithmetic-function`,
  `def-completely-multiplicative-arithmetic-function`,
  `def-dirichlet-convolution`,
  `def-dirichlet-convolution-identity`,
  `thm-dirichlet-convolution-commutative-ring`,
  `thm-dirichlet-convolution-invertibility-criterion`,
  `thm-dirichlet-convolution-preserves-multiplicativity`,
  `thm-multiplicative-functions-determined-by-prime-powers`,
  `def-divisor-counting-function`,
  `def-divisor-power-sum-functions`,
  `def-liouville-function`,
  `def-von-mangoldt-function`,
  `prop-divisor-functions-under-dirichlet-convolution`,
  `thm-von-mangoldt-divisor-sum-identity`,
  `cor-von-mangoldt-mobius-inversion-formula`,
  `cor-number-of-monic-irreducible-polynomials-over-a-finite-field`,
  `prop-liouville-convolution-square-indicator`,
  `def-mertens-function`
- B-page item ids:
  `ex-dirichlet-convolution-table-through-twelve`,
  `ex-dirichlet-inverse-recursion`,
  `ex-divisor-counting-and-sum-prime-power-formulas`,
  `ex-euler-totient-as-a-mobius-convolution`,
  `ex-von-mangoldt-divisor-sum`,
  `ex-liouville-square-indicator`,
  `cex-multiplicative-does-not-mean-completely-multiplicative`,
  `cex-the-mertens-conjecture-is-false`

### Provenance rationale

- Every A-page definition/theorem/proposition/corollary remains `status: draft`
  and uses source-backed statement provenance. I tagged the structural core
  items as `literature-derived` except for two library-shaped restatements,
  `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` and
  `prop-liouville-convolution-square-indicator`, whose statements I marked
  `ai-altered` because the page packages existing sourced results into the
  library's exact carrier form.
- The B-page worked examples and the multiplicativity counterexample are
  `ai-generated` with the required `generation.role` metadata, because they are
  local demonstrations rather than dependency targets.
- `cex-the-mertens-conjecture-is-false` is source-backed and non-load-bearing,
  so I kept both statement and proof provenance `literature-derived` and cited
  the Odlyzko--te Riele DOI directly.

### Narrowed or dropped claims

- No planned item ids were dropped.
- No A-page claim was narrowed relative to the batch manifest.
- I kept the Mertens counterexample as a historical existence counterexample
  only; it does not assert an explicit witness value, because the batch task
  required a sourced non-load-bearing disproof, not a recovered numerical
  counterexample.

### Canonical precheck repair applied

- The first precheck pass failed on proof-step formatting, not on mathematics:
  `untagged-steps` across most proof-bearing items and one
  `strategy-missing(IH,discharge-induction-final)` on
  `thm-dirichlet-convolution-invertibility-criterion`.
- I adopted the canonical repair shape that `tools/precheck.mts` printed:
  flattened display-heavy proof rows into tagged single-line steps and matched
  the checker's repaired phase stratification before rerunning.

### Checks run

- `node tools/tsx-run.mjs tools/precheck.mts <batch-5 item files>`
  Final result: `17 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: passed with standing repository-wide `redundant-prereq` advisories
  only, ending in:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.
  ```

- `node tools/content-policy.mjs research/frontier-25-batch-5.pages.json`
  Result: `content-policy: 27 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-25-batch-5.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 17/17 item(s) checked`
- `git diff --check -- <batch-5 authored files>`
  Result: clean

### Blockers

- None in batch scope after the canonical precheck repair. The authored A/B
  pair and proof-contract artifact are present, draft-scoped, and validator-clean
  on the checks above.

- `git diff --check` on the three owned artifacts was clean.

State at close:

- the scaffold manifest is green;
- the coverage harvest is green;
- the fetch-stamp gate is red only because this runner cannot resolve external
  hosts from the shell, even though the exact recorded URLs were reopened
  through the web reader during this dispatch.

## Step-3 fix pass

Reviewing Alpha: group `a`, report
`research/frontier-25-alpha-a-step3-scaffold-review.md`.

- Finding id: none assigned in the stable review. The batch-5 issue appears in
  Alpha's `Direct repairs applied` section rather than as a numbered `B5-*`
  row, and it is the omitted coverage carrier for the A-page proposition
  `prop-liouville-convolution-square-indicator`.
  - Disposition: accepted / preserved; the repair already stands on the current
    bytes, so no new coverage edit was needed in this pass.
  - Evidence: the live `research/frontier-25-batch-5.pages.json` still lists
    `prop-liouville-convolution-square-indicator` on
    `arithmetic-functions-and-dirichlet-convolution`, and the live
    `research/frontier-25-batch-5.coverage.json` now carries the canonical row
    `The convolution 1 * lambda detects perfect squares` with disposition
    `included` on that exact item. This closes the earlier under-coverage
    defect Alpha described.
  - Changed scaffold record: `research/frontier-25-batch-5.pages.json` and
    `research/frontier-25-batch-5.coverage.json` already carried the accepted
    coverage repair on current bytes before the validator rerun below; this
    notes file records that preserved state explicitly.

- Additional live repair from the required validator rerun:
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-5-only-spliced-plan.json`
  initially failed with
  `[undeclared-prereq] page arithmetic-functions-and-dirichlet-convolution has
  an item depending on finite-fields-and-cyclotomic-extensions`.
  - Disposition: applied, no pushback.
  - Evidence: the live batch item
    `cor-number-of-monic-irreducible-polynomials-over-a-finite-field`
    depends on the published item
    `prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field`,
    whose home page in `research/plan-spec.json` is
    `finite-fields-and-cyclotomic-extensions`. That published dependency is
    exactly the GA-3 identity the NT-9 design says this corollary should cite,
    so the missing closure edge was real rather than optional.
  - Changed scaffold record: I added
    `finite-fields-and-cyclotomic-extensions` to the `requires` array of
    `arithmetic-functions-and-dirichlet-convolution` in
    `research/frontier-25-batch-5.pages.json`. I did not edit
    `research/plan-spec.json`, which is outside this dispatch's authority.

- Source verification for this fix pass:
  I re-opened all five recorded HTTP(S) URLs in
  `research/frontier-25-batch-5.coverage.json` through the web reader on
  Sunday, August 30, 2026 and confirmed that no URL recovery, `original_url`
  rewrite, or mathematical re-source is needed on the current bytes. The live
  URLs still resolve to the harvested documents and locator ranges already
  recorded for Shoup §2.9 / Exercises `2.49`-`2.54`, Kedlaya Chapter `3`,
  Crisman Sections `23.3` and `23.4`, and Sanders Chapter `1`.
  Changed scaffold record: none; the existing `fetch_verified` blocks in
  `research/frontier-25-batch-5.coverage.json` remain the live source
  verification record. This supersedes the earlier shell-only transport note:
  the current coverage file already carries verified-source blocks for all five
  recorded sources.

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-25-batch-5.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-5-only-spliced-plan.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 542 page(s) with item lists.` The only preceding diagnostics are
  the standing repository-wide `redundant-prereq` advisories outside batch `5`.
