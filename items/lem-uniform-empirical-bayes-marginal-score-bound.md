---
dependency_level: 1
id: lem-uniform-empirical-bayes-marginal-score-bound
kind: lemma
title: "Uniform marginal-score bounds by derivative integration"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-polished-tail-class-for-gaussian-sequence
  - def-axiom-of-choice
  - cor-cauchy-schwarz-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-mean-and-variance
proof_strategy: direct
axiom_use: "AC is inherited from the product Gaussian model; the estimates add no choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Szabó, van der Vaart and van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets (2015), Section 5 and Appendix A"
      url: "https://arxiv.org/pdf/1310.4489v5"
---

## Statement

Use the defined inverse Gaussian sequence procedure with fixed $p,C,L_0,N_0,\rho$ and $0<A=A_n\le\sqrt{\log n}/(4\sqrt{\log(\rho\vee e)})$ for all sufficiently large $n$. Write
$$r_\alpha=1+2\alpha+2p,\quad s_\alpha=1+2\alpha,\quad N_\alpha=n^{1/r_\alpha},\quad V_\alpha=N_\alpha\log N_\alpha,\quad f_\alpha(i)=\frac{n^2i^{s_\alpha}\log i}{(i^{r_\alpha}+n)^2},\quad S_\alpha=\sum_i f_\alpha(i)\theta_i^2,\quad h_\alpha=S_\alpha/V_\alpha.$$
The likelihood has a continuous derivative $M_n$ on $[0,A]$, with the derivative at zero interpreted from the right. Let $Q_n=M_n-E_\theta M_n$. Uniformly over $\theta\in\Theta_{\rm pt}(L_0,N_0,\rho)$,
$$E_\theta\sup_{0\le\alpha\le A}\frac{|Q_n(\alpha)|}{V_\alpha(1+h_\alpha)}\le\frac{K\{1+A L_0\rho^{1+2A}\log n\}}{\sqrt{N_A}}\longrightarrow0.$$
For all sufficiently large $n$, all $0\le a\le b\le A$, and every such truth,
$$h_a\le(4+36L_0\rho^{1+2b})\frac{N_b}{N_a}h_b.$$
For every $\theta\in\ell^2$, the expectation satisfies
$$\frac{E_\theta M_n(\alpha)}{V_\alpha}\ge\frac1{8C^4}-C^4h_\alpha,\qquad \frac{E_\theta M_n(\alpha)}{V_\alpha}\le3C^4-C^{-4}h_\alpha.$$
Finally, for arbitrary $\theta\in\ell^2$ and every deterministic interval $[0,c]\subseteq[0,A]$ on which $h_\alpha\le H$, where $H$ is fixed, one has
$$E_\theta\sup_{0\le\alpha\le c}\frac{|Q_n(\alpha)|}{V_\alpha}\le\frac{K_H(1+A\log n)}{\sqrt{N_A}}\longrightarrow0.$$
Constants do not depend on $n,A,\theta$. Fixed finite $A$ is allowed by the eventual cap.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and independent standard normal coordinates $Z_i$.

[F1] The procedure gives $X_i=\kappa_i\theta_i+n^{-1/2}Z_i$ and $C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$, with its full-probability endpoint/domain hypotheses. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]]

[F2] At every integer $m\ge N_0$, $\sum_{i\ge m}\theta_i^2\le L_0\sum_{i=m}^{\lfloor\rho m\rfloor}\theta_i^2$ for a polished-tail truth. [[def-polished-tail-class-for-gaussian-sequence]]

[F3] Cauchy–Schwarz gives $E|UV|\le(EU^2)^{1/2}(EV^2)^{1/2}$ for square-integrable real variables, and Tonelli interchanges nonnegative integrals on the probability space with counting measure or the finite parameter interval. [[cor-cauchy-schwarz-for-random-variables]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Each $Z_i$ has law $N(0,1)$ with even density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$, so $E Z_i=0$ and $E Z_i^2=1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-location-scale-mean-and-variance]]

## Proof

1.1 Uniformly for $\alpha\le A$, for all sufficiently large $n$ we have $\log N_\alpha\ge8$, $\lceil N_\alpha/\rho\rceil\ge N_0$, $\log N_\alpha\ge2\log\rho$ and $(1+\rho/N_\alpha)^{r_\alpha}\le2$. Indeed $N_A$ grows exponentially in $\sqrt{\log n}$ whereas $r_A=O(\sqrt{\log n})$. We henceforth impose these cutoffs. For $q\ge1$, $0\le k\le4$ and $\log N\ge8$, the bound $\log i/\log N\le\exp(q\log(i/N)/(2k))$ for $i>N$ and $k>0$ follows from $1+x\le e^x$ and $\log N\ge2k/q$. Summing the resulting powers and comparing a decreasing function with its integral gives $\sum_{i>N}i^{-1-q}(\log i)^k\le3N^{-q}(\log N)^k$; $k=0$ follows directly by integration. [given, algebra]

2.1 Temporarily suppress $\alpha$ from $r,s,N,V$. The positive deterministic noise series $D=\sum_i n^2\log i/(i^r+n)^2$ satisfies $V/8\le D\le3V$. For the lower bound retain $i\le\lfloor N\rfloor$, replace the denominator by $4n^2$, and use $\sum_{i\le\lfloor N\rfloor}\log i\ge N\log N/2$ for $N\ge e^8$, obtained by integrating $\log x$. For the upper bound the terms below $N$ total at most $V$. The remaining terms are bounded by $n^2\sum_{i>N}i^{-2r}\log i$, which is at most $V\{(2r-1)^{-1}+[(2r-1)^2\log N]^{-1}+N^{-1}\}<2V$, by integrating $x^{-2r}\log x$ and including its value at $N$. [step 1.1, algebra]

2.2 For a polished-tail truth put $m=\lceil N/\rho\rceil$, $B=\{m,\ldots,\lfloor\rho m\rfloor\}$ and $E_B=\sum_{i\in B}\theta_i^2$. On $B$ one has $N/\rho\le i\le N+\rho$, $\log i\ge\log N/2$ and $i^r+n\le3n$. Thus $S_\alpha\ge\rho^{-s}N^s(\log N)E_B/18$, and $\sum_{i>N}\theta_i^2\le L_0E_B$. For $i>N$, $f_\alpha(i)\log i\le n^2i^{-1-2\alpha-4p}(\log i)^2\le N^s(\log N)^2$, since the function on the right before evaluation at $N$ decreases beyond $N$. Below $N$, $\log i\le\log N$. Consequently $ \sum_i f_\alpha(i)(\log i)\theta_i^2\le(1+18L_0\rho^s)(\log N)S_\alpha. $ All these inequalities hold also when $S_\alpha=0$. [F2, step 1.1, algebra]

3.1 For every $i$, $f_\alpha(i)\le2N^s\log N$. Below $N$ use the denominator bound $n^2$; above $N$ write $i=Nx$ and $q=1+2\alpha+4p\ge1$, obtaining the upper bound $N^sx^{-q}(\log N+\log x)$, and use $x^{-q}\log x\le1/(eq)$. For $a\le b$ and $2\le i\le N_b$, $f_a(i)/f_b(i)=i^{-2(b-a)}[(i^{r_b}+n)/(i^{r_a}+n)]^2\le4$. Apply step 2.2 at $b$ to the energy above $N_b$, and the kernel supremum at $a$, to obtain $ S_a\le4S_b+36L_0\rho^{s_b}\frac{N_a^{s_a}\log N_a}{N_b^{s_b}\log N_b}S_b. $ Multiply by $V_b/V_a$. The identities $N_\alpha^{s_\alpha}=nN_\alpha^{-2p}$, $\log N_b/\log N_a\le1$ and $(N_b/N_a)^{2p}\le1$ give the stated comparison of $h_a,h_b$, without dividing by a possibly zero signal. [step 2.2, algebra]

3.2 Differentiation under the signal sum is valid by domination by a bounded multiplier of $\theta_i^2$, since its tail and each of its first derivatives are bounded by a constant times $i^{-1-4p}(\log i)^k$. It gives $S_\alpha'=2\sum_i f_\alpha(i)(\log i)(n-i^{r_\alpha})/(n+i^{r_\alpha})\theta_i^2$. Step 2.2 bounds its absolute value by $2(1+18L_0\rho^{s_\alpha})(\log N_\alpha)S_\alpha$. Moreover $V_\alpha'/V_\alpha=-2(1+\log N_\alpha)/r_\alpha$. Therefore $G_\alpha=V_\alpha+S_\alpha$ is positive and continuously differentiable, with $|G_\alpha'|/G_\alpha\le K L_0\rho^{1+2A}\log n$. [step 2.2, algebra]

3.3 Set $t_i=i^{1+2\alpha}\kappa_i^{-2}$ and $a_i=n^2t_i\log i/(t_i+n)^2$. Direct differentiation of finite likelihood sums, followed by centering, gives $ E_\theta M_n(\alpha)=\sum_i\frac{n^2\log i}{(t_i+n)^2}-\sum_i\frac{n^2i^{1+2\alpha}(\log i)\theta_i^2}{(t_i+n)^2},\qquad Q_n(\alpha)=-\sum_i a_i(\alpha)(X_i^2-E_\theta X_i^2). $ Ellipticity compares $t_i+n$ to $i^{r_\alpha}+n$ with factors $C^{\pm2}$. Thus step 2.1 proves both asserted expectation inequalities. By [F4], $EZ_i=0$ and $EZ_i^2=1$. Two integrations by parts using $\phi'(x)=-x\phi(x)$ give $EZ_i^4=3$; the boundary terms vanish because every polynomial times $\phi$ tends to zero at infinity. Hence $E|Z_i|^3\le(EZ_i^2)^{1/2}(EZ_i^4)^{1/2}<\infty$ by [F3]. The density $\phi$ is even, so the integrable odd moment satisfies $EZ_i^3=0$. Expanding $X_i^2-E_\theta X_i^2$ now gives $\operatorname{Var}(X_i^2)=2/n^2+4\kappa_i^2\theta_i^2/n$. Independence makes variances additive. Finally $a_i'=2(\log i)a_i(n-t_i)/(n+t_i)$, so $|a_i'|\le2(\log i)a_i$. [F1, F3, F4, step 2.1, algebra]

4.1 For $j=0,1$ the preceding identities give $ \operatorname{Var}_\theta Q_n^{(j)}(\alpha)\le K N_\alpha(\log N_\alpha)^{2+2j}(1+h_\alpha). $ Here are the series estimates in full. The noise contribution is bounded by $K\sum_i[n i^{r_\alpha}/(i^{r_\alpha}+n)^2]^2(\log i)^{2+2j}$. Below $N$ bound the bracket by one; above $N$ bound it by $ni^{-r}$ and use step 1.1 with $q=2r-1\ge1$. The result is $KN(\log N)^{2+2j}$. The signal contribution is bounded by $K\sum_i f_\alpha(i)\theta_i^2[n i^r(\log i)^{1+2j}/(i^r+n)^2]$. The bracket is at most $K(\log N)^{1+2j}$: below $N$ this is immediate, and above $N$ it follows from $x^{-r}(\log N+\log x)^{1+2j}\le K(\log N)^{1+2j}$ for $x=i/N\ge1$, $r\ge1$. The signal contribution is therefore at most $KS_\alpha(\log N)^{1+2j}=KN(\log N)^{2+2j}h_\alpha$. This calculation uses only $\theta\in\ell^2$, not polished tails. [step 1.1, step 3.3, algebra]

5.1 The random sums have common versions suitable for integration and suprema. On each fixed $[0,A]$, the variance-series tails for $Q_n,Q_n'$ tend to zero uniformly: coarse dominating summands are constants times $i^{-2-4p}(\log i)^4$ and $i^{-1-4p}(\log i)^4\theta_i^2$, both summable. For a finite centered tail $T$, the fundamental theorem of calculus and Cauchy–Schwarz give $E\sup|T|\le\sqrt{ET(0)^2}+\int_0^A\sqrt{ET'(u)^2}\,du$. Thus partial sums converge in expected uniform norm to a continuous $Q_n$. Their derivatives converge in $L^1(dP\,d\alpha)$, so the limit has absolutely continuous paths and the fundamental theorem passes to the limit. Deterministic expectation sums converge uniformly by the analogous kernel domination. Choose an almost surely uniformly convergent subsequence of score sums. On the procedure's full-probability domain, the finite likelihood sums converge at zero to its prescribed value. Integrating those finite scores and passing along this subsequence gives $\ell_n(\alpha)=\ell_n(0)+\int_0^\alpha M_n(u)\,du$ simultaneously on $[0,A]$. Its continuous integrand is therefore the asserted derivative, including the right endpoint derivative at zero. [F1, F3, step 3.3, step 4.1, algebra]

6.1 Put $R_\alpha=Q_n(\alpha)/G_\alpha$. By step 4.1, $E|R_\alpha|\le K/\sqrt{N_\alpha}$. The quotient rule, step 3.2 and Cauchy–Schwarz give $E|R_\alpha'|\le K L_0\rho^{1+2A}(\log n)/\sqrt{N_\alpha}$. The absolutely continuous version from step 5.1 satisfies $\sup_{[0,A]}|R|\le|R_0|+\int_0^A|R_\alpha'|\,d\alpha$. Taking expectations by Tonelli and using $N_\alpha\ge N_A$ proves the first bound. For arbitrary truths on an interval where $h\le H$, instead normalize by $V$ alone. Step 4.1 and $|V'/V|\le3\log n$ yield $E|Q/V|\le K_H/\sqrt{N_A}$ and $E|(Q/V)'|\le K_H\log n/\sqrt{N_A}$. The same integral inequality proves the final asserted bound, including $c=0$. [F3, step 3.2, step 4.1, step 5.1, algebra]

7.1 Write $\lambda=\log(\rho\vee e)\ge1$ and $t=\sqrt{\log n}$. At the maximal allowed $A$, $2A\log\rho\le t\sqrt\lambda/2$, whereas $\tfrac12\log N_A=t^2/[2(1+2A+2p)]\ge t\sqrt\lambda-O(1)$. Consequently $\rho^{2A}/\sqrt{N_A}\le K\exp(-t\sqrt\lambda/2)$, which dominates every polynomial in $\log n$. The first bound tends to zero; the arbitrary-truth bound is smaller apart from a fixed factor. For smaller $A$, the numerators only decrease and $N_A$ increases. This proves all uniform convergence assertions. [step 6.1, algebra] ∎
