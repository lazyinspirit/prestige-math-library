---
id: cor-complex-interpolation-extensions-agree-on-intersections
kind: corollary
title: Compatible extensions from the finite simple core
deps: [lem-riesz-thorin-bound-on-the-finite-simple-core, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p,
  thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice, thm-dominated-convergence, lem-integer-part, prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-real-power-laws, thm-exponential-is-strictly-increasing, def-natural-logarithm, def-real-power]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Teschl Corollary 15.3 p.415 and sum-space discussion p.413; Laugesen Remark C.7(2)–(3) pp.169–170 and proof conclusion
        pp.172–173
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
  scraped: []
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice and the hypotheses and measure-space alternatives of [[lem-riesz-thorin-bound-on-the-finite-simple-core]]. For each $0\le\theta\le1$ its core operator extends uniquely to a bounded complex-linear map $T_\theta:L^{p_\theta}(\mu)\to L^{q_\theta}(\nu)$ with the interpolated bound for interior theta and the original bound at either endpoint. Every two extensions agree as measurable a.e. classes on their domain intersection. Thus $T_0f_0+T_1f_1$ defines a well-defined linear map on $L^{p_0}+L^{p_1}$, and each interpolated extension is its restriction.

## Facts & Assumptions

[F1] The core map has a finite interpolated norm bound and the given endpoint bounds [[lem-riesz-thorin-bound-on-the-finite-simple-core]].

[F2] Under countable choice every complex Lq is complete and norm convergence has an a.e.-convergent subsequence, including q=infinity [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].

[F3] Finite simple functions with finite-measure support are dense for finite input exponents on every measure space [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]].

[F4] Countable choices of approximants and representatives are permitted [[def-countable-choice]].

[F5] The quotient norms are homogeneous and satisfy the triangle inequality [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F6] Pointwise convergence under an integrable majorant gives convergence of the integrals of the nonnegative errors [[thm-dominated-convergence]].

[F7] The integer part uniquely specifies rounding to a mesh; positive values round down and negative values round up toward zero [[lem-integer-part]].

[F8] Integral monotonicity bounds the measures of positive level sets by finite moments [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F9] Products of positive bases and iterated real powers obey the exponent laws [[thm-real-power-laws]].

[F10] The real exponential is continuous and strictly increasing [[thm-exponential-is-strictly-increasing]].

[F11] For positive t, exp(log t)=t, so strict increase gives log t positive above one and negative below one [[def-natural-logarithm]].

[F12] Positive real powers are exp of the exponent times the logarithm; zero to a positive power is zero [[def-real-power]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix theta, put $p=p_\theta$ and $q=q_\theta$, and denote its finite core bound by K (the stated endpoint bound when theta is an endpoint). Density and countable choice give finite simple $s_n$ for $n\ge1$ with $\|s_n-f\|_p<1/n$ for any fixed $f\in L^p$. The bound $\|Ts_n-Ts_m\|_q\le K\|s_n-s_m\|_p$ makes $Ts_n$ Cauchy. Completeness, with its stated countable-choice hypothesis, gives a limit; define $T_\theta f$ to be that limit. [F1, F2, F3, F4]

1.2 To compare parameters a,b, fix a finite-valued measurable representative $f\in L^{p_a}\cap L^{p_b}$. For $n\ge1$, set $E_n=\{1/n\le|f|\le n\}$. This set has finite measure because $n^{-p_a}\mu(E_n)\le\int|f|^{p_a}$. On $E_n$, round each real and imaginary component toward zero to a multiple of $1/n^2$, and put $s_n=0$ elsewhere. The rounding has finitely many values because the components are bounded by n; its fibers are measurable intervals, and its support lies in $E_n$. Also $|s_n|\le|f|$. At a point with f nonzero, it eventually belongs to $E_n$ and the rounding error is at most $\sqrt2/n^2$; at a zero of f every $s_n$ is zero. Thus $s_n\to f$ pointwise and $|s_n-f|^{p_j}\le2^{p_j}|f|^{p_j}$ for j=a,b. Dominated convergence applied to these errors gives simultaneous convergence in both source norms. [F6, given, F7, F8, F9]

2.1 If $(t_n)_{n\ge1}$ is a second core approximation converging to f, $\|Ts_n-Tt_n\|_q\le K(\|s_n-f\|_p+\|t_n-f\|_p)\to0$, so the definition is independent of approximation. Approximate f and g separately; $\alpha s_n+\beta t_n$ approximates $\alpha f+\beta g$, and core linearity gives linearity of the limits. Norm continuity gives $\|T_\theta f\|_q\le K\|f\|_p$. Any bounded extension has the same limit on a dense core, proving uniqueness. This includes K=0. [F5, step 1.1]

3.1 By step 2.1, the one sequence $Ts_n$ converges in $L^{q_a}$ to $T_af$ and in $L^{q_b}$ to $T_bf$. The a.e.-subsequence theorem first gives a subsequence converging a.e. to a representative of $T_af$; apply it again to that subsequence in $L^{q_b}$ to get a further subsequence converging a.e. to $T_bf$. Choosing representatives and taking the countable union of their measurable null discrepancies makes the two pointwise limits comparable on one conull set. Uniqueness of complex pointwise limits gives $T_af=T_bf$ as classes. The supplier covers q=infinity as well. [F2, F4, step 2.1, step 1.2]

4.1 If $f_0+f_1=g_0+g_1$ with endpoint components, then $h=f_0-g_0=g_1-f_1$ lies in $L^{p_0}\cap L^{p_1}$. Agreement gives $T_0h=T_1h$, so $T_0f_0+T_1f_1=T_0g_0+T_1g_1$. Componentwise addition and scalar multiplication prove linearity of this sum map. [step 2.1, step 3.1]

5.1 If $p_0\le p_1$ and $f\in L^{p_\theta}$, split $u=f\mathbf1_{\{|f|>1\}}$, $v=f\mathbf1_{\{|f|\le1\}}$. For $t>0$, $t^s=\exp(s\log t)$; since exp is increasing and $\exp(0)=1$, $\log t$ has the sign of $t-1$. Thus powers increase with the exponent for $t>1$ and decrease for $0<t\le1$; at $t=0$ all positive powers are zero. On the first set $|f|^{p_0}\le|f|^{p_\theta}$, and on the second $|f|^{p_1}\le|f|^{p_\theta}$. Thus $u\in L^{p_0}\cap L^{p_\theta}$ and $v\in L^{p_1}\cap L^{p_\theta}$. Pairwise agreement and linearity give $T_\theta f=T_0u+T_1v$. If $p_1<p_0$, reverse the endpoint labels in this split. If they coincide, f is already in both endpoint spaces. This proves the restriction assertion for all theta, including the endpoints. [step 2.1, step 3.1, step 4.1, F10, F11, F12] ∎
