# Step 3b pair report — `em-lorentz-covariant-formulation` / `-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 37; 2026-10-09.
- A page: `em-lorentz-covariant-formulation` (order 353, category `classical-electromagnetism`, library `physics`).
- B page: `em-lorentz-covariant-formulation-examples` (order 354, companion of the A page).
- Owned IDs, in the dispatch's audit/author order (dependency level, then page order, then item ID):
  1. `pthm-em-tensor-maxwell-equivalence` (level 14, A page)
  2. `pthm-em-lorentz-field-transform` (level 15, A page)
  3. `pthm-em-observer-field-and-doppler` (level 16, A page)
  4. `ex-em-boosted-fields-example` (level 16, B page)
  5. `pthm-em-relativistic-lorentz-force` (level 18, A page)
  6. `pthm-em-covariant-stress-energy` (level 19, A page)
  7. `ex-em-constant-field-trajectory` (level 19, B page)
- Entry state (2026-10-09, at report creation): none of the seven carriers exists in `items/`;
  the two library pages do not exist; no Step-3b decisions are recorded for the seven IDs.
  All seven IDs are recorded in the immutable pre-author scaffold inventory
  (`research/physics-em-sr-40-2026-10-08-batch-37.pages.json`), so each receives an ordinary
  current item decision after authoring.
- Open obligations at entry:
  (a) author all seven carriers and the two library pages from the batch-37 manifest claims,
      source locators and proof routes, keeping the owner-mandated sign/unit dictionary
      (`F_0i = -E_i/c`, `F_ij = eps_ijk B_k`, `x^0 = ct`, `(-+++)`, `mu_0 c^2 eps_0 = 1`,
      `j = (c rho, J)`, `eta(Phi(u),w) = F(w,u)`);
  (b) flag and reconcile every in-run supplier that is not yet authored — at entry:
      `thm-sr-tensor-and-current-transformation`, `thm-sr-proper-orthochronous-lorentz-algebra`
      (`sr-lorentz-transformations`), `pthm-em-plane-wave-maxwell`
      (`em-vacuum-waves-and-polarization`), `def-em-vacuum-energy-flux`,
      `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance`, `pthm-em-momentum-balance`
      (`em-energy-momentum-and-angular-balance`); author each consuming proof against the
      current scaffold statement and re-verify against the finished carrier if it lands;
  (c) reconcile carrier `deps`/roles/levels with the batch-37 manifest, write the strict proof
      contracts, run the check battery on explicit paths, and record `step3-decisions`
      (`accept`/`repaired`, or `escalate` while a load-bearing supplier is unauthored).
- **Reconciliation update (2026-10-09, handoff).** All obligations above are closed. All seven
  carriers and both library pages are authored; every entry-time supplier has landed and its
  finished clauses were re-read against the consuming proof steps (details and locators in §2);
  all seven item decisions are recorded `repaired` with confidence 1 (§4); and the check
  battery, strict proof contracts and dependency-level verification are complete (§3).

## 1. Scaffold audit and review inputs

Entry re-check on continuation (2026-10-09, after a context compact), run
`physics-em-sr-40-2026-10-08`, batch 37:

- `items/pthm-em-tensor-maxwell-equivalence.md` was already authored by this
  dispatch (21.6 kB) and is now fixed to the canonical step layering that
  `precheck.mts` requires (its first write had step labels 1.1, 1.2, 2.1-2.4,
  3.1, 4.1-4.4, 5.1; the checker's `layerRepair` canonical form is 1.1-1.6,
  2.1-2.3, 3.1, 4.1, 5.1 and reorders the transformation-data step). The
  canonical form was adopted; `precheck` now passes natively and
  `rendercheck` reports no defect. Also corrected the concluding step's
  "Steps 1.1-4.4" to "Steps 1.1-4.1" (range endpoint).
- The other six carriers did not exist at that re-check; the two library pages
  did not exist. (Superseded: all seven carriers and both pages were authored
  during this dispatch — see §2.)
- In-run supplier re-check at continuation (files under `items/`): authored —
  `pthm-em-plane-wave-maxwell`, `def-em-plane-wave-definition`,
  `post-sr-ideal-plane-wave-model`, `pthm-sr-null-wave-doppler-and-aberration`,
  `thm-sr-tensor-and-current-transformation`, `def-lorentz-boost`,
  `def-spatial-rotation-of-an-inertial-frame`, `lem-em-boost-preserves-metric`,
  `lem-em-antisymmetric-tensor-contraction`, `thm-sr-antisymmetric-observer-decomposition`,
  `def-em-vacuum-energy-flux`, `thm-sr-stress-balance-and-finite-flux`,
  `pthm-sr-momentum-and-four-force`, all `em-primitives-and-postulates` and
  `em-minkowski-mathematical-prerequisites` items. Unauthored at continuation —
  `thm-sr-proper-orthochronous-lorentz-algebra`
  (batch 2 `sr-lorentz-transformations`), `def-em-vacuum-stress-momentum`,
  `pthm-em-poynting-balance`, `pthm-em-momentum-balance` (batch 32
  `em-energy-momentum-and-angular-balance`). These are consumed by
  `pthm-em-lorentz-field-transform` (steps 3.1-3.2, general proper
  orthochronous changes and their invariant clauses) and
  `pthm-em-covariant-stress-energy` (steps 1.3 and 2.1, component and balance
  clauses). All four have since landed; the consumers' uses were re-read
  against the finished statements (see §2.2 and §2.6) and the decisions are
  `repaired`, not `escalate`.
- No other pre-splice finding touches this pair; the pair's page prerequisites
  are exactly `em-vacuum-waves-and-polarization` and `sr-light-and-doppler`
  (both direct in-run inspection targets), and every added item dependency is
  homed in their declared closure (checked by `validate-plan`'s reading-order
  listing, §3).

## 2. Item audits and authoring

Audit, authoring and checking were carried out one item at a time in the
dispatch's order shown above. One cross-cutting repair was made in the final
continuation pass: the four carriers first written with the statement as a
pre-heading preamble — `pthm-em-observer-field-and-doppler`,
`pthm-em-relativistic-lorentz-force`, `pthm-em-covariant-stress-energy`
(theorems) and `ex-em-constant-field-trajectory` (example) — were repaired to
the `SCHEMA.md` section form by inserting `## Statement` (resp. `## Example`;
its `## Verification` heading already existed) before the statement text. Only
the heading line and its blank separator were added; no prose, claim,
hypothesis or tag changed. This is required by the exact-quote proof contracts
(downstream consumers must be able to quote these statements from a named
source section) and matches every other physics-theorem item in the library.

### 2.1 `pthm-em-tensor-maxwell-equivalence` (level 14)

Authored; Statement and Facts match the batch-37 manifest claim and source
locators. Checked: `precheck.mts` pass (after adopting the canonical step
layering: 1.1-1.6, 2.1-2.3, 3.1, 4.1, 5.1 — the transformation-data step moved
into layer 1 and the equivalence/form-invariance steps renumbered),
`rendercheck.mjs` clean, `depcheck.mjs --items-file` clean (0 errors,
0 warnings for this item).

### 2.2 `pthm-em-lorentz-field-transform` (level 15)

Authored (32.4 kB). The manifest Statement, `physical_scope` and the three
source locators are preserved; the printed claim covers (a) the axis-boost
components, (a′) the general-direction boost, (b) the two invariants, (c) the
rotation/general-factorization laws, (d) form invariance of the Maxwell branch,
(e) scope. Proof route actually used:

- 1.1 axis components from `Λ_β` and the dictionary (matches research C3);
- 1.2 rotation case by the cofactor identity
  `ε_{qij}A^i_kA^j_l = A^q_m ε_{mkl}`, derived from the permutation determinant,
  column alternation and `AᵀA = I₃ ⇒ Aᵀ = A⁻¹` (invertibility from `det A = 1`);
- 1.3 explicit conjugation `B(v/c) = R̂ᵀ Λ_β R̂` with the orthonormal basis
  `(u, â, u×â)`, `det = 1` via the Gram-determinant norm identity;
- 1.4 regularity of the primed components on the open overlap;
- 2.1 general-direction formula, (a′), including `v = 0`;
- 2.2 invariant displays by substitution; — 3.1 general `Λ = B(-β)R̂`;
- 3.2 invariance of both scalar combinations under every proper orthochronous
  change (physical_scope explicitly promises the general-change form);
- 4.1 form invariance of the smooth Maxwell branch via
  `pthm-em-tensor-maxwell-equivalence` (a), (b);
- 5.1 scope summary with ∎.

Dependency reconciliation: five published mathematical suppliers are genuinely
used by the completed argument and were added to the carrier and to the
batch-37 manifest with role `mathematical-premise`
(`lem-cross-product-is-bilinear-alternating-and-orthogonal`,
`thm-cross-product-norm-is-the-two-vector-gram-determinant`,
`thm-determinant-of-transpose`,
`thm-real-square-matrix-invertible-iff-determinant-nonzero`,
`def-determinant-of-a-square-matrix`); the level stays 15. The scaffold
supplier `thm-sr-proper-orthochronous-lorentz-algebra` (batch 2) has since
landed; its authored clauses were re-read: (i) `B(β)` is proper
orthochronous with inverse `B(-β)` (used in step 3.1 for the intermediate
charts and in step 3.2's rotation stage) and (iii) the unique factorization
`L = B(-β)R̂` with `β = u_vec/u⁰` (used verbatim in step 3.1), so the supplier
obligation for this item is reconciled. Checks: `precheck.mts` pass natively
(canonical layering 1.1–1.4, 2.1–2.2, 3.1–3.2, 4.1, 5.1), `rendercheck.mjs`
clean, `depcheck.mjs --items-file` clean.

### 2.3 `pthm-em-observer-field-and-doppler` (level 16)

Authored (28.0 kB). Manifest Statement, `physical_scope` and the three source
locators preserved; the `## Statement` heading was inserted in the final pass
(§2 preamble). Proof route actually used: 1.1 laboratory components of
`e_a = F_ab n^b`, `b_a = (*F)_ab n^b` including the dual component formulas
`(*F)_{0i}=B_i`, `(*F)_{ij}=ε_ijk E_k/c` (derived from the Hodge definition and
the ε conventions); 1.2 annihilation `e(n)=b(n)=0`, raising into `n^⊥`,
reconstruction `F = n^♭∧e − *(n^♭∧b)`; 1.3 explicit boost `B(w/c)` with
`B(w/c)n=e_0`, rest-frame dictionary `e'_i=E'_i/c`, `b'_i=−B'_i` and the
boosted components of `pthm-em-lorentz-field-transform` (a′) with `v=w`,
identified with the readings only under the adopted ideal-detector assumption
`[A1]`; 1.4 the plane-wave phase covector `k_a=(−ω/c,(ω/c)s)` shown nonzero,
future, null; 2.1 exact frequency reading `ω_n=γ_w(1−w·s/c)ω>0`; 2.2
aberration/longitudinal/transverse clauses applied from
`pthm-sr-null-wave-doppler-and-aberration` (i)–(v) with hypotheses checked
(including the β=0 no-aberration disposition); 3.1 successive changes by the
covector law and ratio multiplication; 4.1 scope/status summary with ∎.

Dependency reconciliation: four genuinely used suppliers were added to the
carrier and manifest — `thm-sr-proper-orthochronous-lorentz-algebra`
(mathematical-premise; clause (i) re-read and used in step 1.3 to justify the
admissibility of `B(w/c)`), `post-sr-inertial-covariance` and
`post-em-vacuum-maxwell` (physical-assumption),
`def-directional-and-partial-derivatives` (mathematical-premise); level stays
16. Checks: `precheck.mts` pass natively (canonical layering 1.1–1.4, 2.1–2.2,
3.1, 4.1 — an initial citation of step 1.1 from step 1.2 was removed by folding
the clarifying sentence into step 1.1), `rendercheck.mjs` clean,
`depcheck.mjs --items-file` clean.

### 2.4 `ex-em-boosted-fields-example` (level 16, B page)

Authored (9.3 kB) in the page's example form (`## Example`,
`## Facts & Assumptions`, `## Verification`, four numbered steps). Manifest
Statement, `physical_scope` and the three source locators preserved. The
verification checks the source-free smooth branch for the constant field
(step 1.1), substitutes into the axis-boost components of
`pthm-em-lorentz-field-transform` (a) to obtain `E' = γE₀e₂`,
`B' = −γβE₀e₃/c` (step 1.2), and evaluates both invariants using
`γ²(1−β²) = 1` and orthonormality, with the `β = 0` reduction (step 2.1) and a
closing scope step (3.1). Two genuinely used suppliers added to carrier and
manifest: `def-divergence-and-curl-of-a-c1-vector-field`
(mathematical-premise) and `def-em-lab-geometry` (formulation-prerequisite);
level stays 16. Checks: `precheck.mts` pass natively (canonical layering
1.1–1.2, 2.1, 3.1), `rendercheck.mjs` clean, `depcheck.mjs --items-file`
clean.

### 2.5 `pthm-em-relativistic-lorentz-force` (level 18)

Authored (20.8 kB). Manifest Statement, `physical_scope`, three source locators
preserved; the `## Statement` heading was inserted in the final pass (§2
preamble). Proof route: 1.1 spatial contraction
`m dU^i/dτ = qΦ(U)^i = qγ(E+v×B)_i` giving `dp/dt = q(E+v×B)` via
`p=mγv` and `d/dτ = γ d/dt`; 1.2 temporal giving
`d(γmc²)/dt = qE·v`; 1.3 norm conservation from
`lem-em-antisymmetric-tensor-contraction` (varying-field clause, no derivative
of `F`) and the future-branch sign argument (continuity + IVT); 1.4 the speed
function `f(z)=(1−z)^{−1/2}` with `f'`, `f''`; 2.1 first-order bound by the mean
value theorem; 2.2 second-order bound by Cauchy's mean value theorem with the
exact constant `3/8`; 3.1 bounds for `p` and `γmc²`; 4.1 scope and status with
∎. One added dep: `cor-differentiable-implies-continuous`
(mathematical-premise); level stays 18. Checks: `precheck.mts` pass natively
(canonical layering 1.1–1.4, 2.1–2.2, 3.1, 4.1), `rendercheck.mjs` clean,
`depcheck.mjs --items-file` clean.

### 2.6 `pthm-em-covariant-stress-energy` (level 19)

Authored (23.7 kB). Manifest Statement, `physical_scope` and the three source
locators preserved; the `## Statement` heading was inserted in the final pass
(§2 preamble). Proof route: 1.1 symmetry
(`F^{μα}F^ν{}_α = F^{να}F^μ{}_α` by relabelling and η symmetry), trace
(`η_{μν}T^{μν} = μ₀⁻¹(F² − ¼·4F²) = 0`), regularity (components polynomial in
`F`, `∂_μT^{μν}` continuous by the product rule with `(TM1)`); 1.2 the
`T'^{μν} = Λ^μ_αΛ^ν_βT^{αβ}` law from the component law and `η`-invariance;
1.3 the components `T^{00}=u`, `T^{0i}=S_i/c=cg_i`, `T^{ij}=−σ_ij` with the
ε-contraction `ε_ikmε_jkn = δ_ijδ_mn − δ_inδ_mj`; 1.4 the divergence
`∂_μT^{μν} = −f^ν` by the product rule, `(TM1)` and the cyclic-identity
cancellation `F^{μα}∂_μF^ν{}_α = ¼∂^ν(F²)` (checked sign: contracting `(TM2)`
gives `2C_ν = −½∂_ν(F²)`); 2.1 the component identities matching
`pthm-em-poynting-balance` (a) and `pthm-em-momentum-balance` (a) and the
`f=(J·E/c, ρE+J×B)` algebra; 2.2 conditional total conservation with the
adopted `C¹` symmetric `T_m`, the finite-box/slice identities of
`thm-sr-stress-balance-and-finite-flux` (side-flux hypothesis retained) and
`∂_λM^{λμν}=0` by symmetry; 3.1 scope summary with ∎. All 21 manifest deps are
used; no additions were needed. Checks: `precheck.mts` pass natively (canonical
layering 1.1–1.4, 2.1–2.2, 3.1), `rendercheck.mjs` clean,
`depcheck.mjs --items-file` clean. The three batch-32 suppliers
(`def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance`,
`pthm-em-momentum-balance`) have landed; their authored clauses were re-read:
`def-em-vacuum-stress-momentum` (a)–(c) define `g`, the symmetric stress `σ`
with exactly the components used in step 1.3 and `Π = −σ`, and clause (a) of
each balance is the identity `∂_t u + div S = −J·E` resp.
`∂_t g − div σ = −(ρE+J×B)` matching step 2.1, so the supplier obligation for
this item is reconciled.

### 2.7 `ex-em-constant-field-trajectory` (level 19, B page)

Authored (16.0 kB) in the page's example form (`## Example`,
`## Facts & Assumptions`, `## Verification`, four numbered steps); the
`## Example` heading was inserted in the final pass (§2 preamble), the
`## Verification` heading already existed. Manifest Statement, `physical_scope`
and the three source locators preserved. Proof route actually used: 1.1 the
prescribed constant field `E = E_0e_1`, `B = 0` is source-free on
`R³ × R` by the component formulas of `[F2]`; 1.2 for `h ≠ 0` the curve
`r(t) = r_0 + (c/h)(√(1+h²t²) − 1)e_1` is `C^∞` with
`v(t) = (cht/√(1+h²t²))e_1`, `|v(t)| < c` at every finite `t` and
`|v(t)| → c` as `|t| → ∞` (chain rule and `h²t² < 1+h²t²`); 1.3 the `h = 0`
branch (`q = 0`) gives the constant curve with both identities holding
trivially and the `1/h` formulas unused; 2.1 the force and power identities
`dp/dt = qE_0e_1 = q(E+v×B)`, `d(γmc²)/dt = qE·v` with `p(t) = qE_0t e_1`,
checked also componentwise for the covariant equation `m dU/dτ = qΦ(U)`;
2.2 the curve is a future timelike worldline at every `t` (and at `h = 0`);
2.3 the unscoped Newtonian comparison `v_N = hct e_1` satisfies
`v = v_N/√(1+h²t²)`, the two agree only at `t = 0`, and
`|v_N(t)| = √(1+h²t²)|v(t)| = c|ht|` exceeds `c` exactly when `|ht| > 1`;
3.1 the special-model error bounds `|v−v_N| ≤ (c/2)|ht|³` and
`|r−r_N| ≤ (c/(8|h|))|ht|⁴` uniformly on `|ht| ≤ δ`; 4.1 closing scope
(no self-field, radiation reaction, measurement or general stability
consequence). Dependency reconciliation: three genuinely used suppliers were
added to the carrier and the batch-37 manifest — `def-em-electromagnetic-tensor`
(formulation-prerequisite), `lem-em-antisymmetric-tensor-contraction`
(mathematical-premise) and `def-divergence-and-curl-of-a-c1-vector-field`
(mathematical-premise); level stays 19. Checks: `precheck.mts` pass natively
(canonical layering 1.1–1.3, 2.1–2.3, 3.1, 4.1), `rendercheck.mjs` clean,
`depcheck.mjs --items-file` clean.

## 3. Checks actually run

All commands were run from the physics workspace on the final files, after the
last content edit (the §2 heading repairs), unless noted. "Explicit paths" are
the seven item files listed in order in the header.

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <7 item paths>`
  → `7 checked, 0 failing — all clean` (native passes; no `REPAIR` proposal).
- `node tools/physics-support/rendercheck.mjs <7 item paths + library/classical-electromagnetism/em-lorentz-covariant-formulation.md + library/classical-electromagnetism/em-lorentz-covariant-formulation-examples.md>`
  → `OK — 9 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`
- `node tools/physics-support/depcheck.mjs --items-file /tmp/my-items.json` (the seven IDs)
  → `OK — selected item/page checks and their prerequisite cycle checks passed`; page depth 52 (`em-lorentz-covariant-formulation`, 5 items) and 53 (`-examples`, 2 items).
- `node tools/physics-support/proof-layout.mjs <7 item paths>` (single batched command)
  → `proof-layout: 7 items, 57 steps, 0 defects`.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-37.proof-contracts.json --strict`
  → `proof-contract: 0 error(s), 0 warning(s), 7/7 item(s) checked`. The contract file records 131
  fact-citation contracts with exact source-section quotes and step uses, 57 per-step
  derivations (one per numbered step), and the standard eight-case boundary worksheet for each
  of the seven items; `boundaries` evidence for the empty/zero/one/degenerate/endpoints/
  nonempty-choice/iff cases names real steps or records a specific not-applicable reason.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  → all seven declared levels equal the run-computed levels (14, 15, 16, 16, 18, 19, 19; total
  473 items). The run-wide check currently prints exactly one error, in a sibling batch:
  `lem-em-outgoing-source-helmholtz-and-diffraction: dependency_level 1 differs from computed 0`
  (recorded in §5; not this pair).
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-37.pages.json`
  → `7 item(s), 0 normalized, 0 error(s)`.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-37.pages.json`
  → `7 scoped item(s), 0 error(s), 0 warning(s)`. (The `--manifest-only` shape, which asks the
  pre-authoring question "may these ids be minted here?", now reports the expected seven
  `batch-item-already-exists` rows because the files exist; it is not the post-authoring gate.)
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-37.coverage.json`
  → `1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08`
  → run-level `FAIL` from 44 pre-existing errors on sibling pages (43 `undeclared-prereq`, 1
  `requires-resolve`); no error or warning names this pair's two pages, which appear only in the
  reading-order listing with their declared requires `sr-light-and-doppler` and
  `em-vacuum-waves-and-polarization`. Reported for Step 4 in §5.
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final`
  → the seven owned items are accepted (0 open rows for them); the run is still open on sibling
  pairs (the accepted count was 248-249 of 473 across the last checks and moves while sibling
  pairs land), as expected while other Step 3b dispatches run.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  → `refreshed and deduplicated`, after appending six review rows to
  `research/physics-em-sr-40-2026-10-08-batch-37.cross-batch-dependencies.json` for the
  cross-batch edges first declared during authoring
  (`pthm-em-observer-field-and-doppler` → `thm-sr-proper-orthochronous-lorentz-algebra`,
  `post-sr-inertial-covariance`, `post-em-vacuum-maxwell`; `ex-em-boosted-fields-example` →
  `def-em-lab-geometry`; `ex-em-constant-field-trajectory` → `def-em-electromagnetic-tensor`,
  `lem-em-antisymmetric-tensor-contraction`). The batch-37 input now carries 75 rows covering
  all 75 declared batch-37-consumer edges (0 without a review row, 0 orphaned reviews); the six
  new rows are `verified` with the required-content/use/hypotheses evidence and the note that
  independent Steps 5–8 review remains owed, while the 69 pre-existing `open` rows of the
  reconciliation packet are preserved unchanged. The unified
  `research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json` was refreshed by the
  tool, not by hand.
- Artifacts written by this dispatch: the seven `items/*.md` carriers; the two
  `library/classical-electromagnetism/…` pages; the additive dependency reconciliation in
  `research/physics-em-sr-40-2026-10-08-batch-37.pages.json` (sibling rows preserved);
  `research/physics-em-sr-40-2026-10-08-batch-37.proof-contracts.json`; and the seven
  `research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json` decision receipts; and the
  batch-37 cross-batch review input with the six added rows.

## 4. Decisions recorded

All seven items were recorded with
`node tools/physics-support/step3-decisions.mjs record-item --run physics-em-sr-40-2026-10-08
--item <id> --decision repaired --confidence 1 --reason <evidence> --dependencies <frontmatter deps JSON>`,
each only after the item was completely authored and the checks above passed; no decision is
`escalate` and no `--owner` flag was used.

| item | decision | confidence | examined deps | receipt sha256 (16) |
|---|---|---|---|---|
| `pthm-em-tensor-maxwell-equivalence` | repaired | 1 | 10 | `d48d5dfbac60b939` |
| `pthm-em-lorentz-field-transform` | repaired | 1 | 22 | `3d6ea605bad85f18` |
| `pthm-em-observer-field-and-doppler` | repaired | 1 | 20 | `a678c72e575eea31` |
| `ex-em-boosted-fields-example` | repaired | 1 | 10 | `2e9d5232d2e8b32c` |
| `pthm-em-relativistic-lorentz-force` | repaired | 1 | 29 | `d0cd6badea639e01` |
| `pthm-em-covariant-stress-energy` | repaired | 1 | 21 | `0e78bf1a56cc8d35` |
| `ex-em-constant-field-trajectory` | repaired | 1 | 19 | `e5c0c3f9aca4e897` |

The reasons state, per item, the completed claim coverage, the authoring repairs (canonical
step layering for 2.1; heading repairs for 2.3, 2.5, 2.6, 2.7), the supplier reconciliation
(2.2 against clauses (i)/(iii) of `thm-sr-proper-orthochronous-lorentz-algebra`; 2.6 against
the batch-32 definitions and balance clauses), and the checks actually run. The receipts sit at
`research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`.

## 5. Published concerns, escalations and open obligations

- **Supplier escalations from entry: closed.** `thm-sr-tensor-and-current-transformation`
  (used in tensor steps 1.6/2.2/2.3 and observer step 3.1), `pthm-em-plane-wave-maxwell`
  (observer step 1.4), `def-em-vacuum-energy-flux` (stress-energy step 1.3),
  `thm-sr-proper-orthochronous-lorentz-algebra` (lorentz-transform steps 3.1–3.2 and observer
  step 1.3), and `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance`,
  `pthm-em-momentum-balance` (stress-energy steps 1.3 and 2.1) have all landed; the consuming
  steps were re-read against the finished clauses and match (§2.2, §2.3, §2.6). No consuming
  step is left against an unauthored supplier, and no pair decision is escalated.
- **Published concerns carried from the Step 3a pair report** (recorded there, not
  re-adjudicated here): (i) the superseded design's fourth reading (Binney, *Classical Fields*
  §§1.1–1.6) was substituted by the three complete treatments actually read (Tong, Fitzpatrick,
  Beisert) — every planned item is independently backed by all three retained treatments, so
  this is an owner-level enrichment question, not a demonstrated gap; (ii) the Tong §5.2
  destination/magnetism remark is a coverage-record observation for the owner.
- **Sibling defect observed (outside this pair's ownership).**
  `lem-em-outgoing-source-helmholtz-and-diffraction` (batch 16, page
  `em-expanded-analysis-prerequisites`) declares `dependency_level: 1` while the run manifests
  compute 0 (all twelve of its manifest deps are homed outside the run), so
  `item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` prints exactly this one
  error and nothing else. Evidence: the item's frontmatter level and the tool output above;
  confidence: confirmed by the check. Repair strategy: recompute the level under the run's
  in-run closure and update item metadata and the manifest entry consistently (or register the
  intended in-run supplier that supplies the +1 edge). Left to that pair's author/owner.
- **Pre-splice plan mismatches for Step 4** (run-wide `validate-plan` exits `FAIL`, 44 errors,
  33 warnings; none on this pair): 43 `undeclared-prereq` rows on sibling pages
  (`em-elementary-mathematical-prerequisites`, `em-expanded-analysis-prerequisites`,
  `em-boundary-and-spectral-prerequisites`, `em-material-response`, …) where an item depends on
  an item outside the page's declared `requires` closure, plus one `requires-resolve`
  (`em-boundary-and-spectral-prerequisites` requires `rellich-kondrachov-and-sobolev-compactness`,
  which is not a declared page). Reported for Step 4/owner remediation; not editable in this
  scope. Both pages of this pair appear in the reading-order listing only, with their declared
  requires as planned.
- **Mode note.** The `content-policy.mjs --manifest-only` shape is the pre-authoring minting
  gate; after authoring it reports `batch-item-already-exists` for all seven owned IDs. The
  post-authoring content gate (without `--manifest-only`) is clean (§3); this is bookkeeping,
  not a defect.
- **Open obligations for this pair: none.** The items, both pages, the manifest update, the
  strict proof contracts and the seven decision receipts are all in place, and every check
  required for Step 3b handoff has been run. Downstream planned consumers of this pair (e.g.
  `em-action-and-variational-formulation`, `em-scattering-and-scalar-diffraction`) are outside
  this dispatch's scope; their consumption review belongs to their own Steps.
- **Cross-batch ledger state.** The batch-37 consumer input covers every declared edge (75/75),
  with the six authoring-added edges `verified` by the consumer author and the pre-existing
  reconciliation rows left `open` for the ordinary Steps 5–8 review;
  `frontier-dependency-ledger.mjs refresh` reports no orphaned reviews and no batch without an
  input for this run.
