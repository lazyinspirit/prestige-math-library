---
id: thm-it-ozarow-awgn-mac-feedback-capacity-region
kind: theorem
title: Ozarow capacity region of the two-user real AWGN MAC with feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-two-user-real-awgn-mac-feedback-code, lem-it-finite-gaussian-mixture-entropy-bounds, lem-it-fano-for-finite-message-density-observations, lem-it-ozarow-feedback-sum-corner-achievable, lem-it-awgn-feedback-rate-splitting-achievable, thm-it-two-user-real-awgn-mac-capacity-region]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; feedback codes use finite private message sets, and codebooks are fixed from finite random ensembles.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, AWGN MAC with Feedback and Ozarow's capacity theorem
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Amos Lapidoth and Michèle Wigger, On the AWGN MAC with Imperfect Feedback, §III-A and Remark IV.15
      url: https://www.isiweb.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf
---

## Statement

For the real two-user AWGN MAC with perfect causal common output feedback, independent private messages, average joint error and expected average-power constraints of [[def-it-two-user-real-awgn-mac-feedback-code]], the capacity region in nats/use is
$$\bigcup_{0\le\rho\le1}\left\{(R_1,R_2)\in[0,\infty)^2:\ R_j\le\frac12\ln\!\left(1+\frac{P_j(1-\rho^2)}N\right),\quad R_1+R_2\le\frac12\ln\!\left(1+\frac{P_1+P_2+2\rho\sqrt{P_1P_2}}N\right)\right\}.$$
The parameter $\rho$ is induced by causal feedback; no preshared common randomness or common message is part of the model.

## Facts & Assumptions

**Given:** $P_1,P_2\ge0$, $N>0$, independent uniform messages, deterministic causal encoders with common noiseless output feedback, and expected average powers at most $P_j$.

[F1] [[def-it-two-user-real-awgn-mac-feedback-code]]: $X_{ji}$ depends only on $(M_j,Y^{i-1})$ and both users share the same past output.

[F2] [[lem-it-finite-gaussian-mixture-entropy-bounds]]: a Gaussian convolution has finite differential entropy; conditionally, $h(X+Z\mid S)\le\frac12\ln(2\pi e[N+\mathbb E\operatorname{Var}(X\mid S)])$ for unit-variance scalar noise after normalization.

[F3] [[lem-it-fano-for-finite-message-density-observations]]: a finite message estimated from a density observation with error $P_e$ satisfies $H(M\mid Y,S)\le\ln2+P_e\ln|\mathcal M|$.

[F4] [[lem-it-ozarow-feedback-sum-corner-achievable]]: the unique root $\rho_\star$ of the displayed product equation has its two individual-rate corner achievable by a linear causal Gaussian feedback code.

[F5] [[lem-it-awgn-feedback-rate-splitting-achievable]]: for each $0<\rho<\rho_\star$, the user-1-dominant sum-rate corner is achievable, and swapping users gives the other endpoint.

[F6] [[thm-it-two-user-real-awgn-mac-capacity-region]]: the no-feedback Gaussian MAC region has individual bounds $\frac12\ln(1+P_j/N)$ and sum bound $\frac12\ln(1+(P_1+P_2)/N)$.

## Proof

1.1 For the converse normalize $V_{ji}=X_{ji}/\sqrt N$ and write $Y_i$ for the invertibly rescaled output $Y_i^{\rm phys}/\sqrt N$; the normalized noise has variance one and $n^{-1}\sum_i\mathbb E V_{ji}^2\le s_j:=P_j/N$. This output scaling preserves the feedback histories and mutual informations. Put $v_{ji}=\operatorname{Var}(V_{ji})$, $c_i=\operatorname{Cov}(V_{1i},V_{2i})$, and bars for time averages. By [F1], given $(M_2,Y^{i-1})$ the value $V_{2i}$ is known. Fano [F3] applied to each individual message with the other as side information gives $nR_j\le I(M_j;Y^n\mid M_{3-j})+\ln2+P_enR_j$; applied to the message pair it gives $n(R_1+R_2)\le I(M_1,M_2;Y^n)+\ln2+P_en(R_1+R_2)$. [F1, F3, algebra]

2.1 If $v_{2i}>0$, the conditional mean minimizes mean-square error, so $$\mathbb E\operatorname{Var}(V_{1i}\mid M_2,Y^{i-1})\le\mathbb E\left[V_{1i}-\mathbb EV_{1i}-\frac{c_i}{v_{2i}}(V_{2i}-\mathbb EV_{2i})\right]^2=v_{1i}-\frac{c_i^2}{v_{2i}}.$$ The predictor is measurable from $(M_2,Y^{i-1})$ because $V_{2i}$ is. If $v_{2i}=0$, then $c_i=0$ and the bound is $v_{1i}$. Applying [F2] to the conditional Gaussian mixture of $Y_i$ and subtracting the fresh unit-noise entropy gives $$I(M_1;Y_i\mid M_2,Y^{i-1})\le C\!\left(v_{1i}-\frac{c_i^2}{v_{2i}}\right),\qquad C(t):=\tfrac12\ln(1+t).$$ Interchanging the users gives the corresponding second-user bound. [F1, F2, step 1.1, algebra]

3.1 Jensen's inequality for the concave function $C$ and Cauchy–Schwarz yield $$\frac1n\sum_iC\!\left(v_{1i}-\frac{c_i^2}{v_{2i}}\right)\le C\!\left(\bar v_1-\frac{\bar c^2}{\bar v_2}\right)$$ when $\bar v_2>0$, because $(\sum_i c_i)^2\le(\sum_i c_i^2/v_{2i})(\sum_i v_{2i})$. The zero-variance case uses $\bar c=0$ and the bound $C(\bar v_1)$. Similarly the other user is bounded by $C(\bar v_2-\bar c^2/\bar v_1)$. [F2, step 2.1, algebra, algebra]

4.1 For the sum, condition on $Y^{i-1}$. Given both messages and that history the current output is a unit Gaussian translate, so $$I(M_1,M_2;Y_i\mid Y^{i-1})=h(Y_i\mid Y^{i-1})-h(Z_i)\le C(v_{1i}+v_{2i}+2c_i).$$ Indeed [F2] bounds the conditional entropy by $\frac12\ln(2\pi e[1+\mathbb E\operatorname{Var}(V_{1i}+V_{2i}\mid Y^{i-1})])$, and the law of total variance makes the averaged conditional variance at most $\operatorname{Var}(V_{1i}+V_{2i})=v_{1i}+v_{2i}+2c_i$. Jensen across $i$ gives the bound $C(\bar v_1+\bar v_2+2\bar c)$. [F1, F2, step 1.1, step 3.1, algebra]

5.1 If $\bar v_1\bar v_2>0$, set $\rho_n=|\bar c|/\sqrt{\bar v_1\bar v_2}\in[0,1]$; otherwise set $\rho_n=0$. The individual right sides in step 3.1 are at most $C(s_j(1-\rho_n^2))$. Substituting these bounds in the exact Fano inequalities of step 1.1 gives $(1-P_e)R_j\le C(s_j)+\ln2/n$, so both rates are uniformly bounded for $P_e<1/2$ and all Fano remainders divided by $n$ vanish. The sum right side in step 4.1 is at most $C(s_1+s_2+2\rho_n\sqrt{s_1s_2})$: replacing negative $\bar c$ by its absolute value only enlarges it, and $\bar v_j\le s_j$. Along a subsequence $\rho_n$ converges in $[0,1]$; continuity gives the stated outer region. [F1, F3, step 1.1, step 3.1, step 4.1, choose, algebra]

6.1 If either power is zero, the displayed union reduces to the single-user interval for the positive-power user, or to the origin if both vanish; [F6] achieves it and step 1 proves the converse. Assume henceforth $P_1,P_2>0$. Write $a_j(\rho)=C(s_j(1-\rho^2))$ and $b(\rho)=C(s_1+s_2+2\rho\sqrt{s_1s_2})$. The sum-corner equality in [F4] has a unique root $\rho_\star$; $a_j$ decrease with $\rho$ and $b$ increases. At $\rho=0$, [F6] achieves the displayed no-feedback region. At $\rho=\rho_\star$, [F4] achieves the corner $(a_1,a_2)$. [F4, F6, step 5.1, algebra, cases]

7.1 Fix $0<\rho<\rho_\star$. Then $b(\rho)<a_1(\rho)+a_2(\rho)$, and $b(\rho)>a_j(\rho)$ because at $\rho=0$ the sum bound is strictly greater than either individual bound and it increases while each individual bound decreases. Thus both endpoints of the active sum-rate face are nonnegative: $(a_1(\rho),b(\rho)-a_1(\rho))$ and $(b(\rho)-a_2(\rho),a_2(\rho))$. By [F5] the first is achievable; interchanging user labels gives the second. The axis vertices $(a_1(\rho),0)$ and $(0,a_2(\rho))$ are achievable by single-user Gaussian codes, since each $a_j(\rho)\le C(s_j)$ and [F6] supplies those rates. [F5, F6, step 6.1, algebra]

8.1 A deterministic public schedule that allocates long subblocks to these four vertices and the origin achieves their convex hull: split each private message into independent submessages, use the corresponding code on each subblock, and let both senders ignore outputs from earlier subblocks when a new code starts. The block error is at most the sum of subblock errors and each average power is the weighted average of powers at most $P_j$. The convex hull is exactly the polygon cut out by the two individual bounds and the active sum bound. [F1, step 7.1, construct, algebra, algebra]

9.1 For $\rho>\rho_\star$, $a_j(\rho)\le a_j(\rho_\star)$ and $b(\rho)\ge b(\rho_\star)=a_1(\rho_\star)+a_2(\rho_\star)$. Thus the region at $\rho$ is a rectangle contained in the rectangle at $\rho_\star$ and adds no rates. Steps 6.1, 7.1 and 8.1 therefore achieve the full union in the Statement. Combining with the converse proves equality. [step 6.1, step 7.1, step 8.1, algebra, algebra] ∎

