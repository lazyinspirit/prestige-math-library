# Batch 22 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-22`.

Scope: six risk reviews, refuter:22:1 and published-dependency reader:22:1. Pre/post reader item, contract, manifest and page hashes agree; no reader edit or touched/page decision is owed.

## Dependency-order review

### Level 0: lem-it-finite-weyl-twirl-partial-trace

Reviewed current steps 1.1–3.1 and the exact Definition/Statement and arguments of def-qc-partial-trace, def-qc-tensor-register-and-permutation, cor-complex-de-moivre-formula, thm-eulers-formula, and thm-kernel-and-fibres-of-complex-exponential. The matrix-unit calculation kills off-diagonal terms by the geometric sum and averages each diagonal unit to I/d in the retained-factor order. Cases d=1, H=0, R=0 are valid; no positivity assumption or AC is needed. Complete risk_review recorded.

Published finding reader:22:1: current Proof 2.1 leaves the addition/inverse citation implicit. Exact supplier thm-complex-exponential-addition-and-real-extension proves exp(z+w)=exp(z)exp(w). With exp(0)=1, exp(w)exp(-w)=1; hence exp(z)=exp(w) iff exp(z-w)=1. This closes the mathematical inference immediately, so confirmed_nonfatal; published repair pending owner, carrier read-only. Kernel steps 1.1–1.2 independently suffice for the owned consumer. Supplier Cartesian-form corollary and addition theorem read as well. No consumer repair is needed.

### Level 2: cex-it-fidelity-data-processing-does-not-prove-qre-dpi

refuter:22:1 is confirmed_nonfatal. Step 1.2 excluded channels but left the non-affinity claim implicit. Added that S_a is the coordinate segment p in [sin²a,1/2], so any affine map has an affine output coordinate by endpoint interpolation. The existing twice-differentiated contradiction excludes this as well as channel restrictions. Statement unchanged; repair_confidence: 1. Updated the exact step derivation in the owning contract. Provenance remains ai-generated for the original counterexample and its proof; no source derivation has been substituted and the manifest mathematical interface is unchanged.

All six steps checked against the current 18 declared Definition/Statement suppliers, plus def-qc-quantum-channel for the complex-linear channel convention. On the closed angle range both sine and cosine are nonnegative. Root fidelity equals cos(theta-phi) before and after translation. The trace-distance comparison uses nonnegative common sin(theta-phi) and monotonic sine on [0,pi/2], with pair order interchangeable. Full-support input pair has finite logarithms; the output comparison has support span{|0>} while the first output is full rank. The separate pure-pair difference squares to I/2 and its supports differ, yielding both metrics 1/sqrt(2) and infinite relative entropy. The endpoint derivative argument uses derivatives on the open interval and continuity only at the final endpoint. No AC. Complete risk_review recorded.

### Level 5: thm-it-finite-strong-subadditivity

Read all three current steps and all ten declared suppliers, including full support, entropy-identity and partial-trace-DPI proofs. Grouping A|BC and AB|C gives actual density marginals; reordered finite sums identify both B marginals. Product spectral eigenvalues show the comparison is positive of trace one. Support inclusion makes both QREs finite before cancelling S(A). Trace_C keeps A coefficients fixed, giving rho_A tensor rho_B, so DPI and the bipartite entropy identities have exactly their stated hypotheses. Checked rank-deficient and pure states, all one-dimensional factors, and finite zero-eigenvalue entropy convention. No zero-dimensional state is asserted; no AC. Watrous Chapter 5 Theorems 5.35-5.36, printed pp.280-282, confirm the reduction (base-two there, positive ln(2) rescaling here). No defect.

### Level 6: thm-it-finite-quantum-conditional-mutual-information-nonnegative

Read steps 1.1-3.1 and all seven exact supplier interfaces. P sends ABC to ACB; its unitary conjugation preserves the state spectrum and entropy. The AC marginal agrees with the definition, CB is the unitary swap of BC, and C is unchanged by reordering finite sums. Applying SSA with middle factor C gives exactly I(A:B|C)>=0. Rank-deficient/pure states and one-dimensional factors obey the same finite spectral argument; a zero factor admits no density operator. No AC or unsupported entropy invariance premise is required. No finding or edit.



### Level 6: ex-it-dephasing-quantum-relative-entropy-dpi

Read steps 1.1-3.1 and all ten cited interfaces, including the channel-DPI proof. Delta is complex-linear; each amplified projector conjugation is positive, and cyclic trace with sum P_j=I proves trace preservation on all operators. Rank-one rho versus strictly positive sigma gives input (1/2)ln(16/3); dephasing gives I/2 versus sigma and (1/2)ln(4/3), a difference ln(2)>0. Orthogonal pure input supports fail inclusion, while both outputs equal I/2 and have divergence zero. Natural logs, root linear-first convention, zero spectral terms and arbitrary finite ancillas all match the cited definitions. No AC. Diagram is explanatory only. No defect or edit.

### Level 6: ex-it-strong-subadditivity-for-pure-tripartite-state

Read steps 1.1-2.1 and all eleven declared supplier interfaces. The normalized explicit GHZ vector gives a positive trace-one rank-one projection. Every one-register trace kills the two off-diagonal terms; middle-factor traces are implemented by the cited unitary permutation. All two-register marginals have positive spectrum (1/2,1/2), as do all one-register marginals; the total state has spectrum (1,0,...,0). The Schmidt eigenvalue observation follows directly by tracing the supplied decomposition and is also independently established by the explicit marginal computation. Entropies are ln(2), ln(2), zero as claimed; strictness follows from ln(2)>0. Checked all three one/two splits and zero eigenvalues. No AC, no reliance on the diagram, no defect or edit.

## Decisions and published disposition

- `reader:22:1`: confirmed_nonfatal; closed row `math81-b22-3a-published-exp-fibres-citation`, disposition nonfatal-recorded. Published source read-only; owner editorial maintenance remains pending.
- `refuter:22:1`: confirmed_nonfatal; repaired with confidence 1; closed row `math81-b22-3a-affine-map-inference`.

The current published carrier reproduces observed_sha256 cc514fe0b68bf449921db8a8c4fb862cf12c1214c3cd9d6660d2ca9792b99cd4 (raw SHA256 743f2e1f476a7821a5d3cd34243bdcba36da6fe6e1e18db737ca2c8143c1cbc6). Proof 2.1 invokes addition without identifying its exact supplier. Independently read thm-complex-exponential-addition-and-real-extension: exp(w)exp(-w)=exp(0)=1, so exp(z)=exp(w) iff exp(z-w)=1. This immediate omitted citation is nonfatal. Kernel steps 1.1-1.2 remain sound and suffice for consumer lem-it-finite-weyl-twirl-partial-trace. Published source remains read-only; closed nonfatal-recorded adjudication, explicit citation/inverse expansion pending owner in published-consumer-supplier-ledger.md.

Original Proof 1.2 excludes channel restrictions by the affine-coordinate contradiction but leaves the stated nonlinearity implicit. The family is the nontrivial convex segment rho_p, sin^2(a)<=p<=1/2. Endpoint interpolation shows that any affine map on it has output diagonal coordinate A+Bp. Added this observation and concluded non-affinity as well as exclusion of channels. The unchanged twice-differentiated relation cos(2theta-2a)=B cos(2theta) tends to sin(2a)=0 at theta=pi/4, contradicting 2a=pi/6. All fidelity, trace-distance and support computations independently checked. Statement unchanged; exact contract derivation updated. Current raw SHA256 54393ba894dce06a368be05230ea0295bd8e981693d76ac79759a010c54f6ca8. Local precheck, rendercheck, strict contract and proof-layout pass. The exact reversed paragraph delta reproduces the pre/post reader raw hash 18342dce933daaedd292e0c714c9ec6d115498af3d07681c6644cc5126af8f5a and the full post-reader carrier triple reproduces routed observation 5e6bf9d468b0db31a106ec978d08bd084a069815a6c8a0ac959ef86ac7ad4387.

## Sources and conventions

[Watrous, Chapter 5](https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf), Theorems 5.35–5.36 and complete associated proofs, printed pp. 280–282 (PDF pp. 16–17), was read for finite-dimensional nonnegative-operator channel monotonicity and SSA. Its base-two entropy is converted to the local natural-log units by multiplying by ln(2)>0. [Lebl, §11.4](https://www.jirka.org/ra/html/sec_complexexp.html), Proposition 11.4.1 and following inverse calculation, supplies the complex addition/inverse identity; the local addition theorem gives the independently checked power-series argument. No claim of reading the entire books or the Wilde source.

## Local validation

Initial risk-report: six HIGH/CRITICAL carriers, zero errors. Final --require-reviewed: six complete reviews, zero errors. Strict proof-contract: 6/6 checked, zero errors/warnings. Changed-item precheck: 1 checked, zero failures. Changed-item rendercheck: passed under actual YAML/KaTeX parser. Final proof-layout, run after all item edits: 1 item, 6 steps, zero defects. Only the counterexample item was edited; its Statement, metadata/provenance and manifest interface are unchanged. No material rewrite or judge record exists on this item. Contract derivation and confidence updated. Published classification index and owned-consumer frontier ledger maintained. No judge, stamp, gate battery, publication or engine transition performed.

No substantial mathematical blocker remains. The nonfatal published citation maintenance is explicitly pending owner and does not block the used kernel interface.

Defect-ledger append succeeded: exactly two closed rows at caught_at_stage 3a-adjudicate. Local obligation comparison confirms exactly the two routed findings are decided, each with one distinct closed row. Appended with --no-render; generated global ledger view refresh remains engine-owned.
