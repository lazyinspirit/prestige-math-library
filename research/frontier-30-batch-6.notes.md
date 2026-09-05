# frontier-30 · Beta · batch-6 notes — `fejer-and-poisson-summability-of-fourier-series`

Run `frontier-30`, batch `6`, one A/B pair, category `fourier-analysis`.
Author: Beta. Session date: Saturday, September 5, 2026 AEST.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-30-batch-6.pages.json`
- `research/frontier-30-batch-6.coverage.json`
- this file

Per the batch brief, I edited only those three scaffold artifacts.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-30-dispatch/beta-batch-6.prompt.md`, the generated task
`research/frontier-30-beta-6.task.md`, the seed manifest
`research/frontier-30-batch-6.pages.json`, the controlling Fourier-track design
in `research/plan-fourier-analysis-track.md`, the later ownership/amendment note
in `research/plan-realanalysis-completion-track.md`, the live plan entries in
`research/plan-spec.json`, the published prerequisite pages
`library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence.md`,
`library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples.md`,
`library/measure-theory/the-maximal-function-and-lebesgue-differentiation.md`,
and the published items reused directly by this scaffold.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that command reports **`frontier-23`** in stage `5-author`,
not `frontier-30`. Because workflow state is out of scope and the dispatch
explicitly assigns `frontier-30`, I edited only the three
`research/frontier-30-batch-6.*` scaffold artifacts and did not try to steer
`.autopilot/`.

## 2. Controlling design and design/spec drift

### Controlling design material

The controlling mathematics for this pair is the FR-2 block in
`research/plan-fourier-analysis-track.md` at lines `261-289`. That block fixes
the route, the reusable exact ids, the B-page leaf set, and the boundary
obligations.

The later mention in `research/plan-realanalysis-completion-track.md` at lines
`719-833` is still controlling for one narrower question: it records that the
real-analysis RC-14 Fourier pair was withdrawn because this exact FR-1/FR-2
scope already belongs to the `fourier-analysis` track. I treated that later
document as an ownership and anti-duplication amendment, not as a replacement
for the FR-2 mathematical route, because it does not restate or alter the FR-2
item design.

### Design/spec drift recorded, not adjudicated

There is no direct order-number conflict:

- the task and `research/plan-spec.json` both give `288.14006` for the A page
  and `288.14008` for the B page

There is one **granularity mismatch** in the prerequisite wording:

- the FR-2 prose design says `Requires: FR-1 and the measure-owned
  approximate-identity and Lebesgue differentiation pages`
- the executable spec names
  `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`
  and `the-maximal-function-and-lebesgue-differentiation`

I did **not** adjudicate that locally. I followed the spec exactly, and I note
why the scaffold still closes: the FR-1 A page already requires
`density-separability-and-convolution-in-lp`, so the executable closure still
contains both measure-theory suppliers the design prose intended.

I also recorded one source-label clarification for Step 5:

- in the Fourier-track source matrix, `L` means **Laugesen**, not Lebl; the
  design's cited `L chs. 2-3 and 7, pp. 15-26 and 43-46` matches
  `https://arxiv.org/pdf/0903.3845`, not `realanal2.pdf`

## 3. Scaffold shape and split check

The scaffold now has:

- `fejer-and-poisson-summability-of-fourier-series` (A): **11 items**
- `fejer-and-poisson-summability-of-fourier-series-examples` (B): **5 items**

The A page is below the `60`-item split threshold, so **no split is proposed**.

## 4. Route and dependency decisions

The scaffold follows the FR-2 design literally enough to preserve its route, but
it avoids importing abstractions the current library does not need as separate
items.

1. I kept the published FR-1 torus setup and did **not** mint a generic
   summability-kernel definition. The page only needs the concrete Fejer and
   Poisson kernels and the two summability methods they induce.
2. I preserved the transferred exact ids named in the track ownership note:
   `lem-fejer-kernel-is-a-positive-approximate-identity`,
   `thm-fejer-uniform-convergence-for-continuous-periodic-functions`, and
   `rem-gibbs-phenomenon`.
3. I separated the kernel facts from the convergence theorems exactly as the
   design asks: Fejer approximate identity first, then its `L^p`, continuous,
   and Lebesgue-point consequences; then the Poisson analogue; then the
   Cesaro-to-Abel comparison; then the jump-value and Gibbs material.
4. I kept the almost-everywhere story on the design's intended non-duplicative
   route. The page cites the published Lebesgue-point theorem for the a.e.
   conclusion and does **not** scaffold torus maximal-function operators,
   weak-type theorems, or maximal-domination lemmas as page items.
5. I kept the Gibbs theorem on the Dirichlet side of the subject. Its planned
   dependencies stay inside FR-1's published partial-sum and localization
   machinery, while the explicit square-wave and single-character computations
   stay on the B page as leaves.

## 5. Source set actually recorded

I recorded three verified source rows for the A page:

1. Richard S. Laugesen, *Harmonic Analysis Lecture Notes*:
   `https://arxiv.org/pdf/0903.3845`
2. Loukas Grafakos, *Classical Fourier Analysis*, 3rd ed.:
   `https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf`
3. Michael E. Taylor, *Fourier Analysis, Distributions, and
   Constant-Coefficient Linear PDE*:
   `https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf`

This satisfies the standing source rule:

- Laugesen is a full lecture-note treatment with a harvestable table of contents
  and direct Chapter 2/3/7 coverage of Fejer, Poisson, and a.e. summability
- Grafakos is the textbook treatment that gives the midpoint-value theorem, the
  Tauberian theorem, and the exact Gibbs overshoot constant
- Taylor is the supplementary monograph source the Fourier-track matrix already
  names for the Cesaro/Poisson presentation

What each source is doing:

- **Laugesen** supplies the clean torus approximate-identity route and the
  source-side maximal-function chapter I deliberately declined to duplicate.
- **Grafakos** is the main source for the jump-value Fejer theorem, the
  Cesaro-implies-Abel theorem, and the precise Gibbs overshoot statement.
- **Taylor** confirms the Cesaro-kernel formulas and the Poisson-integral
  presentation in a second independent notation package.

## 6. Convention and boundary obligations

The scaffold keeps the Fourier-track conventions and the FR-2 hard obligations
explicit.

- The page stays on `T = R / Z` with `e_k(x) = e^(2 pi i k x)`, translating
  Laugesen's and Taylor's `2 pi` torus conventions rather than silently mixing
  normalizations.
- `Fejer` means `(C,1)` only. I did not widen the page to higher-order Cesaro
  methods.
- The Fejer kernel starts at `N = 0`, and that boundary case is named in the
  planned example and in the approximate-identity lemma strategy.
- The Poisson parameter is `0 <= r < 1`, with the one-sided limit `r` up to
  `1`. The notes and the manifest both keep that asymmetry explicit.
- No general `L^infty` convergence claim is scaffolded. Uniform convergence is
  only for the continuous representative, exactly as the design requires.
- The Gibbs theorem is planned so that the limit at the jump itself is
  distinguished from the nearby overshoot attained at points approaching the
  jump.

## 7. Proof-obligation map and known limits

Substantive proof obligations the Step-5 author must actually discharge:

- prove the Fejer square formula, positivity, mass-one normalization, and the
  uniform off-zero tail estimate
- derive the Poisson closed form from the Fourier series and prove the same
  positive approximate-identity properties with the one-sided parameter limit
- prove the midpoint-value Fejer theorem directly from even positive kernels,
  not by handwaving from the continuous case
- separate the `L^p`, uniform, and Lebesgue-point convergence arguments rather
  than collapsing them into one undifferentiated theorem
- prove the Cesaro-to-Abel theorem by summation by parts with positive weights
  on the Cesaro means
- derive the Gibbs constant from the model jump profile and the sine integral,
  then show the piecewise-`C^1` remainder does not change that asymptotic

Known deliberate limits of the scaffold:

- no torus maximal-function page, weak-type theorem, or Poisson/Lebesgue
  maximal-operator comparison is built here
- no PDE Dirichlet-problem theorem for the disc is built here, even though the
  sources discuss the Poisson kernel that way
- the scalar-series counterexample on the B page remains a leaf illustrating
  nonreversibility, not a new Fourier-theoretic theorem

## 8. Fetch verification and local network limitation

Local source fetching from this runner is network-restricted, so I did not
obtain local byte stamps with `source-fetch-check --stamp`. Instead, I re-opened
every recorded source in the web reader and wrote manual receipts of the form

`fetch_verified: { at, kind, verified_via: "web-open", note }`

using the UTC timestamp `2026-09-04T14:39:54Z`. That keeps the scaffold-stage
fetch gate honest without fabricating local download hashes the runner could not
produce.

## 9. Validator results

Green after the scaffold edit:

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"` ->
  `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-6.coverage.json` ->
  `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-6.coverage.json` ->
  `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` ->
  `content-policy: 196 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-6.pages.json` ->
  `content-policy: 16 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` ->
  final line `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-6-merged-plan.json` after merging the batch-6 manifest into a temporary copy of `research/plan-spec.json` ->
  final line `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.`

`validate-plan` also prints the run's pre-existing whole-plan
`[redundant-prereq]` warnings from unrelated pages. They were warnings only,
and none was caused by the batch-6 scaffold.

Blocked locally:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-6.coverage.json --out /tmp/frontier-30-batch-6.url-sweep.json --recover --fail-on-dead` ->
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect`

Exact failure mode on this runner:

- `https://arxiv.org/pdf/0903.3845` -> `curl: (6) Could not resolve host: arxiv.org`
- `https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf` -> `curl: (6) Could not resolve host: mtaylor.web.unc.edu`
- `https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf` -> `curl: (6) Could not resolve host: www.math.stonybrook.edu`

This is a **local DNS/network blocker**, not evidence that the cited URLs are
dead: each source was re-opened successfully in the web reader during this
dispatch and the manual `fetch_verified` receipts in
`research/frontier-30-batch-6.coverage.json` accurately reflect that fetch
verification.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-c-step3-scaffold-review.md` on Saturday,
September 5, 2026.

- Finding ids for batch `6`: none recorded.
- Disposition: explicit no-op. I did not invent a repair because the FR-2
  page block is tagged `sufficient`, and the group-`c` review's `Local repair`
  section records a batch-`3` foreign-B-page dependency fix only, not a
  batch-`6` scaffold defect.
- Evidence: the review's
  `### fejer-and-poisson-summability-of-fourier-series` section states that the
  retained FR-2 route is coherent and complete for authoring and that the three
  recorded sources are fetch-verified.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-30-batch-6.coverage.json --require-destination`

## Step-5 authoring

Authored pages:

- `library/fourier-analysis/fejer-and-poisson-summability-of-fourier-series.md`
- `library/fourier-analysis/fejer-and-poisson-summability-of-fourier-series-examples.md`

Authored items on the A page:

- `def-cesaro-and-abel-means-of-a-fourier-series`
- `lem-fejer-kernel-is-a-positive-approximate-identity`
- `thm-fejer-convergence-in-lp`
- `thm-fejer-uniform-convergence-for-continuous-periodic-functions`
- `thm-fejer-means-converge-at-lebesgue-points`
- `lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity`
- `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points`
- `thm-cesaro-summability-implies-abel-summability`
- `thm-fejer-theorem-for-pointwise-midpoint-values`
- `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`
- `rem-gibbs-phenomenon`

Authored items on the B page:

- `ex-fejer-means-of-a-single-character`
- `ex-poisson-integral-of-a-single-character`
- `ex-fejer-summation-of-the-square-wave`
- `cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data`
- `cex-abel-summability-does-not-imply-ordinary-convergence`

Associated authoring artifact:

- `research/frontier-30-batch-6.proof-contracts.json`

Provenance rationale actually used:

- I kept the classical Fejer, Poisson, midpoint, Tauberian, and Gibbs statements as `literature-derived`, with `ai-altered` proofs where the on-disk argument adapts the sources to the library's period-one normalization and phase format.
- I marked only the single-character leaves and the discontinuous-data counterexample as `ai-generated`, with the required `generation.role` values, because those are non-load-bearing computations or witnesses newly minted for this page pair.
- The two `L^p` convergence theorems honestly inherit the current corpus route through the published real-line density theorem, so their Statements remain the classical ones but their written proofs carry the present Axiom-of-Countable-Choice cost on current bytes.
- The Gibbs item does not pretend the current corpus already owns a full local asymptotic reduction theorem: the written proof computes the model half-step profile directly and records the general piecewise-`C^1` reduction as the sourced Grafakos normalization transfer used in the proof.

Narrowed or dropped claims:

- None. I kept the planned ids and the planned statement granularity.

Blockers:

- None in batch scope after the authoring pass.

Focused validator/report results actually run during Step 5:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 14 proof-bearing batch items:
  initial failures were formatting-only `untagged-steps`; I applied the canonical single-line step repair and the checker's own layer-order renumbering where required; rerun finished `14 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-6.proof-contracts.json ...`:
  regenerated the contract citations and derivations from the final on-disk item text.
- `node tools/proof-contract.mjs research/frontier-30-batch-6.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 14/14 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-30-batch-6.pages.json`:
  `content-policy: 16 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  final status `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `git diff --check -- ...batch-6 files...`:
  clean for the files touched in this step.

Non-report exploratory commands I did not count as Step-5 success claims:

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-6.pages.json` fails by design after authoring because it is the future-batch mint gate, not the post-authoring item-scope check.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-6-merged-plan.json` double-declared the already-present batch-6 pages when I merged them into the live spec again; I therefore used the live `research/plan-spec.json` run above as the factual Step-5 plan validation result.
  returned `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: after splicing `research/frontier-30-batch-6.pages.json` into
  `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-6-spliced-plan.json`
  exited `0` and ended with `OK`; its printed `[redundant-prereq]` notices are
  repository-wide and outside batch `6`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-6.coverage.json`
  returned `source-fetch-check: 3/3 source(s) fetch-verified`.
- Evidence: I re-opened all `3` recorded source URLs in the web reader on
  Saturday, September 5, 2026: Laugesen's arXiv PDF, Grafakos's
  Stony Brook-hosted PDF, and Taylor's UNC-hosted PDF.
- Changed scaffold record: no change to `research/frontier-30-batch-6.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-6.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-6.notes.md`.
