# Step 3a scope review — Harmonic Hardy Classes and Fatou Boundary Limits

- Run: `frontier-37-owner-30` (role: alpha; batch 25; this pair only)
- A page: `harmonic-hardy-classes-and-fatou-boundary-limits` (plan order 835;
  design CA-HP-1, `research/plan-complex-analysis-track.md` L3685–3720)
- B page: `harmonic-hardy-classes-and-fatou-boundary-limits-examples`
  (plan order 836)
- Inventory: 11 A items (3 definitions, 1 lemma, 6 theorems, 1 corollary) at
  declared levels 0–4 and 3 B items (2 examples, 1 counterexample) at levels
  2–3; A `requires` nine published pages, B requires the A page only.
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-37-owner-30-step3a-review-harmonic-hardy-classes-and-fatou-boundary-limits.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item
  contract, plan, page, coverage record, engine state or owner record was
  edited; nothing below is an item approval. No owner decision exists for this
  pair (no `step3-owner-*` receipt, no
  `frontier-37-owner-30-owner-authoring-direction.md`), so nothing was assumed.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-25.pages.json` | Current scope carrier: 14 items, their statements, deps, provenance and declared dependency levels; `requires`, orders, companion pointers |
| `research/frontier-37-owner-30-batch-25.coverage.json` | 2 full-text sources, 33 harvested result rows (ABR 22: 10 included/6 inline/5 out-of-scope/1 already-published; Koch 11: 2 included/2 inline/3 already-published/4 out-of-scope) plus 14 canonical rows, all destinations present |
| `research/frontier-37-owner-30-batch-25.notes.md` | Scaffolder construction record: design/plan reconciliation, the four local support insertions, proof-route and dependency-clause audit, choice-strength handling, Schlag-404 and Koch-substitution record |
| `research/frontier-37-owner-30-batch-25.cross-batch-dependencies.json` | `[]` — no cross-batch edges out of this pair |
| `research/plan-complex-analysis-track.md` L3685–3720 (CA-HP-1 design), L497 (pair gate row), L4676–4703 (heading dispositions), L4963 (per-pair source matrix), L5377 (binding `requires` row), L5685 (order table) | Binding prose design, its declared sources, its h^p boundary-value traps, and the exact nine page prerequisites |
| `research/plan-spec.json` orders 835/836 (item lists empty in the plan; the scaffold lives in the run manifest); neighbours 833/834 (logarithmic potential, planned, empty) and 837/838 (analytic Hardy, planned, empty, `requires` includes this A page) | Plan reconciliation, designated consumer, build boundary |
| `research/frontier-37-owner-30-alpha-step1-drift.md` §harmonic-hardy (VERDICT: no-drift) | Step-1 verdict: declared closure reaches the needed interfaces; h1-measure vs L1-density distinction correct |
| `research/frontier-37-owner-30-scope-ledger.json`, `research/frontier-37-owner-30-operator-record.md`, `research/frontier-37-owner-30-planning-notes.md` | Both pages are in the owner's 60-page run scope (batch 25, plan order 835/836); no pair-specific owner direction |
| Independent re-fetch of both harvested PDFs in `/tmp/step3a-hh` | Byte counts and sha256-16 match the coverage `fetch_verified` records exactly: Axler–Bourdon–Ramey `4e64124f7e36993e` (2,258,926 B, 260 pp.), Koch `3f0f0e59c81d077b` (691,220 B, 118 pp.) |
| Independent fetch of the design-named sources | Ryzhik, Stanford Math 215 notes: live (739,097 B, 128 pp.), §5.1–5.3, Def. 5.2 and Thm. 5.12 present on PDF pp. 68–75. Schlag Purdue mirror `https://www.math.purdue.edu/~eremenko/Pdf/schlag.pdf`: HTTP 404 when checked now |
| `items/*.md` resolution over the pair's full transitive closure | 14 run nodes + 1,454 published item files = 1,468 nodes; 0 missing, 0 non-published; 36 distinct direct external suppliers, all `published` |
| Published pages `harmonic-functions-and-the-poisson-integral`, `complex-lp-spaces-and-test-function-conventions`, `the-duality-of-lp-and-lq`, `density-separability-and-convolution-in-lp`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `banach-alaoglu-goldstine-and-krein-milman`, `reflexivity-and-eberlein-smulian`, `green-functions-harmonic-measure-and-conformal-invariance` | All nine page-level prerequisites exist with `status: published` |

## Inventory versus the design

The CA-HP-1 design table lists 7 A items. The manifest carries all of them, in
design order, plus four declared local support insertions:

| Design row | Manifest item(s) | Note |
|---|---|---|
| `def-harmonic-hardy-class-disc` | same | 1≤p<∞ plus the separate p=∞ convention, as designed |
| `thm-poisson-extension-lp-contraction-and-norm-limit` | same | contraction for 1≤p≤∞, finite-p norm convergence |
| `thm-harmonic-hardy-representation-p-greater-one` | same | 1<p≤∞; finite p in Lp, p=∞ weak-star against L¹ |
| `thm-harmonic-hardy-one-measure-representation` | same | unique regular complex measure, isometric norm, no L¹ density inferred |
| `thm-poisson-nontangential-maximal-bound` | same | N_A(P[μ]) ≤ (A+1)² M_T μ, the designed maximal control |
| `thm-fatou-nontangential-boundary-theorem-harmonic` (both halves: L¹ data; bounded harmonic) | `thm-fatou-nontangential-boundary-theorem-harmonic` (L¹, nontangential, a.e.) + `cor-bounded-harmonic-functions-have-nontangential-limits` + p=∞ half of the representation theorem | split, both halves present |
| `thm-harnack-convergence-positive-harmonic-functions` | same | correspondence for nonnegative data and normalised local-uniform compactness |

Support insertions, each a joint that precedes its consumers in the declared
order and is required by the design's own claims and proof route:

- `def-poisson-integral-of-finite-boundary-measure` — extends the published
  continuous-data Poisson integral to finite complex measures, which the h¹
  representation item applies; the design's `requires` already names Radon
  measure theory.
- `def-circle-maximal-function-and-nontangential-region` — the maximal
  function, arcs and cones that the next two items and the Fatou theorem name.
- `lem-circle-maximal-weak-one-one` — the circle finite-measure weak-(1,1)
  estimate; the published Euclidean Hardy–Littlewood theorem does not by
  itself state the finite-measure circle estimate the design's
  "maximal inequality and density" route needs.
- `cor-bounded-harmonic-functions-have-nontangential-limits` — the
  bounded-harmonic half of the designed Fatou item, made explicit.

Nothing in the design's item table is missing, and no A item asserts a subject
outside the designed one. The design's h^p traps are honoured in the
statements: representative independence (definition), uniqueness by weak-star
/ Lp convergence (both representation theorems), and "at p=1 the datum is a
finite measure, not silently an L¹ function" (`A general h¹ function need not
have an L¹ density`).

The companion list in the design names six phenomena; the pair carries all six:
indicator-arc Poisson extension (`ex-poisson-extension-of-an-indicator-arc`),
atom and its Poisson kernel (`ex-poisson-boundary-atom-in-h-one`), radial
versus nontangential approach (`cex-radial-boundary-limit-does-not-force-tangential-limit`),
L^p norm contraction (A theorem `thm-poisson-extension-lp-contraction-and-norm-limit`),
a boundary function with no pointwise limit at a prescribed point (the cex's
boundary values have no limit at ζ=1; the indicator example records the
endpoint case), and why h¹ requires measures rather than L¹ densities (the
atom example plus the h¹ representation statement). Two of the six are not
standalone B items; both are present in the pair, so this is a packaging
choice, not a coverage gap.

## Source coverage

Two independent full treatments back the pair, both re-verified by me:

- Axler–Bourdon–Ramey, *Harmonic Function Theory*, 2nd ed., Ch. 6 (printed
  pp. 111–120, 128–137 = PDF pp. 116–125, 133–142). I re-read the cited
  results in the fetched PDF: Thm. 6.4(a)/(b) (L¹ radial bound, Lp
  contraction), Thm. 6.7 (finite-p norm convergence, with the p=∞ failure
  noted), Thm. 6.9 (weak-star radial convergence), Thm. 6.12, Thm. 6.13(a)/(b)
  (surjective isometries M(S)→h¹ and Lp→h^p for 1<p≤∞), Cor. 6.15 (positive
  harmonic ↔ positive measure, μ(S)=u(0)), Prop. 6.16, Thm. 6.19, Thm. 6.28
  with 6.29, Thm. 6.31 (R ≤ M[μ]), Covering Lemma 6.33, Thm. 6.37
  (σ{M[μ]>t} ≤ 3‖μ‖/t), Thm. 6.39 (nontangential Fatou for L¹ data), and the
  singular-measure Thm. 6.42 / Cor. 6.44. Every ABR row in the coverage
  matches the source's numbering and content; the ball statements are read as
  their planar (disc) forms.
- Herbert Koch, *Notes for Harmonic and Real Analysis*, Ch. 3 §§1.2.1–3,
  pp. 35–37. In the fetched PDF: Thm. 3.4 (radial L¹ norm identity, unique
  boundary measure, and the a.c./L^p clauses), Lem. 3.5 (rescaling and norm
  monotonicity), Def. 3.6 and Lem. 3.7 (radially bounded approximate
  identities and their maximal bound), Thm. 3.8 (a.e. radial convergence for
  L¹ data). These are the source of the pair's maximal-function/approximate-
  identity input; the nontangential statement itself is ABR 6.39.

Source-record deltas (non-blocking). The design prose (L3707–3712) names
Ryzhik Ch. 5 §§5.1–5.3 and Schlag Ch. 3 §§1–3 alongside ABR Ch. 6; the
per-pair source matrix (L4963) names ABR Ch. 6 and Ryzhik Ch. 5. The batch
coverage harvests ABR Ch. 6 and Koch Ch. 3 only:

1. Ryzhik Ch. 5 has no coverage row. I checked it myself: the notes are live
   and contain §5.1 Poisson kernel, §5.2 Hardy classes of harmonic functions,
   §5.3 maximal functions and Theorem 5.12 (radial a.e. convergence for
   radially bounded approximate identities, PDF pp. 68–75). Its claims match
   the pair's items, so its absence removes no promised result.
2. The design-named Schlag URL returns HTTP 404 (I reproduced the scaffold's
   observation just now), so no Schlag row exists and none can be harvested;
   Koch supplies the second independent full treatment, so no source-count
   waiver was used.

The four local support items are covered by the same two sources, which record
the needed joints (finite-measure Poisson integral; circle caps/cones and the
covering/weak-type machinery; the L¹ Fatou argument).

Coverage disposes every harvested row: the out-of-scope rows (ABR Cor. 6.6
radial-mean monotonicity, Prop. 6.16 growth bound, Thm. 6.19 classification of
positive harmonic functions vanishing off one point, Thm. 6.42 singular-measure
Fatou, Cor. 6.44 general h¹ boundary limit; Koch eq. (3.4) conjugate kernel,
Thm. 3.4(1) a.c.-iff-L¹-convergence characterization, Lem. 3.5 rescaling,
Def. 3.6 general radially bounded approximate identities) each carry a written
reason. One interpretive judgment is worth recording: the plan's heading-level
disposition assigns ABR's "Fatou Theorem" section to CA-HP-1 (L4678–4681),
while the design's item table promises only the L¹-data and bounded-harmonic
limits and not ABR 6.42/6.44. The scaffold resolves the coarser heading onto
the item table and marks 6.42/6.44 out of scope with specific reasons. I judge
this acceptable for scope — the binding deliverable is the item table, the pair
states explicitly that a general h¹ function need not have an L¹ density, and
no planned page or manifest in this run consumes the singular-measure theorem —
but it is the one place where a stricter reading of the plan's heading
disposition could ask for more. Recorded, not blocking.

## Dependencies, checks and role in the library

- All nine A-page prerequisites are published pages (verified in
  `library/`); the B page requires the A page only. The design's track
  shorthand (CA-13, CA-HM-1, Lp, Radon measures, MT-14/15/17/20) is
  reconciled in the manifest to the plan's exact nine-page `requires` row
  (L5377), including the two functional-analysis pages the shorthand does not
  name.
- My forward traversal of `deps` from the 14 items reaches 14 run items (all
  this pair) + 1,454 published item files: 0 missing, 0 non-published, no
  planned-only or Recorded supplier. The 36 distinct direct external
  suppliers — including `thm-poisson-representation-for-disc-harmonic-functions`,
  `cor-separable-banach-dual-ball-is-weak-star-sequentially-compact`,
  `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`,
  `lem-poisson-kernel-is-a-boundary-approximate-identity`,
  `thm-poisson-integral-solves-the-disc-dirichlet-problem` and
  `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori` — are
  all `published`.
- Incoming check over all 30 run manifests: the only references to these item
  or page ids are inside batch 25 itself (the B page's `requires` and its items'
  deps). Cross-batch dependency record `[]`. The pair is an in-run leaf.
- Role: CA-HP-1 is the harmonic prerequisite for the analytic Hardy pair
  CA-HP-2, which is planned (plan-spec order 837, item list empty, not in this
  run) and is the pair's designated consumer; the plan's CA-HP-2 route needs
  the h¹/h^p boundary representation and Fatou limits built here. SC-7
  (Bergman/Szegő) names CA-HP-1/2 in its design, but no run manifest cites this
  pair. Step-1 drift verdict for the pair is `no-drift`.

Checks run now (read-only):

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs research/frontier-37-owner-30-batch-25.coverage.json --require-destination` | exit 0: 1 page, 47 harvested results, 0 errors, 0 warnings |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-25.pages.json` | exit 0: 14 items, 0 errors |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0: 778 items across 60 pages, maximum level 31 |
| `step1-decisions.mjs check --run frontier-37-owner-30` | closed: 778/778 ready, work `[]` |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | this pair reported `current scope review required` (the record below closes it); 10 other pairs still pending |
| PDF re-fetch byte/sha256 match (ABR, Koch) | 2/2 matched exactly |

## Uncertainty and limits of this review

- I did not audit any proof; weak-star identification, the maximal-estimate
  constants, the covering selection and the Fatou density argument remain
  Step 3b/Step 5 checks, as the Step-1 drift review also states. My source
  reading covered the cited statements and the displayed arguments that carry
  the scope claims (representation isometries, positive-harmonic
  correspondence, maximal control, covering/weak-type, Fatou for L¹).
- The interpretive judgment above (ABR 6.42/6.44 excluded although the plan's
  heading-level disposition names the section) is the only place I found the
  scaffold narrower than a maximally strict reading of the plan prose.
- The evidence bundling is otherwise clean: no missing dependency, no
  unpublished supplier, no cross-batch edge, no owner decision to reconcile.

## Owner action

- None required for this scope. `sufficient` is recorded; the pair may proceed
  to Step 3b authoring.
- Optional, non-blocking record hygiene: add a coverage disposition for the
  design-named Ryzhik Ch. 5 §§5.1–5.3 range (verified live by me) and an
  explicit out-of-scope note for the 404 Schlag locator, so the coverage
  history is exhaustive against the design's source list.
