# Batch 28 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-28`.
Scope: four touched obligations, no reader/refuter/page obligations. Both independent reports have empty finding arrays. Review follows the generated dependency order. No judging, stamping or engine transitions are performed.

## Level 0: recurrence lemma

`lem-discrete-one-step-error-recurrence-bound`: current statement allows real p>=1 and h=T/N>0. Steps 1.1–2.1 correctly unroll the nonnegative recurrence, telescope the finite geometric sum for L>0, compare (1+Lh)^n with exp(LT), and separately sum L=0. Checked n=0 (empty sum), N=1, endpoints, zero forcing and zero initial error. Read all eleven direct supplier statements/definitions, including positive-base real powers and their addition law. The reader clarification preserves the real-order claim and is retained; final disposition is amended_repair for the additional bibliography correction and manifest/contract reconciliation. Risk review is complete in the owning contract. No choice is used.

The sections below record the completed remaining reviews.

## Level 0: continuous-flow density

`thm-continuous-flow-log-density-equation`: reviewed all four steps and fifteen direct supplier statements/definitions. Recentring the common flow at s=T/2 meets the symmetric compact-interval hypothesis of `thm-c1-dependence-of-solutions-on-initial-data`; its variational-equation proof was also opened. Slice inverses imply nonsingularity; IVT and det J0=1 imply positivity. The zero-extended density is Borel and change of variables identifies the pushforward (the same argument also applies to Lebesgue measurable sets). Leibniz differentiation, column alternation, and the explicit trace index calculation prove the log derivative without differentiating p0. Finite first-order expansions handle both endpoints. Countable Choice occurs only in the change-of-variables supplier. No defect found; risk review complete. Sources opened: Chen et al., Appendix A; Papamakarios et al., §4.1 (source passages checked as detailed below).

## Level 1: state error

`thm-global-error-from-one-step-defect-and-stability`: both proof steps close using the actual fiberwise stability hypothesis and triangle inequality. Both starting states are in the specified fiber; the added/subtracted exact-start output yields exactly the reviewed recurrence. Constants are uniform in N and n, and confinement is assumed rather than proved. The zero-stability branch and both grid endpoints are retained. All six direct supplier statements/definitions were checked. The source bytes are identical in pre/post snapshots; only the contract recurrence quotation changed. Verdict: reviewed_no_defect, audit_enrichment. Risk review complete; no AC use.

## Level 2: separate quadrature error

`thm-divergence-integral-error-with-separate-quadrature`: the two steps split the scalar increment at the exact starting state and sum n identical nonnegative error bounds. Nh=T gives the displayed state and quadrature terms. Real r>=0 is legitimate for h>0, including r=0; the state order p and quadrature order m are positive integers. The exact path is continuous because it is the ODE solution in the assumed state-method theorem. Checked n=0, N=1, endpoints, zero sensitivity, zero quadrature defect, and exact states. Both direct supplier statements were already checked. Reader real-power clarification accepted; risk review complete. The theorem remains choice-free and independent of density interpretation.

## Level 3: log-density corollary

`cor-global-log-density-error-from-state-and-quadrature`: reviewed both steps and all four direct supplier statements. The flow result and continuous divergence give the exact scalar IVP; the Volterra theorem applies and identifies each I_n with the true log-density increment. The separate quadrature theorem then applies without changing orders, initial value, or constants. Positive p0 and determinant make the logarithm defined. All grid endpoints and r=0 remain covered. Countable Choice is inherited only for measure identification. Verdict: reviewed_no_defect, audit_enrichment (reader changed only the contract source quotation). Risk review complete.

## Level 4: Euler

`thm-euler-global-state-and-log-density-error`: all five steps and eleven direct supplier statements checked. Convex open fibers allow both state and q Lipschitz estimates. Chain differentiation and integration of s on [0,h] give C_x=(M_f+L_f B_f)/2 and D_q=(M_q+L_q B_f)/2. C² suffices for q to be C¹. Applying the reviewed results with p=m=r=1 proves the stated constants, including L_f=0, N=1, and zero field. Tube confinement remains an explicit assumption. No mathematical defect found; risk review complete. The linked lecture notes identify their author as Mark Embree (title page, PDF p. 2); the incorrect Tobias attribution in four owned item/manifest source titles will be corrected as bibliography metadata.

## Level 5: linear-flow example

`ex-euler-linear-flow-exact-log-density-update`: checked both steps and fourteen direct suppliers. The explicit flow and inverse are correct. MVT gives 1+h<exp(h); integer-power monotonicity proves the terminal state error is strictly positive for every N>=1. The displayed K and U meet the Euler theorem hypotheses. Constant divergence integrates exactly to -Nh=-1 with exact scalar initialization. The density comparison is at the exact trajectory endpoint; no discrete pushforward-density claim is made. Countable Choice remains confined to the density interpretation. Risk review complete; no defect.

## Level 5: exact states, inexact quadrature

`ex-exact-state-with-inexact-log-density-quadrature`: checked both steps and twelve direct suppliers. The explicit flow exp(t²/2)x0 and its inverse solve the ODE and keep the zero trajectory fixed. Euler also remains zero; the displayed K,U satisfy the C² tube requirements. The determinant at t=1 gives log-density change -1/2. The finite sum is proved by induction, including N=1; left quadrature gives -1/2+h/2, midpoint gives -1/2. The integrand -t has zero state sensitivity and zero midpoint defect. Risk review complete; no defect.

## Final dispositions and changes

Exactly four decisions are written in the task-named decisions file: recurrence lemma, state-error theorem, and separate-quadrature theorem are `amended_repair`; the log-density corollary is `reviewed_no_defect` with `change_kind: audit_enrichment` and no defect IDs. Completed repairs carry `repair_confidence: 1`. The Euler risk-only bibliography correction is recorded in its risk_review and does not add a routed obligation.

At entry every item matched its immutable reader-post raw hash. The two changed item preimages were recovered from `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/` and matched the immutable pre hashes exactly before comparison. Their complete diffs confirm the reader's reported typing clarifications and proof support; there is no unknown historical delta. The state-error theorem and corollary item hashes are unchanged between snapshots; their reader changes affect contract quotations only. All existing citation quotations were checked against the current named source section; none was stale. Alpha refreshed the recurrence step 2.1 derivation to mirror its actual F8 use.

Alpha's item edits only replace the incorrect source author Tobias Embree with Mark Embree in the recurrence lemma, state-error theorem, divergence theorem and Euler theorem. The linked notes identify Mark Embree on PDF p. 2. Their mathematical bodies remain exactly the reader-post bodies. The manifest now names the same author, includes the three added recurrence dependencies and the added divergence real-power dependency, and explicitly distinguishes real recurrence/initial exponents from positive integer state/quadrature orders. Provenance classes remain accurate; no material proof rewrite or judge record invalidation occurred.

Six closed ledger rows were appended using `tools/defect-ledger.mjs append`: `nod-b28-real-power-domain`, `nod-b28-initial-power-domain`, and four `nod-b28-embree-author-<item-id>` rows for the four source-title corrections. The exponent omissions are nonfatal notation/prerequisite-explication defects, not counterexamples to the bounds. The bibliography mistakes are nonfatal citation-attribution defects. All are owned at `3a-adjudicate`, fixed with confidence 1, and referenced by the decisions or Euler risk disposition. The append tool refreshed the generated ledger view. Mechanical checks receive no defect rows.

## Consumer checks and scope

The recurrence clarification's direct dependency/reference consumers were discovered from the actual current item files. Checked their Statements, supplier citations and proof applications: `thm-sdc-residual-tolerance-preserves-order` (integer p>=1), `thm-frozen-slow-euler-global-first-order-error` (p=1), `thm-neutral-delay-euler-first-order-error` (p=1), `thm-age-structured-renewal-smooth-first-order-convergence` (p=1), `thm-global-error-from-one-step-defect-and-stability` (the stated method order), `thm-sdc-finite-sweeps-raise-order` (p=min(M,k+1)>=1), `thm-implicit-rk-global-order-with-stage-residual-control` (p=1,2,3), `thm-index-one-dae-bdf2-second-order-with-residuals` (p=2 on the reindexed horizon), `thm-ars222-additive-order-two-and-tolerance` (p=2), `thm-age-cohort-quadrature-weak-consistency` (p=1 on the aligned horizon, N=0 treated separately), `thm-rk4-global-error-for-regularized-vortex-particles` (p=4), `cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition` (p=2), `thm-index-one-dae-backward-euler-first-order-with-residuals` (p=1), `lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order` (integer p>=1, reversed indices for adjoints), and `thm-imex-euler-algebraic-residual-budget` (p=1). Each retains positive grid size and the same bound; the clarification imposes no unmet hypothesis on these uses. This is a focused interface-impact check, not a full review of outside consumers. No outside item was edited or required a repair.

The divergence theorem's sole direct consumer is `cor-global-log-density-error-from-state-and-quadrature`, reviewed above; its inherited orders match. No consumer Statement or Definition changes, further propagation or withdrawal is needed. The owned cross-batch definition use remains sound: `def-one-step-ode-method-local-defect-order-and-stability` defines positive integer local order, exact-start defect and the precise 1+Lh step bound used in the owned theorem. Current dependency records and stable IDs are preserved. There are no published defects, published edits or owner escalations from this review.

## Literature and limitations

Read [Embree, Lecture Notes on Numerical Analysis](https://personal.math.vt.edu/embree/math5466/nanotes.pdf), Lecture 34 §5.3, PDF pp. 191–193 (zero-based pages 190–192): error subtraction, Lipschitz recurrence, geometric sum, and fixed-horizon convergence. The source uses derivative-scaled truncation error; the library uses the one-step defect, larger by a factor h. The library independently supplies initial-error and L=0 branches.

Read [Chen et al., Neural Ordinary Differential Equations](https://arxiv.org/pdf/1806.07366), Appendix A, PDF p. 14 (zero-based page 13), equations (14)–(27), including its stated regularity assumptions, determinant argument and final minus-trace identity. Read [Papamakarios et al., Normalizing Flows for Probabilistic Modeling and Inference](https://jmlr.org/papers/volume22/19-1028/19-1028.pdf), §4.1, equations (75)–(81), PDF pp. 31–32, and §4.2.1, equations (82)–(85), PDF pp. 32–33. These support the flow/divergence and numerical-integration context; the local proofs explicitly assume sufficient C¹/C² regularity and prove the claims using local suppliers. They do not rely on the literature's looser regularity wording or its limit manipulations.

The [Hairer–Wanner Chapter III URL](https://www.unige.ch/~hairer/poly/chap3.pdf) timed out in this session. No successful reading of it is claimed; Embree and the full local arguments supplied the relevant numerical source evidence. Direct cited library statements/definitions were read for every owned item; external published suppliers were not subjected to a new whole-proof audit. The common-interval flow-dependence proof was additionally opened for its precise variational-equation use.

## Local checks

- Initial risk routing: 0 errors; all eight items HIGH or CRITICAL.
- Strict proof contracts: 8/8 checked, 0 errors, 0 warnings.
- Required reviewed-risk check: all eight complete, 0 errors.
- Precheck: all four changed item files pass, 0 failures.
- Rendercheck: all four changed files pass real KaTeX and renderer YAML parsing.
- Reflow: all four changed item files unchanged.

Final batched proof-layout and output-integrity results are recorded below. No judge, stamp, dispatch, full gate battery, stage transition or publication was initiated.

Final batched `node tools/proof-layout.mjs` over the four changed item paths: **4 items, 11 steps, 0 defects** (exit 0), after the final edits and unchanged reflow. Output-integrity assertions passed: exactly the four scoped touched obligations, no duplicate/extra decisions, all referenced defects closed at 3a-adjudicate, all eight risk reviews complete, and every current manifest dependency array equals the item deps. Reversing only the author-name correction reproduces every reader-post item raw hash; both recovered historical item preimages match their pre hashes. No item was edited after the final layout check.

No unresolved mathematical blocker remains in batch 28. Literature-fetch and external-proof-audit limits are stated above. The engine retains ownership of decision hash stamping and subsequent gate batteries.
