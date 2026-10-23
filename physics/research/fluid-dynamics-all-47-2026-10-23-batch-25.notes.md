# Batch 25 authoring notes — fd-k01

Run: fluid-dynamics-all-47-2026-10-23 · batch: 25 · status: Step 1 authoring complete; 13 draft items have current readiness records.

## Design, plan, and inventory

The controlling design is research/plan-fluid-dynamics-refresh-track.md,
“Nonnegative kinetic density and moment domain” (§ at lines 862–897). It is
explicitly the current 2026-10-18 owner refresh and supersedes conflicting
historical fluid design text. The historical section in
research/plan-fluid-dynamics-track.md (lines 780–815) reserves the same A/B
pages, category, library, order, 10 A IDs, and 3 B IDs, but names the older
research/extended-frameworks-2026-10-03 source inventory. The controlling
refresh instead names research/scaffold-refresh-2026-10-18/fluid-dynamics/
proposed-inventory.json and its linked inherited argument record.

The current research/plan-spec.json agrees with the controlling design on page
IDs fd-k01 and fd-k01-examples, category fluid-dynamics-mathematics, library
mathematics, companion relation, titles, order 409/410, and A-page prerequisites
product-measures-and-the-fubini-tonelli-theorems and
td-math-mixture-dynamics-and-shells. Its items arrays are empty, so that is
recorded as an unmaterialized authoring inventory, not authority to omit the
successor carriers. The B page requires fd-k01 as the same-pair ordering edge;
this is not an external batch prerequisite.

The controlling inventory is the FD-K01 record in the refresh
proposed-inventory.json: ten A carriers and three B carriers. The historical
track reserves the same IDs. The assigned batch-dependency-levels record places
batch 25 at dependency level 0 with requires []. All suppliers used below are
outside this run or local to this pair; there is no in-run cross-batch edge or
cycle.

The source inventory uses historical supplier shorthand TD-L12, TD-M17, and
TD-M27. The refresh supplier map labels those as research-scaffold suppliers,
not production acceptance, and gives their exact old module locations and
hypotheses. They are not treated as current proved items. For the collision
model and H theorem, the current required published page supplies the exact
canonical interfaces def-tdmath-elastic-collision-kernel and
thm-tdmath-regular-collision-entropy. Gaussian moment identities are proved in
the assigned mathematical items from explicit integral hypotheses/results;
no heat-equation or OU conclusion is imported.

## Supplier inspection and axiom strength

The imported theorem
thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces is pinned and its
current local copy matches the root mathematical original byte for byte. Its
statement requires sigma-finite measure spaces and an L1 product function; its
complete proof obtains section integrability and equality of iterated integrals
from Tonelli on the absolute value, the integral triangle inequality, and
linearity. These hypotheses match the stated finite-moment product integrals.

The current published def-tdmath-elastic-collision-kernel defines the elastic
quadruple set, symmetric nonnegative collision measure, the chosen weak
collision operator map, its test class, and absolute convergence; it explicitly
does not assert that every measure produces such an operator. The current
published thm-tdmath-regular-collision-entropy assumes positive C1 space/time,
C2 velocity data, the displayed entropy/flux/collision integrability, and the
weak identity for 1 and log(f/f_ref). Its complete proof gives the entropy
balance, equality criterion, and (with locally finite full-support collision
measure) the quadratic-log/Maxwellian characterization. The local uses state
these assumptions rather than infer them from the supplier label.

Lebesgue measure on the Euclidean velocity space is used with the explicit
Countable Choice hypothesis in thm-lebesgue-measure-is-a-complete-measure;
the local density definition and its consumers state AC_omega. The
one-dimensional Gaussian theorem is an improper Riemann result. The local
Maxwellian proof uses the separate published conversion theorem
thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line,
whose Statement explicitly assumes AC_omega, before applying Tonelli/Fubini.
The transitive dependency index also lists definitions of stronger choice
principles through generic real-analysis suppliers; these are not treated as
assumptions unless the inspected Statement/proof uses them. No full AC or DC
assumption is asserted here.

The current published def-lebesgue-measure-and-the-lebesgue-sigma-algebra has
the Caratheodory definition and a justified_by measure-existence theorem under
AC_omega. Its Definition contains the malformed duplicated phrase “Under
countable choice, Assuming countable choice” and should be reviewed by its
owner; no imported file is changed here. The local assumptions are strong
enough to use its actual stated measure-existence result.

Before any supplier escalation, loadStep1Record and step1Decision were run for
the six outside published suppliers def-lebesgue-measure-and-the-lebesgue-sigma-algebra,
thm-lebesgue-measure-is-a-complete-measure,
thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
def-tdmath-elastic-collision-kernel,
thm-tdmath-regular-collision-entropy, and thm-gaussian-integral. Each has no
current-run Step-1 record because it is outside the authored run inventory.
Their current carriers are published and their relevant statements/proofs were
inspected. The missing current-run record is not treated as a mathematical
prerequisite gap or as missing independent approval.

## Sources read and result dispositions

Three independent full-text treatments were retrieved and inspected. The full
documents were fetched; the listed relevant sections were read, not the entire
books.

- David Tong, Lectures on Kinetic Theory, Part 2: “Kinetic Theory” (2012),
  https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf. The 39-page PDF
  redirected to the author's full PDF and was retrieved as 753477 bytes,
  SHA-256 679d3311f627e2f3bcb672292ed21ef0c48098197dc8e93340a17ed5bb05d8d5.
  Read §2.2.2 (printed pp. 23–24: detailed balance and local Maxwellian),
  §2.3 (pp. 32–35: H functional, pre-collision molecular-chaos assumption,
  full collision-symmetry derivation and equality condition), §2.4.1–2.4.2
  (pp. 36–43: collision invariants, moment balances, density, momentum, stress,
  temperature, heat flux, and local-equilibrium Euler closure), and §2.5.1
  (pp. 45–46: relaxation-time approximation, explicitly identified as a
  non-exact model). The local proofs retain their stronger stated integrability
  and convergence hypotheses; this source is not used as a proof of a
  hydrodynamic limit.
- François Golse, “The Boltzmann Equation and Its Hydrodynamic Limits,” full
  143-page chapter PDF,
  https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf.
  Retrieved as 1029410 bytes, SHA-256
  917c66e66cf200de51fdeb47858dce59145cffd973d2fd382378fd88dc54468a. Read
  §3.1 (printed pp. 19–22: complete weak collision symmetrization, collision
  invariants, and local moment equations) and §3.2 (pp. 23–25: complete H
  theorem proof and the Fourier-transform Maxwellian equality proof). The
  source's equality theorem assumes an a.e.-positive scattering kernel; the
  assigned theorem instead uses the exact current full-support measure
  interface. This chapter's separate hydrodynamic-limit discussion is context,
  not the local theorem's proof.
- Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models, 50-page
  Prague lecture notes (October 2017),
  https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf.
  Retrieved as 425020 bytes, SHA-256
  3b20d52a0ff64b91e99b291be539b090e0da14fd59eefd1afba8520956a49298. Read
  §2.2.4–2.2.5 (printed pp. 8–9: collision conservation, entropy production,
  local equilibria) and §3.2 (pp. 11–12: compressible Euler moment calculation).
  The author explicitly labels the limit derivation formal and assumes
  convergence; the assigned theorem supplies a separate complete proof under
  weighted strong convergence.

A full-text attempt at the original Bhatnagar–Gross–Krook APS PDF endpoint
https://journals.aps.org/pr/pdf/10.1103/PhysRev.94.511 returned HTTP 401.
After that failure, an alternative full-text search was made; the already
retrieved Tong §2.5.1 provides the relaxation-time model and explicitly states
its approximation limit. No APS full-text reading or retrieval stamp is
claimed, and the inaccessible URL is not included as an active source. The
explicit homogeneous BGK solution and entropy proof are local deductions.

The original APS locator is excluded from active references after its HTTP 401; Tong §2.5.1 was found as an accessible full-text alternative, and the BGK arguments are local. No harvested source is marked dropped and no source-resolution escalation remains unresolved; the failed locator and per-item local alternatives are retained in coverage search evidence.

## Initial authoring checkpoint

At initial evidence review no assigned carrier had been completed. The completed
supplier-first authoring checkpoint below supersedes that initial state. Its
planned order was: kinetic-density definition; elastic-collision definition;
moment balances and H theorem; collision-Maxwellian characterization; Gaussian
Maxwellian moments; controlled Euler passage; conserving BGK definition;
homogeneous BGK solution; BGK entropy bound; then the B counterexample, initial
layer example, and scope remark.

## Authoring checkpoint — carriers completed

All thirteen assigned item carriers have now been authored in supplier-first
order. Each Statement/Definition/Example/Remark is complete and contains no
hyperlinks; its bibliography follows immediately under the matching references
heading. Proof facts retain exact supplier wikilinks. The definitions are on the
A page inventory; the counterexample, initial-layer example, and scope remark
are on the B page.

- `def-fd-kinetic-density` defines the periodic three-dimensional physical
  domain, SI units, fixed reference speed, Countable Choice assumption, finite
  absolute third-moment domain, moments, and normalized Gaussian candidate.
  Dependencies: exact countable-choice, Lebesgue, product-measure, sigma-finiteness,
  and Fubini suppliers. No claim of Gaussian normalization is made at definition.
- `def-fd-elastic-collision-measure` specializes the current published
  `def-tdmath-elastic-collision-kernel`; it gives the elastic set, symmetric
  measure, declared operator/test domain, weak identity, explicit invariant and
  entropy-test membership, and physical normalization of $Q$ in units of $f$ per second. Dependency: density definition and published
  collision-kernel definition. The historical TD-L12 shorthand is not used.
- `prop-fd-kinetic-moment-balances` proves the local mass, momentum, and energy
  equations and exact unclosed fluxes; the hypotheses include velocity,
  time-derivative, and spatial-derivative envelopes and actual weak-test
  admissibility. Dependencies: both local definitions, differentiation under
  the integral, Fubini, and FTC.
- `thm-fd-kinetic-h` proves the conditional periodic entropy decay with
  absolute log-test and entropy-production integrability. Its collision
  interface is the local definition; the proof explicitly uses the product and
  chain rules. Its checked published thermodynamic supplier is
  `thm-tdmath-regular-collision-entropy`.
- `thm-fd-collision-maxwellian` proves the full-support equality form from the
  continuous collision invariant equation, Hessian argument, and integrability.
  It distinguishes zero collision production from transport solutions.
- `prop-fd-maxwellian-moments` evaluates normalization, first and second
  Gaussian moments, stress, heat flux, and monatomic energy from the Gaussian
  integral, substitution, integration by parts, and product Fubini suppliers.
- `thm-fd-controlled-euler-passage` proves only the conditional limit under
  dimensionless weighted strong convergence, with a separate initial weighted
  convergence hypothesis. The Statement now records the three weak initial-trace
  identities explicitly; the pointwise conclusion uses the inspected smooth-bump
  supplier. The weak limit has pressure `p=n k_B T`; it asserts neither existence
  nor convergence.
- `def-fd-conserving-bgk` defines the single-species relaxation operator and
  separates its adopted status from binary collisions.
- `thm-fd-homogeneous-bgk-limit` proves the exact homogeneous solution,
  moment matching, uniqueness in the stated weighted Banach-space class, and
  weighted convergence rate.
- `prop-fd-bgk-entropy-rate` first proves finiteness of the initial relative
  entropy and then bounds it by convexity, so finiteness of the evolved entropy
  is established without assuming the conclusion.
- `cex-fd-collision-support` gives a symmetric single-atom collision measure,
  zero weak production, and a positive integrable non-Maxwellian density.
- `ex-fd-bgk-initial-layer` gives an explicit equal-moment, non-Gaussian
  two-Gaussian mixture. Its proof checks anisotropic Gaussian normalization,
  moments, absolute entropy, and then proves pointwise-away-from-zero and
  spacetime convergence but failure of uniform convergence at the initial time.
- `rem-fd-kinetic-limit-status` records the exact conditional scope of the
  Euler and homogeneous BGK results.

The actual dependency DAG yields in-run levels: density 0; collision definition 1; moment balances 2; H theorem 2;
collision-Maxwellian 3; Gaussian moments 4; controlled Euler 5; BGK definition 5;
homogeneous BGK 6; BGK entropy 7; support counterexample 2; initial-layer
example 7; scope remark 7. No in-run cycle or cross-batch item supplier is present. The final cross-batch dependency array contains the two external page edges and every direct external item edge, each verified against the current supplier interface.

Source evidence read: Tong §§2.2.2–2.5.1, Golse §§3.1–3.2, Zamponi §§2.2.4–2.2.5
and §3.2; exact source URLs and PDF hashes are recorded above. The original APS
BGK PDF attempt returned HTTP 401; the alternatives search found the already
retrieved Tong §2.5.1 full text, so no inaccessible source is claimed as read.
The full-text stamps were later added to all six active coverage entries; final scoped validation and readiness disposition are recorded in the final audit section below.


## Final validation and readiness audit

- All item carriers, the A/B pages, manifest, coverage, proof contracts, notes,
  source-resolution evidence, and 40-row cross-batch dependency array are
  current. Both page files contain YAML frontmatter only, with no summary/body.
  All authored content remains `draft`.
- `proof-layout.mjs` on all thirteen explicitly changed items: 13 items, 33
  numbered proof steps, 0 defects.
- `proof-contract.mjs --strict`: 13/13 items checked, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 29 harvested results, 0 errors, 0
  warnings. `source-fetch-check.mjs` verifies all 6 active page-source entries;
  the three actual documents have SHA-256 prefixes `679d3311f627e2f3`,
  `917c66e66cf200de`, and `3b20d52a0ff64b91` on both source-page records.
- The scoped item-level dependency calculation passes for all 13 items, with
  levels 0,1,2,2,3,4,5,5,6,7,2,7,7 in supplier order. Cross-edge consistency
  matched the manifest, item frontmatter, pages, coverage, and contracts; the
  array contains 39 verified external edges. The strict proof contracts contain
  exact supplier excerpts and 50 fact-to-source citations.
- Current `loadStep1Record` / `step1Decision` confirms 13/13 records are
  `ready` and hash-current after the final conditional Euler statement update. These records cover authored prerequisite readiness;
  independent proof review and publication remain later gates.
- The full-run item-level checker still reports empty inventories and stale
  item-level labels in other owners' pairs (including `fd-f03`, `fd-px01`,
  `fd-s03`, `post-fd-boundary-data`, and `pthm-fd-control-volume-balances`).
  Batch 25's scoped graph has no such errors; those other carriers were outside
  this assignment and were not edited.
- The run-level `batch-dependency-levels.mjs check` reports the shared
  `fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json` input hash is
  stale after the now-nonempty manifests were authored. The batch-25 dependency
  graph itself is level 0 with no in-run batch supplier; the shared scheduling
  ledger is owner-managed and was left unchanged. Root should refresh that
  derived ledger before any downstream scheduling gate.
- Imported `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` contains the
  malformed duplicated phrase “Under countable choice, Assuming countable
  choice.” Its formula and cited measure-existence interface were inspected
  and match the stated ACω use; it remains read-only and merits owner repair.
  No unresolved mathematical or physical blocker remains for the assigned
  carriers.
- The original APS BGK full-text endpoint returned HTTP 401. Its failure and
  the accessible alternative search are recorded in coverage, together with
  the complete local arguments and their exact dependencies for the affected
  BGK items. No source was dropped and no retrieval claim was invented.
