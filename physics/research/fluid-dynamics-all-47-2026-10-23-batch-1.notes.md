# Batch 1 authoring notes — `fd-c01`

Run: `fluid-dynamics-all-47-2026-10-23` · batch: `1` · authoring status: in progress.

## Design and inventory decisions

The controlling design is `research/plan-fluid-dynamics-refresh-track.md` § “Finite weighted ensemble and covariance” (the assigned L25 section). It labels itself the current controlling owner refresh dated 2026-10-18 and explicitly supersedes conflicting historical fluid design text. The older `research/plan-fluid-dynamics-track.md` § “Finite weighted ensemble and covariance” (assigned L15 section) reserves the same pages, category, order, four stable item IDs, and no external pair prerequisites, but lacks the successor’s explicit current-owner control notice. Its historical inventory is retained as context; the refresh section and its linked successor records control.

The active `research/plan-spec.json` agrees on page IDs, titles, category/library, companion, order 361/362, and the absence of pair-level external `requires`. Its two page records have `items: []`, while the controlling successor inventory assigns three A items and one B counterexample. This is recorded as an unmaterialized plan-spec item list, not as authority to drop the successor inventory: the batch task and controlling refresh specify all four carriers. The B companion’s `requires: [fd-c01]` is the planned same-pair A/B ordering edge, not an external pair prerequisite.

The controlling inventory is `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`, pair FD-C01 and its four item records. Exact order and dependencies:

- `def-fdmath-finite-ensemble-and-covariance`, A, `deps: []`, level 0.
- `thm-fdmath-finite-reynolds-identity`, A, depends on the definition as a `mathematical-premise`, level 1.
- `thm-fdmath-mean-fluctuation-energy-transfer`, A, depends on the finite Reynolds identity as a `mathematical-premise`, level 2.
- `cex-fdmath-mean-does-not-determine-covariance`, B, depends on the finite Reynolds identity as a `mathematical-premise`, level 2.

`research/fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json` places batch 1 at level 0 with `requires: []`. No cross-batch item or page edge is declared for this pair. The current blocker record reports an artifact-incomplete stale unit 30 only; it does not block batch 1. No current owner authoring direction file was present at the assigned path.

## Sources read and result dispositions

Two independent full-text treatments were inspected for the A page:

- Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, *Turbulence in the Ocean and Atmosphere*, full Chapter 3 lecture notes (11 PDF pages), §§3.1–3.8, especially §3.2 (covariance, pp. 4–5), §3.6 (closure, pp. 8–9), and §3.7 (Reynolds equations, pp. 9–10). URL: <https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf>. §3.2 supplies the statistical covariance convention; §§3.6–3.7 explain why nonlinear averaged equations contain second moments. Those arguments concern statistical averages and do not prove the finite deterministic weighted identities authored here.
- Gregory L. Eyink, Johns Hopkins University *Turbulence Notes*, Chapter VIb, section (B) “Reynolds Averaging,” full 5-page PDF, especially the RANS mean-energy balance and Reynolds-stress/fluctuation-energy balance, PDF pp. 18–19. URL: <https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf>. This independent full lecture-note treatment states the statistical averaging conventions and opposite-signed production terms; the local theorem proof supplies the exact finite-family derivation and no sign for the transfer term.

The exact section harvest and result dispositions are in the batch coverage file. The Cambridge University Press Pope excerpt was inspected but contained only title/branding pages, so it is not cited or used. Both active full lecture-note sources are fetch-verified; `source-fetch-check --stamp` reports 2/2 sources verified and resolved, with one new stamp.

## Completed item checkpoint: `def-fdmath-finite-ensemble-and-covariance`

Authored the mathematical definition of fixed nonnegative normalized finite weights; pointwise weighted means and fluctuations of Euclidean-valued tuples/functions; and cross-covariance/covariance tensors via the outer product. It assumes no probability space, statistical limit, or empirical sample interpretation. It has no logical suppliers and level 0. References are the MIT covariance treatment and the Eyink Reynolds-averaging/energy-balance context; they are not `deps`. The definition carrier is present at `items/def-fdmath-finite-ensemble-and-covariance.md`.

Checks for this checkpoint: item/page precheck, proof-layout, rendering, contract, manifest, dependency-level, and source-fetch checks have not yet run; no pass is claimed. The definition contract and source coverage are pending final pair integration. No mathematical uncertainty or missing prerequisite has been identified for this definition.

## Remaining work

Author the two A theorems and B counterexample supplier-first, with the exact planned scopes and dependencies. Then finish both frontmatter-only pages, manifest item records, proof contracts, source-harvest coverage, the empty cross-batch-dependency array, scoped checks, and per-item Step-1 readiness. Category introduction/pathway files are not in this pair’s write scope and were not present at initial inspection; this authoring does not change them.

## Completed item checkpoint: `thm-fdmath-finite-reynolds-identity`

Authored the exact finite weighted Reynolds identity for an open time interval and open spatial region: fixed nonnegative weights summing to one; a finite family of sufficiently smooth, divergence-free solutions of the same forced incompressible vector PDE with common constant viscosity; rowwise tensor divergence; and the pointwise averaged equation with $-\operatorname{div}R$. The statement also records the mean-zero fluctuation identity, positive-semidefinite covariance, and kinetic-energy split. The argument is pointwise finite-sum algebra and does not invoke probability, stationarity, a limit, or physical applicability.

Declared dependency: `def-fdmath-finite-ensemble-and-covariance` (`mathematical-premise`). Item level 1. Supplier statement inspected directly in the new definition carrier. References/locators: MIT OCW 12.820 Chapter 3 §§3.2, 3.6–3.7; Eyink, Johns Hopkins Turbulence Notes Chapter VIb §(B), PDF pp. 17–19; both active URLs are recorded in the item’s reference section and frontmatter. The local proof supplies every finite-weight algebra step; these source treatments use statistical averages and are contextual support only.

Checks for this checkpoint: no validator or fetch stamp has run yet; no pass is claimed. No prerequisite gap is outstanding. Next, author the periodic mean/fluctuation energy theorem and its B-page counterexample, then build contracts and coverage from the finished arguments.

## Completed item checkpoint: `thm-fdmath-mean-fluctuation-energy-transfer`

Authored the exact mean and fluctuation kinetic-energy balances for a smooth periodic, unforced finite family of incompressible solutions with fixed normalized weights and common constant $\nu\ge0$. The statement defines the flat torus and measure, rowwise divergence, trace, gradient contraction, both energy functionals, and the finite-interval endpoint identities. The shared transfer $\int R:\nabla\bar u$ enters with opposite signs; no sign or universal dissipation law is claimed. The proof derives the mean balance by periodic integration by parts, derives the weighted total balance termwise, uses the zero weighted fluctuation-gradient sum, then subtracts and applies the fundamental theorem of calculus.

Declared dependency: `thm-fdmath-finite-reynolds-identity` (`mathematical-premise`), level 2. Its averaged equation and exact energy split were inspected and match the statement’s uses. References/locators: Eyink, Johns Hopkins Turbulence Notes Chapter VIb §(B), PDF pp. 18–19 (mean energy and Reynolds-stress/fluctuation energy balances); Flierl–Ferrari, MIT OCW 12.820 Chapter 3 §3.7. Both references distinguish their statistical averaging context from the local deterministic finite-family proof.

Checks remain pending for final pair integration; no pass is claimed. No prerequisite gap remains. Next, finish the B counterexample from the actual finite Reynolds interface, then complete pages and contracts.

## Completed item checkpoint: `cex-fdmath-mean-does-not-determine-covariance`

Authored the B counterexample to the universal claim that equal mean velocity and mean pressure determine the covariance term in the finite Reynolds equation. The two explicit two-member ensembles use weights $1/2,1/2$: zero velocities versus constant velocities $w,-w$ on $\mathbb T^d$, with $d\ge2$, $w\ne0$, zero pressure, no forcing, and common $\nu\ge0$. All fields are smooth periodic solutions; both means agree, while $R_A=0$ and $R_B=w\otimes w\ne0$. The counterexample cites the finite Reynolds identity at its actual definition/equation interface and states that no conclusion is made about restricted closure models.

Declared dependency: `thm-fdmath-finite-reynolds-identity` (`mathematical-premise`), level 2. Source context: Flierl–Ferrari, MIT OCW 12.820, Chapter 3 §3.6, closure problem. The explicit finite example is proved locally; the source is not a proof premise. No unresolved prerequisite or mathematical uncertainty remains for this item. Checks and source-fetch stamping remain pending for final integration.

## Supplier interface check after consumers

The finite Reynolds supplier requires an open spatial domain $\Omega\subseteq\mathbb R^d$ and pointwise smooth solutions there. The periodic energy theorem and counterexample state their fields as $2\pi$-periodic lifts on $\mathbb R^d$ and integrate over one fundamental cell, so the actual consumer fields satisfy the supplier with $\Omega=\mathbb R^d$; no stronger torus-domain claim is inferred from the supplier. This adjustment preserves the planned periodic setting and makes the edge valid at the supplier’s inspected hypotheses.

## Pair pages and current manifest inventory

Created the frontmatter-only A page `library/fluid-dynamics-mathematics/fd-c01.md` with the three planned A items and the frontmatter-only B page `library/fluid-dynamics-mathematics/fd-c01-examples.md` with the counterexample in `examples` and the declared same-pair page prerequisite `fd-c01`. Both have empty bodies as required. The category directory had not existed; it was created only to hold these assigned pages. No category introduction or pathway was authored because neither is in this batch’s pair write scope.

Updated `research/fluid-dynamics-all-47-2026-10-23-batch-1.pages.json` from the four current item carriers. Inventory is exactly three A items and one B example. Item levels recomputed from the actual `deps` are 0, 1, 2, 2 as listed above. The A/B page metadata still matches the active plan. These inventory and page edits are within this batch’s assigned artifacts.

The consumer uses were checked against the actual current supplier statements: the two downstream items depend only on `thm-fdmath-finite-reynolds-identity`; its own dependency is the local finite-ensemble definition. For the periodic theorem and counterexample, fields are specified as $2\pi$-periodic lifts on the supplier’s open spatial domain $\mathbb R^d$, with integrals over one periodic cell, so the theorem’s stated open-domain hypotheses apply literally.


## Supplementary-source recovery disposition

The optional Tennekes–Lumley book candidate was fully inspected in the browser at Chapter 3 §§3.1–3.2, printed pp. 60–65, but could not be fetch-stamped locally. Attempts recorded were: original HTTPS `rcfftp.soest.hawaii.edu` (TLS issuer failure), HTTPS `ftp.soest.hawaii.edu` (same TLS issuer failure), and HTTP `ftp.soest.hawaii.edu` (connection refused). Search located the independent Johns Hopkins Chapter VIb full lecture notes, which were read in the Reynolds-averaging and mean/fluctuation energy sections and fetch-stamped. The book candidate is not an active citation or logical prerequisite; the two active full lecture-note sources plus the complete local proofs provide the required source coverage. No unresolved active source or source-resolution escalation remains.

## Final scoped checks and readiness

Final results on the current batch-1 carriers:

- `precheck.mts` via `tools/tsx-run.mjs`: 3 proof-bearing items passed with direct strategy; the definition is nonproof.
- `proof-layout.mjs` on all four changed items: 4 items, 11 proof steps, 0 defects.
- `proof-contract.mjs --strict`: 4/4 items, 0 errors, 0 warnings; contracts include exact supplier excerpts, mapped inputs for every step, all boundary cases, and finite symbolic checks.
- `coverage-checklist.mjs`: the required A page has 14 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp` followed by check mode: 2/2 active full-text sources fetch-verified and resolved; MIT OCW was already stamped and the Johns Hopkins notes received the new stamp.
- `rendercheck.mjs`: six explicit files (four items and both pages), all YAML and math parse checks passed.
- `content-policy.mjs`: 4 scoped items, 0 errors/warnings; the `--manifest-only --authored` pass also returned 4, 0 errors/warnings.
- `depcheck.mjs --items-file`: four selected items and their two page homes passed dependency and cycle checks. `fwdcheck.mjs --items-file`: same selection passed. `manifest-deps.mjs`: 4 items, 0 missing `deps`, 0 errors.
- Scoped `dependencyLevels` on the current batch-1 manifest returned `def...=0`, `thm-finite-reynolds...=1`, `thm-mean-fluctuation...=2`, and `cex-mean-does-not-determine...=2`, with no errors.
- Both page bodies were confirmed empty; no `page_layout` metadata was authored. The engine owns that later layout flag.

`research/fluid-dynamics-all-47-2026-10-23-batch-1.cross-batch-dependencies.json` is the required empty JSON array: batch 1 has no cross-batch edges. Same-pair supplier edges and the B-to-A page edge remain in the manifest/page metadata.

`node tools/physics-support/proof-contract-coverage.mjs --run fluid-dynamics-all-47-2026-10-23 --contracts research/fluid-dynamics-all-47-2026-10-23-batch-1.proof-contracts.json` did not pass the entire run frontier: it stopped on `Empty or invalid frontier page inventory fd-mf03` (batch 10). This is outside batch 1 and is not an input to any of these four items. The scoped strict proof-contract check above is clean; this run-wide coverage result remains an owner/other-batch closeout obligation.

One broad check was invoked once through a helper that ignored the requested selection: `extcheck` reported 35,526 corpus items and 0 recorded-not-proved issues. It is not treated as a scoped batch-1 result. The scoped dependency and forward-reference checks are the results relied on here.

Step-1 readiness was recorded with `decision: ready`, `owner: false` for all four IDs in `research/fluid-dynamics-all-47-2026-10-23-step1-<item>.json`. A fresh `step1Decision` currency check returned `closed: true` for all four. Each record includes its actual direct/transitive examined suppliers and current carrier hash. No item is escalated; all local prerequisites, placements, arguments, contracts, and source inputs are present and current.

The Tennekes–Lumley book was an optional supplementary candidate, not a planned or logical supplier. It was read in the browser, but the local fetch checker failed for both HTTPS hosts (TLS issuer errors) and refused the HTTP host. Search then located the independent Johns Hopkins full lecture notes; MIT and Johns Hopkins are the active full-text treatments and both are fetch-stamped. The exact Tennekes retrieval attempts and its non-use are retained above; no item relies on that unstamped source, and no unresolved active source-resolution record remains. The `library/fluid-dynamics-mathematics` category introduction/pathway remains outside this assigned pair scope.

## Next action

Batch 1 authoring is complete. The owner can continue the remaining run batches and resolve the independent run-wide `fd-mf03` inventory/contract-coverage hold before the Step-1 drained gate battery.

## Additional source discovery dispositions

The three-page MIT OpenCourseWare 16.100 Lecture 26 note, “Effect of Turbulent Fluctuations on Mean Flow: Reynolds-Averaging” (David Darmofal, PDF pp. 1–3; <https://ocw.mit.edu/courses/16-100-aerodynamics-fall-2005/8d548fc28cf6762c1815dbd03a0b8f5a_16100lectre26_cg.pdf>), was fully inspected. It presents a long-time mean for steady flow and uses the corresponding vanishing mean-time-derivative assumption; its disposition is not used for the finite time-dependent weighted theorem. The official Cambridge Pope excerpt (10 pages; <https://assets.cambridge.org/97805215/98866/excerpt/9780521598866_excerpt.pdf>) was also inspected; it contained title/branding pages only, so it supplied no claim-level result and is not an active reference.

The supplementary Tennekes–Lumley candidate’s searched alternatives and exact source-fetch outcomes are retained here: queries “Tennekes Lumley A First Course in Turbulence chapter 3 PDF The dynamics of turbulence,” “The dynamics of turbulence Tennekes Lumley chap03.pdf mirror,” and “tennekes_lumley chap03.pdf” found the Hawaii university directory; its `rcfftp` HTTPS host and `ftp` HTTPS host both failed local certificate verification, and its `ftp` HTTP host returned `ECONNREFUSED`. The separate query “Reynolds averaged kinetic energy equations mean fluctuation energy exchange production term lecture notes PDF” found the Johns Hopkins Chapter VIb notes, which provide an independently inspected, fetch-stamped treatment. Tennekes–Lumley is not a planned supplier, current citation, or logical dependency. The alternative local arguments remain complete in the carriers: the definition is self-contained with no deps; the finite Reynolds theorem proves steps 1.1–4.1 from the definition; the energy theorem proves steps 1.1–4.1 from the finite Reynolds theorem; and the B counterexample proves steps 1.1–3.1 from the finite Reynolds theorem. No mathematical coverage was waived.

The Tennekes–Lumley candidate’s source-level dispositions were: §3.1 mean-flow energy/stress deformation and §3.2 fluctuation-energy/opposite-signed transfer were read as contextual checks, but are not active harvest rows after the fetch failures; the local `thm-fdmath-mean-fluctuation-energy-transfer` proof derives both balances completely. The special steady homogeneous pure-shear production-equals-dissipation reduction is outside this batch’s hypotheses and conclusion. The MIT 16.100 three-page lecture’s long-time steady-average derivation is likewise out of scope for the finite, time-dependent theorem. These candidate readings are not logical premises or declared dependencies. The active MIT 12.820 and Johns Hopkins full lecture-note results and their dispositions are the ones recorded in `batch-1.coverage.json`.

All four carriers now record `verification.precheck: pass` as format evidence. This is not an independent proof audit or acceptance stamp. The current Step-1 readiness hashes remain closed after that verification-only metadata addition.
