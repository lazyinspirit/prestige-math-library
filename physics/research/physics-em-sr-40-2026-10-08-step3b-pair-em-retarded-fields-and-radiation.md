# Step 3b authoring report — pair `em-retarded-fields-and-radiation` / `-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 36;
  label `step3b-pair-em-retarded-fields-and-radiation-3d1907ca17521a3f`; started 2026-10-09, final battery 2026-10-09.
- A page: `em-retarded-fields-and-radiation` (order 351, category `classical-electromagnetism`, library `physics`).
- B page: `em-retarded-fields-and-radiation-examples` (order 352).
- Owned items (12), authored in the dispatch's dependency-level order:
  1. `lem-em-sphere-zonal-moments` (A, level 0) · 2. `post-em-radiation-selection` (A, 18) ·
  3. `def-em-retarded-point-geometry` (A, 19) · 4. `pthm-em-retarded-potentials` (A, 19) ·
  5. `pthm-em-dipole-radiation` (A, 20) · 6. `pthm-em-lienard-wiechert` (A, 20) ·
  7. `ex-em-no-retarded-root-example` (B, 20) · 8. `pthm-em-larmor-nonrelativistic` (A, 21) ·
  9. `ex-em-dipole-antenna-example` (B, 21) · 10. `pthm-em-lienard-emitted-power` (A, 22) ·
  11. `texp-em-classical-orbit-instability` (B, 22) · 12. `rem-em-radiation-reaction-limits` (A, 23).

**Outcome.** All 12 item carriers are fully authored, both pages are written, and the manifest,
coverage, proof contracts and cross-batch dependency input are registered and reconciled. Every
batch-local gate listed in §"Checks actually run" is green. No published item, page, plan entry or
sibling pair was edited; imports and the root mathematics workspace were read-only. No unresolved
supplier escalation remains for this pair. Independent mathematical audit (Steps 5–8) is the expected
next stage and is the only open obligation of record.

## 1. Deliverables on disk (final state)

- Items (12): `items/<id>.md` for each ID above; A-page items and B-page items as dispatched.
- Pages (2): `library/classical-electromagnetism/em-retarded-fields-and-radiation.md`
  (`items:` the 9 A items, `examples: []`) and
  `library/classical-electromagnetism/em-retarded-fields-and-radiation-examples.md`
  (`items: []`, `examples: [ex-em-no-retarded-root-example, ex-em-dipole-antenna-example,
  texp-em-classical-orbit-instability]`).
- Batch records: `research/physics-em-sr-40-2026-10-08-batch-36.pages.json` (12 items + 2 pages;
  all 12 manifest entries carry the authored statement, deps, `dependency_roles` and
  `dependency_level`), `…-batch-36.coverage.json` (A and B page entries, status authored),
  `…-batch-36.proof-contracts.json` (new; 12 entries, 150 citations, 46 step contracts,
  88 boundary dispositions, 1 `physics_review`), `…-batch-36.cross-batch-dependencies.json`
  (70 rows, all `verified`), and this report.
- Decisions: `research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json` for all 12 items
  (`accept`, confidence 1, examined dependency IDs and concrete evidence); no owner records written.

## 2. Checkpoint log (one entry per item, authoring order)

Conventions shared by all physics items: laboratory chart and units of `def-em-lab-geometry` /
`def-em-si-conventions`; the causal selection of `post-em-radiation-selection`; all physics claims
conditional on their stated regularity, compactness, subluminality and choice hypotheses; no
measurement, statistical or precision claim anywhere in the pair.

1. **`lem-em-sphere-zonal-moments` (mathematics, level 0).** Claim: for the polar surface measure
   $\sigma$ on $S^2$, the zonal identity, the linear and quadratic weighted moments, and the
   moment evaluations $\sigma(S^2)=4\pi$, $\int n\,d\sigma=0$, $\int n_in_j\,d\sigma=(4\pi/3)\delta_{ij}$,
   $\int|n\times a|^2\,d\sigma=(8\pi/3)|a|^2$, with scope (e). Conventions: one standard chart
   $X(\theta,\varphi)$ on $[0,\pi]\times[0,2\pi]$ with patch regularity, interior injectivity and seam
   control; Fubini and the fundamental theorem; reflection and swap substitutions; $\mathrm{AC}_\omega$
   declared and carried only through the surface-measure interface. Sources: Hunter, *Notes on PDE*
   §1.10.2–§1.12 printed pp. 15–18; Folland, *Real Analysis* 2nd ed. Theorem 2.49 and section;
   Teschl, *PDE* §7.1 printed p. 168 eq. (7.9). Dependencies: 32 published mathematical imports
   (deps refined from scaffold with honest supplemental suppliers: polar-coordinate finiteness,
   trigonometric monotonicity/addition/zero sets, $C^k$ algebra, bounded-integrability interface,
   cross-product norm identity); no physics dependency. Repair during the contract gate: step 6.1
   now cites [F1] for finiteness of $\sigma$, so every fact–source link is genuinely consumed.
   Checks: precheck pass, proof-layout 7 steps 0 defects, rendercheck, content-policy, strict
   contract 31 citations, level 0 matches computed.
2. **`post-em-radiation-selection` (postulate, level 18).** Claim: clauses (a) formulation with the
   affine free-solution freedom, (b) the adopted retarded rule with no free field added, (c) status,
   scope and the explicit weak point-source extension under $\mathrm{AC}_\omega$. Three HTTP(S)
   sources with exact locators (Tong §6.1 pp. 134–143 esp. §6.1.2; Fitzpatrick nodes 49–51;
   Beisert §11.4 pp. 11.4–11.7). Nonproof item: `physics_review` passes
   formulation/scope/sources/non_derivation; no proof or boundary worksheet is manufactured.
   Checks: precheck nonproof structure pass, rendercheck, content-policy, strict contract, level 18.
3. **`def-em-retarded-point-geometry` (definition, level 19).** Claim: the datum $(q,z,v_*)$ with
   $z$ of class $C^3$ and uniform bound $v_*<c$, clauses (a) retarded root, (b) retarded data
   $r,n,\beta,\kappa,\dot\beta$, (c) emission-event data and emitted spheres, (d) branches and scope;
   `Well-definedness notes` discharge (a)–(b) against `lem-em-global-retarded-root` (read and
   matched) and record the finite-history and pointwise-subluminal boundaries. Sources: Tong
   §6.4.1 pp. 158–159; Beisert §11.5 pp. 11.15–11.17; Fitzpatrick node 124. Checks: rendercheck,
   content-policy, strict definition contract (zero citations, eight boundary dispositions),
   depcheck clean, level 19.
4. **`pthm-em-retarded-potentials` (physics theorem, level 19).** Claim: (a) smoothness and
   $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$; (b) Lorenz gauge from continuity; (c) the four smooth
   Maxwell equations; (d) zero field before $t_0$; (e) zero-data Cauchy identification for every
   $t_1<t_0$; (f) zero total charge; (g) scope. Sources: Tong §6.1 pp. 134–143; Fitzpatrick nodes
   49–52; Beisert §11.4 pp. 11.4–11.7. Dependencies refined honestly against the actual argument:
   the scaffold's `thm-dominated-convergence` / translation-invariance rows were replaced by the
   actually used `cor-c-one-change-of-variables-for-l-one-functions` and
   `thm-differentiation-under-the-integral-sign`; kernel, polar, divergence, parameter-integral and
   gauge items as listed in the carrier. Checks: precheck pass, proof-layout 7 steps 0 defects,
   rendercheck, content-policy, strict contract 20 citations, depcheck, level 19. **Supplier
   escalation (see §3) resolved.**
5. **`pthm-em-dipole-radiation` (physics theorem, level 20).** Claim: (a) moment identities
   $p'=\int J$, $p''=\int J_t$, $\int\rho_t=0$, zero total charge; (b) absolute dipole replacement
   error $|V-p''|\le D(u)$; (c) uniform leading dipole fields with explicit $\Gamma_E,D(u)$
   remainders; (d) retarded-time radiated power $\mu_0|p''|^2/(6\pi c)+R(u)$ with the exact
   $D(u)=0$ case; (e) scope. Sources: Tong §6.2.1 pp. 144–146; Fitzpatrick nodes 94–95; Beisert
   §11.7–§11.13. Repair during the contract gate: step 1.1 now cites [F4] (static moment convention),
   so every fact is consumed. Checks: precheck, proof-layout 4 steps 0 defects, rendercheck,
   content-policy, strict contract 19 citations (with exact quotes of
   `thm-em-radiation-asymptotic-flux` (b),(c)), level 20.
6. **`pthm-em-lienard-wiechert` (physics theorem, level 20).** Claim: (a) potentials
   $\varphi=C/(\kappa r)$, $A=\beta\varphi/c$ with locally integrable zero extensions; (b) the exact
   velocity/acceleration split with $B=n\times E/c$ and the velocity bound; (c) the uniform
   far-zone remainder at a fixed emission event; (d) scope exclusions (no field on $\Gamma$, no
   self-force, no energy statement, $v_*<c$ essential); (e) the constructed proper point-source
   weak Maxwell solution, with the distributional identities supplied by the supplier theorem.
   Sources: Tong §6.4.1/§6.4.3 pp. 158–165; Fitzpatrick nodes 124–125; Beisert §11.5–§11.6.
   Scope wording repaired per Step 3a observation 1: the self-contradictory exclusion of the
   "distributional Maxwell solution property" is gone; the weak solution is included and only
   nonlinear self-interaction is excluded (carrier and manifest both repaired before the scope
   decision was taken). Checks: precheck, proof-layout 5 steps 0 defects, rendercheck,
   content-policy, strict contract 14 citations, level 20.
7. **`ex-em-no-retarded-root-example` (B, level 20).** Claim: (a) $z(s)=(\sqrt{c^2s^2+a^2},0,0)$ is
   smooth with $|z'|<c$ pointwise but no uniform bound; (b) at $(0,0)$ the retarded equation has no
   solution (squaring forces $a^2=0$); (c) scope: outside the root lemma's hypotheses, no theorem
   contradicted, no physical charge claimed. Sources: Beisert §11.5 pp. 11.15–11.16; Tong §6.4.1
   p. 158. Checks: precheck, proof-layout 3 steps 0 defects, rendercheck, content-policy, strict
   contract 10 citations, level 20.
8. **`pthm-em-larmor-nonrelativistic` (physics theorem, level 21).** Claim: (a)–(e) the exact
   instantaneous-rest branch — field on the emitted sphere with the uniform velocity-field
   remainder, the uniform angular flux limit, Larmor power $q^2|a|^2/(6\pi\varepsilon_0c^3)$, the
   $\sin^2\theta$ pattern, scope — and (f) the general low-speed branch with
   $P_{\rm em}=\gamma_0^6(|a|^2-|\beta_0\times a|^2)q^2/(6\pi\varepsilon_0c^3)$, the uniform
   $\delta$-comparisons and the uniform angular comparison. Route: approved scaffold deviation
   (M10): exact rest case plus separately quantified general low-speed branch. Sources: Tong
   §6.2.2 pp. 146–147; Fitzpatrick node 130; Beisert §11.17–§11.19. Repair: depcheck flagged
   `post-em-radiation-selection` as cited-but-not-declared; it was added to `deps` with role
   `physical-assumption` and the manifest was synced (level stays 21; the comparison exponents were
   independently re-verified numerically, worst-case ratio ≤ 0.3 of the claimed coefficient).
   Checks: precheck, proof-layout 8 steps 0 defects, rendercheck, content-policy, strict contract
   21 citations, depcheck clean, level 21.
9. **`ex-em-dipole-antenna-example` (B, level 21).** Claim: (a) harmonic far fields with
   amplitude $\propto\sin\theta$; (b) retarded-time angular density $\propto\cos^2(\omega u)\sin^2\theta$
   and its sphere integral; (c) period average $\mu_0\omega^4p_0^2/(12\pi c)$; (d) scope; (e) the
   actual compact-window source with moment $p_\eta$ and the explicit non-equivalence witness
   ($V=p''$ sufficient, not equivalent to $D=0$). Sources: Tong §6.2.1 pp. 144–146; Fitzpatrick
   nodes 94–95. Manifest sync: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` added
   to the manifest deps/roles to match the carrier. Checks: precheck, proof-layout 4 steps
   0 defects, rendercheck, content-policy, strict contract 13 citations, level 21.
10. **`pthm-em-lienard-emitted-power` (physics theorem, level 22).** Claim: (a) the
    $\kappa_0$-weighted far-zone flux limit as the definition of emitted power; (b) the closed form
    $q^2\gamma_0^6(|a|^2-|\beta_0\times a|^2)/(6\pi\varepsilon_0c^3)=q^2\eta(A,A)/(6\pi\varepsilon_0c^3)$;
    (c) the uniform $\delta$-comparison with the rest value; (d) scope (per unit emission time,
    no dynamics). Sources: Tong §6.4.4 pp. 165–169; Fitzpatrick nodes 129–131; Beisert
    §11.19–§11.21. Checks: precheck, proof-layout 4 steps 0 defects, rendercheck, content-policy,
    strict contract 14 citations, level 22; supplier `thm-sr-proper-time-and-observer-decomposition`
    (e) read and matched at [F3]/step 2.1.
11. **`texp-em-classical-orbit-instability` (B, level 22).** Claim: from the adopted reduced
    premise (H), (a) $r'=-A/r^2$ with $A=q^2\kappa/(3\pi\varepsilon_0m^2c^3)>0$ and the cubic
    $r^3=r_0^3-3A(t-t_0)$; (b) strict decrease and formal collapse time $t_*=t_0+r_0^3/(3A)$;
    (c) scope: low-speed premise fails as $r\to0$, no physical collapse, lifetimes or self-force
    claim, no empirical content. Sources: Tong §6.2.3 pp. 147–149; Fitzpatrick node 131. Checks:
    precheck, proof-layout 4 steps 0 defects, rendercheck, content-policy, strict contract
    10 citations, level 22.
12. **`rem-em-radiation-reaction-limits` (remark, level 23).** Claim: recorded limitations (a)
    diverging truncated point self-energy, (b) undefined products of the singular self-field with
    the point current, (c) prescribed-source-only reading of the emitted-power items, (d)
    deferrals with no measurement or refutation claim. Sources: Tong §6.4.4 (reading record);
    Beisert §11.15–§11.21 (reading record). Checks: rendercheck, content-policy, depcheck, strict
    contract with no manufactured proof/boundary worksheet (all eight boundary cases
    `not_applicable` with item-specific reasons), level 23.

## 3. Supplier flags and reconciliation

- **Entry flag:** `pthm-em-lorenz-gauge-wave-form` (batch 31, page `em-potentials-and-gauge`) was
  unauthored at the start of this Step 3b; its scaffold statement was the interface used by
  `pthm-em-retarded-potentials` step 3.1 / fact [F2] (clauses (a) exact identities and (c)
  Lorenz-gauge decoupling).
- **Resolution:** the supplier is now authored (level 17). Its Statement was read in full and
  supplies exactly clauses (a) and (c) as consumed; the exact excerpt is contracted in
  `…-batch-36.proof-contracts.json` (fact [F2] → `pthm-em-lorenz-gauge-wave-form`, quote from the
  Statement, uses `3.1`). The consumer's decision was recorded as `accept` (confidence 1) once the
  supplier carrier and its use were reconciled; the entry escalation is **cleared**.
- **Other in-run suppliers used by this pair (25 cross-batch suppliers; all authored and
  verified):** `def-em-electric-moments` (27), `def-em-fields` (23), `def-em-lab-geometry` (23),
  `def-em-potential-gauge-and-field-conventions` (21), `def-em-relativistic-worldlines-frames` (23),
  `def-em-si-conventions` (23), `def-em-sources` (23), `def-em-vacuum-energy-flux` (32),
  `def-em-weak-sources` (24), `lem-em-global-retarded-root` (16), `lem-em-parameter-integrals` (13),
  `lem-em-point-retarded-potential-and-fields` (21), `lem-em-retarded-wave-kernel` (21),
  `post-em-distributional-vacuum-maxwell` (24), `post-em-lorentz-coupling` (23),
  `post-em-vacuum-maxwell` (23), `pthm-em-charge-continuity` (24), `pthm-em-lorenz-gauge-wave-form`
  (31), `pthm-em-point-self-energy-divergence` (25), `pthm-em-poynting-balance` (32),
  `thm-em-radiation-asymptotic-flux` (19), `thm-em-retarded-point-distributional-maxwell` (21),
  `thm-em-retarded-root-and-fields` (22), `thm-em-wave-cauchy-kirchhoff` (17),
  `thm-sr-proper-time-and-observer-decomposition` (3).
- **Ledger:** all 70 rows of `…-batch-36.cross-batch-dependencies.json` (65 item edges + 5 page
  edges) were updated to `verified` with the required claim, consuming location and mismatch
  status, and `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` was run
  (fresh unified ledger: 70/70 batch-36 edges carry a verified review; `orphaned_reviews` empty).
  Page edges: the five declared prerequisite pages were verified against the exact consumed items.
- No supplier remains open, and no cross-batch change is required from this pair.

## 4. Checks actually run (final battery, all on the final files)

| Check | Command | Result |
|---|---|---|
| Precheck | `tsx-run … precheck.mts` over the 12 item paths | **10 checked, 0 failing** (the definition and the remark have no proof block and are skipped by design) |
| Proof layout | `proof-layout.mjs` over all 12 item paths (single batched run) | **12 items, 46 steps, 0 defects** |
| Rendering | `rendercheck.mjs` over 12 items + 2 pages | **OK — 14 files**, all math parses under KaTeX, frontmatter parses |
| Content policy | `content-policy.mjs …-batch-36.pages.json` (item mode) | **12 scoped items, 0 errors, 0 warnings** |
| Strict proof contracts | `proof-contract.mjs …-batch-36.proof-contracts.json --strict` | **12/12 checked, 0 errors, 0 warnings** (150 citations, 46 step contracts, 88 boundary dispositions, 1 `physics_review`) |
| Dependency check | `depcheck.mjs --items-file` (the 12 IDs) | **OK**; selected item/page checks and prerequisite cycle checks passed |
| Manifest deps | `manifest-deps.mjs` on the batch manifest | **12 items, 0 missing, 0 errors** |
| Dependency levels | `item-dependency-levels.mjs check --run …` | clean run-wide: **473 items across 80 pages, max level 24**; every owned item's manifest `dependency_level` equals the computed value (0, 18, 19, 19, 20, 20, 20, 21, 21, 22, 22, 23) |
| Coverage | `coverage-checklist.mjs …-batch-36.coverage.json --require-destination` | **2 pages, 51 harvested results, 0 errors** |
| Plan | `validate-plan.mjs research/plan-spec.json --run …` | run-level **FAIL with 43 errors (42 `undeclared-prereq`, 1 `requires-resolve`) and 33 `redundant-prereq` warnings, all on other pages**; zero findings name pages 351/352 or any owned item. The batch-scoped page validation (`--pages-file` without `--run`) is **OK** (declared order acyclic and consistent). Reported for Step 4 without hiding it. |
| Step-3 decisions | `step3-decisions.mjs check --run … --phase final` | **all 12 owned items accepted (closed)**; run-level 289/473 accepted with 0 unresolved among owned items (other batches still in flight). Step 3a scope check: all 40 pairs closed, including this pair. |
| Frontier ledger | `frontier-dependency-ledger.mjs refresh --run …` | **refreshed and deduplicated**; batch-36 input 70/70 verified. |

Notes on check scope. (i) `content-policy … --manifest-only` is the pre-authoring gate ("may these
ids be minted here?") and now reports `batch-item-already-exists` for minted items; it is not a
Step-3b gate and was not counted. (ii) The run-level `validate-plan` failures and the run-level
289/473 decision count concern other batches and are handed to Step 4 / the serial reconciler; they
do not touch this pair. (iii) An early `item-dependency-levels` run showed a single mismatch on the
batch-16 item `lem-em-outgoing-source-helmholtz-and-diffraction`; it was resolved by the time of the
final run and was never a batch-36 item.

## 5. Published concerns

- **None.** This batch authored draft items and pages only; no published item, page, contract or
  published-interface file was modified, and no defect was found in any published supplier read
  during authoring (the imported mathematical suppliers were used through their published
  statements).
- In-run observations carried forward (not published defects):
  1. The run-level `validate-plan` findings listed in §4 are outside batch 36 and must be reconciled
     by their owning batches before Step 4's splice.
  2. `pthm-em-larmor-nonrelativistic`: the reserved title keeps "nonrelativistic" while the item
     contains the separately quantified general low-speed branch (f). This was recorded as
     non-blocking in Step 3a observation 2; the title was preserved (scope IDs and promised claims
     are preserved) and the question remains owner-held if the owner wishes to reconcile wording.
  3. The uniform $\delta$-comparison appears both in clause (f) of
     `pthm-em-larmor-nonrelativistic` and in clause (c) of `pthm-em-lienard-emitted-power`
     (which consumes the former); this is the design-sanctioned overlap recorded in Step 3a
     observation 3, not drift.
  4. The batch-36 notes predate Reconciliations10–11 (Step 3a observation 4); the current manifests,
     items and this report are authoritative.

## 6. Open obligations at handoff

- Independent mathematical audit and systematic review (Steps 5–8) are pending by design.
- Owner-held (non-blocking): the `pthm-em-larmor-nonrelativistic` title/wording reconciliation, if
  the owner wants it.
- Step 4: the run-level `validate-plan` findings outside batch 36 (exact command in §4); no
  pre-splice mismatch belongs to this pair.
- No unresolved supplier escalation, no missing item, page, contract, coverage row or manifest row
  for this pair.

## 7. Additions and scope records

- `lem-em-sphere-zonal-moments` is the one scaffold-added local prerequisite of this pair
  (mathematics domain, recorded in the batch-36 notes and in the A-page coverage `canonical` row).
  It is part of the immutable pre-author scaffold inventory (`step3-auditor-baseline.items`), so it
  received an ordinary current item decision like the other 11 IDs. It depends only on published
  mathematical imports; no physics item can depend on it in reverse.
- The B page file `library/classical-electromagnetism/em-retarded-fields-and-radiation-examples.md`
  was written in this Step 3b (the page ID was already planned and manifested).
- No other IDs were added; no sibling or published content was touched; shared batch files were
  updated in place preserving all sibling rows.

## 8. Handoff state (files)

- `items/lem-em-sphere-zonal-moments.md`, `items/post-em-radiation-selection.md`,
  `items/def-em-retarded-point-geometry.md`, `items/pthm-em-retarded-potentials.md`,
  `items/pthm-em-dipole-radiation.md`, `items/pthm-em-lienard-wiechert.md`,
  `items/ex-em-no-retarded-root-example.md`, `items/pthm-em-larmor-nonrelativistic.md`,
  `items/ex-em-dipole-antenna-example.md`, `items/pthm-em-lienard-emitted-power.md`,
  `items/texp-em-classical-orbit-instability.md`, `items/rem-em-radiation-reaction-limits.md`.
- `library/classical-electromagnetism/em-retarded-fields-and-radiation.md` and
  `library/classical-electromagnetism/em-retarded-fields-and-radiation-examples.md`.
- `research/physics-em-sr-40-2026-10-08-batch-36.pages.json`,
  `research/physics-em-sr-40-2026-10-08-batch-36.coverage.json`,
  `research/physics-em-sr-40-2026-10-08-batch-36.proof-contracts.json`,
  `research/physics-em-sr-40-2026-10-08-batch-36.cross-batch-dependencies.json`,
  `research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json` (refreshed by the ledger tool),
  `research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json` (12 receipts).
- This report: `research/physics-em-sr-40-2026-10-08-step3b-pair-em-retarded-fields-and-radiation.md`.
