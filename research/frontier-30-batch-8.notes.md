# frontier-30 · Beta · batch-8 notes — `dirichlet-characters-l-functions-and-primes-in-progressions` and `hilbert-symbols-and-the-quadratic-local-global-principle`

Run `frontier-30`, batch `8`, two A/B pairs, category `number-theory`.
Author: Beta. Session date: Friday, September 4, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-8.pages.json`
- `research/frontier-30-batch-8.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-8.prompt.md`, the generated task
`research/frontier-30-beta-8.task.md`, the seed manifest
`research/frontier-30-batch-8.pages.json`, the controlling design material in
`research/plan-number-theory-track.md`, and the live plan entries in
`research/plan-spec.json`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that command reported **`frontier-23`** in stage `5-author`,
not `frontier-30`. Because workflow state is out of scope and the dispatch
explicitly assigns `frontier-30`, I edited only the three
`research/frontier-30-batch-8.*` scaffold artifacts and did not try to steer or
repair `.autopilot/`.

## 2. Design-vs-spec drift recorded, not settled

The dispatch says to record these disagreements and follow the live
`research/plan-spec.json` page records rather than the design text when they
disagree.

### `dirichlet-characters-l-functions-and-primes-in-progressions`

The design block for NT-13 states a wider direct background:

- NT-1, NT-9, and NT-12
- CRT and finite-abelian-group character theory from abstract algebra
- CA-22 zeta in its initial half-plane

The live `plan-spec.json` page record and the seed batch manifest instead give
the page-level `requires`:

- `dirichlet-series-and-euler-products-examples`
- `characters-and-the-orthogonality-relations`

I left the page-level `requires` at the spec value. The item-level scaffold
still names the actual published zeta, Dirichlet-series, and finite-character
dependencies where the proofs need them.

### `hilbert-symbols-and-the-quadratic-local-global-principle`

The design block for NT-18 states a wider direct background:

- NT-2, NT-3, NT-13, and NT-17
- the published `def-quadratic-form-and-polar-form`
- the published `cor-quadratic-forms-diagonalize-in-characteristic-not-two`
- GA-4 norm language and finite-field results from abstract algebra

The live `plan-spec.json` page record and the seed batch manifest instead give
the page-level `requires`:

- `absolute-values-completions-and-p-adic-numbers-examples`
- `quadratic-residues-and-the-legendre-symbol`
- `quadratic-reciprocity-and-the-jacobi-symbol`
- `dirichlet-characters-l-functions-and-primes-in-progressions`

Again I left the page-level `requires` at the spec value. The item-level
`deps` record the actual published p-adic, quadratic-reciprocity,
finite-field, and weak-approximation inputs used by the planned proofs.

### No order drift

The design and the live plan agree on orders `348.009/348.010` for NT-13 and
`348.017/348.018` for NT-18.

## 3. Scaffold shape and split check

The scaffold now has:

- `dirichlet-characters-l-functions-and-primes-in-progressions` (A): **24 items**
- `dirichlet-characters-l-functions-and-primes-in-progressions-examples` (B): **8 items**
- `hilbert-symbols-and-the-quadratic-local-global-principle` (A): **17 items**
- `hilbert-symbols-and-the-quadratic-local-global-principle-examples` (B): **9 items**

Both A pages stay below the `60`-item split ceiling, so **no split is
proposed**.

## 4. Route choices fixed from the design

### NT-13 route decisions kept

I kept the design's route and its traps:

1. a Dirichlet character is defined with its modulus as part of the datum
2. extension by zero is proved representative-independent before it is used
3. conductor and primitive ancestry are deferred to NT-14 rather than pulled
   into this page
4. line-one nonvanishing is split into:
   - `t != 0`
   - `t = 0` for nonreal characters
   - `t = 0` for real nonprincipal characters
5. Dirichlet's theorem is derived from character orthogonality, the principal
   logarithmic singularity, bounded prime-power tails, and the reciprocal-prime
   divergence, not from an illicit slogan that Euler products never vanish

Important local choices:

- I kept `lem-dirichlet-character-arithmetic-function-characterization` as a
  real item because the page needs the inverse construction from a periodic,
  completely multiplicative arithmetic function back to a modulus-`q`
  character.
- I kept `thm-product-dirichlet-l-nonvanishing-line-one` separate from
  `thm-dirichlet-l-nonvanishing-line-one`, matching the design's order-count
  boundary argument.
- I kept `thm-mertens-primes-arithmetic-progressions` as its own quantitative
  theorem instead of collapsing it into the final infinitude result.

### NT-18 route decisions kept

I also kept the design's route for Hilbert symbols and Hasse-Minkowski:

1. define the rational local fields first, then the Hilbert symbol over each
   `Q_v`
2. prove square-class invariance before using local square-class formulas
3. keep the odd-`p` and `2`-adic formulas as distinct items
4. prove the finite-field isotropy lemma directly, not by importing a larger
   theorem like Chevalley-Warning
5. make the Dirichlet-theorem dependency explicit inside the global
   square-class approximation lemma
6. keep the full ternary theorem and then the full rational Hasse-Minkowski
   theorem on the A page
7. record the Selmer cubic as a source-backed boundary counterexample whose
   local checks are carried on the B page, while its global algebraic-number-
   theory proof is cited but not imported before NT-19--NT-23

Important local choices:

- I kept `lem-equivalent-definitions-of-the-hilbert-symbol` separate from
  `lem-hilbert-symbol-depends-only-on-square-classes`; the sign bookkeeping in
  the norm comparison is real proof work.
- I kept `lem-global-square-class-approximation` separate from the full
  Hasse-Minkowski theorem because the design explicitly wants the dimension-four
  patching step visible.
- I kept the cubic local-global failure as a `counterexample` item on the B
  page, but its notes must remain explicit that only the local Hensel checks
  are proved in-page.

## 5. Source set actually recorded

### For `dirichlet-characters-l-functions-and-primes-in-progressions`

I recorded four verified source rows:

1. Kedlaya, Chapter 3 `Dirichlet characters and L-functions`:
   `https://kskedlaya.org/ant/chap-lfunc.html`
2. Sutherland, *Number Theory I*, Lecture 18 in the MIT OCW full notes:
   `https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf`
3. Tomczak, *Analytic Number Theory*, Chapter 4:
   `https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf`
4. Kedlaya, Chapter 4 `Primes in arithmetic progressions`:
   `https://kskedlaya.org/ant/chap-primes-in-ap.html`

This satisfies the standing source rule:

- two independent treatments
- at least one full lecture-note set with a harvestable table of contents
- explicit source coverage for the primitive/conductor material that is read
  but deferred to NT-14

What each source is doing:

- **Kedlaya Chapter 3** is the primary source for the core analytic spine:
  Dirichlet characters, Dirichlet `L`-functions, the principal factorization,
  the line-one product theorem, and the real/nonreal split at `s = 1`.
- **Sutherland Lecture 18** is the independent source for the page's chosen
  character convention, extension by zero, the principal character, finite
  abelian orthogonality, and the exact primitive/conductor material deferred to
  NT-14.
- **Tomczak Chapter 4** independently backs bounded character sums,
  holomorphy on `Re(s) > 0`, the nonreal and real nonvanishing proofs at
  `s = 1`, and the Gauss-sum material that is intentionally deferred.
- **Kedlaya Chapter 4** is the primary source for density, discrete Fourier
  analysis over the character group, the residue-class density theorem, the
  quantitative reciprocal-prime step, and the final Dirichlet theorem.

### For `hilbert-symbols-and-the-quadratic-local-global-principle`

I recorded four verified source rows:

1. Sutherland, MIT 18.782 Lecture 10 `Hilbert symbols`:
   `https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf`
2. Sutherland, MIT 18.782 Lecture 11 `Weak and strong approximation, Hasse-Minkowski theorem for Q`:
   `https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf`
3. Sam Raskin, *Introduction to the Arithmetic Theory of Quadratic Forms*:
   `https://www.samraskin.net/forms.pdf`
4. Keith Conrad, *Selmer's Example*:
   `https://dms.umontreal.ca/~mlalin/mat6630/selmerexample.pdf`

This also satisfies the standing source rule:

- two independent treatments
- at least one full course-note treatment with a harvestable table of contents
- a source-specific boundary note for the nonquadratic local-global failure

What each source is doing:

- **Sutherland Lecture 10** carries the Hilbert-symbol definition, the norm
  equivalence, the local formulas, bilinearity, and reciprocity.
- **Sutherland Lecture 11** carries the finite-field/local-isotropy step, the
  binary and ternary representation criteria, the one-place corollary, the
  square-class approximation lemma, and the full Hasse-Minkowski theorem.
- **Raskin** is the independent full treatment spanning the same local-formula,
  reciprocity, ternary, patching, and full rational local-global route.
- **Conrad** is recorded only for NT-18 B's Selmer cubic boundary item: the
  local solvability checks are included on the page, while the global algebraic
  proof is cited without importing later number-field machinery.

## 6. Coverage-harvest and convention notes

- The coverage file has **103 harvested headings/results** across the two A
  pages.
- Every harvest row carries a disposition.
- Every `included` or `inline` row names a scaffolded item id.
- Every `deferred` row names a real destination page id:
  `primitive-dirichlet-l-functions-and-functional-equations` or
  `classical-zero-free-region-and-the-prime-number-theorem`.

Important convention decisions visible in the harvest:

- Sutherland's period-first definition of a Dirichlet character
  (`Definition 18.5`) is recorded as `out-of-scope`, because NT-13 adopts the
  design's stricter modulus-first convention instead.
- Primitive, induced, and conductor material from Sutherland and Tomczak is
  read and enumerated, but consistently deferred to NT-14.
- Kedlaya's prime-number-theorem-in-progressions theorem is read and
  enumerated, but deferred to NT-16 exactly as the design requires.
- Conrad's Section 3 `Global solutions` for the Selmer cubic is attached to the
  B-page counterexample item, but the page notes explicitly that its algebraic
  proof is not imported before the later number-field pages exist.

## 7. Validator results

I ran the scaffold-stage checks on Friday, September 4, 2026.

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-8.pages.json','utf8')); console.log('pages-json: ok')"`
  -> `pages-json: ok`

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-8.coverage.json','utf8')); console.log('coverage-json: ok')"`
  -> `coverage-json: ok`

## Step-5 authoring

On Friday, September 4, 2026, I authored all four batch-8 draft pages directly
under `library/number-theory/`:

- `dirichlet-characters-l-functions-and-primes-in-progressions`
- `dirichlet-characters-l-functions-and-primes-in-progressions-examples`
- `hilbert-symbols-and-the-quadratic-local-global-principle`
- `hilbert-symbols-and-the-quadratic-local-global-principle-examples`

I also authored every planned batch-8 item under its scaffold id:

- NT-13 A page: all `24/24` planned ids from `def-dirichlet-character-modulo-q`
  through `thm-dirichlet-primes-arithmetic-progressions`
- NT-13 B page: all `8/8` planned ids from
  `ex-dirichlet-characters-modulo-three-four-and-five` through
  `cex-dirichlet-density-does-not-mean-integer-natural-density`
- NT-18 A page: all `17/17` planned ids from `def-rational-local-fields`
  through `thm-hasse-minkowski-over-the-rationals`
- NT-18 B page: all `9/9` planned ids from `ex-hilbert-symbol-over-the-reals`
  through `cex-rational-isotropy-is-not-integral-representation`

I wrote the batch proof-contract report at
`research/frontier-30-batch-8.proof-contracts.json` and regenerated its
citation/derivation entries from the final on-disk item text. Strict contract
check on that batch artifact passes on current bytes.

Provenance and dependency rationale:

- Every authored page and item remains `status: draft`.
- Core theorem/definition items are tagged `literature-derived` for statements,
  with proofs `ai-generated` where the local proof text is newly written here.
- Worked examples and counterexamples are tagged `ai-altered` or
  `literature-derived`, not `ai-generated`, whenever another in-batch item
  depends on them or the example is explicitly source-backed.
- I added truthful supplier deps in item frontmatter where the written proof
  actually needs an already-published result beyond the scaffold summary. The
  material case is `thm-principal-dirichlet-l-factorization`, whose authored
  residue-at-one proof cites `thm-riemann-zeta-meromorphic-continuation`.
- For NT-18, I kept the designed route explicit: real / odd-`p` / `2`-adic
  Hilbert formulas first, then reciprocity, then ternary local-global, then the
  square-class approximation lemma and the full rational Hasse-Minkowski
  statement.

Narrowed or dropped claims:

- None. All `58` planned batch-8 items were authored at their planned ids.
- No page split, re-home, or scope drop was introduced at Step 5.

Boundary/source note and blockers:

- The Selmer-cubic counterexample item keeps the notes' intended boundary: the
  bad-place local computations written on page are explicit, while the full
  all-primes local-solubility statement and the global insolubility argument are
  source-backed to Conrad and are stated as such in the item text. I did not
  import later algebraic-number-theory machinery into NT-18 B.
- No validator blocker remains for the dispatched Step-5 gates.

Checks run on the authored batch files:

- `node tools/tsx-run.mjs tools/precheck.mts <all 58 batch-8 item files>`
  - pass: `52 checked, 0 failing — all clean`
  - note: definition items are naturally skipped by `precheck`; every
    proof-bearing batch-8 item passed
- `node tools/proof-contract.mjs research/frontier-30-batch-8.proof-contracts.json --strict`
  - pass: `0 error(s), 0 warning(s), 52/52 item(s) checked`
- batch-8 spliced plan:
  - `node -e '...write /tmp/frontier-30-batch-8-spliced-plan.json...'`
  - `node tools/validate-plan.mjs /tmp/frontier-30-batch-8-spliced-plan.json`
  - pass: final line `OK`
- `node tools/content-policy.mjs research/frontier-30-batch-8.pages.json`
  - pass: `58 scoped item(s), 0 error(s), 0 warning(s)`

I did not run repository-wide `depcheck` or `rendercheck` in this Step-5 pass,
so I do not claim those wider gates passed.

- `node tools/coverage-checklist.mjs research/frontier-30-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 103 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-8.coverage.json`
  -> `source-fetch-check: 8/8 source(s) fetch-verified`

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 243 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> final status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

- scratch splice check:
  `node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-30-batch-8.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-30-batch-8-spliced-plan.json", JSON.stringify(plan, null, 2) + "\\n"); console.log("spliced-plan: ok")'`
  -> `spliced-plan: ok`

- `node tools/validate-plan.mjs /tmp/frontier-30-batch-8-spliced-plan.json`
  -> final status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 702 page(s) with item lists.`

## 8. URL liveness blocker

The only non-green required check on this runner was the local liveness sweep:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-8.coverage.json --out /tmp/frontier-30-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/8 live; 8 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-8-url-liveness.json`

The failure mode was uniform DNS resolution failure on this local runner:

- `Could not resolve host: dms.umontreal.ca`
- `Could not resolve host: kskedlaya.org`
- `Could not resolve host: math.berkeley.edu`
- `Could not resolve host: math.mit.edu`
- `Could not resolve host: ocw.mit.edu`
- `Could not resolve host: www.samraskin.net`

This did **not** look like eight independent dead-source defects. All eight URLs
had already been re-opened successfully in the web reader during this session,
and the coverage file records manual `fetch_verified` receipts for that reason.
The blocker is therefore environmental on the current shell runner, not a
mathematical omission or a source-specific 404 that this batch can repair from
disk.

I did not replace the sources merely to satisfy a local DNS failure, because
that would be dishonest re-sourcing. The exact blocker remains:

- the scaffold, coverage, fetch-verification receipts, whole-run manifest
  policy, and both plan validations are clean
- the required local `url-sweep` still fails on uniform host-resolution errors
  outside these owned artifacts

If a later environment with working DNS reruns `url-sweep` over the same
coverage file, that should adjudicate liveness without changing this scaffold.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-f-step3-scaffold-review.md` and
`research/frontier-30-alpha-f-step3-verdicts.json` on Saturday, September 5,
2026 (Australia/Sydney local time).

- Finding ids for batch `8`: none recorded.
- Disposition: explicit no-op. The group-`f` review marks
  `dirichlet-characters-l-functions-and-primes-in-progressions` and
  `hilbert-symbols-and-the-quadratic-local-global-principle` as `sufficient`,
  and the verdict file records both batch-8 A pages as `sufficient`. The only
  numbered findings in that stable review are `B19-1` and `B19-2`, both for
  batch `19`, so they are out of scope for this dispatch.
- Evidence: I re-checked the NT-13 and NT-18 design blocks in
  `research/plan-number-theory-track.md` against the live batch-8 manifest and
  `research/plan-spec.json`; the existing drift note remains accurate, the
  page routes still match the design, and no new batch-local closure or split
  defect appears on current bytes.
- Evidence: I re-opened all eight recorded source URLs in the web reader on
  Saturday, September 5, 2026: Kedlaya Chapters `3` and `4`, the MIT OCW full
  notes PDF for Sutherland Lecture `18`, Tomczak Chapter `4`, Sutherland
  Lectures `10` and `11`, Raskin's quadratic-forms notes, and Conrad's
  `Selmer's Example`. All eight live documents still match the recorded
  locators and harvested headings in
  `research/frontier-30-batch-8.coverage.json`, so no URL recovery, harvest
  rewrite, or disposition change was required.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-30-batch-8.coverage.json --require-destination`
  returned `coverage-checklist: 2 page(s), 103 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-8.coverage.json`
  returned `source-fetch-check: 8/8 source(s) fetch-verified`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json` exited `0`
  and ended with `OK`; only the repository's standing out-of-batch
  `[redundant-prereq]` advisories remain.
- Evidence: after splicing `research/frontier-30-batch-8.pages.json` into a
  temporary copy of `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-8-spliced-plan.json`
  exited `0` and ended with `OK`, with no batch-8 order, dependency, forward,
  or unresolved-id failure.
- Changed scaffold record: no change to `research/frontier-30-batch-8.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-8.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-8.notes.md`.
