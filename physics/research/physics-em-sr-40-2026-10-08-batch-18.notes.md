# Batch 18 notes — `em-boundary-and-spectral-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **313**, B page order **314**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**7 A items + 1 B item**, all eight recorded `ready` with current dependency hashes.
No item file, page, plan, published item, engine state or verdict was edited.
Files written: the batch manifest, coverage, cross-batch input, the eight
`step1-*` readiness records, the tool-refreshed unified ledger, and this note.
The binding owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`,
the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
and the design section `research/plan-classical-electromagnetism-track.md` L563–L688
were read first.

## Design vs plan, and the two recorded conflicts

The design reservation (L566 ff.) and `research/plan-spec.json` entries 313/314 agree
exactly on page ids, kind, orders, category, library `mathematics`, titles, companion
links and the declared prerequisite `em-expanded-analysis-prerequisites`. **No plan
conflict on page metadata.** Two conflicts between the design text and the binding
owner direction / drift report were resolved in favour of the direction:

1. **F3/F4 relocation.** The design's page-310 inventory placed
   `lem-em-exterior-outgoing-scalar-uniqueness` and
   `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` (with the UCP and
   Carleman suppliers `thm-bounded-potential-weak-unique-continuation-in-three-dimensions`
   and `lem-three-dimensional-radial-carleman-integer-weight`) on
   `em-expanded-analysis-prerequisites`. The owner direction and the drift report
   place them on **this** page (order 313). Batch 16 explicitly left them to batch 18.
   They are scaffolded here in dependency order; the design's older homes are
   superseded, not silently dropped.
2. **Design `dependency_level` labels.** The design's labels were computed under
   the design's own dep arrays. The labels recorded here are the tool's whole-run
   in-run labels (all current manifests). They agree with the design for six of the
   seven A items (3, 5, 6, 4, 7 and the design 3 for the multipole theorem). For
   `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` the recomputed label
   is **6**, not the design's 5, because the recorded F4 proof also consumes
   `lem-em-smooth-pec-cavity-spectral-closure` (level 5). The recomputation is
   recorded, not hidden. The two new local suppliers have no design label; their
   computed labels are 2 (Carleman) and 3 (UCP).

## Inventory decisions (recorded, not silent)

Every statement and strategy was rebuilt from the exact recorded research argument:

- `lem-three-dimensional-radial-carleman-integer-weight` and
  `thm-bounded-potential-weak-unique-continuation-in-three-dimensions`: the
  root-ucp artifact `research/first-principles-2026-10-03/audit-expansion-2026-10-03/root-ucp-compact-scattering.md`
  with the exact hypotheses of `root-mathematical-supplier-contract.json`
  (connected open Omega in R3, V in L-infinity-loc, psi in H2-loc, Delta psi = V psi
  distributionally; vanishing on a nonempty open set). The eigenvalue identity
  `Delta_{S^2}Y_lm = -l(l+1)Y_lm` is **not** in the batch-16 supplier statement; it is
  supplied inline from homogeneity of harmonic polynomials, and the Plancherel
  multiplier lower bound `|symbol|^2 >= s^2/4` was verified by hand for this record
  (minimum at `x=0`; `|s^2-(l+1/2)^2| >= s-1/4 >= s/2` for integers `l>=0, s>=1`).
- `thm-em-spherical-multipole-basis`, `thm-em-elliptic-boundary-existence` and
  `thm-em-waveguide-spectral-completeness`: the recorded H1–H3, B1–B7 and G1–G3/K10
  branches; the design's dep arrays are kept, with the additions below.
- F3 and F4: `exterior-scattering-arguments.md#F3`/`#F4` verbatim in scope; the
  outgoing class is the modal DtN class of the batch-16 F2 lemma, and no pointwise
  Sommerfeld condition is asserted for rough traces.

Dependency additions (each because the recorded argument names the supplier):
`lem-em-convergent-legendre-kernel` for the multipole theorem (the H1 kernel tail and
derivative estimates); `def-laplacian-of-a-c2-function`, `def-bounded-c-k-domain-and-boundary-charts`,
`cor-first-green-identity-on-a-bounded-c-one-domain`, `lem-em-prescribed-fractional-dirichlet-existence`
and `lem-em-smooth-pec-cavity-spectral-closure`
for F3/F4 (trace continuity for the closed test space, G3's collar inequality and
finite-cube compactness, signed integration by parts, statement notation). B-example
additions are the six published suppliers its explicit computations use
(divergence theorem, polar formula, Laplacian, divergence, distributional and weak
derivative definitions).

A final dependency audit against the recorded strategies added six further suppliers
that the strategies name and that were missing from the first draft of the arrays:
`thm-tonelli-theorem-for-sigma-finite-product-spaces` (the Carleman lemma exchanges the
angular sum with the t-integral against the counting measure),
`cor-compact-domain-maps-are-uniformly-continuous` and
`thm-continuous-image-of-a-compact-space-is-compact` (the UCP propagation uses the
compactness of the polygonal path image and the finite partition from uniform
continuity), `cor-cauchy-schwarz-inequality-for-l-two` (the ball-series tail bound of
the multipole theorem), `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`
(the transmission jump from the weak identity), and
`lem-em-rectangular-pec-energy-completeness` (the rectangular completeness branch of
the waveguide theorem, the recorded $G2$ content; the individual TE/TM mode
verification is the recorded *physics* branch G1 and is deliberately not consumed by
this mathematics item). After these edits the eight readiness records were
re-recorded on the final manifest and `step1-decisions check` reports all eight
current. **No design dependency was dropped where the argument uses it, no promised
claim was weakened, and no item was omitted** beyond the two owner-direction
relocations.

## Dependency verification (actual uses, not declared edges)

All 52 distinct dep targets resolve: 10 in-run items on batches 13 and 16 (levels 0–5)
and 42 published imported items on disk. Statement, hypotheses, direction and
conventions of every in-run supplier were read from the accepted batch manifests
(quoted in the cross-batch file row by row), and the published suppliers were read
for statement and hypotheses before use. No missing, circular, forward or inadequate
dependency was found; the whole-run level check reports no cycle and no label
mismatch. Choice declarations: the Carleman lemma declares Countable Choice (through
Plancherel and the density corollary); the UCP theorem inherits it and declares it;
F4 declares the Axiom of Choice, used **only** through
`thm-fredholm-alternative-for-identity-minus-compact`, and no item touches
`deferred-set-theory-beyond-choice`. The B example's dependencies on A-page items are
backward and legal; nothing depends on a B-page item.

Cross-batch edges (16 rows in `research/physics-em-sr-40-2026-10-08-batch-18.cross-batch-dependencies.json`:
1 page edge + 15 item edges), all with exact required-claim/use/hypothesis evidence:

| consumer | supplier | supplier home |
|---|---|---|
| page `em-boundary-and-spectral-prerequisites` | `em-expanded-analysis-prerequisites` | batch 16 |
| `lem-three-dimensional-radial-carleman-integer-weight` | `lem-em-spherical-harmonic-basis-and-addition` | batch 16 |
| `thm-em-spherical-multipole-basis` | `lem-em-coulomb-dipole-remainder` | batch 13 |
| `thm-em-spherical-multipole-basis` | `lem-em-convergent-legendre-kernel` | batch 16 |
| `thm-em-spherical-multipole-basis` | `lem-em-spherical-harmonic-basis-and-addition` | batch 16 |
| `thm-em-spherical-multipole-basis` | `lem-em-ball-poisson-series-boundary-convergence` | batch 16 |
| `thm-em-elliptic-boundary-existence` | `lem-em-prescribed-fractional-dirichlet-existence` | batch 16 |
| `thm-em-elliptic-boundary-existence` | `lem-em-weak-neumann-and-transmission-existence` | batch 16 |
| `thm-em-elliptic-boundary-existence` | `lem-em-smooth-domain-elliptic-regularity` | batch 16 |
| `lem-em-exterior-outgoing-scalar-uniqueness` | `lem-em-sphere-outgoing-dirichlet-to-neumann-map` | batch 16 |
| `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` | `lem-em-sphere-outgoing-dirichlet-to-neumann-map` | batch 16 |
| `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` | `lem-em-prescribed-fractional-dirichlet-existence` | batch 16 |
| `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` | `lem-em-smooth-domain-elliptic-regularity` | batch 16 |
| `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` | `lem-em-smooth-pec-cavity-spectral-closure` | batch 16 |
| `thm-em-waveguide-spectral-completeness` | `lem-em-smooth-pec-cavity-spectral-closure` | batch 16 |
| `thm-em-waveguide-spectral-completeness` | `lem-em-rectangular-pec-energy-completeness` | batch 16 |

## Source harvest

Eleven sources fetch-verified and stamped (`source-fetch-check --stamp`: 11/11,
0 drops; check mode 11/11):

| source | kind | stamp |
|---|---|---|
| D. Tataru, Carleman estimates, unique continuation and applications | monograph | 534,700 B, 136 pp., `6d769ca6eb2d3a80` |
| B. Davey, Quantitative unique continuation (arXiv:1903.04021) | paper | 482,861 B, 17 pp., `0c6063d3f08fcd77` |
| A. Moiola, Scattering of time-harmonic acoustic waves | lecture-notes | 5,554,431 B, 78 pp., `a00fb322723446e7` |
| B. Schweizer, The Rellich Lemma on the Helmholtz equation | lecture-notes | 294,887 B, 6 pp., `14bbdc96bf60d7ab` |
| J. K. Hunter, Notes on PDEs | lecture-notes | 1,597,256 B, 242 pp., `0dbade1806f7a1ea` |
| S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory | textbook | 2,258,926 B, 260 pp., `4e64124f7e36993e` |
| S. Dyatlov, 18.155 notes | lecture-notes | 4,036,967 B, 266 pp., `9c03576df76ce8ad` |
| NIST DLMF §14.30 | reference-work | 188,125 B HTML, `c7a013349c4ba983` |
| NIST DLMF §18.12 | reference-work | 197,961 B HTML, `4df1efebc32b4356` |
| NIST DLMF §10.47 | reference-work | 203,893 B HTML, `afb9a6f24965910a` |
| P. Arbenz, R. Geus, S. Adam, Maxwell eigenvalue problems | paper | 302,898 B, 10 pp., `b17fc18d50d64b9a` |

23 harvested results, all disposed in the coverage file: 7 `included` (singular-weight
Carleman estimate family → the radial lemma; Davey Theorem 1 → the UCP theorem;
Rellich exterior uniqueness → F3; Hunter ch. 4 weak/elliptic theory → the elliptic
theorem; HFT ch. 5 harmonic polynomials/zonal kernels and ch. 1 Poisson kernel → the
multipole theorem; Arbenz §II formulation → the waveguide theorem), 10 `inline`,
4 `out-of-scope`, each with a written reason. Verified locators: Tataru Theorem 3.50
with Corollary 3.6.1 (`(tau+1)^2||x|^{-tau-1}u| <= rho^2||x|^{-tau}Delta u|`) and
Theorem 3.52; DLMF 14.30.9 addition theorem, 18.12.2–18.12.4 generating function,
10.47.3–10.47.9 spherical Hankel functions; Schweizer Theorem 1.1 and Lemma 2.1.
Honest limits: Davey's paper is a preprint (recorded as such); Moiola's notes treat
the plane case and are recorded as structural corroboration for the 3D spherical DtN
supplied by the batch-16 F1/F2 lemmas. `coverage-checklist --require-destination`
reports 0 errors and the honest warning `coverage-low-yield … 7/23 harvested results
scaffolded`: the page's inventory was fixed by the design and the owner direction
before the harvest, so most source rows corroborate rather than mint items.

## Checks run (actual results)

- `manifest-deps` (batch): 8 items, 0 missing, 0 errors.
- `content-policy --manifest-only` (batch alone): 15 `batch-dependency-missing`
  errors for the cross-batch in-run suppliers, which resolve in whole-run scope.
  Whole run (all 40 manifests, 155 declared items): **0 errors, 0 warnings**.
- `item-dependency-levels check --run`: **no label, dep-shape or cycle error**;
  all 155 declared labels equal the computed whole-run levels; empty-inventory
  errors remain only for the not-yet-scaffolded pages of other batches.
- `step1-decisions check --run`: **155/155 declared run items ready** at the check
  time, including all eight of this batch (re-recorded on the final manifest after
  the dependency audit); the residual work list is exactly the empty future pages.
- `coverage-checklist --require-destination`: 1 page, 23 harvested results,
  0 errors, 1 low-yield warning (explained above).
- `source-fetch-check --stamp`: 11/11 fetch-verified (11 stamped); check mode
  11/11 resolved, 0 drops. `url-sweep --coverage … --out /tmp/…`: 11/11 live,
  0 failed, 0 suspect, 0 blocking; 11 citation decisions, 0 documented drops
  (output in `/tmp`, not engine state).
- `validate-plan research/plan-spec.json --run …`: **FAIL**, exit 1 — 36
  `undeclared-prereq` errors across the run at the check time (the count moves while
  sibling batches scaffold concurrently); 9 of them are on this batch's two pages.
  See the escalation below.
- `physics-check --plan research/plan-spec.json`: **FAIL**, exit 1, with
  `mathematics import changed: items/thm-hilbert-basis-theorem.md; reconcile and
  re-import before a new run` — the pre-existing owner-held import drift first
  recorded by batch 15 and unchanged by batch 16. Not caused by this batch; no item
  here reaches that theorem through any dependency path.
- `frontier-dependency-ledger refresh`: batch 18 present and reviewed; 0 orphaned
  reviews; every declared cross-batch edge carries its review row.
- `extcheck --quiet`: exit 0 — every recorded-not-proved statement is a cited remark
  and every consequence is marked; no forward reference is used by this batch.
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests; no scope drift.

## Unresolved findings / escalation (owner action)

1. **Plan-context escalation: eight additional genuinely used published supplier
   homes must be declared for page 313 (and one for page 314) before the run's plan
   gate can pass (9 `undeclared-prereq` errors: 8 on the A page, 1 on the B page).** `validate-plan --run` overlays the manifest page objects onto the
   plan (`pages = spec.pages.map(page => currentPageById.get(page.id) ?? page)`), so
   the fix is to add the pages below to the `requires` of
   `em-boundary-and-spectral-prerequisites` (page 314's error resolves through its
   `requires` edge once 313 has them, or by the same one-line addition). Per the
   owner direction ("declare any additional genuinely used published supplier homes
   through the ordinary escalation path") neither the plan nor any `requires` field
   was edited by this worker; owner/operator reconciliation and the native
   same-scope sync are required.

   | missing home page | order | supplier items used | consumers |
   |---|---|---|---|
   | `fubini-and-change-of-variables` | 23 | `cor-one-dimensional-change-of-variables-with-absolute-derivative` | Carleman lemma |
   | `product-measures-and-the-fubini-tonelli-theorems` | 46 | `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces` | Carleman lemma, B example |
   | `tempered-distributions-and-the-fourier-transform` | 61 | `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions` | Carleman lemma |
   | `norming-and-separation-under-hahn-banach` | 80.573 | `lem-relative-compact-closed-sets-have-a-positive-distance-gap` | UCP theorem |
   | `smooth-partitions-of-unity-and-exhaustions` | 80.732 | `lem-smooth-bump-between-concentric-euclidean-balls` | Carleman lemma, UCP theorem |
   | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | 80.878 | `def-essential-supremum-with-respect-to-a-measure`, `def-l-infinity-on-a-measure-space`, `cor-cauchy-schwarz-inequality-for-l-two` | UCP theorem, multipole theorem |
   | `the-topology-of-euclidean-space` | 80.927 | `cor-components-of-open-subsets-of-rn-are-polygonally-connected`, `def-polygonal-path-and-polygonal-connectedness` | UCP theorem |
   | `uniform-spaces` | **not in plan-spec** | `cor-compact-domain-maps-are-uniformly-continuous` | UCP theorem |

   Seven are pure mathematical pages at earlier plan orders; `uniform-spaces` is a
   published library page **absent from plan-spec** and needs a `P`-context entry
   (the same pattern as the five repaired pages of
   `research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.json`). Every
   supplier resolves on disk, was read, and its use is recorded in the strategy text
   and the readiness evidence. This is a plan-metadata declaration gap, not an item defect. The same
   class of gap already holds for page 310 (batch 16's ten-row escalation) and for
   `sr-observer-measurements` (batches 1–3).
2. **Import drift** (`thm-hilbert-basis-theorem.md`) blocking whole-run
   `physics-check`: owner re-import action outside the active run; unchanged from
   batches 15 and 16 and unrelated to this batch.
3. **Coverage low-yield warning** (7/23 `included`): explained above; the declines
   are named rows with reasons, and the warning is for Alpha's Step-5 confirmation,
   not an omission claim.

## Status and limits

The two local suppliers (Carleman lemma, bounded-potential UCP) are **local research
items**, not published mathematics: their proofs are written in the research artifact
and their exact hypotheses are retained, but they have no independent audit,
publication status or engine certification, and Step 3 owes them a complete authoring
and independent review. No test, judgment or review stamp is claimed anywhere in this
batch. Owner/operator reconciliation and the full engine gate follow construction.
