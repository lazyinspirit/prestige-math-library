# Arbitrary-space geometric chains: standard-Borel factor and adjacent-iid split tours

Research derivation, 2026-10-15. No source, contract, manifest, hash, stamp or test changes in this pass. This note supplies the original-chain-to-tour interface. It does not assume that multistep tours are iid, that the supplied one-step split has positive stationary mass, or that the original state space admits bridge disintegrations.

## Exact proposed supplier split

1. `lem-geometrically-ergodic-chain-has-standard-borel-observation-factor`: for each specified initial law, a standard-Borel geometrically ergodic factor retaining the complete real-observation path law and stationary moments. The reference measure depends on the initial law. This avoids an unsupported all-start transfer through a stationary null set.
2. `lem-geometric-markov-chain-has-adjacent-iid-split-tours`: on a standard-Borel geometrically ergodic chain, construct a useful m-step split, a finite delayed initial segment, iid seeds U_j, calendar lengths L_j=L(U_j)>=m, tour reward and absolute envelope Z_j=z(U_j,U_{j+1}), H_j=h(U_j,U_{j+1}), exponential length moment, arbitrary spare tour moment below the stationary observation moment, and the occupation identity.

Both assume AC inherited from the existing coding, path-law, disintegration, and small-set suppliers. The existing current split-renewal supplier now explicitly exposes its exponential atom-return and occupation conclusions in its Statement; no stronger proof-only fact needs to be imported.

## 1. Standard-Borel factor retaining a given initial law

Let P be a probability kernel on an arbitrary measurable space (X,F), pi invariant, and suppose

    ||P^n(x,.)-pi||TV <= M(x) r^n, n>=1,

with M finite measurable everywhere and 0<r<1. Let f:X->R be finite measurable, and let mu be the initial law to be retained. Define a probability reference measure

    lambda = (1/2)pi + (1/2) sum_{n>=0} 2^(-n-1) mu P^n.

Then pi<<lambda, mu<<lambda, and lambda P<<lambda. Indeed lambda(A)=0 forces pi(A)=0 and mu P^n(A)=0 for every n, so lambda P(A)=0. Consequently lambda P^k<<lambda for every k.

Use the existing countably generated kernel-stable sub-sigma-field lemma on a real Borel coding of the pair (f,M). Such a coding is supplied by the standard-Borel real-coding theorem applied to R^2; its inverse recovers each coordinate. Equivalently its proof starts with the countable rational levels of both f and M. Obtain a countably generated G subset F containing both observables, on which P restricts and whose iterates are the restricted original iterates. Enumerate generators A_j of G and define a Cantor-valued real code

    c(x)=sum_{j>=1} 2*3^(-j) 1_{A_j}(x).

Its coordinate digits recover all A_j, so sigma(c)=G. The Cantor target C is a closed Polish subspace of R, even if c(X) itself is not Borel. It is unnecessary and generally unjustified to assert that the image c(X) is a standard-Borel subset.

Let lambda_c be the pushforward of lambda. Push the probability lambda(dx)P(x,dy) to (c(x),c(y)) in C^2 and disintegrate there. This gives a Borel probability kernel T:C->C. For every set B in a fixed countable generating algebra of C, kernel stability makes x->P(x,c^{-1}B) G-measurable. The current Doob--Dynkin theorem factors it as k_B(c(x)), with k_B Borel on R. Conditional expectation under the pushed pair law shows

    T(c(x),B)=P(x,c^{-1}B) for lambda-almost every x.

Intersect over the countable algebra. On the resulting single lambda-full set the two probability measures agree on that algebra, hence agree on every Borel B by pi-lambda uniqueness. Also lambda_c T=c_*(lambda P)<<lambda_c.

The code process of the original mu-started chain is therefore a T-chain: at each fixed time k, mu P^k<<lambda, so the last equality holds at X_k almost surely; apply the original Markov property and condition further on the coded past. Countably many time/algebra tests give the conditional identities and all finite-dimensional path laws simultaneously. In particular T^n(c(x),.)=c_*P^n(x,.) for lambda-almost every x, simultaneously for all n. One may also prove this by iterating the kernel equality and lambda P<<lambda.

Factor f and M as f=phi o c and M=m o c by Doob--Dynkin. Values off the image can be filled arbitrarily; retain the Borel full set where phi and m are finite and m>=0. Write pi_c=c_*pi. The kernel equality and invariance give pi_c T=pi_c. The original geometric bound yields

    ||T^n(z,.)-pi_c||TV <= m(z)r^n

for lambda_c-almost every z and all n. The good set here is Borel. To see this, on a standard-Borel space total variation equals the supremum over a fixed countable generating algebra. For completeness, any Borel set is approximable in measure by that algebra under the finite measure eta=alpha+beta: the approximable sets form a sigma-field, by complements and by first truncating a countable union to a finite union. Thus its alpha-beta evaluation is approximated as well. This proves the equality of suprema and makes the norm a countable supremum of measurable functions.

Let B_0 be that Borel good set, including finiteness of phi,m, and recursively set

    B_{j+1}=B_j intersect {z:T(z,B_j)=1},  S=intersection_j B_j.

Since lambda_c T<<lambda_c, every B_j is lambda_c-full. Continuity of probability from above gives T(z,S)=1 for every z in S. Restrict T to the nonempty Borel standard-Borel space S. Now the geometric bound holds at **every state of S**, with finite envelope m, and pi_c and c_*mu are both supported on S. The complete mu-started observation path law (f(X_n)) equals that of (phi(Y_n)) for this restricted standard-Borel chain. Stationary moments are retained exactly: pi_c|phi|^r=pi|f|^r whenever defined.

This proof uses no disintegration on X. All disintegrations occur on C or finite products of its Borel subspace S. The dependence of lambda and S on mu is allowed: the intended conclusion asserts existence of an extension for each initial chain law, not a single factor simultaneously representing every conceivable initial law.

## 2. Construct a useful m-step split without using the supplied s

Work now on the standard-Borel factor, writing its kernel and invariant probability again as P and pi, its finite envelope as M, and f as its retained finite real observable. The original supplied state-dependent one-step minorization may have s identically zero; none of the following uses it.

For every pi-positive set A, pointwise geometric convergence makes P^n(x,A)>0 for all sufficiently large n from every x. Therefore P is pi-irreducible. The existing countably generated small-set theorem applies and gives m>=1, D with pi(D)>0, epsilon_0>0 and probability nu_0 with nu_0(D)>0 such that P^m(x,.)>=epsilon_0 nu_0 on D. Choose K with C=D intersect {M<=K} positive under both pi and nu_0; choose L>=K and restrict nu_0 to {M<=L}, normalize, and decrease epsilon to 0<epsilon<1. For Q=P^m,

    Q(x,.) >= epsilon nu(.) on C,
    pi(C)>0, nu(C)>0, nu(M)<=L, sup_C M<=K.

Put p=epsilon pi(C). Invariance gives pi>=p nu. For n>=1,

    |nu Q^n(C)-pi(C)| <= L r^(mn),

and n=0 is bounded by one. Thus the current split-renewal supplier applies. Its split atom has exponential positive return time tau; starting just after the atom transition gives initial state nu and fresh split flag, and the next success inclusive has the same length tau. In particular E b^tau<infinity for some b>1.

## 3. Every initial law reaches a split boundary in finite time

This step needs only the useful minorization and all-state geometric convergence of Q. It does not claim an exponential entrance moment at all states.

Let

    K(x,dy)=Q(x,dy)-epsilon 1_C(x)nu(dy)

be the substochastic failure kernel. Toss the epsilon 1_C(x) split coin before the outgoing transition. Let a(x) be the probability of never obtaining a success, beginning with that fresh coin at x. The path construction makes a measurable and 0<=a<=1, and first-step decomposition gives

    a=Ka=Qa-epsilon 1_C nu(a).

Integrating against pi and using pi Q=pi gives p nu(a)=0. Since p>0, nu(a)=0. Thus a=Qa **at every state**, hence a=Q^n a for every n. The geometric convergence bound for bounded a implies a(x)=pi(a) for every x. Integrating against nu then makes this constant zero. Therefore the first split success occurs almost surely from every state and every initial law. Its post-transition calendar endpoint is a finite delay D=m(kappa+1). A finite real observation contributes a finite sum on this finite initial segment, with no initial integrability assumption required.

## 4. Skeleton cores are iid; the full m-step words are adjacent-iid

After a success, the next skeleton state has law nu independently of the preceding skeleton history. A core consists of this starting state followed by all failed transitions, through and including the state at which the next split coin succeeds. It excludes the endpoint of that successful transition. In measure notation a length-ell core (x_0,...,x_{ell-1}) has law

    nu(dx_0) product_{i=0}^{ell-2} K(x_i,dx_{i+1})
      *epsilon 1_C(x_{ell-1}).

Summing over ell gives total mass one by the preceding a=0 argument. This countable disjoint union of finite words is standard Borel. The length ell has the atom-return law tau and therefore an exponential moment. Consecutive cores can be taken iid; their first states have law nu and supply the independent endpoint of the preceding successful skeleton transition. This exactly reproduces the split skeleton product law, including its independence at the success transitions.

To recover the original m-step bridges, choose a reference rho that dominates both the factor initial law and pi and satisfies rho P<<rho, as in Section 1. Under rho(dx)P^m(x,dy), disintegrate the intermediate path (X_1,...,X_{m-1}) conditional on (x,y). This is a standard-Borel disintegration. Call the kernel B(x,y;dword). It satisfies the original m-step path identity for rho-almost every x, simultaneously as a probability measure. Every split skeleton endpoint pair encountered has law absolutely continuous with respect to rho(dx)Q(x,dy): all current starting laws are rho-absolutely continuous; the failure kernel is bounded by Q and the success kernel epsilon1_C nu is also bounded by Q. Therefore the identity is valid on both success and failure transitions actually used.

Realize B by a jointly measurable function of (x,y,u), u uniform on (0,1). This requires no unproved randomization theorem: code its standard-Borel word space bimeasurably into a Borel subset of [0,1]; use the inverse of its kernel CDF, with rational cuts making the inverse jointly measurable; its output has that coded kernel law. Replace outputs outside the Borel coded image by one fixed word; this changes no section law because that image has full section probability. Decode. All required uniforms can be taken independent.

Let U_j contain the jth iid skeleton core and an independent infinite sequence of bridge uniforms. For every nonterminal transition of that core, both endpoints are in U_j. For its terminal success transition, the starting endpoint belongs to U_j and the ending endpoint is the first state of U_{j+1}; use a bridge uniform in U_j. Concatenate each block's starting endpoint and its m-1 intermediate states, excluding its ending endpoint. The jth resulting calendar word has length

    L_j=m ell(U_j)>=m,

and is a measurable function W(U_j,U_{j+1}). Thus the joint tour length, reward and absolute envelope are

    L_j=L(U_j),
    Z_j=sum_{t in word_j} f(X_t)=z(U_j,U_{j+1}),
    H_j=sum_{t in word_j}|f(X_t)|=h(U_j,U_{j+1}).

In particular the complete words and rewards are generally one-dependent, not iid. Their lengths are iid because each length depends on just one seed. The output has the original P-chain path law: at every skeleton state the failure and success endpoint kernels add to Q, and the same conditional bridge kernel B restores the original m-step path conditional on that endpoint. The finite initial segment is generated by the identical construction from the initial law until the first success, with its terminal bridge using the first post-success nu endpoint. It need not be independent of the first full tour word; its finiteness is enough.

## 5. Occupation identity without a hidden iid-tour assumption

The substochastic kernel satisfies pi=pi K+p nu. Iterate:

    pi=p sum_{j=0}^{n-1} nu K^j +pi K^n.

The remainder's total mass is the stationary probability of no split success in its first n coin opportunities, which tends to zero by Section 3. Hence the potential measure

    eta=nu sum_{j>=0}K^j=pi/p.

This is exactly the expected count of core states before the terminal success coin, including the state at that coin. In particular E ell=1/p and mu_L=E L=m/p.

For a nonnegative real-state function h, let c_h(x)=sum_{r=0}^{m-1}P^r h(x). The event that a skeleton state is counted in a core is known before its fresh split coin and bridge are sampled. Averaging that coin, its endpoint, and its bridge therefore makes the expected cost of its m-step calendar block equal to c_h(x), including at the eventual successful transition. Consequently

    E sum_{t in full tour}h(X_t)
      =eta(c_h)=pi(c_h)/p=(m/p)pi(h)=mu_L pi(h).

Tonelli justifies every nonnegative sum and identity. For integrable signed h, apply it to the positive and negative parts. Taking h=f with pi(f)=0 gives E Z_j=0; taking h=1 gives the length identity. This argument neither conditions on a zero-probability endpoint without a kernel nor drops the terminal bridge's cost.

## 6. Exponential length and every spare tour moment

The atom-return clause of the current split-renewal supplier gives E b^ell<infinity, so E exp(aL)<infinity for a=(log b)/m>0. Let pi|f|^r<infinity for r>q>=1. The whole sequence reconstructed from an initial nu endpoint has the original nu-started P-chain marginal. Since pi>=p nu and pi is invariant,

    E_nu |f(X_t)|^r <= pi|f|^r/p  for every t>=0.

For H=sum_{t=0}^{L-1}|f(X_t)|, first use finite sums. Minkowski and Holder give

    ||H||_q <= (pi|f|^r/p)^(1/r)
       sum_{t>=0} P_nu(L>t)^(1/q-1/r) <infinity.

The sum is finite by exponential L. Monotone convergence passes from finite sums to H. This proves E H^q<infinity for every q<r, and |Z|<=H. In the target, r=2+delta+epsilon and p_target=2+delta; choose any q strictly between them. The supplier does not spend the whole stationary moment at the tour boundary, leaving the required positive margin for the adjacent-iid vector approximation.

## 7. Joint covariance interface and all-start lifting

The sequence (L_j-mu_L,Z_j) is an adjacent-iid centered vector. Its covariance sum is the finite matrix

    Gamma=Cov(V_0)+Cov(V_0,V_1)+Cov(V_1,V_0).

All terms exist because the supplied moments exceed two. Its LL entry is Var(L_0), since lengths are iid; its ZZ entry includes the genuine adjacent reward covariance. It would be incorrect to replace that entry by Var(Z_0) without proving that the lag-one term vanishes. The adjacent-iid vector strong-approximation helper consumes precisely this law. Its Gaussian components can be orthogonalized relative to the length component by a deterministic linear transformation; singular cases must use the helper's effective-range treatment.

Once the calendar-time recombination proves a Brownian variance v=Gamma_ZZ/mu_L, identify it with the named stationary sigma_g by the existing stationary strong-mixing CLT, when that convention is defined by its absolutely convergent covariance series. The original all-state geometric hypothesis and integrable-envelope lemma give exponential stationary strong mixing; r>2 supplies its moment hypothesis. The two Gaussian distributional limits then have equal variance. This uses an actual CLT/variance supplier, not an assumption that one-dependent cycle variance equals iid variance. This final identification belongs to the SIP consumer; the present tour supplier exposes Gamma and the occupation identity it needs.

A finite initial delay D changes sums only by a finite random prefix and a shift of time. No moment of that delay is required for the eventual-rate conclusion. For a standard Brownian B and every fixed integer d, its increments over windows of length at most d through time n are O(sqrt(log n)) almost surely, by Gaussian tails and a union bound on integer endpoints (and the usual reflection bound between endpoints if real time is used). Intersect over integer d. This same event handles a random finite integer D without any independence assumption, and sqrt(log n)=o(n^(1/p_target)). Thus an eventual post-delay SIP transfers to every initial factor law.

Finally retain the actual original process rather than only an equal-law factor copy. The observation path takes values in R^N, a standard-Borel space. The completed factor coupling has a joint law of this observation path and a Brownian path in C[0,infinity), also standard Borel. Disintegrate this joint law conditional on the observation path and evaluate the resulting Brownian kernel at the actual original observation path, extending its probability space by that kernel. This preserves the entire original chain space and process; it reproduces the correct observation/Brownian joint law and thus the almost-sure approximation event. No regular conditional probability on the original arbitrary state space is required.

## Precise boundary

The original-chain-to-adjacent-iid representation, length and moment claims, finite delay, and standard-Borel all-start reduction are proved above using the named current local suppliers. The subsequent positive-variance calendar-time Brownian recombination consumes the joint adjacent-iid vector theorem and the separate Brownian/Poisson clock construction. It is not supplied by the tour argument alone. In particular no scalar reward coupling conditional on lengths is substituted: conditioning on lengths generally changes the reward law and destroys the independence needed by the Brownian clock argument.
