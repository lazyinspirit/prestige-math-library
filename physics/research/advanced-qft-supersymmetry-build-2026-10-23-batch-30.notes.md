# Batch 30 authoring notes — N=1 superspace and actions

## Owner normalization repair — 2026-10-23

The represented matrix curvature C_R=-barD²(e^-2gV_R D e^2gV_R)/4
is now distinguished explicitly from the abstract Lie curvature W_conn.
For t_a=iT_a, rho_R*(W_conn)=C_R/(2i); hence the chiral action
κ_C(W_conn²)/(4g²)=Tr2(C²)/(8g²), with H.c. once.
This preserves the adopted component Yang–Mills coefficient and adds no
quantum-rescaling or measure claim. The action/invariance/matter consumers
were reviewed; necessary phase-order normalization and exact contract quotes
were synchronized. All old native rows are archived and unchanged; root must
recertify current source inputs. Historical native authoring notes follow.


## Scope and plan comparison

- Assigned pair: `qftx-susy-n1-superspace-and-actions` and its examples leaf, order 986, in `advanced-qft-and-supersymmetry`.
- The complete design at `research/plan-advanced-qft-and-supersymmetry-track.md` §“N=1 Superspace and Wess–Zumino/Gauge-Matter Actions” matches the current `research/plan-spec.json` rows: title, category, physics classification, pair identity, order, and required pages `qftx-susy-algebra-and-multiplets` and `qftx-nonabelian-yang-mills-model` agree. The plan’s empty item arrays are placeholders; the four future IDs and contracts are in `research/advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json`.
- The page design requires the supersymmetry page from batch 29 and the pure Yang–Mills page from batch 19. The recorded and recomputed run graph assigns batch 30 level 3 with prerequisites `[1, 2, 19, 29]`: its direct item edges also reach batches 1 and 2. This is scheduling evidence; each authored item level is computed from its actual in-run `deps`.
- Contract/design completeness additions: the proposed postulate rows omitted the explicit chiral-superfield formulation edge; the gauge-matter candidate also named a vector multiplet without a local definition or direct non-Abelian interface. I added those exact formulation dependencies and a local vector-superfield definition. The design calls for local off-shell invariance of the adopted actions, while the four candidate IDs listed only the Wess–Zumino invariance theorem; I added a conditional superspace proof for the gauge-matter action. The Kähler patch also lacked an exact local target-data definition, so I added the Kähler coordinate-patch item and made the Wess–Zumino postulate depend on it. These additions preserve the specified actions and conventions; the canonical plan and other pairs remain untouched.
- Page presentation follows the owner direction: both A/B files will contain YAML frontmatter only, with empty Markdown bodies.

## Supplier inspection and current readiness

- `items/def-qftx-n1-chiral-superfield.md` and its well-definedness proof `items/lem-qftx-n1-chiral-superspace-identities.md` were read in full. The definition uses smooth coefficients on flat 4D superspace, the fixed four-generator Grassmann algebra, mostly-plus metric, fixed Pauli matrices, the nilpotent chiral coordinate shift, and unique scalar/Weyl/auxiliary components. The lemma proves the covariant-derivative algebra, chiral-coordinate kernel, and preservation of chirality under the defined supercharges. Current `loadStep1Record`/`step1Decision` rows for both are closed and `ready`.
- `items/def-qftx-superspace-grassmann-algebra.md` and `items/lem-qftx-grassmann-coefficient-calculus.md` were read in full. They fix the ordered Grassmann generators, left/right derivatives, conjugation, and coefficient-extraction measures; the lemma proves associativity, derivation rules, and that Berezin total derivatives integrate to zero. Both current readiness rows are closed and `ready`.
- `items/def-qftx-super-poincare-algebra-4d.md` and `items/lem-qftx-super-poincare-graded-jacobi.md` were inspected. The applicable bridge is `eta=diag(-1,1,1,1)`, `sigma^0=I`, `bar sigma^j=-sigma^j`, and `sigma^mu bar sigma^nu + sigma^nu bar sigma^mu = -2 eta^{mu nu} I`; the current readiness rows are closed and `ready`.
- `items/def-qftx-nonabelian-gauge-data.md` was inspected. It fixes a compact noncommutative group, right principal bundle, finite-dimensional unitary representations, associated bundles, and bundle sectors, with its stated `AC_omega` inheritance. Its current readiness row is closed and `ready`.
- `items/post-qftx-nonabelian-yang-mills-model.md` and the current gauge-invariance and Euler–Lagrange proofs on its A page were inspected. The actual interface is a classical pure `SU(2)` model on oriented/time-oriented Minkowski space, `eta=(-+++)`, one selected smooth right-principal-bundle sector, no matter, `kappa(X,Y)=-2 Tr_2(XY)`, positive dimensionless `g_YM`, natural units, and the local Lorentzian action `-kappa(F wedge *F)/(2 g_YM^2)`. It makes no quantum, continuum, or empirical claim. Fresh `loadStep1Record`/`step1Decision` checks now show all four current page item rows closed and `ready`; the planned page and direct item edges are verified in the cross-batch record.
- The current `qftx-susy-algebra-and-multiplets` page contains its BPS state definition and N=2 saturation theorem. Their full current statements and proof were inspected; fresh `loadStep1Record`/`step1Decision` checks show both rows closed and `ready`. The exact N=1 algebra/superspace calculations used here are supplied directly by the ready mathematical items on `aqft-susy-math-foundations`; the required page edge is current and recorded verified, without treating the unrelated N=2 BPS result as a proof input.
- The new `def-qftx-n1-kahler-target-data` uses the published complex-number quotient definition and `thm-complex-numbers-form-a-field` for the field and unique real-coordinate representation. The theorem's current statement and complete proof were read: its field hypotheses specialize to the real field and the monic irreducible polynomial $x^2+1$; its quotient-remainder steps yield the unique $a+bi$ coordinates used here. The carrier defines conjugation locally from those coordinates, so no modulus or square-root prerequisite is imported. These math originals are read-only published items; their lack of run-local Step 1 rows is not treated as a missing proof.

## Sources read for this A page

- Stephen P. Martin, *A Supersymmetry Primer*, arXiv:hep-ph/9709356v7, <https://arxiv.org/pdf/hep-ph/9709356v7>. The 160-page PDF was retrieved; relevant reading: §§3.1–3.2 (off-shell chiral multiplets and interactions), §§4.1–4.2 (Berezin integration and superspace translations), §4.5 (real vector superfields/Wess–Zumino gauge), §4.7 (chiral actions), and §§4.8–4.9 (Abelian and non-Abelian gauge-matter actions), printed pp. 18–48. The component normalization is translated to the workspace's explicit `(-+++)` and `SU(2)` connection conventions rather than imported silently.
- Adel Bilal, *Introduction to Supersymmetry*, arXiv:hep-th/0101055v1, <https://arxiv.org/pdf/hep-th/0101055>. The 83-page lecture notes were retrieved; relevant reading: §4.3 (superspace variation as odd-coordinate total derivatives plus a spacetime divergence), §4.4 (real vector superfield and Wess–Zumino gauge), §§5.1–5.2 (non-Abelian field strength, gauge coupling rescaling, chiral matter representations, and component action), and §7.1 (Kähler sigma-model action and auxiliary equations), printed pp. 21–31 and 43–46. Bilal's component trace and spinor conventions differ; only the action structure is used, while the model postulate states the local normalization explicitly.
- These two independent full-text lecture treatments support the superspace action forms and convention comparison. Local conditional derivations remain in the authored proof carriers.
- Actual full-text retrieval verification: `node tools/physics-support/source-fetch-check.mjs --coverage research/advanced-qft-supersymmetry-build-2026-10-23-batch-30-source-coverage.json --stamp` passed, 2/2 sources newly stamped, 0 drops. The successful stamps and per-item dispositions are in the source-coverage file; no retrieval failure or source drop occurred, so no `source_resolution` recovery record was needed.

## Item authoring ledger

### `def-qftx-n1-kahler-target-data`

- Claim/conventions: defines the exact local scalar-target datum consumed by the Wess–Zumino formulation: an open $U\subset\mathbb C^n$ containing $0$, smooth real $K$, the stated Wirtinger operators, positive Hermitian Hessian, and mass dimensions $[z]=1$, $[K]=2$, $[g]=0$.
- Dependencies: `def-complex-numbers-and-arithmetic` and `thm-complex-numbers-form-a-field` as mathematical premises; they supply the quotient field and unique real-coordinate representation. Conjugation is stated locally as $(a+ib)\mapsto(a-ib)$, avoiding the imported modulus and square-root dependencies. No in-run supplier, so `dependency_level: 0`.
- Source: Bilal §7.1, printed pp. 43–46, supports the Kähler-potential and Hermitian-metric setup. Martin was read for the independent superspace-action and component treatments elsewhere on this A page; no claim is made that Martin independently supplies this general Kähler definition.
- Decision: added locally because no exact earlier Kähler-target datum existed; the Wess–Zumino postulate now explicitly depends on it while retaining the full assumptions in its uninterrupted statement.
- Validation: the contract, manifest, source coverage, scoped checks, and hash-bound Step 1 record are complete; current status is `ready/closed`.
- Next action: none for this item; the shared run-level snapshot issue is recorded below.

### `post-qftx-n1-wess-zumino-model`

- Claim/conventions: adopted rigid N=1 superspace action on `eta=(-+++)` Minkowski space for a finite chiral family on a smooth positive Kähler coordinate patch; natural units, explicit field dimensions, compactly supported component fields, and the exact bosonic auxiliary sector are stated. The canonical flat Wess–Zumino model is the special case `K=sum_i bar(Phi)^i Phi^i`.
- Dependencies: `def-qftx-n1-chiral-superfield`, `def-qftx-superspace-grassmann-algebra`, and `def-qftx-n1-kahler-target-data`, each `formulation-prerequisite`; the two N=1 mathematical suppliers have current closed/ready rows, and the local Kähler datum is fully stated on this A page. Sources: Martin §§3.1–3.2, 4.1–4.7; Bilal §§4.2–4.3, 7.1.
- Decision: authored as a postulate, with no fabricated derivation or empirical claim. `provenance.proof` is `not-applicable`.
- Validation: the carrier, manifest, source evidence, postulate review, scoped checks, and current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the invariance and F-potential consumers are authored and current.

### `pthm-qftx-n1-wess-zumino-off-shell-invariance`

- Claim/conventions: for the postulated smooth rigid N=1 action on flat `eta=(-+++)` superspace, the D-term and chiral F-term variations are spacetime divergences; the explicit chiral supercharges anticommute to `2i sigma^mu partial_mu`, giving off-shell component closure with the auxiliary fields retained.
- Dependencies: `post-qftx-n1-wess-zumino-model` (physical assumption), `def-qftx-n1-chiral-superfield`, `lem-qftx-n1-chiral-superspace-identities`, and `def-qftx-superspace-grassmann-algebra` (mathematical premises). The inspected math suppliers have current closed/ready rows. Sources: Martin §§3.1–3.2, 4.1–4.7; Bilal §4.3 and §7.1.
- Decision: the proof is local and conditional; it derives the total-derivative identity from the exact left-derivative operators and uses coefficient extraction plus compact support for the boundary terms. It does not invoke a component Fierz argument or equations of motion.
- Validation: the first `proof-layout` pass found steps 1.1 and 2.1 split by display-math paragraphs; both were rewritten as single tagged paragraphs. The rerun passed: 1 item, 6 steps, 0 defects. Final scoped checks and the current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the F-potential consumer is authored and current.

### `pthm-qftx-n1-f-term-potential`

- Claim/conventions: for the bosonic zero-derivative sector, the model's algebraic auxiliary Lagrangian yields $F^i=-g^{i\bar j}\bar W_{\bar j}$ and $V_F=g^{i\bar j}W_i\bar W_{\bar j}$. The canonical metric gives $\sum_i|W_i|^2$; the proof explicitly retains the inverse metric for noncanonical Kähler data and excludes gauge D-terms and quantum corrections.
- Dependencies: `post-qftx-n1-wess-zumino-model` as physical assumption, current supplier inspected. Sources: Martin §3.2 (equations (3.2.15)–(3.2.18)); Bilal §7.1 (equations (7.24)–(7.25), printed pp. 45–46). The source passages support the auxiliary-field setup; the local proof directly completes the Hermitian square.
- Decision: theorem written conditionally at each scalar value, with $g$ positive definite to ensure invertibility and nonnegative potential.
- Validation: scoped `proof-layout` passed: 1 item, 4 steps, 0 defects. Final scoped checks and the current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none for this theorem.

### `def-qftx-n1-vector-superfield`

- Claim/conventions: defines a dimensionless real N=1 prepotential in each local trivialization of the selected SU(2) bundle; fixes Hermitian generators, the represented exponential, the chiral field-strength formula/constraint, the Wess–Zumino component representative, and the connection normalization `A=-i g_YM B`. It states that Wess–Zumino gauge need not be preserved by an uncompensated supersymmetry transformation.
- Dependencies: `post-qftx-nonabelian-yang-mills-model` and `def-qftx-nonabelian-gauge-data` for the selected global gauge data and representation bundles; `def-qftx-n1-chiral-superfield`, `lem-qftx-n1-chiral-superspace-identities`, and `def-qftx-superspace-grassmann-algebra` for the superspace operators and coefficient algebra. `AC_omega` is inherited through the exact gauge-data chain; no stronger choice is added.
- Sources: Martin §§4.5, 4.9; Bilal §§4.4, 5.1. Bilal's Wess–Zumino gauge and coupling rescaling are read as convention context; the item's exact Hermitian-generator and `(-+++)` connection normalization is stated locally.
- Decision: authored as a model-specific physical definition. The actual pure SU(2) supplier carrier was inspected, but its current Step 1 readiness record remains missing, so this definition's final readiness must remain escalated until that page edge is current.
- Validation: the complete definition, manifest, source coverage, render/dependency checks, and current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the gauge-matter postulate is authored and current.

### `post-qftx-n1-gauge-matter-model`

- Claim/conventions: adopts a rigid N=1 superspace action for a finite family of chiral fields in specified unitary SU(2) representations over the selected bundle sector. It uses the supplied connection normalization `A=-i g_YM B`, the same dimensionless `g_YM` in the matter exponential and `1/g_YM^2` gauge kinetic term, and the vector-superfield transition convention. The gauge kinetic bosonic curvature component is explicitly matched to the pure Yang–Mills action.
- Dependencies: Wess–Zumino model, pure SU(2) Yang–Mills model, non-Abelian gauge-data definition, chiral-superfield definition, vector-superfield definition, and Grassmann/Berezin definition. Roles are formulation prerequisites; `AC_omega` is inherited from the exact gauge-data chain. Direct gauge-data readiness is closed/ready; the pure Yang–Mills postulate still has a missing Step 1 record.
- Sources: Martin §§3.3–3.4, 4.8–4.9; Bilal §§4.4 and 5.1–5.2. Both full lecture texts treat the representation-valued matter D-term, vector field strength, and gauge-coupling rescaling; the item's exact trace and metric normalization is stated locally.
- Decision: authored as an adopted model postulate, with gauge-invariant holomorphic superpotential and explicit D-term boundary between the F-term theorem and the full gauge-matter potential.
- Validation: the complete adopted formulation, source coverage, scoped checks, strict postulate review, and current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the full-prepotential invariance proof is authored and current.

### `pthm-qftx-n1-gauge-matter-off-shell-invariance`

- Claim/conventions: proves global N=1 invariance of the full gauge-matter superspace action by reducing its D-term variation to odd-coordinate total derivatives plus a spacetime divergence, and its chiral F-terms to chiral-coordinate total derivatives. The proof deliberately keeps the full vector prepotential and makes no Wess–Zumino-gauge preservation claim.
- Dependencies: gauge-matter postulate, vector-superfield definition, chiral-superfield definition, chiral-superspace identities, and Grassmann coefficient definition. Physical/model and mathematical-premise roles are recorded explicitly.
- Sources: Martin §§4.2, 4.8–4.9; Bilal §§4.3, 5.1–5.2. Local proof uses the declared `(-+++)` conventions and compact-support relative-action boundary rule.
- Decision: added to discharge the page design's off-shell-invariance scope for the gauge-matter action, which the four planned item contracts did not separately cover. It proves classical global supersymmetry only, not gauge-anomaly cancellation or a quantum continuum theory.
- Validation: scoped `proof-layout` passed: 1 item, 5 steps, 0 defects. Final scoped checks, strict contract, and current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; both B-page examples are authored and current.

### `ex-qftx-n1-wess-zumino-cubic-f-potential`

- Claim/conventions: one canonical chiral field with $W=\frac12m\phi^2+\frac16y\phi^3$ gives $F=-\overline{m\phi+\frac12y\phi^2}$ and $V_F=|m\phi+\frac12y\phi^2|^2$. The example is explicitly classical and source-qualified.
- Dependencies: Wess–Zumino postulate (physical assumption) and F-potential theorem (physical result); the theorem's math inputs are transitive. Source context: Martin §3.2 and Bilal §4.3; the derivative and substitution are proved locally.
- Validation: scoped `proof-layout` passed for this and the companion example: 2 items, 5 steps, 0 defects. Final scoped checks, strict contract, and current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the companion example and manifest are current.

### `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`

- Claim/conventions: uses the fundamental SU(2) representation, Hermitian $t_a=\sigma_a/2$, and the connection normalization $A=-ig_{\mathrm{YM}}B$ to derive both components of $D_\mu\phi$ and verify the associated-bundle transition covariance and kinetic-density invariance.
- Dependencies: gauge-matter postulate and pure Yang–Mills postulate (physical assumptions), vector-superfield definition and non-Abelian gauge-data definition (formulation prerequisites). The representation and right-action transition interfaces were inspected directly.
- Decision: finite local verification is complete and makes no claim about a physical matter sector. The example remains a B-page leaf.
- Validation: scoped `proof-layout` passed for both examples: 2 items, 5 steps, 0 defects. Final manifest/source/content checks and the current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none for this item.

### `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`

- Claim/conventions: in the fundamental SU(2) representation, expands $D_\mu=\partial_\mu+\rho_*(A_\mu)$ into its two component equations and proves $D_\mu'\phi'=R(h)^{-1}D_\mu\phi$, hence the scalar kinetic density agrees across local frames.
- Dependencies: gauge-matter postulate and pure gauge postulate as physical assumptions, vector-superfield definition and associated-bundle gauge-data definition as formulation prerequisites. The actual associated-bundle relation and right-action connection transition law were inspected.
- Validation: scoped `proof-layout` passed for this and the companion example: 2 items, 5 steps, 0 defects. Final manifest/source/content checks and the current hash-bound Step 1 record are complete; status is `ready/closed`.
- Next action: none; the batch carriers and evidence are complete.

## Validation and unresolved work

- Current in-run item levels recomputed from exact supplier edges: Kähler target datum 0; Wess–Zumino postulate 3; vector-superfield definition 4; Wess–Zumino invariance theorem 4; F-potential theorem 4; gauge-matter postulate 5; gauge-matter invariance theorem 6; cubic example 5; fundamental-matter example 6. Batch 30 recomputes to level 3 and requires batches 1, 2, 19, and 29.
- Both required page suppliers are current. Every item on `qftx-susy-algebra-and-multiplets` and `qftx-nonabelian-yang-mills-model` has a current closed/ready Step 1 row. All 21 exact cross-batch rows are `verified`; the array has no missing or extra edges.
- Fresh `loadStep1Record`/`step1Decision` checks show all nine assigned items `ready/closed` with current hashes. Their records were created with `step1-decisions.mjs record` in supplier-before-consumer order and without `--owner`. Readiness records attest authoring readiness only.
- Final scoped validation: content-policy 9 items, 0 errors/warnings; strict proof-contract 9/9, 0 errors/warnings; depcheck selected 9 items and passed its 1361-item/359-page prerequisite cycle checks; rendercheck 11 files passed; proof-layout across all 9 changed items covered 20 steps with 0 defects; source-fetch-check 2/2 sources verified and resolved; statement/manifest audit confirmed nine uninterrupted statements, two empty page bodies, and exact cross-batch edge coverage.
- Shared run-level validation blocker: `batch-dependency-levels.mjs check --run advanced-qft-supersymmetry-build-2026-10-23` still reports the shared snapshot stale. The live rows for batch 30 (level 3, requirements `[1, 2, 19, 29]`) and batch 31 (level 4, requirements `[1, 19, 30]`) now match the recorded rows. The recorded `input_sha256` is `d261e0b6354d958d10d8df74cb66fee26d6cf574a9028c0ddfddc15ba379c63c`; recomputation from the final manifests gives `ce7acee939c554ab9bec3f9cd4801e19cb2e3784a31bdd2dae4b80243f73c8e3`. The shared level file is owner-controlled and was left untouched; the owner must refresh the run snapshot hash.
- Next action for the owner: refresh the shared run-level snapshot hash after this batch's final manifest is accepted. No assigned mathematical prerequisite remains unresolved.

## Owner canonical-normalization follow-up — 2026-10-24

The current source/interface and exact consumer disposition are in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/canonical-normalization-repair.md` and its evidence JSON. This dated addendum supersedes earlier live-readiness observations and the earlier raw/physical measure identification, without deleting that history. Current physical brackets are D=-I_D/4, F=I_F/2 with psi_raw=sqrt2psi and F_raw=2F; scalar fields, physical couplings and potentials are preserved.50/51 use the independent stable-ADHM core and genuine localized BM tangent-twist insertion, with source continuation m=i m_E and the unconstructed S4-regulator caveat retained.79 selected source items and26 actual pages passed focused preparation checks; this is not native acceptance. Root retains native holds until independent source/dependency binding and recertification.
