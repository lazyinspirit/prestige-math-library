# Probability follow-ups — Astra-3

Owner-authorized defect-focused local audits, 2026-09-09; not independent
judging or whole-closure certification. Only the two assigned item files and
this report are owned. Read canonical ledger U-C rows and the complete
`phase-2-catchup-24-alpha-a-step3-scaffold-recheck.md`; parent reconciles
shared records. No new pair or future SLLN dependency is authorized.

## thm-kolmogorov-convergence-criterion

Disposition: repaired locally, A-R. Before SHA-256
`630a22a4e620cca6d25ad9bc157b2d54685e1bf67fec7d917b6812a91bc06a02`;
after `d6722608f12bbfbb0ebde63562f5725793febfafedbde68cde402485936d2bc8`.

Confirmed the exact defect: Riesz–Fischer's complete published statement and
proof assume countable choice solely to choose representatives, but target
F7 omitted that hypothesis and invoked abstract completeness. The almost-sure
argument remains sound. Both conclusions are preserved without adding AC:
construct its conull Cauchy set C, put U_n=1_C S_n, and use Fatou first on
U_n squared to prove its pointwise limit S is square-integrable, then on
(U_n-U_m) squared to give E|S-S_m|² at most the variance tail. Integrable
almost-everywhere equality identifies U_m with S_m in this bound. All
functions, events and the limit are supplied or defined explicitly; no
representative family is selected. Zero tails and zero variance are covered.

Exact eleven published deps: Kolmogorov maximal inequality; almost-sure
random-series definition; series Cauchy criterion; continuity from below and
above; variance/covariance identities; Fatou; nonnegative-integral order
rules; Lebesgue-integral almost-everywhere equality; countable subadditivity;
random-variable Lp-convergence definition. Removed Riesz–Fischer and the
three probability-convergence comparison suppliers, now unused. Full used
supplier clauses/proofs were read; the maximal inequality already proves the
independent finite-block second-moment identity. The new Fatou/order/null
countability suppliers were checked earlier than target before editing;
final direct-order traversal checks all eleven against A288.105 index8
(new measure suppliers A288.003/A288.015; Lp mode A288.103).

Source: recovered complete Durrett fifth-edition Jan.11,2019 PDF from
https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; read full Theorems2.5.5–6
and proofs printed pp84–85 (PDF zero-based91–92). Browser follow-up timed out,
first terminal recovery succeeded. The L2 strengthening is the full local
Fatou proof above, not misattributed to Durrett's almost-sure statement.
Targeted precheck and real renderer pass; obsolete judge/audit replaced by
honest local verification. Only target/report changed. Direct consumer
candidate is the next assigned normalized-variance theorem, audited
separately; no blanket defect is inferred for other consumers.

## thm-kolmogorov-strong-law-under-summable-normalized-variances

Disposition: repaired locally, A-R. Before SHA-256
`fd32bdbd01cd91e611bf30b5e0c591d84ac322381ace8e4e43ae723b1a1ebe5f`;
after `d211c888559b4028dbae5aba85a84583b043c7b07b813117ae4ceae873b6134a`.

The general normalized-variance clause and its convergence-criterion then
pathwise-Kronecker proof are sound and retained. Read both suppliers in full,
plus measurable-transform independence and variance bilinearity. Confirmed
the separate rate-proof interface gap: its integral substitution/derivative
argument had only the integral test declared, without the logarithm/power
interfaces it needed. Replaced that argument, not the rate conclusion, by a
complete local dyadic estimate. With p=1+2epsilon, the block [2^j,2^(j+1))
contributes at most (log2)^(-p)j^(-p). Each finite partial sum is dominated
by finitely many complete blocks, and the real p-series supplies a uniform
bound. The nonnegative bounded-partial-sum theorem gives convergence without
assuming an infinite regrouping identity. Positivity, monotonicity,
unboundedness of b_n, b_1=b_2, and b_n²=n(log n)^p are all verified from
the exact earlier logarithm/real-power/exponential-order interfaces.
The zero-variance case and general non-strict normalizers remain valid.

Exact eleven deps: the original first five (convergence criterion, Kronecker,
measurable transforms preserve independence, variance identities, partial
sums definition); `thm-natural-logarithm-laws`; `def-real-power`;
`thm-real-power-laws`; `thm-exponential-is-strictly-increasing`;
`thm-p-series-real-exponents`; `thm-nonnegative-series-bounded-partial-sums`.
Removed direct integral-test edge. Read the full six new suppliers before
editing; the p-series theorem already proves the real-exponent result, not
merely rational exponents. Checked canonical order FIRST for the new
suppliers: A177 indices1,3,5,16; A175 index5; A127 index8, all before target
A288.105 index16. Final actual-dependency traversal confirms all eleven are
earlier, including same-page convergence index8 and Kronecker index15.

Source: full Durrett Theorem2.5.9 and proof pp85–86, and Theorem2.5.11 and
proof p87, same complete Jan.11,2019 PDF recovered for the previous item.
His rate argument uses the normalized-variance route; the dyadic summability
details are supplied locally from the six exact earlier items. No future
`thm-finite-variance-logarithmic-rate-for-iid-sums` or SLLN item is used, and
neither this proof nor the now choice-free convergence criterion needs AC.
Precheck and real renderer pass after making the final rate application's
step dependency explicit. Obsolete judge/audit replaced by honest local
verification. Only this target and this report changed during this item.

Both assigned targets are repaired, with unchanged full conclusions.
Item-level checks are not independent judging or an all-ancestor audit.
