# Batch 33 authoring notes

## Supplier refresh checkpoint before final validation (2026-10-23)

The current batch 31 and 32 manifests and page carriers now exist. This
supersedes the earlier provisional note below that those page/carrier files
were absent. `post-qftx-n2-vector-hypermultiplet-model` is present in batch
31, but its current Step 1 record is missing. Its complete Postulate states
one hypermultiplet in an arbitrary finite-dimensional unitary representation;
the pure-SU(2) data authored here require no matter hypermultiplets. The
actual interface therefore does not discharge the empty-matter prerequisite.
This mismatch and the missing readiness record are recorded in the Coulomb
branch Definition, local monopole Definition, Seiberg--Witten Postulate, the
monopole theorem's [A1], and the cross-batch ledger. Consumers stay
conditional; no other pair's model supplier is edited or copied.

The Ward page is present with its definition and theorem carriers. The
definition has a current ready record; the theorem is escalated because its
superspace action/vector convention does not match the required N=1
superspace page interface, and the batch 31 prerequisite items lack current
records. The extended-actions page currently lists four A-page items (two
lemmas and the N=2/N=4 Postulates), and all four current Step 1 records are
missing. Therefore the batch 31 item edge and the batch 31/32 page edges
remain open.
By contrast, all items on the batch 5 instanton-mathematics page and batch 29
algebra-and-multiplets page currently have `ready` Step 1 records. The batch 1
central-charge theorem and unitary-representation definition also have current
`ready` records; their complete relevant statements and proof hypotheses were
inspected for the BPS theorem. These are authoring-readiness checks, not
independent proof approval.

After the new suppliers entered the run inventory, item levels were
recomputed from the actual nonempty run manifests. Batch 33 levels are:
vacuum data 0; Coulomb data 7; local monopole data 8; flux-tube data 9;
Seiberg--Witten Postulate 9; BPS theorem 10; flux/tension theorem 10;
monopole theorem 11; classical U(1) example 1; anomaly example 0; and local
monopole example 9. Empty scaffold pages were excluded as they contain no
carrier. The batch-level dependency graph remains a distinct scheduling
calculation.

All eight assigned external sources have now passed
`source-fetch-check --stamp` (8/8 verified, 0 dropped). The optional D'Hoker--
Phong and Alvarez-Gaume--Hassan retrieval failures remain preserved in
`retrieval_history`; neither is cited or used, and all source obligations are
covered by the successfully inspected full texts recorded below and in the
source-resolution evidence. The exact finite-energy vortex existence and
energy-minimization gap remains unresolved; the main theorem retains its
conditional claim and must be escalated. Scoped validators and Step 1 records
are still pending at this checkpoint.

The numbered authoring checkpoints below record the state immediately after
each item was written; their pending/absent statements are historical and are
superseded by the final closeout checkpoint below.

## Final closeout checkpoint (2026-10-23)

All 11 assigned items and both frontmatter-only pages are complete. Current
Step 1 records are `ready` for `def-qftx-susy-vacuum-moduli-data`,
`ex-qftx-susy-u1-pair-classical-vacuum-moduli`, and
`ex-qftx-n1-sqcd-su-nf-cubic-anomaly-check`; the other eight items are
`escalated` on their exact current input gaps. The item-level readiness of
those three independent carriers does not close the separate open page edges
from the A page to batches 31 and 32, or the B page's dependency on its A page.

Final scoped results: proof layout checked 11 items / 25 steps with zero
defects; strict proof contracts checked all 11 items with zero errors and
warnings; normative precheck had 7 applicable items checked and zero failures;
renderer passed for the 11 items and both pages; content policy passed for
11 items with zero errors/warnings; dependency and forward-reference checks
passed for the selected items and their page cycles; extcheck passed; all 8/8
source entries remain fetch-verified and resolved, with zero documented
drops. The current computed item levels for the assigned carriers match both
their frontmatter and manifest values (11 items, maximum level 11).

The run-wide batch-level check reports a stale raw-manifest input hash. Its
current and recorded dependency graphs are identical: batch 33 remains level
6 with requirements 1, 5, 29, 31, and 32, and the graph maximum remains 9.
The shared run-level dependency snapshot is owner-owned and was not rewritten.

Cross-batch status remains two verified page edges (batches 5 and 29), two
open page edges (batches 31 and 32), two verified item edges to the ready
batch-1 mathematical suppliers, and four open item edges to the batch-31 N=2
model Postulate. Its carrier is present but has no Step 1 record and specifies
one hypermultiplet in an arbitrary unitary representation, which does not
match this batch's pure no-hypermultiplet SU(2) input. The batch-31 extended
actions page has four A items, all lacking current readiness records. On the
batch-32 Ward page, the action-data definition is ready but the theorem is
escalated because its vector/superspace normalization does not match the
required N=1 superspace page interface; the exact convention gap is recorded
in that current supplier decision and summarized above. These are open page
inputs for this pair.

The monopole theorem's confinement clause remains conditional on a minimizing
finite-energy nonzero-winding vortex and uniformly bounded endcaps. No
inspected source or local helper proves vortex existence or minimization. The
proposed A-page supplier is a theorem for the exact local Seiberg--Witten
dual-Higgs action and chosen charge/boundary sector, including existence,
minimization, and endcap estimates. No assigned item is weakened to fit the
missing arguments.

## Scope and plan comparison

This batch owns the A/B pair `qftx-susy-moduli-and-dualities` /
`qftx-susy-moduli-and-dualities-examples` only. The complete design section
is `research/plan-advanced-qft-and-supersymmetry-track.md`, “Supersymmetric
Moduli, Seiberg–Witten Data and Duality Questions.” The current canonical
`research/plan-spec.json` rows agree with the design and batch task on page
IDs, companion, category/library, title, order 989, and all four `requires`
edges. No plan/design conflict was found.

The original empty item arrays in batch 33 are planning placeholders. The A
scope is classical and quantum vacuum moduli, the source-qualified pure
ℕ=2 su(2) Seiberg–Witten low-energy data, its central-charge map,
and the local monopole-condensation argument. The B scope includes worked
classical moduli, one non-Abelian duality consistency check, and a monopole
vacuum calculation. The N=1 anomaly check is explicitly not a proof of
Seiberg duality. No new open-problem item is added: the owner direction says
the unreviewed duality questions are not suppliers or production open problems
unless a separate current source/status review establishes that classification.

## Dependency graph and current interfaces

The run dependency-level file assigns batch 33 level 6, with page suppliers
from batches 5, 29, 31, and 32. Lower levels prioritize authoring and are not
a wait barrier. Page-level dependencies are:

- `qftx-susy-algebra-and-multiplets` (batch 29);
- `qftx-susy-extended-actions` (batch 31);
- `qftx-susy-ward-and-nonrenormalization` (batch 32);
- `qftx-instanton-topology-mathematics` (batch 5).

Direct supplier checks performed with
`loadStep1Record(process.cwd(), "advanced-qft-supersymmetry-build-2026-10-23")`
and `step1Decision`:

- `thm-qftx-n-extended-central-charge-bounds`: batch 1, item dependency
  level 2, current Step 1 decision `ready`. I read its complete statement and
  proof. It assumes Countable Choice (ACω), uses
  η=diag(-1,1,1,1), ε₁₂=1, natural units, a massive
  rest-fiber representation, a common invariant product domain, and actual
  Hilbert adjoints. For ℕ=2 it proves ∥Z∥=|z|, the central-charge
  anticommutator, and annihilation by the null charge pair at equality.
- `def-qftx-unitary-super-poincare-representation`: batch 1, item level 1,
  current Step 1 decision `ready`. I read its complete definition. It gives
  the same η, spinor, adjoint, spectral, and domain conventions and
  explicitly inherits only ACω.
- `qftx-susy-algebra-and-multiplets`: current A-page carrier exists. The
  current `pthm-qftx-n2-bps-saturation-kernel-equivalence` has a current
  `ready` record. The batch 33 BPS argument uses the exact batch 1 central
  charge theorem and does not infer existence or stability of a charge sector.
- `qftx-instanton-topology-mathematics`: current mathematics A page exists
  with the inventory shown in batch 5. Its Hodge decomposition, instanton
  number, and self-dual-bound items have current `ready` records. No
  instanton claim is used as a premise in this batch's SW or monopole proofs.
- `qftx-susy-extended-actions`: the batch 31 page currently lists two
  mathematical lemmas plus the N=2 and N=4 Postulates; all four current Step 1
  records are missing. The N=2 Postulate fixes the compact gauge group,
  vector/chiral decomposition, coupling, units, and prepotential convention,
  but also specifies one hypermultiplet in an arbitrary finite-dimensional
  unitary representation. This does not match the pure-SU(2), empty-matter
  interface used by this batch. Consumers are conditional and do not treat
  the current one-hyper Postulate as proving purity.
- `qftx-susy-ward-and-nonrenormalization`: the batch 32 A page and both
  carriers exist. Its Wilsonian-action definition has a current ready record;
  its theorem is escalated on an exact interface mismatch between the
  required N=1 superspace page's $e^{2gV_R}$ / field-strength convention and
  the theorem's $e^{-V_i}$ / field-strength convention. Batch 31's required
  N=2/N=4 Postulates also have missing current readiness records. No Ward
  theorem is used to prove the SW curve; the SW solution remains an adopted,
  sourced low-energy Postulate.

The batch 31 model carrier is not duplicated here. Consumers retain its exact
item ID in `deps`, Facts/Assumptions or Definition/Postulate references, and
the cross-batch ledger. Its actual one-hypermultiplet interface has been
inspected and found not to supply the empty-matter pure model; its Step 1
record is also missing. Readiness remains escalated until both issues are
resolved. The required Ward page is present, but its theorem is escalated on
the stated superspace interface mismatch and the batch 31 model items have no
current Step 1 records; that page edge remains open.

## Source reading and current disposition

The following full texts were opened and the listed relevant arguments were
inspected. These are research inputs, not proof approval:

- N. Seiberg and E. Witten, “Electric-Magnetic Duality, Monopole
  Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory,”
  https://arxiv.org/pdf/hep-th/9407087v1. Read the four-dimensional SU(2)
  model and conventions in §§1–2.3, the low-energy prepotential/duality and
  charge normalization in §§3–4, the strong-coupling singularity argument in
  §5.2, the local monopole effective theory and F/D equations in §5.6, and
  the proposed curve and period data in §6. The paper expressly calls the
  singularity input a proposal; its local low-energy analysis does not
  construct an ultraviolet continuum QFT.
- A. Bilal, “Duality in N=2 SUSY SU(2) Yang-Mills Theory: A Pedagogical
  Introduction to the Work of Seiberg and Witten,”
  https://arxiv.org/pdf/hep-th/9601007v1. Full 34-page lecture notes. Read
  §§2.2–2.3 on the N=2 action and classical moduli, §4.3 on the BPS mass and
  electric/magnetic period pairing, §5.3 on the light monopole/dyon singular
  patches, and §§6.1–6.2 on the curve/period solution. The author notes this
  is an exposition of the original proposal and does not turn it into a
  constructive continuum proof.
- D. Tong, “Supersymmetric Field Theory,”
  https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf.
  Full lecture-notes PDF. Read §4.3, printed pp. 109–121, for the F/D-flat
  quotient and classical moduli examples; §4.4.1, printed pp. 125–128, for
  the N=2 vector-plus-adjoint-chiral model; and §§6.5.1–6.5.2, printed
  pp. 196–204, for the SQCD dual field data, the SU(Nf)^3 anomaly check, and
  its status as consistency evidence rather than a proof of equivalence.
- N. Seiberg, “Electric-Magnetic Duality in Supersymmetric Non-Abelian Gauge
  Theories,” https://arxiv.org/pdf/hep-th/9411149v1. Full 22-page primary
  paper. Read §§1–3, especially the electric/magnetic field and charge
  assignments and the displayed ’t Hooft anomaly table. The paper presents
  the dual fields as a proposal and anomaly matching as a consistency
  condition; it does not prove equality of the continuum theories.

Two independent full-text treatments for the page are Seiberg–Witten and
Bilal, supplemented by Tong's independent lecture notes for moduli and the
N=1 consistency example. The detailed per-item source/use/disposition records
and actual `source-fetch-check --stamp` results will be written to the
batch source-coverage and source-resolution evidence after the carriers are
complete. At this checkpoint, no source-fetch stamp has yet been claimed.

## Authoring order, current claims, and remaining obligations

Planned A suppliers will be authored before their A consumers: classical
F/D-vacuum and Coulomb-branch definitions; local monopole effective-data and
flux-sector definitions; the source-qualified SW postulate; the BPS mass
theorem; then a conditional flux-tube calculation and the monopole
condensation theorem. B examples will follow those A carriers.

The main monopole theorem's algebraic F/D solution and Higgsing can be proved
from the explicit local effective model. The stated source does not furnish a
local proof that a finite-energy Nielsen–Olesen flux-tube solution exists in
the exact SW patch. A separate local conditional theorem will prove flux
quantization and linear energy **given** such a finite-energy tube and
bounded end-cap energy. It will not claim existence. Unless an inspected
current mathematical or physical supplier proves that existence result with
matching hypotheses, the unqualified confinement part remains an exact
readiness blocker to report to the owner with the affected claim and proposed
supplier placement.

Planned B examples are:

- a complete F/D-flat U(1) one-flavor classical moduli quotient calculation;
- an SU(Nf)³ anomaly matching calculation for the proposed N=1 SQCD dual
  field content, expressly not a proof of duality;
- a source-normalized local monopole vacuum calculation with symbolic small
  perturbation and no invented measurements or framework-wide claim.

At initial checkpoint, no pages, items, contracts, source stamps, dependency
rows, scoped validator results, or Step 1 readiness records had been authored
for batch 33.

## Checkpoint after item 1

Authored `def-qftx-susy-vacuum-moduli-data` on the A page at provisional
dependency level 0, with no item dependencies. Its definition fixes the
canonical finite-dimensional F/D data, compact-group orbit quotient, and
stability convention; the quantum vacuum set is defined only conditionally on
an already constructed Hilbert-space theory. It does not identify the
classical and quantum sets or assume a path-integral/continuum construction.
The exact claim is in
`items/def-qftx-susy-vacuum-moduli-data.md`.

Source used: David Tong, *Supersymmetric Field Theory*, §4.3, printed
pp. 109–121, https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf.
The F/D quotient and its compact-gauge interpretation support the classical
definition; Tong's quantum discussion is not imported as a theorem about the
chosen SU(2) model. Statement links are placed after the uninterrupted
Definition. No proof or finite check applies to this definition. Scoped
formatting, rendering, content-policy, source-fetch, and readiness recording
remain pending until the carriers and source evidence are complete.

Next action: author the N=2 Coulomb-branch data definition using the planned
batch 31 model-postulate interface; its actual carrier/readiness remains
missing and must be recorded as conditional.

## Checkpoint after item 2

Authored `def-qftx-n2-coulomb-branch-data` with dependency level 5,
provisionally computed as one plus batch 31's planned page level 4 for the
missing `post-qftx-n2-vector-hypermultiplet-model` supplier (and the local
vacuum-moduli definition at level 0). It explicitly selects the pure
four-dimensional rigid ℕ=2 SU(2) model, fixes the weak-coupling scalar
normalization (u=a^2/2), defines the local electric/magnetic period and
prepotential data, states natural units and dimensions, and separates the
formal ℤ² label lattice from actual line operators or stable states.
The source-solution curve and singularities are not asserted here; they are
reserved for the separate postulate.

Its current direct dependencies are
`def-qftx-susy-vacuum-moduli-data` and the planned
`post-qftx-n2-vector-hypermultiplet-model`. The latter's exact planned
contract is the compact gauge group, vector/hyper representations, N=1
decomposition, √2 coupling, masses, units, and prepotential convention;
its actual item carrier/readiness is still missing. The definition is
therefore conditional and not readiness-complete. The item cites Seiberg–
Witten §§2.2–2.4 and §5.1, Bilal §§2.2–2.3, and Tong §4.4.1 at the
locators recorded in the item and source-coverage draft. Source fetch stamps
and scoped checks remain pending.

Next action: define the local dual monopole effective data before the
Seiberg–Witten solution postulate and its consuming theorems.

## Checkpoint after item 3

Authored `def-qftx-n2-monopole-local-dual-higgs-model` at provisional item
level 6. It defines the one-singularity dual U(1) field content, charges,
canonical local kinetic data, superpotential
$W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, D map, potential, units,
cutoff regime, and the explicit fact that a vortex solution is not included.
The statement preserves the Seiberg–Witten source normalization and makes no
claim outside the local patch.

Its exact dependencies are
`def-qftx-n2-coulomb-branch-data` and the missing planned
`post-qftx-n2-vector-hypermultiplet-model`; the latter is a physical input,
not a proved result. The carrier remains absent, so this definition is
conditional and cannot receive a current ready record. Sources inspected:
Seiberg–Witten §5.6, equations (5.17)–(5.21), and Bilal §5.3, printed
pp. 20–21. The statement is uninterrupted; external sources and supplier
links follow it in its Definition references section. Scoped checks and source
fetch stamps remain pending.

Next action: define the dual flux-tube sector precisely, including the
existence hypothesis that the effective action alone does not establish.

## Checkpoint after item 4

Authored `def-qftx-n2-dual-higgs-flux-tube-sector` at item level 7. It
defines a smooth finite-energy, nonzero-winding transverse profile, the
supersymmetric asymptotic vacuum, the dual magnetic flux used as the selected
original electric-flux sector, and tension as the transverse energy. It
explicitly does not assert that a profile exists or is stationary. Its direct
definitions are the Coulomb-branch frame and local dual Higgs model; both
current item dependencies are batch-local except for the model definition's
still-missing batch 31 postulate. The new definition adds no proof of that
existence claim.

Source use: Seiberg–Witten §5.6 supplies the local monopole-condensation
context. Tong's full TASI notes, §4.6.2, printed pp. 106–108, discuss the
Meissner/flux-tube picture in a different N=2 SQCD model and explicitly note
that the bulk nontrivial solution is not known analytically. That discussion
is not imported as an existence theorem for this pure-SU(2) SW patch.
Source-fetch stamps and scoped validators remain pending.

Next action: author the SW solution postulate, with its singularities and
charge map clearly marked as adopted source-proposed low-energy data.

## Checkpoint after item 5

Authored `post-qftx-n2-seiberg-witten-effective-solution` at provisional
item level 7. It adopts pure rank-one SU(2) N=2 data, the dimensionless curve
$y^2=(x-1)(x+1)(x-u/\Lambda^2)$, the SW differential, local period/
prepotential convention, charge normalization, the source's counterclockwise
monodromies, and the two light monopole/dyon singularity assumptions. The
source's proposed (u)-plane and Z2 action are stated as postulates. It does
not adopt the BPS mass as a premise: it fixes only
$z=\sqrt2(n_ea+n_ma_D)$, leaving the mass bound to the consuming theorem.
The source status and non-construction boundary are explicit.

Direct dependencies: the Coulomb-branch data definition, the local dual
monopole-Higgs definition, and the missing planned N=2 vector/hypermultiplet
postulate. Source reading was completed from Seiberg–Witten §§5.2–5.6 and §6
and Bilal §§5.3 and 6.1–6.2. Their actual locators are in the item and will be
repeated in source coverage. No source-fetch stamp or scoped precheck has yet
been recorded; readiness cannot be marked ready while the batch 31 model
carrier is absent.

Next action: prove the physical BPS mass inequality from the ready
mathematical central-charge theorem and this exact normalization map.

## Checkpoint after item 6

Authored `pthm-qftx-n2-bps-central-charge-mass` at provisional dependency
level 8. Its statement conditions on an existing massive N=2 rest-fiber
representation with the actual common product domain and exact source period
map. Its complete local proof uses only the mathematical bound
`thm-qftx-n-extended-central-charge-bounds`, the unitary-representation
domain definition, ACω, and the adopted normalization
$z=\sqrt2(n_ea+n_ma_D)$. It proves $M\ge\sqrt2|n_ea+n_ma_D|$ and the
null-charge annihilation at equality. It makes no existence/stability claim.

The theorem and unitary-representation suppliers were freshly checked with
`loadStep1Record`/`step1Decision`; both currently have `ready` records.
Their complete statements and the central-charge proof were inspected,
including the Countable Choice strength, metric/sign, actual adjoint, domain,
and natural-unit hypotheses. The source period normalization was inspected
in Seiberg–Witten §1 and §4 and Bilal §4.3. The item is still not ready because
its own period definition and postulate depend on the missing batch 31 model
carrier. The complete proof contract, source-reference disposition, and
scoped formatting checks are not yet generated.

Next action: author the conditional flux-tube lemma before the main
monopole-condensation theorem; keep vortex existence explicitly outside its
proved scope.

## Checkpoint after item 7

Authored `pthm-qftx-n2-dual-higgs-vortex-flux-and-tension` at item level 8.
Its complete conditional proof uses the explicit boundary degree and
asymptotic gauge-phase condition to obtain $\Phi_D=2\pi n$ by a polar
coordinate integration, then uses the positive Maxwell term to obtain
$\sigma>0$. It proves no vortex existence, stationarity, minimization, or
linear potential. Dependencies are the two local effective-model
definitions, both physically scoped and current in this batch.

The relevant independent full lecture text was inspected directly: Tong,
*TASI Lectures on Solitons*, §4.6.2, printed pp. 106–108. It discusses
Meissner flux tubes in a different N=2 SQCD setup and states that its bulk
nontrivial solution is not known analytically; this is a limitation, not a
supplier for existence in the pure-SU(2) Seiberg–Witten patch. The helper
proof is local and does not rely on that source's unproved existence claim.
Contract generation, precheck, render, source-fetch, and readiness recording
remain pending.

Next action: author the local monopole condensation theorem with its exact
F/D calculation and the unresolved flux-tube existence/minimization condition
stated as a separate blocker.

## Checkpoint after item 8

Authored `pthm-qftx-n2-monopole-condensation-after-n1-perturbation` at
provisional item level 9. The local proof differentiates
$W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, solves all F/D equations,
shows the unique local gauge orbit has
$A_D=0$, $M\widetilde M=-\mu u'(0)/\sqrt2$, and
$|M|=|\widetilde M|=(|\mu u'(0)|/\sqrt2)^{1/2}>0$, then computes the
positive dual-vector mass with the explicit canonical kinetic normalization.
This proves the local monopole Higgs vacuum conditionally on the adopted
effective data.

The confinement clause is retained but explicitly conditional on the exact
additional premise that the chosen external-charge sector has a minimizing
finite-energy nonzero-winding tube for sufficiently large separations and
uniformly bounded endcaps. Under that premise, the local flux/tension theorem
gives $\Phi_D=2\pi n$, $\sigma>0$, and $V(L)=\sigma L+O(1)$. The source and
the local helper theorem do not prove existence or minimization of that
profile. This is a genuine unresolved prerequisite, so this item must be
recorded `escalated`, with the affected confinement claim and a proposed
local supplier/owner resolution identified below.

Exact current dependencies: `def-qftx-susy-vacuum-moduli-data`,
`def-qftx-n2-coulomb-branch-data`,
`def-qftx-n2-monopole-local-dual-higgs-model`,
`def-qftx-n2-dual-higgs-flux-tube-sector`,
`post-qftx-n2-seiberg-witten-effective-solution`,
`post-qftx-n2-vector-hypermultiplet-model`, and
`pthm-qftx-n2-dual-higgs-vortex-flux-and-tension`. The planned batch 31
postulate carrier is still absent. Sources inspected: Seiberg–Witten §5.6,
Bilal §5.3, and Tong §4.6.2 with Tong's different-model and solution-status
limitations preserved. No source-fetch stamp or scoped validation has yet
been recorded.

Proposed missing supplier if the owner requires the unqualified flux
confinement claim: an A-page mathematical/physics result proving existence
and energy-minimizing status of a finite-tension nonzero-winding vortex for
the exact local SW dual-Higgs effective action, with its boundary conditions,
charge sector, and endcap estimates. A generic Abelian-Higgs/Taubes theorem
would need an inspected exact interface and proof that its hypotheses match
this N=1-perturbed SW model; Tong's different N=2 SQCD vortex discussion is
not that supplier.

Next action: finish the B companion with the complete classical-moduli,
N=1 anomaly-check, and local monopole examples, then construct both
frontmatter-only pages.

## Checkpoint after item 9

Authored `ex-qftx-susy-u1-pair-classical-vacuum-moduli` on the B page at
item level 1. Its complete verification computes the zero F/D locus for a
one-flavor U(1) pair, proves the product invariant is surjective on
$\mathbb C$, and proves its fibers are exactly the compact-U(1) orbits,
including the zero-product case. The only logical supplier is
`def-qftx-susy-vacuum-moduli-data`; no quantum correction or continuum claim
is made. Source: Tong, *Supersymmetric Field Theory*, §4.3.1, printed
pp. 112–116. The example is marked `ai-generated` with the required
`generation.role: example`; source-fetch and scoped validators remain
pending.

Next action: author the SU(Nf) cubic anomaly consistency check with its
electric and proposed magnetic field content fully stated.

## Checkpoint after item 10

Authored `ex-qftx-n1-sqcd-su-nf-cubic-anomaly-check` on the B page at
item level 0, with no logical item dependencies. It states the electric and
proposed magnetic field representations and the cubic-anomaly normalization,
then proves directly that
$N_c=-(N_f-N_c)+N_f$. It explicitly limits the result to one
't Hooft-anomaly consistency check and does not assert equality of theories.
Sources read for this use are Seiberg's primary paper §3, printed pp. 6–8,
equations (3.1)–(3.4), and Tong's full notes §6.5.1, printed pp. 198–200;
Tong explicitly characterizes the matching checks as evidence rather than
proof. Source-fetch stamps and scoped validators remain pending.

Next action: author the symbolic monopole-vacuum example from the completed
local F/D argument, then the remaining B page and its proof contracts.

## Checkpoint after item 11

Authored `ex-qftx-n2-monopole-perturbed-vacuum` on the B page at item level
7, with direct dependencies on the local monopole-Higgs definition and the
vacuum-moduli definition. The example fixes a symbolic small nonzero $\mu$,
solves the exact local F/D equations, identifies the unique gauge orbit, and
computes the positive dual vector mass. It expressly excludes vortex
existence and confinement. Its local proof is source-qualified by the exact
Seiberg–Witten §5.6 and Bilal §5.3 treatments; no numerical measurement is
involved. The current item has an explicit nonzero-derivative patch
hypothesis.

The A/B source chain still has the missing batch 31 model postulate; this B
example consumes only the local field-data definition at its actual inspected
interface. Source-fetch, scoped validators, proof-contract generation, and
readiness recording remain pending.

Next action: construct both frontmatter-only pages, update the manifest, then
finalize the complete proof contracts and batch evidence.


## Owner source/model repair addendum (2026-10-23)

The current source and model repair is recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/seiberg-witten-vortex-repair.md`. It adds an independent pure ultraviolet model datum; corrects the local connection-normalized neutral kinetic/F potential and omitted gradient; corrects phi=a sigma3/2; and proves the critical linear-truncation square identity/minimum and fixed-flux cylinder estimates conditional on a supplied planar solution and collars. The arbitrary-divisor existence prerequisite has an explicit mathematical plan fragment. Generic nonlinear soft-breaking confinement remains a distinct unresolved approved obligation. Original author checkpoints and native escalations are preserved; no readiness acceptance is claimed.


## Owner continuation: generic nonlinear classical confinement resolved

The current fifteen-item batch includes an actual generic nonlinear magnetostatic confinement theorem. Explicit potential comparison, broad-class M-phase cleanup/L2 tails, smooth fixed-width collars and epsilon-near-minimum trial profiles prove tau_n>0 and I_n(L)/L->tau_n on the precisely stated compact valid neutral patch with positive bounded metric and constant theta. No noncritical minimizer, Taubes profile or generic O(1) remainder is assumed. This supersedes the preceding owner checkpoint's claim that generic classical confinement remains unresolved; that earlier record is retained as history. The stronger exact critical/BPS arbitrary-divisor existence and equality prerequisite is separately registered in the owner plan fragment and canonical scaffold. The pure UV postulate uses the final upstream raw-matrix versus abstract-Lie field-strength dictionary. Current details, scope, consumer checks and checksums are in the owner repair report; native decisions remain root-owned.
