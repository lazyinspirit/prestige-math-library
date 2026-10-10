# Batch 34 notes — `em-wave-interfaces-and-conductors` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **347**, B page order **348**, category
`classical-electromagnetism`, library `physics`. Final inventory: **8 A items + 3 B items**,
all eleven recorded `ready` with current dependency hashes. Only the batch manifest, the batch
coverage file, the consumer-batch cross-dependency input, the eleven `step1-*` readiness records
and this note were written; no item file, page, shared plan, published item, engine state or
verdict was edited. The manifest was prepared complete in `/tmp` and published by an atomic
rename (owner direction after the batch-11 transient).

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding; no
clause of it names this pair, and none was overridden), the Step-1 drift report
`research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md` (this page: **no-drift**), the design
section `research/plan-classical-electromagnetism-track.md` L2036–L2065, the full required design
sources (`proposed-inventory.json` items `def-em-medium-wave-parameters`, `pthm-em-conducting-skin-depth`,
`pthm-em-phase-matching`, `pthm-em-normal-fresnel`, `pthm-em-oblique-fresnel`,
`ex-em-skin-depth-approximation-example`, `ex-em-brewster-angle-example`,
`ex-em-evanescent-flux-example`; `definition-contracts.md#def-em-medium-wave-parameters`;
`core-conditional-proofs.md#K8`; `worked-example-verifications.md#X7`), the current native
manifests, `research/plan-spec.json` and the existing supplier statements on batches 13, 23 and 29.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L2036 ff.) and the current
   `research/plan-spec.json` entries 347/348 agree exactly on page ids, kind, orders, category,
   library `physics`, titles, companion links and declared `requires` (`em-material-response`,
   `em-vacuum-waves-and-polarization`). Verified mechanically; the plan's item arrays are empty by
   construction and this batch manifest is the scaffold record. `validate-plan` reports no error
   naming this page.
2. **A/B counts.** Design A=5 / B=3; scaffolded A=8 / B=3; cap 100 each. The three added A items are
   necessary local prerequisites, not padding: they are the only sound way to close the promised
   items (details in §3 below). Every promised item and claim of the design is preserved; nothing
   promised was trimmed, and the promised B page keeps exactly the three reserved examples.
3. **Recorded replacement of the design's provisional dep lists** (the design dep arrays are
   research context, not proof checks; every replacement is recorded here and in the manifest):
   - `pthm-em-phase-matching`: the design dep `pthm-em-plane-wave-maxwell` (batch 33) is a *vacuum*
     plane-wave theorem whose hypotheses (vacuum constitutive laws) do not apply inside a medium, so
     it is not a proof prerequisite of the medium phase-matching result; the medium amplitude
     conditions and dispersion are supplied by the new on-page
     `pthm-em-medium-plane-wave-fields`. The design dep `pthm-em-material-stationary-jumps` is kept
     with role changed from `physical-result` to `formulation-prerequisite`, because its hypothesis
     is a *compact* embedded hypersurface and cannot literally cover the noncompact plane interface:
     the four plane-interface identities are the stated interface hypothesis of the theorem (the
     supplier supplies their form and physical reading; this is recorded, not silently changed).
     The new mathematical prerequisite `lem-em-exponential-character-open-set-independence` closes
     the K8 "distinct exponential characters cannot cancel identically" step.
   - `pthm-em-normal-fresnel` and `pthm-em-oblique-fresnel`: the design dep
     `pthm-em-wave-energy-average` (batch 33) is a vacuum average theorem (vacuum `u`, `S` with
     `ε0,μ0`); inside media the stored-energy density, flux and their averages are those of the
     constant-model `pthm-em-restricted-material-energy` and clause (d) of the new
     `pthm-em-medium-plane-wave-fields`, which the scaffold uses instead. The design dep
     `pthm-em-phase-matching` and `lem-em-interface-wave-linear-system` are kept and used; the new
     `lem-em-admittance-interface-solve` supplies the complex-admittance algebra that the oblique
     (and Ohmic) cases require.
   - `pthm-em-conducting-skin-depth`: the K8 route's "Taylor remainder" requirement is realized by
     equivalent elementary bounded inequalities with explicit constants (the exact identity
     `q² = (b/2)(√(1+t²)−t)` with `t=a/b` and one-dimensional square-root inequalities); the claim is
     unchanged and no Taylor machinery is silently assumed. The scaffold additionally keeps the
     poor-conductor regime and the exact phase relation, both of which are stated in the design's
     sources for this branch (Griffiths Problem 9.19, Tong §7.6.2) and are part of "branch/regime".
   - **Title extensions, recorded.** `def-em-medium-wave-parameters` is titled for the full
     definition contract (lossless parameters *and* the complex propagation constant and skin
     depth); `pthm-em-normal-fresnel` is titled "…, with the Ohmic transmitting medium" because its
     clause (d) covers the finite-σ conducting surface (Tong §4.3.3, Griffiths §9.4.2), which the
     design's K8 route writes for general complex admittances; `pthm-em-oblique-fresnel` names
     Brewster and total internal reflection explicitly. No promised claim was weakened; each
     extension is a clause of a promised item.

## Inventory decisions (recorded)

**A page (8 items, in manifest order).**

- `lem-em-exponential-character-open-set-independence` (lemma, mathematics; scaffold-added). The
  mathematical content behind K8's "distinct exponential characters cannot cancel identically":
  (a) distinct characters `z↦e^{iλ_j·z}` are linearly independent on any nonempty open set;
  (b) the real-part grouping rule giving the coefficient relations `C_ν=0`. Proof strategy: an
  induction on the dimension with a self-contained one-dimensional annihilating-operator base case
  (`∏_{j≠j₀}(d/dt−iλ_j)` kills every other frequency), plus the grouping of `2Re`. No Dedekind-
  group-theoretic or holomorphic-identity machinery is needed, so no supplier outside this page's
  declared prerequisite closure is consumed (the earlier draft's Dedekind route was rejected for
  exactly that reason and is recorded here).
- `lem-em-admittance-interface-solve` (lemma, mathematics; scaffold-added). The two-equation
  interface system `E_i+E_r=E_t`, `Y_1(E_i−E_r)=Y_2E_t` for complex `Y_1,Y_2`: solution formulas,
  the identity `|r|²+(ReY_2/Y_1)|t|²=1` for real `Y_1>0`, its sign/passivity caveat, the
  pure-imaginary-admittance case `|r|=1` with `|t|>0`, and the real-positive specialisation
  agreeing with `lem-em-interface-wave-linear-system`.
- `def-em-medium-wave-parameters` (definition, physics; design item, contract-extended). Isotropic
  scalar branch at rest: `v=(εμ)^{-1/2}`, `Z=(μ/ε)^{1/2}`, `n=c/v`, `k(ω)=ω/v`; for `σ≥0` the
  complex propagation constant `κ(ω)=p+iq` as the unique root with `Re k≥0, Im k≥0` of
  `k²=εμω²+iμσω`, with explicit `p,q` from the formula of
  `thm-every-complex-number-has-a-square-root`; skin depth `δ=1/q` for `σ>0` and `δ=+∞` for `σ=0`;
  the finite-band caveat of `post-em-material-closure`(b) carried in the scope clause.
- `pthm-em-medium-plane-wave-fields` (physics-theorem; scaffold-added, the closure fix). Clauses:
  (a) the open-set amplitude-vanishing fact; (b) the **iff** between the four source-free
  macroscopic equations for the plane-wave fields `(E,H)` with `D=εE, B=μH, J_f=σE` and the four
  complex amplitude conditions `k·e=0, k·h=0, k×e=ωμh, k×h=−(ωε+iσ)e`; (c) structure and
  dispersion `k·k=εμω²+iμσω`, `h=k×e/(ωμ)`, the full transverse solution family; (d) the lossless
  real-wave case with the pointwise identities `E·B=0`, `B=k̂×E/v`, `|B|=|E|/v` and the period
  averages `⟨u⟩=ε|e|²/2`, `⟨S⟩=|e|²k/(2μω)=|e|²k̂/(2Z)=v⟨u⟩k̂`; (e) the evanescent branch with the
  exact decay factorisation, the general normal-flux formula and its vanishing for the TE/TM
  polarisations with positive tangential flux; (f) scope. This item is what makes the promised
  Fresnel and skin-depth items provable rather than assumed.
- `pthm-em-phase-matching` (physics-theorem; design item). Three nonzero, non-grazing plane waves
  at the plane interface of two lossless isotropic scalar media, with the four stationary interface
  identities: conclusion `κ_i=κ_r=κ_t` and `ω_i=ω_r=ω_t` for **complex** transmitted wavevectors
  too (so the evanescent branch is covered), coplanarity, and in the real case the reflection law
  `θ_r=θ_i` and Snell's law `n_1 sinθ_i=n_2 sinθ_t`. The proof combines the two tangential
  identities with the character lemma and a case analysis; the non-degeneracy
  (`e_j≠0`, `k_j·n≠0` ⇒ `e_j^τ≠0`, `h_j^τ≠0`) is proved, not assumed. Hypotheses actually used are
  recorded; the compact-interface caveat of `pthm-em-material-stationary-jumps` is recorded.
- `pthm-em-conducting-skin-depth` (physics-theorem; design item). Exact: `λ=p+iq`, the decay
  factorisation, `pq=b/2`, `δ=√(2(r+a))/b`; good-conductor regime with the explicit bounds
  `|q−√(b/2)|≤2t√(b/2)`, `|δ−√(2/b)|≤4t√(2/b)` for `t=εω/σ≤1/4`; poor-conductor regime
  `|q−(σ/2)√(μ/ε)|≤(t'²/4)(σ/2)√(μ/ε)` and `|δ−(2/σ)√(ε/μ)|≤(t'²/2)(2/σ)√(ε/μ)` for
  `t'=σ/(εω)≤1/2`; the exact quadrature ratio `q/p=√(1+t²)−t∈[1−2t,1]` for a real amplitude; the
  `σ=0` exclusion (`δ=+∞`) and the exclusion of the `σ→∞` ideal conductor.
- `pthm-em-normal-fresnel` (physics-theorem; design item + Ohmic clause). Common frequency from
  phase matching; the two vector interface equations reduce to `e_i+e_r=e_t`,
  `Y_1(e_i−e_r)=Y_2e_t` with `Y_1=1/Z_1`; amplitudes parallel to the incident one
  (`r=(Z_2−Z_1)/(Z_1+Z_2)`, `t=2Z_2/(Z_1+Z_2)`), the normal averaged fluxes, `R+T=1`; and the
  Ohmic case `Y_2=κ_2(ω)/(μ_2ω)` with `|r|²+(ReY_2/Y_1)|t|²=1`, the entering fraction being the
  absorbed normal flux (period-averaged local balance and Ohmic dissipation of
  `pthm-em-restricted-material-energy`).
- `pthm-em-oblique-fresnel` (physics-theorem; design item). TE and TM admittance systems with
  `Y^s=k_z/(μω)`, `Y^p=εω/k_z` in the fixed tangential-electric convention (the K8 sign caveat is
  recorded in the statement); amplitude formulas; the propagating branch with Snell's law and
  `R_χ+T_χ=1`; the Brewster criterion `Y^p_1=Y^p_2`, hence `tanθ_B=n_2/n_1` for equal μ with
  uniqueness and `r_s≠0` for `n_1≠n_2`; total internal reflection `|r_s|=|r_p|=1` with decaying
  transmitted field, nonzero `|t_χ|` and vanishing normal averaged flux; the critical-angle case
  `k_{t3}=0` with `|r_s|=|r_p|=1`.

**B page (3 items, exactly the design reservation).**

- `ex-em-skin-depth-approximation-example`: declared `ε=4 F/m, μ=1 H/m, σ=100 S/m, ω=3 s^{-1}`,
  `a=36, b=300, t=3/25`; exact identities and the two explicit bounds checked numerically
  (`0.71159≤2.93939`, `0.00504≤0.03919`); the `σ=0` exclusion. Declared model parameters only.
- `ex-em-brewster-angle-example`: declared `n_1=1, n_2=3/2`, equal μ; exact
  `sinθ_B=3/√13`, `cosθ_B=2/√13`, `θ_B+θ_t=π/2`, `Y^p_1=Y^p_2=√13/(2cμ)`, `r_p=0`, `t_p=1`,
  `r_s=−5/13`, `t_s=8/13`, `R_s+T_s=25/169+144/169=1`.
- `ex-em-evanescent-flux-example`: declared `n_1=3/2, n_2=1`, `sinθ_i=4/5`; exact
  `κ=(6/5)(ω/c)`, `β=(√11/5)(ω/c)`, `Y^s_1=9/(10μc)`, `Y^s_2=i√11/(5μc)`, `|r_s|=1`,
  `|t_s|²=324/125`, reflection phase `−2 arctan(2√11/9)`, decay factor `e^{−√11/5}≈0.51514` per
  `c/ω`, zero normal and positive tangential averaged flux. No information-speed claim.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength, including the two compact-interface caveats and the
absorption clause. In-run suppliers are batches 13 (`def-em-complex-plane-wave`,
`lem-em-period-average`, `lem-em-interface-wave-linear-system`), 23 (`def-em-lab-geometry`,
`def-em-si-conventions`, `def-em-fields`) and 29 (`post-em-material-closure`,
`def-em-polarization-magnetization`, `pthm-em-macroscopic-maxwell`,
`pthm-em-material-stationary-jumps`, `pthm-em-restricted-material-energy`); every other dep is a
published imported mathematical item on disk. Computed whole-run labels (tool, not design):

| item | level | in-run deps (max supplier) |
|---|---|---|
| `lem-em-exponential-character-open-set-independence` | 0 | none in run |
| `lem-em-admittance-interface-solve` | 3 | `lem-em-interface-wave-linear-system` (2) |
| `def-em-medium-wave-parameters` | 17 | `post-em-material-closure` (16) |
| `pthm-em-medium-plane-wave-fields` | 18 | `pthm-em-restricted-material-energy` (17) |
| `pthm-em-phase-matching` | 19 | `pthm-em-medium-plane-wave-fields` (18) |
| `pthm-em-conducting-skin-depth` | 19 | `pthm-em-medium-plane-wave-fields` (18) |
| `pthm-em-normal-fresnel` | 20 | `pthm-em-phase-matching` (19) |
| `pthm-em-oblique-fresnel` | 20 | `pthm-em-phase-matching` (19) |
| `ex-em-skin-depth-approximation-example` | 20 | `pthm-em-conducting-skin-depth` (19) |
| `ex-em-brewster-angle-example` | 21 | `pthm-em-oblique-fresnel` (20) |
| `ex-em-evanescent-flux-example` | 21 | `pthm-em-oblique-fresnel` (20) |

`research/physics-em-sr-40-2026-10-08-batch-34.cross-batch-dependencies.json` contains **44 rows**:
two page rows (one per declared `requires` page) and 42 item rows, one per declared cross-batch
edge. The unified ledger shows **no batch-34 consumer edge without a review row and no orphaned
review**; all rows are `open` (suppliers scaffolded, not authored). No other batch currently
declares an edge into this page or into any batch-34 item.

## AC declarations

No batch-34 item declares or uses any choice principle: the character lemma, the admittance lemma,
the parameter definition, the amplitude-condition computation, the phase-matching case analysis,
the skin-depth inequalities and all three examples are choice-free constructions over exhibited
finite data. The absorbed-flux reading uses only the local (choice-free) balance clause of
`pthm-em-restricted-material-energy`, not its fixed-volume AC_ω clause; no AC_ω edge is declared.
The compact-interface supplier `pthm-em-material-stationary-jumps` carries AC_ω, but the
scaffolded theorems use it as formulation context only (the plane-interface identities are stated
as hypotheses), so no AC_ω hypothesis is inherited into any batch-34 conclusion.

## Sources (two-treatment rule, dispositions, fetch evidence)

Two complete independent primary treatments were fetched, stamped and read:

1. **D. Tong, Electromagnetism (Cambridge Part II lecture notes, 2026 author-hosted revision,
   236 pp.)**, §4.3.3 pp. 89-90 (reflection off a conductor), §7.4 pp. 185-188 (interface setup,
   phase matching, reflection and Snell laws), §7.4.1 pp. 189-191 (Fresnel equations, Brewster),
   §7.4.2 pp. 191-193 (total internal reflection, evanescent wave), §7.6.2 pp. 207-209 (waves in
   conductors, effective permittivity, dispersion, skin depth, phase relation).
   URL `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`; stamp: 1 882 418 bytes,
   sha256_16 `b99b41156dfe6cd9`, 236 pages.
2. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999, 596-page retained scan)**,
   §9.3.1 pp. 382-383, §9.3.2 pp. 384-386 with Problems 9.13-9.14, §9.3.3 pp. 386-392 with
   Problems 9.15-9.16, §9.4.1 pp. 392-396 with Problems 9.18-9.20, §9.4.2 pp. 396-398 with
   Problem 9.21, and Problem 9.37 pp. 413-414. URL (stamped) as in the coverage file; stamp:
   13 484 424 bytes, sha256_16 `ab7b67a3f6d60049`, 596 pages. The retained scan has OCR noise in
   its text layer; displayed formulas were cross-checked against Tong and the local computations.
   §9.4.3 (frequency dependence of permittivity, pp. 398-413) was **not** read and no scaffolded
   claim rests on it.

`source-fetch-check --stamp` reports 2/2 fetch-verified and 2/2 resolved; `url-sweep` reports 2/2
live; `source-backing` reports every harvested result still backed by an openable source (6
distinct authored results across the `included` rows). The coverage checklist gives 24 harvested
rows (10 Tong + 14 Griffiths) with explicit dispositions: 16 `included` rows covering the 11
scaffolded items, 1 `inline` absorption (Griffiths Problem 9.15's one-variable exponential
identity, absorbed into `pthm-em-phase-matching` through the character lemma), 2 `deferred` rows
with named destinations (`em-waveguides-and-cavities` for the ideal-conductor reflection, normal
and oblique, whose PEC boundary class is declared there; `em-material-response` for the
Drude/plasma-frequency material model), and 5 `out-of-scope` rows with specific reasons (numerical
exercises with measured silver/copper/water data and optical or radio frequencies, which this pair
deliberately replaces with declared, non-measured parameters).

**Recorded source deviation.** The historical design's source legend for this page names
T (Tong), F (Fitzpatrick nodes 98, 102-104) and E (Beisert, ETH §§12.2, 13.1). This dispatch
retained Tong (the design's primary source) and used the run's already-verified complete Griffiths
textbook treatment in place of retrieving F/E, exactly as batches 32 and 33 recorded for the
sibling pairs; no claim rests on F/E, which were not fetched. The two-treatment rule (at least two
independent complete treatments, including a book or full lecture-note set) is satisfied by Tong +
Griffiths, both read over the cited ranges.

The two scaffold-added mathematical lemmas cite sources read directly for this batch:
Physicspages, "Linearly independent exponentials" (2 pp., read in full; the elementary
annihilating-operator/differentiation argument) and J. S. Milne, Fields and Galois Theory v5.10,
Theorem 5.14 (fetched and read; Dedekind's character independence, cited as the
everywhere-vanishing companion of the lemma). The Fresnel admittance lemma cites the Tong and
Griffiths Fresnel systems read above.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-34 item** (stored labels
  equal the computed ones; no cycle). The remaining errors are `empty scaffold inventory` rows for
  batches 30 and 35–40 — a run-wide condition as sibling workers land, not a batch-34 finding.
- `step1-decisions.mjs check --run …`: 410 run items, 410 ready; **no batch-34 item open**; the
  only open entries are the empty pages of batches 30 and 35–40.
- `content-policy.mjs --manifest-only` over **all run manifests**: **0 errors, 0 warnings**
  (410 scoped items).
- `manifest-deps.mjs` over all run manifests: 410 items, 0 errors.
- `validate-plan.mjs research/plan-spec.json --run …`: **OK** — no item-level cycles, forward
  references, B-page dependencies or unresolved ids; the earlier transient `undeclared-prereq`
  errors (Dedekind/group-homomorphism homes outside this page's declared closure, raised by the
  first draft of the character lemma) were resolved by replacing that draft's proof route with the
  self-contained induction now recorded, not by editing the plan. Only pre-existing
  `redundant-prereq` warnings remain, none naming this page.
- `coverage-checklist.mjs …batch-34.coverage.json --require-destination`: 1 page, **24 harvested
  results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp`: **2/2 fetch-verified** (stamps above); check mode
  resolves 2/2.
- `url-sweep.mjs` on batch 34 (scratch output under `/tmp`, run artifact untouched): **2/2 live**,
  no suspect or recoverable URLs.
- `source-backing.mjs` with the batch liveness file: **all harvested results backed**.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; **44/44 batch-34
  consumer edges carry review rows, 0 orphaned reviews**.
- `extcheck.mjs` (whole corpus): 26 654 items, 0 recorded-not-proved, 0 resting on them —
  batch-34 items declare no `proved_here: false`, `external_refs` or `forward_refs`, so the
  external-reference scope is vacuous for this batch.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: cannot run to completion
  while any run manifest is still empty (`Invalid or empty current page in …batch-30.pages.json`);
  a run-wide condition that clears as sibling workers land. The manifest-only external-reference
  check will be meaningful once every inventory exists.

## Published defects and unresolved findings

No published defect was found in any supplier examined: the batch-13, batch-23 and batch-29
items consumed here are scaffold records whose statements match the uses recorded in the
cross-batch input (including the compact-interface caveat of
`pthm-em-material-stationary-jumps` and the constant-model scope of
`pthm-em-restricted-material-energy`), and the imported mathematical items (`def-complex-exponential`,
`thm-complex-exponential-is-entire-with-derivative-itself`, `thm-chain-rule-for-total-derivatives`,
`thm-algebra-of-derivatives`, `def-directional-and-partial-derivatives`,
`def-divergence-and-curl-of-a-c1-vector-field`, `def-euclidean-inner-product`,
`def-cross-product-in-r3`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`,
`thm-of-square-roots`, `thm-every-complex-number-has-a-square-root`,
`def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`,
`thm-complex-numbers-form-a-field`, `def-complex-numbers-and-arithmetic`,
`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `lem-of-square-monotone`,
`prop-of-multiply-inequalities`, `lem-of-sign-rules`) are published with statements matching these
uses. Unresolved findings, all outside batch 34's authority: (i) the run-wide empty scaffold
inventories of batches 30 and 35–40 at the time of writing, which hold the run-level gates;
(ii) the two `deferred` source dispositions above (ideal-conductor reflection to
`em-waveguides-and-cavities`, Drude/plasma material models to `em-material-response`) should be
confirmed when those pages are scaffolded; (iii) the recorded scaffold replacements of the
design's provisional dep lists (`pthm-em-plane-wave-maxwell` and `pthm-em-wave-energy-average` by
the on-page medium items) and the role change of `pthm-em-material-stationary-jumps` are
recommended for the owner/reconciliation record. No escalation is raised: every assigned item has
a complete proof strategy with met in-scope prerequisites.

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gates follow construction; these readiness records are not
independent mathematical approval.
