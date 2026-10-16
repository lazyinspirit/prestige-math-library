# Cycle 1 proposal: listed support and controlled precision

Proposal only. No source, manifest, proof-contract, ledger, native evidence, certification, stamp, or runtime state was changed. No tests, gates, validators, or hashes were run. The attached `candidate-source.patch` is a reviewable proposed textual patch, not an applied repair or acceptance evidence. Both original batch-51 concerns are confirmed.

## Concern 0: exact compression requires listed support

The finite norm-error certificate alone does not imply support coverage. The reader's 2-by-2 example is valid under the ambiguous unrestricted-table interpretation: the neighbor circuit encodes the diagonal restriction, while Duhamel and QSVT comparisons name the unrestricted matrix.

Minimal repair: define the matrix actually used as the zero extension of decoded valid listed entries. Keep the existing Hermiticity, entry bound, and induced-error certificates, but require them for this matrix. This neither changes the location maps nor requires membership search or extra support access. The sparse encoding only queries its existing listed slots. Every nonzero entry of the defined matrix now has a unique slot, so its neighbor-state matching product is exactly the named matrix divided by d. Listed values rounded to zero are harmless. The existing h=1 amplitude rotation remains valid.

An old unrestricted-table error certificate cannot simply be transferred after masking: Schur restriction need not contract operator norm. If only entrywise accuracy mu is available on valid slots, Hermitian zero extension has error at most d*mu: the error has at most d entries per row/column, hence operator norm at most sqrt(||E||_1 ||E||_infinity) <= d*mu. Thus certified entrywise precision mu <= requested_value_error/d is sufficient, independent of N. This is a sufficiency observation, not an assertion that a fixed supplied oracle can be refined. Hermiticity and the entry bound must still be certified (conjugation-compatible pairwise rounding can preserve Hermiticity).

## Concern 1: upper error bounds do not bound resources

The free zeta=2^(-L) counterexample is decisive. Least QPE repetitions after that choice still grow linearly in L. The same defect applies to arbitrary overprecise inverse-polynomial requests or arbitrary oversized polynomial degree bounds.

The proposal preserves the full d*kappa*polylog query result by making it the prescribed efficient precision schedule, while leaving optional overprecision with its actual H dependence. All dyadic choices are within a factor two of their specified tolerance, rather than merely below it. The schedule first fixes eta_I, zeta, eta_S and scalar e_j, then generates least-admissible OP1A polynomial degrees D_j. QPE call counts Q and time sum W depend on the chosen scales/repetitions, not simulator accuracy. Only then are block, value and simulator error requests fixed. This is sequential, not a circular precision prescription.

Put Lambda=1+log(d*kappa/min(epsilon,rho)). The inverse logarithms of eta_I,zeta,eta_S,e_j are O(Lambda). OP1A gives D_j=O(d*2^j*Lambda), hence log D_j=O(Lambda). Across both complete QPE lists, Q is polynomial in Lambda and W=O(kappa*poly(Lambda)): each stage has O(log(1/phi_j)) QPE powers per repetition, whose absolute times sum to O(1/phi_j). Therefore the chosen value tolerance min(d*beta_BE/2,eta_S/(4 max(1,W))), block tolerance beta_BE/2, simulator tolerance eta_S/(4 max(1,Q)), and per-phase tolerance eta_I/O(D_j+1) all have inverse logarithm O(Lambda).

With beta_BE=min_j(eta_I/(64D_j))^2, the existing QSVT robustness loss is at most eta_I/16. Value and simulator errors consume at most eta_S/2, leaving margin. Scalar, phase-synthesis, phase implementation, real-extraction, dilution and projector contributions fit eta_I with the proposed conservative allocations. Smaller budgets strengthen every stopping-time, mass, normalization, output-purity and wrapper confidence estimate; their numerical constants need no weakening. QA25's actual simulator signal-count formula then yields H=d*polylog(d*kappa/epsilon,1/rho), exactly where the current proof had unjustifiably discarded free precision dependence. Gate efficiency remains conditional on the theorem's explicit uniform implementation hypotheses. No total classical bit-time claim is added.

## Supplier and consumer disposition

Read actual definitions/proofs of the CKS access model, CKS algorithm, stopping-time lemma, guarantee theorem, OP1A degree theorem, QSVT robustness theorem, QA27 page and binding OP6 operational contract. Source inspection and repository text searches identify the complete active CKS affected chain:

1. `def-qa-27-cks-sparse-oracle-model`: unchanged supplier. It already provides the reversible location and reverse-location capabilities. The repair uses no stronger access and infers no precision-indexed oracle from this fixed-access definition.
2. `alg-qa-27-cks-variable-time-linear-solver`: original Definition changes for both concerns; producer of the decoded matrix and controlled efficient schedule.
3. `lem-qa-27-cks-stopping-time-instantiation`: direct logical consumer. Proof 1.1 must name zero extension and actual certificate; Statement/6.1 must qualify the source-efficient H specialization. The correctness estimates 1.2–5.1 survive since every new budget is smaller than its old upper bound.
4. `thm-qa-27-cks-linear-condition-guarantee`: direct algorithm consumer and indirect lemma consumer. State scheduled precision explicitly; Proof 1.2 needs the complete precision-to-degree and simulator-count calculation. Later recurrence/cap/confidence steps use the same actual H and remain valid.
5. `library/quantum-algorithms/block-encoding-linear-systems-and-variable-time-amplification.md`: nonlogical home-page summary must mention listed decoded support and the scheduled efficient specialization.
6. `research/quantum-algorithms-planning/operational-contracts.md` OP6: binding nonlogical contract mirrors free error inequalities and must tie its efficient claim to the prescribed schedule. The candidate adds that instruction without rewriting the retained Fourier alternate.

Repository item/library/article searches found no further active direct or indirect CKS consumers. Other QA27 results, including the general VTAA and fixed-time QSVT inverse-cost theorem, are suppliers or parallel branches; none cites these CKS carriers. Batch-49's context references the unchanged CKS access definition only. Batch-51 source context/proof-contract and other generated metadata need normal native currency/quote reconciliation after an actual repair, but have not been edited here.

## Native reviewer obligations

Native 5.2 must own adoption and the same-reviewer full supplier/consumer pass, including OP6 and page prose, and must reconcile exact source quotes and contracts. This proposal does not establish that an arbitrary finite oracle can meet the requested tolerance; a fixed oracle must already satisfy it, or an explicitly costed precision-indexed implementation must be supplied. Failure to meet it is INVALID_ACCESS, not a successful algorithm promised for that access instance. A raw decoded-table norm certificate is insufficient after support masking. Classical polynomial/phase generation and compiler construction costs remain charged separately. No external full-text consultation was performed in this proposal; the resolution uses the actual local proved supplier statements and independently checked finite-matrix/circuit estimates.

The proposed file is frozen at completion of this cycle. Further review or changes belong to the native owner, not a second proposal rewrite in place.
