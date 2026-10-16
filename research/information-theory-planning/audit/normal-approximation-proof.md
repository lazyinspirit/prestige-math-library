# Independent finite-DMC normal-approximation proof

Research development; no acceptance/publication stamp. This closes the finite, unconstrained, nondegenerate, fixed-0<epsilon<1/2 branch. It does not cover cost constraints, zero dispersion, or epsilon>1/2. Natural logarithms are used. Assume AC through the actual quantitative probability suppliers. Let W(y|x) be a channel between finite nonempty alphabets A,B; remove outputs unreachable from every input. Let C=max_P I(P,W), Pi={P:I(P,W)=C}, q*=P*W the unique capacity-achieving output. Put

V(P,W)=sum_x P(x) Var_{W(.|x)}[ln(W(Y|x)/(PW)(Y))],

and Vmin=min_{P in Pi}V(P,W)>0. Terms W(y|x)=0 contribute zero. Let M_av*(n,epsilon) and M_max*(n,epsilon) be largest code sizes with uniform messages and respective average/maximal error <=epsilon, for deterministic encoders and possibly randomized decoders. Then

ln M_criterion*(n,epsilon)=nC+sqrt(n Vmin) Phi^{-1}(epsilon)+O(ln n)

for both criteria, with a channel/epsilon-dependent O constant. Every lemma below is a supplier obligation; the arguments give their exact content.

## 1. Capacity optimizer, support and variance interfaces

Finite entropy continuity gives compact nonempty Pi. Strict concavity of output entropy shows all P in Pi have the same output q*: otherwise the mixture would have larger I, since conditional output entropy is linear in P. The common q* is positive on every remaining output: mixing a row that reaches a missing output into P* produces a positive -t ln t entropy gain at that output, while all positive-q* contributions and conditional-entropy changes are O(t); this contradicts maximality for small t. This argument may be written as a finite Taylor expansion, separating zero and positive q* coordinates.

For P*, directional differentiation toward a point mass at x is legitimate because q*>0. It gives D(W_x||q*)-C<=0. Since sum_xP*(x)D(W_x||q*)=C, equality holds on supp P*. Hence under the joint P*W, E[i(X;Y)|X]=C almost surely. The law of total variance therefore gives U(P*,W):=Var_{P*W}(i)=V(P*,W). These support/KKT equalities hold for every optimizer.

Near Pi all PW(y)>=qmin/2>0, by compactness and qmin=min_y q*(y)>0. On this neighborhood the functions I(P,W), V(P,W), and conditional third absolute moment T(P,W)=sum_xP(x)E_W|i(x;Y)-D(W_x||PW)|^3 are finite; V is Lipschitz because it is a finite sum of smooth log(PW) expressions with denominators bounded below. W-positive entries have a fixed positive minimum, so the information-density and centered-third-moment bounds are uniform. Compactness of Pi and Vmin>0 give a neighborhood with V(P,W)>=v0>0. Thus sqrt V is also Lipschitz there. The CT corrected quadratic-decay lemma gives constants alpha,delta>0 with

I(P,W)<=C-alpha dist(P,Pi)^2 whenever dist(P,Pi)<=delta.

Its finite-polytope normal-cone/compactness and uniform remainder proof must precede this theorem; no defective PPV null-Hessian direction step is used.

Globally V(P,W) has a finite upper bound B2 independent of P. Indeed V<=E i^2, and (ln W-ln PW)^2<=2(ln W)^2+2(ln PW)^2 on W-positive cells; the first finite sum is bounded using fixed W, and the second equals 2sum_y(PW)(y)ln^2(PW)(y), uniformly bounded because t ln^2 t extends continuously to zero. This global variance bound is enough for the far-from-Pi case, so no uniform lower variance or third moment is assumed there.

## 2. Exact constant-composition converse

Take a deterministic-encoder M-message code whose every codeword has empirical distribution P (an n-type), with average error <=e_n. Define Q_n=(PW)^n. Under any one codeword x^n of that type, the log likelihood

L=sum_{i=1}^n ln[W(Y_i|x_i)/(PW)(Y_i)]

has the SAME distribution, independent of the ordering of its coordinates: it is a sum of nP(x) independent copies of the row-x log likelihood. It has mean nI(P,W), variance nV(P,W), and total centered third absolute moment nT(P,W). Every emitted coordinate lies in support PW, so no undefined ratio is charged.

For any gamma>0 and any randomized decoding functions d_m(y^n)>=0 with sum_m d_m<=1, splitting each success integral at L=ln M-gamma gives

1-e_n <=Pr[L>ln M-gamma]+e^{-gamma},

hence F_L(ln M-gamma)<=e_n+e^{-gamma}.

To check this directly, the part where L<=ln M-gamma is at most exp(ln M-gamma) times its Q_n decoding probability; averaging m cancels M and the disjoint/subprobability decoder cells sum to at most one. The other part is bounded by the common L upper-tail probability. The argument handles atoms with the displayed <=/> convention and does not require Neyman–Pearson attainment.

If P is within the preceding delta-neighborhood, uniform array Berry–Esseen gives

sup_z |F_L(nI+sqrt(nV)z)-Phi(z)|<=B/sqrt n

with B uniform in P and n: normalize the row-independent centered summands by sqrt(nV), use T<=Tmax and V>=v0. Set gamma=(1/2)ln n. The threshold bound implies

Phi((ln M-gamma-nI)/sqrt(nV))<=e_n+(B+1)/sqrt n.

For e_n=epsilon+1/sqrt n and large n, the right side is epsilon+O(n^{-1/2}) in a fixed compact subinterval of (0,1). The derivative of Phi is positive near z_epsilon=Phi^{-1}(epsilon), so the inverse is locally Lipschitz. Therefore

ln M<=nI(P,W)+sqrt(nV(P,W)) z_epsilon+(1/2)ln n+O(1),

uniformly in these types. No ordinary qualitative CLT is substituted for the uniform bound.

Since epsilon<1/2, write a=-z_epsilon>0. For nearest P* in Pi, d=||P-P*||, Lipschitz sqrt V and the corrected quadratic decay give

nI(P,W)-a sqrt(nV(P,W))<=nC-a sqrt(nVmin)-n alpha d^2+a L sqrt n d

<=nC-a sqrt(nVmin)+a^2 L^2/(4alpha).

For types at distance >=delta, compactness/continuity gives I(P,W)<=C-eta for some eta>0. The global B2 variance bound and Chebyshev show the threshold cannot exceed nI+K sqrt n (up to gamma), with K chosen so that 1-B2/K^2>epsilon+1/4 for large n (choose the fixed positive margin below 1-epsilon). Indeed at that threshold F_L>=1-B2/K^2, contradicting the exact threshold inequality if ln M-gamma is any larger. Consequently ln M<=n(C-eta)+K sqrt n+gamma, which is smaller than the target bound for all sufficiently large n. This treats zero-variance types as well; for V=0 the log likelihood is constant and the same Chebyshev argument remains valid.

## 3. Arbitrary-code converse: expurgation and type selection

For a deterministic encoder with average error <=epsilon, retain messages whose individual error is <=epsilon+n^{-1/2}. Markov averaging gives retained fraction at least

n^{-1/2}/(epsilon+n^{-1/2})=1/(1+epsilon sqrt n).

If the retained fraction bound is below one message, integer rounding only strengthens the conclusion; for large target rates the retained size is exponential. There are at most (n+1)^{|A|} empirical types. One type subcode has size at least M/[(1+epsilon sqrt n)(n+1)^{|A|}], and maximal, hence average, error <=epsilon+n^{-1/2}; retain the original decoder restricted to those messages. Apply the preceding uniform type converse. Taking logarithms loses at most O(ln n), proving the general average-error upper bound. Since M_max*<=M_av*, it is also a maximal-error upper bound. This step is essential: a generic type subcode of an average-error code need not retain the original epsilon criterion.

## 4. Achievability and maximal-error expurgation

Select P* in Pi minimizing V, which exists by compactness/continuity. Its iid joint information-density sum S_n has mean nC, variance nVmin (by the KKT equality), and finite third absolute moment. Quantitative iid Berry–Esseen gives CDF error <=B0/sqrt n. The proved DT threshold bound supplies a deterministic codebook of size M with average error at most

E min{1,((M-1)/2)exp(-S_n)}

<=Pr[S_n<=ln((M-1)/2)+gamma]+e^{-gamma}.

Choose gamma=(1/2)ln n and u_n=epsilon-(B0+2)/sqrt n, positive for large n. Let t_n=nC+sqrt(nVmin)Phi^{-1}(u_n). Choose an integer M>=2 with ln((M-1)/2)+gamma<=t_n and ln M>=t_n-gamma-O(1); for example M=1+floor(2exp(t_n-gamma)) for large n. The bound is at most u_n+B0/sqrt n+1/sqrt n=epsilon-1/sqrt n. Local inverse-CDF Lipschitz continuity gives t_n=nC+sqrt(nVmin)z_epsilon-O(1). Thus ln M>=nC+sqrt(nVmin)z_epsilon-(1/2)ln n-O(1).

For maximal error <=epsilon retain messages with individual error <=epsilon. Because the average error is <=epsilon-n^{-1/2}, at least an n^{-1/2}/epsilon fraction are retained (for fixed epsilon>0). Restrict the decoder; its individual errors do not increase. This loses another (1/2)ln n+O(1) in log size, giving the same nC+sqrt(nVmin)z_epsilon+O(ln n) lower bound for maximal error. The average-error lower bound follows as well. For epsilon<1/2 any two retained messages cannot share a deterministic codeword, because their success probabilities would sum to more than one; duplicated random codewords therefore cause no issue in the final code. Vmin>0 implies C>0: if C=0, every point-mass input is capacity-achieving and has conditional variance zero, contradiction. Hence M>=2 and exponential growth hold for large n, and all finite-n exceptions are absorbed into the asymptotic constant.

## Scope/remaining interfaces

This is a complete local proof development once the explicitly proved DT, array/iid Berry–Esseen, finite KKT/output-support facts, CT quadratic-decay lemma, and elementary compactness/Lipschitz facts are earlier suppliers. It does not invoke the uncorrected PPV converse. The proof gives no exact third-order coefficient, no uniform-in-epsilon statement, and no epsilon>1/2/zero-dispersion/cost-constrained extension. Those richer claims retain their own proof obligations; they are not open mathematical problems. The finite epsilon<1/2 nondegenerate theorem must not be phrased as conditional on a future proof ladder once these suppliers are incorporated.

Encoder randomization extension: if the operational definition permits stochastic encoders, fix its decoder. For each message m, its success probability is a convex combination of the finitely many input-word success probabilities under that fixed decoder. Choose the lexicographically first maximizing input word separately for each message. This deterministic encoder does not increase any individual error, and hence preserves both criteria. Thus the converse above applies without restricting the usual finite-channel model's optimum. This does not derandomize shared encoder-decoder randomness unless that randomness is explicitly part of the model; the ordinary model has fixed codebooks and private local randomization only.

Quadratic-decay supplier refinement: the finite unconstrained theorem may use the integrator/root's simpler complete Hoffman route instead of CT's Taylor/normal-cone development. The exact finite identity is C-I(P,W)=sum_xP(x)(C-D(W_x||q*))+D(PW||q*). With E={x:D(W_x||q*)=C}, Pi is exactly the simplex slice P_{E^c}=0, PW=q*. If E^c is nonempty, eta=min_{x outside E}(C-D(W_x||q*))>0; its linear mass term dominates eta||P_{E^c}||_2^2. Finite Pinsker gives D(PW||q*)>=||PW-q*||_2^2/2. An explicitly proved finite affine-slice error bound dist(P,Pi)<=H||(P_{E^c},PW-q*)||_2 therefore yields the required global quadratic decay. If E^c is empty omit that coordinate/slack term; if Pi is the whole simplex, distance is identically zero and the claim is trivial. Use the complete direct finite-face/projection proof in `audit/finite-affine-slice-error-bound.md` (or root's equivalent fixed-active-set contradiction), with the actual published Euclidean projection suppliers. Do not depend on `thm-farkas-alternative-for-finite-linear-systems`: its current carrier is draft in an unrelated optimization run. The rest of the normal-approximation proof only uses the resulting quantitative decay, so its consumer is unchanged.
