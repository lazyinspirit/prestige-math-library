# Supplement: complete local proof developments for MAC, degraded BC, NNC and Gaussian MAC

Status: source-derived local proof supplement, written for the r5 researcher lane at root’s request. It belongs beside, and does not replace, `findings.md`. It is not a canonical scaffold edit, a production item, an audit stamp, or a claim that the general network-capacity problems are solved. The sources actually read are El Gamal–Kim arXiv:1001.3404v3, Lectures 2–5 and 19; the complete Lim–Kim–El Gamal–Chung NNC article arXiv:1002.3188v2, Sections II–III and Appendices A–B; and the 13 Stanford author decks as supplemental cross-checks. No current 2026 open-problem survey is claimed.

All logarithms in this note are base two. Alphabets are finite and nonempty in the DM results. For a joint law, `T_epsilon^n` means strong typicality on its positive support. Every strict inequality below includes a positive slack; the capacity region is the closure of the union of these strict achievable regions. Messages are independent uniform variables unless a different source model is explicitly stated. Error is average joint block error over the uniform message tuple, not maximal error. A random codebook ensemble is fixed after the existence argument; it does not grant the encoders a run-time common randomness resource.

## 1. Finite-alphabet lemmas used below

### 1.1 Conditional typicality and packing

Let `U,V,Z` have a finite-alphabet law

`p(u,v,z)=p(u)p(v|u)p(z|u,v)`.

If `(u^n,z^n)` is strongly typical for its marginal law and `V^n` is drawn according to `prod_i p(v_i|u_i)`, then, for every tolerance enlargement fixed in advance, there is `delta(epsilon)->0` such that

`Pr{(u^n,V^n,z^n) is jointly typical} <= 2^{-n(I(V;Z|U)-delta(epsilon))}`.

To see the exponent, count the possible conditionally typical `v^n` sequences for fixed `(u^n,z^n)`: there are at most `2^{n(H(V|U,Z)+delta)}`. Each such sequence has conditional sampling probability at most `2^{-n(H(V|U)-delta)}`. Multiplication gives the bound. The same argument with `U` constant is the ordinary packing estimate. A union over at most `2^{nR}` independently generated wrong codewords tends to zero if `R<I(V;Z|U)-delta`.

The estimate requires that a candidate codeword is independent of the observation against which it is tested, conditional on the displayed cloud center. This condition is checked separately for every error event below. It does not apply to codewords selected by feedback as if they were independent.

### 1.2 Covering and local conditional typicality

Under the same finite law, suppose `(U^n,Z^n)` is typical and draw `K_n` conditionally independent codewords `V^n(l)` from `prod_i p(v_i|u_i)`. By conditional type counting, at least `2^{n(H(V|U,Z)-delta)}` candidate sequences are jointly typical for typical `(u^n,z^n)`, and each has probability at least `2^{-n(H(V|U)+delta)}`. Thus one candidate is jointly typical with probability at least `2^{-n(I(V;Z|U)+2delta)}`. Consequently

`Pr{no jointly typical candidate} <= exp[-2^{n(R-I(V;Z|U)-2delta)}]`

when `K_n>=2^{nR}` and `R>I(V;Z|U)+2delta`.

A selected successful codeword has the required conditional empirical frequencies because it belongs to the specified conditional typical set. Under uniform selection among all successful indices, conditional on at least one success its law is exactly the single-candidate law conditioned on that typical set: exchangeability makes the chance of choosing any successful label equal, and the number of successes other than a specified candidate is independent of that candidate’s value inside the set. For several independent codebook families, condition on their observed input/output sequences and use the product conditional-type argument. The symmetric selected-word laws are invariant under coordinate permutations that preserve the observed base sequence. Given their conditional types, independent selections have the target product joint type up to an error tending to zero: within each fixed base-symbol class, the expected count of each joint symbol tuple is the product of the conditional frequencies, and the variance of its empirical frequency is O(1/n) by sampling without replacement. A finite union bound over symbol tuples proves joint conditional typicality. This is the conditional typicality step used after relay covering; it is not a claim that a chosen codeword is unconditionally independent of the observation.

### 1.3 Public coded time sharing

For a finite distribution `p_Q`, choose a deterministic sequence `q^n` whose empirical law tends to `p_Q` (first take rational frequencies and then approximate). Reveal that sequence as part of the public code description. Generate each user’s codewords conditionally independently according to `prod_i p(x_{ji}|q_i)`. The conditional packing proof uses empirical mutual informations converging to their `Q` averages. This realizes the `Q` region without a free common-randomness source. Alternatively, generate a random `Q^n` independently and reveal the realized codebook; averaging again selects a deterministic realization. In either construction, the independent-message product law is `prod_j p(x_j|q)` at each time.

### 1.4 Path-connected support reduction

If `G` is a path-connected subset of `R^d`, every point of `conv(G)` is a convex combination of at most d points of G. Here is the geometric reduction needed below. Ordinary Caratheodory follows by linear dependence: if a convex representation has more than d+1 positive weights, the augmented vectors `(g_i,1)` in `R^(d+1)` are linearly dependent; perturb the weights along a nonzero dependence until one becomes zero, and repeat. Thus a point x has a representation on at most d+1 points. If it uses at most d, stop. If it uses d+1 affinely dependent points, the same dependence perturbation removes one; otherwise these vertices are affinely independent and all weights are positive. Translate x to the origin and call the vertices `v_0,...,v_d`. The origin is in the interior of their simplex; the facet opposite `v_0` avoids the origin, so its vertices `v_1,...,v_d` are linearly independent. The convex representation gives `v_0=-sum_i a_i v_i` for strictly positive `a_i`.

Let `K={-sum_i b_i v_i:b_i>=0}`. Then `v_0` is in the interior of K and `v_1` is outside K. Take a continuous path in G from `v_0` to `v_1`, and let `t_*` be the first time it leaves the interior of K. The path starts in the interior and ends outside K; continuity and closedness of K imply `w=gamma(t_*)` lies on the boundary of K. In its unique basis-coordinate representation `w=-sum_i b_i v_i`, at least one coefficient, say `b_j`, is zero. Put `B=sum_i b_i`. If B=0, w=0. If B>0, then `0=(1/(1+B))w+sum_{i≠j}(b_i/(1+B))v_i`, a convex combination of w and at most d−1 old vertices. In either case the origin is in the convex hull of at most d points of G. This proves the reduction. Compactness is not needed for this pointwise lemma, but will ensure the MAC union below is closed and its convex hull compact.

## 2. Two-sender DM-MAC exact capacity

### 2.1 Operational contract

Fix finite alphabets `X_1,X_2,Y` and a memoryless kernel `W(y|x_1,x_2)`. An `(M_1,M_2,n)` code has independent uniform messages `M_j in [M_j]`, separate deterministic encoders `f_j:[M_j]->X_j^n`, and one decoder `g:Y^n->[M_1]x[M_2] union {error}`. The channel law is

`W^n(y^n|x_1^n,x_2^n)=prod_{i=1}^n W(y_i|x_{1i},x_{2i})`.

Its error is `P_e=Pr{g(Y^n)!=(M_1,M_2)}` averaged over the independent uniform message pair and the channel. The no-feedback and no-cooperation clauses are encoded by the separate, noncausal message-only maps `f_1,f_2`; they cannot depend on the other message or on channel outputs. The capacity region is the closure of rate pairs with a sequence of such codes and `P_e->0`. The separate encoder maps and independent messages imply `X_{1i} independent of X_{2i}` for every fixed `i` in every deterministic code.

### 2.2 Achievability for a fixed product law

Fix any product pmf `p(x_1)p(x_2)` and rates satisfying

`R_1<I(X_1;Y|X_2)`, `R_2<I(X_2;Y|X_1)`, `R_1+R_2<I(X_1,X_2;Y)`.

Generate `M_j=ceil(2^{nR_j})` independent codewords `X_j^n(m_j)`, each with iid coordinates `p(x_j)`, with the two codebook families independent. The selected codebook is known to the encoders and decoder. To send `(m_1,m_2)`, send their corresponding codewords. The decoder declares the unique pair `(m_1,m_2)` for which `(x_1^n(m_1),x_2^n(m_2),y^n)` is jointly typical; otherwise it declares an error.

By symmetry it is enough to bound the ensemble-average error conditional on `(M_1,M_2)=(1,1)`. Partition error into four disjointly covering events:

- the true triple `(X_1^n(1),X_2^n(1),Y^n)` is not typical;
- some `m_1!=1` gives a typical `(X_1^n(m_1),X_2^n(1),Y^n)`;
- some `m_2!=1` gives a typical `(X_1^n(1),X_2^n(m_2),Y^n)`;
- some pair `(m_1,m_2)` with both indices wrong gives a typical triple.

The first probability tends to zero by applying the weak law to the finite indicators of each empirical triple. For the second event, condition on the transmitted pair/output. The wrong `X_1^n(m_1)` is iid `p(x_1)` and independent of `(X_2^n(1),Y^n)`, whose marginal is the iid law `p(x_2,y)`. The packing bound in §1.1 with cloud center `X_2` gives probability at most `2^{-n(I(X_1;Y|X_2)-delta)}` per candidate. A union over `2^{nR_1}` candidates vanishes under the first strict inequality. The third event is symmetric and vanishes under `R_2<I(X_2;Y|X_1)`. For the fourth, both wrong codewords are independent of the transmitted output and of each other; the unconditioned packing exponent is `I(X_1,X_2;Y)`, so the union over `2^{n(R_1+R_2)}` pairs vanishes under the sum-rate inequality. The expected average error over codebooks therefore tends to zero; for each n some deterministic codebook has no larger than the ensemble-average error. This proves the fixed-product-law pentagon.

### 2.3 Public time sharing and cardinality `|Q|<=2`

A finite public `Q` and product law `p(q)p(x_1|q)p(x_2|q)` are achievable by §1.3. To identify the rate set from the averaged inequalities, fix its Q values and write `a_q=I(X_1;Y|X_2,Q=q)`, `b_q=I(X_2;Y|X_1,Q=q)`, and `c_q=I(X_1,X_2;Y|Q=q)`. Independence of `X_1,X_2` given q gives `max(a_q,b_q)<=c_q<=a_q+b_q`: the lower bounds follow from `c_q-a_q=I(X_2;Y|q)` and its symmetric version; the upper bound follows from `a_q+b_q-c_q=I(X_1;X_2|Y,q)>=0`. The q-pentagon `P_q` has vertices `(0,0),(a_q,0),(a_q,c_q-a_q),(c_q-b_q,b_q),(0,b_q)`.

The set of rate pairs satisfying the averaged inequalities is `P(abar,bbar,cbar)`, where bars denote the `p(q)`-averages. This equals the weighted Minkowski sum `sum_q p(q)P_q`. To prove equality, the support function `h_P(u,v)=max_{(r_1,r_2) in P}(u r_1+v r_2)` of any pentagon with `max(a,b)<=c<=a+b` is
`0` if `u,v<=0`; `ua` if `u>=0>=v`; `vb` if `v>=0>=u`; `ua+v(c-a)` if `u>=v>=0`; and `u(c-b)+vb` if `v>=u>=0`.
These five linear formulas apply both to each P_q and to the averaged parameters. A weighted Minkowski sum has support function `sum_q p(q)h_{P_q}`; therefore it has exactly the support function of `P(abar,bbar,cbar)`. Compact convex sets with equal support functions coincide: if a point x of one set lay outside the other, its nearest point y in the other set would give the separating vector `x-y`, contradicting equality of the supports. Thus every point allowed by the averaged inequalities is an actual convex combination of one rate point from each q-pentagon, and conversely.

Consequently the public-Q region is the convex hull of the union A of the individual product-input pentagons; operational time sharing between codes gives the same convexity.

For completeness, the uncosted two-sender support reduction to two Q-values is as follows. Let `A` be the union, over all product input pmfs, of their closed MAC pentagons

`R_1<=I(X_1;Y|X_2)`, `R_2<=I(X_2;Y|X_1)`, `R_1+R_2<=I(X_1,X_2;Y)`,

with nonnegative rates. The parameter space (product of two finite probability simplices) is path-connected. Each associated pentagon is convex, hence path-connected, and contains the origin. Any two points in A can therefore be joined by line segments to the origin, so A is path-connected. It is compact because the mutual-information coordinates are continuous in the pmfs and the set of parameter/rate tuples satisfying the closed inequalities is compact, whose projection is compact. The region obtained by arbitrary public time sharing is `conv(A)`. Applying §1.4 with d=2, every point of `conv(A)` is a convex combination of at most two points of A. Each point of A belongs to a pentagon for one product pmf. The two weights and those two product pmfs are represented by a Q with at most two values. This is the actual support argument; generic Carathéodory in R² would give three points and does not prove the sharper claim.

The theorem is therefore the closure of the union over finite `p(q)p(x_1|q)p(x_2|q)` of

`R_1<=I(X_1;Y|X_2,Q)`, `R_2<=I(X_2;Y|X_1,Q)`, `R_1+R_2<=I(X_1,X_2;Y|Q)`,

and for the unconstrained two-sender model it suffices to take `|Q|<=2`.

### 2.4 Converse

For any code with `P_e->0`, finite-alphabet Fano gives `H(M_1,M_2|Y^n)<=1+P_e log_2(M_1M_2)=n epsilon_n`, where `epsilon_n->0`. Applying Fano also to each message conditioned on the other gives

`nR_1<=I(M_1;Y^n|M_2)+n epsilon_n`,
`nR_2<=I(M_2;Y^n|M_1)+n epsilon_n`,
`n(R_1+R_2)<=I(M_1,M_2;Y^n)+n epsilon_n`.

For sender 1, expand by the chain rule and use `X_{2i}=f_{2i}(M_2)`:

`I(M_1;Y^n|M_2)=sum_i I(M_1;Y_i|Y^{i-1},M_2,X_{2i})`.

Put `A_i=(M_1,M_2,Y^{i-1})`. Since `X_{2i}` is a function of M2,
`I(M_1;Y_i|Y^{i-1},M_2,X_{2i}) <= I(A_i;Y_i|X_{2i})` by the chain rule (the latter adds the nonnegative term `I(M_2,Y^{i-1};Y_i|X_{2i})`). Since `X_{1i}` is a function of M1, the chain rule again gives
`I(A_i;Y_i|X_{2i})=I(X_{1i};Y_i|X_{2i})+I(A_i;Y_i|X_{1i},X_{2i})`.
The last term is zero by the memoryless channel law: given both current inputs, the current output is independent of messages and past outputs. Therefore

`I(M_1;Y^n|M_2)<=sum_i I(X_{1i};Y_i|X_{2i})`.

The sender-2 inequality follows symmetrically. For the sum, memorylessness and deterministic encoding give
`H(Y_i|M_1,M_2,Y^{i-1})=H(Y_i|X_{1i},X_{2i})`; also `H(Y_i|Y^{i-1})<=H(Y_i)`. Hence

`I(M_1,M_2;Y^n)<=sum_i I(X_{1i},X_{2i};Y_i)`.

Let Q be uniform on `[n]`, independent of messages and the code-generated variables, and set `(X_1,X_2,Y)=(X_{1Q},X_{2Q},Y_Q)`. Since the messages are independent and encoders are separate, `p(x_1,x_2|q)=p(x_1|q)p(x_2|q)`. The three sums become the three conditional mutual informations given Q. Send n to infinity and take closure. This proves the claimed outer containment under the average joint-error, independent-message, no-feedback model. The theorem is for average error only. Dueck’s contraction MAC shows that the deterministic maximal-error capacity region can be strictly smaller; no maximal-error conclusion is claimed here.

## 3. Degraded DM-BC exact capacity

### 3.1 Operational contract and statement

Let X,Y_1,Y_2 be finite and `W(y_1,y_2|x)=W_1(y_1|x)W_2(y_2|y_1)` physically degraded. There are independent uniform private messages `M_1,M_2`, a single encoder `x^n(m_1,m_2)`, and separate decoders: receiver 1 estimates only `M_1`, receiver 2 only `M_2`. The average error is `Pr{Mhat_1!=M_1 or Mhat_2!=M_2}`. No feedback is present. The capacity is the closure of the achievable rate pairs. A stochastic degraded channel with the same two conditional marginals is equivalent for this nonfeedback capacity problem. The probability that either receiver errs depends on the coupling, but it tends to zero exactly when both marginal receiver-error probabilities tend to zero: joint error bounds each marginal error from above, and the union bound bounds joint error by their sum. The two marginal channels therefore give the same capacity under the stated vanishing average joint-error criterion.

The capacity region is the closure of the union over finite `p(u)p(x|u)` satisfying `U->X->Y_1->Y_2` of

`R_1<=I(X;Y_1|U)`, `R_2<=I(U;Y_2)`.

It suffices to take `|U|<=min{|X|,|Y_1|,|Y_2|}+1`.

### 3.2 Superposition achievability

Fix a finite `p(u)p(x|u)`. Draw `2^{nR_2}` independent cloud centers `U^n(m_2)` iid `p_U`; for each center draw `2^{nR_1}` satellite codewords `X^n(m_1,m_2)` iid according to `prod_i p(x_i|u_i(m_2))`, conditionally independently across satellites and clouds. The encoder sends the selected satellite.

Receiver 2 declares the unique `m_2` whose cloud center is jointly typical with `Y_2^n`. The true pair is typical with probability tending to one. Every wrong cloud is independent of the true output with the correct marginal, so §1.1 gives packing exponent `I(U;Y_2)` and the error tends to zero if `R_2<I(U;Y_2)-delta`.

Receiver 1 searches for the unique private index `m_1` for which there exists at least one cloud index `m_2` with `(U^n(m_2),X^n(m_1,m_2),Y_1^n)` jointly typical. The true tuple is typical. For a wrong satellite in the true cloud, the cloud center is fixed and the satellite is conditionally independent of the output given that center, so the exponent is `I(X;Y_1|U)` and this event vanishes if `R_1<I(X;Y_1|U)-delta`. For a wrong cloud and any satellite in that cloud, the entire wrong pair `(U^n,X^n)` is independent of the true output; there are at most `2^{n(R_1+R_2)}` such pairs, and their packing exponent is `I(U,X;Y_1)=I(X;Y_1)` by `U->X->Y_1`. Thus this event vanishes if `R_1+R_2<I(X;Y_1)-delta`.

The last inequality is implied by the first two under degradation: `I(U;Y_2)<=I(U;Y_1)`, whence
`I(U;Y_2)+I(X;Y_1|U)<=I(U;Y_1)+I(X;Y_1|U)=I(X;Y_1)`.
Thus every strict pair satisfying the two displayed region bounds is achievable. Ensemble averaging selects deterministic codebooks; closure gives the boundary.

### 3.3 Converse

For any sequence of codes with average joint error `P_e->0`, Fano gives

`nR_1<=I(M_1;Y_1^n)+n epsilon_n`,
`nR_2<=I(M_2;Y_2^n)+n epsilon_n`.

Since `M_1` and `M_2` are independent,
`I(M_1;Y_1^n|M_2)-I(M_1;Y_1^n)=I(M_1;M_2|Y_1^n)>=0`.
Put `U_i=(M_2,Y_1^{i-1})`. The encoder is a deterministic function of `(M_1,M_2)`, so `U_i->X_i->(Y_{1i},Y_{2i})` is Markov; memorylessness is needed here. Expanding the first bound and applying conditional data processing,

`I(M_1;Y_1^n|M_2)=sum_i I(M_1;Y_{1i}|M_2,Y_1^{i-1})<=sum_i I(X_i;Y_{1i}|U_i)`.

For the second bound, expand
`I(M_2;Y_2^n)=sum_i I(M_2;Y_{2i}|Y_2^{i-1}) <= sum_i I(M_2,Y_2^{i-1},Y_1^{i-1};Y_{2i})`;
the inequality follows by adding `(Y_2^{i-1},Y_1^{i-1})` to the first argument and using `I(A;B|C)<=I(A,C;B)`.

Under the physical degradation, the past weak output is generated from the past strong output and is conditionally independent of the current weak output given `(M_2,Y_1^{i-1})`. Therefore `(M_2,Y_2^{i-1},Y_1^{i-1})->(M_2,Y_1^{i-1})->Y_{2i}` is Markov, and the last mutual information equals `I(U_i;Y_{2i})`. (This equality is why the physically degraded equivalent may be assumed; it does not follow from an arbitrary coupling of outputs.)

Let Q be independent uniform `[n]`, set `U=(Q,U_Q)`, `X=X_Q`, `Y_j=Y_{jQ}`. The time-shared law preserves `U->X->Y_1->Y_2`, and the two rates are bounded by `I(X;Y_1|U)` and `I(U_Q;Y_2|Q)<=I(U;Y_2)`. Send n to infinity and take closure.

### 3.4 Auxiliary cardinality reduction

For each `u`, let `r_u(x)=p(x|u)`. The rate pair generated by U depends on the mixture only through the unconditional marginal `p_X` and the two averages `E[H(Y_1|U=u)]`, `E[H(Y_2|U=u)]`, since
`I(X;Y_1|U)=H(Y_1|U)-H(Y_1|X)` and `I(U;Y_2)=H(Y_2)-H(Y_2|U)`.

For each u, the conditional input law `r_u=p(x|u)` ranges over the probability simplex on X. The simplex is path-connected, and each of the following maps from it to a finite-dimensional Euclidean space is continuous. Thus its image is path-connected, and §1.4 applies to averages of the displayed coordinates. First preserve the coordinates `p(x|u)` for all but one x, plus `H(Y_1|U=u),H(Y_2|U=u)`. There are `|X|+1` coordinates; preserving their averages preserves `p_X` and both conditional entropies, hence both rates, with at most `|X|+1` support points. Next preserve `p(y_2|u)` for all but one output, `H(Y_2|u)` and `I(X;Y_1|U=u)`. There are `|Y_2|+1` coordinates; these preserve the marginal `p_{Y_2}`, the conditional entropy `H(Y_2|U)`, and the first-rate conditional mutual information, so both rates remain fixed with at most `|Y_2|+1` points. Finally preserve `p(y_1|u)` for all but one output, `H(Y_2|u)` and `I(X;Y_1|U=u)`, giving `|Y_1|+1` coordinates. Degradedness maps each `p(y_1|u)` to `p(y_2|u)`, so the retained average fixes `p_{Y_2}` and `H(Y_2)` as well; the two preserved averages then retain both rates with at most `|Y_1|+1` points. Selecting the smallest of the three representations proves `|U|<=min{|X|,|Y_1|,|Y_2|}+1` without an unproved support lemma.

## 4. Gaussian MAC is a separate continuous-alphabet theorem

### 4.1 Model and region

Fix real gains `g_1,g_2`, noise variance `N_0>0`, and powers `P_1,P_2>=0`. The memoryless channel is `Y_i=g_1X_{1i}+g_2X_{2i}+Z_i`, with iid `Z_i~N(0,N_0)` independent of messages and inputs. Users have independent uniform messages, separate deterministic encoders with no feedback, and every codeword obeys `n^{-1}sum_i x_{ji}(m_j)^2<=P_j`. Error is average joint message error. Rates are bits/use. The theorem is the closure of the strict region

`sum_{j in S}R_j < (1/2)log_2(1+sum_{j in S} g_j^2 P_j/N_0)`

for every nonempty subset S of `{1,2}`. It is not an application of finite strong typicality; the following continuous proof is independent of the finite-DM-MAC theorem.

### 4.2 Achievability with per-codeword cost control

Take any rate pair strictly inside the displayed region. By continuity, choose variances `0<P'_j<P_j` (for a positive-rate user; a zero-power user is removed) so all subset inequalities remain strict with `P'_j`. Generate `M_j=ceil(2^{nR_j})` codewords independently with iid `N(0,P'_j)` coordinates; user codebooks are independent.

This is the continuous-alphabet typicality bridge, separate from the finite-DM-MAC theorem above. For each nonempty S define the information density

`i_S(x_1^n,x_2^n;y^n)=log_2 [ w^n(y^n|x_1^n,x_2^n) / w_{Y|X_{S^c}}^n(y^n|x_{S^c}^n) ]`,

where the denominator averages the Gaussian input laws `N(0,P'_j)` over users in S. Its expectation per coordinate is
`I_S=(1/2)log_2(1+sum_{j in S}g_j^2P'_j/N_0)`; the information density is a quadratic polynomial in jointly Gaussian variables and has finite variance. Choose thresholds `tau_S` with `R(S)<tau_S<I_S`. The decoder declares the unique message pair passing `i_S>n tau_S` for all nonempty S.

For the transmitted tuple, each information density is a sum of iid Gaussian log-likelihood ratios. The log ratios are quadratic polynomials plus constants in a jointly Gaussian vector, so have finite first and second moments; the weak law gives convergence of `i_S/n` to `I_S`. This is weak information-density typicality, not a use of finite-alphabet strong typicality. For a wrong message pattern S, condition on the complementary codewords. The wrong S-codewords are independent with law `prod_{j in S}P_{X_j'}^n`, independent of the true output. Under this product reference law, the likelihood ratio in the threshold test has expectation one. Thus

`Pr{ i_S(tilde X_S^n;Y^n|X_{S^c}^n)>n tau_S | X_{S^c}^n } <= 2^{-n tau_S}`.

There are at most `prod_{j in S}M_j<=2^{nR(S)+o(n)}` candidates. The union bound tends to zero because `tau_S>R(S)`. A finite union over nonempty S proves ensemble-average joint error tends to zero.

The Gaussian codewords do not yet meet a per-codeword power constraint. For user j, let `B_j` be the fraction of the `M_j` sampled codewords whose empirical energy exceeds `P_j`. Since `P'_j<P_j`, chi-square Chernoff gives

`p_n=Pr{n^{-1}sum_i X_{ji}^2>P_j} <= exp[-(n/2)(P_j/P'_j-1-ln(P_j/P'_j))] -> 0`.

The expectation of `B_j` is `p_n`; Markov gives `Pr{B_j>sqrt(p_n)}<=sqrt(p_n)`. Hence with probability tending to one, each codebook has a fraction `1-o(1)` of good codewords. The ensemble-average error also tends to zero, so there exists a realization where all these good-fraction bounds hold and the original average error tends to zero: condition the error average on the high-probability good-fraction event and use `E[Pe|good]<=E[Pe]/Pr(good)`.

Delete all bad codewords from each user’s codebook and relabel. Every retained codeword obeys the stated per-codeword constraint. The retained message-set sizes satisfy `M'_j>=M_j(1-o(1))`, so `n^{-1}log_2 M'_j->R_j`. Use the original decoder, mapping an output to a removed index to any fixed retained pair. Under independent uniform retained messages, its error is at most the original ensemble error conditioned on the event that both messages were retained; that conditional error is at most `Pe/[(M'_1/M_1)(M'_2/M_2)] ->0`. Thus the power-constrained code exists. The closure includes the boundary. If `P_j=0`, its codewords are identically zero and the result reduces to the one-user Gaussian coding statement for the other user.

### 4.3 Converse with arbitrary deterministic codebooks

Fix any length-n code satisfying every codeword cost constraint. For a nonempty S, let `M_S` denote those users’ independent messages. Fano, conditioned on complementary messages, gives

`nR(S) <= I(M_S;Y^n|M_{S^c}) + 1 + P_e nR(S)`.

Given `M_{S^c}`, subtract the known complementary codewords from `Y^n`; call the residual `V^n`. Then

`I(M_S;Y^n|M_{S^c})=I(M_S;V^n|M_{S^c})=h(V^n|M_{S^c})-h(Z^n)`.

The equalities are valid because the complementary transmitted sequences are deterministic once their messages are fixed, and the residual is a deterministic translation plus independent nonsingular Gaussian noise. It has finite second moment and a density, so its differential entropy is finite: it is at least the Gaussian-noise entropy by nonnegative mutual information and at most the Gaussian maximum-entropy bound below. For any density f with mean μ and variance v>0, nonnegativity of relative entropy to `N(μ,v)` gives
`0<=D(f||N(μ,v))=-h(f)+(1/2)log_2(2 pi v)+(1/2)log_2(e)`,
so `h(f)<=(1/2)log_2(2 pi e v)`; the relative-entropy inequality follows from convexity of `t log t`, and equality holds only for the matching Gaussian. The positive noise variance ensures all conditional variances used below are nonzero.

Use the chain rule and conditioning-reduces-entropy:

`h(V^n|M_{S^c}) <= sum_i h(V_i|M_{S^c})`.

For each i and each fixed complementary message, Gaussian maximum differential entropy at a given variance gives
`h(V_i|M_{S^c}=m)<= (1/2)log_2(2 pi e Var(V_i|m))`. Average over the complementary messages and apply Jensen to log. Independence of the private messages means the signal variance is the sum of the users’ variances; a codeword’s nonzero mean can only decrease variance relative to its second moment. Therefore

`sum_i E Var(V_i|M_{S^c}) <= n N_0 + sum_{j in S} g_j^2 sum_i E X_{ji}^2 <= n(N_0+sum_{j in S}g_j^2P_j)`.

A second Jensen application across i yields

`h(V^n|M_{S^c}) <= (n/2)log_2(2 pi e [N_0+sum_{j in S}g_j^2P_j])`.

Subtract `h(Z^n)=(n/2)log_2(2 pi eN_0)`, divide by n, and let n tend to infinity with `P_e->0`. This gives each subset outer bound. Achievability and converse match. This proof uses continuous Gaussian entropy and cost directly and has no dependency on a finite-alphabet MAC theorem.

## 5. Noisy network coding: exact factorization and multicast proof

### 5.1 Operational model and theorem

Let `N` nodes have finite input/output alphabets and a memoryless joint kernel `W(y^N|x^N)`. This supplement proves the multicast version: every message `M_k` is independent uniform, node k’s input at time i is a deterministic function of its own message and past local outputs, and all messages have one common nonempty destination set `D=D_1=...=D_N`. A destination d estimates every message other than its own, which it already knows. Rates satisfy `R_k>=0`; write `R(S)=sum_{k in S}R_k`. Error is the average probability that at least one required message at at least one destination is wrong. Capacity means closure of achievable tuples.

Fix finite Q and the exact law

`p(q) [prod_{k=1}^N p(x_k|q)] W(y^N|x^N) [prod_{k=1}^N p(yhat_k|y_k,x_k,q)]`.

Thus Q is public and independent of messages; conditional on Q the input symbols are product distributed; each test channel is local and, conditional on `(Y_k,X_k,Q)`, the quantizer variables are independent across k. For each nonempty S with `S^c intersect D != empty`, the theorem’s rate constraint is

`R(S) < min_{d in S^c intersect D} { I(X(S);Yhat(S^c),Y_d|X(S^c),Q) - I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d,Q) }`

The second term is a nonnegative compression penalty. This is an inner bound. The general cutset outer bound instead requires, for every nonempty S with `S^c intersect D != empty`,

`R(S) <= I(X(S);Y(S^c)|X(S^c))`

for some joint input law `p(x^N)` (and then takes the union/closure over such laws). It permits arbitrary dependence among inputs and has no quantization variable. Do not identify this outer bound with the NNC inner bound outside proved equality cases. General destination sets require the article’s separate Theorem 2, not this common-multicast theorem.

### 5.2 Code construction

First fix Q constant; coded time sharing is added by §1.3. Split transmission into b blocks of n channel uses. The same message tuple `(m_1,...,m_N)` is sent in every block, while each block uses an independent codebook.

For each block j and node k, generate `2^{nbR_k}2^{n hatR_k}` input sequences
`x_{k,j}^n(m_k,l_{k,j-1})`, iid `p_{X_k}^n`, independently over all indices, nodes and blocks. For every such input sequence, generate `2^{n hatR_k}` sequences
`yhat_{k,j}^n(l_{k,j}|m_k,l_{k,j-1})`, conditionally iid with law `prod_i p(yhat_{k,i}|x_{k,i}(m_k,l_{k,j-1}))`, independent across node/block/codebook groups. Here `p(yhat_k|x_k)=sum_{y_k}p(y_k|x_k)p(yhat_k|y_k,x_k)` is the marginal induced by the selected test channel. Set `l_{k,0}=1`.

At the end of block j, node k observes `y_{k,j}^n` and chooses an index `l_{k,j}` for which
`(x_{k,j}^n(m_k,l_{k,j-1}),y_{k,j}^n,yhat_{k,j}^n(l_{k,j}|m_k,l_{k,j-1}))`
is jointly typical for `p(x_k,y_k,yhat_k)`. Choose uniformly among successful indices; if none succeeds, choose uniformly among all indices. This rule is invariant under relabeling the independently generated indices, as needed in the packing symmetry argument. In block j+1 node k sends `x_{k,j+1}^n(m_k,l_{k,j})`. The random tie choices are part of the random-code existence argument only: each node has finitely many local codebook states and output sequences, so after averaging one can fix all codebooks and local choice tables with error no larger than the ensemble average. The resulting operational encoders are deterministic and use only their own message and past local outputs.

Destination d knows its own message/index trajectory. It searches jointly over the other messages and all non-destination compression indices and accepts a unique required message tuple for which the blockwise tuples
`(x_{1,j}^n,...,x_{N,j}^n,yhat_{1,j}^n,...,yhat_{N,j}^n,y_{d,j}^n)`
are jointly typical in every j. Compression indices are not required to be uniquely decoded; this is simultaneous nonunique decoding. It is essential that the correct message tuple with the actual relay indices passes the test; the receiver does not need to identify those indices separately.

### 5.3 Covering and correctness of the true tuple

Write `m^*` for the transmitted message tuple. Let E0 be the event that some node/block has no codeword jointly typical with its observed local input/output, and let E1 be the event that the actual message tuple and actual compression-index trajectory pass the decoder’s blockwise typicality test. For each wrong message tuple m with `m_d=m_d^*`, let E_m be the event that some non-destination compression-index path makes all block tests pass with m. Then

`P_e(d) <= P(E0)+P(E0^c intersect E1^c)+sum_{m != m^*}P(E_m)`.

For each k and block j, conditional on a typical pair `(x_{k,j}^n,y_{k,j}^n)`, §1.2’s covering calculation applies to the `2^{n hatR_k}` conditional codewords. If

`hatR_k>I(Y_k;Yhat_k|X_k)+delta(epsilon')`

then the probability that this node/block has no suitable index tends to zero. There are finitely many nodes and b fixed while n tends to infinity, so `P(E0)->0`. Given the actual network input/output sequences, the node-specific codebooks and symmetric selection rules are independent across nodes. Every selected word has its prescribed conditional type; conditional type counting across these independent selections gives joint typicality of `(X^N,Y^N,Yhat^N)` for the product test channel, and projection gives the decoder tuple `(X^N,Yhat^N,Y_d)`. The block channel is memoryless and the same argument applies to each of the fixed b blocks, so `P(E0^c intersect E1^c)->0`. This explicitly checks the true-path event rather than treating relay selection as independent of its observation.

### 5.4 Wrong-message packing with compression indices

The random index labeling and uniform tie rule are symmetric under simultaneous relabeling of every node/block compression-index tree (including the next-block codebooks indexed by a previous label). Thus the conditional packing error is the same for each transmitted tuple and selected-index trajectory; fix the messages to all ones and relabel the actual trajectory as all ones. For the packing bound, reveal the whole actual trajectory, every input/quantization codebook array searched by the true encoders along that trajectory, and all actual channel outputs. Fix destination d. For a competing message tuple let
`T={k:m_k!=1}`; it is nonempty and d is not in T because d’s own message is known. For block j>=2 and a previous compression-index tuple `l_{j-1}`, define
`S_j={k:m_k!=1 or l_{k,j-1}!=1}`.
Then `T subseteq S_j` and `d notin S_j`. For each k in S_j, the candidate pair `(m_k,l_{k,j-1})` differs from the actual `(1,1)`. Its input sequence and associated quantization array are therefore a distinct codebook group that the true encoder never searched in block j. These groups are independent across k, independent of all revealed true-path data, and independent across blocks. This is why they retain the product law `prod_{k in S_j}p(x_k)p(yhat_k|x_k)` after conditioning; we make no iid claim about unselected words in the actually searched `(1,1)` array. Reveal/condition also on all candidate variables for `S_j^c` and on `Y_d`. Whenever the full candidate tuple is typical, its projection `Z=(X(S_j^c),Yhat(S_j^c),Y_d)` has the target marginal type. For every fixed such z-sequence the S_j codewords remain independent with their product codebook law, so the conditional type bound below applies uniformly. The block-1 event is discarded from the exponent; conditioning on the full actual trajectory and true-path arrays leaves the wrong groups in each of the b−1 remaining independent block codebooks unexposed, giving the product of the b−1 bounds.

For any nonempty S with d outside S, define

`I_1(S)=I(X(S);Yhat(S^c),Y_d|X(S^c))`,

and, for a fixed ordering of nodes (write `S_{<k}` for the nodes in S preceding k),

`I_2(S)=sum_{k in S} I(Yhat_k;Yhat(S^c union {k' in S:k'<k}),Y_d,X^N|X_k)`.

The following finite typical-set packing calculation proves the needed exponent. Let `W=(X(S),Yhat(S))`, `Z=(X(S^c),Yhat(S^c),Y_d)`, and `Q_W=prod_{k in S}p(x_k)p(yhat_k|x_k)`. The target joint law P is the marginal of the stated network/test-channel law on `(W,Z)`. The competing law for W and a fixed Z is

`Q_S = Q_W P_Z`.

If z is any sequence whose type is sufficiently close to `P_Z`, the number of w-sequences jointly typical with z is at most `2^{n(H_P(W|Z)+delta)}`. Each such sequence has candidate-law probability at most `2^{-n(H_P(W)+D(P_W||Q_W)-delta)}` because its empirical marginal is close to `P_W`. Thus conditional type counting bounds the probability of joint typicality by

`2^{-n(I_P(W;Z)+D(P_W||Q_W)-2delta)}=2^{-n(D(P_{WZ}||P_ZQ_W)-2delta)}`.

The divergence decomposes as follows. First split at `X(S)`:

`D(P_{WZ}||P_ZQ_W) = D(P_{X(S),Z}||P_Z prod_{k in S}p(x_k)) + E_P D(P_{Yhat(S)|X^N,Yhat(S^c),Y_d}||prod_{k in S}p(yhat_k|x_k))`.

Because `X^N` has product input law, the first term is `I(X(S);Z)=I(X(S);Yhat(S^c),Y_d|X(S^c))=I_1(S)`. Expanding the second divergence by the fixed order on S gives `sum_{k in S} I(Yhat_k;X^N,Yhat(S^c),Y_d,Yhat(S_{<k})|X_k)=I_2(S)`. Therefore the exponent is `I_1(S)+I_2(S)`; absorb the two type tolerances into a larger `delta(epsilon)`, so for a typical tuple

`Q_S(T_epsilon^n) <= 2^{-n(I_1(S)+I_2(S)-delta)}`.

This is the method-of-types likelihood-ratio form of packing: on the target typical set the target/competitor likelihood ratio is at least the exponent shown, and summing competitor mass is at most that exponent’s reciprocal. It gives a concrete estimate rather than an appeal to a named packing lemma.

There are at most `2^{n sum_{k in S}hatR_k}` previous index tuples that produce a given set S, so summing those tuples changes the exponent to
`I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta`. There are at most `2^{N-1}` choices of S for a block, and the b−1 informative blocks are independent. Summing over message-error sets T and over destination compression indices gives the explicit bound for the wrong-message event `union_{m != m^*} E_m`:

`P(union_{m!=m^*} E_m) <= sum_{nonempty T subseteq [N]\{d}} 2^{n b R(T)} 2^{n sum_{k!=d}hatR_k} 2^{(N-1)(b-1)} 2^{-n(b-1) min_{S: T subseteq S, d notin S}[I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta]}`.

Combining this bound with the earlier error split gives `P_e(d) <= o_n(1)+P(union_{m!=m^*}E_m)`, for fixed b whenever the covering inequalities hold.

Thus the packing term vanishes for fixed b if, for each such T,

`R(T) < ((b-1)/b) min_{S: T subseteq S,d notin S}[I_1(S)+I_2(S)-sum_{k in S}hatR_k-delta] - (1/b)sum_{k!=d}hatR_k`.

First choose `hatR_k>I(Y_k;Yhat_k|X_k)+delta'` to meet covering, then let b tend to infinity. For each T, the sufficient limiting inequality is

`R(T) < min_{S: T subseteq S,d notin S}[ I_1(S)+I_2(S)-sum_{k in S}I(Y_k;Yhat_k|X_k)] - (N-1)delta' - delta`.

The quantizer factorization yields the identity

`I_2(S)-sum_{k in S}I(Y_k;Yhat_k|X_k) = -I(Yhat(S);Y(S)|X^N,Yhat(S^c),Y_d)`.

To verify it, set `C=(X^N,Yhat(S^c),Y_d)`. For each k in the fixed order, the local test-channel factorization gives `Yhat_k` conditionally independent of `(C,Yhat(S_{<k}))` given `(Y_k,X_k)`. The chain rule therefore gives `I(Yhat_k;C,Yhat(S_{<k})|X_k)-I(Yhat_k;Y_k|X_k) = -I(Yhat_k;Y_k|C,Yhat(S_{<k}))`. Summing the left side is exactly `I_2(S)-sum_{k in S}I(Yhat_k;Y_k|X_k)`. Summing the right side and applying the chain rule to `Yhat(S)` gives `-I(Yhat(S);Y(S)|C)`: conditional on `(Y_k,X_k)`, the local `Yhat_k` is independent of the other network outputs and test-channel variables, so the k-th chain-rule term reduces to `I(Yhat_k;Y_k|C,Yhat(S_{<k}))`. This proves the identity without an independence assumption between the network outputs themselves.

Since rates are nonnegative and `T subseteq S`, the constraint with `T=S` is strongest among the constraints indexed by `T subseteq S`. The limiting conditions therefore reduce exactly to

`R(S) < I(X(S);Yhat(S^c),Y_d|X(S^c)) - I(Yhat(S);Y(S)|X^N,Yhat(S^c),Y_d)`

for every nonempty S with `d notin S`. The union bound over the finite common destination set D gives the minimum over `d in S^c intersect D`. Finally coded time sharing gives the stated conditional-Q formula; take closure. This establishes the NNC inner bound, not the cutset bound.

### 5.5 Scope guard

The theorem proved here is the common-destination multicast theorem. For genuinely different destination sets, the article changes the decoding event and the rate expression (its Theorem 2); it is not obtained just by replacing D with an intersection while claiming all separate destination requirements. The cutset remains an outer bound for general DMNs. Equality is asserted only in the article’s noiseless, specified erasure and product-law-attaining deterministic cases. The Gaussian multicast article theorem, not the older Stanford slide, supplies the sharper cut-dependent constant-gap expression.

## 6. Cross-checks and status

- DM-MAC achievability/converse cross-checks El Gamal–Kim arXiv:1001.3404v3, Lecture 4, Theorem 2 and converse (pages 4–12 through 4–21); the source’s |Q|≤2 claim is Lecture 4, Theorem 3 and its connected-set argument (pages 4–23–4–24). Degraded BC cross-checks Lecture 5, Theorem 2 (pages 5–21–5–23) and the cardinality calculation in Appendix C (pages C–2–C–4). Stanford EE376B decks 04–05 are cross-checks only. The MAC average-error model is retained; the maximal-error distinction is explicit.
- The degraded-BC proof uses the physically degraded output coupling for the converse. The capacity region depends only on marginals only in the nonfeedback model.
- The finite MAC support proof uses the path-connected union of pentagons and the fully proved cone-boundary reduction in §1.4 to obtain two Q values. It does not invoke ordinary three-point Carathéodory as though it established the sharper bound.
- The NNC theorem, factorization and block proof cross-check Lim et al. arXiv:1002.3188v2, Theorem 1, Section III, equations (17)–(21), including the nonunique compression-index search and exact cut-dependent inner bound. The displayed proof development is local. The article’s separate Theorem 2 handles general destination sets. General DMN capacity is not proved.
- The Gaussian MAC statement cross-checks Stanford EE376B Lecture 04, Theorem 4.4 (slide 21). Its achievability and converse here are separately proved for real AWGN with individual per-codeword block-energy constraints, continuous information-density tests, explicit Gaussian cost truncation, and differential-entropy bounds; no implication from finite-alphabet DM-MAC coding is assumed.
