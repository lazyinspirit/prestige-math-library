# frontier-26 · Beta · batch notes — `average-orders-divisor-sums-and-representation-counts` (step 1 scaffold)

Run `frontier-26`, batch `5`, one A/B pair, category `number-theory`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:
`research/frontier-26-batch-5.pages.json`,
`research/frontier-26-batch-5.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design location opened:

- `research/plan-number-theory-track.md` lines `1004-1065` for NT-10

Shape after scaffolding:

- `average-orders-divisor-sums-and-representation-counts` (A): **17 items**
- `average-orders-divisor-sums-and-representation-counts-examples` (B): **2 items**

The A page stays far below the 60-item split ceiling, so no split is proposed.

The scaffold keeps the design's main route:

- summatory-function and average-order conventions first;
- the harmonic estimate and hyperbola method before any divisor asymptotic;
- divisor-counting, divisor-sum, totient, and coprime-pair averages as one
  analytic block;
- the two-square representation count last, using the already-published
  `sums-of-two-squares` machinery plus the sourced count formula from Hackman.

One additional lemma was necessary for honest closure:

- `lem-summatory-logarithm-asymptotic`

The design itself says the tau-average corollary should compare the divisor
sum with an "authored summatory estimate for `log n`", but no such item exists
on disk. I added that missing bridge rather than leaving the corollary to rely
on an unstated estimate.

---

## 2. Drift and control issues

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- The design and `research/plan-spec.json` both place the A page at order
  `348.003`.
- The design and `research/plan-spec.json` both place the B page at order
  `348.004`.

### Finding 2 — the initial batch manifest lagged the live spec on prerequisites

- The NT-10 design prose says "Requires: NT-4 and NT-9", which in page terms
  means the already-authored `sums-of-two-squares` page as well as the new
  arithmetic-functions page.
- `research/frontier-26-alpha-step0-drift.md` already records that drift repair
  and the live `research/plan-spec.json` now requires both
  `sums-of-two-squares` and
  `arithmetic-functions-and-dirichlet-convolution-examples`.
- The initial `research/frontier-26-batch-5.pages.json` omitted
  `sums-of-two-squares`; Alpha Step 3 repaired that backward prerequisite on
  Monday, August 31, 2026 so the batch manifest matches the authoritative run
  plan.

### Finding 3 — one design item overlaps a published result already on disk

The library already has the published item
`thm-euler-mascheroni-constant-and-harmonic-asymptotic`, which packages the
existence of Euler's constant and the weaker asymptotic
`H_n = log n + gamma + o(1)`.

I kept the design's local pair
`def-euler-mascheroni-constant` plus `lem-harmonic-sum-asymptotic`, because
the page needs:

- a local named definition at the start of the analytic block, and
- the sharper `O(1/x)` error term from Sanders Proposition `1.3`, which the
  published item does not state.

This overlap is real and is recorded here explicitly rather than being left as
an unnoticed semantic duplicate.

---

## 3. Source stack and harvest boundaries

Only the A page carries the coverage harvest. The B page is an example leaf.

Recorded harvest sources:

1. Tom Sanders, *Topics in Analytic Number Theory*:
   `https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf`
2. Peter Hackman, *Elementary Number Theory*:
   `https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf`
3. Karl-Dieter Crisman, *Number Theory: In Context and Interactive*:
   `https://math.gordon.edu/ntic/nticoneside.pdf`

### Why these three

- Sanders is the clean lecture-note source for the harmonic estimate, the
  divisor summatory estimate, the hyperbola split, and the otherwise-missing
  summatory logarithm bridge.
- Hackman is the qualifying textbook source for the two-square representation
  count and the exact ordered-sign convention behind `r_2`.
- Crisman is the second independent textbook treatment the design itself
  relies on for the average-order storyline: tau, sigma, Euler's phi, and the
  sum-of-squares average.

### Why Overholt is not in the coverage ledger

The design names the AMS preview of Overholt Chapter 1 as the quantitative
second source for the totient asymptotic. In this runtime I could verify the
AMS product page and Google Books table of contents, but not a live official
preview containing the page's Chapter 1 proof text itself. The dispatch
forbids retaining a harvest row for text I did not verify, so I did **not**
record Overholt in coverage.

The scaffold still follows the design's mathematics:

- the totient theorem is built by the same finite Mobius-expansion route;
- Crisman independently backs the average-order phi claim;
- Sanders and the published library items supply the remaining summatory and
  error-term ingredients.

### Crisman URL handling

The canonical Crisman source URL recorded in coverage is the one-sided PDF
`https://math.gordon.edu/ntic/nticoneside.pdf`, because that exact URL already
has a genuine `fetch_verified` stamp on disk from `frontier-18`.

For this dispatch, direct web opening of the PDF timed out, so I re-read the
same text through the official HTML mirrors:

- `https://math.gordon.edu/ntic/ntic/section-sum-sq-bounds.html`
- `https://www.math.gordon.edu/ntic/ntic2023/section-tau-average.html`
- `https://www.math.gordon.edu/ntic/ntic2023/section-tau-limits.html`
- `https://math.gordon.edu/ntic/ntic2023/section-sigma-average.html`
- `https://math.gordon.edu/ntic/ntic/section-four-facts.html`

The download page states that the PDF includes the same material as the online
version, so this is a same-text verification route rather than a re-source.

### Coverage boundaries I kept explicit

- I did **not** add a generic big-O definition item here. Crisman's Landau
  subsection was read and harvested as `out-of-scope`, because the library is
  already supposed to have the asymptotic calculus in place and a second
  generic notation page inside number theory would be scope creep.
- I did **not** add a standalone sum-of-first-integers lemma. Both the sigma
  and totient proofs only need the explicit algebra
  `1 + ... + m = m(m+1)/2 = m^2/2 + O(m)`, which is short enough to keep
  inside those proofs without minting a page-level statement.
- I used the equivalent summatory-totient route for
  `thm-coprime-pair-counting-asymptotic`: classify coprime pairs by their
  maximum coordinate and apply the totient summatory theorem. This is the
  same asymptotic content as the design's Mobius-lattice proof, but it avoids
  a second near-duplicate finite double-sum calculation on the same page.

---

## 4. Local scaffold decisions

### Decision 1 — add the missing logarithm bridge

`lem-summatory-logarithm-asymptotic` is the only new intermediate result not
named in the design. Without it, the tau-average corollary would rely on an
unscaffolded estimate the design itself calls load-bearing.

### Decision 2 — keep the harmonic refinement local despite the overlap

The published harmonic theorem on disk is too weak for the sharp divisor
constant term. I therefore kept the design's local harmonic lemma and recorded
the overlap in Section 2 instead of silently relying on a weaker theorem.

### Decision 3 — keep the totient theorem independent of the B-page example

The published B-page example `ex-euler-totient-as-a-mobius-convolution` is
not a legal dependency target for another page. The A-page totient theorem
therefore recovers `phi = mu * id_1` directly from the published divisor-sum
theorem and the published Mobius inversion theorem.

### Decision 4 — use Hackman only where it really adds count-level content

I did not re-harvest all of Hackman Chapter E. The already-published Fermat,
uniqueness, product, and representation-criterion items are recorded as
`already-published`; the new page uses Hackman's genuinely new count-level
input from Chapter `K.III`.

### Decision 5 — no representation-count B-page example

Hackman `K.III.2` is a perfectly serviceable numerical example, but the design
gives this B page only two slots and both are better spent on the hyperbola
decomposition and the divisor-error table, which make the analytic techniques
visible rather than repeating a sourced computation.

---

## 5. Known limits

- The page does **not** record Overholt in coverage, because I did not verify a
  live official preview of the exact proof text during this dispatch.
- The page does **not** add a second generic asymptotic-notation item just
  because Crisman's Chapter 20 restates big-O for its own students.
- The page's coprime-pair theorem uses the equivalent summatory-totient route
  rather than the design's direct Mobius floor-square proof. The destination
  and constant are identical, but this is a genuine route choice and should be
  rechecked at alpha if the owner wants the geometric Mobius proof instead.
- The page leaves the deeper divisor-problem error improvements and the full
  Mertens/prime-number-theorem consequences to NT-11, exactly as Sanders
  Proposition `1.5` and the design both indicate.

---

## 6. Validator results

Commands run on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs research/frontier-26-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-5.coverage.json --stamp`
- `git diff --check -- research/frontier-26-batch-5.pages.json research/frontier-26-batch-5.coverage.json research/frontier-26-batch-5.notes.md`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 1 warning(s)`

  The single warning is:

  `WARN coverage-low-yield [average-orders-divisor-sums-and-representation-counts]: frontier-26-batch-5.coverage.json: average-orders-divisor-sums-and-representation-counts: 13/40 harvested results scaffolded; confirm the declines with Alpha`

  This is a richness warning, not a structural failure. The warning is driven by
  the large number of already-published or explicitly declined rows in the
  Sanders/Crisman/Hackman harvest, especially because Hackman Chapter E and the
  first half of Sanders Chapter 1 overlap published earlier pages.

- whole-run `content-policy --manifest-only`:
  `content-policy: 319 scoped item(s), 0 error(s), 0 warning(s)`

- `validate-plan` passed. Its output is the usual full plan order plus
  repository-wide `redundant-prereq` notes, and it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.
  NOTE: 727 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `source-fetch-check --stamp`:
  `source-fetch-check: 3/3 source(s) fetch-verified (0 newly stamped)`

  No new network fetch was attempted because all three recorded URLs already had
  genuine exact-URL stamps on disk and `source-fetch-check` correctly reused
  them.

- `git diff --check` passed with no output.

## Step-3 fix pass

Reviewing Alpha: group `a`, report
`research/frontier-26-alpha-a-step3-scaffold-review.md`.

- Finding id: **none assigned in the stable review**. The first batch-5 issue in
  Alpha's `Direct repairs applied` section is the omitted backward prerequisite
  `sums-of-two-squares`.
  - Disposition: **accepted / preserved**. The repair already stands on the
    current bytes, so no new manifest edit was needed in this fix pass.
  - Evidence: the live A-page manifest
    `research/frontier-26-batch-5.pages.json` now keeps both
    `sums-of-two-squares` and
    `arithmetic-functions-and-dirichlet-convolution-examples` in the
    `requires` array, matching the Alpha drift receipt for NT-10 and the
    authoritative live `research/plan-spec.json` closure. The companion notes in
    this file's `Finding 2` paragraph already say the initial scaffold omitted
    `sums-of-two-squares` and that Alpha Step 3 repaired that mismatch.
  - Changed scaffold record: `research/frontier-26-batch-5.pages.json` already
    carries the accepted prerequisite repair; this fix pass keeps that live
    manifest state and records it explicitly here.

- Finding id: **none assigned in the stable review**. The second batch-5 issue
  in Alpha's `Direct repairs applied` section is the missing direct coverage
  carriers for
  `cor-average-order-of-divisor-sum-function`,
  `thm-coprime-pair-counting-asymptotic`, and
  `cor-asymptotic-density-of-coprime-pairs`.
  - Disposition: **accepted / preserved**. The repair already stands on the
    current bytes, so no new coverage edit was needed in this fix pass.
  - Evidence: the live canonical block in
    `research/frontier-26-batch-5.coverage.json` now includes all three exact
    carriers:
    `The divisor-sum main term yields the linear average order (pi^2/6)n after summing the comparison function exactly`,
    `The coprime-pair asymptotic is routed through the summatory totient theorem by classifying pairs by their maximum coordinate`,
    and
    `The coprime-pair density is obtained by dividing the ordered-pair asymptotic by n^2`,
    each dispositioned to the corresponding current A-page item in
    `research/frontier-26-batch-5.pages.json`. The Alpha group-a review also
    records that the manifest-to-coverage audit on current bytes has zero
    missing A-item carriers for this page.
  - Changed scaffold record: `research/frontier-26-batch-5.coverage.json`
    already contains the accepted canonical-carrier repair; this fix pass keeps
    that live harvest state and records it explicitly here.

- Source verification for this fix pass:
  I re-opened the live source routes behind all three recorded coverage entries.
  Sanders still opens directly at
  `https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf`, with Proposition
  `1.3`, Proposition `1.4`, and the displayed `log n!` asymptotic still present
  at the harvested locator range. Hackman still opens directly at
  `https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf`, with
  `K.III.1 Theorem` still stating the ordered-sign representation count at the
  recorded locator range. For Crisman, the recorded canonical URL
  `https://math.gordon.edu/ntic/nticoneside.pdf` still has a durable
  `fetch_verified` block on current disk, and in this fix pass I re-opened the
  official download page `https://math.gordon.edu/ntic/download.html` together
  with the live same-text official routes
  `https://math.gordon.edu/ntic/ntic2021.pdf`,
  `https://math.gordon.edu/ntic/ntic/section-sum-sq-bounds.html`,
  `https://math.gordon.edu/ntic/ntic2019/section-sigma-average.html`, and
  `https://math.gordon.edu/ntic/ntic/section-four-facts.html`. The current
  locator already records that same-text HTML verification route, so no URL
  swap, `original_url` rewrite, or re-harvest was needed in this batch.
  - Changed scaffold record: **none**. The current coverage file remains the
    live source-verification record.

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-26-batch-5.coverage.json --require-destination`
  now reports
  `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 1 warning(s)`,
  with the single nonfatal warning
  `coverage-low-yield [average-orders-divisor-sums-and-representation-counts]`
  at `16/43` scaffolded rows rather than the earlier `13/40`. The warning
  remains the documented richness advisory from deliberate overlap and
  out-of-scope / deferred rows, not a missing carrier defect.
  `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  passes on the current whole-run manifests. `node tools/validate-plan.mjs research/plan-spec.json`
  also passes on the current run plan, ending with the usual trailing `OK` and
  only the standing repository-wide `redundant-prereq` advisories. `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-5.coverage.json`
  passes in check mode on the existing durable fetch-verification blocks, and
  `git diff --check -- research/frontier-26-batch-5.pages.json research/frontier-26-batch-5.coverage.json research/frontier-26-batch-5.notes.md`
  is clean.

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

### Authored ids

- Pages:
  `average-orders-divisor-sums-and-representation-counts`,
  `average-orders-divisor-sums-and-representation-counts-examples`
- A-page items:
  `def-summatory-function-and-average-order`,
  `def-euler-mascheroni-constant`,
  `lem-harmonic-sum-asymptotic`,
  `thm-dirichlet-hyperbola-method`,
  `thm-divisor-counting-summatory-estimate`,
  `lem-summatory-logarithm-asymptotic`,
  `cor-average-order-of-divisor-counting-function`,
  `thm-divisor-sum-summatory-estimate`,
  `cor-average-order-of-divisor-sum-function`,
  `thm-euler-totient-summatory-estimate`,
  `cor-average-order-of-euler-totient`,
  `thm-coprime-pair-counting-asymptotic`,
  `cor-asymptotic-density-of-coprime-pairs`,
  `def-two-square-representation-function`,
  `lem-normalized-two-square-count-is-multiplicative`,
  `thm-two-square-representation-count`,
  `cor-average-order-of-two-square-representations`
- B-page items:
  `ex-dirichlet-hyperbola-lattice-decomposition`,
  `ex-divisor-summatory-error-table`
- Proof-contract report:
  `research/frontier-26-batch-5.proof-contracts.json`

### Provenance rationale

- Every authored page and item remains `status: draft`.
- The A-page statements are source-backed and recorded as
  `provenance.statement: literature-derived`.
- The new definitions carry `provenance.proof: not-applicable`; the proved
  A-page items use `ai-generated` proof provenance except
  `lem-normalized-two-square-count-is-multiplicative`, whose proof is
  `ai-altered` because its prime-power count step is written explicitly from
  Hackman Chapter `K.III.1` together with the published convention and
  prerequisite results already on disk.
- The two B-page worked examples are local demonstrations, so both use
  `provenance.statement: ai-generated`,
  `provenance.proof: ai-generated`, and the required
  `generation.role: example`.
- No stale `verification.judge` records existed in scope, so none needed
  removal.

### Narrowed or dropped claims

- No planned item id was dropped.
- No authored statement was narrowed relative to the batch manifest.
- The only route choice worth recording is the one already stated under
  provenance: `lem-normalized-two-square-count-is-multiplicative` keeps the
  planned claim but makes the count-level source step explicit instead of
  pretending that the current prerequisite page already isolates that theorem as
  a published internal item.

### Canonical precheck repair applied

- The first scoped precheck pass produced exactly two checker-supplied phase
  repairs:
  `lem-harmonic-sum-asymptotic` and
  `lem-normalized-two-square-count-is-multiplicative`.
- I stored those canonical stratifications on disk by renumbering the later
  proof phases to `2.1`, `3.1`, `4.1` exactly as the checker printed.
- One further formatting repair was manual rather than mathematical:
  `ex-divisor-summatory-error-table` had an untagged multiline proof row, so I
  flattened its first verification step onto a single tagged line.

### Checks run

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-harmonic-sum-asymptotic.md items/thm-dirichlet-hyperbola-method.md items/thm-divisor-counting-summatory-estimate.md items/lem-summatory-logarithm-asymptotic.md items/cor-average-order-of-divisor-counting-function.md items/thm-divisor-sum-summatory-estimate.md items/cor-average-order-of-divisor-sum-function.md items/thm-euler-totient-summatory-estimate.md items/cor-average-order-of-euler-totient.md items/thm-coprime-pair-counting-asymptotic.md items/cor-asymptotic-density-of-coprime-pairs.md items/lem-normalized-two-square-count-is-multiplicative.md items/thm-two-square-representation-count.md items/cor-average-order-of-two-square-representations.md items/ex-dirichlet-hyperbola-lattice-decomposition.md items/ex-divisor-summatory-error-table.md`
  Final result: `16 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: passed with the standing repository-wide `redundant-prereq`
  advisories only, ending with the usual trailing `OK` and
  `no item-level cycles, forward references, B-page dependencies, or unresolved ids`
  among the currently itemized pages.
- `node tools/content-policy.mjs research/frontier-26-batch-5.pages.json`
  Result: `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-26-batch-5.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 16/16 item(s) checked`
- `git diff --check -- research/frontier-26-batch-5.proof-contracts.json`
  Result: clean

### Blockers

- None in batch scope after the stored precheck repairs. The authored page pair,
  item set, and proof-contract artifact are all present on disk and green on
  the required Step-5 checks listed above.
