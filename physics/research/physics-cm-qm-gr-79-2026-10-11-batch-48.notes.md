# Batch 48 notes — Qm Massive Particle Kinematics

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **48**, covering the
pair `qm-massive-particle-kinematics` (A, order 175) and
`qm-massive-particle-kinematics-examples` (B, order 176), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 48: level 8, requires batch 47), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3060 (pair
`qm-massive-particle-kinematics`), the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
the full prose scaffold
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/prose-scaffold.md`
(lines 17, 43, 58), the scaffold supplier map
`research/scaffold-audit-2026-10-11/quantum-mechanics/supplier-map.json`, and
`research/plan-spec.json`.

## Inventory

A page `qm-massive-particle-kinematics` (10 items; manifest `dependency_level` in
parentheses):

1. `lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators` (0) —
   batch-local mathematical prerequisite (finite orthogonal sums, norms,
   adjoints).
2. `lem-nrqm-kinematics-component-valued-wavefunction-identifications` (2) —
   batch-local mathematical prerequisite (direct sum, component-valued space and
   completed tensor identification).
3. `lem-nrqm-kinematics-componentwise-position-and-momentum` (3) — batch-local
   mathematical prerequisite (maximal domains, self-adjointness, Fourier
   representation, translation identities, generator).
4. `lem-nrqm-kinematics-ccr-and-internal-factor-commutation` (4) — batch-local
   mathematical prerequisite (CCR on the Schwartz core, spectral PVMs, internal
   factor commutation, amplification `I ⊗ S`).
5. `lem-nrqm-kinematics-momentum-representation` (4) — batch-local mathematical
   prerequisite (the unitary `U^{(r)}`, momentum and position transforms,
   translation multiplier).
6. `def-nrqm-kinematics-framework-massive-spin-s-model` (7) — the P5/P6 model
   reading (state space, operators, units, internal matrices, momentum
   representative, frame readings).
7. `pthm-nrqm-kinematics-spin-s-outcome-laws` (8) — position and momentum
   outcome laws, atomlessness and internal-factor invariance.
8. `pthm-nrqm-kinematics-translation-covariance` (9) — translation unitarity and
   conjugation, law transport, `H_V` covariance, flow covariance, frame reading.
9. `pthm-nrqm-kinematics-boost-covariance` (10) — Galilean boost family,
   operator identities, law transports, free covariance (propagator identity and
   conjugated free Hamiltonian identity), moving-frame bounded-potential model,
   frame reading.
10. `rem-nrqm-kinematics-scope-and-empirical-status` (11) — scope, empirical
    status of `m` and `s`, excluded realizations.

B page `qm-massive-particle-kinematics-examples` (5 items):

1. `ex-nrqm-kinematics-gaussian-position-momentum-packet` (9) — normalized
   three-dimensional Gaussian, momentum representative, outcome densities,
   variances, product `ℏ/2` in this family.
2. `ex-nrqm-kinematics-plane-wave-generalized-eigenfunction` (0) — the
   conjugate-linear Schwartz functional `u_k`, generalized eigenrelation, no
   `L²` representative.
3. `cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators` (2) — no bounded
   `A,B` with `AB−BA=iℏI`.
4. `texp-nrqm-kinematics-dirichlet-momentum-warning` (7) — the Dirichlet
   momentum on an interval is symmetric but not self-adjoint; no
   Dirichlet-preserving self-adjoint extension; Dirichlet functions are not
   momentum eigenvectors; not an assigned sharp observable.
5. `rem-nrqm-kinematics-examples-scope-limits` (10) — example-page scope: no
   experiment, no measured value, boundary/excluded cases.

Carriers `library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.proof-contracts.json` (12
proof-bearing items in scope; the definition and two remarks carry no proof
section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.coverage.json`; cross-batch
input `research/physics-cm-qm-gr-79-2026-10-11-batch-48.cross-batch-dependencies.json`
(61 rows: 60 item edges + 1 page edge).

## Design versus plan (conflicts and deviations)

1. **`requires`.** The design section declares `qm-autonomous-dynamics` for the
   A page and the companion for the B page; `plan-spec.json` agrees, and the
   carriers and manifest match. No conflict.
2. **B-page prerequisite extension (plan drift, recorded for owner
   reconciliation).** `validate-plan.mjs` initially reported two
   `undeclared-prereq` findings against the B page:
   `ex-nrqm-kinematics-gaussian-position-momentum-packet` depends on
   `def-heat-kernel` (page `the-heat-kernel-and-the-cauchy-problem`) and on
   `thm-gaussian-integral` (page
   `improper-and-parameter-dependent-multiple-integrals`), neither in the
   closure of the declared `requires`. Both pages are published mathematical
   suppliers declared in `plan-spec.json`. Following the run convention used by
   batch 42 (and recorded by batch 73), the B carrier and manifest `requires`
   were extended to
   `["qm-massive-particle-kinematics", "the-heat-kernel-and-the-cauchy-problem", "improper-and-parameter-dependent-multiple-integrals"]`;
   `validate-plan` then names no batch-48 page. `splice-plan.mjs` will report
   this `requires` drift for owner reconciliation; the plan itself was not
   edited.
3. **A inventory expansion.** Five batch-local mathematical prerequisites
   (items 1–5 above) were authored because the P5 prose presents the state space
   as `L²(R³)⊗C^{2s+1}` with maximal domains, Fourier normalization, CCR on a
   core and translation covariance, and no published supplier package covers
   that assembly for component-valued `L²(R³;C^{2s+1})` with the stated
   conventions. They are mathematics (`domain: mathematics`), carry no physical
   content, and are the smallest local closure found; the alternative
   (`deferred-set-theory`-free local proofs) was chosen over escalation because
   the design explicitly reserves the Fourier/CCR/covariance cluster to this
   pair.
4. **Outcome-laws item.** `pthm-nrqm-kinematics-spin-s-outcome-laws` implements
   the Born-law reading that the prose scaffold's frame-transformation paragraph
   presupposes ("the Born density and probability law transform by the
   unit-Jacobian coordinate map", line 43) and that P2 assigns; the reservation
   string abbreviates the A content, so this is a promised claim, not an
   extension.
5. **Boost item.** The prose scaffold line 43 promises the pure-boost phase map
   and "M50 proves boost covariance"; the reservation string's "translation
   covariance" cluster abbreviates the covariance content. The boost item
   implements that promised claim for the free and real-bounded-potential scalar
   model, including the equal-time `Q'`, `P'` transforms and the transformed
   free Hamiltonian identity `H₀ − v·P + (m|v|²/2)I` (written with the chart
   velocity `v = −u` of the model's reading). Rotation/parity and the composed
   rotation/translation/boost of the same paragraph are **not** claimed here:
   the reservation's `requires`/inventory assign the rotation/spinor-lift
   conventions to the orbital-and-spin and symmetry pairs, and the model
   definition explicitly excludes them.
6. **B inventory expansion.** `cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators`
   supports the "CCR on core" cluster by refuting a bounded CCR realization, and
   `rem-nrqm-kinematics-examples-scope-limits` records the examples-page scope.
   The three reserved B clusters (Gaussian packet, plane wave as generalized
   function, boundary momentum warning) are all delivered.
7. **Source pointer reconciliation.** The design's source line 58 names "Tong
   §§2.4,3.2; Binney §§2.3,4.2; Teschl §§7.1–7.3". Tong §2.4 is scattering
   (a different pair's content); the page harvests the Fourier/operator material
   actually at Tong §§1.1–1.2, 2.1.3, 3.2.3. Binney §4.2 is inside the harvested
   §§4.1–4.3; the component and spin-factor material is at Binney §§6.1, 7.4
   (the design's earlier "Chapter 7 Section 7.1" pointer in the scaffold text is
   wrong; see the source audit below). Teschl §§7.1–7.3 are harvested; §8.1 is
   added for the generator/unitary-equivalence facts.
8. **"L² spinors".** Delivered as the component-valued model
   `L²(R³;C^{2s+1})` with the P6 internal factor and the finite matrix action;
   SU(2)-lift/central-phase spinor conventions and spin–orbit structure are not
   asserted (they belong to the orbital-and-spin pair; the model definition's
   `physical_scope` excludes them).

## Source audit and repairs

Sources were read as complete documents and the printed/PDF page mappings were
verified by extracting and inspecting the pages (PyMuPDF on the fetched PDFs):

- **G. Teschl, *Mathematical Methods in Quantum Mechanics* (1st ed. 2009,
  author-hosted full monograph, 317 pp).** PDF page = printed page + 12.
  Verified: §1.4 pp. 45–47 (PDF 57–59) orthogonal sums/tensor products; §2.1
  pp. 55–58 (PDF 67–70) wave function, unboundedness via the closed graph
  theorem, dense domains; §2.5 pp. 79–80 (PDF 91–92) orthogonal sums of
  operators, reducing subspaces, adjoint (Problem 2.24); §7.1 pp. 161–167
  (PDF 173–179) Fourier transform; §7.2 pp. 167–169 (PDF 179–181) free
  Schrödinger operator; §7.3 pp. 169–171 (PDF 181–183) free time evolution;
  §8.1 pp. 173–175 (PDF 185–187) position and momentum, generator of
  translations, unitary equivalence; §9.1 pp. 181–188 (PDF 193–200)
  Sturm–Liouville boundary conditions and the Dirichlet condition (p. 188).
- **B. Zwiebach, MIT 8.05 Ch. 1 "Wave Mechanics" (26 pp).** PDF = printed.
  §4 pp. 12–18 "The nature of the spectrum"; §6 pp. 22–25 "Position and
  momentum": `[x̂,p̂]=iℏ` (6.27), momentum operator (6.35), non-normalizable
  momentum eigenstates (6.38)–(6.39), Fourier transform with
  `(2πℏ)^{-1/2}` (6.40)–(6.41), and `x̂` in the momentum representation
  (6.46) on p. 25. Locators that claimed p. 25 content were corrected from
  "22–24" to "22–25".
- **D. Tong, *Quantum Mechanics* (133 pp).** PDF page = printed page + 3.
  §1.1–1.2 pp. 3–14 (PDF 6–17); §2.1.3 pp. 27–29 (PDF 30–32) Gaussian
  wavepacket; §3.2.3 pp. 75–76 (PDF 78–79) momentum eigenstates, delta
  normalization (3.7), Fourier transform (3.8)–(3.9). One item-level citation
  said "PDF 77–78" for §3.2.3; corrected to 78–79.
- **J. Binney & D. Skinner, *The Physics of Quantum Mechanics* (310 pp).**
  PDF page = printed page + 8. Verified: §2.3 pp. 24–32 (PDF 32–40), Box 2.2
  p. 26, Box 2.3 p. 28, §2.3.1 p. 26, §2.3.2 p. 27, §2.3.3 pp. 29–30;
  §§4.1–4.3 pp. 58–70 (PDF 66–78) translating kets, generators, operator
  transformations, symmetries; §6.1 pp. 105–110 (PDF 113–118) composite
  systems and product states; §7.4 pp. 158–161 (PDF 166–169) spin commuting
  with the spatial operators, `2s+1` states. **A full-text search finds no
  Galilean boost anywhere in the book**; the inherited citations "Section 3.2
  pp. 38–41 (Galilean boosts)" and "Chapter 7 Section 7.1 pp. 139–143 (spin
  states combined with spatial states)" were false (pp. 38–41 are oscillator
  dynamics; pp. 139–143 are `J_z`/`J²` eigenvalues). Both were replaced by
  content actually present, and the boost item's Binney reference was replaced
  by a genuine boost source.
- **C. Torre, "Galilean Relativity and the Path Integral Formalism in Quantum
  Mechanics", arXiv:2306.13487 (preprint v1, 23 Jun 2023, 27 pp).** Read in
  full. §4 eq. (4.23) on pp. 12–13:
  `ψ_u(r,t)=exp[−(i/ℏ)M u·(t u/2 − R)]ψ(r−t u,t)` with the passive reading
  (frame moving with velocity `−u`); §6 eq. (6.2) p. 17 and the composition
  `L(u₂)L(u₁)=L(u₁+u₂)`. One particle: `exp[(i/ℏ)(m u·r − m|u|²t/2)]ψ(r−ut)`,
  exactly the model's `B_u(t)` (chart velocity `v=−u`). The paper is an
  author-hosted preprint; its path-integral derivation is not relied on — the
  item's proof is the local componentwise assembly with the batch-42 scalar
  theorem, and Torre is the harvested source for the boost law, its phase
  factor, the passive reading and the projective composition.
- **H. Brezis, *Functional Analysis, Sobolev Spaces and PDE* (author-hosted
  PDF, 614 pp).** PDF page = printed page + 15. Verified: §8.2 pp. 202–216
  (PDF 217–231), Theorem 8.8 p. 212 (PDF 227) (`W^{1,p}(I) ⊂ L^∞` and the
  compact injection into `C(Ī)`, with `u(x)−u(y)=∫_y^x u'`), Corollary 8.10
  p. 215 (PDF 230) (product rule and the integration-by-parts formula);
  §8.6 pp. 231–232 (PDF 246–247), Theorem 8.22 (Dirichlet eigenfunction
  expansion, self-adjointness of the associated solution operator). The
  inherited citation "§§8.5–8.6 pp. 226–233 (boundary traces...)" was wrong
  (§8.5 is the Maximum Principle; §8.4 is the boundary-value examples); locator
  and description were corrected.

All 10 coverage source entries (6 distinct URLs over the two pages) are
fetch-verified with stamps; see the coverage check record below.

## Dependency verification

- The batch input `...-batch-48.cross-batch-dependencies.json` records 60 item
  edges and 1 page edge, all `verified`: supplier batches 47 (`qm-autonomous-dynamics`
  items and page), 43 (framework and quantities), 42
  (`qm-math-magnetic-and-detection`), 45 (observables and Born probabilities),
  44 (state geometry), 35 (`qm-math-composites`), 38
  (`qm-math-intervals-and-contacts`), 37 (`qm-math-orbital-and-spin`). Each row
  states the exact required claim, hypothesis strength and use location; the
  `pthm-nrqm-kinematics-boost-covariance → thm-nrqm-magnetic-and-detection-galilean-covariance`
  row also records the supplier metadata defect below.
- Actual transitive proof dependencies (not just declared edges) were read at
  the current carriers: hypotheses (maximal domains, density, self-adjointness,
  `W^{2,2}` preservation, bounded-potential flow uniqueness), directions and
  conventions (inner products linear in the first argument; `P_k=−iℏD_k`;
  `U^{(r)}` with `(2πℏ)^{-1/2}` normalization; the chart-velocity reading
  `v=−u`) were checked edge by edge. No missing, circular or forward
  dependency remains (`depcheck`, `fwdcheck` clean).
- `item-dependency-levels.mjs check --run …` reports no batch-48 line; the
  remaining run-wide errors are other batches' empty scaffold inventories
  (50 at the time of recording). Frontmatter, manifest and computed levels
  agree: 0, 2, 3, 4, 4, 7, 8, 9, 10, 11 (A) and 9, 0, 2, 7, 10 (B).
- `frontier-dependency-ledger.mjs refresh --run …` reports "refreshed and
  deduplicated" after the final input write.

## Recorded cross-batch defects (not repaired here; batch 42 owns them)

These items are outside batch 48's edit scope. They were found by the scoped
checks and are recorded here with exact evidence and the smallest repair, for
the owner/operator and the canonical ledger.

1. **`mathematical-role` metadata errors in two batch-42 items.** A scoped
   `validatePhysicsContent` run over the batch-48 dependency closure reports
   exactly two errors, both naming batch-42 items:
   - `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`:
     "mathematical deps must be mathematical-premise" — the mathematics-domain
     dependency `def-nrqm-magnetic-and-detection-position-and-momentum-operators`
     is declared with role `formulation-prerequisite`.
   - `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation`:
     the mathematics-domain dependency
     `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` is
     declared with role `formulation-prerequisite`.
   `tools/physics-support/physics-content.mjs` line 105 requires
   `mathematical-premise` for every mathematics-domain dependency. Smallest
   repair: re-role those two edges to `mathematical-premise` — a metadata fix
   with no claim, hypothesis or proof change. Batch-42's own recorded checks
   used the mathematics `content-policy.mjs`, which does not exercise this
   physics rule; the run-wide `physics-check --run` reproduces the same two
   errors for the batch-42 items independently of batch 48. Batch 48's actual
   uses were verified against the suppliers' current statements and proofs, so
   the mathematical consumption is sound; the batch's scoped physics-content
   check nevertheless reports these two supplier-side errors, as recorded.
2. **False source locators in `thm-nrqm-magnetic-and-detection-galilean-covariance`.**
   That item cites "Binney & Skinner, Section 3.2 pp. 38–41 (Galilean boosts,
   the boost phase and transforming between frames)" and "Teschl, Section 7.1
   pp. 155–158 and Section 2.3 pp. 66–70 (free dynamics and unitary
   equivalence)". Verified false: Binney §3.2 pp. 38–41 is "Dynamics of
   oscillators" and the book contains no Galilean boost (full-text search);
   Teschl §7.1 is pp. 161–167 and §2.3 is "Quadratic forms and the Friedrichs
   extension" pp. 67–73, neither being the cited free-dynamics/unitary-
   equivalence material (§§7.2–7.3 pp. 167–171 and §8.1 pp. 173–175 are).
   Smallest repair: replace the Binney reference with a genuine boost source
   (e.g. Torre, arXiv:2306.13487, §4 eq. (4.23)/§6 eq. (6.2)) and correct the
   Teschl locators to §§7.2–7.3 (pp. 167–171) and §8.1 (pp. 173–175). Batch 48
   applied the corresponding repair to its own boost and scope items; the
   batch-42 carrier still carries the false citation.

Consumer impact inside batch 48: only
`pthm-nrqm-kinematics-boost-covariance` (direct consumer of
`thm-nrqm-magnetic-and-detection-galilean-covariance`) and
`rem-nrqm-kinematics-scope-and-empirical-status` (which consumes the boost
item) reach the two defective items; no other batch-48 item's closure contains
them. Both items are recorded `ready` with the defect disclosed in the record
reason, following the batch-73 precedent for cross-batch metadata defects that
name only other batches' items; no batch-48 item is escalated. If the owner
prefers a held consumer, the minimal action is to re-record
`pthm-nrqm-kinematics-boost-covariance` (and its consumer) after the batch-42
repair, which is expected to leave every batch-48 claim byte-identical.

## Checks run (exact results)

Item and page checks:

- `precheck.mts` on all 15 items: 12 checked, 0 failing — all clean (the
  definition and two remarks are not proof-bearing).
- `rendercheck.mjs` on all 15 items + 2 page carriers: OK — 17 files, no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses.
- `proof-layout.mjs` on all 15 items: 15 items, 68 steps, 0 defects.
- `depcheck.mjs --items-file` (15 items): OK — no missing, circular or forward
  dependency; page dependency depth 54 (A) / 55 (B); the B page closure now
  includes the two published supplier pages added to `requires`.
- `fwdcheck.mjs --items-file`: OK — checks and prerequisite/forward cycle
  checks passed (the items carry inherited forward markers of their
  prerequisite cones, informational).
- `extcheck.mjs --items-file`: OK — 28185 items, 0 recorded-not-proved, 0
  resting on them.
- `content-policy.mjs` (mathematics policy, batch manifest): 15 scoped items,
  0 errors, 0 warnings (after repairing one applied-`\iota(…)` notation
  finding in `lem-nrqm-kinematics-ccr-and-internal-factor-commutation` step
  4.1, which now names the vector `w := Θ(κ(u⊗z))` and derives
  `S_×w = Σ z_l S_ml ι_m(u)` directly).
- Scoped `validatePhysicsContent` (physics content policy over the batch
  closure): 2 errors — exactly the two recorded batch-42 metadata defects
  above; **0 errors name a batch-48 item**.
- `manifest-deps.mjs` (batch manifest): 15 items, 0 normalized, 0 errors.
- `manifest-integrity`/levels: frontmatter, manifest and computed levels agree;
  no batch-48 line in `item-dependency-levels.mjs check --run`.
- `proof-contract.mjs --strict` on the batch contract file: 12/12 items
  checked, 0 errors, 0 warnings (every declared fact cited by a step is
  contracted with an exact quote from the supplier's own statement/definition
  section, every proof step has a derivation with stated inputs, and all eight
  standard boundary cases have a disposition per item).
- `citation-fidelity.mjs` (self-check, not a gate): one widening candidate
  raised on
  `lem-nrqm-kinematics-component-valued-wavefunction-identifications` [F1] →
  `lem-nrqm-composites-hilbert-tensor-construction`. Human read: the supplier's
  clause (b) is stated for general Hilbert spaces `H,K` with finite-dimensional
  subspaces and orthonormal bases; the batch-48 restatement takes `K=C^r` and a
  single family `u_l⊗e_l`, a specialization whose norm identity is clause (b)
  verbatim. No widening; dismissed with this evidence.
- `coverage-checklist.mjs --require-destination`: 2 pages, 39 harvested
  results, 0 errors, 2 warnings (`coverage-low-yield`: 7/25 and 5/14 harvested
  headings are scaffolded; the remaining headings are dispositions to
  `inline`/scope, to be confirmed by Alpha).
- `source-fetch-check.mjs --coverage … --stamp`: 10/10 source entries
  fetch-verified (1 newly stamped — Torre); check mode 10/10 resolved, 0
  documented drops.

Run-wide checks that fail only on **other** batches (recorded, not batch-48
defects):

- `validate-plan.mjs research/plan-spec.json --run …`: FAIL with 80
  `undeclared-prereq`/`redundant-prereq` findings; none names a batch-48 page
  after the `requires` extension above.
- `proof-contract-coverage.mjs --run … --contracts …`: aborts on the empty
  frontier page inventory `cm13-symplectic-geometry-and-canonical-methods`
  (same class of run-wide abort recorded by batch 73 for `cm08`).
- `physics-check.mjs --run …`: aborts on the empty
  `physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json` before reaching content
  validation.
- `item-dependency-levels.mjs check --run …`: 50 empty-scaffold-inventory
  errors for unauthored batches; no batch-48 line.
- `verifyMathematicsImports` (the first step of `physics-check`) fails on the
  same empty batch-29 inventory with `Invalid or empty current page in
  physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json`, so it cannot be exercised
  run-wide during construction; the batch's import edges are covered by the
  scoped `depcheck`/`extcheck` runs.

## Empirical qualifications and scope

Every item is conditional on its stated postulates and cited mathematics. The
pair records no experiment: there is no preparation, apparatus, calibration,
sampling, uncertainty budget, count or measured value anywhere in it, and none
is invented. `m > 0` and the spin label `s` are model parameters; identifying
either with a measured species is excluded. The B-page remark and the A-page
scope remark state that massless, relativistic, singular-potential, boundary
and radiation realizations are separate models with their own assumptions, that
the plane wave carries no state and no probability density, that the Dirichlet
warning concerns a hypothetical confined model and asserts no apparatus
realization, and that the Gaussian family's variance product is a property of
that family only (no general uncertainty theorem is claimed here). `planck`
constant and unit conventions follow the framework's quantities/units item with
the cited SI convention.

## Escalations

None held. The only unmet obligations are the two recorded cross-batch defects
in batch 42 above, both metadata/source-locator repairs with exact evidence and
smallest fixes; the mathematical content of every consumed supplier was
verified at its current carrier, no batch-48 claim is blocked, and the owner
direction's instruction to continue construction on ready scopes was followed.
Both defective items are outside this batch's edit scope and were not modified.

## Readiness

All 15 items were recorded `ready` with
`node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies <declared deps> --reason <evidence summary>`
**after** the final item carriers and the final manifest regeneration (the
manifest embeds each item's text, so ordering matters). The dependency lists
passed are the items' declared `deps`, including the cross-batch and imported
suppliers actually used. The reasons for
`pthm-nrqm-kinematics-boost-covariance` and
`rem-nrqm-kinematics-scope-and-empirical-status` disclose the recorded batch-42
supplier metadata defect. All 15 records were then verified **closed** against
the current inputs by a scoped `step1Decision` run (item text, dependency
metadata and the containing manifests), so no record is stale at handoff.

Handoff artifacts: the A/B carriers
(`library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics.md`,
`...-examples.md`), the manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.pages.json`, the coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.coverage.json`, the proof
contracts `research/physics-cm-qm-gr-79-2026-10-11-batch-48.proof-contracts.json`,
the cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-48.cross-batch-dependencies.json`
and these notes. Step 2/3 independent review follows; a readiness record is not
mathematical approval.
