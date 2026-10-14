---
id: lem-qmd-normalized-product-likelihood-expansion
kind: lemma
title: Normalized product likelihood expansion under QMD
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-qmd-path
  - def-likelihood-density
  - def-axiom-of-choice
  - lem-qmd-score-centered-and-finite-information
  - lem-qmd-singular-and-zero-overlap-masses
  - thm-khinchin-weak-law-for-iid-integrable-variables
  - def-identically-distributed-and-iid-random-variables
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-total-variation-distance-for-probability-laws
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
  - thm-l1-convergence-implies-uniform-integrability
  - cor-markov-inequality-for-random-variables
  - cor-taylor-lagrange-and-cauchy-remainders
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 9–11
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §2
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC and [[def-qmd-path]] at $\theta_0$ with score $s$ and information $I$.
Let $h_n\to h$ in $\mathbb R^d$, put $u_n=h_n/\sqrt n$, and write
$P_0=P_{\theta_0}$ and $P_{u_n}=P_{\theta_0+u_n}$. On
$S=\{p_{\theta_0}>0\}$ define, for all sufficiently large $n$,
$$q_n(x)=\frac{\mathbf1_S(x)p_{\theta_0+u_n}(x)} {(1-\alpha_n)p_{\theta_0}(x)},\qquad \alpha_n=P_{u_n}(S^c).$$
Then $q_n$ is a probability density relative to $P_0$. For IID
$X_1,\ldots,X_n\sim P_0$, let $L_n=\prod_{i=1}^nq_n(X_i)$ and
$\Delta_n=n^{-1/2}\sum_{i=1}^ns(X_i)$. Under $P_0^{\otimes n}$,
$$\log L_n=h_n^T\Delta_n-\tfrac12h^TIh+o_P(1),\qquad P_0^{\otimes n}(L_n=0)\to0.$$
Moreover, if $\bar P_n=q_nP_0$ is the normalized absolutely continuous
component of $P_{u_n}$ relative to $P_0$, then
$$\|P_{u_n}^{\otimes n}-\bar P_n^{\otimes n}\|_{\rm TV}\to0.$$
No full likelihood ratio for $P_{u_n}^{\otimes n}$ is asserted.

## Facts & Assumptions

**Given:** AC; a common sigma-finite dominator $\mu$, the QMD density versions at
$\theta_0$ and $\theta_0+u$, a square-integrable score $s$, and $h_n\to h$.

[A1] [[def-axiom-of-choice]]: AC supplies the simultaneous density versions
in [[def-likelihood-density]].

[L1] [[def-likelihood-density]]: Each selected $p_\theta$ is a measurable
nonnegative density with $P_\theta(A)=\int_Ap_\theta\,d\mu$.

[F1] [[def-qmd-path]]: With $p_0=p_{\theta_0}$,
$$\sqrt{p_{\theta_0+u}}-\sqrt{p_0}-\tfrac12(u^Ts)\sqrt{p_0}=r_u, \qquad \|r_u\|_{L^2(\mu)}=o(\|u\|_2).$$

[F2] [[lem-qmd-score-centered-and-finite-information]]: $E_0s=0$ and
$I=E_0[ss^T]$ is finite.

[F3] [[lem-qmd-singular-and-zero-overlap-masses]]: If
$\alpha(u)=P_{\theta_0+u}(p_0=0)$ and $\beta(u)=P_0(p_{\theta_0+u}=0)$,
then both are $o(\|u\|_2^2)$.

[F4] [[thm-khinchin-weak-law-for-iid-integrable-variables]]: For IID
integrable real variables $Z_i$, $n^{-1}\sum_{i=1}^nZ_i\to EZ_1$ in
probability.

[F5] [[def-identically-distributed-and-iid-random-variables]]: Under
$P_0^{\otimes n}$, the coordinate variables $X_i$ are IID with common law
$P_0$.

[F6] [[def-product-measure-on-sigma-finite-spaces]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]],
[[thm-measure-uniqueness-on-a-sigma-finite-pi-system]], and
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: Finite product laws
are determined by measurable rectangles, and nonnegative product integrals
can be iterated.

[F7] [[def-total-variation-distance-for-probability-laws]]: Total variation
is $\sup_A|P(A)-Q(A)|$ over measurable events.

[F8] [[thm-holder-inequality-for-integrals]],
[[thm-minkowski-inequality-for-integrals]], and
[[thm-cauchy-schwarz-and-the-euclidean-norm]]: Cauchy–Schwarz bounds the
Euclidean and $L^2$ inner products, and the $L^2$ norm satisfies the triangle
inequality.

[F9] [[thm-l1-convergence-implies-uniform-integrability]]: An $L^1$-convergent
sequence of nonnegative random variables is uniformly integrable.

[F10] [[cor-markov-inequality-for-random-variables]]: For a nonnegative
integrable variable $W$ and $a>0$, $P(W>a)\le EW/a$.

[F11] [[cor-taylor-lagrange-and-cauchy-remainders]]: A $C^3$ function with
bounded third derivative on an interval has a quadratic Taylor remainder
bounded by a constant times the cube of the increment.

## Proof

**Proof technique:** square-root expansion, a triangular-array logarithm
calculation, and a product-mixture bound.

1.1 Write $p_u=p_{\theta_0+u}$, $S=\{p_0>0\}$, and $\alpha(u)=\int_{S^c}p_u\,d\mu$. For small $u$, [F3] gives $\alpha(u)<1/2$. Define $q_u=\mathbf1_Sp_u/((1-\alpha(u))p_0)$ on $S$ and $q_u=0$ on $S^c$. It is nonnegative and measurable, and $\int q_u\,dP_0=(1-\alpha(u))^{-1}\int_Sp_u\,d\mu=1,$ so it is a probability density. At $u=0$, $\alpha(0)=0$ and $q_0=1$ $P_0$-almost surely, since $P_0(S^c)=\int_{S^c}p_0\,d\mu=0$. On $S$, $\sqrt{q_u}=(1-\alpha(u))^{-1/2} \left(1+\tfrac12u^Ts+\frac{r_u}{\sqrt{p_0}}\right).$ The residual term has $L^2(P_0)$ norm $\|r_u\mathbf1_S\|_{L^2(\mu)}=o(\|u\|_2)$. Also $|(1-\alpha)^{-1/2}-1| =\frac{\alpha}{\sqrt{1-\alpha}(1+\sqrt{1-\alpha})}=O(\alpha),$ and [F2], [F8] give $\|u^Ts\|_{L^2(P_0)}=O(\|u\|_2)$. Therefore $Y_u:=2(\sqrt{q_u}-1)=u^Ts+R_u, \qquad\|R_u\|_{L^2(P_0)}=o(\|u\|_2).$ This is the required square-root expansion. [A1, F1, F2, F3, F8, L1, given, algebra]

1.2 The product function $L_n=\prod_iq_{u_n}(X_i)$ is a density of $\bar P_n^{\otimes n}$ relative to $P_0^{\otimes n}$. For a measurable rectangle $A_1\times\cdots\times A_n$, Tonelli gives $\int_{A_1\times\cdots\times A_n}\prod_iq_{u_n}(x_i)\,dP_0^{\otimes n} =\prod_i\int_{A_i}q_{u_n}\,dP_0 =\prod_i\bar P_n(A_i).$ By [F6], agreement on rectangles identifies the product measures. Taking the whole space gives $E_{P_0^{\otimes n}}L_n=1$. [F5, F6, given, algebra]

2.1 Since $E_0q_u=1$, $E_0Y_u=-\tfrac14E_0Y_u^2.$ By step 1.1, [F2], and [F8], $E_0Y_u^2=u^TIu+o(\|u\|_2^2),\qquad E_0Y_u=-\tfrac14u^TIu+o(\|u\|_2^2).$ Indeed, the difference between $Y_u$ and $u^Ts$ has $L^2(P_0)$ norm $o(\|u\|_2)$, so Cauchy–Schwarz makes the difference of their squared norms $o(\|u\|_2^2)$. [F2, F8, step 1.1, given, algebra]

2.2 Apply [F4] to $Z_i=\|s(X_i)\|_2^2$, whose mean is finite by [F2]. Then $\frac1n\sum_{i=1}^n(h_n^Ts(X_i))^2\to h^TIh$ in probability: for fixed $h$ this is [F4] applied to $(h^Ts)^2$, and the difference for $h_n$ is bounded by $\|h_n-h\|_2\|h_n+h\|_2\frac1n\sum_{i=1}^n\|s(X_i)\|_2^2\to0.$ Step 1.1 and [F8] also give $\sum_{i=1}^nY_{u_n}(X_i)^2 -\frac1n\sum_{i=1}^n(h_n^Ts(X_i))^2\to0$ in probability, because its expected absolute value is at most $n\|R_{u_n}\|_2(\|Y_{u_n}\|_2+\|u_n^Ts\|_2) =o(n\|u_n\|_2^2)=o(1)$. Consequently $\sum_iY_{u_n}(X_i)^2\to h^TIh$. [F2, F4, F8, step 1.1, given, algebra]

2.3 Put $V_n=\sqrt nY_{u_n}(X_1)$. Step 1.1 implies $V_n-h_n^Ts(X_1)\to0$ in $L^2(P_0)$, so $V_n\to h^Ts(X_1)$ in $L^2$. By [F8], $V_n^2\to(h^Ts(X_1))^2$ in $L^1$; [F9] makes $(V_n^2)$ uniformly integrable. For every $\varepsilon>0$, [F10] and the union bound give $P_0^{\otimes n}\!\left(\max_{i\le n}|Y_{u_n}(X_i)|>\varepsilon\right) \le\varepsilon^{-2}E_0[V_n^2\mathbf1_{\{|V_n|>\varepsilon\sqrt n\}}] \to0.$ Also $P_0^{\otimes n}(L_n=0)\le n\beta(u_n)\to0$ by [F3] and the union bound. [F3, F8, F9, F10, step 1.1, given, algebra]

3.1 Let $R_{u_n}=Y_{u_n}-u_n^Ts$. Its centered IID sum has variance at most $nE_0R_{u_n}^2=o(n\|u_n\|_2^2)=o(1)$. By step 2.1, $nE_0R_{u_n}=nE_0Y_{u_n} =-\tfrac14h_n^TIh_n+o(1)\to-\tfrac14h^TIh.$ Markov's inequality [F10], applied to the square of the centered sum, gives $\sum_iY_{u_n}(X_i)=h_n^T\Delta_n-\tfrac14h^TIh+o_P(1).$ This is the required expansion of the sum. [F2, F5, F10, step 2.1, given, algebra]

4.1 On the event that every $q_{u_n}(X_i)>0$ and $\max_i|Y_{u_n}(X_i)|\le1$, Taylor's formula gives $\log q_{u_n}(X_i)=Y_{u_n}(X_i)-\tfrac14Y_{u_n}(X_i)^2 +O(|Y_{u_n}(X_i)|^3),$ with one constant valid for all $i,n$ by [F11], since the third derivative of $y\mapsto2\log(1+y/2)$ is bounded on $[-1,1]$. The total cubic remainder is bounded by a constant times $\max_i|Y_{u_n}(X_i)|\sum_iY_{u_n}(X_i)^2$, which tends to zero by the square-sum limit in step 2.2 and the maximum bound in step 2.3. Combining the sum expansion in step 3.1 with the square-sum limit gives $\log L_n=\sum_i\log q_{u_n}(X_i) =h_n^T\Delta_n-\tfrac12h^TIh+o_P(1).$ This is the normalized log-likelihood expansion. [F11, step 2.2, step 3.1, step 2.3, given]

5.1 The full one-observation law decomposes as $P_{u_n}=(1-\alpha_n)\bar P_n+\alpha_n S_n$, where $S_n$ is the normalized restriction of $P_{u_n}$ to $S^c$ when $\alpha_n>0$. In the product mixture, the probability that at least one coordinate is drawn from $S_n$ is at most $n\alpha_n$. Conditioning on the all-absolutely-continuous component shows, for every event, its probability under the full product differs from that under $\bar P_n^{\otimes n}$ by at most $n\alpha_n$. Since $n\alpha_n=o(n\|u_n\|_2^2)=o(1)$, [F7] proves the total-variation claim. If $\alpha_n=0$, the singular component is absent and the same bound is zero. [F3, F7, given, algebra] ∎

