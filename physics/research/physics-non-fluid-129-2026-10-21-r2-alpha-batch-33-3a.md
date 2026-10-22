# Batch 33 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-33`.

## Level 2 — def-gr-fx-bondi-expansion

Both `reader:33:1` and `refuter:33:1` are confirmed fatal instances of the same definition defect. In V=r−2m+V_(1)/r+O(r^−2), the r^−1 coefficient is V_(1). Replaced the contradictory naming sentence by m(u,x)=−1/2 lim_(r→∞)(V−r), preserving the displayed expansion and all other hypotheses. Repair confidence: 1. The pre/post snapshots are identical; the reader made no repairs. Checked the current pre-edit raw item hash against their common 39cbed68f09fb32b46c647c604d296047b44d26af44682f1e3270b5c18e8f94e binding. The routed observed hash is a carrier fingerprint, not that raw item hash.

Sources: Mädler–Winicour, https://arxiv.org/pdf/1609.01731, §3 Eqs. (38),(57); read local source `research/physics-non-fluid-129-2026-10-21-r2-batch-33-sources/raw/madler-winicour-bondi-sachs.txt`, lines 728–746 and 1008–1033, with online https://arxiv.org/html/1609.01731v3 as corroborating context. Definition suppliers read: `def-gr-fx-null-screen-geometry`, `def-gr-wave-screen-and-tt-projection`, `def-gr-curvature-tensor-and-derived-tensors`, `def-countable-choice`. Their exact null/screen, curvature-contraction and choice conventions match the definition. The formal-cylinder diagram has correctly ordered cuts and increasing-u arrow, and makes no global-completion claim.

Updated the authored manifest statement and live contract quotations; historical snapshots remain unchanged. Risk review is complete in the batch contract. Consumer search of items and library finds only batch-33 items and its A page; consumer checks continue in dependency order below. No outside repair is presently indicated.

Next: finish the level-3 coefficient and memory reviews, then level-4 consumers and focused checks. No claim of final gate success or engine stamping.

## Level 3 — lem-gr-fx-bondi-mass-coefficient

Read all seven proof steps and its complete direct suppliers. Contract derivations agree with the current proof. Recomputed the inverse and determinant trace, w_A=−(1/2)D_B C^B_A from the r^−2 radial constraint, and the supplementary coefficient −2m_dot−D_A w_dot^A−N_AB N^AB/4. In the K^a_b K^b_a sum only the angular block contributes at that order. Exact determinant traces cancel the beta/time and angular-trace terms before expansion; the trace-free P_AB is retained, and at most two metric derivatives occur. Vacuum gives the displayed mass-aspect equation. Mädler–Winicour §3 Eq. (42) uses half this item's news; Eq. (58) consequently has precisely the local coefficients after conversion. No defect or edit to this lemma; no decision owed for this untouched item. Its use of m is already the corrected constant coefficient of V. Risk review complete; no new choice or existence claim.

Next: finish the memory supplier and quantitative detector review.

## Level 3 — prop-gr-fx-memory-integral

`reader:33:2` and `refuter:33:2` are confirmed nonfatal instances of the same missing-unit declaration. Added that s_0, delta s, s_lambda and J_lambda carry length units, their first u derivatives are dimensionless and second derivatives have inverse-length units. Repair confidence: 1. This completes the existing convention without changing a formula, approximation or hypothesis. Manifest statement updated; no proof or judge record was materially rewritten.

Read all nine proof steps and the exact direct supplier statements: `thm-ftc-second-part`, `thm-gr-tt-plane-wave-curvature` (c), `thm-gr-jacobi-equation-and-geodesic-deviation` (b)–(d), `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` (a)–(c), plus full definitions `def-gr-flat-linearized-perturbation`, `def-gr-wave-screen-and-tt-projection` and the already read Bondi/choice definitions. These are actual current published mathematical statements; no claim of re-auditing their deeper chains is made. Smooth C makes FTC applicable. The curvature convention gives positive H''/2 in the screen Jacobi forcing; twice integration gives [Delta H−(u_2−u_1)H'(u_1)]s_0/2. Both endpoint news assumptions give the claimed velocity bound. The quantitative proof supplies its own compact-state continuation, bounded parallel transport, Jacobi realization and integral-equation remainder argument; the cited ODE result is used locally and then patched, never misquoted as global existence. Checked zero separation, nonzero interval length, endpoint terms, dimensional constants and fixed-family uniformity. No empirical input is used. The source memory discussion is contextual, not the supplier of the local quantitative estimate.

The changed Bondi m sentence has no role in this shear argument. The only direct memory consumer is `ex-gr-fx05-1`, to be checked below. Risk review complete.

## Level 4 — prop-gr-fx-bondi-mass-loss

Read all four proof steps, coefficient lemma and Bondi/choice suppliers. For each fixed u, X^A=D_B N^AB is smooth globally; integrate on polar caps removed, use periodicity and |X^theta|<=|X| to take the pole limits. Uniform continuity of dm/du on compact sphere slabs justifies differentiation under the integral. Positive round metric makes N_AB N^AB nonnegative, and continuity gives positive area for any nonzero value, proving the zero-derivative conclusion. Corrected m=-1/2 lim(V-r) is exactly the mass convention already used. The SI conversion contributes c^5/G_N, with no empirical premise or added choice. MW Eqs. (58),(60),(61) agree after news conversion. Untouched, unflagged carrier: no separate decision owed. Risk review complete.

## Level 4 — ex-gr-fx05-1

Read every Example, L1 construction and all six verification steps, and full direct supplier interfaces. At the equator T_theta theta=3/2, so T is nonzero; the flat-ended bump is smooth, has positive Z and normalized integral, including endpoint-zero news. The explicit m primitive satisfies the imposed coefficient constraint and corrected V=r-2m mass definition. The q-self-adjoint exponential has positive eigenvalues and unit determinant, yielding a Lorentzian smooth end with differentiated remainder bounds; no Ricci-flatness is inferred. Divergence integrates to zero on the sphere and both squared integrals are positive for a!=0, giving strict decrease under the imposed constraint. Detector estimates inherit the memory theorem length convention and fixed-family amplitude constants; zero s0 and both endpoints are handled. The pulse diagram is explicitly schematic, with compact-support pulse and primitive from 0 to 1. No repair of this sound consumer is necessary. Untouched, unflagged carrier: no separate decision owed. Risk review complete.

## Level 4 — ex-gr-fx05-2

Read all three verification steps and all direct suppliers, including complete finite BMS boundary action. The flat seed is Minkowski after t=u+r, hence m=0 under the corrected limit definition. The trace-free Hessian of the explicit l=2 polynomial is nonzero at the equator. With I=R the active map and inverse are globally defined, its inhomogeneous shear is -2aT, and news stays zero. The formal choice m=0 satisfies the stipulated constraint and has zero Bondi mass and shear difference. No full transformed vacuum metric is asserted; no global completion, empirical claim or extra choice is inferred. MW §4 Eqs. (78)-(80) and Strominger §6 give contextual boundary/shear conventions; active signs are fixed locally. Untouched, unflagged carrier: no separate decision owed. Risk review complete.

## Consumer and source closure

Direct dependency/reference consumers of the changed Bondi Definition are `def-gr-fx-bms-supertranslation`, `lem-gr-fx-bondi-mass-coefficient`, `prop-gr-fx-memory-integral`, `prop-gr-fx-bondi-mass-loss`, `ex-gr-fx05-1`, `ex-gr-fx05-2`, and page `gr-fx05-bondi-news-and-memory`. All are owned by batch 33. The BMS definition uses only shear, news and the fixed chart; its finite action on D_f has inverse Phi_(-f), its Hessian is trace-free, and differentiating its shear action yields fN−2DDf+qD²f. The coefficient/mass-loss consumers use the corrected constant coefficient already. The pulse metric has exactly V=r−2m; the static example has V=r. Both pages are frontmatter-only and their inventories agree with the manifest. No consumer needs an item edit or another propagation hop. The only memory consumer `ex-gr-fx05-1` uses the same initial separation and proper-length derivative conventions; the newly explicit units agree with its inherited supplier. No outside consumer, defective published supplier, or withdrawal was found. Published suppliers and imports were kept read-only.

Additional source passages read: Mädler–Winicour local text §3 Eqs. (60)–(61), §4 Eqs. (78)–(80); Strominger local text §6 Eqs. (6.0.1)–(6.0.3), lines 6948–6980, for the early/late no-news displacement discussion. These sources contextualize the formulas; the complete current local proofs carry the coefficient and quantitative estimates. Diagrams in scope are the formal cylinder and pulse/primitive schematic; both agree with the stated conventions and neither carries a proof step. No additional diagram is required for these component calculations.

The owned-consumer frontier records are maintained in `research/physics-non-fluid-129-2026-10-21-r2-batch-33.cross-batch-dependencies.json`, following `briefs/tasks/frontier-dependency-ledger.md`. No off-batch proof acceptance is claimed.

Next: append the two closed defect records, write exactly four decisions, and run focused local layout, precheck, rendering and required-risk checks. Engine hashes and gate battery remain pending owner/engine work.

## Decisions and local checks

Exactly four routed decisions were written: reader:33:1 and refuter:33:1 confirmed fatal, reader:33:2 and refuter:33:2 confirmed nonfatal. Each reader/refuter pair identifies one defect using the immutable scope's identical observed carrier fingerprints, and shares exactly one fixed ledger row with an explicit same-defect explanation. Defect IDs: `physics-non-fluid-129-2026-10-21-r2-3a-batch-33-mass-aspect` and `physics-non-fluid-129-2026-10-21-r2-3a-batch-33-separation-units`. No touched/page obligations were owed. No historical bytes are missing: reversing exactly the two authored corrections reproduces the pre/post raw item hashes, and all five untouched items also match their pre/post snapshots. No reader changes were accepted, amended or reverted because the reader made none.

Actual local checks after final item edits:

- `node tools/physics-support/proof-layout.mjs items/def-gr-fx-bondi-expansion.md items/prop-gr-fx-memory-integral.md`: 2 items, 9 steps, 0 defects.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-gr-fx-bondi-expansion.md items/prop-gr-fx-memory-integral.md`: 1 proof checked, 0 failing; definition has no proof to precheck.
- `node tools/physics-support/rendercheck.mjs items/def-gr-fx-bondi-expansion.md items/prop-gr-fx-memory-integral.md`: 2 files clean under YAML and real KaTeX parsing. This check does not claim a compiled TikZ-image inspection; the unchanged diagram was reviewed from its drawing instructions and explanatory text.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-33.proof-contracts.json` ran before risk records; after all six complete reviews the same command with `--require-reviewed` reported 0 errors across 7 routed items.

No mathematical blocker or outside consumer repair remains. Engine decision stamping, certification and the full gate battery were not run and are not claimed.

Final local artifact consistency check passed: exactly four owed obligations, two unique fixed ledger records linked to all four decisions, six complete risk reviews, and both changed manifest statements equal the current source sections. The append tool accepted the two ledger rows, and `node tools/physics-support/defect-ledger.mjs render` refreshed the generated ledger view. This completes the local dispatch; engine stamping and gates remain the next action.
