# Batch 37 notes — `em-lorentz-covariant-formulation` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **353**, B page order **354**, category
`classical-electromagnetism`, library `physics`. Final inventory: **5 A items + 2 B items**,
all seven recorded `ready` with current dependency hashes. Written only: the batch manifest,
the batch coverage file, the consumer-batch cross-dependency input (60 rows), the seven
`step1-*` readiness records, the tool-refreshed unified ledger and this note. No item file,
page, shared plan, published item, engine state or verdict was edited.

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
(this page: **no-drift**), the design section `research/plan-classical-electromagnetism-track.md`
L2134–L2175, the source inventory `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`
(items 2662–2779), the completed arguments `completed-expansion-arguments.md` C1–C5 and O1,
the worked examples `worked-example-verifications.md` X8, the closure ledger
`research/first-principles-2026-10-03/classical-electromagnetism/closure-ledger.json`, the
review evidence `research/physics-em-sr-40-2026-10-08-wave-scaffold-round1.review-evidence.json`
(the approved future contract of `pthm-em-observer-field-and-doppler`),
`research/physics-em-sr-40-2026-10-08-em-tensor-conventions-proposal.json`, the scaffold-repair
and reconciliation directions, `research/plan-spec.json`, and the current native manifests of
every supplier batch (1, 2, 3, 7, 8, 9, 11, 14, 23, 32, 33).

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L2134 ff.) and the current
   `research/plan-spec.json` entries 353/354 agree exactly on page ids, kind, orders,
   category, library `physics`, titles, companion links and declared `requires`
   (`em-vacuum-waves-and-polarization`, `sr-light-and-doppler`). The manifest keeps those
   two `requires` unchanged; every added item dependency is homed in the transitive closure
   of that declaration, so **no page-prerequisite repair was needed** and `validate-plan`
   reports no `undeclared-prereq` for this page. The design's source reading legend for the
   pair (T, F, E, O) is satisfied by the three fetched full treatments recorded in the
   coverage file (Tong, Fitzpatrick, Beisert).
2. **A/B counts preserved.** Design A=5 / B=2; scaffolded A=5 / B=2; cap 100 each. The
   superseded older design (`prose-scaffold-previous-design.md`) listed A=8 by including
   `post-em-minkowski-physical-model`, `def-em-relativistic-worldlines-frames` and
   `def-em-electromagnetic-tensor` here; the current plan homes those on
   `em-primitives-and-postulates` (batch 23), and this batch consumes them from there. This
   is historical supersession under the current plan, not a dropped claim.
3. **Recorded title relabelling (not a scope reduction).** The design title of
   `ex-em-constant-field-trajectory` is "Relativistic uniform electric/magnetic external-field
   motion". The only promised worked computation in `worked-example-verifications.md#X8` is
   the uniform **electric** field with `B=0` (exact trajectory `p=qE0t e1`, the subluminal
   bound, and the comparison with the unscoped Newtonian extrapolation); no magnetic-field
   trajectory is promised anywhere in the research closure. The scaffolded title is
   "Exact trajectory in a uniform electric field and the failure of the unscoped Newtonian
   extrapolation" so that the public label does not claim unscaffolded content. All promised
   claims are preserved. Two further labels were enriched without changing content
   ("Tensor Maxwell equations equal the four laboratory Maxwell equations",
   "The four-force equation reproduces the coordinate Lorentz force and power").
4. **Design dep arrays kept as the core; only actually-used suppliers added.** Every added
   `deps` entry is consumed by the statement, the well-definedness or the recorded proof
   strategy (per-item lists below). Notably:
   `pthm-em-observer-field-and-doppler` keeps the five approved suppliers of the review
   evidence and adds `def-em-plane-wave-definition`, `pthm-em-lorentz-field-transform`,
   `post-sr-ideal-plane-wave-model` (the adopted frequency-reading rule, an explicit physical
   premise of the Doppler clause), `thm-sr-proper-time-and-observer-decomposition`,
   `def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`, `def-cross-product-in-r3`
   and `def-euclidean-inner-product`. `pthm-em-covariant-stress-energy` keeps the four design
   deps and adds `pthm-em-tensor-maxwell-equivalence` (the (TM1)/(TM2) tensor form of Maxwell
   used in the divergence computation), `post-em-vacuum-maxwell`, `def-em-electromagnetic-tensor`,
   `def-em-fields`, `def-em-sources`, `def-em-lab-geometry`, `def-em-si-conventions`,
   `def-ck-tensor-field-on-minkowski-space`, `pthm-em-poynting-balance`, the partial-derivative,
   divergence/curl, cross-product, inner-product and product-rule suppliers.
   `pthm-em-relativistic-lorentz-force` keeps its five design deps and adds the field, source,
   unit, worldline, physical-model, proper-time and real-analysis suppliers used by the
   coordinate reduction and the uniform low-speed bounds. The two examples keep their single
   design suppliers and add only the definitions, units and elementary algebra actually used.
5. **History note (C1).** The research argument C1 names a `def-em-covariant-sign-conventions`;
   the current native manifest fixes those conventions inside `def-em-electromagnetic-tensor`
   (batch 23), and reconciliation 5's owner direction fixes `F_0i=-E_i/c`, `F_ij=ε_ijkB_k`,
   `F^{0i}=E_i/c`, observer `e=+E/c`, `b=-B`, dual contraction `+4E·B/c`, Maxwell
   `∂_μF^{μν}=-μ0 j^ν`. The scaffold uses exactly that interface; no duplicate sign-convention
   item was minted, and the alternative `F_SR=-F_EM` dictionary is only referenced through
   `thm-sr-antisymmetric-observer-decomposition` where its optional clause is used as a check.

## Inventory decisions (recorded, not silent)

- `pthm-em-tensor-maxwell-equivalence` (physics-theorem, level 14): the four smooth-branch SI
  equations hold **iff** `∂_μF^{μν}=-μ0j^ν` (ν=0..3) and the cyclic identity
  `∂_λF_μν+∂_μF_νλ+∂_νF_λμ=0` hold; the eight independent scalar components are displayed,
  repeated-index instances vanish by alternation, and form-invariance under proper
  orthochronous changes of inertial description is proved from the constant component law and
  `Λ^TηΛ=η`. Weak branch, singular support and the converse to the wave equations are excluded.
- `pthm-em-lorentz-field-transform` (physics-theorem, level 15): the exact boost components for
  `0≤β<1` along `e_1` (`E'_∥=E_∥`, `B'_∥=B_∥`, `E'_⊥=γ(E+v×B)_⊥`, `B'_⊥=γ(B-v×E/c²)_⊥`),
  the invariance of `|B|²-|E|²/c²` and `E·B`, the rotation law `E'=RE, B'=RB` with the
  determinant-one cofactor identity, the general case via the unique factorization
  `Λ=B(-β)R̂`, and the form invariance of the smooth Maxwell branch by chaining the equivalence
  in both charts.
- `pthm-em-observer-field-and-doppler` (physics-theorem, level 16): the observer decomposition
  `e_a=F_ab n^b`, `b_a=(*F)_ab n^b`, the reconstruction, the laboratory components
  `e_i=(γ_w/c)(E_i+(w×B)_i)`, `b_i=-γ_w(B_i-(w×E)_i/c²)`, the measured vectors `E_n=c e^♯`,
  `B_n=-b^♯` and their rest-frame components (the same-page boost law with `v=w`); the plane
  wave's phase covector is future null and nonzero, so the exact SR Doppler/aberration formulas
  apply to the reading `ω_n=γ_w(1-w·s/c)ω`. The identification with apparatus readings is the
  explicit ideal-detector model assumption (A1) plus the adopted ideal-plane-wave model; no
  quantum photon, calibration, accelerated-observer or empirical claim.
- `pthm-em-relativistic-lorentz-force` (physics-theorem, level 18): from the corrected coupling
  `m dU/dτ=qΦ(U)` with `η(Φ(u),w)=F(w,u)`, the coordinate identities `dp/dt=q(E+v×B)`,
  `d(γmc²)/dt=qE·v` with `p=mγv`; norm preservation from the antisymmetry lemma (including its
  varying-field clause, so no derivative of the field is used); uniform low-speed bounds
  `|γ-1|≤(|v|²/c²)/(2(1-δ²)^{3/2})` and `|γ-1-|v|²/(2c²)|≤(3/8)(1-δ²)^{-5/2}(|v|²/c²)²`
  with the induced bounds for `p` and `γmc²`, derived from `cor-mean-value-theorem`
  (first-order bound `|f(z)-1|≤z sup|f'|`) and `thm-cauchy-mean-value` applied to
  `q(s)=f(s)-1-s/2` and `g(s)=s²` together with one further mean-value step for `f'`,
  which gives exactly the stated second-order constant `3/8` for `f(z)=(1-z)^{-1/2}`. No trajectory approximation, self-field, radiation reaction,
  monopole or variable mass.
- `pthm-em-covariant-stress-energy` (physics-theorem, level 19): `T^{μν}=μ0^{-1}(F^{μα}F^ν{}_α-¼η^{μν}F²)`
  is symmetric, traceless and a type-(2,0) tensor; components `T^{00}=u`, `T^{0i}=S_i/c=cg_i`,
  `T^{ij}=-σ_ij`; under the smooth branch `∂_μT^{μν}=-f^ν` with `f^ν=F^{νλ}j_λ`, the ν=0 and
  spatial components coinciding with the independently proved local identities of
  `pthm-em-poynting-balance` and `pthm-em-momentum-balance`; conditional total conservation with
  an adopted `C¹` symmetric matter tensor, the finite box/slice identities of the SR
  finite-flux theorem, and the divergence-free angular current. Products and singular support
  excluded; no matter tensor derived from vacuum Maxwell.
- `ex-em-boosted-fields-example` (example, level 16): `E≡E0e2`, `B≡0`, boost along `e_1` gives
  `E'=γE0e2`, `B'=-γβE0e3/c`, with the invariant check `|B'|²-|E'|²/c²=-E0²/c²` and `E'·B'=0`.
- `ex-em-constant-field-trajectory` (example, level 19): the exact solution in `E≡E0e1`, `B≡0`,
  `v(t)=cht/√(1+h²t²)e1`, `p=qE0t e1`, `x(t)=x0+(c/h)(√(1+h²t²)-1)e1` for `h≠0` (constant
  curve for `h=0`), `|v|<c` at all finite times, the work-energy identity, and the contrast
  with the unscoped Newtonian extrapolation (`|v_N|>c` for `|t|>1/|h|`).

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded (batches 1, 2,
3, 7, 8, 9, 11, 14, 23, 32 and 33); all out-of-run suppliers are published items homed on
pages inside the transitive closure of this page's declared `requires` (verified against
`library/` homes and `plan-spec.json`; `validate-plan --run` reports no error for page
353/354). Computed whole-run labels (tool, not design):

| item | level | max in-run supplier |
|---|---|---|
| `pthm-em-tensor-maxwell-equivalence` | 14 | `def-em-electromagnetic-tensor` / `post-em-vacuum-maxwell` (13) |
| `pthm-em-lorentz-field-transform` | 15 | `pthm-em-tensor-maxwell-equivalence` (14) |
| `pthm-em-observer-field-and-doppler` | 16 | `pthm-em-lorentz-field-transform` / `pthm-em-plane-wave-maxwell` / `pthm-sr-null-wave-doppler-and-aberration` (15) |
| `pthm-em-relativistic-lorentz-force` | 18 | `post-em-lorentz-coupling` (17) |
| `pthm-em-covariant-stress-energy` | 19 | `pthm-em-momentum-balance` / `pthm-em-poynting-balance` (18) |
| `ex-em-boosted-fields-example` | 16 | `pthm-em-lorentz-field-transform` (15) |
| `ex-em-constant-field-trajectory` | 19 | `pthm-em-relativistic-lorentz-force` (18) |

`research/physics-em-sr-40-2026-10-08-batch-37.cross-batch-dependencies.json` contains 60
rows: two page rows (one per declared `requires` page) and 58 item rows, one per declared
cross-batch edge (8 for the equivalence item, 10 for the boost item, 11 for the observer
item, 11 for the four-force item, 13 for the stress-energy item, 2 and 3 for the two
examples). After the refresh the unified ledger shows **no batch-37 consumer edge without a
review row and no orphaned review**; all rows are `open` (suppliers scaffolded, not authored).
The §-level drift review's "no-drift" verdict for this page was re-checked: all item-level
uses of SR and EM suppliers remain inside the page's transitive requirement closure.

## Axiom-of-choice declarations and exact uses

None. No batch-37 item declares or inherits `AC`, `AC_ω` or any choice principle: the
component equivalences and transformation laws, the boost and invariant computations, the
four-force reduction, the low-speed mean-value bounds, the tensor-component algebra and the
observer/plane-wave readings are finite-dimensional or one-variable real analysis. In
`pthm-em-covariant-stress-energy` only the *local* identities of `pthm-em-poynting-balance`
and `pthm-em-momentum-balance` are compared with tensor components; their `AC_ω`-dependent
fixed-volume divergence-theorem clauses are not consumed, so no choice assumption is
inherited. The finite-box clause uses `thm-sr-stress-balance-and-finite-flux`, which states
that it uses no choice principle.

## Sources (two-treatment rule, dispositions, fetch evidence)

Three complete independent treatments were read in their retained full texts and stamped:

1. **D. Tong, Electromagnetism (Cambridge Part II lecture notes, 2026 author-hosted revision,
   236 pp.)**, §4.3.1 pp. 84–87 and §5.1–§5.6 pp. 95–133: `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`;
   stamp: 1 882 418 bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages (2026-10-08T23:15:32Z).
   13 harvested rows: 8 `included`, 2 `inline`, 3 `deferred`.
2. **R. Fitzpatrick, Classical Electromagnetism (complete author-hosted HTML lecture notes)**,
   chapter "Relativity and electromagnetism", nodes 106–133:
   `https://farside.ph.utexas.edu/teaching/em/lectures/node121.html`; stamp: 24 042 bytes,
   sha256_16 `9a38d34b4318d408`, 3 455 text characters (2026-10-08T23:16:20Z). 15 harvested
   rows: 6 `included`, 2 `inline`, 7 `deferred`. **Recorded URL recovery**: the chapter
   table-of-contents URL `node106.html` was live but carries only 833 extracted characters,
   below the full-text floor, so it cannot itself satisfy the `source-fetch-check` contract;
   the URL was changed to node 121 (a content section of the *same* complete note set), the
   six failed node106 attempts are preserved in `url_recovery_history` on the source row with
   a written explanation, and the replacement URL fetched and stamped on its first attempt.
   This is the alternate-location recovery for one treatment, not a dropped source.
3. **N. Beisert, Elektrodynamik, ETH Zürich 2024 FS (author-hosted 176-page script)**,
   §9.1–§9.4 pp. 9.1–9.13: `https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf`;
   stamp: 1 354 282 bytes, sha256_16 `a85f21ce710b509d`, 176 pages (2026-10-08T23:15:38Z).
   6 harvested rows: 4 `included`, 1 `inline`, 1 `deferred`.

All three sources use other sign and index conventions (`(+---)`, fourth-component or scaled
field tensor); every use and locator records the conversion to the framework's `(-+++)`,
`x^0=ct`, `F_0i=-E_i/c` dictionary. The coverage file holds 34 harvested rows in total:
18 `included`, 5 `inline`, 11 `deferred` with resolvable destinations
(`em-primitives-and-postulates`, `em-potentials-and-gauge`, `em-retarded-fields-and-radiation`,
`em-action-and-variational-formulation`, `sr-lorentz-transformations`, `sr-worldlines-and-clocks`),
and no out-of-scope rows. `source-fetch-check --stamp` reports **3/3 fetch-verified** and
check mode **3/3 resolved**; `url-sweep` (scratch output under `/tmp`) reports 4/4 live with
no suspect or recoverable URLs; `source-backing` reports every harvested result still backed
by an openable source.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-37 item** (stored
  labels equal the computed ones; no cycle). The remaining errors are `empty scaffold
  inventory` rows for batches 30 and 34–40 — a run-wide condition as sibling workers land,
  not a batch-37 finding.
- `manifest-deps.mjs` on the batch-37 manifest: 7 items, 0 errors.
- `content-policy.mjs --manifest-only` over **all run manifests**: **0 errors, 0 warnings**
  (399 scoped items).
- `validate-plan.mjs research/plan-spec.json --run …`: page 353 shows 5 items and page 354
  shows 2 items with their declared requires; **no error or warning names this page or any of
  its items** in any pass. The run-level result moved while sibling workers landed: an early
  pass showed four `b-leaf`/`undeclared-prereq` rows on batch 26's pair (cleared when that
  batch landed), one pass reported the whole run OK, and the last pass showed two
  `undeclared-prereq` rows on batch 34's `em-wave-interfaces-and-conductors` (a sibling
  batch in flight, outside this dispatch's authority). None of these is a batch-37 finding;
  the run-level gates remain held by the batches still landing (6 A/B pairs had no item
  list at the last observation: batches 30, 35, 36, 38, 39, 40).
- `coverage-checklist.mjs …batch-37.coverage.json --require-destination`: 1 page,
  **34 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp`: **3/3 fetch-verified** (stamps above);
  check mode resolves 3/3.
- `url-sweep.mjs` on batch 37 (scratch output under `/tmp`, run artifact untouched):
  **4/4 live**, 0 failed.
- `source-backing.mjs` with the batch liveness file: **every harvested result backed**.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; 60/60
  batch-37 consumer edges carry review rows, 0 orphaned reviews.
- `extcheck.mjs` (whole corpus): 26 654 items, 0 recorded-not-proved, 0 resting on them —
  batch-37 items declare no `proved_here: false`, `external_refs` or `forward_refs`, so the
  external-reference scope is vacuous for this batch.
- `step1-decisions.mjs check --run …`: 399 run items, 399 ready; **no batch-37 item open**
  (only the empty pages of other batches appear).
- **During-dispatch correction and re-record (recorded, not silent).** While re-verifying the
  proof route of `pthm-em-relativistic-lorentz-force` against its suppliers, the second-order
  low-speed constant `3/8` was found not to follow from two plain mean-value-theorem steps
  (those give the weaker constant `3/4`). The strategy now uses `thm-cauchy-mean-value`
  (published, homed on `the-derivative-and-mean-value-theorems`, inside this page's declared
  closure) for the exact constant, that supplier was added to the item's `deps` with role
  `mathematical-premise`, and the readiness records of `pthm-em-relativistic-lorentz-force`
  and of its consumer `ex-em-constant-field-trajectory` were re-recorded on the current
  hashes. The bound statement itself is unchanged. The same pass also made clause (c) of
  `pthm-em-observer-field-and-doppler` explicit that the decomposition and reconstruction are
  pointwise for every future unit observer while the frequency/aberration readings are stated
  for inertial observers (differentiating the decomposition adds derivatives of the observer
  field, so accelerating observers need their own analysis); the item's readiness record was
  re-recorded on the changed wording. All other checks above were re-run on the final files.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: cannot run to
  completion while any run manifest is still empty (`readRunManifestPages` fails on
  batch 30); a run-wide condition that clears as sibling workers land.

## Published defects and unresolved findings

No published defect was found in any supplier examined: the imported mathematical suppliers
(`def-cross-product-in-r3`, `def-euclidean-inner-product`, `def-determinant-of-a-linear-operator`,
`cor-mean-value-theorem`, `thm-real-power-continuity-and-derivatives`,
`thm-real-power-agrees-with-rational-exponent`, `def-rational-power`, `lem-rational-power-laws`,
`lem-rational-power-monotone`, `lem-of-inverse-positive`, `thm-chain-rule`,
`thm-algebra-of-derivatives`, `def-abs-value`, `lem-of-abs-value`, `lem-of-square-monotone`,
`thm-of-square-roots`, `def-vector-valued-derivative-and-integral`,
`def-divergence-and-curl-of-a-c1-vector-field`, `def-directional-and-partial-derivatives`)
are published with statements matching the uses recorded here, and the in-run suppliers
(`def-em-electromagnetic-tensor`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`,
`def-em-sources`, `def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`,
`def-em-relativistic-worldlines-frames`, `post-em-minkowski-physical-model`,
`def-em-vacuum-energy-flux`, `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance`,
`pthm-em-momentum-balance`, `pthm-em-plane-wave-maxwell`, `def-em-plane-wave-definition`,
`lem-em-boost-preserves-metric`, `lem-em-antisymmetric-tensor-contraction`,
`thm-sr-tensor-and-current-transformation`, `thm-sr-proper-orthochronous-lorentz-algebra`,
`thm-sr-antisymmetric-observer-decomposition`, `thm-sr-proper-time-and-observer-decomposition`,
`thm-sr-stress-balance-and-finite-flux`, `pthm-sr-momentum-and-four-force`,
`post-sr-massive-particle-dynamics`, `post-sr-ideal-clocks-and-light`,
`post-sr-ideal-plane-wave-model`, `pthm-sr-null-wave-doppler-and-aberration`) were read at
their current statements and match the recorded uses, including the owner-mandated corrected
sign convention of `lem-em-antisymmetric-tensor-contraction` (`η(Φ(u),w)=F(w,u)`,
`Φ(u)^μ=η^{μα}F_{αβ}u^β`) which the four-force consumer uses.

Unresolved findings, all outside batch 37's authority: (i) the run-level item gates (the
whole-run `item-dependency-levels` and `frontier-item-gate` runs) are held by the sibling
pairs still landing — 6 A/B pairs carried no item list at the last observation (batches 30,
35, 36, 38, 39, 40) — and by the sibling-batch `validate-plan` findings observed mid-run
(batch 26's four rows cleared when that batch landed; batch 34's two `undeclared-prereq`
rows were present at the last pass); (ii) the design-title relabelling and the dep-array
expansions recorded above, which are scaffold corrections for the ordinary review stages,
not certified proofs; (iii) the Fitzpatrick URL recovery recorded on the coverage row.
