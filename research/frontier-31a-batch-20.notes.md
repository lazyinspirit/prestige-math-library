# Frontier 31a, batch 20 — Gradient Like Vector Fields and Morse Trajectories

## Scope and current state

- Authorized artifacts are this note, `research/frontier-31a-batch-20.pages.json`,
  and `research/frontier-31a-batch-20.coverage.json`.  No item, library
  page, plan, workflow-state, or published artifact was changed.
- The design is DT-3 at
  `research/plan-differential-topology-track.md:397-435`.  It and
  `research/plan-spec.json` agree: the A/B pages are orders 521/522, and A
  requires `morse-functions-critical-values-and-genericity-examples`.
  The current drift adjudication says no-drift.  No design/spec choice was
  made inside this batch.
- The read-only autopilot status resolves the repository's live state as
  `frontier-23`, not this dispatched `frontier-31a` batch. No workflow
  control file or state artifact was touched; this scaffold remains confined
  to its explicit batch artifacts.
- The A manifest has 20 items, below the 60-item split threshold; the five B
  witnesses remain on the companion page.  The extra four A items are
  dependency closure, not padding: metric gradient, precompact tail-limit
  sets, and compact-slab/noncompact-completeness interfaces are all needed by
  the planned arguments.  All 25 objects explicitly carry `deps`.
- A scan of `items/` found none of the 25 proposed ids.  The manifest's
  external dependencies resolve to established items, while its other
  dependencies are supplied earlier in this same A manifest.

## Conventions and proof boundary

- A negative-gradient trajectory always means
  `dot gamma = -grad_g f`.  For a downward gradient-like field `X`, its
  descending flow is the flow of `X`, and in Morse coordinates
  `f=f(p)-|u|^2+|v|^2` the required local model is
  `X=2u partial_u-2v partial_v`.  Thus `W^u` is the backward-limit set
  of index dimension and `W^s` is the forward-limit set of complementary
  dimension.
- Compactness has three separate jobs: completeness of a smooth vector
  field; existence/compactness of tail limit sets; and finiteness of the
  Morse critical set.  The endpoint theorem must use all three and must not
  be generalized to an arbitrary noncompact manifold.
- The local stable-manifold theorem is only the standard-coordinate local
  disk calculation.  The global Euclidean conclusion is obtained by flow
  exhaustion and is an immersed-submanifold conclusion; it does not assert
  embeddedness.
- The compact-slab proposition is only the ODE continuation statement for a
  maximal trajectory whose image is trapped in a compact slab.  It must not
  be written as global noncompact completeness.  The B counterexample is
  `f(x)=-x^3/3`, so `-grad f=x^2 partial_x` has finite positive-time
  escape; it witnesses incompleteness, not a noncompact Morse example.
- Morse--Smale transversality, quotient moduli spaces, self-indexing, and
  critical-value rearrangement are deferred to their planned later pages.
  In particular, no statement here assumes transverse stable/unstable
  intersections.

## Authoring ledger

The manifest records the literal direct dependency arrays and fuller proof
strategies.  This ledger records the exact claim each id will carry and the
proof route to reread before step 5.

### Direct dependency ledger

The following is the manifest's direct-edge ledger, copied here so a resumed
authoring pass can inspect the exact planned closure without inferring it from
the prose tables.

| Item | Direct `deps` |
| --- | --- |
| `def-riemannian-gradient-of-a-smooth-function` | `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`, `def-differential-of-a-smooth-real-valued-function`, `def-smooth-vector-field-as-a-tangent-bundle-section` |
| `lem-riemannian-gradient-vanishes-exactly-at-critical-points` | `def-riemannian-gradient-of-a-smooth-function`, `def-critical-point-and-critical-value-of-a-smooth-function` |
| `def-negative-gradient-trajectory-of-a-morse-function` | `def-riemannian-gradient-of-a-smooth-function`, `def-morse-function-and-excellent-morse-function`, `def-integral-curve-of-a-vector-field` |
| `lem-negative-gradient-energy-identity` | `def-negative-gradient-trajectory-of-a-morse-function`, `def-riemannian-gradient-of-a-smooth-function`, `thm-chain-rule-for-differentials-of-smooth-maps` |
| `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` | `lem-negative-gradient-energy-identity`, `lem-riemannian-gradient-vanishes-exactly-at-critical-points`, `thm-unique-maximal-integral-curve-through-each-point` |
| `def-downward-gradient-like-vector-field` | `def-morse-function-and-excellent-morse-function`, `def-smooth-vector-field-as-a-tangent-bundle-section` |
| `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` | `def-downward-gradient-like-vector-field`, `def-morse-function-and-excellent-morse-function`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`, `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` |
| `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | `def-negative-gradient-trajectory-of-a-morse-function`, `def-compact-space`, `thm-fundamental-theorem-on-flows` |
| `lem-a-limit-point-of-a-gradient-trajectory-is-critical` | `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`, `lem-negative-gradient-energy-identity`, `lem-riemannian-gradient-vanishes-exactly-at-critical-points` |
| `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` | `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`, `lem-a-limit-point-of-a-gradient-trajectory-is-critical`, `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` |
| `def-morse-trajectory-from-p-to-q` | `def-negative-gradient-trajectory-of-a-morse-function`, `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` |
| `lem-morse-trajectories-have-positive-energy-drop` | `def-morse-trajectory-from-p-to-q`, `lem-negative-gradient-energy-identity`, `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` |
| `def-stable-and-unstable-sets-of-a-critical-point` | `def-downward-gradient-like-vector-field`, `def-local-and-global-flow` |
| `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` | `def-downward-gradient-like-vector-field`, `def-stable-and-unstable-sets-of-a-critical-point`, `def-nondegenerate-critical-point-nullity-index-and-coindex` |
| `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` | `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point`, `def-stable-and-unstable-sets-of-a-critical-point`, `thm-fundamental-theorem-on-flows` |
| `lem-stable-and-unstable-manifolds-are-flow-invariant` | `def-stable-and-unstable-sets-of-a-critical-point`, `thm-fundamental-theorem-on-flows` |
| `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` | `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` |
| `def-proper-smooth-function-and-compact-morse-slab` | `def-compact-space`, `def-continuous-map-top` |
| `prop-proper-morse-slabs-give-complete-connecting-trajectories` | `def-proper-smooth-function-and-compact-morse-slab`, `def-negative-gradient-trajectory-of-a-morse-function`, `lem-negative-gradient-energy-identity`, `thm-unique-maximal-integral-curve-through-each-point`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` |
| `rem-noncompact-flow-completeness-is-an-extra-hypothesis` | `prop-proper-morse-slabs-give-complete-connecting-trajectories`, `def-complete-vector-field` |
| `ex-negative-gradient-lines-for-a-quadratic-morse-function` | `[]` |
| `ex-meridian-trajectories-for-height-on-the-sphere` | `[]` |
| `ex-gradient-flow-on-the-torus-morse-function` | `[]` |
| `cex-positive-gradient-reverses-stable-and-unstable-dimensions` | `[]` |
| `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` | `[]` |

### A page

| Item | Claim and proposed proof route |
| --- | --- |
| `def-riemannian-gradient-of-a-smooth-function` | Define `grad_g f` as the unique smooth metric dual of `df`; use the musical isomorphism in a local frame. |
| `lem-riemannian-gradient-vanishes-exactly-at-critical-points` | Positive definiteness gives `grad_g f=0 iff df=0`; this is the bridge from energy to criticality. |
| `def-negative-gradient-trajectory-of-a-morse-function` | Define a maximal integral curve of `-grad_g f`; reserve “full” for domain `R`. |
| `lem-negative-gradient-energy-identity` | Differentiate `f circ gamma` and insert the trajectory equation to obtain `(f circ gamma)'=-||grad_g f||_g^2`, with no completeness assumption. |
| `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function` | Combine the identity, gradient/critical equivalence, and integral-curve uniqueness: meeting a critical point makes the curve constant. |
| `def-downward-gradient-like-vector-field` | Require strict descent off `Crit(f)` plus the exact negative linear Morse-coordinate model, not merely an arbitrary descending field. |
| `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold` | Patch the prescribed local models using disjoint critical neighborhoods and cutoffs; compactness supplies completeness. |
| `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | Use nested compact tail closures for nonemptiness/connectedness and flow continuity for invariance. |
| `lem-a-limit-point-of-a-gradient-trajectory-is-critical` | On an invariant limit set `f` is constant; a noncritical short orbit segment would strictly lower it, contrary to invariance. |
| `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits` | Complete compact flow plus the preceding lemma puts each connected tail limit set in the finite discrete critical set, hence makes it one point. |
| `def-morse-trajectory-from-p-to-q` | Define a nonconstant complete line with `alpha=p` and `omega=q`; compactness gives endpoints only in the compact application. |
| `lem-morse-trajectories-have-positive-energy-drop` | Integrate the energy identity from `-T` to `T` and pass to endpoints to obtain `f(p)-f(q)=integral ||grad_g f||^2>0`. |
| `def-stable-and-unstable-sets-of-a-critical-point` | For the complete descending flow, define `W^s` by forward and `W^u` by backward convergence. |
| `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point` | In the exact linear local model, the unstable disk is `v=0` of index dimension and the stable disk is `u=0` of coindex dimension; identify Hessian tangent directions. |
| `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces` | Exhaust global sets by images of the local disks under the complete flow; retain “immersed” only. |
| `lem-stable-and-unstable-manifolds-are-flow-invariant` | Apply the flow group law to the defining limiting condition for every fixed time. |
| `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits` | Strict descent contradicts a periodic return and, by continuity, any recurrent return sequence. |
| `def-proper-smooth-function-and-compact-morse-slab` | Define properness by compact inverse images and name the compact slab `f^{-1}([a,b])`. |
| `prop-proper-morse-slabs-give-complete-connecting-trajectories` | Apply maximal-integral-curve continuation to a trajectory trapped in a compact slab; use energy only to verify trapping when endpoint levels provide it. |
| `rem-noncompact-flow-completeness-is-an-extra-hypothesis` | State the noncompact limitation and direct the reader to the companion escape calculation. |

### B page

Each B item deliberately has `deps: []`: its page is sequenced after A, but
the calculation itself is a self-contained witness rather than a new premise
for A.

| Item | Claim and verification route |
| --- | --- |
| `ex-negative-gradient-lines-for-a-quadratic-morse-function` | Solve `dot u=2u, dot v=-2v` for `f=-|u|^2+|v|^2` and read off stable/unstable coordinate disks and energy descent. |
| `ex-meridian-trajectories-for-height-on-the-sphere` | Compute the round-sphere height descent and identify the meridians from north to south as a one-parameter pre-quotient family. |
| `ex-gradient-flow-on-the-torus-morse-function` | Use `cos theta+cos phi` on the flat torus; list four critical points/indices, coordinate separatrices, and the maximum-to-minimum family. |
| `cex-positive-gradient-reverses-stable-and-unstable-dimensions` | Reverse the quadratic flow to show exactly how the positive sign interchanges forward/backward coordinate spaces. |
| `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold` | Solve `dot x=x^2`: `x(t)=x_0/(1-x_0t)` blows up for `x_0>0`. |

## Sources and harvest

Both independent treatments are textbooks with harvestable contents and were
opened as full PDFs during this dispatch.  The complete per-heading
dispositions are in the coverage artifact.

1. Liviu I. Nicolaescu, *An Invitation to Morse Theory*, 2nd ed.,
   <https://www3.nd.edu/~lnicolae/Morse2nd.pdf>.  Read table of contents
   (printed p. iii / PDF p. 2) and all of §2.4 “Morse--Smale Dynamics”
   (printed pp. 53--61 / PDF pp. 62--70).  It supports the descending
   gradient-like convention, compact alpha/omega endpoints, stable/unstable
   definitions, and global Euclidean conclusion.  Its local sphere result is
   absorbed into the local theorem.  The harvest gives result-specific
   deferrals for transverse perturbation, Morse--Smale, self-indexing, and
   rearrangement results.
2. Ralph L. Cohen, *Bundles, Manifolds, and Homotopy*,
   <https://math.stanford.edu/~ralph/bookR4.pdf>.  Read the Chapter 13 table
   of contents and §13.1 “The gradient flow equation” (printed pp. 497--503
   / PDF pp. 506--513) plus §13.2 “Stable and unstable manifolds” (printed
   pp. 504--512 / PDF pp. 514--523), stopping at the §13.3 heading.  Lemma
   13.1 supplies the energy calculation; Theorem 13.2 the compact endpoint
   route; Definitions 13.2--13.3, Proposition 13.6, Theorems 13.4/13.7,
   Proposition 13.8, and Theorem 13.9 support the stable/unstable and local
   model route.  Its sphere and torus examples support the B witnesses.

The direct terminal fetcher cannot resolve external DNS (`EAI_AGAIN`), but
the exact URLs were fetch-opened as the full 291-page and 568-page PDFs in
the web reader; the coverage receipts say this explicitly.  No byte hash is
claimed.  The forced local fetch attempt and the ordinary receipt gate are
recorded separately below.

## Validation and next action

- `node tools/manifest-deps.mjs research/frontier-31a-batch-20.pages.json`:
  PASS — 25 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-20.pages.json`:
  PASS — 25 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-20.coverage.json`:
  PASS — 1 A page, 44 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-20.coverage.json`:
  PASS — 2/2 web-open full-text receipts present.  A forced local
  `--stamp --force` retry failed for both URLs only with DNS
  `EAI_AGAIN`; it did not invalidate the directly opened and reread texts.
- `node tools/splice-plan.mjs --run frontier-31a --batch 20 --dry-run`:
  PASS — 2 pages, 25 items, no already-correct conflict.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS — the plan
  is acyclic and consistent.  Its verbose output is repository-wide and does
  not replace the batch-local dependency validator.

Before authoring, reread the stated source passages and the exact published
ODE-continuation/flow prerequisites; preserve the local/global
stable-manifold distinction and the compactness qualifications above.

## Step-3 fix pass

The stable group-`g` review at
`research/frontier-31a-alpha-g-step3-scaffold-review.md` issues **no finding
id for batch 20**: its verdict is `sufficient`, and its batch-20 review says
that there are no missing results, source gaps, backward prerequisites, or
pair-scope defects requiring a scaffold repair.  Accordingly, there is no
finding identifier to renumber, apply, or push back on.

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| none issued for batch 20 | Stands; no repair applicable | The review rechecks the 20-item A page and five-item B page against DT-3 and records the negative-gradient sign, distinct compactness roles, local-to-immersed-global stable/unstable route, and compact-slab limitation as already present.  I reread the recorded live full-PDF ranges: Nicolaescu, §2.4, printed pp. 53–61 / PDF pp. 62–70, and Cohen, §§13.1–13.2, printed pp. 497–512 / PDF pp. 506–523.  Nicolaescu explicitly fixes the descending flow of `-ξ`, gives critical endpoints, and gives the index/coindex stable/unstable conclusion; Cohen gives the energy identity, compact full-flow/endpoint argument, and the local coordinate and global stable/unstable constructions.  These are the present harvest's mapped source claims, not a replacement source. | none — `research/frontier-31a-batch-20.pages.json` and `research/frontier-31a-batch-20.coverage.json` remain unchanged. |

Post-review checks:

- `node tools/manifest-deps.mjs research/frontier-31a-batch-20.pages.json`:
  PASS — 25 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-20.coverage.json --require-destination`:
  PASS — 1 page, 44 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json`:
  PASS — whole run: 902 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  PASS — declared order is acyclic and consistent, with no item-level cycles,
  forward references, B-page dependencies, or unresolved IDs among the
  itemized plan pages.

Next action: ordinary Step-3 closure only; author against the unchanged
dependency-closed manifest and its existing verified coverage harvest.

## Step-5 authoring

- Authored the two draft pages
  `library/differential-topology/gradient-like-vector-fields-and-morse-trajectories.md`
  and
  `library/differential-topology/gradient-like-vector-fields-and-morse-trajectories-examples.md`.
  The A page contains the 20 manifest items:
  `def-riemannian-gradient-of-a-smooth-function`,
  `lem-riemannian-gradient-vanishes-exactly-at-critical-points`,
  `def-negative-gradient-trajectory-of-a-morse-function`,
  `lem-negative-gradient-energy-identity`,
  `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function`,
  `def-downward-gradient-like-vector-field`,
  `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold`,
  `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`,
  `lem-a-limit-point-of-a-gradient-trajectory-is-critical`,
  `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits`,
  `def-morse-trajectory-from-p-to-q`,
  `lem-morse-trajectories-have-positive-energy-drop`,
  `def-stable-and-unstable-sets-of-a-critical-point`,
  `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point`,
  `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces`,
  `lem-stable-and-unstable-manifolds-are-flow-invariant`,
  `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits`,
  `def-proper-smooth-function-and-compact-morse-slab`,
  `prop-proper-morse-slabs-give-complete-connecting-trajectories`, and
  `rem-noncompact-flow-completeness-is-an-extra-hypothesis`.
  The B page contains
  `ex-negative-gradient-lines-for-a-quadratic-morse-function`,
  `ex-meridian-trajectories-for-height-on-the-sphere`,
  `ex-gradient-flow-on-the-torus-morse-function`,
  `cex-positive-gradient-reverses-stable-and-unstable-dimensions`, and
  `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold`.
- Every authored item and page is `status: draft`. Statements and proofs are
  marked `literature-derived`, with direct sources to the already-harvested
  Nicolaescu §2.4 and Cohen §§13.1--13.2 ranges. The proof contract at
  `research/frontier-31a-batch-20.proof-contracts.json` has exact dependency
  quotes, proof-step uses, and all eight boundary dispositions for each of the
  18 proof-bearing items.
- Preserved the negative sign convention, separated the three compactness
  uses, stated the local coordinate disks before the immersed global result,
  and limited the noncompact proposition to trajectories whose images are
  trapped in a compact slab. No claim was dropped or broadened. The incomplete
  cubic example is explicitly not a Morse-function example. The noncompact
  completeness remark records the companion counterexample as its declared
  forward reference.
- The first explicit precheck found only phase-numbering repairs in
  `lem-riemannian-gradient-vanishes-exactly-at-critical-points`,
  `lem-a-limit-point-of-a-gradient-trajectory-is-critical`, and
  `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits`; the
  canonical repaired numbering was applied. The rerun passed all 18
  proof-bearing files (and all 25 manifest paths were supplied to the command).
- Checks run: `node tools/tsx-run.mjs tools/precheck.mts` with the 25 explicit
  manifest item paths — PASS, 18 checked and 0 failing; `node tools/proof-contract.mjs
  research/frontier-31a-batch-20.proof-contracts.json --strict` — PASS, 18/18;
  `node tools/validate-plan.mjs research/plan-spec.json` — PASS, acyclic and
  consistent; `node tools/content-policy.mjs research/frontier-31a-batch-20.pages.json`
  — PASS, 25 scoped items and 0 errors/warnings; and
  `node tools/manifest-deps.mjs research/frontier-31a-batch-20.pages.json` —
  PASS, 25 items and 0 errors. A focused `node tools/rendercheck.mjs` over the
  25 items and two pages — PASS, 27 files with renderable frontmatter and
  KaTeX. `git diff --check` also passed.
- Blockers: none. The command written without a plan argument in the dispatch
  prints its usage in this checkout, so the validator was run with its required
  `research/plan-spec.json` argument; no plan or workflow artifact was changed.
