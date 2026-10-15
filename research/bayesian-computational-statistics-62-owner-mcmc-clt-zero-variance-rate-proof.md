# Geometric mixing, Lp Poisson solutions, and the zero-variance strong rate

Research-first proposal against the root-integrated current sources. No existing source, metadata, contract, hash or readiness carrier is edited. This proof resolves the zero-variance rate without regeneration or a quantitative Brownian coupling. The nonzero SIP branch remains separate.

## Precise Lp supplier

Assume AC. Let P have invariant probability pi, and let its stationary chain have strong-mixing coefficient alpha(n)<=C a^n with 0<a<1. For centered real f in L^q(pi), q>2, and any 2<p<q, there is g in L^p(pi) such that f=g-Pg pi-almost everywhere.

Put theta=1/p-1/q>0. Invariance and conditional Jensen give ||P^n f||_p<=||f||_p, so Z=P^n f is in Lp. Let p'=p/(p-1), and define bounded W_N(x)=sgn(Z(x)) |Z(x)|^(p-1) 1_{|Z(x)|<=N}. It has L^(p') norm at most ||Z||_p^(p-1). The Markov conditional identity gives

    E[W_N(X0) f(Xn)] = pi[W_N P^n f]
                       = pi[|Z|^p 1_{|Z|<=N}].

Because pi f=0, this is Cov(W_N(X0),f(Xn)). Both variables are square-integrable: W_N is bounded, while f is in Lq with q>2. Thus the actual local quantile covariance lemma applies; no unjustified application to an unbounded L^(p') variable with p'<2 occurs. Three-factor Hölder on (0,alpha(n)) with reciprocal exponents 1/p',1/q,theta gives

    pi[|Z|^p 1_{|Z|<=N}]
       <=4 alpha(n)^theta ||W_N||_(p') ||f||_q
       <=4 alpha(n)^theta ||Z||_p^(p-1) ||f||_q.

Let N increase to infinity. If ||Z||p=0 the conclusion is immediate; otherwise divide by ||Z||p^(p-1). Hence

    ||P^n f||_p <=4 alpha(n)^theta ||f||_q.

This also covers alpha(n)=0. The exponential bound makes sum_n ||P^n f||p finite. Lp completeness gives g=sum_(n>=0)P^n f in Lp. The kernel is a contraction on Lp by conditional Jensen/invariance; thus P may be passed through this norm-convergent series, giving g-Pg=f. Select a finite measurable representative and set it to zero on its measurable pi-null exceptional set. All proof equalities are pi-almost-everywhere statements, which hold at every stationary chain time simultaneously outside a countable union of null events.

The covariance series is absolutely summable too. Apply the same local quantile bound directly to f(X0),f(Xn), and Hölder with reciprocal exponents 1/q,1/q,1-2/q:

    |Cov(f(X0),f(Xn))|
       <=4 alpha(n)^(1-2/q)||f||_q^2.

This is summable geometrically. Its sum v=pi f²+2 sum_(n>=1)Cov(f(X0),f(Xn)) is nonnegative by the finite variance expansion. The already-complete strong-mixing CLT independently establishes the normal limit with this covariance sum, if the repository's covariance-long-run-variance terminology is required.

## Zero variance kills the martingale, with no ergodicity assumption

Assume v=0. Since p>2, g belongs to L². Define D_(k+1)=g(X_(k+1))-Pg(Xk). The actual square-integrable kernel conditional-moment lemma shows E[D_(k+1)|F_k]=0. Telescoping gives

    S_n=sum_(k=0)^(n-1) f(Xk)
       =g(X0)-g(Xn)+M_n,
    M_n=sum_(k=0)^(n-1) D_(k+1).

Stationarity makes E D_(k+1)²=tau², and conditional centering makes distinct martingale differences orthogonal. Thus E M_n²=n tau². The endpoint R_n=g(X0)-g(Xn) has ||R_n||2<=2||g||2, so Cauchy–Schwarz yields

    |E S_n²/n - tau²|
       <=4||g||2²/n +4||g||2 tau/sqrt(n) ->0.

Absolute covariance summability gives E S_n²/n ->v=0. Therefore tau²=0, and every D_(k+1)=0 almost surely. The exact identity reduces to S_n=g(X0)-g(Xn). Neither ergodicity nor a nondegenerate martingale CLT was assumed or needed for this deduction.

For each epsilon>0, stationarity and the integrated-tail bound give

    sum_(n>=1) P(|g(Xn)|>epsilon n^(1/p))
       =sum_(n>=1) pi(|g|^p>epsilon^p n)
       <=epsilon^(-p) pi|g|^p <infinity.

The inequality follows pointwise by counting how many positive integers n are below |g|^p/epsilon^p. First Borel–Cantelli, intersected over rational epsilon>0, gives g(Xn)=o(n^(1/p)) almost surely. Hence S_n=o(n^(1/p)) almost surely. The same reasoning also yields max_(k<=n)|g(Xk)|=o(n^(1/p)): discard a finite initial segment and then bound the remaining terms by epsilon k^(1/p)<=epsilon n^(1/p). Thus the uniform partial-sum maximum has the same rate.

## Every initial state and arbitrary initial law

Suppose additionally that the original kernel's total-variation laws P^n(x,.) converge to pi for every state x. The current everywhere geometric-ergodicity definition supplies exactly this. Let E be the original observable-path event

    n^(-1/p) sum_(k=0)^(n-1) f(Xk) ->0.

It is product measurable (countably many limits of finite sums) and invariant under deletion of the first coordinate: the two partial-sum sequences differ only by a fixed finite first reward and a shift of the terminal index; their normalization ratios tend to one. Let h(x)=P_x(E). Canonical path-law/kernel measurability makes h measurable with 0<=h<=1. By the bounded future-path Markov identity and the deletion invariance,

    P_x(E)=P^n h(x)  for every n>=1.

The stationary proof gives pi(h)=P_pi(E)=1. Pointwise total-variation convergence and the elementary bounded-integral TV inequality imply P^n h(x)->pi(h)=1 for every x. Consequently P_x(E)=1 for every x, and integration proves the rate under every initial probability law. No moment of that law, first-regeneration construction, state-space regular conditional distribution, or simultaneous coupling is needed.

The uniform-maximal rate is equivalent to the individual normalized-sum rate by the finite-initial-segment argument above, so it transfers as well. Adjoin any independent standard Brownian motion and multiply it by zero. This gives a degenerate strong approximation with error o(n^(1/p)); for any p>2+delta with p<2+delta+epsilon it is stronger than the required O(n^(1/(2+delta))log n) zero-variance branch of the SIP/OBM claim.

## Connecting the current broad geometric interface

The completed integrable-envelope proof's actual derivation uses only invariant pi and an everywhere finite measurable common geometric envelope. It constructs its restricted pi-irreducibility directly from that bound, and uses neither original Harris recurrence nor original aperiodicity or irreducibility after they are restated in its current Statement. Thus its proof establishes a naturally stronger interface for the current broad SIP: any such common geometric TV bound admits a finite integrable geometric envelope, possibly at a slower rate.

Root currently integrated/froze that source. This research does not change its Statement. To apply the result to the current broad SIP literal statement, root should review/authorize an explicit stronger clause against its current source preimage and update all actual consumers through this same proof owner. Alternatively state the zero-rate lemma directly under an integrable geometric-envelope hypothesis and leave the broad implication pending. The completed main six-regime theorem already satisfies the narrower published-interface hypotheses, so it is unaffected.

## Smallest integration proposal

Two proved local intermediates would make the argument reusable:

1. `lem-geometric-strong-mixing-gives-lp-poisson-solution` — the bounded-dual quantile estimate, absolute Lp series, Poisson identity and covariance summability, all with explicit AC.
2. `lem-zero-variance-geometric-markov-sums-have-strong-rate` — variance comparison, exact zero coboundary, Borel–Cantelli rate, and all-start transfer under the original pointwise TV convergence.

Existing mathematical suppliers suffice: the new proved quantile covariance lemma and quantile law identity; Hölder, Lp completeness, conditional Lp contraction, square-integrable kernel moments, tower/take-out identities, first Borel–Cantelli, canonical path laws, bounded future-path Markov identity, and total-variation bounds for bounded functions. No quantitative iid coupling theorem is needed. The proof above is independently derived; source citations document the underlying covariance and Poisson/martingale methods rather than replacing this argument.
