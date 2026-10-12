# Batch 43 notes — `qm-framework-and-quantities` / `qm-framework-and-quantities-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, label **batch-43**,
covering the single pair `qm-framework-and-quantities` (A, order 165) and
`qm-framework-and-quantities-examples` (B, order 166), category
`non-relativistic-quantum-mechanics`, library `physics`. Step 1 complete
initial authoring only; a readiness record is not independent mathematical
approval (Step 3 review follows).

Read first: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L2952 with the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
the repaired prose scaffold and its current published-only supplier rule with
`research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json`, and
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 43: level 4, requires batch 42).

## Scope built

- A page `qm-framework-and-quantities` (order 165), 16 items:
  3 physics-domain definitions of the framework objects
  (`def-nrqm-framework-newtonian-spacetime`,
  `def-nrqm-framework-inertial-frames`,
  `def-nrqm-framework-classical-apparatus-trajectories`), 1 physics-domain
  unit/convention definition (`def-nrqm-framework-quantities-and-units`),
  2 mathematics-domain items (the Galilei transformation class
  `def-nrqm-framework-galilei-transformations` with its group lemma
  `lem-nrqm-framework-galilei-transformations-form-a-group`, and the
  canonical-commutator lemma `lem-nrqm-framework-ccr-on-the-schwartz-core`),
  the seven adopted postulates P1–P7
  (`post-nrqm-framework-state-and-composition`,
  `post-nrqm-framework-observable-and-probability`,
  `post-nrqm-framework-ideal-conditional-measurement`,
  `post-nrqm-framework-autonomous-dynamics`,
  `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`,
  `post-nrqm-framework-identical-particles-and-spin`,
  `post-nrqm-framework-preparation-and-apparatus`), and 2 physics-domain
  remarks (`rem-nrqm-framework-assumption-classes-and-scope`,
  `rem-nrqm-framework-primitive-and-derived-status`). This covers the design's
  contract "Complete P1–P7 overview and scope; quantities/frame/worldline
  definitions; assumption-class distinctions [D,P,R]" and the two baseline
  claims of NRQ-A01: the complete scoped P1–P7 and R1–R3 distinction, and the
  Newtonian frame/worldline and SI quantity types.
- B page `qm-framework-and-quantities-examples` (order 166), 6 leaf items:
  2 examples (`ex-nrqm-framework-dimension-bookkeeping`,
  `ex-nrqm-framework-quantity-type-checks`), 3 counterexamples
  (`cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit`,
  `cex-nrqm-framework-quadratic-shear-is-not-galilean`,
  `cex-nrqm-framework-mean-position-can-fail-to-exist`) and 1 remark
  (`rem-nrqm-framework-examples-scope-limits`). This covers the design's
  B contract "unit/type checks, wrong m=0 inference, scope counterexamples
  [examples,R]". Nothing outside the pair depends on them.
- Category `library/non-relativistic-quantum-mechanics/` created with
  `_category.md` (`library: physics`); no `_pathway.md` is created here (the
  pathway is a closeout artifact; its absence is a warning, not an error).
- Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the plan record; the only edits to the manifest are the two
  `items` arrays and the mechanically computed `dependency_level` labels.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. In-run levels as
computed by `tools/physics-support/item-dependency-levels.mjs` over the run
manifests (which include the batch-1, batch-35, batch-37 and batch-42
suppliers) and recorded in the manifest and in each item's frontmatter:

| item | level | in-run suppliers (owner batch) |
|---|---|---|
| `def-nrqm-framework-galilei-transformations` | 1 | `def-cm-special-orthogonal-group` (1) |
| `lem-nrqm-framework-galilei-transformations-form-a-group` | 2 | galilei definition (43), `lem-cm-so3-is-a-matrix-group` (1) |
| `lem-nrqm-framework-ccr-on-the-schwartz-core` | 2 | `def-nrqm-magnetic-and-detection-position-and-momentum-operators` (42) |
| `def-nrqm-framework-newtonian-spacetime` | 3 | `lem-cm-adapted-charts-and-galilean-transformations` (1), `lem-cm-adapted-coordinates-exist-and-are-unique` (1) |
| `def-nrqm-framework-inertial-frames` | 4 | spacetime (43), galilei definition and lemma (43), adapted-charts lemma (1) |
| `def-nrqm-framework-quantities-and-units` | 4 | spacetime (43) |
| `def-nrqm-framework-classical-apparatus-trajectories` | 5 | spacetime and frames (43) |
| `post-nrqm-framework-state-and-composition` | 2 | tensor construction (35), rank-one calculus (35), density/probability (35), bounded tensor maps (35) |
| `post-nrqm-framework-observable-and-probability` | 3 | density/probability (35), finite effects and instruments (35) |
| `post-nrqm-framework-ideal-conditional-measurement` | 3 | rank-one calculus (35), density/probability (35), finite effects (35) |
| `post-nrqm-framework-autonomous-dynamics` | 2 | density/probability (35) |
| `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle` | 6 | frames and apparatus (43), galilei lemma (43), CCR lemma (43), position/momentum (42), momentum self-adjointness (42), real multipliers and free operators (35) |
| `post-nrqm-framework-identical-particles-and-spin` | 4 | tensor construction (35), permutation sectors (35), finite spin matrices (37), symmetric-power SU(2) (37) |
| `post-nrqm-framework-preparation-and-apparatus` | 7 | P1, P2, P4, P5 (43) |
| `rem-nrqm-framework-assumption-classes-and-scope` | 8 | P1–P7 (43) and the three definitions (43) |
| `rem-nrqm-framework-primitive-and-derived-status` | 7 | units definition (43), P1, P4, P5, P6 (43) |
| `ex-nrqm-framework-dimension-bookkeeping` | 7 | units definition (43), frames (43), P4, P5 (43), CCR lemma (43), continuity calculation (42) |
| `ex-nrqm-framework-quantity-type-checks` | 5 | units definition (43), P1, P2, P6 (43), density/probability and rank-one calculus (35), bounded tensor maps (35), finite spin matrices (37) |
| `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` | 7 | P5 and units (43), position/momentum (42), momentum self-adjointness (42), real multipliers and free operators (35) |
| `cex-nrqm-framework-quadratic-shear-is-not-galilean` | 5 | spacetime, frames, galilei definition and lemma (43), adapted-charts lemma (1) |
| `cex-nrqm-framework-mean-position-can-fail-to-exist` | 5 | units definition (43), position operator (42) |
| `rem-nrqm-framework-examples-scope-limits` | 8 | the five B items (43) |

`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` reports no finding for any of these 22 items;
the remaining errors of that run belong to other batches' empty scaffold
inventories. No dependency cycle, forward edge or missing supplier was
introduced; every in-run supplier is on batch 1, 35, 37 or 42 and carries a
`ready` readiness record.

## Design versus plan-spec, and how the design's contract was delivered

- `research/plan-spec.json`, the generated batch manifest and the design
  section agree on page id, title, orders 165/166, category, library,
  companion and the `requires` list (`qm-math-magnetic-and-detection`). No
  page-edge or order conflict to record.
- The design's A inventory ("Complete P1–P7 overview and scope;
  quantities/frame/worldline definitions; assumption-class distinctions
  [D,P,R]") is delivered as the seven postulates (P1–P7), the three definitions
  of arena, frames and apparatus trajectories plus the quantity/unit
  definition, and the two status remarks. The R1–R3, P5a, P6a and R3a
  extensions named in the scaffold are **not** adopted here; they are audited
  as extensions in `rem-nrqm-framework-assumption-classes-and-scope`, which
  deliberately uses no wikilinks to items that do not yet exist.
- The design's B inventory ("unit/type checks, wrong m=0 inference, scope
  counterexamples [examples,R]") is delivered as the dimension and type
  examples, the zero-mass counterexample (the "wrong m=0 inference"), the
  quadratic-shear frame counterexample and the moment-existence
  counterexample, plus the scope remark.
- **Reservation versus plan-spec conflicts.** The reservation's
  `requires_physics` field is empty while the plan chains the page after
  `qm-math-magnetic-and-detection`; the plan controls and is followed. The
  reservation names no item ids for this pair, so no reservation id is
  renamed; the production ids use the kind prefixes and the
  `nrqm-framework-…` slug.
- **Conventions preserved.** The design's P5 wording ("M = R times R^3",
  inertial frame from a spatial origin, a time origin and an orthonormal
  triad, not an observer congruence; Galilei transformations with
  `t' = t + t_0`, `x' = R x - v t + a`, `R^T R = I`, `det R = 1`) is
  delivered coordinate-free through the affine-time-space structure already
  published by the classical mechanics mathematics page (batch 1) and its
  adapted-chart lemma, with the concrete coordinate form of the Galilei maps
  isolated in the mathematics definition. The scaffold's warning that a
  quantum particle does not thereby acquire a definite worldline is a clause
  of the apparatus-trajectory definition. Natural units, SI constants and the
  measured status of `mu_0` are recorded exactly as the scaffold's quantity
  section states them.

## Mathematical and physical closure decisions worth surfacing to reviewers

1. **P1–P7 are homed here, not duplicated later.** The scaffold states that
   the overview states the framework assumptions and that later pages give
   explicit local formulations using the mathematics supplied by then.
   Because the engine gives every item one home and forbids duplicate public
   statements, the production choice is to home the seven postulates on this
   page with their explicit scoped statements and to let the later pages cite
   them. Postulate P1, P2 and P4 are the "common contract assumptions" of the
   audit report; P3, P5, P6 and P7 are cited by the measurement, kinematics,
   identical-particle and interference pages respectively.
2. **Mathematical facts are attributed, not asserted.** Each postulate cites
   the published or run-local mathematical items that supply its
   mathematical content: the completed tensor product and rank-one calculus
   (batch 35), the density-operator probability law (batch 35), the finite
   effects and instruments (batch 35), Stone's theorem and the spectral
   theorem (published), the position and momentum operators with their
   domains and self-adjointness (batch 42), the free-plus-bounded-potential
   operator (batch 35), the finite spin matrices and the symmetric-power
   SU(2) representation (batch 37). The adopted *assignment* is the physical
   content; the properties are the cited mathematics.
3. **Choice assumptions are declared and carried.** The cited suppliers
   assume Countable Choice (all), and the spectral/group suppliers assume the
   Axiom of Choice; the postulates that use them state both, list
   `def-countable-choice` and/or `def-axiom-of-choice` in their `deps`, and
   the consequences are conditional on those axioms.
4. **The Galilei group law is mathematics, the frame class is physics.**
   `def-nrqm-framework-galilei-transformations` and its group lemma are
   `domain: mathematics` and depend only on mathematics; the adoption of the
   adapted charts as inertial frames and of the Galilei class as frame
   changes is the physics definition and postulate. This mirrors the classical
   mechanics page's own separation and keeps the mathematics items free of
   physical premises.
5. **The zero-mass counterexample refutes an inference, not the framework.**
   It shows on explicit smooth data that the free kinetic operators have no
   strong limit as the mass tends to zero (the values and the energy
   expectation diverge, and the free frequencies diverge at every fixed
   nonzero wave number). The radiation sector is a separate adopted model;
   nothing in the item asserts an empirical claim, and the remarks say so.
6. **The moment counterexample is quantitative.** The displayed state has
   unit norm, infinite second moment and infinite first absolute moment, so
   membership in `D(Q)` is sufficient but not necessary for the mean to exist;
   the exact condition recorded in the quantity conventions is
   `integral |x| |psi|^2 < infinity`.
7. **Physical-scope declarations.** Every physics item carries a nonempty
   `physical_scope`; the postulates carry `provenance.proof:
   not-applicable`, no proof section, `verification.precheck: n/a` and full
   source references; the definitions and remarks carry conventions and
   status only, with no proof fabricated.

## Sources, harvest and fetch status

Eleven complete treatments back the pair; every A source is a book,
monograph or full lecture-note set, and the A and B pages each have at least
two independent treatments.

- D. Tong, *Quantum Mechanics*, `https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf`
  — §§1.1–1.2 (wave function, Born rule, normalization, phase, Hamiltonian,
  current; printed pp. 3–14), §§3.2–3.3 (eigenfunctions, Hermitian operators,
  measurement; printed pp. 67–80).
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*,
  `https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf` — §§1.3–1.4
  (states, ideal measurement; printed pp. 7–18), §2.2 (tdse), §10.1
  (identical particles; printed pp. 226–230).
- G. Teschl, *Mathematical Methods in Quantum Mechanics* (1st ed. 2009),
  `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf` — §1.4,
  §2.1, §3.3, Theorems 5.1–5.2, Chapter 7 (Theorem 7.8, §7.3).
- B. Zwiebach, MIT 8.05 F13, Chapters 1, 2, 3 and 6 chapter PDFs (exact OCW
  hashed URLs in the coverage file).
- D. Tong, *Dynamics and Relativity*, `https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf`
  — §1.2 and §1.2.1 (inertial frames; Galilean relativity; absolute time).
- D. Tong, *Classical Dynamics*, `https://davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf`
  — §1.2 (frame transformations) and §2.2.1 (rotating frames and fictitious
  forces; printed pp. 14–15).
- BIPM, *The International System of Units*, 9th ed. 2019,
  `https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf` —
  Chapter 2 and Table 2.
- J. M. Lee, *Introduction to Smooth Manifolds* (2003),
  `https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf` — Examples
  8.33 and 8.35 (the orthogonal groups).

`...-batch-43.coverage.json` records each source's locators, its own
section/named-result headings over the range read, and a disposition for
every harvested result (57 results, 0 errors, 0 warnings under
`coverage-checklist.mjs`); `source-fetch-check.mjs` reports **18/18 source
entries fetch-verified** (0 documented drops). Locators were corrected during
authoring after direct inspection where the design's or a sibling batch's
citation was off: Binney's identical-particle material is §10.1, not a
chapter 8; Teschl Chapter 7's free-operator theorem is Theorem 7.8 at printed
p. 168; Tong's rotating-frame example is §2.2.1 of *Classical Dynamics*; the
MIT Chapter 3 commutator is at printed pp. 5–8.

## Checks actually run on the final carriers

- `precheck.mts` on the 22 items: 14 checkable, **0 failing** (7 postulates
  pass nonproof structure; 8 items have no phase body).
- `proof-layout.mjs` on the 7 proof-bearing items: **7 items, 31 steps,
  0 defects**.
- `rendercheck.mjs` on the 22 items and the 3 library files: clean (KaTeX,
  YAML, wikilink/math nesting).
- `depcheck.mjs` (whole repository): **0 findings attributable to this batch**
  (the only lines naming the batch are the two page dependency summaries).
- `content-policy.mjs` on the batch manifest: **22 scoped item(s), 0 error(s),
  0 warning(s)**.
- `manifest-deps.mjs` on the batch manifest: **22 item(s), 0 error(s)**.
- `physics-check.mjs` scoped to an overlay root whose only current manifest is
  this batch's: **physics-content: 0 error(s), 22 items checked** (domains,
  dependency roles, physical scope and the scoped import verification). The
  run-wide invocation aborts on other batches' pre-authoring empty
  inventories, a run-level condition outside this batch.
- `item-dependency-levels.mjs check`: **no finding for these 22 items** (the
  remaining errors are other batches' empty inventories).
- `validate-plan.mjs research/plan-spec.json --run ...`: **exit 0, no finding
  on either page** (no undeclared-prerequisite, intra-order, prefix or size
  error; the `requires` lists need no extension).
- `proof-contract.mjs --strict` on the batch proof contracts: **14/14 items
  checked, 0 error(s), 0 warning(s)** — the 7 proof-bearing items carry
  exact cited quotes, per-step derivations with stated inputs and the eight
  boundary dispositions; the 7 postulates carry `physics_review` with the
  four required fields.
- `proof-contract-coverage.mjs` (overlay root): **22 item(s), 7/7 supplied
  argument(s) covered**.
- `coverage-checklist.mjs`: **2 page(s), 57 harvested result(s), 0 error(s),
  0 warning(s)**. `source-fetch-check.mjs`: **18/18 source(s)
  fetch-verified**.
- `fwdcheck.mjs` and `extcheck.mjs`: **0 errors and 0 warnings for these
  22 items** (the run-wide fwdcheck listing marks them "inherited" under
  published suppliers' forward edges, which this batch does not produce and
  declares no `forward_refs` of its own).
- `pathcheck.mjs non-relativistic-quantum-mechanics`: 0 pathway files
  checked, 0 errors, 0 warnings (no `_pathway.md` yet; the category overview
  is present and over the short-overview threshold).
- Readiness records: one per item, recorded after the final carrier edits
  (see the `*-step1-*.json` records). After recording,
  `node tools/physics-support/step1-decisions.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports **0 pending work items for these
  22 items** (553 of 574 run items ready). The run-wide work list still
  contains 102 pre-authoring empty scaffold inventories and 21 missing
  records in the concurrently authored `cm-math-chaos` /
  `cm-math-chaos-examples` batches; both are outside this batch.
- Cross-batch ledger: the consumer-batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-43.cross-batch-dependencies.json`
  was corrected at finalization. Two rows for same-batch edges (the two
  frame-change consumers of
  `lem-nrqm-framework-galilei-transformations-form-a-group`, which the
  unified ledger excludes by construction because consumer and supplier are
  both batch 43) were removed as intra-batch dependencies, and one declared
  edge found missing from the input
  (`ex-nrqm-framework-quantity-type-checks` →
  `lem-nrqm-composites-rank-one-operator-calculus`, used at fact [L2] and
  steps 1.1–1.2) was added with its evidence. After
  `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
  physics-cm-qm-gr-79-2026-10-11`, the input matches the declared batch-43
  edge set exactly: 43 rows = 42 item edges + 1 page edge, every edge has a
  review row, and there are no orphaned rows.
- Additional final checks: `depcheck.mjs --items-file` (the 22 items) passes
  with "selected item/page checks and their prerequisite cycle checks
  passed"; `validate-plan.mjs --run` exits 0 with no finding on either page;
  `fwdcheck.mjs`/`extcheck.mjs` run-wide reports contain no row naming any
  of these 22 items (extcheck: 0 errors, 0 warnings overall; the 12,684
  fwdcheck errors are unrelated published-content findings, none on this
  batch's items or their suppliers).

## Escalations

None. Every prerequisite used is supplied with a `ready` readiness record
(batch 1 items `def-cm-affine-time-space`, `lem-cm-adapted-coordinates-exist-and-are-unique`,
`lem-cm-adapted-charts-and-galilean-transformations`, `def-cm-special-orthogonal-group`,
`lem-cm-so3-is-a-matrix-group`; batch 35 composites items; batch 37 spin
items; batch 42 position/momentum, weak product rule, self-adjointness and
continuity items), every other mathematical premise is a currently published
canonical root item, and no promised claim of the design was dropped or
narrowed. The frame/arena/convention content is delivered with mathematics
from the classical mechanics mathematics page because the rules of the two
tracks agree on that structure; the dependency stays purely mathematical.

## Run-level notes for the owner

- The engine released this batch after batch 42 (batch-42 manifest and library
  carrier are authored and its items carry readiness records). During this
  session the batch-42 manifest's `requires` list was observed to change
  (an external writer added three transitive entries); nothing in this batch
  depends on that list, and no file outside this batch's ownership was
  edited by this worker.
- Pre-existing corpus findings observed but not attributable to this batch:
  large numbers of `published-unaudited` imports, and the wide-corpus
  forward-marker list in `fwdcheck`; none of the affected items is a supplier
  of this batch except transitively through published root mathematics.
- `batch-dependency-levels.mjs check --run ...` reports `Stale batch
  dependency levels ... recompute before authoring`. This is the run-level
  digest over all 79 in-flight manifests. Recomputing read-only over the
  current manifests, the batch-43 row becomes
  `{"dependency_level": 4, "requires": ["1","35","37","42"]}` — exactly the
  batches owning this batch's directly used suppliers (the batch-1 CM
  mathematics items, batch-35 composites items, batch-37 spin items and the
  batch-42 magnetic-and-detection items); the pre-authoring digest recorded
  `["42"]` because the inventories were still empty. One foreign row also
  differs (batch 13: recorded `["6"]`, computed `["1","2","3","6"]`).
  Following the batch-36 and batch-37 precedent, the batch does not rewrite
  this engine-derived scheduling state; central recompute is owed by the
  orchestrator/owner.
- New content stays draft; nothing here is publication, empirical evidence or
  independent mathematical acceptance.

## Successor focused consumer continuation

The original QM composites reviewer remains attributed in historical evidence. Successor physics_quantum_consumers preserved the full P1 mixture claim with a trace-class norm argument, distinguished ray rescaling from unit phases, carried the spectral theorem AC premise in P2, and made P6 spin-zero/internal SU2/invariant-sector assignments explicit. Current old/current downstream interfaces checked; source-fetch history and native acceptance history preserved. Exact evidence: research/physics-cm-qm-gr-79-2026-10-11-qm-composites-successor/continuation.json.
