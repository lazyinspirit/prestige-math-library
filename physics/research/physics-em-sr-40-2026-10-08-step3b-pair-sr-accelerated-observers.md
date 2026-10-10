# Step 3b authoring report — pair `sr-accelerated-observers` / `sr-accelerated-observers-examples`

- Run: `physics-em-sr-40-2026-10-08`, role `alpha-high`, batch 10, category
  `special-relativity`, `library: physics`.
- A page `sr-accelerated-observers` (order 227), B page
  `sr-accelerated-observers-examples` (order 228): six A items and five B
  items, all scaffolded in the frozen batch-10 manifest.
- This pass: resumed dispatch `step3b-pair-sr-accelerated-observers-1eb13ce27bc74f57`
  (attempt 2) after the failed wave recorded at 07:41–07:42 UTC, in which all
  30 author lanes exited with code 1 in the post-WSL-recovery environment and
  the owner re-armed retries. Passes before it: `...-62ac34c21a701da2` authored
  the eleven carriers and the first decision receipts; `...-72c15b1b3c206c1d`
  audited the carriers, repaired one local defect, created both page carriers
  (`library/special-relativity/sr-accelerated-observers.md`,
  `library/special-relativity/sr-accelerated-observers-examples.md`),
  completed the batch-10 proof contracts and cross-batch input, and wrote the
  first version of this report.
- This pass re-audited all eleven items against their current suppliers, closed
  the pair's last open supplier obligation (`thm-sr-tensor-and-current-transformation`
  is now authored and its `[L8]` citation contract is recorded), recomputed the
  key mathematical identities, refreshed the batch-10 cross-batch input and the
  unified dependency ledger, recorded three fresh item decisions, and re-ran
  the full explicit-path battery. No item Markdown was changed this pass; no
  new item or page IDs were minted.

## Owned IDs and current status (authoring order, dependency level)

| # | level | item | page | status after this pass |
|---|-------|------|------|------------------------|
| 1 | 13 | `def-sr-proper-acceleration` | A | authored; `accept` (final receipt `04f9ab2b…`, 2026-10-09T08:02:42Z, binding the settled closure) |
| 2 | 13 | `lem-sr-connecting-field-stretching` | A | authored; `escalate` owner-held; the last open supplier is now authored, `[L8]` contracted and the actual use reconciled |
| 3 | 15 | `lem-sr-hyperbolic-motion-worldline` | A | authored; `escalate` owner-held; named supplier now authored and the seven consuming facts reconciled |
| 4 | 15 | `pthm-sr-guided-ring-sagnac-delay` | A | authored; `escalate` owner-held; supplier reconciled |
| 5 | 15 | `texp-sr-bell-rockets-thread` | A | authored; `escalate` owner-held; supplier reconciled |
| 6 | 15 | `ex-sr-bell-congruence-rest-separation-worked` | B | authored; `escalate` owner-held; supplier reconciled; leaf item |
| 7 | 16 | `pthm-sr-rindler-horizons-and-radar` | A | authored; `escalate` owner-held; supplier reconciled |
| 8 | 16 | `ex-sr-guided-ring-sagnac-worked` | B | authored; `escalate` owner-held; supplier reconciled; leaf item |
| 9 | 17 | `cex-sr-rindler-horizon-is-not-a-physical-boundary` | B | authored; `escalate` owner-held; supplier reconciled; leaf item |
| 10 | 17 | `cex-sr-rindler-radar-distance-is-not-symmetric` | B | authored; `accept` (final receipt `ec8dca01…`, 2026-10-09T08:02:48Z, binding the settled closure); leaf item |
| 11 | 17 | `ex-sr-rindler-radar-distance-worked` | B | authored; `accept` (final receipt `4c62ed66…`, 2026-10-09T08:02:49Z, binding the settled closure); leaf item |

Dependency levels were re-verified with
`node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
(473 items, 80 pages, maximum level 24; no finding naming any item of this
pair), and every level agrees with the batch-10 manifest and each item's
`dependency_level`.

## Per-item checkpoints

1. **`def-sr-proper-acceleration`** (A, level 13, physics definition,
   `provenance.proof: not-applicable`). Claim: for a $C^2$ future timelike
   worldline, $a(\tau)=\sqrt{\eta(A,A)}$ is well defined because $A$ is
   spacelike or zero; the SI unit metre per second squared is read from the
   conventions; congruence agreement $A=c^2a_{\mathrm{cg}}$ holds for flow
   lines with $U=cn$; the ideal-accelerometer reading is stated as a model
   identification with explicit no-response-law/no-force-law/no-measurement
   scope, and a Remarks section records nonnegativity and proper-time-origin
   stability. Sources: Crowell §3.5.2 p. 61; Blau §1.2 items 8–9 pp. 34–36
   and §1.3 pp. 36–39. All 11 declared dependencies are authored on disk; the
   actual uses (four-velocity/four-acceleration definition; proper-time and
   observer decomposition (a),(b); regular causal curve; observer congruence
   (b); flat covariant derivative (d); SI units; rational power; causal
   classification; affine model; inertial chart; algebra of continuous
   functions) were re-read this pass. Checks: precheck nonproof structural
   clean, rendercheck clean, proof-layout 0 defects, batch content-policy
   clean, strict batch contract clean, closure resolves. Decision: `accept`
   (fresh receipt, confidence 1, examined dependency list recorded).

2. **`lem-sr-connecting-field-stretching`** (A, level 13, mathematics lemma).
   Claim: for a $C^1$ future unit timelike field $n$ and a $C^2$ injective
   material family $\Phi$ with $\partial_s\Phi=n$, the material metric
   $G_{IJ}=h(e_I,e_J)$ is a $C^1$ positive-definite metric with
   $\partial_sG_{IJ}=(L_nh)(e_I,e_J)=2\theta(e_I,e_J)$, rest-length rate
   $\partial_\tau\ell_I=c\theta(u_I,u_I)\ell_I$, exact metric preservation
   under Born rigidity $\theta=0$, and an explicit local-scope clause.
   Sources: Giulini §5.5 pp. 41–49; Crowell §§9.5.1–9.5.2 pp. 205–207. All 20
   declared dependencies are now authored on disk. **This pass:** the
   formerly missing direct supplier `thm-sr-tensor-and-current-transformation`
   was read in full; the exact quote of its Statement clauses (i)–(iv) was
   added to the batch-10 proof contract for fact `[L8]` with use step `1.1`,
   and `proof-contract --strict` now reports 0 errors over all 11 items.
   Checks: precheck pass, rendercheck clean, proof-layout 0 defects,
   content-policy clean, strict contract clean, citation-fidelity quote
   present. Decision: the earlier `escalate` receipt remains owner-held; its
   named supplier and use are now reconciled, so an owner `reopen` followed by
   a fresh item audit is all that remains to close it (see "Supplier
   reconciliation" and "Open obligations").

3. **`lem-sr-hyperbolic-motion-worldline`** (A, level 15, mathematics lemma).
   Claim: the hyperbola $(R\sinh\theta, R\cosh\theta)$ with
   $\theta=\alpha\tau/c$, $R=c^2/\alpha$ is a $C^\infty$ future timelike
   worldline with $\eta(U,U)=-c^2$, $\eta(A,A)=\alpha^2$, $\eta(U,A)=0$,
   chart speed $c\tanh\theta$, right-wedge confinement, identification as the
   Rindler flow line with $A=c^2a_{\mathrm{cg}}$, and asymptotic approach to
   both null planes. Sources: Crowell §3.5.2 Example 4 and §7.1 p. 148; Blau
   §1.3 pp. 36–38 and §3.4 pp. 90–93. This pass recomputed the tangent,
   the three scalar identities and the two exponential limits. All 19 declared
   dependencies are authored; the fact `[L13]` quote to
   `thm-sr-fermi-walker-and-rigid-observer-examples` (b) is recorded and its
   use in steps 1.3/4.2 checked. Checks clean as above. Decision: `escalate`
   owner-held; supplier reconciled.

4. **`pthm-sr-guided-ring-sagnac-delay`** (A, level 15, physics theorem).
   Claim (i)–(v): rigidly rotating ring with $|\Omega|R<c$; the guided-signal
   device model is an explicit adopted idealization (not a consequence of the
   vacuum-light postulate); guided curves future null with chart rates
   $\pm c/R$; reunion times $2\pi R/(c\mp\Omega R)$; chart-time difference
   $4\pi\Omega R^2/(c^2-\Omega^2R^2)$; detector proper-time difference divided
   by $\gamma$; ring rest-line holonomy
   $2\pi\Omega R^2/(c^2-\Omega^2R^2)$ with the proved exact factor-2 relation;
   the $\Omega=0$ limit; the ambient Frobenius obstruction distinguished from
   the cylinder's locally integrable rest lines; full scope exclusions.
   Sources: Wikipedia "Sagnac effect"; Crowell §§8.1.1–8.1.3 pp. 165–166. This
   pass recomputed the return times, the difference, the proper-time
   difference and the holonomy, and re-read the `[L10]` supplier clause (c)
   and its use in steps 1.3/2.1/5.1/6.1/7.1. All 23 declared dependencies are
   authored. Checks clean. Decision: `escalate` owner-held; supplier
   reconciled.

5. **`texp-sr-bell-rockets-thread`** (A, level 15, thought-experiment).
   Claim (a)–(f): translated rocket worldlines with common $C^2$ $q$,
   $|q'|<c$, equal chart velocity and acceleration and constant chart
   separation $L$; unit field $n=\gamma(1,\beta,0,0)$; longitudinal expansion
   $\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3$; internal material
   length $\gamma(t)L$ at common flow parameter with exact rates; initial rest
   as a stated special case; contrast with the Born-rigid Rindler congruence;
   no elasticity, breaking or tension conclusion; final scope clause.
   Sources: Crowell §3.9.2 pp. 70–72 and §9.5.2 pp. 206–207; Giulini §5.5.
   This pass recomputed the expansion coefficient $\gamma^3q'q''/c^3$ from
   the supplier's (d) data and re-read its use in steps 1.2/4.2. All 22
   declared dependencies are authored; the `[L10]` fact quote is recorded.
   Checks clean. Decision: `escalate` owner-held; supplier reconciled.

6. **`ex-sr-bell-congruence-rest-separation-worked`** (B, level 15,
   mathematics example, `generation.role: example`). Claim: the quadratic
   profile $q=\tfrac12\alpha t^2$ on the two-sided subluminal domain
   $|t|<c/\alpha$; $G_{11}=\gamma^2$; rest separation $\gamma(t)L$ with
   minimum $L$ at $t=0$; both signs of expansion; exact check
   $\beta=3/5$, $\gamma=5/4$, $G_{11}=25/16$,
   $\theta(s,s)=75\alpha/(64c^2)$, $c\theta(s,s)=75\alpha/(64c)$. Sources:
   Crowell §3.9.2 and §9.5.2; Giulini §5.5. This pass recomputed the rational
   values and re-read the `[L3]` supplier quote and its use in steps 2.1/3.2.
   All 12 declared dependencies are authored. Checks clean. Decision:
   `escalate` owner-held; supplier reconciled. Leaf item: no run item depends
   on it.

7. **`pthm-sr-rindler-horizons-and-radar`** (A, level 16, physics theorem).
   Claim (i)–(v): the Rindler chart as a smooth bijection onto the right wedge
   with $\rho=0$ excluded; the wedge-boundary half-planes distinguished from
   the full null planes; causal criteria $q\le p$ iff $V(q)<0$ and
   $p\le q$ iff $U(q)>0$ for congruence worldlines with the constants
   immaterial; exact coaxial radar geometry
   $\theta_m=\theta_e+|\log(\rho_m/\rho_0)|$, radar distance
   $\rho_0|\log(\rho_m/\rho_0)|$, radar-time level sets equal to Rindler
   slices, the comparison with rest distance including $\rho_m=2\rho_0$ and
   the general logarithmic inequality, and both reflector-radius limits;
   protocol restrictions outside $W$ with the explicit example; scope.
   Sources: Blau §1.3 pp. 36–40 and §3.4 pp. 90–93; Wikipedia "Rindler
   coordinates"; Crowell §3.5.2 p. 62 and §7.1 p. 148. This pass re-read the
   whole item, including the previously repaired protocol formula in `[L6]`
   (balanced parentheses, matching `def-sr-operational-radar-protocol` (ii)),
   the half-plane/full-plane distinction in (i), the $V\ge0$ restriction
   wording in (ii)/(iv), and the log-inequality proof; the `[L3]` supplier
   quote and its use in steps 1.1–1.3/3.3 are recorded. All 34 declared
   dependencies are authored. Checks clean. Decision: `escalate` owner-held;
   supplier reconciled.

8. **`ex-sr-guided-ring-sagnac-worked`** (B, level 16, physics example,
   `generation.role: example`). Claim: the exact rational case
   $\Omega R=3c/5$, $\gamma=5/4$; return times $5\pi R/c$ and
   $5\pi R/(4c)$ with relative angular rates $2c/(5R)$ and $-8c/(5R)$;
   reception events $(5\pi R,-R,0,0)$ and
   $(5\pi R/4,-R/\sqrt2,R/\sqrt2,0)$; chart difference $15\pi R/(4c)$;
   detector proper-time difference $3\pi R/c$; holonomy $15\pi R/(8c)$ with
   the factor-2 relation; $\Omega=0$ limit. Sources: Wikipedia "Sagnac
   effect"; Crowell §§8.1.1–8.1.3. This pass recomputed every rational and
   event and re-read the `[L2]` supplier quote and its use in steps
   1.1/1.2/2.1. All 11 declared dependencies are authored. Checks clean.
   Decision: `escalate` owner-held; supplier reconciled. Leaf item.

9. **`cex-sr-rindler-horizon-is-not-a-physical-boundary`** (B, level 17,
   physics counterexample, `generation.role: counterexample`). Claim: refutes
   three assertions about $H=\{x^1=x^0\}$ (no causal curve crosses it; it
   separates all causal relations; the metric degenerates on it) with exact
   witnesses: the future timelike segment from $(-1,0,0,0)$ to $(3,1,0,0)$
   crossing at $(1/3,1/3,0,0)$, causal chains through events of $H$, the
   everywhere-nondegenerate metric, and the inertial crossing
   $z(t)=(ct,0,0,0)$; the surviving true statement is the causal restriction
   of reachability of the congruence worldlines. Sources: Crowell §3.5.2 p. 62
   and §7.1 p. 148; Blau §1.3 items 2–3 pp. 38–40. This pass recomputed the
   witness $\eta$-signs and crossing parameters and re-read the `[L3]`
   supplier quote and its use in steps 1.1–1.4/2.2. All nine declared
   dependencies are authored. Checks clean. Decision: `escalate` owner-held;
   supplier reconciled. Leaf item.

10. **`cex-sr-rindler-radar-distance-is-not-symmetric`** (B, level 17,
    physics counterexample, `generation.role: counterexample`). Claim: the two
    radar distances between the coaxial worldlines $\rho_0$ and $2\rho_0$ are
    $D_1=\rho_0\log2$ (observer $O$) and $D_2=2\rho_0\log2$ (observer $R$),
    with exact events $(3\rho_0/2,5\rho_0/2)$, $(15\rho_0/8,17\rho_0/8)$,
    $(3\rho_0/4,5\rho_0/4)$, $(15\rho_0/4,17\rho_0/4)$; refutes symmetry of
    the radar assignment. Sources: Wikipedia "Rindler coordinates"; Crowell
    §3.5.2 and §7.1. This pass recomputed both round trips (null legs,
    hyperbolic values, proper-time conversion $d\tau=\rho\,d\theta/c$) and
    re-read the nine declared dependencies' actual uses. Checks: full battery
    clean. Decision: `accept` (fresh receipt, confidence 1, examined
    dependency list recorded). Leaf item.

11. **`ex-sr-rindler-radar-distance-worked`** (B, level 17, physics example,
    `generation.role: example`). Claim: exact round trips at $\rho_m=2\rho_0$
    and $\rho_m=\rho_0/2$ (reflection events $(3\rho_0/2,5\rho_0/2)$ and
    $(3\rho_0/8,5\rho_0/8)$, common return $(15\rho_0/8,17\rho_0/8)$, radar
    distance $\rho_0\log2$ against rest distances $\rho_0$ and $\rho_0/2$),
    plus the third reflector at $3\rho_0/2$ (reflection
    $(5\rho_0/8,13\rho_0/8)$, return $(65\rho_0/72,97\rho_0/72)$, radar
    distance $\rho_0\log(3/2)$ with the same rest distance $\rho_0/2$ as the
    inner case), exhibiting both noninjectivity and failure of dependence on
    rest distance alone; $\log2<1$ and $\log2>1/2$ from $2<e<3$ with no
    decimal approximations. Sources: Wikipedia "Rindler coordinates"; Crowell
    §3.5.2 and §7.1. This pass recomputed all three round trips and the
    doubling identities $65/72$, $97/72$, and re-read the ten declared
    dependencies' actual uses. Checks: full battery clean. Decision: `accept`
    (fresh receipt, confidence 1, examined dependency list recorded). Leaf
    item.

## Supplier reconciliation (exact IDs and consuming steps)

- **Closed direct supplier.** `thm-sr-tensor-and-current-transformation`
  (batch 2, home `sr-lorentz-transformations`, declared level 9) is now
  authored. Exact consumer: `lem-sr-connecting-field-stretching`, consuming
  fact **`[L8]`** in numbered step **1.1** (tensoriality of the first-order
  coordinate formulas under affine inertial chart changes). The batch-10 proof
  contract now records the verbatim quote of the supplier's Statement clauses
  (i)–(iv) with `uses: ["1.1"]`; `proof-contract --strict` reports 0 errors
  over 11/11 items and `citation-fidelity --fail-on-missing-quote` reports
  every recorded quote present (178 citations). The consuming use needs only
  clauses (i)–(iv); it does not use clauses (v)–(vii), the volume-form or
  current/density material.
- **Reconciled supplier.** `thm-sr-fermi-walker-and-rigid-observer-examples`
  was authored before this pass; clauses (b), (c), (d) were checked against
  every consuming fact and step of the seven items that escalated on it:
  `lem-sr-hyperbolic-motion-worldline` (L13; steps 1.3/4.2),
  `pthm-sr-guided-ring-sagnac-delay` (L10; steps 1.3/2.1/5.1/6.1/7.1),
  `texp-sr-bell-rockets-thread` (L10; steps 1.2/4.2),
  `ex-sr-bell-congruence-rest-separation-worked` (L3; steps 2.1/3.2),
  `pthm-sr-rindler-horizons-and-radar` (L3; steps 1.1/1.2/1.3/3.3),
  `ex-sr-guided-ring-sagnac-worked` (L2; steps 1.1/1.2/2.1),
  `cex-sr-rindler-horizon-is-not-a-physical-boundary` (L3; steps
  1.1/1.2/1.3/1.4/2.2). Exact quotes are recorded and verified by
  `citation-fidelity.mjs`.
- **Other formerly open suppliers now authored and contracted.**
  `def-ck-tensor-field-on-minkowski-space` (facts L13, L15 of
  `lem-sr-connecting-field-stretching`); the six
  `lem-sr-proper-time-parametrization` quotes were refreshed to the current
  revision of that supplier's Statement.
- **Transitive closure completed during this pass (batch-2 lane).** The
  remaining batch-2 items in the eleven items' closure were authored by the
  concurrent batch-2 writer while this pass ran:
  `thm-sr-proper-orthochronous-lorentz-algebra` was finalized at
  2026-10-09T07:57:31Z and the batch-2 manifest entry was updated at
  2026-10-09T07:59:26Z; the level check on the updated manifest passes. The
  full transitive closure of all eleven items now resolves on disk with no
  missing supplier. Because those writes changed inputs the three open
  receipts bound, they were re-recorded at 2026-10-09T08:02:42–08:02:49Z after
  the writer went quiet, so the final three receipts bind the settled closure
  (see the table above).
- **New finding on a direct supplier (batch-2 owner; not editable here).**
  `thm-sr-tensor-and-current-transformation` is declared `domain: mathematics`
  but lists the physical item `def-sr-si-units-and-coordinate-conventions`
  (`domain: physics`, `origin: session`) in `deps` with role
  `formulation-prerequisite`. The run-scoped content gate reports, for this
  item, `math-physics-dependency` ("deps may not use physical supplier
  def-sr-si-units-and-coordinate-conventions") and `mathematical-role`
  ("mathematical deps must be mathematical-premise"); the same pair of errors
  is reported for the sibling batch-2 item `ex-sr-primed-frame-origin-motion`.
  Confidence: confirmed, mechanical, reproduced in this pass. Remedy
  (batch-2 owner): drop or replace that physical dependency — the
  transformation statements (i)–(iv) used by this pair do not need the SI
  conventions, and clause (vii) only mentions the $x^0=ct$ convention
  descriptively — then re-run the scoped gates. This does not block the
  present pair's own items: the consuming `[L8]` use does not depend on SI
  units, and no item of this pair carries the defect.

## Records updated this pass

- **Proof contract** (`research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json`):
  added the missing citation entry `[L8]` →
  `thm-sr-tensor-and-current-transformation` (`source_section: Statement`,
  exact verbatim quote of clauses (i)–(iv), `uses: ["1.1"]`). The strict
  contract is now completely clean (was the pair's single open contract).
- **Cross-batch dependency input**
  (`research/physics-em-sr-40-2026-10-08-batch-10.cross-batch-dependencies.json`):
  the single `open` row (`consumer: lem-sr-connecting-field-stretching`,
  `supplier: thm-sr-tensor-and-current-transformation`) was moved to
  `verified` with dated evidence recording the authored supplier, the
  consuming fact/step, the exact quote contract and the checks; the batch-10
  input is now 114/114 rows verified. The unified ledger was refreshed with
  `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  (result: "refreshed and deduplicated").
- **Item decisions**: three `accept` receipts recorded at confidence 1 with
  examined dependency lists and concrete evidence —
  `def-sr-proper-acceleration` (`04f9ab2b…`),
  `cex-sr-rindler-radar-distance-is-not-symmetric` (`ec8dca01…`) and
  `ex-sr-rindler-radar-distance-worked` (`4c62ed66…`) — re-recorded at
  2026-10-09T08:02Z after the concurrent batch-2 writes settled, so they bind
  the current closure. The eight remaining receipts are owner-held (see "Open
  obligations"), since the tool refuses any non-owner replacement of an
  `escalate` receipt.
- **No item Markdown, page carrier, manifest, coverage or scope content was
  changed**; all eleven items and both pages are byte-identical to the prior
  pass.

## Checks run this pass (exact commands and results)

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths) | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<11 pair items>` | 10 proof-bearing items checked, 0 failing; `def-sr-proper-acceleration` is the nonproof member |
| rendercheck (explicit paths) | `node tools/physics-support/rendercheck.mjs items/<11 pair items> library/special-relativity/sr-accelerated-observers.md library/special-relativity/sr-accelerated-observers-examples.md` | OK — 13 files, all math spans parse, frontmatter valid |
| proof-layout (batched) | `node tools/physics-support/proof-layout.mjs items/<11 pair items>` | 11 items, 85 steps, 0 defects |
| content policy (batch scope) | `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-10.pages.json` | 11 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json --strict` | 0 errors, 0 warnings, 11/11 items |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json --fail-on-missing-quote` | 178 citations over 11 items; no missing quote; no widening candidates |
| finite smoke | `node tools/physics-support/finite-smoke.mjs research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json` | 0 errors, 0 checks (no registered obligations) |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-10.pages.json` | 11 items, 0 normalized, 0 errors |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 473 items, 80 pages, max level 24; no finding for this pair |
| coverage checklist | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-10.coverage.json --require-destination` | 1 page, 39 harvested results, 0 errors, 0 warnings |
| plan validation (run mode) | `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08` | exits nonzero with 39 `undeclared-prereq` findings, **none naming pages 227/228** (pages 227/228 appear only in the inventory listing) |
| physics content gate (run mode) | `node tools/physics-support/physics-check.mjs --plan research/plan-spec.json --run physics-em-sr-40-2026-10-08` | 4 errors run-wide, **none on any item of this pair**: two on `ex-sr-primed-frame-origin-motion` and two on `thm-sr-tensor-and-current-transformation` (both batch-2; see the supplier finding above) |
| pair-author artifacts | `checkPairAuthorArtifacts(physics, run, ['sr-accelerated-observers'])` (`dispatch-author-artifacts.mjs`) | 15 required carriers checked, `ok: true`, no missing path |
| dependency closure resolution | scan of `itemInputPaths` for all 11 items | no missing item file anywhere in the eleven transitive closures |
| dependency ledger | `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` | refreshed and deduplicated |
| Step-3 decision state | `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final` (via the loader per item) | three `accept` receipts current; eight receipts owner-held |
| escalation-policy probe | `node tools/physics-support/step3-decisions.mjs record-item --item lem-sr-connecting-field-stretching --decision accept …` | refused with "The owner must resolve this item decision" — recorded as evidence that the eight escalations cannot be replaced by a non-owner pass |

Scope arithmetic rechecked during the audit: the Bell expansion
$\gamma^3q'q''/c^3$ and the worked value $75\alpha/(64c^2)$ (rate
$75\alpha/(64c)$); the Sagnac values $5\pi R/c$, $5\pi R/(4c)$,
$15\pi R/(4c)$, $3\pi R/c$, $15\pi R/(8c)$, $3\pi R/(2c)$ and the reception
events; the Rindler radar events at $\log2$ and $\log(3/2)$, the three worked
reflectors and the two uniform-asymmetry distances $D_1=\rho_0\log2$,
$D_2=2\rho_0\log2$; the hyperbolic worldline identities
$\eta(U,U)=-c^2$, $\eta(A,A)=\alpha^2$, $A=c^2a_{\mathrm{cg}}$; and the
horizon-crossing witnesses with exact rational coordinates.

## Open obligations at handoff

1. **Owner resolution of the eight owner-held receipts** (the only gate
   blocker inside this pair): `lem-sr-connecting-field-stretching`,
   `lem-sr-hyperbolic-motion-worldline`, `pthm-sr-guided-ring-sagnac-delay`,
   `texp-sr-bell-rockets-thread`,
   `ex-sr-bell-congruence-rest-separation-worked`,
   `pthm-sr-rindler-horizons-and-radar`, `ex-sr-guided-ring-sagnac-worked`,
   `cex-sr-rindler-horizon-is-not-a-physical-boundary`. Each existing receipt
   (`research/physics-em-sr-40-2026-10-08-step3b-review-<item>.json`) records
   `decision: escalate` on a supplier that is now authored; the exact supplier
   use and quote contract are verified. Mechanism: the owner records an owner
   `reopen` for the item (with `reopens_review_sha256` equal to the hash of
   the current escalate receipt), after which a fresh non-owner item audit can
   record `accept`/`repaired` and close it.
2. **Batch-2 owner repair**: remove/replace the physical dependency
   `def-sr-si-units-and-coordinate-conventions` in
   `thm-sr-tensor-and-current-transformation` and
   `ex-sr-primed-frame-origin-motion`, which makes the run-scoped
   `physics-content` gate report `math-physics-dependency` and
   `mathematical-role` errors (4 errors total).
3. **Independent Steps 5–8 review** of all eleven items, both page carriers
   and the batch-10 contracts remains owed; this report claims no independent
   audit, no publication readiness and no judge or audit stamps.
4. **Run-level plan findings** (39 `undeclared-prereq` rows on other pages)
   remain for the Step-4 splice reconciliation by their owning batches; none
   touches pages 227/228.

## Presentation observations (report only; no edit made)

- `lem-sr-hyperbolic-motion-worldline` uses the symbol `x` for both the
  inertial chart and the curve. The item is internally consistent and the
  convention matches parts of the surrounding prose, but later readers may
  find it ambiguous; a rename at review time would touch the Statement, so it
  is left to the later stages.
- The Step-3a observations on this pair (the Ehrenfest/rigid-size wording
  destination and the historical second-treatment line) remain
  owner-presentation follow-ups with no pre-splice plan mismatch.

## Handoff summary

All eleven assigned items (`def-sr-proper-acceleration`,
`lem-sr-connecting-field-stretching`, `lem-sr-hyperbolic-motion-worldline`,
`pthm-sr-guided-ring-sagnac-delay`, `texp-sr-bell-rockets-thread`,
`ex-sr-bell-congruence-rest-separation-worked`,
`pthm-sr-rindler-horizons-and-radar`, `ex-sr-guided-ring-sagnac-worked`,
`cex-sr-rindler-horizon-is-not-a-physical-boundary`,
`cex-sr-rindler-radar-distance-is-not-symmetric`,
`ex-sr-rindler-radar-distance-worked`) are authored and on disk with both page
carriers; the previously open direct supplier is authored and its citation
contract and actual use are reconciled; the batch-10 cross-batch input is
114/114 verified and the unified ledger refreshed; three items carry current
`accept` receipts; eight receipts remain owner-held solely because of the
owner-resolution rule. The checks actually run are listed above with their
results; no new suppliers were added; no item content was changed this pass;
the only unresolved items are the owner-held receipts, the batch-2 supplier
classification defect and the ordinary later-stage reviews.
