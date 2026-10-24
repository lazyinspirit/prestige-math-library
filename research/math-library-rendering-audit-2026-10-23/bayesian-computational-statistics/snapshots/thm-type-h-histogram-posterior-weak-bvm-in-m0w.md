---
dependency_level: 4
id: thm-type-h-histogram-posterior-weak-bvm-in-m0w
kind: theorem
title: Type-H histogram posterior weak Bernstein–von Mises theorem
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-multiscale-coefficient-space-m0w
  - def-type-s-and-h-multiscale-density-priors
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - lem-density-gaussian-bridge-is-borel-on-m0w
  - lem-finite-dirichlet-gamma-representation-and-bernstein-bound
  - lem-m0w-finite-projection-and-tail-bvm-criterion
  - lem-type-s-h-prior-draws-are-l2-densities
  - lem-uniqueness-of-a-multivariate-exponential-transform
  - thm-bayes-formula-for-dominated-kernels
  - thm-dirichlet-multinomial-conjugate-update
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - thm-vector-slutsky
proof_strategy: direct
axiom_use: Full AC covers finite Gamma constructions, Gaussian bridge existence, exponential-transform uniqueness, and finite-dimensional Prokhorov compactness.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorem 3 and §5.4, printed pp.24–28
      url: https://arxiv.org/pdf/1310.2484
    - title: Castillo, On Bayesian supremum norm contraction rates, §4.4, printed pp.25–28
      url: https://arxiv.org/pdf/1304.1761
---

## Statement

Assume AC. Use the type-H prior of [[def-type-s-and-h-multiscale-density-priors]], retaining its original conditions: $1/2<\alpha\le1$, $f_0\in C^\alpha([0,1])$, $0<\rho_0\le f_0\le D_0<\infty$, either original cutoff $L_n=j_n$ or $L_n=\ell_n$, and $c_1 2^{-L_na}\le a_{k,L_n}\le c_2$ for fixed positive $a,c_1,c_2$. Write $m_n=2^{L_n}$. In the Haar convention, the scaling function is $1$, the detail functions are
$$\psi_{lk}=2^{l/2}(\mathbf1_{I_{l+1,2k}}-\mathbf1_{I_{l+1,2k+1}}),\qquad l\ge0,\quad 0\le k<2^l,$$
and a histogram at resolution $L_n$ has only the scaling coordinate and levels $l<L_n$. Let $X_1,\ldots,X_n$ be IID from $f_0$, let $N_{nk}=\sum_i\mathbf1_{I_{L_n,k}}(X_i)$, and define the empirical histogram
$$h_n(x)=m_n N_{nk}/n\quad\text{on }I_{L_n,k}.$$
Let $\Pi_n(\cdot\mid X^n)$ be the density posterior for the stated histogram prior. For every nondecreasing $w_l\ge1$ with $w_l/\sqrt{l+1}\to\infty$, its conditional law $Q_n$ of $\sqrt n(f-h_n)$ satisfies
$$\beta_{BL,M_0(w)}(Q_n,\mathcal L(G_{P_0}))\longrightarrow0$$
in $P_0^n$-probability, where the Borel centered Gaussian bridge $G_{P_0}$ is supplied by [[lem-density-gaussian-bridge-is-borel-on-m0w]] and has covariance $P_0[(\psi-P_0\psi)(\psi'-P_0\psi')]$. Its scaling coordinate is zero. This proves the type-H source-specific posterior BvM with the empirical projection center; no additional contraction, bias, or Dirichlet-parameter condition is imposed.

## Facts & Assumptions

**Given:** AC, the original type-H truth, cutoff, parameter, Haar, observation, and admissible-weight conditions in the Statement.

[F1] [[lem-finite-dirichlet-gamma-representation-and-bernstein-bound]]: a Dirichlet vector of shapes $\beta_k$ is $Z_k/S$ for independent Gamma$(\beta_k,1)$ variables; $S$ has mean and variance $B=\sum_k\beta_k$. For $T(q)=\sum_kq_k(Z_k-\beta_k)$, $|q_k|\le b$, and $V=\sum_k\beta_kq_k^2>0$, $\Pr(|T(q)|>x)\le2e^{-x^2/[2(V+bx)]}$. Disjoint Gamma shapes add, and $\mathbb E e^{uZ_k}=(1-u)^{-\beta_k}$ for $u<1$.

[F2] [[thm-dirichlet-multinomial-conjugate-update]] and [[thm-bayes-formula-for-dominated-kernels]] identify the positive finite normalized Dirichlet likelihood update.

[F3] [[lem-density-gaussian-bridge-is-borel-on-m0w]] supplies the Borel Gaussian bridge law for the bounded density in the Statement.

[F4] [[lem-m0w-finite-projection-and-tail-bvm-criterion]] concludes BL convergence from every fixed finite-coordinate BL limit and vanishing posterior tails in the iterated limit.

[F5] [[thm-prokhorov-tightness-theorem-on-polish-spaces]] gives subsequential weak compactness of tight finite-dimensional Borel laws under AC; [[lem-uniqueness-of-a-multivariate-exponential-transform]] identifies finite laws with a common moment-generating transform near zero.

[F6] [[thm-vector-slutsky]] passes a finite-dimensional weak limit through algebraic operations with quantities converging in probability to constants. [[lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces]] converts finite-dimensional weak convergence to BL convergence.

[F7] [[cor-markov-inequality-for-random-variables]] and [[thm-finite-and-countable-subadditivity-of-measures]] give moment, exponential, and union bounds.

[F8] [[lem-type-s-h-prior-draws-are-l2-densities]] supplies the finite histogram density construction. [[def-multiscale-coefficient-space-m0w]] supplies the coefficient norm and admissibility convention, with the finite scaling coordinate included.

## Proof

**Given:** All hypotheses in the Statement, with full AC throughout.

1.1 Abbreviate $m=m_n$, $a_k=a_{k,L_n}$, $A=\sum_ka_k$, $\beta_k=N_{nk}+a_k$, and $B=n+A$. The original cutoff conditions and $\alpha>1/2$ give $m/\sqrt n\to0$ and $m\log n/n\to0$, and $A\le c_2m$. On the positive simplex, the full-data histogram likelihood is $m^n\prod_k\omega_k^{N_{nk}}$. Multiplication by the prior density yields a constant times $\prod_k\omega_k^{\beta_k-1}$, with every shape positive; its normalization is finite positive by [F2]. Therefore the full-data posterior is Dirichlet$(\beta_k)_k$, regardless of whether the actual sampling truth is itself a histogram. By [F1] realize it by $\omega_k=Z_k/S$. Write $R_n$ for the posterior mean histogram measure, identified with its density in coefficient differences, with cell masses $\beta_k/B$. For a cell-constant function $q$, set $T(q)=\sum_kq_k(Z_k-\beta_k)$. Direct subtraction gives $\sqrt n(\omega q-R_nq)=(\sqrt n/S)T(q-R_nq)$. [F1, F2, given, algebra]

2.1 Fix constants $t>0$ and $C$ large enough that $c:=tC-D_0(e^t-1)>0$. Since $N_{nk}$ is Binomial$(n,p_k)$ with $p_k=P_0I_{L_n,k}\le D_0/m$, independence of the observations gives $\mathbb E e^{tN_{nk}}=(1+p_k(e^t-1))^n\le e^{nD_0(e^t-1)/m}$. Hence $E_n=\{\max_kN_{nk}\le Cn/m\}$ satisfies $P_0^n(E_n^c)\le m e^{-cn/m}\to0$, by exponential Markov and the union bound. On $E_n$, for all sufficiently large $n$, $\beta_k\le C'n/m$, $B\le2n$, and both the empirical histogram density and the mean histogram density are bounded by a fixed constant $C'$ independent of $n$. [F7, step 1.1, algebra]

2.2 Fix finitely many Haar coordinates. Choose a fixed coarse dyadic partition of $r$ cells on which all their functions are constant. For large $n$ its cells are unions of level-$L_n$ cells. By [F1], the corresponding grouped Gamma variables $Z_{nj}$ are independent Gamma$(b_{nj},1)$ with $b_{nj}=N_n(J_j)+\sum_{I_{L_n,k}\subset J_j}a_k$. Their summed shape is still $B$. Write $p_j=P_0(J_j)>0$. Each coarse count satisfies $\mathbb E[N_n(J_j)/n]=p_j$ and variance at most $1/(4n)$, by observation independence. Markov applied to squared deviations, together with $A/n\to0$, proves $b_{nj}/n\to p_j$ in $P_0^n$-probability simultaneously for the fixed finite partition. [F1, F7, step 1.1, given, algebra]

3.1 On $E_n$, take any Haar detail $\psi=\psi_{lk}$ with $l<L_n$ and put $q=\psi-R_n\psi$. Then $|q|\le2\,2^{l/2}$ and $V=\sum_k\beta_kq_k^2=B\operatorname{Var}_{R_n}(\psi)\le B R_n\psi^2\le C'n$, using $\int\psi^2=1$ and the density bound. By [F1] and [F7], $\Pr(S<B/2\mid X^n)\le4/B$, because $\operatorname{Var}(S)=B$. On the complement, step 1.1 yields $|\sqrt n(\omega\psi-R_n\psi)|\le2|T(q)|/\sqrt n$. Thus, apart from the single event $\{S<B/2\}$, the conditional probability that this absolute coefficient exceeds $x$ is at most $2\exp\{-c_0x^2/(1+2^{l/2}x/\sqrt n)\}$ for a fixed $c_0>0$. The zero-variance case has no such failure event, by [F1]. [F1, F7, step 1.1, step 2.1, algebra, cases]

3.2 Consider any deterministic data sequence along which $b_{nj}/n\to p_j$ for every $j$. Under its conditional Gamma product laws put $Y_{nj}=(Z_{nj}-b_{nj})/\sqrt n$. For every fixed $t\in\mathbb R^r$, [F1] and the logarithm series give $\log\mathbb E e^{t\cdot Y_n}=\sum_j b_{nj}[-\log(1-t_j/\sqrt n)-t_j/\sqrt n]\to\tfrac12\sum_jp_jt_j^2$. The remainder is $O(n^{-3/2}\sum_jb_{nj}|t_j|^3)=O(n^{-1/2})$. The means of $Y_n$ are zero and their total second moments are $B/n=O(1)$, so their laws are tight by the squared-norm Markov bound and compactness of finite-dimensional closed balls. By [F5], any subsequence has a further weak limit. For any fixed $t$, the same expansion at $2t$ uniformly bounds $\mathbb E e^{2t\cdot Y_n}$; hence $e^{t\cdot Y_n}$ is uniformly integrable. Truncation of this continuous exponential therefore passes its expectation through each weakly convergent subsequence. The limit law has transform $\exp(\tfrac12\sum_jp_jt_j^2)$ and an exponential moment on a neighborhood of zero: $e^{\delta\sum_j|y_j|}\le\sum_{\epsilon\in\{-1,1\}^r}e^{\delta\epsilon\cdot y}$ and the corresponding transforms are finite. The independent centered normal vector with variances $p_j$ has this same transform, by completing the square in each normal density. Transform uniqueness [F5] identifies every subsequential limit, proving $Y_n\Rightarrow N_r(0,\operatorname{diag}(p))$. [F1, F5, F7, step 2.2, algebra]

4.1 Choose a fixed $K>0$ sufficiently large. Uniformly over $l<L_n$, $2^{l/2}K\sqrt{l+1}/\sqrt n\le K\sqrt{m(L_n+1)/n}\to0$. Summing the exponential bounds of step 3.1 over levels $J<l<L_n$ and their $2^l$ coefficients therefore gives, for all large $n$, $\Pi_n\{\max_{J<l<L_n,k}|\sqrt n(f-R_n)_{lk}|/\sqrt{l+1}>K\mid X^n\}\le4/B+\sum_{l>J}2^{l+1}e^{-c_1K^2(l+1)}$ on $E_n$, with fixed $c_1>0$. The probability $4/B$ is counted only once, since the same $S$ normalizes every coordinate. Choose $K$ with $c_1K^2>2\log2$; the displayed series tail then tends to zero with $J$. For any $\varepsilon>0$, admissibility gives $K\sqrt{l+1}\le\varepsilon w_l$ for all sufficiently large $l$. Both $f$ and $R_n$ are histograms, so all their detail coordinates at $l\ge L_n$ vanish. Consequently their conditional $M(w)$ tails vanish in the iterated limit of [F4], first $n\to\infty$, then $J\to\infty$, since $P_0^n(E_n^c)\to0$. [F4, F7, F8, step 2.1, step 3.1, algebra]

5.1 For a Haar detail $\psi=\psi_{lk}$, exact subtraction gives $\sqrt n(R_n\psi-P_n\psi)=\sqrt n[\sum_ka_k\psi_k-A P_n\psi]/B$. Haar cell values satisfy $m^{-1}\sum_k|\psi_k|=\int|\psi|=2^{-l/2}\le1$. Hence $|\sum_ka_k\psi_k|\le c_2m$, while on $E_n$, $|P_n\psi|\le C\int|\psi|\le C$. This bounds every such mean shift by $C''m/\sqrt n\to0$. The scaling-coordinate shift is exactly zero, and all coordinates at $l\ge L_n$ vanish for both centers. Since $w_l\ge1$, $\|\sqrt n(R_n-h_n)\|_{M(w)}\to0$ uniformly on $E_n$. In particular step 4.1 also supplies the required posterior tails about $h_n$. [F8, step 1.1, step 2.1, step 4.1, algebra]

6.1 Here $(S-B)/\sqrt n=\sum_jY_{nj}$, $S/n\to1$ in conditional probability by its variance $B/n^2\to0$ and mean $B/n\to1$. Exact algebra gives $\sqrt n(Z_{nj}/S-b_{nj}/B)=(n/S)[Y_{nj}-(b_{nj}/B)\sum_hY_{nh}]$. By [F6] and step 3.2, this vector converges to $(U_j-p_j\sum_hU_h)_j$, with $U_j$ independent $N(0,p_j)$. Its covariance is $\operatorname{diag}(p)-pp^T$. Applying the fixed linear map from coarse-cell masses to the chosen Haar coordinates yields covariance exactly $P_0[(\psi-P_0\psi)(\psi'-P_0\psi')]$. Step 5.1 removes the mean shift from $R_n$ to $h_n$ on $E_n$. Thus along every deterministic data sequence with the ratios in step 2.2 converging and $E_n$ eventually occurring, the finite-coordinate posterior converges weakly, hence in BL by [F6], to the corresponding projection of [F3]. [F3, F6, step 5.1, step 3.2, algebra]

7.1 The preceding deterministic-sequence conclusion implies the finite-coordinate BL convergence in $P_0^n$-probability. To see this without a simultaneous conditional null-set assertion, if that convergence failed, there would be $\varepsilon,\eta>0$ and infinitely many $n$ with probability at least $\eta$ that the distance exceeds $\varepsilon$. Along a subsequence, step 2.2 and $P_0^n(E_n^c)\to0$ make the probability of a ratio error above $1/q$ or $E_n^c$ smaller than $\eta/2$ at its $q$th chosen index. Thus at each such index there exists data with distance above $\varepsilon$, ratio error below $1/q$, and $E_n$ true. AC selects a deterministic sequence of those data, contradicting step 6.1. This proves the asserted convergence in probability for each fixed finite projection. [F6, step 2.1, step 2.2, step 6.1, given, choose, contradiction]

8.1 The posterior histogram construction [F8] and its finite-dimensional simplex kernel make $Q_n$ a data-indexed Borel probability on $M_0(w)$: each draw and $h_n$ has only finitely many Haar coefficients, and its map from simplex coordinates is continuous. The target is the Borel bridge law [F3]. Step 7.1 supplies every fixed finite-projection BL limit, and steps 4.1, 5.1 supply its posterior-tail condition. Apply [F4] to obtain the stated $M_0(w)$ BL convergence. Every original type-H assumption has been retained; in particular the lower parameter bound is compatible with, but is not needed beyond, positivity in this conjugate proof. [F3, F4, F8, step 4.1, step 5.1, step 7.1, algebra] ∎
