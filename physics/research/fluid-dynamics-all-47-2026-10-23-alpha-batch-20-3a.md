# Batch 20 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: alpha; group: `batch-20`; covers: `20`.

## Outcome and scope

Exactly three obligations were owed: `reader:20:1`, `reader:20:2`, and `reader:20:3`. Each is **confirmed_nonfatal**, with exactly one closed `nonfatal-recorded` defect-ledger row. The reported inline links violate the uninterrupted-statement instruction, but do not invalidate the exact mathematical prerequisites used by the owned physics deductions. Published-source editorial maintenance remains OPEN for the mathematics owner. No item, page, public interface, dependency, manifest or publication status changed. No substantial unmet mathematical prerequisite or owner-blocking uncertainty was identified in the reviewed uses. No withdrawal is proposed.

The immutable scope has no touched items, touched pages, added/removed carriers or refuter findings. No decision is invented for an untouched/unflagged carrier. Pre/post item, contract, manifest and page fingerprints agree; current bytes of all four owned items still match their post snapshot. Only the three required `risk_review` objects were added to the owned contract; historical snapshots and independent reports remain unchanged.

## Reviews in generated dependency order

### `pthm-fd-local-periodic-incompressible-model-evolution`

Read all six current proof steps, direct physical premises and the complete local IVP/pressure-recovery proofs. Constant-state shear law and divergence-free 3D stress give mu Delta u; transverse lifts have zero omitted derivatives/components and preserve normalized pressure mean. Derivative scaling gives nu_bar=mu/(rho_* U_* L). Countable Choice, d=1,2,3, s>=4, smooth real divergence-free datum and s>d/2+1 match suppliers. Local T is independent of viscosity and higher norms; zero datum and mu=0 are allowed; d=1 divergence-free fields are spatial constants. Smooth pressure follows from the Fourier recovery map and smooth IVP. No thermal or empirical conclusion is inferred. Reader/refuter report no owned proof defect; reader:20:1/2 are genuine nonfatal published-link layout maintenance, not invalid Fourier compactness inputs. Sources checked are current local supplier statements/proofs; background PDFs were not independently retrieved. No interface or source edit is needed.

### `pthm-fd-local-polytropic-model-evolution`

Read all five current proof steps, barotropic model Definition and complete positive-density IVP and energy proofs. Reduced lifts preserve mass and momentum, while integrating omitted coordinates preserves cell means. Scaling gives kappa_bar=kappa_phys rho_*^(gamma-1)/U_*^2; a=(gamma-1)/2>0 makes r(R) a smooth increasing bijection on positive density. Smooth positive data on the compact torus have positive minimum, so Countable Choice, d<=3, s>=4 and positive parameters match the local theorem. Its symmetric Galerkin proof preserves positivity after shrinking the common interval; it gives all-order bounds and uniqueness. Energy proof uses U-rho Uprime=-p and periodic divergence cancellation, and multiplication by rho_* U_*^2 gives SI pressure units. Vacuum, gamma=1, shocks and varying parameters are excluded. Specific energy is explicitly adopted, not inferred empirically. Reader:20:3 confirms nonfatal inline-link maintenance in the complete finite-dimensional completeness supplier; its n>=1 interface suffices for nonempty coefficient spaces. Reader/refuter identify no owned proof defect. Background Golse/Sideris/Tong PDFs are contextual and were not independently fetched; local proof inputs were read. No repair required.

### `pthm-fd-two-dimensional-viscous-model-globality`

Read all five current proof steps, every direct prerequisite and the complete mathematical 2D global proof. The constant positive shear law at fixed density/temperature gives mu Delta u; the transverse lift has zero third acceleration and preserves pressure means in both directions. Scaling gives strictly positive nu_bar=mu/(rho_* U_* L); d=2, smooth real periodic divergence-free data and Countable Choice match the supplier. Its enstrophy identity bounds the time integral of H1 vorticity; logarithmic Fourier/commutator estimates bound sqrt(log(e+Hm norm)) on every finite interval, hence H4 continuation rules out a finite maximal time. Zero datum and arbitrary constant mean velocity are admissible. Mean-zero pressure is inherited from the local incompressible theorem and agrees on restart overlaps; inverse scaling maps every finite physical time to finite normalized time. The claim retains positive viscosity, invariant-sector 3D lift and compact-time Sobolev bounds only; it asserts no arbitrary-3D/inviscid/thermal/empirical result. Reader/refuter report no owned defect. Background Kuksin-Shirikyan PDF was not independently fetched; the actual local theorem proof was checked rather than inferred from its citation or readiness. No repair required.

Each level was reviewed and checkpointed here before proceeding higher. Those completed checkpoints are consolidated into this final report. The full authored arguments were checked, including the invariant-sector converse, pressure normalization, all-order lifespan and units, rather than inferring validity from prior readiness/review records.

## Published findings and exact owned uses

### `reader:20:1` — `thm-fourier-basis-and-parseval-on-the-n-torus`

The current published Statement contains inline links to def-countable-choice, def-the-one-dimensional-torus-and-normalized-haar-integral and def-fourier-coefficients-and-trigonometric-polynomials at lines 25–29. This confirms the reader observation. The complete statement explicitly assumes Countable Choice and states orthonormality, density, Parseval and surjective coefficient isometry; its complete proof was read. The owned consumer uses it through thm-fd-smooth-periodic-incompressible-ivp and def-fd-periodic-fourier-sobolev-spaces, with normalized measure transported by x=2 pi y. Moving links preserves all mathematical content; the layout defect is nonfatal to that use, rather than the reader-reported fatal inference. Imported source remains read-only. Scoped finding closed as nonfatal-recorded; original mathematics editorial maintenance remains OPEN.

Consumer: `pthm-fd-local-periodic-incompressible-model-evolution`. Closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-20-published-links-1`. Verdict: `confirmed_nonfatal`. No repair was performed or claimed.

### `reader:20:2` — `thm-bolzano-weierstrass`

The current published Statement contains inline def-sequence and def-subsequential-limit links at lines 40–44. This confirms the reader observation. Bounded real sequences, increasing subsequence indices and convergence are explicit. Its complete monotone-subsequence/boundedness proof was read. The owned consumer reaches it through thm-fd-smooth-periodic-incompressible-ivp, whose finite Fourier coordinate extraction uses exactly this result and states Countable Choice for the countable diagonal. Hyperlink placement invalidates no hypothesis or convergence conclusion; this is nonfatal editorial maintenance rather than a fatal mathematical defect. Imported source remains read-only. Scoped finding closed as nonfatal-recorded; original mathematics maintenance remains OPEN.

Consumer: `pthm-fd-local-periodic-incompressible-model-evolution`. Closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-20-published-links-2`. Verdict: `confirmed_nonfatal`. No repair was performed or claimed.

### `reader:20:3` — `thm-euclidean-space-complete`

The current published Statement contains inline lem-real-line-is-a-metric-space, def-complete-metric-space and lem-metrics-on-rn links at lines 35–42 and in its explanatory paragraph. This confirms the reader observation. The complete componentwise Cauchy proof was read: coordinate differences are bounded by d2, unique coordinate limits form a vector, and finitely many canonical thresholds give d2 convergence. The owned polytropic consumer reaches it through thm-fd-smooth-polytropic-euler-ivp, which expressly uses nonempty finite-dimensional coefficient spaces R^M with M>=1. The required completeness interface and dimension hypothesis remain intact. This is nonfatal editorial maintenance, not a fatal analytic prerequisite gap. Imported source remains read-only. Scoped finding closed as nonfatal-recorded; original mathematics maintenance remains OPEN.

Consumer: `pthm-fd-local-polytropic-model-evolution`. Closed scoped defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-20-published-links-3`. Verdict: `confirmed_nonfatal`. No repair was performed or claimed.

The original reader severity is retained in its frozen artifact; this adjudication independently classifies the three findings as nonfatal. The observed links remain present in current pinned copies, so none is falsely dismissed because of an alleged repair. Routing fingerprints are preserved in the scope; no missing original byte history or owner authorization is invented.

The current raw supplier hashes equal their `research/math-imports.json` pins:

| Supplier | Raw SHA256 |
|---|---|
| `thm-fourier-basis-and-parseval-on-the-n-torus` | `6d017415a6b810647e7c94b874eeaf15f46699e548ad6957fc16aad60600d968` |
| `thm-bolzano-weierstrass` | `b818a78a50b2e0d0200eee8fc8d4fe940ef450376fab3b77ca176c67447d4427` |
| `thm-euclidean-space-complete` | `80e19c80ea54e63e8e628d5d6a4cf60bc2dd4aa7678f563ea7ab124af89a71f3` |

Published maintenance and its deduplicated index are recorded under `fluid-dynamics-all-47-2026-10-23-3a-batch-20-published-links` in `research/published-consumer-supplier-ledger.md`. The ledger was reread and merged while holding an exclusively created `research/.published-consumer-ledger.lock`; only this writer’s lock was released. The repair strategy moves retained links after each complete Statement, preserving every mathematical hypothesis and dependency. Original mathematics and imported snapshots remain read-only.

## Suppliers, source limits and consumer continuity

Current direct suppliers read: `def-countable-choice` (exact indexed choice formulation), `post-fd-continuum-balances` (adopted smooth mass/momentum balances), `post-fd-newtonian-fourier` (stress/heat closure), `def-fd-incompressible-newtonian-model` and `def-fd-barotropic-euler-model` (precise mechanical PDEs). Complete local proofs read: `thm-fd-smooth-periodic-incompressible-ivp`, `thm-fd-periodic-pressure-recovery`, `thm-fd-smooth-polytropic-euler-ivp`, `thm-fd-polytropic-energy`, and `thm-fd-global-two-dimensional-periodic-navier-stokes`. Each supplier’s actual hypotheses and conclusions were checked against the owned proof use. The three flagged published suppliers’ entire statements and proofs were also read; this does not claim a recursive audit of every foundational theorem they cite.

External URLs in the carriers (Morton/Wiedemann, Tong, Golse/Sideris and Kuksin–Shirikyan) serve as contextual source metadata here. No external PDF retrieval or independent full-source fidelity review is claimed in this dispatch. The deductions use the displayed adopted equations and exact local mathematical suppliers, whose statements and proofs were inspected. Local draft proof status is retained; no author-readiness note is promoted to independent acceptance. There are no empirical data premises, invented measurements, statistical precision, or claims that these conditional proofs establish applicability to nature.

Owned cross-batch input `research/fluid-dynamics-all-47-2026-10-23-batch-20.cross-batch-dependencies.json` retains its fifteen existing page/item rows. Exact scoped use records are preserved in `briefs/tasks/frontier-dependency-ledger.md`: fixed-state Newtonian stress, smooth periodic IVPs and pressure gauge, positive polytropic density/energy, and positive-viscosity 2D globality. The fd-ps01/fd-ps01-examples carriers remain frontmatter-only with `page_layout: compact-v1`; no summary was authored. No assigned risk carrier contains a TikZ/tikzcd diagram, and these coordinate proofs require no diagram addition. No interface change triggers outside consumer repairs or further-hop propagation.

## Checks and handoff

- Initial command: `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-20.proof-contracts.json` — exit 0, zero errors; CRITICAL scores 11, 12 and 10 in generated order, example MODERATE 4.
- Final command: same command with `--require-reviewed` — exit 0, `risk-report: 0 error(s), 4 item(s) routed`; all three required reviews complete.
- Artifact consistency script — exit 0: exact three routed obligations, three unique closed scoped ledger rows, unchanged owned item bytes, and identical pre/post fingerprint maps.
- Three published raw hashes match the import pins.

No item was edited, so item reflow, precheck and the changed-item proof-layout command were not due. No repair confidence is asserted for an unperformed repair. No judgment, stamp, certification, engine gate battery, publication, commit or dispatch was initiated. Engine decision hashing and ordinary gates remain pending. Required report and decisions file are present; no scoped obligation remains undecided. Published editorial repair remains the explicit owner maintenance action.
