# Step 3b report — pair `em-causal-wave-kernel-prerequisites`

- Run: `physics-em-sr-40-2026-10-08` (role alpha-high, Step 3b scaffold auditor + item author)
- A page: `em-causal-wave-kernel-prerequisites` (order 321,
  category `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-causal-wave-kernel-prerequisites-examples` (order 322)
- Batches: 21. Inventory: **6 A items + 1 B item** (7 items total), all authored
  on disk with both page carriers.
- Current dispatch label: `step3b-pair-em-causal-wave-kernel-prerequisites-8631b9e295dedcd1`.
  The pair was authored in the preceding round (`…-b5e935e398fb6e4a`, 2026-10-09
  17:5x–18:07 local = 06:5x–07:07 UTC); this turn re-audits the current inputs,
  re-runs the check battery, completes the supplier reconciliation and closes
  the handoff record. No item or page carrier was edited in this turn.
- Entered: 2026-10-09. Status: **authoring complete, checks pass, decisions
  recorded (1 accept, 6 owner-held escalations on a supplier that has since
  landed)**; see the handoff section.

## Owned IDs (authoring order; dependency_level, ties by page order then item ID)

| # | id | level | page | state |
|---|---|---|---|---|
| 1 | `def-em-potential-gauge-and-field-conventions` | 0 | A | authored; decision `accept` (confidence 1, hash-current) |
| 2 | `lem-em-gauge-wave-reachability` | 3 | A | authored; decision `escalate` (owner-held; receipt hash now stale — see §Reconciliation) |
| 3 | `lem-em-retarded-wave-kernel` | 3 | A | authored; decision `escalate` (owner-held, hash-current) |
| 4 | `lem-em-smooth-forced-maxwell-cauchy-system` | 3 | A | authored; decision `escalate` (owner-held, hash-current) |
| 5 | `lem-em-point-retarded-potential-and-fields` | 4 | A | authored; decision `escalate` (owner-held, hash-current) |
| 6 | `thm-em-retarded-point-distributional-maxwell` | 5 | A | authored; decision `escalate` (owner-held, hash-current) |
| 7 | `ex-em-causal-wave-kernel-prerequisites-explicit-checks` | 5 | B | authored; decision `escalate` (owner-held, hash-current) |

All seven IDs are **original scaffold IDs** (present in the immutable pre-author
scaffold inventory `research/physics-em-sr-40-2026-10-08-step3-auditor-baseline.json`,
hence *not* Step-3b additions); they therefore require and carry ordinary
current item decisions. The level-3 tie order is
`lem-em-gauge-wave-reachability` → `lem-em-retarded-wave-kernel` →
`lem-em-smooth-forced-maxwell-cauchy-system` (page order, then item ID), which is
the order used for authoring and checking.

## Entry audit summary (rechecked this turn against current inputs)

- Step 3a scope decision `sufficient` is current for this pair
  (`research/physics-em-sr-40-2026-10-08-step3a-pair-em-causal-wave-kernel-prerequisites.md`,
  recorded via `step3-decisions.mjs record-scope`; not owner-held).
- Current manifest `research/physics-em-sr-40-2026-10-08-batch-21.pages.json`
  (sha256 starts `ea91f548…`) carries complete `statement`, `strategy`, `deps`,
  `dependency_roles`, `provenance` and `sources` for all seven items and both
  page rows (orders 321/322; page `requires` now include
  `em-wave-equation-prerequisites`, `density-separability-and-convolution-in-lp`,
  `fubini-and-change-of-variables`, `the-topology-of-euclidean-space`).
- Owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
  §"Reconciliations8–10" (line 136) binds this pair: fully author the new
  pure-mathematics `thm-em-retarded-point-distributional-maxwell` after the
  point-potential supplier, proving proper finite-history wave-kernel transfer,
  Lorenz gauge, global locally integrable exact $\mathbf E,\mathbf B$
  representatives and the ordinary $C^1$ cutoff $O(\varepsilon)$ derivative
  argument; no physical adoption, no singular self-work product, no finite
  self-energy, no backreaction. The authored item follows that direction.
- All seven carriers exist: six A items + one B example, plus the two library
  page files. Item mtimes 18:05:10 local; pages 18:02:12 local; unchanged
  through the current turn.
- Design congruence: the four designed A items
  (`lem-em-retarded-wave-kernel` W3, `lem-em-gauge-wave-reachability` W6,
  `lem-em-smooth-forced-maxwell-cauchy-system` W7,
  `lem-em-point-retarded-potential-and-fields` R2) are present with the design's
  claims, caveats and computed levels 3/3/3/4; the def item and the B example
  are the two recorded scaffolder additions (batch notes decisions 1 and 6);
  `thm-em-retarded-point-distributional-maxwell` is the owner-directed sixth A
  item. No promised claim was narrowed or dropped.

## Checkpoint log

### Item 1 — `def-em-potential-gauge-and-field-conventions` (level 0)

- Claim: potential pairs of class $C^k$ on open $\Omega\subseteq\mathbb R^3\times\mathbb R$
  (plus $C^0$=continuous, smooth, and the extension sense on closed time slabs);
  $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$,
  $G=\operatorname{div}A+c^{-2}\partial_t\varphi$, Lorenz gauge $G=0$,
  $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ and
  $W=c^{-2}\partial_t^2-\Delta$; no existence or solvability assertion.
- Conventions fixed explicitly: the signs, the $c^{-2}$ in $G$, the spelling
  *Lorenz*, and "no solvability is asserted".
- Sources (locators carried from the manifest/coverage): Tong §6.1 pp. 134–135
  (gauge transformation, Lorenz condition, $\Box=(1/c^2)\partial_t^2-\nabla^2$),
  §6.4.3 p. 161 (field conventions); Teschl §7.1 pp. 167–170 (wave-operator
  normalization). No new source reading claimed in this turn.
- Deps: the six manifest deps, all published on disk, all
  `mathematical-premise`. No in-run supplier is consumed.
- Decision: `accept`, confidence 1, hash-current (`e5d0861765ae3b19…`).

### Item 2 — `lem-em-gauge-wave-reachability` (level 3)

- Claim (under $\mathrm{AC}_\omega$ declared as [A1] and carried through the
  wave theorem): every $C^\infty$ extension-sense potential pair on a closed
  time slab admits a $C^\infty$ extension-sense $\chi$ with zero Cauchy data and
  $W\chi=G$; the gauge transform is $C^\infty$ with unchanged
  $E,B$ and Lorenz divergence zero; differences of solutions with the same $G$
  are $W$-harmonic. No boundary-value, decay or cavity-gauge claim.
- Proof route: step 1.1 (smoothness of $G$), 2.1 (existence via the wave
  theorem with $a=b=0$, $h=G$), 3.1 (smoothness of $T_\chi$), 4.1–4.3 (field
  invariance and Lorenz identity), 5.1 (linearity of $W$ on differences).
- Supplier use: **`thm-em-wave-cauchy-kirchhoff` clause (a) with $a=b=0$ at
  step 2.1**, plus its $\mathrm{AC}_\omega$ hypothesis; steps 3.1/4.x use only
  smoothness of $\chi$; clause (d) is independent of the supplier. Verified
  clause-by-clause against the authored carrier (sha256
  `cb218723e703126d…`).
- Checks actually run: `precheck` PASS (direct); `rendercheck` OK; proof
  contract [F3]/citation quote present; `proof-layout` blue-chip scan clean;
  `content-policy` 0 findings.
- Decision: recorded `escalate` (07:05:28 UTC) because the supplier was then
  unauthored. The escalation is owner-held; its receipt hash is **stale**
  because the supplier carrier landed at 18:05:30 local, two seconds after the
  receipt (see §Reconciliation). Owner action required to record a fresh
  decision on the now-complete chain.

### Item 3 — `lem-em-retarded-wave-kernel` (level 3)

- Claim: $K(\psi)=(4\pi)^{-1}\int\psi(y,|y|/c)|y|^{-1}dy$ is a distribution on
  $Q=\mathbb R^3\times\mathbb R$ with support exactly the retarded cone $C$ and
  apex sharpness; for $h\in C_c^\infty(Q)$, $K*h$ is the absolutely convergent
  integral $\int h(y,t-|x-y|/c)(4\pi|x-y|)^{-1}dy$, is $C^\infty$ on $Q$ with
  $W(K*h)=h$ pointwise, and $\langle K*h,\psi\rangle=\langle h,K\circledast\psi\rangle$;
  distributionally $WK=\delta_{(0,0)}$.
- Declared exclusions: no smoothness or values of $K$ on the cone; advanced
  kernel excluded; no product of singular distributions ($K*h$ is defined by
  the explicit integral, with the $\delta$-notation only abbreviating a
  pairing).
- Deps: the scaffold set plus seven published local-gap repairs
  (`def-support-of-a-distribution`,
  `def-regular-distribution-from-a-locally-integrable-function`,
  `def-weak-and-strong-topologies-on-distributions`,
  `prop-mollifier-families-are-l-one-approximate-identities`,
  `lem-test-function-cutoffs-and-euclidean-localization`,
  `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`,
  `cor-c-one-change-of-variables-for-l-one-functions`), all
  `mathematical-premise` and out-of-run (levels unchanged).
- Supplier use: **`thm-em-wave-cauchy-kirchhoff` clause (a) with $a=b=0$ at
  steps 2.4 and 3.1** (existence, $C^\infty$ extension-sense regularity,
  $Wu=h$, explicit Duhamel solution) and its $\mathrm{AC}_\omega$; verified
  against the authored carrier.
- Checks actually run: `precheck` PASS (direct); `rendercheck` OK;
  `proof-layout` clean; `content-policy` 0 findings; proof contract 0 errors
  under `--strict`.
- Decision: `escalate` (owner-held, hash-current).

### Item 4 — `lem-em-smooth-forced-maxwell-cauchy-system` (level 3)

- Claim: for $c,\varepsilon,\mu>0$ with $\varepsilon\mu c^2=1$, extension-sense
  smooth sources $\rho,J$ on a slab satisfying the continuity equation and data
  $E_0,B_0$ satisfying both Gauss constraints, the stipulated first-order
  system $\partial_tE=c^2\operatorname{curl}B-J/\varepsilon$,
  $\partial_tB=-\operatorname{curl}E$ has exactly one extension-sense
  $C^\infty$ solution on the slab; it obeys both Gauss laws; and it obeys the
  $c$-cone of dependence. Explicitly: no physical identification of $(E,B)$,
  no finite-domain boundary problem, no spatial decay.
- Proof route: 1.1 (build $E,B$ componentwise as wave solutions with the
  derived initial time derivatives), 2.1 (residuals $R,Q$ solve the homogeneous
  wave equation and satisfy the uniqueness clause of the wave theorem),
  3.1 (Gauss-law defects $D,\operatorname{div}B$ likewise), 4.1 (uniqueness by
  the same reduction), 5.1 (cone clause componentwise).
- Supplier use: **`thm-em-wave-cauchy-kirchhoff` at steps 1.1 (clause (a)),
  2.1 and 3.1 (clause (b) uniqueness), 5.1 (clause (c) cone)** and its
  $\mathrm{AC}_\omega$; verified against the authored carrier.
- Checks actually run: `precheck` PASS; `rendercheck` OK; `proof-layout`
  clean; `content-policy` 0 findings; proof contract 0 errors.
- Decision: `escalate` (owner-held, hash-current).

### Item 5 — `lem-em-point-retarded-potential-and-fields` (level 4)

- Claim (under $\mathrm{AC}_\omega$): for a $C^3$, uniformly subluminal
  $z:\mathbb R\to\mathbb R^3$, the proper point-current distributions
  $\rho,J$ of `lem-em-point-current-continuity` satisfy
  $\partial_t\rho+\operatorname{div}J=0$; the retarded-history pairings
  $\Phi,\Upsilon$ defined by explicit history integrals against
  $K\circledast\psi$ are finite distributions and equal the regular
  distributions of the zero extensions of $\varphi=C/(\kappa r)$ and
  $A=\beta\varphi/c$; the off-worldline fields
  $E=C[(1-|\beta|^2)(n-\beta)/(\kappa^3r^2)+n\times((n-\beta)\times\dot\beta)/(c\kappa^3r)]$,
  $B=n\times E/c$ are $C^1$, with the stated higher-$C^k$ branches. The
  mathematical-model and no-self-force/no-radiation-reaction caveats are
  retained.
- Supplier uses (all verified on current carriers): **`lem-em-global-retarded-root`**
  (unique root, $C^k$ branch for $C^k$ trajectories — the consumer's $C^3$
  hypothesis is stronger than the $C^1$ base statement, and the carrier
  explicitly states "no higher regularity follows from a merely $C^1$
  trajectory", so no unsupported use), **`lem-em-point-current-continuity`**
  (proper-graph branch with $I=\mathbb R$, $\Omega=\mathbb R^3\times\mathbb R$;
  its endpoint branch is not used), and **`lem-em-retarded-wave-kernel`**
  (retarded convolution identities, transitive on the wave theorem).
- Checks actually run: `precheck` PASS; `rendercheck` OK; `proof-layout`
  clean; `content-policy` 0 findings; proof contract 0 errors; `depcheck`
  resolves every dependency.
- Decision: `escalate` (owner-held, hash-current); the direct suppliers are
  authored, the remaining open item is the wave-theorem chain (see
  §Reconciliation).

### Item 6 — `thm-em-retarded-point-distributional-maxwell` (level 5)

- Claim (per owner direction): with $\Phi,\Upsilon$ the proper point-history
  distributions, (a) $W\Phi=\rho/\varepsilon_0$, $W\Upsilon=\mu_0J$ and the
  distributional Lorenz identity $\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi=0$;
  (b) the vector distributions $\mathcal E=-\nabla\Phi-\partial_t\Upsilon$,
  $\mathcal B=\operatorname{curl}\Upsilon$ satisfy all four distributional
  Maxwell equations with the exact point source; (c) off the worldline these
  restrict to the $C^1$ Liénard–Wiechert fields, whose zero extensions are
  $L^1_{\mathrm{loc}}$ and whose regular distributions are exactly
  $\mathcal E,\mathcal B$ (ordinary $C^1$ cutoff $O(\varepsilon)$ derivative
  argument), and the off-worldline classical source-free Maxwell equations
  hold pointwise. No field value on the worldline, no distribution product, no
  finite self-energy, self-force, acceleration bound or incoming-field
  uniqueness claim.
- Proof route: existing explicit histories only (no convolution of
  non-compact distributions); bounded-cylinder absolute-integral domination;
  parameter-derivative identities for $F=K\circledast\psi$; pointwise
  translation of $WK=\delta$; a Newton–Leibniz total-derivative identity for
  the Lorenz residual on the original smooth test; finite-coordinate vector
  identities; closed-graph nullity and $L^1_{\mathrm{loc}}$ estimates via the
  $C^1$ diffeomorphism $(s,y)\mapsto(z(s)+y,s+|y|/c)$; and the smooth-cutoff
  integration-by-parts argument.
- Supplier uses: `lem-em-point-retarded-potential-and-fields`,
  `lem-em-retarded-wave-kernel` (steps 1.2, 3.1, 4.1; transitive on the wave
  theorem), `lem-em-point-current-continuity` (step (a)), plus published
  distribution/integration suppliers. All direct carriers authored.
- Checks actually run: `precheck` PASS; `rendercheck` OK; `proof-layout`
  clean; `content-policy` 0 findings; proof contract 0 errors.
- Decision: `escalate` (owner-held, hash-current).

### Item 7 — `ex-em-causal-wave-kernel-prerequisites-explicit-checks` (level 5, B page)

- Claims: (i) static specialization $z\equiv0$ gives $s=t-|x|/c$,
  $\varphi=C/|x|$, $A=0$, $E=Cx/|x|^3$, $B=0$, and the kernel's
  retarded-history integral reproduces the time-independent Poisson kernel
  $1/(4\pi|x-y|)$ on each compact observation region (with a source-time
  cutoff, since a static non-zero source is not compactly supported in
  spacetime); (ii) the explicit Lorenz-gauge transformation for
  $\varphi\equiv0$, $A=(x_1,0,0)$, $G=1$, $\chi=-|x|^2/6$ with $W\chi=1$,
  $T_\chi(\varphi,A)=(0,((2/3)x_1,-x_2/3,-x_3/3))$, $G(T_\chi)=0$ and
  unchanged fields — the nonzero-$G$, non-zero-data instance that leans on
  clause (d) of the gauge lemma; (iii) support sharpness at the apex and at
  every non-apex cone point by nonnegative-test computations.
- Homed on the B page; no A item depends on it; mathematical only, no
  empirical claim.
- Supplier uses: `lem-em-point-retarded-potential-and-fields`,
  `lem-em-gauge-wave-reachability`, `lem-em-retarded-wave-kernel`,
  `lem-em-global-retarded-root`, plus published algebra/polar suppliers;
  transitive escalation via the wave theorem.
- Checks actually run: `precheck` PASS; `rendercheck` OK; `proof-layout`
  clean; `content-policy` 0 findings; proof contract 0 errors.
- Decision: `escalate` (owner-held, hash-current).

## Supplier reconciliation (current carriers)

The six escalations were recorded while the direct supplier
`thm-em-wave-cauchy-kirchhoff` (page `em-wave-equation-prerequisites`, batch 17)
had no carrier. **That carrier has since been authored** (mtime 18:05:30 local,
sha256 `cb218723e703126d1a16b7e8bd6016289783adf57af89ab30398dd472d2107b8`), and
this turn re-verified the actual proof uses against it:

| consumer | supplier | consuming steps | clauses used | status |
|---|---|---|---|---|
| `lem-em-gauge-wave-reachability` | `thm-em-wave-cauchy-kirchhoff` | 2.1 (+AC in [A1]) | (a) existence with $a=b=0$, $W\chi=G$, zero Cauchy data; smoothness | use verified on carrier |
| `lem-em-retarded-wave-kernel` | `thm-em-wave-cauchy-kirchhoff` | 2.4, 3.1 | (a) existence, $C^\infty$ extension-sense, $Wu=h$; explicit Duhamel formula | use verified on carrier |
| `lem-em-smooth-forced-maxwell-cauchy-system` | `thm-em-wave-cauchy-kirchhoff` | 1.1, 2.1, 3.1, 4.1, 5.1 | (a) existence, (b) uniqueness of $C^2$ solutions, (c) cone clause, $\mathrm{AC}_\omega$ | use verified on carrier |
| `lem-em-point-retarded-potential-and-fields` | `lem-em-global-retarded-root`, `lem-em-point-current-continuity` | root at 1.3, 1.4; proper-graph branch at 1.1 | unique root, $C^k$ branch for $C^k$ trajectories, $\partial_ts=1/\kappa$, $\nabla s=-n/(c\kappa)$; point-current distributions with $I=\mathbb R$ | use verified on carriers (sha256 `1d8dd45409ea57e5…`, `6887e1b0f6532b02…`) |
| `thm-em-retarded-point-distributional-maxwell` | `lem-em-retarded-wave-kernel`, `lem-em-point-current-continuity`, `lem-em-point-retarded-potential-and-fields` | 1.2, 3.1, 4.1 and (a) | kernel identities and point-history distributions | direct carriers authored; transitive on the wave theorem |
| `ex-…-explicit-checks` | `lem-em-global-retarded-root` at 1.1; `lem-em-point-retarded-potential-and-fields` at 1.1, 1.3; `lem-em-retarded-wave-kernel` at 1.2, 2.1; `lem-em-gauge-wave-reachability` at 1.3 | (i)–(iii) as stated in the example | root and field formulas, kernel pairing identity, gauge clauses (b)–(d) | direct carriers authored; transitive on the wave theorem |

The batch-21 cross-batch input
`research/physics-em-sr-40-2026-10-08-batch-21.cross-batch-dependencies.json`
already records these edges as `verified` (written 18:06:54 local on the
current carriers), including the page edge 321 → `em-wave-equation-prerequisites`.
The proof contracts in
`research/physics-em-sr-40-2026-10-08-batch-21.proof-contracts.json` quote the
authored wave-theorem statement and pass `--strict` with 0 errors.

**Remaining open obligations (none of them editable within this pair's scope):**

1. `lem-em-spherical-mean-wave-identity` (batch 16, page
   `em-expanded-analysis-prerequisites`) still has **no item carrier on disk**.
   It is a declared dependency of the authored wave theorem ([F4] of that
   proof), hence a transitive prerequisite of consumers 2, 3, 4, 6 and 7 here.
   The wave pair owns this obligation and will carry its own escalation; this
   pair's escalation receipts remain owner-held until the owner resolves the
   chain.
2. The wave pair's own page carriers, checks and item decisions
   (`em-wave-equation-prerequisites`, batch 17) are still in flight at this
   checkpoint; its `lem-em-spherical-mean-family-smoothness` is authored
   (sha256 `ad59c6af6166737b…`) but its pages are absent.
3. `lem-em-period-average` (batch 13) belongs to a sibling pair and is not used
   by this pair.

**Decision-receipt status (checked with `step3-decisions.mjs`):** five of the
six escalations are hash-current; `lem-em-gauge-wave-reachability`'s receipt is
hash-stale because the wave-theorem carrier landed two seconds after the
receipt was recorded, i.e. the item's transitive input closure changed.
Non-owner re-recording is refused by the tool on any existing escalation
("The owner must resolve this item decision"), so the owner must re-record that
one decision (and may resolve the other five) on the now-complete direct chain;
the evidence above gives the exact clauses and steps.

## Checks actually run in this turn (all explicit-path unless stated)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on
  the six proof items — **PASS** (all six, strategy `direct`).
- `node tools/physics-support/rendercheck.mjs` on 7 items + 2 pages — **OK**
  (9 files: YAML parses, no wikilink inside math, no nested/unbalanced
  delimiters, no multiline display block, all math spans parse under KaTeX).
- `node tools/physics-support/prosecheck.mjs` on the same 9 files — **0 errors,
  2 heuristic warnings** (`count-in-prose` on the A page: "two items";
  `count-of-this-page` on the B page: "all of them"); both are known
  legitimate-case heuristics, no positional contradiction.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-21.pages.json`
  (item mode) — **7 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-21.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 7/7 items** (citations, derivations, boundary
  dispositions all validate).
- `node tools/physics-support/depcheck.mjs --items-file` (7 owned IDs) — **OK**:
  focused item checks plus prerequisite-cycle checks over 1108 items and 190
  pages passed; no unresolved dependency, no cycle, no link error. Page
  prerequisite depth shows 321 at depth 41 and 322 at depth 42 (expected in-run
  position).
- `node tools/physics-support/pathcheck.mjs --pages-file` (both page IDs) —
  **0 errors, 0 warnings** (no `_pathway.md` exists for this category yet;
  pathway authoring is a later stage and was not touched).
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  — **473 items across 80 pages, all labels consistent** (no error rows);
  this pair's levels are 0/3/3/3/4/5/5 as recorded in item metadata and
  manifest.
- `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan`
  — run-wide **FAIL** on 33 `undeclared-prereq` errors, **none of them on pages
  321/322** (the errors are on sibling pages still being authored, e.g.
  `sr-spacetime-primitives`, `em-elementary-mathematical-prerequisites`,
  `em-expanded-analysis-prerequisites`, `em-material-response`). Pages 321/322
  appear in the printed table with their declared `requires` and no error row;
  page 321's closure (104 pages) contains `em-elementary-mathematical-prerequisites`
  and `em-wave-equation-prerequisites`. This run-wide mismatch is a pre-splice
  plan observation for Step 4, not hidden debt of this pair.
- `node tools/physics-support/proof-layout.mjs items/…` on all seven owned
  items (the mandatory once-before-handoff run, executed after the last item
  edit) — **7 items, 45 steps, 0 defects**, all numbered rows carry valid blue
  chips.
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-21.coverage.json`
  — **2 pages, 44 harvested results, 0 errors, 0 warnings**.
- `node tools/physics-support/step3-decisions.mjs check --run … --phase final`
  — this pair: 1 closed item (`def-…`), 6 owner-held open items with the status
  described above. (Run-wide output is dominated by sibling pairs still in
  flight and is not this pair's acceptance signal.)
- Read-only cross-checks of sibling carriers: `proof-layout` on
  `thm-em-wave-cauchy-kirchhoff` (11 steps, 0 defects) and on
  `lem-em-global-retarded-root`/`lem-em-point-current-continuity` (18 steps,
  0 defects).

## Rechecked pre-splice findings from the batch-21 scaffold notes

1. **Batch notes finding 1 (scaffold hypothesis defect in
   `lem-em-global-retarded-root`) — resolved on the authored carrier.** The
   design's R1 states $z\in C^3$; the authored carrier now states the base
   result for $C^1$ uniformly subluminal $z$ and the $C^k$ root branch for
   $C^k$ $z$, with the explicit warning "No higher regularity follows from a
   merely $C^1$ trajectory". The consumer
   `lem-em-point-retarded-potential-and-fields` assumes $C^3$ and uses exactly
   the $C^3$ branch, so the use is supported; no consumer declares a $C^3$
   conclusion from $C^1$ data. No repair to the carrier was needed in this
   turn.
2. **Batch notes finding 2 (undeclared prerequisite pages) — resolved in the
   current manifest.** Page 321 now declares
   `density-separability-and-convolution-in-lp`, `fubini-and-change-of-variables`
   and `the-topology-of-euclidean-space` directly, and
   `em-elementary-mathematical-prerequisites` is in its transitive closure;
   `validate-plan` reports no error row for 321/322. Nothing remains to report
   for Step 4 on this pair.
3. **Batch notes finding 3 (published defects) — none found**, and none found
   in this turn's re-audit of the cited suppliers.

## Published concerns

No defective published item was found in this pass. The published suppliers
consumed by this pair were resolved by `depcheck` (0 errors), their exact
hypotheses are quoted in the items' Facts blocks, and the strict proof
contracts validate every citation against the carriers (7/7 items). Two
published items needed exact-instantiation care and carry it in the item text:
`lem-em-global-retarded-root` is stated for uniformly subluminal $C^1$
trajectories with the $C^k$ branch for $C^k$ data (consumer assumes $C^3$), and
`lem-em-point-current-continuity` is used only through its proper-graph branch
with $I=\mathbb R$ (its endpoint branch, which adds endpoint deltas, is not
used). Suspicions of deeper proof-level defects remain the subject of the
independent review steps (5–8); nothing in this pair's authoring pass raises a
confirmed published-defect claim.

## Open obligations at handoff

1. **Owner resolution of the six item escalations** listed above. The direct
   supplier chain is now authored and reconciled clause-by-clause; the only
   remaining run-level gap in this pair's transitive closure is the unauthored
   `lem-em-spherical-mean-wave-identity` (batch 16) behind the wave theorem.
   The owner should either resolve the escalations on the current direct chain
   or hold them until the wave pair completes, per the owner's global policy;
   `lem-em-gauge-wave-reachability` additionally needs a fresh receipt because
   its recorded receipt hash is stale.
2. **Wave pair completion** (`em-wave-equation-prerequisites`, batch 17): page
   carriers, checks and its own item decisions — flagged, not owned here.
3. **Step 4 splice:** no plan mismatch for pages 321/322 beyond the run-wide
   sibling `undeclared-prereq` failures quoted above.
4. Nothing else: all seven carriers, both pages, the batch proof contracts, the
   cross-batch rows and the coverage record are in place and consistent, and
   the complete check battery passes on this pair's explicit paths.

## Handoff summary

- Completed IDs: `def-em-potential-gauge-and-field-conventions` (accept),
  `lem-em-gauge-wave-reachability`, `lem-em-retarded-wave-kernel`,
  `lem-em-smooth-forced-maxwell-cauchy-system`,
  `lem-em-point-retarded-potential-and-fields`,
  `thm-em-retarded-point-distributional-maxwell`,
  `ex-em-causal-wave-kernel-prerequisites-explicit-checks` (authored; decisions
  owner-held pending the supplier-chain resolution above); pages
  `em-causal-wave-kernel-prerequisites` (321) and
  `em-causal-wave-kernel-prerequisites-examples` (322).
- Checks actually run: precheck, rendercheck, prosecheck, content-policy,
  proof-contract `--strict`, depcheck, pathcheck, item-dependency-levels,
  validate-plan, proof-layout, coverage-checklist, step3-decisions `check`;
  results as tabulated above.
- Added suppliers: none in this turn; the seven published dep additions in
  `lem-em-retarded-wave-kernel` (and the published additions in the point/thm
  items) were recorded by the authoring round and are reflected in the item
  frontmatter, proof contracts and cross-batch reconciliation. No manifest
  edit was made (dependency levels and page rows already agree with the
  authored carriers).
- Published concerns: none confirmed; the two exact-instantiation cautions are
  recorded above.
- Open obligations: owner resolution of six escalations (one needing a fresh
  receipt), the wave pair's own completion, and the run-wide pre-splice
  validate-plan failures on sibling pages.
