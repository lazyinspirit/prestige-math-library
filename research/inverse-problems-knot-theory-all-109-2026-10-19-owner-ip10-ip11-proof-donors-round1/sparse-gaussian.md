# Specialized Gaussian sparse proof donor (read-only support; 2026-10-19)

This is an independent derivation, checked against the actual complete Ingster--Suslina 2000 primary article downloaded as `is2000.pdf` in this directory. Relevant source reading: pp87--95 (scalar reduction and free profiles), pp96--100 (clipping and integrals), pp105--111 (prior concentration), and pp71--83 (probabilistic upper/lower scheme). The derivation below avoids importing the article's omitted three-point-reduction proof or its general B4 upper theorem. It does not assert a repository proof is complete. Standard probabilistic imports needed for authoring are explicitly identified at the end.

## 1. Parameters and precise scope

Write s=alpha+beta, 0<q<2, beta>0, alpha>0, and assume

    L = q*s - 2*beta > 0,    kappa=L/(2-q)>0.

The normalized observation is X_i=mu_i+G_i, with independent standard normals G_i. Actual alternatives satisfy

    E(mu):=sum i^(2 beta) mu_i^2 >= r^2/epsilon^2,
    B(mu):=sum i^(q s) |mu_i|^q <= epsilon^(-q).

All sums are over positive integers. The relaxed moment problem has these same constraints with mu_i^2 and |mu_i|^q replaced by g_i*w_i^2 and g_i*w_i^q, with 0<=g_i<=1. Its objective is

    C(g,w)=sum g_i^2 [cosh(w_i^2)-1].

Thus the repository's u^2 is exactly inf C(g,w), evaluated at its shrunk radius.

The power asymptotic proved below holds whenever the formal parameters n->infinity and h0->0. In original variables this sufficient zone is

    r=o(epsilon^a_c),
    a_c=(q alpha+1-q/2)/(q(alpha+beta)+1).

This includes every bounded nonzero transition r/rstar in compact subsets of (0,infinity). It is NOT asserted to be a necessary maximal zone. For example, when the free delta profile is bounded, some nonzero bounded h0 with h0 sup(delta)<1 also have no clipping and permit the same approximation. The unrestricted all-r power asymptotic is false, as proved separately to the owner.

The Gaussian sharp risk profiles can nevertheless be proved for all r->0 by proving compact transition limits and then using monotonicity at the two endpoints. See section 9.

## 2. An explicit pointwise scalar dual certificate

For z>0 define

    a(z)=[z^2 sinh(z^2)-q(cosh(z^2)-1)]/[(2-q)z^2],
    b(z)=[z^2 sinh(z^2)-2(cosh(z^2)-1)]/[(2-q)z^q].

Both are strictly positive. Indeed, for w>0,

    w sinh(w)-q(cosh(w)-1)
      =sum_{k>=1}(2k-q)w^(2k)/(2k)! >0,

and the analogous expression with q replaced by 2 has its first nonzero term at k=2 and is positive.

For every real v,

    cosh(z*v)-1 >= a(z)*v^2 - b(z)*|v|^q.                 (D1)

Equality holds at v=0,+z,-z. Here is a direct proof. For v>0 put

    f(v)=[cosh(z*v)-1-a(z)*v^2]/v^q.

The derivative of f, divided by v^(1-q), is

    sum_{k>=1}(2k-q)z^(2k)v^(2k-2)/(2k)! -(2-q)a(z).

It is strictly increasing in v (the k>=2 terms suffice), and is zero at v=z by the definition of a. Consequently f has its unique minimum at z. Its value there is -b(z), proving (D1). Evenness deals with negative v, and v=0 is immediate.

Put

    phi(z)=b(z)/a(z)
           =z^(2-q) [z^2 sinh(z^2)-2(cosh(z^2)-1)]
                     /[z^2 sinh(z^2)-q(cosh(z^2)-1)].

This is continuous, strictly increasing from 0 to infinity. For a proof of monotonicity, set w=z^2. The ratio of the two power series in the last expression has coefficient ratios (2k-2)/(2k-q), which strictly increase with k. The derivative numerator of the ratio is a sum over k>l of positive terms proportional to the differences of these ratios. Hence that ratio is strictly increasing; multiplication by z^(2-q) preserves strict increase. The limits follow from the following expansions:

    phi(z) ~ z^(6-q)/[6(2-q)]                      as z->0,
    phi(z) ~ z^(2-q)                               as z->infinity.

Thus phi has a continuous positive inverse. No three-point extremizer theorem is needed here.

## 3. Free profile, asymptotics, and finite integral constants

Define, for x>0,

    z(x)=phi^(-1)(x^L),
    psi(z)=1/[2a(z)],
    delta(x)=x^(2 beta)*psi(z(x)).

Then delta*a(z(x))=x^(2 beta)/2 and delta*b(z(x))=x^(q s)/2. The asymptotics needed below are

    z(x) ~ C x^(L/(6-q)),
    psi(z) ~ z^(-2),
    delta(x) ~ C' x^[2 beta-2L/(6-q)]              as x->0;

    z(x) ~ x^kappa,
    psi(z) ~ (2-q)exp(-z^2),
    delta(x) ~ (2-q)x^(2 beta)exp(-z(x)^2)         as x->infinity.

These follow by Taylor expansion and the large-z elementary hyperbolic expansions. In particular there are fixed positive upper/lower comparison constants near each endpoint. The exact constants at zero are not needed except that they are positive.

Define

    c1=integral_0^infinity delta(x) z(x)^2 x^(2 beta) dx,
    c2=integral_0^infinity delta(x) z(x)^q x^(q s) dx,
    c0=integral_0^infinity delta(x)^2 [cosh(z(x)^2)-1] dx.

They are finite and positive. Near zero their integrands are respectively asymptotic to positive constants times

    x^(4 beta),
    x^[4 beta+4L/(6-q)],
    x^(4 beta).

At infinity all are polynomial factors times exp(-z(x)^2), and z(x) is comparable to x^kappa. In particular all integrals converge.

There is the useful EXACT identity

    c0=(c1-c2)/2 >0.                              (D2)

Indeed a(z)z^2-b(z)z^q=cosh(z^2)-1, and multiplication by delta(x)^2 gives the pointwise identity whose integral is (D2).

The two further integrals needed for prior concentration are finite:

    M1=integral x^(4 beta) delta(x) z(x)^4 dx,
    M2=integral x^(2 q s) delta(x) z(x)^(2q) dx.

Their small-x exponents are respectively

    6 beta+2L/(6-q),     6 beta+10L/(6-q),

and their large-x tails again have exponential decay.

Two global elementary profile bounds useful later are

    psi(z)*(exp(z^2)-1) <= C,                     (D3)
    psi(z)^2*(exp(z^2)-1) <= C exp(-z^2)          for z>=1. (D4)

For each fixed B, psi(z)z^2 is bounded on 0<z<=B. These follow from the endpoint expansions and continuity on compact intervals.

Clipping note: delta can diverge as x->0 if q*s>(8-q)beta. It is therefore incorrect to assert h0 delta(i/n)<=1 for all i solely from h0->0. The construction below never makes that assertion. Free h_i are allowed as SCORE coefficients; the Bernoulli prior is truncated to a window where h_i<1. Small-x contributions to c0,c1,c2 vanish integrably.

## 4. Scaling and Riemann sums

Choose positive real n,h0 by

    c1*h0*n^(2 beta+1)=r^2/epsilon^2,
    c2*h0*n^(q s+1)=epsilon^(-q).                 (S1)

Equivalently

    n^L=(c1/c2)*epsilon^(2-q)/r^2,
    h0=(r^2/epsilon^2)/(c1*n^(2 beta+1)).

Set U^2=c0*h0^2*n. Algebra gives the claimed original power with a positive parameter-only constant:

    U=c epsilon^(-A/D) r^(B/D),
    A=2 alpha+1/q-1/2,
    B=2(alpha+beta)+1/q,
    D=alpha+beta(1-2/q)=L/q.

For compact transition U bounded above and away from zero, n tends to infinity as a fixed positive power of epsilon^(-1), h0 is comparable to n^(-1/2), and n*h0 is comparable to sqrt(n). The formal exponent of h0 as a function of r shows that h0->0 is equivalent to r=o(epsilon^a_c) above. This implies n->infinity, since a_c>(2-q)/2.

Let

    x_i=i/n,    z_i=z(x_i),    h_i=h0 delta(x_i).

Even if some h_i>1, they are positive and summable for each fixed n,h0, by the exponentially decaying large-x tail. The free score's null variance is

    V=sum h_i^2[cosh(z_i^2)-1]=U^2(1+o(1)).       (S2)

Similarly the free formal moments are c1*h0*n^(2 beta+1)(1+o(1)) and c2*h0*n^(q s+1)(1+o(1)). To justify these Riemann sums, split at fixed small a and large b. On [a,b], smoothness gives ordinary Riemann convergence. At zero each integrand is bounded by C x^p for some p>0, so the discrete sum divided by n over i/n<a is bounded by C a^(p+1) plus a term tending to zero. At infinity each integrand is bounded by C x^m exp(-c x^(2kappa)); choose b beyond its eventual decreasing envelope and compare the sum with its integral. The bounds are uniform when n varies through all sufficiently large real values. This proves the required tail control rather than merely invoking integrability of an arbitrary function.

## 5. Comparison with the actual relaxed infimum

Let J(r,epsilon)=inf C(g,w) be the actual relaxed moment infimum. Under n->infinity,h0->0,

    J(r,epsilon)~U^2.                            (E1)

LOWER BOUND. Use the free score coefficients h_i,z_i above. For any feasible pair g_i,w_i of finite objective, (D1) gives

    sum h_i*g_i[cosh(z_i*w_i)-1]
      >= (h0/2)[n^(-2 beta)sum i^(2 beta)g_i*w_i^2
                  -n^(-q s)sum i^(q s)g_i*w_i^q]
      >= (h0/2)[n^(-2 beta)r^2/epsilon^2
                  -n^(-q s)epsilon^(-q)]
      = U^2,                                    (E2)

using (S1),(D2). The kernel cosh(z*w)-1 is the covariance of the two centered Gaussian cosh scores. Cauchy--Schwarz in L2 of the independent Gaussian sequence therefore bounds the left side by sqrt(V)*sqrt(C(g,w)). Consequently J>=U^4/V=U^2(1+o(1)). For infinite sums, first apply the inequality to partial sums and use nonnegativity and the finite L2 norms; the resulting bound also forces the relevant energy moment to be finite whenever the cost is finite. Pairs of infinite cost do not affect the infimum.

UPPER BOUND WITHOUT UNSUPPORTED CLIPPING. Fix 0<a<b<infinity and replace c0,c1,c2 by their integrals over [a,b]. Choose a new n',h0' using these c1[a,b],c2[a,b], with slightly stricter continuous targets: energy (1+eta)r^2/epsilon^2 and budget (1-eta)epsilon^(-q), for fixed small eta>0. Set g_i=h0' delta(i/n') on a<=i/n'<=b and zero elsewhere; use w_i=z(i/n') there. Because the window is compact, sup delta is finite; h0' is a parameter-only fixed multiple of h0 and tends to zero. Hence 0<=g_i<=1 for all sufficiently small epsilon. Ordinary Riemann errors are o(1), so the strict targets guarantee actual feasibility. Its cost divided by U^2 tends to a continuous expression in eta and the three truncated constants. Let eta decrease to zero, then a decrease to zero and b increase to infinity; that expression tends to one. This proves limsup J/U^2<=1. No exact free-profile probability law or clipped optimizer was claimed.

This argument proves the power asymptotic for the entire sufficient n->infinity,h0->0 zone. It also gives the compact transition comparison for J at shrunk radius r*(1-delta_epsilon): U(shrunk)/U(r)->1 whenever delta_epsilon->0.

## 6. A feasible concentrated lower prior on compact transitions

Now assume U stays in a compact subset of (0,infinity). Use independent coordinates equal to 0 with probability 1-g_i and to +/-z_i with probability g_i/2 on a finite window. Choose the continuous targets a little INSIDE the actual alternative:

    expected weighted energy >=(1+tau)r^2/epsilon^2,
    expected weighted q-budget <=(1-tau)epsilon^(-q),

with tau->0 slowly, and use windows a_epsilon->0,b_epsilon->infinity slowly. There is no conflict between these choices. One explicit style is a=(log n)^(-M), b=(log n)^M with fixed sufficiently large M, tau=(log n)^(-1/2), together with the slightly adjusted scaling from section 5; alternatively a diagonal choice from compact windows suffices. Smooth profile derivatives on such windows grow at most polynomially in log n except for favorable decaying tails, so Riemann errors are negligible compared with tau. The small-window lost integral is O(a^(4 beta+1)), so choose M(4 beta+1)>1/2. All g_i<=1 because h0 times a polynomial of log n tends to zero.

For full clarity one can instead choose the window and tau by a slow diagonal sequence: for each fixed window all convergence and concentration bounds below hold uniformly on compact transition U; choose each next window only after these bounds are smaller than its prescribed margin. This avoids needing a derivative-rate assertion.

The variances of the two random constraint sums are bounded by fixed constants times

    h0*n^(4 beta+1)*M1,
    h0*n^(2 q s+1)*M2,

up to factors tending to one. Their squared means are of respective orders h0^2*n^(4 beta+2) and h0^2*n^(2 q s+2). Relative variances are O(1/(n*h0))=O(n^(-1/2)); any sufficiently slow tau dominates their relative standard deviations. Chebyshev therefore puts probability 1-o(1) on the actual alternative. The prior is finite-support in coordinates, hence every draw is in l2. Conditioning it on the actual alternative changes its observation mixture by total variation o(1).

The prior cost is U^2+o(1), and its null coordinate variance maximum tends to zero. Its variance mass at z>B tends uniformly to zero as B->infinity, by the profile tail integral. The three-point parameters obey g_i<=1 by construction, unlike the unrestricted free score.

## 7. A fully explicit LAN lemma for this prior

For each prior coordinate define

    A_i=g_i[exp(-z_i^2/2)cosh(z_i G_i)-1].

Then E A_i=0 and E A_i^2=g_i^2[cosh(z_i^2)-1]. Suppose their total tends to U0^2 in (0,infinity), their maximum tends to zero, and their variance mass on z_i>B tends uniformly to zero as B->infinity. These properties were checked for the prior in section 6.

For z_i<=B, direct Gaussian exponential moments give

    E A_i^4<=C_B (E A_i^2)^2.

Therefore the sum of fourth moments on this set tends to zero. The omitted z_i>B linear sum has variance tending to zero as B grows, and its quadratic sum has expectation tending to zero. The triangular Lindeberg CLT and the same truncation yield

    sum A_i => N(0,U0^2),
    sum A_i^2 -> U0^2 in probability,
    max |A_i| ->0 in probability.

Taylor expansion log(1+a)=a-a^2/2+O(delta*a^2) on |a|<=delta then gives

    log likelihood => N(-U0^2/2,U0^2) under the null.

Here the priors have finite coordinate support, so no infinite-product issue arises. If a countable version is used, finite-product likelihood martingales have the bound

    E L_m^2=product_{i<=m}(1+E A_i^2)
           <=exp(sum E A_i^2),

which gives the L2 product limit, expectation one, and uniform integrability. The same bound gives uniform integrability across epsilon when U0 is finite.

The Neyman--Pearson lemma, continuity of the Gaussian limit, and likelihood uniform integrability give the Bayes fixed-level type-II limit Phi(H_level-U0). Also the total Bayes error is E_0 min(1,L), whose limit is 2 Phi(-U0/2). Conditioning the prior costs o(1) in these bounds. This proves the minimax lower bounds on compact transitions.

## 8. Specialized uniform Gaussian upper bound

### 8.1 Test and elementary tail threshold

Use the FREE positive score coefficients from section 4:

    F(X)=sum h_i[exp(-z_i^2/2)cosh(z_i X_i)-1].

This is rigorously defined as the nonnegative series sum h_i exp(-z_i^2/2)cosh(z_i X_i) minus the finite constant sum h_i. It may be +infinity under some alternatives. It is product-Borel. Under the null it is finite and has variance V from (S2).

For n sufficiently large let

    Q_i^2=2 log(i+1)+4 log log(i+3)+4 log log n,
    Y={some i: |X_i|>Q_i}.

Gaussian exponential Markov bounds and a union bound give

    P0(Y)<=2(log n)^(-2)sum 1/[(i+1)(log(i+3))^2]=o(1).

Moreover for every fixed K,

    max_{i<=n(log n)^K} Q_i =sqrt(2 log n)+o(sqrt(log n)).

The test is {F>H_level sqrt(V)} UNION Y for fixed-level risk, and {F>V/2} UNION Y for total risk. No printed sign/intersection convention is used.

### 8.2 Delete only for ANALYSIS; stochastic domination makes the test implementable

Fix a small constant d>0. Alternatives with P_mu(Y complement)<d already have test type-II error at most d. For every other alternative, independence implies, with p_i=P_mu(|X_i|>Q_i),

    sum p_i<=-log d,
    |mu_i|<=Q_i+C_d.                             (U1)

The first inequality follows from product(1-p_i)>=d and log(1-p)<=-p. The second follows from each coordinate's inside probability being at least d and a one-sided Gaussian quantile bound.

Choose K>(2-q)/(2L), N=n(log n)^K. The energy of coordinates i>N is at most

    epsilon^(-q) sup_{i>N} i^(-L)(Q_i+C_d)^(2-q)
      <=C_d epsilon^(-q) N^(-L)(log N)^((2-q)/2)
      =o(r^2/epsilon^2).                         (U2)

The elementary supremum bound holds because i^(-L) times the indicated logarithmic factor is eventually decreasing, and log n is comparable to log epsilon^(-1) on compact transitions. Equation (S1) converts the last expression: epsilon^(-q)n^(-L) is a fixed multiple of r^2/epsilon^2.

Choose a constant c in (sqrt(2)-1,1/2), for example c=0.45. Among i<=N, delete coordinates with |mu_i|>c sqrt(log n). Since Q_i<=sqrt(2 log n)+o(sqrt(log n)), each such coordinate has

    p_i>= n^(-a+o(1)),
    a=(sqrt(2)-c)^2/2<1/2,

uniformly. This is the elementary Gaussian lower tail bound at Q_i-|mu_i|; larger means only increase p_i. With (U1), the number deleted is at most n^(a+o(1)). Their weighted energy is at most

    n^(2 beta+a+o(1))=o(n^(2 beta+1/2))
                       =o(r^2/epsilon^2),        (U3)

because |mu_i|<=Q_i+C_d=O(sqrt(log n)) there and h0 is comparable to n^(-1/2). Polynomial log factors are absorbed into n^o(1).

Let mu* be the residual vector after these two deletions. It has finite support, |mu_i*|<=c sqrt(log n), q-budget no larger than the original budget, and energy at least (1-o(1))r^2/epsilon^2, uniformly for the class P_mu(Y complement)>=d. Applying the exact scalar inequality (D1) and (S1),(D2) gives

    M:=E_mu* F>=U^2-o(1).                        (U4)

This analysis does not change the test or require knowing the deleted coordinates. For each z>0, cosh(z(G+mu)) is stochastically increasing in |mu|: P(|G+mu|<=t)=Phi(t-|mu|)-Phi(-t-|mu|) decreases with |mu|. Coordinate independence and positive coefficients therefore imply

    P_mu(F<=t)<=P_mu*(F<=t).

For infinitely many coordinates use finite partial sums of the nonnegative series and take limits. Thus it is valid to bound the original score-miss probability using the residual vector.

### 8.3 Exact variance and uniform control

For one coordinate, direct Gaussian moments give

    E_mu xi_z(G+mu)=cosh(z mu)-1,
    Var_mu xi_z(G+mu)
       =[cosh(z^2)-1]+[exp(z^2)-1]sinh^2(z mu),   (U5)

where xi_z(t)=exp(-z^2/2)cosh(z t)-1. Put

    m_i=h_i[cosh(z_i mu_i*)-1]>=0,   sum m_i=M.

The excess variance is sum h_i^2[exp(z_i^2)-1]sinh^2(z_i mu_i*). Since sinh^2(t)=(cosh(t)-1)(cosh(t)+1), it is bounded coordinatewise by

    K_i*m_i,
    K_i=h_i[exp(z_i^2)-1][cosh(z_i mu_i*)+1].

For z_i<=sqrt(log n), (D3) and |mu_i*|<=c sqrt(log n) give

    K_i<=C h0 x_i^(2 beta)exp(c z_i sqrt(log n))
         <=n^(-1/2+c+o(1))=o(1).                (U6)

Here z_i<=sqrt(log n) implies x_i<=C(1+(log n)^(1/(2kappa))), and h0 is comparable to n^(-1/2). Thus the low-z excess variance is o(1)*M.

For z_i>sqrt(log n), (D4) gives the ABSOLUTE bound

    excess_i<=C h0^2 x_i^(4 beta)
                exp(-z_i^2+2c z_i sqrt(log n))
              <=C h0^2 x_i^(4 beta)exp(-(1-2c)z_i^2).

The last high-z sum is o(1), by the exponential profile tail and h0^2*n=O(1). Discrete integral comparison is justified as in section 4; the lower cutoff z_i>sqrt(log n) tends to infinity. Consequently, uniformly over the residual alternatives,

    Var_mu* F <= V+o(1)*M+o(1).                 (U7)

There is no bounded-z assumption hidden here. High z were handled by an absolute exponentially decaying variance bound, not by a global fourth-moment assertion, which would generally be false.

### 8.4 Uniform CLT for bounded mean; Chebyshev for diverging mean

Suppose M stays bounded. Fix B first. For z_i<=B,

    h_i z_i^2<=C_B h0 x_i^(2 beta).

A Taylor bound for cosh(z(G+mu))-E cosh(z(G+mu)), using z<=B, gives

    E |h_i(xi_z(G+mu_i*)-E xi_z(G+mu_i*))|^4
       <=C_B (h_i z_i^2)^4(1+|mu_i*|^4)
                                  exp(4B|mu_i*|).

For example expand cosh(z(G+mu)) into cosh(zG)cosh(zmu)+sinh(zG)sinh(zmu), use |sinh(zmu)|<=z|mu|exp(B|mu|), and bound the fourth moments of cosh(zG)-E cosh(zG) and sinh(zG) by C_B z^8 and C_B z^4 respectively. This proves the displayed bound, including z->0. Since z_i<=B implies i<=C_B n, summing gives

    O_B(n h0^4)*n^o(1)=n^(-1+o(1))->0.

The variance on z_i>B is at most its NULL variance tail plus o(1), using (U6),(U7) and bounded M. The null variance tail tends to zero as B->infinity by section 3. A fixed-B Lyapunov CLT followed by this L2 tail bound proves

    F-M => N(0,U0^2)

whenever U->U0 in (0,infinity), uniformly on residual alternatives with bounded M. Uniformity can be formulated by the usual contradiction/subsequence argument: every sequence satisfying the bounds has the same centered Gaussian limit.

If M diverges, (U7) and Chebyshev imply P_mu*(F<=t)->0 for every bounded threshold t, since the variance divided by (M-t)^2 tends to zero. Thus all residual alternatives are covered.

Combining this with M>=U^2-o(1) gives the upper fixed-level error Phi(H_level-U0)+o(1), and upper type-II error Phi(-U0/2)+o(1) for threshold V/2. Null CLT gives the corresponding null errors, and P0(Y)=o(1). Let d decrease to zero after the limit to cover the alternatives discarded at the start of 8.2. This proves both Gaussian sharp upper bounds on compact transitions.

## 9. Extension of sharp errors beyond compact transitions

Let rstar=epsilon^(A/B). On every compact interval of r/rstar in (0,infinity), sections 5--8 prove

    beta_epsilon(r,level)=Phi(H_level-u_epsilon)+o(1),
    gamma_epsilon(r)=2Phi(-u_epsilon/2)+o(1),

where u_epsilon is the actual relaxed infimum at the stated shrunk radius. Only delta_epsilon->0 is needed for its compact-transition comparison; keeping the stronger stated delta condition is harmless.

The minimax risks decrease with r, and the relaxed infimum increases with its radius. Comparing r/rstar->0 with each fixed small transition constant, then letting that constant decrease to zero, yields beta->1-level and gamma->1. Comparing r/rstar->infinity with each fixed large transition constant, then letting it increase to infinity, yields beta,gamma->0. The same comparisons show u->0 and u->infinity respectively, even outside the power-asymptotic zone. Finally any arbitrary sequence r/rstar has a subsequence converging in the extended interval [0,infinity]; the compact-transition or endpoint argument applies. This yields the full o(1) risk formulas for arbitrary r->0, while correctly restricting the separate POWER ASYMPTOTIC to a justified zone.

## 10. Exact external logical imports still needed for repository authoring

The mathematics above needs ordinary Gaussian exponential integration, Cauchy--Schwarz, Chebyshev, independent-coordinate products, elementary Riemann-sum convergence with the supplied endpoint envelopes, and an independent triangular-array CLT (Lyapunov/Lindeberg with the stated truncation argument). It also uses the Neyman--Pearson lemma for the prior lower bound, convergence of expectations under uniform integrability, and stochastic domination of independent sums. These must be given valid local suppliers or proved; they are not automatically supplied by the current sparse carrier's dependency list.

No reading or completion of Ingster1996, Suslina1996, or Ingster1993II has been fabricated. Their full texts remain unavailable in this environment. This donor supplies independent specialized arguments in place of those imports; the owner should independently check it before incorporation.
