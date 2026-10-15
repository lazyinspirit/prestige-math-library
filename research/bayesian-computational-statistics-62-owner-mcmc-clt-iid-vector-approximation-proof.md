# Quantitative iid vector strong approximation: proof interfaces and source recovery

Date: 2026-10-15. Research only. No source, manifest, contract, hash, readiness, or test changes are made by this investigation.

## Exact objective and present status

For iid centered vectors X_i in dimension at most two with E|X_1|^q finite, q>p>2, construct on an extension Gaussian iid vectors Y_i with the same covariance and

    max_{k<=n} |sum_{i<=k}(X_i-Y_i)| = O(n^(1/p) log n) almost surely.

The spare moment permits stronger O(n^(1/a) log^K n), p<a<q, and absorbs every fixed logarithmic power. It does not by itself make a one-level independent-block proof adequate when p>4.

The finite-q truncation/whitening/infinite-block assembly has a complete separate derivation in `research/bayesian-computational-statistics-62-owner-mcmc-clt-iid-truncation-proof.md` (OBM branch). Its remaining input is a quantitative bounded-vector finite-block coupling, uniformly in the truncation bound. A fixed-distribution asymptotic KMT assertion is insufficient because the bounded law changes at every dyadic epoch.

At this note's creation no complete locally authored and independently checked bounded-vector coupling theorem has been obtained. The source access obstacle has been resolved. Separate focused branches now own the analytic, conditional, dyadic, and nonsmooth-transfer arguments; this note specifies their interfaces and the exact points that must not be assumed away. It is not a proof-acceptance record.

## The sufficient bounded-vector interface

For every A>0 there should be C_A and a fixed finite K such that, for every N>=2, B>=1, and centered iid vectors xi_1,...,xi_N in R^r, r<=2, with covariance I_r and |xi_i|<=B, one can couple their joint law with iid N(0,I_r) vectors eta_i so that

    P(max_{k<=N}|sum_{i<=k}(xi_i-eta_i)| > C_A B log^K(eN)) <= C_A N^(-A).

Only one A>0 is actually needed for dyadic-epoch Borel--Cantelli: sum_m (2^m)^(-A) is finite. Requiring all A is a convenient source interface, not a necessary strengthening of the application. Any fixed K suffices. An arbitrarily small power loss B^(1+delta), with an arbitrary prescribed delta>0, would also suffice: choose p(1+delta)<a<q. A fixed loss such as B^3 does not suffice when q is only slightly greater than p.

The source theorem is stronger. For distributions in A_r(tau), covariance I_r, Zaitsev's Theorem 1.3 gives, for fixed r and fixed positive alpha,

    E exp(c_1 Delta_N/(tau r^3 log_*(r)))
      <= exp(c_2 r^(9/4+alpha) log_*(N/tau^2)).

Here log_*(u)=max(1,log u). Since log_*(N/tau^2)<=log_*(N), exponential Markov directly gives Delta_N=O_A(tau log(eN)) with exceptional probability O(N^(-A)), uniformly in tau>=1. OBM's local analytic calculation puts bounded whitened rows in A_r(256B). The remaining issue is the local proof of the coupling theorem, not this algebraic conversion.

## Authoritative full texts recovered

1. A. Yu. Zaitsev, *Multidimensional version of the results of Komlos, Major and Tusnady for vectors with finite exponential moments*, ESAIM: Probability and Statistics 2 (1998), 41--108. Full 68-page authoritative PDF:
   `https://www.numdam.org/item/PS_1998__2__41_0.pdf`.
   Local file `/tmp/bcs62-zaitsev-kmt-full.pdf`; extracted text `/tmp/bcs62-zaitsev-kmt-full.txt` is font-corrupted, so mathematical formulas must be read from rendered pages. Printed pp.43--45 were opened visually for the main theorem and complete proof roadmap. The theorem has the required **uniform linear dependence on tau**, not merely a fixed-law constant.

2. A. Yu. Zaitsev, *Estimates for the quantiles of smooth conditional distributions and the multidimensional invariance principle*, Siberian Mathematical Journal 37 (1996), 807--831, DOI `10.1007/BF02104663`. Authoritative Math-Net article page `https://mathnet.ru/eng/smj483`; full 25-page Russian PDF:
   `https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf`.
   Local file `/tmp/bcs62-zaitsev-conditional-full.pdf`; searchable OCR `/tmp/bcs62-zaitsev-conditional-full.txt`. The full-text endpoint was recovered by opening the journal's 1996 volume 37 issue 4 archive, then article smj483, then its getFT link. Springer returned HTML, not a PDF; that failed response was not treated as a full source reading.

3. Zaitsev's ICM survey `https://arxiv.org/pdf/math/0304373`, local `/tmp/bcs62-zaitsev-0304373.pdf` and `.txt`, identifies the full 1998 proof and related references. It states the main coupling results but is not itself a complete proof supplier.

The 1998 printed p.45 explicitly states that the conditional-density estimates in Lemmas 2.14 and 2.15 are proved in the 1996 paper, Lemmas 6.1 and 7.1. Thus reading the 1998 quantile proof alone does not close the analytic argument. The recovered 1996 PDF resolves that reference.

## Source dependency closure through 1996 Sections 1--5

I read the searchable Russian text of Sections 1--5 completely, checking the pair-comparison statement and selected formulas visually on printed pp.817--820. OCR corruption of some formulas remains a reason to use the PDF when transcribing constants. The source route does not import an additional strong approximation theorem at these stages.

- Section 1 imports Lemmas 1.1--1.2 from Zaitsev (1986), and Lemmas 1.3--1.4 from the Saulis--Statulevicius large-deviation reference. Those statements are ordinary analytic cumulant/tilt estimates, and can be proved locally from the defining log-mgf derivative bound, as below.
- Section 2 proves the global single-density comparison by Fourier inversion, splitting small and large frequencies and using the explicit smooth-class Fourier tail hypothesis.
- Section 3 proves the global paired-density comparison by the same splitting, exploiting matched/approximately matched covariance and cubic cumulants. The cubic cancellation must be retained.
- Section 4 proves nonuniform single-density and log-density-derivative estimates by tilting so the target point is the mean, applying Section 2 at the center, and undoing the tilt.
- Section 5 proves the general-epsilon nonuniform paired-density estimate. It tilts each law separately, estimates the difference of tilt parameters, obtains a new positive epsilon even when the original pair matches moments exactly, applies Section 3 to the centered tilted laws, and compares convex log-mgf minima when undoing the tilts.

The general-epsilon form in Section 5 is essential. After distinct prefix conditioning, the new pair parameter has the form

    epsilon_* <= C(epsilon + tau Gamma/sigma + sqrt(tau Lambda/sigma)),

where Gamma controls normalized prefix size and Lambda the normalized discrepancy between prefixes. Restricting the density comparison to epsilon=0 does not suffice for the conditional quantile step.

The conditional-quantile branch has inspected the actual complete proofs in 1996 Sections 6--8 and owns their local derivation. The new Fourier branch owns the local Sections 1--5 derivation. The dyadic branch owns the smooth finite-tree assembly, and the smoothing branch owns the nonsmooth distribution replacement/removal in the 1998 proof. Their source status and claimed conclusions must be checked individually before joining them.

## Elementary closure of the Section 1 analytic facts

These calculations identify ordinary local prerequisites rather than another hidden probabilistic approximation theorem. Write phi(z)=log E exp(<z,X>), EX=0, covariance Sigma, and assume the A_d(tau) bound

    |D_u D_v^2 phi(z)| <= tau |u| <Sigma v,v>,   tau|z|<1.

For a real h with tau|h| small, integrate along th. The Hessian satisfies the relative quadratic-form bound

    |< (Sigma(h)-Sigma)v,v >| <= tau|h| <Sigma v,v>.

By polarization after conjugating by Sigma^(-1/2), the corresponding bilinear error is at most tau|h| sqrt(<Sigma u,u><Sigma v,v>). Integrating again gives

    |<grad phi(h)-Sigma h,u>|
      <= (tau|h|/2) sqrt(<Sigma u,u><Sigma h,h>),
    |phi(h)-(1/2)<Sigma h,h>|
      <= (tau|h|/6)<Sigma h,h>.

The same analytic Taylor integral applies along purely imaginary directions. The eigenvalues of Sigma^(-1/2)Sigma(h)Sigma^(-1/2) lie in [1-tau|h|,1+tau|h|]. Thus determinant and smallest-eigenvalue comparisons follow by multiplying eigenvalues and applying log(1+t)=O(t), with constants depending only on the fixed dimension. Tilting changes the log-mgf to phi(z+h)-phi(h). If tau|h|<=1/2, the original third-derivative bound and Sigma(h)>=Sigma/2 put the tilted law in A_d(2tau).

For tilt existence, put y=Sigma^(-1/2)x, a=Sigma^(1/2)h, and

    g(a)=Sigma^(-1/2) grad phi(Sigma^(-1/2)a).

If sigma^2 is the smallest eigenvalue of Sigma, then |Dg(a)-I|<=tau|a|/sigma. On |a|<=2|y|, the map a -> y-(g(a)-a) is a contraction mapping the ball into itself when tau|y|/sigma<=1/16. Its fixed point satisfies grad phi(h)=x, |a|<=2|y|, and |a-y|<=2tau|y|^2/sigma. Substitution in phi(h)-<h,x> gives

    phi(h)-<h,x>=-(1/2)|y|^2+O((tau/sigma)|y|^3).

Fourth derivative bounds follow from one-variable Cauchy estimates applied to zeta -> D_u D_v^2 phi(z+zeta w), on a radius comparable to (tau|w|)^(-1): for tau|z|<1/2,

    |D_w D_u D_v^2 phi(z)| <= C tau^2 |w||u| <Sigma v,v>.

For two log-mgfs psi=phi_1-phi_2 whose initial Hessians differ by at most epsilon^2 Sigma and initial cubic derivatives by at most epsilon tau Sigma in the defining relative norms, integrating the fourth-derivative bound gives

    |D_v^2 psi(h)| <= C(epsilon+tau|h|)^2 <Sigma v,v>.

Further integrations give the corresponding gradient and log-mgf difference bounds and the common-tilt pair-class stability. Distinct tilt parameters introduce the additional square-root term in epsilon_*; it cannot be silently omitted.

## The paired Fourier cancellation that must survive transcription

For fixed dimension d<=4, suppose both laws are smooth enough for Fourier inversion and have the required integrable high-frequency tails. Let Sigma=Sigma_1+Sigma_2, and let sigma^2 be its least eigenvalue. Assume covariance and cubic differences controlled as in the preceding paragraph, with epsilon small. Taylor's formula for psi(it) gives, at small tau|t|,

    |psi(it)| <= C(epsilon^2 + epsilon tau|t| + tau^2|t|^2)<Sigma t,t>
               <= C(epsilon^2+tau^2|t|^2)<Sigma t,t>.

Each log characteristic function has negative real part at most -c<Sigma t,t> on this region. The identity e^a-e^b=(a-b) integral_0^1 e^(sa+(1-s)b) ds therefore yields

    |Fhat_1(t)-Fhat_2(t)|
      <= C(epsilon^2+tau^2|t|^2)<Sigma t,t> exp(-c<Sigma t,t>).

After the change of variables z=Sigma^(1/2)t, the small-frequency integral is bounded by

    C(epsilon^2+tau^2/sigma^2)(det Sigma)^(-1/2).

The explicit smooth-class tail assumptions bound the omitted high frequencies by the same order. Fourier inversion then gives the global paired-density comparison. Without cancellation of the common cubic term, the bound deteriorates to order tau/sigma, which is inadequate for the paired replacement estimates used by the sharp multiscale construction.

The nonuniform Section 5 ratio, with x common to both laws and z comparable to min_k |Sigma_k^(-1/2)x|, has the structure

    |log(p_1(x)/p_2(x))|
      <= C [epsilon(1+z)+(tau/sigma)(1+z^2)]^2

in fixed dimension, provided the normalized smallness conditions and smooth Fourier-tail conditions hold. This is the actual squared structure of printed p.818 formula (10), not an unsquared first-order error.

## Why raw coordinate-Rosenblatt coupling is not a valid shortcut

This obstruction was identified by the conditional-quantile branch and independently checked here. Let (A,B) have equal mass on (0,0),(1,0),(sqrt(2),1). Center and lower-triangular whiten:

    X_1=(A-EA)/sd(A),
    X_2=(B-EB-beta(A-EA))/sd(B-beta A),
    beta=Cov(A,B)/Var(A).

The covariance matrix before whitening is nonsingular because the three support points are not collinear. Thus X is bounded and has covariance I_2. For a block of n observations, its first coordinate sum determines n_1+sqrt(2)n_2. Irrationality makes the pair of integer counts (n_1,n_2) uniquely determined, and hence determines the second coordinate sum as well.

In a raw coordinate-Rosenblatt coupling, the first coordinate sum is a function of only the first Gaussian coordinate Y_1. The second coordinate sum, conditionally on that first sum, is deterministic, so it too is a function of Y_1. The Gaussian second coordinate Y_2 remains independent N(0,n). Consequently, for every L>0,

    P(|sum X_{i,2}-Y_2|<=L | Y_1) <= 2L/sqrt(2 pi n).

For L=C B log^K(e n), this tends to zero. Therefore a purported raw bounded-law conditional-coordinate estimate giving a polylogarithmic error is false. This does not refute vector KMT; it shows why the smoothing and replacement parts of the authoritative proof are essential.

## What the spare moment does and does not remove

For n observations partitioned into one-level blocks of length b, keeping the unmatched interior of every block below the desired scale n^(1/p) requires, up to logarithms, b<=n^(2/p), because block fluctuations are of order sqrt(b). Even granting an O(1) L2 coupling error for each block endpoint sum, independent centered block errors are bounded by the usual L2 estimate at scale sqrt(n/b), which is at least n^(1/2-1/p). This exceeds n^(1/p) when p>4. The calculation is an obstruction to that standard proof estimate, not a universal impossibility theorem about every imaginable independently coupled block construction.

For skewed smooth laws the constant absolute scale of endpoint transport error is real rather than an artifact of a crude CLT inequality. If EX=0, EX^2=1, and kappa_3=EX^3!=0 with sufficient moments, the normalized characteristic function expansion gives

    E sin(t S_b/sqrt(b))
      = -(kappa_3 t^3/(6sqrt(b))) exp(-t^2/2)+O(b^(-1))

for a fixed nonzero small t. For any coupling of S_b with G_b~N(0,b), the sine function's Lipschitz bound gives

    E|S_b-G_b| >= (sqrt(b)/|t|)|E sin(t S_b/sqrt(b))| >= c>0

for sufficiently large b. Thus a blanket assertion that every endpoint error shrinks to zero with b is false, even under all moments. Multiscale cancellation/dependent bridges supply the mechanism absent from the one-level argument.

The spare moment does remove the need to optimize logarithmic factors, dimension constants, and the final n^(1/p) boundary. It does not authorize omitting the nonsmooth-transfer argument or treating a smooth conditional-density theorem as a theorem about arbitrary bounded atomic laws.

## Integration and review boundary

A root-level bounded-vector theorem may be assembled only after all four interfaces join:

1. Analytic density estimates, including general epsilon after distinct tilts.
2. Conditional quantile estimates for the explicitly smooth classes, including prefix-size and prefix-difference restrictions.
3. A consistent dyadic construction preserving the entire iid vector law and independent Gaussian law, with maximal-prefix control.
4. A nonsmooth replacement/removal argument that takes bounded input rows to those smooth classes with constants at most B times fixed logarithms, or an arbitrarily small extra power of B.

The fourth interface cannot be replaced by adding independent Gaussian noise to each raw increment: the accumulated noise is of square-root order unless its variance shrinks, while the required smoothness constants then deteriorate. Any such alternative would need a new quantitative calculation proving its total error and uniform constants.

No currently recovered theorem citation, source download, or conditional research derivation is being represented here as an integrated locally proved iid vector approximation theorem. The proposal must retain its authoring/review obligation until these interfaces have complete local arguments.

## Later simplification: Gaussian anchors and ordinary conditional quantiles

The interface discussion above reflects the original source route. A subsequent constructive simplification, checked with the smoothing and dyadic authors, removes the paired-density/prefix-discrepancy machinery from the proof actually needed here. This section supersedes the assertion that all four original source interfaces are mandatory. It does not claim that an unreviewed proposal is already accepted.

Use **Gaussian anchors**. For a centered bounded raw law X with covariance I, form arrays whose even entries have law X and whose odd entries are independent N(0,I). Every dyadic block of even length has half Gaussian entries, and every dyadic half-block above the bottom level has the same property. The array is independent, with covariance I for each entry.

For any root sum, any vector consisting of a parent sum and its two-half difference, and any coordinate prefix of these vectors, the Gaussian part has covariance at least c s I, where s is the number of increments in the parent block. After any real exponential tilt, this Gaussian component retains its covariance. Since the remaining tilted characteristic functions have modulus at most one,

    |Fhat_h(t)| <= exp(-c s |t|^2).

Thus for k=0,1, fixed dimension j<=4, and a fixed positive threshold c_0/B,

    integral_{|t|>c_0/B} |t|^k |Fhat_h(t)| dt
      <= C_{j,k} s^(-(j+k)/2) exp(-c_1 s/B^2).

This follows directly by u=sqrt(s)t and the Gaussian radial tail bound; no integration-by-parts construction of a compact smoothing density is needed. The raw bounded law belongs to A_d(CB), the Gaussian law has vanishing third log-mgf derivatives, convolution adds covariance and log-mgfs, and the fixed sum/difference projections have bounded operator norms. Therefore all these root/bridge/prefix laws have the required A_j(CB) cumulant bound and automatic smooth Fourier tails. The smoothing author has confirmed that bounded anchors were never needed beyond a Bernstein concentration bound, which Gaussian anchors also satisfy.

The only nontrivial analytic quantile input now needed is the **ordinary single-law** conditional statement. In the relevant isotropic normalization it has the form

    |Q_{last | prefix=v}(Phi(z/sigma))-z|
      <= C B (1+|v|^2/sigma^2+z^2/sigma^2),

for |v|+|z|<=c sigma^2/B, with sigma^2 comparable to s and sigma>=CB. Gaussian convolution makes all prefix densities strictly positive, so the conditional density is explicitly the ratio of the joint density to the prefix density. There is no arbitrary version on a singular prefix support. The conditional-quantile author owns the complete derivation of this statement from the single-law density/tilt estimates (1996 Sections 1,2,4,6,8.1).

The direct dyadic construction compares a mixed array to a Gaussian array. At a node its Gaussian sum/difference bridge is independent of its Gaussian parent, because their covariance is zero. Accordingly, the Gaussian bridge's target conditional law does **not** depend on the Gaussian parent value. Quantile sampling uses the actual parent/prefix v only on the mixed-law side. No error between the actual prefix and a Gaussian prefix appears. This is why the general-epsilon paired comparison and third-moment matching can be omitted for the weaker logarithmic rate.

Choose the bottom block length m_0 comparable to B^2 log N, using the **ambient** confidence parameter N. On every retained root/bridge/prefix, Bernstein and Gaussian bounds make the normalized values O(sqrt(log N)), with total failure probability O(N^(-A)) after adjusting constants and union-bounding O(N) nodes. The quantile error is then O_A(B log N) at each node. The deterministic Haar-prefix identity sums at most O(log N) such errors along a prefix, giving O_A(B log^2 N). On bottom blocks, arbitrary conditional disintegration preserves the exact row law, and Bernstein bounds for raw/Gaussian partial sums give O_A(B log N). If the entire array has length at most m_0, this bottom argument applies immediately.

Start with an all-Gaussian array. Couple it to a half-raw, half-Gaussian array using the preceding direct mixed-array theorem. Its output law is a product law: completed raw entries are independent of the remaining Gaussian entries. Apply the same construction to the remaining Gaussian subsequence, replacing half of it by raw entries while retaining independence from the already completed raw coordinates. Iterate. After at most ceil(log_2 N)+1 stages every entry has the raw law and all raw entries are independent. The original all-Gaussian array remains fixed throughout and still has its iid Gaussian law. Stage errors add along subsequence prefixes, giving

    max_{k<=N}|sum_{i<=k}(X_i-G_i)| <= C_A B log^3(eN)

outside probability O(N^(-A)). All stages must use the ambient log N and failure budget, even when their subsequence length M is much smaller than N. For M<=C B^2 log N the arbitrary-bottom coupling and Bernstein bound provide the same confidence without any asymptotic estimate in M.

This removes the original nonsmooth-transfer obstacle without asserting a false raw conditional-quantile theorem: quantile estimates are applied only to block sums that still contain a fixed positive Gaussian fraction. The final raw law arises by a finite chain of law-preserving couplings and triangle inequalities, not by applying a smooth density theorem to the final nonsmooth law.

The focused branch evidence is:

- `research/bayesian-computational-statistics-62-owner-mcmc-clt-kmt-smoothing-proof.md`: Gaussian-anchor smoothness, Fourier tails, Bernstein bounds, and replacement kernels.
- `research/bayesian-computational-statistics-62-owner-mcmc-clt-kmt-dyadic-proof.md`: actual-parent single-law dyadic sampling, exact joint law, Gaussian independence, prefix identity, bottom disintegration, and recursive replacement.
- The conditional-quantile and Fourier branches supply the remaining local analytic statements. Their exact hypotheses and normalizations must be reconciled before accepting the joined theorem.

## Focused independent interface check after the Gaussian-anchor rewrite

I read the complete current Fourier note (A--G), the ordinary single-law path through Sections 1,2,4,5 of the conditional-quantile note, the dyadic note Sections 1--4, and the rewritten Gaussian-anchor smoothing note. I also read the complete finite-q truncation note. The following checks resolve the particular cross-note risks identified above:

- The Gaussian Fourier envelope is uniform under every real tilt and under every coordinate prefix, including the dimension-four parent/difference vector. Each half contains a fixed Gaussian fraction, so the covariance lower bound survives the invertible sum/difference map. Restricting the characteristic function to a prefix is legitimate here because the resulting pointwise Gaussian envelope is integrated in that prefix's own dimension; no high-dimensional integral is being restricted improperly.
- The analytic parameter is CB, with no extra power of B. Gaussian anchors add covariance and contribute no third log-mgf derivative. The Fourier tail budgets are exponentially small in s/B^2, so every single-law uniform-density, derivative, and saddlepoint use has the required margin at the retained scales.
- The scalar CDF sandwich in the quantile note is converted to a displacement at the **actual transported value**. Its equation (22), and root/bridge T0/T1, are therefore precisely the target-value estimates used by the dyadic Bernstein good event. There is no circular assertion that Gaussian moderation implies target moderation.
- In the scalar tail transport proof, the plus/minus changes of variable have positive Jacobians; the finite-moderate-interval remainder is attached using global conditional density tails and an extra interval of positive reference density. The central compact interval is handled separately. This supplies the conditional quantile displacement locally rather than citing a Gaussian approximation theorem.
- The tree samples the correct conditional difference given the actual parent. Fresh Gaussian bridge primitives are independent of all exposed ancestors, so the generated target tree has the correct product-row marginal. The Gaussian bridge reference is independent of its Gaussian parent, which is why the two parent values need not agree.
- Terminal conditional disintegration is used only to recover exact row laws. Its concentration bound is unconditional under those recovered product marginals; no unsupported conditional Bernstein estimate is needed.
- The recursive replacement kernel acts only on a Gaussian active subrow independent of the frozen raw complement. The output mixed marginal is again a product, preserving that invariant at every stage. Changes along an original prefix are exactly changes along a compressed-subrow prefix.
- Every replacement stage uses the original ambient confidence parameter. Small late stages use the arbitrary-bottom argument. Thus failure probabilities remain summable after union over O(log N) stages, uniformly in B and N.
- The finite-q assembly removes covariance-kernel directions before inversion and uses only uniformly positive-definite square-root continuity afterward. Its extension argument preserves the original process, rather than merely constructing an equal-law copy. Independent epoch Gaussian blocks are established from product kernel factorization, not inferred from Borel--Cantelli.

No essential mathematical defect was found in this selected path on this focused read. This is a cross-note mathematical assessment, not a native proof-acceptance or certification stamp. The paired comparison sections are not needed for the application and were not accepted as premises merely because they appear in the notes.

The actual new bounded theorem has logarithmic power three. Therefore the truncation note must use

    P(Delta_N > C_A B log^3(eN)) <= C_A N^(-A),

rather than silently consuming the stronger source exponential bound with log power one. At epoch m it yields O(2^(m/a)(m+1)^3); geometric summation yields O(n^(1/a)log^3(en)), still o(n^(1/p)) because p<a<q. This exact adjustment was sent to the truncation author for its canonical note. It does not alter the target finite-p theorem.
