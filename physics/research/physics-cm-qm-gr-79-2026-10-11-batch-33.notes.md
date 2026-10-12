# Batch 33 notes — `cm17-classical-continua-with-explicit-constitutive-assumptions`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 33, one A/B pair:
A page `cm17-classical-continua-with-explicit-constitutive-assumptions`
(order 145, `non-relativistic-classical-mechanics`, library `physics`) and
B page `cm17-classical-continua-with-explicit-constitutive-assumptions-examples`
(order 146). Step 1 (complete initial authoring) is finished: 27 items and both
page carriers are authored, checked and recorded ready. This file records
checkpoint evidence, conflicts and unresolved findings, **not approvals**.
Independent review (Step 2/3) has not yet happened.

## Inventory and levels

- A page, 19 items. Levels are one plus the maximum level of an in-run `deps`
  target, computed over all run manifests by `item-dependency-levels.mjs`
  (suppliers from batches 1, 4, 8, 15, 17, 18, 19 and 23 are in-run, so the
  labels are 8-16 for this page):
  level 8 `def-cm17-continuum-body-and-units`; 9
  `post-cm17-continuum-kinematic-model` and
  `pthm-cm17-chain-limit-of-the-string-model`; 10
  `def-cm17-density-and-mass`, `pthm-cm17-transport-and-material-derivative`,
  `def-cm17-traction-and-stress`, `pthm-cm17-string-wave-solutions`; 11
  `post-cm17-mass-balance`, `post-cm17-contact-force-model`,
  `post-cm17-linear-elastic-constitutive`; 12
  `pthm-cm17-continuity-equation`, `post-cm17-momentum-balance`; 13
  `pthm-cm17-stress-matrix-and-symmetry`, `post-cm17-fluid-constitutive`; 14
  `pthm-cm17-momentum-equation`; 15
  `pthm-cm17-linear-elastic-equation-of-motion`,
  `pthm-cm17-incompressible-periodic-local-evolution`; 16
  `pthm-cm17-elastic-plane-wave-speeds`,
  `rem-cm17-boundary-regularity-and-scope`.
- B page, 8 items: level 1
  `cex-cm17-traction-symmetry-without-stress-matrix`; 9
  `ex-cm17-riemann-shock-and-rarefaction-check`; 10
  `ex-cm17-spring-chain-limit-numbers`; 11
  `ex-cm17-string-modes-and-tail-check`; 13
  `ex-cm17-uniform-expansion-transport-check`; 15
  `ex-cm17-channel-flow-and-no-slip-check`; 16
  `ex-cm17-periodic-shear-exact-solution-check`; 17
  `ex-cm17-elastic-plane-wave-and-energy-check`.
- Authors were written once each, in ascending item level order: definitions
  and postulates first, then the transport/localization theorems, then the
  stress matrix, the momentum equation, the constitutive branches, the wave
  and fluid theorems and the scope remark last; the B examples after their A
  suppliers.
- The engine batch graph gives batch 33 `dependency_level: 7`,
  `requires: [15, 23]`; both supplier batches are complete, and batch 8
  (`cm-math-continuum`) and batch 1 (`cm-math-geometry`) are complete
  transitive suppliers. No batch-33 item is blocked.

## Design versus plan

1. **Design read and delivered.** `research/plan-non-relativistic-classical-mechanics-track.md`
   L919 (CM17) was read in full, together with the bound
   `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` and
   the batch-dependency levels. The reservation's provisional A items map
   one-to-one onto the delivered inventory: `cm17-material-domain` →
   `def-cm17-continuum-body-and-units`; `cm17-motion(post)` →
   `post-cm17-continuum-kinematic-model`; `cm17-density` →
   `def-cm17-density-and-mass`; `cm17-transport` →
   `pthm-cm17-transport-and-material-derivative`; `cm17-mass-balance` →
   `post-cm17-mass-balance`; `cm17-stress` → `def-cm17-traction-and-stress`;
   `cm17-momentum-balance` → `post-cm17-contact-force-model` +
   `post-cm17-momentum-balance`; `cm17-elasticity` →
   `post-cm17-linear-elastic-constitutive`; `cm17-fluid` →
   `post-cm17-fluid-constitutive`; `cm17-local-balance` →
   `pthm-cm17-continuity-equation` + `pthm-cm17-momentum-equation` +
   `pthm-cm17-stress-matrix-and-symmetry`; `cm17-waves` →
   `pthm-cm17-linear-elastic-equation-of-motion` +
   `pthm-cm17-elastic-plane-wave-speeds` +
   `pthm-cm17-chain-limit-of-the-string-model` +
   `pthm-cm17-string-wave-solutions`; `cm17-boundary-regularity` →
   `rem-cm17-boundary-regularity-and-scope`. The design's B-and-sources
   sentence is satisfied: E14/E24 supply the explicit smooth wave existence
   (elastic plane waves, d'Alembert formula, fixed-end sine series), E23 the
   scalar entropy shock and fan plus the exact viscous laminar models, E26
   the proved smooth periodic chain limit, and E30 the local smooth periodic
   incompressible Euler/viscous IVP — delivered by
   `pthm-cm17-incompressible-periodic-local-evolution` and consumed through
   the batch-15 mathematics.
2. **Extra prerequisites on the same A page (within the 100-item cap).** The
   complete local closure required `pthm-cm17-stress-matrix-and-symmetry`
   (Cauchy tetrahedron plus symmetry, the `E13` contact-force route),
   `pthm-cm17-momentum-equation` (the `E13` localization) and
   `post-cm17-contact-force-model` (Cauchy's hypothesis as an explicit
   adopted force model). No promised claim was weakened or dropped, and no
   reservation item was split into another batch.
3. **Plan-spec agreement.** `research/plan-spec.json` entries 145/146 agree
   with the carriers in id, title, kind, order, category, library, companion
   and `requires`; the item arrays in the plan are empty (prose splice), so
   the item scope is taken from the linked inventory and this batch's
   manifest. `validate-plan.mjs --run` reports zero findings for either page:
   every item-level dependency of the pair lies inside the transitive closure
   of the declared requires (`cm-math-fluid`, `cm07`, and through them
   `cm-math-continuum`, `cm-math-geometry`, `cm01`-`cm03` and the imported
   root mathematics pages). There is no plan conflict to record.
4. **Stale design text, resolved and recorded.** The prose-scaffold source
   table attached to the design names "T§2.5.5 pp33-35 string field example"
   as the variational string background. Batch 8 of this run audited the
   document in full and recorded that Tong's *Classical Dynamics* has four
   chapters, that §2.5.5 is the restricted three-body problem, and that the
   notes contain no string-field section (see the batch-8 notes' Tong
   `source_resolution: dropped`). This batch follows the corrected reading:
   the discrete-chain comparison is backed by Stewart §6.1 and Likharev
   §6.2-6.5 (both fetch-verified below), and no claim rests on the stale
   Tong locator. The plan controls; the delivered scope is unchanged.
5. **Dispatch header.** The header says "covers: 33" while the task text
   assigns exactly one A/B pair; the pair was authored and the number is read
   as the batch index, as in every other batch of this run.

## Sources

- `research/physics-cm-qm-gr-79-2026-10-11-batch-33.coverage.json` records 11
  source entries (7 distinct treatments; several appear on both pages) with
  exact locators and 50 harvested-result dispositions. Active treatments:
  R. Abeyaratne, *Continuum Mechanics, Vol. II* (monograph); K. Likharev,
  *Essential Graduate Physics CM* (textbook); I. Stewart, MIT 8.09/8.309
  (course notes); W. Barsukow, *Introduction to Conservation Laws*
  (lecture notes); L. C. Evans, *Entropy and Partial Differential Equations*
  (lecture notes); R. Laugesen, *Harmonic Analysis Lecture Notes*
  (arXiv:0903.3845); MIT OCW 12.005 Lecture 3. All 11 entries are
  fetch-verified by `source-fetch-check --stamp` (bytes + sha256 stamps);
  0 drops and no recovery attempts were needed. Every harvested result has a
  disposition: `included`/`inline` with a scaffolded item id, or
  `out-of-scope` with a specific reason (thermoelasticity; finite-strain
  elasticity; multidimensional/numerical conservation laws; systems of laws;
  Hamilton-Jacobi and probabilistic entropy; non-periodic harmonic analysis;
  the remaining OCW lectures; Hamiltonian supplements of Likharev and
  Stewart).
- The items' own `sources.references` point at the same treatments with
  section-level locators. One citation was corrected during authoring: the
  AMS bookstore landing page for Evans' book was replaced by the author's
  downloadable lecture notes, whose Chapter V genuinely contains the weak
  solution, entropy and Rankine-Hugoniot material cited.

## Checks run on the final carriers (actual outputs)

- `precheck.mts` on all 27 items: **23 checked, 0 failing — all clean**
  (the 3 definitions, 6 postulates and 1 remark are nonproof items).
- `proof-layout.mjs` on the 27 items: **27 items, 75 steps, 0 defects**.
- `rendercheck.mjs` on the 27 items plus both page carriers: **OK** (no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses).
- `proof-contract.mjs ... --strict`: **0 error(s), 0 warning(s), 27/27
  item(s) checked**. Postulates carry `physics_review` with formulation,
  scope, sources and non_derivation verdicts; definitions and the remark
  carry item-appropriate boundary worksheets; all 17 proof-bearing items
  carry citations with exact supplier quotes, per-step derivations and the
  eight standard boundary dispositions.
- `content-policy.mjs` on the batch manifest: **27 scoped item(s), 0
  error(s), 0 warning(s)**.
- `manifest-deps.mjs`: **27 item(s), 0 normalized, 0 error(s)**.
- `coverage-checklist.mjs --require-destination`: **2 page(s), 50 harvested
  result(s), 0 error(s), 0 warning(s)**.
- `source-fetch-check.mjs --coverage`: **11/11 fetch-verified, 11/11
  resolved**.
- `item-dependency-levels.mjs check --run`: **zero findings mentioning any
  batch-33 item or page** (the command exits 1 only for other batches'
  unbuilt empty inventories).
- `depcheck.mjs items/*cm17*.md`: **no finding mentions any batch-33 item**
  (the only cm17 lines are informational page summaries). Global exit fails
  on unrelated published-unaudited items and two other batches'
  `b-leaf-content` findings.
- `fwdcheck.mjs`: batch-33 items are reported **inherited**; no finding.
- `extcheck.mjs`: **OK — every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked**; zero cm17 lines.
- `validate-plan.mjs research/plan-spec.json --run`: **zero findings for
  either cm17 page**; the global exit fails on other pages'
  `undeclared-prereq` (e.g. `qm-math-fock-and-equilibrium`).
- `step1-decisions.mjs check --run`: **0 open cm17 readiness records**. A
  final proof-clarity edit to
  `pthm-cm17-incompressible-periodic-local-evolution` (step 2.2 now states
  explicitly that the uniform derivative bounds give the joint smoothness of
  the reconstructed pressure) changed the input hash of that item and of its
  two in-batch consumers; those three records were re-recorded after the
  edit, and the batch contract was regenerated afterwards. Other batches'
  overall ready counts move with their own authors and are not part of this
  batch's evidence.

## Cross-batch dependencies

- `research/physics-cm-qm-gr-79-2026-10-11-batch-33.cross-batch-dependencies.json`
  records **96 reviewed rows** (94 item edges plus 2 page edges) covering
  every dependency of every batch-33 item on an item owned by another batch
  of this run — suppliers in batches 1, 4, 8, 15, 17, 18, 19, 22 and 23 —
  each with the supplier statement excerpt, the consumer-side use and role,
  and the supplier carrier. The two page rows record `cm17 -> cm-math-fluid`
  (batch 15) and `cm17 -> cm07` (batch 23) as verified reading-order
  prerequisites. `frontier-dependency-ledger.mjs refresh` merged all rows;
  the unified ledger shows batch 33 in `reviewed_batches` with **0
  unverified cm17 edges**.
- The B -> A companion page edge is same-batch and is not a ledger row,
  matching the practice of batches 15, 23 and 8.

## Unresolved findings and honest limitations

1. **Independent review pending.** No item has been read by a separate
   agent; the readiness records are the author's own gate results, not
   mathematical approval.
2. **Run-wide gate preconditions fail outside this batch.**
   `physics-check.mjs --run` aborts with `Invalid or empty current page in
   physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json`, and
   `proof-contract-coverage.mjs --run` aborts on the empty frontier page
   `cm13-symplectic-geometry-and-canonical-methods`; both are other batches'
   unbuilt inventories, named here rather than silently counted as passes.
   `depcheck`, `fwdcheck`, `validate-plan` and `item-dependency-levels` exit
   nonzero on the whole corpus for other scopes' drafts, published-unaudited
   legacy items and empty scaffolds; none of the reported lines names a
   batch-33 item or page.
3. **Scope intentionally not claimed.** The periodic fluid theorem is local
   in time, for smooth data and the periodic-cell idealization; no material
   label map is constructed from the velocity field; the small-displacement
   replacement of the elastic branch is an adopted idealization with no
   derived error bound; general compressible entropy systems, rough-wall
   traces, nonlinear constitutive PDEs, turbulence closure and all-time 3D
   regularity are recorded as outside the page. These are scope statements,
   not gaps to be filled by weakening the theorems.
4. **Model versus nature.** Every item is a conditional statement about an
   explicitly adopted model. No measurement, viscosity value, modulus value
   or material claim is asserted anywhere in the batch; the constitutive
   parameters appear only as model data, and the remarks record that any
   numerical use enters as a qualified empirical premise.
5. **Constants are safe bounds, not optima.** The chain-limit constants
   (`C = c^2 sqrt(L) M / 12`, the `a^{3/2}` nodal factor) and the tail
   constant of the sine series are as supplied by the mathematics items; the
   B-page evaluations are bounds, not sharp error values.
6. **Convention notes.** The scalar conservation-law example is a one
   dimensional idealized model and is explicitly not the three-dimensional
   compressible Euler system; the periodic-cell pressure convention is
   zero spatial mean; the traction sign convention is
   `t(n) = sigma n`, so `-p I` is compression for positive `p`.

## Readiness

All 27 items have current `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json`
records with `decision: ready`, the exact examined dependency lists and the
final carrier hash; no batch-33 item is escalated, and all 27 records
validate as current. Step 1 authoring is complete; the full engine gate and
independent mathematical review remain the duties of later steps.
