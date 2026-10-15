# BCS21 score and bracket supplier proposal

Draft only; no live carrier, manifest, contract or run state changed. The existing fixed-A bracket statement is sound under the actual procedure's endpoint/domain/selector assumptions. It admits the stronger growing-A extension below. The proof uses elementary integration of the expected absolute derivative, and needs no entropy theorem. Source full text inspected: Szabó–van der Vaart–van Zanten (2015), §5 and Appendix A, in `/tmp/bcs-svvdv-2015-v5.txt`. The source's coarse comparability estimate is unnecessary; the cutoff comparison below is substantially sharper and supports the positive consumer's advertised inflation growth.

Suggested supplier order: `lem-polished-tail-score-kernel-bounds`, `lem-uniform-centered-marginal-score-bound`, then repair existing `lem-empirical-bayes-maximizer-bracket-on-polished-tails`. The first two can instead be phases of the existing lemma if avoiding new IDs is preferable. They depend only on the actual model and polished-tail definitions and elementary integration, Gaussian second/fourth moments, independence and Cauchy–Schwarz. All constants K below may depend on fixed C,p,L0,N0,rho but never on n, A or theta, unless a dependence is explicitly displayed. In bounds with the factor L0 rho^(1+2A), K can be taken independent of L0,rho after imposing the stated cutoff conditions.

## Proposed deterministic supplier: polished-tail score kernels

### Statement

Let p>=0, rho>=2, L0>=1 and theta in the actual polished-tail class. For alpha>=0 define r=1+2alpha+2p, s=1+2alpha, N=n^(1/r), V=N log N, and

$$ f_\alpha(i)=\frac{n^2 i^{1+2\alpha}\log i}{(i^{1+2\alpha+2p}+n)^2},\qquad S_\alpha=\sum_i f_\alpha(i)\theta_i^2,\qquad h_\alpha=S_\alpha/V. $$

Assume throughout the range 0<=alpha<=A that log N>=8, ceil(N/rho)>=N0, log N>=2 log rho, and (1+rho/N)^r<=2. These conditions hold eventually uniformly if

$$ A=A_n\le\frac{\sqrt{\log n}}{4\sqrt{\log(\rho\vee e)}}. $$

Then:

$$ \frac18V\le\sum_i\frac{n^2\log i}{(i^r+n)^2}\le3V,\qquad \sum_i f_\alpha(i)(\log i)\theta_i^2\le(1+18L_0\rho^{1+2\alpha})(\log N)S_\alpha. $$

For 0<=a<=b<=A,

$$ h_a\le (4+36L_0\rho^{1+2b})\frac{N_b}{N_a}h_b. $$

Also G_alpha=V+S_alpha is positive and continuously differentiable and

$$ |G_\alpha'|/G_\alpha\le K L_0\rho^{1+2A}\log n. $$

### Proof

**Given:** The stated kernel definitions, cutoff conditions and polished-tail inequality at every integer m>=N0.

1.1 For q>=1, integer 0<=k<=4, log N>=2k, and i>N, the inequality log(i/N)<=((i/N)^(q/(2k))-1)/(q/(2k)) (when k>0) gives (log i)^k <=(log N)^k(i/N)^(q/2). Equivalently this follows from log(1+t)<=t: log i/log N <=1+log(i/N)/log N <=exp(q log(i/N)/(2k)). Hence comparison with the decreasing power integral yields sum_{i>N} i^(-1-q)(log i)^k <=3 N^(-q)(log N)^k. For k=0 direct power integration gives the same assertion. More generally, with a fixed numerical K_k the same estimate holds for q>=1 and log N>=8, for k<=4. These are elementary real-variable series comparisons. [given, algebra]

1.2 For the upper noise bound, the terms i<=N total at most N log N. For i>N, replace the denominator by i^(2r). The decreasing function x^(-2r)log x has sum at most its integral from N to infinity plus N^(-2r)log N. Multiplying by n^2 gives at most N log N times [1/(2r-1)+1/((2r-1)^2 log N)+1/N], which is less than 2N log N under the cutoffs. For the lower bound, retain i<=floor N and replace the denominator by 4n^2. The elementary integral bound sum_{i<=floor N}log i >=(1/2)N log N for N>=e^8 then gives V/8. [step 1.1, algebra]

1.3 Put m=ceil(N/rho), B={m,...,floor(rho m)}, and E_B=sum_{i in B}theta_i^2. Then N/rho<=i<=N+rho on B, log i>=log N/2, and i^r+n<=3n. Consequently S_alpha >=rho^(-s)N^s(log N)E_B/18. Since m<=N, polished tails give sum_{i>N}theta_i^2 <=sum_{i>=m}theta_i^2 <=L0 E_B. For i>N, f_alpha(i)log i <=n^2 i^(-1-2alpha-4p)(log i)^2 <=N^s(log N)^2: the last function is decreasing beyond N since log N>=2/(1+2alpha+4p). Therefore the contribution above N to sum f_alpha(i)log i theta_i^2 is at most 18 L0 rho^s(log N) S_alpha. The contribution below N is at most (log N)S_alpha. This proves the logarithmic moment inequality, including S_alpha=0. [given, algebra]

1.4 For any alpha and any i, f_alpha(i)<=2N^s log N. Below N this follows from the denominator>=n^2 and monotonicity of x^s log x. Above N write i=Nx and q=1+2alpha+4p>=1; the upper bound becomes N^s x^(-q)(log N+log x), which is at most 2N^s log N because x^(-q)<=1 and x^(-q)log x<=1/(eq). [given, algebra]

1.5 For a<=b and i<=N_b, f_a(i)/f_b(i)=i^(-2(b-a))[(i^(r_b)+n)/(i^(r_a)+n)]^2<=4, with zero terms at i=1 ignored. By step 1.3 at b, sum_{i>N_b}theta_i^2 <=18 L0 rho^(s_b) S_b/[N_b^(s_b)log N_b]. Step 1.4 at a therefore gives S_a<=4S_b+36 L0 rho^(s_b)[N_a^(s_a)log N_a/(N_b^(s_b)log N_b)]S_b. Multiply by V_b/V_a. Since N_a^(s_a)=nN_a^(-2p), N_b^(s_b)=nN_b^(-2p), log N_b/log N_a<=1 and (N_b/N_a)^(2p)<=1, the claimed comparison follows without division by S_b. [step 1.3, step 1.4, algebra]

1.6 The kernels and all their alpha derivatives on a fixed compact alpha interval are dominated by bounded functions of i times theta_i^2; this follows at infinity from i^(-1-2alpha-4p)(log i)^k, with k fixed. Thus dominated convergence gives S_alpha'=2 sum_i f_alpha(i)(log i)(n-i^r)/(n+i^r)theta_i^2. Step 1.3 bounds its absolute value by 2(1+18 L0 rho^s)(log N)S_alpha. Also V'/V=-2(1+log N)/r, whose absolute value is at most 3 log N. Adding these bounds proves the assertion for G=V+S. The cutoff assertions for growing A follow because r<=1+2p+sqrt(log n)/(2sqrt(log(rho vee e))), so N tends to infinity exponentially in sqrt(log n), r rho/N tends to zero, and log N tends to infinity. [step 1.3, algebra] ∎

## Proposed stochastic supplier: uniform centered marginal score

### Statement

Use the actual inverse-sequence model and the cutoffs in the preceding supplier. Put t_i=i^(1+2alpha)kappa_i^(-2) and

$$ M_n(\alpha)=\sum_i\frac{n^2\log i}{(t_i+n)^2}-\sum_i\frac{n^2i^{1+2\alpha}(\log i)\theta_i^2}{(t_i+n)^2}+Q_n(\alpha),\quad Q_n(\alpha)=-\sum_i a_i(\alpha)(X_i^2-E_\theta X_i^2),\quad a_i=\frac{n^2t_i\log i}{(t_i+n)^2}. $$

Then M_n is a continuous version of the derivative of the actual log-likelihood (including the one-sided derivative at zero), and

$$ \sup_{\theta\in\Theta_{\rm pt}}E_\theta\sup_{0\le\alpha\le A}\left|\frac{M_n(\alpha)-E_\theta M_n(\alpha)}{N_\alpha\log N_\alpha(1+h_\alpha)}\right|\le \frac{K[1+A L_0\rho^{1+2A}\log n]}{\sqrt{N_A}}. $$

The right side tends to zero for the stated growing-A range. In particular it tends to zero for fixed A. No common bound on ||theta|| is required.

### Proof

**Given:** Independent coordinates X_i=kappa_i theta_i+n^(-1/2)Z_i and the deterministic kernel supplier.

1.1 Direct expansion of X_i^2 gives Var(X_i^2)=2/n^2+4kappa_i^2 theta_i^2/n, because E Z_i^2=1, E Z_i^3=0 and E Z_i^4=3. Independence makes variances of finite centered weighted sums additive. Differentiating a_i gives a_i'=2(log i)a_i(n-t_i)/(n+t_i), hence |a_i'|<=2(log i)a_i. The ellipticity bounds compare t_i+n with i^r+n with factors depending only on C and give, for j=0,1,

$$ \operatorname{Var}(Q_n^{(j)}(\alpha))\le K N_\alpha(\log N_\alpha)^{2+2j}(1+h_\alpha). $$

Here is the full weighted-series estimate for this assertion. The noise contribution is bounded by K sum_i [n i^r/(i^r+n)^2]^2(log i)^(2+2j). Below N use n i^r/(i^r+n)^2<=1 and log i<=log N; above N use n i^r/(i^r+n)^2<=n i^(-r) and the tail power estimate with q=2r-1>=1 from the preceding supplier. The result is K N(log N)^(2+2j). The signal contribution is bounded by K sum_i f_alpha(i)theta_i^2 [n i^r(log i)^(1+2j)/(i^r+n)^2]. The bracket is at most K(log N)^(1+2j): below N use log i<=log N; above N put x=i/N and use x^(-r)(log N+log x)^(1+2j)<=K(log N)^(1+2j), since r>=1 and log N>=8. Thus this part is <=K S_alpha(log N)^(1+2j)=K N(log N)^(2+2j)h_alpha. [given, algebra]

1.2 For completeness all differentiations can be justified without an unproved sample-path assertion. On each fixed [0,A], the series of variances of Q and Q' converge uniformly: their tails are bounded by constant multiples of sum i^(-2-4p)(log i)^4 and sum i^(-1-4p)(log i)^4 theta_i^2. The latter tends to zero because theta is square summable and its multiplier is bounded. For a finite-sum tail T, E sup|T|<=sqrt(E T(0)^2)+integral_0^A sqrt(E T'(u)^2)du. Uniform variance-tail convergence therefore makes the partial sums Cauchy in the expected supremum norm. They have a continuous limit Q, absolutely continuous paths, and derivative Q' for almost every alpha: indeed the derivatives converge in L1(dP dalpha), and pass the fundamental theorem through that convergence. Expectations and integrals interchange by Tonelli applied to nonnegative bounds. The same construction works after multiplication by any deterministic positive C1 normalizer. [step 1.1, algebra]

1.3 Write R=Q/G, where G=N log N(1+h). Step 1.1 gives E|R(alpha)|<=K/sqrt(N_alpha). The quotient rule, Cauchy–Schwarz and the bound on G'/G in the deterministic supplier give E|R'(alpha)|<=K L0 rho^(1+2A)(log n)/sqrt(N_alpha). Pathwise sup_{[0,A]}|R|<=|R(0)|+integral_0^A |R'|, valid for the absolutely continuous version constructed above. Integrating its expectation, using N_alpha>=N_A, proves the displayed bound. [step 1.1, step 1.2, algebra]

1.4 To identify the score, first differentiate each finite partial log likelihood. Its derivative equals the finite partial sum defining M_n after substituting E X_i^2=kappa_i^2 theta_i^2+1/n and combining the two noise terms. The deterministic expectation series and their first derivatives converge uniformly on [0,A], by the same bounded-kernel and power-tail arguments. Together with step 1.2 this gives uniform convergence in probability of finite score sums, and an almost surely uniformly convergent subsequence. On the procedure's full-probability data domain the partial likelihoods converge at zero to its specified value. Integrating the finite derivatives and passing along that subsequence proves ell_n(alpha)=ell_n(0)+integral_0^alpha M_n(u)du simultaneously on [0,A]. Continuity makes M_n the derivative at every interior point and the right derivative at zero. No extra endpoint convention is needed. [step 1.2, algebra]

1.5 Set ell=log(rho vee e)>=1 and t=sqrt(log n). At the allowed maximal A, 2A log rho<=t log rho/(2sqrt ell)<=t sqrt ell/2. Meanwhile (1/2)log N_A=log n/[2(1+2A+2p)]>=t sqrt ell-O(1), with the O(1) depending only on p,rho. The exponential factor rho^(2A)/sqrt(N_A) is therefore <=K exp(-t sqrt ell/2). Polynomial factors 1+A log n tend to zero after multiplication by that exponential. For smaller A the bound only improves, since its numerator is increasing and N_A decreasing in A. This proves uniform convergence to zero. [step 1.3, algebra] ∎

## Existing bracket item: proposed replacement Statement and Proof

### Statement

Retain every hypothesis and definition of the actual existing fixed-A statement. More generally permit A=A_n>0 with A_n<=sqrt(log n)/(4sqrt(log(rho vee e))) for all sufficiently large n. Then the same uniform bracket conclusion holds. Moreover, for all sufficiently large n uniformly in the polished-tail class,

$$ \frac{n^{-2\underline\alpha_n/(1+2\underline\alpha_n+2p)}}{n^{-2\overline\alpha_n/(1+2\overline\alpha_n+2p)}}\le\left[128C^{16}\{4+36L_0\rho^{1+2A_n}\}\right]^{1+2p}. $$

In particular fixed-A rates are uniformly comparable. This also implies the source's weaker K3,n bound up to a fixed multiplicative constant. It improves its exponential A-dependence, which is useful to the growing-A conservative-coverage consumer.

### Proof

**Given:** The actual procedure, polished-tail class, h and threshold definitions, and the two suppliers proved above.

1.1 Continuity of h on [0,A] follows from the deterministic supplier. Therefore h<=u=(16C^8)^(-1) on [0,underline alpha] whenever underline alpha>0, and h>=v=8C^8 on [overline alpha,A] whenever overline alpha<A, with equality at a nonendpoint threshold. The conventions for empty sets have exactly these same implications on the intervals needing control. Continuity also implies underline alpha<=overline alpha: otherwise a continuous function would have to move from >v to <u without taking a value between u and v in the intervening interval; equivalently use the intermediate value theorem and u<v. [given, algebra]

1.2 The score expectation has the representation in the stochastic supplier. Ellipticity compares its positive series below by C^(-4) times the deterministic noise series and its negative series above by C^4 S; for an upper bound reverse these two factors. Thus E M/V>=1/(8C^4)-C^4 h. On h<=u this is >=1/(16C^4). On h>=v, E M/(Vh)<=3C^4/h-C^(-4)<=-5/(8C^4). Consequently E M/[V(1+h)] has a fixed positive margin at least 1/(32C^4) in the lower interval and a negative margin of magnitude at least 1/(32C^4) in the upper interval. [step 1.1, algebra]

1.3 The stochastic supplier and Markov's inequality show uniformly in theta that, with probability tending to one, sup |(M-E M)/[V(1+h)]|<1/(64C^4). On this event the likelihood is strictly increasing on [0,underline alpha] when that interval has positive length and strictly decreasing on [overline alpha,A] when that interval has positive length. Integration of the continuous derivative proves the strict inequalities also against the endpoints. Every global maximizer therefore belongs to [underline alpha,overline alpha], including the supplied measurable selector. This proves the uniform bracket claim. [step 1.2, algebra]

1.4 If underline alpha=A or overline alpha=0, their ordering makes both endpoints equal and the rate ratio is one. Otherwise h(underline alpha)>=u and h(overline alpha)<=v. Apply the deterministic comparison with a=underline alpha, b=overline alpha: u<=D(N_b/N_a)v, where D=4+36L0 rho^(1+2A). Hence N_a/N_b<=128C^16 D. Finally n^(-2alpha/(1+2alpha+2p))=N_alpha^(1+2p)/n, so the ratio of rates is (N_a/N_b)^(1+2p). This gives the displayed explicit bound and completes the proof. [step 1.1, algebra] ∎

## Integration notes and consumer interfaces

* The bracket statement strengthens rather than narrows the old statement. The assumption theta_1=0 is retained because the positive consumer's bias argument needs it; these score bounds themselves do not use it, since log 1=0.
* Existing fixed-A consumers can use the old conclusion verbatim. The positive consumer can use A_n in the stated range and K3,n<=K rho^[2A_n(1+2p)] from the sharper comparison, so its square-root comparability cost is only rho^[A_n(1+2p)].
* The source Appendix A.2 writes an upper bound on h'/h, but its preceding absolute-value derivative estimate requires an absolute bound or a separate argument. Our weighted logarithmic moment proves |S'|/S and |G'|/G directly and closes this detail.
* A technical construction detail: the elementary pathwise derivative integration uses absolute continuity, not merely a process defined separately at each alpha. The proof explicitly constructs the common version from partial sums before taking suprema.
* No entropy or maximal inequality is an external logical dependency. The displayed elementary supremum inequality is proved by the fundamental theorem of calculus and Cauchy–Schwarz.
