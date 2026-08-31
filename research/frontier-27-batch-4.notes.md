# frontier-27 · Beta · batch 4 scaffold notes

Run `frontier-27`, batch `4`, one A/B pair, category `functional-analysis`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-27-batch-4.pages.json`,
`research/frontier-27-batch-4.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-functional-analysis-track.md` lines `295-359`
- `research/plan-functional-analysis-track.md` lines `2278-2290`, `2362-2364`,
  `2436-2450`, and `2558`
- `research/subjects-01-RECONCILIATION.md` lines `303-305`

Shape after scaffolding:

- `normed-and-banach-spaces` (A): **20 items**
- `normed-and-banach-spaces-examples` (B): **9 items**

The A page stays well below the `60`-item split ceiling, so no split is
proposed.

I kept the design's mathematical route intact:

- normed/Banach conventions, reverse triangle inequality, subspaces, finite
  products, series, and completion on the A page;
- the `L^p` seam kept as a remark that explicitly points back to MT-14;
- classical sequence and function-space examples, then the incompleteness and
  non-norm-equivalence counterexamples on the B page.

Two local order repairs were necessary for dependency closure:

- `lem-completion-operations-are-well-defined` is placed before
  `thm-metric-completion-carries-a-unique-banach-space-structure`, although the
  design prose listed the theorem first. The theorem uses that well-definedness
  lemma, so the manifest reverses them and records the reason here rather than
  keeping a forward edge.
- On the B page, `ex-ell-infinity-is-a-banach-space` and
  `ex-c0-is-a-banach-space` are placed before the `c_00` example so that the
  completion-identification example can cite its Banach targets locally instead
  of silently reproving them inside one oversized example.

---

## 2. Design against spec and local seams

### No page-level drift

- The design and `research/plan-spec.json` agree on orders `288.047/288.048`.
- They agree on title, category, companion, and declared prerequisites.
- The live manifest therefore keeps the spec unchanged and does not record a
  drift dispute.

### Local seam 1: the design's BS label is narrower than the read range

- The FA-1 design line names Bühler-Salamon `§§1.1.1 and 1.2.1, pp. 6-24`.
- On the actual text, that same printed range also reaches the product/quotient
  tail later harvested as `1.2.3 Quotient and Product Spaces`.
- I treated this as a locator clarification, not a plan disagreement: the notes
  and coverage record the exact read headings, while the manifest still follows
  the design's page scope split of products on FA-1 and quotients on FA-2.

### Local seam 2: bounded-operator vocabulary stays deferred

- Bühler-Salamon and MIT both discuss bounded linear operators inside the read
  range.
- I did **not** mint a separate bounded-operator definition on FA-1, because the
  design assigns that vocabulary and the operator norm to FA-2.
- FA-1 only absorbs the one-way estimate "bounded linear implies Lipschitz /
  uniformly continuous" inline into the completion universal-property theorem.

### Local seam 3: the complete-subspace proof cost is recorded honestly

- The published metric theorem `thm-complete-subspace-iff-closed` already
  exists on disk and specializes cleanly to normed subspaces.
- The Keremedis-Wajch primary paper confirms the choice-sensitive seam that the
  design calls out.
- I therefore scaffolded the normed-space lemmas locally but recorded in the
  notes that the standard closure-via-approximating-sequence argument spends
  `AC_omega` at the point where a sequence is manufactured from adherence.

---

## 3. Source stack actually read

Only the A page carries the formal coverage harvest. Included rows may land on
either the A page or its B companion.

Recorded harvest sources:

1. Theo Bühler and Dietmar A. Salamon, *Functional Analysis*:
   `https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon`
2. Gerald Teschl, *Topics in Real and Functional Analysis*:
   `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
3. Andrew Lin and Casey Rodriguez, MIT 18.102, *Introduction to Functional
   Analysis*:
   `https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf`
4. Kyriakos Keremedis and Eliza Wajch, *On densely complete metric spaces and
   extensions of uniformly continuous functions in ZF*:
   `https://arxiv.org/pdf/1901.08709.pdf`

### Why these four

- Bühler-Salamon, Teschl, and MIT are the design-backed independent
  functional-analysis treatments for the actual page mathematics.
- Keremedis-Wajch is the primary-source check for the exact choice-strength seam
  behind "complete subspaces are closed" and "uniformly continuous extension
  from dense subspaces".

### Source repair and recovered-URL provenance

Two source-access seams mattered on Monday, August 31, 2026.

#### Bühler-Salamon

- The design names the author-hosted ETH URL
  `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`.
- That exact URL was not reader-openable in this session.
- I reopened the same text through the live Scribd HTML view, used that as the
  coverage URL, and preserved the ETH URL as `original_url`.

#### Teschl

- The official index page
  `https://www.mat.univie.ac.at/~gerald/ftp/book-fa/index.html`
  is live and gives the full table of contents.
- In that live official page, the full PDF is withheld during the AMS printing
  window.
- The full text actually read in this session was the 2017 manuscript mirror at
  the Mustansiriyah URL recorded in coverage.

### Fetch-verification handling

- The shell runner in this session is network-restricted.
- I therefore reopened all four exact URLs through the web reader, recorded only
  the `fetch_verified` fields I could verify honestly there, and then ran
  `source-fetch-check` in no-network gate mode.
- I did **not** invent byte counts or SHA digests that the shell could not
  mechanically obtain.

---

## 4. Local scaffold decisions

### Decision 1: products stay, quotients wait

The design is explicit that FA-1 keeps product norms and product completeness,
while FA-2 takes the quotient norm and quotient completeness package. The
coverage rows therefore dispose every quotient result to
`bounded-linear-operators-and-quotient-spaces` with result-specific reasons.

### Decision 2: the completion block reuses the published metric completion

The A page does **not** rebuild metric completion from scratch.

- `lem-completion-operations-are-well-defined` works inside the already
  published Cauchy-class model.
- `thm-metric-completion-carries-a-unique-banach-space-structure` equips that
  model with vector-space operations and the completed norm.
- `thm-completion-universal-property-for-bounded-linear-maps` then extends
  bounded linear maps through the dense isometric copy by the published metric
  extension theorem.

### Decision 3: the `L^p` page remains a citation seam, not a duplicate proof

`rem-lp-spaces-are-banach-spaces` is intentionally just the agreement item the
design asks for. It cites MT-14's already-published norm and completeness work
and does not recreate the measure-theoretic quotient construction here.

### Decision 4: the B page uses direct witnesses, not foreign B-page leaves

The examples page is dependency-local:

- `c_0`, `\ell^\infty`, `C_b(X)`, and `C(K)` are proved or checked directly on
  this companion page;
- the `c_00` example then identifies completions by density plus the A-page
  uniqueness-of-completion corollary;
- the polynomial incompleteness example uses the published compact-metric
  Stone-Weierstrass theorem already on disk, exactly as the design requires.

---

## 5. Dependency and proof-route notes

### Subspaces and completeness

- The normed-subspace definition is local because the page needs the restricted
  norm explicitly.
- The two closure/completeness lemmas specialize the published metric theorem
  rather than duplicating it verbatim.
- The notes preserve the foundational seam from Keremedis-Wajch instead of
  pretending the standard closure proof is choice-free.

### Product norms

- The product block proves the explicit inequalities between max, Euclidean, and
  sum norms.
- It does **not** appeal to general finite-dimensional norm equivalence, because
  the design forbids that shortcut on this page.

### Series criterion

- `thm-banach-series-criterion` uses the standard "rapidly Cauchy subsequence +
  summable differences" route.
- This gives a page-local completeness criterion that later Banach-space proofs
  can cite without falling back to raw metric Cauchy arguments every time.

### Completion universal property

- FA-1 still has no standalone bounded-operator definition item.
- The theorem states boundedness concretely by the inequality `||Tx|| <= C||x||`,
  derives uniform continuity from that estimate, and then uses the published
  dense-extension theorem.
- Linearity of the extension is proved by agreement on the dense original copy,
  not assumed from the metric theorem.

### Known limits kept explicit

- No quotient-space theorem is scaffolded here.
- No finite-dimensional compactness or local compactness result is scaffolded
  here.
- No new dense-completeness or UCE/DCC metamathematical vocabulary is scaffolded
  here beyond the batch notes that record the choice-strength seam.

---

## 6. Validation

Commands run on Monday, August 31, 2026:

- `node tools/coverage-checklist.mjs research/frontier-27-batch-4.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-4.coverage.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-4.coverage.json --out /tmp/frontier-27-batch-4.url-liveness.json --recover --fail-on-dead`
- `git diff --check -- research/frontier-27-batch-4.pages.json research/frontier-27-batch-4.coverage.json`

Results:

- `coverage-checklist`: pass, `1 page(s), 37 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`: pass, `95 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`: pass, `4/4 source(s) fetch-verified`.
- `validate-plan`: pass on the current unspliced `research/plan-spec.json`; the
  output ends with `OK` and only the repository's standing out-of-batch
  `redundant-prereq` warnings remain.
- `git diff --check`: clean for the edited batch files.

### Mechanical blocker: shell URL liveness

- `url-sweep` failed at shell transport level for all four exact URLs.
- Each failure was `curl: (6) Could not resolve host`, on:
  `arxiv.org`,
  `ocw-preview.odl.mit.edu`,
  `www.scribd.com`,
  and `www.uomustansiriyah.edu.iq`.
- The tool reported `0/4 live; 4 failed; 0 recoverable from the archive`.
- I am recording this as a runner-level DNS blocker, **not** as evidence that
  the sources are dead, because those same exact URLs were reopened and read
  through the web reader during the scaffold pass on Monday, August 31, 2026.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `a`'s stable review file
`research/frontier-27-alpha-a-step3-scaffold-review.md`.

- Finding id: none stated in `research/frontier-27-alpha-a-step3-scaffold-review.md`;
  I used the direct-repair subsection title `Batch 4 — normed-and-banach-spaces`
  as the stable finding handle for this receipt.
  Disposition: accepted as already applied on current bytes; no pushback and no
  further manifest or coverage edit were needed in this pass.
  Evidence: the stable review says
  `research/frontier-27-batch-4.coverage.json` had omitted direct carriers for
  nine current A-page items. The live coverage canonical section now names all
  nine required carriers:
  `rem-real-and-complex-normed-space-convention`,
  `lem-reverse-triangle-inequality-in-a-normed-space`,
  `def-linear-isometry-and-isometric-isomorphism`,
  `def-normed-subspace`,
  `lem-complete-subspace-is-closed`,
  `lem-closed-subspace-of-a-banach-space-is-banach`,
  `lem-vector-operations-are-continuous-in-a-normed-space`,
  `lem-completion-operations-are-well-defined`, and
  `thm-metric-completion-carries-a-unique-banach-space-structure`. A current
  manifest-to-coverage audit on Monday, August 31, 2026 reports
  `{ "page": "normed-and-banach-spaces", "item_count": 20, "carrier_count": 27, "missing": [] }`.
  I also re-opened the four recorded source texts through the web reader on
  Monday, August 31, 2026: the Scribd-hosted Bühler-Salamon text, Teschl's
  full PDF at the recorded `§1.2` / `§1.4` / `§1.7` locators, MIT 18.102
  Lecture `1` / `2`, and Keremedis-Wajch's `Definition 1.4` plus the Section 1
  scheme list.
  The required validators also pass on the same bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-4.coverage.json`
  returned `coverage-checklist: 1 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  returned `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-4.coverage.json`
  returned `source-fetch-check: 4/4 source(s) fetch-verified`; and
  `node tools/validate-plan.mjs research/plan-spec.json` exited `0`, ending
  with `OK` and only the standing repo-wide `redundant-prereq` advisories plus
  the normal note that `699` planned pages still carry no item list.
  Changed scaffold record: no additional edit in
  `research/frontier-27-batch-4.pages.json` or
  `research/frontier-27-batch-4.coverage.json`; this notes file only.

## Step-5 authoring

Run on Monday, August 31, 2026.

### Authored pages

- `library/real-analysis/functional-analysis/normed-and-banach-spaces.md`
- `library/real-analysis/functional-analysis/normed-and-banach-spaces-examples.md`

### Authored item ids

- A page: `rem-real-and-complex-normed-space-convention`, `def-banach-space`,
  `lem-reverse-triangle-inequality-in-a-normed-space`,
  `def-linear-isometry-and-isometric-isomorphism`, `def-normed-subspace`,
  `lem-complete-subspace-is-closed`,
  `lem-closed-subspace-of-a-banach-space-is-banach`,
  `def-product-norms-on-finitely-many-normed-spaces`,
  `lem-vector-operations-are-continuous-in-a-normed-space`,
  `lem-finite-product-norms-are-equivalent`,
  `thm-finite-products-of-banach-spaces-are-banach`,
  `def-series-and-absolute-convergence-in-a-normed-space`,
  `lem-absolutely-convergent-series-is-cauchy`,
  `thm-banach-series-criterion`, `def-completion-of-a-normed-space`,
  `lem-completion-operations-are-well-defined`,
  `thm-metric-completion-carries-a-unique-banach-space-structure`,
  `thm-completion-universal-property-for-bounded-linear-maps`,
  `cor-normed-space-completions-are-uniquely-linearly-isometric`,
  `rem-lp-spaces-are-banach-spaces`
- B page: `ex-ell-infinity-is-a-banach-space`, `ex-c0-is-a-banach-space`,
  `ex-cb-of-a-space-is-banach`, `ex-c-of-a-compact-space-is-banach`,
  `ex-finite-sequences-c00-with-standard-norms`,
  `ex-polynomials-are-not-complete-in-the-supremum-norm`,
  `ex-lp-banach-space-dictionary`,
  `cex-an-incomplete-subspace-need-not-be-closed`,
  `cex-equivalent-metrics-need-not-come-from-equivalent-norms`

### Proof-contract output

- Created `research/frontier-27-batch-4.proof-contracts.json`; the dispatch
  named it as an input/output artifact, but it was absent on current disk at
  author-start, so this pass authored it and then regenerated all citation and
  derivation rows from the finished item texts with
  `node tools/regen-contract-entries.mjs ...`.

### Provenance rationale kept on disk

- Statements were tagged `literature-derived` on the normed/Banach core, the
  classical sequence/function-space examples, and the counterexamples, because
  the claims follow the batch's recorded source treatments and the design's
  route rather than introducing a new generated statement.
- Local proofs and verifications were tagged `ai-generated` where this pass
  supplied the written argument.
- The two seam remarks,
  `rem-real-and-complex-normed-space-convention` and
  `rem-lp-spaces-are-banach-spaces`, were tagged with `proof:
  not-applicable`, because they record scope conventions and published results
  rather than proving a new local theorem.

### Narrowed or dropped claims

- None. The authored items keep the scaffolded claims and scope boundaries.
- Quotient norms, quotient completeness, finite-dimensional closedness beyond
  the explicit product-norm inequalities, and the full bounded-operator
  vocabulary remain deferred exactly as the Step-3 and scope-decision artifacts
  required.

### Canonical precheck repair actually applied

- Initial batch `precheck` found only phase-stratification issues on `16`
  proof-bearing items; no mathematical or delimiter defects were reported.
- I adopted the canonical repaired step order that `precheck` printed, then
  reran `precheck` and regenerated the batch proof-contract entries so every
  derivation and boundary row names the repaired step ids now on disk.

### Checks run

- `node tools/tsx-run.mjs tools/precheck.mts items/rem-real-and-complex-normed-space-convention.md ... items/cex-equivalent-metrics-need-not-come-from-equivalent-norms.md`
  Initial result: `21 checked, 16 failing`, every failure a `passes only after auto-repair` phase-stratification notice.
- `node tools/tsx-run.mjs tools/precheck.mts items/rem-real-and-complex-normed-space-convention.md ... items/cex-equivalent-metrics-need-not-come-from-equivalent-norms.md`
  Final result after canonical repair adoption: `21 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-27-batch-4.pages.json`
  Result: `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.` The command still emits the repository's standing `redundant-prereq` advisories and the note that `671` planned pages still have no item list.
- `node tools/proof-contract.mjs research/frontier-27-batch-4.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 21/21 item(s) checked`.
- `git diff --check -- library/real-analysis/functional-analysis/normed-and-banach-spaces.md library/real-analysis/functional-analysis/normed-and-banach-spaces-examples.md items/rem-real-and-complex-normed-space-convention.md items/def-banach-space.md items/lem-reverse-triangle-inequality-in-a-normed-space.md items/def-linear-isometry-and-isometric-isomorphism.md items/def-normed-subspace.md items/lem-complete-subspace-is-closed.md items/lem-closed-subspace-of-a-banach-space-is-banach.md items/def-product-norms-on-finitely-many-normed-spaces.md items/lem-vector-operations-are-continuous-in-a-normed-space.md items/lem-finite-product-norms-are-equivalent.md items/thm-finite-products-of-banach-spaces-are-banach.md items/def-series-and-absolute-convergence-in-a-normed-space.md items/lem-absolutely-convergent-series-is-cauchy.md items/thm-banach-series-criterion.md items/def-completion-of-a-normed-space.md items/lem-completion-operations-are-well-defined.md items/thm-metric-completion-carries-a-unique-banach-space-structure.md items/thm-completion-universal-property-for-bounded-linear-maps.md items/cor-normed-space-completions-are-uniquely-linearly-isometric.md items/rem-lp-spaces-are-banach-spaces.md items/ex-ell-infinity-is-a-banach-space.md items/ex-c0-is-a-banach-space.md items/ex-cb-of-a-space-is-banach.md items/ex-c-of-a-compact-space-is-banach.md items/ex-finite-sequences-c00-with-standard-norms.md items/ex-polynomials-are-not-complete-in-the-supremum-norm.md items/ex-lp-banach-space-dictionary.md items/cex-an-incomplete-subspace-need-not-be-closed.md items/cex-equivalent-metrics-need-not-come-from-equivalent-norms.md research/frontier-27-batch-4.proof-contracts.json`
  Result: clean.

### Blockers

- None.
