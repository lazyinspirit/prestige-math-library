# QA26 sparse bridge candidate — private derivation, no acceptance

Actual mapping: batch 49 is QA25 qubitization, batch 50 is QA26 HHL, batch 52 is QA28 spectral estimation/matrix functions. Batch 49 remains under its native write lease. No item, manifest or readiness record is changed by this candidate.

## Source reading

Read the complete relevant Gilyén et al. full-text proof ranges: Lemmas 47–48, PDF pp.43–44 (Gram/state-preparation and sparse encoding), and Theorem58/Lemma59/Corollary60, PDF pp.51–53 (simulation and degree estimate). Read de Wolf Chapter9 §9.4 Example2, printed pp.76–77, including the explicit in-place location/inverse assumptions and one-sided value-amplitude insertion. These sources confirm the distinction between supplied in-place access and QA20 total XOR access; the binary-search bridge and clean-isometry hybrid are proved explicitly here rather than attributed to an uninspected source. No reading of unrelated pages is claimed.

## Actual missing interfaces

QA28's returned escalations concern the missing QSP scheduler edge and upstream numeric labels. Its actual QSP consumer is owned by the QSP reviewer; no second mathematical review is assigned here.

QA26 needs (a) the QA20 XOR sorted-location access to QA25 encoding bridge, with actual costs, and (b) conversion of QA25's clean-input isometry guarantee into the precise simulation mode used in HHL. Existing QA25 supplied-permutation encoding and query bound remain sound as stronger supplied-input interfaces; they do not imply a free XOR conversion. Existing QA26 direct-simulation cost theorem remains useful and is preserved.

## Sorted-location clean isometry

Let QA20 give a Hermitian N-by-N matrix with at most d nonzero entries per row, every row's nonzero columns listed in strictly increasing order, a distinguished missing-slot sentinel, and total XOR location/value oracles. Let M=2^ceil(log2(N+d)). Enlarge the system to M labels, embed H as H tilde=H⊕0, and extend every value with a zero value on invalid labels.

For row x<M and slot 0≤l<d define F_x(l) as the listed column if x<N and the slot exists, and N+l otherwise. This is strictly increasing in l: all real columns are <N, are distinct and sorted; all padded columns are ≥N and increase with l. Define it arbitrarily, say zero, for l≥d. For x≥N its d entries are exactly N,...,N+d−1. All outputs fit in log2(M) bits. This handles N=1, d=1, d>N, all-zero rows, padded physical labels and repeated missing-slot answers without ambiguity.

F_x is implemented as a total reversible XOR computation by querying the original row/slot when valid and masking to N+l on the sentinel/invalid-row branch. Invalid physical x is replaced by a legal dummy input before the original oracle call and its output is ignored. A controlled XOR oracle is implementable with two ordinary calls: compute the oracle value to a clean work word, controlled-copy that word to the target, then uncompute. Hence this wrapper does not grant black-box controlled access for free.

For y<M, compute the inverse G_x(y) by lower_bound binary search in the length-d sorted array F_x. Keep lo=0,hi=d. In a fixed ceil(log2(d+1))+1 rounds, if lo<hi, query mid=floor((lo+hi)/2); update lo=mid+1 when F_x(mid)<y, otherwise hi=mid. In inactive rounds use a dummy query with masked output. The interval width is at most the previous width divided by two rounded up; when the width is one, the next comparison makes it zero. The stated fixed round count therefore makes it zero. Query the candidate lo if lo<d and compare F_x(lo)=y. Output lo on equality and zero otherwise. Every classical step can be computed reversibly by retaining the finite previous register values, copying the final answer, and reversing all computations. The history and query workspace are clean afterward. This uses O(log(d+1)) location-oracle calls in both directions, including the final equality query; gates, index bits, history storage, comparison and arithmetic have separate costs. In particular G_x(F_x(l))=l for every l<d, including l=0.

On a neighbor register L of log2(M) bits and an equal-sized work word Y, implement the total permutation circuit

|l,0> → |l,F_x(l)> → |l XOR G_x(F_x(l)),F_x(l)> → |F_x(l),0>.

Each arrow is a reversible XOR computation or SWAP. The clean identity holds on l<d; no unsupported claim of a single-register global location permutation is needed. Its inverse is the actual reversed unitary, with the same query order. All additional workspace is clean on the required input subspace. Coherent row x is retained throughout, so the operation works on entangled/superposed row labels and arbitrary references.

Prepare d^(-1/2)Σ_{l<d}|l> by a separately charged exact finite preparation, not by a free table. Applying the clean circuit prepares d^(-1/2)Σ_l|F_x(l)>, with no residual l register. Use this construction on row and column sides; Hermiticity makes the row list of j the column list of j. Both use the same padded M-dimensional label convention and clean auxiliary registers.

Choose a supplied positive bound h≥max|H_ij|; in HHL's ||H||≤1 mode choose h=1, which needs no global maximum computation. The flag unitary for a valid pair has first-column amplitude H_ij/h, and a padded pair has amplitude zero. The exact flag rotation and finite-code decoding are supplied/costed arithmetic. The row/column clean overlap has coefficient 1/d for each matching pair (i,j), so the clean block is H tilde/(dh). Padded-pair coincidences contribute zero because the value is zero; valid pairs occur exactly once because the actual lists have no duplicates. All query, inversion, control, phase, flag and workspace costs are explicit. The encoding, its adjoint and externally controlled versions each use O(log(d+1)) XOR-location calls and O(1) value calls; controlled compute/copy/uncompute only changes constants. This preserves the supplied-permutation constant-call special case as a separate stronger access mode.

## Clean-subspace simulation hybrid

Let J embed a finite system with simulator workspace in zero. Let U be the actual unitary simulation dilation and V the ideal system unitary. If ||UJ−JV||≤η, then

||U*J−JV*|| = ||J−UJ V*|| = ||(JV−UJ)V*|| ≤η.

The controlled version obeys the same inequality by direct orthogonal decomposition of the control's zero/one branches. Tensoring a reference preserves the operator norm in finite dimensions (SVD proof). Thus QA25's clean-input result supplies inverse and controlled clean-input error; no full-space error on arbitrary dirty workspace is asserted.

For a finite circuit whose exact ideal gates preserve the clean simulator-work subspace, expand actual product minus ideal product as a sum with the actual later gates on the left and ideal earlier gates on the right. Each ideal earlier trajectory has clean simulator work, while actual later gates are unitary and preserve the error norm. Consequently the error on clean initial inputs is at most the sum of local clean-input errors. Implementations may leave dirty work; the proof never applies a local promise to that dirty state. Other ideal HHL gates touch timing, system and flags but leave simulator work untouched. The exact reversed physical circuit is used for V* in amplification, so amplification itself requires no new dirty-work approximation claim.

This lemma allows QA26 to retain its original full-operator simulation mode and add a dilation mode. The ideal HHL target includes simulator work in zero, the approximation measures the entire joint vector, and its reference-system consequence follows before discarding work. Changes would affect def-qa-26-hhl-access-model, alg-qa-26-hhl-phase-estimation, thm-qa-26-hhl-state-correctness, and exact cost/consumer mirrors, with the same reviewer retaining their ownership.

## Sparse-query substitution

A QA25 call at time t and clean-input error η uses O(dh|t|+log(1/η)) signal calls as a deliberately loose corollary of its degree bound (the sharper logarithmic denominator remains preserved upstream). Every signal query costs O(log(d+1)) QA20 location queries and O(1) value queries. Controls/inverses multiply this only by a constant. QSP phase generation, exact-algebraic arithmetic, uniform preparation, reflection, gate precision and bit time remain separately charged and are not sparse queries. These counts apply to successful certified phase generation; the QSP owner supplies the actual terminating numerical variant.

For HHL, take h=1, t0=2048κ/ε, T the least power of two≥8(t0+1), L=log2(T), and uniform per-call clean error η=ε/(8192κL), so 2Lη=ε/(4096κ). The simulator signed-time sum per V or V* is <2t0. Each direction is used at most RK times, K=ceil(4κ), R=ceil(16ln(1/ρ))+16. Thus location/value calls are

O(Rκ [d t0 + L log(8192κL/ε)] log(d+1)).

Since κ≥1, 0<ε≤1, and L=O(log(κ/ε+2)), this is O(dκ² ε⁻¹ (1+log(1/ρ)) polylog(dκ/ε+2)), preserving the intended asymptotic and explicit variable-failure factor. B and B* calls remain O(κ(1+log(1/ρ))), multiplied by supplied preparation costs. The direct-simulation cost theorem remains the exact sum over actual signed calls; this specialization does not absorb table/gate/bit-time resources into the sparse-query coordinate.

## Focused downstream dispositions prepared before source integration

The actual direct consumers were read. QA25 parity-no-fast-forwarding example uses the original exact maximum-entry normalization, which remains a valid special case. QA25 resource theorem must retain its original supplied-permutation cost and add the optional logarithmic XOR conversion cost. QA26 signed unwrapping is an ideal eigenphase statement and is unchanged; its capped amplification and B/B-adjoint counts remain exact physical-circuit counts. QA26 state correctness needs its step1.2 clean-subspace hybrid made explicit and ideal simulator work included in zero. QA26 access/algorithm/simulator-cost mirrors must record the optional dilation and exact actual reversals, retaining full-space direct access. QA27 already requests full reversible row/reverse-location input, so its existing stronger sparse mode remains; the QSVT/CKS owner retains inverse-generation/stopping/error duties while this reviewer checks the changed supplier interface. QA28 has no further unowned access/resource defect: all polynomial generation, PREPARE/SELECT/control, precision and exact-algebraic bit growth are explicit separate coordinates; scheduling edge and numeric labels remain owner metadata duties.

## Pending owner decision

Root focused review of this candidate, actual batch49 drain, stable current QA25/QSP supplier bodies, then supplier-first integration and same-reviewer QA26 consumer updates. No tests, gates, hashes, readiness decisions or acceptance stamps have been performed.
