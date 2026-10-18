# Batch 23 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-23`; covers batch 23 only.

## Disposition

Both routed refuter findings are **confirmed_nonfatal** and completely repaired, with `repair_confidence: 1`. The decision file contains exactly `refuter:23:1` and `refuter:23:2`, each using route `flagged` and referencing exactly one closed defect-ledger row. There are no reader, touched, page or outside-producer obligations. All twelve HIGH/CRITICAL risk reviews are independently complete in the owning proof contract. No escalation, proposed withdrawal or published-item defect was found.

The reader made no edits. All item/contract/manifest fingerprints and page fingerprints in the pre/post reader snapshots are equal. Before each repair the raw item hash matched its snapshot item hash. `observed_sha256` in the routed finding is a composite carrier fingerprint, not the raw source hash. The other thirteen source files remain identical to the reader-post item hashes. There is no missing-preimage or unbound-history issue.

## Repairs and routed decisions

1. `refuter:23:1`, `lem-it-schmidt-rank-compression-fidelity-bound`, Proof 2.1: the support rank inference was immediate but unstated. Each branch lies in $H_R\otimes\operatorname{ran}K$, so its Schmidt decomposition has at most $\operatorname{rank}K\le M$ terms. Added that single sentence. The zero-vector branch remains explicit; the rest of the proof bounds the reference projection weight by the largest $M$ eigenvalues and sums branch norms using Kraus normalization. Closed row: `non-ml-math-remaining-81-2026-10-18-batch-23-schmidt-support-rank`. Pre-edit raw source: `3216790e9812dbb962a39b1b314014f9fe81597bb0e2ae516d0db16d3170072e`.

2. `refuter:23:2`, `thm-it-hsw-classical-quantum-channel-capacity`, Proof 1.1: the entropy-continuity supplier literally concerns $\mathbb C^d$. Added the finite orthonormal basis identification of $H_B$ with $\mathbb C^{\dim H_B}$, preserving spectra and operator norm. This justifies the continuity application and attainment on the compact nonempty simplex. Closed row: `non-ml-math-remaining-81-2026-10-18-batch-23-entropy-coordinate-transfer`. Pre-edit raw source: `990431f8c47ab8c7da163aa3efec7c48014df18aeb14c7e7e5c67a727efbf842`.

Both are proof-only clarifications. Their derivation mirrors and independent risk reviews were updated; existing `ai-altered` proof provenance remains appropriate. No Statement, Definition, dependency list, source reference, manifest promise or consumer interface changes. There were no prior judge records in either edited item to invalidate.

## Independent risk evidence in generated order

### `lem-it-finite-gentle-measurement`

Independently checked steps 1.1–3.1 and current F1–F7 interfaces: positivity gives real s>=q in [0,1]; the rank-two discriminant is (1+q)^2-4|s|^2, including collinear and v=0 branches. Its upper bound 4(1-q) and Hermitian partial-trace contraction prove the unnormalized bound; u=0,1 and singular Lambda are covered. Nonzero finite state space and one finite purification require no AC. Source: Wilde v8 Lemma 9.4.2, equations 9.203–9.210; local proof independently supplies the calculation.

### `lem-it-finite-positive-square-root-is-order-preserving`

Independently checked all three steps and current thirteen supplier statements. Inverse order follows by positive congruence, then the resolvent inequality holds for t>0 without assuming A,B commute. Continuous scalar integrands satisfy the compact FTC and monotone substitution hypotheses; k=1 uses oriented zero integrals. Both improper tails are bounded by 2, c>0 follows on [1,2], and the m-tail sandwich proves scaled-cutoff convergence. Finite spectral sums justify integration and quadratic-form limits also for zero eigenvalues. No converse order claim or AC is used; equality and singular A=0 cause no gap.

### `lem-it-finite-quantum-entropy-continuity`

Checked steps 1.1–3.1 and all six current prerequisites. The scalar entropy summand extends continuously to zero by u/exp(u)->0; ordered Hermitian eigenvalues are operator-norm Lipschitz. A finite minimum of continuity radii gives epsilon/d for d>=1, including degeneracy and rank loss; d=0 has no density operators, hence a vacuous domain. Natural logarithms and fixed d are essential. No AC or uniform-in-d assertion is used.

### `lem-it-hayashi-nagaoka-finite-operator-inequality`

Checked both steps against the current square-root order lemma and spectral/positivity interfaces, and Wilde v8 Lemma 16.4.1, Eqs.16.25–16.41. Expanding the positive square proves the c-cross-term bound; collecting terms gives 2+c+c^-1 and 1+c. Square-root monotonicity and sqrt(S)>=S apply since 0<=S<=I. Taking c=1 yields constants 4 and 2. Kernel(X) is killed by both S,T; self-adjointness makes the two blocks invariant. Inverse congruence is only on support, and the kernel inequality is I<=2I, including zero-dimensional blocks. No AC.

### `lem-it-schmidt-rank-compression-fidelity-bound`

Independently checked steps 1.1–4.1, current compression definition and Kraus/Schmidt/spectral/Cauchy–Schwarz suppliers. Each composite Kraus map factors through M; its branch lies in R tensor ran(K), so the Schmidt-support rank is <=M (now explicit, refuter:23:1 confirmed nonfatal). The squared Schmidt coefficients are the reference reduced-state eigenvalues by taking the partial trace of the displayed expansion; zero padding handles a larger reference. Weights q_j in [0,1] sum to <=M, so the ordered-eigenvalue bound and Kraus normalization sum branch norms to one. M>=dim(R), M=1, rank-deficient/pure states and zero branches are covered. No Statement, dependency, consumer interface or AC change.

### `lem-it-square-root-cq-packing-bound`

Checked all four steps and all nine current supplier interfaces. Each Gamma is an effect and the inverse on support gives a POVM with a positive failure outcome. Independence factors the competing trace expectation; positive-product trace and cyclicity apply without commutativity, and the compressed average-state and rank hypotheses give d/D. The transmitted term uses the raw gentle bound and trace-norm duality to obtain u+2sqrt(u); Hayashi–Nagaoka supplies constants 2 and 4. Averaging gives M-1 competitors and finite-sample existence. M=1, u=0 or 1, singular sum Gamma and zero-probability symbols cause no problem. No AC, interface change or defect found.

### `def-it-cq-channel-block-code-and-error`

Checked the complete Definition and all four actual supplier interfaces. Finite nonempty input alphabet, nonzero output space and n,M>=1 are inherited or explicit. POVM positivity and normalization make each summand an error probability in [0,1], with uniform message prior. Deterministic encoders may repeat codewords; no injectivity is assumed. Reliability uses average error and capacity uses sup liminf in natural-log units, matching the later HSW converse. M=1 and a singleton input alphabet admit zero rate. No algorithm/proof claim, unrestricted quantum-input assertion or choice axiom is present.

### `lem-it-cq-typical-projector-dimension`

Checked all six steps and eleven current supplier interfaces. Spectral IID AEP yields global mass/rank/eigenvalue bounds. For cq words, positive weights force support(sigma_x) subset support(bar sigma); zero-probability symbols are excluded from T_n. A fixed finite kappa controls both finite families S(sigma_x) and mu_x. Conditional spectral and bar-sigma spectral measurements are independent across tensor factors, not necessarily identically distributed; bounded positive spectra give variance <=n L^2, hence common O(1/n) Chebyshev tails using delta/2 margin. The eigenvalue window gives both rank upper bounds and compressed operator bounds. Max of the two tails is one u_n->0, eventually in [0,1]. Pure states, repeated/zero eigenvalues and noncommuting sigma_x cause no issue because each measurement basis is specified. All choices finite; no AC or repair.

### `thm-it-schumacher-quantum-source-coding`

Independently checked all four steps and every actual supplier. Encoder and decoder have explicitly normalized finite Kraus families even when typical rank is zero; the composite projection branch contributes typical mass squared, and remaining branches are nonnegative. The flag adds only ln(2)/n to the rate bound. For the converse the limsup gap supplies fixed delta>0; any M_n selected block eigenvalues contribute at most atypical mass plus M_n times the typical spectral ceiling. The repaired Schmidt-rank lemma applies to rho tensor n, yielding fidelity ->0. The shorthand rho in Fact F3 is read as the block source in its explicit n-block application, consistently with the supplier statement and step 1.2. Pure/zero-eigenvalue states and M_n>=1 are covered; at S=0 the strictly-below-rate premise is impossible. Finite lexicographic bases define the code sequence without AC. No further repair or decision owed.

### `thm-it-hsw-classical-quantum-channel-capacity`

Independently checked all seven steps and twenty current suppliers. A finite orthonormal basis transfers entropy continuity on C^d to H_B, preserving spectrum and operator norm; now explicit (refuter:23:2 confirmed nonfatal). The nonempty closed bounded simplex and extreme-value theorem give the maximum, with a point-mass law ensuring chi_*>=0. Conditioning on T_n multiplies the average output upper bound by (1-eta_n)^-1, and the uniform acceptance/rank hypotheses fit packing with d/D=e^-n(chi_p-2delta)/(1-eta_n). Its failure outcome may be assigned to message 1 without increasing average error, giving the required M-outcome code. Finite lexicographic codebook selection avoids AC. Holevo plus Fano gives (1-e)ln M<=chi_n+ln2; SSA with a one-dimensional middle factor yields subadditivity, while product eigenvalues give entropy additivity, hence chi_n<=n chi_*. Dividing by n(1-e_n) bounds limsup rates. M=1, R=0, chi_*=0, zero input weights and nonfaithful outputs are covered. No defining interface changed.

### `cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm`

Checked both counterexample steps and all six current dependencies. Two equiprobable orthogonal pure qubit outputs average to I/2, so chi=ln 2. The X-basis effects are positive orthogonal rank-one projections summing to I. Every conditional outcome is 1/2, the four joint masses are 1/4, and every mutual-information log ratio is one, giving I=0<chi. This refutes the universal claim about every fixed POVM; it makes no claim that the optimum POVM fails. State normalization, log units and strict inequality are valid. Explicit finite witness needs no AC; no repair or decision owed.

### `ex-it-cq-binary-pure-state-channel`

Checked both verification steps and all five current supplier interfaces. A global phase and finite orthonormal basis give vector coordinates (1,0) and (c,sqrt(1-c^2)). The average matrix has trace 1, determinant (1-c^2)/4 and eigenvalues (1+c)/2,(1-c)/2. Individual pure states have zero entropy, giving the binary entropy formula in nats. HSW gives C>=the displayed equiprobable chi and hence every R<chi; no equality with the maximized capacity is asserted here. Endpoint c=0 gives ln2 and c=1 gives identical density operators, eigenvalues 1,0 and chi=0. All choices finite; no repair or decision owed.

## Prerequisite and source review

Read all current routed carriers, the two lower-risk definitions as prerequisites and the diagonal-qubit example as context. For the latter, the spectrum $(p,1-p)$ gives $h(p)$, including zero endpoints and $h(1/2)=\ln2$; Schumacher gives the threshold in nats and division by $\ln2$ gives qubits. Direct suppliers were opened at their exact current Statement or Definition; the Kraus and Schmidt suppliers were also read through their proofs. In particular:

- Linear algebra/quantum interfaces: purification, Hermitian partial-trace trace-norm contraction, trace norm and its duality, density operators, spectral theorem, nonnegative square root and operator characterizations, Cauchy–Schwarz, adjoint definition/algebra, Kraus–Choi equivalence, trace-preserving Kraus normalization, Schmidt decomposition, quantum-channel definition, POVM/outcome definition and probability normalization, tensor register, partial trace and its characterization, positive-product trace, cyclicity and linearity.
- Analytic interfaces: real powers, compact-interval FTC, oriented integrals, subinterval additivity, monotone substitution, integral monotonicity, bounded monotone convergence, continuity implies integrability, Hermitian eigenvalue Lipschitz bound, natural-log laws, exponential domination, Heine–Borel and extreme-value theorem.
- Finite-information interfaces: von Neumann entropy, cq state/Holevo definition, IID information AEP, variance/covariance, Chebyshev, probability union bounds, Holevo measurement bound, quantum strong subadditivity, Fano, finite entropy chain rule and finite mutual-information definition.

These are prerequisite-interface checks, not whole-proof audits of unrelated published or outside-batch suppliers. The current cross-batch input retains its 19 verified edges: 17 item-interface uses and two reading-route edges. Item uses agree with the current finite-dimensional, finite-alphabet, nats and support conventions. No edge or claim changed and no supplier-first outside repair is needed; a scope-specific record was added to `briefs/tasks/frontier-dependency-ledger.md`.

Authoritative external text independently read: [Wilde v8](https://arxiv.org/pdf/1106.1445v8), Lemma 9.4.2 and Eqs. (9.203)–(9.210), PDF pp. 278–279; Lemma 16.4.1 and Eqs. (16.25)–(16.41), PDF pp. 492–493. Checked the unnormalized gentle bound, operator hypotheses, constants and inverse-on-support convention against the local arguments. [Watrous, TQI](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf) was opened for bibliographic context; no additional complete external theorem proof from that book is claimed as independently reread. The other local arguments were checked directly from their written derivations and current library supplier interfaces.

## Local validation and handoff

All commands below exited 0:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-it-schmidt-rank-compression-fidelity-bound.md items/thm-it-hsw-classical-quantum-channel-capacity.md` — both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-it-schmidt-rank-compression-fidelity-bound.md items/thm-it-hsw-classical-quantum-channel-capacity.md` — 2 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-it-schmidt-rank-compression-fidelity-bound.md items/thm-it-hsw-classical-quantum-channel-capacity.md` — both YAML and all math parse.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-23.proof-contracts.json --strict` — 15/15 checked, 0 errors, 0 warnings.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-23.proof-contracts.json` — run before review and again after completion; twelve HIGH/CRITICAL items.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-23.proof-contracts.json --require-reviewed` — 15 routed, 0 errors.
- `node tools/proof-layout.mjs items/lem-it-schmidt-rank-compression-fidelity-bound.md items/thm-it-hsw-classical-quantum-channel-capacity.md` — final batched invocation after final item edits and reflow: 2 items, 11 steps, 0 defects.
- Both `defect-ledger append` transactions accepted their single new closed row and refreshed the generated view.

No source edit occurred after the final layout check. No finite-smoke execution, judge, decision stamping, certification, dispatch, engine transition or full gate battery was attempted. The engine owns the remaining stamping and gates. Local work is complete; no blocker remains.
