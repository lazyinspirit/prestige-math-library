---
id: thm-real-gaussian-interference-channel-within-one-bit
kind: theorem
title: The two-user Gaussian interference capacity region to within one bit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, thm-real-gaussian-strong-interference-capacity-region, lem-real-gaussian-han-kobayashi-inner-region, lem-gaussian-superposition-nonunique-han-kobayashi-region, lem-real-gaussian-interference-genie-outer-region, lem-scalar-gaussian-channel-mutual-information-power-bound]
aliases: []
proof_strategy: regimewise-inner-outer-comparison
axiom_use: AC is inherited through the Gaussian-law and information-theoretic suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit
      url: https://arxiv.org/pdf/cs/0702045
      locator: Theorems 5–6, equations (58), (61)–(74), printed pp.30–37.
---

## Statement

For the complex Gaussian interference channel of [[def-real-two-user-gaussian-interference-channel]], the Etkin–Tse–Wang Han–Kobayashi scheme is within one bit per user of capacity, in the coordinatewise sense that for every capacity pair $(R_1,R_2)$ there is an achievable pair $(R'_1,R'_2)$ with $R'_i\ge\max\{0,R_i-1\}$. The scheme uses Gaussian common/private splits with the following **nominal** power policy, permitting auxiliary removal and rate moving as in [[lem-gaussian-superposition-nonunique-han-kobayashi-region]]: in the weak regime each private signal's nominal received power at the unintended receiver is $\min\{1,\mathrm{INR}\}$; in the mixed regime the user causing strong interference uses only a common message and the other nominal private signal is at noise level or uses its entire power if its INR is below one. Auxiliary removal may replace a nominal split by the explicitly described one-common/one-unsplit-user construction. In the strong regime both messages may be decoded at both receivers using the exact region of [F1].

## Facts & Assumptions

**Given:** A complex Gaussian channel with nonnegative finite powers and the SNR/INR convention in [F2]; all logarithms in the proof are base two.

[A1] [[def-axiom-of-choice]]: AC is inherited through Gaussian input and information suppliers.

[F1] [[thm-real-gaussian-strong-interference-capacity-region]]: in the strong regime, the Gaussian MAC-intersection region is exact.

[F2] [[def-real-two-user-gaussian-interference-channel]]: $\mathrm{INR}_1$ is user 2's interference power at receiver 1 and $\mathrm{INR}_2$ is user 1's interference power at receiver 2.

[F3] [[lem-real-gaussian-han-kobayashi-inner-region]]: fixed Gaussian private/common powers achieve every feasible three-stream subset-decoding rate split, including singleton streams and closure.

[F4] [[lem-real-gaussian-interference-genie-outer-region]]: capacity obeys the displayed weak and mixed individual, sum, and weighted outer bounds.

[F5] [[lem-gaussian-superposition-nonunique-han-kobayashi-region]]: the seven Gaussian HK facets, with an explicit nine-facet elimination and auxiliary-removal construction, are achievable under the nominal split policy; its proof selects deterministic codebooks satisfying the average power constraints.

[F6] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: the scalar Gaussian converse bounds a remaining user's rate by its single-user power formula when the other input vanishes.

## Proof

1.1 First suppose both prescribed powers are positive; zero powers are handled separately below. Write $a=\mathrm{SNR}_1$, $b=\mathrm{SNR}_2$, $c=\mathrm{INR}_1$, $d=\mathrm{INR}_2$ and $L(x)=\log_2 x$. The weak regime is $c<b$, $d<a$, the mixed regimes have exactly one reversed comparison, and the strong regime is $c\ge b$, $d\ge a$. Positive powers make these comparisons equivalent to the gain comparisons in [F1]. In the strong regime [F1] supplies the exact region, so there is no loss. We treat one mixed regime and obtain the other by exchanging all user indices. [A1, F1, F2, given, cases]

2.1 In the weak regime set $k_c=\max(1,c)$, $k_d=\max(1,d)$, $q_1=\min(1,d)$, $q_2=\min(1,c)$, $t_1=a/k_d$, $t_2=b/k_c$, $N_1=1+q_2$, and $N_2=1+q_1$. These correspond to the nominal private powers $P_{1p}=P_1/k_d$ and $P_{2p}=P_2/k_c$, including zero cross gains without division by an INR. Let $A_i,D_i,E_i,G_i$ be [F5]'s quantities for this split. Then $1\le N_i\le2$, $t_1\ge a/(1+d)$, $t_2\ge b/(1+c)$, $(N_1+t_1)(1+d)\ge1+a$, and $(N_2+t_2)(1+c)\ge1+b$: for example $(1+d)/k_d\ge1$ and $N_1\ge1$. These elementary inequalities will compare all facets uniformly, including INR below one. Denote by $O_1,O_2,O_3$ the three weak outer sum right-hand sides in their displayed order and by $W_1,W_2$ the outer $2R_1+R_2$ and $R_1+2R_2$ right-hand sides. [F2, F4, F5, step 1.1, given, choose, algebra]

2.2 In the mixed regime $c\ge b$, $d<a$, take $q_2=0$, $t_2=0$, $N_1=1$, $q_1=\min(1,d)$, $N_2=1+q_1$, $t_1=a/\max(1,d)$. Thus user 2 is nominally all common, and the private user 1 signal has unintended received power $\min(1,d)$. The seven-facet quantities become $A_1=L(1+t_1)$, $D_1=L(1+a)$, $E_1=L(1+c+t_1)$, $G_1=L(1+c+a)$, $A_2=0$, $D_2=L(1+b/N_2)$, $E_2=L((1+d)/N_2)$, and $G_2=L((1+d+b)/N_2)$. Let $O=L(1+a)+L(1+b/(1+d))$ and $V=L(1+b+d)+L(1+c+a/(1+d))+L(1+b/(1+c))$, the mixed outer first sum and weighted right sides. The remaining sum bound is $G_1$. Since $(1+d)/\max(1,d)\ge1$, we have $(1+t_1)(1+d)\ge1+a$ and $(1+c+t_1)(1+d)\ge1+c+a$. [F2, F4, F5, step 1.1, given, choose, algebra]

2.3 It remains to justify clipping a coordinate at zero; a negative-coordinate polygon argument would not do this. If both capacity coordinates are at most one, use the zero code. Suppose $R_1\le1<R_2$ and write $B=L(1+b)$. The capacity individual bound gives $R_2\le B$, so it suffices to achieve $(0,\max(0,B-1))$ on the axis. Shut user 1 off. In a weak nominal split, if $c<1$ user 2 is entirely private and achieves $B$. If $c\ge1$, its desired private power is $b/c$ and its unintended private power is one. Its common layer can be decoded at the unintended receiver while treating its private layer as noise at any rate up to $C=L((1+c)/2)$. At its intended receiver the private rate bound is $A=L(1+b/c)$, the common bound is $H=L(1+b-b/c)$, and the total bound is $B$. The product identities $(1+b/c)(1+b-b/c)\ge1+b$ and $(1+b/c)(1+c)\ge1+b$ give $A+H\ge B$ and $A+C\ge B-1$. For a total rate $T\le\min(B,A+C)$, allocate private rate $\min(A,T)$ and common rate $\max(0,T-A)$; this common rate is at most both $C$ and $H$. Every intended MAC subset inequality and the unintended common decoding inequality therefore holds, with closure for equality, so [F3] achieves at least $\max(0,B-1)$ with this same nominal split. At $c=1$ the common power and $C$ are zero and the calculation still holds. [F2, F3, F4, step 1.1, given, construct, algebra, cases]

3.1 The complete weak facet comparison table is $\begin{array}{c|c|c}\text{inner right side}&\text{capacity upper bound}&\text{upper bound minus inner right side}\\D_1&L(1+a)&\le L N_1\le1\\D_2&L(1+b)&\le L N_2\le1\\A_1+G_2&O_1&\le L(N_1N_2)\le2\\A_2+G_1&O_2&\le L(N_1N_2)\le2\\E_1+E_2&O_3&\le L(N_1N_2)\le2\\A_1+G_1+E_2&W_1&\le L(N_1^2N_2)\le3\\A_2+G_2+E_1&W_2&\le L(N_2^2N_1)\le3\end{array}$. Here the first two comparisons follow from $D_1=L((N_1+a)/N_1)$ and its reflection. For $A_1+G_2$, cancel the common factor $1+d+b$ in the numerator and use $(N_1+t_1)(1+d)\ge1+a$; the denominator is $N_1N_2$. The reflected inequality proves the next row. For $E_1+E_2$, each of its numerator factors $1+c+t_1$ and $1+d+t_2$ dominates the corresponding outer factor by step 2.1. For the $W_1$ row cancel $1+a+c$ and compare the remaining inner factors $(N_1+t_1)(1+d+t_2)$ with the outer factors $((1+a)/(1+d))(1+d+b/(1+c))$, factor by factor using step 2.1; the denominator is $N_1^2N_2$. Reflection gives the final row. This verifies every entry of the table by multiplication of nonnegative factors. [F4, F5, step 2.1, given, algebra]

3.2 The full mixed comparison table is $\begin{array}{c|c|c}\text{inner right side}&\text{capacity upper bound}&\text{upper bound minus inner right side}\\D_1&L(1+a)&0\\D_2&L(1+b)&\le L N_2\le1\\A_1+G_2&O&\le L N_2\le1\\A_2+G_1&G_1&0\\E_1+E_2&G_1&\le L N_2\le1\\A_1+G_1+E_2&L(1+a)+G_1&\le L N_2\le1\\A_2+G_2+E_1&V&\le L N_2+L(1+b/(1+c))\le2\end{array}$. The third row follows by canceling $1+d+b$ and using $(1+t_1)(1+d)\ge1+a$. The fifth uses $(1+c+t_1)(1+d)\ge1+c+a$. The sixth uses the former inequality after canceling $G_1$; its capacity upper bound is the sum of the individual $R_1$ bound and the MAC sum bound, hence is a valid bound on $2R_1+R_2$. In the last row $G_2$ has the same output numerator as the first term of $V$, and $1+c+t_1\ge1+c+a/(1+d)$; the sole additional outer factor is $1+b/(1+c)\le2$ because $b\le c$. These calculations prove all rows, and each gap is no larger than its facet's sum of coefficients. They include $d<1$, $d=1$, $d=0$, $b=0$, and $c=b$ directly. Therefore for mixed capacity pairs with both coordinates at least one, $(R_1-1,R_2-1)$ obeys all seven achievable facets. Reflecting indices proves the other mixed regime. [F4, F5, step 2.2, given, algebra, cases]

4.1 If a weak-regime capacity pair has $R_1,R_2\ge1$, put $r_i=R_i-1$. Subtracting one in each coordinate reduces the linear functionals with coefficient pairs $(1,0)$, $(0,1)$, $(1,1)$, $(2,1)$, and $(1,2)$ by respectively $1,1,2,3,3$. The table therefore places $(r_1,r_2)$ in all seven facets of [F5], which is achievable with the nominal split and its authorized auxiliary-removal alternatives. There are no missing INR subcases: if $c<1$ then $q_2=c$ and user 2's common power is zero; if $d<1$ the reflected fact holds. The formulas remain exact, and facets made redundant by singleton streams do not need to be imposed anew. At $c=1$ or $d=1$ the formulas from the two sides coincide. If $c,d<1$, both common layers vanish and the seven-facet region reduces to the rectangle $r_1\le L(1+a/(1+c))$, $r_2\le L(1+b/(1+d))$; each individual gap is at most one. Thus the same calculation covers both sub-noise INRs, either one, and their zero and unit boundaries. [F3, F4, F5, step 2.1, step 3.1, given, algebra, cases]

5.1 For a mixed axis, the nominally all-common strongly interfering user has unintended link at least as strong as its intended link; with the other user shut off its entire intended single-user rate is decodable at both receivers. The other user's axis is covered by the calculation in step 2.3, including the entirely-private case when its INR is below one. Reflecting indices handles $R_2\le1<R_1$. Singleton layers and boundary rates follow from [F3]'s closure; the superposition and fallback regions use the explicit slack-power selection in [F5]. Thus for every weak, mixed, or strong capacity pair with positive prescribed powers there is an achievable pair whose coordinates are at least $\max(0,R_i-1)$. All changes of layer labels and powers in the non-axis seven-facet construction are exactly the permitted auxiliary removal of [F5], so the full coordinatewise claim and nominal power policy in the statement both hold. [F1, F2, F3, F4, F5, step 4.1, step 3.2, step 2.3, given, cases]

6.1 Finally let a prescribed power vanish. If $P_1=0$, the average nonnegative energy constraint forces user 1's codeword to vanish almost surely, so $R_1=0$ and $a=d=0$; the scalar individual converse gives $R_2\le L(1+b)$. If also $P_2=0$, both rates are zero. Otherwise, when $c\ge b$ the nominal all-common user 2 code achieves its exact single-user rate at both receivers, since $|h_{21}|^2P_2\ge|h_{22}|^2P_2$; there is no condition on user 1's gains to check because it sends no information. When $c<b$ the nominal private user 2 split achieves at least $\max(0,L(1+b)-1)$ by the direct axis construction of step 2.3. The case $P_2=0<P_1$ is reflected. All deterministic zero-power layers are omitted, and no argument divides by a gain or a zero power. This proves the asserted full-channel claim for nonnegative finite powers as well as the positive-power cases. [F2, F3, F4, F6, step 1.1, step 2.3, step 5.1, given, cases] ∎
