# Batch 36 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-36`.

Scope: two touched obligations; no reader/refuter findings or page obligations. Review follows the generated dependency order. No agents, judgments, stamps, or gate cycles are initiated.

## Level 2 completed

`alg-pe04-first-order-upwind-forward-euler`: **accepted_repair**, confidence 1. The reader explicitly types the input/output and returns `CFL-inadmissible` for any local Courant number above one. The finite, explicit procedure terminates, divides only by nonzero simplex volumes, and retains the exact admissible update, including lambda=1, zero transport and coincident periodic neighbors. The failure branch is a specification completion; no new numerical correctness property is asserted. The current raw SHA256 equals reader-post `afa4a21de5c855d9d1d6f79470636c388440f7f26e4428d89428feb6126bbba9`; pre table records `a9d3df5839533f57dc15f102af261f93831ace588d5af4c117cc9f89be69f234`. The DG supplier and mesh/space definitions were read. Cockburn, DG-1 sections 3.3-3.4, printed 161-163, supports the shared-flux degree-zero specialization.

Both actual direct item consumers, `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy` and `thm-pe04-ssprk33-first-order-upwind-entropy-preservation`, assume the admissible CFL branch. Their use of the update is preserved; no consumer repair is needed. The containing page is the only other library reference.

`thm-pe04-upwind-dg-l2-energy-stability`: complete risk review recorded in the owned contract after the initial risk report. Checked all four steps, exact Green/FTC and mesh-orientation suppliers, dimension and choice branches, both normal-velocity signs, zero velocity, single cell, polynomial degree zero, and inflow square completion. No defect found. The resulting identity and nonincrease for zero inflow are valid conditional semidiscrete statements.

## Level 3 completed

`def-pe04-flux-differencing-sbp-systems`: all prerequisites and complete Definition checked. The interface flux is conservative under simultaneous trace/normal reversal and contracts to `[psi_n]-alpha||[v]||²/2`. SBP data and entropy-conservative flux existence are hypotheses. Literal nodal selection makes the SBP boundary matrix diagonal; no projection/nonlinear-commutation assumption is hidden. Non-strict convexity is sufficient, since entropy variables need not be inverted. No choice is used.

`thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy`: all three steps checked. The constant-field Green identity balances incoming and outgoing coefficients, yielding a convex combination even at lambda=1. Weighted coefficient pairing proves finite Jensen decay; flux pairing proves conservation. Zero velocity and self-neighbors are harmless. Countable Choice is explicitly inherited from Green. Complete risk reviews recorded before proceeding higher.

## Level 4: error bound completed

`thm-pe04-dg-smooth-solution-l2-error-bound`: all eight steps and exact cited supplier statements checked. Lebesgue finite measure and full support yield positive definite polynomial Gram matrices, hence unique polynomial traces. Uniform difference quotients on compact cell closures justify differentiating the projection moments. Spatial orthogonality includes p=0. Direct subtraction gives interior residual +b eta_up [theta], outflow -b eta theta, and no inflow residual; Young absorption gives exactly the factor 2 in the bound. No rate is asserted. The AC accounting now explicitly includes step 1.3 (ball finiteness, Borel measurability and measure monotonicity). Complete risk review recorded.

Additional contract reconciliation: the forward-Euler empty-mesh row incorrectly excluded an empty supplied mesh and referred to an unperformed maximum. The actual procedure returns the empty vector without executing a division or failing a cell test. Its contract now records this harmless branch. The periodic theorem single-element row now distinguishes state-flux cancellation from entropy dissipation. Prior owner hash-bound reviews remain historical and have not been rebound.

## Level 4: nonlinear flux theorem completed

`thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability`: **amended_repair**, confidence 1. Reader-post raw SHA256 `e49a95262bbaf236e3160bfd1ba43f54f3535ea8760d7e9ff2f2eaabc04250d2` matched the current file before my edit; pre table records `0c2fa986c14164da5455de66d69aa2b84a9fbf02ea5ac2a967b68ed88f4d3084`. The reader's explicit periodic pairing, weights, normals and shared alpha are necessary and sound. A periodic pair contributes `-alpha||[v]||²/2` to the entropy rate, not zero, while its conservative state flux cancels. For a concrete scalar test, eta(U)=U²/2, linear flux F_n(U)=bU and EC flux b(U_L+U_R)/2 give a pair entropy contribution -alpha/2 at U_L=0, U_R=1. Thus the original claimed entropy cancellation fails at positive alpha and unequal traces; the corrected identity handles it.

In step 1.1 the argument fixes a direction ell but prematurely wrote the full normal potential/flux in two equalities. Replaced those expressions by n_(K,F,ell) psi_ell and n_(K,F,ell) vᵀF_ell, respectively; only the subsequent sum over directions gives psi_n and F_n. This is a local nonfatal computation correction, preserving every hypothesis and conclusion. The source locator now identifies Tadmor section 5.1, printed 485, for forward-time production (rather than sections 4.1-4.3). Contract derivation and boundary evidence and both touched manifest summaries were synchronized. No judge record existed to invalidate.

All four current proof steps, exact entropy/SBP definitions and facet supplier were checked. Diagonal nodal face selection is essential to the boundary contraction; Q1=0 and Q+Qᵀ=B_ell produce the potential term. Periodic pairs are counted once as interfaces, physical B only on unpaired physical boundaries. Zero alpha, equal states, one-cell pairs and B=0 are valid. The only actual reference consumer is the containing page; it already states the conditional semidiscrete conclusion accurately and needs no repair. No external consumer escalation is needed. Complete risk review recorded before SSPRK.

## Level 4: SSPRK completed

`thm-pe04-ssprk33-first-order-upwind-entropy-preservation`: all three steps, exact SSPRK algorithm and convex-transfer supplier, and convexity definitions checked. The full finite cell-state space is invariant under this globally defined linear spatial operator. The same CFL applies independently of state at every stage, so all forward-Euler calls are admitted. Positive weights make the summed entropy convex, and the displayed 3/4,1/4 and 1/3,2/3 mixtures preserve the previously proved forward-Euler bound. No smoothness of eta is needed. The empty-vector case is directly vacuous. Countable Choice is inherited from the geometric forward-Euler supplier only. Complete risk review recorded; no defect found.

## Sources and limits of review

The current authored proofs and exact directly used supplier Statements/Definitions were reviewed, including the local Gram-matrix projection argument and the published convex-transfer proof. No wholesale audit of the transitive foundational library is claimed.

Primary PDFs were opened through the web; the matching local PDF text caches were used for bounded passage reading:

- [Cockburn, DG-1](https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf), sections 3.3-3.4, printed 161-163; section 3.6, printed 165-166; section 3.16 stability calculation, printed 189-193. Cache `/tmp/pe04-cockburn-DG-1.txt`. These support the weak form, upwind/degree-zero specialization and test-with-solution framework. The present multidimensional boundary algebra and exact residual estimate were checked locally.
- [Cockburn and Shu, RKDG methods](https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf), section 1.1, printed 174-176, and section 2.2/Table 2.1, printed 187-190. Cache `/tmp/pe04-cockburn-shu-rkdg-review.txt`. Checked the explicit convex stage composition; the actual entropy functional transfer is also proved locally and in the published supplier.
- [Fisher and Carpenter, NASA/TM-2013-217971](https://ntrs.nasa.gov/api/citations/20130011028/downloads/20130011028.pdf), section 2.3.2 equation (2.27), section 3.1 equation (3.2), and section 3.2 equations (3.4)-(3.8), (3.13), printed 8 and 13-16. Cache `/tmp/pe04-fisher-carpenter-2013.txt`. Checked diagonal norm/SBP and entropy contraction; the affine multidirectional extension is supplied by the current local algebra.
- [Tadmor, Entropy Stable Schemes](https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf), sections 4.1-4.2 equations (25)-(28), printed 477-478, and section 5.1, printed 485. Cache `/tmp/pe04-tadmor-entropy-handbook.txt`. Checked entropy potential, jump identity, dissipative flux and separate positive forward-time production. No invertibility of entropy variables is needed locally.

## Records and checks

Exactly two decisions are in the task-named decisions JSON. Five closed rows were appended through the serialized defect-ledger tool: `na71-b36-3a-D001` (algorithm branch completion, polish), `D002` (empty-mesh contract disposition, nonfatal), `D003` (periodic entropy cancellation, fatal), `D004` (fixed-direction computation, nonfatal), and `D005` (source locator, nonfatal). Each is owned at `3a-adjudicate`, disposition `fixed`, confidence 1, and referenced by its touched decision. The original periodic defect is supported by the reader report and the explicit contraction counterexample; this report does not claim to possess an archived raw pre-reader item or to infer a full byte diff from the pre hash table alone. The normal task-requested pre/post hash comparison and independent current-proof review underpin the repair decisions.

The owned cross-batch ledger input was maintained with exact newly checked FTC and measure-supplier uses; `node tools/frontier-dependency-ledger.mjs refresh --run numerical-analysis-remaining-71-2026-10-17` succeeded. No defective published supplier or published consumer was identified. Published content remains read-only; no published-ledger edit or lock was needed.

Local validation (no judge or engine gate battery):

- Initial risk report: 18 items, six HIGH/CRITICAL routed items, no mechanical errors. All six complete, specific risk reviews were recorded in dependency order; final `--require-reviewed` succeeds.
- Reflow of the amended theorem: unchanged.
- Precheck over both touched item paths: one proof checked, zero failing; the algorithm has no proof section.
- Rendercheck over both touched item paths: two files pass, including real KaTeX and frontmatter parsing.
- Strict proof-contract check over the owned batch: initially found two stale algorithm source quotations (forward-Euler F1 and SSPRK F6). Refreshed both quotations to the exact current Definition. Rerun: 18/18 items checked, zero errors. One citation-density warning remains on error-proof step 1.3; its seven cited facts each support the finiteness/measurability argument, so no mathematical change is warranted.
- Final batched layout command: `node tools/proof-layout.mjs items/alg-pe04-first-order-upwind-forward-euler.md items/thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability.md`: two items, four steps, zero defects. No item edit or formatter followed it.

Current amended theorem raw SHA256: `ebbbe38da75b0322900e45ce859469c615ba07b21cb42a34955bd66f863995b0`.

Mathematical blockers: none identified. Existing owner boundary-review hash records retain their prior hashes and are historical; this worker did not rebind or certify them. The engine/owner still owns current-carrier stamping, hash reconciliation and the gate battery.
