# Modern all-moment regenerative SIP route and remaining local obligations

Research only. No live source, contract, manifest, level, hash, readiness or verification carrier was changed in this subtask. The original SIP's stochastic hypotheses and rate have not been narrowed.

## Conclusion

There is an established modern regenerative theorem covering **every finite p>2**, with approximation error o(t^(1/p)), including unbounded rewards. Thus the n^(1/4) error of a naive Skorokhod/random-clock argument is not a counterexample to the proposed SIP. Bashtova–Shashkin's all-p theorem gives a viable route when one has genuine independent regeneration cycles. The spare epsilon moment in the current SIP is sufficient for its cycle moment hypothesis; an explicit proof is given below.

This does **not** close the library proof obligation. Finite-p multivariate iid KMT and the Wiener–Poisson recoupling require substantial constructive local proofs. Moreover, the current one-step minorization definition admits the identically zero minorizing function. Consequently its literal presence does not supply nontrivial independent regeneration cycles; a general m-step/one-dependent-cycle route or another argument is needed unless the parent supplies a separately proved genuine one-step regeneration construction. A concrete uniformly ergodic example below shows why this distinction cannot be ignored. No counterexample to the SIP itself has been established.

## Sources actually read

1. Elena Bashtova and Alexey Shashkin, *Strong Gaussian approximation for cumulative processes with heavy tails*, arXiv:2007.15481v1, 29 July 2020, https://arxiv.org/pdf/2007.15481. Read the complete ten-page paper, including conditions (A)/(Bp), both theorems, the common coupling construction (6)–(17), the entire proof of Theorem 1, and the auxiliary estimates used for Theorem 2. Theorem 1 covers all p>2, not just p<=4. Its cycle assumption concerns independent **whole cycle paths**, not merely identically distributed or one-dependent cycle totals.
2. Bashtova and Shashkin, *Strong Gaussian approximation for cumulative processes*, arXiv:2006.09583v1, 17 June 2020, https://arxiv.org/pdf/2006.09583. Read the complete fifteen-page paper, particularly the Gaussian/Poisson construction, Lemmas 2–4, and the full eight-term proof. This establishes the companion logarithmic exponential-moment result and supplies details used by the heavy-tail preprint.
3. The combined published paper is *Strong Gaussian approximation for cumulative processes*, Stochastic Processes and their Applications **150** (2022), 1–18, DOI https://doi.org/10.1016/j.spa.2022.04.003. Its publisher abstract and theorem context confirm the exponential and power-moment scope. The published full PDF was not obtained; the two complete author preprints above were read instead. Do not attribute unexamined final-version wording to the journal text.
4. Florence Merlevède and Emmanuel Rio, *Strong approximation for additive functionals of geometrically ergodic Markov chains*, Electronic Journal of Probability **20** (2015), no. 14, full source already available at `/tmp/mcmc-sip-research/strong2015full.pdf` and https://hal.science/hal-01044508v1/file/MarkovKMT15julysubmitted.pdf. Inspected the exact statement and initial Haar construction of Lemma 2.4, through its grid decomposition (2.12), and its final displayed conclusion. This subtask did **not** independently read/check every intervening large-deviation bound in the roughly seven-page lemma proof. Its exact statement allows the new Brownian motion to depend on the old Brownian motion, the Poisson clock, and independent auxiliary randomness; it is independent of the Poisson clock in distribution.
5. Berkes–Liu–Wu, *Komlós–Major–Tusnády approximation under dependence*, Annals of Probability **42** (2014), 794–817, DOI 10.1214/13-AOP850, https://arxiv.org/abs/1402.6517, was found as a potential route for the one-dependent-cycle branch. Only the abstract/source record was consulted here. No theorem or proof from that paper is asserted as a checked supplier.

The previously inspected local SIP carrier and the current definitions of geometric ergodicity and one-step minorization were read directly from `items/`.

## Exact modern theorem needed

For a separable real cumulative process S(t), let 0=T_0<T_1<... be regeneration times. Assume the random elements consisting of a cycle length tau_k=T_k-T_(k-1) and its entire increment path on that cycle are iid. Put

    xi_k = S(T_k)-S(T_(k-1)),
    eta_k = sup_{0<u<=tau_k}|S(T_(k-1)+u)-S(T_(k-1))|,
    mu = E tau_1,
    kappa = E xi_1 / mu,
    sigma^2 = Var(xi_1-kappa tau_1)/mu.

Require tau_1>0 almost surely, 0<mu<infinity, and for some arbitrary finite p>2,

    E tau_1^p + E eta_1^p < infinity.

The all-p regenerative conclusion is a coupling with a standard Brownian motion W for which

    sup_{0<=u<=t}|S(u)-kappa u-sigma W(u)| = o(t^(1/p)) a.s.

The zero variance case is included in the modern source (the vector source uses pseudoinverse completion); the present library SIP separately assumes positive sigma. In the scalar positive-variance case no pseudoinverse supplier is needed.

For a discrete-time additive functional use the right-continuous step interpolation S(t)=sum_{j<floor(t)}f(X_j), or a consistently shifted indexing convention. It is separable and its within-cycle supremum is bounded by the cycle sum of |f|. Cycle boundaries are integer times. All moment and centering calculations below are unchanged by a fixed one-index shift.

## Spare-moment transfer: a complete local derivation

Set r=2+delta, q=r+epsilon and f=g-pi(g). Choose any p strictly between r and q, for example p=r+epsilon/2. Jensen or the triangle inequality gives pi(|f|^q)<infinity from the hypothesis on g.

Suppose a genuine regeneration construction supplies iid tours starting with regeneration law nu, a cycle length tau having an exponential moment, and the occupation identity

    E_nu sum_{0<=j<tau} h(X_j) = mu pi(h)

for every nonnegative measurable h. This occupation identity is a supplier obligation; it is not inferred merely from the word regeneration. Let A=sum_{j<tau}|f(X_j)| and let eta be the maximum absolute partial-cycle reward. Then eta<=A, and finite-sum Hölder gives

    A^p <= tau^(p-1) sum_{j<tau}|f(X_j)|^p.

Apply Hölder with exponents q/p and q/(q-p) on the finite measure

    M(domega,dj) = P_nu(domega) sum_{j<tau(omega)} delta_j(dj).

This yields the exact useful bound

    E_nu eta^p
      <= (mu pi(|f|^q))^(p/q)
         [E_nu tau^(1+(p-1)q/(q-p))]^((q-p)/q)
      < infinity.

The last moment is finite because tau has an exponential moment. Also E_nu tau^p<infinity. The occupation identity at h=f^+ and f^- gives E_nu xi=mu pi(f)=0, so kappa=0. No independence between f(X_j), tau and the regeneration event was assumed in this derivation.

The modern coupling would then give o(n^(1/p)), which is strictly smaller than the requested n^(1/r) log n because p>r. Thus spare epsilon is ample even when delta>2. There is no need to set p=r or to claim a p<=4 result covers larger r.

## Constructive coupling route, with exact independence requirements

The following is a route for authoring local suppliers, not a claimed completed local proof of them.

Write a=Var(tau_1). If a=0, regeneration times are deterministic; the endpoint reward sequence is iid, and scalar finite-p KMT plus the within-cycle maximal bound proves the result directly. Hence the nonconstant-cycle construction may assume a>0.

For a>0 put

    beta = Cov(xi_1,tau_1)/a,
    v^2 = Var(xi_1-beta tau_1),
    gamma = a/mu,
    lambda = mu^2/a,
    alpha = beta-kappa.

The centered iid vector

    (xi_k-beta tau_k+alpha mu, tau_k-mu)

has diagonal covariance diag(v^2,a). A constructive **bivariate finite-p iid KMT supplier**, including singular covariance, must couple the whole iid vector sequence to independent standard Brownian motions B and Btilde so that, uniformly for integers k<=t,

    S(T_k)+alpha mu k-beta T_k-v B(k) = o(t^(1/p)),
    T_k-mu k-sqrt(a) Btilde(k) = o(t^(1/p)).

The Brownian motions' independence comes from diagonal Gaussian covariance, not independence of the original coordinates. Separate scalar KMT applications do not establish the required joint coupling and must not replace this vector supplier.

Next, an exponential-moment scalar KMT construction for iid Poisson increments can couple a rate-lambda Poisson process N to the *given* Brownian Btilde with

    sup_{u<=t}|gamma N(u)-mu u-sqrt(a) Btilde(u)|=O(log t) a.s.

This construction must use Btilde and auxiliary randomness independent of B. Its conditional-kernel lifting to a prescribed Btilde must be supplied, rather than replacing Btilde by an unrelated Brownian motion. Consequently N remains independent of B. Combining the two estimates gives gamma N(u)-T_floor(u)=o(t^(1/p)). Brownian unit-interval oscillations absorb the difference between integer and real u.

Let m(u)=max{k:T_k<=u}, and y(u)=inf{s:N(s)>u/gamma}. The inverse Poisson process is an iid exponential sum indexed by floor(u/gamma)+1. A second scalar exponential KMT construction gives a Brownian Wtilde, using only N and fresh auxiliary randomness independent of B, such that

    sup_{u<=t}|y(u)-u/mu-Wtilde(u)/(lambda sqrt(gamma))|=O(log t).

The renewal index m and y satisfy sup_{u<=t}|m(u)-y(u)|=o(t^(1/p)). This last implication can be proved directly from the preceding clock closeness, without importing a general inverse-renewal theorem: if both clocks are within h in value, their inverse indices are trapped between the inverse Poisson clock at u-h and u+h, up to a fixed integer error. The latter increment is a sum over O(h)+O(1) consecutive exponential holding times. Chernoff bounds, a union bound over O(t) possible initial positions and dyadic Borel–Cantelli give a uniform bound C h+C log t. First use h=epsilon t^(1/p), then let epsilon decrease along a countable sequence. Renewal strong laws confine all indices to O(t). Each of these elementary steps still needs to be written in the eventual local supplier.

Finally the **Wiener–Poisson recoupling supplier** (Merlevède–Rio Lemma 2.4) takes B independent of N and constructs another Brownian Wstar, independent of N, with

    sup_{u<=t}|B(u)-lambda^(-1/2)Wstar(N(u))|=O(log t) a.s.

Its exponential probability inequality at integer u extends to real u by Brownian and Poisson interval maxima. The construction is conditional on the *entire clock* N: given N its Haar coefficients produce a standard Gaussian path law. Therefore Wstar can be arranged independent of the clock environment (Btilde,N,Wtilde), by generating it from the independent B, that environment's N, and fresh auxiliary randomness. This conditional-law statement is what ensures that Wstar and Wtilde are independent.

Caution about the light-tail preprint: its wording after Lemma 2 says Wstar is determined by B plus auxiliary randomness independent of all other variables, but its own displayed Haar construction uses N. The accurate statement is the one in Merlevède–Rio: Wstar is a function of (B,N,auxiliary randomness), and its **conditional law given N is the fixed standard Wiener law**. Do not reproduce the stronger measurability wording. Independence in law of Wstar and N is fully compatible with its construction depending on N; the pair (B,Wstar) need not be independent of N.

Define

    sigma W(u)
       = lambda^(-1/2) v Wstar(u/gamma)
         - mu alpha Wtilde(u)/(lambda sqrt(gamma)).

The independent terms have variance rate

    v^2/(lambda gamma)+mu^2 alpha^2/(lambda^2 gamma)
       = (v^2+a alpha^2)/mu
       = Var(xi_1-kappa tau_1)/mu
       = sigma^2.

Thus for sigma>0 this defines a standard Brownian W after division by sigma. The covariance identity uses Cov(xi-beta tau,tau)=0. The exact eight-term algebra in Bashtova–Shashkin equation (17) then splits S(u)-kappa u-sigma W(u) into:

1. an incomplete-cycle remainder;
2. the reward difference between regeneration indices m(u) and floor(y(u));
3. the bivariate-KMT endpoint error at floor(y(u)), plus a unit-time Brownian increment;
4. the difference between T_floor(y(u)) and gamma N(y(u));
5. the inverse-Poisson Brownian approximation error;
6. the Wiener–Poisson recoupling error at y(u);
7. a Wstar increment over a time interval of length at most one;
8. a uniformly bounded deterministic clock rounding term.

Terms 3–6 follow from the compatible constructions, with random arguments confined to O(t) by strong laws. Terms 7–8 are O(sqrt(log t))+O(1). Term 1 is bounded by max_{k<=Ct} eta_k=o(t^(1/p)): E eta^p<infinity implies sum_k P(eta_k>epsilon k^(1/p))<infinity, so Borel–Cantelli and a finite-prefix split prove this maximum bound. Independence is unnecessary for that bound.

For term 2, |m-y|=o(t^(1/p)). The bivariate endpoint approximation expresses an increment across h cycle indices as kappa mu h plus increments of B and Btilde and o(t^(1/p)) errors. The drift is o(t^(1/p)); Brownian increments over windows of length at most epsilon t^(1/p), at O(t) initial indices, have maximum o(t^(1/p)) by the reflection bound and dyadic union/Borel–Cantelli. For example the probability of exceeding epsilon' t^(1/p) is at most C t exp[-c(epsilon')^2 t^(1/p)/epsilon], which is summable along dyadics. Thus term 2 is also o(t^(1/p)). This uses no false substitution of a Brownian motion at the raw renewal index by one at deterministic time.

## Delayed first tour and extension of the original chain space

A stationary or arbitrarily initialized chain does not begin at a regeneration instant. A valid regeneration supplier must show the initial delay T_0 is finite almost surely and the initial finite reward is finite. Delete that initial segment, apply the iid-tour construction to the post-regeneration process, then restore the finite prefix. For each realized finite T_0, a Brownian difference over a time window of length T_0 has O(sqrt(log n)) maxima on successive integer times almost surely (use a countable union over deterministic upper bounds for T_0). Thus the finite shift is negligible relative to n^(1/p). No moment bound on the initial delay is needed for this almost-sure eventual estimate, once finiteness is established.

The modern source says the process can be redefined jointly with Brownian motion. To obtain the original carrier's stronger-sounding extension formulation while preserving the original chain, disintegrate the joint law of the **real observation sequence** and the Brownian path given that observation sequence. Both observation paths R^N and continuous Brownian paths are standard Borel. Apply the resulting probability kernel to the original observation map on the original chain probability space. This produces an extension preserving the original chain and the required joint observation/Brownian law. A regular-conditional-probability supplier for these standard-Borel spaces must be supplied locally. Disintegration of an arbitrary original state space is unnecessary.

The cycle expression for sigma must additionally be identified with the asymptotic standard deviation intended by the SIP carrier. Regenerative CLT plus absolute covariance convergence gives that identification; it is another interface to check rather than a consequence of almost-sure approximation alone.

## Literal current minorization gap: rigorous example, not an SIP refutation

The current `def-state-dependent-one-step-minorization` permits s identically zero. Even uniform geometric ergodicity does not ensure a nontrivial common **one-step** minorization on a positive-stationary-measure set.

Let U_n be iid uniform [0,1] and X_n=(U_n,U_(n+1)). On [0,1]^2 let

    P((x,y),A)=integral_0^1 1_A(y,z) dz,
    pi=Lebesgue measure on [0,1]^2.

Then P^2(x,·)=pi for every x, so the chain is uniformly geometrically ergodic under the current definition (take any r in (0,1) and M>=1/r). But P((x,y),·) is supported on the vertical line {y}×[0,1]. If P((x,y),·)>=s(x,y)nu(·) and s(x,y)>0, nu must give that vertical line mass one. Two different y values have disjoint lines, so s can be positive only on states whose second coordinate is one common y. That set has pi measure zero. Hence pi(s)=0 for every supplied one-step minorization of this form. In particular s=0 is valid but yields no regenerations.

This chain's observations are one-dependent and it is **not** a counterexample to the desired all-p SIP. It is a counterexample to the implication “the current supplied one-step minorization plus geometric ergodicity supplies iid whole tours.” The general proof must handle m-step split chains and potentially one-dependent observed tours, or prove another applicable coupling. A scalar iid-tour theorem cannot be applied to such tours by simply relabeling them iid. Berkes–Liu–Wu may be useful for an explicitly constructed finite-memory iid representation, but that representation and any needed vector strong approximation must themselves be proved. This subtask does not assert them.

## Smallest substantial unproved supplier inventory

For a branch with genuine one-step iid tours, the missing constructive suppliers are:

- Finite-p bivariate iid strong approximation for every p>2, with a prescribed covariance square root, including singular covariance, uniform maximum error o(n^(1/p)), and extension compatibility. Scalar KMT alone is insufficient.
- Scalar exponential-moment KMT for Poisson and exponential iid variables, with conditional-kernel lifting to the pre-existing Brownian/clock environment. This could be a specialization of a fully proved general iid KMT construction.
- Wiener–Poisson logarithmic recoupling with its conditional standard-Wiener law and the exact compatibility needed for independence from the clock environment. The full Merlevède–Rio Haar/Poisson deviation proof must be supplied; a statement citation or a Brownian modulus inequality does not replace it.
- Genuine regeneration, exponential cycle tails, occupation identity and finite delayed first tour under the literal chain hypotheses; the parent says the exponential-tail branch is in progress. The nontrivial one-step/minorization issue above remains part of this supplier's exact contract.
- Standard-Borel conditional-kernel coupling transfer to preserve the original chain probability space, and identification of the regenerative variance with the carrier's sigma_g.

Once these are proved, the moment transfer and eight-term recombination above provide an all-p local proof route and deliver a stronger rate than the carrier asks. Without them the branch remains a local authoring obligation for an established theorem; it must not be certified, imported as an external fallback, or relabeled an open mathematical problem.
