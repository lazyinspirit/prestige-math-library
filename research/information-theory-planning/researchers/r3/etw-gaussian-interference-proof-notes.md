# ETW Gaussian interference channel within one bit: proof development

This r3 supplement develops the weak- and mixed-interference part of the Etkin–Tse–Wang (ETW) theorem locally. The source is the complete author preprint, “Gaussian Interference Channel Capacity to Within One Bit,” Raul H. Etkin, David N. C. Tse, and Hua Wang, arXiv:cs/0702045v2 (9 February 2007), 52 PDF pages. I read the complete extracted text consecutively, lines 1–5921, including Sections 1–7, Appendix A, and references; the carrier contains 20,530 words and reaches the end of the article. The r5 source manifest reports 5,973 extracted lines, while its reading ledger and the read-only text file currently present under sources/r5 report 5,921; the full 52-page PDF and all article sections/references are present. I record this metadata discrepancy rather than changing r5-owned files or claiming hash recertification. PDF p. 34 was rendered to verify the mixed-case inner inequalities where the text extraction’s fraction layout is material.

The compact HK region and its cloud-switch achievability use a second complete source: Hon-Fah Chong, Mehul Motani, Hari Krishna Garg, and Hesham El Gamal, “On the Han-Kobayashi Region for the Interference Channel,” the complete 14-page author manuscript deposited at CiteseerX, corresponding to IEEE Transactions on Information Theory 54(7), 3188–3195 (July 2008), DOI 10.1109/TIT.2008.924720. I read the full extracted text consecutively, lines 1–1492, including Theorems 1–2, Lemmas 1–3, Appendices I–III, references, and figures. I rendered PDF pp. 4–5 to check the seven-facet theorem, nine-facet lemma, and distribution-switch proof. The source identity and its longer author-manuscript pagination are recorded in the r3 manifest; this is not represented as the final journal pagination.

The theorem is a constant-gap result, not an exact capacity formula in weak or mixed interference. All logarithms below are base 2 and rates are bits per complex channel use. The proof states its error, power, and code assumptions explicitly and separates the exact strong-interference capacity result.

## Channel, code, SNR/INR, and regimes

At each use the two-user complex baseband channel is

    Y1 = h11 X1 + h21 X2 + Z1,
    Y2 = h12 X1 + h22 X2 + Z2,

where messages M1,M2 are independent and uniform, encoders have no feedback, and Z1,Z2 are independent circular Gaussians CN(0,N0), independent across time and of the messages. Transmitter i has block power Pi; ETW’s code definition requires each length-n codeword to satisfy n^{-1}sum_t |x_i[t]|^2 <= Pi. Receiver i estimates only Mi. A rate pair is achievable if both average message error probabilities tend to zero as n tends to infinity. The region is the closure of achievable pairs. The local entropy bounds below are for the finite-block code distributions, including arbitrary temporal correlation and improper complex inputs.

Set

    a = SNR1 = |h11|^2 P1/N0,       b = SNR2 = |h22|^2 P2/N0,
    u = INR1 = |h21|^2 P2/N0,       v = INR2 = |h12|^2 P1/N0.

Thus u is user 2’s interference power at receiver 1; v is user 1’s interference power at receiver 2. The regimes are:

- weak: u < b and v < a;
- mixed: after swapping user labels if needed, u >= b and v < a;
- strong: u >= b and v >= a.

Equalities may be assigned to the stronger adjacent case. In the symmetric channel a=b=SNR and u=v=INR. The classical very-strong sufficient conditions are stronger than the strong-interference inequalities:

    u >= b(1+a),       v >= a(1+b).

The first pair makes receiver 1 able to decode user 2 while treating user 1 as noise; the second does the symmetric job. Strong interference has an exact MAC-intersection capacity region; very strong interference has the exact interference-free rectangle. Neither is described as an approximation.

For weak interference the one-bit inner scheme sets each private signal’s received interference at the other receiver to the smaller of one and the total INR:

    INRp1 = min(1,u),       INRp2 = min(1,v).

Here INRp1=|h21|^2 Pu2/N0 is user 2’s private power at receiver 1, and INRp2=|h12|^2 Pu1/N0 is user 1’s private power at receiver 2. If the corresponding cross gain is nonzero, Pu2=N0 INRp1/|h21|^2 and Pu1=N0 INRp2/|h12|^2; common powers are Pi-Pui. If a cross gain is zero, all of that user’s message is private. For mixed interference u>=b, v<a, the scheme instead uses INRp1=0 (user 2 sends only common information) and INRp2=min(1,v).

The precise one-bit conclusion is coordinatewise: if (R1,R2) is in the capacity region, then (max(0,R1-1),max(0,R2-1)) is achievable. When both shifted coordinates are positive, the compact seven-facet HK point is achieved by one of the three codebook laws constructed below: the satellite scheme for its nine-facet region, or one of the two single-cloud switches. If a coordinate clips to zero, use the corresponding single-user scheme by silencing that transmitter. This is a constant-gap statement; it does not say the weak/mixed capacity region is known exactly.

## Gaussian entropy and the required extremal-noise lemma

All entropies used below are finite. For every finite code, adding nondegenerate Gaussian noise makes each output vector and each genie-output vector a finite Gaussian mixture with a positive density, finite second moment, and finite differential entropy. For a real vector with positive covariance K, relative entropy to the Gaussian with the same mean and covariance gives

    h(U) <= (1/2) log2((2 pi e)^d det K).

For a complex scalar, the equivalent bound is h(U)<=log2(pi e E|U-EU|^2); the comparator is the circular Gaussian with that second moment. These follow by expanding D(P_U||G)>=0, not by assuming that the input or output is Gaussian.

The only Gaussian-extremal step needed in ETW’s weak-channel genie bounds is proved here. Let U be a real d-dimensional random vector with a density, finite entropy, finite mean, and positive definite covariance K. Let Z~N(0,tau I_d), tau>0, be independent of U. Let G be Gaussian with the same mean and covariance as U. Addition of Z is a Markov kernel, so KL data processing gives

    D(P_U||P_G) >= D(P_{U+Z}||P_{G+Z}).

For any vector V whose law has the same mean/covariance as a Gaussian G_V, direct expansion of the Gaussian log density gives D(P_V||P_{G_V})=h(G_V)-h(V): the quadratic cross-entropy term is d/2 for both. Apply this once to U,G and once to U+Z,G+Z. Rearranging proves

    h(U+Z)-h(U) >= h(G+Z)-h(G)
                  = (1/2) log2 det(I_d + tau K^{-1}).          (1)

This is the needed special worst-additive-noise inequality; it is not an appeal to the cited Diggavi–Cover theorem as a black box.

For a length-n complex vector, regard it as a real 2n-vector. If Z~CN(0,q I_n), its real covariance is tau I_{2n} with tau=q/2. Let lambda_1,...,lambda_{2n}>0 be the real covariance eigenvalues of U and V=tr K=sum lambda_j. The function f(lambda)=ln(1+tau/lambda) is decreasing and convex, since f''(lambda)=tau(2lambda+tau)/(lambda^2(lambda+tau)^2)>0. Jensen’s inequality in (1) gives

    h(U+Z)-h(U)
       >= (1/2) sum_j log2(1+q/(2lambda_j))
       >= n log2(1+nq/V).                                      (2)

If V<=nV0, then this is at least n log2(1+q/V0). This step allows arbitrary improper inputs and arbitrary temporal covariance; it uses the full real 2n-dimensional covariance, not a per-letter covariance assumption. In ETW’s application U already includes nondegenerate Gaussian noise, so K is positive definite and h(U) is finite. Zero cross-gain endpoints are obtained by continuity or directly by treating the absent link as no interference.

We also use a conditional-entropy bound that requires no Gaussian input. For complex scalars A,B and any complex beta,

    h(A|B)=h(A-beta B|B)<=h(A-beta B)
           <= log2(pi e E|A-beta B-E(A-beta B)|^2).

Choose beta to be the linear least-squares coefficient. If X1,X2 are independent, and the noises are independent CN(0,N0), then with

    Y1=h11 X1+h21 X2+Z1,       S1=h12 X1+Z2,

and coordinate powers P1t=E|X1[t]-EX1[t]|^2, P2t similarly, this gives

    h(Y1[t]|S1[t])
      <= log2(pi e [N0+|h21|^2 P2t
                  + |h11|^2 P1t N0/(N0+|h12|^2 P1t)]).         (3)

The symmetric formula holds for h(Y2|S2). The bracket is increasing and concave in each power: P/(N0+cP) is increasing and concave, and log is increasing and concave. Thus Jensen and the block power constraints replace P1t,P2t by P1,P2. Ordinary output entropy bounds similarly follow from KL to the matching Gaussian and power averaging.

## Genie and MAC outer bounds

### The two-genie sum bound

Give receiver 1 S1^n=h12 X1^n+Z2^n and receiver 2 S2^n=h21 X2^n+Z1^n. Fano, independence of messages/codewords, and the channel equations give

    n(R1+R2)
      <= h(Y1^n|S1^n)+h(Y2^n|S2^n)-h(Z1^n)-h(Z2^n)+n epsilon_n,

where epsilon_n->0. For example, h(Y1^n|X1^n,S1^n)=h(S2^n) and h(Y2^n|X2^n,S2^n)=h(S1^n), so the genie-signal entropies cancel. Conditioning reduces entropy, so the conditional terms are at most the sum of their single-letter versions. Apply (3), Jensen, and the power constraints, then subtract the Gaussian noise entropies. The result is

    R1+R2 <= log2(1+u+a/(1+v)) + log2(1+v+b/(1+u)).           (4)

This holds for every Gaussian IC, not only the weak regime.

### One-sided genie sum bound

Assume v<a. Give X2^n to receiver 1. Fano yields

    n(R1+R2)
      <= I(X1^n;Y1^n|X2^n)+I(X2^n;Y2^n)+n epsilon_n.

Expanding the first mutual information and scaling the Gaussian-noise terms gives, with

    U=h11 h12 X1^n+h12 Z1^n,
    Z^n~CN(0,(|h11|^2-|h12|^2)N0 I_n),

the bound

    n(R1+R2)
      <= h(Y2^n)-h(Z1^n)+h(U)-h(U+Z^n)
           -n log2|h12|^2+n log2|h11|^2+n epsilon_n.

The variance gap is positive because v<a. The block vector U has total centered energy at most n|h12|^2 N0(1+a). By (2),

    h(U+Z^n)-h(U) >= n log2(1+(|h11|^2-|h12|^2)/(|h12|^2(1+a))).

Combine this with h(Y2^n)<=n log2(pi e N0(1+v+b)) and h(Z1^n)=n log2(pi e N0). The scale factors cancel to give

    R1+R2 <= log2(1+a)+log2(1+b/(1+v)).                        (5)

Swapping users gives, when u<b,

    R1+R2 <= log2(1+b)+log2(1+a/(1+u)).                        (6)

### Weak-interference outer polytope

Point-to-point genie removal gives R1<=log2(1+a), R2<=log2(1+b). Combining (4)–(6) with two clone-receiver/genie bounds gives the following weak-interference outer region when u<b and v<a:

    R1 <= O1 := log2(1+a)
    R2 <= O2 := log2(1+b)
    R1+R2 <= O3 := log2(1+a)+log2(1+b/(1+v))
    R1+R2 <= O4 := log2(1+b)+log2(1+a/(1+u))
    R1+R2 <= O5 := log2(1+u+a/(1+v))+log2(1+v+b/(1+u))
    2R1+R2 <= O6 := log2(1+a+u)+log2(1+v+b/(1+u))
                              +log2((1+a)/(1+v))
    R1+2R2 <= O7 := log2(1+b+v)+log2(1+u+a/(1+v))
                              +log2((1+b)/(1+u)).             (7)

For clarity, the 2R1+R2 proof decodes user 1 at two identical receiver copies and user 2 at a third. A genie gives X2 to one user-1 receiver and S2 to receiver 2. The Fano/entropy cancellation leaves

    sum_t [h(Y1t)+h(Y2t|S2t)-2h(Z1t)]
       -h(h12 X1^n+Z2^n)+h(h11 X1^n+Z1^n)+n epsilon_n.

The first two output terms use Gaussian maximum entropy and (3); the last difference uses (2) with variance gap |h11|^2N0-|h12|^2N0. It gives O6. Swapping user labels gives O7. Thus (7) is a bound on arbitrary code distributions, not only Gaussian codes.

### Mixed-interference outer polytope

Assume u>=b and v<a. The v<a one-sided genie still gives O3, and (4) with the strong cross cut gives the MAC bound O8=log2(1+a+u). A clone receiver with genies S1, S2, and X1, followed by (3) and (2), gives

    R1+2R2 <= O9
       := log2(1+b+v)+log2(1+u+a/(1+v))+log2(1+b/(1+u)).

Thus the mixed outer region is

    R1<=log2(1+a),  R2<=log2(1+b),
    R1+R2<=O3,  R1+R2<=O8,  R1+2R2<=O9.                       (8)

The O8 cut is valid because with M1 known, the cross channel from user 2 to receiver 1 has at least the direct-channel SNR of receiver 2 (u>=b). After subtracting the known X1 waveform, receiver 2’s observation can be simulated from receiver 1’s by attenuation and independent Gaussian noise. Hence H(M2|Y1^n,M1)<=H(M2|Y2^n,M1)=o(n). Receiver 1 already decodes M1. Fano at receiver 1 and the Gaussian MAC entropy bound yield R1+R2<=log2(1+a+u).

For O9 the genie proof expands Fano at two receiver-2 copies and one receiver-1 copy. After cancellation it has the form

    sum_t [h(Y1t|S1t)+h(Y2t)+h(Y2t|S2t,X1t)
           -h(Z1t)-2h(Z2t)] + n epsilon_n.

The three output entropies are bounded respectively by (3), scalar Gaussian maximum entropy, and (3) after revealing X1:

    Var-estimate(Y1|S1) <= N0+|h21|^2P2
                               +|h11|^2P1N0/(N0+|h12|^2P1),
    E|Y2-EY2|^2 <= N0+|h12|^2P1+|h22|^2P2,
    Var-estimate(Y2|S2,X1) <= N0+|h22|^2P2N0/(N0+|h21|^2P2).

Subtract the noise entropies and express gains using a,b,u,v to obtain O9.

## HK inner region and explicit noise-level inequalities

Use the conditional-satellite Gaussian construction. For each user let Ci be a cloud variable and Xi the full transmitted symbol, with independent user laws P(C1,X1)P(C2,X2). In the Gaussian specialization, Ci is the common Gaussian layer and Xi=Ci+Vi, where Vi is the private Gaussian layer. The message is split into a cloud rate ci and a satellite rate pi, Ri=ci+pi. For each cloud index generate C_i^n iid; for every cloud/satellite index pair generate X_i^n conditionally iid according to P(Xi|Ci). Receiver 1 uniquely decodes its own pair and nonuniquely decodes the other user's cloud; receiver 2 does the symmetric operation. A wrong other-user cloud by itself is not an error.

For this code, define

    a1 = I(X1;Y1|C1,C2),   e1 = I(X1,C2;Y1|C1),
    d1 = I(X1;Y1|C2),      g1 = I(X1,C2;Y1),
    a2 = I(X2;Y2|C1,C2),   e2 = I(X2,C1;Y2|C2),
    d2 = I(X2;Y2|C1),      g2 = I(X2,C1;Y2).

The error packing tests at receiver 1 are exactly

    p1 < a1,       p1+c2 < e1,
    R1 < d1,       R1+c2 < g1,                             (14a)

and at receiver 2 they are

    p2 < a2,       p2+c1 < e2,
    R2 < d2,       R2+c1 < g2.                             (14b)

For receiver 1, the four tests cover: a wrong satellite with the true own cloud and true other cloud; a wrong satellite and wrong other cloud with the true own cloud; a wrong own pair with the true other cloud; and a wrong own pair together with a wrong other cloud. The corresponding numbers of competitors are at most 2^(np1), 2^(n(p1+c2)), 2^(nR1), and 2^(n(R1+c2)); their information-density exponents are respectively a1,e1,d1,g1. The event that only the other cloud is wrong is accepted as success for user 1. The same argument at receiver 2 gives (14b). For each wrong tuple, the typicality-test probability is at most 2^{-n(I-delta)} by the likelihood-ratio identity; the finite union bound vanishes under the strict inequalities. The transmitted tuple is jointly typical with probability tending to one. For these Gaussian laws, the information densities are quadratic with finite second moments, so the required laws of large numbers hold. Thus there is a deterministic codebook pair with both average error probabilities tending to zero. Rate-boundary equalities are obtained by closure; a zero-rate or zero-power cloud/satellite is deleted as a constant layer.

Here is the exact private-rate projection of (14), including its additional individual facets. Substitute ci=Ri-pi and set

    L1=max(0,R1+R2-g2),   U1=min(a1,R1),
    L2=max(0,R1+R2-g1),   U2=min(a2,R2).

Then (14) is feasible precisely when R1<=d1, R2<=d2, L1<=U1, L2<=U2 and the attainable interval for delta=p1-p2,

    [L1-U2, U1-L2],

intersects the interval imposed by the two mixed subset tests,

    [R1-e2, e1-R2].

This is a direct two-variable elimination, not a claimed seven-facet projection. If delta is in the intersection, set p1=max(L1,L2+delta), p2=p1-delta, and ci=Ri-pi; the interval endpoints ensure all four private/common rates are nonnegative and satisfy (14). Expanding the endpoint conditions gives the exact nine-facet region:

    R1 <= d1,                 R1 <= a1+e2,
    R2 <= d2,                 R2 <= a2+e1,
    R1+R2 <= a1+g2,
    R1+R2 <= a2+g1,
    R1+R2 <= e1+e2,
    2R1+R2 <= g1+a1+e2,
    R1+2R2 <= g2+a2+e1.                                 (15)

The endpoint expansion also produces R1+R2<=g1+e2 and R1+R2<=g2+e1; they are redundant because e1>=a1 and e2>=a2. The inequalities e1>=a1 and e2>=a2 follow by expanding e1 and e2 with the chain rule. This proves both necessity and sufficiency of (15) for a feasible satellite/cloud split.

The compact seven-facet HK region is a union over codebook laws, not the projection of (14) for one fixed law. This is the CMG compact description (Theorem 2, equations (9)–(16), in the fully read author manuscript). For the original law P(C1,X1)P(C2,X2), its seven bounds are

    R1 <= d1,                 R2 <= d2,
    R1+R2 <= g1+a2,
    R1+R2 <= a1+g2,
    R1+R2 <= e1+e2,
    2R1+R2 <= g1+a1+e2,
    R1+2R2 <= g2+a2+e1.                                 (16)

If a pair in (16) also satisfies R1<=a1+e2 and R2<=a2+e1, it belongs to the nine-facet satellite region (15). If R1>a1+e2, use the following switched law instead. The bounds R1+R2<=a1+g2 and 2R1+R2<=g1+a1+e2 in (16) imply

    R2 < g2-e2 = I(C2;Y2),       R1+R2 < g1,
    R1 <= d1.

The identity g2-e2=I(C2;Y2) follows from the chain rule and the Markov relation C2-(C1,X2)-Y2. Set C1 constant, generate user 1's full codewords iid from the original marginal P(X1), and keep user 2's cloud law P(C2) with one conditional X2 prefix drawn from P(X2|C2) and fixed per cloud codeword. Put all of user 2's message rate in the C2 index. Receiver 2 decodes C2 from the marginal channel P(Y2|C2), which supports every R2<I(C2;Y2). Receiver 1 uniquely decodes X1 and nonuniquely tests C2 under P(X1,C2,Y1), marginalizing the conditional X2 prefix. A wrong X1 with the true C2 has exponent I(X1;Y1|C2)=d1; a wrong X1 and wrong C2 have exponent I(X1,C2;Y1)=g1. A wrong C2 alone is not an error. Hence R1<d1 and R1+R2<g1 suffice. The prefix and both input marginals retain the original Gaussian law.

If R2>a2+e1, the symmetric switch sets C2 constant, generates user 2's codewords iid from P(X2), and assigns user 1's full message to C1 with one conditional X1 prefix per cloud word. From R1+R2<=a2+g1 and R1+2R2<=g2+a2+e1 one obtains R1<g1-e1=I(C1;Y1), R1+R2<g2, and R2<=d2. Receiver 1 decodes C1 at its single-user mutual information I(C1;Y1); receiver 2 uniquely decodes X2 and nonuniquely tests C1, with packing thresholds d2 and g2. Thus this switch also achieves the point. These three alternatives prove the seven-facet union constructively; they do not assert that the original fixed split alone attains every point of (16).

For independent Gaussian layers, the compact-region mutual informations in (16) are directly evaluable. Write vp=INRp2 and up=INRp1. When v>0, let ap=a vp/v and ac=a-ap; when v=0, the selected split has vp=0, so set ap=a, ac=0. When u>0, let bp=b up/u and bc=b-bp; when u=0, the selected split has up=0, so set bp=b, bc=0. The received layer powers at receiver 1 are (ap,ac,u-up), with noise variance normalized to 1+up; at receiver 2 they are (bp,v-vp,bc), with normalized noise 1+vp. Thus every MI in (15)–(16) is obtained from the corresponding Gaussian MAC or marginal-channel formula log2(1+sum(signal powers)/(noise plus untreated private power)). Setting zero-power layers constant gives the no-common/no-private cases directly. The finite switching alternatives above keep the same per-user Gaussian marginals, so the resulting compact bounds evaluate to the inner formulas (9)–(13).

For v,u>=1, the noise-level choice INRp1=INRp2=1 in this evaluated projection yields the following inner facets:

    R1 <= log2(2+a)-1,                 R2 <= log2(2+b)-1,
    R1+R2 <= B1 := log2(a+2v)+log2(1+(1+b)/v)-2,
    R1+R2 <= B2 := log2(b+2u)+log2(1+(1+a)/u)-2,
    R1+R2 <= B3 := log2(1+u+a/v)+log2(1+v+b/u)-2,
    2R1+R2 <= B4 := log2(1+a+u)+log2(1+v+b/u)
                              +log2(2+a/v)-3,
    R1+2R2 <= B5 := log2(1+b+v)+log2(1+u+a/v)
                              +log2(2+b/u)-3.                 (9)

For u<1<=v, the choice INRp2=1, INRp1=u gives the simplified inner region

    R1 <= log2(1+a/(1+u)),             R2 <= log2(2+b)-1,
    R1+R2 <= C1 := log2(v+a/(1+u))+log2(1+(1+b)/v)-1,
    2R1+R2 <= C2 := log2(1+a+u)+log2(1+v+b)
                            +log2(1+u+a/v)-log2(2(1+u)^2).   (10)

The R1+2R2 facet is redundant: its bound is exactly the sum of the R2 and R1+R2 bounds in (10). The case v<1<=u is the user-swapped version.

For u,v<1, both private layers use all their power; treating the other signal as noise gives the inner rectangle

    R1 <= log2(1+a/(1+u)),             R2 <= log2(1+b/(1+v)). (11)

For mixed interference u>=b, v<a and v>=1, use INRp1=0, INRp2=1. The inner facets are

    R1 <= log2(1+a),                   R2 <= log2(2+b)-1,
    R1+R2 <= D1 := log2(v+a)+log2(1+(1+b)/v)-1,
    R1+R2 <= D2 := log2(1+a+u),
    R1+R2 <= D3 := log2(1+u+a/v)+log2(1+v)-1,
    2R1+R2 <= D4 := log2(1+v)+log2(1+a+u)
                               +log2(1+a/v)-1,
    R1+2R2 <= D5 := log2(1+b+v)+log2(1+u+a/v)-1.             (12)

For mixed v<1, the same choice INRp1=0, INRp2=v reduces to the treating-interference-as-noise rectangle

    R1 <= log2(1+a),                   R2 <= log2(1+b/(1+v)). (13)

All three Gaussian codebook laws can meet ETW’s per-message block-power convention. Scale every cloud and conditional-satellite variance so that the marginal transmitted variance is P_i'=(1-eta)P_i. In each law, every actual length-n waveform X_i^n indexed by a message (or message pair) has iid marginal CN(0,P_i') coordinates; in a switched law this follows by drawing one conditional prefix X_i^n per cloud index and keeping it fixed in the selected codebook. Thus the probability q_i(n) that a uniformly selected codeword exceeds nP_i tends to zero by the weak law. For every message-indexed waveform with energy greater than nP_i, replace its actual transmitted waveform by zero, while retaining the original codebook and decoder tests. If either transmitter's selected message uses a replaced word, count the event as an error; otherwise the original random-coding analysis is unchanged. The ensemble average error increases by at most q_1(n)+q_2(n). There is a deterministic codebook choice whose sum of error and bad-word fractions is no larger than its ensemble expectation. For any compact-region rate point, first move to a strict interior point of the relevant one of the three coding laws; continuity permits eta>0 small enough to preserve all strict mutual-information inequalities. Let n grow and then take closures. This proves average-error achievability under the per-codeword power rule and makes no maximal-error claim.

## One-bit inclusion: explicit facet comparisons

All quantities in the following differences use the definitions in (7)–(13), and logs remain base 2. If both outer-region coordinates satisfy R1,R2>=1, subtracting (1,1) lowers a facet c1 R1+c2 R2 by c1+c2. Thus it is enough to compare each inner facet with an outer bound on the same functional and show its gap is at most that amount. The comparisons below are strict (the limiting equality cases follow by closure). If one coordinate is below one, handle that boundary separately: for example if R1<1, the clipped target is (0,(R2-1)^+); the outer individual bound R2<=log(1+b) implies this target is achieved by silencing user 1 and using the ordinary user-2 Gaussian channel. The symmetric argument handles R2<1, and if both are below one the origin is achievable. This establishes the coordinatewise-clipped version without assuming that a fixed-split HK polytope is downward closed at its axes.

### Weak interference, u,v>=1

Use the inner region (9). For the two individual facets,

    O1 - (log(2+a)-1) = 1+log((1+a)/(2+a)) < 1,
    O2 - (log(2+b)-1) = 1+log((1+b)/(2+b)) < 1.

Pair O3 with B1. Cancelling the b-dependent terms gives

    O3-B1 = 2+log( v(1+a)/((1+v)(a+2v)) ) < 2,

because (1+v)(a+2v)-v(1+a)=a+v+2v^2>0. Interchanging users gives O4-B2<2. Pair O5 with B3:

    O5-B3 = 2
       +log((1+u+a/(1+v))/(1+u+a/v))
       +log((1+v+b/(1+u))/(1+v+b/u)) < 2,

since both ratios are below one. Finally,

    O6-B4 = 3
       +log((1+v+b/(1+u))/(1+v+b/u))
       +log((1+a)/((1+v)(2+a/v))) < 3.

The first ratio is below one because u>0; for the second, the denominator minus numerator is 1+2v+a/v>0. The user-swapped calculation gives O7-B5<3. These are exactly the required facet shifts for (9).

### Weak interference, u<1<=v

Use (10). The individual gaps are

    O1 - log(1+a/(1+u)) = log(1+au/(1+u+a)) < log(1+u) < 1,
    O2 - (log(2+b)-1) = 1+log((1+b)/(2+b)) < 1.

For C1, pair with O3 and cancel the b terms:

    O3-C1 = 1+log( v(1+a)/((1+v)(v+a/(1+u))) ) < 2.

Indeed,

    2(1+v)(v+a/(1+u))-v(1+a)
      = v+2v^2+a(2(1+v)/(1+u)-v) > 0,

since u<1 implies 2(1+v)/(1+u)>1+v. For C2, pair with O6:

    O6-C2 = log((1+v+b/(1+u))/(1+v+b))
       +log((1+a)/((1+v)(1+u+a/v))) +log(2(1+u)^2) < 3.

The first ratio is at most one; the denominator of the second ratio exceeds its numerator by v+u+uv+a/v>0; and 2(1+u)^2<8. The inner R1+2R2 inequality is redundant because its right side is the sum of the inner R2 and R1+R2 right sides. The case v<1<=u follows by exchanging users.

### Weak interference, u,v<1

The inner region is the rectangle (11). Its two outer-to-inner individual gaps are

    O1-log(1+a/(1+u)) = log(1+au/(1+u+a)) < log(1+u) < 1,
    O2-log(1+b/(1+v)) = log(1+bv/(1+v+b)) < log(1+v) < 1.

Thus every outer point shifted by one in each coordinate satisfies the rectangle constraints.

### Mixed interference, u>=b, v<a, and v>=1

Use (12). The individual gaps satisfy O1-log(1+a)=0 and O2-(log(2+b)-1)<1. For D1,

    O3-D1 = 1+log( v(1+a)/((1+v)(v+a)) ) < 1,

because (1+v)(v+a)-v(1+a)=v^2+a>0. D2 equals O8. For D3,

    O8-D3 = 1+log((1+a+u)/((1+v)(1+u+a/v))) < 1,

because the denominator minus numerator is v+uv+a/v>0. Every point in the outer region also has 2R1+R2<=O1+O8; hence

    (O1+O8)-D4 = 1+log((1+a)/((1+v)(1+a/v))) < 1 < 3,

where the denominator minus numerator is v+a/v>0. Finally,

    O9-D5 = 1
       +log((1+u+a/(1+v))/(1+u+a/v))
       +log(1+b/(1+u)) < 2 < 3.

Here the first ratio is at most one since v>=1, and b<=u makes the last logarithm strictly less than one. These bounds cover the sum facets and the 2R1+R2 and R1+2R2 facets of (12).

### Mixed interference with v<1

Use rectangle (13). The R1 outer and inner bounds agree. For R2,

    O2-log(1+b/(1+v)) = log(1+bv/(1+v+b)) < log(1+v) < 1.

This completes the weak- and mixed-regime one-bit comparison under the average-error definition above. For positive shifted coordinates, (9)–(13) evaluate the compact seven-facet region, achieved by the base satellite code or one of the two cloud switches; the formulas are not asserted to be the projection of a single fixed split. When a coordinate clips to zero, use the corresponding single-user degenerate scheme. The result does not identify the weak/mixed capacity region exactly.

## Exact strong and very-strong regimes

When u>=b and v>=a, receiver 1 first runs its own decoder for M1. On the event that M1 is correct, it subtracts h11X1 and obtains h21X2+Z1. Since u>=b, it can attenuate this observation and add independent Gaussian noise to synthesize h22X2+Z2, then add back its known h12X1 waveform to reproduce receiver 2’s original observation and run receiver 2’s decoder for M2. The symmetric simulation works at receiver 2 because v>=a. Each receiver can therefore decode both messages with vanishing average error. Fano at each receiver and the Gaussian MAC entropy bound give the intersection of the two MAC regions. Their individual cross-link constraints are redundant under these inequalities, leaving the exact region

    R1 <= log(1+a),     R2 <= log(1+b),
    R1+R2 <= log(1+a+u),
    R1+R2 <= log(1+b+v).

Independent Gaussian MAC codebooks achieve this intersection; the same strict-power-slack and bad-codeword replacement argument used above enforces the per-codeword power convention in the closure. This is an exact strong-interference statement, not a one-bit approximation.

Under the stronger very-strong conditions u>=b(1+a) and v>=a(1+b), receiver 1 can decode user 2 while treating X1 as noise because u/(1+a)>=b, and receiver 2 can decode user 1 while treating X2 as noise because v/(1+b)>=a. For achievability, use independent iid Gaussian code ensembles: when decoding the other user, averaging over the independent Gaussian codebook/message of the local user gives iid Gaussian noise of variance N0 plus that local user's received power. The single-user Gaussian random-coding bound therefore supports each interferer at its own direct-channel rate. After subtracting the decoded codeword, each receiver decodes its intended message over the direct Gaussian channel. A union bound makes both error probabilities vanish; strict power slack and the earlier bad-codeword replacement enforce the per-codeword constraint in the closure. The exact capacity region is the rectangle R1<=log(1+a), R2<=log(1+b); the point-to-point converse and this successive-decoding construction match. All strong/very-strong assertions here use average error and fixed block length.
