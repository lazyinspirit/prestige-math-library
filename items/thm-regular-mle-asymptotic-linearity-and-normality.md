---
id: thm-regular-mle-asymptotic-linearity-and-normality
kind: theorem
title: Asymptotic linearity and normality of a regular MLE
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-dominated-statistical-experiment
  - def-parametric-statistical-model
  - def-qmd-path
  - def-op-and-little-op-stochastic-bounds
  - thm-vector-stochastic-order-calculus
  - thm-vector-slutsky
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-dominated-convergence
  - thm-chebyshev-markov-inequality-for-the-integral
  - lem-parametric-qmd-score-has-mean-zero
  - thm-multivariate-iid-central-limit-theorem
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 23, PDF p. 15"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator, Theorem 14 and QMD discussion"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
    - title: "John Duchi, Stats 300B Lecture 3, Winter 2018, complete scribe note, PDF pp. 5–6"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2018/lecture-03.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X_1,X_2,\ldots$ be iid with law
$P_{\theta_0}$ in a dominated parametric model
$\{P_\theta:\theta\in\Theta\}$, where $\Theta$ is open in $\mathbb R^d$,
$d\ge1$, and $\theta_0\in\Theta$. Let $p_\theta$ be densities with respect
to one supplied sigma-finite measure. Suppose the model is QMD at $\theta_0$
with score $s_{\theta_0}$ and positive-definite information
$I=\mathbb E_{\theta_0}[s_{\theta_0}s_{\theta_0}^T]$. Assume there are a
neighborhood $V$ of $\theta_0$ and a nonnegative measurable $L$ with
$\mathbb E_{\theta_0}L^2<\infty$ such that, on one $P_{\theta_0}$-full set,
$$
|\log p_{\theta_1}(x)-\log p_{\theta_2}(x)|\le L(x)\|\theta_1-\theta_2\| \qquad(\theta_1,\theta_2\in V).
$$
Suppose a measurable exact MLE $\hat\theta_n$ exists and is consistent, in
the sense that $P_{\theta_0}(\|\hat\theta_n-\theta_0\|>\varepsilon)\to0$
for every $\varepsilon>0$. Then
$$\sqrt n(\hat\theta_n-\theta_0)=I^{-1}\frac1{\sqrt n}\sum_{i=1}^n s_{\theta_0}(X_i)+o_{P_{\theta_0}}(1)\ \Rightarrow\ N_d(0,I^{-1}).$$
Under the same local hypotheses, every consistent measurable exact likelihood
maximizer over a possibly $n$-dependent subset that contains $\theta_0$ is
also root-$n$ bounded in probability.
The conclusion is asymptotic; it gives no exact finite-sample normal law.

## Facts & Assumptions

**Given:** The iid dominated model, QMD score and information, local envelope,
consistent measurable exact MLE, and Axiom of Choice in the statement.

[F1] [[def-parametric-statistical-model]]: a parametric model is the supplied map $\theta\mapsto P_\theta$ on an experiment.

[F2] [[def-dominated-statistical-experiment]]: domination means every $P_\theta$ is absolutely continuous with respect to one supplied sigma-finite measure.

[F3] [[def-qmd-path]]: QMD means the square-root densities have the stated $L^2(\mu)$ first-order expansion with score $s_{\theta_0}$.

[F4] [[def-op-and-little-op-stochastic-bounds]]: $o_P(1)$ is convergence in probability to zero, and $O_P(1)$ is boundedness in probability in finite-dimensional Euclidean norm.

[F5] [[thm-vector-stochastic-order-calculus]]: finite-dimensional convergence in distribution implies boundedness in probability; products of a vanishing factor and a bounded factor vanish in probability.

[F6] [[thm-vector-slutsky]]: if $Y_n-c=o_P(1)$ and $X_n\Rightarrow X$, then $(X_n,Y_n)\Rightarrow(X,c)$, with continuous maps preserving this limit.

[F7] [[thm-multivariate-iid-central-limit-theorem]]: under AC, iid finite-second-moment vectors satisfy the multivariate CLT, including singular covariance.

[F8] [[def-multivariate-normal-law]]: under AC, $N_d(m,\Sigma)$ exists for each finite-dimensional symmetric positive-semidefinite covariance $\Sigma$.

[F9] [[cor-cauchy-schwarz-inequality-for-l-two]]: for square-integrable $g,h$, $\mathbb E_0|gh|\le(\mathbb E_0g^2)^{1/2}(\mathbb E_0h^2)^{1/2}$.

[F10] [[thm-dominated-convergence]]: pointwise almost-everywhere convergence under an integrable dominating function permits passing limits through the integral.

[F11] [[thm-chebyshev-markov-inequality-for-the-integral]]: for measurable $Y\ge0$ and $a>0$, $P_0(Y\ge a)\le \mathbb E_0Y/a$.

[F12] [[lem-parametric-qmd-score-has-mean-zero]]: the score of a finite-dimensional parametric QMD model at an interior point has mean zero under that point's law.

[A1] [[def-axiom-of-choice]]: AC is assumed for the multivariate CLT and Gaussian-law suppliers [F7]–[F8].

[A2] The score and information are those in [F3]; $I$ is positive definite.

[A3] The local log-density envelope and consistency/MLE hypotheses are as in the Statement.

## Proof

1.1 Write $P_0=P_{\theta_0}$, $S_0=\{p_{\theta_0}>0\}$, and $r_t=\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}}- \tfrac12t^Ts_{\theta_0}\sqrt{p_{\theta_0}}$. By [F3], $\|r_t\|_{L^2(\mu)}=o(\|t\|)$, and [F12] gives $\mathbb E_0s_{\theta_0}=0$. On $S_0^c$ both $\sqrt{p_{\theta_0}}$ and $s_{\theta_0}\sqrt{p_{\theta_0}}$ vanish, so the probability mass $\alpha_t=\int_{S_0^c}p_{\theta_0+t}\,d\mu$ is $o(\|t\|^2)$. Expanding the QMD approximation in [F3] and applying [F9] to its cross term gives $\|\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}}\|_2^2= \tfrac14t^TIt+o(\|t\|^2)$. [A2, F1, F2, F3, F9, F12, algebra]

2.1 Normalize the absolutely continuous part on $S_0$ by $q_t=p_{\theta_0+t}\mathbf1_{S_0}/(1-\alpha_t)$, and put $a_t=\sqrt{q_t/p_{\theta_0}}-1$ on $S_0$. Since $\alpha_t=o(\|t\|^2)$, [F3] gives $a_t=\tfrac12t^Ts_{\theta_0}+o_{L^2(P_0)}(\|t\|)$, so $\mathbb E_0a_t^2=\tfrac14t^TIt+o(\|t\|^2)$ and $2\mathbb E_0a_t+\mathbb E_0a_t^2=0$ from $\mathbb E_0(1+a_t)^2=1$. The local envelope makes $f_t=\log(p_{\theta_0+t}/p_{\theta_0})$ square-integrable on $S_0$ and $\|f_t\|_2=O(\|t\|)$. Along every sequence $t\to0$ with $t/\|t\|\to u$, the $L^2$ convergence of $a_t/\|t\|$ has an almost-everywhere convergent subsequence. On it, $2\log(1+a_t)/\|t\|\to u^Ts_{\theta_0}$ pointwise. Since $|f_t|/\|t\|\le L$ and $s_{\theta_0}\in L^2(P_0)$, $|f_t/\|t\|-u^Ts_{\theta_0}|^2\le2L^2+2\|s_{\theta_0}\|^2$; dominated convergence [F10] gives convergence in $L^2$ along that subsequence. Every subsequence has such a subsubsequence, so convergence holds for the full sequence. Sequential compactness of the unit sphere therefore yields $f_t=t^Ts_{\theta_0}+o_{L^2(P_0)}(\|t\|)$. Moreover, the squares $a_t^2/\|t\|^2$ are uniformly integrable because $a_t/\|t\|$ converges in $L^2$ along every convergent direction. Taking the logarithm expansion in expectation requires a tail check. Fix $\varepsilon>0$. On $|a_t|\le\varepsilon$, the Taylor remainder $2\log(1+a_t)-2a_t+a_t^2$ is bounded by $\omega(\varepsilon)a_t^2$, where $\omega(\varepsilon)\to0$. Uniform integrability gives $\mathbb E_0[a_t^2\mathbf1_{|a_t|>\varepsilon}] =o(\|t\|^2)$ and therefore $P_0(|a_t|>\varepsilon)=o(\|t\|^2)$. On this tail, $|2\log(1+a_t)|\le |f_t|+|\log(1-\alpha_t)|$; its expectation is $o(\|t\|^2)$ by the envelope, Cauchy–Schwarz [F9], and the tail probability. The tail expectations of $|a_t|$ and $a_t^2$ are also $o(\|t\|^2)$ by [F9] and uniform integrability. Letting $\varepsilon\downarrow0$ proves that the expected Taylor remainder is $o(\|t\|^2)$. Taking expectations then gives $\mathbb E_0 f_t=2\mathbb E_0a_t-\mathbb E_0a_t^2+o(\|t\|^2) =-\tfrac12t^TIt+o(\|t\|^2);$ the normalization term $\log(1-\alpha_t)$ is $o(\|t\|^2)$. [A2, A3, F2, F3, F9, F10, step 1.1, algebra]

2.2 The squared Hellinger distance $H^2(P_{\theta_0+t},P_0)=\int(\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}})^2d\mu$ equals $\tfrac14t^TIt+o(\|t\|^2)$ by step 1.1. The affinity $\rho_t=\int\sqrt{p_{\theta_0+t}p_{\theta_0}}d\mu=1-H^2/2$. On $S_0$ let $Y=\sqrt{p_{\theta_0+t}/p_{\theta_0}}$, so $\mathbb E_0Y=\rho_t$. For $y>0$, $\log y\le\log\rho_t+(y-\rho_t)/\rho_t$ follows from $z-1-\log z\ge0$ for $z=y/\rho_t$, since this function has derivative $1-1/z$ and its minimum is $0$ at $z=1$; integrating gives $P_0f_t=2\mathbb E_0\log Y\le2\log\rho_t$. Since $\log(1-x)\le-x$ for $0\le x<1$ because $-x-\log(1-x)$ has derivative $x/(1-x)\ge0$ and value $0$ at $x=0$. Thus $2\log\rho_t\le-H^2$, so for some $c,\delta>0$, $P_0f_t\le-c\|t\|^2$ whenever $\|t\|\le\delta_0$. [step 1.1, algebra]

3.1 Let $\mathbb G_n f=\sqrt n(P_nf-P_0f)$ for the empirical measure $P_n$. The pointwise Lipschitz envelope gives $\|f_t-f_v\|_{L^2(P_0)}\le\|L\|_2\|t-v\|$. The sample and mean processes are continuous in $t$ on compact local balls, so their suprema equal suprema over countable dense subsets and are measurable. To bound the local supremum, take an independent ghost sample $X'_1,\ldots,X'_n$. For each fixed original sample, the supremum of absolute values is convex in the ghost sample vector, so Jensen's inequality replaces $P_0f$ by $n^{-1}\sum_i f(X'_i)$ in the expected supremum. Swapping each pair $(X_i,X'_i)$ with an independent sign and then using the triangle inequality bounds that supremum by twice the expected conditional Rademacher supremum. Condition on the observations for the latter. For the conditional Rademacher process $R_n(f)=n^{-1/2}\sum_i\epsilon_i f(X_i)$, Hoeffding's exponential bound $\mathbb E_\epsilon e^{\lambda(R_n(f)-R_n(g))}= \prod_i\cosh(\lambda(f-g)(X_i)/\sqrt n)\le \exp\{\lambda^2P_n(f-g)^2/2\}$, since $\log\cosh u\le u^2/2$ (integrate $\tanh u\le u$ for $u\ge0$ and use evenness), makes each increment sub-Gaussian with variance proxy $P_n(f-g)^2\le P_nL^2\|t-v\|^2$. Choose successively finer dyadic Euclidean nets of the radius-$r$ parameter ball. At level $k$ the net has at most $(C2^k)^d$ points, each increment from its level-$(k-1)$ parent has scale at most $Cr2^{-k}(P_nL^2)^{1/2}$, and the expected maximum of $N$ centered sub-Gaussian variables of scale $\sigma$ is at most $\sigma\sqrt{2\log(2N)}$, by the exponential-moment bound and optimizing $\lambda$. Summing the resulting bounds uses the convergent series $\sum_{k\ge1}2^{-k}\sqrt{k}$ and gives $\mathbb E_\epsilon\sup_{\|t\|\le r}|R_n(f_t-f_0)|\le C_dr(P_nL^2)^{1/2}$. Symmetrization and $\mathbb E(P_nL^2)^{1/2}\le(P_0L^2)^{1/2}$ therefore give $\mathbb E\sup_{\|t\|\le r}|\mathbb G_n(f_t-f_0)|\le C_d r\|L\|_2.$ For $r_t=f_t-t^Ts_{\theta_0}$, step 2.1 gives $\sup_{\|t\|\le M/\sqrt n}P_0r_t^2=o(n^{-1})$, and increments have the square-integrable pointwise envelope $L+\|s_{\theta_0}\|$. Fix a mesh $\varepsilon>0$ and cover the bounded $h$-ball by finitely many mesh-$\varepsilon$ points. At each center $h_j$, the variance of $\sqrt n\mathbb G_nr_{h_j/\sqrt n}$ is $n\operatorname{Var}_0(r_{h_j/\sqrt n})\le nP_0r_{h_j/\sqrt n}^2=o(1)$, so Chebyshev and finiteness of the net make the maximum over centers $o_P(1)$. For increments within cells, form $g_h=r_{h/\sqrt n}-r_{h_j/\sqrt n}$, where $h_j$ is the center of the cell containing $h$. Each $g_h$ is pointwise bounded by $\varepsilon(L+\|s_{\theta_0}\|)/\sqrt n$. Apply conditional Rademacher chaining to the union of cell classes: at dyadic level $k$ there are at most $C_M\varepsilon^{-d}2^{kd}$ links, each with conditional scale at most $C\varepsilon2^{-k}(P_n(L+\|s_{\theta_0}\|)^2)^{1/2}$ after the $\sqrt n$ normalization. The exponential maximum bound and summation of $\sum_{k\ge0}2^{-k}\sqrt{\log(C_M\varepsilon^{-d})+C_dk}$ give an expected supremum at most $C_M\varepsilon\sqrt{\log(C_M/\varepsilon)}$ after symmetrization and $\mathbb E(P_n(L+\|s_{\theta_0}\|)^2)^{1/2}\le \|L+\|s_{\theta_0}\|\|_2$. Markov's inequality then shows that these cell increments vanish in probability as $\varepsilon\downarrow0$. Letting $n\to\infty$ and then $\varepsilon\downarrow0$ proves $\sup_{\|h\|\le M}|\sqrt n\mathbb G_nr_{h/\sqrt n}|=o_P(1)$. Thus, for each fixed $M$, uniformly over $\|h\|\le M$, $$\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)=h^T\Delta_n-\tfrac12h^TIh+o_{P_0}(1),\qquad\Delta_n=n^{-1/2}\sum_{i=1}^ns_{\theta_0}(X_i).$$ The expectation term is step 2.1; the centered term follows by writing $f_t=t^Ts_{\theta_0}+(f_t-t^Ts_{\theta_0})$ and using the two net bounds. [A3, F3, F4, step 2.1, construct]

4.1 Reduce $\delta_0$ if needed so the log envelope holds on the radius $2\delta_0$ ball, and put $\delta=\delta_0/2$. Consistency makes $\hat\theta_n$ lie within $\delta$ of $\theta_0$ with probability tending to one. On the dyadic shells $r_j\le\|t\|\le2r_j$ with $r_j=2^jM/\sqrt n$, exact maximization and $\ell_n(\hat\theta_n)\ge\ell_n(\theta_0)$ require $\sqrt n\sup_{\|t\|\le2r_j}|\mathbb G_nf_t|\ge c n r_j^2$. The expectation bound in step 3.1 and Markov's inequality [F11] bound the probability of this event by $C/(\sqrt n r_j)=C/(2^jM)$. Summing the geometric series and then letting $M\to\infty$ proves $\sqrt n(\hat\theta_n-\theta_0)=O_{P_0}(1)$ using [F4]. The argument used only consistency, feasibility of $\theta_0$, and the maximizing inequality; it therefore proves the same bound for any exact maximizer over a subset containing $\theta_0$. [A3, F4, F11, step 3.1, step 2.2, algebra]

5.1 Put $\hat h_n=\sqrt n(\hat\theta_n-\theta_0)$ and $h_n^*=I^{-1}\Delta_n$. The multivariate CLT [F7] and [F5] make $h_n^*=O_{P_0}(1)$; step 4.1 makes $\hat h_n=O_{P_0}(1)$. For $Q_n(h)=h^T\Delta_n-\tfrac12h^TIh$, $Q_n(h_n^*)-Q_n(h)=\tfrac12(h-h_n^*)^TI(h-h_n^*) \ge\tfrac12\lambda_{\min}(I)\|h-h_n^*\|^2.$ Uniform convergence on bounded balls in step 3.1, feasibility of bounded local $h$ because $\theta_0$ is interior, and exact MLE maximization therefore force $\hat h_n-h_n^*=o_{P_0}(1)$. [A3, F4, F5, F7, step 3.1, step 4.1, algebra]

6.1 The CLT [F7] gives $\Delta_n\Rightarrow N_d(0,I)$; the limiting law exists by [F8]. Since $I$ is invertible, $h_n^*=I^{-1}\Delta_n\Rightarrow N_d(0,I^{-1})$ by the continuous linear map. Combining this with step 5.1 by [F6] proves both the asymptotic linear representation and the stated normal limit. AC is used only through [F7]–[F8]. [A1, A2, F4, F6, F7, F8, step 5.1] ∎
