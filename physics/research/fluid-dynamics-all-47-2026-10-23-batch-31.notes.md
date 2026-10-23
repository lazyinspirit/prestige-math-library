# Batch 31 authoring notes — fd-pn02

## Scope and planning comparison

Assigned pair: A page fd-pn02, order 667; B page fd-pn02-examples, order 668; title “Physical interpretation of shock-capturing calculations”; category/library fluid-dynamics/physics.

The complete current design at research/plan-fluid-dynamics-refresh-track.md, section “Physical interpretation of shock-capturing calculations,” lists A items post-fd-ideal-gas-numerical-model and pthm-fd-conditional-positive-euler-update, and B item ex-fd-positive-euler-uniform-gas. It declares earlier pages fd-f02, fd-f03, and fd-n03 and a leaf B page. The matching rows in research/plan-spec.json and the initial batch-31 manifest agree on both page IDs, titles, order, category, library, and requires. No design/plan conflict was found. The assigned manifest initially had empty item inventories, so this batch fills only these three planned items and these two pages.

The pair's full-scaffold dependency level is 4 (batch 31 requires batches 9, 11, and 30). Current item levels were recomputed from the actual current manifest graph after batch 11 and batch 9 carriers changed:
- def-fd-simple-fluid-state: level 0 (batch 10); def-fd-quantity-and-frame-conventions: level 1 (batch 3).
- post-fd-local-equilibrium is now present at level 2 (batch 11) and depends on those two definitions.
- post-fd-weak-balances is level 3 in the current batch-9 manifest; def-fd-compressible-numerical-contract is level 0; prop-fd-euler-llf-admissibility-interface is level 1.
- Therefore post-fd-ideal-gas-numerical-model is level 4; pthm-fd-conditional-positive-euler-update is level 5; ex-fd-positive-euler-uniform-gas is level 6. The current post-fd-weak-balances item frontmatter still declares level 0 while its batch-9 manifest and recomputed dependency graph give level 3; this out-of-scope supplier metadata discrepancy is reported to the owner.

## Supplier inspection and decisions

- fd-f02 exists in library/fluid-dynamics/fd-f02.md. Its current manifest includes post-fd-weak-balances. The complete postulate carrier was read: it adopts locally integrable weak mass, momentum, and total-energy identities with initial terms, and the weak physical entropy inequality for nonnegative tests; it expressly does not infer weak entropy admissibility from smooth equations. This is used as a physical assumption and will be specialized to the stated inviscid one-dimensional branch.
- fd-n03 exists in library/fluid-dynamics-mathematics/fd-n03.md. Its current manifest contains def-fd-compressible-numerical-contract, prop-fd-euler-llf-admissibility-interface, and prop-fd-shared-face-global-conservation. The complete numerical-contract definition and positivity-proposition proof were read. The proposition applies the published symmetric HLL/LLF positivity theorem under positive ideal-gas states, facewise a >= max(|u|+c), and 2 lambda a <= 1. Its proof maps the local ratio to the source ratio and applies the exact supplier theorem; this is a conditional mathematical result and not an empirical claim.
- fd-f03 and post-fd-local-equilibrium became present in the current library and batch-11 manifest during this authoring turn. The full current postulate was reread; its actual C2 e(v,s), T=e_s>0, p=-e_v interface matches the consuming use and its dependencies are def-fd-simple-fluid-state and def-fd-quantity-and-frame-conventions. It remains a readiness escalation because its current Step 1 record is missing, and its [L1]/[L2] facts claim those two definition readiness records are missing although the current snapshot records both definitions ready. This batch does not edit the batch-11 carrier or page.
- For the mathematical positivity supplier, I read the full local proposition and the complete published theorem proof and its cited transitive mathematical interfaces. The positivity argument is sound under the exact stated speed and CFL hypotheses. The local mathematical definition and proposition are draft items with their actual current contents inspected; draft status or pending precheck alone is not treated as a gap.

A non-load-bearing defect was observed in read-only published mathematics item thm-hll-flux-is-consistent-and-conservative: its Statement ends with “Here n >= 1” although n is not defined there or used in the displayed result. The local positivity path does not use this clause; it uses the exact middle-flux identity and local positivity theorem. This item is outside this batch's write boundary and is reported here for the owner.

## Source retrieval and reading record

Selected full-text sources and their scoped use:

- Joseph M. Powers, Lecture Notes on Gas Dynamics, complete 164-page PDF, §§2.3.3.3–2.3.4 (printed pp. 25–27), §§2.4.6–2.4.7.2 (pp. 35–36), and §§3.2–3.3 (pp. 39–43). Retrieved and read at https://www.perplex.ethz.ch/thermo_course/various_thermodynamics_texts/Powers%20Lecture%20notes%20in%20Gasdynamics.pdf. Supports ideal-gas thermal/caloric relations, the Gibbs relation, entropy variables, and entropy-balance conventions. It does not establish a weak entropy inequality for arbitrary discontinuous fields; that remains an adopted premise supplied by post-fd-weak-balances.
- David Tong, Fluid Mechanics, Part III: Waves, complete 70-page PDF, §§4.4.1–4.4.4 (printed pp. 144–151) and §4.6 shock discussion. Retrieved and read at https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf. Supports the ideal-gas equation of state, its local-equilibrium interpretation, entropy relation, and isentropic sound-speed convention. It is not used as a numerical positivity proof.
- Xiangxiong Zhang and Chi-Wang Shu, “On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes,” complete 34-page article, §2, PDF pp. 5–9. Retrieved and read at https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf. The relevant direct LF proof uses a uniform maximum speed a0 and a sufficient CFL bound. The batch theorem instead relies on the exact pinned local proposition for the stated facewise speed hypotheses; Zhang–Shu is supporting numerical-analysis context, not a replacement for that interface.
- D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, complete Euler approximate-solver chapter, especially the HLLE and positivity sections (lines 229–324). Retrieved and read at https://www.clawpack.org/riemann_book/html/Euler_approximate.html. Supports the two-wave middle-state model and supplied-speed convention. Its qualitative HLLE positivity discussion is explicitly limited to a single Riemann solver and is not used as a general finite-volume update theorem.

Retrieval recovery history: the initially cited Powers AME 60635 PDF at academicweb.nd.edu timed out in the web reader; its www3.nd.edu alternative redirected to the inaccessible academicweb host. Search found Powers's complete Gas Dynamics lecture notes at the ETH mirror above. The first fetch stamp used a transcribed URL with “on” instead of the source URL's “in” and recorded six HTTP 404 attempts; the corrected exact URL shown above was already verified by full-text inspection and is now being stamped. The initially tried 11.3 MB Tong full-volume PDF exceeded the web reader's size limit; the author page exposed the smaller complete Part III Waves chapter above, which was retrieved and read successfully. The initially tried Tong Part I PDF was inspected only for orientation and is not relied on for the compressible thermodynamic claims. No source is dropped or owner-escalated; the selected full-text sources are available.

## Item authoring checkpoints

All three planned items have been authored in supplier order, followed by both frontmatter-only pages, the batch manifest, proof contracts, coverage, cross-batch dependency rows, and readiness records. Per-item claims, conventions, sources, dependencies, and open obligations are recorded below. Final scoped results and any run-wide unrelated failures are recorded in the final section.

### Item checkpoint: post-fd-ideal-gas-numerical-model

Claim and conventions: adopts the one-dimensional, nonrelativistic calorically perfect ideal-gas state relation on $(v,s)\in(0,\infty)\times\mathbb R$, with $T=e_s>0$, $p=-e_v=(\gamma-1)\rho e=R\rho T$, $\gamma=1+R/c_v>1$, and SI units. It separately adopts the source-free weak mass, momentum, and total-energy identities and physical entropy inequality for the inviscid branch; it makes no existence, uniqueness, empirical, or numerical-entropy claim.

Dependencies: def-fd-simple-fluid-state, def-fd-quantity-and-frame-conventions, post-fd-local-equilibrium, post-fd-weak-balances, def-fd-compressible-numerical-contract. The current post-fd-local-equilibrium carrier now exists and its actual statement matches; its current Step 1 readiness record is missing and its Facts section has stale readiness text. post-fd-weak-balances also has a missing current readiness record and stale dependency-level metadata. These remain open prerequisites and are not treated as accepted.

Sources: Powers, complete Gas Dynamics notes, §§2.3.3.3–2.3.4, §§2.4.6–2.4.7.2, §§3.2–3.3; Tong, complete Part III Waves chapter, §§4.4.1–4.4.4 and §4.6.1. Retrieval and disposition details are above. This item is an adopted model, not a source-derived physical truth claim.

Validation: precheck passed; final proof-layout, rendering, policy, contract, focused dependency, and source-fetch checks passed. The exact source-fetch retry history is recorded above. Step 1 readiness is escalated because the current local-equilibrium and weak-balance postulate records are missing and their upstream facts/metadata require owner repair.

### Item checkpoint: pthm-fd-conditional-positive-euler-update

Claim and conventions: one one-dimensional periodic first-order symmetric HLL/LLF step on a uniform mesh preserves the ideal-gas admissible state set under the stated facewise speed bound and 2 lambda a <= 1. Under the adopted calorically perfect closure, this gives positive updated density and thermodynamic pressure. The claim excludes other HLL branches, discrete entropy, convergence, exact wave enclosure, and empirical truth.

Dependencies: post-fd-ideal-gas-numerical-model (physical assumption), def-fd-compressible-numerical-contract (mathematical premise), and prop-fd-euler-llf-admissibility-interface (mathematical premise). The complete current proposition proof was checked against the complete published symmetric-branch proof and its transitive interfaces; all hypotheses match. The missing planned local-equilibrium carrier remains transitive through the physical-model postulate.

Sources: Zhang–Shu, complete article §2, PDF pp. 5–9, supports positivity-preserving Euler updates; its direct LLF argument uses a global maximum speed, so the exact facewise statement relies on the inspected local proposition. Ketcheson–LeVeque–del Razo, complete Euler approximate-solver chapter, supports the supplied-speed HLL model; its qualitative positivity discussion is not generalized into the one-step theorem.

Validation: proof contract and final scoped proof-layout, rendering, policy, contract, and focused dependency checks passed. Step 1 readiness is escalated because the model prerequisite inherits the unresolved local-equilibrium and weak-balance postulate records; the inspected numerical positivity supplier and its hypotheses match.

### Item checkpoint: ex-fd-positive-euler-uniform-gas

Claim and conventions: for a constant positive calorically perfect Euler state on a periodic uniform grid, equal left/right states make every symmetric HLL face flux equal to the physical Euler flux; the flux difference is zero, so each cell remains exactly unchanged. The example explicitly says it contains no shock and is not an observation.

Dependency: pthm-fd-conditional-positive-euler-update as a physical-result supplier. The example uses the theorem's exact speed, CFL, flux, and update conventions and adds no empirical premise.

Source disposition: the conditional theorem is the sole logical supplier; the example's fixed-point calculation is proved locally. External source context is recorded on the A page and is not treated as an observation.

Validation: proof contract and final scoped proof-layout, rendering, policy, contract, and focused dependency checks passed. Step 1 readiness is escalated because it inherits the unresolved physical-model prerequisites. The symbolic fixed-point verification and B-page placement are complete.

### Source-fetch checkpoint

The first source-fetch stamp found a URL transcription error for Powers: the source path uses “in” Gasdynamics, while the draft citation had “on.” The incorrect URL received six HTTP 404 attempts; those are preserved in the coverage source's url_history and this note. The corrected URL was verified against the successfully opened full-text source and stamped. Final source-fetch-check --stamp result: 4/4 sources fetch-verified, 4/4 resolved, zero drops, exit 0.

## Current supplier recheck and readiness resolution

The earlier inspection finding that fd-f03/post-fd-local-equilibrium was absent reflected the batch-11 snapshot at that time. A later loadStep1Record snapshot now finds both the fd-f03 page and items/post-fd-local-equilibrium.md in the current run manifest. I reread the full current carrier and page. Its actual Postulate uses an open state domain, a C2 e(v,s), T=e_s>0, and p=-e_v, exactly matching the conditional use in this batch. Its actual dependencies remain def-fd-simple-fluid-state and def-fd-quantity-and-frame-conventions. The fd-f03 page is current and has its planned eight-item A inventory.

The required current readiness check was performed with loadStep1Record and step1Decision from the physics support modules:
- post-fd-local-equilibrium: current carrier and manifest row exist, but step1Decision returns “Readiness record missing.”
- post-fd-weak-balances: current carrier and manifest row exist, but step1Decision returns “Readiness record missing.”
- def-fd-simple-fluid-state: ready and current, hash 09844eb73b05ad370102d282eba4ff02c9481b2de41010d91cee90838c0f649b.
- def-fd-quantity-and-frame-conventions: ready and current, hash 21e4c61ec7dd8806ba9a0cedc4d47af16c4973aa6a9de5d9d97ef8e6a7467357.
- def-fd-compressible-numerical-contract: ready and current, hash c8842e4ae88946e7d7e08570aa413794ea33f9ebdf0f25c39a8de30dcbfdb77f.
- prop-fd-euler-llf-admissibility-interface: ready and current, hash 0f16e07f890865b64e2dc83fba407ff6338db27c092af8864e6a80d970109afe.

A further current-source discrepancy remains in post-fd-local-equilibrium.md: its [L1] and [L2] Facts & Assumptions say the two definition readiness records are missing, but the current readiness snapshot above records both definitions ready. This is stale source text outside batch 31 ownership. I did not edit it. Separately, post-fd-weak-balances.md frontmatter declares dependency_level 0, while its current batch-9 manifest declares level 3 and the recomputed dependency graph agrees with level 3. This is another out-of-scope supplier metadata discrepancy. I updated this batch's postulate reference label, item levels, coverage blocker, and the fd-f02/fd-f03 and item cross-batch rows. The two missing current-run postulate readiness records and stale supplier facts/metadata keep the dependent model postulate, positivity theorem, and example escalated. The actual local-equilibrium statement and weak-balance statement were read and match their conditional uses.

## Final scoped checks and readiness decisions

- `node tools/physics-support/proof-layout.mjs` on the three changed items: exit 0; 3 items, 4 proof steps, 0 defects.
- Scoped precheck: exit 0; all 3 items pass, 0 failures. Rendercheck on the three items and two pages: exit 0; YAML and KaTeX checks clean. Content-policy on the batch-31 manifest: exit 0; 3 scoped items, 0 errors, 0 warnings.
- Focused `depcheck` using `/tmp/prestige-physics-b31-items.json`: exit 0; item/page dependency checks and prerequisite-cycle checks pass. The selected page depths are fd-pn02 = 2 and fd-pn02-examples = 48.
- Strict proof-contract validation: exit 0; 3/3 contracts, 0 errors, 0 warnings. Source-fetch check: exit 0; 4/4 sources fetch-verified, 4/4 resolved, zero drops. Batch dependency-level check: exit 0; 47 batches, maximum level 5.
- Cross-batch dependency inventory validation: 10 direct rows match the exact edge inventory; 4 remain `open`, 6 are `verified`, and 0 are `removed`. The open rows are the unresolved fd-f02/fd-f03 physical prerequisites and their postulate/item dependencies; verified rows record only the scoped interface/dependency check, not independent proof approval.
- `item-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` exits 1 on unrelated run-wide issues only: empty inventories for fd-pn01, fd-pn01-examples, and fd-ples01-examples; pthm-fd-bounded-weak-continuation has declared level 4 vs computed 5; pthm-fd-rectangular-weak-pressure has declared level 5 vs computed 6. It reports no batch-31 item level error; this batch's levels are 4, 5, and 6 as recomputed above.
- Run-wide proof-contract coverage exits 1 only because fd-pn01 has an empty inventory. No batch-31 coverage or contract error was reported.
- `step1Decision` was rechecked for all three authored items after recording. post-fd-ideal-gas-numerical-model is escalated because current readiness records for post-fd-local-equilibrium and post-fd-weak-balances are missing, with stale supplier facts/metadata also requiring owner repair. pthm-fd-conditional-positive-euler-update inherits that unresolved physical prerequisite. ex-fd-positive-euler-uniform-gas inherits it through the theorem. The three native records are `research/fluid-dynamics-all-47-2026-10-23-step1-post-fd-ideal-gas-numerical-model.json`, `research/fluid-dynamics-all-47-2026-10-23-step1-pthm-fd-conditional-positive-euler-update.json`, and `research/fluid-dynamics-all-47-2026-10-23-step1-ex-fd-positive-euler-uniform-gas.json`; none was marked ready.


### Owner weak-form and capillary resolution (2026-10-22T16:18:13.613Z)

Owner /root integrated round1 source-first repairs documented in research/fluid-dynamics-all-47-2026-10-23-owner-completed-consumer-resolution/consumer31-and-capillary-review.json and consumer31-capillary-repair-plan.json: explicit initial-time integrability, correct unnormalized L2 units, coordinate-FTC channel bridge and nonempty wave time set. Same-reviewer downstream checks preserve the full intended weak/positivity, bounded-wall/lift and arbitrary-lattice two-branch capillary claims. No empirical validation or independent proof approval is asserted; ordinary reviews/native gates remain pending.
Original native checkpoints and source-reading records remain historical. The two removed periodic-L01 logical edges in46 remain recorded as removed; native collector supports removed reviewer findings, while actual deps contain only valid local suppliers. L01 remains navigation context.
