---
id: lem-weighted-overlapping-block-moment-and-covariance-limits
kind: lemma
title: Weighted overlapping-block moment and covariance limits
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps: [cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, alg-moving-block-bootstrap, alg-tapered-block-bootstrap, cor-cauchy-schwarz-for-random-variables, cor-markov-inequality-for-random-variables, def-axiom-of-choice, def-l2-m-approximable-causal-bernoulli-shift, lem-bochner-integral-norm-inequality, lem-l2-basis-projections-converge-and-satisfy-parseval, lem-long-run-covariance-is-trace-class, lem-nuclear-series-characterizes-trace-norm, lem-taper-window-l2-normalization, thm-dominated-convergence, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Theorems 2.1–2.2 and Appendix"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Assume the Axiom of Choice. Let $(X_t)_{t\in\mathbb Z}$ be a centered $L^2$-$m$-approximable causal Bernoulli shift in $H=L^2([0,1];\mathbb R)$ under [[def-l2-m-approximable-causal-bernoulli-shift]], and suppose additionally that $m\delta_m\to0$. Put $\sigma=\|X_0\|_{L^2(H)}$, let $\Gamma$ be its long-run covariance operator, and put

$$K=\sigma^2+2\sigma\sum_{h\ge1}\delta_h.$$

For every integer $b\ge1$, let $c_{b,1},\ldots,c_{b,b}$ be deterministic real weights, uniformly bounded in absolute value by $A<\infty$. Define

$$Z_{j,b}=b^{-1/2}\sum_{\ell=1}^b c_{b,\ell}X_{j+\ell-1}.$$

Then $\{\|Z_{j,b}\|_H^2:j\in\mathbb Z,b\ge1\}$ is uniformly integrable, and for $0\le q\le b$,

$$E\left\|\sum_{\ell=1}^q c_{b,\ell}X_{j+\ell-1}\right\|_H^2\le A^2Kq.$$

If $P$ is any finite-rank orthogonal projection, $R=I-P$ and $\alpha_P=\|RX_0\|_{L^2(H)}$, then also

$$E\left\|\sum_{\ell=1}^q c_{b,\ell}RX_{j+\ell-1}\right\|_H^2\le A^2q\left(\alpha_P^2+2\alpha_P\sum_{h\ge1}\delta_h\right).$$

For $n\ge b$, set $N=n-b+1$ and $\bar Z_{n,b}=N^{-1}\sum_{j=1}^NZ_{j,b}$. Then

$$E\|\bar Z_{n,b}\|_H^2\le A^2Kb/N.$$

Suppose further that $b=b_n\to\infty$, $b_n/n\to0$, and the weights satisfy

$$b^{-1}\sum_{\ell=1}^bc_{b,\ell}^2=1,\qquad q_b(h):=b^{-1}\sum_{\ell=1}^{b-h}c_{b,\ell}c_{b,\ell+h}\longrightarrow1\quad\text{for every fixed }h\ge0.$$

The centered overlapping-block covariance then satisfies the stronger $L^1$ trace-norm limit

$$E\left\|N^{-1}\sum_{j=1}^N(Z_{j,b}-\bar Z_{n,b})\otimes(Z_{j,b}-\bar Z_{n,b})-\Gamma\right\|_1\longrightarrow0.$$

In particular it converges in probability in trace norm. Both the MBB weights $c_{b,\ell}=1$ and the actual TBB weights $c_{b,\ell}=a_bw((\ell-\tfrac12)/b)$ satisfy these weight hypotheses for all sufficiently large $b$. For any complete finite or countable orthonormal basis and its initial-coordinate projections $P_d$, the projection-tail coefficient $\alpha_{P_d}^2+2\alpha_{P_d}\sum_{h\ge1}\delta_h$ tends to zero as $d\to\infty$.

## Facts & Assumptions

**Given:** AC, the centered shift, the replacement errors and their additional rate, and deterministic uniformly bounded weights as in the Statement.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]] supplies stationary joint replacement processes, their independent replacement arrays, finite second moments, and centered $m$-dependent processes $X_{t,m}$. The long-run covariance is the absolutely trace-norm convergent lag series from [[lem-long-run-covariance-is-trace-class]].

[F2] [[def-l2-m-approximable-causal-bernoulli-shift]] gives centered jointly stationary differences $D_{t,m}=X_t-X_{t,m}$, with $\|D_{t,m}\|_{L^2(H)}=\delta_m$; replacement arrays at distinct time indices are independent of one another and of every original innovation. The individual difference lag bounds are proved locally in step 2.1.

[F3] The rank-one tensor satisfies $\|x\otimes y\|_1=\|x\|\|y\|$ by [[lem-nuclear-series-characterizes-trace-norm]]. Trace class is a Banach operator ideal by [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]. For a positive trace-class operator its trace is the sum of its nonnegative diagonal entries, by [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]. Expectations obey the Bochner norm inequality from [[lem-bochner-integral-norm-inequality]].

[F4] Cauchy–Schwarz and Markov's inequality hold by [[cor-cauchy-schwarz-for-random-variables]] and [[cor-markov-inequality-for-random-variables]]. Dominated convergence is [[thm-dominated-convergence]], and complete orthonormal basis projections converge in norm by [[lem-l2-basis-projections-converge-and-satisfy-parseval]]. Under AC a complete basis exists by applying [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]] to the compact self-adjoint covariance $\Gamma$.

[F5] The weights used by [[alg-moving-block-bootstrap]] are all one. The weights used by [[alg-tapered-block-bootstrap]] have the midpoint convention in the Statement, are symmetric and unimodal, and have squared sum $b$. By [[lem-taper-window-l2-normalization]], $a_b$ is defined and bounded for all sufficiently large $b$.

[A1] [[def-axiom-of-choice]] supplies the choice assumptions inherited through [F1]–[F3] and permits choosing a complete countable orthonormal basis of the separable Hilbert space $H$. No uncountable family of new random elements is selected.

## Proof

**Given:** The assumptions and notation in the Statement and Facts & Assumptions.

1.1 For $h\ge1$, $X_{h,h}$ is independent of $X_0$: its retained original innovation indices are $1,\ldots,h$, and its replacement array is independent of all inputs to $X_0$. Its mean is zero. Thus $E[X_0\otimes X_{h,h}]=0$ and $\|E[X_0\otimes X_h]\|_1\le\sigma\delta_h$ by [F3]–[F4]. For every finite real coefficient sequence $(u_t)$, expansion and $2|u_tu_{t+h}|\le u_t^2+u_{t+h}^2$ therefore give $E\|\sum_tu_tX_t\|^2\le K\sum_tu_t^2$. This proves the prefix bound. The same argument after applying $R=I-P$ gives $|E\langle RX_0,RX_h\rangle|\le\alpha_P\delta_h$, since $\|R\|\le1$ and projection preserves independence and centering. It proves the asserted projected prefix bound. Along complete basis projections, $\alpha_{P_d}\to0$ by norm convergence and dominated convergence, with dominating squared norm $\|X_0\|^2$. [F1, F3, F4, A1, given, algebra]

1.2 Minkowski's inequality in $L^2(H)$ and the finite-coefficient bound in step 1.1 give $\|N^{-1}\sum_{j=1}^NX_{j+\ell-1}\|_{L^2(H)}\le\sqrt{K/N}$ for each $\ell$. Hence $\|\bar Z_{n,b}\|_{L^2(H)}\le b^{-1/2}\sum_{\ell=1}^b|c_{b,\ell}|\sqrt{K/N}\le A\sqrt{Kb/N}$, as claimed. Minkowski here follows by expanding a finite squared norm and applying Cauchy–Schwarz to each cross term. [F4, step 1.1, algebra]

2.1 Put $D_{t,m}=X_t-X_{t,m}$. For $h\ge1$, $X_{h,h}$ is independent of $D_{0,m}$, so $|E\langle D_{0,m},X_h\rangle|\le\delta_m\delta_h$. If $h\ge m$, $X_{h,m}$ is independent of $D_{0,m}$, while for $1\le h<m$, Cauchy–Schwarz bounds $|E\langle D_{0,m},X_{h,m}\rangle|$ by $\delta_m\sigma$. Consequently the individual lag bounds are $|E\langle D_{0,m},D_{h,m}\rangle|\le\delta_m(\delta_h+\sigma)$ for $h<m$ and $\le\delta_m\delta_h$ for $h\ge m$. Negative-lag scalar covariances equal their positive counterparts by stationarity. Expanding any bounded-weight block and bounding each $|c_{b,\ell}c_{b,\ell+h}|$ by $A^2$ gives $\sup_{j,b}E\|b^{-1/2}\sum_{\ell=1}^bc_{b,\ell}D_{j+\ell-1,m}\|^2\le A^2\varepsilon_m^2$, where $\varepsilon_m^2=\delta_m^2+2\delta_m\sum_{h\ge1}\delta_h+2\sigma(m-1)\delta_m\to0$. The convergence uses precisely the assumed $m\delta_m\to0$ and summability. [F1, F2, F4, given, algebra]

2.2 Fix $m$. Write $Y_t=X_{t,m}$ and define $V_t=Y_t\mathbf1_{\{\|Y_t\|\le M\}}-E[Y_0\mathbf1_{\{\|Y_0\|\le M\}}]$. This is centered, stationary and $m$-dependent, with $\|V_t\|\le2M$. Put $\eta_{m,M}=\|Y_0-V_0\|_{L^2(H)}$. Since $EY_0=0$, $\eta_{m,M}\le2\|Y_0\mathbf1_{\{\|Y_0\|>M\}}\|_{L^2(H)}\to0$ by dominated convergence. The centered residual $Y-V$ is $m$-dependent, so its covariances vanish at distances greater than $m$ and all remaining scalar covariances have absolute value at most $\eta_{m,M}^2$. Hence its normalized weighted block has second moment at most $A^2(2m+1)\eta_{m,M}^2$. With $Z^V_{j,b}=b^{-1/2}\sum_{\ell=1}^bc_{b,\ell}V_{j+\ell-1}$, step 2.1 and Minkowski give $\sup_{j,b}\|Z_{j,b}-Z^V_{j,b}\|_{L^2(H)}\le d_{m,M}:=A\varepsilon_m+A\sqrt{2m+1}\eta_{m,M}$. Choose first $m$ and then $M$ to make this arbitrarily small. [F1, F4, step 2.1, construct, algebra]

3.1 For independent centered Hilbert elements $U_1,\ldots,U_q$ bounded by $L$, write $\|\sum_iU_i\|^2=\sum_i\|U_i\|^2+2\sum_{i<j}\langle U_i,U_j\rangle$. On squaring, every term containing an index exactly once has expectation zero, by integrating that independent centered element first. In particular all mixed terms between the two sums vanish; among products of two inner products only identical pairs survive. Cauchy–Schwarz then gives $E\|\sum_iU_i\|^4\le\sum_iE\|U_i\|^4+6\sum_{i<j}E\|U_i\|^2E\|U_j\|^2\le3q^2L^4$; the empty sum is zero. Partition the $b$ summands defining $\sqrt b Z^V_{j,b}$ into $p=m+1$ residue classes. Inside each class their input innovation sets are disjoint, hence they are jointly independent. Applying the proved bound to the class sizes $q_s$ and using $\|\sum_{s=1}^pu_s\|^4\le p^3\sum_s\|u_s\|^4$ and $\sum_sq_s^2\le b^2$ gives $\sup_{j,b}E\|Z^V_{j,b}\|^4\le3p^3A^4(2M)^4=:C_{m,M}$. Thus fourth moments are used only for bounded truncations. [F1, F4, step 2.2, algebra]

3.2 The rank-one identity and Cauchy–Schwarz imply both $\sup_{j,b}E|\|Z_{j,b}\|^2-\|Z^V_{j,b}\|^2|\le d_{m,M}(2A\sqrt K+d_{m,M})$ and $\sup_{j,b}E\|Z_{j,b}\otimes Z_{j,b}-Z^V_{j,b}\otimes Z^V_{j,b}\|_1\le d_{m,M}(2A\sqrt K+d_{m,M})$. Here use $\|Z_{j,b}\|_{L^2}\le A\sqrt K$ and $\|u\otimes u-v\otimes v\|_1\le\|u-v\|(\|u\|+\|v\|)$. The squared truncated blocks are uniformly integrable by step 3.1 and Markov's inequality. For nonnegative $F,G$, splitting at $G>L/2$ proves $E[F\mathbf1_{\{F>L\}}]\le2E|F-G|+E[G\mathbf1_{\{G>L/2\}}]$. Apply this with the two squared block norms, then let $L\to\infty$ and $d_{m,M}\to0$. This proves the asserted uniform integrability for $Z$. [F3, F4, step 1.1, step 2.2, step 3.1, algebra]

4.1 Fix $m,M$ and set $Q_n^V=N^{-1}\sum_{j=1}^NZ^V_{j,b}\otimes Z^V_{j,b}$ and $B_n=EQ_n^V$. For fixed unit vectors $e,f$, the real variables $\langle Z^V_{j,b},e\rangle\langle Z^V_{j,b},f\rangle$ have second moments at most $C_{m,M}$. When two starts differ by more than $b+m$, the blocks use disjoint original innovations and disjoint replacement arrays, so these variables are independent. Expanding the variance of their empirical mean therefore gives $E|\langle(Q_n^V-B_n)f,e\rangle|^2\le C_{m,M}(2(b+m)+1)/N\to0$, since $b/n\to0$. For any fixed finite-rank orthogonal projection $P$ of rank $d$, expansion in an orthonormal basis of its range and the rank-one norm bound show $\|P(Q_n^V-B_n)P\|_1\le\sum_{u,v\le d}|\langle(Q_n^V-B_n)e_v,e_u\rangle|$. Thus its expectation tends to zero. [F1, F3, F4, step 3.1, given, algebra]

4.2 Choose complete basis projections $P_d$ and put $R_d=I-P_d$. For any square-integrable $H$-valued $U$, the operator $T=E[U\otimes U]$ satisfies $\|T-PTP\|_1\le E\|RU\|^2+2\sqrt{E\|PU\|^2 E\|RU\|^2}$: expand its four $P,R$ corners, use the rank-one norm inequality on each off-diagonal corner, and use positivity for the $R$ corner. The same inequality holds for an empirical average, using its finite empirical expectation. For the $V$ blocks, finite dependence and covariance expansion give $E\|R_dZ^V_{j,b}\|^2\le A^2(2m+1)E\|R_dV_0\|^2=:t_d\to0$ by dominated convergence. Also $\sup_{j,b}E\|Z^V_{j,b}\|^2\le (A\sqrt K+d_{m,M})^2=:C$. Applying the corner inequality to $Q_n^V$ and $B_n$, and then Cauchy–Schwarz to expectations, yields $E\|Q_n^V-B_n\|_1\le E\|P_d(Q_n^V-B_n)P_d\|_1+2t_d+4\sqrt{Ct_d}$. Send $n\to\infty$ by step 4.1, then $d\to\infty$. This proves trace-norm concentration locally, without inferring trace-norm convergence from coordinate convergence alone. [F3, F4, A1, step 2.2, step 4.1, choose, algebra]

4.3 Define $Q_n=N^{-1}\sum_{j=1}^NZ_{j,b}\otimes Z_{j,b}$. By step 3.2, $E\|Q_n-Q_n^V\|_1$ and $\|EQ_n-B_n\|_1$ are each at most $d_{m,M}(2A\sqrt K+d_{m,M})$. The triangle inequality and step 4.2 therefore give $\limsup_n E\|Q_n-EQ_n\|_1\le2d_{m,M}(2A\sqrt K+d_{m,M})$. First send $M\to\infty$ for each fixed $m$, then send $m\to\infty$. It follows that $E\|Q_n-EQ_n\|_1\to0$. This concentration conclusion required only the uniform bound on weights. [F3, step 2.2, step 3.2, step 4.2, algebra]

5.1 Now impose the squared normalization and fixed-lag autocorrelation hypotheses. Extend each weight vector by zero. Cauchy–Schwarz gives $|q_b(h)|\le1$. With $C_h=E[X_0\otimes X_h]$, stationarity gives $EQ_n=C_0+\sum_{h=1}^{b-1}q_b(h)(C_h+C_h^*)$. The series is absolutely convergent in trace norm by step 1.1. On each finite set of lags $q_b(h)\to1$, and the remaining trace-norm tail is uniformly bounded by its summable covariance tail. Thus $EQ_n\to\Gamma$ in trace norm. Step 4.3 gives $E\|Q_n-\Gamma\|_1\to0$. The empirically centered covariance equals $Q_n-\bar Z_{n,b}\otimes\bar Z_{n,b}$, whose difference from $Q_n$ has expected trace norm $E\|\bar Z_{n,b}\|^2\le A^2Kb/N\to0$ by step 1.2. This proves the asserted $L^1$ limit and its probability consequence by Markov's inequality. [F1, F3, F4, step 1.1, step 1.2, step 4.3, given, algebra]

5.2 MBB has $q_b(h)=(1-h/b)_+$ and squared normalization exactly. For TBB the squared normalization is also exact and the coefficients are bounded eventually by [F5]. Extend its nonnegative unimodal coefficients by zero to all integers; the total variation is at most $2A$. Telescoping gives $\sum_{\ell\in\mathbb Z}|c_{b,\ell+h}-c_{b,\ell}|\le2Ah$, so $|q_b(h)-q_b(0)|\le2A^2h/b\to0$. This uses exactly the midpoint coefficients of the algorithm and requires no continuity of the taper. All proved limits and uniform-integrability conclusions apply after any finite initial set of block sizes is discarded. The moment and projection conclusions, covariance limit, and claimed specializations are now established. [F5, step 1.1, step 3.2, step 5.1, algebra] ∎
