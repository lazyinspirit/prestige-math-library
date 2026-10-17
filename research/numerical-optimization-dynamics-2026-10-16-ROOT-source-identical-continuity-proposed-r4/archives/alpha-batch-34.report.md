# Batch 34 adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-34`.

Level 0 completed: the Chebyshev lemma recurrence preserves u_j²+v_j²=1 including t=±1, proves exterior positivity by induction and exact degree including k=0. Its dependencies (Chebyshev definition, formal polynomial degree, square roots) were opened. Reader repair accepted; statement unchanged.

The diagonal GMRES example has det[b,Ab]=1, exact solution (1,1/2), and first-cycle quadratic 5(y−3/5)²+1/5. All three actual definitions were opened. Refuter finding 4 is confirmed nonfatal: renamed Statement/Proof to Example/Verification, with no mathematical change.

Pending: higher-level risk reviews, other obligations, ledger closure, final local checks.

Level 1 completed: CG residual gap identity and all operationwise error bounds checked, including j=0 and exact zeros; spectral conversion uses lambda_min>0. Two-pass MGS telescoping, signs, gamma bounds, beta positivity and the two-pass G recurrence checked. All actual cited supplier statements were opened. Their risk reviews are complete.

Lanczos risk review found a fatal missing hypothesis in branch 3: A=diag(2,1), b=e2 has a collapsed unwanted interval but theta_m=1, not 2. Added Pb!=0 to that branch, exactly as already used by proof 1.5 and the repeated-top example F1. All direct item/reference consumers were opened: the two owned examples, ex-lanczos-ritz-value-is-not-a-norm-certificate and ex-trace-eigenspace-optimization-with-lanczos-start-angle, plus the owning page. The outside norm example uses only Pb=0 branch 1; the outside trace example has Pb!=0 and a noncollapsed [0,2] interval. No consumer repair needed. Contract and manifest synchronized; source current-content risk review complete.

Level 2 completed: GMRES residual identity, Gram-norm factor and residual recomputation checked, with exact-zero extension derived locally. CG/MINRES computations give denominator 0 versus 3, first MINRES objective 2+y² and SPD squared energy errors 3/2 and 1/6; the reader beta/beta_1 correction matches the actual definition. Poor alignment example: v-perpendicular proof gives x_1²≤290/10289, theta_2<9/4 and tau²=9999, so removing the angle factor is refuted. Four-branch Lanczos example checks invariant spaces and breakdown dimensions 1,2,1,2. Reader repair supplying b=1 and the missing breakdown checks accepted. All three remaining refuter heading findings are confirmed nonfatal and repaired. Risk reviews completed in generated order.

Level 3 completed: CSR suppliers opened completely. s≥n absorbs validation; fixed one/two passes sum O(jn); projected H rows 2..m+1 have nonzero triangular diagonal; Givens and back solve O(m²) fit the work and storage totals for m≤n. Early breakdown does not invoke a singular solve. Reader replacement of self-reference with steps 1.1–1.3 accepted.

Page review complete: the nine manifest prerequisites have six published and three draft frontmatters exactly as repaired. Page summary is accurate. No published defect identified; published content remains read-only and no published-ledger change is needed. No withdrawal proposed or removed.

Historical comparison: all ten initial current item raw hashes matched the recorded post-reader hashes, and the A page matched its post-reader raw hash. The four touched item pre/post hashes and their contract hashes differ; page pre/post raw hashes differ. The reader report documents those repairs, and the complete resulting arguments were independently reviewed above. No missing historical preimage resolution or historical false-positive disposition was used.

Sources checked: all cited local dependency Statements/Definitions were opened, and the complete CSR cost proof was read. [Bindel, lectures 38–39](https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec38-39.pdf), PDF pp. 4–6, supplies the polynomial Rayleigh quotient/start-angle derivation; checked nonzero top projection and separated unwanted interval before applying it. The local proof additionally handles repeated multiplicity, collapsed interval and breakdown. Saad PDF web retrieval failed; no claim of reading that book or the Higham/Golub texts is made. Rounding bounds were independently derived from the actual local operationwise model and theta_n lemma. No unresolved mathematical uncertainty remains in these elementary derivations.

Decisions: exactly nine owed entries (four touched, four flagged, one page). Four refuter findings confirmed nonfatal with separate closed ledger rows. Reader repairs accepted, with the two affected example carriers amended for headings. The newly found fatal collapsed-interval hypothesis defect is separately recorded in the closed ledger and risk review, without inventing an extra routed obligation. Every completed repair has repair_confidence=1. No prior judge record existed on any edited item.

Final local checks: reflow ran on all five item paths edited in this adjudication; precheck passed 5/5; rendercheck passed 5/5 with actual YAML/KaTeX; the final single batched proof-layout command checked those same five paths (19 steps, zero defects). The risk report ran before review without --require-reviewed and after completion with --require-reviewed (10 items routed, zero errors; all eight HIGH/CRITICAL reviews complete). Ledger append succeeded: 10 closed rows and generated view refreshed. Frontier dependency notes updated. No judge, stamp, engine gate battery or scheduling transition was initiated.

Handoff: all nine dispatched decisions complete, no open local escalation, published defect, necessary outside consumer repair, or mathematical blocker. The engine owns hash stamping and the gate battery.
