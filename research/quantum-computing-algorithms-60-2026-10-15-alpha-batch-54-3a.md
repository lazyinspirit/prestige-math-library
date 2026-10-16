# Batch 54 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-54`. Review complete for the routed obligations and required risks.

Read canonical instructions, scope, reader report, refuter artifact and pre/post hash inventories. All 19 touched current item raw hashes equal their reader-post hashes at entry; six touched routes change only contracts. The refuter routes one centroid complexity finding. No page obligation is owed.

## Completed item evidence

- `lem-qa-30-hermitian-product-trace-real`: Conjugate transpose and product reversal turn conjugate trace into trace(BA); cyclicity gives reality. Empty n=0 trace is explicitly zero. Exact dependency statements cover compatible finite matrices.

- `lem-qa-30-positive-product-trace-nonnegative`: The nonnegative square root R gives RQR with nonnegative quadratic form; cyclicity identifies its trace with tr(PQ). Empty dimension gives the empty sum. No commutativity or choice is assumed.

- `lem-qa-30-normalized-hermitian-observable-effects`: Read both repaired steps. Adjoint/conjugate symmetry gives real eigenvalues; operator norm bounds them in [-1,1]. Both complements are nonnegative, and finite POVM weights sum to one with signed mean tr(M rho). Nonzero space and density trace-one hypotheses match suppliers.

- `def-qa-30-mmw-game`: Finite Hermitian sums are normal with real eigenvalues derived from the adjoint identity. Positive scalar exponentials make the trace denominator strictly positive for n>=1, including t=1. Scaling gives density states and Hermitian-product trace gives real cost. The Definition itself is unchanged by the reader.

- `lem-qa-30-normalized-sdp-strong-duality`: Reviewed all eight steps. n=0 is treated separately with vacuous positive definiteness; for n>=1 the trace bound gives compactness. q=(m+1,1,...) gives slack >=I; bounded witnesses in a compact set prove cone-image closure without choosing a sequence. Separation coefficient alpha>0 uses primal nonemptiness; self-duality yields the dual vector and equality. Dual attainment is only a separate bounded-witness promise.

- `lem-qa-30-exp-quadratic-bound`: Factorial induction bounds the positive series tail by 11/12; the alternating negative tail pairs with nonpositive terms. Scalar bound transfers along real Hermitian eigenvalues in [-1,1]. eta endpoints and u=0 are covered; empty matrices satisfy the operator assertion vacuously.

- `thm-qa-30-mmw-regret-bound`: Golden-Thompson is applied to Hermitian -eta S and -eta M with n>=1. Positive-product trace compares the scalar spectral upper bound; m lies in [-1,1], ensuring positive factors. Exponential series establishes 1+s<=exp(s) on the actual s>=-1/4 range. Iteration and the minimum eigenvalue term give the regret bound, including n=1 and T=1.

Sources: current local dependency statements, checked against the corresponding contract citation evidence; reader and refuter reports are evidence, not acceptance. All routed obligations, required current risk reviews, consumer checks and local record repairs are completed below.

- `lem-qa-30-estimated-polytope-threshold-soundness`: The discrepancy bound is theta(||y||_1+1), giving both inclusions and the equality endpoint alpha=v_D. The bounded attained dual proves nonemptiness for every state. The explicit eta,T,exact-state hypotheses match the MMW dual-feasibility supplier. Conditional predictable budgets imply the adaptive union bound without independence.

- `def-qa-30-variational-quantum-algorithm`: Unitary conjugation preserves positivity and trace one; Hermitian product trace is real before application of each real f_k. Empty parameter domains or finite sums create no existence assertion. Preparation, measurements and optimizer costs are input data; no convergence is inferred.

- `def-qa-30-qaoa-circuit-and-objective`: Each edge eigenvalue is the indicator of unequal endpoint bits. The declared right-to-left cost/mixer order and finite Born law give expected feasible cut score. Empty edge or vertex sets give zero cost and the unique empty cut, consistent with the statement.

- `def-qa-30-vqe-rayleigh-objective`: Nonzero finite dimension gives a nonempty real spectrum. Unitary ansatz states have squared eigenbasis coefficients summing to one; energy is a real convex combination and is bounded below by the least eigenvalue. No ansatz coverage or optimizer existence is promised.

- `thm-qa-30-parameter-shift-rule`: A single parameter occurrence and P^2=I give cos(theta/2)I-i sin(theta/2)P, including zero spectral projections. Expanding a linear expectation yields a+b cos(theta)+c sin(theta). Differentiation and quarter-turn formulas prove the centered shift; nonlinear f_k terms are excluded by the linear-expectation qualification.

- `alg-qa-30-capped-generalized-minimum`: Finite score comparisons, bounded precharged stages, five rejection attempts and rational confidence loop are explicit. K=1 uses zero bits. The cap is enforced before each stage; least R with 8^-R<=delta terminates by the stated elementary bound. All sampler inverse/reflection costs remain charged.

- `thm-qa-30-qaoa-expectation-bound`: The finite computational-basis law gives a convex combination of feasible cut scores. Minimum and maximum exist even for the empty graph, whose score is zero. The result supplies no ratio or optimization guarantee.

- `lem-qa-30-capamplify-state-output-bound`: Checked the two-dimensional reflection product and complex-coordinate recurrence, finite geometric average, rejection acceptance >=1/2 and per-round success >=1/16. p=1 and p>1/2 use direct flags. The rational cap terminates and has logarithmic order. Crucially the supplied flag-only instrument leaves payload unmeasured; every successful branch is the same good ray. p>=p_low>0 implies p_low<=1.

- `ex-qa-30-vqe-and-qaoa-objectives`: The four eigenvalues are 3,-1,1,-3; product Ry expectations yield cos(theta)+2cos(phi). For the declared one-edge cost phase and Rx mixer, even amplitudes cancel and odd amplitudes are -i/sqrt(2), giving probabilities 0,1/2,1/2,0 and expected cut one.

- `def-qa-30-sdp-reference-state-access`: For d=2^q, tensor Hadamards and matching CNOTs give the normalized diagonal sum with q calls of each, including q=0,d=1. Other dimensions require supplied finite access and cost rather than unaccounted padding. No construction for arbitrary encoded d is claimed.

- `thm-qa-30-generalized-minimum-guarantee`: Reviewed all six steps: strict rank decreases, conditioned improvements retain sampler law, and dyadic bands have expected at most two visits. The geometric stage survival and charge estimates imply the generous finite cap via Markov; repeated rational-confidence trials give failure <=delta. Per-index cleaning is an analysis-only block unitary with norm error <=2sqrt(nu); telescoping Q calls transfers nondomination, with uniform index mass 1/m. p=0,N=1 and tied score atoms are covered.

- `lem-qa-30-finite-grid-quantum-subgradient`: Checked d<=n geometry, tau<=r1, Riemann integrability of Lipschitz second differences before Fubini, d=1 separately, finite-cell perturbation and Markov bound. Convex hull of +/-tau e_i gives affine error <=delta. The Fourier tail telescopes to <=1/6; M>=32 avoids signed wrap at error four. Phase plus value errors are <=1/21 with additional 1/1000 implementation error. Independent runs at fixed z and coordinate medians give the stated failure; 1+168pi<529 gives the final constants.

- `lem-qa-30-sdp-trace-mean-ratio-identity`: Vectorization gives tr(X)/d without a transpose error. The composite compression is Fg/B; cyclicity yields tr(e^-G(I+M/2))/(4dB^2). Positive Hermitian exponential makes p0>0. Taking the ratio cancels d and B and gives the asserted half-mean. Existence of the two supplied blocks is a hypothesis.

- `lem-qa-30-two-sparse-estimated-oracle`: Checked all alpha,c-prime sign branches, rational scale recovery and zero-vector branch. The cone angle order is implemented with determinants, not numerical trigonometry. Exterior extremes straddling pi give a rational feasible segment, including antipodal equality. Vertical interpolation supplies a compatible good table only existentially; duplicate selected indices merge without increasing support. Nondomination from each coherent minimum suffices for sound EMPTY; no independent table of all estimates or unproved timeout is assumed.


- `lem-qa-30-centroid-weak-separation-optimization`: Confirmed refuter:54:1 at zeta=R and along zeta increasing to R: B>=6 and T>=1, whereas log(R/zeta) vanishes. Repaired the statement to n log(nR/s)(1+log(R/zeta)), matching step 4.1. Reviewed the full centroid cap argument: Brunn-Minkowski plus Jensen gives both centroid halfspace masses >=1/e; slice-density bound n/(2s) handles rounded cuts. Explicit finite rational triangulation computes centroids. The s-ball is retained, forcing termination within T. The width recursion and adaptive union bound give the output and failure guarantee. n=1 slices, rational normals and countable choice are explicit. Sole theorem consumer repeats the bad expression only in proof step 5.1 and is surgically corrected; its Statement uses BT and polylog order and remains sound. The A-page prose makes no conflicting exact logarithm claim.

- `lem-qa-30-membership-height-geometry`: Height sections are compact; convexity and the line-extension argument give the stated Lipschitz bound. The repaired empty erosion interval implies H-r/2<2H epsilon/r, establishing the missing OUT case. Nonempty erosion, epsilon>=r/2 and boundary transverse points are treated. Unique nearest points define the normal sequence without choice; a convergent subsequence gives a nonvertical supporting normal. Binary-search invariants yield a delta-accurate upper endpoint and transcript uncomputation supplies coherent access. The final inward separator uses ||(-v,1)||>=1 and also covers low/high query heights.


- `thm-qa-30-quantum-membership-separation-cost`: Reviewed all seven steps and OP7. The smaller boundary oracle remains valid at enlarged working tolerance; n=1 uses a signed interval separator and zero must be IN. For n>=2 the transverse cube fits the height domain; substituting delta,r1,L gives eta/3 and eta/(2R). The 58^9 numerical slack absorbs address/value rounding; the final negated normal has the correct outward inequality. Query counts include inverse uncomputation. Optimization uses actual B,T and conditional per-call confidence. Repaired proof step 5.1 to use (1+log(R/zeta)); its unchanged Statement already uses BT and logarithmic suppression, so no further consumer hop is required.

- `thm-qa-30-smooth-fourier-approximation`: Checked all six steps: normalized arcsine coefficients are nonnegative with sum one; convolution truncation cannot feed lower degrees. The Taylor, degree and fair-binomial frequency tails sum below e/8. M^2>=xL follows with nu in (0,1). Sine expansions have coefficient l1 norm one and collisions only reduce it. Rounding and common dilution give the certified LCU norm, and binary frequencies have maximum time O(Delta^-1 log(B/e)). The Gibbs and observable coefficient budgets in Remarks fit their stated intervals.

- `lem-qa-30-spectral-minimum-shift`: Reviewed all eleven steps and current spectral/QPE suppliers. The actual dyadic M yields M eta>=4; conditional repeated QPE at one preserved spectral index gives failure <nu/2 before synthesis. Rational decoder errors add <=1/16 and clipping cannot worsen them. Retained reference sectors give uniform index mass even for degeneracy; cleaning supplies the selected minimum bound without implementing a projector. Frozen shift has minimum in [3/2,7/4], hence [1,2], also at K=0,d=1. QPE physical times sum to O(1); repeated-base access is separately O(K+1). Confidence rationality matches the minimum procedure.

- `alg-qa-30-sdp-gibbs-purification`: The decoded Hermitian matrix and target share one measured shift; operator perturbation <=delta/2 follows from the positive-exponential Duhamel argument proved in the resource supplier. OP8 retains common normalization and complete unitary/inverse circuits. Step 3 returns an unmeasured sampler; step 4 explicitly measures only the supplied success flag and returns FAIL at the rational cap. eta=0 returns the supplied reference. Normalized output uses a proved 1/(64d) floor with separately budgeted shift failure.

- `thm-qa-30-sdp-gibbs-state-error-cost`: Reverse triangle gives implemented branch norm >=sqrt(pG)/2 and normalization error <=2zeta/sqrt(pG), including zeta=0 and the equality endpoint. Rational density supplies a certified floor as input, without an exact trace oracle. The exponential-series estimate e<3 and B<=17/16 give pG>1/(16d); e<=eps/(10000sqrt(d)) implies actual probability >1/(64d) and the desired state error. CapAmplify applies to the supplied flag instrument; confidence and all inverses/preparation prices remain explicit.

- `thm-qa-30-flagged-trace-error-and-cost`: Reviewed all ten steps. Distinct work registers make joint success the product compression, yielding exact common-normalization cancellation without commuting A and G. exp(2)<8 and B<=17/16 establish uniform probability floors; 2e+e^2 vector perturbation implies <=15e probability error. Cross multiplication bounds the actual ratio, and theta/36 relative estimates plus rounding remain within theta. Orthogonal retained histories and padded caps supply the full coherent inverse; per-index accuracy is not substituted for the stronger minimum-cleaning hypothesis. The query bound includes every reference preparation and separately charges arithmetic gates.

- `lem-qa-30-mmw-to-sdp-feasibility`: The true trace residual >=-2w theta and norm <=w give bounded losses. With eta<=e/(6wR), ln(n)/(eta T)<=eta and w/r<=2, the unshifted average slack is >=-e/(2R). Adding (e/R)e1 gives reserve e/(2R) and objective <=alpha+e. Bounded attained optimum makes EMPTY a strict threshold exclusion, including equality. Predictable conditional budgets cover adaptive rounds; exact rational weights avoid an unsupported PSD-preserving rounding claim.

- `thm-qa-30-sdp-binary-search-correctness`: Checked lo<=OPT<=hi and stored objective B<=hi+2e through both clamped updates. The width recurrence Wnew<=W/2+e contracts until the fixed cap and yields error <epsilon. Initial threshold R+e must return LOWER on the good event. First-bad-call conditioning handles adaptive paths without unlimited union bounds. n=0,R=0 and epsilon>=2R use feasible zero/e1 certificates before division.

- `alg-qa-30-quantum-sdp-solver`: Reviewed the full finite procedure, boundary branches, sorted support unions with listed zeros, common-coefficient Hermitian decoding, frozen factory, coherent trace history, diagonal Taylor/rotation branch, determinant-based two-sparse replies, threshold and outer search. All inverses are actual circuit inverses. Rational confidence propagates to every minimum call; four round failure budgets are <=delta_call. Lower/empty outputs use the proved MMW contract and unsupported failures remain FAIL. No matrix function, QRAM or coefficient oracle is free.

- `thm-qa-30-quantum-sdp-solver-guarantee`: Read all five steps against actual algorithm and suppliers. Freeze and target/decoded error margins give the trace theorem hypotheses. Uniform indexed good probabilities and whole-circuit hybrid justify both robust minima; vertical interpolation avoids incompatible label-table assumptions. At most four complete bad events per round cost 4T beta<=delta_call. MMW reserve then yields a feasible sparse dual, and the stored-certificate search gives additive epsilon at rational confidence delta. Direct boundary outputs and support count <=2T+1 are correct.

- `thm-qa-30-sparse-sdp-resource-substitution`: Reviewed all seventeen steps and sorted-XOR/simulator/clean-subspace supplier statements. Raw union scans cost O(st) with listed zeros and transposed supports; common coefficient rounding preserves exact decoded Hermiticity. Signed binary SELECT sums times rather than multiplying by frequency count; clean-input hybrids cover leakage, controls and actual inverses. Duhamel errors need no commutation. Shift margins and original-label reference prevent padded-zero bias. General per-round cost is sqrt(nm)s^2 t^2(1+eta t)/theta; summing gives Q^8, since Q>1/2. The separate diagonal cutoff/factorial Taylor and capped angle bisection remove the evolution factor, giving Q^5. Factory arithmetic Q^7, repeated C_phi Q^3, all bit costs and optional QRAM remain in the additive gate record.

- `thm-qa-30-quantum-sdp-solver-cost`: Q=max(1,Rr/epsilon) absorbs coarse boundaries. General cost sums theta^-1(T^3+eta T^4) to Q^8 with logarithmic threshold repetition; diagonal scalar cost sums theta^-1 T^2 to Q^5. Exact derived-access and positive-time/hybrid budgets are inherited from the independently reviewed resource supplier. Reference preparation repeats Q^3 times; factory, reversible arithmetic, control, memory and output prices are additional. The matching gate envelope is explicitly conditional, not inferred from query counts.


## Manifest synchronization

Reader-post item hashes were unchanged at entry. The manifest still carried earlier Statement/Definition text or prerequisite arrays for these routed carriers: `alg-qa-30-capped-generalized-minimum`, `lem-qa-30-capamplify-state-output-bound`, `lem-qa-30-normalized-hermitian-observable-effects`, `def-qa-30-mmw-game`, `thm-qa-30-generalized-minimum-guarantee`, `lem-qa-30-exp-quadratic-bound`, `lem-qa-30-estimated-polytope-threshold-soundness`, `lem-qa-30-finite-grid-quantum-subgradient`, `lem-qa-30-spectral-minimum-shift`, `alg-qa-30-sdp-gibbs-purification`, `alg-qa-30-quantum-sdp-solver`, `thm-qa-30-quantum-sdp-solver-guarantee`. Their exact current statements/definitions and declared deps have now been synchronized; identities, page membership and scheduling levels are preserved. These carrier amendments are part of the corresponding repair decisions.

## Decisions and historical evidence

The decisions file contains exactly 20 obligations: 19 touched carriers and `refuter:54:1`; there are no reader findings or page obligations. Verdicts are 13 `amended_repair`, one `accepted_repair`, five `reviewed_no_defect` audit enrichments, and one `confirmed_fatal`. Every completed repair has `repair_confidence: 1`. Sixteen closed rows have been appended to `research/defect-ledger.jsonl`, owned at `3a-adjudicate`; the finite-grid typing and Fubini defects have separate rows. The sole flagged finding references exactly its centroid endpoint row. No row was created for mechanical contract synchronization.

At entry all 19 touched item raw hashes matched the frozen reader-post inventory. The six routes with identical pre/post item hashes are contract enrichment; the membership/separation-cost route additionally needed the propagated centroid bound correction, so its decision is amended rather than clean enrichment. Source changes were reviewed against the pre/post hash inventories and the reader's descriptions. Exact pre-reader source archives for normalized observable effects, MMW game and capped amplification were independently matched by SHA-256 in `research/quantum-computing-algorithms-60-2026-10-15-owner/qa30-native-before/items/` and compared with current text. Other available earlier archive versions, including the scalar exponential proof, are contextual evidence only; they are not represented as exact pre-reader bytes. No missing historical source was invented, no finding was dismissed because current bytes were repaired, and no owner-authorized current-content exception was used. Acceptance rests on independent review of the actual current claims and prerequisites and preservation/amendment of the reader-post carriers.

## Consumer dispositions

All direct item/dependency and library references to the repaired supplier interfaces were searched in `items/` and `library/`. All direct affected item consumers are within batch 54.

| Changed interface | Direct consumer uses and disposition |
| --- | --- |
| Capped minimum and its guarantee | Generalized-minimum theorem, spectral-minimum shift, two-sparse oracle, solver definition, solver guarantee and sparse-resource substitution use finite integer quantiles and rational confidence budgets. Current inputs and conditional hybrid bounds meet the supplier contract. |
| Flag-only amplification and Gibbs procedure | Generalized minimum uses the two-coordinate conditional score law; Gibbs normalized output and Gibbs error theorem use the supplied flag-only instrument. The solver invokes the unmeasured frozen factory and its whole-circuit inverse. Payload preservation and rational floors are explicit. |
| Estimated-polytope soundness | The two-sparse oracle and MMW-to-SDP feasibility lemma supply normalized matrices, bounded attained dual optimum, exact ideal states/losses and the required eta/T data. Their current contract quotes are synchronized. |
| Finite-grid subgradient and height geometry | The membership/separation cost theorem uses transverse dimension d=n-1, the explicit Lipschitz domain, deterministic clean value oracle, error slack and correct outward normal. OP7 invokes those same finite constructions. |
| Rational spectral-shift confidence | Gibbs procedure, solver, solver guarantee and sparse-resource substitution allocate rational failures, freeze one measurement per round, and retain complete controlled/inverse implementations. |
| Solver definition and guarantee | The guarantee, cost and resource-substitution theorems use the current finite input/access conditions and classical sparse dual output. No dense primal output or unqualified gate bound is inferred. |
| Centroid endpoint bound | The only theorem consumer is `thm-qa-30-quantum-membership-separation-cost`: proof 5.1 is corrected to `O(n log(nR/s)(1+log(R/zeta)))`; its Statement already uses exact BT and a polylogarithmic envelope. The A-page summary has no conflicting exact expression. No consumer Statement/Definition changes, so no further hop is required. |

Published prerequisite content was read-only. No defective published item or affected outside-batch consumer was identified, so no published-ledger row or outside repair escalation is needed. Stable IDs, page inventory and any existing withdrawal proposals are preserved.

## Sources and checked hypotheses

Local source locations are each cited dependency's current `## Statement` or `## Definition`, with exact quotes now retained by the proof contracts. Key checks include the normal spectral theorem's actual conclusion, the POVM law's lack of a state-update instrument, finite-dimensional Golden–Thompson with positive dimension, Riemann-Fubini's integrability requirements, sorted-XOR listed-zero support and Hermitian decoding, clean-input isometry hybrids for controls/inverses, and the relative-probability estimator's rational parameters and finite cap.

The primary [Convex optimization using quantum oracles, v4](https://arxiv.org/html/1809.00643v4), §3.2, Definition 13, Lemma 14 and Corollary 15 (including its proof), was consulted for the finite phase-grid, approximate value oracle, inverse query and median construction. The local proof supplies its own rounding and Fourier-tail constants. [Quantum SDP-solvers, v4](https://arxiv.org/pdf/1705.01843v4), Appendix C, pp.58–61, supplies context for conditional-score sampling and generalized minimum finding; the local proof independently establishes its finite cap and coherent nondomination claim. Neither source title substitutes for a local prerequisite proof.

## Local validation and handoff

- `risk-report.mjs` was run before review without `--require-reviewed`; all 31 HIGH/CRITICAL entries now have specific complete current risk reviews. The final `--require-reviewed` run passed: 31 required reviews, zero errors.
- Reflow on the two locally changed items returned `unchanged`; precheck passed both, with 2 checked and 0 failures.
- Rendercheck passed both locally changed items using the real YAML and KaTeX parsers.
- Focused strict contracts passed 2/2. The broader owned-contract check then exposed stale paraphrased quotes and omitted step inputs in ten entries. Their citation/derivation records were regenerated from the already reviewed actual sources; the final strict check passed 39/39 with zero errors. Two heuristic shotgun-bracket warnings remain (generalized minimum 4.1 and centroid 1.1); the cited facts were individually traced to those arguments, and no mathematical defect is implied by the heuristic.
- After the final item edit and reflow, the required single batched proof-layout command checked the two changed paths: 2 items, 15 steps, 0 defects. No item edit followed that command.

No substantial unmet mathematical prerequisite or unresolved adjudication remains. The engine owns decision hash sealing, the full gate battery and stage transitions; none was initiated here.

Final record integrity: exact 20/20 obligation coverage, 16/16 referenced ledger rows fixed at `3a-adjudicate`, exactly one row for the flagged route, and all 20 routed/repaired manifest claim mirrors match current source. Decision hashes are intentionally left for the engine.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
