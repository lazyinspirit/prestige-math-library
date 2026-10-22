# Batch 8 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-8`.
Scope: the five batch-8 items, reviewed in the generated dependency order. Only `refuter:8:1` owes a decision; reader findings and touched/page obligations are empty. Pre/post reader item and page hashes coincide; the reader made no repair.

## Completed item reviews

### Level 0 — post-emx-abraham-lorentz-model

Reviewed the full Postulate and the operative interfaces of `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources` (charge parameter), `post-em-lorentz-coupling`, and `rem-em-radiation-reaction-limits`. The adopted equation has C3 trajectory, prescribed continuous force on R, positive mass/time constant, and dimensionally consistent force terms. Physical interpretation requires the explicitly defined compact-interval speed/force tolerances. No Maxwell self-force derivation or empirical result is claimed. HIGH risk review completed in the contract; no source change or routed decision required.

Sources independently opened: Rohrlich, https://arxiv.org/pdf/0804.4614, §§1–2, PDF pp.2–6 (Gaussian-unit coefficient and first-order reduction); Vanderlinde, https://eva.fcien.udelar.edu.uy/pluginfile.php/55543/mod_page/content/7/Classical%20Electromagnetic%20Theory%20(Fundamental%20Theories%20of%20Physics)%20-%20Jack%20Vanderlinde%20(2004).pdf, §12.3 opening, printed p.335, and §12.4, printed pp.338–339, equations (12–38)–(12–41). The latter is the alternate full-text location used by the reader; web screenshot retrieval failed with cache misses, so review uses extracted text, not claimed image inspection. No new full-book or full-transitive-supplier audit is claimed.

### Level 1 — pthm-emx-runaway-preacceleration

Checked all five proof steps against A1/F1–F5 and every directly cited mathematical supplier interface. The tail estimate gives absolute convergence and boundedness; the oriented increment quotient handles both signs of h and yields a C1 solution. Multiplication by exp(-t/tau) and the mean value theorem classify all homogeneous additions in both directions; a nonzero coordinate proves future unboundedness. The bump construction has the stated plateau and strictly positive future integral for each negative time. Zero and constant force, C=0 and C!=0, arbitrary finite t0/T and the infinity endpoint are sound. Primitive evaluation is an immediate consequence of the quoted FTC plus MVT, not an extra unproved premise. CRITICAL risk review completed; no carrier repair or routed decision required.

### Level 2 — pthm-emx-reduction-order-error

`refuter:8:1`: **confirmed_nonfatal**, repaired with confidence 1. In Proof 1.2 replace the dimensionally invalid `(1+R)` by `(1+R/\tau)`. At fixed positive tau, F3 proves decay of this dimensionless factor; multiplying the linear bound on f' by exp(-R/tau) kills the endpoint. The exact residual is -tau² f'', and the double product-rule integration leaves (tau/m) times the future kernel of f''. Cauchy–Schwarz with w=z/|z| proves the Euclidean bound tau² M2/m; z=0 is separate. The second finite identity establishes convergence of the f' kernel before substitution, so no bounded-f' assumption or unjustified differentiation of an improper integral is needed. Zero force/constant force, M2=0, all real t and positive m/tau checked. The Statement, physical scope, dependencies and manifest are unchanged; no consumer interface repair is triggered. Contract derivation 1.2 and its risk/worksheet bookkeeping were synchronized; provenance remains ai-altered and no judge stamp exists to invalidate.

The sole decision is in the task-named decisions JSON; its closed ledger row is `physics-non-fluid-129-2026-10-21-r2-3a-batch-8-reduction-order-dimensions`. The raw carrier before repair matches both immutable reader hash files (70000c09…fbaeb); the scope's observed fingerprint is a composite carrier fingerprint, not a raw file hash. Historical reader/refuter artifacts are preserved.

### Level 2 — ex-emx-free-runaway

Both Verification steps and all five actual supplier interfaces checked. Differentiating the trajectory gives v0+C tau(exp((t-t0)/tau)-1), then a_C, and a third continuous derivative. At t0 the added position/velocity terms vanish for every C; C=0 and C!=0 yield the claimed nonuniqueness from position/velocity alone. The acceleration ODE cancels exactly. CRITICAL risk review completed; no repair or routed decision required.

### Level 3 — ex-emx-force-frequency-regime

All three Verification steps and all eight supplier interfaces checked. The displayed A,B coefficients satisfy A-xB=u/m and B+xA=v/m; 1+x²>0 ensures the denominator is nonzero. Harmonic f is bounded C2 with bounded second derivative. Subtraction yields the stated negative x²/(1+ix) factor; expanding the six real squared coordinates verifies complex scalar norm scaling. Squaring nonnegative sides is reversible; the quadratic has exactly one positive root, giving the claimed tolerance iff. Static omega=0 uses the explicitly canonical real phasor, negative omega is included, and f0=0 is excluded precisely from the ratio. Equality at threshold is allowed and epsilon endpoints are excluded. HIGH risk review completed; no carrier repair or routed decision required.

## Dependency, page and diagram disposition

The two batch pages retain their exact three-item/two-example inventories. The external batch-7 multipole page remains formulation context only: no batch-7 theorem is a proof premise in these five items. Its inventory and six prerequisites were inspected; this does not assert proof acceptance of its members. The single cross-batch record remains a page-interface check with its existing limitation. No Statement, Definition, physical scope or empirical qualification changed, so no downstream interface repair is required. Stable IDs and all proposed content remain present; no withdrawal is proposed. No TikZ/tikzcd diagram occurs in either scoped page or any of the five items, and these ODE calculations require no added diagram. No defective published supplier was found within the interfaces reviewed; no published/imported item was edited.

## Coverage and checks

Read all five current carriers in dependency order and all their directly cited prerequisite Statement/Definition interfaces. Existing contract supplier excerpts/citations and reader/refuter reports were checked as evidence, not acceptance. Mathematical supplier full transitive proofs and published physical supplier full audits are outside the claimed review coverage. The only authored item change is the dimensionless endpoint factor, with synchronized contract derivation and all five Alpha risk reviews. The sole closed ledger row was appended through the serialized native append tool, which refreshed the generated view. No judging, decision stamping, engine transition or full gate battery was run.

Completed checks (all exit 0):

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-emx-reduction-order-error.md`: 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/pthm-emx-reduction-order-error.md`: 1 file, YAML/math checks pass.
- `node tools/physics-support/proof-layout.mjs items/pthm-emx-reduction-order-error.md`: 1 item, 4 steps, 0 defects; run once after the final item edit.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-8.proof-contracts.json`, then the same command with `--require-reviewed`: both 0 errors, all five risks covered by complete Alpha reviews.
- Native ledger append: exactly one fixed nonfatal accuracy row appended, generated view refreshed.
- Focused bookkeeping assertions: exactly the sole owed obligation is decided; each of the four unedited carrier raw hashes matches both reader snapshots; all five risks identify this Alpha review; exactly one fixed ledger row matches the decision. Frontier dependency ledger updated for these owned consumers.

No scientific blocker, outside-scope repair request or unresolved escalation remains. The engine owns current decision hashes and subsequent gates; this report grants no judge or publication acceptance.
