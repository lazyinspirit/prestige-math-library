# Batch 19 authoring notes

## Assignment and plan resolution

- Assigned pair: FD-S03, A page fd-s03, B page fd-s03-examples, mathematics library.
- The controlling design is research/plan-fluid-dynamics-refresh-track.md at the assigned “Periodic smooth incompressible energy identity” section. It explicitly says the 2026-10-18 refresh supersedes historical fluid design text and names research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json as its source inventory.
- The historical research/plan-fluid-dynamics-track.md section names the retired inventory under research/extended-frameworks-2026-10-03/fluid-dynamics/proposed-inventory.json. The 12 reserved item IDs and page metadata agree; the source-inventory path is stale. The current refresh controls.
- The live plan-spec A/B page rows and this batch manifest agree on titles, category, library, order, companions, and page prerequisites: fd-s03 requires the imported Euclidean surface-measure page and fd-s02; the B page requires fd-s03. The refresh design’s pair-level reservation also mentions FD-S01, which is already a transitive prerequisite through fd-s02; no additional direct page edge is added.
- The imported A-page prerequisite `euclidean-surface-measure-divergence-and-green-identities` exists as a published root page at `../library/pde/euclidean-surface-measure-divergence-and-green-identities.md`; its page inventory and the pinned bounded-C1 surface/divergence item carriers were inspected read-only. The page prerequisite is not a current-run batch edge, so the cross-batch JSON records only the direct `fd-s02` page edge.
- The current refresh inventory reserves nine A items and three B items. Three locally proved A-page lemmas are added for the mean-zero torus inequality, the 2D Fourier logarithmic estimate, and the transport commutator bound required by the global regularity proof. The resulting A/B inventory has 12/3 items, below the 100-item cap.
- Page files will contain YAML frontmatter only, with no body summary.

## Current prerequisite inspection

- research/fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json assigns batch 19 level 2 and says it requires batch 18. This is dispatch priority, not a wait barrier.
- Fresh current-readiness preflight on 2026-10-23 corrected the stale preliminary note below: `loadStep1Record(root, run)` finds populated batch-17 (`fd-s01`, 11 A items; `fd-s01-examples`, 2 B items) and batch-18 (`fd-s02`, 8 A items; `fd-s02-examples`, 4 B items) manifests. `step1Decision` returns ready with current hashes for every inspected FD-S01 supplier used here and for the FD-S02 incompressible IVP, polytropic definition and IVP, wall-domain definition, and linear-acoustics theorem. Their current records are authoring readiness, not independent proof acceptance.
- I read the complete relevant Statements and proofs of the FD-S02 carriers and the FD-S01 Fourier/Leray/embedding/commutator/pressure/difference-energy carriers. The FD-S01 commutator proof Step 1.2 contains a useful stronger pre-Cauchy convolution bound, and I checked that proof directly. To keep FD-S03 contracts tied to formal supplier Statements, I added `lem-fd-2d-transport-commutator-l1-bound` with a complete local Fourier convolution proof. No FD-S01/S02 item or manifest is edited.
- Direct S02 carrier paths, actual claims, and readiness observations are detailed in the per-item checkpoints below. The periodic incompressible IVP is conditional on the current FD-S01 inputs; the polytropic and acoustic IVP carriers have their own inspected current interfaces and dependencies.
- The imported divergence theorem is published and pinned. Its exact statement assumes Countable Choice, a bounded C1 domain, and a C1 vector field; the assigned wall-energy proof uses C2 solution regularity, so the flux fields meet that C1 hypothesis. The wall item explicitly carries Countable Choice and the imported C1-domain and surface-measure definitions.
- The reserved wall-energy dependency on Picard–Lindelöf is removed: the result is conditional on already given smooth solutions and proves an energy balance and velocity uniqueness; it asserts no PDE existence result. The imported divergence theorem and its exact assumptions are the actual required tools.

## Design and status conflicts

- The reserved FD-S03 global-regularity remark says three-dimensional global smooth regularity is open. Current official status checked 2026-10-23 is more qualified: the CMI Active problems list still includes Navier–Stokes, while its 2026-09-11 notice says it contemplates an announcement that the problem has apparently been settled and that evaluation is deliberately unhurried. The authored remark reports those facts without accepting or rejecting the announced proof. It states that this batch proves only the two-dimensional periodic theorem and makes no 3D Euler claim.
- The current refresh page-level prerequisites remain unchanged. Item-level direct edges include the exact FD-S01 and FD-S02 suppliers actually used; missing readiness does not cause authoring to stop.

## Source reading and retrieval record

- Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, complete 335-page book. I inspected Chapter 2 §§2.1.1–2.1.7, including the full proof of Theorem 2.1.13, its smooth energy-balance exercise, and the complete estimate in Theorem 2.1.18. Its weak 2D existence/uniqueness and smoothing results are contextual independent mathematics treatments; the assigned all-order local and Fourier-logarithmic proofs are supplied here with their narrower exact assumptions.
- Hou, lecture-note PDF, complete 140 pages. I inspected the incompressible energy identity and vorticity estimate in “Blow-up or no blow-up?”, §3, PDF pp. 99–101. The displayed argument is for strong three-dimensional flows and explains why the ordinary energy estimate alone does not yield a 3D global theorem; it is not used as a 2D proof.
- David Tong, Fluid Mechanics, complete official Chapter 2 PDF (56 pages) and Chapter 3 PDF (70 pages). I inspected Chapter 2 §§3.1.1–3.1.2, §§3.2.2–3.2.3, §3.3.1 and §3.5, and Chapter 3 §4.4.4 and the compressible energy discussion in §4.5. The B-page source entries reuse the full-text stamps and record the relevant chapter sections for its acoustic example and boundary-scope remark.
- Current Clay status sources were inspected on 2026-10-23: the live Millennium Prize Problems Active list at `https://www.claymath.org/Millennium%20Problems/` and the 2026-09-11 CMI announcement at `https://www.claymath.org/news/navier-stokes-announcement/`. They support only the dated public-status wording in rem-fd-global-regularity-open; no proof acceptance or mathematical verification is claimed.
- Retrieval inspection and source-fetch-check --stamp succeeded for all 9 coverage source entries (7 unique URLs); check mode returned 9/9 fetch-verified and 9/9 resolved, with no drops. Kuksin–Shirikyan: 2,895,516 bytes, 335 pages, SHA prefix 8bb210dad988eeca. Hou notes: 3,765,272 bytes, 140 pages, prefix 3d388c4970759eeb. Tong Chapter 2: 4,812,397 bytes, 56 pages, prefix 4fd0e835ea501e81; Chapter 3: 2,836,937 bytes, 70 pages, prefix bf8876a9b7d54b94. Golse: 1,029,410 bytes, 143 pages, prefix 917c66e66cf200de. The CMI Active list: 90,145 bytes, 5,489 extracted text characters, prefix 402d4257fc64300c; CMI announcement: 91,440 bytes, 5,897 text characters, prefix fb7fe45a352906bc. Exact timestamps and locators are in the paired coverage file.

## Per-item authoring checkpoints

Items will be recorded here as each carrier is completed, including the exact claim, hypotheses, source scope, dependencies, level, decision, validation and next action.

### lem-fd-torus-mean-zero-poincare — authored

- Claim and conventions: on the normalized 2pi-periodic torus, each smooth real zero-mean finite-vector field satisfies the unit-constant Poincare inequality. Countable Choice is explicit because the Parseval supplier requires it.
- Complete proof: the zero Fourier mode vanishes; every nonzero integer frequency has squared length at least one; componentwise Parseval and the derivative coefficient formula give the norm comparison.
- Source: Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.7, PDF pp. 50–51; the source identifies the first positive torus Laplacian eigenvalue, and the exact coefficient proof is supplied locally.
- Dependencies and level: def-fd-periodic-fourier-sobolev-spaces (FD-S01, level 0), thm-fourier-basis-and-parseval-on-the-n-torus and def-countable-choice (published mathematical imports); dependency_level 1.
- Readiness: ready; the record binds the current Fourier-space and Parseval suppliers, the completed placement, and the exact contract. Independent proof acceptance remains a later review gate.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the energy identity is complete; continue with the stability item.

### thm-fd-periodic-smooth-incompressible-energy — authored conditional consumer

- Claim and conventions: for the unique local smooth solution of the normalized periodic incompressible equation, the exact lifespan identity is E(t)+nu integral |grad u|^2=E(0); zero mean is preserved, and positive viscosity gives the e^(-nu t) L2 estimate.
- Proof route: pair the full equation with velocity, integrate each periodic transport, pressure and Laplacian term, integrate in time, preserve the zero mode, then apply the local mean-zero Poincare lemma.
- Dependencies and level: thm-fd-smooth-periodic-incompressible-ivp (FD-S02, current carrier level 3), lem-fd-torus-mean-zero-poincare (local level 1), and def-countable-choice; dependency_level 4.
- Sources: Kuksin–Shirikyan §2.1.5 Exercise 2.1.14, Hou notes equation (3.1), and Tong Chapter 2 §3.1.2. The exact periodic proof and decay hypotheses are supplied locally.
- Readiness: ready; the current FD-S02 local IVP and FD-S01 interfaces are inspected and current, and the theorem remains conditional on the stated smooth solution.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the stability item is complete; continue with the maximal-solution continuation criterion.

### thm-fd-periodic-smooth-stability — authored conditional consumer

- Claim and conventions: the current item covers smooth incompressible solutions with equal viscosity, a residual estimate for two different viscosities, and positive-density polytropic Euler solutions in the exact symmetric variables. The common-interval solutions are the unique local branches supplied by FD-S02.
- Complete proof: the equal-viscosity and symmetric comparison cases use the exact present difference-energy carrier; the unequal-viscosity estimate is derived by subtracting the projected equations, retaining the nonpositive viscous term, and integrating the scalar residual inequality. Weighted coefficient Holder gives the H^(s-1) estimate.
- Dependencies and level: thm-fd-smooth-periodic-incompressible-ivp (FD-S02 level 3), thm-fd-smooth-polytropic-euler-ivp (FD-S02 level 3), def-fd-polytropic-symmetric-variables (level 1), lem-fd-given-smooth-solutions-difference-energy (FD-S01 level 2), def-fd-periodic-fourier-sobolev-spaces (FD-S01 level 0), def-fd-periodic-leray-pressure-maps (FD-S01 level 1), and def-countable-choice; dependency_level 4.
- Sources: Kuksin–Shirikyan §2.1.5 and Hou’s energy/vorticity treatment; both are context only for the locally proved full scope.
- Readiness: ready; all used FD-S01 and FD-S02 carriers have current Step-1 records, and the proof contract binds the exact interfaces.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the continuation item is complete; continue with the controlled periodic inviscid-limit estimate.

### thm-fd-smooth-sobolev-continuation — authored conditional consumer

- Claim and conventions: a unique maximal smooth incompressible solution extends past any finite endpoint with a bounded H^s norm; a positive-density polytropic solution extends if its transformed H^s norm stays bounded and its sound-speed variable stays uniformly positive.
- Complete proof: local uniqueness glues the maximal solution from all local branches; the current FD-S02 proofs give uniform restart lifespans from the norm bound, and the compressible proof also gives a uniform positivity interval from the lower bound for r. Restart near the endpoint and uniqueness on overlap produce the extension without an endpoint limit.
- Dependencies and level: incompressible local IVP (FD-S02 level 3), positive polytropic local IVP (level 3), sound-speed variable definition (level 1), and Countable Choice; dependency_level 4.
- Sources: Kuksin and Shirikyan Chapter 2 §§2.1.5–2.1.6 provide independent periodic Navier–Stokes existence/regularity context; the exact continuation bounds and compressible positive-density condition are proved from the inspected FD-S02 carriers.
- Readiness: ready; the current FD-S02 IVP carriers and their used FD-S01 inputs have current Step-1 records, with the restart argument and positivity hypothesis bound in the contract.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the controlled periodic inviscid-limit estimate is complete; continue with vorticity.

### thm-fd-periodic-inviscid-limit — authored conditional consumer

- Claim and conventions: for identical smooth divergence-free data and viscosity 0 <= nu <= 1, the exact periodic viscous and Euler solutions exist on one common local interval; the L2 difference is bounded by the integral of nu times the smooth Euler Laplacian, hence O(nu), and the S02 uniform H^s bound yields O(nu^(1/s)) in H^(s-1).
- Complete proof: specialize the stability item to viscosities nu and zero, use smoothness of the Euler solution to bound its residual integral uniformly, then apply the weighted Fourier interpolation estimate.
- Dependencies and level: thm-fd-periodic-smooth-stability (same pair, level 4) and def-countable-choice; dependency_level 5.
- Sources: Kuksin–Shirikyan §2.1.5 and Tong Chapter 2 §3.1.2 are independent energy/regularity treatments; the exact viscosity-perturbation estimate and its fixed-periodic-domain caveat are proved locally.
- Readiness: ready; the stability item and its inspected FD-S01/FD-S02 suppliers have current Step-1 records, and the common-interval hypothesis is preserved.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the vorticity identities are complete; continue with the polytropic energy identity.

### thm-fd-smooth-vorticity-identities — authored conditional consumer

- Claim and conventions: in 3D the explicitly defined curl satisfies the stretching equation; in 2D the scalar curl obeys transport-diffusion, has the exact enstrophy balance, and satisfies the compact-torus maximum bound for every nu >= 0. The theorem makes no global regularity claim.
- Complete proof: the 3D curl identity is expanded with the alternating tensor; the 2D stretching term vanishes because the field has no third-coordinate dependence; multiplying by vorticity gives enstrophy; an epsilon-barrier maximum argument gives the L-infinity estimate.
- Dependencies and level: thm-fd-smooth-periodic-incompressible-ivp (FD-S02, level 3) and def-countable-choice; dependency_level 4.
- Sources: Kuksin–Shirikyan §2.1.6 supports 2D periodic regularization context; Hou’s notes equations (3.1)–(3.4) give the 3D energy/vorticity comparison in its own strong-solution scope. Exact curl identities and hypotheses are proved locally.
- Readiness: ready; the current FD-S02 IVP and inspected FD-S01 Fourier inputs have current Step-1 records.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the polytropic energy identity is complete; continue with the bounded-wall balance and uniqueness theorem.

### thm-fd-polytropic-energy — authored conditional consumer

- Claim and conventions: for the smooth positive-density polytropic Euler solution with p(rho)=kappa rho^gamma, the internal-energy density U=kappa rho^gamma/(gamma-1) gives the exact conservative total-energy flux on the normalized torus.
- Complete proof: the continuity product identity supplies the kinetic-energy balance; direct differentiation of U gives the internal-energy balance; adding them produces the local conservation law, whose periodic divergence integrates to zero.
- Dependencies and level: def-fd-polytropic-symmetric-variables (FD-S02 level 1), thm-fd-smooth-polytropic-euler-ivp (level 3), and def-countable-choice; dependency_level 4.
- Sources: Tong Chapter 3 §4.5 and Golse Chapter 3 §1.2 give general compressible energy-balance context; the exact polytropic formula and periodic conclusion are proved locally.
- Readiness: ready; the current FD-S02 polytropic definition and IVP have current Step-1 records, as do the Fourier suppliers in the local IVP proof.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the wall balance and velocity-uniqueness theorem are complete; continue with scaling.

### thm-fd-smooth-wall-energy-uniqueness — authored conditional consumer

- Claim and conventions: on a bounded connected C2 domain, for given constant-density, constant-viscosity smooth incompressible solutions with either stationary no-slip or impermeable Navier slip, the item proves exact mechanical-energy balance and velocity uniqueness; it makes no PDE existence claim.
- Complete proof: divergence theorem on the kinetic flux and stress-power flux gives the balance; symmetric/skew contraction reduces dissipation to 2 eta times the squared strain; boundary work is zero for no-slip and negative for the slip law. The same flux calculation and an integrating-factor estimate prove uniqueness.
- Inputs: Countable Choice, the current S02 wall-domain definition, the exact imported bounded-C1-domain and surface-measure definitions, and the published bounded-C1 divergence theorem. Its C2 solution regularity gives C1 fluxes, matching the theorem’s boundary regularity hypothesis.
- Design adjustment: the inventory’s Picard–Lindelof dependency is removed because the result is conditional on already given smooth solutions; Countable Choice and the imported C1/surface definitions are explicit actual prerequisites.
- Dependency level: the only in-run supplier is def-fd-smooth-wall-exterior-solution-domains at level 0, so dependency_level 1.
- Source: Tong, Fluid Mechanics, Chapter 2 §§3.1.1–3.1.2; its continuum stress-work treatment is contextual, and the local identity and uniqueness proof are complete.
- Readiness: ready; the current FD-S02 wall-domain definition has a current record, and the imported C1 boundary, surface-measure, and divergence theorem interfaces match the C2 flux regularity and pinned source bytes.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: the scaling proposition is complete; record its exact claim and direct supplier below.

### prop-fd-fluid-equation-scaling — authored

- Claim and conventions: the proposition verifies unforced incompressible Navier–Stokes scaling on Euclidean space and correspondingly rescaled flat tori, Euler's two-parameter scaling on the inverse-scaled domain, the cell-volume L2 exponent, and the dimensionless Reynolds and acoustic Mach coefficients. Physical dimensions are stated explicitly, and no limit or empirical similarity is inferred.
- Complete proof: chain-rule factors are calculated for every term; the Fourier Leray symbol is degree zero under frequency scaling; change of variables gives the cell-volume exponent; division by the inertial scale gives Re^-1 and Ma^-2.
- Direct dependencies and level: def-fd-periodic-leray-pressure-maps (FD-S01, level 1) and def-countable-choice (published mathematical import); dependency_level 2. A generic differentiable pressure law is used for the acoustic sound speed, so no polytropic closure is needed.
- Sources: Tong, Fluid Mechanics, Chapter 2 §3.3.1 and Chapter 3 §4.4.4; these support Reynolds scaling and linear acoustics, while the exact transformations are proved locally.
- Readiness: ready; the current FD-S01 Leray map and Countable Choice import were inspected and bound in the record.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: author the Fourier logarithmic velocity bound before the 2D global theorem.

### lem-fd-2d-fourier-log-velocity-bound — authored local supplier

- Claim and conventions: on the normalized two-torus, for smooth divergence-free u and integer m≥4, the l1 Fourier sum S=Σ|k||û(k)| is bounded by C_m(1+||curl u||H1 sqrt(log(e+||u||Hm))). The vorticity Fourier identity, low/high frequency split, two-dimensional shell count, and choice K=2+(e+||u||Hm)^(1/(m−2)) are all proved locally.
- Dependencies and level: def-fd-periodic-fourier-sobolev-spaces (FD-S01, level 0) and def-countable-choice (published math import); dependency_level 1.
- Source: Kuksin–Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2 §2.1.6, Theorem 2.1.18; the source provides regularity context, while the precise lattice-log estimate is established here.
- Readiness: ready; the current Fourier-space supplier and Countable Choice import were inspected and bound in the record.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: author a local formal statement and proof of the Fourier l1 commutator bound before the global theorem.

### lem-fd-2d-transport-commutator-l1-bound — authored local supplier

- Claim and conventions: for smooth divergence-free u on the normalized two-torus and integer m≥4, the Hm transport commutator is bounded by C_m S(u)||u||Hm, where S(u)=Σ|k||û(k)|. The proof justifies coefficient convolution, derives the mean-value weight difference, bounds both terms with discrete Young, and applies Parseval.
- Dependencies and level: Fourier Sobolev definition (FD-S01 level 0), local Fourier-log lemma (level 1, supplying S<∞), Fourier Parseval, and Countable Choice; dependency_level 2.
- Source: Kuksin–Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2 §2.1.6, for 2D regularity context; all commutator and l1/l2 estimates are proved locally.
- Readiness: ready; the Fourier definition, local log lemma, Parseval supplier, and Countable Choice input were checked and bound.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: use this formal local commutator interface in the global theorem.

### thm-fd-global-two-dimensional-periodic-navier-stokes — authored

- Claim and conventions: every smooth divergence-free datum on the normalized two-torus and every positive viscosity produce a unique global smooth periodic Navier–Stokes solution. The item also gives an explicit finite-time logarithmic Hm bound for each integer m≥4. It makes no 3D or inviscid-Euler global claim.
- Complete proof: local uniqueness constructs the maximal solution; the vorticity theorem gives enstrophy dissipation and the integrated H1-vorticity bound; the Fourier-log lemma bounds S; the separate local commutator lemma gives Y'≤CSY; a regularized logarithmic differential inequality yields a uniform H4 bound at any finite maximal endpoint, and the continuation theorem rules out that endpoint.
- Dependencies and level: current FD-S02 incompressible IVP (level 3), local vorticity theorem and continuation criterion (each level 4), Fourier-log lemma (level 1), local commutator lemma (level 2), Fourier Sobolev definition (level 0), and Countable Choice; dependency_level 5.
- Sources: Kuksin–Shirikyan, Chapter 2 §§2.1.5–2.1.6, full proof sections inspected; Hou, §3, equations (3.1)–(3.4), inspected for strong-flow energy/vorticity context only. The Fourier-log and commutator estimates are proved locally.
- Readiness: ready; all in-run suppliers are current, local suppliers precede this consumer, and the local vorticity and commutator interfaces match the proof.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: complete the B-page mode example and status remarks, then build contracts and record final readiness.

### ex-fd-acoustic-energy-mode — authored

- Claim and conventions: one exact real longitudinal Fourier mode on the normalized two-torus solves the linear acoustic tangent system; its density/velocity amplitudes are given explicitly, the transverse velocity is constant, and the normalized weighted energy is computed exactly.
- Complete proof: differentiate the two amplitudes to verify both equations and initial data; use normalized sine/cosine integrals and differentiate the mode energy.
- Dependencies and level: thm-fd-global-linear-acoustics (FD-S02 level 2) and def-countable-choice (published mathematical import); dependency_level 3.
- Source: Tong, Fluid Mechanics, Chapter 3 §4.4.4; the local verification preserves the distinction between the linear tangent model and nonlinear finite-amplitude evolution.
- Readiness: ready; the current FD-S02 acoustic theorem and Countable Choice input were inspected and bound.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: record the dated CMI public status and the precise limit-coverage boundary.

### rem-fd-global-regularity-open — authored dated status remark

- Claim and conventions: as checked 2026-10-23, the CMI Active problems list still includes Navier–Stokes; CMI's 2026-09-11 notice says it contemplates an announcement that the problem has apparently been settled and that evaluation is deliberately unhurried. The remark neither accepts nor rejects the announced proof and makes no unrestricted 3D Euler claim.
- Verification: opened and read the full current CMI Active problems list and the dated notice; phrasing records public status, not mathematical inference.
- Dependencies and level: none; dependency_level 0.
- Readiness: ready; the official CMI list and dated notice were read, stamped, and cited with the qualified public-status wording.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: finish the cross-limit coverage remark.

### rem-fd-boundary-layer-low-mach-status — authored scoped remark

- Claim and conventions: the inviscid estimate applies only on a fixed periodic domain and a common local interval; exact linear acoustics and chain-rule scaling do not imply a wall boundary-layer theorem or nonlinear low-Mach convergence bound.
- Dependencies and level: thm-fd-periodic-inviscid-limit (local level 5), thm-fd-global-linear-acoustics (FD-S02 level 2), prop-fd-fluid-equation-scaling (local level 2), and def-countable-choice (published mathematical import); dependency_level 6.
- Sources: Tong, Fluid Mechanics, Chapter 2 §3.5 and Chapter 3 §4.4.4. The statement records the exact current-item coverage boundary.
- Readiness: ready; the FD-S02 acoustic input and all local theorem interfaces have current Step-1 records, and the remark states only the exact limits of their conclusions.
- Validation: all final scoped checks passed; see Final validation and readiness below.
- Next: Step 1 authoring is complete; independent review remains a later gate.

## Current checkpoint correction

- The earlier readiness notes that described missing current S01/S02 records were stale. On 2026-10-23 I reloaded the current run manifests and checked `step1Decision` for each actual in-run supplier used here; the relevant FD-S01 and FD-S02 records are current and ready. The corresponding item Facts and decisions were corrected to match that evidence. No source-batch item, manifest, or readiness file was edited.
- The authored page files are YAML frontmatter only. The A page contains 12 items (including three local lemmas); the B page contains one example and two remarks. `batch-19.cross-batch-dependencies.json` contains one verified row per direct in-run cross-batch item/page edge; root mathematical imports are checked and documented separately rather than misclassified as run-batch edges.

## Final validation and readiness

- `author-check.mts fluid-dynamics-all-47-2026-10-23 19`: passed. Precheck covered all 15 assigned items, rendercheck covered the 15 items and 2 pages, content-policy reported 15 scoped items with no errors/warnings, and strict proof-contract validation checked 15/15 items with no errors/warnings.
- The normative precheck's canonical phase/step relabeling was adopted; all final proofs and contracts use the relabeled exact steps.
- Final mathematical audit made the Fourier commutator proof explicit for every smooth Fourier tail (choosing decay order above $m$) and made global uniqueness's finite-time supremum/continuity argument explicit. The two affected contracts and Step-1 readiness hashes were refreshed after those proof edits.
- Explicit `proof-layout.mjs` on the 15 changed item files after final edits: passed, 62 steps, 0 defects.
- `depcheck.mjs --items-file /tmp/physics-batch19-item-scope.json`: passed; 15 focused items, prerequisite cycle context covers 1,186 items and 173 pages. The temporary scope file is outside the repository.
- `coverage-checklist.mjs` on batch 19 coverage with `--require-destination`: passed, 2 pages and 35 harvested results, no errors or warnings. `source-fetch-check.mjs --stamp`: 9/9 coverage source entries fetch-verified and resolved across 7 unique URLs, with no drops.
- Cross-batch dependency input: 24 direct in-run page/item edges, all verified and none open. These checks verify scoped interfaces, not independent proof acceptance.
- Full-run `item-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` reports only the unrelated empty scaffold inventory `fd-ples01-examples`. Recomputing the graph with that unassigned empty page omitted yields no graph errors, and all 15 batch-19 declared levels equal their computed levels: Poincare 1; energy, stability, continuation, vorticity and polytropic energy 4; inviscid limit and global 2D theorem 5; wall energy 1; scaling 2; Fourier-log bound 1; commutator bound 2; acoustic example 3; CMI remark 0; boundary-scope remark 6.
- Fresh `loadStep1Record`/`step1Decision` reload confirms all 15 assigned items have current `ready` records, with examined direct dependency IDs and current transitive hashes; no assigned dependency is unresolved. The 9 A-page design results plus 3 local lemmas and 3 B-page results remain draft; readiness records do not constitute independent acceptance or publication.

