# Batch 35 notes — `em-waveguides-and-cavities` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **349**, B page order **350**, category
`classical-electromagnetism`, library `physics`. Final inventory: **8 A items + 3 B items**,
all eleven recorded `ready` with current dependency hashes by `step1-decisions.mjs record`
(this dispatch's records; no owner record existed before). Only the batch manifest, the batch
coverage file, the consumer-batch cross-dependency input, the eleven `step1-*` readiness
records and this note were written; no item file, page, shared plan, published item, engine
state or verdict was edited. The manifest and coverage were prepared complete in `/tmp` and
published by an atomic rename in the same directory (owner direction after the batch-11
transient).

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding; no
clause of it names this pair and none was overridden), the Step-1 drift report
`research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md` (this page: **no-drift**), the
design section `research/plan-classical-electromagnetism-track.md` L2068–L2095, the full
required design sources (`proposed-inventory.json` items `def-em-guide-cavity-geometry`,
`pthm-em-rectangular-mode-candidates`, `pthm-em-guide-completeness`,
`pthm-em-guide-dispersion-energy`, `ex-em-tem-topology-example`,
`ex-em-rectangular-cavity-example`, `ex-em-te-ten-example`;
`definition-contracts.md#def-em-guide-cavity-geometry`;
`completed-expansion-arguments.md#G1–G3`; `core-conditional-proofs.md#K9`;
`worked-example-verifications.md#X7`; the reader reports for the ETH and Fitzpatrick
sources), the current native manifests and `research/plan-spec.json`.

## Design vs plan, and recorded conflicts

1. **Page metadata.** The current plan-spec entries 349/350 and manifest require lists agree. The A page already declares the published sine/cosine and real-limit pages; the B page already declares the harmonic-function page. The old claim that plan-spec still listed only the three EM pages was stale and is removed. All additional K10 published suppliers are already imported and lie in the current A-page requires closure; no new pair, import or prerequisite-page entry is needed. The approved scope enrichment keeps all original eleven IDs and adds exactly two A physics-theorem rows, so the final scope is 10 A + 3 B (well within the 100-item cap). Root records owner scope adoption/proceed and native readiness/gate receipts separately; this note does not fabricate those receipts.
2. **A/B counts.** Design A=4 / B=3; scaffolded A=8 / B=3; cap 100 each. The four added A
   items are necessary local prerequisites, not padding (details below). Every promised item
   and claim of the design is preserved; the B page keeps exactly the three reserved examples.
3. **Recorded replacement of the design's provisional dep lists** (the design dep arrays are
   research context, not proof checks; each replacement is recorded here and in the
   cross-batch input):
   - `pthm-em-rectangular-mode-candidates`: the design dep `pthm-em-vacuum-wave-equation` is a
     *vacuum* wave-equation theorem and its hypotheses (vacuum constitutive laws on the whole
     space) are not the medium guide setting; the medium source-free equations are supplied by
     `post-em-material-closure` (isotropic lossless scalar branch) together with clause (b) of
     `pthm-em-macroscopic-maxwell`, and the reduction of the real equations to the complex
     phasor equations is the new on-page `lem-em-separated-phasor-calculus`. Recorded in the
     manifest roles. Likewise the design's `def-em-guide-cavity-geometry` role label
     `physical-result` is realised as `formulation-prerequisite` (it is a definition), and the
     remaining definitions (`def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`)
     keep formulation roles.
   - `pthm-em-guide-dispersion-energy`: the design dep `pthm-em-wave-energy-average` is the
     *vacuum* plane-wave average theorem; inside the medium the stored-energy density and flux
     are those of `pthm-em-restricted-material-energy`, whose choice-free local clause is used
     (its AC\_ω fixed-volume clause is not), and the single-frequency average is
     `lem-em-period-average`. All promised content (dispersion, cutoff, phase and group
     speeds, average cross-section energy and flux, transport at the group velocity) is kept;
     the finite propagating index box is added as clause (d) because the design prose and the
     ETH source state it and it follows from the same explicit eigen-values.
   - `ex-em-tem-topology-example`: the design dep `pthm-em-electrostatic-bvp-uniqueness` is a
     **three-dimensional** electrostatic uniqueness theorem; the example's uniqueness step is
     the two-dimensional transverse Dirichlet problem on the cross-section, so the correct
     supplier is the published $n\ge2$ corollary
     `cor-classical-dirichlet-and-poisson-problems-are-unique` (classical Dirichlet
     uniqueness on a bounded connected C¹ domain). The design's `def-em-guide-cavity-geometry`
     dep is kept (it now defines straight guides with a general bounded connected cross-section
     as well as the rectangular instances). The polar-change-of-variables **example**
     `ex-polar-change-of-variables-on-an-annular-sector` is dropped: it is homed on the B-page
     `fubini-and-change-of-variables-examples`, and B pages must be leaves; the polar Jacobian
     is read from `thm-polar-coordinates-formula-for-lebesgue-measure` (homed on the in-closure
     A page `fubini-and-change-of-variables`). `lem-log-modulus-is-harmonic-off-its-centre` is
     dropped for the same reason (home `green-functions-harmonic-measure-and-conformal-invariance`
     is outside the declared closure): the coaxial clause now computes
     $\Delta\varphi=0$ inline from the derivative of the logarithm
     (`thm-logarithm-derivative-and-integral`, in closure) and the chain rule.
   - The **scope of the TEM obstruction** is stated explicitly: clause (b) is proved for the
     harmonic-potential form, equivalently (clause (a)) for star-shaped cross-sections, using
     the published star-shaped Poincaré corollary; the general reduction of an arbitrary TEM
     field on a merely simply connected non-star-shaped cross-section is not asserted. The
     design title ("…no nonzero TEM harmonic transverse potential") and X7 are preserved; the
     boundary of the proved statement is recorded rather than hidden.

## Inventory decisions (recorded)

**A page (8 items, in manifest order).**

- `lem-em-separated-phasor-calculus` (lemma, mathematics; scaffold-added). Real-part calculus of
  separated phasor fields $\operatorname{Re}(\tilde F(x_1,x_2)e^{i(\beta x_3-\omega t)})$:
  the $\partial_{x_j}$, $\partial_{x_3}$, $\partial_t$, divergence and curl identities, and
  the amplitude-injectivity determinant argument with its open-set consequence. This is the
  vehicle that turns the real macroscopic equations into complex amplitude equations without
  ever moving an amplitude's phase by hand.
- `lem-em-transverse-vector-identities` (lemma, mathematics; scaffold-added). The transverse
  identities used throughout G1: $\operatorname{div}(e_z\times\nabla_t h)=0$,
  $\operatorname{curl}(e_z\times\nabla_t h)=e_z\Delta_t h$,
  $e_z\times(e_z\times\nabla_t h)=-\nabla_t h$, the orthogonality and norm identities, and the
  curl/divergence of $z$-independent transverse fields.
- `lem-em-rectangle-mode-profile-identities` (lemma, mathematics; scaffold-added). The
  profiles $h_{mn}=\cos\cos$, $e_{mn}=\sin\sin$: eigen-identities, Neumann/Dirichlet boundary
  traces, orthogonality, exact norms $\frac{L_1L_2}{4}(1+\delta_{m0})(1+\delta_{n0})$ and
  $\frac{L_1L_2}{4}$, and the Dirichlet-type integral identities
  $\int|\nabla h|^2=k_c^2\int h^2$, $\int|\nabla e|^2=k_c^2\int e^2$. Choice-free finite
  computation; consumes the published sine/cosine derivative and addition-formula items.
- `lem-em-rectangular-transverse-mode-completeness` (lemma, mathematics; scaffold-added). The
  cosine and sine systems are complete orthogonal systems of $L^2$ on an interval and on a
  rectangle: 1D even/odd extension plus the published torus trigonometric completeness, and the
  2D product argument with Fubini/Cauchy–Schwarz and countable null-set bookkeeping.
  Countable Choice declared and used exactly as in those suppliers.
- `def-em-guide-cavity-geometry` (definition, physics; design item, contract-extended). Straight
  guide $A\times\mathbb R$ (rectangular instance $(0,a)\times(0,b)$), rectangular cavity,
  wall normals, the ideal PEC model $n\times E=0$, $n\cdot B=0$ with its interface reading and
  its recorded hypothesis caveat (compact C² hypersurface and $\sigma\to\infty$ idealization;
  box edges excluded), the zero-normal-B reflection class, TE/TM/TEM terminology, and the
  separated phasor convention. No field equation or constitutive law is asserted.
- `pthm-em-rectangular-mode-candidates` (physics-theorem; design item). The exact TE and TM
  separated candidates in the lossless isotropic scalar branch: phasors, the four source-free
  macroscopic equations, the PEC wall conditions, the index restrictions
  ($(m,n)\ne(0,0)$ for TE; $m,n\ge1$ for TM) and the cutoff relation
  $\beta^2=\omega^2\varepsilon\mu-k_{mn}^2$ with $\omega_c=k_c/\sqrt{\varepsilon\mu}$.
- `pthm-em-guide-dispersion-energy` (physics-theorem; design item). The propagating branch:
  cross-section integral identities; period-averaged $U$ and $\Phi$ with the explicit formulas
  for both families; $\Phi=U\beta/(\varepsilon\mu\omega)=U\,d\omega/d\beta$; the speed relations
  $v_pv_g=1/(\varepsilon\mu)$, $v_p>1/\sqrt{\varepsilon\mu}>v_g>0$; the finite propagating
  index box; lossless-separated scope with no signal-speed claim.
- `pthm-em-guide-completeness` (physics-theorem; design item). Clause (a) transverse $L^2$
  profile completeness; clause (b) the rectangular reflection class with unique finite-energy
  weak solutions and constant stored energy; clause (c) the smooth bounded PEC cavity curl
  eigenbasis, eigenfield smoothness, retention of zero modes, and the medium modal ODE with
  coefficient $(\varepsilon\mu)^{-1}$ derived from the physical first-order system; clause (d)
  the explicit scope exclusions.

**B page (3 items, exactly the design reservation).**

- `ex-em-te-ten-example`: TE$_{10}$ instance of the candidate theorem ($\tilde E=(0,i\omega\mu\frac{a}{\pi}\sin\frac{\pi x_1}{a},0)$,
  $\tilde H=(-i\beta\frac{a}{\pi}\sin\frac{\pi x_1}{a},0,\cos\frac{\pi x_1}{a})$), half-sine
  standing profile, cutoff $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$, propagating branch
  $\omega>\omega_c$, and the lowest-cutoff comparison for $a\ge b$ (tie at $a=b$).
- `ex-em-rectangular-cavity-example`: the explicit standing mode
  $E=e_1\sin(\pi x_2/b)\sin(\pi x_3/d)\cos\omega t$,
  $B=-\frac1\omega\operatorname{curl}E_{\mathrm{sp}}\sin\omega t$, identified as the
  $\beta=0$ TM (1,1) cutoff instance on the axis $e_1$, with resonance
  $\omega^2=(\varepsilon\mu)^{-1}[(\pi/b)^2+(\pi/d)^2]$, all six wall conditions and the
  end-cap check from $x_1$-independence.
- `ex-em-tem-topology-example`: the potential-form TEM reduction and PEC boundary-derivative
  equivalence; the single-conductor obstruction by two-dimensional Dirichlet uniqueness
  (connected boundary $\Rightarrow$ no nonzero potential-form TEM); the coaxial annulus with
  $\varphi=V\ln(b/|x|)/\ln(b/a)$, $k=\omega/v$ (no cutoff), exact per-length energies
  $W_e=W_m=\frac12CV^2$, $C=2\pi\varepsilon/\ln(b/a)$, $L=\mu\ln(b/a)/(2\pi)$, $LC=\varepsilon\mu$,
  and the scope boundary of the reduction recorded.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. In-run suppliers are batches 13
(`lem-em-period-average`), 18 (`thm-em-waveguide-spectral-completeness`), 23
(`def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`), 26
(`em-electrostatic-boundaries-and-conductors`, used only through the page requires; the
item-level supplier used by the TEM example is the imported corollary) and 29
(`post-em-material-closure`, `pthm-em-macroscopic-maxwell`,
`pthm-em-material-stationary-jumps`, `pthm-em-restricted-material-energy`); every other dep is
a published imported mathematical item on disk, with homes inside the page's declared
requires closure. Two consumer interfaces are recorded for reconciliation: (i) the batch-18
`thm-em-waveguide-spectral-completeness` modal ODE is written there with a positive
wave-speed parameter printed as $c^2$; the consumer derives the medium coefficient
$(\varepsilon\mu)^{-1}$ from the physical first-order system in the same class rather than
transporting a vacuum coefficient; (ii) the compact-interface caveat of
`pthm-em-material-stationary-jumps` (does not cover the ideal $\sigma\to\infty$ limit or the
box edges) is carried into the definition's scope clause. Computed whole-run labels (tool, not
design):

| item | level | in-run deps (max supplier) |
|---|---|---|
| `lem-em-separated-phasor-calculus` | 0 | none in run |
| `lem-em-transverse-vector-identities` | 0 | none in run |
| `lem-em-rectangle-mode-profile-identities` | 0 | none in run |
| `lem-em-rectangular-transverse-mode-completeness` | 0 | none in run |
| `def-em-guide-cavity-geometry` | 17 | `pthm-em-material-stationary-jumps` (16) |
| `pthm-em-rectangular-mode-candidates` | 18 | `def-em-guide-cavity-geometry` (17) |
| `pthm-em-guide-dispersion-energy` | 19 | `pthm-em-rectangular-mode-candidates` (18) |
| `pthm-em-guide-completeness` | 19 | `pthm-em-rectangular-mode-candidates` (18) |
| `ex-em-te-ten-example` | 19 | `pthm-em-rectangular-mode-candidates` (18) |
| `ex-em-rectangular-cavity-example` | 19 | `pthm-em-rectangular-mode-candidates` (18) |
| `ex-em-tem-topology-example` | 18 | `def-em-guide-cavity-geometry` (17) |

`research/physics-em-sr-40-2026-10-08-batch-35.cross-batch-dependencies.json` contains **24
rows**: three page rows (one per declared EM `requires` page; the B→A companion edge is
in-run and not a cross-batch edge) and 21 item rows, one per declared cross-batch edge. The
refreshed unified ledger shows **24/24 batch-35 consumer edges carry review rows, 0 orphaned
reviews**. The additional published home `sine-cosine-and-the-definition-of-pi` is not
representable in the run-scoped ledger (it is a plan P page, not a run page); its escalation
is recorded in §1, the coverage blockers and this note.

## AC declarations

- `lem-em-rectangular-transverse-mode-completeness` assumes **AC\_ω** exactly as the published
  torus-completeness, Fubini and Hilbert-expansion suppliers do; it is declared in the item
  contract with `def-countable-choice` in `deps`.
- `pthm-em-guide-completeness` assumes the **Axiom of Choice** inherited from
  `thm-em-waveguide-spectral-completeness` (whose class construction, compactness and
  spectral theorem assume it), declared with `def-axiom-of-choice`, and AC\_ω from clause (a)'s
  supplier, declared with `def-countable-choice`.
- The remaining eight items are **choice-free**: the phasor calculus, transverse identities and
  profile identities are finite explicit computations; the candidate-mode verification, the
  dispersion/energy theorem and the three examples use only algebra, the FTC and the choice-free
  local clause of `pthm-em-restricted-material-energy`. No batch-35 item uses the AC\_ω of
  `pthm-em-macroscopic-maxwell` clauses (a)/(c) or of `pthm-em-restricted-material-energy`(c).

## Sources (two-treatment rule, dispositions, fetch evidence)

Two complete independent treatments and two further treatments were fetched, stamped and read
for this batch:

1. **N. Beisert, Elektrodynamik (ETH Zürich 2024 FS lecture script, 176 pp., German)**,
   Chapter 13 "Wellenleiter"/"Kavitäten", PDF pp. 153–162 (printed pp. 13.1–13.10): conductor
   waves and skin effect §13.1 (pp. 13.1–13.2), the guide reduction, PEC boundary conditions,
   eigenvalue problem, TE/TM/TEM modes, rectangular and circular guides, energy/flux and group
   velocity §13.2 (pp. 13.3–13.10), cavities §13.3 (p. 13.10). URL
   `https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf`; stamp: 1 354 282 bytes,
   sha256_16 `a85f21ce710b509d`, 176 pages (matches the run's pinned source-record hash).
2. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999, 596-page retained
   scan)**, §9.5 "Guided Waves" printed pp. 405–412: 9.5.1 wave guides, 9.5.2 TE waves in a
   rectangular wave guide (with Problems 9.27, 9.29–9.30), 9.5.3 the coaxial transmission line
   (with Problem 9.31). URL (stamped) as in the coverage file; stamp: 13 484 424 bytes,
   sha256_16 `ab7b67a3f6d60049`, 596 pages. OCR noise in the text layer was cross-checked
   against the other treatments; the exercise pages outside pp. 405–412 were not harvested.
3. **R. Fitzpatrick, Classical Electromagnetism (UT Austin, 2006-02-02)**, node 105
   "Wave-guides", equations (1280)–(1322), read in the run's pinned full-notes snapshot. URL
   `https://farside.ph.utexas.edu/teaching/em/lectures/node105.html`; stamp: 43 381 bytes,
   sha256_16 `216b17ccb0102c1c`, text_chars 5 813.
4. **D. Tong, Electromagnetism (Cambridge Part II notes, 2026 printing, 236 pp.)**,
   §4.3.3 "An Application: Reflection off a Conductor" printed pp. 89–90 (ideal-conductor
   boundary reading; resolves the batch-34 deferrals). URL
   `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`; stamp: 1 882 418 bytes,
   sha256_16 `b99b41156dfe6cd9`, 236 pages.

The coverage file has **75 rows (39 distinct source/result headings; the two page entries
repeat the shared sources)** with explicit dispositions — 62 `included` rows (32 distinct),
2 `inline`, 6 `deferred` (4 to `em-wave-interfaces-and-conductors` for the Ohmic/skin branch,
2 to `em-boundary-and-spectral-prerequisites` for the positivity/spectral closure) and 5
`out-of-scope` rows with specific reasons (plane-wave-reflection interpretation, circular
Bessel guide, Tong oblique-reflection kinematics, Griffiths exercise block, the specific
normal-incidence surface-current value). `source-fetch-check --stamp` reports **7/7
fetch-verified** (four distinct URLs across the two page entries); check mode resolves 7/7.
`url-sweep` reports **4/4 live**; `source-backing` reports all 16 authored results backed by
an openable source.

**Recorded source defects (not copied).** The ETH Green identity (13.26) omits a conjugate in
its complex volume term (the run's reader recorded it; the positivity argument is supplied by
the mathematical spectral suppliers instead), the source calls TE Bessel values "Wendepunkte"
although the stated Neumann condition requires stationary points, and its general
phase/group-velocity remarks are restricted here to the explicit lossless branch.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-35 item**; stored
  labels equal computed ones and no cycle. Remaining errors are `empty scaffold inventory`
  rows for batches 38 and 40 — a run-wide condition as sibling workers land, not a batch-35
  finding.
- `step1-decisions.mjs check --run …`: **452 run items, 452 ready; no batch-35 item open**
  (all eleven ready with current hashes; the six items in the definition's dependency closure
  were re-recorded after a final statement typo repair changed their input hash, and
  `pthm-em-guide-completeness` after a one-clause convergence clarification; the four math
  lemmas were unaffected). The only remaining work entries are the four empty pages
  of batches 38 and 40; the earlier stale batch-30 records were refreshed by that batch's
  worker during this construction.
- `content-policy.mjs --manifest-only` over all run manifests: **0 errors, 0 warnings**
  (452 scoped items).
- `manifest-deps.mjs` over all run manifests: 452 items, 0 errors.
- `manifest-integrity.mjs --run …`: 80 pages owed, 80 in the manifests, no scope drift.
- `validate-plan.mjs research/plan-spec.json --run …`: after the manifest requires addition,
  **OK** — declared page order is acyclic and consistent, no item-level cycles, forward
  references, B-page dependencies or unresolved ids among the 76 pages with item lists; no
  error names either batch-35 page. The earlier run-wide `undeclared-prereq` error on
  `em-action-and-variational-formulation-examples` (batch 39) was cleared by its worker with
  the same manifest-declaration mechanism before this note was finalized.
- `coverage-checklist.mjs …batch-35.coverage.json --require-destination`: 2 pages,
  **75 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp`: **7/7 fetch-verified** (stamps above);
  check mode resolves 7/7.
- `url-sweep.mjs` on batch 35 (scratch output under `/tmp`, run artifact untouched):
  **4/4 live**, no failed, suspect or recoverable URLs.
- `source-backing.mjs` with the batch liveness file: 16 authored results, **all backed**.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; **24/24
  batch-35 consumer edges carry review rows, 0 orphaned reviews**; the strict
  `--require-reviewed` mode still fails run-wide on batches 38/40 and on 21 reviewed edges of
  other batches, none of them batch 35.
- `extcheck.mjs` (whole corpus): 26 654 items, 0 recorded-not-proved, 0 resting on them —
  batch-35 items declare no `proved_here: false`, `external_refs` or `forward_refs`.
- `frontier-item-gate.mjs` cannot run to completion while any run manifest is still empty; a
  run-wide condition that clears as sibling workers land.

## Published defects and unresolved findings

No published defect was found in any supplier examined. Unresolved findings, all outside
batch 35's authority: (i) the owner-controlled plan sync for
`sine-cosine-and-the-definition-of-pi` on this A page (exact placement, items and chains in
§1); (ii) the batch-18 modal-coefficient consumer reading recorded in the cross-batch input;
(iii) the run-wide empty scaffold inventories of batches 38 and 40 and the stale batch-30
readiness records being refreshed by their worker; (iv) the batch-39 `undeclared-prereq`
error in `validate-plan`. No escalation is raised beyond (i): every assigned item has a
complete proof strategy with met in-scope prerequisites.

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gate follow construction; these readiness records are not
independent mathematical approval.


## Gate-failed K10 scope enrichment (round one)

The actual Step3a gate attempt `024970f4-26d4-45e5-ac36-d47fca9f7602` failed `step3-scope` on this pair at 2026-10-09T06:03:40Z. The same reviewer repaired the two documented K10 subject omissions by proposing `pthm-em-uniform-ohmic-modal-decay` and `pthm-em-open-rectangular-guide-completeness` on the existing A page. All prior lossless statements and all three examples remain. Geometry/scope declarations now distinguish these explicit additional classes from arbitrary lossy or open-end/junction claims. The wrapper18 strategy names the actual physical home without consuming physics as a mathematical premise.

The first new theorem carries the rectangular reflection and smooth closed PEC energy classes, full weak-normal-zero magnetic space, retained magnetic/electric zero sectors, damped roots/repeated roots, exact integrated/differential Ohmic balance, compact-time modal convergence and the broader associated second-order wave/data distinction. The second supplies the infinite rectangular guide's complete mixed transverse-Fourier/longitudinal-Plancherel expansion with the exact 2pi convention and physical 1/4 norm factor, weak uniqueness, parity/divergence constraints and lossless/constant-Ohmic energy evolution. Both explicitly adopt their precise weak material realization and avoid applying smooth nonlinear energy identities to rough fields.

The existing G2/G3 mathematical Statements remain unchanged. Existing smooth Dirichlet solvability, full-X spectral identities, Fourier and ODE suppliers suffice; no missing theorem or new mathematics pair was manufactured. All actual geometry-definition consumers were rechecked by the same reviewer, with their unchanged lossless hypotheses preserved.

Official `dependencyLevels()` on all current-run pages with these candidate overlays computes levels 18 for uniform Ohmic, 19 for the open guide, and 20 for the old guide completeness (formerly19); every other native label is unchanged. Imported published labels are not raised or modified. Root must refresh actual readiness/prerequisite hashes and metadata after integrating the exact rows and before Step3b dispatch. The baseline eleven readiness records above remain historical Step1 records, not certifications of the enriched thirteen-item scope.

Source/evidence and exact object/metadata proposal rows are recorded in `physics-em-sr-40-2026-10-08-step3a-waveguide-enrichment-round1.*`. Circular/dielectric guide exclusions remain the previously declared reason-bearing subject boundaries; their owner disposition is separate from realizing the two approved K10 omissions.
