# Step 7 adjudication — group **g**, run `physics-em-sr-40-2026-10-08`

You are the group Alpha for batches **13**, **14**, **15**: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/physics-support/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/physics-em-sr-40-2026-10-08-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 13 | `em-elementary-mathematical-prerequisites` | A | classical-electromagnetism-mathematics | 305 | `compactness-in-metric-spaces`, `complex-differentiability-and-cauchy-riemann`, `distributions-test-functions-and-differentiation`, `euclidean-surface-measure-divergence-and-green-identities`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `line-integrals-and-the-gradient-theorem`, `regular-surfaces-and-surface-integrals`, `rn-as-a-normed-space`, `the-derivative-and-mean-value-theorems`, `the-divergence-theorem-and-classical-stokes`, `the-fundamental-theorems-of-calculus`, `the-inverse-function-theorem-completed`, `the-maximal-function-and-lebesgue-differentiation`, `the-total-derivative`, `countability-and-uncountability`, `field-extensions-and-the-complex-numbers`, `foundations-of-the-real-numbers`, `measurable-functions-and-simple-approximation`, `metric-spaces`, `properties-of-the-integral-and-the-working-ftc`, `the-complex-exponential-and-eulers-formula`, `the-lebesgue-integral-and-the-convergence-theorems`, `uniform-convergence-of-functions`, `measures-and-their-basic-properties`, `areas-of-elementary-plane-figures`, `compactness`, `completeness-and-uniform-continuity`, `determinants-of-matrices-over-a-commutative-ring`, `improper-integrals`, `linear-independence-bases-and-dimension`, `measurable-densities-and-radon-volume-on-manifolds`, `mixed-partials-taylor-and-extrema`, `rank-theorems-and-embedded-submanifolds`, `sigma-algebras-and-borel-sets`, `the-riemann-integral-in-rn-and-jordan-content`, `volumes-of-elementary-solids-and-solids-of-revolution`, `lebesgue-measure-on-euclidean-space` |
| 13 | `em-elementary-mathematical-prerequisites-examples` | B | classical-electromagnetism-mathematics | 306 | `em-elementary-mathematical-prerequisites` |
| 14 | `em-minkowski-mathematical-prerequisites` | A | classical-electromagnetism-mathematics | 307 | `dual-spaces-bilinear-forms-and-inertia`, `linear-algebra-methods-in-combinatorics`, `rn-as-a-normed-space`, `the-derivative-and-mean-value-theorems`, `the-inverse-function-theorem-completed`, `the-total-derivative`, `construction-of-r-via-cauchy-sequences`, `continuity-ivt-evt-and-uniform-continuity`, `exterior-powers-orientation-and-hodge-duality`, `foundations-of-the-real-numbers`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `monotone-functions-and-discontinuities`, `monotone-sequences-and-cauchy-completeness`, `properties-of-the-integral-and-the-working-ftc`, `roots-and-rational-powers`, `the-determinant-of-a-linear-operator`, `vector-spaces-and-subspaces` |
| 14 | `em-minkowski-mathematical-prerequisites-examples` | B | classical-electromagnetism-mathematics | 308 | `em-minkowski-mathematical-prerequisites` |
| 15 | `em-variational-mathematical-prerequisites` | A | classical-electromagnetism-mathematics | 309 | `em-elementary-mathematical-prerequisites`, `em-minkowski-mathematical-prerequisites`, `lebesgue-measure-on-euclidean-space`, `weak-derivatives-and-sobolev-spaces` |
| 15 | `em-variational-mathematical-prerequisites-examples` | B | classical-electromagnetism-mathematics | 319 | `em-variational-mathematical-prerequisites` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-elementary-mathematical-prerequisites` — Em Elementary Mathematical Prerequisites (13 item(s))

- `def-em-complex-plane-wave` · definition — Complex plane-wave fields: real parts of complex exponentials
- `def-em-moving-patch` · definition — Moving parametrized surface patches and their flux
- `def-em-surface-distribution` · definition — Surface distributions and interfacial jumps
- `lem-em-continuous-localization` · lemma — Localization: vanishing integrals or fluxes force a continuous function to vanish
- `lem-em-coulomb-dipole-remainder` · lemma — Monopole-dipole expansion with an explicit remainder for compactly supported $L^1$ densities
- `lem-em-parameter-integrals` · lemma — Differentiation under the integral sign over a compact measurable set and over a compact $C^1$ surface
- `lem-em-point-current-continuity` · lemma — Distributional continuity of a moving point charge
- `lem-em-quadratic-stress-identity` · lemma — Quadratic stress identity and the local angular-balance identity
- `lem-em-interface-derivatives` · lemma — Distributional divergence and curl across a stationary interface
- `lem-em-joint-smooth-potentials` · lemma — Joint regularity of radial vector and scalar potentials on star-shaped domains
- `lem-em-moving-flux` · lemma — Transport of flux through a moving patch
- `lem-em-period-average` · lemma — Period averages of products of real parts of complex exponentials
- `lem-em-interface-wave-linear-system` · lemma — The two-equation interface system at normal incidence

### `em-elementary-mathematical-prerequisites-examples` — Em Elementary Mathematical Prerequisites — Examples (1 item(s))

- `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` · example — Explicit mathematical hypothesis and convention examples for the elementary prerequisites

### `em-minkowski-mathematical-prerequisites` — Em Minkowski Mathematical Prerequisites (4 item(s))

- `def-em-minkowski-affine-space` · definition — The Minkowski affine four-space: the form $\eta$, causal cones, frames and Lorentz maps
- `lem-em-boost-preserves-metric` · lemma — The explicit Lorentz boost preserves $\eta$, has determinant $1$ and preserves the future cone
- `lem-em-proper-time-reparametrization` · lemma — Proper time along a $C^1$ future timelike curve: strictly increasing reparametrization with $\eta(U,U)=-c^2$
- `lem-em-antisymmetric-tensor-contraction` · lemma — Antisymmetric contractions vanish and $mU'=q\Phi(U)$ preserves $\eta(U,U)$

### `em-minkowski-mathematical-prerequisites-examples` — Em Minkowski Mathematical Prerequisites — Examples (1 item(s))

- `ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries` · example — Explicit mathematical hypothesis/convention examples

### `em-variational-mathematical-prerequisites` — Em Variational Mathematical Prerequisites (2 item(s))

- `lem-em-fundamental-variation-lemma` · lemma — The fundamental lemma of the calculus of variations for continuous coefficients
- `lem-em-compact-field-variation` · lemma — Compact variations of the quadratic field functional: first variation and the coefficient equation

### `em-variational-mathematical-prerequisites-examples` — Em Variational Mathematical Prerequisites — Examples (1 item(s))

- `ex-em-variational-mathematical-prerequisites-hypothesis-boundaries` · example — Hypothesis and convention boundaries for the variational prerequisites

## Your seams

Another group's pages depend on yours:

- `em-primitives-and-postulates` (group a) requires your `em-minkowski-mathematical-prerequisites`
- `em-primitives-and-postulates` (group a) requires your `em-elementary-mathematical-prerequisites`
- `em-maxwell-integral-and-constraints` (group a) requires your `em-elementary-mathematical-prerequisites`
- `em-energy-momentum-and-angular-balance` (group d) requires your `em-elementary-mathematical-prerequisites`
- `em-expanded-analysis-prerequisites` (group h) requires your `em-variational-mathematical-prerequisites`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-em-sr-40-2026-10-08-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Historical Step-7 closure recovery, `physics-em-sr-40-2026-10-08`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
