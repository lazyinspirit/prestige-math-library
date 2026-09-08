# FA terminal evidence — queue g/2

Item: `lem-qid-logarithmic-and-constant-divisibility`. Run: phase-2-wave-1. Decision: repaired.

## Review and disposition

Began substantive review only after the recorder accepted queue item 1 at hash 56067e62c74afa1f03f9c09a13e0e90fdead195c68918384008d007eeba8215e. Read the current statement, facts and full proof; all seven declared dependencies in full; the A/B page context, batch-9 manifest and coverage/convention notes; the full item proof contract including Alpha's independent high-risk review; reader-9 and refute-9 evidence; group-g conventions and Sol report; and both Terra rejections and Sol's original adjudication.

Sol correctly restored the uniformly sparse half-subsequence required for divisibility. The final Terra rejection (context 74355dbd2ce8b251cf21a081977228bc01a88570be38061dd3598e75028bf39b) identifies a real citation gap: inversion and change-of-base identities alone do not state the order properties invoked in the old first two steps. The required theorem `thm-natural-logarithm-laws` was already a declared dependency, but was not stated as a fact or cited at those uses. Its current statement and proof explicitly establish strict increase and log(1)=0.

## Independent mathematical check and repair

Added F5 for that exact natural-logarithm interface. New step 1.1 derives increasing log_2 by dividing by positive log(2), then derives increasing base-two powers from the inverse identities. It also derives decreasing log_a and decreasing a^u for fixed 0<a<1, using log(a)<0 and the inverse identities; this explicitly supports the strict count-threshold comparison later. Restored the base/argument hypotheses in F4. Expanded F2 to include the exact divisibility witness definition and corrected F1's “same width” to “same width lower bound”: deleting blocks can increase the minimum.

In step 2.1, y>=2 gives log_2(y)>=1, hence its integer floor N>=1. Integer induction proves 2^N>=N+1 (base N=1, and doubling gives 2N+2>=N+2). Floor and inverse monotonicity give log_2(y)<N+1<=2^N<=y, including y=2 and exact powers. Step 3.1 therefore proves both functions nonincreasing and strictly greater than 1, with the required upper bound 1/x on the open domain. The strict lower bound would fail for the logarithmic function at x=1/2, which is correctly excluded.

Step 4.1 fixes c=1/(16|H|) in (0,1/2) and d>max(1,k1,k2), independently of x,G. Positive host order and x<1 turn the non-strict premise into the strict supplier premise; x<c also satisfies its 1/(8|H|) restriction. Decreasing powers give x^d<=x^k2, and the newly explicit floor-order argument preserves the lower bound. The supplier's uniform subsequence is sparse in one fixed graph or complement, exactly as F2 requires. Step 5.1 uses x<c<=1/16<1/4 to get logarithmic length greater than 2, so the same witnesses prove constant divisibility. Empty blocks cover zero-floor cases; |H|=1 gives an impossible copy premise and a valid implication. No AC is needed.

The other declared suppliers `lem-subreciprocal-functions-close-under-the-density-recursion` and `thm-logarithm-derivative-and-integral` are not load-bearing in this elementary proof. No supplier edit is required; the already available natural-logarithm laws suffice. The prior high-risk review is preserved as independent historical evidence; the present review supplies the current step locators and repairs its omitted citation obligation.

## Authoritative verification

- https://arxiv.org/html/2301.10147v3 — Section 4, final paragraph of 4.4, and Section 5 through 5.1 (HTML lines 347–357): checked the uniform half-subsequence construction, subreciprocal/divisive definitions and logarithmic/constant claims. This verifies the intended conventions; the local proof supplies the explicit constants and endpoint checks.
- https://www.jirka.org/ra/html/sec_logandexp.html — Jiří Lebl, Basic Analysis, Section 5.4, Proposition 5.4.1 and its full proof (HTML lines 592–674): checked the positive-real domain, zero at 1, strict increase, and the integral proof of these facts. The local supplier states these properties in the same natural-logarithm convention. Base-two and small-base order are derived locally from F4/F5, rather than imported without hypotheses.

## Scope and validation

Changed only the queued consumer and its batch-9 manifest/proof contract. All seven dependency IDs remain as before: `lem-special-copy-trichotomy-produces-a-restricted-blockade`, `def-subreciprocal-function-and-ell-divisibility`, `lem-subreciprocal-functions-close-under-the-density-recursion`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `lem-integer-part`, `thm-logarithm-change-of-base`. No existing dependency edit, prerequisite licence or new lemma is necessary. Batch-9's cross-batch dependency input remains correctly empty: the run-local suppliers belong to this same batch, and the analysis/floor suppliers are published outside the run. No same-frontier edge was added or removed, so no artificial ledger row was introduced.

Focused precheck passed after adopting its canonical five-phase numbering. Focused rendercheck and strict proof-contract validation passed with zero errors or warnings. Citation-fidelity checked 50 citations across the owned batch contract, with no missing quotation or widening candidate. These are local structural checks alongside the mathematical argument above, not independent judge verdicts.

No mathematical obligation remains. Next action: record exact bytes through the ordered terminal recorder and return control to the engine. No third consumer judgment, Sol adjudication, or judge pass stamp was created.
