# Batch 32 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-32`.
Scope: four touched items, no reader/refuter findings and no page obligations.
Review order: action definition, nonrenormalization theorem, FI example,
wavefunction example. No agents, judging, stamping or publication was initiated.

## Historical binding

All four `git show ed1918c2084e80da95f40e1f44f768c10fbd075a:physics/items/<id>.md`
sources reproduce their exact frozen pre-reader SHA256 values. Before Alpha
edits, all four current raw files reproduce their frozen post-reader hashes.
The committed/current comparison therefore authenticates the actual reader
delta; no missing-preimage exception or owner authorization is assumed.
The reader report and both empty finding artifacts were read independently.

## Level 5: def-qftx-wilsonian-n1-action-data

Retain the reader's correction of the Kähler definition: on an open subset of
complex coordinate space a smooth real potential has a Hermitian complex
Hessian and closed associated form; positive definiteness, rather than mere
nondegeneracy, is required for a Kähler metric. For example,
`K=|z1|²-|z2|²` has a nondegenerate indefinite Hessian and refutes the old
wording. Degenerate Hessians remain allowed action data without being called
metrics. The engineering dimensions agree with the two-derivative kinetic term.

Retain integrated gauge invariance for G: the explicit Abelian shift of V has
a chiral plus antichiral variation, whose D-integral vanishes under the stated
boundary conditions. This resolves the old conflict between pointwise invariant
G and the admitted constant FI term. Full off-shell coefficient backgrounds and
their higher jets are explicit adopted formal data, not a regulator existence
result. Empty matter, trivial gauge group, trivial representations and the
strict cutoff inequalities remain admissible as stated.

Read all eleven direct suppliers. The published matrix-group, closed-subgroup,
tangent-algebra and differential-homomorphism results explicitly carry countable
choice; the finite matrix calculations add none. The superspace definition fixes
smooth finite Grassmann coefficients, ordered measures and left derivatives.
The physical-normalization supplier gives D=-rawD/4, F=rawF/2 and the stated
D-to-F projection. The vector supplier's selected SU(2) bridge gives the same
matrix curvature and tau=pi*i/g², with gh=2g. The BRST supplier and its full
nilpotence proof give the required signs and representation identity, without
implying quantum anomaly cancellation. The vector supplier's gauge-data,
Yang–Mills postulate and chiral-coordinate lemma were also inspected at their
actual conventions.

Direct consumers are the owned theorem and two examples, and outside
`def-aqft-susy-wilsonian-action`. The latter already requires integrated gauge
invariance, uses no indefinite-as-Kähler assertion, and does not derive regulator
existence from free spurion jets; its actual Definition remains compatible and
requires no edit. No next-hop repair is triggered. Definition references are
after the complete Definition. No diagram is present or needed.

Sources inspected: Weinberg, arXiv:hep-th/9803099v1, equations (1)–(12) and
the FI paragraphs (HTML full-text counterpart of the cited version); Dienes,
Kolda and March-Russell, arXiv:hep-ph/9610479, §2 equation (2.2) and §3.1
equations (3.1)–(3.3). Martin source checks and remaining item dispositions
are recorded below when complete. No empirical premise is involved.

Next action: complete the theorem's invariant-form and graph review and route
its outside consumer's stale full-integrand inference.


## Level 6: pthm-qftx-n1-wilsonian-f-term-nonrenormalization

Retain the reader's collection of all matter-independent quadratic gauge terms,
including Abelian mixing, into the finite invariant-form coefficient vector.
Dienes et al. §2 (2.2), §3.1 (3.1)–(3.3) supply an explicit mixing channel;
the old assertion that the unreclassified F is unchanged was too strong.
The revised remainder statement keeps all other holomorphic interactions.

Amended Proof 3.1: a complex invariant-form basis need not consist of real
forms, so its individual real coordinate shifts need not be theta shifts.
Taking Q=iR already exposes the error. Restricting complex forms to the real
Lie algebra and taking their real and imaginary parts constructs the needed
real form of the invariant space. An invertible fixed complex coefficient
transformation then reduces to a real basis for the shift argument; transforming
back preserves affine dependence and the uniform graph scaling. No field or
measure is rescaled. The contract derivation now contains the actual repaired
step. No Statement or physical scope changed in this Alpha amendment.

Recomputed steps 4.1–5.1: positive weights force bracket two for the constant
scaling degree, with exactly the listed pure-gauge, single-B, matter and mixed
cases. The matter cases have I_vector=0 and no external antichiral matter;
contracting all antichiral ends leaves no external chiral ends. The two pure
gauge cases and both matter cases have loop number one; the single B insertion
is a tree. The mixed case has a bridge and fails the explicitly adopted vertex
1PI convention. The source prose C2=2 conflicts with Weinberg (12); C2=1 is
forced by that equation and is correctly retained locally.

The FI argument is conditional on unconstrained coefficient backgrounds and
independent second jets before constant evaluation. Arbitrary chiral test
pairings enforce D²S=barD²S=0; their independent second-jet coefficients remove
all real and antichiral coefficient dependence, and reality removes chiral
dependence. This concerns the derivative-free coefficient; real linear
multiplets with derivative data remain distinct. The remaining canonical
matter tadpole has the common regulated integral times the exact charge trace.
No numerical integral, existence theorem or observation is inferred.

The current local risk review is complete. Interface-propagation closure is
**escalated**: outside batch 45,
`pthm-aqft-wilsonian-superpotential-nonrenormalization`, Proof 1.1, still asserts
F_lambda(Phi,W)=F_Lambda0(Phi,W) for the full integrand. Its F2 also describes
only a separately displayed coupling exception. The corrected supplier protects
F_rem and allows the full quadratic gauge vector to run. A sound surgical repair
is to set W=0 first: every quadratic kinetic polynomial vanishes there, so
W_lambda(Phi)=W_Lambda0(Phi), after which its existing fixed linear projection
proves the unchanged conclusion. The owner must route this correction and its
contract citation/derivation synchronization to batch 45, and acknowledge the
consumer review before closing this supplier's changed public interface.
No substantial new mathematical supplier is missing; the unmet prerequisite
for closure is the authorized outside-consumer correction. The outside carrier
was read fully and not edited. This is an open downstream alert, not a claim
that its superpotential conclusion is false.

Source reading also includes Martin v7, §§4.6–4.7 physical D/F actions and
chiral kinetic term, §4.10 (4.10.1)–(4.10.8) Kähler and symmetric gauge kinetic
data. The local raw-to-physical conventions remain those of the explicit local
normalization supplier; Martin's different tau normalization is not identified
by notation alone. No empirical data or statistical inference is present.

Next action: finish both level-7 example dispositions and focused checks.


## Level 7: ex-qftx-n1-u1-fi-charge-trace

Accept the reader repair. The pre-reader example simultaneously imposed G=0
and allowed arbitrary bare FI coefficient xi, although xi*V is part of G; it
also did not specify its Abelian gauge quadratic coefficient. The current
Example supplies that coefficient, sets F_rem=0 and specifies the FI term as
the sole additional real D-term. Its two weights are exactly +1 and -1 with
unit multiplicity, so the charge trace vanishes. Under the supplier's explicitly
conditional regulator/background assumptions the one-loop term cancels, higher
loops are excluded, and xi_lambda=xi, including xi=0. It makes no assertion that
all D terms are fixed or that the assumed regulator exists. Both proof steps,
actual cited supplier claims and contract statements were checked. No direct
item consumer was found, so the changed Example has no further propagation.
The complete Example has its links afterward and no diagram is required.

## Level 7: ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic

Retain the reader's exact F_rem supplier qualification: W0=F_rem in this
trivial-group model. Amended Verification 2.1 to remove unjustified logarithmic
differentiation of a merely positive function Z; the exact substitution already
proves every claimed normalized coefficient and its possible scale dependence.
The revised proof explicitly handles zero m or y. Positivity is the precise
condition for the invertible positive square-root rescaling; Z=0 is excluded,
Z=1 gives the original coefficients, and no differentiability in scale is now
required. The Statement is unchanged. The proof contract mirrors the actual
step. No quantum Jacobian claim or empirical inference is involved.

All assigned items and both page carriers contain no TikZ/tikzcd diagrams.
Both A/B pages are frontmatter-only and retain compact-v1; no page edit or page
decision is owed. All four main sections are uninterrupted and their hyperlinks
are retained one per paragraph in the immediately following references section.


## Decisions and defect records

The decisions JSON has exactly four entries and no invented reader, refuter,
page or risk-only obligations. Definition and FI example: `accepted_repair`.
Wavefunction example: `amended_repair`. The theorem is `escalated` solely for
the outside batch-45 consumer obligation; its local mathematical amendments
are complete with repair_confidence=1. Its scientific risk review describes
the complete current supplier review and separately retains that closure hold.
No outside consumer is silently accepted or repaired.

Six distinct locally corrected defects were appended through the locked native
ledger append tool, with caught_at_stage=3a-adjudicate, group-alpha ownership,
confidence 1, and exact decision references: Kähler positivity, integrated
D-invariance, uncollected gauge mixing, complex-basis shift inference,
FI example's inconsistent action data, and unjustified scale differentiation.
The closed mixing row concerns the corrected local supplier; it does not close
the explicitly open batch-45 propagation alert. Contract quotation synchronization
was mechanical bookkeeping and did not produce a defect-ledger row.
No defective published carrier was found in this scoped review, so no published
consumer/supplier ledger change or lock acquisition was needed. Imported
mathematical files and all outside item carriers remained read-only.

## Source locators and limits

- [Weinberg v1 full text](https://arxiv.org/html/hep-th/9803099v1): inspected
  equations (1)–(12), including all graph-count cases, and the FI paragraphs.
  The PDF endpoint failed retrieval; the version-matched HTML was used.
- [Dienes, Kolda and March-Russell](https://arxiv.org/pdf/hep-ph/9610479):
  inspected §2 (2.2) and §3.1 (3.1)–(3.3), with the small-mixing qualification
  on their displayed canonical RG formulas. Their numerical beta-function
  normalization is not imported into the local holomorphic vector convention.
- [Martin v7](https://arxiv.org/html/hep-ph/9709356v7): inspected relevant
  §§4.6–4.7 D/F and kinetic formulas; §4.10 through (4.10.12) for the
  holomorphic, Kähler and gauge-kinetic objects; and §6.5 through
  (6.5.1)–(6.5.4) for the wavefunction/coupling distinction. The example's
  exact rescaling formulas are established directly by substitution.

The actual current direct item suppliers were read, as detailed above. This
review does not audit every transitive foundational supplier, re-prove all
bibliographic conventions, or establish existence of an interacting regulator.
No experimental observation, sampling claim or uncertainty estimate occurs.

## Local validation and handoff

All final commands ran from the physics workspace:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts`
  with all four scoped item paths: unchanged, exit 0.
- The corresponding explicit four-path `precheck.mts`: three proof carriers
  checked, zero failing; the definition has no proof to check, exit 0.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-32.proof-contracts.json --strict`:
  four of four items, zero errors/warnings, exit 0 after correcting two stale
  quoted-source fields. Initially F2 held the theorem Statement instead of its
  named BRST Definition, and F5 held an older action Definition. Both now quote
  their exact actual source passages. The two changed derivation rows also
  reproduce the revised proof steps.
- `rendercheck.mjs` with all four items and both page paths: six files, no
  YAML or KaTeX errors, exit 0.
- `risk-report.mjs` on the owning contract was run before risk recording and
  rerun with `--require-reviewed` after final contract changes: two CRITICAL,
  two MODERATE, zero errors; complete current supplier reviews are recorded.
- Final `node tools/physics-support/proof-layout.mjs` with all four scoped
  item paths, after the final item edits and formatter: four items, eleven
  steps, zero defects, exit 0.
- Focused consistency assertions checked exact owed-obligation equality,
  all four claim/manifest mirrors, uninterrupted claims and all four committed
  preimage bindings. They passed. Both compact page inventories were inspected.
- The owning cross-batch input was updated with actual source-compatibility
  evidence, without claiming native readiness; native
  `frontier-dependency-ledger.mjs refresh --run advanced-qft-supersymmetry-build-2026-10-23`
  completed and deduplicated it. The shared frontier notes retain the batch-45
  alert and its exact correction strategy.
- The native defect-ledger append validated and added the six closed rows and
  refreshed its generated view. No gate battery, decision hashing, judge cycle,
  readiness stamping or acceptance certification was run.

The initial guessed .mjs precheck/reflow/contracts help paths did not exist;
these command-discovery failures changed no content and were replaced with the
actual .mts runner and singular proof-contract.mjs commands above.

Required owner action: route batch-45 F2/Proof 1.1 and contract correction,
review the repaired W=0 restriction, and resolve the theorem's propagated
interface hold. The engine retains scheduling, hashes and all later gates.
