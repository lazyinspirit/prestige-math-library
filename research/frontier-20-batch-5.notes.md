# frontier-20 · Beta · batch notes — `regular-continued-fractions-and-diophantine-approximation` (steps 1-2)

Run `frontier-20`, batch `5`, one A/B pair, category `number-theory`.
Author: Beta. Session date: Wednesday, August 26, 2026.
Design section: [research/plan-number-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-number-theory-track.md:746).

Artifacts owned by this batch:
`research/frontier-20-batch-5.pages.json`,
`research/frontier-20-batch-5.coverage.json`,
and this file.

---

## 1. Shape and split check

- `regular-continued-fractions-and-diophantine-approximation` (A): **19 items**.
- `regular-continued-fractions-and-diophantine-approximation-examples` (B): **8 items**.

The A page stays far below the 60-item ceiling, so no split is proposed.

High-level shape:

- The scaffold follows the design's low-anchor route exactly: define finite and infinite regular continued fractions, build convergents and the determinant identity first, prove complete quotients and convergence directly from completeness rather than from the later sequence pages, then recover the real-number algorithm, rational termination, the normalized finite-expansion uniqueness, the sharp first-kind best-approximation theorem, Legendre's criterion, and only then the periodic/quadratic-irrational branch.
- The periodicity half keeps the design's seam with Pell equations. This page proves only the finite-state and eventual-periodicity characterization needed for Lagrange's theorem. The symmetric period structure of `sqrt(D)` and the Pell consequences stay on NT-8.
- The B page takes exactly the examples the design names: one rational double-expansion witness, one Euclid/Bézout alignment, two quadratic-irrational computations, the golden-ratio fixed point, the `pi` approximation table, a Legendre-boundary counterexample, and one negative-irrational algorithm run.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch says to record these and follow `research/plan-spec.json`, not the design, when they disagree.

### Finding 1 — page-level prerequisites disagree sharply

The design block's narrative prerequisite sentence says the page needs the authored natural/integer/rational/real foundations, Euclidean division and extended Euclid, induction, and finite matrix algebra, and explicitly warns that the later floor-function and general sequence pages are not available at this anchor.

`research/plan-spec.json` currently gives the page only:

`["positive-definite-binary-quadratic-forms-and-reduction-examples"]`.

I kept the manifest page-level `requires` at the spec value, exactly as instructed. The actual mathematical closure is reflected at the item-dependency level instead of by amending the page edge inside this batch.

No order drift was found: both design and `plan-spec.json` place the A page at `78.3` and the B page at `78.4`.

---

## 3. Source stack and support

Only the A page needs a harvest ledger; the B page is a worked-example leaf.

### Source list

- Peter Hackman, *Elementary Number Theory*, via live Yumpu full-text flipbook:
  `https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university`
- William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets*:
  `https://wstein.org/ent/ent.pdf`
- Bruce Ikenaga, *Approximation by Rational Numbers*:
  `https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html`
- Bruce Ikenaga, *Periodic Continued Fractions*:
  `https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html`

All four URLs above were opened successfully through the web reader on Wednesday, August 26, 2026. The remaining fetch blocker is only the shell-side durable stamp, not the source liveness of the recorded URLs themselves.

### What these support in the scaffold

- Hackman carries the page's primary route: convergents, determinant identities, complete quotients, direct convergence, best approximations, Legendre's criterion, negative irrationalities, finite rational expansions, and the finite-state route to periodicity.
- Stein is the independent textbook cross-check for the finite/infinite split, rational termination, the exactly-two finite expansions phenomenon, the error bound, the quadratic-irrational definition, and the periodic characterization.
- Ikenaga's approximation note gives a clean independent proof shape for the first-kind best-approximation theorem, its denominator corollary, Legendre's criterion, and the standard `355/113` comparison on `pi`.
- Ikenaga's periodic note gives an explicit forward periodic-implies-quadratic route plus the `m_k, s_k` quadratic-irrational algorithm and the converse periodicity theorem.

### Important conventions fixed from the sources

- The page uses **regular** continued fractions with `a_0 in Z` and `a_n > 0` for `n >= 1`; the semicolon is typographical only.
- The initial indices `p_{-2}, p_{-1}, q_{-2}, q_{-1}` are part of the convergent definition and are not treated as extending the digit sequence to negative indices.
- The integer-part step is proved inline from `thm-of-archimedean` and `thm-well-ordering-principle`. I did **not** use the later published `lem-integer-part`, because the design forbids importing that higher-anchor page into this scaffold.
- Convergence is proved directly from the completeness of the ordered field, via the even/odd monotone cuts, rather than by citing any later sequence-limit page.
- Periodicity means repetition of the **continued-fraction tail produced by the deterministic complete-quotient algorithm**. A repeated digit by itself is not enough; the notes and scaffold keep that distinction visible because NT-8 depends on it.

---

## 4. Local scaffold choices that matter later

- `lem-continued-fraction-convergent-recurrence` and `lem-continued-fraction-determinant-identity` are separated. The design explicitly wanted the determinant/Bézout consequences visible before the real-number algorithm and best-approximation proofs.
- `def-continued-fraction-complete-quotients` is scaffolded before the convergence theorem, not absorbed into the algorithm theorem, because the low-anchor integer-part existence proof is one of the page's main seam obligations.
- `thm-rational-continued-fraction-termination` and `thm-normalized-finite-continued-fraction-uniqueness` are distinct items. The first is Euclidean descent; the second is the normalized last-digit-at-least-2 uniqueness statement. Merging them would hide the exact place where the two rational expansions come from.
- `lem-continued-fraction-error-bound`, `thm-continued-fraction-convergents-are-best-approximations`, and `thm-legendre-continued-fraction-criterion` are kept as three separate approximation items. That is the cheapest proof decomposition that preserves the stronger first-kind theorem the design wanted, while making the `1/(2q^2)` threshold theorem a clean later consequence.
- `lem-periodic-continued-fraction-is-quadratic` is only the forward implication, and `lem-quadratic-irrational-complete-quotients-are-finite-state` is only the converse engine. `thm-lagrange-periodic-continued-fraction-theorem` then stitches them together. That keeps the determinism-of-complete-quotients point visible instead of burying it in one long theorem.
- Negative irrationalities are represented by the B-page worked example `ex-a-negative-real-continued-fraction`, not by a standalone A-page theorem. The design named the sign convention as a trap but did not allocate A-page budget to a separate sign theorem.

---

## 5. Known limits and downstream caution

- This page stops at **eventual** periodicity. It does not develop purely periodic expansions, Galois's theorem, or the symmetry statement for `sqrt(D)` periods; those belong with the Pell page or later optional continued-fraction enrichments.
- The best-approximation branch proves the first-kind theorem and Legendre's criterion, but it does **not** try to add Hurwitz's theorem, Markov spectra, or any sharp improvement of the `1/q_n^2` bound. The design explicitly asked for the weak bound only.
- The finite-state lemma is formulated abstractly enough to feed the later Pell page, but it deliberately stops short of introducing the full `P_n, Q_n` symmetry or norm identities for `sqrt(D)` convergents. Those are NT-8 material.
- Because the page-level `requires` remain at the spec value, later splice review rather than this batch owns any prerequisite-edge repair.

---

## 6. Validator results

- `node tools/coverage-checklist.mjs research/frontier-20-batch-5.coverage.json --require-destination`
  Result: **pass** — `1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-20-batch-*.pages.json --manifest-only`
  Result: **pass** — `217 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass** for the run-wide plan battery. The command's long output still includes the repository's standing redundant-prerequisite notes outside this batch, but it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 404 page(s) with item lists.
  ```

  The command continues to list this page at PAGE level in the plan-spec table, so I also ran one local manifest sanity check over `research/frontier-20-batch-5.pages.json`: **pass** — every dependency id resolves, and there are no same-page forward dependencies inside either page.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-5.coverage.json --stamp`
  Result: **blocked by runner DNS**, not by a bad harvested URL.
  Exact output:

  ```text
  ERROR fetch-check-dead: regular-continued-fractions-and-diophantine-approximation: https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university — EAI_AGAIN
  ERROR fetch-check-dead: regular-continued-fractions-and-diophantine-approximation: https://wstein.org/ent/ent.pdf — EAI_AGAIN
  ERROR fetch-check-dead: regular-continued-fractions-and-diophantine-approximation: https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html — EAI_AGAIN
  ERROR fetch-check-dead: regular-continued-fractions-and-diophantine-approximation: https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html — EAI_AGAIN
  source-fetch-check: 0/4 source(s) fetch-verified (0 newly stamped), 4 FAILED
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-5.coverage.json --out research/frontier-20-url-liveness.json --recover --fail-on-dead`
  Result: **blocked by the same DNS failure**. The generated run-level report file was deleted immediately because it is outside this batch's authorized artifact set. Exact output:

  ```text
  url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> research/frontier-20-url-liveness.json
  FAIL 0 https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html — curl: (6) Could not resolve host: sites.millersville.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html — curl: (6) Could not resolve host: sites.millersville.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://wstein.org/ent/ent.pdf — curl: (6) Could not resolve host: wstein.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university — curl: (6) Could not resolve host: www.yumpu.com
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

Known open blocker after the gate run:

- The scaffold itself is structurally clean.
- The source harvest is written from live source reading and the URLs were verified in the web tool, but the durable shell-side fetch stamps cannot be produced honestly from this runner because every external host fails with `EAI_AGAIN` / `curl: (6) Could not resolve host`.

---

## Step-3 fix pass

On Wednesday, August 26, 2026 I re-read
`research/frontier-20-alpha-d-step3-scaffold-review.md`,
`research/frontier-20-alpha-d-step3-verdicts.json`, the NT-7 design block in
`research/plan-number-theory-track.md`, and the current batch-5 scaffold
artifacts.

- Finding id: **none separately issued for batch 5**. The stable alpha-d
  record for this batch is the page verdict entry for
  `regular-continued-fractions-and-diophantine-approximation`.
  Disposition: **accepted as no-change**.
  Evidence: the step-3 review marks the pair `sufficient`, citing the exact
  NT-7 A/B split (`19` A items, `8` B items), a source stack deep enough on
  current disk state, and mathematically sufficient item-level closure with no
  unresolved or same-page forward dependency defect. The companion verdict file
  records `{ "page": "regular-continued-fractions-and-diophantine-approximation", "verdict": "sufficient" }`.
  Changed scaffold record: **none**. No batch-5 manifest row, item id,
  dependency, source disposition, or locator changed in this pass.

Post-pass validators on Wednesday, August 26, 2026:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-5.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs research/frontier-20-batch-*.pages.json --manifest-only`
  -> `content-policy: 486 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 404 page(s) with item lists.`

## Step-5 authoring

Date: Wednesday, August 26, 2026.

Authored scope on disk:

- A page `regular-continued-fractions-and-diophantine-approximation`:
  `def-regular-continued-fraction`,
  `def-convergents-of-regular-continued-fraction`,
  `lem-continued-fraction-convergent-recurrence`,
  `lem-continued-fraction-determinant-identity`,
  `cor-continued-fraction-convergents-are-reduced`,
  `def-continued-fraction-complete-quotients`,
  `lem-continued-fraction-complete-quotient-formula`,
  `thm-convergence-of-infinite-regular-continued-fractions`,
  `thm-continued-fraction-algorithm-for-real-numbers`,
  `thm-rational-continued-fraction-termination`,
  `thm-normalized-finite-continued-fraction-uniqueness`,
  `lem-continued-fraction-error-bound`,
  `thm-continued-fraction-convergents-are-best-approximations`,
  `thm-legendre-continued-fraction-criterion`,
  `def-quadratic-irrational`,
  `def-eventually-periodic-continued-fraction`,
  `lem-periodic-continued-fraction-is-quadratic`,
  `lem-quadratic-irrational-complete-quotients-are-finite-state`,
  `thm-lagrange-periodic-continued-fraction-theorem`.
- B page `regular-continued-fractions-and-diophantine-approximation-examples`:
  `ex-two-finite-continued-fractions-for-a-rational`,
  `ex-continued-fraction-and-extended-euclid`,
  `ex-continued-fraction-of-square-root-two`,
  `ex-continued-fraction-of-square-root-fourteen`,
  `ex-golden-ratio-as-a-periodic-continued-fraction`,
  `ex-best-rational-approximations-to-pi`,
  `cex-an-excellent-approximation-at-the-legendre-boundary`,
  `ex-a-negative-real-continued-fraction`.
- Page files authored:
  `library/number-theory/regular-continued-fractions-and-diophantine-approximation.md`,
  `library/number-theory/regular-continued-fractions-and-diophantine-approximation-examples.md`.
- Proof-contract artifact authored and synchronized:
  `research/frontier-20-batch-5.proof-contracts.json`.

Provenance rationale:

- All A-page definitions, lemmas, corollaries, and theorems are standard sourced material, so their Statements are tagged `literature-derived`; the local proofs written in this pass are tagged `ai-generated`.
- The B-page worked examples and the counterexample are locally chosen witnesses, so their Statements are tagged `ai-generated` with the required `generation.role` (`example` or `counterexample`), and their local verifications are tagged `ai-generated`.

Narrowed or otherwise materialized choices from the scaffold:

- No planned item id was dropped.
- `lem-quadratic-irrational-complete-quotients-are-finite-state` is proved with the explicit bound `|P_n| < sqrt(D)` rather than the stronger-sign variant `0 < P_n < sqrt(D)` mentioned in the batch notes' source-route sketch. The signed bound written here is the one actually established from the on-disk argument, and it is still sufficient for the finite-state conclusion.
- `ex-best-rational-approximations-to-pi` uses direct decimal error comparisons plus Legendre's criterion only to certify `355/113` as a convergent and then invoke the best-approximation theorem. I did not claim the full initial continued fraction of `pi` without proving it inside this batch.
- `cex-an-excellent-approximation-at-the-legendre-boundary` refutes replacement of the sharp constant `1/2` by `3/4` via the concrete witness `sqrt(2)` and `10/7`; this keeps the counterexample honest and within the page's approximation scope.

Checks run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts` on all 22 proof-bearing batch-5 items
  -> pass, `22 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs` on the 27 batch item/page files
  -> pass, `OK — 29 file(s) ... every math span parses ... every frontmatter block parses`.
- `node tools/proof-contract.mjs research/frontier-20-batch-5.proof-contracts.json --strict`
  -> pass, `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-20-batch-5.pages.json`
  -> pass, `27 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`

Blockers:

- None remaining inside batch 5 after the Step-5 authoring pass.
