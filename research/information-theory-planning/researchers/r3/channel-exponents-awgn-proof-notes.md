# DMC error exponents and finite-dimensional AWGN capacity: local proof development

This supplement closes local arguments for unconstrained finite-DMC error-exponent bounds and real/complex finite-dimensional AWGN capacity. It uses natural logarithms, so rates, divergences, and exponents are in nats. The complete source reads and actual editions are recorded in the r3 source-manifest.json and reading-ledger.json: Polyanskiy–Wu (PW), Information Theory: From Coding to Learning, authorized author-hosted first-edition book draft, substantive PDF pp. 1–696; and the complete Polyanskiy–Poor–Verdú (PPV) author manuscript, PDF pp. 1–121. The proofs below are local developments, not a claim that a source theorem statement alone supplies the argument.

Scope: below-capacity error exponents are separate from the success exponent above capacity. DMC exponents are proved without input cost constraints or feedback. The locally derived sphere-packing converse is stated for rates strictly above a finite-divergence threshold defined below; at the threshold and below it I do not invoke a dual identity without its strict-feasibility premise. The AWGN result is Shannon capacity under a per-codeword peak block-power constraint (and hence also under average-over-codebook power); it is not a finite-blocklength exponent, continuous-time theorem, or stationary-Gaussian source-coding result.

## DMC model and exponent definitions

Let X,Y be finite nonempty alphabets and W(y|x) a DMC. A length-n code has a uniform message J in {1,...,M}, deterministic codewords x_m^n, and decoder subprobabilities d_m(y^n) >= 0 with sum_m d_m(y^n) <= 1. Define e_m=1-sum_y W^n(y|x_m^n)d_m(y), average error e_av=M^{-1}sum_m e_m, and maximal error e_max=max_m e_m. Let P_av^*(n,M) and P_max^*(n,M) be the infima over these codes. For fixed R>0 let M_n=ceil(exp(nR)) and

    E^-_k(R)=liminf_n -n^{-1} ln P_k^*(n,M_n),
    E^+_k(R)=limsup_n -n^{-1} ln P_k^*(n,M_n), k in {av,max}.

If these coincide, their common value is the error exponent. If the optimum error is zero, its exponent is +infinity. This avoids assuming that an exponent limit exists. The no-cost capacity is C=max_P I(P,W). No cost constraint, feedback, or channel memory is included in the DMC exponent claims.

## Gallager random-coding bound

For 0 <= rho <= 1 define, with 0^a=0 for a>0,

    E0(rho,P) = -ln sum_y (sum_x P(x) W(y|x)^{1/(1+rho)})^{1+rho},
    E0(rho) = max_P E0(rho,P).

Globally unreachable outputs can be removed. No positive-transition assumption is used: zero terms vanish and all sums are finite. At rho=0, E0(0,P)=0.

Draw M codewords independently under P^n and use maximum-likelihood decoding with fixed tie-breaking. An error implies that a competitor likelihood is at least the true likelihood. For 0<rho<=1, the error indicator is at most the rho power of the sum over competitors of (W^n(y|x')/W^n(y|x))^{1/(1+rho)}. Jensen's inequality for the concave map s^rho and independence of codewords give the following explicit calculation. At fixed output y^n and transmitted x^n, average the rho-power over independent competitors using E[S^rho]<=(E S)^rho. Multiplication by the true likelihood W^n(y^n|x^n) changes its exponent from 1 to 1-rho/(1+rho)=1/(1+rho). Averaging x^n under P^n then produces the factor sum_x P^n(x^n)W^n(y^n|x^n)^{1/(1+rho)}; the competitor expectation contributes its rho-th power. Summing over y^n gives the first sum in (1), which tensorizes coordinatewise.

    E_C e_av(C)
      <= (M-1)^rho sum_{y^n}
          (sum_{x^n} P^n(x^n) W^n(y^n|x^n)^{1/(1+rho)})^{1+rho}
      = exp{-n[E0(rho,P)-rho n^{-1}ln(M-1)]}.                    (1)

Terms with zero true likelihood have zero probability under the transmitted channel; the ratio is only used on its charged support. Some deterministic codebook has error no larger than the ensemble mean. This reproduces PPV Theorem 3 (author manuscript PDF pp. 5–6) and PW §22.4* (printed pp. 431–432 / PDF pp. 456–457). For M_n=ceil(exp(nR)), it proves

    E^-_av(R) >= E_r(R) := sup_{0<=rho<=1} {E0(rho)-rho R}.       (2)

The same lower bound holds for maximal error at the exact target size M_n. Apply (1) to M'=2M_n messages; since n^{-1}ln(M'-1)->R, the ensemble mean still has exponent E_r(R). Some deterministic code has average error a_n no greater than that mean. At least M'/2=M_n messages have individual error <=2a_n. Retain M_n of them and restrict the decoder. The maximum error is <=2a_n.

Differentiating the finite sum at rho=0, with 0 ln 0=0, gives d E0(rho,P)/d rho at zero equal to I(P,W). If R<C, choose a capacity-achieving P; for sufficiently small rho>0, E0(rho,P)-rho R=rho(C-R)+o(rho)>0. Thus random coding gives a positive lower exponent below capacity. At R=C this argument gives no positive exponent.

## Expurgated lower bound

Define B(x,x')=sum_y sqrt(W(y|x)W(y|x')) in [0,1], and d_B(x,x')=-ln B(x,x'), with d_B=+infinity if B=0. For a maximum-likelihood decoder, the pairwise event W^n(y|x'^n)>=W^n(y|x^n) satisfies

    W^n(y|x^n) 1{W^n(y|x'^n)>=W^n(y|x^n)}
        <= sqrt(W^n(y|x^n)W^n(y|x'^n)).

Summing over y^n and union bounding gives e_m <= f_m=sum_{m' != m}B(x_m^n,x_{m'}^n), where B tensorizes over coordinates. Draw codewords iid P^n. For rho>=1, subadditivity of s^(1/rho) gives

    E f_m^(1/rho) <= (M-1)(E_{P x P} B(X,X')^(1/rho))^n.

For a random codebook define A(C)=M^{-1}sum_m f_m^(1/rho). The moment bound gives E_C A(C)<=(M-1)(E_{P x P}B(X,X')^(1/rho))^n, so some deterministic codebook satisfies the same bound. Markov's inequality over its messages retains at least half with
f_m^(1/rho)<=2(M-1)(E_{P x P}B(X,X')^(1/rho))^n.
Use ML among retained words; removing competitors cannot increase their ML error. Start with M=2M_n, retain M_n messages, and if necessary restrict further to exactly M_n. The logarithmic rate is R+o(1), and the resulting maximal error is at most

    2^rho (M-1)^rho (E_{P x P} B(X,X')^(1/rho))^(n rho).

With E0x(rho,P)=-rho ln E B(X,X')^(1/rho), this proves

    E^-_max(R) >= E_ex(R)
      := sup_{rho>=1}{max_P E0x(rho,P)-rho R},                 (3)

and the same lower bound for average error. Infinite values use extended-real conventions. This is a local proof of the expurgation route cited in PW Exercise IV.31 / §22.4* (printed pp. 432–433 / PDF pp. 457–458); it does not assert that E_ex is the exact general low-rate reliability function.

## Sphere-packing converse, with exact finite-divergence scope

For each x let supp W_x={y:W(y|x)>0}, and let V range over the compact product of row simplices supported on supp W_x. Put

    D_P(V)=sum_x P(x)D(V_x||W_x),  I_P(V)=I(P,V),
    J(P)=min_V I_P(V),  R_inf=max_P J(P).

All these divergences are finite on this restricted set, with 0<=D_P(V)<=D0:=max_{x,y:W(y|x)>0} ln(1/W(y|x))<infinity. I_P(V) is continuous in (P,V), so J is continuous and R_inf is attained. This R_inf is defined by the finite-divergence minimization here; I do not identify it with another author's symbol without matching that definition.

Fix R>R_inf. Then every P has a finite-divergence auxiliary channel V0 with I_P(V0)<R. First consider an M' word constant-composition code of type P_n, with M' growing at rate R. Under V^n, the code's mutual information satisfies

    I(J;Y^n)=I(X^n;Y^n)
       <= sum_i I(P_i,V) <= n I(P_n,V),                        (4)

where P_i is the coordinate input marginal, n^{-1}sum_i P_i=P_n, and mutual information is concave in its input law. Fano's inequality for the code's average error e_V under V therefore gives

    e_V >= 1 - [n I(P_n,V)+ln 2]/ln M'.                         (5)

If I_P(V)<R for a limiting type P, continuity makes the right side bounded below by a positive constant for all sufficiently large n.

For each codeword of type P_n, under V^n define L=ln(V^n(Y|x^n)/W^n(Y|x^n)). Its mean is nD_{P_n}(V), and its variance is n times a P_n-weighted sum of row variances of ln(V_x/W_x). The latter is uniformly bounded by nK_V since the alphabets are finite and V_x charges only W_x-positive cells. Chebyshev gives

    V^n{L > n(D_{P_n}(V)+eta)} <= K_V/(n eta^2).

Writing the error test as 1-d_m(y^n), change of measure dV^n=e^L dW^n gives

    e_W >= exp[-n(D_{P_n}(V)+eta)]
           (e_V-K_V/(n eta^2)).                               (6)

This remains true for randomized decoders. Equations (5)–(6) prove that along types P_n->P, every V with I_P(V)<R gives limsup -n^{-1}ln e_W <= D_P(V)+eta.

For an arbitrary code, partition messages by input type; there are at most (n+1)^|X| types. A largest class has size at least M/(n+1)^|X| and hence rate R-o(1). Restrict the original decoder to that class, leaving retained message errors unchanged; its average error is at most (n+1)^|X| times the original average error. Along a subsequence attaining the upper exponent, compactness gives a further subsequence of selected types converging to P. For each V with I_P(V)<R, (5)–(6) apply. Taking the infimum over V, then the supremum over P, proves

    E^+_av(R) <= sup_P inf_{V:I_P(V)<R} D_P(V),  R>R_inf.       (7)

The same upper bound holds for maximal error because average error is no larger than maximal error. The type-class loss is only |X|ln(n+1)/n.

Here is the local convex-duality proof, only under strict feasibility. The closed problem S_P(R)=min_{I_P(V)<=R}D_P(V) attains a minimum on the compact allowed channel set. Mix a minimizer V* with a strict feasible V0: V_t=(1-t)V*+tV0 has I_P(V_t)<R by convexity and D_P(V_t)->D_P(V*). Hence the open infimum in (7) equals S_P(R). Both I_P(V) and D_P(V) are convex in V; convexity of I for fixed P follows from joint convexity of relative entropy applied to the joint law P(x)V(y|x) and product law P(x)(PV)(y). Form the upper image

    G={(a,b): a>=I_P(V), b>=D_P(V) for some allowed V}

and the disjoint open convex set O=(-infinity,R) x (-infinity,S_P(R)). Weak separation of disjoint nonempty Euclidean convex sets gives a nonzero normal (u,v) with u,v>=0, because G is upper in both coordinates. Strict feasibility forces v>0: otherwise the separator would require every first coordinate of G to be at least R, contradicted by V0. Normalize v=1 and write rho=u. Separation gives

    inf_V {D_P(V)+rho I_P(V)} - rho R >= S_P(R).

At a primal minimizer V*, I_P(V*)<=R, so the left side for this rho is at most D_P(V*)=S_P(R). Equality follows, yielding

    S_P(R)=sup_{rho>=0}{E0cc(rho,P)-rho R},
    E0cc(rho,P):=inf_V {D_P(V)+rho I_P(V)}.                     (8)

The separator used is the published weak-separation supplier thm-separating-hyperplane-theorem-for-disjoint-convex-sets. No draft Slater-duality or draft Farkas theorem is used. Formula (8) is not asserted without strict finite-divergence feasibility.

### Row variational formula and global optimized identity

For 0<rho<infinity put alpha=1/(1+rho) and define

    f_x(Q) = -alpha^{-1} ln sum_y W(y|x)^alpha Q(y)^(1-alpha),

with -ln 0=+infinity. Gibbs' variational identity gives

    inf_{V_x << W_x}{D(V_x||W_x)+rho D(V_x||Q)} = f_x(Q).        (9)

Indeed, for Z_x(Q)=sum_y W(y|x)^alpha Q(y)^(1-alpha), the minimizing row is V*_x(y)=W(y|x)^alpha Q(y)^(1-alpha)/Z_x(Q) on its support; expansion of the objective gives (1+rho)D(V_x||V*_x)-alpha^{-1}ln Z_x(Q). In every P-weighted sum involving extended f_x(Q)=+infinity, omit terms with P(x)=0; no 0 times infinity is formed. Also I_P(V)=min_Q sum_xP(x)D(V_x||Q), since the right side equals I_P(V)+D(PV||Q). Taking the joint infimum over V,Q in (9) therefore gives

    E0cc(rho,P)=inf_Q sum_x P(x) f_x(Q).                        (10)

Do not equate these expressions for each P. For the noiseless binary channel and P=(3/4,1/4), the only allowed auxiliary channel is W itself, so E0cc(rho,P)=rho H(P). In contrast,

    E0(rho,P)=-ln[(3/4)^(1+rho)+(1/4)^(1+rho)].

At rho=1 these are unequal: E0cc=H(3/4,1/4), while E0=ln(8/5). Thus equality is a global optimization identity, not a pointwise-in-P identity.

The globally optimized quantities do agree, with zeros handled explicitly. Let

    S_y(P)=sum_x P(x)W(y|x)^alpha,   Z(P)=sum_y S_y(P)^(1/alpha).

Since 1/alpha>1, Z is continuous, convex, and differentiable on the simplex; choose a minimizer P*. Let T={y:S_y(P*)>0}, q*(y)=S_y(P*)^(1/alpha)/Z(P*) on T, and q*=0 outside T. Define T_x=sum_y W(y|x)^alpha S_y(P*)^rho. The simplex KKT conditions give T_x>=Z(P*) for all x, with equality whenever P*(x)>0. To see the constant, ∂_x Z=alpha^{-1}T_x and homogeneity gives sum_xP*(x)∂_x Z=Z(P*)/alpha.

For g_x(Q)=sum_yW(y|x)^alpha Q(y)^(1-alpha), substitution yields g_x(q*)=T_x/Z(P*)^(1-alpha)>=Z(P*)^alpha. Therefore f_x(q*)<=-ln Z(P*), with equality on supp P*. By (10),

    E0cc(rho,P)<=sum_xP(x)f_x(q*)<=-ln Z(P*)=max_P' E0(rho,P'). (11)

For the reverse inequality at P*, show q* minimizes F(Q)=sum_xP*(x)f_x(Q). Each f_x is convex because g_x is nonnegative concave and -ln is convex decreasing. On the relative interior of the simplex on T,

    partial F/partial Q(y) at q*
       = -rho [sum_x P*(x)W(y|x)^alpha]/S_y(P*) = -rho, y in T.

The gradient is constant, so the convex supporting inequality proves F(Q)>=F(q*) for Q supported on T. Every active row W_x, P*(x)>0, is supported on T. If a general Q puts mass c=Q(T)>0 on T, then f_x(Q)=f_x(Q(.|T))-rho ln c>=f_x(Q(.|T)) for active rows; if c=0 the objective is infinite. Thus q* minimizes over the full output simplex and E0cc(rho,P*)=-ln Z(P*). Together with (11),

    max_P E0cc(rho,P)=max_P E0(rho,P),  0<rho<infinity.         (12)

At rho=0 both sides are zero. This derivation needs no full-output-support or positive-transition assumption; restriction to T handles zeros.

The strict-feasibility threshold has an exact finite-rho interpretation. Since 0<=D_P(V)<=D0,

    J(P) <= rho^{-1}E0cc(rho,P) <= J(P)+D0/rho.

So (12) gives lim_{rho->infinity} E0(rho)/rho=max_P J(P)=R_inf. For R>R_inf, every P has a strict finite-divergence witness. Equations (7)–(8), interchange of the two suprema, and (12) prove the locally justified sphere-packing bound

    E^+_av(R), E^+_max(R) <= E_sp(R)
       := sup_{rho>=0}{E0(rho)-rho R},  R>R_inf.                (13)

At R<=R_inf, a P may have no strict finite-divergence witness; (8) cannot be applied to that P. PPV Theorem 12 (author manuscript PDF pp. 9–10) states the classical finite-n average-error SGB converse: with R=ln(M)/n and P_min the least positive transition probability,

    epsilon >= exp{-n[E_sp(R-o1)+o2]},
    o1 = ln(4)/n + |X|ln(n)/n,
    o2 = sqrt((8/n)ln(e/sqrt(P_min)) + ln(8)/n).

Its displayed exponent uses the same iid E0 formula as (13). The theorem statement is source evidence at all covered rates, but the manuscript's main text only sketches the derivation from its testing converse and the SGB type argument. I do not promote that sketch to a local proof of the endpoint.

There is a local exact sufficient condition for the random-coding and sphere-packing bounds to match that does not require asserting concavity of the optimized E0. Define

    R_match = sup_{rho>1} [E0(rho)-E0(1)]/(rho-1).

This is finite: from E0(rho)=max_P inf_V{D_P(V)+rho I_P(V)}, each slope I_P(V) lies in [0,ln|X|], so E0 is Lipschitz with that constant. For every R>=R_match and rho>1,

    E0(rho)-rho R <= E0(1)-R.

Hence E_sp(R)=E_r(R), because no rho>1 improves the value at rho=1. Also R_match>=R_inf by taking rho to infinity in its defining secant slopes and using E0(rho)/rho->R_inf. Thus for R_match<R<C, if this interval is nonempty, (2) and (13) sandwich both error criteria to prove existence of the error-exponent limit and its exact value E_r(R)=E_sp(R). PW §22.4* (printed pp. 432–434 / PDF pp. 457–459) reports the classical sharper high-rate threshold R_cr and the low-rate gap; that source-reported R_cr statement is not used here as a proof supplier, and this note does not assert that R_match equals R_cr. At rates where the lower and upper bounds do not match, expurgation improves the lower bound but the general DMC reliability function remains open.

## Above capacity: the error exponent is zero

For a finite DMC remove globally unreachable outputs. A capacity-achieving input P* exists by compactness. Its output q*=P*W is positive on every remaining output: if q*(y0)=0 but W(y0|x)>0, mixing P* with delta_x creates output mass tW(y0|x) and entropy gain -tW(y0|x)ln t+O(t), while changes on formerly positive coordinates and conditional entropy are O(t), contradicting optimality. For this positive q*, direct expansion gives I(P,W)=sum_xP(x)D(W_x||q*)-D(PW||q*). Along (1-t)P*+t delta_x the divergence term is O(t^2), so the one-sided derivative is d_x-C and d_x=D(W_x||q*)<=C. The information density i(x;y)=ln(W(y|x)/q*(y)) is bounded on charged cells.

For any fixed codeword x^n, under W^n(.|x^n), the sum of i(x_i;Y_i) has mean at most nC and variance at most nK for a finite channel-dependent K. For any decoder with subprobabilities d_m and any gamma>0, take Q=q*^n and a=ln M-gamma. On the set {ln(W^n/Q)<=a}, W^n<=exp(a)Q; summing tests under Q and using sum_m d_m<=1 proves

    P_succ <= sup_{x^n} W^n{sum_i i(x_i;Y_i)>ln M-gamma | x^n}
                 + exp(-gamma).                                (14)

If R>C, set gamma=n(R-C)/2. Chebyshev bounds the first term by 4K/[n(R-C)^2]; the second tends to zero exponentially. Thus success tends to zero for average and maximal criteria, so P_e tends to one and

    lim_n -n^{-1}ln P^*_e(n,ceil(exp(nR)))=0, R>C.

In PW's separate success-exponent convention, for -1<rho<0 the same single-letter formula is used with E0(rho)=min_P E0(rho,P), rather than the max over P for rho>=0. PW reports the success exponent sup_{-1<rho<0}{E0(rho)-rho R} above capacity. That expression is for 1-P_e, not P_e, and its proof is not developed here; it must not be inserted into the error-exponent theorem.

## Fixed-length feedback does not increase finite-DMC Shannon capacity

Let W(y|x) be a stationary memoryless channel on finite alphabets X,Y, with no cost constraint. A length-n feedback code has a uniform message J in [M]. At time i the encoder may choose X_i causally from (J,Y^{i-1}) and private randomization U independent of J and the channel; equivalently it has a kernel P_{X_i|J,Y^{i-1}}. The channel law is memoryless:

    P(Y_i=y | X^i,Y^{i-1},J,U)=W(y|X_i).

Thus Y_i-X_i-(J,Y^{i-1}) is a Markov chain. The decoder estimates J from Y^n, with average error epsilon. This proof concerns fixed-length vanishing-error capacity; it does not concern zero-error capacity, variable-length feedback, or channels with memory. PW Theorem 23.3 (printed p. 443 / PDF p. 468) states the same no-gain conclusion for stationary-memoryless channels.

The chain rule and conditional data processing give

    I(J;Y^n)
      = sum_{i=1}^n I(J;Y_i|Y^{i-1})
      <= sum_{i=1}^n I(X_i;Y_i|Y^{i-1}).

For each positive-probability history y^{i-1}, the conditional channel from X_i to Y_i is exactly W. Therefore

    I(X_i;Y_i|Y^{i-1})
      = sum_{y^{i-1}} P(y^{i-1})
            I(P_{X_i|Y^{i-1}=y^{i-1}},W)
      <= C,
    C=max_{P_X} I(P_X,W).

The maximum exists by compactness of the finite input simplex and continuity of mutual information. Hence I(J;Y^n)<=nC. Fano's inequality gives

    (1-epsilon)ln M <= I(J;Y^n)+ln 2 <= nC+ln 2.

For any sequence of feedback codes with average error tending to zero, limsup n^{-1}ln M<=C. If maximal error tends to zero, its average error does too, so the same converse applies.

For achievability, take any no-feedback code for W and let the encoder ignore Y^{i-1}. The random-coding proof (1) gives vanishing average error for every R<C; the exact-size expurgation there gives vanishing maximal error as well. Such encoders are a subset of the feedback encoders, so C_fb>=C. The converse proves C_fb<=C. This argument establishes only the fixed-length finite-DMC Shannon capacity equality; it makes no assertion for variable-length, zero-error, cost-constrained feedback, or channels with memory.

## Real and complex AWGN capacity with shell achievability

Let Z_i be iid N(0,sigma^2), sigma^2>0, and Y_i=X_i+Z_i. Codes are deterministic and obey the per-codeword peak block-power constraint sum_i x_{m,i}^2<=nP. There is no feedback. PW Definition 20.10 and Theorem 20.11 (printed pp. 399–400 / PDF pp. 424–425) give C(P)=1/2 ln(1+P/sigma^2). The proof below supplies the operational directions under this block constraint.

### Entropy is finite, and Gaussian maximizes it

If U has a density f, finite second moment, and variance s^2>0, relative entropy to the Gaussian density phi_{m,s^2} with m=EU gives

    0 <= D(f||phi_{m,s^2})=-h(U)+1/2 ln(2 pi e s^2),

so h(U)<=1/2 ln(2 pi e s^2). For a finite code, every output coordinate is a finite Gaussian mixture: its density is bounded above by 1/(sqrt(2 pi)sigma), so h has a finite lower bound; finite second moment and the KL inequality give a finite upper bound. Joint outputs are finite Gaussian mixtures too. Entropy subadditivity follows by expanding D(P_{Y^n}||product_i P_{Y_i})>=0, avoiding any undefined infinity-minus-infinity subtraction.

For uniform J, Y^n conditional on J is a translate of Z^n, hence h(Y^n|J)=n/2 ln(2 pi e sigma^2). Since X^n is a deterministic function of J and Y depends on J only through X^n, I(J;Y^n)=I(X^n;Y^n). Put p_i=E X_i^2. The maximum-entropy inequality, subadditivity, and Jensen yield

    I(J;Y^n)
      <= sum_i [h(Y_i)-h(Z_i)]
      <= 1/2 sum_i ln(1+p_i/sigma^2)
      <= n/2 ln(1+(n^{-1}sum_i p_i)/sigma^2)
      <= n/2 ln(1+P/sigma^2).                                  (15)

The peak constraint implies the last average-power inequality after averaging over messages; the same converse holds if only average-over-codebook power is constrained. Fano gives (1-e_av)ln M<=I(J;Y^n)+ln 2. Thus any sequence with error tending to zero has limsup n^{-1}ln M<=C(P); maximal error tending to zero implies the same average-error condition. At P=0 every codeword is zero and capacity is zero.

### Continuous Gaussian inputs conditioned to a finite-energy shell

Fix 0<=P'<P and draw iid X_i~N(0,P'). Under the induced output N(0,P'+sigma^2), the information density is

    i(X;Y)=1/2 ln(1+P'/sigma^2)
            +Y^2/[2(P'+sigma^2)] -(Y-X)^2/(2 sigma^2).

It is a quadratic polynomial in jointly Gaussian variables, with finite absolute mean, finite variance, and mean C(P')=1/2 ln(1+P'/sigma^2). Hence its iid average converges in probability to C(P') (Chebyshev is enough).

Let F_n={sum_i X_i^2<=nP} and alpha_n=P(F_n). The weak law for X_i^2 gives alpha_n->1. Generate every codeword from P_{X^n|F_n}; it then satisfies the peak power constraint. If q^n is the unconditioned output density and q_F is the output density under the conditioned input, then

    q_F(y^n)=alpha_n^{-1} integral_{F_n} W^n(y^n|x^n)P^n(dx^n)
           <= q^n(y^n)/alpha_n.

Consequently i_F(x^n;y^n)=ln[W^n(y^n|x^n)/q_F(y^n)] >= i_0(x^n;y^n)+ln alpha_n, and for every event A, P_F(A)<=alpha_n^{-1}P_{P^nW^n}(A).

For any continuous input law Pi with induced output Q and density ratio dW_x/dQ, the threshold random-code proof gives a deterministic code with

    e_av <= P_{Pi W}{i(X;Y)<=ln((M-1)/2)+gamma}+exp(-gamma).    (16)

Draw iid codewords from Pi and decode to the first word whose information density exceeds tau, erasing if none does. The transmitted word fails with probability P{i<=tau}. An independent competing word passes under Pi x Q with probability at most exp(-tau), since E_{Pi x Q}[dW_X/dQ]=1. Averaging the number of earlier competitors over the transmitted index gives at most (M-1)/2 trials. Choose tau=ln((M-1)/2)+gamma. Erasures count as errors. Here all Gaussian mixture densities are strictly positive and finite, so the Radon–Nikodym ratio is well-defined.

Choose R<C(P') and delta>0 with R+2delta<C(P'). Set M_n=ceil(exp(nR)) and gamma=n delta. Under the shell law, the threshold-failure probability is bounded by

    alpha_n^{-1} P_{P^nW^n}{ n^{-1}sum_i i(X_i;Y_i) <= R+2delta } -> 0.

The convergence follows from the iid information-density law and alpha_n->1; exp(-n delta)->0 as well. A deterministic peak-power code therefore achieves every rate below C(P'). Let P' increase to P to get every average-error rate R<C(P). For a maximal-error target R<C(P), first choose R<R'<C(P') and construct the shell code at rate R'; from its average-error sequence a_n->0 retain messages with error at most sqrt(a_n). Markov retains fraction at least 1-sqrt(a_n), which still leaves at least ceil(exp(nR)) messages for all sufficiently large n; the maximum error tends to zero. This proves the real-AWGN formula under per-codeword peak block power for both vanishing average and vanishing maximal error.

For complex AWGN, identify C with R^2. A circular Gaussian with E|Z|^2=sigma^2 has entropy ln(pi e sigma^2); applying KL to the circular Gaussian with the same mean and total second moment gives h(U)<=ln(pi e E|U-EU|^2). A finite code output mixture has density bounded by 1/(pi sigma^2) and finite second moment, so its differential entropy is finite. The converse repeats (15) with this entropy, yielding C(P)=ln(1+P/sigma^2). Achievability uses iid circular Gaussian inputs of variance P', conditions on sum_i |X_i|^2<=nP, and applies (16); the information density again has finite variance. For maximal error, choose an initial rate strictly above the target but below the shell mutual information, then expurgate as in the real case. No finite-blocklength exponent claim follows.

## Finite parallel-AWGN water-filling and zero-power modes

Let L be finite, Y_{ij}=X_{ij}+Z_{ij}, with independent Z_{ij}~N(0,sigma_j^2), every 0<sigma_j^2<infinity, and per-codeword cost sum_{i,j}X_{ij}^2<=nP. PW Definition 20.13 and Theorem 20.14 (printed pp. 402–403 / PDF pp. 427–428) give water-filling. Entropy subadditivity over coordinates and Jensen over time give

    I(J;Y^{nL}) <= 1/2 sum_{i,j}ln(1+E X_{ij}^2/sigma_j^2)
       <= n max_{p_j>=0, sum_j p_j<=P} 1/2 sum_j ln(1+p_j/sigma_j^2). (17)

Fano supplies the operational converse. The finite feasible simplex is compact, so an optimizer exists; for P>0 it uses the full budget because every derivative is positive. Let A={j:p_j>0}, which is nonempty. Transferring a small amount of power between any two active branches is feasible in both directions, so their derivatives 1/[2(sigma_j^2+p_j)] are equal to one common lambda>0. Transferring a small amount from an active branch to an inactive branch is feasible in the positive direction; optimality forces the inactive derivative 1/(2 sigma_j^2) to be no larger than lambda. Thus, with T=1/(2lambda),

    p_j=(T-sigma_j^2)^+,  sum_j(T-sigma_j^2)^+=P,
    C_L(P)=1/2 sum_j ln^+(T/sigma_j^2).                         (18)

For P>0 the water-level equation has a unique solution: its left side is continuous, zero through min_j sigma_j^2, strictly increasing above that value, and unbounded. Inactive branches are zero-power modes and contribute zero. For P=0 all p_j=0 and capacity is zero. If any sigma_j^2=0 and P>0, capacity is infinite because that real coordinate can carry arbitrarily many distinct bounded amplitudes with zero error; (18) explicitly excludes this case.

For achievability, let p* solve (18), choose eta in (0,1), and set p'_j=(1-eta)p*_j. The total power is (1-eta)P<P and the independent Gaussian-input mutual information C_L(p'):=1/2 sum_j ln(1+p'_j/sigma_j^2) approaches C_L(P) as eta decreases to zero. Draw iid L-vectors per use with independent coordinates N(0,p'_j), then condition each n-use codeword on total energy <=nP. The weak law makes the shell probability tend to one. The conditioned output density is bounded by the unconditioned Gaussian output density divided by the shell probability, and the vector information density has finite variance and mean C_L(p'). Apply (16) exactly as in the scalar proof; then let eta decrease to zero to get average-error rates below C_L(P). For a maximal-error target R<C_L(P), use an initial rate R'>R below C_L(p') before expurgating; the retained fraction 1-o(1) still leaves at least ceil(exp(nR)) messages. Thus (18) is operational for both vanishing error criteria under the per-codeword total block-power constraint.

Peak block power and average-over-codebook power have the same Shannon capacity here: shell codes meet the peak constraint, while (15) and (17) use only the average second-moment budget in their converse. This does not identify their finite-blocklength formulas; PPV Theorem 54 treats equal-energy, maximal-energy, and average-energy criteria separately.

## Scope checks and counterexamples

The sound DMC conclusions are distinct: E_r is a proved below-capacity lower exponent; E_ex is an additional expurgated lower exponent; E_sp is the locally derived upper exponent in the strict-feasibility range R>R_inf; and this note locally proves exact equality for R_match<R<C when that interval is nonempty. At lower rates the bounds may not match and the general DMC reliability function is open. The limits defining an exponent must be proved to coincide before writing a single-valued reliability function.

The noiseless q-ary DMC has C=ln q and zero error for all R<ln q, so its error exponent is +infinity. This rules out a universally finite low-rate formula. Conversely, every finite DMC above C has error exponent zero by (14); the positive variational formula above capacity is a success exponent. For R<=R_inf, strict feasibility can fail, so this note does not claim the local dual proof (8) at that endpoint. The PPV Theorem 12 finite-n SGB statement is an authoritative source result, but its cited main-text derivation is a sketch and is not silently treated as the missing local endpoint argument.

The real and complex AWGN proofs concern finite-dimensional memoryless channels under the stated energy cost. They do not prove continuous-time spectral water-filling: PW §20.5* flags unresolved functional-analytic details in its continuous-time discussion. Channel water-filling (18) is finite-dimensional concave power allocation; reverse water-filling for Gaussian source coding is a separate theorem. No conclusion here covers feedback, arbitrary channels with memory, cost-constrained DMC error exponents, or AWGN error exponents.
