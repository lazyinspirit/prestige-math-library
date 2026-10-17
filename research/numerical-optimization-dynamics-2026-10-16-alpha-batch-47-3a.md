# Batch 47 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-47.

## Scope and checkpoint

Read the scope, generated order, reader report/findings (empty), refuter report (no flags), pre/post snapshots, batch contract and cross-batch ledger. One owed obligation: touched:47:def-xd-countable-nonexplosive-ctmc. Ten HIGH/CRITICAL reviews are required by the initial risk-report (0 errors, 17 items). No page decision is owed.

## Completed level 0 definition

`def-xd-countable-nonexplosive-ctmc`: amended_repair, repair_confidence 1. Retained the reader’s enumeration-independent nonnegative sum convention, including the empty subsum and unbounded-family case. Restored “Require the total exit rate … to be finite” and removed its redundant explanatory sentence. The reader-post sentence “Thus the total exit rate … to be finite” was grammatically incomplete. The initial missing convention is nonfatal: the standard meaning is immediately recoverable, but explicit local notation is preferable.

Exact reversal of the two reader patch replacements (native reader attempt-1.log, lines 14320–14326) reconstructs raw pre hash 59236597462fea6e72fd5bdacc6778b714362d0d6188a2873b85095e6152f637. Before amendment, current source matched raw post hash 156ef087ed497b464083a1123a8b40fadba38fe6ae366c5683e815a35d8b423f. Thus historical bytes are bound, not inferred from the report alone.

Read all five actual dependencies: def-countable, def-real-exponential-function-and-e, def-random-element-and-real-random-variable, def-composition-of-probability-kernels, lem-kernel-composition-is-well-defined-and-associative. Kernel order agrees exactly. The process and nonexplosion are supplied hypotheses; no existence theorem or choice principle is asserted. Singleton, empty outgoing family, all-zero rates, initial time and absorbing cases are valid.

A full items reference search found exactly three direct consumers: def-xd-finite-state-projection-and-cemetery-lift, thm-xd-finite-state-projection-loss-and-observable-bound, ex-xd-immigration-death-finite-state-projection. Read each current use and the indirect adaptive algorithm/soundness consumers: all retain the same finite-rate, given-process interface and need no edit. No outside affected consumer or proposed withdrawal. Complete definition risk_review and boundary evidence recorded in the owning batch contract.

The following sections record the remaining completed reviews in generated order. Published items remain read-only.

## Completed lem-xd-finite-matrix-exponential-series

Read all eight current numbered steps and every cited supplier Statement/Definition (matrix shapes/product, induced norm/submultiplicativity/max-column sums, multiplication, monoid powers, induction, factorial and scalar exponential). Step 1.1 correctly handles the unique 0-by-0 matrix. For n>=1, step 1.2 majorizes each entry and then the finite column norm; no matrix completeness premise is hidden. Step 1.3 proves the commuting binomial coefficients including endpoints. Step 2.1 bounds both difference-quotient and derivative tails uniformly near c by M sum (MR)^j/j!, legitimizing differentiation without a missing termwise theorem. Step 2.2 square versus triangle tails vanish using the union m>N/2 or n>N/2; fixed multiplication is continuous by submultiplicativity. Step 3.1 yields both derivative orders and initial identity. M=0, t=0, negative t, commuting requirement and finite dimensions checked. Whitt Theorem 3.2 and full proof at PDF pp.9 and15 agree; the authored proof supplies its own detailed series justification. No choice, quotient or equivalence-class construction occurs (that risk signal is lexical). Reader/refuter contain no contrary finding. No defect.

## Completed lem-xd-geometric-poisson-tail-bound

Read all three steps and exact Poisson Definition/normalization Statement, factorial convention, real exponential Definition and geometric-series Statement. At mu=0 the point-mass convention avoids 0^0; for mu>0 and mu<K+2, rho is strictly below 1 and all w_k>0. Ratios for k>=K+1 are at most mu/(K+2), giving by induction w_(K+1+j)<=w_(K+1)rho^j and a convergent nonnegative majorant. K=0 works; equality mu=K+2 is expressly excluded. No subtraction or roundoff certificate is inferred. Fox-Glynn pp.440-442 (introduction, Proposition 1, stability discussion and WEIGHTER) support the methodological attribution; this exact simpler geometric bound is proved locally rather than attributed as their algorithm. Empty findings/flags checked. No defect.

## Completed alg-xd-budgeted-uniformization-accumulation

Read full Definition and all seven actual prerequisite interfaces. Positive finite t*nu gives m=ceil(t*nu)>=1 and 0<mu<=1; if m>B it exits, otherwise Kmax>=0. Search is finite and K=0 has an empty update loop. The recurrence produces precisely each factorial-weighted P power; repeated m steps do not create a self dependency. Exact operator applications use the matrix-free supplier without a CSR cost claim. Both scalar comparison and vector error certificates are mandatory in rounded mode, with explicit unavailable and exhausted statuses. Zero nu or t returns the exact initial vector. Fox-Glynn pp.440-442 and Whitt eqs.(3.24)-(3.28) checked as background; the procedure uses the separately proved geometric majorant, with no assertion that raw floating-point summation is certified. Correctness is the separate truncation theorem. No choice or absent prerequisite found; no reader/refuter finding.

## Completed thm-xd-finite-generator-master-equation-uniformization

Read all six numbered steps and all seven cited actual suppliers. The nonempty finite-state hypothesis ensures max exit rate and probability vector are defined. Column stochasticity and finite column sums preserve probabilities under each P power; Poisson normalization gives the mixture at all t>=0, including zero using the degree-zero convention. Matrix-series commuting product yields exp(-nu*t I)exp(nu*t P)=exp(tQ), and inverse exp(tQ)exp(-tQ)=I. Uniqueness uses entrywise product differentiation, continuity at endpoints supplied by differentiability, and the mean value theorem on [0,t] for t>0; t=0 separately. nu=0 forces all nonnegative exits zero and hence Q=0. Whitt Theorem 3.2/full proof and eqs.(3.24)-(3.30) agree after transpose. No infinite-generator ODE, irreducibility, or choice premise imported. No defect or contrary report finding.

## Completed thm-xd-finite-state-projection-loss-and-observable-bound

Read all six steps and all eight dependencies. The finite lift adds aggregate nonnegative outside rate a_x and makes each column sum zero. Event equality uses strict t<tau_F, so initial mass outside F and returning paths are handled correctly. Since F is finite, M_F bounds both first and conditional second jump probabilities; the O(h^2) remainder and no-jump exponential remainder are uniform. Killing preserves the Markov property: at a surviving history the original present state suffices; the cemetery history remains absorbing. Finite semigroup expansion gives right derivatives and, using coordinate O(h) continuity, left derivatives for t>0; the finite ODE theorem applies. Nonnegative p-minus-embedded-u sums to 1-surviving mass, giving equality of l1 error with first-exit loss. Bounded f has finite sup/inf on nonempty S; the midpoint cemetery extension bounds each exited path by half its oscillation. t=0, F=S finite, absorbing F and initial mass outside F checked. Munsky-Khammash Section II eqs.(2.4)-(2.12), Theorems 2.1-2.2 and Section III pp.044104-2 through -5 inspected; no unbounded countable matrix differentiation is imported. Given-process premise needs no choice. No defect.

## Completed thm-xd-uniformization-truncation-and-error

Read all five steps and all twelve exact prerequisites. P powers are nonnegative with column sums one; the partial matrix has common column sum s_K and its nonnegative complement has common column sum tau_K. For m>=1, the telescoping identity remains valid without any unmentioned commutation assumption and each term is nonnegative. The induced norm bound gives m*tau_K, while the exact common-column-sum calculation gives 1-s_K^m on a probability vector. The exponential semigroup identifies S_mu^m with exp(tQ); mu<=1<K+2 meets the geometric lemma hypotheses. Triangle inequality then adds the separately certified vector arithmetic error, and an outward T can enlarge the bound. Zero time is separately handled with the Poisson point mass and no time splitting; K=0 and singleton Q also work. No stability guarantee for unvalidated rounded sums is claimed. Whitt eq.(3.28), Fox-Glynn Proposition 1 and Sections 1-3 checked only as context; the exact unnormalized lost-mass identity is proved here. No defect or reader/refuter concern.

## Completed ex-xd-two-state-gating-uniformization

Read four verification steps and all four exact suppliers. Column rates agree with off/on direction. For s=alpha+beta>0, admissible nu=s yields both columns v=(beta/s,alpha/s), whence P^k e_off=v for k>=1; the zero Poisson term contributes no on mass and remaining weights sum to 1-exp(-st). At t=0 this is zero. At alpha=0 or beta=0 with s>0 the corresponding formula gives the stated one-way behavior. When s=0 both rates vanish and the separate constant solution applies; the all-zero overlap is handled by that branch. No division by zero, stationary convergence or unstated choice. Whitt finite-generator/uniformization sections agree as background. No defect; no item edits.

## Completed ex-xd-birth-death-poisson-tail

Read all four steps and all seven exact supplier interfaces. Independently recomputed P=I+Q/2 with rational arithmetic and its first four powers on e0: (1/2,1/2,0), (1/2,1/4,1/4), (3/8,1/2,1/8), (7/16,5/16,1/4). Factorial-weighted prefix is exactly (703/384,277/384,5/32), with sum 65/24 before multiplying by exp(-1). Nonnegative omitted operator makes l1 error exactly the omitted scalar mass by the reviewed truncation theorem. G_4(1)=exp(-1)/(120*(5/6))=1/(100e); 1<6 meets the strict ratio premise. The exact complementary identity is distinguished from a rounded certificate. All exit rates (1,2,2) are dominated by nu=2 and m=1 at t=1/2. Fox-Glynn pp.440-443 checked for attribution to controlled truncation, not an assertion that this is their full algorithm. No defect or flags.

## Completed ex-xd-immigration-death-finite-state-projection

Read all six verification steps and all eight dependencies, including the entire current batch-10 nonexplosion proof and reaction-system Definition. Two increments +/-1 with propensities 1,n keep every active poststate in N0, with death inactive at zero. V(n)=1+n is proper, QV=1-n<=V for n>=1 and QV(0)=1<=V(0); initial state zero is admissible. The supplier explicitly defines its unbounded finite local QV expression and assumes Countable Choice plus Dependent Choice, as this example explicitly does in A1 and axiom_use. Its finite stopping, bounded-rate event-count, stopped expectation, exponential bound and exit-probability proof were checked; the actual countable-product supplier Statement carries the same two assumptions. No stronger AC or arbitrary-rate existence assertion is needed. The 3-by-3 cemetery matrix has the correct source columns and cprime=p1. Eliminating p0 gives p1second+3p1prime+p1=0 with p1(0)=0,p1prime(0)=1; the two distinct negative nonzero roots r+/- yield the stated difference-of-exponentials and its integral. At t=0 cemetery mass is zero; at infinity the integral tends to one (r+r-=1). On every t>0 the ordered three-jump simplex has positive volume and its stated density has rates 1,1,2 and survivals 1,2,3,2; hence returning paths strictly add to the state-1 full marginal. Munsky-Khammash Section II and finite-projection statements checked; no claim about all marginals being killed marginals. No defect or outside supplier alert.

## Sources and scope limits

- [Whitt, Continuous-Time Markov Chains](https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf): §2 pointwise transition probabilities and semigroup, §3.1 holding-time convention, §3.2 Theorems 3.1–3.2, and §3.4 equations (3.24)–(3.30) with full matrix-exponential proof, PDF pp. 2–3, 5, 7–9, 14–15. Row conventions were transposed; finite-state hypotheses were preserved.
- [Fox–Glynn, Computing Poisson Probabilities](https://web.stanford.edu/~glynn/papers/1988/FG88.pdf): printed pp. 440–443, introduction, Proposition 1, §1.2 numerical-stability discussion, §2 WEIGHTER and §3 truncation-point procedure. Read from the downloaded PDF with PyMuPDF after browser retrieval failed. This supports recursive-weight and numerical-caution attribution; the batch’s simpler geometric bound and unnormalized lost-mass identities were checked independently in their authored proofs.
- [Munsky–Khammash, The Finite State Projection Algorithm](https://www.atmos.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf): §II equations (2.3)–(2.12), full proofs of Theorems 2.1–2.2, and §III finite-projection algorithm, printed pp. 044104-2–044104-5. Read from the downloaded PDF with PyMuPDF. Checked positivity, column convention, finite-dimensional exponential and lower-bound/missing-mass interfaces. The local pathwise argument establishes the stronger exact cemetery identity under a given nonexplosive chain.

All current local source statements actually invoked by the routed proofs were read, including the complete batch-10 nonexplosion proof. Published foundational suppliers were checked at their exact used interfaces, without claiming an independent audit of their entire transitive prerequisite closure. No uncertainty requiring an owner mathematical decision remains.

## Contracts, ledgers and disposition

Closed defect `nod-b47-3a-countable-rate-sum` was appended through `tools/defect-ledger.mjs`, at `caught_at_stage: 3a-adjudicate`, nonfatal, disposition fixed. The decision references it. The grammar amendment is editorial completion of the same repair, with no additional mathematical defect alleged. No mechanical diagnostic was entered as a defect.

The owning batch contract now has ten complete specific risk reviews, the explicit empty-outgoing-rate boundary evidence, and exact current Definition excerpts for the projection theorem’s F1 and immigration-death example’s F3. The immigration-death F1 excerpt was stale against the current batch-10 reaction-system Definition; refreshed it after checking the actual bounded-generator versus finite-local-QV distinction and its theorem-specific extension. No mathematical consumer premise changed. The manifest’s existing semantic statement, dependencies, source attribution and provenance remain accurate and require no change. There was no judge record on the changed definition to invalidate.

The consumer-maintenance note was appended to `briefs/tasks/frontier-dependency-ledger.md`. Existing batch-47 cross-batch records remain valid and unchanged. No defective published item, outside affected consumer, proposed withdrawal, page-only obligation, reader finding or refuter finding was found; the published ledger needed no edit.

## Validation and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-47.proof-contracts.json`: 0 errors, 17 routed items; ten HIGH/CRITICAL items reviewed.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-xd-countable-nonexplosive-ctmc.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-xd-countable-nonexplosive-ctmc.md`: 0 proofs checked, 0 failures; definition is non-proof-bearing.
- `node tools/rendercheck.mjs items/def-xd-countable-nonexplosive-ctmc.md`: 1 file passed actual YAML/KaTeX parsing.
- After the final item edit and formatter, `node tools/proof-layout.mjs items/def-xd-countable-nonexplosive-ctmc.md`: 1 item, 0 steps, 0 defects. No later item edits occurred.
- Initial strict contract check reported four mechanical evidence issues (one boundary anchor and three stale citation excerpts); all corrected. Final `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-47.proof-contracts.json --strict`: 0 errors, 0 warnings, 17/17 checked.
- Final owning-batch `risk-report.mjs ... --require-reviewed`: 0 errors, 17 routed items; all ten required reviews complete. The definition now scores HIGH 6 rather than CRITICAL 8 after redundant wording was removed; it still has a full review.
- Exact rational computation reproduced all four three-state matrix powers, the prefix coefficients, retained mass 65/24 before exp(-1), and geometric majorant 1/100 before exp(-1).
- Native status confirmed this run is at Step 3a. Its unrelated collect-27 failure is outside this dispatch; no engine transition or other batch artifact was changed.

Exactly one decision is supplied in the task-named decisions file. No judgment, stamp, self-certification or gate battery was initiated. Local checks establish their stated mechanical properties only; the engine owns current hash stamping and gates. No batch-47 blocker remains.

Final changed-item raw SHA256: `1441e5bfb0fe73acd5b2e719a0377f4f69ebb6c1ca27e92ea3c2d301c1880b7b`.
