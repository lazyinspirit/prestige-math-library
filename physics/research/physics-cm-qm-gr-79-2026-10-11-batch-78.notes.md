# Batch 78 notes — `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` / `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-78, covers 78.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page has 48 locally authored items: 8 definitions, 24 lemmas, 14 theorems, 1
`physics-theorem` and 1 physics remark; the B page has 4 leaf items (2
examples, 2 counterexamples), all mathematics. The two `domain: physics` items
are `pthm-gr-high-regularity-local-development` and
`rem-gr-high-regularity-scope`. No item reports a measurement, apparatus,
sample or statistical inference; there is no empirical content anywhere in the
batch. The physics-theorem is a conditional model deduction from the adopted
postulates (Einstein field law, the selected matter models) with explicitly
stated mathematical hypotheses and idealisations, and the scope remark records
the physical scope and the deferrals.

## Scope built

- A page `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (order 259,
  category `general-relativity`, `library: physics`), 48 items; B page
  `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples` (order
  260), 4 items. Both pages are carried by
  `library/general-relativity/gr-gr14-full-high-regularity-symmetric-hyperbolic-proof.md`
  and `…-examples.md`; the `general-relativity` category file is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-78.pages.json`:
  page order, kind, category and `library` fields agree with the run scaffold;
  item inventories, metadata, dependency roles, dependency levels (0–27 on A,
  3–14 on B) and the `requires` closure (72 pages, reconciled with the library
  carrier frontmatter) were regenerated from the final carriers.
- Design inventory mapping (`research/plan-general-relativity-track.md` L310,
  reservation `GR14`, inventory "Full high-regularity symmetric hyperbolic
  proof; harmonic Einstein reduction/data/constraints/subsidiary/geometric
  uniqueness; selected scalar/fluid/dust PDE", closure "E0–E3"):
  - E0 full high-regularity periodic symmetric hyperbolic proof:
    `def-gr-periodic-torus-and-sobolev-spaces` through
    `thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability`,
    `thm-gr-periodic-symmetric-hyperbolic-smooth-persistence`,
    `lem-gr-finite-speed-independence-of-extension` and
    `thm-gr-local-symmetric-hyperbolic-well-posedness`;
  - E1 harmonic Einstein reduction/data/constraints/subsidiary/geometric
    uniqueness: `def-gr-harmonic-gauge-and-reduced-equations`,
    `lem-gr-reduced-einstein-principal-part`,
    `thm-gr-reduced-einstein-local-existence`,
    `lem-gr-einstein-residual-and-subsidiary-identity`,
    `thm-gr-harmonic-constraint-propagation`,
    `thm-gr-constraint-equations-in-normal-frame`,
    `lem-gr-harmonic-initial-data-construction`,
    `thm-gr-local-geometric-uniqueness`, `thm-gr-local-geometric-development`;
  - E2 selected matter: `lem-gr-scalar-einstein-symmetric-hyperbolic-reduction`
    with `thm-gr-scalar-field-local-evolution`, the barotropic chain
    `def-gr-barotropic-enthalpy-variable` →
    `thm-gr-barotropic-fluid-local-evolution`;
  - E3 dust chain including E3d–E3d.2:
    `def-gr-dust-reduction-variables-and-gauge`,
    `def-gr-dust-electric-magnetic-weyl-variables-and-schouten`,
    `lem-gr-dust-weyl-reconstruction-from-electric-magnetic`,
    `lem-gr-dust-reduced-evolution-equations`,
    `lem-gr-dust-symmetric-hyperbolic-reduction`,
    `def-gr-dust-torsion-and-curvature-residuals`,
    `thm-gr-dust-subsidiary-and-residual-vanishing`,
    `lem-gr-dust-initial-data-and-tilted-initialization`,
    `thm-gr-dust-local-evolution`;
  - closing assembly: `thm-gr-high-regularity-selected-matter-development`,
    `pthm-gr-high-regularity-local-development`, `rem-gr-high-regularity-scope`;
  - B page: `ex-gr-periodic-energy-method-check`,
    `cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves`,
    `ex-gr-fluid-principal-symbol-radiation`,
    `cex-gr-negative-sound-speed-derivative-breaks-evolution`.
- Design budget 78 and the 100-item page cap are respected (48 + 4).

## Design versus plan (conflict recorded)

- The design block for `GR14` declares `requires: ["GR05","GR13"]`; the
  dispatch summary and plan-spec name only
  `gr-gr13-convex-normal-neighborhoods`. `GR05` resolves to
  `gr-einstein-and-matter` (order 241). The current plan controls; the page
  keeps the full design list and therefore requires **both**
  `gr-gr13-convex-normal-neighborhoods` and `gr-einstein-and-matter` (the
  latter is also reached through the item dependencies on the matter-model
  definitions). No claim was narrowed or added: the manifest `requires` is the
  computed transitive closure of the item dependencies plus the two named
  pages, and the library carrier carries the identical 72-entry array.
- The run's owner-authoring direction
  (`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`) was
  read before construction. Its `external_draft_context` list (SR carriers)
  is not used by this batch; the draft GR suppliers this batch consumes
  (`def-gr-perfect-fluid-matter-model`, `def-gr-dust-matter-model`,
  `def-gr-scalar-field-matter-model`, the spacelike-hypersurface and
  global-hyperbolicity carriers of batches 69/75/77) are in-run items of the
  same run and are declared as dependencies with `status: verified` in the
  cross-batch input.

## Dependencies and levels

- Dependency levels follow the engine rule (in-run dependencies only). After
  the repair edits, `item-dependency-levels.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports **no** `dependency_level` mismatch
  for any of the 52 items. The remaining 26 engine errors are other batches'
  empty scaffold inventories (24) and two nrqm label mismatches owned by other
  agents; none names a `gr-gr14` page or item.
- `validate-plan.mjs research/plan-spec.json --run …` treats this page with
  advisory `redundant-prereq` notes only (a page reachable through
  `gr-causal-and-initial-value-boundaries` etc. is also named directly because
  the design and the item inventory name it). Its four remaining errors belong
  to `cm-math-evidence`, `cm-math-chaos`, `qm-math-controlled-dynamics` and
  `qm-state-geometry-examples`.
- Choice accounting: the batch assumes only the Axiom of Countable Choice
  `AC_ω` where needed (the compact-embedding diagonal, the rational diagonal of
  the extraction lemma, the Fourier and measure suppliers); no Dependent
  Choice, no Axiom of Choice and no ultrafilter lemma is assumed or consumed.
  No path from the batch reaches `deferred-set-theory-beyond-choice`, and no
  item consumes a Recorded result to prove its replacement.

## Repair session of 2026-10-11 (this authoring pass)

The initial carriers were complete but four mathematical/proof-quality defects
were found and repaired in Step 1 before the readiness records were written:

1. **Forward reference removed.** `lem-gr-galerkin-compactness` cited the
   published corollary `cor-ascoli-arzela-for-compact-hausdorff-domains` whose
   home page `ascoli-arzela` is absent from `plan-spec.json` and therefore
   renders forward; a load-bearing forward reference is forbidden on a lemma.
   The Ascoli step was replaced by a self-contained locally uniform extraction:
   new items `lem-gr-rational-diagonal-extraction` (countable rational
   diagonal + finite Archimedean net + equicontinuity + completeness) and
   `lem-gr-periodic-sobolev-completeness` (completeness of the periodic
   Sobolev scale via the weighted Fourier isometry), both fully authored,
   proof-contracted and recorded ready. The compactness lemma now states the
   compact embedding for every order `r ≥ 1` and locally uniform
   `H^{s-1}` convergence on compact subintervals of the open interval.
2. **Domain/endpoint inconsistency fixed.** The earlier statement claimed
   uniform convergence on the closed interval `[-T,T]` although the Galerkin
   curves are only defined on the open interval `(-T,T)`. The compactness
   lemma, the limit lemma and the existence theorem now consistently use
   uniform convergence on every compact subinterval of `(-T,T)`; the limit
   lemma proves `C^0((-T,T);H^{s-1})` for the limit.
3. **Weak-* step replaced.** The time-derivative clause of
   `lem-gr-galerkin-limit-is-classical-solution` had invoked an abstract
   weak-* compactness of `L^∞H^{s-1}` without a predual construction in the
   library. It was replaced by: new item
   `lem-gr-galerkin-second-time-derivative-bound` (uniform `H^{s-2}`
   Lipschitz bound for `∂_t u_N`, proved from the projected equation with the
   coercivity, commutator and Sobolev-algebra estimates), the extraction lemma
   applied in the complete space `H^{s-2}`, the exact distributional identity
   from the fundamental theorem of calculus, and Fatou's inequality for the
   weighted Fourier sums to recover the `L^∞H^{s-1}` bound. This is the route
   now written in the item.
4. **Renderer defect fixed.** `thm-gr-local-geometric-uniqueness` contained a
   `\circj` token (from an earlier `\iota`→`j` substitution); it now reads
   `j'\circ j^{-1}` and the whole batch renders.

## Mathematical content, risks and proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-78.proof-contracts.json`
  covers the 43 items with numbered steps (the 8 definitions and the physics
  remark have no proof section), with 304 exact citation quotes, 157 numbered
  step derivations and 344 boundary dispositions (36 checked, the rest
  recorded `not_applicable` with item-specific reasons). `proof-contract.mjs
  --strict` reports 0 errors and 0 warnings.
- Empirical content: none. All statements are conditional mathematical
  claims about the periodic torus, Sobolev spaces, symmetric hyperbolic
  systems and Lorentzian geometry, plus the two `domain: physics` items, whose
  postulates, objects, domains and qualifications are stated explicitly.
- **Highest-risk proof (flagged for Step 3 review):** the E3d dust residual
  chain, in particular `lem-gr-dust-reduced-evolution-equations` (the Weyl
  evolution equations obtained by projecting the Bianchi identity) and
  `lem-gr-dust-initial-data-and-tilted-initialization`. The scaffold
  (`research/gr-repair-2026-10-11/…einstein-pde-proofs.md`, block E3d) records
  a derivative-order/commutator caveat `F_jkl`; the authored item keeps the
  stronger claim under explicitly stated residual conventions (fact `[L1]`
  fixes the projected-residual convention). No claim was weakened and no gap
  was hidden; the chain is surfaced here for the independent reviewer.
- **Schouten-normalisation discrepancy (flagged):** the scaffold block E3d
  used a differently normalised bracket in the Schouten tensor.
  `def-gr-dust-electric-magnetic-weyl-variables-and-schouten` adopts the
  standard normalization (so that the Kulkarni–Nomizu decomposition and the
  constant-curvature identity `Schouten = (R/2(n-1)) g` hold, recorded in the
  item's own remark and checked against the source), and its consumers use
  that normalization consistently. The discrepancy with the scaffold text is
  recorded here; the item's normalization is the one verified against the
  source and used by `lem-gr-dust-weyl-reconstruction-from-electric-magnetic`
  and `lem-gr-dust-reduced-evolution-equations`.
- The physics-theorem `pthm-gr-high-regularity-local-development` and the
  remark `rem-gr-high-regularity-scope` are conditional model deductions and
  scope statements only; they claim no empirical confirmation and no
  experiment. The remark records the deferrals (global existence, black-hole
  spacetimes, higher matter couplings) rather than asserting them.

## Sources and harvest

- `research/physics-cm-qm-gr-79-2026-10-11-batch-78.coverage.json` records six
  source records, all fetch-verified by `source-fetch-check --stamp` (6/6
  verified, 0 documented drops): Friedrich–Rendall (arXiv:gr-qc/0002074, full
  text), Gourgoulhon (arXiv:gr-qc/0703035), Hunter's PDE notes (full text),
  Taylor's Fourier notes (full text), the Ulm Navier–Stokes notes (full text)
  and Rodnianski–Speck (arXiv:0911.5501). The harvest lists 30 results with
  explicit dispositions; `coverage-checklist` reports 0 errors and 0 warnings.
  Three disposition `support` texts were extended in this pass to name the
  new local carriers (`lem-gr-galerkin-second-time-derivative-bound`,
  `lem-gr-rational-diagonal-extraction`, `lem-gr-periodic-sobolev-completeness`).
- **Source-identification history (must not be reverted):** arXiv:0911.5501 is
  I. Rodnianski and J. Speck, *The Stability of the Irrotational Euler–Einstein
  System with a Positive Cosmological Constant* (v2, 2010). An earlier draft
  entry citing a "Speck, Selecta Mathematica" title for this URL was wrong and
  the reference titles were corrected to the paper actually served at the URL
  (the item locators cite Sections 1 and 3, the sound-speed hypotheses and the
  wave-equation formulation). Earlier dead/abstract URLs of the scaffold
  inventory were likewise replaced during authoring by full-text,
  fetch-verified versions; the Choquet-Bruhat DOI (HTTP 403) and the
  Springer/Taylor DOI landing pages were dropped in favour of the fetchable
  full texts listed above. The current coverage file contains no unresolved
  source and no `source_resolution` record; this paragraph preserves the
  substitution history the reviewer would otherwise have to reconstruct.

## Cross-batch inputs

- `research/physics-cm-qm-gr-79-2026-10-11-batch-78.cross-batch-dependencies.json`
  contains 119 rows: 111 item edges from this batch's items into other
  batches' in-run items (roles `mathematical-premise` /
  `formulation-prerequisite`) and 8 page edges, each with `status: verified`
  and declared-use evidence. The unified ledger
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
  was refreshed after the last dependency edit: batch 78 owns 119 edges, all
  with a verified review, and no orphaned review row belongs to this batch.
  The run-wide `--require-reviewed` gate is still incomplete **only** because
  13 other batches (52, 54–64, 79) have not yet supplied inputs/reviews.
- The B→A edge inside the pair is same-batch and recorded structurally in the
  manifest, not as a cross-batch row.

## Verification results (final state, this pass)

- `precheck.mts` over all 52 items: 43 proof-bearing items checked, 0 failing.
- `rendercheck.mjs` over all 52 items: OK (no wikilink inside math, no nested
  or unbalanced delimiters, no multiline display, every math span parses).
- `proof-layout.mjs` over all 52 items: 52 items, 157 steps, 0 defects.
- `fwdcheck.mjs --items-file` (52 items): OK — the former
  `forward-undeclared` error on `lem-gr-galerkin-compactness` is gone.
- `depcheck.mjs --items-file` (52 items): no hard errors; 32 advisory
  `cited-not-in-deps` lines (statement/facts back-links, e.g. a theorem
  citing the page's own summary remark); none is a missing prerequisite.
- `content-policy.mjs` on the manifest: 52 scoped items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 52 items, 0 errors. `extcheck.mjs`: OK (no
  recorded-not-proved statement is consumed). `pathcheck.mjs
  general-relativity`: 0 errors.
- `audit-manifest.mjs` over **all 79 batch manifests**: 16 906 relationships
  over 1332 items, **0 defects**. (Invoking it on the batch-78 manifest alone
  mislabels the cross-batch suppliers as `unresolved`, because that mode only
  knows this batch's items; the whole-run invocation is the gate and passes.)
- `coverage-checklist.mjs`: 1 page, 30 harvested results, 0 errors, 0 warnings.
  `source-fetch-check.mjs --stamp`: 6/6 fetch-verified, 6/6 resolved.
- `step1-decisions.mjs check`: the batch's 52 records are current (0 stale);
  the run as a whole is not closed because other batches' items and empty
  scaffolds remain (the outstanding items at handoff were all outside batch
  78).
- Outside-batch blockers recorded for the owner: the quantum batches
  (52, 54–64) and GR15 (79) carry empty scaffolds or missing inputs;
  `ex-nrqm-controlled-dynamics-gap-closing-failure` and
  `ex-nrqm-controlled-dynamics-long-time-rwa-limitation` carry stale
  `dependency_level` labels; `validate-plan` reports four undeclared-prereq
  errors for `cm-math-evidence`, `cm-math-chaos`,
  `qm-math-controlled-dynamics` and `qm-state-geometry-examples`. None
  involves a batch-78 item or page.

## Handoff

The batch is fully authored: 48 A items and 4 B items, both library carriers,
the manifest, the 43-entry proof contract, the coverage record and the
cross-batch input all exist and agree; every item carries a current `ready`
record. Independent review should start from the four repaired carriers
(`lem-gr-galerkin-compactness`, `lem-gr-galerkin-limit-is-classical-solution`,
`thm-gr-periodic-symmetric-hyperbolic-existence` and the three new
prerequisite items) and from the two flagged risk areas (E3d dust residual
chain, Schouten normalization). No escalation record was needed for source
resolution; the two risk areas are surfaced for Step 3 rather than concealed.
