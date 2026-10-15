# Local strong-mixing CLT repair proposal

Assigned scope: `thm-strong-mixing-clt-with-moment-conditions`, with the strong-mixing uses in `thm-mcmc-clt-sufficient-regimes` checked. This is research evidence only. No item, manifest, contract, readiness record, hash, certification or test is changed or asserted here.

## Source recovery and exact bounded hypothesis

I recovered the full PDFs of Galin Jones, *On the Markov Chain Central Limit Theorem*, https://arxiv.org/pdf/math/0409112, and Doukhan–Massart–Rio, *The functional central limit theorem for strongly mixing processes*, Ann. IHP 30 (1994), 63–82, https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf . I read Jones's actual sufficient-conditions text, pp. 9–13, and DMR's statement, applications and scalar-CLT proof, pp. 66–71; the full recovered DMR text also includes the subsequent functional-CLT and sharpness arguments. The PDFs and extracted working text are in `/tmp/mcmc-strong-mixing-sources/` and are not durable repository dependencies.

Jones Theorem 5(1), p. 9, says **sum over n of alpha(n)**, not sum of n times alpha(n). I checked the rendered PDF itself: the n is the lower index of the summation sign. Jones Corollary 2(3), p. 11, and Theorem 9(1), p. 13, accordingly use bounded observations and polynomial order m>1. The current local supplier's stronger `sum n alpha(n)<infinity` is sound, but does not justify that consumer when 1<m<=2. This is an unnecessary hypothesis strengthening in the local supplier, not a source inconsistency.

DMR Lemma 1 / Proposition 1 / Theorem 1, pp. 66–67, use an inverse-mixing-rate weighted squared-quantile integral. Application 4, p. 68, gives the exponential-mixing/logarithmic-moment case. Their scalar proof, Theorems 3–4, pp. 69–71, invokes Hall–Heyde's theorem based on Gordin and proves projective estimates. Copying only that invocation would leave a local supplier gap. The elementary scalar blocking and truncation proof below does not use their theorem, Gordin, a martingale CLT, or a hidden uniform-integrability premise. The functional CLT is outside the present claim.

## Proposed mathematical interface

Preserve all three currently stated regimes. In addition, prove the bounded conclusion under the weaker hypothesis `sum alpha(n)<infinity`; this includes the current regime 1 and supplies the existing MCMC bounded polynomial claim. The clean source-faithful eventual repair is to replace the weighted sum in regime 1 by the unweighted sum. If an interface change is temporarily unavailable, state the stronger bounded lemma separately and have the MCMC consumer cite it directly. There is no reason to reduce the consumer to m>2.

All details below concern one-sided strictly stationary sequences and the actual alpha coefficient in the local definition. Every use involves two finite blocks or finite collections with a positive separation, so neither a two-sided extension nor a past-filtration regular-conditional-probability theorem is needed.

## 1. Elementary covariance inequalities

For sigma fields A and B with strong-mixing coefficient alpha, and A-measurable U, B-measurable V, let

    Q_U(u) = inf {t>=0: P(|U|>t)<=u},  0<u<1.

For finite-second-moment U,V,

    |Cov(U,V)| <= 4 integral_0^alpha Q_U(u) Q_V(u) du.                 (1)

Here and below constants need not be sharp. To prove (1), first take nonnegative bounded U,V and apply layer cake to their covariance. For their threshold indicators the absolute covariance is bounded by each of alpha, P(U>s), and P(V>t). Integrating

    min(alpha, P(U>s), P(V>t))

in s,t, and then writing this minimum as the integral of the indicator that u is below all three arguments, gives exactly `integral_0^alpha Q_U Q_V`. Decompose signed U,V into their positive and negative parts; each of the four terms is bounded by the same integral using the absolute-value quantiles. Finally truncate U,V and pass in L2, using Cauchy–Schwarz and dominated convergence for the quantile integral. This proves (1), including unbounded variables. In particular,

    |Cov(U,V)| <= 4 ||U||_infinity ||V||_infinity alpha.             (2)

For complex bounded U,V the same argument applied to real and imaginary parts gives an absolute constant times the product of their bounds and alpha. Thus for characteristic-function factors of separated blocks, each bounded in modulus by one, the usual telescoping factorization error for k blocks is at most `C(k-1)alpha(q)` when consecutive blocks are at distance at least q. This is obtained by splitting the product of the first j factors from factor j+1 and summing their covariance errors; it asserts characteristic-function approximation, not a coupling or total-variation approximation.

If centered stationary Z has absolutely summable covariances, write

    D_Z = E Z_0^2 + 2 sum_{r>=1} |Cov(Z_0,Z_r)|.

For every finite subset I of time indices,

    E (sum_{i in I} Z_i)^2 <= D_Z |I|.                              (3)

Indeed expand the square; for each i and each positive lag r there are at most the corresponding two ordered pairs. The same expansion and dominated convergence give

    Var(S_n)/n -> sigma_Z^2
      = E Z_0^2 + 2 sum_{r>=1} Cov(Z_0,Z_r) >= 0.                  (4)

These facts do not use a CLT.

## 2. Bounded CLT with summable alpha: complete blocking proof

Suppose E Z_0=0, |Z_0|<=B a.s., and `sum_{r>=1}alpha(r)<infinity`. Formula (2) supplies (3)–(4). Set alpha(0)=1 as a convenient bound for coincident indices, and T_p=sum_{i=1}^p Z_i.

**Fourth-moment estimate.** For ordered indices i<=j<=k<=l, put a=j-i and c=l-k. If a>0, centering of Z_i and (2) give

    |E Z_i Z_j Z_k Z_l| <= C B^4 alpha(a).

If c>0 use centering of Z_l in the same way. If either gap is zero use the trivial B^4 bound for that gap. Together these give

    |E Z_i Z_j Z_k Z_l| <= C B^4 alpha(max(a,c)).

After ordering the four indices there are at most 24 permutations. For fixed a,c there are at most p choices for i and p choices for the middle gap k-j. Consequently

    E T_p^4 <= C B^4 p^2 sum_{r=0}^p (2r+1) alpha(r) = o(p^3).     (5)

For the last equality, summability implies

    (1/p) sum_{r<=p} r alpha(r) -> 0:

split the sum at a fixed R, bound r/p by one on the tail, take p to infinity, and then R to infinity. This deals with repeated indices as well as distinct ones. In particular (5) does not pretend that `E T_p^4=O(p^2)` follows from summable alpha.

**Choice of blocks.** Let eps_p=E T_p^4/p^3 ->0. Choose h_n tending to infinity sufficiently slowly that h_n=o(n^(1/4)) and

    h_n^2 sup_{p>=floor(sqrt(n))} eps_p ->0.

Such a choice exists: use the minimum of n^(1/8) and the inverse fourth root of that tail supremum, treating a zero supremum as infinity. Harmless integer adjustments do not change these properties. Take

    p_n=ceil(sqrt(n) h_n),  q_n=floor(sqrt(n)/h_n),
    k_n=floor(n/(p_n+q_n)).

Retain k_n consecutive long blocks of length p_n, separating them by gaps of length q_n, and discard the remaining indices. Their count is at most k_n q_n+p_n+q_n=o(n). By (3), the sum of all discarded observations divided by sqrt(n) tends to zero in L2. This estimate applies to the union of gaps, so no false independence of gaps is used.

Summable nonincreasing alpha satisfies r alpha(r)->0: for example `(r/2)alpha(r)` is bounded by the sum of alpha over floor(r/2),...,r. Therefore

    k_n alpha(q_n) <= (n/p_n) alpha(q_n)
                     <= C q_n alpha(q_n) ->0.                    (6)

The floor inequality holds eventually since sqrt(n)/h_n tends to infinity. Equation (6) and the telescoping consequence of (2) show that the characteristic function of the normalized retained sum differs by o(1) from the product of the characteristic functions of its k_n normalized blocks. Stationarity makes these block laws identical.

**Independent-block Lindeberg and normal limit.** Write W_{n,j} for independent random variables having these block laws divided by sqrt(n). Their construction is dispensable: their product characteristic function is all that is used. Equations (4)–(5) give

    sum_j E W_{n,j}^2
       = (k_n p_n/n) Var(T_{p_n})/p_n -> sigma_Z^2,

    sum_j E W_{n,j}^4
       = k_n E T_{p_n}^4/n^2
       <= E T_{p_n}^4/(p_n n)
       = (p_n^2/n) eps_{p_n} ->0.                                (7)

Thus for every eta>0 the Lindeberg sum is at most `eta^(-2) sum_j E W_{n,j}^4`, which tends to zero. There is no assumption that p_n B/sqrt(n) tends to zero; indeed that bound diverges for these blocks. Equation (7) is the needed replacement.

For completeness one can conclude without importing a triangular-array CLT. Cauchy–Schwarz on the sums of moments gives

    sum_j E|W_{n,j}|^3
       <= (sum_j E W_{n,j}^2)^(1/2)
          (sum_j E W_{n,j}^4)^(1/2) ->0.

The Taylor bound for exp(itx) gives, for fixed t,

    E exp(it W_{n,j}) = 1 - (t^2/2) E W_{n,j}^2 + r_{n,j},
    sum_j |r_{n,j}| <= (|t|^3/6) sum_j E|W_{n,j}|^3 ->0.

Also `max_j E W_{n,j}^2 ->0`, since its square is bounded by `max_j E W_{n,j}^4`. The sum of squared deviations of these characteristic-function factors from one therefore tends to zero (their absolute deviations have bounded sum and vanishing maximum). Expanding log(1+z) proves that their product tends to `exp(-t^2 sigma_Z^2/2)`. Levy's characteristic-function criterion, (6), and the discarded-sum L2 estimate prove

    S_n/sqrt(n) => N(0,sigma_Z^2).

The argument also covers sigma_Z^2=0; alternatively (4) and Chebyshev suffice then. This completes the bounded summable-alpha proof locally.

## 3. Quantile truncation with uniform variance control

For the original centered Y put Q=Q_Y and

    w(u)=1 + sum_{r>=1} 1_{u<alpha(r)},
    J=integral_0^1 w(u) Q(u)^2 du.

Changing `<` to `<=` changes nothing in the integrals. Assume J<infinity and sum alpha(r)<infinity. All three regimes below imply both. Formula (1) proves absolute covariance summability for Y, since

    sum_{r>=1}|Cov(Y_0,Y_r)|
       <= 4 integral_0^1 (w(u)-1) Q(u)^2 du.                       (8)

In particular (4) defines a finite nonnegative sigma_Y^2.

Let c_M(y)=max(-M,min(y,M)), let Z_k^(M)=c_M(Y_k)-E c_M(Y_0), and let

    R_k^(M)=Y_k-Z_k^(M)
           = H_M(Y_k)-E H_M(Y_0),  H_M(y)=y-c_M(y).

The clipped process is centered, bounded by 2M, strictly stationary, and its alpha coefficients are at most those of Y because its block sigma fields are subfields. The bounded theorem applies. The raw remainder H_M(Y_0) has absolute value (|Y_0|-M)_+; with t_M=P(|Y_0|>M), its quantile is bounded almost everywhere by `Q(u) 1_{u<t_M}`. Covariance is unaffected by centering. Applying (1) to the raw remainders and using Var(H_M(Y_0))<=E H_M(Y_0)^2 gives

    D_{R^(M)} <= C integral_0^{t_M} w(u) Q(u)^2 du =: e_M^2 ->0.    (9)

Here t_M tends to zero, and absolute continuity of the finite integral J proves the final limit. This estimate handles the centering exactly; it does not incorrectly bound the centered remainder's quantile by the raw tail quantile.

Equations (3) and (9) give the uniform-in-n approximation

    sup_n ||n^(-1/2) sum_{k=1}^n R_k^(M)||_2 <= e_M.               (10)

Both Y and each Z^(M) have summable covariances, so their normalized variance limits exist. The reverse triangle inequality for the L2 norms of their normalized sums, followed by n tending to infinity, yields

    |sigma_Y - sigma_{Z^(M)}| <= e_M.                             (11)

For every fixed real t, (10) and `|exp(itx)-exp(ity)|<=|t||x-y|` imply

    limsup_n |E exp(it S_n/sqrt(n)) - exp(-t^2 sigma_Y^2/2)|
      <= |t| e_M
         + |exp(-t^2 sigma_{Z^(M)}^2/2)-exp(-t^2 sigma_Y^2/2)|.

Let M tend to infinity and use (11). Levy's criterion proves the desired CLT. Thus covariance summability, variance convergence, truncation error, and the limiting variance are all controlled before making the final normal-limit passage.

**Uniform integrability check.** UI is not a premise of the argument. It follows afterwards: `(S_n/sqrt(n))^2` converges in distribution to the square of the stated normal, and by (4) its expectation converges to that square's expectation. For nonnegative random variables this implies UI: bounded continuous truncations x∧K have convergent expectations, and subtraction from the converging full expectations makes `limsup_n E[(X_n-K)_+]` tend to zero; then use `X 1_{X>2K}<=2(X-K)_+`, with the finitely many initial n handled separately. This also explains why a proof which assumes UI of the block squares at the start would be circular.

## 4. Verification of the three regimes

**Bounded case.** If |Y_0|<=B and sum alpha(r)<infinity, then

    J <= B^2 (1+sum alpha(r)) <infinity.

The stated stronger sum r alpha(r)<infinity certainly implies this. The bounded theorem already proves the conclusion directly.

**Power moment case.** Put p=2+delta and theta=1-2/p=delta/(2+delta). Holder's inequality yields

    integral_0^{alpha(r)} Q(u)^2 du
       <= alpha(r)^theta (integral_0^1 Q(u)^p du)^(2/p)
       = alpha(r)^theta (E|Y_0|^p)^(2/p).

Summing proves J<infinity. Since 0<=alpha(r)<=1 and theta<1, summability of alpha^theta also implies summability of alpha. This verifies exactly regime 2, including its endpoint-free summability hypothesis.

**Exponential alpha and logarithmic moment.** If alpha(r)<=C a^r eventually, with 0<a<1, then

    w(u) <= C_1 + C_2 log(1/u),  0<u<1.

This follows by counting positive integers satisfying u<C a^r, absorbing the finitely many exceptional lags into C_1. It remains to prove that `integral Q^2 log(1/u)` is finite, rather than silently assuming a stronger power moment.

For x>=0 and v>=0, elementary Young's inequality for x log x gives

    x v <= x log^+ x + exp(v).

For x>0 it follows by maximizing xv-x log x+x over x, or by the elementary convex-conjugate inequality; x=0 is immediate. Apply this with x=Q(u)^2 and v=(1/2)log(1/u), then integrate:

    integral_0^1 Q(u)^2 log(1/u) du
       <= 2 integral_0^1 Q(u)^2 log^+(Q(u)^2) du
          + 2 integral_0^1 u^(-1/2) du
       = 4 E[Y_0^2 log^+|Y_0|] + 4 <infinity.                    (12)

The quantile transform has the law of |Y_0|. The logarithmic moment also gives E Y_0^2<infinity by splitting at e, as the consumer already states. Hence (12), the bound on w, and exponential summability prove the master hypotheses. This verifies exactly regime 3 with no moment exponent added.

## 5. Consumer compatibility and smallest local suppliers

For MCMC regimes 1–4, the existing rate-to-alpha and observation lemmas give alpha_f(n)<=alpha_X(n)<=C gamma(n), provided their stated stationary/integrable-envelope hypotheses have actually been proved. Therefore:

- Bounded polynomial order m>1 gives sum alpha_f(n)<infinity and uses the bounded theorem in section 2. It does not give sum n alpha_f(n)<infinity for the whole approved range. Preserve m>1.
- Polynomial rate n^(-m) with p=2+delta uses sum n^(-m delta/(2+delta))<infinity exactly when m delta>2+delta, agreeing with regime 2.
- Geometric rate plus an integrable rate envelope gives exponential alpha and makes every alpha^theta summable, agreeing with regime 3.
- Geometric rate plus the stated logarithmic moment uses section 4's exponential/logarithmic case, agreeing with regime 4.

Indexing the consumer's sums from 0 rather than 1 causes no issue: strict stationarity gives identical laws for each n. Regimes 5–6 use rho/uniform mixing and are separate tasks, not consequences asserted here. This proposal does not certify the Harris-convergence or geometric-integrable-envelope suppliers.

The smallest useful reusable supplier decomposition is:

1. A quantile covariance inequality, with the threshold-indicator/layer-cake proof in section 1 (bounded characteristic-function factorization can be included as a corollary).
2. A bounded summable-alpha scalar CLT, with the fourth-moment estimate, slow-block selection and characteristic-function/Lindeberg proof in section 2.
3. A quantile-tail variance approximation lemma, sections 1 and 3; its conclusion is (9)–(10), and its proof consists only of covariance expansion, (1), and absolute continuity of an integral.

The target theorem can then contain the final truncation/variance/characteristic-function passage and the two moment-integrability computations. Alternatively all these arguments fit inside a longer local proof without adding items; the decomposition is a presentation and dependency choice, not a need for an external theorem. Levy's continuity theorem, elementary Holder/Cauchy–Schwarz, dominated convergence/Tonelli, and variance algebra are the ordinary foundational suppliers to link according to actual local inventory. No abstract martingale approximation theorem or two-sided stationary extension is required.

There is no unresolved source uncertainty about the three regimes or the bounded m>1 compatibility: Jones's exact summation notation is visually confirmed, and DMR's recovered full article supplies the underlying general criterion and the exponential application. The proposed independent scalar proof is given above rather than deferred to either citation. Adoption still requires the owner's source integration and normal independent mathematical review; no build readiness or audit stamp is claimed by this research note.
