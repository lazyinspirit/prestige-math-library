# Local weighted overlapping-block proof proposal

This is derivation/evidence only. No item source, metadata, hash, readiness record, or test result is changed or asserted. The actual algorithms and their exact covariance lemmas were read, together with the L2-m-approximability definition, the published Hilbert CLT, the long-run covariance lemma, and the taper-normalization lemma.

## Contract and precise weight qualification

Let X be the centered shift, sigma = ||X_0||_2, sum(delta_m)<infinity, and m delta_m -> 0. Work on the replacement extension in the definition. For each b let deterministic real weights c_{b,1},...,c_{b,b} satisfy

- |c_{b,r}| <= A, uniformly in b,r;
- b^{-1} sum_r c_{b,r}^2 = 1;
- q_b(h):=b^{-1} sum_{r=1}^{b-h} c_{b,r} c_{b,r+h} -> 1 for every fixed nonnegative integer h.

The first condition alone suffices for every approximation, uniform-integrability, concentration and partial-block bound below. The latter two identify the limiting covariance with Gamma. Bounded weights alone do NOT imply that identification: constant zero weights give zero covariance, and normalized alternating signs can target a different covariance series.

Take N=n-b+1, b->infinity and b/n->0. These conditions follow from the requested b/sqrt(n)->0. Define

Z_{j,b}=b^{-1/2} sum_{r=1}^b c_{b,r} X_{j+r-1},

Q_n=N^{-1} sum_{j=1}^N Z_{j,b} tensor Z_{j,b},

bar Z_n=N^{-1} sum_j Z_{j,b}, and A_n=Q_n-bar Z_n tensor bar Z_n.

The conclusions established below are E||A_n-Gamma||_1 -> 0 and uniform integrability of {||Z_{j,b}||^2: b>=1,j in Z}. Thus the proposal gives trace-norm, hence Hilbert-Schmidt, consistency under the original second-moment assumptions. No fourth moment of X is imposed.

## Uniform weighted second-moment and replacement bounds

For h>=1, X_{h,h} is independent of X_0: its retained original indices are 1,...,h, and its own replacement array is independent. Consequently

||E[X_0 tensor X_h]||_1 <= sigma delta_h.

This is the same independence argument as the published long-run covariance proof, using h instead of its slightly looser h-1 index. Therefore K:=sigma^2+2 sigma sum_{h>=1} delta_h is finite. For every finite deterministic real sequence alpha_t, expansion, stationarity, and 2|alpha_t alpha_{t+h}| <= alpha_t^2+alpha_{t+h}^2 give

E||sum_t alpha_t X_t||^2 <= K sum_t alpha_t^2.                 (1)

In particular E||Z_{j,b}||^2 <= A^2 K (and <=K under the squared normalization). Equation (1) also applies to incomplete prefixes of any weighted block.

Put D_{t,m}=X_t-X_{t,m}. Step 1.1 of the published Hilbert CLT proves, by actual disjoint innovation sets,

|E<D_{0,m},D_{h,m}>| <= delta_m(delta_h+sigma) for 1<=h<m,

|E<D_{0,m},D_{h,m}>| <= delta_m delta_h for h>=m.

These are individual lag bounds, not merely an unweighted partial-sum conclusion. Therefore expansion with arbitrary |c_{b,r}|<=A yields

sup_{j,b} E||b^{-1/2} sum_r c_{b,r} D_{j+r-1,m}||^2 <= A^2 epsilon_m^2,       (2)

epsilon_m^2=delta_m^2+2 delta_m sum_{h>=1}delta_h+2 sigma(m-1)delta_m -> 0.

Negative lags have the same scalar inner-product covariance by stationarity and symmetry of the real inner product. The last convergence uses the additional m delta_m ->0; no monotonicity of delta_m is assumed.

## Fixed-m bounded truncation: the fourth moments belong only here

Fix m. Set Y_t=X_{t,m}, let T_M(y)=y 1_{||y||<=M}, and set V_t=T_M(Y_t)-E T_M(Y_0). The sequence V is centered, stationary, m-dependent, and ||V_t||<=2M. Let eta_{m,M}=||Y_0-V_0||_2. Since EY_0=0,

eta_{m,M} <= 2 ||Y_0 1_{||Y_0||>M}||_2 ->0 as M->infinity.

The centered residual Y-V is also m-dependent. Expansion and Cauchy-Schwarz, with zero covariances outside distance m, give

sup_{j,b} E||b^{-1/2} sum_r c_{b,r}(Y-V)_{j+r-1}||^2 <= A^2(2m+1) eta_{m,M}^2.       (3)

Combining (2) and (3) in L2, the normalized X block and the normalized V block Z^V differ by at most

d_{m,M}=A epsilon_m+A sqrt(2m+1) eta_{m,M}, uniformly in j,b.               (4)

Choose m first, then M. This makes d arbitrarily small, without choosing either as a function of n.

Here is an explicit fourth-moment proof for Z^V. For independent centered Hilbert elements U_i with ||U_i||<=L, expand ||sum U_i||^4. Terms with a singleton index vanish by conditioning on that independent centered element. The surviving terms are bounded by

sum_i E||U_i||^4+6 sum_{i<j} E||U_i||^2 E||U_j||^2 <= 3 q^2 L^4

for q terms. Indeed the remaining inner-product squares are at most the products of squared norms by Cauchy-Schwarz. Divide the b terms c_{b,r}V_{j+r-1} into p=m+1 residue classes. Within each class the elements are jointly independent by finite dependence (or directly by disjoint innovation sets). The deterministic inequality ||sum_{ell=1}^p u_ell||^4 <= p^3 sum_ell ||u_ell||^4, applied to class sums, proves

sup_{j,b} E||Z^V_{j,b}||^4 <= 3 p^3 A^4 (2M)^4.                         (5)

A residue class with zero elements contributes zero. We used sum_ell q_ell^2<=b^2. Thus no moment beyond E||X_0||^2 entered.

## Uniform integrability

By (4), (1), and Cauchy-Schwarz,

sup_{j,b} E| ||Z_{j,b}||^2-||Z^V_{j,b}||^2 | <= d_{m,M}(2 A sqrt(K)+d_{m,M}).       (6)

For fixed m,M, (5) makes the squared V blocks uniformly integrable. Equation (6) makes the squared X blocks arbitrarily close in L1 to this uniformly integrable family, so they too are uniformly integrable. For completeness, for nonnegative F,G and L>0,

E[F 1_{F>L}] <= 2 E|F-G|+E[G 1_{G>L/2}].

This follows by dividing {F>L} into G<=L/2 (where F<=2|F-G|) and G>L/2. Apply it with the squared norms, then send L->infinity and d->0.

## Concentration of overlapping empirical tensor averages

First fix m,M and use V throughout. The Hilbert-Schmidt-valued variables F_j=Z^V_{j,b} tensor Z^V_{j,b} have uniformly bounded second moment by (5); the real variables f_j=||Z^V_{j,b}||^2 have the same bound. Blocks separated by more than b+m indices depend on disjoint original innovation sets and disjoint replacement arrays, so these variables are independent. Centering and expanding a Hilbert-space second moment therefore show

E||N^{-1} sum_j(F_j-EF_j)||_{HS}^2 <= C_{m,M,A}(2(b+m)+1)/N ->0.             (7)

The identical bound holds for the scalar trace average. In (7), each covariance inner product is bounded by the common second-moment bound; outside the indicated range it is zero. This is a local proof of the overlap concentration, not an appeal to an empirical-covariance theorem.

We need trace-norm concentration, not just Hilbert-Schmidt concentration. Let B_n=E Q_n^V. The lag covariance series of V is finite, so the weight assumptions imply

B_n -> Gamma_V:=sum_{|h|<=m} E[V_0 tensor V_h] in trace norm.                (8)

For negative h use the adjoint covariance. Gamma_V is positive since it is the operator-norm limit of positive B_n. The finite-rank compression argument below proves E||Q_n^V-B_n||_1 ->0 from (7)-(8).

For a finite-rank orthogonal projection P of rank d and Q=I-P, any positive trace-class T satisfies

||T-PTP||_1 <= tr(QTQ)+2 sqrt(tr(PTP) tr(QTQ)).                           (9)

Indeed decompose T into its four P,Q corners; the Q diagonal has trace norm its trace, and the off-diagonal corner has trace norm at most the displayed square root. To verify the latter locally, write T=E[U tensor U] for the positive operators at hand (Q_n^V, B_n), obtaining ||PTQ||_1 <= E||PU||||QU|| <= sqrt(E||PU||^2 E||QU||^2). For Gamma_V, (9) follows by passing to its trace-norm limit B_n, or by its positive spectral decomposition.

The finite corner obeys E||P(Q_n^V-B_n)P||_1 <= sqrt(d) (E||Q_n^V-B_n||_{HS}^2)^{1/2}->0. Apply (9) to Q_n^V and B_n and Jensen/Cauchy-Schwarz to expectations. Since E Q_n^V=B_n and sup_n tr B_n<infinity, the remaining limsup is at most

2 tr(Q Gamma_V Q)+4 sqrt((sup_n tr B_n) tr(Q Gamma_V Q)).

Choose finite-rank P increasing to I in a complete countable orthonormal basis. The tail trace tends to zero: for positive trace class Gamma_V it is the tail of the nonnegative convergent sum of its diagonal entries. This proves the promised L1 trace-norm concentration. There is no inference that Hilbert-Schmidt convergence alone controls trace norm.

Now transfer to X. The rank-one identity gives

||u tensor u-v tensor v||_1 <= ||u-v|| (||u||+||v||).

Consequently (4) gives

E||Q_n-Q_n^V||_1 <= d_{m,M}(2 A sqrt(K)+d_{m,M}),                          (10)

uniformly in n, and the same bound applies to ||E Q_n-E Q_n^V||_1. Combining (10) with the fixed-m,M concentration, first n->infinity, then M->infinity for each m, then m->infinity, proves

E||Q_n-E Q_n||_1 ->0.                                                     (11)

## Deterministic covariance target and empirical centering

With C_h=E[X_0 tensor X_h], stationarity gives

E Q_n=C_0+sum_{h=1}^{b-1} q_b(h)(C_h+C_h^*).

Cauchy-Schwarz for the zero-extended deterministic weights gives |q_b(h)|<=1. The series sum_h ||C_h||_1 is finite by the first section. Split the series at a fixed finite lag, use q_b(h)->1 on that finite set and the summable bound on its tail. It follows directly that E Q_n->Gamma in trace norm. With (11), E||Q_n-Gamma||_1->0.

For centering, Minkowski and (1) give

||bar Z_n||_2 <= b^{-1/2} sum_{r=1}^b |c_{b,r}| ||N^{-1}sum_{j=1}^N X_{j+r-1}||_2 <= A sqrt(K b/N).

Thus E||bar Z_n tensor bar Z_n||_1 <= A^2 K b/N->0. Therefore

E||A_n-Gamma||_1 ->0.                                                     (12)

All constants remain independent of n and the block start. The uniform bound on the weights can be restricted to sufficiently large b; a finite initial collection never affects these limits or uniform integrability.

## Actual MBB/TBB weights and data centering

MBB has c_{b,r}=1 and q_b(h)=(1-h/b)_+, so all weight conditions hold.

The TBB algorithm actually uses c_{b,r}=a_b w((r-1/2)/b), not w(r/b). Its normalization gives sum c^2=b exactly. The normalization lemma gives bounded a_b eventually, hence bounded c. Symmetry and monotonicity make the finite c sequence nonnegative and unimodal. Extend it by zero outside 1,...,b. Its total variation is at most 2A. For h>=1, telescoping shifts yield

sum_{r in Z}|c_{b,r+h}-c_{b,r}| <= h sum_{r in Z}|c_{b,r+1}-c_{b,r}| <=2Ah.

Consequently |q_b(h)-q_b(0)| <= (A/b) sum_r |c_{b,r+h}-c_{b,r}| <=2A^2 h/b->0.

This works for discontinuous monotone tapers; no unassumed Lipschitz condition is used.

For either a full or partial TBB block, replacing X_t by X_t-bar X_n subtracts the same vector (sum of that block's deterministic weights) bar X_n from every candidate block. Its empirical centering over j cancels that vector EXACTLY. Hence the centered empirical block covariances in the actual algorithm coincide with those just analyzed on the original centered process. There is no extra sample-mean estimation remainder to bound.

## Exact final partial block and conditional Lindeberg consequence

Write n=kb+r, 0<=r<b. For q<=b let S_j^{(q)}=sum_{ell=1}^q c_{b,ell}X_{j+ell-1}; let C_q be its empirically centered covariance over the SAME N starts used for full blocks. Equation (1) gives

E tr(C_q) <= E||S_1^{(q)}||^2 <= A^2 K q.

Since C_q is positive, E||C_r/n||_1<=A^2 K b/n->0. The full covariance is C_b=b A_n. Both exact covariance lemmas therefore give

(k C_b+C_r)/n=(kb/n) A_n+C_r/n -> Gamma in L1 trace norm.                  (13)

This proves the actual arbitrary-n covariance conclusion and does not replace the partial-block start set with n-r+1 starts.

Here is also the conditional Lindeberg bound needed by the separate conditional-CLT supplier. Let U_j=Z_{j,b}-bar Z_n, and L>0. The elementary split ||Z_j||>L/2 or <=L/2 shows

N^{-1}sum_j ||U_j||^2 1_{||U_j||>L} <= 2N^{-1}sum_j ||Z_j||^2 1_{||Z_j||>L/2}+6||bar Z_n||^2.

On the second part, ||U_j||>L and ||Z_j||<=L/2 imply ||bar Z_n||>L/2 and hence ||Z_j||^2<=||bar Z_n||^2. This verifies the displayed constants. For complete blocks take L=epsilon sqrt(n/b). It diverges, and the expectation of the right side tends to zero by uniform integrability and the mean bound. The complete-block conditional Lindeberg sum is kb/n times the left side. For the final partial block its Lindeberg contribution is at most its full conditional second moment divided by n, whose expectation is <=A^2 K b/n. Markov gives the conditional Lindeberg condition in probability.

## Exact dependencies, remaining scope, and flaws avoided

The non-elementary existing inputs are the replacement-extension definition, separability/choice assumptions already present there, the trace-class/nuclear rank-one norm facts, and the scalar Cauchy-Schwarz/Bochner-integration/independence facts. The Hilbert CLT is used only through its proved step 1.1 lag bounds (reproduced above); its weak-limit conclusion is unnecessary for this covariance/UI proof. The long-run covariance lemma identifies Gamma with the absolutely convergent lag series. The taper-normalization lemma supplies bounded a_b. The exact two conditional covariance lemmas supply (13) for the actual algorithms.

The only added local arguments are (1)-(13), bounded m-dependent fourth-moment expansion, finite-rank trace compression, and the elementary UI/Lindeberg tail inequalities; none invokes an external empirical-covariance or tightness theorem. If these appear in an item, the trace compression and independent Hilbert fourth-moment arguments must be included locally or separately proved as real suppliers. A conditional triangular-array Hilbert CLT is a separate obligation; this note supplies its covariance and Lindeberg hypotheses, not a substitute for its proof.

The published Hilbert CLT's epsilon_m tends to zero only along a subsequence under its own summability-only statement; this proof legitimately uses the stronger m delta_m->0 to take all m. Reusing only its unweighted conclusion without reproducing the lag bounds would not justify taper weights. Untruncated fourth-moment estimates would assume a missing hypothesis. HS convergence alone would not justify trace/tightness control. Bounded weights alone would not identify Gamma. Ignoring the midpoint convention, empirical centering cancellation, same-N final-prefix law, or the partial block would miss actual algorithm details.

In fact this derivation requires only b/n->0, a weaker block-growth restriction than the preserved theorem statements; there is no need to alter those statements.

## Authored shared supplier and contract-content proposal

Following the owner's subsequent explicit instruction, the first shared supplier was authored as `items/lem-weighted-overlapping-block-moment-and-covariance-limits.md`, draft, pipeline run `bayesian-computational-statistics-62`. No manifest, proof-contract JSON, content hash, readiness record, audit or certification stamp was edited. The final explicit item command `node tools/proof-layout.mjs items/lem-weighted-overlapping-block-moment-and-covariance-limits.md` returned exit 0 and `proof-layout: 1 items, 11 steps, 0 defects`. This is a layout check, not a mathematical acceptance claim. No optional tests were run.

The final item improves the concentration proof above: it does not need Hilbert-Schmidt-valued random variables or a finite-m covariance limit Gamma_V. For fixed m,M and any fixed finite matrix coordinate, its empirical variance is O((b+m)/N). The finite corner therefore concentrates in expected trace norm by its rank-one matrix expansion. For complete basis projections P_d, finite dependence directly bounds E||(I-P_d) Z_b^V||² by A²(2m+1)E||(I-P_d)V_0||² ->0 uniformly in b. The explicit tensor corner inequality then upgrades finite corner concentration to full L1 trace concentration. This proves concentration under bounded weights alone; the autocorrelation conditions enter only the deterministic target step.

Suggested proof-contract content, to be encoded by the owner using the repository's actual contract schema:

- Statement inputs: AC; centered L2-m-approximable shift in the specified real separable H; summable replacement errors; m delta_m->0; deterministic coefficient rows bounded by A. Covariance target additionally requires exact squared normalization and fixed-lag autocorrelation->1; n-block regime b->infinity, b/n->0.
- Outputs: UI of squared full normalized blocks; all q<=b prefix moment bound; arbitrary finite-rank projection prefix bound; E||bar Z||²<=A²Kb/N; L1 trace-norm centered empirical covariance consistency; probability consequence; MBB/TBB actual-weight specialization.
- Step 1.1: verify independence of X0 and X_{h,h}, derive sigma delta_h tensor covariance bound, arbitrary-coefficient quadratic moment bound, projected prefix bound, and dominated-convergence projection tails.
- Step 1.2: finite-sum L2 Minkowski proof and block-average bound, with the actual common N starts.
- Step 2.1: individual difference lag bounds, weighted expansion and epsilon_m formula; full rate used only here.
- Step 2.2: centered radial cutoff of fixed-m replacement, m-dependence retained, residual L2 error eta->0, arbitrary-weight residual variance bound, sequential m then M approximation.
- Step 3.1: explicit independent centered Hilbert fourth-moment expansion and vanishing singleton terms; m+1 independent residue classes; finite fourth bound only for bounded cutoffs.
- Step 3.2: rank-one trace difference and squared-norm L1 approximation; explicit tail inequality transfers UI.
- Step 4.1: actual disjoint innovation sets at separation greater than b+m; fixed matrix-coordinate empirical variance; finite-corner trace concentration by rank-one matrix expansion.
- Step 4.2: explicit four-corner tensor inequality; finite-m projection tail bound uniform in b; order n->infinity then projection dimension->infinity; L1 full trace concentration.
- Step 4.3: two tensor approximation errors; order n->infinity, M->infinity for fixed m, then m->infinity; no n-dependent cutoff choice or ergodic theorem.
- Step 5.1: zero-extended weight autocorrelation bounded by one, absolutely summable tensor covariance series, finite-lag/tail argument, empirical-center subtraction, Markov conversion.
- Step 5.2: exact MBB autocorrelation and midpoint TBB squared normalization; unimodal zero-extended total variation at most 2A; telescoping shifts; finite initial inadmissible sizes discarded.

Dependency accounting in the item: the shift definition and its replacement extension; AC; Hilbert CLT only for its actual proved individual lag bounds; long-run covariance lemma for the target identification; nuclear rank-one norm and trace-class Banach ideal; positive trace theorem; Bochner norm inequality; scalar Cauchy-Schwarz/Markov; complete-basis projection/Parseval and dominated convergence; actual two block algorithms and taper-normalization lemma for the final specialization. No finite-dependent CLT, external covariance theorem, HS convergence criterion, conditional weak-limit theorem, or uniform-integrability theorem is silently consumed.

The parent owns the separate conditional Hilbert-array limit supplier and the theorem consumers. The projected prefix estimate provided in this shared supplier is, for R=I-P and alpha=||RX0||_2,

E||sum_{ell=1}^q c_{b,ell} R X_{j+ell-1}||² <= A² q (alpha²+2alpha sum_{h>=1}delta_h).

After empirical centering this only decreases conditional covariance trace. With the exact k full blocks plus r-entry prefix, their expected total projected conditional variance divided by n is bounded by A²(alpha²+2alpha sum delta_h), since kb+r=n. This supplies the parent with uniform projection-tail control for a local compactness/tightness argument.
