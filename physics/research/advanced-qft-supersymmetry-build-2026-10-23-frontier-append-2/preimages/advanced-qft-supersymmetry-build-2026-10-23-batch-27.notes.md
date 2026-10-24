# Batch 27 — SMEFT and HEFT Symmetry Realizations

## Scope and plan reconciliation

Owned pair: aqft-smeft-heft / aqft-smeft-heft-examples, order 983, physics
library. The full design section and the current plan-spec row agree on page
IDs, title, companion, category, library, order and required pages:
aqft-eft-operators, aqft-eft-matching-running, and qftx-gauge-geometry. The
current plan item arrays and batch manifest item arrays are empty planning
placeholders. Page requirements remain unchanged.

The design section lists pthm-aqft-smeft-as-restricted-heft-branch; the
specialist-note candidate was originally named
prop-aqft-smeft-as-restricted-heft-branch. The exact proposed inventory and
the active design both use the canonical pthm ID, retaining the former name
only as research_candidate_id. Follow the pthm ID. No page metadata conflict
with plan-spec.json was found.

The stored run-level page dependency snapshot sets batch 27 to level 5, with
immediate page suppliers in batches 2, 25 and 26. These levels determine page
dispatch priority; the new item levels below are recomputed from actual item
dependencies, including same-pair dependencies.

## Current supplier inspection and readiness

The required page qftx-gauge-geometry currently contains five mathematical
items. I read the actual statements and relevant complete local arguments for
the non-Abelian gauge datum, principal connection form, graded Lie-algebra
form bracket, associated covariant derivative, and principal curvature /
Cartan / Bianchi result. The right-principal convention is
omega(Z_P)=Z, R_g^* omega=Ad_(g^-1) omega, and in a section
A_j=Ad_(g_ij^-1)A_i+theta_L(g_ij), with curvature
F_i=dA_i+1/2[A_i wedge A_i]. The selected direct uses preserve this convention
and carry AC_omega only. loadStep1Record and step1Decision report all five
qftx-gauge-geometry carriers ready with current local Step 1 records; this is
authoring readiness, not independent proof approval.

The required aqft-eft-operators page currently contains
def-aqft-operator-basis-physical-data. Its actual complete Definition was
read. It fixes a finite-jet, finite-field-degree, finite-canonical-dimension
operator contract, its algebraic invariant quotient, coefficient units, and
separate regulator and operator scales; it explicitly says that a finite
graph regulator is not mapped to continuum local operators without added
data. The current loadStep1Record and step1Decision calls report the carrier
present with a fresh `ready` record. Its status draft and precheck pending are
not treated as mathematical defects. The record's dependency closure includes
the finite-jet definition, scale data, quotient, countable choice, associated
derivative, gauge data, and finite-dimensionality/curvature suppliers; the
actual declared interface was read before authoring.

The required aqft-eft-matching-running page currently contains
def-aqft-threshold-matching-map and
pthm-aqft-matching-and-running-scale-independence. I read the complete
current definition and theorem, including the local proof. The theorem is
conditional on locally Lipschitz supplied beta fields, interval-wide flow
existence, a C1 matching map and the RG-compatibility identity; its conclusion
is only for selected amplitudes and the declared truncation. An initial
loadStep1Record/step1Decision check found both carriers present but their
readiness records missing. Before finalization, a fresh current check now
reports ready records for both: def-aqft-threshold-matching-map has the model,
operator-data and scheme/Wilson dependencies; pthm-aqft-matching-and-running-
scale-independence has the scheme/Wilson, matching-map and finite-RGE
dependencies. Their complete actual statements and the theorem proof were
inspected. The SMEFT/HEFT derivation does not consume these matching claims;
the required page edge is now verified from the current records.

The exact mathematical operator suppliers
def-aqft-local-operator-and-dimension,
lem-aqft-finite-order-local-operator-space-finite-dimensional, and
def-aqft-operator-basis-quotient were read at their current statements and
proof status. Their current Step 1 records are ready. The quotient defines
only the declared finite-dimensional invariant relation quotient; it does
not prove that the Warsaw relations are complete or that an action or
observable equivalence follows. The imported reductive/Reynolds chain has
full AC in its actual statement. The current owner-resolution
invariant-review.md inspected its full proof carriers and reports them sound
at their stated interfaces, while retaining their exact publication-review
limits. Carry full AC through the Warsaw contract and both consumers as the
owner's assigned inventory requires; the pointwise field-substitution
calculation itself uses no new choice.

Transitive context observed in the current operator page includes its own
aqft-eft-foundations and qftx-eft-operator-quotients requirements. The
matching/running page has qftx-eft-rg-data as an upstream page requirement.
These are not new batch-27 direct rows. The final current Step 1 check reports
fresh `ready` records for the operator-data carrier and both matching/running
items. An earlier check in this authoring session observed the matching
records missing; the later live records supersede that intermediate status.
The SMEFT/HEFT items do not consume the matching theorem as a mathematical
input, and the A-page requirement remains explicitly represented.

## Sources read and decisions

- Grzadkowski, Iskrzynski, Misiak and Rosiek, “Dimension-Six Terms in the
  Standard Model Lagrangian,” full arXiv v3 PDF,
  https://arxiv.org/pdf/1008.4884. Read §§1–3 and Tables 1–3 on the field
  content, hypercharges, canonical dimensions, source coefficient
  convention, and B-conserving dimension-six operator classes; read §5
  through its scalar-boson reduction arguments and the displayed
  Q_H, Q_HBox and Q_HD representatives. The source reports 59 structures
  before flavor multiplicities and Hermitian conjugates; no 3-generation
  parameter count is adopted here. The contract names the source list and
  its assumptions but does not claim that this workspace has locally proved
  the full classification.
- Adam Falkowski, “Lectures on SMEFT,” full 41-page 2023 lecture PDF,
  https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf.
  Read the assumptions and field-representation table, §3.1 and §3.4 on
  canonical-dimension organization and dimension-six operator classes, the
  HEFT/SMEFT distinction discussion, and §4's basis/EOM example. The
  treatment confirms that dimension-six coefficients are flavor indexed,
  operator bases are non-unique, and a field redefinition can move
  coefficients across operator classes; no source proof of this item's
  branch map is imported.
- Buchalla, Catà and Krause, “Complete Electroweak Chiral Lagrangian with a
  Light Higgs at NLO,” full arXiv v3 PDF,
  https://arxiv.org/pdf/1307.5017. Read §2's nonlinear U and singlet-h
  conventions, §3's loop / chiral counting formula, the NLO operator-class
  discussion, and §5–6's small-xi linear-Higgs limit and dimension-six
  mapping. The paper explicitly warns that canonical-dimension and chiral
  loop orderings are different and that the chiral functions and coefficient
  lists are more general than a finite SMEFT truncation.
- Rodrigo Alonso, “A Primer on Higgs Effective Field Theory with Geometry,”
  full 33-page 2023 KIAS lecture notes,
  https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf. Read §§3.1–3.2 and 4 on
  H=(v+h)U(0,1)^T/sqrt(2), the scalar kinetic identity, the nonlinear
  building blocks and expansion, then §§5.2 and 6 on scalar-metric
  coefficient correlations, analytic field redefinitions and the
  linearization discussion. The lecture's linearization lemma is not used as
  a proof; the local branch result proves the explicit nonzero-doublet patch
  map directly. Its warning that higher-dimensional terms can alter
  dimension-six coefficient correlations is preserved.

Full-body retrieval stamps and per-result source dispositions are recorded
in the batch coverage file. `source-fetch-check --stamp` fetched and stamped
all seven page/source records successfully (four sources on A and three on B),
with no failures or dropped sources.

## Completed item checkpoint — post-aqft-smeft-model

The adopted postulate fixes $M=\mathbb R^{1,3}$ with mostly-plus metric and
natural units; the direct-product global gauge group with integer
hypercharges; three families, no right-handed neutrinos, exact B and L,
arbitrary Yukawa and family-indexed Wilson coefficients, a trivial bundle
sector, a reference radius $v>0$, and a finite local dimension-six
operator model with loop order zero. It names the renormalizable terms and
the $D\le6$ coefficient convention. The item explicitly supplies no measure,
regulator identification, numerical Wilson coefficient, continuum claim or
empirical conclusion.

Direct dependencies and roles are recorded in the carrier: the current
physical operator-data definition is formulation context; the countable
choice and the ready right-principal gauge, associated-derivative and
curvature suppliers establish the exact mathematical conventions. The
current step1Decision result for def-aqft-operator-basis-physical-data is
`ready` with a fresh hash and the inspected dependency closure. The qftx
suppliers also have current ready records. The postulate therefore has no
item-level readiness blocker from its direct dependencies. The real potential
is now stated explicitly as $V_0-\mu_H^2H^\dagger H+\lambda(H^\dagger H)^2$
with real supplied coefficients. B/L exactness is a formal local-interaction
selection rule, with no anomaly-free quantum-current claim. The final current
`step1Decision` reports `ready` and closed for this item.

## Completed item checkpoint — post-aqft-heft-model

The HEFT postulate reuses the preceding model's explicit gauge group, bundle,
non-scalar fields, B/L actions and units. It replaces the linear Higgs
doublet field-space patch by $h\in(-v,\infty)$ and a global
$U\in SU(2)$ Goldstone field with the hypercharge right action
$g_R(z)=\operatorname{diag}(z^3,z^{-3})$. Its scalar two-derivative
interface fixes the metric functions $K,F_C$, their positive local kinetic
domain and the supplied potential; arbitrary smooth functions are retained.
The source conventions are Buchalla–Catà–Krause's nonlinear realization and
Alonso's HEFT field roles. The postulate does not use the general
linearization lemma as a proof.

The only declared in-run dependency is post-aqft-smeft-model as a
formulation prerequisite for the shared non-scalar data, so its computed
item level is 5. The final current `step1Decision` reports `ready` and closed
for this item. No equivalence of the two model field spaces is assumed; the
inherited B/L rule is local to the formal interaction selection.

## Completed item checkpoint — def-aqft-warsaw-basis-contract

The definition adopts the exact B- and L-conserving source list in the
Grzadkowski et al. Tables 2–3, with the source's direct-product SM field and
hypercharge conventions, all three family indices, dimensionless
$C_i/\Lambda_{\mathrm{op}}^2$ coefficients, and its Hermitian-conjugation
convention. The 59 figure is limited to operator structures before flavor
multiplicity and conjugates. It claims no total three-family coefficient
count and no local proof of completeness.

The formal algebraic quotient is explicitly not identified with the full
physical compact-gauge invariant space in this carrier. This is the
source-faithful limit allowed by the physical operator-data contract; the
source list remains the adopted finite coefficient convention used by the
conditional branch theorem. Full AC is stated and directly included in
deps, as required by the exact reductive/Reynolds prerequisite chain. The
current physical operator-data carrier has a fresh current `ready` record;
the mathematical quotient's record is also current and ready. Both exact
interfaces were inspected, and no locally proved classification or physical
quotient equivalence is claimed. The final current `step1Decision` reports
`ready` and closed for this definition.

Source extent: Grzadkowski et al. v3 full PDF, §§1–3 and Tables 1–3, plus
the relevant scalar-class reduction in §5; Falkowski's full lecture PDF,
field table, §3 dimension-six construction and §4 basis/EOM discussion.
The source disposition is a literature-defined coefficient list, not a
locally reconstructed all-flavor basis proof. Source coverage is fetch-
stamped; the proof-contract and proof-layout checks pass. Next: finish final
readiness records and scoped dependency/manifest reconciliation.

## Item order, claims and remaining obligations

1. post-aqft-smeft-model — adopt the explicit linearly transforming SM field
   data and finite local dimension-six model. Direct in-run suppliers:
   def-aqft-operator-basis-physical-data, def-qftx-nonabelian-gauge-data,
   def-qftx-associated-covariant-derivative and
   lem-qftx-principal-curvature-cartan-bianchi. Item level 4. Its operator
   data supplier's actual carrier and current Step 1 ready record are present.
2. post-aqft-heft-model — adopt the nonlinear Goldstone group field and
   independent scalar-singlet model with the same declared non-scalar
   content. It follows post-aqft-smeft-model as a formulation prerequisite.
   Item level 5.
3. def-aqft-warsaw-basis-contract — define the finite source-listed
   B/L-conserving dimension-six coefficient contract and its exact
   flavor/conjugation convention. Direct suppliers:
   post-aqft-smeft-model, def-aqft-operator-basis-physical-data,
   def-aqft-operator-basis-quotient and def-axiom-of-choice. Item level 5.
   The selected algebraic quotient is explicitly formal unless its
   compact-to-algebraic invariant identification is independently supplied;
   no local full Warsaw classification is claimed.
4. def-aqft-chiral-power-counting — define the HEFT additive chiral grading
   and its finite retained order, explicitly separate from canonical
   dimension. Direct suppliers: post-aqft-heft-model and
   def-aqft-local-operator-and-dimension. Item level 6.
5. pthm-aqft-smeft-as-restricted-heft-branch — prove the smooth
   nonzero-doublet field map, equivariance, polynomial / analytic
   radial-function constraints, and the finite coefficient-image
   correlations. The statement excludes the H=0 tip and makes no converse
   or UV-completion claim. Direct suppliers include both model postulates,
   def-aqft-warsaw-basis-contract, def-aqft-chiral-power-counting,
   the exact covariant-derivative / curvature interface and full AC. Item
   level 7.
6. ex-aqft-smeft-heft-observable-map — verify the tree-level scalar kinetic
   and charged-gauge-boson coupling map for a declared dimension-six
   Q_HBox example, including the local positivity boundary for canonical
   normalization. Direct suppliers: the branch theorem, Warsaw representative
   contract, chiral counting definition, SMEFT model and full AC. The direct
   Warsaw edge was added after the example's exact operator was made explicit;
   this refines the proposed inventory's branch-only edge and leaves the
   computed item level 8 unchanged.

The abstract local polynomial substitution is choice-free. Full AC is
nonetheless carried in the Warsaw contract, theorem and example because the
exact selected reductive/Reynolds supplier chain imposes it. No experimental
premise, continuum measure, generic SMEFT-to-HEFT equivalence, complete
HEFT basis enumeration, numerical truncation error or universal UV
completion is asserted.

## Completed item checkpoint — def-aqft-chiral-power-counting

The definition adopts Buchalla–Catà–Krause's connected-diagram chiral degree,
all vertex counts used by the formula, the independent loop cutoff, and the
finite one-loop NLO structural classes. It states explicitly that canonical
dimension is separate and leaves each HEFT function of h/v untruncated. Its
direct in-run suppliers are post-aqft-heft-model (level 5) and
def-aqft-local-operator-and-dimension (current ready record), giving item
level 6. Full BCK §3 and NLO passages, Alonso §§3.2–4, and Falkowski §3.1 are
recorded in coverage; all source URLs are fetch-stamped. The definition review
and finite-boundary worksheet are in the contract; no chiral convergence or
numerical error bound is claimed.

## Completed item checkpoint — pthm-aqft-smeft-as-restricted-heft-branch

The proof constructs the inverse using Sigma=(i sigma2 H*,H) and rho=sqrt(H†H),
checks both compositions, proves the exact SU(2)_L x U(1)_Y equivariance, and
derives the covariant-derivative substitution with the shared right-principal
convention. For the source-defined finite dimension-six list, at most six
scalar factors imply radial polynomials of degree at most six; the finite
coefficient tuple lies in the linear image of the direct substitution matrix.
The H=0 tip is excluded, e^x supplies a strict smooth-function boundary case,
and neither a converse nor a compact-to-algebraic quotient identity is
asserted. Direct in-run dependencies and levels are post-aqft-smeft-model 4,
post-aqft-heft-model 5, Warsaw contract 5, chiral counting 6, and the ready
batch-2 associated-derivative/curvature items; the resulting item level is 7.
Full Grzadkowski, BCK and Alonso passages are source-stamped. The proof
contract and proof-layout validators pass; the final current `step1Decision`
reports `ready` and closed for this theorem.

## Completed item checkpoint — ex-aqft-smeft-heft-observable-map

The worked model retains only real C_HBox at dimension six, uses the local
unitary-gauge configuration H=(0,(v+h)/sqrt(2))^T and compact-support action
boundary condition, and derives the sign of the integrated Q_HBox term under
the mostly-plus metric. It gives K(h)=1+2 C_HBox(v+h)^2/Lambda_op^2 and the
tree-level charged-vector coefficient m_W^2(h)=g^2(v+h)^2/4. On K(0)>0,
the local normal coordinate yields kappa_W=1/sqrt(K(0)); at C_HBox=0 it reduces
exactly to one. A vacuum interpretation uses the potential-minimum assumption
from the SMEFT postulate; otherwise these are reference-point coefficients.
The formula is a model prediction, not a measurement or uncertainty estimate.
Its direct dependencies are the level-7 branch theorem,
Warsaw representative contract, level-6 chiral definition, SMEFT postulate,
and inherited full AC; item level is 8. The Warsaw dependency is direct because
the example consumes its exact Q_HBox interface. The proof-contract and
proof-layout validators pass; the final current `step1Decision` reports
`ready` and closed for this example.

## Current readiness and page dependency disposition

The live authoring-readiness checks show the operator-data definition, the
finite local-operator definition and quotient, the three directly used
batch-2 gauge/derivative/curvature carriers, and both matching/running items
have fresh `ready` records. Thus all three required A-page edges are now
recorded `verified`. These six item proofs do not consume the matching theorem
as a mathematical input, and no matching scale-independence statement is
claimed here. The page edge records an interface check, not independent proof
approval.

## Final decisions and scoped validation

The final `loadStep1Record`/`step1Decision` check reports all six assigned
items `ready`, `closed: true`, with the exact direct dependency arrays in their
carriers. Supplier records were written in dependency order, with no `--owner`
flag and no overwritten escalation. Readiness records the authoring closure;
it is not independent proof acceptance.

Scoped checks after the final item edits:

- `proof-layout.mjs` on all six changed items: 6 items, 11 numbered proof
  steps, 0 defects.
- `proof-contract.mjs --strict --json`: all six contracts checked, 0 errors,
  0 warnings.
- `manifest-deps.mjs`: all 6 manifest items have explicit dependency arrays;
  0 errors.
- `source-fetch-check`: all 7 source/page records fetch-verified and resolved;
  0 failed fetches and 0 documented drops.
- Both A/B page files contain YAML frontmatter only. Their inventories are 5 A
  items and 1 B example.
- Direct-edge reconciliation found 12 expected cross-batch rows and 12
  recorded rows, with no missing, extra, invalid, or duplicate edge.
- Recomputed item levels for the six assigned items match their declared
  levels exactly: 4, 5, 5, 6, 7, 8, with no scoped level errors. The current
  batch graph computes batch 27 at level 5 with prerequisites 2, 16, 25, and
  26; this matches the stored batch-27 level row. The shared level evidence
  remains owner-managed.

The run-wide `item-dependency-levels.mjs check --run` exits nonzero because it
also sees out-of-scope empty inventories on these page pairs:
`qftx-susy-breaking-and-phenomenology` / `qftx-susy-breaking-and-phenomenology-examples`,
`qftx-susy-scft-and-frontier` / `qftx-susy-scft-and-frontier-examples`,
`qftx-thooft-anomalies` / `qftx-thooft-anomalies-examples`,
`qftx-global-anomalies-inflow` / `qftx-global-anomalies-inflow-examples`,
`qftx-anomaly-matching-and-frontier` / `qftx-anomaly-matching-and-frontier-examples`,
`aqft-eft-anomalies` / `aqft-eft-anomalies-examples`,
`aqft-susy-effective-theories` / `aqft-susy-effective-theories-examples`,
`aqft-eft-experimental-inference` / `aqft-eft-experimental-inference-examples`,
`qftx-qexact-field-theory-localization` / `qftx-qexact-field-theory-localization-examples`,
`qftx-s3-partition-functions` / `qftx-s3-partition-functions-examples`,
`qftx-s4-partition-functions` / `qftx-s4-partition-functions-examples`,
`qftx-instanton-localization-physics` / `qftx-instanton-localization-physics-examples`,
`qftx-bps-indices` / `qftx-bps-indices-examples`,
`qftx-physical-hall-bps-wall-crossing` / `qftx-physical-hall-bps-wall-crossing-examples`,
and `qftx-spectral-networks` / `qftx-spectral-networks-examples`. It also reports declared vs
computed item-level mismatches outside this batch:

| Item | Declared → computed |
|---|---:|
| post-qftx-n2-vector-hypermultiplet-model | 3 → 6 |
| post-qftx-n4-super-yang-mills-model | 4 → 7 |
| ex-qftx-n2-hypermultiplet-gauge-invariants | 4 → 7 |
| ex-qftx-n2-quadratic-prepotential | 4 → 7 |
| ex-qftx-n4-adjoint-hyper-decomposition | 5 → 8 |
| ex-qftx-n4-su2-noncommuting-scalar-potential | 5 → 8 |
| def-qftx-n2-coulomb-branch-data | 5 → 7 |
| def-qftx-n2-monopole-local-dual-higgs-model | 6 → 8 |
| def-qftx-n2-dual-higgs-flux-tube-sector | 7 → 9 |
| post-qftx-n2-seiberg-witten-effective-solution | 7 → 9 |
| pthm-qftx-n2-bps-central-charge-mass | 8 → 10 |
| pthm-qftx-n2-dual-higgs-vortex-flux-and-tension | 8 → 10 |
| pthm-qftx-n2-monopole-condensation-after-n1-perturbation | 9 → 11 |
| ex-qftx-n2-monopole-perturbed-vacuum | 7 → 9 |
| post-qftx-rigid-supersymmetric-background | 3 → 8 |
| ex-qftx-susy-round-s4-localization-data | 4 → 9 |

No batch-27 item appears in that run-wide error set, and no out-of-scope item,
page, shared plan, or engine file was changed. Batch 27 has no remaining
authoring prerequisite gap; later independent review and page acceptance remain
separate workflow stages.
