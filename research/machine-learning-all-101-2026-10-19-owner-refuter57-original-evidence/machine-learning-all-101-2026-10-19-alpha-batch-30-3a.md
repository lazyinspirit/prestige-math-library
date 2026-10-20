# Batch 30 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-30`. Scope retains original group `j`. One touched obligation; no reader, refuter or page obligations. Reader and refuter reports are evidence, not acceptance.

Initial risk report: 36 contracts, 23 HIGH/CRITICAL items, zero errors without review requirement.

## lem-finite-martingale-difference-sum-variance

Reviewed all three steps and exact conditional-expectation, taking-out, filtration, expectation and Euclidean suppliers. L2 of both Z and xi gives L2 of M; 2|ab|<=a^2+b^2 makes all cross products integrable. Earlier xi is measurable at j-1, so coordinatewise taking-out kills cross terms. The final two-sum norm bound yields the factor 2. AC is explicitly inherited only for the conditional-expectation interface. m=1 and zero errors give valid inequalities; d=0 is vacuous. No reader/refuter finding and no diagram. No defect found.

## lem-smooth-convex-gradient-difference

Reviewed all three steps and the descent, finite-gradient, convexity and Euclidean suppliers. Convex first-order support at x-star makes each affine-shifted phi_i minimized there; descent at x-grad(phi)/beta gives the 2 beta Bregman bound. Averaging cancels the linear terms because the attained unconstrained finite-average minimizer has gradient zero. beta>0 is essential for the trial point and is stated. N=1, x=x-star, constant/affine clients and d=0 cause no failure. No reader/refuter finding or diagram; no defect found.


## lem-local-sgd-client-drift

Checked steps 1.1-1.2 against the local-SGD synchronization rule and relaxed-square, finite expectation and Euclidean interfaces. The variance-around-mean identity bounds deviation by displacement from the last common iterate. A path contains at most H unsynchronized updates and eta_h<=eta_s<=2eta_t, giving 4 eta_t^2 G^2 H^2. At t=s the empty displacement is zero, at T synchronization forces zero, and K=1 has zero deviation. Finite index laws ensure integrability. No defect or diagram; reader/refuter findings empty.

## lem-local-sgd-sampling-variance

Checked both authored steps against the actual mutually independent fresh indices in alg-local-sgd and finite expectation/independence/Euclidean suppliers. Fixing the finite past leaves fixed worker points and bK independent centered draws. Off-diagonal inner-product expectations vanish, so division by (bK)^2 leaves sigma^2/(bK); averaging the past preserves the bound. K=b=1 and sigma=0 satisfy the formula. No conditional-expectation choice theorem is used. No defect or diagram; reader/refuter findings empty.

## lem-local-sgd-virtual-progress

Checked all three steps with the algorithm mean update, finite-average gradient, descent and Jensen interfaces. Fresh current finite-index centering removes the update cross term. Descent bounds ||grad f(x_k)||^2 by 2L gap; strong convexity and Young give the displayed gap coefficient -eta+2L eta^2 and drift coefficient 2L eta. eta L<=1/4 yields -eta/2; the negative strong-convexity and gap terms permit Jensen in the stated direction. Synchronization preserves the mean. Zero gap, K=1 and eta=1/(4L) cause no sign reversal. No defect or diagram; reader/refuter findings empty.

## lem-uniform-client-sampling-moments

Checked three steps and uniform subset, finite-expectation and Euclidean suppliers. Indicator first and pair inclusion probabilities give covariance -S(N-S)/(N^2(N-1)); centered vectors sum to zero, yielding exactly (N-S)/(SN(N-1)) times the centered squared sum. N/(N-1)<=2 and centering decreases second moments give the loose bound. N=1 is separated before division; S=1 and S=N work and the full sample variance vanishes. No AC needed for finite counting. No defect or diagram; reader/refuter findings empty.

## ex-client-data-locality-does-not-imply-dp

Checked the full Example, F1-F2 and both proof steps against the actual DP, measurable-space, measure and kernel definitions. The database domain has the power-set sigma algebra, so K(D,A)=1_A(count(D)) is measurable and each row a Dirac probability law on (N_0,P(N_0)). The empty/single-record pair has count outputs 0/1 and event {1}; the ordered (D-prime,D) inequality reads 1<=delta, false for every finite epsilon and delta<1, including epsilon=delta=0. Countable N_0 is the correct global output type. No statement changed and no consumer repair is needed. No diagram or reader/refuter finding.


## fs-scaffold-general-convex-uniform-output-round-headline

Independently checked all nine refutation steps with the actual Option II K=S=1 update. The identical quadratic yields x_next=(1-t)x+t(a_I-m) and z_next=(1-t)^2 z+t^2 V. Bias forces mean z>=min(1/2,1/(16tR)); last-update probabilities are independent of x_s and at least N-r entries remain 1. The variance lower bound V_r>=r/(32N) for 2ceil(1/t)<=r<=N/2, and its convolution over L=floor(1/(4t)) terms, give mean z>1/(1024 sqrt(N)) for R<=N/2. With beta=N^-2 and epsilon=F N^-3/4 the proposed rounds are O(N^3/4), contradicting that lower bound for large N. Checked floor/ceiling margins, t<=1/81, q<16 and q>=16 separately. All moments finite on finite histories. This refutes exactly the quantified constant-step uniform-output Statement, not every output allowed by the source. Preserve this item for owner disposition. No diagram or current defect.

## lem-fedavg-local-drift

Reviewed all three steps with FedAvg, gradient-step nonexpansiveness, standard-to-gap conversion, relaxed squares and conditional-expectation suppliers. eta_l<=2/beta follows from eta_tilde=K eta_l eta_g, eta_g>=1 and its cap. The conditional q_k recurrence and its square-root induction give 2k^2 eta_l^2 ||grad f_i(x)||^2+2k eta_l^2 sigma^2. Summing query indices 0..K-1 yields the displayed drift estimate. Multiplication by 3 beta eta_tilde gives coefficients 2 beta eta_tilde^3/eta_g^2, 4 beta^2 B^2 eta_tilde^3/eta_g^2 and 3 beta eta_tilde^3/(K eta_g^2); all are bounded by the claimed constants under the cap. K=1 has E=0; sigma=G=0 and both dissimilarity branches valid. AC explicitly declared in A2 for conditional expectations. No defect or diagram; reports have no findings.

## lem-fedavg-one-round-progress

Checked all three steps against exact FedAvg, sampling moments, perturbed strong-convexity, descent/gradient, standard-to-gap and martingale interfaces. Expected update uses population hypothetical paths independent of sample. Perturbed strong convexity yields -2 eta_tilde gap, -mu eta_tilde distance/2 and 2 beta eta_tilde E. Two relaxed squares bound v_S+d_S+noise by 4||v_S||^2+4||d_S||^2+2||noise||^2, giving the stated 16 beta(B^2+1), 4 beta^2, 8 sampling and 4 noise constants. Full-prequery conditional centering kills cross-draw noise products without assuming independent clients. The cap absorbs gap and drift terms; increasing 4 to 5 is harmless. N=S=1, full sample and zero noise covered. A2 declares inherited AC. No defect or diagram; reports have no findings.

## thm-local-sgd-convex-round-complexity

Checked all three theorem steps and exact weighted-recursion supplier proof. a>max(16L/mu,H) ensures eta<1/(4L), positive nonincreasing steps and eta_s/eta_t<2. Batch Jensen supplies second moment G^2. Progress, sampling and drift yield recurrence A=1/2, B=sigma^2/(bK), C=8LG^2H^2; weighted telescope gives coefficients mu a^3/2, 4T(T+2a)/mu and 256T/mu^2. The returned quadratic-weighted worker average equals the weighted virtual-mean average, so Jensen has the required direction. T=1, H=1 or T, K=b=1 and zero noise have positive denominators and no missing endpoint. No final-iterate claim. No defect or diagram; reports have no findings.

## ex-scaffold-control-correction

Reviewed both steps and exact federated objective/Option II procedure context. Gradients are w-1 and w+1, initial controls -1 and 1 and mean zero. Corrected exact gradients at 0 vanish for both clients, so every finite local step stays zero for every eta_l>0 by induction. This is explicitly an exact-gradient example; no stochastic equality is claimed. Either client sample and either finite step count preserve the local conclusion. No diagram needed; no defect or reader/refuter finding.


## lem-scaffold-control-tracking-identity

Checked all three steps with Option II, stored query/draw definitions and scalar conditional-expectation/taking-out suppliers. Telescoping local steps cancels old controls exactly, producing the realized K-gradient average. Within a newly selected client the sequential centered errors have orthogonal cross terms by full-prequery conditioning, giving sigma^2/K. A fresh sample retains an old residual with probability 1-S/N independently of history, so induction preserves its zero unconditional mean and second-moment bound. This never conditions on adaptive stored anchors. Server c equals the population control mean pathwise because its increment is 1/N times the selected control changes. Initialization, K=1, S=N, N=1 and sigma=0 covered; A2 declares AC. No defect or diagram.

## lem-scaffold-convex-control-lag

Checked both steps and exact trajectory, sampling, relaxed-square and smooth-convex-gradient suppliers. C_r is the expectation of a squared full-gradient-anchor mean, not the square of an unconditional expected control. Uniform independent sample retains old anchors with probability 1-p; Jensen bounds updated anchor means by K query squared errors. Decomposition around x_{r-1}, the population smooth-convex gradient bound and Lipschitzness give exactly p(4 beta gap+2 beta^2 E_r). No noise term is needed because C uses full gradients. S=N and N=S=1 remove retention; sigma=0 changes no coefficient. No defect or diagram; reports have no findings.

## thm-fedavg-under-gradient-dissimilarity

Reviewed three proof steps and all cited local estimate/averaging and conditional interfaces. With eta_g=sqrt(S), drift and progress combine to gap coefficient -eta_tilde/3, b=11sigma^2/(2KS)+8(1-S/N)G^2/S and c=18betaG^2. The cap gives 0<lambda=mu eta_tilde/2<1. Geometric averaging with a=1/3 produces exactly 3D^2/(eta_tilde W)+3b eta_tilde+54betaG^2 eta_tilde^2. Choosing the minimum admissible cap and the two accuracy bounds, omitting zero denominators, proves existence of the advertised complexity. Exact W=((1-lambda)^(-R)-1)/lambda gives the log threshold; a ceiling/max(1,R) is absorbed because beta/mu>=1. D=0, b=0, G=0 and full participation cause no division failure. Standard condition uses the independently proved unchanged-parameter implication. Weighted deployment mode is excluded. A2 records AC; no defect or diagram.


## lem-scaffold-convex-client-drift

Reviewed three steps and exact nonexpansive-gradient, tracking-identity, stored-anchor C, smooth-convex gradient, relaxed-square and conditional suppliers. Decomposing v_i into centered full-gradient-anchor error, centered residual and current gradient difference gives population second moment <=6(C+beta gap+sigma^2/K). K=1 has E=0. For K>=2 the nonexpansive deterministic step, relaxed square a=1/(K-1) and conditional error centering give the recurrence; its geometric sum <=3K yields E<=18K^2 eta_l^2(C+beta gap)+21K eta_l^2sigma^2. Multiplication by 3beta eta_tilde produces 54,54,63 coefficients. At beta eta_tilde<=1/81 these are bounded by 2/3,1/25,1 as claimed (54/81^2<1/25). eta_g>=1 and inherited AC are explicit. All full sample/noise-free cases valid; no diagram or defect.

## lem-scaffold-convex-server-variance

Checked four steps and all exact decomposition, tracking, uniform sampling, smooth-convex-gradient and martingale suppliers. A+D+Q cancels sampled gradients correctly with b_i=c_i-grad f_i(x-star). Conditional sampling gives Q second moment <=4C+4sigma^2/(KS). Chronologically centered fresh query errors and Lipschitz/Jensen give A<=2beta^2 E+2sigma^2/(KS), while D<=2beta gap. The three-term bound gives coefficients 6,12,6 and 18. Residuals from past adaptive anchors are never treated as conditionally centered given anchors. N=1 or S=N makes Q exactly zero, and K=1/sigma=0 is valid. Explicit A2 accounts for conditional-expectation AC. No diagram or defect; reader/refuter findings empty.

## lem-scaffold-nonconvex-client-drift

Checked three steps and exact algorithm, anchor Xi, tracking, squared-norm and conditional suppliers. Decomposition of v_i gives 3(gradient second moment+beta^2 Xi+sigma^2/K). For K>=2, Lipschitz expansion replaces nonexpansiveness by 1+eta_l beta; eta_l beta<=1/(24K) yields q<1+3/K and sum q^j<=K e^3<24K. This gives 72K^2 eta_l^2 for gradient and Xi, and (72+24)K eta_l^2 for noise. K=1 has every query at x, hence E=0. Positive cap, S=N/N=1 and zero variance work. Full prequery conditioning and A2 AC remain explicit. No use of convexity or missing minimizer assumption; no diagram or defect.

## lem-scaffold-nonconvex-server-variance

Reviewed three steps and exact algorithm, Xi/E definitions, tracking, martingale, uniform sampling, gradient and conditional interfaces. In the conditional mean, c cancels the population c_i mean; Jensen and Lipschitz give the stated 2 beta^2 E+2 gradient bound. The realized direction decomposes as A+grad f(x)+Q. A has second moment <=2beta^2 E+2sigma^2/(KS); history-conditional finite sampling gives Q<=4beta^2 Xi+4sigma^2/(KS). Three squared terms produce exactly 6,12,3,18. No across-client independence is used beyond full prequery martingale centering. Initial Xi=0, full sample, N=1, K=1 and zero variance covered; A2 declares AC. No diagram or defect.


## lem-scaffold-convex-round-progress

Reviewed all three steps against exact server moment, control lag, client drift and perturbed strong-convexity suppliers and conditional interfaces. Expanding distance yields gap -2t+6beta t^2, drift 2beta t+6beta^2t^2, controls 12t^2. Adding 14t^2 C_r/p yields gap -2t+62beta t^2, drift 3beta t rho and excess control (-2+7mu t/p)t^2. Substitution of drift with its exact factor rho leaves noise (18/(KS)+rho/(K eta_g^2))t^2sigma^2. beta t<=1/81 gives rho<=196/243, gap coefficient <=-t and negative excess control under mu t/p<=1/15. For mu=0 the latter ratio is zero and no division by mu occurs; full participation and zero variance remain valid. AC declared in A2. No diagram or defect.

## lem-scaffold-nonconvex-control-lag

Reviewed three steps against actual anchor update, conditional server mean/second moment, sampling, relaxed square and conditional suppliers. Expansion uses actual dependent sample cross terms Z,U,V, not unjustified independent resampling. History-measurable Z gives cross bound p Xi/4+4 M2/p; selected averages have U2<=p^2 E and V2<=p^2 Xi, giving pE+pD2 and pXi/4+4pD2. Thus Xi_next<=(1-p/2)Xi+2pE+(1+5p)D2+4M2/p. Substitution of exact moments and 1+5p<=6 yields 72,36+8/p,18+8/p,108 coefficients. p=S/N>0, including p=1, makes all divisions legitimate; K=1 and zero noise are valid. A2 states inherited AC. No diagram or defect.


## lem-scaffold-nonconvex-round-progress

Checked all three steps and exact descent, conditional server moments, tracking recursion and drift suppliers. With h=beta t and p=S/N, adding 24beta^3t^2 Xi/p produces the authored coefficients and d=1/2+51h+864h^3/p+192h^3/p^2. The cap h<=p^(2/3)/100 gives h<=.01, h^2/p<=.0001, h^3/p and h^3/p^2<=.000001, hence d<1.1. Substituting drift gives negative Xi coefficient <=-5.0352, gradient coefficient <=-.476456<-1/3 and variance <=10(1+S/eta_g^2) beta t^2sigma^2/(KS). Verified arithmetic including 24*(18+8)=624 and both p exponents; no sample-dependent cross term was dropped. sigma=0 handled without division, p=1 and K=1 valid. Potential is nonnegative for the stated finite lower bound; A2 declares AC. No diagram or defect.

Level 6 complete.

## thm-scaffold-convex-and-nonconvex-rates

Reviewed all six proof steps and every exact prerequisite in supplier order. Found and repaired a fatal missing hypothesis: f-star was introduced as any lower bound, but both convex objective-error claims require f-star=f(x-star). Counterexample before repair: N=d=K=S=R=1, f_1(x)=1+x^2/2, beta=mu=1, x0=x-star=0, f-star=0, sigma=0, eta_tilde=1/100; controls and iterates stay zero, V0=0, but objective gap is 1. Added f-star=f(x-star) only for the two convex cases and in Given. Under that hypothesis convex progress/averaging yields 19 noise coefficient, C0<=2beta F, and geometric/uniform outputs exactly as stated. General-convex step optimization A=28beta NF/S yields the three reciprocal-step terms and its D=0 return. Nonconvex progress with Xi0=0 gives 3F/(tR)+60beta t sigma^2/(KS); F=0 implies gradient zero for any lower bound attained there. Checked zero-variance omissions, D=F=0, p=1, K=R=1, positive caps and geometric-weight normalization. AC explicitly declared. Search of all items/library found no item dependency/reference consumers; the sole page is an inventory placement with no body. No consumer repair or outside escalation needed. No diagram. Repair confidence 1; current proof is sound with this correction.

New risk-review defect `ml101-b30-3a-scaffold-minimum-value`: confirmed fatal, locally repaired. This item had no original touched/finding obligation, so no extra synthetic obligation is added to the decisions array. The defect disposition and complete review are recorded here and in the owning contract and ledger. The only routed decision remains the reader-edited DP example.

## Sources, dependencies and diagrams

The current mathematical suppliers were read at their exact Statement/Definition interfaces; their uses and relevant local proofs were checked above. All uses are of finite-dimensional Euclidean algebra, convex descent, finite sampling or the explicitly AC-dependent scalar conditional-expectation interface. Finite-horizon second moments follow inductively from Lipschitz gradients, finite initial vectors and bounded conditional oracle errors; this ensures the conditional products and expectations used in these recurrences are integrable. The authorial expectation and kernel definitions were also checked directly for the touched example.

Consulted [Karimireddy et al., SCAFFOLD](https://cs.nyu.edu/~mohri/pub/scaffold.pdf), §2 p. 2 (minimum convention and (A1)), Algorithm 1 pp. 3–4, Theorem III p. 5 and Appendix E output (22) p. 26. The source uses the attained minimum in convex cases and prints the NF/S headline, while allowing output weights in its appendix. The local proofs above, including the counterexample, were independently checked; no blanket judgment of alternative outputs is made. Consulted [Stich, arXiv v3](https://arxiv.org/pdf/1805.09767v3), Theorem 2.2 and mini-batch Remark 2.4, PDF p. 5: the displayed local-SGD constants and 1/b factor agree. The new minimum-value repair is also forced directly by the exact current convex-progress supplier and the explicit counterexample, independently of external attribution.

The only diagram encountered in the actual prerequisite carriers is alg-scaffold's communication schematic: server sends (x,c), clients return (Delta x_i,Delta c_i), with arrow directions matching the operational equations. It is mathematically correct and proofs do not rely on it. No missing diagram is needed for the reviewed inequalities. The reviewed statements and definitions are uninterrupted by hyperlinks; reference sections follow the complete sections. The repaired theorem retains its six separated single-paragraph proof steps and final tagged terminator.

## Dispositions and consumers

The sole routed obligation is `touched:30:ex-client-data-locality-does-not-imply-dp`: **accepted_repair**, repair confidence 1, closed defect `ml101-b30-3a-count-output-space`. Its exact historical bytes are recovered; no historical uncertainty remains. No reader/refuter/page decisions are owed. The decisions array therefore contains exactly one entry.

The new risk-review finding on `thm-scaffold-convex-and-nonconvex-rates` is **confirmed fatal**, with a complete local hypothesis repair, repair confidence 1, closed defect `ml101-b30-3a-scaffold-minimum-value`. Its pre-edit raw SHA256 a85f009f93555612a5531eee3168e3c715fd8ea539114ce9b043f0c9948c1388 matches the native post-reader hash. This local disposition belongs to the report and risk review because the original scope did not route an additional touched/finding obligation. No extra synthetic decision or acceptance stamp is created.

The theorem's Statement now requires f-star=f(x-star) in the two convex cases. Exact search across all items and library pages found no dependency or reference consumer item; only `library/machine-learning/ml02-federated-optimization.md` lists its unchanged ID. Thus there is no necessary consumer repair or propagation hop. The manifest's ID, kind, title, deps and justified_by mirror remain correct; provenance was already ai-altered, verification is empty, and neither requires a further edit. The owning contract now records the hypothesis-sensitive boundary and full risk review. No page body, inventory, status or compact-layout flag was changed.

All published suppliers remained read-only. No defective published mathematical supplier was found in the uses examined, so no published-consumer ledger edit or lock was needed. Stable IDs and existing proposed withdrawals are preserved. In particular, `fs-scaffold-general-convex-uniform-output-round-headline` is retained for the scheduled owner disposition; this is not an unresolved local prerequisite.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-30.proof-contracts.json`: 36 entries, 23 HIGH/CRITICAL, zero errors without requiring review.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-scaffold-convex-and-nonconvex-rates.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-scaffold-convex-and-nonconvex-rates.md items/ex-client-data-locality-does-not-imply-dp.md`: 2 checked, 0 failing.
- After the final item edits and formatter, one batched `node tools/proof-layout.mjs items/thm-scaffold-convex-and-nonconvex-rates.md items/ex-client-data-locality-does-not-imply-dp.md`: 2 items, 8 steps, 0 defects.
- `node tools/rendercheck.mjs items/thm-scaffold-convex-and-nonconvex-rates.md items/ex-client-data-locality-does-not-imply-dp.md`: 2 files pass actual KaTeX and renderer YAML parsing.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-30.proof-contracts.json --require-reviewed`: zero errors, all 23 required reviews complete.

Live native status recomputed from `.autopilot/machine-learning-all-101-2026-10-19` and recent git log inspected. Local work does not control scheduling. No judge cycle, engine gate battery, hashing stamp, publication or commit was initiated. No open local blocker or escalation remains. The engine owns decision hash stamps and subsequent gates.

Final consistency check: all 215 citation quotes in the 23 reviewed contracts match their current supplier carriers after whitespace normalization; this checks citation bytes, not mathematical validity. Decisions match exactly the sole touched obligation and group batch-30; all 23 risk reviews are complete. Appended two closed defect rows through the serialized ledger tool and regenerated its view successfully.
