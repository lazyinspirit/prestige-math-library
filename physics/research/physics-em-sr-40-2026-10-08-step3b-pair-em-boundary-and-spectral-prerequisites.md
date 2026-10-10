# Step 3b — pair `em-boundary-and-spectral-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 18, label
`step3b-pair-em-boundary-and-spectral-prerequisites-0bde3194995a6642` (attempt 2).
Report opened at entry; this revision completed after authoring and checks.
No engine state was edited.

## Scope (owned IDs, in the dispatch's dependency-level order)

| # | level | item | home page (order) | state on handoff |
|---|---|---|---|---|
| 1 | 2 | `lem-three-dimensional-radial-carleman-integer-weight` | `em-boundary-and-spectral-prerequisites` (313, A) | authored; local repair; supplier landed and use verified; decision owner-held |
| 2 | 3 | `thm-bounded-potential-weak-unique-continuation-in-three-dimensions` | A 313 | authored; local repair; escalated transitively |
| 3 | 3 | `thm-em-spherical-multipole-basis` | A 313 | authored; one supplier reconciled, one escalated |
| 4 | 4 | `lem-em-exterior-outgoing-scalar-uniqueness` | A 313 | authored; escalated supplier |
| 5 | 5 | `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` | A 313 | authored; local repair; escalated suppliers |
| 6 | 5 | `thm-em-elliptic-boundary-existence` | A 313 | authored; deps completed; escalated suppliers |
| 7 | 6 | `thm-em-waveguide-spectral-completeness` | A 313 | authored (new carrier); escalated suppliers |
| 8 | 7 | `ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries` | B 314 (`-examples`) | authored (new carrier); escalated transitively |

Write scope used: the 8 item files, the two pages
`library/classical-electromagnetism-mathematics/em-boundary-and-spectral-prerequisites.md`
and `...-examples.md`, `research/physics-em-sr-40-2026-10-08-batch-18.pages.json`
(dep/level/requires reconciliation only, sibling rows untouched — batch 18 is
this pair alone), the batch-18 proof contracts, coverage rechecked, and this
report.

## Open obligations at entry (and status at handoff)

1. **Unfinished in-run suppliers.** At entry the batch-13/16 carriers
   `lem-em-spherical-harmonic-basis-and-addition`,
   `lem-em-ball-poisson-series-boundary-convergence`,
   `lem-em-sphere-outgoing-dirichlet-to-neumann-map`,
   `lem-em-prescribed-fractional-dirichlet-existence`,
   `lem-em-weak-neumann-and-transmission-existence`,
   `lem-em-smooth-domain-elliptic-regularity`,
   `lem-em-smooth-pec-cavity-spectral-closure`,
   `lem-em-pec-cavity-eigenfield-boundary-regularity` were still unauthored at
   the authoring check. `lem-em-spherical-harmonic-basis-and-addition` landed
   from the concurrent batch-16 writer after the decisions were recorded; its
   statements were then checked against the carleman and multipole uses and
   both cross-batch rows were moved to `verified` (the recorded escalate
   receipts predate the landing and still need owner resolution). Seven
   suppliers remain unauthored:
   `lem-em-ball-poisson-series-boundary-convergence`,
   `lem-em-sphere-outgoing-dirichlet-to-neumann-map`,
   `lem-em-prescribed-fractional-dirichlet-existence`,
   `lem-em-weak-neumann-and-transmission-existence`,
   `lem-em-smooth-domain-elliptic-regularity`,
   `lem-em-smooth-pec-cavity-spectral-closure`,
   `lem-em-pec-cavity-eigenfield-boundary-regularity`. Every assigned consumer is authored anyway; the
   exact supplier ID, consumer ID and consuming step are recorded per item
   below and in the decision reasons. All 8 item decisions are therefore
   **escalate** (recorded through `step3-decisions.mjs record-item`).
2. **Plan-context mismatch (reported for Step 4).** The published page
   `rellich-kondrachov-and-sobolev-compactness` (home of
   `cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences` and
   `def-compactly-embedded-normed-spaces`, consumed by item 5 step 4.1) has no
   `P` entry in `research/plan-spec.json`, so `validate-plan --run` still
   reports one `undeclared-prereq` error for page 313 and `fwdcheck` reports
   the two links as forward-undeclared. The batch-18 manifest `requires` now
   declares the page (see additions below); the matching `P`-context entry in
   the plan is an owner/operator amendment required before Step 4. The two
   other new context pages (`subspaces-products-and-quotients`,
   `volumes-of-elementary-solids-and-solids-of-revolution`) already exist as
   `P` entries and their errors cleared.
3. **Import drift** `thm-hilbert-basis-theorem.md` (owner-held, pre-existing;
   no dependency path from this pair). Not caused by and not repaired here.
4. Steps 5–8 independent audit, judgment and gate certification remain owed;
   nothing here claims them.

## Per-item checkpoints

### 1. `lem-three-dimensional-radial-carleman-integer-weight` (level 2) — authored, repaired

- **Claim.** For integer $s\ge1$, $\tau=s+1$,
  $\|r^{-\tau}u\|_2\le(2/s)\|r^{-\tau+2}\Delta u\|_2$ for
  $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$, extended to $H^2$ functions
  compactly supported in a fixed annulus by bounded weights and density.
- **Repair made in this session (recorded).** The step 2.3 branch analysis
  bounded $|AB|$ on the ranges $l\le s-2$ and $l\ge s+1$ by $9/4$ and then
  used $9/4\ge s-\tfrac14$, which is false for $s\ge3$. The step now uses the
  correct branch bounds $AB\ge 3s-\tfrac94$ (attained at $l=s-2$, where the
  factor is decreasing) and $|AB|\ge 3s+\tfrac94$ (attained at $l=s+1$), both
  $\ge s-\tfrac14$; the conclusion $|AB|\ge s/2$, the inequality and its
  constant $2/s$ are unchanged. The earlier statement repair (removing the
  false “weight not integrable at the origin” clause) is retained and the
  batch-18 manifest statement row was updated to the corrected text.
- **Dependencies.** 16 scaffold deps plus the two published suppliers the
  proof uses (`def-divergence-and-curl-of-a-c1-vector-field`,
  `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`);
  level 2 re-verified (published deps do not raise an in-run level).
- **Source locators.** Tataru Theorem 3.50 with Corollary 3.6.1 and
  Theorem 3.52; Dyatlov §11–12 for the $2\pi$ Fourier convention; the
  constant $2/s$ is not claimed sharp.
- **Open obligation (partly reconciled).** Consumes
  `lem-em-spherical-harmonic-basis-and-addition` (batch 16) in [L5] at
  **step 2.2** for the complete orthonormal spherical-harmonic basis. That
  supplier landed after the decision was recorded; its Statement was checked
  against this use (basis, orthogonality, completeness, mass-4π convention)
  and the cross-batch row is now `verified`. The recorded escalate receipt
  predates the landing, so the owner still resolves the decision; no other
  supplier is missing for this item. Decision **escalate** (recorded).

### 2. `thm-bounded-potential-weak-unique-continuation-in-three-dimensions` (level 3) — authored, repaired

- **Claim.** $\Omega\subseteq\mathbb R^3$ nonempty open connected,
  $V\in L^\infty_{\mathrm{loc}}(\Omega)$, $\psi\in H^2_{\mathrm{loc}}(\Omega)$
  with $\Delta\psi=V\psi$ distributionally; $\psi=0$ on a nonempty open subset
  forces $\psi=0$ on $\Omega$.
- **Repair made in this session (recorded).** Step 5.2 chose $\varepsilon>0$
  with $B(x,\varepsilon)\subseteq\Omega$ and then asserted
  $\overline B_R(y)\subseteq B(x,\varepsilon)$ for $R=\varepsilon-|x-y|$,
  which can fail when $y$ is close to the sphere boundary. The step now chooses
  $\varepsilon$ with the **closed** ball $\overline B(x,\varepsilon)\subseteq\Omega$
  (available since $\Omega$ is open) and verifies
  $\overline B_R(y)\subseteq\overline B(x,\varepsilon)$ directly by the
  triangle inequality.
- **Dependencies.** 15 scaffold deps were reconciled to the 18 carriers the
  written proof actually uses (removed the four unused polygonal-path and
  compactness-image suppliers; added
  `prop-essential-supremum-is-attained-as-the-least-essential-bound`,
  `thm-rational-points-and-boxes-in-rn`, `lem-product-topology-on-rn`,
  `thm-all-norms-on-rn-are-equivalent`,
  `def-measure-null-set-and-almost-everywhere`,
  `thm-finite-and-countable-subadditivity-of-measures`,
  `def-metric-topology`, `def-metric-ball`). Level 3 re-verified.
- **Open obligation.** Its sole in-run supplier is item 1; the decision is
  escalated transitively until item 1's supplier lands and its use is
  reconciled. Decision **escalate**.

### 3. `thm-em-spherical-multipole-basis` (level 3) — authored

- **Claim.** Exterior spherical multipole expansion of the Newtonian integral
  of a compactly supported $L^1$ density with absolute/uniform convergence on
  $|x|\ge r_0>a$ and the stated geometric tail, degree terms as
  $Y_{lm}$-moments, termwise differentiation to every order, and the ball
  boundary series branch with its uniqueness class and continuous-data Poisson
  representation; no physical charge interpretation.
- **Dependencies reconciled to the 12 carriers used** (dropped the three
  scaffold deps that no step cites: `thm-algebra-of-derivatives`,
  `thm-chain-rule-for-total-derivatives`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`). Level 3
  re-verified.
- **Open obligations (partly reconciled).** Consumes
  `lem-em-spherical-harmonic-basis-and-addition` ([L2], steps 2.1, 3.1, 3.2;
  supplier landed and the use plus contract quote were verified, ledger row
  `verified`) and `lem-em-ball-poisson-series-boundary-convergence` ([L3],
  step 1.2; still missing on disk). Decision **escalate** (recorded; owner
  resolution pending the second supplier).

### 4. `lem-em-exterior-outgoing-scalar-uniqueness` (level 4) — authored

- **Claim.** Smooth bounded obstacle with connected exterior, $k>0$,
  $(\Delta+k^2)u=0$, $u=0$ on the inner boundary and outgoing in the modal DtN
  class imply $u=0$; no pointwise Sommerfeld or decay assumption beyond the
  class. Steps: Green identity gives $\operatorname{Im}\langle T_Rf,f\rangle=0$,
  the strictly positive imaginary DtN coefficients force $f=0$, the uniqueness
  clause of the DtN supplier gives $u=0$ outside $S_R$, and the local
  bounded-potential unique continuation (item 2) gives $u=0$ on $D$.
- **Open obligation.** Consumes `lem-em-sphere-outgoing-dirichlet-to-neumann-map`
  ([L4], steps 1.1, 2.1, 3.1), missing on disk. Decision **escalate**.

### 5. `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` (level 5) — authored, repaired

- **Claim.** For every smooth tangential datum on a smooth obstacle there is
  exactly one $C^\infty(\overline D)$ field with componentwise
  $(\Delta+k^2)E=0$, $\operatorname{div}E=0$, the prescribed tangential trace
  and modal outgoing radiation, with the normal closure relation
  $\partial_nE_n+(\operatorname{div}n)E_n=-\operatorname{div}_{\partial O}e_T$;
  three scalar Dirichlet data are explicitly not asserted equivalent.
- **Repair made in this session (recorded).** The kernel step 3.2 extended $E$
  by zero across $\partial O$ citing vanishing of the traces $E_m|_{\partial O}$;
  only the **tangential** trace vanishes there, so that extension is not
  $H^1$. The step now extends across the artificial sphere $S_R$, where the
  full trace $f=0$ (and $T_Rf=0$) was just proved: the distributional gradient
  of the extension is $(\nabla E)\mathbf 1_A$ by Sobolev–Gauss–Green with the
  $\partial O$ boundary term vanishing because the test is compactly supported
  in $D$ and the $S_R$ term vanishing because $f=0$; the weak Helmholtz
  identity then holds on $D$, and interior $H^2$ regularity plus the local UCP
  theorem (item 2) force $E=0$ on $A$. All other steps (coercivity, Riesz and
  Fredholm inversion, lift, gluing, mixed-boundary bootstrap, divergence
  constraint, uniqueness) are unchanged; quoted suppliers and deps are the
  file's 26. Step 10.1's claim that $q=\operatorname{div}E$ is outgoing
  (componentwise spherical-Bessel recurrences with matching angular degrees)
  is condensed; it was spot-verified on the degree-0/1 modal instances and is
  flagged for the independent Steps 5–8 audit.
- **Open obligations.** Consumes `lem-em-sphere-outgoing-dirichlet-to-neumann-map`
  ([L1], steps 1.1, 2.1, 3.2, 7.1, 10.1, 11.1),
  `lem-em-prescribed-fractional-dirichlet-existence` ([L3], step 1.3) and
  `lem-em-smooth-domain-elliptic-regularity` ([L4], step 1.3), all missing on
  disk. Decision **escalate**.

### 6. `thm-em-elliptic-boundary-existence` (level 5) — authored, deps completed

- **Claim.** On a bounded $C^\infty$ domain with uniformly positive smooth
  coefficient: weak Dirichlet solvability with exact trace and
  $C^\infty$-on-closure upgrade; Neumann solvability with componentwise
  compatibility, uniqueness modulo componentwise constants and the normalised
  representative; the finite-interface transmission variant with sheet charge
  and flux jump, with edge/junction/reentrant/non-smooth regimes excluded.
- **Deps completed in this session (recorded).** `depcheck` flagged four
  statement/Facts citations absent from `deps`; the carrier now declares
  `def-axiom-of-choice`, `def-countable-choice`,
  `def-bounded-c-k-domain-and-boundary-charts` and
  `def-sobolev-space-wkp-and-its-norm` (all published) and the manifest was
  re-synced. Level 5 re-verified.
- **Open obligations.** Consumes `lem-em-prescribed-fractional-dirichlet-existence`
  ([L1], steps 1.1, 3.1), `lem-em-smooth-domain-elliptic-regularity` ([L2],
  steps 1.2, 2.1, 2.2) and `lem-em-weak-neumann-and-transmission-existence`
  ([L3], steps 1.2, 1.3, 3.1), all missing on disk. Decision **escalate**.

### 7. `thm-em-waveguide-spectral-completeness` (level 6) — authored (new carrier)

- **Claim (wrapper, as designed).** (a) The declared smooth PEC cavity class
  (graph-norm completion $X$ of smooth-on-closure fields with
  $\nu\times u=0$, $V=\{u\in X:\operatorname{div}u=0\}$, $H=\overline V^{L^2}$)
  has a complete orthonormal $L^2$ eigenbasis of the curl form with nonnegative
  finite-multiplicity eigenvalues, $\lambda_j\to\infty$ when $H$ is infinite
  dimensional, retained zero sector, full-$X$ variational identity and
  distributional eigen-equation with PEC trace; every eigenfield is $C^\infty$
  on the closure with the classical PEC and normal relations; the modal wave
  with any chosen positive abstract speed $v_{\mathrm{wave}}$ has
  $C(\mathbb R;V)$ displacement, $C(\mathbb R;H)$ velocity, uniform convergence
  on compact time intervals and affine zero modes. (b) The rectangular
  reflection-parity class has dense finite separated modes, unique
  $C(\mathbb R;L^2)$ weak solutions and constant energy. Exclusions: no
  completeness in lossy, open-ended or non-smooth classes; the constant-Ohmic
  and open-longitudinal branches are homed on the guide page and are not
  premises here.
- **Proof route.** Composition: step 1.1 transfers the spectral content from
  the cavity supplier; step 2.1 upgrades the eigenfields by the eigenfield
  boundary regularity supplier; step 3.1 records the scalar auxiliary
  solvability from item 6 ($\varepsilon=I$); step 1.2 is the rectangular
  supplier; step 4.1 assembles and accounts for Choice (AC assumed; AC_ω
  supplied to the rectangular branch through
  `thm-choice-implies-dependent-implies-countable-choice`, added to deps).
- **Open obligations.** Consumes `lem-em-smooth-pec-cavity-spectral-closure`
  ([L1], steps 1.1, 3.1, 4.1) and
  `lem-em-pec-cavity-eigenfield-boundary-regularity` ([L2], steps 2.1, 3.1),
  both missing on disk. Decision **escalate**.

### 8. `ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries` (level 7) — authored (new carrier)

- **Claim.** Three exact mathematical checks: (i) the sphere trace $f=n_3$
  (trace of the degree-one harmonic polynomial $x_3$, admissible for the ball
  boundary branch) is incompatible with $\Delta u=0$ in $B_1$ and
  $\partial_nu=1$ on $S^2$, since the divergence theorem gives $0=\sigma(S^2)$
  while $\sigma(S^2)=4\pi$; (ii) the piecewise-constant coefficient
  ($\varepsilon=1$ below, $2$ above the plane) with $u=x_1$, $x_1/2$ is
  continuous with weak first derivatives $(1,1/2,0)$, satisfies
  $-\operatorname{div}(\varepsilon\nabla u)=0$ weakly and is not $C^1$, so the
  smooth-coefficient conclusions cannot be extended globally; (iii) the same
  configuration lies outside the smooth classes of the spectral theorem.
  No physical interpretation is asserted.
- **Verification route.** Steps 1.1–1.2 (trace, harmonic extension, and
  $\sigma(S^2)=4\pi$ from the polar formula and the closed-ball volume
  `cor-volume-of-a-closed-three-ball`, a recorded dependency addition),
  1.3–2.1 (piecewise-linear weak solution), 2.2 (divergence-theorem
  incompatibility), 3.1–3.2 (scope against the elliptic and spectral
  hypotheses), 4.1 (audit and Choice accounting). Level 7 re-verified.
- **Open obligation.** All its non-owned suppliers exist; its decision is
  escalated transitively because items 3, 6 and 7 are escalated. Decision
  **escalate**.

## Manifest / context changes made (recorded)

- `research/physics-em-sr-40-2026-10-08-batch-18.pages.json`: item `deps`,
  `dependency_roles` and `dependency_level` re-synced from the eight carriers;
  the Carleman statement row updated to the repaired statement; page
  `requires` additions `subspaces-products-and-quotients` and
  `rellich-kondrachov-and-sobolev-compactness` (page 313) and
  `volumes-of-elementary-solids-and-solids-of-revolution` (page 314); atomic
  write, sibling rows (none in this batch) untouched. `item-dependency-levels
  check --run` stays green (473 items, no label/cycle error) and
  `manifest-deps` reports 8 items, 0 errors.
- **Step 4 plan amendment needed:** add the `P`-context entry for
  `rellich-kondrachov-and-sobolev-compactness` (library `mathematics`,
  category `pde`, empty `requires`, empty `items`, order before 313) to
  `research/plan-spec.json`; the manifest already declares it, but the plan
  does not, so `validate-plan --run` keeps one `undeclared-prereq` line for
  page 313 and `fwdcheck` two `forward-undeclared` lines for item 5. These are
  pre-splice plan-context mismatches, reported without hiding the unresolved
  dependencies.
- `research/physics-em-sr-40-2026-10-08-batch-18.proof-contracts.json`:
  extended to all 8 items (scope 8/8) with citations, exact quotes, `uses`,
  per-step derivations/inputs and the eight-case boundary worksheets; the
  Carleman step 2.3 and UCP step 5.2 claims were refreshed after the repairs.

## Checks actually run (results at handoff)

- `precheck.mts` on all 8 item paths: **8 PASS, 0 failing**.
- `rendercheck.mjs` on all 8 items and the two pages: **OK**, every math span
  parses under KaTeX, frontmatter parses.
- `proof-layout.mjs` on all 8 item paths: **8 items, 61 steps, 0 defects**
  (final batched run, after the last edit).
- `depcheck.mjs --items-file <8 ids>`: FAIL only with `dep-unresolved` /
  `link-unresolved` for the unfinished batch-16 supplier carriers (at handoff
  10 + 14 occurrences over the seven still-missing suppliers) and no other
  error class (`cited-not-in-deps` warnings cleared by the item-6 dep
  completion); page and prerequisite-cycle checks ran over the run's items and
  pages.
- `content-policy.mjs <all 80 batch manifests>`: 0 errors, 0 warnings on this
  pair at the check time (run-wide `scope-item-missing` errors remain for
  other pairs still being authored concurrently; none names this pair).
- `proof-contract.mjs --strict`: 8/8 items checked, 0 warnings. At the
  authoring check, **12 errors, all `citation-source-missing`** on the eight
  then-unfinished batch-16 suppliers; after
  `lem-em-spherical-harmonic-basis-and-addition` landed and the carleman and
  multipole quotes were re-verified, the final run reports **9 errors**
  (DtN 2, prescribed-fractional 2, smooth-domain 2, weak-neumann 1, cavity 1,
  eigenfield 1), all on the seven suppliers still missing. Every quote for an
  existing source matched, every step is mapped, every fact contracted.
- `item-dependency-levels.mjs check --run`: **no error**, 473 items, all
  labels equal computed whole-run levels.
- `manifest-deps.mjs` (batch 18): 8 items, 0 normalized, 0 errors.
- `manifest-integrity --run`: 80/80 pages in the manifests, no scope drift.
- `coverage-checklist --require-destination` (batch 18): 1 page, 23 harvested
  results, 0 errors, the recorded low-yield warning (7/23, explained at
  Step 1; Step 5 confirmation item).
- `validate-plan research/plan-spec.json --run`: FAIL run-wide (pre-existing
  errors on other pairs); for this pair the only remaining line is the
  `undeclared-prereq` for `rellich-kondrachov-and-sobolev-compactness`
  described above.
- `extcheck --quiet`: OK. `fwdcheck --quiet`: FAIL run-wide on unrelated
  published items; for this pair only the two forward-undeclared links to the
  missing plan entry and the unplanned batch-16 supplier links, both open
  obligations recorded above. `pathcheck`: no error for this category.

## Handoff

- **Completed IDs (8/8 authored):** all eight items above carry complete
  Statements/Examples, Facts, proofs/verifications, provenance, sources and
  dependency metadata; both pages exist with the correct item/example lists;
  coverage unchanged and clean; proof contracts cover 8/8.
- **Added suppliers:** none invented; no new IDs were created. Dependency
  additions are published mathematical suppliers only
  (`def-divergence-and-curl-of-a-c1-vector-field`,
  `lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
  `thm-choice-implies-dependent-implies-countable-choice`,
  `def-countable-choice`, `cor-volume-of-a-closed-three-ball`, and the
  item-2 and item-6 dep reconciliations listed above).
- **Published concerns:** none new. The earlier statement repair (Carleman
  weight clause) and the two proof repairs are recorded here for Steps 5–8;
  they are local draft-item repairs, not published-content edits. The
  pre-existing `thm-hilbert-basis-theorem` import drift is unrelated and
  owner-held.
- **Open obligations:** (i) the seven still-missing batch-16 suppliers with
  the exact consumer/step map above, requiring owner resolution of the eight
  escalated item decisions once they land (the
  `lem-em-spherical-harmonic-basis-and-addition` use was reconciled after it
  landed; the recorded escalate receipt predates that and the decision stays
  owner-held); (ii) the
  `rellich-kondrachov-and-sobolev-compactness` `P`-context plan amendment for
  Step 4; (iii) the normal independent Steps 5–8 audit.
- Item decisions recorded with `step3-decisions.mjs record-item` — decision
  `escalate` for all eight (no accept/repaired claim is made while declared
  suppliers are unfinished); no `--owner` use, no judge or audit stamps.
