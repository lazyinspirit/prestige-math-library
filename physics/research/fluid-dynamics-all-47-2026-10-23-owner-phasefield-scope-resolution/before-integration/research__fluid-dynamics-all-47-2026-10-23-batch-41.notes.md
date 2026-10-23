# Batch 41 — Diffuse-interface coupling and energy

Run: fluid-dynamics-all-47-2026-10-23  
Batch: 41 (beta), assigned A/B pair fd-mp01

## Plan and inventory comparison

The controlling section research/plan-fluid-dynamics-refresh-track.md (L1320–1352) and the selected rows of research/plan-spec.json agree with the batch manifest on page IDs fd-mp01 / fd-mp01-examples, title, category fluid-dynamics-mathematics, library mathematics, order 687/688, and the declared page edges fd-mp01 → fd-x01 and fd-mp01-examples → fd-mp01. The item arrays were empty in both current plan records before authoring. The linked successor inventory research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json specifies the planned A items def-fd-diffuse-interface-equations and thm-fd-diffuse-interface-energy, the B example ex-fd-phase-constant-equilibrium, and item edges def-fd-x00 → def-fd-diffuse-interface-equations → thm-fd-diffuse-interface-energy → ex-fd-phase-constant-equilibrium.

Two local A-page prerequisites are added because the planned argument needs an explicit periodic-domain calculus convention and a proved periodic integration-by-parts identity. They do not replace or rename any planned item. The resulting A inventory is def-fd-periodic-torus-domain, lem-fd-periodic-integration-by-parts, def-fd-diffuse-interface-equations, and thm-fd-diffuse-interface-energy; the B inventory retains the planned example.

## Dependency levels and current upstream evidence

The shared batch-level file records batch 41 at level 1 with `requires: ["5"]` and batch 5 at level 0; its current `batch-dependency-levels.mjs check` is stale globally, and the shared level file is owner-owned, so it was not changed. The live batch-5 manifest includes `def-fd-x00` at level 0. The assigned item levels are: periodic-torus definition 0; periodic-integration lemma 1; diffuse-interface definition 1; energy theorem 2; constant-phase example 3. The theorem also uses published mathematical prerequisites `cor-mean-value-theorem` and `thm-heine-borel-r`; these do not change its in-run level. The global item-level check exits with 38 errors on unrelated empty inventories and stale levels; filtering its complete output shows no batch-41 item errors. The scoped recomputation below confirms all five assigned levels.

The current `fd-x01` A-page carrier and batch-5 manifest exist with eight items: `def-fd-x00`, `def-fd-real-trigonometric-functions`, `lem-fd-x02-vector-triple-product`, `lem-fd-x03-tanh-error-bounds`, `thm-fd-x01`, `lem-fd-real-trigonometric-derivatives`, `thm-fd-x02`, and `thm-fd-x03`. A fresh `loadStep1Record`/`step1Decision` check reports ready/current for all eight, including `def-fd-x00`. The direct page edge `fd-mp01 -> fd-x01` is therefore verified in the batch cross-dependency array; this records the scoped carrier/readiness check, not independent proof approval.

The complete current `def-fd-x00` Definition is a pointwise formal-PDE definition on an open time interval and an open `Omega` subset of `R^3`, with continuous first-time, first-space, and second-space derivatives. It defines three-coordinate gradient, divergence, curl, Laplacian, Jacobian, and the usual incompressible Navier–Stokes/Stokes systems. Its direct mathematical-definition dependencies are `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, and `def-oriented-unit-normal-and-flux-of-a-surface-patch`; their actual statements were inspected. Their operator hypotheses fit the `d=3` pointwise convention, and no proof or axiom is asserted by this definition. The current `def-fd-x00` Step-1 record is ready/current, so status or record absence is not the blocker. The batch-41 consumer instead uses periodic fields on `T^d` for every integer `d>=1`; `def-fd-x00` does not state the quotient-periodic convention or cover the consumer's `d != 3` cases. This genuine interface mismatch leaves the item edge `def-fd-diffuse-interface-equations -> def-fd-x00` open.

The current `fd-x01` page has `requires: ["the-divergence-theorem-and-classical-stokes"]`. The root mathematical-original carrier `../library/real-analysis/the-divergence-theorem-and-classical-stokes.md` exists with `status: published`; its companion page is also published. The current run's `research/plan-spec.json` row has an empty inventory because those mathematical originals remain outside this fork's authoring scope; it does not mean the root page is absent. This transitive page input was checked and is not an additional blocker or batch-41 cross-dependency row.

Owner resolution needed: provide or reconcile the formal-PDE supplier on `fd-x01` so its mathematical interface covers the periodic `T^d`, arbitrary-`d` convention used by this batch, or have the owner resolve the intended scope in the controlling design. The batch-41 all-dimensional claim is retained; no scope is weakened and no batch-5 or shared-plan file is edited. The complete local conditional proof remains available while the item interface is unresolved.

## Source evidence

Two independent full-text treatments were read for the A page:

- J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11, §§11.2 and 11.4, pp. 209–212. Full 230-page PDF retrieved and inspected. Equations (11.1)–(11.10) define the phase-field energy and its variational derivative; equations (11.16)–(11.21) derive the Cahn–Hilliard diffusion law and its free-energy dissipation mechanism. This supports the local model definition and the phase-energy part of the local theorem, with Oden’s coefficient convention recorded separately.
- Stefanos Georgiadis, “Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility,” ZAMP 75, 174 (2024), §§1–2, pp. 1–7. The complete 8-page version-of-record PDF was retrieved from the Deutsche Nationalbibliothek at https://d-nb.info/1352416549/34 and inspected, including all assumptions, Theorem 1 and its complete mollification/limit proof. This supports the periodic coupled-model and total-energy context. Its paper uses a Korteweg-stress force and the symmetric-gradient viscosity convention; the authored theorem instead proves the exact -phi grad(mu_c) and nu Delta u convention locally. If mu=F'(c)-gamma Delta c, then -gamma div(grad(c) tensor grad(c)) = -c grad(mu) + grad(c mu - F(c) - gamma |grad(c)|^2/2), so the source force is equivalent after shifting pressure. For divergence-free periodic u, int |grad u|^2 = 2 int |D u|^2; setting the source viscosity coefficient to 2 nu matches the authored nu Delta u and nu |grad u|^2 convention. The paper’s weak-solution hypotheses and phase range are not imported into the local smooth theorem.

A search-result mirror initially labelled as Jacqmin’s 1999 article resolved to a different 55-page PDF whose reference list merely cited that article. The document was inspected and excluded; no claim or source-reading credit is taken from it. The publisher Springer PDF URL for Georgiadis recorded one short-HTML initial attempt and five cookie-consent recovery failures under source-fetch-check. After searching the exact title and DOI, the DNB version-of-record PDF was retrieved and verified as the same 8-page paper by its title, author, journal, volume, year, and DOI. The failed Springer attempts and the certain URL-drop record with per-item arguments/dependencies are preserved in the coverage JSON. The final source-fetch-check passed 2/3 sources (Oden and DNB) and counted the Springer URL as one documented drop; the DNB stamp records 260,982 bytes, SHA-256 prefix 40ebc148a942d988, and 8 pages, while the Oden stamp records 5,815,829 bytes, SHA-256 prefix b0b69cd99a2c1789, and 230 pages.

## Item checkpoints

### def-fd-periodic-torus-domain

Defines `T^d = R^d/(2 pi Z)^d`, the fixed fundamental cube and Riemann integral, periodic lifts, spatial operators, and the time/space regularity convention used in the proofs; assigns no physical units. It has no item dependencies and level 0. The statement is mirrored on the A page and the item has a current `ready` Step-1 record.

### lem-fd-periodic-integration-by-parts

Proves zero integral of periodic divergence and scalar-vector integration by parts on `T^d` for every `d>=1`. The proof uses uniform-grid Riemann sums, Darboux-gap control, periodic telescoping, and the published mean-value theorem; it does not rely on a divergence theorem or a choice principle. Direct deps are `def-fd-periodic-torus-domain` and `cor-mean-value-theorem`; level 1. The exact proof contract, precheck, proof layout, rendering, and selected dependency checks pass. Its current Step-1 record is `ready`.

### def-fd-diffuse-interface-equations

Defines the dimensionless periodic Cahn–Hilliard/incompressible-flow system for `d>=1`, positive `epsilon`, `M`, `nu`, and `W in C^2(R)` bounded below; explicitly requires the defined chemical potential to belong to the stated `C([0,T];C^2_per)` class. It preserves the design caveats: scalar order parameter only, no phase bound, physical calibration, sharp-interface limit, or positivity claim. Direct deps are `def-fd-x00` and the local torus definition; level 1. The current `def-fd-x00` carrier and its Step-1 record are ready/current, but its actual interface is only pointwise on open subsets of `R^3`; it does not supply periodic `T^d` for arbitrary `d`. The local definition is complete and its item edge is open for owner reconciliation. Its current Step-1 record is `escalated` for that exact interface gap.

### thm-fd-diffuse-interface-energy

Claim: every solution in the stated periodic regularity class satisfies `E'(t) = -nu int|grad u|^2 - M int|grad mu_c|^2` on `(0,T)`. The proof derives the phase variation by uniform time difference quotients, compact-range uniform continuity and the mean-value theorem; it derives the kinetic balance; applies the proved periodic identities; and cancels transport against capillary work. Direct deps: `def-fd-diffuse-interface-equations`, `lem-fd-periodic-integration-by-parts`, `cor-mean-value-theorem`, and `thm-heine-borel-r`; its in-run level is 2. Its exact proof contract, precheck, proof layout, and scoped render/dependency checks pass. The proof is complete as a conditional deduction, but its current Step-1 record is `escalated` through the diffuse-interface definition's open `fd-x00` interface. No existence, global regularity, maximum principle, or sharp-interface claim is made.

### ex-fd-phase-constant-equilibrium

For any real `c`, verifies that `u=0`, `phi=c`, `pi=0` solves the periodic equations and has constant energy `(2 pi)^d epsilon^-1 W(c)`; it makes no minimization or stability claim. Direct dep: the energy theorem; level 3. Its exact verification contract and scoped checks pass. Its current Step-1 record is `escalated` transitively through the theorem and the open `fd-x00` interface.

## Final validation and readiness

- `precheck`: 3 proof-bearing items passed; definitions are nonproof items.
- `proof-layout`: 5 changed items, 13 steps, 0 defects.
- `rendercheck`: all 5 item files and both page files passed.
- `content-policy`: 5 scoped items, 0 errors and 0 warnings.
- Strict proof contract: 3/3 proof-bearing items checked, 0 errors and 0 warnings.
- Selected `depcheck`: 5 items and prerequisite cycle checks across 585 items / 111 pages passed. The resulting page depths are 29 for `fd-mp01` and 30 for its examples page.
- Manifest mirrors: all 5 statement, dependency, and level mirrors match item files; both page bodies are empty; the page cap is respected; the cross-batch file is a valid two-row JSON array.
- Scoped in-run item-level recomputation gives exactly 0, 1, 1, 2, 3 for the five batch-41 items. The shared batch-level row remains level 1 with `requires: ["5"]`.
- Current source-fetch result: 2/3 sources have fetch stamps and 3/3 are resolved, with one documented Springer URL drop; Oden and the DNB version of record have inspected stamps recorded in coverage.
- Fresh `step1Decision` checks: local torus definition and periodic lemma are `ready`; diffuse definition, energy theorem, and example are `escalated`; the upstream `def-fd-x00` and all eight `fd-x01` items are `ready/current`. No `--owner` was used.
- Cross-batch dependency rows: page edge `fd-mp01 -> fd-x01` is `verified` for current carrier/readiness; item edge `def-fd-diffuse-interface-equations -> def-fd-x00` remains `open` for the exact `R^3` versus periodic arbitrary-`d` mismatch.
- Global proof-contract coverage is blocked by the unrelated empty `fd-f03` inventory. Global item-level checking reports unrelated empty inventories and stale levels, while the scoped recomputation above passes. Global batch-level checking reports the shared dependency-level file stale; its batch-41 row itself is unchanged and correct. I made no out-of-scope inventory, level, page, or plan edits.

The owner action is to reconcile `def-fd-x00` on `fd-x01` with the periodic arbitrary-dimensional convention required by the controlling design, or resolve that intended scope in the owner-controlled design. The batch-41 claims remain unchanged pending that resolution.
