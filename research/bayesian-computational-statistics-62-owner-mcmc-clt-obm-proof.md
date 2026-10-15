# OBM proof proposal and exact batch-contract defect

This is a research proposal only. No live item, contract, manifest, stamp, or native run state was edited. The Markov-chain strong approximation remains the separately assigned supplier obligation. Everything after that approximation is proved below, including the degenerate variance case conditional on the corresponding approximation.

## Sources actually consulted

Flegal–Jones, *Batch means and spectral variance estimators in Markov chain Monte Carlo*, Annals of Statistics 38 (2010), 1034–1070, DOI 10.1214/09-AOS735, full-text arXiv v5 PDF: <https://arxiv.org/pdf/0811.1729>. Consulted the introduction's Harris-ergodicity and variance conventions, Assumptions 2–3, Theorem 2, Corollary 1, Appendix A (including Lemma 3), Appendix B.3 in full, and Lemma 8's complete proof and its quoted Lemmas 9–10 (PDF pp. 26–31). The source's argument invokes Damerdji's spectral-estimator convergence, Whittle's quadratic-form inequality, and a KMT approximation for half-normal variables. The direct proof below replaces all three invocations with proved finite-dimensional estimates. It does not replace the unresolved Markov-chain SIP proof with a citation.

Inspected current items: `thm-overlapping-batch-means-strong-consistency`, `def-flegal-jones-obm-batch-size-conditions`, `thm-geometrically-ergodic-chain-strong-invariance-principle`, `alg-overlapping-batch-means-mcse`, `def-state-dependent-one-step-minorization`, `def-geometric-and-uniform-ergodicity-for-mcmc-clt`, `def-long-run-variance-for-stationary-markov-chain`, `thm-mcmc-clt-sufficient-regimes`. Existing basic suppliers include `thm-first-borel-cantelli`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, the Brownian increment interfaces, and (only for the optional Lemma 8 reconstruction) `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity`.

## Confirmed defect: the literal integer monotonicity contract is empty

The current definition exactly reproduces source Assumption 2's assertion that both integer-valued $b_n$ and $n/b_n$ are nondecreasing at every integer $n$. Together with $b_n<n$ eventually and $b_n\to\infty$, this is impossible. Indeed, ratio monotonicity gives
$$n(b_{n+1}-b_n)\le b_n.$$
For every sufficiently large $n$, the right side is less than $n$. Since $b_{n+1}-b_n$ is a nonnegative integer, it must be zero. Thus $b_n$ is eventually constant, a contradiction.

In particular, the current sentence that $b_n=\lfloor n^\nu\rfloor$ satisfies *all* the displayed batch hypotheses is false. At every strict jump of the floor (infinitely many when $0<\nu<1$), the ratio decreases. Even the elementary example $\nu=1/2$, $n=3,4$, gives ratios $3,2$. The present corollary's range is above $2/3$, but the same general jump argument applies. This is a defect in the source's literal sufficient-condition formulation, not a numerical issue with the estimator.

Do not claim the floor contract was verified. Preserve the floor consistency conclusion by proving it using the broader, non-monotonicity-dependent lemma below. A sound editorial repair can retain the definition as a clearly labelled *literal source contract*, explicitly warn that it is empty as written, and state the usable theorem with the two unnecessary monotonicity conditions removed while retaining every numerical rate, summability and endpoint condition. That strengthens the intended theorem rather than restricting its rich claim. Another possibility is an explicit corrected usable contract alongside the literal historical contract. The owner must choose the canonical presentation; no silent reinterpretation of “nondecreasing” is justified.

## Exact conditional result sufficient for the rich theorem

Let $Y_i$ be real random variables, $S_k=\sum_{i=1}^kY_i$, $S_0=0$. Suppose on an extension with the original process as marginal there are a standard Brownian motion $B$, a deterministic $\sigma\ge0$, and a finite random $K$ such that, almost surely for all sufficiently large integers $k$,
$$|S_k-\sigma B(k)|\le K k^\alpha\log k,\qquad 0<\alpha<1/2.$$
Let deterministic integers $1\le b_n<n$ eventually satisfy
$$\frac{b_n}{n}\to0,\qquad \sum_n(b_n/n)^c<\infty\ \text{for some real }c\ge1,$$
$$\frac{b_n\log n}{n}\to0,\qquad \frac{n^{2\alpha}(\log n)^2}{b_n}\to0.$$
Then the exact OBM estimator in the current algorithm converges almost surely to $\sigma^2$. No monotonicity is needed. The current rich theorem's $\alpha=1/(2+\delta)$ and stronger $n^{2\alpha}(\log n)^3/b_n\to0$ imply all these hypotheses. Its additional conditions $\log n/b_n\le c_1$, $b_n^2n^{-2}\log\log n\to0$ and $b_n^4n^{-3}\log\log n\to0$ may all remain in the statement; this proof simply does not need them.

### A. Proved Gaussian quadratic-form moment bound

For every positive integer $r$ there is a finite constant $C_r$ such that, for independent standard normal $U_1,\ldots,U_n$ and every real symmetric matrix $A$,
$$E|U^TAU-\operatorname{tr}A|^{2r}\le C_r\left(\sum_{i,k}A_{ik}^2\right)^r.$$

Here is a full derivation, avoiding an imported Whittle inequality. Orthogonally diagonalize $A$ with eigenvalues $\lambda_i$. Under the orthogonal change of coordinates, the joint density $(2\pi)^{-n/2}\exp(-\|u\|^2/2)$ and Lebesgue measure are unchanged, so the transformed coordinates $Z_i$ are again independent standard normals. The centered form is $\sum_i\lambda_iV_i$, where $V_i=Z_i^2-1$ are independent, centered, and have finite absolute moments of every order. Finiteness follows directly by integrating a polynomial against $e^{-z^2/2}$. Expand the even power $2r$ as a sum over ordered index tuples. Every term in which an index occurs once has expectation zero, by independence and $EV_i=0$. Group every remaining tuple by its partition of the $2r$ positions into equal-index blocks. All block sizes $k_1,\ldots,k_q$ are at least two and sum to $2r$. For any fixed such partition, dropping the distinctness restriction on its block indices bounds the absolute contribution by
$$\prod_{a=1}^qE|V_1|^{k_a}\prod_{a=1}^q\sum_i|\lambda_i|^{k_a}\le C'_r\left(\sum_i\lambda_i^2\right)^r.$$
The inequality $\sum_i|\lambda_i|^k\le(\sum_i\lambda_i^2)^{k/2}$ for $k\ge2$ follows by dividing by the Euclidean norm (the zero vector is immediate), after which every coordinate has absolute value at most one. There are finitely many partitions of $2r$ positions, depending only on $r$, so summing gives the claim because $\sum_i\lambda_i^2=\operatorname{tr}(A^2)=\sum_{i,k}A_{ik}^2$. This proof works uniformly in dimension and allows singular or indefinite $A$.

### B. Brownian overlapping windows converge without endpoint corrections

Fix $n$, abbreviate $b=b_n$, $m=n-b+1$, and set $D_j=B(j+b)-B(j)$ for $0\le j\le n-b$. Brownian unit increments $U_i=B(i)-B(i-1)$, $1\le i\le n$, are independent $N(0,1)$. Let $h_j\in\mathbb R^n$ indicate coordinates $j+1,\ldots,j+b$ and define
$$Q_n=\frac1{nb}\sum_{j=0}^{n-b}D_j^2=U^TA_nU,\qquad A_n=\frac1{nb}\sum_{j=0}^{n-b}h_jh_j^T.$$
Each entry of $A_n$ is nonnegative, at most $1/n$, and zero unless $|i-k|<b$, because at most $b$ windows contain both positions. Therefore
$$\operatorname{tr}A_n=\frac mn\longrightarrow1,\qquad \sum_{i,k}(A_n)_{ik}^2\le\frac{2b-1}{n}\le\frac{2b}{n}.$$
Choose an integer $r\ge c$. The moment bound in A and ordinary Markov inequality give, for each $\eta>0$,
$$\Pr(|Q_n-m/n|>\eta)\le C_r\eta^{-2r}(2b/n)^r.$$
Since $b/n<1$ eventually and $r\ge c$, the sum of these probabilities is finite. First Borel–Cantelli, intersected over $\eta=1,1/2,1/3,\ldots$, gives $Q_n-m/n\to0$ almost surely. Consequently $Q_n\to1$ almost surely. Independence between different $n$ was not assumed or needed.

For completeness the elementary Gaussian tail needed for centering is also local: completing the square in the normal density gives $Ee^{tZ}=e^{t^2/2}$, so exponential Markov with $t=x$ gives $\Pr(|Z|>x)\le2e^{-x^2/2}$. Thus
$$\Pr(|B(n)|>\sqrt{6n\log n})\le2n^{-3}.$$
Borel–Cantelli gives $B(n)^2/n\le6\log n$ eventually almost surely. If individual window bounds are desired, the same argument and a union bound give
$$\Pr\left(\max_{0\le j\le n-b}|D_j|>\sqrt{8b\log n}\right)\le2n^{-3},$$
and hence this maximum is $O(\sqrt{b\log n})$ almost surely. The proof below uses the stronger aggregate conclusion $Q_n\to1$ instead of multiplying by this maximum.

Now put $V_j=D_j-(b/n)B(n)$ and
$$W_n=\frac1{nb}\sum_{j=0}^{n-b}V_j^2.$$
The Euclidean reverse triangle inequality gives
$$|\sqrt{W_n}-\sqrt{Q_n}|\le\left(\frac1{nb}\sum_{j=0}^{n-b}\frac{b^2}{n^2}B(n)^2\right)^{1/2}=\left(\frac mn\frac bn\frac{B(n)^2}{n}\right)^{1/2}\longrightarrow0.$$
The limit uses precisely $(b/n)\log n\to0$. Therefore $W_n\to1$ almost surely. This proves the full Brownian moving-window convergence locally; no Damerdji theorem, spectral estimator, continuous-time increment maximum, or Lemma 8 is required.

### C. Pathwise SIP comparison, including zero variance

Write $R_k=S_k-\sigma B(k)$ and $R_0=0$. The SIP, monotonicity of $k^\alpha\log k$ for $k\ge2$, and absorption of finitely many early errors into a larger finite random constant give one event of probability one on which
$$\max_{0\le k\le n}|R_k|\le K' n^\alpha\log n$$
for all sufficiently large $n$. The centered data-window sum is
$$S_{j+b}-S_j-\frac bnS_n=\sigma V_j+E_{n,j},\qquad E_{n,j}=R_{j+b}-R_j-\frac bnR_n.$$
Since $b<n$, $|E_{n,j}|\le3K'n^\alpha\log n$ simultaneously for every window. In particular,
$$H_n:=\frac1{nb}\sum_{j=0}^{n-b}E_{n,j}^2\le9(K')^2\frac mn\frac{n^{2\alpha}(\log n)^2}{b}\longrightarrow0.$$
Define the simpler normalized data quadratic form
$$T_n=\frac1{nb}\sum_{j=0}^{n-b}\left(S_{j+b}-S_j-\frac bnS_n\right)^2.$$
Another Euclidean reverse triangle inequality yields
$$|\sqrt{T_n}-\sigma\sqrt{W_n}|\le\sqrt{H_n}\longrightarrow0.$$
Hence $T_n\to\sigma^2$ almost surely, including $\sigma=0$ without division by $\sigma$ or $T_n$. Equivalently, direct expansion gives $|T_n-\sigma^2W_n|\le H_n+2\sigma\sqrt{H_nW_n}$.

The actual estimator has the exact multiplicative relationship
$$\widehat\sigma_{\mathrm{OBM},n}^2=\frac{n^2}{(n-b)(n-b+1)}T_n.$$
The deterministic factor tends to one because $b/n\to0$. This proves the conditional result.

For $Y_i=g(X_i)-\pi g$, the finite estimator is unchanged by subtracting $\pi g$, so the conditional result applies exactly to the current indexing convention $j=1,\ldots,n-b+1$. No stationarity is used in B or C. If the SIP holds for the requested arbitrary initial distribution on an extension, the event that the estimator converges is an event of the original chain alone. Its extension probability equals its original probability; thus the almost-sure conclusion descends to the original law. No independence of $B$ and the chain is required.

## Optional: local reconstruction of the source's Lemma 8

This section explains every supplier used in Appendix B.3 if the owner wishes to retain that architecture. The direct proof above is shorter and needs fewer dependencies.

For eventual $n>2b$, put $a=B(n)/n$, $T_i=U_i-a$. The source's endpoint correction is
$$d_n=\frac1{nb}\sum_{l=1}^b\left(\sum_{i=1}^{l-1}T_i^2+\sum_{i=n-b+l+1}^nT_i^2\right)+\frac2{nb}\sum_{s=1}^{b-1}\sum_{l=1}^{b-s}\left(\sum_{i=1}^{l-1}T_iT_{i+s}+\sum_{i=n-b+l+1}^{n-s}T_iT_{i+s}\right).$$
Empty sums are zero. Assume $b/n\to0$, $b\to\infty$, $\sum_n(b/n)^{2c}<\infty$ for some $c\ge1$, $\log n/b\le c_1$ eventually, $b^4n^{-3}\log\log n\to0$, and $b^2n^{-2}\log\log n\to0$, exactly the usable numerical conditions of source Lemma 8. Literal ratio monotonicity is again unnecessary.

First prove endpoint absolute-value and square averages are bounded without KMT. For $Z\sim N(0,1)$, $Ee^{|Z|}<\infty$ (split the Gaussian integral at zero and complete the square), and $Ee^{Z^2/4}=\sqrt2$. For a block of $b$ independent unit increments, exponential Markov gives
$$\Pr\left(\sum|U_i|>Lb\right)\le\exp[-b(L-\log Ee^{|Z|})],$$
$$\Pr\left(\sum U_i^2>Lb\right)\le\exp[-b(L/4-\log\sqrt2)].$$
Necessarily $c_1>0$, and $b\ge(\log n)/c_1$. Choose a deterministic $L$ with both exponents' coefficients greater than $3c_1$. Apply these bounds separately to the initial and terminal blocks of length $b=b_n$ for each $n$. Their exceptional probabilities sum to at most $4\sum_n n^{-3}$. Therefore both endpoint sums of absolute values and squares are $O(b)$ almost surely. This proof uses independence within each block only, never independence across $n$ or between the two endpoints.

The diagonal endpoint term of $d_n$ is at most
$$\frac1n\left(\sum_{i=1}^{b-1}T_i^2+\sum_{i=n-b+2}^nT_i^2\right)\le\frac2n\left(\sum_{i=1}^{b-1}U_i^2+\sum_{i=n-b+2}^nU_i^2\right)+\frac{4(b-1)}n a^2.$$
It tends to zero by the just-proved bound, $b/n\to0$, and $B(n)/n\to0$ (already proved by the elementary Gaussian bound above).

Expand the off-diagonal endpoint part into the pure $U_iU_{i+s}$ form $A_n$, its terms linear in $a$, and its terms quadratic in $a$. Every variable in $A_n$ belongs to the two endpoint sets $\{1,\ldots,b-1\}$ and $\{n-b+2,\ldots,n\}$. There are at most $2(b-1)$ such variables. Express $A_n=U^TC_nU$ by symmetrizing coefficients. The diagonal is zero, each off-diagonal coefficient has magnitude at most $2/n$ (a fixed pair occurs in at most $b$ inner sums before multiplication by $2/(nb)$), and hence
$$EA_n=0,\qquad\sum_{i,k}(C_n)_{ik}^2\le16(b/n)^2.$$
The proved quadratic-form bound gives $E|A_n|^{2r}\le C_r(b/n)^{2r}$. Choose an integer $r\ge c$. Markov and Borel–Cantelli, intersected over positive reciprocal integer thresholds, give $A_n\to0$ almost surely.

For the terms linear in $a$, triangle inequality and the same endpoint enlargement as the source give the upper bound
$$\frac{2(b-1)}{n^2}|B(n)|\left(\sum_{i=1}^{b}|U_i|+\sum_{i=n-b+1}^{n}|U_i|\right).$$
Indeed each inner endpoint sum of $|U_i|+|U_{i+s}|$ is bounded by twice the enlarged endpoint total, and $\sum_{s=1}^{b-1}(b-s)=b(b-1)/2$. The endpoint bound and the existing local Brownian LIL upper bound $|B(n)|=O(\sqrt{n\log\log n})$ make this
$$O\left(\frac{b^2}{n^{3/2}}\sqrt{\log\log n}\right)=o(1).$$
The terms quadratic in $a$ are at most $2(b-1)^2a^2/n$, since the two inner endpoint counts together equal $b-1-s$ and can be enlarged to $b-1$. The same LIL upper bound makes this $O(b^2n^{-2}\log\log n)=o(1)$. All three parts tend to zero, proving $d_n\to0$ locally. This reconstructs source Lemma 8 with no half-normal strong approximation and no unproved chi-square or Whittle bound. The direct argument B still avoids the *separate* missing Damerdji supplier which source Appendix B.3 would otherwise require to show its spectral quadratic form tends to one.

## Exact floor corollary

Let $\delta>2/3$ and $2/(2+\delta)<\nu<3/4$, and put $b_n=\lfloor n^\nu\rfloor$ for $n\ge2$. Since $n^\nu/2\le b_n\le n^\nu$ for large $n$, $b_n\to\infty$, $b_n<n$, $n/b_n\to\infty$, and the floor itself is nondecreasing. Choose a real $c>\max\{1,1/(1-\nu)\}$. Then
$$\sum_n(b_n/n)^c\le\sum_n n^{-c(1-\nu)}<\infty.$$
Also
$$\frac{b_n\log n}{n}\le n^{\nu-1}\log n\to0,\qquad\frac{n^{2/(2+\delta)}(\log n)^3}{b_n}\le2n^{2/(2+\delta)-\nu}(\log n)^3\to0,$$
$$\frac{\log n}{b_n}\le2n^{-\nu}\log n\to0,$$
$$b_n^2n^{-2}\log\log n\le n^{2\nu-2}\log\log n\to0,\qquad b_n^4n^{-3}\log\log n\le n^{4\nu-3}\log\log n\to0.$$
Every numerical condition of the rich theorem is thus verified. The forbidden ratio monotonicity is not asserted; the conditional proof A–C supplies the exact floor conclusion independently. The restriction $\delta>2/3$ is precisely what makes the displayed source-corollary interval nonempty, because $2/(2+\delta)<3/4$ is equivalent to $\delta>2/3$.

## Smallest remaining supplier obligations and consumer implications

1. The separately assigned Markov SIP must supply the rate for the actual chain hypotheses and every initial law, identify its deterministic $\sigma^2$ with the covariance long-run variance, and address $\sigma=0$. The current SIP's positive-variance-only statement does not close the theorem's zero-variance branch. A degenerate CLT alone gives no rate strong enough for C. A suitable zero-variance partial-sum bound, or a SIP with $\sigma=0$, is sufficient. The comparison above proves the zero branch once either is supplied; it does not assert that supplier has been proved.

2. The current chain definition is just an everywhere finite-envelope geometric TV estimate on an arbitrary measurable space; the Flegal–Jones paper works throughout with Harris-ergodic chains, and the current `thm-mcmc-clt-sufficient-regimes` requires explicit irreducibility, aperiodicity, Harris recurrence, countable generation and stationary ergodicity. Thus that CLT item cannot silently establish the arbitrary-start OBM supplier under the current OBM statement alone. Any reduction from the current TV-only interface to the hypotheses of the eventual SIP requires an actual proof; this is assigned to the SIP/CLT owner, not resolved by Gaussian estimates.

3. The state-dependent minorization definition allows $s\equiv0$, exactly as the printed Assumption 3 does. That is vacuous as a regeneration premise. A construction that needs positive regeneration probability must prove existence of usable minorization data (or explicitly correct the contract and check consumers). The source citation itself cannot supply positivity absent from its displayed data. The Brownian comparison here does not use the minorization and cannot repair that upstream premise.

4. The finite Gaussian quadratic-form estimate A is the only substantial *new local mathematical ingredient* after the SIP. It may be kept inside the OBM proof or exposed as a proved helper with the finite real spectral theorem, normal-density orthogonal invariance/change of variables, independence and expectation-factorization prerequisites. The Brownian moving-window argument B is another natural helper if needed by other consumers. No theorem-level import of Damerdji, Whittle, KMT, Csörgő–Révész increment maxima, or chi-square moment bounds is necessary. The optional source-route reconstruction alone additionally uses the already-local Brownian LIL upper bound.

5. The algorithm's finite arithmetic and nonnegativity require no alteration. Correcting the batch contract affects the OBM theorem and any other logical consumers of `def-flegal-jones-obm-batch-size-conditions`; the exact floor corollary must be maintained as above. The source's literal monotonicity defect is confirmed independently of the SIP outcome, and should be recorded rather than hidden by a vacuous theorem or a falsely certified floor verification.

No mathematical readiness, hash currency, gate result, or item proof completion is claimed in this note. The conditional OBM proof is complete; the upstream SIP and variance-identification obligations remain explicit.
