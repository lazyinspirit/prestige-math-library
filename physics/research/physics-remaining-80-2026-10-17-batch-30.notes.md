# Batch 30 notes — csm-hamiltonian-statistics

Run physics-remaining-80-2026-10-17, beta batch 30. This assignment owns
csm-hamiltonian-statistics (A, order 495) and
csm-hamiltonian-statistics-examples (B, order 496), and only their draft
items and batch evidence.

## Plan comparison and conflicts

The binding owner direction and complete assigned section of
research/plan-classical-statistical-mechanics-track.md control the scope and
proof route. The current plan-spec A/B rows agree with the required titles,
companion, order, and eight A-page prerequisites:

- euclidean-ordinary-differential-equations-with-smooth-dependence
- hamiltonian-mechanics-and-completely-integrable-systems
- measure-preserving-transformations-and-poincare-recurrence
- product-measures-and-the-fubini-tonelli-theorems
- strong-laws-of-large-numbers
- symplectic-manifolds-moser-stability-and-darboux-weinstein-theory
- td-math-mixture-dynamics-and-shells
- the-lebesgue-integral-and-the-convergence-theorems

The plan-spec item arrays were empty preauthoring placeholders. The assigned
paired inventory reserves eleven A items and three B examples. Authoring the
required implication from preservation of a smooth volume density to
preservation of its chart-glued Borel measure required one new local A-page
lemma, lem-csm-dk-volume-form-pullback-preserves-reference-measure. The
resulting inventory is twelve A items and three B items, below the 100-item
page cap. The shared plan and paired inventory were left unchanged.

Consumer-map amendment 2 adds two direct prerequisites that the paired
inventory dependency_roles maps do not yet record: the nonnegative
change-of-variables theorem for
thm-csm-dk-invariant-hamiltonian-and-shell-measures, and dominated
convergence for thm-csm-dk-qualified-time-averages. The item frontmatter,
page manifest, contracts, and levels below carry those current dependencies
with mathematical-premise roles. This is a stale inventory metadata conflict,
not a change to the planned claim.

## Inventory, dependency order, and levels

The dispatch dependency-levels input places batch 30 at level 0 with
requires=[], so there are no logical suppliers in another batch of this run.
Items were authored before their consumers. Local levels recomputed from the
batch-30 manifest and actual item deps are:

| Item | In-run supplier levels | Level |
|---|---|---:|
| lem-csm-dk-volume-form-pullback-preserves-reference-measure | none | 0 |
| def-csm-dk-hamiltonian-flow-measure | none | 0 |
| thm-csm-dk-integrable-covariance-green-kubo | none | 0 |
| def-csm-dk-ergodic-and-mixing-notions | none | 0 |
| post-csm-dk-selected-hamiltonian-dynamics | Hamiltonian phase definition (0) | 1 |
| thm-csm-dk-compact-hamiltonian-linear-response | phase definition and measure bridge (0) | 1 |
| thm-csm-dk-finite-measure-recurrence | phase definition (0) | 1 |
| thm-csm-dk-invariant-hamiltonian-and-shell-measures | phase definition and measure bridge (0) | 1 |
| thm-csm-dk-qualified-time-averages | phase definition (0) | 1 |
| thm-csm-dk-mixing-hierarchy | mixing definition (0) | 1 |
| thm-csm-dk-liouville-and-fine-entropy | invariant-measure theorem (1) | 2 |
| cex-csm-dk-weak-mixing-not-strong-mixing | mixing definition (0) | 1 |
| cex-csm-dk-recurrent-hamiltonian-nonergodicity | invariant shell and recurrence results (1) | 2 |
| cex-csm-dk-coarse-entropy-returns | fine-entropy theorem (2) | 3 |
| pthm-csm-dk-qualified-hamiltonian-statistical-predictions | adopted model (1), invariant measures (1), Liouville (2), averages and response (1) | 3 |

The scoped dependencyLevels calculation found no cycles and agreed with all
15 item labels (maximum level 3). Direct prerequisite carriers exist. The
in-run draft suppliers were inspected at their current statements, hypotheses,
and complete proof status; their draft labels were not treated as proof.

## Mathematical and physical argument review

- The A-page phase definition distinguishes the maximal local flow from a
  complete invariant Borel domain, the symplectic reference measure from an
  ensemble probability, and the canonical weight from its finite-positive
  normalizer. Units and the action normalization convention are explicit.
- The new measure bridge proves chartwise Jacobian transport using countable
  disjoint Borel atlas partitions and the nonnegative change-of-variables
  theorem. Its TikZ commutative square is explanatory only; the proof does not
  rely on the diagram.
- Energy-weighted probabilities are invariant only when 0 < Z < infinity.
  Regular-shell probabilities require full AC, a C2 Hamiltonian, a
  nonvanishing gradient on an open energy interval, compact inverse images of
  compact energy bands, and a complete flow on the specified compact band.
  The current published thm-tdmath-regular-energy-shell-measure statement
  and complete proof were inspected at exactly these hypotheses. Critical
  levels and noncompact bands remain excluded.
- Recurrence is stated for the chosen sampled map and any finite invariant
  Borel measure; it is almost everywhere on each Borel set, not pointwise for
  every orbit. The oscillator example verifies a positive regular compact
  shell and a separately conserved oscillator energy, giving an invariant set
  of intermediate normalized shell probability. It refutes ergodicity while
  retaining almost-everywhere recurrence.
- The sampled-average theorem assumes ergodicity of the particular
  Phi_Delta; the continuous-time conclusion is separately proved for bounded
  Borel observables by block averaging and a uniform remainder bound. No
  generic flow ergodicity or convergence for every initial state is asserted.
- The Green–Kubo theorem specifies a jointly measurable centered real vector
  process, finite second moments, finite second-order covariances stationary
  under time translation, and absolute integrability on nonnegative lags for
  the limit. It proves the covariance identity, the matrix limit, and positive
  semidefiniteness. It makes no central-limit, measured-transport, or
  transport-coefficient identification.
- The compact linear-response proof gives the variational equation,
  transition-map variation, invariant-law integration by parts, and the
  correlation identity under a fixed unperturbed canonical preparation and a
  smooth finite-time control. The scope is compact, smooth, and finite-time;
  a long-time limit is conditional on separate correlation decay.
- Liouville transport is stated on an open complete invariant domain. The
  distributional identity uses compactly supported tests and completed-product
  Fubini; constant fine entropy requires absolute integrability of
  rho_0 log rho_0. The rotor counterexample explicitly computes changing
  partition Shannon entropy while the fine reference-measure entropy remains
  constant.
- The mixing item uses the imported absolute-Cesàro convention for weak
  mixing. The Chacon counterexample is a discrete measure-preserving example
  and claims no Hamiltonian realization.
- The selected Hamiltonian dynamics item is an adopted postulate. The final
  prediction theorem states its normalizability, full-AC shell, ergodicity,
  and compact-response premises separately. Neither item claims experiments,
  observed equilibration, or that nature obeys the selected model.

## Source reading and dispositions

Four primary full-text sources were inspected and stamped:

- David Tong, Classical Dynamics, complete author-hosted notes, §4.1.2 and
  §§4.2–4.2.3: Hamilton’s equations, Liouville volume and density equations,
  stationary energy-dependent distributions, and recurrence.
- Daniel Arovas, Thermodynamics and Statistical Mechanics, complete
  author-authored LibreTexts §3.2: Hamiltonian evolution, phase-volume
  evolution, Liouville’s equation, and the microcanonical distribution.
- David Tong, Statistical Physics, complete Chapter 1 §1.3 and §§1.3.1–1.3.4:
  the canonical ensemble, partition function, energy fluctuations, entropy,
  and free energy.
- MIT OpenCourseWare 22.103, Microscopic Theory of Transport, Lecture 3,
  all four pages: the mean-square-displacement/velocity-correlation identity
  and its physical Green–Kubo discussion.

Tong’s notes and Arovas’s textbook are independent full treatments by
different authors. The coverage file records each source URL, locator,
harvested result, disposition, support, and limitation. The MIT source assumes
equilibrium time-translation invariance and a physical long-time
mean-square-displacement premise; the local theorem supplies its own complete
conditional covariance proof.

The full-book Arovas PDF route was rejected by the browser parser at 29,792,744
bytes; the complete relevant §3.2 HTML section was inspected instead. Arovas
§§3.3–3.4 returned DekiScript parse errors while screened. Neither failed
route supplies a premise to an item. The accessible Tong recurrence treatment,
the current Poincaré supplier, and complete local proofs cover the relevant
claims, so no mathematical coverage was dropped or escalated. Coverage also
records the searches used to locate alternatives. source-fetch-check --stamp
verified and stamped all four active source URLs, with zero documented drops.

## Scoped check outcomes

- precheck.mts: 13 proof-bearing items checked, 0 failing; the postulate
  passed its nonproof-structure check.
- Strict proof contracts: 15/15 items, 0 errors and 0 warnings; 37 numbered
  proof steps, exact supplier excerpts, complete boundary worksheets, and
  finite checks for the explicit rotor and oscillator calculations.
- Proof layout on the 15 changed items: 15 items, 37 steps, 0 defects.
- Render check on all 15 items and both assigned pages: 17 files; all YAML
  frontmatter parsed, all math parsed, no multiline display blocks, and no
  wikilinks inside math.
- Content policy: 15 scoped items, 0 errors and 0 warnings. Focused depcheck
  passed all 15 items and both assigned pages, including prerequisite-cycle
  checks. Coverage checklist passed 1 A page and 16 harvested results with no
  errors or warnings. Source-fetch check verified 4/4 sources.
- The scoped item-level dependency calculation passed for 15 items, levels
  0–3. The batch manifest preserves the batch-level input level 0,
  requires=[].

## Run-wide check blockers outside batch 30

The full-run item-dependency-levels check reports 106 errors outside this
assignment: 97 empty scaffold inventories across other in-flight pages
(including emg-g04, emg-g04-examples, csm-gibbs-lattice-examples, and
csm-continuum-limits), and nine stored/computed item-level mismatches:

- pthm-csm-qualified-continuum-equilibrium-limits (stored 3, computed 4)
- def-tgr-charged-liouville-data (0, 1)
- lem-tgr-charged-liouville-preserves-mass-shell (1, 2)
- lem-tgr-gauge-killing-energy (1, 2)
- thm-tgr-electrochemical-stationarity (2, 3)
- ex-tgr-electric-circulation-obstruction (3, 4)
- lem-tgr-timelike-scalar-acceleration (2, 3)
- lem-tgr-spectral-thermometer (3, 4)
- ex-tgr-finite-switch-inertial-rate (4, 5)

None is a batch-30 supplier.

The full-run batch-dependency-levels check reports the shared dependency record
as stale. The current read-only recomputation has input digest
1f7d1d1112865cf178c300f64bda9e264ec9133fc1115b54f1c9e46a56a3deb9, while the
shared record stores 949a7d0c47a19fe0e526a4bd4b666ce43d9ea1bd59a953a573f370963527fc0c.
Batch 30 remains at level 0 with requires=[]. The six differing current rows
are batches 4 (new requires edge to 2), 8 (to 6), 14 (to 1 and 2), 28 and 29
(to 26), and 54 (to 50); their levels remain 2. This is cross-batch graph
drift outside this assignment. The shared graph file was left for the owner
to recompute after active authors drain.

The final full-run Step 1 check reports 82 of 307 items ready and is not
closed because other batches have unresolved items and empty inventories.
None of the 15 batch-30 items remains in its work list: all 15 readiness
records are current and ready with the exact examined dependencies. These
records are authoring readiness, not independent proof approval.
