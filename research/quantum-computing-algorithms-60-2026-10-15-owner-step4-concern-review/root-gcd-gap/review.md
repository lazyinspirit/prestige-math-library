# Batch 47 Step-4 concern review: cycle 1 proposal

Scope: concerns 0 and 1 in `research/quantum-computing-algorithms-60-2026-10-15-batch-47-step5-context.json`. Both concerns are confirmed. This is focused mathematical owner-proposal evidence, not a native repair, verdict, acceptance, or new review-coverage receipt. No item source, historical evidence, counters, ledgers, stamps, or native artifacts were changed. No tests, gates, validators, or hashes were run. No Codex CLI worker was dispatched.

Bound candidate patch: `research/quantum-computing-algorithms-60-2026-10-15-owner-step4-concern-review/root-gcd-gap/candidate.patch`. It proposes complete changes to five existing source carriers; it has not been applied. This report and that patch are frozen after this handoff. Native 5.2 must inspect the actual then-current sources, apply or adapt the repair, and retain the same supplier reviewer for actual consumer closure.

## Concern 0: independent symbolic confirmation

Let e=1/16, A=z²+1, B=(z-e)²+4, p=A²B, q=AB. The distinct roots are ±i and e±2i. Thus R=(0,1/8)+i(15/8,17/8) contains only e+2i, and its boundary has no q root. Its squared diameter is (1/8)²+(1/4)²=5/64<1/4. Multiplicity factorization gives gcd(q,p')=A: ±i have multiplicity two in p and hence remain in p', while e±2i are simple and do not remain in p'.

For z=x+iy,

Im q(x+iy)=2y[(2x-e)(x(x-e)-y²)+5x-e].

On x=0 this equals 2ey(y²-1), positive at both left vertices. On x=2e it equals 6ey(2e²+3-y²), negative at both right vertices, because (15/8)²>3+2e². Both vertical restrictions are nonzero cubic polynomials in y. At either horizontal edge y≠0, the restriction in x has leading coefficient 4y, so neither is identically zero. Therefore the rectangle meets every stipulated q-admissibility condition. But A(iy)=1-y² is real along the whole left edge: the gcd fails the imaginary-edge and vertex tests. The example refutes the required inheritance implication, whether or not this particular rectangle occurs under the main cut schedule. The algorithm must define valid recounts for its retained rectangles; it currently supplies no mechanism beyond that unsupported implication. Nonzero constant gcds also require their own count-zero branch.

## Finite supplier-first repair

Keep the retained isolator R and its root descriptor unchanged. For h=gcd(q,p^(m)), return count zero immediately when h is a nonzero constant. Otherwise h divides square-free q, so h is square-free and has no root on the boundary. Try H_t=(1+it)h for t=0,...,8 and select the first satisfying the four nonzero-imaginary-vertex and four nonzero-imaginary-edge tests; apply the existing winding counter to H_t on R.

At each vertex h(v)≠0, so Im h(v)+t Re h(v) is a nonzero affine function of t or a nonzero constant and forbids at most one t. On an edge write h=R_e+iI_e. If I_e+tR_e were identically zero for two different t, then both R_e and I_e would be identically zero, contradicting boundary root-freeness. Each edge therefore forbids at most one t. Eight conditions exclude at most eight real values; nine distinct integer candidates suffice. Every test is an exact finite coefficient/evaluation test. Each multiplier is nonzero, so H_t and h have identical roots and multiplicities. The existing argument-lift and linear-factor winding proof applies to H_t, giving count one exactly when the unique q-root in R belongs to h. No rectangle refinement, numerical zero test, additional root-generation oracle, or new prerequisite is needed.

If p=(z-zeta)^mu u with u(zeta)≠0, then p^(j)(zeta)=0 for j<mu and p^(mu)(zeta)=mu!u(zeta)≠0. Testing m=1,...,n therefore returns exactly mu and terminates by n. For REALROOTS the same constant branch suffices; nonconstant gcd endpoints remain root-free as divisors of the residual defining polynomial, so ordinary Sturm membership applies. Singleton endpoints use direct derivative evaluation.

For rational GRID-ROOTS input, a gcd is rational and each H_t has rational real/imaginary coefficient parts. The integer t is at most eight, so coefficient height grows by O(1). Its edge restrictions retain polynomial degree/height bounds; each candidate costs polynomially many rational operations, at most nine are tried, and the existing rational edge-sign refinement applies to the chosen candidate. The original bounded-grid root schedule, finite node/depth bounds, full exact root list, original multiplicities, and polynomial charged-arithmetic bound are all preserved.

## Concern 1: explicit induction transport

Confirmed proof gap, closed by the cited existing conversion. At k=d-1≥1, apply the reflection-convention induction hypothesis to (i^k P', i^(k+1) Q'), not directly to the source-convention matrix. These unit scalar multiples preserve admissibility. If Theta is the resulting reflection list, apply the degree-k affine conversion to obtain Psi'. Directly from the reflection matrix and conjugation of powers of i,

i^(-k) U_R(Theta) = [[P', i s Q'], [i s Q'^*, P'^*]] = M'.

The conversion gives U_S(Psi')=i^(-k)U_R(Theta), so appending the peeled source phase now yields M_S=M' W_S Z(psi_d) in the correct convention. The existing final degree-d inverse conversion then yields the required reflection list. The k≥1 hypothesis is satisfied because this induction step only treats d≥2. Neither theorem statement nor phase convention changes. The candidate patch makes this transport explicit in Proof 3.1.

## Proposed carrier dispositions

| Carrier | Concrete proposed disposition |
|---|---|
| alg-qa-23-polynomial-root-isolation | Replace Definition instruction 6 with constant handling and the finite scalar admissibility search. Public root-output contract unchanged; procedure Definition changes. |
| thm-qa-23-polynomial-root-isolation-correctness | Separate derivative algebra from effective membership in 1.1; add complete scalar-search, winding-membership, termination, and real-interval proof 3.2; update final multiplicity citation. Statement unchanged. |
| alg-qa-23-bounded-height-numerical-roots | Explicitly inherit the constant/nine-scalar recount on the unchanged rectangle and represent the rotated coefficients by rational real/imaginary parts. Definition changes, output/model unchanged. |
| thm-qa-23-bounded-height-root-arithmetic-cost | Extend 4.2 to rotated-gcd height bounds and 5.1 to nine-candidate testing, the constant branch, and unchanged rational edge-cost bounds. Statement unchanged. |
| thm-qa-23-qsp-phase-factorization | Replace Proof 3.1 with explicit reflection IH -> affine conversion -> source list -> append. Statement unchanged. |

Relevant actual consumer uses inspected: the bounded-grid definition inherits the defective multiplicity test; its resource proof explicitly charges derivative/gcd recounts and needs the above repair. Phase synthesis calls ROOTS/GRID-ROOTS only for the complement roots and retains their multiplicities; its REALROOTS validation path is unaffected after the explicit constant branch. Its iterative source-normalized peel and final complete-list conversion already use the correct conventions. The completion/peel cost lemma assumes the complete root list and counts the direct source peel plus fixed conversion, so its hypotheses/resources are preserved. The synthesis correctness proof uses root termination/completeness, multiplicity grouping, bounded-grid polynomial cost, and separate source-peel conversion; these assertions remain valid with the repaired suppliers. QSVT's singular-space/extraction consumers and the qubitization signal theorem request the fixed reflection factorization statement; it remains unchanged. The simulator retains efficient-numerical synthesis and propagates the stated certificates/failure branches. No further source repair was identified at these supplier-use sites.

The remaining inventory below is a proposed impact/disposition list from current source deps, not a claim that a complete native downstream review has already occurred. The actual same-reviewer 5.2 pass must check all direct/indirect uses and any alias or nonlogical links against actual current carriers. Since every supplied mathematical/output/resource statement remains intact, the proposed disposition for each unpatched carrier is retain source after checking its supplier use; do not preemptively narrow claims or add convention conversions to consumers that already use reflection lists.

Current transitive deps consumer inventory, in discovery layers (39 carriers, excluding the two concern subjects):

1. alg-qa-23-bounded-height-numerical-roots; alg-qa-23-qsp-phase-synthesis; alg-qa-24-qsvt; lem-qa-23-qsp-completion-peel-arithmetic-cost; thm-qa-23-polynomial-root-isolation-correctness; thm-qa-23-qsp-synthesis-correctness; thm-qa-24-qsvt-singular-space-action; thm-qa-24-real-polynomial-extraction; thm-qa-25-qubitization-signal-sequence.
2. alg-qa-25-qubitized-hamiltonian-simulation; alg-qa-27-cks-variable-time-linear-solver; alg-qa-27-qsvt-pseudoinverse; alg-qa-28-qsvt-matrix-function; ex-qa-24-rank-one-pue; ex-qa-27-sparse-diagonal-qlsp; ex-qa-28-exponential-polynomial; lem-qa-24-qsvt-robustness-amplitude-bound; lem-qa-27-cks-stopping-time-instantiation; thm-qa-23-bounded-height-root-arithmetic-cost; thm-qa-23-qsp-query-cost; thm-qa-24-qsvt-error-and-resource-bound; thm-qa-24-qsvt-query-count; thm-qa-25-qubitized-simulation-correctness; thm-qa-27-pseudoinverse-polynomial-degree; thm-qa-27-qsvt-inverse-state-cost; thm-qa-28-matrix-function-error-cost.
3. alg-qa-25-small-time-aware-simulator; ex-qa-27-fixed-vs-variable-time-cost; lem-qa-25-jacobi-anger-truncation; thm-qa-25-qubitized-simulation-resource-bound; thm-qa-25-small-time-aware-simulator-correctness; thm-qa-27-cks-linear-condition-guarantee; thm-qa-30-sdp-gibbs-state-error-cost.
4. alg-qa-30-sdp-matrix-expectation-oracle; ex-qa-25-chebyshev-truncation; thm-qa-26-hhl-query-cost; thm-qa-30-sdp-matrix-expectation-cost; thm-qa-30-sparse-sdp-resource-substitution.
5. thm-qa-30-quantum-sdp-solver-cost.

No native consumer disposition is recorded here. Preserve native original reports and verdicts. Source/manifest/contract changes and current native repair, certification, and judgment obligations remain with the genuine 5.2+ workflow.
