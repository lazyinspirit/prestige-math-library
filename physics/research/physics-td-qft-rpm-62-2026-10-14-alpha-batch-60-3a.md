# Batch 60 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-60`; role: alpha.

Scope: exactly two touched obligations; no reader/refuter/page findings. Read the order task, briefs, scope, reader report/findings, refute JSON and immutable pre/post snapshots.

## Completed reviews in dependency order

### `def-qft-finite-euclidean-interacting-measure`

Reviewed Definition, facts A1/F1-F4 and steps 1.1-2.1 against the exact normal-law, exponential positivity/monotonicity and density-measure suppliers. Finite N>=1, PSD including singular C, nonnegative homogeneous quartic U and lambda>=0 yield a Borel density in (0,1]. Normalization is conditional on Z>0 and is discharged by the later justified_by theorem, not a reverse deps edge. lambda=0 and C=0 are admissible; no continuum or empirical assertion. AC is inherited from normal-law construction. No defect.

### `lem-qft-finite-gaussian-wick-moments`

Reviewed all five steps and direct suppliers. Scalar absolute moments are bounded by 4^r r! exp(-x^2/4), with finite compact integral and positive Gaussian rescaling. Iterated Holder uses exponents k/j>=1 and proves absolute integrability before characteristic-function differentiation. Taylor coefficient gives (2m)!/(2^m m!) v^m; pairing recursion and the sign polarization sum 2^k k! reconstruct every symmetric multilinear form. k=0 empty product/pairing, k=1, v=0 and singular C checked; AC inherited explicitly. No unproved polarization supplier or infinite pairing sum; no defect.

### `def-qft-finite-wick-normal-powers`

Reviewed both coefficient-extraction steps against the finite Gaussian lemma and AC. The product of formal series has finitely many terms at each integer n>=0, giving n! sum_s (-Cjj/2)^s Qj^(n-2s)/(s!(n-2s)!). n=0 gives 1, n=4 gives coefficients 1,-6,3, and Cjj=0 gives the ordinary power. No convergence or continuum-field product claim. No defect.

### `thm-qft-finite-euclidean-polynomial-measure`

Reviewed steps 1.1,1.2,2.1,3.1 with the exact density, DCT, exponential derivative, chain-rule and MVT suppliers. Positivity follows from the countable level sets {exp(-lambda U)>=1/n} covering the probability space. Interior difference quotients have the uniform constant-times-|P| bound (2/lambda0)^(s+1)(s+1)!|P|. At zero the majorant |P| U^(s+1) is integrable by Gaussian polynomial moments; DCT also gives derivative continuity. Z normalizes the Borel measure and controls all polynomial moments. lambda=0, U=0, C=0/singular, P=0 and r=0 checked. AC inherited, no measured input or continuum claim. No defect.

### `thm-qft-finite-asymptotic-wick-expansion`

Reviewed steps 1.1,1.2,2.1,3.1 against all direct suppliers, including Taylor corollary and its parent hypotheses (integer order, endpoint continuity and n+1 derivatives). exp(-x) satisfies these on [0,lambda U]; x=0 is handled separately. |P|U^(M+1) has finite Gaussian expectation; formal division cancels degrees <=M and Z>=1/2 near zero gives the quotient O(lambda^(M+1)). M=0, lambda=0, U=0, P=0 and singular C checked. Reader integer-M repair accepted; current item matches post raw hash, and removing exactly integer reproduces pre raw hash. Counterexample and A-page are the only item/page reference consumers and use integer orders/no all-real-order claim. No new defect.

### `ex-qft-finite-wick-quadratic-pair`

Reviewed both verification steps with Wick normal-power and pairing suppliers. (Q^2-C)^2 expands to Q^4-2CQ^2+C^2; the integrable Gaussian second/fourth moments C and 3C^2 give 2C^2. C=0 is the point mass at zero. All quantities scalar and finite, AC stated; no independence assumption for the repeated coordinate. No defect.

### `ex-qft-wick-quartic-coercivity`

Reviewed all three verification steps. Completing squares gives :q^4: >= q^4/2-15C^2 and lambda q^4/2 >= alpha q^2-alpha^2/(2lambda), for C>=0,lambda>0,alpha>0. C=0 and q=0 checked; lambda=0 and a=0 excluded. Independently read current batch-59 form supplier steps 1.1-4.1, its definition, manifest/contract and exact L2 completeness, test-density, Cauchy-Schwarz and Countable Choice clauses. Component L2 limits identify weak derivatives and the locally bounded weight; density proves injection. N=1,a1=a,c=alpha,C0=15lambda C^2+alpha^2/(2lambda) match every hypothesis. Supplier remains draft and consequence explicitly conditional; no approval inferred from metadata. No defect.

### `cex-qft-zero-dimensional-perturbation-radius-zero`

Reviewed all four counterexample steps after its suppliers. N=1,C=1,U=q^4/24 satisfies the exact nonnegative quartic hypotheses. Gaussian pairing gives a_n=(4n)!/(24^n n! 2^(2n)(2n)!), with a0=1 under the empty-pairing convention. Cancellation gives a_(n+1)/a_n=(4n+1)(4n+3)/(24(n+1)) tending to infinity. For every nonzero real or complex lambda the absolute term ratio |lambda| a_(n+1)/a_n eventually exceeds 2, so terms fail to tend to zero and radius is zero. The displayed positive-lambda check already refutes any positive radius. Existing normalized measure for every lambda>=0 remains separate. Current item equals both immutable pre/post raw hashes; only F3 supplier quotation contract changed. No mathematical defect or unjustified summability/continuum claim.

## Routed decisions and changes

- `touched:60:thm-qft-finite-asymptotic-wick-expansion`: **accepted_repair**, confidence 1. The reader inserted “integer” in the truncation-order quantifier. Current raw SHA-256 equals post `176e5d0599a9aa3bf00428693d2c84d28b504f2c59e9e4c321cd62c90a79970c`; reversing that single word exactly reproduces pre `d60bf6b48462a9d4ea88f41fa2a3d386dfead21fd72d9bdc75284927b3d8ca13`. No historical-byte uncertainty. The finite sums, factorials and Taylor supplier require this domain; the intended natural-order proof is unchanged. Closed nonfatal ledger row `physics-td-qft-rpm-62-2026-10-14-batch-60-integer-truncation-order` is owned at `3a-adjudicate` and referenced by the decision.
- `touched:60:cex-qft-zero-dimensional-perturbation-radius-zero`: **reviewed_no_defect**, `change_kind: audit_enrichment`, `defect_ids: []`. Pre/post/current item raw SHA-256 is `a55bab3a3f6336e2da4bb4f597eb75a9c1788782235aee19e3e0f21772853394`; the routed delta is its contract supplier quotation, not a changed counterexample.

Exactly two decisions are present. Reader findings and refuter flagged/findings arrays are empty; no page decision is owed. All eight current item hashes match the immutable post snapshot. No item source was changed in this dispatch. I synchronized the theorem Statement in the owned pages manifest (which still had the old quantifier), completed all eight contract risk reviews, and appended the owned dependency-ledger record. Existing statement/proof provenance remains accurate, with no judge stamp present on the repaired theorem. No added items, pages, dependency edges, or withdrawals.

Consumer search over `items/` and `library/` found only the counterexample and `qft-ir02` summary as external uses of the changed theorem. Their uses concern integer finite-order coefficients and the same remainder/convergence distinction. Both are sound without edits. No outside consumer requires owner resolution. The batch-59 supplier and imported mathematics were read-only; no published defect was discovered in the consumed mathematical interfaces, so no published-ledger entry was created.

## Sources and supplier evidence

Direct prerequisite carriers were opened at their actual Statement/Definition sections: the finite/multivariate/scalar normal laws, normal characteristic function, moments-to-characteristic-derivatives, generalized Holder, square roots, Gaussian integral, improper substitution, density construction, indefinite-integral measure, DCT, exponential series/positivity/monotonicity/derivatives, total-derivative chain rule, MVT, AC and Countable Choice. Taylor's Lagrange/Cauchy remainder corollary was checked with the exact parent `thm-taylor-schlomilch-roche-remainder` (natural n, endpoint continuity, n+1 derivatives). Smooth exp(-x) satisfies every hypothesis on the finite interval; the zero-length case is handled separately.

For the quartic example, the entire current `lem-qft-coercive-polynomial-form-domain` proof, `def-qft-regulated-polynomial-hamiltonian`, owning batch-59 manifest/contract, and exact complex L2 completeness, p=2 test-function density and Cauchy-Schwarz clauses were inspected. Countable Choice supplies only the countably many approximants in completion. This review assesses the actual conditional consumer use and does not grant batch-59 acceptance or change its draft status.

[Moshayedi, Quantum Field Theory and Functional Integrals](https://arxiv.org/pdf/1902.08652), §12.1, printed pp.60–63: checked the formal covariance generating construction, finite normal-power formula and Proposition 12.1.1 pairing identity. The local proofs establish the used normalization independently; the PDF contains typographical inconsistencies in its introductory Hermite display and orthonormal wording, which are not used as premises here.

[Skinner, Advanced Quantum Field Theory, Chapter 2](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf), printed pp.19–20, equations (2.26)–(2.28) and the following coefficient-growth discussion: retrieved the original 17.6 MB PDF via curl after the web fetch failed, converted it with pdftotext, and read the complete quartic calculation. It supports finite truncation, Gaussian coefficient pairings and zero radius. The local ratio proof supplies the conclusion without relying on the source's informal Stirling estimate. No Borel summability conclusion is imported. No measured data or empirical inference enters these mathematics-domain items.

## Local checks and handoff

All commands were run from the physics workspace after the final metadata edits:

| Command | Result |
|---|---|
| `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-60.proof-contracts.json` | Exit 0; eight HIGH/CRITICAL items routed. |
| Same command with `--require-reviewed` | Exit 0; all eight have complete, specific reviews. |
| `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-60.proof-contracts.json --strict` | Exit 0; 8/8 checked, zero errors or warnings. |
| `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/thm-qft-finite-asymptotic-wick-expansion.md items/cex-qft-zero-dimensional-perturbation-radius-zero.md` | Exit 0; two checked, zero failing. |
| `node tools/physics-support/rendercheck.mjs items/thm-qft-finite-asymptotic-wick-expansion.md items/cex-qft-zero-dimensional-perturbation-radius-zero.md` | Exit 0; math parses in real KaTeX and frontmatter in renderer YAML. |
| `node tools/physics-support/proof-layout.mjs items/thm-qft-finite-asymptotic-wick-expansion.md items/cex-qft-zero-dimensional-perturbation-radius-zero.md` | Exit 1 before scanning: `ERR_MODULE_NOT_FOUND`, cannot resolve `@/components` imported from the external web checkout's `ItemBody.tsx`. No proof-layout pass claimed. |

The batched proof-layout invocation was run once at handoff. Its infrastructure failure is recorded without a mathematical defect row. No mathematical escalation is open. The remaining validation limitation is the renderer alias resolution, for the owner/engine to resolve. No judging, stamping, certification, dispatch, or gate transition was initiated; the engine owns the next step.
