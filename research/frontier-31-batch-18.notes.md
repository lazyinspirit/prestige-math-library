# Frontier 31, batch 18 — Gradient Like Vector Fields and Morse Trajectories

## Scope, plan check, and state

- This beta scaffold owns only `research/frontier-31-batch-18.pages.json`, this
  note, and `research/frontier-31-batch-18.coverage.json`.  It does not create
  published pages, item files, proof contracts, plan-spec changes, or workflow
  state.
- The design at `research/plan-differential-topology-track.md` lines 397–437
  and `research/plan-spec.json` agree: A is order 521, B is order 522, and the
  A prerequisite is `morse-functions-critical-values-and-genericity-examples`.
  The run drift report records no DT-3 design/spec conflict.
- The on-disk autopilot status currently names `frontier-23` as the live shell
  workflow rather than the dispatched `frontier-31`.  No `.autopilot/` state
  was changed; this task stays confined to the explicit frontier-31 batch
  artifacts.
- The A page has 20 planned items, so it is below the required 60-item split
  threshold.  Its B companion has the five examples prescribed by the design.
  All 25 manifest objects carry an explicit `deps` array.  No planned ID was
  found among the existing `items/` IDs before it was introduced.

## Item ledger and authoring contracts

The manifest is the operational item ledger.  The contracts below record the
exact intended claims, why each extra support item is present, and the proof
route to be recovered before authoring.

### A page

| Item | Exact claim / role | Direct planned dependencies |
| --- | --- | --- |
| `def-riemannian-gradient-of-a-smooth-function` | Defines `grad_g f` by `g(grad_g f,Y)=df(Y)` and records the smooth musical-dual construction.  This is added because the established Riemannian-metric page does not itself define a gradient. | metric/Hessian definition; real-valued differential; smooth vector field |
| `lem-riemannian-gradient-vanishes-exactly-at-critical-points` | `grad_g f(x)=0` iff `df_x=0`, hence iff `x` is critical. | preceding gradient definition; critical-point definition |
| `def-negative-gradient-trajectory-of-a-morse-function` | A maximal integral curve of `-grad_g f`; a full trajectory has domain `R`. | gradient definition; Morse-function definition; integral curve |
| `lem-negative-gradient-energy-identity` | Along such a curve, `(f∘γ)'=-||grad_g f||_g^2`, with no compactness assumption. | negative trajectory; gradient; differential chain rule |
| `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` | Every nonconstant negative-gradient trajectory has strictly decreasing `f`. | energy identity; zero/critical lemma; maximal-curve uniqueness |
| `def-downward-gradient-like-vector-field` | Requires strict descent away from Crit(f) and the exact negative linear Morse-coordinate model near Crit(f). | Morse-function definition; smooth vector field |
| `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` | Patches prescribed local models to a downward gradient-like field, then invokes compact completeness. | gradient-like definition; Morse function; finite critical set; compact vector-field completeness |
| `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | A precompact positive/negative tail of a full trajectory has a nonempty compact connected invariant limit set.  This is separated so compactness is not hidden in the endpoint lemma. | negative trajectory; compactness; flow theorem |
| `lem-a-limit-point-of-a-gradient-trajectory-is-critical` | Every point in either precompact tail limit set is critical. | tail-limit lemma; energy identity; zero/critical lemma |
| `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` | On a compact Morse manifold, each full negative trajectory has one critical `α` and one critical `ω` limit. | tail-limit lemma; critical-limit lemma; compact completeness; finite critical set |
| `def-morse-trajectory-from-p-to-q` | A nonconstant complete trajectory with `α=p`, `ω=q`; compactness supplies endpoints only in the compact application. | negative trajectory; compact endpoint lemma |
| `lem-morse-trajectories-have-positive-energy-drop` | For a trajectory `p→q`, `f(p)-f(q)=∫||grad_g f||²dt>0`. | Morse-trajectory definition; energy identity; strict descent |
| `def-stable-and-unstable-sets-of-a-critical-point` | For the complete descending flow, `W^s` means forward convergence and `W^u` backward convergence. | downward gradient-like field; global flow |
| `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` | The local `W^u` and `W^s` disks have dimensions `index(p)` and `n-index(p)`, tangent to the negative and positive Hessian directions. | gradient-like definition; stable/unstable definition; index definition |
| `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` | Complete-flow exhaustion of the local disks gives global immersed copies of `R^index(p)` and `R^(n-index(p))`; no embedded conclusion. | local theorem; stable/unstable definition; flow theorem |
| `lem-stable-and-unstable-manifolds-are-flow-invariant` | Both sets are invariant under every fixed flow time. | stable/unstable definition; flow theorem |
| `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` | Strict descent excludes periodicity and recurrence except for constant critical orbits. | strict descent |
| `def-proper-smooth-function-and-compact-morse-slab` | Defines properness by compact inverse images and names compact slabs `f^{-1}([a,b])`.  This is added to avoid an unestablished properness convention. | compact-space; continuous-map definitions |
| `prop-proper-morse-slabs-give-complete-connecting-trajectories` | A maximal negative-gradient curve whose image is trapped in a compact slab cannot end at finite time; the energy identity verifies the trap when prescribed endpoint levels bound the curve. This is a conditional nonescape result, not global noncompact completeness. | proper-slab definition; negative trajectory; energy identity; maximal-curve and local-ODE theorems |
| `rem-noncompact-flow-completeness-is-an-extra-hypothesis` | States the exact noncompact limitation and points to the B-page escape example. | proper-slab proposition; complete-vector-field definition |

### B page

All B dependencies are intentionally `[]`: the companion page is sequenced
after A at page level, while each worked calculation is authored as a
self-contained witness rather than as a new premise for an A claim.

| Item | Exact claim / convention |
| --- | --- |
| `ex-negative-gradient-lines-for-a-quadratic-morse-function` | Solves `u˙=2u`, `v˙=-2v` for `f(u,v)=-|u|^2+|v|^2` and reads off stable/unstable coordinate disks. |
| `ex-meridian-trajectories-for-height-on-the-sphere` | Uses the round-sphere height flow.  The meridians are a one-parameter family before the later time-translation quotient, not a claimed Morse–Smale fact. |
| `ex-gradient-flow-on-the-torus-morse-function` | Uses `f(θ,φ)=cos θ+cos φ` with the flat metric, four critical points, coordinate separatrices, and the remaining maximum-to-minimum family. |
| `cex-positive-gradient-reverses-stable-and-unstable-dimensions` | Reverses the quadratic model’s time direction to make the sign-convention failure visible. |
| `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` | Uses `f(x)=-x^3/3` on `R`, for which `-grad f=x^2∂_x` blows up in finite positive time.  It witnesses incompleteness only and is not a Morse example. |

## Conventions and proof closure

- The single descending convention is `γ˙=-grad_g f`.  For a downward
  gradient-like field `X`, its descending flow is the flow of `X` itself;
  `X=2u∂_u-2v∂_v` in `f=f(p)-|u|^2+|v|^2` coordinates.  Thus `W^u` is the
  backward-limit set and has Morse-index dimension, while `W^s` is the
  forward-limit set and has complementary dimension.
- Compactness is never treated as one opaque hypothesis: it establishes
  completeness, nonempty compact tail limit sets, and finiteness of the
  isolated critical set.  Connectedness of the tail limit set plus this finite
  discrete target gives a single endpoint.
- The local stable theorem uses the exact standard linear model.  The global
  Euclidean theorem must then use an exhaustion by flow images of the local
  disk; it must not assert embeddedness.
- The noncompact proposition has a deliberately narrow route: it assumes the
  maximal curve is trapped in a compact slab, and the maximal-integral-curve
  continuation argument rules out a finite endpoint.  Energy bounds a curve
  between prescribed endpoint levels when that is how the trapping hypothesis
  is established.  The companion counterexample prevents turning this into an
  unconditional completeness theorem.
- The proper-slab proposition is a library-specific packaging of the compact
  continuation argument.  Cohen’s Theorem 13.2 supplies the compact
  completeness model, while the needed local ODE/maximal-curve machinery is
  already published; authoring must label the resulting statement accurately
  rather than attribute its exact wording verbatim to either text.

## Source harvest and support

The coverage artifact contains the complete heading/result disposition for
the exact ranges read.  Both are independent full textbook treatments with a
harvestable table of contents, and both direct URLs were selected as the
backing source treatments for this A page.

1. Liviu I. Nicolaescu, *An Invitation to Morse Theory*, second edition —
   <https://www3.nd.edu/~lnicolae/Morse2nd.pdf>.  The table of contents on
   printed p. iii / PDF p. 2 locates §2.4.  The complete read range is §2.4,
   printed pp. 53–61 / PDF pp. 62–70.  It directly supports the compact
   endpoint lemma, stable/unstable definitions, local cross-section, and
   global Euclidean stable/unstable conclusion.  Its subsequent
   Morse–Smale/transversality and self-indexing/rearrangement results have
   concrete DT-4 and DT-6 dispositions in coverage.
2. Ralph L. Cohen, *Bundles, Manifolds, and Homotopy* —
   <https://math.stanford.edu/~ralph/bookR4.pdf>.  The full book table of
   contents identifies Chapter 13; the complete read range is §13.1, printed
   pp. 497–503 / PDF pp. 506–513, and §13.2, printed pp. 504–512 / PDF
   pp. 514–523, ending at the §13.3 heading.  Lemma 13.1 supports the energy
   identity, Theorem 13.2 the compact global-flow/endpoint route, Definitions
   13.2–13.3 and Proposition 13.6 the adapted local model route, and Theorems
   13.4/13.7 plus Proposition 13.8 the stable/unstable conclusions.  Its
   gradient, sphere, and torus examples back the three named B witnesses.

## Validation ledger

- Manifest JSON parses; it contains 20 A and 5 B items and every item has an
  explicit `deps` array.
- ID collision scan against the current `items/` directory found no existing
  item with any of the 25 proposed IDs.
- `node tools/coverage-checklist.mjs research/frontier-31-batch-18.coverage.json`
  — PASS: 1 page, 44 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-18.coverage.json --stamp --timeout-sec 90`
  — the local byte-stamping attempt failed before HTTP for both URLs with
  `EAI_AGAIN`.  Both exact URLs were nevertheless opened as full PDFs in the
  web reader and carry accurate `web-open` receipts (291 and 568 pages); no
  bytes/hash receipt has been fabricated.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-18.coverage.json`
  — PASS: 2/2 source receipts present.
- `node tools/manifest-deps.mjs research/frontier-31-batch-18.pages.json`
  — PASS: 25 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-18.pages.json`
  — PASS: 25 scoped items, 0 errors, 0 warnings.
- `node tools/splice-plan.mjs --run frontier-31 --batch 18 --dry-run`
  — PASS: 2 pages spliced in memory, 25 items, 0 already-correct conflicts.
  This confirms the manifest would merge without changing the plan structure.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-*.pages.json`
  — FAILS outside this batch with six missing dependencies in other
  frontier-31 manifests: their group-homology/cohomology items cite
  `def-group-homology-as-a-derived-functor`,
  `def-group-cohomology-as-a-derived-functor`, or
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` without a
  current on-disk or manifest supplier.  No batch-18 item is named in those
  errors, and this beta has no authority to change the other manifests.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS (exit 0): the
  unchanged plan has acyclic declared page order and no resolved-item
  dependency errors.  It necessarily validates the unsplit plan rather than
  the unspliced batch-18 items.
- `node tools/url-sweep.mjs --coverage research/frontier-31-batch-18.coverage.json --out /tmp/frontier-31-batch-18.url-liveness.json --recover --fail-on-dead --timeout-ms 3000`
  — local curl reported 0/2 live and no archive recovery because it could not
  resolve either host.  This is a resolver failure, not evidence that either
  reader-facing URL is dead: both exact URLs were fetched and read through the
  web reader in this dispatch.  I therefore did not replace a verified text or
  write a misleading archive `original_url` record.  The temporary receipt is
  `/tmp/frontier-31-batch-18.url-liveness.json`.
- Remaining batch-local authoring obligation: before a step-5 proof, reread
  the stated source passages and existing dependency statements.  In
  particular verify the ODE continuation formulation used by the proper-slab
  proposition and preserve the local-versus-global stable-manifold split.
- Pending authoring obligation: before a step-5 proof, reread the stated
  source passages and existing dependency statements.  In particular verify
  the ODE continuation formulation used by the proper-slab proposition and
  preserve the local-versus-global stable-manifold split.
