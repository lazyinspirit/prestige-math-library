# Batch 40 notes — Qm Math Controlled Dynamics

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **40**, covering the
single pair `qm-math-controlled-dynamics` (A, order 159) and
`qm-math-controlled-dynamics-examples` (B, order 160), category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Everything on both pages is mathematics (`domain: mathematics`); no physical
interpretation, measurement model or empirical claim is made. The binding
owner direction (`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`),
the design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L1596ff (section "Qm Math Controlled Dynamics"), the source inventory
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`,
`SCHEMA.md`, `CLAUDE.md`, `WORKFLOW.md` and the batch dependency levels were
read first; no approved claim was dropped.

## Inventory

45 items: 42 A items and 3 B items, all authored as complete conditional
mathematics on this page.

- Dyson / interaction picture: `thm-...-norm-dyson-series-and-uniqueness`,
  `lem-...-dyson-truncation-bound`, `thm-...-strong-bounded-interaction-picture`,
  `prop-...-first-order-amplitude-tail`.
- WKB / Airy: `thm-...-allowed-region-wkb-coefficient-equation`,
  `thm-...-wkb-explicit-error`, `thm-...-airy-contour-and-fresnel-normalization`,
  `thm-...-airy-envelopes-and-asymptotic-coefficients`,
  `thm-...-liouville-turning-point-transformation`,
  `thm-...-stable-weighted-airy-volterra-connection`,
  `thm-...-two-turn-barrier-tunnelling-error`.
- Cook / scattering existence: `thm-...-cook-domain-criterion`,
  `thm-...-cook-isometry-and-intertwining`, `thm-...-free-gaussian-dispersive-kernel`,
  `thm-...-l2-potential-infinitesimal-kinetic-bound`,
  `thm-...-concrete-three-dimensional-cook-existence`,
  `thm-...-quadratic-free-packet-decay`, `thm-...-mellin-incoming-and-outgoing-propagation`,
  `thm-...-compact-scattering-defects`, `thm-...-compact-support-asymptotic-completeness`,
  `thm-...-resolvent-tail-short-range-completeness`.
- Perturbation / adiabatic / RWA: `thm-...-contour-perturbation-projection`,
  `thm-...-simple-level-reduced-resolvent-coefficients`,
  `thm-...-analytic-perturbation-remainder`, `thm-...-degenerate-feshbach-error`,
  `thm-...-driven-oscillator-common-domain`, `thm-...-explicit-unbounded-oscillator-propagator`,
  `thm-...-common-domain-nonautonomous-evolution`, `thm-...-finite-gapped-adiabatic-estimate`,
  `thm-...-unbounded-gapped-atomic-adiabatic-estimate`, `thm-...-two-level-rabi-model`,
  `thm-...-rotating-wave-finite-time-error`.
- UCP / radial / Fredholm: `thm-...-radial-carleman-estimate`,
  `thm-...-bounded-potential-weak-ucp`, `thm-...-no-positive-compact-potential-eigenvalues`,
  `thm-...-outgoing-fredholm-invertibility`.
- Coulomb / Dollard / stationary: `thm-...-dollard-integrable-remainder`,
  `thm-...-dollard-channel-completeness`, `thm-...-stationary-outgoing-integral-and-flux`,
  `thm-...-controlled-born-amplitude-error`, `thm-...-stationary-dynamical-sector-identification`,
  `thm-...-partial-wave-cross-section-convergence`.
- B examples: `ex-nrqm-controlled-dynamics-gap-closing-failure`,
  `ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation`,
  `ex-nrqm-controlled-dynamics-long-time-rwa-limitation`.

Manifest: `research/physics-cm-qm-gr-79-2026-10-11-batch-40.pages.json`
(42 + 3 items, each labelled with `dependency_level`); carriers
`library/non-relativistic-quantum-mechanics-mathematics/qm-math-controlled-dynamics.md`
and `.../qm-math-controlled-dynamics-examples.md`; contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-40.proof-contracts.json`;
coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-40.coverage.json`;
cross-batch review
`research/physics-cm-qm-gr-79-2026-10-11-batch-40.cross-batch-dependencies.json`.

## Design conflicts and deviations (for Step-3 adjudication)

1. **The A page's `requires` list is the plan plus five published pages.** The
   dispatch and `plan-spec.json` (order 159) declare `requires: [qm-math-coulomb]`;
   the authored page additionally requires
   `the-baire-principles-of-functional-analysis` (host of `thm-bounded-inverse-theorem`,
   used by the common-domain evolution), `goursat-and-cauchys-theorem-in-a-convex-domain`
   (`thm-cauchy-integral-formula-circle`, used by the contour/projection, perturbation
   and adiabatic items), `fourier-restriction-and-the-stein-tomas-theorem`
   (`lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`, used by the
   free-packet decay), `analyticity-liouville-and-morera`
   (`cor-cauchy-estimates-taylor-coefficients`, used by the analytic perturbation
   remainder) and `interior-and-boundary-sobolev-elliptic-regularity`
   (`thm-interior-h-two-regularity-for-divergence-form-equations`, used by the
   outgoing Fredholm, stationary-flux and partial-wave items). All five are declared
   plan pages of earlier order; without the entries `validate-plan` reports them as
   unincluded pages. `splice-plan.mjs --run ... --batch 40 --dry-run` reports
   `batch 40 WITHHELD — 1 requires edge(s) await adjudication` and lists exactly
   these five edges (the path is `--accept-requires` after the Step-3 gate closes).
   This batch does not edit `plan-spec.json`.
2. **Owner-level plan gap: an imported supplier page is absent from the plan.**
   Five consumer items depend on the read-only imported items
   `thm-l-two-kernels-give-hilbert-schmidt-operators` and
   `thm-hilbert-schmidt-operators-are-compact`, whose home page in the library is
   `square-integrable-kernels-and-hilbert-schmidt-compactness` — a page listed in
   `research/math-imports.json` but absent from `plan-spec.json`. Consumers:
   `thm-...-outgoing-fredholm-invertibility`,
   `thm-...-compact-scattering-defects`, `thm-...-resolvent-tail-short-range-completeness`
   (both items each), `thm-...-stationary-outgoing-integral-and-flux` and
   `thm-...-controlled-born-amplitude-error` (`thm-l-two-kernels-...`).
   Consequences in this batch: `validate-plan` reports 1 `undeclared-prereq`
   row (`page qm-math-controlled-dynamics has an item depending on
   square-integrable-kernels-and-hilbert-schmidt-compactness ...`), the row is the
   only remaining `validate-plan` finding run-wide, and `fwdcheck` reports 7
   `forward-undeclared` rows on four of those items because the absent page is
   assigned order #Infinity. SCHEMA.md forbids re-authoring an imported item
   ("Shared mathematics uses imported canonical IDs; never re-author an imported
   item"), and the links are in `deps`, so they cannot move to `forward_refs`
   (`forward-in-deps`). Smallest fix: declare the imported page as a `P` entry in
   `plan-spec.json` (reading order before 159) so the manifest `requires` edge can
   be admitted, or record an owner scope decision licensing consumption of
   published imported pages without a plan entry. This is the same class of
   finding batch 11 recorded for other absent supplier pages; nothing about the
   mathematics is missing — the cited items are published, read at their exact
   statements, and used in the proofs.
3. **Reservation identifiers and one superseded title.** The design reservations
   spell items `nrqm-controlled-dynamics-*`; SCHEMA.md requires the kind prefix,
   so all items carry prefixed IDs with the reservation spelling kept in
   `aliases` and the manifest `reference` fields. The scaffold inventory lists
   "Draft stationary-phase packet application" in the slot where the current
   track design (which controls) lists "Quadratic free-packet decay"; the authored
   item is `thm-nrqm-controlled-dynamics-quadratic-free-packet-decay`, whose
   proof realises the reservation's stationary-phase content. The reservation's
   and the manifest's counts agree (42 A, 3 B).
4. **Dependency expansion beyond the reservation `claim_deps`.** The authored
   items consume the reservation chains plus the published/in-run mathematical
   suppliers their proofs actually cite (Teschl/Plancherel/Kato–Rellich/Sobolev
   items, the spherical-harmonic family and generator items, the Coulomb radial
   and spectral items, the oscillator ladder-domain and coherent-evolution items,
   the Fredholm/compact-operator items). All additions are declared same-batch or
   published mathematical suppliers; no physics item is consumed by any path.

## Mathematical repairs made during construction

Every repair was applied to the item file, re-checked with `precheck.mts` and
`proof-layout.mjs`, and reflected in the proof contracts and (where dependencies
changed) in the manifest, dependency levels and cross-batch inputs.

1. `thm-...-no-positive-compact-potential-eigenvalues`, step 2.1: the original
   deduction treated each reduced radial coefficient $\alpha_{lm}$ as a function
   on $\mathbb R^3$ satisfying $\Delta\alpha_{lm}=(V-k^2)\alpha_{lm}$, which is
   false for a non-radial compactly supported $V$. Repaired: step 1.1 now proves
   non-integrability of a nonzero exterior coefficient from the period average
   $(A_{lm}^2+B_{lm}^2)/(2k^2)$ of $|\alpha_{lm}|^2$ (so $\int|\alpha_{lm}|^2dr$
   is unbounded), completeness of the spherical harmonics then makes $\psi$
   vanish a.e. on the exterior open set $\{|x|>R\}$, and the weak unique
   continuation theorem is applied to $\psi$ itself (which solves
   $\Delta\psi=(V-k^2)\psi$, $V-k^2\in L^\infty_{\mathrm{loc}}$). [F1] was
   corrected to state the reduced radial equation.
2. `thm-...-bounded-potential-weak-ucp`, step 1.1: the absorbed constant was
   wrong by a factor $R^2$; after the geometric absorption the correct bound is
   $\|r^{-\tau}u\|_2\le\frac4s\|r^{-\tau+2}e\|_2$ for integers $s\ge4MR^2$,
   giving $\|\psi\|_{L^2(B_\rho)}\le\frac4s(\rho/(R/2))^{\tau}(R/2)^2\|e\|_2\to0$
   as $s\to\infty$.
3. `thm-...-outgoing-fredholm-invertibility`, [F3] and step 1.2: the vanishing
   far-field amplitude gives $\psi=O(r^{-2})$, hence $\psi\in L^2(\mathbb R^3)$
   and $\psi\in H^2(\mathbb R^3)$ by elliptic regularity — the previous text
   claimed compact support, which $A=0$ does not give by itself. Step 1.2 now
   cites [F2] for the elliptic-regularity upgrade and the absence-of-positive-
   eigenvalues theorem by name; the kernel/injectivity/Fredholm skeleton is
   unchanged.
4. **Dependency hygiene.** Three items declared
   `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`
   without using it anywhere in statement, facts or proof
   (`thm-...-contour-perturbation-projection`, `thm-...-cook-domain-criterion`,
   `thm-...-cook-isometry-and-intertwining`; the first two statements are
   abstract $H_0,H$ theorems, the third reuses only the Cook criterion). The
   unused declarations were removed from items and manifest, and dependency
   levels were recomputed: seven items were relabelled
   (`contour-perturbation-projection` 1→0, `cook-domain-criterion` 1→0,
   `cook-isometry-and-intertwining` 2→1, `simple-level-reduced-resolvent-coefficients`
   2→1, `degenerate-feshbach-error` 2→1, `analytic-perturbation-remainder` 3→2,
   `ex-...-continuum-contribution-in-perturbation` 3→2).
5. **Missing dependency declarations.** Three `cited-not-in-deps` warnings named
   real load-bearing citations: the driven oscillator's (c) adopts the regularity
   hypothesis of `thm-...-common-domain-nonautonomous-evolution`, the free
   Gaussian kernel's statement uses the principal branch of the complex
   logarithm (`def-complex-logarithms-principal-logarithm-and-complex-powers`),
   and the compact-scattering item cross-reads the Cook existence clauses
   (`thm-...-concrete-three-dimensional-cook-existence`). All three are now
   declared deps (levels unchanged). Two warnings remain, both **closed reverse
   references** that cannot become deps without a cycle:
   `thm-...-concrete-three-dimensional-cook-existence` cites the later
   `thm-...-compact-support-asymptotic-completeness`, and
   `thm-...-simple-level-reduced-resolvent-coefficients` cites the later
   `thm-...-analytic-perturbation-remainder`; each is recorded, not "fixed".
6. `thm-...-partial-wave-cross-section-convergence`, step 2.1: the use of the
   orthogonality of the Legendre polynomials now cites its supplier
   `thm-nrqm-orbital-and-spin-associated-polynomial-normalization` inline, so the
   in-run cross-batch edge is traceable at the point of use.

## Sources

- Coverage: `research/physics-cm-qm-gr-79-2026-10-11-batch-40.coverage.json`.
  `source-fetch-check.mjs --coverage ... --stamp` fetches the complete bodies of
  the two pages' sources: Teschl *Mathematical Methods in Quantum Mechanics*
  (full PDF), Buehler–Salamon *Functional Analysis* (ETH notes, full PDF), Brezis
  *Functional Analysis, Sobolev Spaces and PDE* (full PDF), Fitzpatrick *Quantum
  Mechanics* (UT Austin, full PDF), and DLMF Sections 9.2, 9.5 and 9.7. Check
  mode: **9/10 fetch-verified, 10/10 resolved, 1 documented drop** (below). Two
  independent treatments per A page: the textbook/monograph strand (Teschl,
  Brezis, DLMF) and the lecture-note strand (Buehler–Salamon, Fitzpatrick); the B
  page is carried by Fitzpatrick plus Teschl.
- DLMF: the chapter-index URL `https://dlmf.nist.gov/9` answers with only 2041
  characters of extracted text (below the tool's 2048-character floor), while the
  section pages carry the mathematics (9.2: 11250 chars, 9.5: 6246 chars, 9.7:
  21674 chars). The single chapter entry was therefore replaced by three
  stamped section entries (9.2 differential equation, 9.5 integral
  representations, 9.7 asymptotics and connection formulas), and the item
  references were repointed to the section URLs; no claim was dropped.
- Jerison–Kenig, *Unique continuation and absence of positive eigenvalues for
  Schrödinger operators*, Ann. of Math. 121 (1985) 463–494: **dropped** with a
  complete `source_resolution` record on the DOI entry. The JSTOR DOI landing
  page `https://doi.org/10.2307/1971319` answers with a 303-character access wall;
  the initial failure and five retries are recorded, and the searches (recorded
  in the coverage file) found only JSTOR/Semantic Scholar metadata, modern
  secondary treatments (e.g. arXiv:1903.04021, the 2026 Springer survey
  `10.1007/s44007-026-00218-9`, itself behind the same kind of wall) and paywalled
  reference lists — no open or author-hosted full text. The paper is cited for
  historical attribution only: the four consuming items
  (`thm-...-radial-carleman-estimate`, `thm-...-bounded-potential-weak-ucp`,
  `thm-...-no-positive-compact-potential-eigenvalues`,
  `thm-...-outgoing-fredholm-invertibility`) each carry a complete conditional
  argument from declared suppliers, and the drop record lists the alternative
  argument and dependency list for each. Several item references had paired the
  Jerison–Kenig title with Teschl's PDF URL; these were corrected to the DOI, and
  the Olver-monograph citations that pointed at DLMF section URLs were retitled
  as DLMF sections actually read (with the monograph named as the classical
  treatment consulted through the DLMF survey).
- `coverage-checklist.mjs`: 2 pages, 33 harvested results, 0 errors, 1 warning
  (`coverage-low-yield` 9/28 on the A page — the expected profile for an A page
  whose items restate and prove source headings inline; batch 39 recorded the
  same class at 9/49).

## Dependency levels (final, as labelled in items and manifest)

Level 0 (5): `allowed-region-wkb-coefficient-equation`,
`common-domain-nonautonomous-evolution`, `contour-perturbation-projection`,
`cook-domain-criterion`, `norm-dyson-series-and-uniqueness`. Level 1 (10):
`dyson-truncation-bound`, `airy-contour-and-fresnel-normalization`,
`cook-isometry-and-intertwining`, `degenerate-feshbach-error`,
`finite-gapped-adiabatic-estimate`, `free-gaussian-dispersive-kernel`,
`l2-potential-infinitesimal-kinetic-bound`,
`simple-level-reduced-resolvent-coefficients`, `two-level-rabi-model`,
`wkb-explicit-error`. Level 2 (9): `ex-...-continuum-contribution-in-perturbation`,
`ex-...-gap-closing-failure`, `airy-envelopes-and-asymptotic-coefficients`,
`analytic-perturbation-remainder`, `concrete-three-dimensional-cook-existence`,
`liouville-turning-point-transformation`, `quadratic-free-packet-decay`,
`rotating-wave-finite-time-error`, `strong-bounded-interaction-picture`.
Level 3 (4): `ex-...-long-time-rwa-limitation`, `first-order-amplitude-tail`,
`mellin-incoming-and-outgoing-propagation`, `stable-weighted-airy-volterra-connection`.
Level 4 (2): `dollard-integrable-remainder`, `two-turn-barrier-tunnelling-error`.
Level 5: `radial-carleman-estimate`. Level 6: `bounded-potential-weak-ucp`,
`driven-oscillator-common-domain`. Level 7:
`explicit-unbounded-oscillator-propagator`,
`no-positive-compact-potential-eigenvalues`. Level 8:
`outgoing-fredholm-invertibility`. Level 9: `compact-scattering-defects`,
`stationary-outgoing-integral-and-flux`. Level 10:
`compact-support-asymptotic-completeness`, `controlled-born-amplitude-error`,
`unbounded-gapped-atomic-adiabatic-estimate`. Level 11:
`dollard-channel-completeness`, `partial-wave-cross-section-convergence`,
`resolvent-tail-short-range-completeness`. Level 12:
`stationary-dynamical-sector-identification`. Levels were recomputed from the
final frontmatter after every dependency change;
`item-dependency-levels.mjs check --run` reports no batch-40 finding (its
remaining errors are other batches' empty scaffold inventories).

## Completion checks (final state)

- `tsx-run.mjs tools/physics-support/precheck.mts` on all 45 items: 45 checked,
  0 failing — all clean.
- `proof-layout.mjs` on all 45 items: 45 items, 135 steps, 0 defects.
- `rendercheck.mjs` on both carriers: OK (no wikilink inside math, no nested or
  unbalanced delimiters, no multiline display block, every math span parses
  under KaTeX, both frontmatter blocks parse).
- `content-policy.mjs` on the batch manifest: 45 scoped items, 0 errors,
  0 warnings.
- `manifest-deps.mjs`: 45 items, 0 errors.
- `manifest-integrity.mjs --run ...`: 158 pages owed, 158 in the manifests, no
  scope drift; both carriers list exactly the manifest items.
- `depcheck.mjs --items-file /tmp/batch40-items.json`: selected item/page checks
  and prerequisite cycle checks passed, with 2 `cited-not-in-deps` warnings, both
  closed reverse references (repair 5 above). No cycle, no missing supplier.
- `validate-plan.mjs research/plan-spec.json --run ...`: exits 1 with exactly
  one finding run-wide, the owner-level imported-page gap of conflict 2
  (`undeclared-prereq` for `square-integrable-kernels-and-hilbert-schmidt-compactness`).
  The five authored `requires` edges of conflict 1 do not appear as findings —
  they are declared pages and are reported only by the splice tool as awaiting
  adjudication.
- `item-dependency-levels.mjs check --run ...`: no batch-40 finding; remaining
  errors are other batches' empty scaffold inventories.
- `batch-dependency-levels.mjs check --run ...`: reports the run digest stale and
  asks for a recompute; batch 40's stored row (`dependency_level: 4`,
  `requires: ["39"]`) matches the actual consumption of batch 39 through the
  `qm-math-coulomb` page edge, and the staleness is caused by other batches'
  concurrent edits. The digest is derived engine metadata and was not rewritten.
- `proof-contract.mjs research/...-batch-40.proof-contracts.json --strict`:
  0 errors, 0 warnings, 45/45 items checked.
- `boundary-audit.mjs` on the same file: no template-reuse cluster, no
  contradicted disposition.
- `coverage-checklist.mjs`: 2 pages, 33 harvested results, 0 errors, 1 warning
  (above).
- `source-fetch-check.mjs --coverage ...`: 9/10 fetch-verified, 10/10 resolved,
  1 documented drop; check mode (no network) passes.
- `citecheck.mjs` on the 45 items: OK.
- `extcheck.mjs`: 27901 items, 0 recorded-not-proved, 0 resting on them.
- `fwdcheck.mjs`: exits 1 on the repo-wide pre-existing findings in other
  workspaces plus the 7 `forward-undeclared` rows of conflict 2 on four batch-40
  items; no other batch-40 forward reference is open.
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed; batch 40 is in
  `reviewed_batches` with 38 edges (1 page edge, 37 item edges), every declared
  in-run cross-batch edge reviewed (`verified` on all 38; after repair 4 the
  retired composite edges are gone and repair 6 makes the partial-wave edge
  traceable at its point of use; no batch-40 orphaned review).
- `step1-decisions.mjs check --run ...`: zero open work rows for any batch-40
  item or page after the readiness records below (the remaining open rows belong
  to other, not-yet-authored batches).

## Unresolved findings handed to the owner

1. The five authored `requires` edges of conflict 1 await the Step-3
   adjudication (`splice-plan.mjs --accept-requires`) before the batch is spliced
   into `plan-spec.json`; this batch leaves the shared plan untouched.
2. The owner-level plan gap of conflict 2 (imported page
   `square-integrable-kernels-and-hilbert-schmidt-compactness` absent from
   `plan-spec.json`; five consumers, one `validate-plan` row, seven `fwdcheck`
   rows) needs an owner/adjudicator decision: declare the imported page as a `P`
   entry, or license published imported suppliers without a plan entry. SCHEMA
   forbids re-authoring the imported items, so no local repair exists.
3. The `coverage-low-yield` warning on `qm-math-controlled-dynamics` (9/28) is
   recorded for the Alpha confirmation the checklist requests.
4. `fwdcheck.mjs` and `batch-dependency-levels.mjs` report pre-existing,
   engine-level conditions elsewhere in the repo/run (forward references in other
   workspaces; a stale run digest whose only differences are other batches'
   rows); none is a batch-40 mathematical defect.
5. Deliberately condensed arguments flagged for Step-2/3 review, with no claim
   resting on an unproved false statement: (i)
   `thm-...-radial-carleman-estimate` [F2] states the polar/logarithmic
   change-of-variables computation and the multiplier factorisation compactly —
   the algebra is elementary but not expanded line by line; (ii)
   `thm-...-outgoing-fredholm-invertibility` [F3] states the far-field expansion
   and the flux identity at claim level (the suppliers are cited and the
   computation is standard, but the boundary-flux estimate is not displayed);
   (iii) `thm-...-dollard-integrable-remainder`,
   `thm-...-compact-support-asymptotic-completeness` and
   `thm-...-stationary-dynamical-sector-identification` invoke standard
   asymptotic-completeness/limiting-absorption steps with the hypotheses explicit
   but the estimates sketched; (iv) the Airy connection proof routes through the
   declared local Airy envelope and Volterra items rather than reproducing DLMF's
   connection derivation.

## Readiness records

All 45 items were recorded `ready` with `step1-decisions.mjs record` **after**
the final item, manifest, carrier, contract, coverage, level and cross-batch
edits, each with its examined dependency list (the final frontmatter `deps` of
the item) and the batch notes above as evidence. No record uses `--owner` and no
escalation record was written; the plan-level findings are recorded here and in
the cross-batch input for the owner and Step 3. Step-1 readiness is an authoring
record, not independent mathematical approval; Step 3 supplies that review.
