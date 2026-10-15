# Conditional density and quantile steps for the finite-dimensional Gaussian coupling

This is research evidence only. No item, manifest, contract, readiness record, test, validator or certification is changed by this pass. It supplies the conditional-density and quantile part of the focused iid Gaussian approximation escalation, specialized to dimensions at most four. The finite-q truncation and infinite-epoch arguments belong to the other assigned branches.

## Actual sources inspected and division of the local proof

I inspected the actual rendered Zaitsev 1998 full article, https://www.numdam.org/item/PS_1998__2__41_0.pdf, especially printed pp. 42–52, all of Sections 3–5 (pp. 52–68), and Section 6 (pp. 69–78). Its Lemmas 2.14 and 2.15 explicitly defer their proofs to Zaitsev 1996b. That source has now been recovered in full: A. Yu. Zaitsev, “Estimates for the quantiles of smooth conditional distributions and the multidimensional invariance principle,” Siberian Mathematical Journal 37 (1996), Russian printed pp. 807–831, DOI https://doi.org/10.1007/BF02104663, MathNet https://mathnet.ru/eng/smj483, full PDF https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf . I read its Sections 6–7 completely from text and rendered pp. 821–828, and inspected Section 8; I also read its Sections 3–5 as prerequisite context. The recovered working files are `/tmp/bcs62-zaitsev-conditional-full.pdf` and `.txt`. No claim that a failed earlier Springer fetch supplied a PDF is made.

The proofs below are local derivations. Their precise analytic suppliers are authored in [the Fourier proof note](bayesian-computational-statistics-62-owner-mcmc-clt-kmt-fourier-proof.md), rather than an invocation of the Zaitsev coupling theorem. The corresponding tree assembly is in [the dyadic proof note](bayesian-computational-statistics-62-owner-mcmc-clt-kmt-dyadic-proof.md), and the Fourier-tail verification for mixed rows is in [the smoothing proof note](bayesian-computational-statistics-62-owner-mcmc-clt-kmt-smoothing-proof.md).

The two-dimensional bridge uses `(left+right,left-right)`, a four-dimensional vector. Consequently the conditional analytic hypotheses must hold for the relevant coordinate projections in dimensions one through four. They are not consequences of a one-dimensional Berry–Esseen bound or of bounded support alone.

## 1. Exact analytic inputs and notation

Constants in this note are independent of the row count, block length and truncation bound; the dimension is at most four. Changing a constant by an absolute factor is harmless. The common un-tilted covariance in the applications is `sigma^2 I`, and `epsilon=tau/sigma`. We require epsilon sufficiently small. All moderate-region constants below are fixed sufficiently small absolute constants, chosen after the constants in the analytic inputs.

A law belongs to the analytic cumulant class with parameter tau if its log moment-generating function is analytic on `||z|| tau<1` and satisfies the source bound on third derivatives

    |D_u D_v^2 phi(z)| <= tau ||u|| (v^T D v),   D=cov(F).

The Fourier note proves the following inputs, also for centered tilted laws and coordinate projections for which their own Fourier-tail hypotheses have been verified.

**A: elementary tilt calculus.** In standardized coordinates with covariance I, log mgf f satisfies

    ||f''(h)-I|| <= C epsilon ||h||,
    ||f'''(h)|| <= C epsilon,
    ||f''''(h)|| <= C epsilon^2

on a fixed smaller analytic ball. For two laws with equal covariance and third cumulants, additionally

    ||f_1''(h)-f_2''(h)|| <= C epsilon^2 ||h||^2,
    ||f_1'(h)-f_2'(h)|| <= C epsilon^2 ||h||^3,
    ||f_1'''(h)-f_2'''(h)|| <= C epsilon^2 ||h||.

Here tensor norms are directional operator norms; fixed dimension makes polarization constants absolute. Prefix tilts solving a prescribed moderate mean exist by contraction. These estimates follow by integrating analytic derivatives and applying Cauchy's estimate to the third derivative; they are proved in the Fourier note, not imported as a coupling theorem.

**B: one-law density estimate.** If the covariance is comparable to `sigma^2 I`, the smoothness and small-parameter conditions hold, and q is the matching Gaussian density, then

    |log(p(x)/q(x))| <= C (tau/sigma) (1+||x/sigma||^3)

throughout `||x||<=c sigma^2/tau`. There is also a uniform density bound `sup p<=C sigma^(-d)` for small real tilts and a radial log-density estimate

    D_x log p(x) <= -c ||x/sigma||^2

when `||x/sigma||>=R_0` and the same moderate bound holds. A fixed absolute R_0 suffices; no particular numerical value seven or eight is necessary for the tree argument.

**C: two-law density comparison, including a nonzero mismatch parameter.** Suppose centered laws have comparable covariance operators, analytic parameter tau, covariance difference of relative size at most `C e^2`, and third-cumulant difference at most `C e tau` times the variance scale. Under the same smoothness hypotheses,

    |log(p_1(x)/p_2(x))|
       <= C { e^2(1+||x/sigma||^2)
               +(tau/sigma)^2(1+||x/sigma||^4) }.                 (1)

The nonzero-e version is essential: even an originally exactly moment-matched pair generally ceases to be exactly matched after the two distinct prefix tilts.

The smoothness hypothesis is explicit. For every required d-dimensional law F and each required prefix projection, put `T={t:4||t|| tau d>=1}`. For all relevant real tilts h and all vectors v require

    (2pi)^(-d) integral_T |Fhat_h(t)| dt
       <= tau^2 d^2 / {sigma^2 (2pi)^(d/2) sqrt(det D)},

    (2pi)^(-d) integral_T |<t,v> Fhat_h(t)| dt
       <= sqrt(v^T D^(-1)v) / {4(2pi)^(d/2) sqrt(det D)}.           (2)

The source formulates these on `||h||tau<1`; a fixed smaller ball covering all tilts used in the proof is sufficient here. The first bound controls densities; the weighted bound controls density derivatives. The mixed-row smoothing note proves both bounds rather than asserting that bounded variables have densities.

## 2. Conditional density against its Gaussian reference

Let X be a centered d-dimensional vector with covariance `sigma^2 I`, d<=4, satisfying the analytic and smoothness hypotheses, including those of its first d-1 coordinates. Write `X=(X',X_d)`. For d=1 use the empty prefix and a zero tilt. Fix a prefix x' and put

    delta=||x'||/sigma,   epsilon=tau/sigma,
    epsilon delta<=c,     epsilon<=c.

Normalize by sigma temporarily. Let f be the standardized log mgf and let a' solve `grad' f(a',0)=x'/sigma`; its norm is at most `C delta`. Define a=(a',0). The last tilted mean in physical units is

    y_0=sigma D_d f(a).

Because the un-tilted mean and the last mixed covariance row are zero, the tilt calculus gives

    |y_0| <= C tau delta^2.                                      (3)

For clarity, this is a direct consequence of integrating the Hessian deviation along t a: `D_d f(a)=integral_0^1 [f''(ta)-I](a,e_d) dt`, whose modulus is at most `C epsilon ||a||^2`. Tilt existence itself follows from the contraction `a' -> x'/sigma - {grad' f(a',0)-a'}` on `||a'||<=2delta`, since its derivative has norm at most `C epsilon delta`.

Let p,p' denote the full and prefix densities. Tilt only the prefix, and denote the tilted densities by bar-p, bar-p'. Exponential factors cancel exactly at the specified prefix:

    p(x',w+y_0)/p'(x')
       = bar-p(x',w+y_0)/bar-p'(x').                              (4)

This is the density v(w) of `X_d-y_0` conditional on `X'=x'`. Center the tilted vector. Its covariance C satisfies

    ||C/sigma^2-I|| <= C epsilon delta.

Its prefix density is evaluated at its mean, and its full density at `(0,w)`. Apply B to both. The ratio of the corresponding Gaussian densities is the centered one-dimensional Gaussian with variance

    s_0^2=det(C)/det(C')=1/(C^(-1))_{dd}.

Consequently `s_0^2/sigma^2=1+O(epsilon delta)`. The Gaussian density ratio against variance sigma^2 therefore has logarithm at most `C epsilon delta(1+w^2/sigma^2)`. Combining these observations gives the actual conditional estimate

    |log(v(w)/phi_sigma(w))|
       <= C epsilon {1+delta(1+w^2/sigma^2)+|w/sigma|^3},          (5)

for `|w|<=c sigma/epsilon`. In particular, after reducing c,

    c_1 sigma^(-1) exp(-C_1 w^2/sigma^2)
      <= v(w) <= C_1 sigma^(-1) exp(-c_1 w^2/sigma^2)              (6)

on that region. This includes a uniform positive lower bound on every fixed standardized compact interval.

A global tail density bound also follows locally. In standardized units, the prefix-tilted and centered law has prefix density at zero bounded below by a constant by B. Tilt this centered law further by `t e_d`, with `|t|<=c/epsilon`. The full tilted density is bounded above by a constant by B, while its centered log mgf is at most `C t^2` by the Hessian estimate. Equation (4) then gives, at every real w in standardized units,

    v(w) <= C exp(C t^2-tw).

Choose `t=sign(w) min(|w|/(4C),c/(2epsilon))`. Returning to physical units proves

    v(w) <= C/sigma exp[-c min(w^2/sigma^2, |w|/tau)].             (7)

All intermediate tilts remain in the assumed smaller analytic ball. This proof does not condition on an event of positive probability: conditional densities are defined by p/p' on the moderate region, where the prefix density is positive.

Finally B's radial derivative estimate, applied to the centered tilted full density at `(0,w)`, yields

    (log v)'(w) <= -c w/sigma^2       for w>=R_0 sigma,
    (log v)'(w) >=  c |w|/sigma^2     for w<=-R_0 sigma,            (8)

as long as `|w|<=c sigma/epsilon`. The prefix density in (4) is independent of w, so it contributes no derivative. Comparability of C with `sigma^2 I` only changes fixed constants and R_0.

Equations (3), (5)–(8) are a complete reduction of the one-law conditional density statement to the local Fourier suppliers A–B. In the source they correspond to 1996 Lemma 6.1 / 1998 Lemma 2.14.

## 3. Two conditional laws with matching first three moments

Let X_1,X_2 satisfy the same hypotheses, have the same covariance `sigma^2 I`, and have identical third cumulant tensors. Their fixed prefixes may differ. Set

    Gamma=max_k ||x_k'||/sigma,
    Lambda=||x_1'-x_2'||/sigma,
    epsilon=tau/sigma,
    epsilon Gamma<=c.

In particular `Lambda<=2Gamma`. Work in standardized coordinates, with prefix-mean tilt parameters a_k=(a_k',0), and denote their last physical mean shifts by y_k. The calculus in A gives

    ||a_1-a_2|| <= C {Lambda+epsilon^2 Gamma^3}.                   (9)

Indeed the two prefix gradients differ at a common argument by at most `C epsilon^2 Gamma^3`; either gradient has derivative at least I/2 on the segment joining the two tilts, so its inverse has norm at most two. Decompose the difference of the last mean shifts into the change of argument within the first log mgf and the difference of the two log mgfs at a common argument. The first mixed Hessian row is zero at zero and is at most `C epsilon Gamma` at these tilts. The second gradient difference is at most `C epsilon^2 Gamma^3`. Therefore

    |y_1-y_2| <= C {tau Lambda Gamma + tau^2 Gamma^3/sigma}.       (10)

The potential extra term `epsilon^3 Gamma^4` is absorbed into `epsilon^2 Gamma^3` by `epsilon Gamma<=c`.

Consider the two centered, prefix-tilted full laws. Their covariance difference, divided by sigma^2, is bounded by

    C {epsilon^2 Gamma^2+epsilon Lambda}.

This follows by splitting the Hessian difference into a common-argument difference, of size `C epsilon^2 Gamma^2`, and a change of argument, of size `C epsilon ||a_1-a_2||`; use (9). Their third-cumulant difference in standardized units is bounded by `C epsilon^2 Gamma`, by the fourth-derivative estimate in A, exact third-moment matching at zero, and `Lambda<=2Gamma`. Thus both their full laws and their prefix laws satisfy C with

    e_*^2=C {epsilon^2 Gamma^2+epsilon Lambda},
    e_* >= c epsilon Gamma.                                    (11)

Individual tilted covariances remain comparable to `sigma^2 I`, and all required tilted Fourier conditions are inherited from the explicitly assumed small-tilt versions of (2).

Let v_k(w) be the density of `X_{k,d}-y_k` conditional on prefix x_k'. By (4), it is the centered tilted full density at `(0,w)` divided by the centered tilted prefix density at zero. Apply C to the full pair at `(0,w)` and to the prefix pair at zero. Subtraction of these two logarithmic density ratios gives

    |log(v_1(w)/v_2(w))|
      <= C epsilon^2 {1+D(1+w^2/sigma^2)+w^4/sigma^4},
    D=Gamma^2+Lambda/epsilon,                                  (12)

for `|w|<=c sigma/epsilon`. Both densities also obey (6)–(8). Notice the factor `Lambda/epsilon` inside D. Dropping it would falsely assume that conditioning at different prefix values preserves exact moment matching. No such assumption is made here.

Equations (10), (12), and (6)–(8) are the complete conditional-pair reduction to A–C; they correspond to 1996 Lemma 7.1 / 1998 Lemma 2.15.

## 4. Elementary conversion of density estimates into quantile estimates

The following scalar argument proves the needed quantile step. It is included rather than importing a quantile-coupling theorem.

Rescale so sigma=1. Let f,g be positive continuous densities on the moderate interval `|z|<=b_0/epsilon`, with global upper bounds

    f(z),g(z) <= C exp[-c min(z^2,|z|/epsilon)],                  (13)

and a moderate-region lower bound `f(z)>=c exp(-Cz^2)`. Suppose also

    (log f)'(z)<=-c z    for z>=R_0,
    (log f)'(z)>= c|z|   for z<=-R_0.                            (14)

There are two cases:

    k=2, eta=epsilon,   Delta=delta,
    k=3, eta=epsilon^2, Delta=D.

Assume respectively `epsilon(1+delta)` or `epsilon^2(1+D)` is sufficiently small, and that

    |log(g(z)/f(z))|
       <= C eta {1+Delta+Delta z^2+|z|^(k+1)}.                  (15)

Define for t>=0

    R(t)=eta {1+Delta+Delta t+t^k}.

We prove that for a sufficiently large fixed K and sufficiently small fixed b_1>0,

    F_f(z-K R(|z|)) <= F_g(z) <= F_f(z+K R(|z|))                 (16)

whenever `|z|<=b_1/epsilon`. Constants depend only on those in (13)–(15) and the fixed k, not on epsilon, delta or D.

**Tail comparison by changes of variable.** Choose a fixed `T>=2R_0+2` sufficiently large that terms bounded by `6/t^2` are at most c/8 for t>=T. Choose K_0 sufficiently large, then choose b_0' and the allowed small bound on eta(1+Delta) sufficiently small that, for

    r(t)=K_0 R(t),   T/2<=t<=2b,   b=b_0'/epsilon,

one has `0<=r(t)<=t/8` and `0<=r'(t)<=1/2`. These choices are possible because `R'(t)<=3R(t)/t` for t>=1 and, in the two cases, the highest-degree terms in r(t)/t are bounded respectively by `C epsilon t` and `C epsilon^2 t^2`. Also choose `3b<=b_0/epsilon`, so the perturbed arguments remain in the density-comparison domain.

Put `f_+(t)=t+r(t)` and `f_-(t)=t-r(t)`. For t>=T, all arguments between t and f_+(t), or between f_-(t) and t, are positive and comparable with t. Thus (14) gives

    log f(t+r(t))-log f(t) <= -c t r(t),
    log f(t-r(t))-log f(t) >= c' t r(t).

The error in (15), at either perturbed argument, is at most `C t R(t)`: each polynomial term in (15) is bounded by a constant times `t R(t)` for t>=1. The log Jacobian is at most r'(t) in the plus substitution and at least -2r'(t) in the minus substitution. Since `r'(t)<=3r(t)/t`, choosing T large first and K_0 large next gives

    g(f_+(t)) f_+'(t) <= f(t),
    g(f_-(t)) f_-'(t) >= f(t).                                  (17)

This justifies both Jacobians; they are positive. The inverse functions exist because their derivatives lie between 1/2 and 3/2. Their defining equations and monotonicity of r imply

    f_+^(-1)(z) >= z-r(z),
    f_-^(-1)(z) <= z+r(2z)

on the indicated ranges. Integrating (17), with these inverse bounds, yields for `2T<=z<=b`

    integral_z^b g <= integral_{z-r(z)}^infinity f,
    integral_z^b g >= integral_{z+r(2z)}^b f.                    (18)

For the first inequality extend the upper endpoint after substitution. For the second, `f_-^(-1)(b)>=b`, so retaining only the interval up to b is legitimate. If an endpoint interval is empty, only the subsequently used smaller range z<=b_1/epsilon is retained, where the intervals are nonempty.

**Attaching remote tails.** Equation (13) implies

    integral_b^infinity f + integral_b^infinity g
       <= C exp(-c' b^2),                                     (19)

by splitting at a constant multiple of 1/epsilon and integrating the Gaussian and exponential bounds. Enlarge the shifts in (18) from r to, for example, `3r(2z)`. Each extra interval has f-mass at least

    c R(z) exp(-C' z^2),

because the endpoints remain comparable with z and f has the stated lower bound. In both cases `R(z)>=epsilon^2` after restricting epsilon<=1. Choose b_1 sufficiently small relative to b_0' that `C' b_1^2<c'(b_0')^2/2`. For `2T<=z<=b_1/epsilon`, (19) is then smaller than that extra interval mass when epsilon is sufficiently small, uniformly in z, since

    epsilon^(-2) exp[-{c'(b_0')^2-C'b_1^2}/epsilon^2] ->0.

Thus the full tails satisfy the two inequalities corresponding to (16), with a fixed enlarged K; polynomial comparability `R(2z)<=8R(z)` makes the enlargement independent of z. Reflect f and g to obtain the same result for `-b_1/epsilon<=z<=-2T`.

**Central interval.** At z=2T the established tail inequalities bound the tail-probability difference by `C R(2T)`, using the global density upper bound. For `|z|<=2T`, equation (15) bounds the density ratio error by `C a`, where `a=eta(1+Delta)`, so integrating over the fixed compact interval gives

    |F_f(z)-F_g(z)| <= C a.

On `[-2T-1,2T+1]`, f is bounded below by a fixed positive constant m. Choosing the allowed bound on a sufficiently small, a shift of length `C a/m<=1` therefore bounds that CDF difference in both directions. Since `R(|z|)>=a`, this is (16) after one final enlargement of K. These choices involve finitely many fixed constants and can be made in the order specified. This completes the proof of (16), including z=0.

Apply (16) first with f=phi_1, g the standardized conditional density in (5), k=2 and Delta=delta. Return to physical units:

    Phi_sigma(w-gamma(w)) <= G(w) <= Phi_sigma(w+gamma(w)),
    gamma(w)=C tau {1+delta(1+|w|/sigma)+w^2/sigma^2}.             (20)

Apply it next with f=v_1, g=v_2 standardized, k=3 and Delta=D. Equations (6)–(8), (12) supply all its hypotheses; `epsilon^2 D=epsilon^2 Gamma^2+epsilon Lambda` is small because `Lambda<=2Gamma` and `epsilon Gamma` is small. We obtain

    G_1(w-beta(w)) <= G_2(w) <= G_1(w+beta(w)),
    beta(w)=C tau^2/sigma
        {1+D(1+|w|/sigma)+|w|^3/sigma^3}.                       (21)

These are the source quantile comparisons, now with the transport argument written locally. No total-variation estimate is substituted for a quantile displacement.

## 5. Quantile coupling and the exact root/bridge interfaces

For continuous CDFs G,H with positive density near the relevant quantiles, suppose `H(x-r(x))<=G(x)<=H(x+r(x))`. If `G(X)=H(Y)=U`, with U uniform, strict monotonicity of H gives `|X-Y|<=r(X)`. Generalized inverses produce the same variables almost surely; for the moderate quantiles in use the positive densities ensure the equality and monotonicity needed. This argument is deterministic after U is fixed.

For Borel conditional densities, the inverse is measurable: the event that the inverse is less than a rational t is a threshold event for the measurable conditional CDF. Independent uniforms at successive coordinates therefore give the prescribed vector law by conditional integration. This justifies the Rosenblatt law construction on the smooth blocks; it does not assert that nonsmooth coordinatewise couplings are accurate.

**One conditional coordinate.** Couple the centered conditional last coordinate W=X_d-y_0 to a Gaussian V_d with variance sigma^2 using the same uniform. Equation (20) gives

    |W-V_d| <= C tau {1+delta(1+|W|/sigma)+W^2/sigma^2}.

Using (3), `delta<=c/epsilon`, and reducing c if needed, `|y_0|/sigma<=C epsilon delta^2<=C c delta`. Therefore a moderate bound on the uncentered target vector implies the required moderate bounds on W, and

    |X_d-V_d| <= C tau {1+||X'||^2/sigma^2+X_d^2/sigma^2}.        (22)

Here `2 delta |W|/sigma<=delta^2+W^2/sigma^2` and `delta<=1+delta^2` account for the mixed terms. No bound in Gaussian values is needed.

**Gaussian-value form, when needed.** In standardized units put `A=1+delta^2+z^2`, where z is the Gaussian coordinate. If `epsilon delta` and `epsilon |z|` are sufficiently small, set `L=K epsilon A`. For fixed sufficiently large K and then sufficiently small cutoffs, `epsilon^2 A` is small, `z+L,z-L` remain in the moderate region, and (20) gives `gamma(z+L),gamma(z-L)<=L/2`. To verify the last claim, use `gamma(w)<=C epsilon(1+delta^2+w^2)` and `w^2<=2z^2+2L^2`; the error `C epsilon L^2` is absorbed into L because `epsilon^2 A` is small. Hence `G(z+L)>Phi(z)` and `G(z-L)<Phi(z)`. Its conditional quantile lies between z-L and z+L. Adding the mean shift (3) and restoring sigma gives

    |Q_{X_d|X'=x'}(Phi(z/sigma))-z|
       <= C tau {1+||x'||^2/sigma^2+z^2/sigma^2},                (22a)

when `||x'||+|z|<=c sigma^2/tau`. This proves the inversion direction as well; it is not obtained by simply replacing a target value with a Gaussian value in (22).

**Root T0.** Apply (22) sequentially to each coordinate, using the corresponding prefix densities. The Gaussian coordinates are independent because the matching covariance is `sigma^2 I`. For d<=2 (indeed d<=4), the resulting root coupling obeys

    ||U-V|| <= C tau {1+||U||^2/sigma^2},                        (T0)

provided `sigma^2>=C tau^2` and `||U||<=c sigma^2/tau`. All coordinate cutoffs follow from this full-vector cutoff after reducing c.

**Bridge T1.** Let two independent target half-block sums have covariance `(s/2)I_2`. Their total P and difference D have joint covariance `s I_4`, and a Gaussian bridge reference of covariance `s I_2` is independent of its Gaussian parent. Couple the two coordinates of D conditionally on the already constructed P, using (22) for prefix dimensions three and four. Then

    ||D-E|| <= C tau {1+(||P||^2+||D||^2)/s},                   (T1)

provided `s>=C tau^2`, `||(P,D)||<=c s/tau`, and the full sum/difference law and all used coordinate prefixes satisfy (2). The target parent P may differ from its Gaussian counterpart: the Gaussian bridge's law is independent of that Gaussian parent. This is why no parent-discrepancy term is needed in the one-law T1 interface. Replacing the sum of squares by twice their maximum gives the equivalent form used in the dyadic note.

For the dyadic node moderation event it suffices to bound `||P||` and `||D||` separately by a fixed smaller multiple of `s/tau`; their joint norm then satisfies the stated condition. Thus the dyadic branch's cutoff at `s>=C tau^2 log N`, together with target Bernstein moderation, matches T0/T1 exactly. The hypotheses cover the full/prefix smooth laws produced by the half-anchor construction, not arbitrary raw laws.

**Optional matched-pair interface.** Equation (21), (10), and common-uniform coupling also give

    |X_{1,d}-X_{2,d}|
      <= C tau^2/sigma {1+Gamma^3+Gamma^2(1+|W|/sigma)+|W|^3/sigma^3}
         +C tau Lambda {1+Gamma+|W|/sigma},                     (23)

where W is the centered second target coordinate. At a vector conditional bridge, apply this coordinate by coordinate. If `r=max_k ||(P_k,D_k)||/sigma` and `r<=c sigma/tau`, the coefficients of preceding bridge-coordinate errors are at most `C(tau/sigma)(1+r)`, which are less than 1/4 after fixing c small and sigma/tau large. Absorb the finitely many such errors. This yields

    ||D_1-D_2|| <= C tau^2/sigma (1+r^3)
                  +C(tau/sigma)(1+r)||P_1-P_2||.                (24)

The same moment-matching and Fourier hypotheses are required. The selected half-anchor scheme can instead couple two smooth mixed laws through the same Gaussian tree and use the triangle inequality; it does not need this optional sharper pair estimate.

## 6. Why raw bounded coordinatewise conditioning is not a valid shortcut

This issue is independent of proof length. Put equal probability on the three points

    (0,0), (1,0), (sqrt(2),1).

Let A,B denote the coordinates, center them, and lower-triangularly whiten them: standardize A, then standardize `B-EB-c(A-EA)` with `c=Cov(A,B)/Var(A)`. The covariance becomes I_2 and the law remains bounded; the residual variance is positive because the three original support points are noncollinear.

For n observations the uncentered first-coordinate sum is `n_1+sqrt(2)n_2`. This determines the two integer counts n_1,n_2 uniquely, since sqrt(2) is irrational. Therefore the second-coordinate sum, before and after the triangular whitening, is a measurable function of the first-coordinate sum. In the raw coordinatewise Rosenblatt coupling, the target first sum is a function of the first Gaussian coordinate. The target second sum is consequently also a function of that first Gaussian coordinate; its conditional quantile does not use the fresh second uniform because it is a point mass. The second Gaussian coordinate remains independent with variance n. For every r>0, conditioning on the first Gaussian coordinate thus gives

    P{|target second sum-Gaussian second sum|<=r}
       <= 2r/sqrt(2pi n).

For r=C log n this tends to zero. Hence a claim that every raw bounded isotropic vector has the above coordinatewise conditional Gaussian displacement bound is false, even at the root. A multivariate CLT for the unconditional sums does not repair this conditional claim. This is precisely why explicit smooth anchors or an equivalent nonsmooth transfer argument are necessary.

## 7. Status and remaining integration

The conditional steps in this note are complete mathematical reductions to the explicit Fourier density inputs A–C. The scalar transport argument, conditional shift and density-ratio calculus, root/bridge T0/T1 interfaces, and raw-conditioning obstruction are supplied locally. A–C are the separately assigned local analytic suppliers; neither the Zaitsev strong approximation theorem nor its cited predecessor is being used as an unproved substitute for them.

The smallest interface needed by the selected half-anchor proof is A–B plus the explicit projected, tilted Fourier tails (2), followed by (T0) and (T1). Input C and the refined matched-pair comparison are included to preserve the richer source mechanism, but the half-anchor/common-Gaussian construction can avoid their use. The remaining work outside this branch is to finish and integrate the Fourier, smoothing and dyadic notes, check their uniform constants for the triangular truncated iid laws, and integrate the finite-q strong approximation into the regenerative Markov argument. No item readiness or complete iid strong approximation theorem is claimed by this note alone.
