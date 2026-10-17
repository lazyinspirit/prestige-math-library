# Batch 26 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-26`. Scope/order, reader report/findings, refuter artifact and pre/post hash inventories read. Nine touched obligations and reader:26:1; no page/refuter obligations. Published content remains read-only.

## Completed lower-level review

- `def-revised-simplex-standard-form-linear-program`: reviewed_no_defect, audit_enrichment. Reader removed an identical certificate paragraph; current Farkas signs and full-row-rank/empty conventions are sound. No mathematical contract changed.
- `alg-revised-dual-simplex-with-finite-budget`: reviewed_no_defect, audit_enrichment. Definition specifies finite ratio/least-index rules and K=0 terminal checks before budget failure; moved invariant is proved by the separate theorem. No false procedural claim was introduced.
- `lem-revised-simplex-basic-feasible-extreme-point-equivalence`: reviewed_no_defect, audit_enrichment. Item hash unchanged pre/post; contract-only change. Both directions and finite support reduction checked against actual F1/F2, with empty/degenerate cases and no AC. Corrected a stale boundary locator 2.2 to current steps 1.1–4.1. Risk review complete in contract.
- `prop-revised-simplex-sparse-pricing-operation-count`: no decision owed; required risk review complete. Actual CSR supplier permits duplicates/zeros and forces s=0 in empty dimensions. Partition/accumulator proof gives stated arithmetic count.
- `thm-revised-simplex-primal-dual-residual-gap`: reviewed_no_defect, audit_enrichment. Item hash unchanged pre/post; exact expansion cancels x^T A^T y against y^T Ax, finite absolute sums give the norm bound, and feasible zero-gap weak duality gives optimality. Exact-audit Definition read; no infeasible-candidate distance claim.

## Higher-level reviews

All nine required HIGH/CRITICAL risk reviews are complete in the owning contract. The following records preserve the checked claims and hypotheses.

### thm-revised-dual-simplex-invariant-and-farkas

Proof 1.1–3.1 checked with actual basis Definition and finite-budget algorithm. For alpha=rc_j/d_ij<=0, new multiplier has zero costs on the replacement basis; d_ij<0 makes replacement invertible. Nonnegative transformed coefficients cannot lose nonnegative costs, negative ones use the minimum ratio inequality. No eligible column gives A^Tq>=0 and b^Tq=x_Bi<0. Primal/dual feasibility gives equality of objectives and weak duality. Empty m/n cases and K=0 do not assert convergence; no AC.

### thm-revised-simplex-primal-pivot-objective-ray-optimality

Proof 1.1–4.1 independently checked. Direction satisfies Ar=0 and c^Tr=negative reduced cost. All-nonpositive d gives an infinite feasible decreasing ray; otherwise finite nonempty ratio minimum gives nonnegative point and nonzero replacement determinant, even at theta=0. KKT suppliers read: for n>=1, affine C2 functions on open convex R^n, g=-z, nu=-y, lambda=c-A^Ty satisfy all feasibility/stationarity/complementarity hypotheses. n=0 handled directly. Zero/degenerate/tied ratios and no nonbasic columns checked; no AC.

### thm-revised-simplex-bland-rule-finite-termination

Read final Proof 1.1–6.1 and all F1–F4, independently checked against Bland (1977), Theorem 1.1, printed pp.103–104. Repeated underlying basis set implies identical point/reduced costs/pivot variable choices despite basis ordering. Constant cycle objective forces every step length zero. Largest fickle q, entering t<q and r^P dot z<0 force j<q with positive r_j^P and negative z_j; j has zero value and ties the leaving q, contradicting the least-variable-index rule. Finite set of column subsets bounds pivots; bounded objective excludes rays; BFS supplier provides initialization. Empty basis and all-degenerate cycles checked. Reordered the direction paragraph after P,Q,q,t are introduced; no mathematical claim changed.

### alg-revised-simplex-phase-one

Read complete Definition and earlier Bland theorem/procedure. [DA I] has full row rank for arbitrary input rank, nonnegative Db gives the artificial feasible start and objective bounded below by zero. Positive minimum branch returns Phase I multiplier (conversion to original Farkas vector is proved in extraction theorem). Zero-minimum extraction removes one zero artificial basic each time by a nonzero pivot of either sign or a redundant transformed row. Original basic columns have identity coefficients, so no original coefficient in that row means original equation 0=0. Empty dimensions, b=0 and rank-deficient/inconsistent raw inputs checked. No AC; this procedure calls a supplier repeatedly without a self-edge.

### alg-revised-simplex-qr-basis-recompute-and-audit

Read entire current Definition, exact primal/dual drivers, arithmetic model, scaled reflector procedure/local coefficient, computed least-squares and rounded-residual suppliers. Real square D and transpose satisfy source dimensions; all gamma denominators positive under stated success restrictions. Reflector order, column overwrite, separate RHS replay and descending substitution match actual suppliers. Exact G or row-sum H,q witness establishes validity; M_D>=||H_D||inf/(1-q_D) yields inverse bound. Rational L1 norm upper bounds and monotone enlarged kappa give a finite certificate. Intervals divide only away from zero and establish every sign/order/tie or stop; exact fallback checks current basis. K=0, m=0, invalid input, numerical failure, ambiguous signs and fresh validity witnesses checked. Sole direct theorem consumer reviewed; no other actual references found needing repair. No rounded dense Q, unbounded refinement oracle, forward accuracy or false infeasibility imported.

### thm-revised-simplex-phase-one-extraction-and-farkas

Read Proof 1.1–4.1 and F1–F5, including actual finite-system Farkas proof. Full-row-rank augmented matrix and nonnegative artificial objective establish finite optimum via Bland, even if original rank deficient. Original feasibility gives artificial objective zero and conversely zero sum forces every artificial zero. Positive optimum gives (DA)^Ty<=0 and (Db)^Ty=w*>0, hence q=-D^Ty has required original signs. At zero optimum a nonzero pivot of either sign preserves represented zero artificial value; row deletion applies only to transformed original 0=0 and keeps remaining identity basis invertible. Each operation removes one artificial basic, at most m. Empty m/n, b=0, redundant equations and infeasible data checked; no AC.

### thm-revised-simplex-qr-basis-residual-status-sound

Read all seven current steps and every F1–F4 supplier. H,q contraction gives injectivity and square inverse with induced infinity bound. Exact square orthogonal QR representative transports triangular perturbation without assuming perturbed R nonsingular; beta_D and independent rounded residual allowance both bound actual current solve residual, hence their minimum does. Inverse norm gives conditional forward bound and M_D eta gives coordinate enclosures. Rational interval induction, exact tie fallback and det(A_Bprime)=det(C)d_i prove every admitted transition; unresolved cases stop. Audit gap/optimality use actual stored data. Attempt counter bounds all finite loops by K evaluations including failures. m=0/K=0 and zero candidate branches checked; no conditioning or optimum-success claim.

## Final decisions and repairs

Exactly ten decisions: seven `reviewed_no_defect` audit enrichments, two `amended_repair` QR decisions, and one `confirmed_nonfatal` historical published finding. The QR mathematical reader repairs are retained; Alpha corrected the algorithm endpoint boundary worksheet and the theorem citation-use maps. These changes make `amended_repair` the accurate final carrier verdict. Completed repairs have `repair_confidence: 1`. No statement was narrowed, no supplier was withdrawn, and no new item/page was created.

The additional routed risk-review repair in `thm-revised-simplex-bland-rule-finite-termination` moves its direction construction after the introduction of P,Q,q,t. Its explicit dependency tag and phase numbers now run 1.1,2.1,3.1,4.1,5.1,6.1. Claim, dependencies and provenance remain unchanged; it already has `proof: ai-altered` and no judge record. Its manifest needs no change. There is no extra decision because this unchanged/unflagged source owes no decision under the supplied scope; its new nonfatal defect is recorded as `nod-b26-3a-bland-notation-order`.

Closed local rows: `nod-b26-3a-qr-validation-support` (procedure norm/endpoint/transition specification), `nod-b26-3a-qr-witness-justification` (local witness/enclosure proof), and `nod-b26-3a-bland-notation-order` (proof presentation). The QR support omissions concern true elementary facts; they do not provide fatal counterexamples. Contract-use-map failures are mechanical and received no defect row.

## Historical comparison and sources

Current raw item hashes for all four reader-edited sources equal their post-reader hashes. Exact pre-reader source matches were located and compared at:

- `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/def-revised-simplex-standard-form-linear-program.md` and `alg-revised-dual-simplex-with-finite-budget.md`: duplicate paragraph removal and relocation of the true invariant into the existing proved theorem.
- `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/alg-revised-simplex-qr-basis-recompute-and-audit.md`: norm/empty conventions, current-basis match, finite endpoint/tie instructions, witnesses and clarified service description.
- `research/numerical-optimization-dynamics-2026-10-16-owner-step2-gate-repair-final-binding-before/items/thm-revised-simplex-qr-basis-residual-status-sound.md`: assumption replaced by elementary proof of basis validity, inverse bound, enclosure and pivot soundness.

The five other touched items have identical pre/post item hashes and changed contracts only. No historical preimage escalation or owner-current-content exception is needed.

Bland's [original paper](https://web.ist.utl.pt/mcasquilho/acad/or/ftp/1977MathOR_Bland.pdf), Theorem 1.1, printed pp.103–104 (PDF pp.1–2), was read through the entire noncycling proof: least-index rules and a largest entering variable in a putative degenerate cycle yield a contradictory lower-index leaving candidate. The local minimization proof uses the matching reduced-cost sign convention and proves the contradiction independently.

[FNC §3.3.2](https://fncbook.com/qr/), Theorem 3.3.3 through Definition 3.3.4 (web lines154–189), gives a full factorization and its thin truncation; §3.3.3 lines340–361 gives the triangular least-squares solve. These statements alone do not explicitly complete every arbitrary given reduced factor. The local owner repair instead uses exact proved finite basis extension and Gram–Schmidt. No external citation substitutes for an active local proof.

Actual local source statements were read for KKT, CSR, Farkas, floating arithmetic, Householder formation/local error/QR accumulation, rounded triangular substitution, residual certificates, reduced QR, least squares, condition numbers and norm invariance. Full proofs of the two new completion suppliers, current published reduced-QR carrier, current computed least-squares and residual suppliers were read. This is scoped interface review, not an audit of the entire transitive published library.

## Published disposition and consumer checks

`reader:26:1` is historically true, nonfatal. The owner application before-file reproduces the omitted completion; its independently computed canonical guard is `0fa1bf1f2712037215d6307437476cfb942b090f973ba4923665b07f3b72a936`, matching the routed pre fingerprint. Current published guard is `713f3e666e757a48ad5f087926d2a1293d5ef1f09604e48d41c8a9d6b8ab1e94`, matching its existing owner `application/repair.json`. This review does not equate the raw owner before-file with the original observed raw fingerprint, and does not claim the omission survives in corrected bytes.

Current Proof1.1 proves Qhat independent, extends it by finite basis extension (claim3), then applies Gram–Schmidt, whose first n unit orthogonal inputs remain unchanged. Empty complement m=n is explicit. Proof2.1 proves ker Rhat=ker A=0 and derives nonzero triangular diagonals by a finite backwards recursion including index0. The residual decomposition and condition-number conclusion then follow under the original real full-rank hypotheses. Owned QR service uses the valid square successful-QR equations through its actual backward-stability supplier; no source repair is required.

This is the same completion finding already closed by `nod-b1-3a-published-qr-1`; `same_defect_as: reader:1:1` and exact observed fingerprint evidence are preserved to avoid duplicate counting. The published ledger was reread and merged under `research/.published-consumer-ledger.lock`, with its one deduplicated classification changed from historical A-P to bounded A-R for the existing owner repair. Published item bytes were not edited.

Direct references of the changed Definition carriers were searched in `items/` and `library/`. Every actual consumer is in batch26: the standard-form consumers retain identical conventions, the dual theorem proves the relocated invariant, and the QR algorithm's sole item consumer is its residual-status theorem. The A-page summary correctly describes checked caller transitions and inconclusive statuses. QR theorem strengthening has no item consumer. The five example uses were inspected as consumer context; no edits were necessary. Stable cross-batch records and the frontier ledger remain present; no outside affected consumer, withdrawal or owner repair is proposed.

## Local checks and handoff

- Initial risk report: 20 items routed; nine HIGH/CRITICAL. Final `--require-reviewed`: 0 errors.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-26.proof-contracts.json --strict`: 20/20 checked, 0 errors, 0 warnings after endpoint anchoring and citation-use synchronization.
- Reflow of the edited Bland item: unchanged. Precheck initially proposed a dependency-order repair; the final source explicitly cites the introduction step and passed with 1 proof checked, 0 failures. The reader QR theorem also passed precheck; definition/algorithm carriers have no phase proofs.
- `node tools/rendercheck.mjs items/thm-revised-simplex-bland-rule-finite-termination.md`: 1 file clean after final edit.
- Final batched `node tools/proof-layout.mjs` on the four retained reader-edited item paths and the Bland item: 5 items, 13 steps, 0 defects, after final source edit/reflow.
- New closed defect rows appended using the serialized ledger tool and generated view refreshed. Published ledger lock released by its owner.

No mathematical blocker or open risk escalation remains in this dispatch. Report and decisions are ready for engine hashing and the gate battery. No judge, stamping, certification, publication, dispatch or controller transition was performed.
