# Batch 17 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-17`; assigned batch only: 17.

Read the workspace rules, scope, order task, reader report/findings, refuter artifact and pre/post fingerprints. Exactly two routed decisions are owed. No agent dispatch, judging, stamping or gate battery is authorized.

## Completed item reviews (dependency order)

### lem-emg-fx-banach-implicit-constraint

Read all six steps and all nine direct supplier Statement/Definition sections. Continuity at the origin supplies uniform operator and parameter-derivative bounds on a sufficiently small product ball, without asserting compactness of infinite-dimensional balls. Closed ball is complete by the choice-free closed-subspace direction; fixed point is interior by strict center bound. Neumann series and inverse-difference identity justify nearby inverses. O(h) branch increments control the Frechet remainder. Both zero/fixed-point directions, X={0}, epsilon=0 and open endpoints checked. No reader/refuter objection to this carrier; no extra AC needed.

### lem-emg-fx-dirichlet-energy-and-trace

Read all four steps and eight direct supplier definitions/statements. Zero extension is smooth for compact support; one-coordinate FTC, Cauchy-Schwarz and Tonelli give precisely 2R. Inward graph charts are allowed after a rigid reflection. Cutoff error has layer volume O(delta), bounded gradient and u=O(t), proving H1 convergence, followed by compactly supported mollification. Reverse local boundary L2 inequality applies to u-u_j, then continuity upgrades a.e. zero to pointwise zero. Both iff directions, zero function and disconnected bounded smooth domains checked. AC and countable choice retained explicitly; no unproved trace theorem used. Reader/refuter report no carrier objection.

### lem-emg-fx-newtonian-holder-potential

Read all six steps and ten direct supplier statements/definitions. Independently checked kernel derivatives, vanishing concentric-annulus integral and negative delta_ij/3 correction, consistent with Hunter section 2.7.1 Theorem 2.26/Corollary 2.27. Cutoff transition Hessians have epsilon^(alpha) integrable error; coordinate-segment uniform derivative limits give C2 for Holder data without false full-Holder smooth density. Midpoint ball reflection makes fluxes equal; far-kernel integral is bounded by two sphere fluxes, and alpha<1 makes the far radial integral converge. R^2 scaling, zero/empty support, distribution-to-classical equality and countable-choice premise checked. Hunter section 2.7.2 Theorem 2.28 and its near/far decomposition read as source context, not a replacement for the local proof. Reader/refuter have no carrier objection.


### lem-emg-fx-flat-dirichlet-holder-estimate

Read all seven steps and its four direct suppliers. Infimum extension and clamping preserve Holder trace bounds, including H=0. Differentiated mollifier kernels have zero integral and t^(alpha-k) estimates; t^2 g_t/2 has the required boundary Hessian and C2,alpha bounds by the two-distance split. Subtracting this lifting makes the forcing trace zero before odd reflection, so v_tt and tangential Hessians match across the face while mixed Hessians are even. Cutoff buffer controls the global forcing norm; Newtonian potential plus harmonic averaging yields derivatives without stronger input regularity. Scaling and absence of curved-face data checked. Wang Theorems 1 and 1-prime, PDF pp.1-3, inspected; their classical hypotheses are respected. Reader/refuter no objection.

### lem-emg-fx-global-dirichlet-holder-estimate

Read all six steps, eight direct supplier interfaces and the reader clarification against recovered exact preimage (raw 57a13c0af1c466bb4502b75a78633795eb46898d721abe1f3e4b9b2a9d16049b) at owner-boundary-gr-emg/before/items/lem-emg-fx-global-dirichlet-holder-estimate.md. Current raw matches post snapshot. Only Statement definitions/norm conventions changed; proof unchanged. Finite normalized tangent charts give a(0)=I and O(r) principal perturbation; top-seminorm comparison is uniform in r, lower norms may carry C_r. Inner-patch cover uses a maximum rather than a number-of-charts sum, permitting absorption. Ascoli contradiction removes C2 lower terms; derivative limits are identified on interior segments. AC and countable choice retained. No weak regularity is assumed. Sum-over-multi-indices norm agrees exactly with problem definition. Direct item/reference consumer is only inverse: F6 and steps3.1,6.1 use the same bound under a connected smooth-domain specialization, unchanged. A-page placement unchanged. Schikorra sections8.8-8.9 (pp151-153) and Wang pp1-3 read; source omissions do not replace the local proof. Accepted reader repair; no outside consumer repair.

Touched decision: `touched:17:lem-emg-fx-global-dirichlet-holder-estimate`: `accepted_repair`, repair_confidence 1. Exact preimage recovered; no historical uncertainty. Refreshed owning manifest Statement mirror. No item edits by this adjudicator so far.

### lem-emg-fx-dirichlet-holder-inverse

Read all eight proof steps and all sixteen direct supplier Statement/Definition sections, including complete smooth-weak-solution corollary proof to distinguish its Sobolev route from Schauder. Weak form uses the real Hilbert space and coercivity 1/(1+C_P^2), datum f/8. Infimum extension plus clamping/cutoff and mollification gives uniform Holder bounds and uniform convergence, not full-norm density. Smooth forcing meets the Sobolev regularity supplier hypotheses. Quadratic barriers have Laplacian -M and yield uniform supremum control; only then apply the locally proved a priori bound. Ascoli derivative limits solve the equation and retain Holder difference bounds and zero boundary restriction; local trace/closure and weak uniqueness identify the solution. Boundedness and maximum principle give injectivity and linear inverse. In the auxiliary t-family the positive barrier has A_t q>=2; interpolation absorbs the C0,alpha term; Cauchy estimates give closedness in X and Neumann series openness. Zero data, t=0,1, scaling by8 and AC/CC checked. Schikorra8.28-8.30 provides source context only, with actual local proof supplying the required bound. Reader/refuter no carrier objection. Global supplier clarification preserves F6 exactly; no consumer edit required.

### lem-emg-fx-holder-cubic-map

Read all four numbered steps (including1.2), seven direct supplier Statement/Definition sections, and current reader/refuter evidence. Bounded inclusion uses local smooth charts and a finite-cover Lebesgue number rather than global convexity. Positive minimum exists on nonempty compact closure and yields an open neighborhood. Full Holder norm is submultiplicative. Reciprocal differences give Holder control, the exact rational remainder has numerator6r^2+8r^3+3r^4 and is O(||h||_Y^2), and fourth-power difference factorization proves operator-norm continuity. S=0 and h=0 and arbitrarily small positive minimum checked. Carrier proof has only earlier-step tags. Confirmed reader:17:1 nonfatal: contract derivation3.1 adds its own step3.1 as an input, absent from the proof; removed exactly that input. Statement, proof, prerequisites and consumer interfaces unchanged. Risk complete after this metadata repair; repair_confidence1.

Reader decision: `reader:17:1`: `confirmed_nonfatal`; exact closed ledger row `pnf129-r2-b17-cubic-contract-self-input`. Contract repair only.

### thm-emg-fx-small-dirichlet-data

Read all five steps and all eight direct supplier statements/definitions, now reviewed in order. X and Y Banach under retained AC/CC, positive-minimum set open, bounded inclusion makes N_S restricted to X C1, and D_uF(0,0)=-8Delta is precisely the proved inverse. Choose rho<1/2 and parameter interval within the implicit-function product to retain every-zero local uniqueness and positive psi. Since S>=0, apply the maximum principle to -u to obtain psi>=1. Fixed-point identity first gives O(epsilon^2) in X from continuity and bounded inverse; local Lipschitz nonlinear control then gives O(epsilon^4) after subtracting epsilon^2 A^-1(2S). Includes epsilon=0, negative parameters and S=0. Uniqueness is only the declared fixed ball; no empirical or global claim added. Reader/refuter no objection; no interface or consumer repair.

Focused strict-contract check identified two follow-up metadata/layout obligations: inverse F6 still quoted the old global Statement, now refreshed to the exact clarified Statement. Cubic-map final recap said “steps 2.1 and 3.1 establish” inside step 3.1; this was a reference to the conclusion just proved, not a circular mathematical argument. Replaced it by “step 2.1 and the derivative continuity just proved establish”, preserving its reasoning and earlier-step tags, and synchronized derivation claim. Thus the removed self-input no longer has a mechanically parsed self-reference in the recap. This is part of the same nonfatal finding repair, confidence 1.

### ex-emg-fx-small-constant-field-ball

Read all five Verification steps and all fifteen direct supplier Statement/Definition sections, including the actual smooth conformal seed and constraint formulas, published constrained-data definition and Sobolev bootstrap interfaces. Constant fields on the open oriented ball have S=a^2, zero divergence and zero cross product; geometric vectors are converted to SI by the seed dictionary when compared with the inherited constrained-data definition. Scalar coefficient is exactly a^2(R^2-|x|^2)/24 since Delta|x|^2=6. Smoothness is not inferred directly from C2,alpha: initial C2 forcing gives H2, weak closure gives H1_0, boundary regularity yields H4. For m>=4 each derivative product has all factors in Linfinity except possibly one highest derivative in L2 or L6 (bounded domain embeds L6 in L2); positive range and smooth approximants give reciprocal composition in Hm by the algebra estimate and parameter integral. Iterating Hm to H(m+2) and embedding yields every Ck closure derivative. R>0, a=0, epsilon=0 and negative epsilon checked. Momentum equation is checked separately from Hamiltonian; boundary prescription and local-only conclusion preserved. AC/CC retained in Given/A1. Hunter4.31/4.32 printedp116 inspected; no measured inputs or empirical claim. Reader/refuter no objection, no diagram needed.

All nine required risk reviews are recorded. No scientific escalation or outside consumer correction identified.

## Final dispositions and consumer review

Exactly two decisions are written in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-17-3a-decisions.json`:

- `touched:17:lem-emg-fx-global-dirichlet-holder-estimate`: `accepted_repair`, confidence 1; closed defect `pnf129-r2-b17-explicit-holder-conventions`.
- `reader:17:1`: `confirmed_nonfatal`, confidence 1; closed defect `pnf129-r2-b17-cubic-contract-self-input`.

No refuter or page obligation is owed. The scope's original group k is untouched; output group is batch-17 as dispatched. Original reader/refuter reports and frozen fingerprints are unchanged. The global preimage exactly matches pre snapshot; its current bytes exactly match post snapshot. Cubic-map current bytes differ from both snapshots only by the closing-recap edit documented above. The reported self-input was present in the current contract before repair and has been removed; historical finding is confirmed, not reclassified from its repaired current state. Both ledger rows were appended via the serialized native ledger appender and the generated view refreshed. The cubic row records the initial contract-only correction; its linked report additionally records the later harmless recap repair required by strict token extraction.

Search of `items/` and `library/` finds only the inverse as an item/reference consumer of the clarified global supplier, besides its own A-page placement. Its exact F6 use and proof steps 3.1/6.1 preserve the same full-norm estimate; its contract quote is refreshed. No change to the inverse Statement or Definition is required, so no further interface propagation is triggered. The branch and example were nevertheless fully reviewed as their own required risk obligations. Cubic-map changes only its proof recap and contract; no public interface changes. Stable item IDs, inventories, dependencies, mathematical classifications and page placement are preserved. No withdrawal is proposed.

The owned cross-batch uses in `research/physics-non-fluid-129-2026-10-21-r2-batch-17.cross-batch-dependencies.json` were checked against actual current seed/constraint statements: definition specializes the scalar equation only; example separately establishes smoothness, both divergences and zero momentum cross product. Page emg-fx01 supplies that context. These are exact consumer-use checks, not an independent audit of batch 16. No outside repair is requested. There are no empirical premises, statistical inference claims, algorithms, or TikZ/tikzcd diagrams in this batch. No missing diagram is needed for these analytic arguments.

## Sources and reading limits

Read each direct dependency's current Statement or Definition, including published imported mathematics, and the full proof of the smooth-weak-solution corollary to check that it uses Sobolev regularity rather than the target Schauder inverse. Strict contract validation checks all stored citation quotations against their current supplier sections; it does not certify their truth. Imported/published content was not edited or exhaustively audited. No defective published supplier was identified, so no published-consumer ledger entry or lock was needed.

Additional source passages inspected:

- [Hunter, Notes on Partial Differential Equations](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), section 2.7.1 Theorem 2.26 and Corollary 2.27 (boundary-flux cancellation formula), section 2.7.2 Theorem 2.28 and the near/far decomposition; printed p.116 Theorem 4.31 and Corollary 4.32 (higher-order boundary regularity and smooth representatives). The local cutoff proof supplies the nonsmooth-data extension; no false full-Holder-norm density is invoked.
- [Xu-Jia Wang, Schauder Estimates](https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf), retained batch-17 PDF pp.1–3, complete Theorem 1 argument and Theorem 1-prime. These begin with classical solutions; weak-to-classical existence is supplied separately in the local inverse proof.
- [Schikorra, PDE I & II](https://sites.pitt.edu/~armin/pde2022/pde.pdf), retained PDF pp.151–153, sections 8.8–8.9, Theorems 8.28/8.30 and approximation argument. The text omits flattening details; the owned global proof supplies them. The local extension argument does not rely on the source's suggested smooth retraction.
- [Chin-Lung Wang, Banach Calculus](https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf), retained PDF pp.9–11, sections 3.1–3.3 contraction/inverse/implicit arguments. The local proof directly establishes the derivative remainder and nearby operator inversion.

No claim is made to reading entire books or PDFs, to a new full-text retrieval of Gilbarg–Trudinger/Conway/Kinnunen/Lebl, or to independent audit of unrelated transitive mathematics. Their mere bibliography presence was not used as a missing premise. The conditional conclusions use the explicit local arguments and actual supplier statements described above.

## Local checks and handoff

Successful final commands, all exit 0:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-17.proof-contracts.json --require-reviewed`: 10 routed items, nine CRITICAL reviews complete, 0 errors. Initial run without the flag was also performed before reviews.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-17.proof-contracts.json --strict`: 10/10 items checked, 0 errors/warnings after both follow-up corrections.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-emg-fx-holder-cubic-map.md items/lem-emg-fx-global-dirichlet-holder-estimate.md`: 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/lem-emg-fx-holder-cubic-map.md items/lem-emg-fx-global-dirichlet-holder-estimate.md library/einstein-maxwell-models-mathematics/emg-fx02.md library/einstein-maxwell-models-mathematics/emg-fx02-examples.md`: all 4 files parse and render without reported math/YAML/link defects.
- Final post-edit `node tools/physics-support/proof-layout.mjs items/lem-emg-fx-holder-cubic-map.md items/lem-emg-fx-global-dirichlet-holder-estimate.md`: 2 items, 10 steps, 0 defects.
- Exact manifest Statement mirror and two-obligation decision inventory checked programmatically.

The first strict-contract attempt reported the stale inverse F6 quotation and the recap's parsed current-step token; both were repaired and the successful check above supersedes that failed attempt. Initial command discovery also tried a nonexistent plural proof-contracts filename and a direct node invocation of precheck.mts; the singular tool and documented tsx wrapper were then used. PDF extraction used installed Python fitz after pdftotext was unavailable. These invocation issues are not mathematical defects and have no ledger rows.

No remaining scientific blocker or uncertainty requiring owner disposition was found in this assigned scope. Engine-owned hash stamping, independent judging, full gate battery and stage transitions were not run.
