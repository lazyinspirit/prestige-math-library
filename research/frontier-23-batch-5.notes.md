# frontier-23 · Beta · batch notes — `matrix-norms-condition-numbers-and-numerical-stability` (step 1 scaffold)

Run `frontier-23`, batch `5`, one A/B pair, category `linear-algebra`.
Author: Beta. Session date: Friday, August 28, 2026.
Design sections read:
[research/plan-algebra-track-expansion-v2.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:242),
[research/plan-algebra-track-expansion-v2.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:281),
[research/plan-algebra-track-expansion-v2.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:618),
and
[research/frontier-23-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-23-alpha-step0-drift.md:49).

Artifacts owned by this batch:
`research/frontier-23-batch-5.pages.json`,
`research/frontier-23-batch-5.coverage.json`,
and this file.

---

## 1. Shape and split check

- `matrix-norms-condition-numbers-and-numerical-stability` (A): **23 items**.
- `matrix-norms-condition-numbers-and-numerical-stability-examples` (B): **11 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The page starts with **problem conditioning**, not with matrices. I defined forward error and local condition numbers first, because the design insists that conditioning belongs to the problem map and must be fixed before algorithmic stability is discussed.
- The local condition numbers are scaffolded by **first-order inequalities**, not by a Fréchet-derivative formula. That keeps the page dependency-closed at order `168.001`: the inverse-function and general matrix-calculus pages are later in the reading order.
- The matrix-norm block then adds only what the ownership seam allows: induced matrix norms from the published vector `p`-norms, the induced `1`- and `infinity`-norm formulas, and the Frobenius/spectral singular-value package. I did **not** re-mint the operator `2`-norm, singular values, or operator-norm submultiplicativity, because those already belong to the published spectral/SVD page.
- The linear-system block is the numerical-analysis core: `kappa_p(A)`, right-hand-side and matrix perturbation bounds, reciprocal spectral condition number as relative distance to singularity, residual-to-forward-error bounds, and normwise/componentwise backward error with explicit residual formulas.
- The arithmetic-model block comes before any floating-point theorem that spends it. It fixes unit roundoff, the explicit excluded cases, the `theta_n`/`gamma_n` product lemma, the dot-product bounds, and the general first-order slogan “conditioning times backward error controls forward error.”
- The page ends by separating **exact rank** from **numerical rank**. Exact full rank is open, rank-deficient points are discontinuity points, and numerical rank is defined by norm/scale/tolerance before the spectral-threshold characterization is stated.

## 2. Design control and drift

The generated task requires that design-vs-spec disagreements be recorded here and that `research/plan-spec.json` win locally if any appear.

### Finding 1 — no design/spec drift for this pair

- The design block `LA-16` and the live plan spec agree on the A-page order `168.001`, the B-page order `168.002`, and the direct page prerequisites
  `rn-as-a-normed-space` and
  `the-spectral-theorem-and-singular-value-decomposition`.
- The run's drift record at
  [research/frontier-23-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-23-alpha-step0-drift.md:49)
  already marks this pair `no-drift`.

No batch-local prerequisite or order repair was needed.

## 3. Source stack and support

Only the A page carries the harvest ledger; the B page is a leaf companion of worked examples and counterexamples.

### Source list

- L. N. Trefethen and D. Bau III, *Numerical Linear Algebra*:
  `https://djvu.online/file/DTGVxlxBwTy0n`
- James Demmel, *Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers*:
  `https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html`
  with `original_url`
  `https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html`
- James Demmel, *Math 221 Lecture 2: Floating Point Arithmetic*:
  `https://web.archive.org/web/20260803030309if_/http://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html`
  with `original_url`
  `https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html`
- David Bindel, *CS 6210: Floating Point and Error Analysis*:
  `https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html`
- David Bindel, *CS 6210: Sums, Dots, and Error in Linear Systems*:
  `https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html`
- David Bindel, *CS 6210: Matrix Nearness Problems*:
  `https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html`

The current harvest keeps six fetch-verified HTTP(S) URLs. The two Demmel
lectures are stored as complete Internet Archive copies, with the live
Berkeley URLs preserved as `original_url` provenance in
`research/frontier-23-batch-5.coverage.json`.

### What these support in the scaffold

- Trefethen-Bau is the **primary treatment** for the numerical-analysis spine: problem-map conditioning, `kappa(A)`, perturbation bounds, stability vocabulary, the forward-error versus backward-error theorem, and the least-squares/normal-equations stability seam.
- Demmel Lecture 3 is the independent linear-algebra-to-conditioning bridge: matrix norms, the geometric ill-posedness interpretation, the classic `dist(A,{singular}) = 1/kappa(A)` result, perturbation bounds for `Ax=b`, and residual/backward-error formulas.
- Demmel Lecture 2 and Bindel's September 8 notes are the floating-point model pair. They supply unit roundoff, the explicit exclusion of overflow/underflow/invalid operations from the standard `1 + delta` model, the product-of-errors estimate, and the cancellation example with its stable reformulation.
- Bindel's September 10 notes are the independent backing for the dot-product theorem, especially the componentwise perturbation form that turns into a normwise error bound.
- Bindel's October 15 notes anchor the matrix-nearness end of the page: Frobenius-unitary invariance, distance to rank deficiency, and the low-rank/truncated-SVD point that underlies the numerical-rank threshold characterization.

## 4. Local scaffold choices that matter later

- **Real versus complex scope is recorded, not blurred.** The induced `p`-norm and `kappa_p(A)` items are scaffolded against the published `p`-norms on `R^n`; I did not silently invent a parallel `C^n` `p`-norm page inside LA-16. The spectral/Frobenius block then uses the already-published real/complex singular-value language from the SVD page.
- **Frobenius norm packaging now stays inside LA-16.** The A-page definition
  `def-frobenius-matrix-norm` gives the entrywise formula directly and depends
  only on `def-abs-value` and
  `def-complex-conjugate-real-imaginary-part-and-modulus`. That removes the
  forbidden dependency on the published B-page example
  `ex-frobenius-inner-product-on-matrix-space` while leaving that example as
  background rather than a load-bearing edge.
- **The residual and backward-error formulas are their own item.** The design names backward-error notions explicitly, and the B-page witnesses need the computable formulas, so I separated the definition item from the proposition that derives the residual formulas.
- **Normal-equation conditioning is kept on this page, algorithm design is not.** LA-16 proves the conditioning square and gives the comparison witness; computational QR stability stays with LA-17, exactly as the ownership seam says.
- **Numerical rank is defined by a nearness problem first.** The spectral threshold count is then a specialization proved from Eckart-Young, rather than baked into the definition. That leaves later pages room to use the definition with other norms or scales without rewriting LA-16.
- Several B-page witnesses are intentionally **local computations rather than transplanted source examples**: the contrasting `2x2` systems, the low-order Hilbert examples, the tiny-residual/large-forward-error witness, the scaling counterexample, and the two-tolerance numerical-rank witness. They are still source-grounded because the supporting A-page theorems are backed by the harvested treatments above.

## 5. Known limits and downstream caution

- This page does **not** generalize into a full theory of norms on arbitrary finite-dimensional complex coordinate spaces. It only uses the published `R^n` `p`-norms and the already-published singular-value machinery.
- The page does **not** add general perturbation theory for eigenvalues, pseudospectra, matrix functions, or regularization filters. Those belong to later linear-algebra pages in the same expansion block.
- The page does **not** build strong rank-revealing QR, pseudoinverses, or rank-deficient least-squares algorithms. Those are deferred to
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`.
- The floating-point model is explicitly the standard relative model with excluded exceptional cases. I did **not** let any statement on this page pretend that overflow, subnormal underflow, `inf`, or `NaN` are automatically inside the same theorem scope.

## 6. Validator results

Commands run on Friday, August 28, 2026:

- `node tools/coverage-checklist.mjs research/frontier-23-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-5.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-5.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-23-batch-5.coverage.json --out /tmp/frontier-23-batch-5-url-liveness.json --recover --fail-on-dead`
- `git diff --check -- research/frontier-23-batch-5.pages.json research/frontier-23-batch-5.coverage.json`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- whole-run `content-policy --manifest-only`:
  `content-policy: 365 scoped item(s), 0 error(s), 0 warning(s)`
- batch-local `content-policy --manifest-only`:
  `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` passed on the live plan and ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.
  NOTE: 809 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `source-fetch-check --stamp` failed on every external URL from the shell with DNS resolution errors:

  ```text
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://djvu.online/file/DTGVxlxBwTy0n — EAI_AGAIN
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html — EAI_AGAIN
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html — EAI_AGAIN
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html — EAI_AGAIN
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html — EAI_AGAIN
  ERROR fetch-check-dead: matrix-norms-condition-numbers-and-numerical-stability: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html — EAI_AGAIN
  source-fetch-check: 0/6 source(s) fetch-verified (0 newly stamped), 6 FAILED
  ```

- `url-sweep` produced the same shell-side transport failure and no archive recovery:

  ```text
  url-sweep: 0/6 live; 6 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-23-batch-5-url-liveness.json
  FAIL 0 https://djvu.online/file/DTGVxlxBwTy0n — curl: (6) Could not resolve host: djvu.online
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html — curl: (6) Could not resolve host: people.eecs.berkeley.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_02.html — curl: (6) Could not resolve host: people.eecs.berkeley.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-08.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `git diff --check` on the two edited batch artifacts was clean.

Step-1 blocker at close:

- The scaffold structure is green.
- The batch coverage harvest is green.
- The durable fetch/liveness stamps are red only because this runner cannot resolve external hosts from the shell, even though the exact cited URLs were successfully opened and read through the web reader on Friday, August 28, 2026.
- I therefore kept the verified harvested URLs and did **not** fabricate `fetch_verified` stamps or re-source onto different documents purely to satisfy a shell DNS failure.

## Step-3 fix pass

Run date: Saturday, August 29, 2026.

- `B5-1` — accepted; no pushback. Evidence: Alpha group `b` identified a
  forbidden foreign B-page dependency from `def-frobenius-matrix-norm` to the
  published example `ex-frobenius-inner-product-on-matrix-space`. The current
  frontier-23 batch-5 manifest now defines `def-frobenius-matrix-norm`
  directly by `||A||_F=(\sum_{i,j}|a_{ij}|^2)^{1/2}` and its dependencies are
  only `def-abs-value` and
  `def-complex-conjugate-real-imaginary-part-and-modulus`, so the leaf-rule
  violation is gone. Changed scaffold record:
  `research/frontier-23-batch-5.pages.json` (`def-frobenius-matrix-norm`);
  this notes file was updated to match the repaired manifest and the current
  coverage record.

- Source-state confirmation for the same repair: the current coverage ledger
  keeps six fetch-verified source rows, and the two Demmel lectures now use
  archive URLs with `original_url` provenance preserved. Changed scaffold
  record: `research/frontier-23-batch-5.coverage.json` already contains the
  recovered URLs and stamps, so this pass needed no further coverage edit.

- Validator rerun on Saturday, August 29, 2026:
  `node tools/coverage-checklist.mjs research/frontier-23-batch-5.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.

- Whole-run manifest-only content policy rerun on Saturday, August 29, 2026:
  `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  -> `content-policy: 499 scoped item(s), 0 error(s), 0 warning(s)`.

- `validate-plan` rerun on Saturday, August 29, 2026:
  the full merged frontier-23 plan in `/tmp/frontier-23-merged-plan.json`
  still fails on unrelated batches outside batch `5`, so I did not treat that
  as a batch-local defect. The batch-owned closure plan in
  `/tmp/frontier-23-batch-5-closure-plan.json` passes with no hard errors and
  ends with `OK — declared page order is acyclic and consistent; no item-level
  cycles, forward references, B-page dependencies, or unresolved ids among the
  138 page(s) with item lists.` The remaining 50 messages are
  `redundant-prereq` warnings on prerequisite pages, not on LA-16 itself.
