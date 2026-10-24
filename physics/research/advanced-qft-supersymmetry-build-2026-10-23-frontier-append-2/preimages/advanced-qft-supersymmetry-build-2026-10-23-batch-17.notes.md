# Batch 17 authoring notes — Wilson Coefficients and Finite-Dimensional RG Systems

## Scope and plan comparison

Owned pair: `qftx-eft-rg-data` / `qftx-eft-rg-data-examples`, category and
library `quantum-field-theory-mathematics` / `mathematics`, order 973. The
complete design section in `research/plan-advanced-qft-and-supersymmetry-track.md`
(L233–248) and the current `research/plan-spec.json` agree on page IDs, title,
category, library, required pages, and scope: define scheme/coefficient-vector
data and prove local well-posedness of a supplied truncated finite-dimensional
ODE without calculating a QFT beta function. The plan's item arrays are empty
scaffolding; the binding owner direction requires a worked B-page example. No
shared plan was edited. Both authored page files contain YAML frontmatter only,
with no summary or Markdown body.

The proposed inventory omitted direct scheme dependencies and proposed an
Axiom-of-Choice branch for the quotient. The actual current batch-16 carriers
are now available and determine the interface: the scheme explicitly depends
on `def-aqft-local-operator-and-dimension` and
`def-aqft-operator-basis-quotient`; the quotient definition itself depends on
the local-operator definition and finite-dimensionality lemma, with no AC edge.
The consuming data use a finite complex quotient at one fixed engineering
weight. No full-AC hypothesis is inherited. Other batch-16 items on invariant
exactness, field redefinitions, and LSZ carry their own additional hypotheses,
but this batch does not depend on those items.

The upstream plan describes an exact fixed-order IBP/EOM/field-redefinition
quotient. The current quotient definition is exact for its specified
$G$-stable relation subspace and expressly does not say that all relations
relevant to every physical EFT have been included. Batch 16 also has separate
current proposition/theorem carriers for its declared boundary, leading-equation,
and amplitude claims. This batch takes only the exact supplied quotient and
its declared relation space as input; it makes no claim of exhaustive physical
equivalence. If the plan intended completeness for arbitrary physical
relations, that stronger interpretation is not assumed here and is outside
this RG pair's conditional claim.

The first scheme draft allowed distinct engineering weights inside one quotient,
although the supplier quotient is fixed at weight $D$. The final definition
uses one weight $d$ and complex coefficient coordinates, with an explicit isometric
realification for the ODE. A real-action/Hermiticity condition remains
additional data. The coefficient expression is formal in the supplied
quotient; no particular action, matching map, beta coefficient, or truncation
error is constructed.

## Current prerequisite inspection

The current batch-16 manifest inventories the A/B pair, and the A-page carrier
`library/quantum-field-theory-mathematics/qftx-eft-operator-quotients.md` is
present. Current relevant item carriers and interfaces were inspected directly:

- `def-aqft-local-operator-and-dimension` fixes four-dimensional natural units,
  finite jet/degree data, assigned rational engineering weights, and the
  $C\mathcal O_D/\Lambda^{D-4}$ convention. It is a definition, so no proof is
  claimed.
- `lem-aqft-finite-order-local-operator-space-finite-dimensional` has a
  complete two-step proof: bounded degree gives finitely many exponent vectors;
  a fixed-weight monomial span is finite; the invariant vectors form a
  finite-dimensional subspace.
- `def-aqft-operator-basis-quotient` defines $W_D$, $V_D=W_D^G$, the specified
  $G$-stable raw relation subspace, $R_D=\widetilde R_D\cap V_D$, and
  $\mathcal Q_D=V_D/R_D$. Its stated basis consists of representatives of a
  quotient basis. It explicitly limits the quotient to declared relations.
- The transitive reductive-group definition was inspected. It defines reductive
  over $\mathbb C$ and explicitly says the definition itself uses no AC. The
  current quotient dependency chain is local operator definition, finite
  dimensionality lemma, and quotient definition; none requires AC.
- The current page also contains sibling items on invariant exactness,
  integration-by-parts/leading-equation relations, and LSZ equivalence. Their
  hypotheses are not imported into this batch's coefficient-space or ODE
  arguments. The invariant-exactness and field-redefinition arguments inspected
  on that page explicitly assume full AC; those are not dependencies of this
  batch.

Before recording decisions, `loadStep1Record` and `step1Decision` were checked
for the three current in-run supplier items
(`def-aqft-local-operator-and-dimension`,
`lem-aqft-finite-order-local-operator-space-finite-dimensional`, and
`def-aqft-operator-basis-quotient`). Each current carrier/proof is present and
its interface was inspected, but each `step1Decision` currently returns
`Readiness record missing`. This is recorded as the exact unresolved authoring
readiness prerequisite; it is distinct from draft status, pending precheck, or
missing independent approval. The assigned items are fully authored
conditionally and their Step-1 decisions are escalated on that specific missing
record chain. Published ODE prerequisites were inspected at their current
statements/proofs and current import pin; missing Step-1 records for those
published suppliers are not treated as a gap.

The required `qftx-scale-cocycles` and
`picard-lindelof-and-first-order-odes` pages are present and published. The
scale-cocycle page and its cited formal-cocycle items were read in full; they
do not derive a general EFT beta function and are not used as a logical
premise. The ODE definitions, Volterra-equivalence proposition, and current
Picard–Lindelöf theorem were read in full. The latter assumes a continuous
finite-dimensional vector field locally Lipschitz in state uniformly on compact
cylinders and supplies the quantitative local interval and common-interval
uniqueness used here. Its current imported hash matches `research/math-imports.json`.
The new theorem proves continuous dependence separately by iteration of the
oriented integral inequality.

## Authored items and levels

Direct in-run supplier levels were recomputed from the current batch-16 and
batch-17 manifests and carriers:

- `def-aqft-local-operator-and-dimension`: level 0.
- `lem-aqft-finite-order-local-operator-space-finite-dimensional`: level 1.
- `def-aqft-operator-basis-quotient`: level 2.
- `def-aqft-scheme-and-wilson-coefficients`: level 3.
- `thm-aqft-truncated-coupled-rge-wellposedness`: level 4.
- `ex-aqft-coupled-rge-linear-mixing`: level 5.

The scheme definition takes $V=\mathcal Q_d$ for one fixed engineering weight
$d$, an ordered complex basis, a finite scheme record, dimensionless
$t=\log(\mu/\mu_0)$, and a supplied continuous realified beta vector field on
an open domain. It identifies the Euclidean isometry
$\rho_N:\mathbb C^N\to\mathbb R^{2N}$ and the column-vector matrix convention
for a supplied complex-linear flow. It does not assert that the separate scheme
coordinate maps solve the supplied ODE.

The theorem proves local existence and uniqueness on one common interval for
initial data in a coefficient ball and the estimate
$\|x_y(t)-x_z(t)\|_2\le e^{L|t-t_0|}\|y-z\|_2$. Its proof steps 1.1–5.1
choose a compact cylinder, apply the quantitative Picard–Lindelöf clause,
derive the oriented Volterra difference inequality, iterate it with a bounded
remainder, and take the exponential-series limit. There is no global-flow,
QFT beta-calculation, or omitted-term claim.

The B example takes a supplied two-dimensional complex quotient at engineering
weight six and $J=(0,\infty)$, stipulates the constant matrix
$A=\begin{pmatrix}-1&1\\0&-2\end{pmatrix}$, and verifies the all-real solution
$C(t)=(2e^{-t}-e^{-2t},e^{-2t})^T$ by exact substitution. Its realified vector
field is globally Lipschitz with constant at most $\sqrt6$, so the theorem
identifies the explicit curve as the unique global solution. The matrix is not
calculated from a QFT.

## Sources and retrieval record

Two independent full-text EFT treatments and two independent full-text ODE
treatments support the A-page development. Full URLs, locators, inspected
extents, supported items, limitations, searches, source hashes, and harvested
result dispositions are in
`research/advanced-qft-supersymmetry-build-2026-10-23-batch-17.coverage.json`.

- Manohar, *Introduction to Effective Field Theories*, complete lecture notes,
  https://arxiv.org/pdf/1804.05863, Chapter 2 §2, equations (6)–(11) and the
  reference-scale discussion; Chapter 4 §10, equations (49)–(52). Supports the
  distinction between renormalized coefficient coordinates, scale dependence,
  and supplied RG evolution; does not give a general quotient, beta matrix, or
  ODE theorem.
- Burgess, *Introduction to Effective Field Theory*, complete review,
  https://arxiv.org/pdf/hep-th/0701053, §§2.2.1–2.2.2 and §4.1.3, equations
  (73)–(79). Supports scheme dependence and scale-dependent coefficients in
  its QED examples; does not derive this general coupled system.
- Teschl, *Ordinary Differential Equations and Dynamical Systems*, official
  author-hosted complete PDF, https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf,
  Chapter 2 §2.2, equations (2.10)–(2.20), Theorem 2.2 and its proof. Supports
  the compact-cylinder Picard–Lindelöf argument and quantitative local interval.
- Bouin, *Cours Differential Equations*, complete lecture notes,
  https://www.ceremade.dauphine.fr/~bouin/ens1819/EquaDiff_CoursL3_2018-2019.pdf,
  §1.5, Theorem 1.5.4 and Lemmas 1.5.5 and 1.5.9, PDF pp. 12–15. Supplies an
  independent local contraction, first-exit uniqueness, and common-interval
  uniqueness treatment.

The NC State Teschl mirror timed out on its first full-text fetch plus five
recovery attempts. After those failures, searches found the complete PDF on the
author's official Vienna host. The failed endpoint and all six attempts remain
in the coverage history as a dropped endpoint; the official author-hosted book
and independent CEREMADE notes retain the mathematical coverage. The complete
alternative ODE proof and its declared direct dependencies are recorded in the
source-resolution data. The initial `source-fetch-check --stamp` verified four
of five source rows; all five were resolved, with the one endpoint drop
justified. Current check mode still reports 4/5 fetch-verified and 5/5 resolved.

## Cross-batch inputs

`research/advanced-qft-supersymmetry-build-2026-10-23-batch-17.cross-batch-dependencies.json`
contains one row for each current direct external edge: the three required
pages and the six item-level dependencies on batch-16 and published ODE items.
The page and item interfaces are marked `verified` as scoped checks only, not
as independent proof approvals. The relevant batch-16 item interfaces now
exist and match the conditional use. The batch-16 page carrier and current
manifest inventory are also present, so that page edge has been checked.
Scale-cocycle and Picard page requirements are current; the ODE item suppliers
are imported/published and their hashes match. Transitive page requirements
from those suppliers remain observations in this note and are not duplicated
as unsupported direct rows.

A direct-edge audit against the current page requirements and item dependencies
found exactly nine rows, with no missing or extra edges and no invalid status or
evidence fields.

## Validation and remaining blockers

Final assigned-scope checks:

- `precheck.mts`: 3 files, 2 proof-bearing items checked, 0 failures; the
  definition is not applicable. The theorem and example frontmatter record
  `verification.precheck: pass`.
- `rendercheck`: 5 changed item/page files, 0 errors and 0 warnings.
- `content-policy --manifest-only --authored`: 3 items, 0 errors, 0 warnings.
- focused `depcheck`: 0 errors and 0 warnings for all three items and their
  dependency closure.
- `proof-layout.mjs`: 3 items, 8 proof steps, 0 defects.
- `coverage-checklist.mjs`: 1 A page, 9 harvested results, 0 errors and 0
  warnings.
- `source-fetch-check.mjs` check mode: 4/5 source rows fetch-verified, 5/5
  resolved, one documented dropped endpoint.
- A scoped item-level dependency calculation over current batches 16 and 17
  passes with no errors and levels 0 through 5 as listed above. Scoped
  proof-contract coverage checks 3 items and covers both proof-bearing items
  with no errors. Scoped statement-first checking reports 3 items and 0
  defects.

Run-wide checks that cannot close from this assigned scope:

- `item-dependency-levels.mjs check --run ...` reports empty item inventories
  in unrelated future batches and pre-existing recorded-level mismatches in
  unrelated items (for example `thm-adhm-fixed-point-instanton-count` recorded
  5 versus computed 7, and `ex-adhm-u1-one-box-fixed-point` recorded 6 versus
  computed 8). The scoped batch-16/17 graph has no errors and our levels match.
- `batch-dependency-levels.mjs check --run ...` reports
  `Stale batch dependency levels for advanced-qft-supersymmetry-build-2026-10-23`.
  The current shared scheduling digest no longer matches the populated batch
  manifests. That shared schedule record is owner-owned and was not rewritten.
- Run-wide proof-contract coverage and statement-first commands stop at the
  unrelated empty batch-18 inventory for
  `qftx-eft-dispersion-and-bootstrap`. Their isolated batch-17 versions pass
  as stated above.

The three assigned Step-1 records are recorded `escalated` because the current
Step-1 readiness records for the actual batch-16 operator definition,
finite-dimensionality lemma, and quotient definition are missing. The item
carriers and relevant argument were inspected; this is the precise remaining
readiness-record prerequisite, not an inference from draft status, pending
precheck, or lack of independent approval. No other mathematical gap remains
in the assigned conditional arguments. Later review gates still decide
independent acceptance.

The native step1-decisions recorder wrote the three current records with
owner: false; their recorded hashes match the current item/dependency snapshots:

- def-aqft-scheme-and-wilson-coefficients:
  research/advanced-qft-supersymmetry-build-2026-10-23-step1-def-aqft-scheme-and-wilson-coefficients.json
- thm-aqft-truncated-coupled-rge-wellposedness:
  research/advanced-qft-supersymmetry-build-2026-10-23-step1-thm-aqft-truncated-coupled-rge-wellposedness.json
- ex-aqft-coupled-rge-linear-mixing:
  research/advanced-qft-supersymmetry-build-2026-10-23-step1-ex-aqft-coupled-rge-linear-mixing.json
