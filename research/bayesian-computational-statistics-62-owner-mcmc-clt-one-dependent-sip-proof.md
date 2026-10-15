# Adjacent-iid one-dependent SIP: local triple-block reduction

Research only. No live item, manifest, contract, dependency level, hash, readiness or verification carrier was changed; no tests or validators were run.

## Result and exact remaining interface

For centered X_i=h(U_i,U_(i+1)), where the U_i are iid standard-Borel random elements and E|X_0|^q<infinity for some finite q>p>2, the triple-block construction below reduces an o(n^(1/p)) strong approximation to:

1. a finite independent-**nonidentically distributed** Gaussian coupling bound, used conditionally on iid anchors; and
2. the pending ordinary iid strong approximation applied to an explicitly identified iid scalar sequence in L^q.

The reduction, moment bounds, variance identification, conditional Gaussian construction and endpoint control are given explicitly below. No external dependent SIP is used as a proof premise. The first coupling is an additional deep interface: an iid-only theorem does not automatically supply it. The conditional finite-array form and required measurable dependence on the laws should be included in the Gaussian-anchor/conditional-quantile supplier under construction. A root-authorized supplier proving precisely that form would complete this route; absent it this note is a rigorous reduction, not a completed library proof.

The achieved rate o(n^(1/p)) is stronger than n^(1/p) times any nonnegative logarithmic factor. Spare q>p removes the need for the original BLW truncation and growing finite-memory approximations.

## Authoritative proof actually recovered and read

István Berkes, Weidong Liu and Wei Biao Wu, *Komlós–Major–Tusnády approximation under dependence*, Annals of Probability **42** (2014), 794–817, DOI https://doi.org/10.1214/13-AOP850. The arXiv ID **1402.6517 is verified**: https://arxiv.org/pdf/1402.6517 is the 25-page electronic reprint, v1 dated 26 February 2014. Downloaded to `/tmp/bcs-one-dependent-blw.pdf` and extracted to the companion `.txt` file.

Read the exact theorem and dependence assumptions (Theorem 2.1 and Corollary 2.1), the complete proof in §§3.1–3.4, and the proofs of Lemmas 4.1–4.3. The key original proof operations are conditional independent approximation in (3.22)–(3.35), telescoping conditional variance in (3.25)–(3.28), and conversion to independent Gaussian mixtures in (3.38)–(3.48). The theorem genuinely covers all moment orders above two for finite-memory functions of iid inputs. Its first approximation uses Sakhanenko (2006) for independent nonidentical summands; it is not a consequence of an iid scalar CLT.

The construction below is a direct fixed-memory specialization with spare moment q>p. It avoids citing BLW's theorem as an unproved local supplier. It also replaces the source's abstract family-of-probability-spaces discussion with an explicit requirement for measurable conditional coupling kernels, to be supplied by the quantile construction.

## Setup and notation

Let the U_i be iid with law nu on a standard-Borel space E. Let h:E^2->R be measurable, with

    E h(U,V)=0,       M_q=E|h(U,V)|^q<infinity,

where U,V are independent nu variables. Put X_i=h(U_i,U_(i+1)). Then X is stationary and one-dependent. Write

    gamma_0=E X_0^2,
    gamma_1=E X_0 X_1,
    sigma^2=gamma_0+2 gamma_1.

The proof will establish nonnegativity of sigma^2 by identifying it with one third of an ordinary iid variance. Real-valued h is enough for this subtask; a joint reward/length vector would require the corresponding finite-dimensional coupling supplier and a matrix version of the variance redistribution. A scalar proof should not be asserted to supply that vector interface without writing it.

Define the one-endpoint conditional means

    l(a)=E h(a,V),       r(a)=E h(V,a).

They are measurable and defined nu-almost everywhere; set arbitrary finite values on any exceptional null set. Fubini and Jensen give E l(U)=E r(U)=0 and E|l(U)|^q+E|r(U)|^q<=2M_q. All expressions below are needed only at countably many nu-distributed anchors, so the corresponding common full-measure set suffices.

For j>=0 put

    A_j=U_(3j),       V_j=U_(3j+1),       W_j=U_(3j+2),
    B_j=h(A_j,V_j)+h(V_j,W_j)+h(W_j,A_(j+1)).

Then sum_{j=0}^{m-1}B_j=sum_{i=0}^{3m-1}X_i. The A_j are iid anchors, and conditional on the entire anchor sequence the interior pairs (V_j,W_j) are mutually independent iid pairs. Consequently the B_j are independent given anchors, with different conditional laws depending on (A_j,A_(j+1)). They are not unconditionally iid.

Set

    Y(a,b;V,W)
      = h(a,V)-l(a) + h(V,W) + h(W,b)-r(b),
    Y_j=Y(A_j,A_(j+1);V_j,W_j).

Then E[Y_j | anchors]=0 and

    B_j=Y_j+l(A_j)+r(A_(j+1)).                      (1)

The uniform unconditional q-moment bound E|Y_j|^q<=C_q M_q follows from the finite-sum power inequality and Jensen. Conditional q moments may be unbounded functions of the anchors; the coupling must allow this. No bounded-conditional-moment assumption is needed.

## Conditional variance telescopes exactly

For independent V,W define

    Q(b)=Var[h(V,W)+h(W,b)-r(b)] >=0,
    P(a)=Var[h(a,V)-l(a)]
          +2 Cov(h(a,V)-l(a), h(V,W)).

All variances/covariances in these definitions integrate only (V,W) and regard a,b as fixed. Since h(a,V)-l(a) and h(W,b)-r(b) are independent centered random variables,

    V(a,b):=Var[Y(a,b;V,W)] = P(a)+Q(b).             (2)

P(a) can be negative; the proof does not assume otherwise. Define

    D(a)=P(a)+Q(a)=Var[Y(a,a;V,W)] >=0.             (3)

The equality in (3) uses independent V,W and the same fixed anchor at the two ends. It is a variance, so its nonnegativity does not require P>=0. Jensen and the finite-sum power inequality give

    E Q(A_0)^(q/2) + E D(A_0)^(q/2) <= C_q M_q.     (4)

Indeed, conditional variance^(q/2)<=conditional qth centered absolute moment, and all component q-moments integrate to finite multiples of M_q, including the same-anchor expression in D.

For m>=0 put

    C_m=sum_{j=0}^{m-1}V(A_j,A_(j+1)),
    T_m=sum_{j=0}^{m-1}D(A_j).

Both clocks are nondecreasing because their summands are variances. The crucial exact identity is

    Q(A_0)+C_m = T_m+Q(A_m).                        (5)

It follows by expanding the P and Q sums and canceling the shifted Q terms. This nonnegative endpoint identity, rather than replacing a fluctuating clock by its mean, avoids the n^(1/4) barrier.

## Precise finite conditional coupling supplier needed

The required independent-array statement is the following. For every finite collection of independent centered real variables Z_1,...,Z_N in L^q, one can construct on a joint extension independent centered Gaussian variables G_i with Var(G_i)=Var(Z_i) such that, for every x>0,

    P{max_{1<=k<=N}|sum_{i=1}^k(Z_i-G_i)|>C_q x}
       <= C_q x^(-q) sum_{i=1}^N E|Z_i|^q.         (F)

A constant depending only on q is sufficient. An equivalent inequality with a truncated-moment expression bounded by the right side is also sufficient. The construction must be a measurable probability kernel in the sequence of input laws (or directly in the parameters determining them) so that it can be applied conditional on anchors. It must preserve the product law of the independent Z_i; the Gaussian coordinates must also have the stated product Gaussian law.

This is the independent nonidentical strong-approximation interface used by BLW through Sakhanenko. Its proof is substantial. A theorem only for identically distributed vectors does not imply (F) by conditioning, and separate scalar CLTs do not imply the maximal path coupling. The conditional-quantile core authors should explicitly prove this version if they intend to supply it. No proof of (F) is claimed here.

Finite rather than infinite independent arrays suffice because of q>p. Partition j>=1 into dyadic shells I_k={2^k,...,2^(k+1)-1}, retaining a finite initial segment separately. Conditional on anchors apply (F) separately on every shell to Y_j. Use mutually independent coupling randomness across shells. The product conditional kernels preserve the entire conditionally independent Y law and give conditionally independent Gaussian G_j with Var(G_j|anchors)=V(A_j,A_(j+1)). For each epsilon>0, integrating (F) with x=epsilon 2^(k/p) gives

    P{max partial error within shell k>C_q epsilon 2^(k/p)}
       <= C_q epsilon^(-q) M_q 2^(k(1-q/p)).        (6)

The series is summable because q>p. Borel–Cantelli and a countable sequence epsilon->0 give shell errors o(2^(k/p)) almost surely. Summing completed shells plus the current partial shell preserves o(n^(1/p)): for a fixed large initial cutoff, the tail is bounded by epsilon times a convergent geometric multiple of n^(1/p), and the finite initial shells vanish after normalization. Therefore the resulting coupling satisfies

    max_{m<=n}|sum_{j<m}(Y_j-G_j)|=o(n^(1/p)) a.s.  (7)

A one-time extra initial variable does not affect this rate. The conditional Gaussian product law permits a Brownian realization, described next. No infinite-array version of (F) is required.

## From conditional Gaussians to genuinely iid variables

Given anchors, add an independent centered Gaussian variable G_- with variance Q(A_0), independent of all the G_j conditional on anchors. Represent the cumulative Gaussian sequence

    G_-+sum_{j<m}G_j

as W(Q(A_0)+C_m), where W is a standard Brownian motion conditionally on anchors. This can be done by filling each interval between the nondecreasing clock values with independent Brownian bridges and appending a Brownian tail if their limiting total length is finite. Zero length intervals correspond to zero Gaussian increments and cause no problem. The conditional law of the resulting W is the fixed standard-Wiener law, so W is independent of the anchors in distribution. The construction is compatible with the already coupled G_j.

By (5),

    sum_{j<m}G_j = W(T_m+Q(A_m))-W(Q(A_0)).         (8)

The replacement of W(T_m+Q(A_m)) by W(T_m) costs only endpoint errors. Conditional on anchors, their difference is centered Gaussian with variance Q(A_m); hence (4) gives

    E|W(T_m+Q(A_m))-W(T_m)|^q <= C_q M_q.           (9)

No independence among these errors is asserted or needed. A union bound over m<=2^k and Markov's inequality at epsilon 2^(k/p) gives a summable bound proportional to 2^(k(1-q/p)). Thus

    max_{m<=n}|W(T_m+Q(A_m))-W(T_m)|=o(n^(1/p))

almost surely. The fixed W(Q(A_0)) is finite almost surely by (4). This step uses the conditional Gaussian moment identity at deterministic times given anchors, not a Brownian modulus assertion at a dependent stopping time.

Define normalized Gaussian increments

    Z_j=[W(T_(j+1))-W(T_j)]/sqrt(D(A_j))

when D(A_j)>0; when D(A_j)=0 add an independent standard Gaussian Z_j. Conditional on anchors the Z_j are iid standard Gaussians. Their conditional law is constant, so the entire Z sequence is independent of the anchor sequence. It follows that the pairs (A_j,Z_j) are iid. Moreover,

    W(T_m)=sum_{j<m}sqrt(D(A_j)) Z_j.                (10)

Now define the explicitly iid scalar variables

    L_j=sqrt(D(A_j)) Z_j + l(A_j)+r(A_j).           (11)

They are centered and in L^q by (4), Gaussian q-moments, Jensen and the finite-sum inequality. The conditional means in (1) satisfy

    sum_{j<m}[l(A_j)+r(A_(j+1))]
      =sum_{j<m}[l(A_j)+r(A_j)] +r(A_m)-r(A_0).    (12)

Since E|r(A_m)|^q is uniformly finite, the same dyadic union/Markov argument shows max_{m<=n}|r(A_m)|=o(n^(1/p)) almost surely. Combining (1), (7)–(12) proves a coupling of the full triple-block process with an iid process:

    max_{m<=n}|sum_{j<m}B_j-sum_{j<m}L_j|
       =o(n^(1/p)) a.s.                            (13)

This is the decisive local reduction. The Gaussian coupling's conditional means and variances were retained explicitly throughout; no independence between the original neighboring B_j was assumed.

## Exact long-run variance of the iid replacement

The iid variance is deterministic and equals exactly three times the one-dependent covariance sum. First,

    E[l(U)r(U)] = gamma_1,

by conditioning h(U_0,U_1)h(U_1,U_2) on U_1. The triple B_0 is the sum of three consecutive one-dependent centered variables, so

    Var(B_0)=3 gamma_0+4 gamma_1.

Conditional on anchors, its mean is l(A_0)+r(A_1), whose variance is E l(U)^2+E r(U)^2 because A_0,A_1 are independent. Therefore the total variance identity and E D(A)=E V(A_0,A_1) give

    E D(A)
      =3 gamma_0+4 gamma_1-E l(U)^2-E r(U)^2.

In (11) the Gaussian component has conditional mean zero and is uncorrelated with l(A)+r(A), so

    Var(L_0)
      =E D(A)+E[l(A)+r(A)]^2
      =3 gamma_0+6 gamma_1
      =3 sigma^2.                                  (14)

In particular sigma^2>=0. This exact calculation avoids trying to infer variance convergence from the almost-sure error (13).

## Final reduction to the pending iid supplier

Choose any s strictly between p and q. Since L_j is iid in L^q, it is in L^s. The pending iid finite-moment strong approximation, applied at order s, gives a Brownian B for which

    max_{m<=n}|sum_{j<m}L_j-sqrt(3 sigma^2) B(m)|
       =o(n^(1/s)) a.s.

An O(n^(1/s) log^K n) conclusion for any fixed finite K is equally sufficient, since s>p. If sigma^2=0, all L_j vanish almost surely and this step needs no normalization or Brownian approximation. Glue this coupling to (13) using conditional laws of the common **entire iid sequence** (L_j), not independent copies with unrelated sums. The relevant real sequence and Brownian path spaces are standard Borel; a proved gluing/disintegration supplier supplies an extension preserving the first coupling.

At n=3m, define Bhat(t)=sqrt(3) B(t/3), a standard Brownian motion, to obtain

    sum_{i=0}^{3m-1}X_i-sigma Bhat(3m)=o(m^(1/p)).

For n=3m,3m+1,3m+2, the difference between the two sums consists of at most two X_i, whose maximum over i<=n is o(n^(1/p)) by q>p and dyadic union/Markov bounds. Brownian increments over the corresponding intervals of length at most two have the same maximal bound using any Gaussian moment larger than p. Thus

    max_{k<=n}|sum_{i=0}^{k-1}X_i-sigma Bhat(k)|
       =o(n^(1/p)) a.s.

The requested n^(1/p) log^K n rate follows. The argument covers a general unbounded measurable h in L^q and every finite q>p>2.

## What this does and does not resolve for the Markov SIP

This proves that the adjacent-iid *structure* has a particularly short all-p reduction: condition on every third input, telescope the conditional variance, obtain iid mixtures, and apply the iid core. The large growing-memory and truncation portions of BLW are unnecessary with spare moments. The remaining deep conditional finite-array inequality (F) is explicit and is the first external theorem genuinely used in BLW's proof; it must be locally authored rather than hidden inside “apply KMT.”

To use the scalar result for the original Markov SIP, the regeneration branch still has to supply a measurable adjacent-iid representation of the actual reward sequence, with the needed L^q moment, and align cycle lengths and reward sums. General one-dependence alone is not asserted to imply a two-input iid representation. If reward and cycle length must be approximated **jointly**, the corresponding two-dimensional conditional Gaussian-array inequality and the matrix covariance redistribution have to be supplied; applying this scalar theorem twice does not establish a joint Gaussian coupling or the required independence after regression. No iid full-tour transformation is claimed: the continuous pair-shift example from the modern SIP note shows that genuine adjacent overlap cannot simply be erased by assigning a boundary to one tour.

The root has been notified that the finite-array independent-noniid version is the minimal additional deep interface to request from the Gaussian-anchor/conditional-quantile core authors. This note makes no proof-completion or readiness claim before that interface is actually proved.

## Follow-up: local construction replacing the independent-noniid import

The subsequent `research/bayesian-computational-statistics-62-owner-mcmc-clt-noniid-coupling-proof.md` supplies an explicit route to the formerly missing finite conditional coupling: truncate at R=N^(1/a), greedily group scalar variances to R^2 log N, and use the locally authored heterogeneous **bounded-atom analytic-class** Gaussian-anchor construction. Its failure bound is C N^(-A)+C R^(-q) sum E|Y_j|^q, which is summable after conditioning/integration and dyadic assembly. It also supplies the distinct joint adjacent-iid vector route by covariance concentration and a stopped Gaussian matrix-tree coupling exploiting the endpoint covariance coboundary. The imported Sakhanenko interface above is therefore an explanatory historical reduction rather than the intended final proof premise. The new local analytic-class construction still requires the ordinary independent review and integration described in that follow-up; neither research note records proof acceptance or readiness.
