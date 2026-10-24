# Batch 34 authoring notes — Supersymmetry Breaking and Collider Inference

## Scope, design, plan, and decisions

This batch owns only `qftx-susy-breaking-and-phenomenology` (A) and
`qftx-susy-breaking-and-phenomenology-examples` (B), order 990, in
`advanced-qft-and-supersymmetry`. I read the complete design section at
`research/plan-advanced-qft-and-supersymmetry-track.md:471–482` and compared it
with `research/plan-spec.json:262768–262798`. The design and canonical plan
agree on the page IDs, companion, title, order, category, and four page inputs:
`qftx-susy-n1-superspace-and-actions`,
`qftx-susy-moduli-and-dualities`, `aqft-eft-amplitudes`, and
`cm-math-evidence`.

The proposed-inventory A-page contract lists only the first three page inputs;
the design, canonical plan, dispatch manifest, and task require all four. The
plan controls, so the A page retains `cm-math-evidence`; the omission is
recorded as a planning discrepancy. The proposed item inventory contains two A
theorems and two B reports. A local A-page definition,
`def-qftx-global-susy-vacuum-state`, is additionally required to define the
state predicates used by the vacuum-energy theorem. A second local A-page
mathematical lemma, `lem-qftx-real-part-modulus-bound-equality`, is required by
the O’Raifeartaigh phase-alignment proof; both are scoped inventory expansions,
not suppliers for another pair.

The proposed global-vacuum theorem dependency on
`thm-qftx-n-extended-central-charge-bounds` is removed. Its complete current
statement and proof concern a massive `M>0` rest-representation fiber and a
central-charge mass bound; they do not establish a vacuum energy identity or
the equivalence between zero vacuum energy and charge invariance. The physical
theorem is instead proved from the exact mixed superalgebra relation and the
representation's common product domain and actual Hilbert adjoints. The
proposed central-charge item edge is therefore recorded as `removed` in the
cross-batch JSON with this scoped reason.

The local global-vacuum definition and theorem carry the representation's
`ACω` premise explicitly. The unitary-representation definition itself
includes the future-cone spectrum condition, so the theorem does not claim
that this spectral postulate was derived here. Its norm-sum identity also
proves nonnegativity directly. The definition distinguishes boundary-neutral
(`ZΩ=\bar ZΩ=0`), supersymmetry-invariant, and supersymmetry-noninvariant
states. Boundary neutrality is not used in the identity. The energy is a
rest-frame eigenvalue, not an energy density; no vacuum existence or QFT
construction is claimed.

## Per-item authoring checkpoints

### `def-qftx-global-susy-vacuum-state`

- Claim/interface: defines a normalized rest-frame ground-state vector in an
  existing positive unitary representation, including the operator-domain
  ground-state inequality; separately defines boundary neutrality and
  charge invariance. It asserts no state exists.
- Conventions: `η=diag(-1,1,1,1)`, `σ⁰=I₂`, `ℏ=c=1`, actual Hilbert adjoints,
  and `ACω` inherited from the representation supplier.
- Dependencies: `def-qftx-super-poincare-algebra-4d`,
  `def-qftx-unitary-super-poincare-representation`, and
  `def-countable-choice`. Dependency level 2 from the current in-run
  representation supplier at level 1.
- Source readings: Martin, *A Supersymmetry Primer* v7, §6.1, printed
  pp. 62–64; Bilal, *Introduction to Supersymmetry*, §6.1, printed pp. 35–36.
  Both full PDFs and their vacuum-energy/supercharge-norm discussions were
  inspected. The item supplies terminology, not a source-only proof.
- Decision: `inventory_expansion_required:true`; local definition placed on A.
  Both independent source PDFs are stamped; focused dependency and rendering
  checks pass.

### `pthm-qftx-global-susy-vacuum-energy`

- Claim: for any existing normalized rest-frame ground-state vector in the
  stated representation, `4N EΩ = Σ(I,α)(||QᵢΩ||²+||Qᵢ*Ω||²)`. Hence energy is
  nonnegative, is zero exactly for a vector annihilated by every charge and
  adjoint, and is strictly positive for a noninvariant vector.
- Conventions: uses the exact mixed relation
  `{Qᴵα, Qᴶ*β}=-2σ^μ_{αβ}Pμ δᴵⱼ`, `P₀=-P⁰`, `tr σ⁰=2`, `tr σʲ=0`, the
  common invariant product domain, and an inner product linear in its first
  variable. Central charges do not enter the traced mixed relation.
- Actual dependencies: `def-qftx-global-susy-vacuum-state`,
  `def-qftx-super-poincare-algebra-4d`,
  `def-qftx-unitary-super-poincare-representation`, and
  `def-countable-choice`; dependency level 3. The proposed central-charge
  theorem is not used (see scoped removal above).
- Current supplier readiness checked with `loadStep1Record` and
  `step1Decision`: the algebra definition, unitary-representation definition,
  and originally proposed central-charge theorem have current closed `ready`
  records. The published Countable Choice statement was checked. The
  central-charge theorem's complete statement and proof do not match this use.
- Sources: Martin v7 §6.1, printed pp. 62–64; Bilal §6.1, printed pp. 35–36.
  The full treatments were read; this item's trace-and-adjoint proof is
  complete locally.
- Decision/caveat: pointwise operator deduction only; the representation's
  future-cone spectral assumption remains an input. No vacuum existence,
  energy-density, spontaneous-breaking construction, or QFT existence claim.
  Both independent source PDFs are stamped; proof layout, normative precheck,
  strict contract, focused dependencies, content policy, and rendering pass.

### `pthm-qftx-oraifeartaigh-f-term-breaking` — proof audit update

- Claim: for `W=-kΦ₁+mΦ₂Φ₃+(y/2)Φ₁Φ₃²`, complex `k,m≠0`, arbitrary complex
  `y`, and canonical metric, the full pointwise potential has minimum `|k|²`
  iff `|m|²≥|k||y|`; otherwise the exact attained minimum is
  `|k|²-(|k||y|-|m|²)²/|y|²>0`. All minimizers, phase-alignment conditions,
  flat `φ₁` direction, and nonzero auxiliary F terms are proved in-item.
- Conventions/units: `ℏ=c=1`, `[φᵢ]=[m]=M`, `[k]=M²`, `[y]=1`; `a=|k|`,
  `b=|m|²`, `c=|y|`, `t=|φ₃|²`. The source's stronger bound is preserved in
  exactly the `b≥ac` branch; the `b<ac` branch has the smaller positive
  minimum. Equality at `b=ac` is included in the first branch; `y=0` is also
  included there.
- Final dependencies: `post-qftx-n1-wess-zumino-model` (physical assumption),
  `pthm-qftx-n1-f-term-potential` (physical result),
  `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`,
  `thm-every-complex-number-has-a-square-root`,
  `lem-qftx-real-part-modulus-bound-equality`, and
  `thm-reals-ordered-field` (mathematical premises). The local real-coordinate
  lemma supplies the bound and equality case; the real-order theorem also
  proves that the two nonzero roots are distinct. The in-run WZ postulate and
  F-term theorem are levels 3 and 4, so this item's level remains 5.
- Current readiness checked with `loadStep1Record` and `step1Decision`: the
  batch-30 Wess–Zumino postulate is owner-escalated; the F-term theorem has a
  current `ready` record whose complete conditional proof was read. The exact
  WZ postulate states both the superspace action and a positive component
  auxiliary Lagrangian, while the current owner record confirms their raw
  Berezin/component normalization conflicts. This consumer uses the displayed
  component interface conditionally and does not derive it from the action.
  The five imported mathematical suppliers are published; their complete
  relevant statements/proofs were read for field operations, modulus laws,
  ordered-real arithmetic, and square-root existence.
- Source readings: Martin v7 §7.3, printed pp. 75–76, equations (7.3.1)–(7.3.3),
  which treats positive real parameters and assumes `m²>yk`; Bilal §6.3.1,
  printed pp. 38–39, which explains the general no-common-F-solution
  mechanism. Both full PDFs and cited sections were inspected. Neither source
  is substituted for the local complex-parameter global-minimum proof.
- Proof-audit update: the imported complex modulus-law lemma states
  `z\bar z=|z|²`, positivity, multiplicativity, and the triangle inequality;
  it does not state `Re z≤|z|` or the equality case. Those were initially
  attributed to that supplier without support. The A-page helper
  `lem-qftx-real-part-modulus-bound-equality` now proves the needed real
  coordinate estimate and equality case from the ordered-field supplier; the
  O’Raifeartaigh theorem depends on that helper. The proof also uses the
  ordered-real-field theorem directly to distinguish the two roots. Source
  stamps, proof contract, proof-layout, precheck, dependency, content, and
  rendering checks pass. The item’s Step 1 record remains escalated on the
  unresolved Wess–Zumino component interface described above.
- Scope caveat: the WZ postulate restricts spacetime scalar fields to compact
  support. The result is a pointwise field-space minimum of the potential and
  an F-term statement at those values, not a proof that a nonzero constant
  background is an allowed vacuum configuration. No radiative stability,
  quantum vacuum, goldstino, or continuum construction is asserted. Source
  stamp and scoped checks pass; the superspace-to-component normalization
  remains an explicit unresolved prerequisite.

### `lem-qftx-real-part-modulus-bound-equality` — required local helper

- Claim: for real `x,y,r` with `r≥0` and `r²=x²+y²`, prove `x≤r` and show
  equality exactly when `y=0` and `x≥0`. In the O’Raifeartaigh consumer,
  complex coordinates and the modulus identity instantiate `r=|z|` for the
  phase-alignment variable `z=\bar k y φ₃²`.
- Proof: derive `y²≥0` by sign cases in the real ordered field, compare the
  squares by the factorization `x²-r²=(x-r)(x+r)`, and prove both directions
  of the equality condition directly. No imported real-part equality lemma or
  square-root uniqueness result is used.
- Mathematical-only dependency: `thm-reals-ordered-field`. Its exact
  statement and full proof were inspected; its order convention matches the
  standard real coordinates used by the complex suppliers. The local proof
  adds no choice principle. The Princeton full-text source is stamped and all
  scoped checks pass.

### `exp-aqft-atlas-compressed-higgsino-search-2026`

- Claim: records the ATLAS 140 fb⁻¹, 13 TeV Run-2 displaced-track and
  one-lepton-plus-one-track searches and their reported, simplified-model
  limits: about 200 GeV at `Δm=0.6 GeV` for displaced tracks, 130 GeV at
  `Δm=2 GeV` for 1ℓ1T, and combined exclusion below 126 GeV over `Δm=0.3–2
  GeV`. Model relation `Δm(χ̃⁰₂,χ̃⁰₁)=2Δm(χ̃±₁,χ̃⁰₁)` is retained.
- Procedures: includes the dataset/detector, trigger, ISR/MET rationale,
  channel selections, background estimation, profile-likelihood nuisance
  treatment, Gaussian constraints, correlations, asymptotic `CLs`, 0.83%
  luminosity uncertainty, and below-2σ signal-region deviations. No event or
  likelihood reanalysis is claimed.
- Dependencies: the four published CM interfaces listed in the item
  (`def-cm-measurement-model`, `def-cm-likelihood-function`,
  `def-cm-statistical-test-and-size`,
  `def-cm-confidence-set-and-coverage`); no in-run item supplier, level 0.
- Sources: full 67-page ATLAS collaboration paper, arXiv:2511.20042v2,
  `https://arxiv.org/pdf/2511.20042v2`, JHEP 06 (2026) 094;
  `https://link.springer.com/article/10.1007/JHEP06%282026%29094`. Inspected
  the abstract; §§2–9; selections in §6; backgrounds in §7; uncertainties in
  §8; results and Fig. 15 in §9; conclusion in §10. Full report says maximum
  displaced-track observed reach about 200 GeV at 0.6 GeV, 1ℓ1T 130 GeV at
  2 GeV, and combined below-126-GeV exclusion over 0.3–2 GeV in its model.
- Decisions: source full text available; no source blocker. Mass reaches are
  collider statistical inferences conditional on the simplified spectra and
  analysis, not a framework-level SUSY exclusion. The full-text stamp and all
  scoped checks pass.

### `exp-aqft-cms-boosted-susy-search-2025`

- Claim: records CMS-PAS-SUS-23-014, 138 fb⁻¹ at 13 TeV, 2016–2018, boosted
  hadronic/leptonic categories, data/MC correction factors, razor variables,
  background fit, and model-specific observed 95% CL mass reaches: gluinos
  2.25/2.35/2.30 TeV in T5ttcc/T5qqqqWH/T5bbbbZH; stop 1.45 TeV in T6ttZH;
  electroweakino 1.05/0.94 TeV in TChiWZ/TChiWW; RPV bottom squark 0.97 TeV
  in R2bbqqlv and gluino 1.82 TeV in R5ttbl.
- Procedures/uncertainty: binned maximum-likelihood fit with normalization
  and shape, constrained and correlated nuisance parameters; asymptotic
  `CLs=CLs+b/CLb`, threshold below 0.05; source ranges for correction-factor,
  tagging, and theory uncertainties retained. No event or fit reanalysis is
  claimed.
- Dependencies: the four published CM interfaces listed in the item; no
  in-run item supplier, level 0.
- Sources: official CMS page
  `https://cms-results.web.cern.ch/cms-results/public-results/preliminary-results/SUS-23-014/index.html`;
  complete 31-page PAS mirror
  `https://inspirehep.net/files/be754b4c35f11643a9b6f4cabf36deaa`. Read §§2–10,
  especially detector/data §§3–4, object reconstruction §5, selections §6,
  background estimation §7, systematic uncertainties §8, fit/CLs and results
  §§9–10, and summary §11. The official result page and full text were both
  inspected.
- Recovery history: a prior CDS retrieval note records an anti-bot response.
  This authoring pass reused that history, made a direct official CDS retrieval
  retry (7,495-byte bot-wall HTML), an official-page/web retry (bot wall), and
  a follow-up click on the exact official PDF link (Anubis bot wall), then
  retrieved and inspected the complete 924 KB/31-page PAS on INSPIRE. Recovery
  stopped on successful full-text retrieval. The failed attempts are retained
  in the batch coverage evidence; no `dropped` source record is created.
- Decision: source blocker resolved. Exclusions remain conditional on named
  simplified models, not framework-wide. The official page and recovered full
  text are stamped; all scoped checks pass.

## Current supplier and dependency status

The current Step 1 records were rechecked with `loadStep1Record` and
`step1Decision`. Batch 1 algebra and representation suppliers are current
`ready`; batch 28 is 2/2 ready and batch 33 is 12/12 ready. Batch 30 is 5/7
ready: `post-qftx-n1-wess-zumino-model` and
`post-qftx-n1-gauge-matter-model` are owner-escalated for the confirmed
raw-Berezin/physical-component normalization defect. The exact WZ postulate
and the complete conditional F-term proof were read. The O’Raifeartaigh proof
uses the stated component formula conditionally, but cannot certify its
derivation from the superspace action; its cross-batch item and page edges stay
`open`, and its Step 1 record is `escalated`. The separate batch-30 F-term
theorem has a current `ready` record and its exact canonical formula matches
the local conditional use. External published math and CM suppliers were read
at the needed statements/proofs. `cm-math-evidence` is an external page input
and does not receive a cross-batch row.

At initial handoff the batch-34 manifest had empty item arrays and there were
no batch-34 notes, coverage, proof contracts, cross-batch ledger, or page
carriers. Those artifacts have now been authored. The two required local
A-page expansions are the vacuum-state definition and the real-coordinate
ordered-field lemma. The A/B pages remain frontmatter-only with empty bodies.

## Validation checkpoint (2026-10-23)

- `source-fetch-check --stamp`: 6/6 URLs fetch-verified, 0 newly stamped on
  final verification, 0 documented drops. The six stamps cover the two
  independent A-page treatments, Princeton MAT330, full ATLAS paper, official
  CMS result page, and recovered complete 31-page PAS. CDS anti-bot recovery
  history is preserved in coverage and notes; INSPIRE full text succeeded.
- Current supplier recheck: batch 1 algebra/representation are ready; batch
  28 is 2/2 ready; batch 30 is 5/7 ready with the Wess–Zumino and gauge-matter
  postulates owner-escalated; batch 33 is 12/12 ready. The local O’Raifeartaigh
  proof records the exact Wess–Zumino component interface conditionally and is
  escalated pending the unresolved action/component normalization. Its direct
  F-term theorem supplier has a current ready record.
- Scoped item-level recomputation through `item-dependency-levels.mjs` gives
  levels 0 (`lem-qftx-real-part-modulus-bound-equality`), 2 (vacuum-state
  definition), 3 (vacuum-energy theorem), 5 (O’Raifeartaigh theorem), and 0/0
  (the two empirical reports). All six declared levels match the current
  computed levels; no dependency-level error touches batch 34.
- In-memory full run batch-graph recomputation gives batch 34 level 7 with
  requirements `[1,28,30,33]`, maximum level 9, and current input hash
  `987d376e199425e32161e146a5f398a27289a46bf7a730e09c76e62ac0fa4b2a`.
  `batch-dependency-levels.mjs check` reports the shared snapshot stale; its
  recorded hash is `c1ff2f4bc596528c62b63374c3dbc1b5b878036c66be0e0716842118b86effc6`.
  The current graph includes batch 1 because the authored vacuum theorem uses
  the batch-1 algebra and representation definitions. The shared run-level
  dependency file is owner-controlled and was not rewritten.
- Scoped final checks: proof-layout passed for 6 items/16 steps; normative
  precheck passed for 3 proof-bearing items; strict proof-contract passed for
  6/6 with no errors or warnings; content-policy passed for 6 scoped items;
  dependency closure passed for 650 items/363 pages; rendercheck passed for 8
  carriers; item dependency-level checks reported no batch-34 mismatches. The
  run-wide level command still reports seven unrelated stale declarations in
  batch 41. The shared batch-level snapshot remains stale and owner-owned;
  in-memory recomputation gives batch 34 level 7 with requirements
  `[1,28,30,33]`, max run level 9, current hash
  `987d376e199425e32161e146a5f398a27289a46bf7a730e09c76e62ac0fa4b2a` versus
  recorded `c1ff2f4bc596528c62b63374c3dbc1b5b878036c66be0e0716842118b86effc6`.
  The shared snapshot was not rewritten.
- Exact run-wide item-level defects, all in unassigned batch 41 (recorded →
  recomputed): `lem-aqft-local-counterterm-shift-is-relative-coboundary`
  0→3; `def-aqft-thooft-anomaly` 0→3;
  `def-aqft-anomaly-matching-data` 1→4;
  `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation` 2→5;
  `ex-aqft-single-chiral-fundamental-polynomial` 2→5;
  `ex-aqft-mixed-background-counterterm-shift` 2→5; and
  `ex-aqft-vectorlike-conjugate-chiral-pair` 3→6. No batch-34 dependency-level
  mismatch was reported; no batch-41 file was edited.

## Step 1 readiness closeout

Current hash-bound Step 1 records were written without `--owner`: five are
`ready` (`lem-qftx-real-part-modulus-bound-equality`,
`def-qftx-global-susy-vacuum-state`,
`pthm-qftx-global-susy-vacuum-energy`,
`exp-aqft-atlas-compressed-higgsino-search-2026`, and
`exp-aqft-cms-boosted-susy-search-2025`); the complete conditional
`pthm-qftx-oraifeartaigh-f-term-breaking` record is `escalated`. Its exact
unresolved prerequisite is the current owner-escalated Wess–Zumino
superspace/component normalization. The local proof, both pages, and all
independent item work are complete; the escalation is not a claim of missing
local minimization reasoning or independent proof rejection.

The cross-batch ledger has nine current external edges: seven `verified` and
two `open` (the batch-30 superspace/actions page and the direct Wess–Zumino
postulate). It also retains one `removed` central-charge proposal. The
manifest/ledger consistency audit found every current edge and no unsupported
row. Published mathematical and CM dependencies remain outside that ledger.

## Owner canonical-normalization follow-up — 2026-10-24

The current source/interface and exact consumer disposition are in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/canonical-normalization-repair.md` and its evidence JSON. This dated addendum supersedes earlier live-readiness observations and the earlier raw/physical measure identification, without deleting that history. Current physical brackets are D=-I_D/4, F=I_F/2 with psi_raw=sqrt2psi and F_raw=2F; scalar fields, physical couplings and potentials are preserved.50/51 use the independent stable-ADHM core and genuine localized BM tangent-twist insertion, with source continuation m=i m_E and the unconstructed S4-regulator caveat retained.79 selected source items and26 actual pages passed focused preparation checks; this is not native acceptance. Root retains native holds until independent source/dependency binding and recertification.
