# Step 3a adjudication — batch 38

Run: numerical-optimization-dynamics-2026-10-16; group: batch-38.

Scope: two touched obligations; no page, reader, or refuter findings. Reader report and refuter coverage artifact independently considered as evidence. No agents, judges, stamps or engine transitions invoked.

## Dependency-ordered review

### cor-poisson-adjoint-h2-estimate-from-global-regularity

Steps 1.1–2.1: tested with z using the stated Poincare bound and L2 Cauchy–Schwarz, treating zero gradient separately. Identity principal matrix meets the exact global-H2 supplier on a bounded C2 domain, n>=2, under Countable Choice; retained L2 solution term gives C_reg(1+C_P^2). No Lipschitz extension or hidden Poincare branch is used.

### lem-two-cell-hat-and-quadratic-functions-lie-in-h10

Steps 1.1–4.1: antisymmetry of 1-2 sigma makes the smoothed derivative have integral zero; resulting q_epsilon agrees with the hat off the middle interval. All displayed L2 errors tend to zero. Endpoint cutoffs have derivative support of length 2 epsilon and the stated pointwise bounds. Classical weak derivatives and Holder justify the test-identity limit. Explicit epsilon_n gives H10 closure membership without a trace characterization; Countable Choice is inherited from Sobolev and change-of-variables suppliers.

### thm-adjoint-problem-for-bounded-coercive-variational-forms

Steps 1.1–2.1: conjugate transpose form preserves boundedness and real-part coercivity; conjugating the bounded linear datum produces exactly the conjugate-linear datum required by local Lax–Milgram. Conjugating its equation gives a(v,z)=G(v); norm equality and uniqueness survive conjugation. Real and zero-space cases are valid. Countable Choice matches the supplier.

Level-0 reviews completed before the dependent Galerkin reviews.

### thm-cea-quasi-optimality-for-conforming-galerkin-approximations

Steps 1.1–5.1: local Lax–Milgram supplies continuous and restricted solutions; finite-dimensional closedness plus ambient completeness proves the subspace Hilbert, including the zero subspace. Subtracting the same variational equations yields orthogonality. Coercivity applied to e and boundedness against u-v_h give M/alpha after handling e=0 before division; taking an infimum needs no minimizer. Real/complex conventions and Countable Choice match the suppliers.


### cor-symmetric-galerkin-best-approximation-in-energy-norm

Steps 1.1–3.1: Hermitian positive definite sesquilinearity gives the energy inner product; coercivity guarantees definiteness. Orthogonality in the second slot and its conjugate eliminate both cross terms. Pythagoras gives the lower bound for every candidate and v_h=u_h attains it, including e=0 and V_h={0}. Cea supplies existence under Countable Choice; no projection theorem or arbitrary choice is added.

### thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity

Steps 1.1–4.1: G_e(v)=(Jv,e) is linear and bounded by C_E||v||||e|| under the first-slot convention. The reviewed adjoint theorem applies. Testing with u-u_h yields ||e||^2 and Galerkin orthogonality removes any w_h. Taking an infimum and the two explicit assumptions give M C_I C_R h^s; divide only when ||e||>0. Fractional approximation and regularity are assumptions, with no automatic H2 claim on Lipschitz domains.

### cex-reentrant-corner-poisson-solution-not-h2

Verdict: amended_repair; repair_confidence: 1. The source repair is accepted and its manifest dependencies are reconciled.

Steps 1.1–5.1 checked independently: origin coordinates give t>-|s|, and all other polygon vertices admit Lipschitz graphs. lambda=2/3 is harmonic on the 3pi/2 sector. Radial errors have powers 10/3 and 4/3; angular cutoff derivative times u is O(r^(-1/3)), whose squared polar integral is finite and O(epsilon) on shrinking angular strips. Classical weak-derivative identification gives H1 membership; explicit compactly supported approximants give H10. f is bounded on the radial annulus. The radial Hessian contraction has nonzero angular integral 3pi/4 and divergent radial exponent -5/3. The weak identity extends by H1 continuity. Slab Poincare supplier proof step 3.1 explicitly permits constant 1, so width 2 proves uniqueness and rules out any alternative H2 weak solution. All cited supplier assumptions use Countable Choice. Accepted reader closure of an elementary omitted uniqueness argument; no change to the refuted statement.

Historical preimage: research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/cex-reentrant-corner-poisson-solution-not-h2.md, verified raw SHA256 ff784225d0599670f6cb778864ad28038db8c9edf9633da6b769c0ffa36db6ae against the pre-reader snapshot. Current raw SHA256 0b6604ea2e9552acf1491fab16714423113eb6e8a27654472aa6baa384b6c31e matches reader-post. The original non-H2 witness is correct; the omitted energy-uniqueness step is an immediately closable nonfatal gap, now explicit.

### ex-symmetric-poisson-best-approximation-on-two-cell-mesh

Steps 1.1–3.1: the reviewed explicit approximation lemma gives H10 membership over both fields. The test-function primitive estimate proves C_P=1 using real component FTC and L2 Cauchy–Schwarz; density transfers it to H10. The quadratic weak identity and bounded datum satisfy the exact Poisson theorem with the explicitly retained AC and Countable Choice. Direct integration gives stiffness 4, load 1/2, coefficient 1/8, and two errors 1/96, hence 1/48. The Poisson supplier proves Hilbert/coercivity prerequisites and the integral form is Hermitian, so the reviewed energy-best theorem applies.

### cor-shape-regular-affine-fe-primal-energy-approximation

Verdict: amended_repair; repair_confidence: 1. The reader source is retained; amendments reconcile its manifest dependencies and refresh two batch-24 supplier quotations.

Steps 1.1–4.1: polynomial local shape functions have finite W12 norms; finitely many bounded DOFs give reference interpolant continuity. Bramble–Hilbert is used with its order parameter r+1 and s=0,1,r+1: its unique moment polynomial is the same for each s, so it controls the full W^{r+1,2} term required by step 1.1. The F2 paraphrase lists only lower orders but the exact cited Statement includes the needed endpoint; no missing prerequisite. Affine seminorm scaling in both directions cancels determinants and gives h_K^{r+1-m}; shape regularity supplies uniform constants. Facet graph covers have O(N^{d-1}) boxes of O(N^{-d}) volume, hence outer measure zero under the exact measure suppliers. Matching mesh interiors partition Omega up to those facets, and conformity is assumed, so local squares sum to the global H1 norm. h<=1 handles the L2 contribution. No fractional approximation or curved-cell assertion follows. Reader clarification preserves the already stated polynomial-space contract.

Historical preimage: research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/cor-shape-regular-affine-fe-primal-energy-approximation.md, raw SHA256 4f567104e1b2113df0da098368c8e363ded1f57a17b9e8b89a09c285d923d84f matches the pre-reader snapshot. Current source raw SHA256 e33ac9b4066e4b846ef5846c7c728054defcaf98f737e99d0837ad21700c2513 matches reader-post. Facet nullity was a true elementary fact left implicit: nonfatal proof polish, now derived locally. Polynomial-space wording is a clarification of the original polynomial premise.

Manifest reconciliation also makes the cex decision amended_repair at the full carrier level; its source remains exactly reader-post. No item sources changed in this adjudication.

### cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation

Steps 1.1–3.1: the real scalar affine FE hypotheses include the explicit polynomial space, bounded Sobolev DOFs, global conformity and zero-boundary mapping. The H1 norm dominates L2, giving J continuous. I_hu is an admissible comparison in finite-dimensional V_h; Cea gives (M/alpha) C_FE h^r, while the actual two dual bounds give M C_D C_R h^s by Aubin–Nitsche. Their product is exactly (M^2/alpha) C_FE C_D C_R h^{r+s}. Zero error needs no division. s=1 is conditional on both dual bounds and uses H2 intersect H10 with the H2 norm, not an arbitrary Lipschitz regularity assertion.

Refreshed F1 to the reader-repaired primal Statement; this is quotation maintenance, not a new defect or item edit.

## Sources and prerequisite evidence

Every declared direct supplier for the ten risk-review carriers was opened at its current Definition or Statement, with full current proofs also inspected for the six batch-24 mesh/interpolation suppliers and the published finite-dimensional closedness and slab Poincare suppliers. Supplier statements are prerequisites, not independent certification of their entire transitive closure. In particular, Poincare proof step 3.1 proves C(p)=1, although its Statement allows an unspecified C(p). The global H2 supplier is used only for the identity principal matrix on a bounded C2 domain with its solution term retained. Sobolev classes and H10 mean weak-derivative classes and test-function norm closure; neither pointwise zero trace nor a Lipschitz H2 theorem is imported.

Authoritative external passages checked:

- [Hunter, PDE notes](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), section 4.12, Theorem 4.30, printed pp. 114–116, PDF pp. 120–122: bounded C2 boundary, L2 forcing, zero-boundary weak solution, H2 estimate retaining the L2 solution term. The identity-matrix application meets these premises.
- [Guermond, Chapter 26](https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf), section 26.3, Lemmas 26.12–26.13, printed pp. 28–30, PDF pp. 6–8: matching restricted form/data yield orthogonality; coercivity gives the boundedness/coercivity quasi-optimality factor; Hermitian symmetry cancels the two cross terms. The local proof treats zero error separately.
- [Richter, finite elements notes](https://numerics.ovgu.de/teaching/numpde/skript.pdf), Lemma 3.28, printed pp. 78–79, and section 3.4.1, Lemmas 3.34 and 3.36, printed pp. 83–85: global interpolation, reversed-slot adjoint, and duality with regularity/interpolation hypotheses. The global interpolation proof is assigned as an exercise there; the current item supplies its own proof. Local complex conventions and the conditional fractional form were checked directly rather than inferred from the real integer-order source.

## Consumer dispositions

The reader's polynomial-space wording makes explicit the pre-existing polynomial premise. Searching current items and pages found the owned rate corollary, the A-page summary, and three outside item consumers: cor-parabolic-semidiscrete-spatial-error-rates, thm-p0-control-fem-o-h-error and thm-variational-fem-control-o-h2-error. Their actual uses were inspected. The parabolic item assumes the supplier's FE setting, the variational-control result uses conforming P1 and explicit matching approximation estimates, and the P0-control theorem carries a redundant dependency while assuming its gradient estimate explicitly. None requires surgical source repair or further-hop propagation. The owned rate's stale F1 quotation was refreshed. The batch-24 alert's two quotation refreshes are completed. Updated the owned-consumer record in briefs/tasks/frontier-dependency-ledger.md; existing stable IDs and proposed withdrawals are preserved.

## Closed defects and exact decisions

Exactly two decisions are owed and supplied, both route touched and verdict amended_repair, with repair_confidence 1:

- touched:38:cex-reentrant-corner-poisson-solution-not-h2 -> nod-b38-3a-corner-uniqueness, closed fixed/nonfatal.
- touched:38:cor-shape-regular-affine-fe-primal-energy-approximation -> nod-b38-3a-facet-nullity, closed fixed/nonfatal.

Both rows are appended at caught_at_stage 3a-adjudicate. These are elementary proof closures, not false claims. The manifest dependency reconciliation and quote refreshes are metadata maintenance, not additional mathematical defects. No reader/refuter finding obligations were invented. Both item files remain byte-for-byte reader-post; only full carriers are amended through manifest/contract changes. No published carrier was edited and no defective published supplier was identified.

## Local checks and handoff

All final checks below returned exit 0:

- node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-38.proof-contracts.json: 12 items routed; 10 HIGH/CRITICAL reviews subsequently recorded specifically and completely in dependency order.
- The same command with --require-reviewed: 0 errors, 12 items routed.
- node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-38.proof-contracts.json --strict: 0 errors, 0 warnings, 12/12 checked. Its initial stale downstream quotation diagnostic was corrected before this successful pass.
- node tools/tsx-run.mjs tools/precheck.mts items/cex-reentrant-corner-poisson-solution-not-h2.md items/cor-shape-regular-affine-fe-primal-energy-approximation.md: 2 checked, 0 failing. An initial direct Node invocation of the .mts help command lacked the TS loader; the repository wrapper was then used successfully.
- node tools/rendercheck.mjs items/cex-reentrant-corner-poisson-solution-not-h2.md items/cor-shape-regular-affine-fe-primal-energy-approximation.md: 2 files, no errors.
- node tools/proof-layout.mjs items/cex-reentrant-corner-poisson-solution-not-h2.md items/cor-shape-regular-affine-fe-primal-energy-approximation.md: 2 items, 12 steps, 0 defects. This was one batched layout call after final metadata edits; there were no item-source edits or formatter runs.
- node tools/defect-ledger.mjs append --file /tmp/nod-b38-3a-defects.json: 2 closed rows appended and generated view refreshed.

No mathematical escalation remains. Historical Step-1 readiness records still retain their pre-reader dependencies/hashes; they are owner/engine records, left untouched and explicitly handed off for ordinary reconciliation before any later check that consumes them. This report does not claim current readiness, a gate battery, independent judging, decision stamping, publication or certification. The engine owns those operations.

Final local consistency inspection passed: exactly the two scope-owed decisions, all ten required complete risk reviews, both source hashes identical to reader-post, both manifest dependency lists identical to current sources, and both referenced defect rows closed fixed at 3a-adjudicate. No decision hashes were stamped.
