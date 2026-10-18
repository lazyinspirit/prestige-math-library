# Isolated ETW construction

This is a mathematical construction, not an acceptance or gate record. No canonical item was edited. I read CLAUDE.md and README.md fully and read the actual five assigned item files. I read ETW text lines 1240–1605 (printed pp.13–14, Theorem 1), 2400–3600 (pp.23–29, Theorems 3–4 and their complete proofs), and 3600–4550 (pp.30–37, Lemma 1, Theorems 5–6 and their complete comparisons). The ETW text has extraction typos, notably missing logs and indexing errors; the construction below uses the mathematical expressions rather than copying those typos.

Source PDF SHA256: 6c23352d4df5cfefc110c89d9ab6fa47ee231a20e02ccfaa0ff8297052c326b7.
Source text SHA256: cd645597238340fb60a4cb5f72f93eb20e80024adfa0556b91172ebad5a3b77c.
Outer item input SHA256: a809c7d26f57aba89eaf35d55054c3088f000fa613cfcc1cbd8dab63cdb91bec.
One-bit input SHA256: fc2b21b9266406ed85d2f521cf4d7ede35b5d93d45d12ec9d2dec326ba47362d.

## Notation and technical foundation

All entropies here are in bits; noises are unit circular complex Gaussian. Write a=SNR1, b=SNR2, c=INR1, d=INR2. Center code coordinates; their variances are bounded by their second moments. The two users' vectors are independent. Fano, the standard-Borel chain rule, deterministic codeword data processing, and memoryless tensorization justify each codeword mutual-information converse below, with an additive o(n). Marginal receiver noise laws alone determine the errors of a given code; we may therefore replace correlations between receivers' noises for a converse.

Here are elementary entropy estimates, including the estimate for which ETW cites a worst-additive-noise theorem. They avoid importing that theorem.

For a complex density of variance v, h(T)<=log(pi e v): integrate the nonnegative relative entropy against the circular Gaussian with the same mean and variance. More generally h(T|S)<=h(T-kS)<=log(pi e E|T-kS-E(T-kS)|²) for every complex k. The first inequality is conditioning and the invertible translation identity; minimization of the quadratic in k gives the linear conditional-variance estimate. Coordinate chain rules give h(T^n|S^n)<=sum h(T_j|S_j). Finite second moments and Gaussian smoothing make the entropies used below finite; this also follows from the Gaussian upper bound and h(V+Z)>=h(Z), the latter being I(V;V+Z)>=0. The same observations apply conditionally to the displayed nonsingular Gaussian noise channels.

**Entropy-difference estimate.** If s>=t>=0, X^n has average variance at most P, and Z^n,W^n have IID unit circular Gaussian coordinates independent of X^n, then

h(sqrt(s) X^n+Z^n)-h(sqrt(t) X^n+W^n) <= n log((1+sP)/(1+tP)). (ED)

For s>t, couple V=sqrt(t/s) U+sqrt(1-t/s) W, where U=sqrt(s)X+Z. Its marginal is the lower-SNR channel, and X–U–V is Markov. The entropy difference equals I(X^n;U^n|V^n), since both noise entropies are n log(pi e). This is h(U^n|V^n)-h(Z^n|sqrt(t/s)Z^n+sqrt(1-t/s)W^n). The second term is n log(pi e(1-t/s)). For coordinate variance p, the optimal linear residual of U given V has variance (1-t/s)(1+sp)/(1+tp). Apply the previous conditional-entropy bound and sum. Finally log((1+sp)/(1+tp)) is increasing and concave in p: its derivative is (s-t)/((1+sp)(1+tp) ln 2), which is nonnegative and decreasing. Jensen and average power give ED. If s=t the difference is zero by identical marginals. If t=0 the same argument is the ordinary scalar bound; if s=0 both vanish. Arbitrary complex phases are removed by unit-modulus rotations. In particular ED applies to (h11 X1+Z1,h12 X1+Z2) exactly when |h11|²>=|h12|², equivalently a>=d for positive P1. This proves the needed noise coupling without dividing by a possibly zero cross gain.

Define S1=h12 X1+Z2 and S2=h21 X2+Z1, with initially independent receiver noises. For average powers P1,P2 the linear-estimator bounds and Jensen give

h(Y1^n|S1^n)<=n log(pi e [1+c+a/(1+d)]),
h(Y2^n|S2^n)<=n log(pi e [1+d+b/(1+c)]),
h(Y1^n)<=n log(pi e [1+a+c]),
h(Y2^n)<=n log(pi e [1+b+d]),
h(Y2^n|S2^n,X1^n)<=n log(pi e [1+b/(1+c)]). (CE)

For example at coordinate powers p1,p2 the first residual variance is 1+|h21|²p2+|h11|²p1/(1+|h12|²p1). The map inside the log is positive, concave and increasing in both powers (x/(1+kx) has second derivative -2k/(1+kx)^3); log is concave and increasing. Jensen therefore gives exactly CE under average, rather than per-coordinate, power constraints. The other estimates use the same calculation. No Gaussian-input assumption is made for the converse.

## Complete outer-region proof

The individual bounds follow by revealing the other message, subtracting its codeword, and applying tensorization and the scalar Gaussian bound with Jensen.

For the first sum bound reveal X2 to receiver1. The sum of the augmented mutual informations is

I(X1^n;Y1^n|X2^n)+I(X2^n;Y2^n)
= h(Y2^n)-h(Z1^n)+h(h11 X1^n+Z1^n)-h(h12 X1^n+Z2^n).

If a>=d, apply ED to the difference and the unconditioned output bound to obtain

R1+R2 <= log(1+b+d)+log((1+a)/(1+d))
= log(1+a)+log(1+b/(1+d)).

Only a>=d is needed. Swapping users, the second displayed weak sum bound requires only b>=c.

For the third sum bound reveal S1 to receiver1 and S2 to receiver2. Independence and chain rules give exactly

I(X1^n;Y1^n,S1^n)+I(X2^n;Y2^n,S2^n)
= h(Y1^n|S1^n)+h(Y2^n|S2^n)-h(Z1^n)-h(Z2^n).

Indeed the positive h(S1),h(S2) terms cancel the respective interference-plus-noise entropies in the conditional channel laws. CE gives log(1+c+a/(1+d))+log(1+d+b/(1+c)). This bound needs no weak/mixed assumption.

For 2R1+R2 add three Fano bounds, augmenting the user2 observation by S2 and one copy of the user1 observation by X2. Their sum is

I(X1^n;Y1^n)+I(X2^n;Y2^n,S2^n)+I(X1^n;Y1^n|X2^n)
= h(Y1^n)+h(Y2^n|S2^n)-2h(Z1^n)
  +h(h11 X1^n+Z1^n)-h(h12 X1^n+Z2^n).

To check the cancellation directly: the first term contributes h(Y1)-h(S2); the second contributes h(S2)+h(Y2|S2)-h(h12 X1+Z2)-h(Z1), because S2's noise is Z1 independent of (X1,Z2); the last contributes h(h11 X1+Z1)-h(Z1). CE and ED give

2R1+R2 <= log(1+a+c)+log(1+d+b/(1+c))+log((1+a)/(1+d)).

Only a>=d is needed. Swap all indices to obtain the other weak weighted bound, requiring only b>=c. Thus the exact hypotheses in the actual weak statement suffice, and equality cases would also be allowed by these calculations.

For mixed c>=b, a>d, the first sum bound remains valid. The MAC sum bound log(1+a+c) follows without citing the strong-interference theorem: receiver1 first decodes M1, subtracts its true codeword on the event of correct decoding, and uses |h21|>=|h22| to simulate h22 X2+Z2 by scaling h21 X2+Z1 and adding independent circular Gaussian noise of variance 1-|h22/h21|². It adds the known h12 X1 and applies receiver2's decoder. The union-bound error tends to zero. A MAP decoder removes the extra randomization. Joint-message Fano and the scalar output entropy bound give the MAC sum bound. If h21=0 then b=c=0 and R2=0, so the same conclusion follows from the individual bound; no division is needed.

For the mixed R1+2R2 bound, use the three augmented observations (Y1,S1), Y2, and (Y2,S2,X1). The sum is

I(X1;Y1,S1)+I(X2;Y2)+I(X2;Y2,S2|X1)
= h(Y1|S1)+h(Y2)+h(Y2|S2,X1)-h(Z1)-2h(Z2),

where all variables in this identity are length-n vectors. Expansion gives h(S1)-h(Z2)+h(Y1|S1)-h(S2), then h(Y2)-h(S1), then h(S2)-h(Z1)+h(Y2|S2,X1)-h(Z2). CE yields precisely

R1+2R2 <= log(1+b+d)+log(1+c+a/(1+d))+log(1+b/(1+c)).

This weighted bound is universal; it needs neither mixed inequality. The reflected mixed regime follows by swapping users. Every displayed formula in the actual outer Statement is correct, including all zero-gain cases.

## Coding bridge: essential distinction from the current supplier

The current supplier proves the full three-stream *unique* MAC subset region for independent streams. It does not prove ETW's seven-facet region (58). Merely saying 'Fourier–Motzkin elimination' would be a substantive gap. Here is a complete bridge for a Gaussian HK family that permits the usual auxiliary removal/rate moving. It preserves the full Gaussian channel range and one-bit conclusion. If the final theorem insists that every achieved pair has exactly the nominal actual private powers and unique common decoding at both receivers, this bridge does not justify that stronger coding-policy assertion. A safe exact correction is: 'Use the stated noise-level split as the nominal Gaussian HK distribution, permitting removal of an auxiliary and rate moving when a nominal common layer need not be decoded.' This does not narrow the capacity approximation or the weak/mixed/strong scope.

For any Gaussian split, put t1=received desired private power at rx1, t2=desired private power at rx2, q1=received private interference at rx2, q2=received private interference at rx1, N1=1+q2,N2=1+q1. Set

A1=log(1+t1/N1), D1=log(1+a/N1),
E1=log((1+c+t1)/N1), G1=log((1+c+a)/N1),
A2=log(1+t2/N2), D2=log(1+b/N2),
E2=log((1+d+t2)/N2), G2=log((1+d+b)/N2).

Let r_i be total rates, p_i private rates, and u_i=r_i-p_i common rates. A superposition codebook has Gaussian U_i(m_ic), and for each m_ic an independently generated Gaussian satellite V_i(m_ic,m_ip); transmit their sum. Decode only one's own (m_ic,m_ip), allowing any unintended common index. The threshold information-density proof has four false-message classes at receiver1: wrong private with true common indices (p1<A1); wrong own common, hence its independent satellite, with true other common (r1<D1); wrong private and other common (p1+u2<E1); wrong own common and other common (r1+u2<G1). There is no error class consisting only of an unintended common index, because the decoder does not output that index. Conditional Gaussian likelihood ratios have expectation one for every false class, so Markov and the union bound give its indicated exponent exactly as in the existing supplier. True densities are IID Gaussian quadratic functions, so the finite-variance weak law proves correct-message acceptance. Receiver2 gives the reflected four inequalities. This is a direct proof of the eight inequalities, not an appeal to a general coding theorem.

The average-power selection needs slack: use component powers scaled by 1-epsilon, at least when their total is positive. For a random codebook the coordinate-averaged input energy at each transmitter is an average of n IID finite-variance random variables (a coordinate's average over the finitely many message indices); its variance is at most C/n, with C depending only on the fourth Gaussian moment and independent of message-set size, by Jensen. Chebyshev makes the probability that either average energy exceeds its prescribed unscaled P_i tend to zero. Ensemble average error tends to zero, so Markov and the union bound provide a codebook meeting both power constraints and vanishing error simultaneously. Zero-power streams are omitted; singleton layers cause no competing class. Let epsilon decrease after taking achievable closures; continuity recovers the stated nominal mutual informations. This also repairs the deterministic-codebook power issue in the existing Gaussian supplier.

Eliminating p1,p2 gives exactly the following nine constraints:

r1<=D1, r2<=D2,
r1<=A1+E2, r2<=A2+E1,
r1+r2<=A1+G2, r1+r2<=A2+G1, r1+r2<=E1+E2,
2r1+r2<=A1+G1+E2, r1+2r2<=A2+G2+E1. (9F)

Here is an elimination certificate. For S=r1+r2 the original eight inequalities and nonnegative split amounts require p_i in [l_i,v_i], where l1=max(0,S-G2), l2=max(0,S-G1), v1=min(A1,r1), v2=min(A2,r2), together with r1-E2<=p1-p2<=E1-r2. Such numbers exist iff l_i<=v_i and [l1-v2,v1-l2] intersects [r1-E2,E1-r2]. Expanding these max/min comparisons gives (9F). The other expanded inequalities are consequences of nonnegativity and A_i<=D_i<=G_i, E_i<=G_i (for example S<=G2+E1 follows from S<=E2+E1). This proves both directions of the elimination.

Dropping the two additional individual inequalities from (9F) gives the seven ETW inequalities (7F). Their entire region is achievable by the Gaussian HK family with auxiliary removal, as follows. If the two omitted inequalities hold, use (9F). If r1>A1+E2, the sum inequalities and weighted inequality imply

r2 < G2-E2, r2 < E1-A1, r1+r2 < G1, r1<=D1.

Both omitted individual inequalities cannot fail at once, since their failures imply S>A1+A2+E1+E2>=E1+E2. Encode all user2 information in its U2 codebook, discard its satellite, and encode user1's entire message in a single Gaussian X1 codebook. Receiver1 MAC-decodes (X1,U2); receiver2 decodes U2 treating X1 as noise. Their required bounds are met: the rx1 own bound is at least D1, its U2 bound is at least E1-A1, and its sum bound is at least G1, because discarding V2 improves these bounds. At rx2, the U2 treating-noise bound is at least G2-E2: before discarding the satellite this difference is I(U2;Y2), and removing that independent satellite noise only improves it. This verifies the fallback directly. The case r2>A2+E1 is reflected. Boundary cases follow by closure. Thus (7F) has a complete local achievability proof, with the explicit stated coding-policy caveat.

## Uniform one-bit facet comparison (all INR boundaries included)

Let L(x)=log_2 x. For weak interference choose k_c=max(1,c), k_d=max(1,d), q1=min(1,d), q2=min(1,c), t1=a/k_d, t2=b/k_c. This formula has no zero denominators, even if a gain vanishes; it means choosing the entire signal private when its INR is zero. Then 1<=N_i<=2 and

t1>=a/(1+d), t2>=b/(1+c),
(N1+t1)(1+d)>=1+a, (N2+t2)(1+c)>=1+b. (*)

These are immediate: (1+d)/k_d>=1, N1>=1, and similarly after swapping. Let O1,O2 be the first and second outer sum RHSs, O3 the third; W1,W2 the two outer weighted RHSs. The following table gives a matching capacity upper bound for each inner facet and a proved bound on its difference. It is valid uniformly; no INR<1 facets are silently lost.

| Inner RHS | Matching outer bound | Upper bound on difference |
|---|---|---|
| D1 | L(1+a) | L N1<=1 |
| D2 | L(1+b) | L N2<=1 |
| A1+G2 | O1 | L(N1 N2)<=2 |
| A2+G1 | O2 | L(N1 N2)<=2 |
| E1+E2 | O3 | L(N1 N2)<=2 |
| A1+G1+E2 | W1 | L(N1² N2)<=3 |
| A2+G2+E1 | W2 | L(N2² N1)<=3 |

For the first sum row, cancel the common factor 1+d+b and compare products: its inner numerator is (N1+t1)(1+d+b); its outer numerator is (1+a)(1+d+b)/(1+d); (*) says the former is at least the latter. The difference is therefore at most the log of the inner denominator N1 N2. The reflected row is identical. For the third sum row each numerator 1+c+t1, 1+d+t2 dominates its outer counterpart by (*). For W1, the common factor 1+a+c cancels; its two remaining inner numerator factors (N1+t1)(1+d+t2) dominate ((1+a)/(1+d))(1+d+b/(1+c)) separately by (*). The inner denominator is N1²N2. Reflection proves W2. This supplies every multiplication and uses no omitted regime case.

Consequently when R1,R2>=1 and (R1,R2) obeys the weak outer bounds, (R1-1,R2-1) satisfies all seven inner facets: the loss of a linear functional with weights (1,0),(0,1),(1,1),(2,1),(1,2) is respectively 1,1,2,3,3. At c<1, q2=c and U2 has zero power; at d<1 the reflected fact holds. The formulas above remain exact and constraints simply become redundant. At c=1 or d=1 the same formulas coincide on both sides, so no limiting regime argument is needed. If both INRs are below one, U1,U2 vanish and the inner region reduces to the treating-interference-as-noise rectangle; its two individual gaps are <=1 directly.

For mixed c>=b and a>d, put q2=0,t2=0,N1=1; take q1=min(1,d),N2=1+q1,t1=a/max(1,d). Thus

A1=L(1+t1), D1=L(1+a), E1=L(1+c+t1), G1=L(1+c+a),
A2=0, D2=L(1+b/N2), E2=L((1+d)/N2), G2=L((1+d+b)/N2).

The seven comparisons are:

| Inner RHS | Capacity upper bound used | Difference bound |
|---|---|---|
| D1 | L(1+a) | 0 |
| D2 | L(1+b) | L N2<=1 |
| A1+G2 | first mixed outer sum O1 | L N2<=1 |
| A2+G1=G1 | mixed MAC sum G1 | 0 |
| E1+E2 | mixed MAC sum G1 | L N2<=1 |
| A1+G1+E2 | individual R1 bound plus mixed MAC sum | L N2<=1 |
| A2+G2+E1 | mixed weighted outer R1+2R2 bound | L N2+L(1+b/(1+c))<=2 |

For row3 use (1+t1)(1+d)>=1+a. Row5 uses (1+c+t1)(1+d)>=1+c+a. Row6 uses (1+t1)(1+d)>=1+a. For row7 the first output numerator is identical to the outer one, E1's numerator dominates 1+c+a/(1+d), and b<=c implies 1+b/(1+c)<2. Each stated difference is at most the sum of its facet weights, so subtracting one bit in both positive coordinates proves the mixed comparison. These calculations also cover d<1, d=1, d=0, b=0, and c=b without singular terms. The reflected mixed case is obtained by swapping indices. The strong case is the exact MAC-intersection supplier and loses zero bits.

## Positive-part and axis cases

If R1,R2>=1, the preceding facet shifts prove the desired positive-part claim. If both are <=1 choose (0,0). Suppose R1<=1<R2. It suffices to achieve the axis pair (0,max(0,R2-1)); the capacity individual bound gives R2<=L(1+b). Shut off user1. The nominal private/common split of user2 itself can achieve at least L(1+b)-1 without auxiliary removal. If c<1 it is entirely private and achieves L(1+b). If c>=1 its private received desired power is b/c, and its common cross power is c-1. At the unintended receiver decode its common layer treating its private layer as noise; the available common rate is C=L((1+c)/2). At its own receiver jointly decode its private and common layers. Private rate <=A=L(1+b/c), total <=L(1+b), and common-only bound is L(1+b-b/c). One may allocate total min(L(1+b),A+C), since the own common bound plus A is >=L(1+b) (multiply (1+b/c)(1+b-b/c)>=1+b), and A+C>=L(1+b)-1 because (1+b/c)(1+c)>=1+b. Thus the required axis rate is achievable. Singleton layers and strictness are handled by closure and the power-slack selection above. In mixed interference, the strongly interfering user is all common and its unintended link is at least as strong as its intended link, so its axis capacity is exact; the other user's axis is covered by the same calculation. Reflect for R2<=1<R1. This establishes the coordinatewise maximum with zero, which does not follow merely by substituting a negative rate into a polygon.

## Delivery assessment

The outer item can be completed with exactly its current Statement and current substantive supplier set, using the entropy estimates proved above. The one-bit capacity conclusion has a complete construction above for a Gaussian HK family with the nominal split and optional auxiliary removal/rate moving. Its full channel scope and all boundary/axis cases are preserved.

The remaining integration decision is exact wording of the coding-policy clause and the coding helper: the current unique independent-three-stream supplier is insufficient to assert the seven-facet region for a fixed split by elimination. Add the superposition/nonunique/auxiliary-removal helper proved above, or independently prove that the actual shifted outer region is contained in the stricter current fixed unique-MAC region. Do not pretend the existing helper already proves (7F). This artifact does not claim to have proved that stronger fixed-unique coding-policy claim. No actual numerical outer formula was found false.
