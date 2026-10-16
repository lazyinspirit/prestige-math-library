# Focused QC24 choice and precision repair

Scope: run quantum-computing-algorithms-60-2026-10-15, Step 1.
One substantive review/repair cycle; no tests or gate runs.
Native batches 12 and 24 have successful endedAt records and are absent from
the recorded active-worker list. Exact preimages are retained under before/.
Original escalation/readiness receipts are unchanged for the root decision.

Confirmed defects and repairs:

- The slicing lemma formerly selected a finite cover for each real t. It also
  started from closed covers before invoking finite-subcover compactness.
  Step 1.2 now enlarges cube i by the explicit h_i; volume increments sum
  to at most B/8, and the starting budget is below B/4. The open cover has
  a finite subcover of cost below B. This is individual existence only.
- Step 2.1 uses the set of all interval/list witnesses. For a single section
  cover, compactness of K against R x O and the open sets |x-t|>1/r
  gives a slab. No sequence of arbitrary witnesses is selected.
- A Lebesgue number gives a finite partition. Only finitely many witnessing
  cube lists are needed. Summing prism costs gives
  2^n sum_j |J_j| cost(Q_j) < 2^n(b-a)B < epsilon.
  The case a=b remains the original finite-grid argument.
- The slicing Statement and dependency list are unchanged. Its direct
  consumer Euclidean Sard uses precisely this compact-null-section claim.
  The local QC24 maps are smooth and source dimension is below target
  dimension, so Sard still applies with r=1; lower-bound steps 2.1–5.1
  and the ceiling/Omega(D) conclusion are preserved. No other consumer
  interface is changed by this proof-only published-supplier repair.
- QC12 formerly passed min(eta_0,epsilon/m), potentially irrational, to a
  rational-input compiler. The least dyadic delta below that minimum is
  rational and exceeds half of it. Thus m delta<=epsilon and the reciprocal
  tolerance grows by less than a factor of two; the word-length rate and
  event-value error 2 epsilon are unchanged.
- QC12 Statement now explicitly carries the existing Given domain
  real 0<epsilon<1/2. Its controlled-phase consumer supplies complete
  factorizations and uses this same error domain. The amplitude consumer
  already supplies rational epsilon-prime/G in (0,1/2); its telescoping
  whole-block phase argument and resource scaling remain valid. Neither
  consumer claims finite bit-time from the exact-real SK supplier.
- The two reported missing dependencies are already present in the current
  carrier and batch12 item/page manifests; no manifest edge edit is needed.
- Contracts now mirror the fixed-arity Statement and dyadic derivations.
  The lower-bound axiom worksheet and focused cross-supplier rows describe
  the actual repair. Original escalation receipts are not relabelled.
- QC13 page availability is reconciled from its delegated owner's review;
  deeper QC13 obligations and the separately owned QSD count repair remain
  outside this repair's mathematical acceptance.

No verification stamps, hashes, recertification, readiness or commits added.
