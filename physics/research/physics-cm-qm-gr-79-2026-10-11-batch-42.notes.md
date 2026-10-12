# Batch 42 notes — Qm Math Magnetic And Detection

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **42**, covering the
single pair `qm-math-magnetic-and-detection` (A, order 163) and
`qm-math-magnetic-and-detection-examples` (B, order 164), category
`non-relativistic-quantum-mechanics-mathematics`, library `mathematics`.
Everything on both pages is mathematics (`domain: mathematics`); no physical
postulate, measurement model or empirical claim is made anywhere in the batch.

Read first: root `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design section `research/plan-non-relativistic-quantum-mechanics-track.md`
L2684ff with the reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
and proof modules M27/M29/M50 of `scaffold/mathematical-prerequisites.md`, and
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 42: level 3, requires batches 37 and 38).

## Inventory

- 15 A items on `qm-math-magnetic-and-detection`
  (manifest `dependency_level` in parentheses):
  1. `def-nrqm-magnetic-and-detection-position-and-momentum-operators` (0) —
     batch-local prerequisite, not in the reservation.
  2. `lem-nrqm-magnetic-and-detection-weak-product-rule` (0) — batch-local
     prerequisite, not in the reservation.
  3. `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint` (1) —
     batch-local prerequisite, not in the reservation.
  4. `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` (2) —
     batch-local prerequisite, not in the reservation.
  5. `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator` (3)
  6. `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` (3)
  7. `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` (4)
  8. `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation` (0)
  9. `thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws` (4)
  10. `thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty` (1)
  11. `thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty` (3)
  12. `thm-nrqm-magnetic-and-detection-galilean-covariance` (4)
  13. `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws` (2)
  14. `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale` (2)
  15. `thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force` (3)
- 3 B items on `qm-math-magnetic-and-detection-examples`:
  `ex-nrqm-magnetic-and-detection-gauge-phase-units` (4),
  `ex-nrqm-magnetic-and-detection-finite-dark-bin-probability` (5),
  `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error` (4).
- Carriers `library/non-relativistic-quantum-mechanics-mathematics/qm-math-magnetic-and-detection.md`
  and `...-examples.md`; manifest
  `research/physics-cm-qm-gr-79-2026-10-11-batch-42.pages.json`; contracts
  `research/physics-cm-qm-gr-79-2026-10-11-batch-42.proof-contracts.json`;
  coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-42.coverage.json`;
  cross-batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-42.cross-batch-dependencies.json`.

## Design conflicts and deviations (for Step-3 adjudication)

1. **`requires` list: reservation versus plan, and the validated reduction.**
   The reservation lists `requires: [qm-math-composites, qm-math-oscillator,
   qm-math-orbital-and-spin, qm-math-intervals-and-contacts]`; the design
   section and `plan-spec.json` declare `[qm-math-intervals-and-contacts,
   qm-math-orbital-and-spin]`. The plan controls this run, and the direct
   `composites`/`oscillator` edges are reached transitively through those two
   pages, so the A page requires exactly `[qm-math-orbital-and-spin,
   qm-math-intervals-and-contacts, sobolev-poincare-and-morrey-inequalities]`.
   The third entry is demanded by `validate-plan.mjs` (`undeclared-prereq`:
   `lem-weak-product-rule-for-bounded-sobolev-functions` reaches the published
   page `sobolev-poincare-and-morrey-inequalities` through
   `lem-nrqm-magnetic-and-detection-weak-product-rule`); it is declared in
   `plan-spec.json` and published earlier. The B page requires
   `[qm-math-magnetic-and-detection, improper-and-parameter-dependent-multiple-integrals]`,
   the second entry demanded by `validate-plan.mjs` through
   `thm-gaussian-integral` in `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error`.
   An earlier construction state had copied the full 30-page carrier list into
   `requires`, which produced 49 `redundant-prereq` warnings; the run-level
   convention is a transitive reduction and the manifest was reduced to the
   three-item list above (carrier and manifest agree), after which
   `validate-plan.mjs` reports zero batch-42 findings and zero redundant-prereq
   warnings for this batch.
2. **Reservation IDs have no kind prefix.** Every reserved id
   (`nrqm-magnetic-and-detection-…`) is preserved in the item's `aliases`
   array; production ids carry the kind prefix (`def-`, `lem-`, `thm-`, `ex-`).
3. **Four batch-local prerequisite items added to the A page** (the reservation
   A list has 11 items; the batch has 15). The four are the two definitions and
   two lemmas above; each is a prerequisite of reserved items, holds no
   physical content, and is marked `inventory_expansion_required: true` in the
   manifest. All 11 reserved A titles and all 3 reserved B titles are present.
4. **Reservation `claim_deps` are research-level, not production dependencies.**
   The reservation attached the same composite dependency list
   (`nrqm-composites-weak-form-robertson-uncertainty`,
   `nrqm-composites-real-multipliers-and-free-bounded-potential-operators`,
   `nrqm-composites-nuclear-bounded-cyclicity`,
   `nrqm-intervals-and-contacts-dirichlet-diagonal-domain-identification`) to
   every A item. The production `deps` arrays are the actual mathematical
   prerequisites of the authored arguments (the used clauses of those suppliers
   are recorded edge by edge in the cross-batch input); no reservation scope was
   narrowed and no reserved result was dropped.
5. **B-item dependencies expanded beyond the reservation.** The three examples
   depend on the A items they exercise and on their own analytical suppliers
   (`thm-gaussian-integral`, `thm-sine-and-cosine-derivatives`, the BIPM SI
   convention, …); these additions are recorded in the manifest and coverage.

## Mathematical repairs made during construction

The batch is authored mathematics, so correctness was checked against the
written proofs and the cited suppliers rather than against the design prose.
Repairs made in this session:

1. **Galilean covariance (`thm-nrqm-magnetic-and-detection-galilean-covariance`):
   false initial-value clause and two sign errors.**
   (a) As drafted, clause (b) claimed `v(0)=u_0` for
   `v(t)=B_u(t)e^{-itK/\hbar}u_0`, but `B_u(0)=M_{e^{i(m/\hbar)u\cdot x}}\ne I`,
   so `v(0)=e^{i(m/\hbar)u\cdot x}u_0` in general. The clause is now
   `s`-parametrised:
   `v(t)=B_u(t)e^{-i(t-s)K/\hbar}B_u(s)^{-1}u_0` with `v(s)=u_0`, and the
   uniqueness clause uses the same initial value `w(s)=u_0`; clause (c)'s
   `U_u(t,s)` family and clause (d) are unchanged.
   (b) The [F2] phase derivative was evaluated with the wrong sign
   (`+im|u|^2/2\hbar`); the gauge supplier gives
   `i(\partial_t\varphi)e^{i\varphi}` and `\partial_t\varphi=-m|u|^2/2\hbar`,
   so the derivative is `-(im|u|^2/2\hbar)M_{e^{i\varphi}}`.
   (c) Step 1.2's fixed-vector identities were wrong: the correct pair, proved
   there by the cocycle identity `B_u(t+h)=B_u(t)e^{-i\lambda h}T_{uh}`,
   `\lambda=m|u|^2/2\hbar`, is
   `d/dt[B_u\psi]=i\lambda B_u\psi-u\cdot\nabla(B_u\psi)` and
   `d/dt[B_u^{-1}\eta]=i\lambda B_u^{-1}\eta+u\cdot\nabla(B_u^{-1}\eta)`
   (the `u\to-u` substitution is legitimate because `B_{-u}(t)=B_u(t)^{-1}`
   exactly). [F4] now states the translation difference-quotient identity
   `(T_{uh}\psi-\psi)/h\to-u\cdot\nabla\psi` in `L^2` (classical chain rule for
   smooth classes, extended by `C_c^\infty` density and the isometry bound),
   and the transported-gradient identity for `W^{1,2}`; steps 2.1-2.2 now
   record the product rules and the explicit `D(K)`-uniqueness computation
   `F(t)=e^{-i(t-s)K/\hbar}\rho(t)`, `F'=0`. The displayed equations of steps
   2.1/2.2 were checked term by term and are correct once 1.2 is repaired.
2. **Gauge transported propagator
   (`thm-nrqm-magnetic-and-detection-gauge-transported-propagator`), step 3.2.**
   The displayed derivative of `F(t)=U(s-t)\varphi(t)` had the wrong sign
   (`-(i/\hbar)U(s-t)K\varphi`); with
   `d/d\tau U(\tau)=-(i/\hbar)KU(\tau)` one has
   `F'(t)=+(i/\hbar)U(s-t)K\varphi(t)+U(s-t)\varphi'(t)
   =U(s-t)((i/\hbar)K\varphi-(i/\hbar)K\varphi)=0`
   using `\varphi'=-(i/\hbar)K\varphi` and `U(\tau)K=KU(\tau)` on `D(K)`.
3. **Maximal-domain uncertainty
   (`thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty`).**
   Added the explicit fact [F9] for the covariance theorem (previously cited
   inline only) and cited it at steps 7.1 and 8.1, which both states the exact
   clause used and satisfies the proof-contract citation rule.
4. **Proof contracts.** The contract file now covers all 18 items (the two
   definitions have minimal entries with fully item-specific boundary
   dispositions), duplicates of repeated fact/source citations were removed,
   every step declares nonempty inputs, and the maximal-domain shotgun-bracket
   warning was removed by citing [F9] at the step that uses it. The definition
   boundary audit's one remaining "contradicted" candidate is a heuristic false
   positive: `def-…-magnetic-schrodinger-operator` contains the finite sum
   `\sum_{j=1}^3`, and the row's reason says exactly that no empty index set can
   arise.
5. **House display format.** 16 items hard-wrapped `$$…$$` display blocks;
   `fix-multiline-display.mjs` joined them to the one-source-line form without
   touching any character of the mathematics (`rendercheck` then passes).
6. **Earlier authoring-pass repairs carried in the carriers**: depcheck
   cited-not-in-deps fixes (forward wikilinks unlinked or deps added) and the
   replacement of a fabricated-looking OCW reference in
   `ex-…-finite-dark-bin-probability` by the Teschl treatment; the contract
   regeneration preserved these.

## Sources

Nine sources are recorded across the pair; two independent treatments
(Teschl and Binney–Skinner), both full book-length treatments, back the A page,
and every A item cites a book or full lecture-note set.

- G. Teschl, *Mathematical Methods in Quantum Mechanics*, 1st ed. 2009,
  `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf` —
  Sec. 2.1, 2.3, 3.1–3.3, 5.1–5.2, 6.3–6.5, 7.1, 7.8 (fetch-verified
  full text).
- H. Brezis, *Functional Analysis, Sobolev Spaces and PDE*, Springer 2011,
  `https://www.math.toronto.edu/almut/Brezis.pdf` — Ch. 8, Sec. 9.2
  (fetch-verified).
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*,
  `https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf` —
  Sec. 1.4, 2.4, 3.2–3.6, Ch. 7, 13 (fetch-verified).
- J. Kinnunen, *Sobolev Spaces*, Aalto lecture notes,
  `https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf` — Ch. 2,
  Lemma 2.1 (fetch-verified).
- MIT OCW 8.05 F13 Ch. 5 (uncertainty), Ch. 6 (quantum dynamics), Ch. 9
  (angular momentum) chapter PDFs, and BIPM SI brochure 9th ed. Ch. 2 —
  all fetch-verified.
- **Dead URL recovery (documented drop).** The MIT OCW "Chapter 4 'The Time
  Evolution of a Quantum System'" URL in
  `thm-…-conserved-spectral-probability-laws` returned HTTP 404 on the initial
  attempt and on five recorded retries (six recorded attempts). Web searches
  established that MIT 8.05 F13 has no such chapter; the conservation content
  sits in Chapter 6 "Quantum Dynamics", Sec. 2.1 "Unitary time evolution"
  (pp. 10–17, conservation of the norm) and Sec. 3.2 "Heisenberg equation of
  motion" (pp. 20–22, operators conserved iff they commute with the
  Hamiltonian), which was fetched in full (`mutool` text extraction,
  pp. 10–22) and is now cited by its live URL. The original source is retained
  in the coverage file with `source_resolution.status: dropped`,
  `decided_by: step-1-scaffolder`, `confidence: certain`, the six attempts, the
  two searches, and an alternative argument with declared dependencies. The
  item's proof is complete from its mathematical deps and does not depend on the
  dropped URL.
- Every source has a locator and a disposed harvest in the coverage file
  (`coverage-checklist`: 2 pages, 55 harvested results, 0 errors, 0 warnings);
  `source-fetch-check` reports 12/12 resolved (11 fetch stamps, 1 documented
  drop).

## Dependency levels (as labelled in the manifest)

- Level 0: `def-…-position-and-momentum-operators`, `lem-…-weak-product-rule`,
  `thm-…-smooth-local-continuity-calculation`.
- Level 1: `lem-…-momentum-operators-self-adjoint`, `thm-…-covariance-refined-uncertainty`.
- Level 2: `def-…-magnetic-schrodinger-operator`, `thm-…-conserved-spectral-probability-laws`,
  `thm-…-graph-domain-ehrenfest-and-timescale`.
- Level 3: `thm-…-bounded-coefficient-magnetic-operator`,
  `thm-…-gauge-h2-domain-preservation`, `thm-…-maximal-domain-position-and-momentum-uncertainty`,
  `thm-…-conditional-stern-gerlach-force`.
- Level 4: `thm-…-gauge-transported-propagator`, `thm-…-coherent-versus-mixed-bin-laws`,
  `thm-…-galilean-covariance`, `ex-…-gauge-phase-units`, `ex-…-preparation-spread-versus-error`.
- Level 5: `ex-…-finite-dark-bin-probability`.
- `item-dependency-levels.mjs check --run …` reports no batch-42 finding.
- Batch level 3, requires batches 37 and 38; all reviewed edges to those
  batches are recorded `verified` in the cross-batch input, and the refreshed
  run ledger lists batch 42 as reviewed with no orphaned review.

## Completion checks (final state)

- `tsx-run.mjs tools/physics-support/precheck.mts` (all 18 items):
  16 checked, 0 failing (the two definitions are not proof-bearing).
- `proof-layout.mjs` (all 18 items): 18 items, 94 steps, 0 defects.
- `rendercheck.mjs` (both pages + 18 items): OK — no wikilink in math, no
  nested/unbalanced delimiters, no multiline display, all math parses under
  KaTeX, frontmatter parses.
- `depcheck.mjs --items-file` (all 18): OK, no missing/circular/forward deps.
- `content-policy.mjs research/…-batch-42.pages.json`: 18 scoped items,
  0 errors, 0 warnings.
- `proof-contract.mjs --strict research/…-batch-42.proof-contracts.json`:
  18/18 items checked, 0 errors, 0 warnings.
- `boundary-audit.mjs` on the contracts: no template-reuse cluster; one
  "contradicted" candidate on the finite-sum definition (heuristic false
  positive, disposition explicit in the row).
- `validate-plan.mjs research/plan-spec.json --run …`: **zero batch-42
  findings**; zero redundant-prereq warnings for these pages. The run-level
  FAIL is produced by other batches only (below).
- `coverage-checklist.mjs research/…-batch-42.coverage.json`: 2 pages,
  55 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage …` (check mode): 12/12 sources resolved
  (11 fetch stamps, 1 documented drop).
- `manifest-deps.mjs`: 18 items, 0 normalized, 0 errors.
- `manifest-integrity.mjs --run …`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `extcheck.mjs`: OK — 0 recorded-not-proved items and none resting on them.
- `fwdcheck.mjs`: 0 findings on any batch-42 item (all 18 show `inherited`;
  no open forward references, 370 closed, 55 load bearing).
- `item-dependency-levels.mjs check --run …`: 0 batch-42 findings.
- `frontier-dependency-ledger.mjs refresh --run …`: batch 42 reviewed, no
  orphaned reviews.
- `audit-manifest.mjs research/…-batch-42.pages.json`: 214 relationships over
  18 items, 13 `unresolved` cross-batch edges — all of them the batch-35/37/38
  draft suppliers listed (and individually evidenced) in the cross-batch input.
  The same condition holds for the sibling batches at this stage (batch 38: 10,
  batch 37: 22), because those suppliers are still drafts; it is the expected
  Step-1 state and is recorded here rather than hidden.
- `proof-contract-coverage.mjs --run …`: fails on another batch's empty
  scaffold inventory (`cm-math-numerical`), not on batch 42.
- Dispatch note on the ledger brief: `../briefs/tasks/frontier-dependency-ledger.md`
  in this checkout carries entries for the unrelated frontier-44 run only and
  none for `physics-cm-qm-gr-79-2026-10-11`; the mechanism actually used by the
  sibling batch-35/37/38 inputs of this run is the run-level
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
  (refreshed with the batch-42 rows, batch 42 listed under `reviewed_batches`,
  no orphaned reviews).

## Unresolved findings handed to the owner

1. **Repo-wide, not batch 42.** `validate-plan.mjs` FAIL (8 errors) is caused
   by `cm03-momentum-work-and-energy-balances(-examples)` (3 errors) and
   `qm-math-coulomb` (2 errors), plus 3 further cm03/qm rows; `fwdcheck.mjs`
   FAIL (12,559 `forward-undeclared` findings) and
   `item-dependency-levels.mjs check` (106 `empty scaffold inventory` errors)
   are likewise entirely on other pages. All three were failing before this
   batch and none names a batch-42 page or item.
2. **Dead-source history.** The fabricated MIT OCW Chapter 4 URL is preserved
   with a complete drop record in the coverage file (see Sources). Owner
   scrutiny of the replacement (MIT 8.05 F13 Ch. 6, Sec. 2.1/3.2) is welcome,
   though the item's proof does not depend on it.
3. **Cross-batch draft suppliers.** The 13 `audit-manifest` unresolved edges
   are the in-run draft suppliers from batches 35/37/38 reviewed `verified` in
   `research/…-batch-42.cross-batch-dependencies.json`; they resolve when those
   batches publish or when the run applies its owner-authorised draft context.
   No batch-42 item depends on a supplier outside the run's declared order.
4. **BIPM source.** `ex-…-gauge-phase-units` uses the SI brochure only for the
   external dimension-vector convention `[q]`, `[\chi]`, `[\hbar]`; the example
   explicitly labels this bookkeeping as a convention rather than a
   mathematical consequence, and the B page's other three sources carry its
   mathematics.
5. **Boundary-audit false positive** on `def-…-magnetic-schrodinger-operator`
   [empty]: raised by the `\sum` heuristic; the row's reason states the finite
   index set, and the definition itself has no empty-family construction.
6. **Readiness is not approval.** The Step-1 decisions below record that the
   complete authored carriers, page placements and proof contracts exist; they
   are not independent mathematical review, which is Step 2/3's.

## Readiness records

Recorded with
`node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies <JSON> --reason <text>`
after the final carrier writes (see `step1-decisions.mjs check --run …`):

- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` — ready
- `def-nrqm-magnetic-and-detection-position-and-momentum-operators` — ready
- `ex-nrqm-magnetic-and-detection-finite-dark-bin-probability` — ready
- `ex-nrqm-magnetic-and-detection-gauge-phase-units` — ready
- `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error` — ready
- `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint` — ready
- `lem-nrqm-magnetic-and-detection-weak-product-rule` — ready
- `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator` — ready
- `thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws` — ready
- `thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force` — ready
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws` — ready
- `thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty` — ready
- `thm-nrqm-magnetic-and-detection-galilean-covariance` — ready
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` — ready
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` — ready
- `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale` — ready
- `thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty` — ready
- `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation` — ready

`step1-decisions.mjs check --run physics-cm-qm-gr-79-2026-10-11` reports no open
work for any batch-42 item or page; the remaining open work in the run belongs
to other batches (empty scaffold inventories and their item readiness records).
