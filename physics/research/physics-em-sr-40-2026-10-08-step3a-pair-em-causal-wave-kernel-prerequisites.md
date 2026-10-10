# Step 3a scope report — pair `em-causal-wave-kernel-prerequisites`

- Run: `physics-em-sr-40-2026-10-08` (role alpha, Step 3a scope review)
- A page: `em-causal-wave-kernel-prerequisites` (order 321, category
  `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-causal-wave-kernel-prerequisites-examples` (order 322)
- Batches: 21. Current inventory: **6 A items + 1 B item** (471 run items total).
- Scope decision: **sufficient** (recorded with `step3-decisions.mjs record-scope`).
- Date of review: 2026-10-09.

## 1. Design, plan and manifest congruence

Compared the manifest (`research/physics-em-sr-40-2026-10-08-batch-21.pages.json`)
with the prose design `research/plan-classical-electromagnetism-track.md`
L1509–L1601 (quoting
`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`),
the plan (`research/plan-spec.json` orders 321/322), the batch notes
(`research/physics-em-sr-40-2026-10-08-batch-21.notes.md`) and the coverage file
(`research/physics-em-sr-40-2026-10-08-batch-21.coverage.json`).

- Page metadata agrees exactly: ids, kind A/B, orders 321/322, companion links,
  category, `library: mathematics`, title "Causal kernels, gauge and point fields
  after wave existence", and the design's declared earlier prerequisite
  `em-wave-equation-prerequisites`.
- All four designed A items are present with design `reference`/`design_state`
  retained: `lem-em-retarded-wave-kernel` (design W3),
  `lem-em-gauge-wave-reachability` (W6),
  `lem-em-smooth-forced-maxwell-cauchy-system` (W7),
  `lem-em-point-retarded-potential-and-fields` (R2). Computed run levels
  3/3/3/4 match the design's own labels. No designed claim was dropped or
  narrowed.
- Three owner-authorized additions on top of the design: (i)
  `def-em-potential-gauge-and-field-conventions` (level 0), the local
  mathematical definition of potential pair, gauge transformation, field
  conventions, Lorenz divergence and wave expression needed to make the four
  designed items well-defined (design decision recorded in the batch notes,
  decision 1); (ii) `thm-em-retarded-point-distributional-maxwell` (level 5),
  directed by the owner in `…-owner-authoring-direction.md`
  §"Reconciliations8–10" ("Fully author the necessary new pure-math
  `thm-em-retarded-point-distributional-maxwell` on the existing
  causal-wave-kernel A page after the point-potential supplier"); (iii) B item
  `ex-em-causal-wave-kernel-prerequisites-explicit-checks` because the design
  reserved no B item and the manifest gate requires a nonempty B inventory — a
  genuine check (static specialization, explicit nonzero-G Lorenz gauge
  transformation, cone-support sharpness), homed as a B leaf, depended on by no
  A item.
- The batch notes' "5 A items" count is stale relative to the current manifest;
  the manifest and the reconciliation10/11 receipts
  (`…-reconciliation10.final.json`, `…-reconciliation10.accepted-proposals.json`)
  are authoritative and include the sixth A item.

## 2. Coverage of the intended subject

Subject check against the page purpose (mathematical support, after wave
existence, for the later potentials/gauge, retarded-point and radiation
branches):

- *Causal kernel*: `lem-em-retarded-wave-kernel` defines $K$ as a distribution,
  proves absolute convergence and fixed-support seminorm continuity, support
  equal to the retarded cone (with apex sharpness), the pairing/convolution
  identity $K*h$ with $W(K*h)=h$ pointwise, and $WK=\delta_{(0,0)}$; it explicitly
  asserts no smoothness of $K$ on the cone and excludes the advanced solution.
- *Gauge*: `lem-em-gauge-wave-reachability` states existence of a $C^\infty$
  slab gauge function with zero Cauchy data solving $W\chi=G$, preservation of
  $E,B$, arrival in Lorenz gauge, and uniqueness of differences; the design's
  boundary/decay caveats ("prescribed boundary values on a bounded spatial
  domain are outside this result") are retained in the statement.
- *Point fields*: `lem-em-point-retarded-potential-and-fields` states the
  retarded root pairings, the exact convolution identities for $\rho,J$ against
  the kernel, the $C^2$ potentials and $C^1$ Liénard–Wiechert fields with the
  design's exact formulas, higher-$C^k$ branches, and the no-self-force /
  no-radiation-reaction caveats;
  `thm-em-retarded-point-distributional-maxwell` proves the distributional
  wave/Lorenz/Maxwell equations for the proper point-history pair, identifies
  the $L^1_{\mathrm{loc}}$ field representatives and keeps the
  zero-extension-is-a-convention and no-free-addition qualifications.
- *Definitions*: all technical objects ($K$, $\rho,J$, retarded root, $\Phi,
  \Upsilon$, $\mathcal E,\mathcal B$, gauge vocabulary) are defined locally or
  by exact earlier suppliers; the definition item asserts no existence claims.

Source coverage (batch-21 coverage file) documents three independently fetched,
stamped treatments with exact section/page locators and dispositions:
Tong *Electromagnetism* (2026 author-hosted printing, §6.1, §6.4.1, §6.4.3;
covariant/emitted-power material out-of-scope to `em-lorentz-covariant-formulation`
and `em-retarded-fields-and-radiation`), Teschl *PDE* (2025 archived manuscript,
§7.1 incl. Problem 7.9 and Theorem 7.12; §7.2–§7.3 out-of-scope with reasons),
Ivrii *PDE* (Ch. 9, 11; Ch. 11.3–11.4 and Ch. 12–13 out-of-scope). The new
distributional theorem's row is honestly marked `inline`: Tong §6.1.3 supplies
background only, while the all-time point-history transfer, global
$L^1_{\mathrm{loc}}$ representatives and $C^1$ cutoff argument are declared
local extensions, not attributed to the smooth-source passage.

Held-out honesty: this is a mathematics page, and every item explicitly
disclaims physical adoption, self-energy, self-force and empirical content; no
statistical or experimental claims are made or needed.

## 3. Prerequisites and unmet-prerequisite assessment

- Transitive closure check over all 7 items: 88 dependency IDs, every one
  resolving either to a published on-disk supplier (`items/<id>.md`, including
  the pinned read-only imports) or to a planned in-run scaffold. No dependency
  is absent from both the published library and the current scaffold.
- The 13 run-scaffold-only dependencies home on
  `em-elementary-mathematical-prerequisites` (305, `lem-em-point-current-continuity`,
  `lem-em-parameter-integrals`), `em-expanded-analysis-prerequisites` (310,
  `lem-em-global-retarded-root`, `lem-em-spherical-mean-wave-identity`),
  `em-wave-equation-prerequisites` (311, `thm-em-wave-cauchy-kirchhoff`,
  `lem-em-spherical-mean-family-smoothness`) and this pair — all inside the
  transitive `requires` closure of order 321. Supplier interfaces were read at
  statement level and cover the declared uses: the wave theorem keeps clauses
  (a)–(d) with AC$_\omega$; `lem-em-global-retarded-root` now states the $C^1$
  root branch and the $C^k$/$C^\infty$ branches ("no higher regularity follows
  from a merely $C^1$ trajectory"), resolving the batch-21 finding 1 recorded
  against batch 16; `lem-em-point-current-continuity` is stated for open $I$
  with the properness hypothesis and endpoint variant used by consumers.
- Page declarations: the batch-21 finding 2 (undeclared published homes) is
  repaired. Page 321's `requires` now names `em-wave-equation-prerequisites`
  plus the three genuinely used published pages
  `density-separability-and-convolution-in-lp`,
  `fubini-and-change-of-variables`, `the-topology-of-euclidean-space`;
  all three exist as published imports on disk
  (`library/measure-theory/…`, `library/real-analysis/…`,
  `library/topology/…`, status published) and are declared as read-only `P`
  entries in `research/plan-spec.json` and in the Step-1 receipt
  `research/physics-em-sr-40-2026-10-08-external-prerequisite-repair.json`.
- Mechanical confirmation on current inputs (2026-10-09):
  `frontier-item-gate --tool validate-plan` exits 0 — "declared page order is
  acyclic and consistent; no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 80 page(s) with item lists"
  (its 33 warnings name no batch-21 page); `manifest-deps` on batch 21: 7
  items, 0 errors; `step1-decisions` readiness rows: all 7 items `ready`
  (owner reconciliation10); drift review
  (`…-alpha-step1-drift.md`): `no-drift` for this pair; the run's
  `step1-blockers` file names this pair nowhere.

## 4. Intended role and consumer fit

The pair is a mathematics prerequisite page feeding, per the current
manifests: `em-potentials-and-gauge` (341: 8 consumer items use the definition,
incl. `pthm-em-gauge-reachability`, which reads the slab lemma directly),
`em-retarded-fields-and-radiation` (351: the definition, kernel and new
distributional theorem feed `pthm-em-retarded-potentials` and
`pthm-em-lienard-wiechert`), `em-retarded-point-prerequisites` (323:
`thm-em-retarded-root-and-fields` uses definition, kernel, point fields) and
the B example. Consumer statements read at head level request exactly the
domains this page supplies (slab gauge reachability, all-time uniformly
subluminal $C^3$ point histories, retarded kernel pairings).

Observation (not an insufficiency): `lem-em-smooth-forced-maxwell-cauchy-system`
(design W7) currently has no declared consumer in the run manifests. It is a
promised item of the design and the owner direction forbids trimming promised
claims; it is surplus, not an omission, so it does not affect this scope
decision. Consumers are free to use it later through ordinary escalation.

## 5. Residual uncertainty (honest)

- This review assessed scope, definitions/hypotheses coverage, sources and
  prerequisite resolution; it is not a proof audit. Proof correctness of the
  seven items remains owed to Step 3b / later gates. In particular the long
  coordinate computation in R2 and the distributional identities of the new
  theorem were not checked line by line here.
- The batch-21 notes file is stale in its item count and predates
  reconciliation10/11; I relied on the current manifests and receipts. If the
  owner later treats the notes as a required record, it should be refreshed,
  but no scope evidence depends on it.

## 6. Decision

`sufficient` — the planned definitions, results and example adequately cover
the intended subject, the design's claims are preserved, sources and
dispositions are documented, and no prerequisite is unmet or missing from both
the published library and the current scaffold. Recorded via
`node tools/physics-support/step3-decisions.mjs record-scope --run
physics-em-sr-40-2026-10-08 --page em-causal-wave-kernel-prerequisites
--decision sufficient` with this report as the evidence path.
