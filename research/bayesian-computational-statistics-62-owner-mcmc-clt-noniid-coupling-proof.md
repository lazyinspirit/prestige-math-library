# Independent nonidentical coupling and the joint adjacent-iid extension

Research only. This note develops the remaining scalar conditional coupling and the joint reward/length route. No source, manifest, contract, level, hash, readiness or verification carrier was changed and no tests were run.

The construction uses the locally derived Gaussian-anchor Fourier/quantile/dyadic arguments rather than an imported Sakhanenko/KMT theorem. Its analytic interface is the **bounded-atom log-mgf class**, not the false assertion that a grouped sum is bounded. The dyadic author has independently checked heterogeneous covariance interpolation and is recording that extension in their own note. Source coverage for the original dependent construction remains the complete BLW proof recorded in the one-dependent SIP note.

## 1. Exact finite scalar conclusion sufficient for conditioning

Fix q>a>p>2. Let Y_1,...,Y_N be independent centered real variables, with

    M_N=sum_{j=1}^N E|Y_j|^q<infinity,
    R=N^(1/a),             L=K_A log(eN),

where K_A is chosen for a prescribed confidence exponent A. There is a measurable law-preserving coupling with independent centered Gaussian G_j of variances E Y_j^2 such that

    P{max_{k<=N}|sum_{j<=k}(Y_j-G_j)|
         >C_A R log^(7/2)(eN)}
       <= C_A N^(-A)+C_q R^(-q) M_N.               (1)

The constants do not require a common distribution or uniformly bounded individual q-moments. A finite number of small N can be absorbed in C_A. This deliberately nonoptimal conclusion suffices for conditional arrays: if E M_N=O(N), its failure probability is O(N^(-A)+N^(1-q/a)), summable on dyadic N, and its error is o(N^(1/p)). The same construction can be expressed as a measurable kernel in parameters determining the input laws.

## 2. Truncation and exact restoration of Gaussian variances

Put

    Z_j=Y_j 1_{|Y_j|<=R}-E[Y_j 1_{|Y_j|<=R}],
    v_j=E Y_j^2,       v'_j=E Z_j^2.

The Z_j are independent centered variables bounded by 2R. A union bound gives

    P{some |Y_j|>R} <= R^(-q) M_N.

On the complement, every partial sum of Y_j-Z_j is a deterministic sum of centering corrections. Its absolute value is bounded by R^(1-q)M_N. Consequently its probability of exceeding R is bounded, deterministically or by the indicator inequality, by R^(-q)M_N. This formulation is useful when M_N itself is a random conditional moment sum: integrate Markov's inequality in that case.

There is no uncertain sign in the variance correction. Exactly,

    delta_j=v_j-v'_j
       =E[Y_j^2 1_{|Y_j|>R}]
          +(E[Y_j 1_{|Y_j|<=R}])^2 >=0.

By Cauchy–Schwarz, the squared mean is at most the tail second moment, since E Y_j=0. Hence

    sum delta_j <=2 R^(2-q) M_N.                   (2)

First couple Z_j to a product Gaussian row G'_j of variances v'_j. Then append independent normals H_j of variances delta_j and set G_j=G'_j+H_j. This preserves the correct independent Gaussian row. Kolmogorov's maximal inequality, or the Brownian maximum bound, yields

    P{max_{k<=N}|sum_{j<=k}H_j|>R}
       <=R^(-2) sum delta_j <=2R^(-q)M_N.          (3)

Thus only the bounded independent nonidentical row Z remains to be coupled; no square-root Lipschitz assumption near a zero variance is needed in the scalar truncation argument.

## 3. Greedy scalar grouping by variance

Let T=4R^2 L. Starting at the first unused atom, stop a completed group as soon as the sum of its v'_j reaches T. An individual v'_j is at most 4R^2, so every completed group has variance in [T,T+4R^2], a subset of [T,2T]. There is one final residual group with variance less than T, possibly empty. The number of completed groups is at most N. Zero-variance atoms do not obstruct the construction; they are almost surely zero.

For a completed group I define

    W_I=T^(-1/2) sum_{j in I} Z_j.

Its variance is in [1,2]. It is a sum of independent centered atoms bounded by 2R/sqrt(T)=1/sqrt(L). **W_I itself is not bounded.** Every use of the Gaussian-anchor theorem below refers to its analytic log-mgf and Bernstein bounds, proved from the atoms in §4.

If there are no completed groups, independent product coupling with the matching Gaussian row is sufficient: the total variance is below T, and Bernstein for all initial prefixes, followed by a union bound, gives maximum discrepancy O(RL) with failure O(N^(-A)). Otherwise couple the completed group sums by the heterogeneous Gaussian-anchor construction. A non-dyadic number of groups may be padded with independent unit-variance Gaussian groups; discard these after coupling. Use the ambient confidence log(eN), not the logarithm of the possibly much smaller group count.

At a group boundary the normalized group error is O(log^3(eN)), hence its unnormalized error is

    O(sqrt(T) log^3(eN))=O(R log^(7/2)(eN)).        (4)

Within every group, every original prefix has variance at most 2T and atom bound 2R. Bernstein at confidence L gives O(sqrt(TL)+RL)=O(RL), uniformly over at most N such prefixes. After the group Gaussian sum is coupled, fill individual Gaussian increments within the group by their exact conditional bridge law given that sum; the resulting Gaussian row is independent with variances v'_j. Its unconditional prefix variance in a group is at most 2T, so Gaussian tails give the same O(RL) bound. The residual group is handled by independent product coupling and the same prefix estimates. These unconditional concentration statements are justified by the recovered product marginals; no conditional Bernstein assertion after fixing the group sum is required.

Combining (2)–(4), the tail/bias bound and the union of O(N) concentration events proves (1), subject to the analytic heterogeneous Gaussian-anchor assembly verified next.

## 4. Why the grouped laws satisfy the actual analytic interface

Let independent centered atoms A_i satisfy |A_i|<=b, with covariance matrices Sigma_i (the scalar case is included), and put phi_i(z)=log E exp(<z,A_i>). For complex |z|<=c/b, choose c small enough that the mgf is nonzero: expansion around zero gives |E exp(<z,A_i>)-1|<=C|z|^2 E|A_i|^2<=C c^2, because the first-order term vanishes. The logarithm is therefore analytic in this ball.

Differentiating log mgf three times, its numerator is a linear combination of tilted third products and products of tilted first and second moments. On this ball the exponential weights and inverse mgf are bounded by numerical constants. The atom bound gives

    |E[(u·A_i)(v·A_i)^2 exp(z·A_i)]|
       <= C b |u| (v^T Sigma_i v).

For the mixed products use Cauchy–Schwarz, for example

    |E[(u·A_i)(v·A_i) exp(z·A_i)]|
       <=C b |u| sqrt(v^T Sigma_i v),
    |E[(v·A_i) exp(z·A_i)]|
       <=C sqrt(v^T Sigma_i v).

The remaining terms have the same bound. Thus

    |D_u D_v^2 phi_i(z)|
       <= C b |u| (v^T Sigma_i v).                 (5)

Summing independent log-mgfs proves (5) for their sum, with covariance sum Sigma and the same Cb parameter. Integrating this estimate along a real segment, or applying the elementary bounded-atom exponential series, gives the Bernstein mgf bound

    log E exp(theta·sum A_i)
       <= C theta^T Sigma theta
          for |theta|<=c/b.                       (6)

The normalized scalar groups therefore have variance in [1,2], analytic parameter C/sqrt(L), and Bernstein scale C/sqrt(L). Enlarging the parameter to a fixed constant is harmless. The same conclusions hold for vector groups whose covariance eigenvalues lie in a fixed interval [c_0,C_0].

Adding a Gaussian variable of any covariance adds a quadratic log-mgf and zero third derivative. Convolution preserves (5) because the raw covariance is dominated by the total covariance. Under an invertible linear map H of bounded norm and bounded inverse, (5) holds with a changed fixed constant: apply it to H^T u,H^T v,H^T z. The root and conditional-bridge normalizations below use precisely such uniformly bounded maps.

In a mixed group row, half the entries are Gaussian anchors with the same covariances as their corresponding raw grouped laws. Every retained even dyadic block and each retained half has a fixed Gaussian fraction. Since each group covariance lies between c_0 I and C_0 I, the Gaussian contribution to every normalized parent/residual vector, and each coordinate prefix of it, dominates c s I, where s is its number of grouped entries. It retains this covariance under every real tilt. Consequently its tilted characteristic function satisfies

    |Fhat_h(t)|<=exp(-c s |t|^2).

Its high-frequency integrals above a fixed threshold are bounded by C s^(-(d+k)/2) exp(-c' s), for k=0,1 and fixed dimension d<=4. This supplies the exact single-law Fourier/conditional-quantile interface proved by the sibling authors. No boundedness of the grouped W_I or a smooth density for the final raw row is assumed.

The dyadic stopped-tree proof consequently applies to the grouped analytic class with uniformly comparable covariances. It uses only (5), the tilted Gaussian envelope, ordinary conditional quantile maps at retained nodes, and (6) for unconditional concentration. Recursive half-anchor removal has O(log N) stages, each of O(log^2 N) normalized error. It produces the O(log^3 N) bound consumed in (4). Late small active rows are handled by (6), with the same ambient confidence L. The separately written heterogeneous dyadic note records the full marginal and prefix algebra.

## 5. Scalar heterogeneous bridges and measurability

For a scalar interval with left and right variances V_L,V_R, put V=V_L+V_R, w=V_L/V and D=U_L-w U_parent. Equal-count halves whose individual variances lie in [1,2] have w in [1/3,2/3]. The Gaussian parent and D are independent, with variances V and V_L V_R/V, both comparable to the interval length. A bounded diagonal rescaling makes the parent/residual vector isotropic at that length, so the local Fourier/quantile bounds have uniform constants.

Reconstruct U_L=w U_parent+D and U_R=(1-w)U_parent-D. For prefix errors at the midpoint,

    E(mid)=(1-w)E(left endpoint)+w E(right endpoint)
             +(D_target-D_Gaussian).

The coefficients are convex, so the stopped-tree prefix argument is unchanged. Products of the conditional split kernels and exact terminal bridge kernels preserve the complete product marginal of the original independent row. The Gaussian tree preserves its own independent Gaussian marginal by the zero parent/residual covariance.

Every grouping decision is a finite comparison of measurable variances with T. Covariance sums and their scalar square roots are measurable. The smooth quantile maps are measurable via generalized inverses, and terminal conditional distributions on finite-dimensional Euclidean spaces can be selected as parameterized probability kernels. For a finite family of conditional input laws depending measurably on an anchor vector, all operations can therefore be carried out measurably in that vector. On parameter values where a retained covariance condition fails, use independent product coupling instead; this always preserves both required marginals, although the small-error assertion is then not made.

To preserve an already realized original row, disintegrate the constructed joint conditional coupling law given (anchor vector, original row), and append the Gaussian and auxiliary coordinates using that kernel. This leaves the entire original space intact. Fresh kernels on disjoint dyadic epochs preserve the desired product Gaussian conditional law. The construction does not resample original latent variables or assume their independence after conditioning on their observed sums.

## 6. Conditional dyadic assembly

For the scalar one-dependent note, apply (1) conditional on all anchors on each dyadic shell of N conditional independent triple noises. Its integrated q-moment sum is at most C_q N E|h(U,V)|^q. Choose p<a<q. Then

    sum_{k>=1}[(2^k)^(-A)+(2^k)^(1-q/a)]<infinity.

The shell coupling errors are O(2^(k/a)(k+1)^(7/2)) almost surely eventually, and their geometric sum is O(n^(1/a)log^(7/2)(en))=o(n^(1/p)). This replaces the previously isolated unproved Sakhanenko interface by the local analytic-class Gaussian-anchor construction. The scalar conditional-variance telescoping and iid-mixture argument in the previous note then completes the scalar adjacent-iid route.

## 7. Joint reward/length: remove only genuine covariance-kernel coboundaries

Let h:E^2->R^d, d<=2, be centered with E|h(U,V)|^q<infinity. Use the vector Hoeffding decomposition

    h(x,y)=a(x)+b(y)+c(x,y),
    a(x)=E h(x,V),       b(y)=E h(U,y),
    E[c(U,V)|U]=E[c(U,V)|V]=0.

Let Gamma be the long-run covariance of X_i=h(U_i,U_(i+1)). Orthogonality of the Hoeffding components gives

    Gamma=Cov(a(U)+b(U))+Cov(c(U,V)).                (7)

For the centered conditional triple noise Y(a,b;V,W) from the earlier note, its average conditional covariance is

    Gamma_noise=E Cov(Y|anchors)
       =2 Cov(a(U)+b(U))+3 Cov(c(U,V)).             (8)

To verify (8), expand Y as

    (a+b)(V)+(a+b)(W)+c(A,V)+c(V,W)+c(W,B).

Every cross term between these five summands vanishes after integrating independent A,B,V,W, using the two degeneracy identities for c. The two (a+b) terms each contribute Cov(a+b), and the three c terms each contribute Cov(c). Thus

    2 Gamma <= Gamma_noise <=3 Gamma               (9)

in Loewner order. In particular their kernels agree.

If u is in this kernel, both nonnegative scalar variances in (7) vanish, so u·c=0 almost surely and u·(a+b)=0 almost surely. Therefore

    u·h(x,y)=u·a(x)-u·a(y)                          (10)

for nu^2-almost every (x,y). The entire kernel projection of the partial sum is an exact endpoint coboundary. Jensen gives its endpoints finite q moments, and the dyadic union/Markov argument makes their maximum o(n^(1/p)). Remove these directions before inversion. On the remaining deterministic range, Gamma_noise is positive definite. This does not add a nonsingularity hypothesis or discard a stochastic fluctuation; it treats the degenerate directions explicitly.

Work on this active range and normalize Gamma_noise to I. Truncate the vector h radially at R and recenter its global mean, writing h_R=h 1_{|h|<=R}-E[h 1_{|h|<=R}]. Then |h_R|<=2R, E|h_R|^q<=C_q E|h|^q, and all its Hoeffding moments converge in L^2 to the original ones. Hence its average conditional-noise covariance Gamma_R converges to I. For all sufficiently large epochs,

    c I <= Gamma_R <= C I                          (11)

with fixed constants. A finite initial collection of epochs is harmless in the almost-sure claim.

For h_R define the vector conditional triple noise Y_j, its matrices

    V_j=Cov(Y_j|A_j,A_(j+1))=P(A_j)+Q(A_(j+1)),
    D_j=P(A_j)+Q(A_j)=Cov(Y(A_j,A_j)|A_j),

and Q as the covariance of the middle-plus-right centered sum. The same expansion as in the scalar proof gives these matrix identities; P need not be positive semidefinite. V_j,D_j,Q(A_j) are positive semidefinite where indicated and bounded in operator norm by C R^2. Moreover

    E V_j=E D_j=Gamma_R,
    sum_{j=l}^{r-1}(V_j-D_j)=Q(A_r)-Q(A_l).        (12)

The V_j form a one-dependent matrix sequence of functions of adjacent iid anchors. The D_j are iid functions of individual anchors.

## 8. Deterministic vector chunks become uniformly elliptic with high probability

Set m=ceil(K R^2 log(eN)) and divide an epoch of N triple indices into deterministic consecutive chunks of length m, leaving one shorter residual. For each fixed unit vector u,

    Z_j=u^T V_j u

is nonnegative, bounded by C R^2, and has mean in [c,C]. Its second moment is at most C R^2 E Z_j<=C' R^2. Separate even and odd j: within either parity the Z_j are independent because their adjacent anchor pairs are disjoint. Scalar Bernstein applied to each parity therefore gives, for a length-m chunk I,

    P{|sum_{j in I}(Z_j-E Z_j)|>c_1 m}
       <=C exp(-c_2 m/R^2).

The same estimate holds for u^T D_j u, whose summands are iid. A fixed finite net of the unit sphere in dimension at most two converts these directional inequalities to the operator inequalities

    c' m I <= sum_{j in I}V_j <= C' m I,
    c' m I <= sum_{j in I}D_j <= C' m I.            (13)

For a symmetric matrix, a fixed sufficiently fine net controls its operator norm by a fixed multiple of the largest absolute quadratic form on that net; this follows by approximating a maximizing unit vector and expanding the quadratic form. Union over at most N chunks gives failure O(N^(-A)) by choosing K sufficiently large. This is an unconditional anchor-probability estimate, not a false uniform conditional moment assertion.

For the shorter residual chunk the same Bernstein argument gives an upper bound C(m+R^2 log N) on its covariance with failure O(N^(-A)); no lower bound is needed. If m>=N, this upper bound and the direct within-chunk estimates handle the whole epoch. Since a>2, m<N eventually.

Conditional on anchors satisfying (13), the sums of the independent Y_j within completed chunks are independent vectors, with covariance eigenvalues between c'm and C'm. Divide them by sqrt(m). Their atoms are bounded by C R/sqrt(m)=O(1/sqrt(log N)), their covariance eigenvalues lie in a fixed interval, and §4's analytic/mgf estimates apply. The heterogeneous **matrix** Gaussian-anchor theorem therefore gives error

    O(sqrt(m)log^3(eN))=O(R log^(7/2)(eN))          (14)

at chunk boundaries, with conditional failure O(N^(-A)). Raw within-chunk noise prefixes have atom bound C R and total conditional covariance at most C'm, so conditional Bernstein gives O(R log N) uniformly over all such prefixes. Gaussian prefixes have the same bound after exact bridge disintegration. Consequently (14) holds for every triple prefix, with joint failure O(N^(-A)). On bad anchors use arbitrary independent product coupling to preserve the laws.

This supplies the first joint conditional Gaussian approximation. Its input is the bounded-atom analytic class and the proved anchor-concentration event, not a general unproved vector independent-array theorem.

## 9. Matrix Gaussian variance redistribution by an explicit stopped tree

It remains to turn the conditional independent Gaussian row of covariance V_j into the conditional independent Gaussian row of covariance D_j, so that the latter becomes iid Gaussian mixtures after the anchors are restored. A scalar random clock is insufficient for matrix covariances. The following direct Gaussian tree performs this step.

Group both Gaussian rows into the same completed chunks of length m from §8. Denote the chunk covariances by A_i=sum V_j and B_i=sum D_j. On the good anchor event, each lies between c'm I and C'm I. For **every contiguous interval of whole chunks**, not just prefixes, (12) gives

    ||A_interval-B_interval||<=C R^2.              (15)

Pad the final group count to a power of two by identical independent Gaussian chunks of covariance mI in both rows. Any padded dyadic interval retains uniformly comparable covariance, and (15) remains true, because the nonpadding part is a contiguous interval of real chunks.

At a root interval of s chunks, couple the Gaussian totals using one standard d-dimensional Z:

    U_root=A_root^(1/2) Z,       G_root=B_root^(1/2) Z.

Both covariance eigenvalues are comparable to s m. The square-root difference bound

    ||M^(1/2)-N^(1/2)||
      <=C ||M-N||/(sqrt(lambda_min M)+sqrt(lambda_min N))

follows by solving the Sylvester equation for the difference: QX+XP=M-N, where Q=M^(1/2), P=N^(1/2), and writing X as the integral of exp(-tQ)(M-N)exp(-tP). Thus the root error is at most C R^2 |Z|/sqrt(s m).

For a nonterminal interval, write A_L,A_R,A_P and B_L,B_R,B_P for the two covariance rows. Their regression weights and residual covariances are

    H_A=A_L A_P^(-1),
    R_A=A_L-A_L A_P^(-1)A_L,

and similarly H_B,R_B. The Gaussian residual is independent of its Gaussian parent. Each residual covariance is comparable to s m I: equivalently R_A=(A_L^(-1)+A_R^(-1))^(-1), and both halves have comparable covariances. Equation (15), the inverse identity, and multiplication of bounded matrices give

    ||H_A-H_B||<=C R^2/(s m),
    ||R_A-R_B||<=C R^2,
    ||R_A^(1/2)-R_B^(1/2)||<=C R^2/sqrt(s m).      (16)

Generate a fresh standard Gaussian Z_I at each node, shared by both trees, and reconstruct

    U_L=H_A U_P+R_A^(1/2)Z_I,       U_R=U_P-U_L,
    G_L=H_B G_P+R_B^(1/2)Z_I,       G_R=G_P-G_L.

Conditional on anchors each tree has exactly its required Gaussian product marginal, by the Gaussian regression formula and independent fresh residuals. A union bound over O(N) Gaussian parent/residual variables gives the event |G_P|<=C sqrt(s m L) and |Z_I|<=C sqrt(L), with failure O(N^(-A)). On this event the error recursion is

    e_L=H_A e_P+eta_I,       e_R=(I-H_A)e_P-eta_I,
    |eta_I|<=C R^2 sqrt(L/(s m))<=C R,             (17)

because m>=K R^2 L. The root error is also O(R).

One must not iterate Euclidean norm bounds of H_A at each level: that would create a false constant-to-the-logarithm loss. Instead use the exact prefix interpolation. Its root coefficient is A_prefix A_root^(-1). At an ancestor containing the prefix boundary, the coefficient of eta_I is

    A_partial-left A_left^(-1)

if the boundary lies in the left child, or

    I-A_partial-right A_right^(-1)

if it lies in the right child. Products along descendants telescope, since (A_desc A_parent^(-1))(A_parent A_grandparent^(-1))=A_desc A_grandparent^(-1). Each displayed coefficient has norm at most 1+C'/c', using the count/eigenvalue bounds on covariance sums; there is no product amplification. Exactly O(log N) boundary ancestors contribute. Therefore (17) implies maximum error O(R log N) at chunk endpoints.

Fill the individual Gaussian increments in each chunk using their respective exact conditional bridge kernels. Their product marginals have conditional cumulative covariance at most C'm in the chunk, so Gaussian maximal/union bounds make within-chunk prefixes O(sqrt(mL))=O(RL). Handle the residual short chunk likewise. This proves a full-prefix Gaussian-row coupling of error O(R log N), with joint failure O(N^(-A)). It preserves each complete conditional product Gaussian law. No matrix-valued Brownian time change, pairwise-only Gaussian marginal argument, or unproved Gaussian covariance regularization theorem is being used.

## 10. The final iid vector row and its covariance

Having coupled the Gaussian D_j row, represent it as

    D(A_j)^(1/2) Z_j,

where conditional on anchors the Z_j are independent standard d-dimensional Gaussians. On singular individual D_j, use its Moore–Penrose inverse on its range and add an independent Gaussian on its kernel; spectral calculus gives the representation and the conditional standard-Gaussian product law. That conditional law is constant, so Z is independent of the anchor sequence in distribution. Thus the pairs (A_j,Z_j) are iid.

Add back the conditional mean and telescope its r endpoint exactly as in the scalar note. The replacement summands are

    L_j=D(A_j)^(1/2) Z_j+l(A_j)+r(A_j).            (18)

They are genuinely iid vectors. Their q moments are uniformly bounded in the truncation radius: Jensen and finite-sum inequalities bound E||D(A)||^(q/2) by C E|h_R(U,V)|^q, and l,r have the same uniform q bounds. The vector total-variance calculation gives

    Cov(L_j)=3 Gamma_long,R.                       (19)

Indeed Cov(triple)=3 gamma_0+2(gamma_1+gamma_1^T); subtract Cov(l(A_0)+r(A_1))=Cov(l)+Cov(r) to obtain E D, and add Cov(l+r)=Cov(l)+Cov(r)+gamma_1+gamma_1^T. This proves (19) without inferring moments from a coupling error.

Apply the pending uniform iid finite-moment vector coupling to (18), at an exponent b with p<b<a<q. Its constants depend only on the uniform q-moment bound and eventual fixed covariance eigenvalue bounds. It yields an error O(N^(1/b)log^K N)=o(N^(1/p)), uniformly over the changing truncated iid laws. If only a fixed-law asymptotic theorem is supplied, it is insufficient here; the previously developed finite-epoch quantitative iid construction supplies precisely the needed uniform version.

## 11. Original truncation, covariance restoration, epochs and original space

Within an epoch, a tail union bound for the original h costs C N R^(-q). On the complement h and h_R differ only by their global centering correction, whose epoch sum is at most C N R^(1-q)=o(R) because a<q. Its failure probability after integration/Markov at scale R is bounded by C N R^(-q) as well. The original kernel coboundary from §7 is retained separately and controlled by its q-moment endpoints.

The long-run covariance of h_R converges quantitatively to that of h:

    ||Gamma_long,R-Gamma_long||<=C R^(2-q).        (20)

For the lag-one cross moment, bound the truncation difference by C E[(|h_0|+|h_1|)^2 1_{|h_0|+|h_1|>R}], which is at most C R^(2-q)E|h|^q. The elementary pointwise bound uses the larger of the two summands; it needs no independence of h_0 and h_1. The same estimate handles the variance and centering correction. On the active fixed covariance range the square-root map is Lipschitz, by the Sylvester integral used above. Therefore coupling the final Gaussian epoch sums with the same standard Gaussian row but the original covariance costs at most

    C sqrt(N) R^(2-q) sqrt(log N)                  (21)

with failure O(N^(-A)). This is o(R), since a<q<2q-2. Degenerate directions were already removed as exact coboundaries before inversion, so no hidden lower eigenvalue bound is needed there.

The total finite-epoch error is the sum of (14), O(R log N), the iid error at order b, endpoint means, (21), and the truncation centering term. Its failure probability is bounded by C_A N^(-A)+C N R^(-q), summable for dyadic N because a<q. Countable conditional kernels construct all epochs while preserving the original latent sequence. The independent Gaussian product marginals and the iid replacement-row marginals are established conditional on anchors, and the final iid coupling is glued along the **entire replacement sequence**. Independent Gaussian bridges extend the discrete Gaussian increments to a Brownian motion. Restoring the at-most-two observations between triple boundaries adds o(n^(1/p)), as does a fixed delayed initial regenerative segment once its finiteness is supplied.

For an already realized original chain, all added random variables can be appended using the resulting probability kernels conditional on its real reward/length observation path. That path and the Brownian path are standard Borel. This preserves the original chain rather than constructing only an unrelated equal-law copy.

## 12. Proof boundary and handoff

The scalar noniid step no longer needs an imported Sakhanenko theorem once the locally derived **analytic-class** heterogeneous Gaussian-anchor theorem is authored with the precise bounded-atom/mgf interface in §4. The scalar grouping alone is not being presented as the vector proof. For the actual adjacent-iid joint reward/length structure, §§7–11 provide the extra covariance concentration, kernel-coboundary treatment, and stopped matrix Gaussian redistribution that make a two-dimensional route possible.

The downstream regeneration supplier must still prove the actual reward/length sequence has an adjacent-iid measurable representation with the asserted q moment, as opposed to assuming all one-dependent sequences have such a representation. The dyadic author owns the complete heterogeneous analytic-class tree assembly; Fourier and conditional-quantile items own its local transport inputs; the iid author owns the uniform finite-epoch iid coupling. Those local proofs and this construction need their ordinary independent mathematical review and root integration before any SIP proof-completion claim. This note makes no readiness or certification assertion.
