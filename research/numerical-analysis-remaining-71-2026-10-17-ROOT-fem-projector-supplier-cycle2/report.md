# PE12 projector/domain escalation: second and final owner review with focused repairs

Run: `numerical-analysis-remaining-71-2026-10-17`. This is the actual second/final owner review→repair cycle for this escalation, not native review, gate coverage or publication acceptance. Read current CLAUDE.md and README.md. The native continuation result `beta-batch-39-refresh-c0cd3394-197c-47f6-8793-9b21f004b47c.result.json` was read fully: terminal task complete, unaborted, ok, exit 0, ended `2026-10-17T13:26:58.608Z`. Actual engine dispatch row and append-only dispatch-ok event agree on successful completion at `13:26:58.647Z`. Read the complete continuation notes and the complete cycle-1 proposal, including the final Bochner and d=1 addenda. Native batch44 was also verified drained in current state, successful at `12:59:37.738Z`; root separately confirmed no active44 writer before the outside consumer edit.

## Actual findings and repairs

The three actual new projector suppliers fully supply the missing local standard-mesh theorem. Reviewed all their Statements, facts, dependencies and complete proofs independently. No mathematical repair to those three suppliers was required. In particular:

- Unisolvence uses the barycentric face/degree induction, with a separate direct interval argument. Fixed k gives a finite reference basis. Coefficient scaling follows from cell norm equivalence; global upper and lower bounds count every coefficient with uniform incident-cell multiplicity.
- Global quasi-uniformity gives the lower cell volume needed for polynomial graph-ball growth; shape regularity alone is not substituted. The spectral interval for h^{-d}M is uniform. B=I−A/(2b) has contraction factor 1−a/(2b), and powers vanish below graph distance. The resulting inverse entries are bounded geometrically and row/column sums by a polynomial times a geometric series, independent of mesh cardinality.
- Q_h smooths the zero extension before evaluating nodes and sets boundary coefficients to zero. The proof supplies local cube Poincare, exterior-density boundary control, overlap bounds, first-order Lp approximation and gradient stability; it proves direct interval W01p membership. Smooth compactly supported approximation gives strong W1p convergence without any forbidden W01∞ density claim.
- Mass-system right-hand-side estimates and absolute row/column Jensen estimates prove inclusive Lr stability for 1≤r≤∞. The inverse estimate plus Q_h then proves W01p stability/convergence for all 1<p<∞; finitely many initial coarse meshes can be absorbed. L2 convergence holds for arbitrary initial data by density/contraction. No coupling of time and space refinement is introduced.
- The explicit unit interval and all-dimensional unit-cube Kuhn/Freudenthal families are genuinely nonempty. The ordered-coordinate and barycentric-gap argument proves matching across simplices and grid faces. Diameter √d/N, cell volume 1/(d!N^d), inradius 1/[N(2+(d−1)√2)] and θ=1 are correctly computed. The cube chart proof makes its Lipschitz polyhedral status explicit. The d=1 branch has interval length 1/N and inradius 1/(2N).

Two focused canonical repairs were made, with exact before bytes archived under `before/items/` in this directory:

1. `items/thm-pe12-backward-euler-galerkin-existence-energy.md`: its derivative-inclusive uniform bound claimed dependence only on the listed flux/data quantities but omitted the family projector stability constant C_Pi and the Lp′ norm of the flux growth function g. Proof 4.1 explicitly uses both. The Statement now lists both, and proof 4.1 gives the concrete bound

       ||D_k||_{Lp′(V*)}^{p′} ≤ C_{p,C1} C_Pi^{p′} (||f||_{Lp′(V*)}^{p′} + T||g||_{Lp′(Ω)}^{p′} + Σ_n τ_k^n||U_k^n||_V^p).

   This preserves every existence, energy, convergence, data, dimension and exponent conclusion. It corrects only the asserted quantitative dependencies. The uniform bound is still independent of k and the time steps for each fixed stable family.
2. `items/lem-mimetic-fv-parabolic-limit-identification.md`: after reporting the exact outside-file wording to root and receiving explicit coordination/authorization, made “bounded with C1 boundary” explicitly “bounded and open with C1 boundary”. This supplies the already required W01p domain hypothesis and preserves the original C1 branch; it does not broaden or narrow its intended regularity, alter its conditional FV hypotheses or claim a concrete FV construction.

No other canonical file was edited. In particular no live41 MINI writer or unrelated25/38/41/42/43 file was overwritten. No contract, manifest, dependency level, source stamp, readiness record, engine control, hash or certification was changed.

## Domain and existing-supplier preservation

The actual compact embedding and flux Statements retain **d≥1**, bounded **open** Ω and the full strict threshold p>max(1,2d/(d+2)). The d=1 compact-L2 proof directly uses zero extension to a containing interval, FTC/Holder, uniform representatives and Arzelà–Ascoli. It does not misapply the published Morrey–Rellich supplier whose Statement starts at dimension2. For d≥2 the chosen subcritical r lies strictly between max(1,2d/(d+2)) and min(p,d), so the arbitrary-open W01r compactness supplier applies. The actual Poincare supplier already covers open sets bounded in one direction; no C1 trace assumption is smuggled into the gradient norm.

The actual separability/reflexivity proof uses a closed W01p subspace and a countable-base argument, which require no boundary regularity. The existing gradient-compactness item retains its richer arbitrary-H and d≥1 Statement. Its actual closed gradient-range/Bochner-completeness argument, including its simple-function Tonelli identification, already supplies the needed substantial intermediary: no fourth Bochner item is needed or added. Its empty-domain paragraph correctly sets V and the state images to zero without asserting H={0}. The stable-family definition retains the abstract branch while its Remarks point to the proved concrete theorem without a dependency cycle.

## Same-reviewer actual consumer dispositions

The actual current declared-dependency closure was recomputed from carrier frontmatter, recursively, rather than inferred from a stale manifest. Its 16 IDs are recorded in `consumer-closure.json`; every carrier below was read fully. Searches of actual item/page text also checked contextual uses. Supplier preservation and consumer checks were performed by this same reviewer.

| Actual carrier | Focused disposition |
| --- | --- |
| `lem-pe12-quasiuniform-mass-inverse-decay` | Complete interval/simplex coefficient, graph, spectral and inverse proof sound under its exact contract; unchanged. |
| `lem-pe12-boundary-preserving-quasi-interpolation` | Complete zero-boundary construction, membership and approximation proof sound; unchanged. |
| `thm-pe12-l2-projector-w1p-stability` | Correct all-r Lp bounds, strict-p W1p bounds and strong approximation; actual mesh examples and independent time limits verified; unchanged. |
| `lem-pe12-w1p-compact-l2-embedding` | Bounded-open d=1 and d≥2 branches verified as above; unchanged. |
| `lem-pe12-w0p-separable-reflexive` | Banach/reflexive and countable-base arguments apply to bounded open Ω; unchanged. |
| `lem-pe12-space-time-gradient-weak-compactness` | Closed gradient/Bochner range proof and actual arbitrary-H identification checked; empty-domain correction already integrated; unchanged. |
| `def-pe12-monotone-diffusion-flux` | Full d≥1 strict-p bounded-open triple contract retained; Poincare/compactness/separable-reflexive suppliers meet its hypotheses; unchanged. |
| `def-pe12-stable-conforming-fem-family` | Abstract clauses and H-approximation consequence sound; concrete mesh theorem supplied in Remarks; unchanged. |
| `thm-pe12-backward-euler-galerkin-existence-energy` | Orthogonal-projector derivative lift checked; quantitative dependencies repaired as above. |
| `lem-pe12-minty-identification` | Finite-cylinder arbitrary Lp vector-field testing, weak limsup passage and dual-power test identify the full flux; no boundary geometry used; unchanged. |
| `thm-pe12-monotone-fem-limit` | Fixed tests use strong Pi_k v→v in V; initial projection convergence, affine/constant V* defect, scalar endpoint convergence, terminal lower semicontinuity and discrete/continuous energy limsup justify Minty. Its abstract and concrete branches both remain valid with the corrected energy constants; it only requires a finite uniform bound for a fixed family. Unchanged. |
| `thm-pe12-strong-monotone-residual-estimate` | Purely variational error inequality and scaled Young constant valid; no added domain regularity or mesh rate; unchanged. |
| `ex-pe12-p-laplacian` | Pointwise monotonicity, all-p Nemytskii continuity and concrete interval/cube applications checked, retaining original data and p range; corrected energy constants do not alter its claim. Unchanged. |
| `lem-mimetic-fv-parabolic-limit-identification` | Strong-H reconstruction plus bounded V permits the richer gradient compactness supplier; weak flux/limsup permits Minty. Derived V* derivative and scalar endpoint argument identify initial trace. Original C1 case is included in the broadened suppliers; only explicit OPEN wording repaired. |
| `thm-na-mini-navier-stokes-be-subsequential-limit` | Read fully; its affected use [F9]/step1.4 applies the gradient lemma componentwise with p=2, H=L2 and bounded open Lipschitz polyhedral D, after obtaining strong L2 convergence. Those hypotheses match exactly. No use of the new scalar projector theorem is imputed to the MINI solenoidal projector. Its separate pressure issue is preserved; live writer file left untouched. |
| `rem-na-pe06-pressure-recovery-escalation` | Read fully as the actual indirect consumer. It explicitly distinguishes a missing stability estimate for the weak MINI kernel projector; the new scalar Lagrange-space theorem does not establish that different estimate. No false discharge or edit was made. |

Also read the complete current Bochner-completeness and energy-chain-rule suppliers and the actual Ritz counterexample for the interfaces used by the reviewed limit. The Ritz example independently computes the same 1D residual mismatch and does not inherit a broken flux/domain assumption. Read the complete current PE12 A/B page prose; it accurately distinguishes general bounded-open variational claims from the concrete interval/Lipschitz-polyhedral mesh branch. No page edit was required.

After the FV OPEN clarification, an exact actual-text search found only its own carrier, its batch44 A-page placement/prose, and `def-phase-field-discrete-realizations`. Read the complete phase-field definition and batch44 page. The phase-field mention is confined to Remarks and explicitly says the Dirichlet W01p limit lemma is **not used** for its Neumann branch; its original Definition and logical dependencies are unchanged, so this contextual observation does not propagate into an artificial repair of phase-field consumers. No declared logical consumer of the FV item was found in current item deps. The batch44 page still accurately describes a conditional reconstruction/compactness/residual/energy-limsup result.

## Source consultation and checks actually performed

Reconsulted the previously acquired complete Diening–Storn–Tscherpel arXiv PDF extraction for the entire proof text of §§4.3–4.4, Theorems4.13–4.14. Those source proofs use Lp stability, inverse estimates and a boundary-preserving quasi-interpolant; the actual local items prove their own global quasi-uniform graph and mollified-Q_h route rather than importing an unauthored Scott–Zhang theorem. No new reading of the paper's adaptive grading or full weighted-Lp theory is claimed. Existing source titles in the three new carriers spell the third author's first name “Timo”; the acquired source title page says **Tabea Tscherpel**. This is a bibliographic mirror correction for root bookkeeping, not a logical proof issue; no source metadata was edited here.

Mandatory final actual formatting command, run after both final canonical edits:

    node tools/proof-layout.mjs items/thm-pe12-backward-euler-galerkin-existence-energy.md items/lem-mimetic-fv-parabolic-limit-identification.md

Result: exit0, `proof-layout: 2 items, 12 steps, 0 defects`. The earlier one-file layout pass likewise reported 1 item,5 steps,0 defects before the outside wording edit. No other tests or gates were run, and no native check result or review credit was manufactured.

## Remaining root integration

Root owns mirroring the two actual Statement changes and energy proof4.1 in current contracts/manifests/quotes, and ordinary current-input bookkeeping, readiness, downstream routing and gates. No unresolved mathematical gap remains in this specific standard-mesh projector/domain escalation after this final focused repair. The MINI pressure escalation is a distinct existing issue and is not discharged by this report. New live consumer writes can change the observed closure; protect live41 and inspect that actual final use after drainage if it changes, without treating this report as review of future bytes. This report supplies no third owner review cycle and no acceptance, certification or gate waiver.
