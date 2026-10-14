---
id: prop-correct-scale-multivariate-trimming-slab-bound
kind: proposition
title: "Correct-scale slab bound for multivariate trimming"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps: [lem-variance-sensitive-bounded-empirical-process-concentration, thm-independent-process-symmetrization, thm-one-sided-coordinate-rademacher-contraction, thm-dominated-convergence, alg-multivariate-trimmed-mean, lem-multivariate-trimmed-mean-selector-total-and-measurable, thm-rational-points-and-boxes-in-rn, def-adversarial-sample-replacement, def-random-element-and-real-random-variable, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, lem-finite-covariance-matrix-basic-properties, lem-positive-real-has-dyadic-scale-in-factor-two, thm-independent-random-elements-have-product-joint-law, cor-markov-inequality-for-random-variables, thm-cauchy-schwarz-in-an-inner-product-space, def-natural-logarithm, def-real-exponential-function-and-e]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, Proposition 1, Lemma 1, Lemma 2 and proof"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 17–22; full tail-count, slab-center, and dyadic-nesting proof route."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; secondary description of the directional slab construction and adaptation."
---

## Statement

Let $X$ be an absolutely continuous random vector in $\mathbb R^d$ with mean $\mu$ and finite covariance matrix $\Sigma$ as defined in [[lem-finite-covariance-matrix-basic-properties]]. Let $X_1,\ldots,X_N,Y_1,\ldots,Y_N$ be $2N$ iid clean copies and let their observed replacement sample have at most $\lfloor2\eta N\rfloor$ changed coordinates in total. Assume $0\le\eta\le1/10$, $0<\delta<1$, $N\ge2560\log(2/\delta)$, and $\varepsilon=\max\{10\eta,2560\log(2/\delta)/N\}\le1$. If $\operatorname{tr}\Sigma>0$, put
$$
Q_0=\max\left\{\frac{256}{\varepsilon}\sqrt{\frac{\operatorname{tr}\Sigma}{N}},\ 16\sqrt{\frac{\lambda_{\max}(\Sigma)}{\varepsilon}}\right\}.
$$
For the slabs and tail intersections in [[alg-multivariate-trimmed-mean]], [[lem-positive-real-has-dyadic-scale-in-factor-two]] supplies an integer $i_0$ with $2^{i_0}\in[2Q_0,4Q_0)$. Then, with probability at least $1-\delta$, $K_{i_0}=\bigcap_{i\ge i_0}\Gamma(2^i)$ is nonempty and every $z\in K_{i_0}$ satisfies $\|z-\mu\|\le16\varepsilon Q_0$. The positive-trace condition is required to make $Q_0>0$.


## Facts & Assumptions

**Given:** The clean iid halves, replacement budget and parameter domain in the Statement, with positive covariance trace.

[F1] [[lem-variance-sensitive-bounded-empirical-process-concentration]]: for bounded $|f|\le B$ with $Pf^2\le s^2$, the centered supremum $Z$ satisfies $Z\le EZ+2\sqrt{(8EW+4Ns^2)x}+\sqrt8 Bx$ outside probability $e^{-x}$, where $W=\sup_f\sum_i f(X_i)^2$.

[F2] [[thm-independent-process-symmetrization]] and [[thm-one-sided-coordinate-rademacher-contraction]] supply ghost-sample symmetrization and coordinate contraction. In the proof below their one-sided forms are derived directly to keep the constants explicit.

[F3] [[lem-finite-covariance-matrix-basic-properties]] gives $E\|X-\mu\|^2=\operatorname{tr}\Sigma$ and $E\langle X-\mu,v\rangle^2\le\lambda_{\max}(\Sigma)$ for unit $v$. [[thm-cauchy-schwarz-in-an-inner-product-space]] and [[cor-markov-inequality-for-random-variables]] give the norm and tail bounds used below.

[F4] [[alg-multivariate-trimmed-mean]] defines the directional quantiles, clipped centers and slabs; [[def-adversarial-sample-replacement]] permits at most $2\eta N$ changes in either half, including sample-dependent choices.

[F5] [[thm-dominated-convergence]] passes bounded pointwise limits under integration. The iid finite product law is [[thm-independent-random-elements-have-product-joint-law]]; [[lem-positive-real-has-dyadic-scale-in-factor-two]] gives the stated dyadic index.

[F6] Since $\operatorname{tr}\Sigma>0$, $d\ge1$, and $\mathbb Q^d$ is countable and dense in $\mathbb R^d$ ([[thm-rational-points-and-boxes-in-rn]]); normalizing its nonzero elements gives a countable dense subset of $S^{d-1}$ because normalization is continuous away from zero and every unit vector is nonzero.

## Proof

**Given:** The objects in the Statement. Write $r=\sqrt{\operatorname{tr}\Sigma/N}$, $\lambda=\lambda_{\max}(\Sigma)$ and $x=\varepsilon N/1280$.

1.1 Put $D=\{q/\|q\|_2:q\in\mathbb Q^d\setminus\{0\}\}$ and include the zero vector. By [F6], $D$ is countable and dense in $S^{d-1}$: rational vectors approximate every unit vector, and normalization is continuous at nonzero vectors. For each bounded continuous scalar map used below, the sample sums and their population expectations are continuous in direction, the latter by [F5]. Thus their suprema over $D\cup\{0\}$ equal the full directional suprema and are measurable. For any such class $g_v$, use the independent clean half $Y_1,\ldots,Y_N$ as the ghost copy of $X_1,\ldots,X_N$; its product law and independence follow from [F5] and the iid hypothesis. When the same argument is applied to the $Y$ half, swap the roles of the two clean halves. Jensen gives $E\sup_v\sum_i(g_v(X_i)-Pg_v)\le E\sup_v\sum_i(g_v(X_i)-g_v(Y_i))$. Pair swapping inserts independent signs; separating the two halves gives at most $2E\sup_v\sum_i\sigma_i g_v(X_i)$. For an $L$-Lipschitz scalar map $\psi$, averaging one sign with arbitrary remaining offsets $A_v$ gives $\frac12\sup_{v,w}(A_v+A_w+\psi(t_v)-\psi(t_w))\le\frac12\sup_{v,w}(A_v+A_w+L|t_v-t_w|)$. Swapping $v,w$ shows that the final supremum equals the one with $L(t_v-t_w)$; successive coordinate replacements prove one-sided contraction with factor $L$. Countable limits follow by monotone convergence after subtracting one fixed candidate, or bounded convergence on the finite sign space for a fixed sample. Finally set $S=\sum_i\sigma_i(X_i-\mu)$. Independence of the signs gives $E\|S\|^2=N\operatorname{tr}\Sigma$. Since $u\le1+u^2$ for $u\ge0$, $E\|S\|<\infty$; then $0\le E(\|S\|-E\|S\|)^2=E\|S\|^2-(E\|S\|)^2$ gives $E\|N^{-1}S\|\le r$. [F2, F3, F5, F6, algebra]

2.1 Put $h(t)=\min\{1,(2|t|/Q_0-1)_+\}$. It is $2/Q_0$-Lipschitz, vanishes at zero and majorizes $\mathbf1_{\{|t|\ge Q_0\}}$. By [F3], $Ph(\langle X-\mu,v\rangle)\le4\lambda/Q_0^2\le\varepsilon/64$. For its centered supremum, step 1.1 gives $EZ/N\le4r/Q_0\le\varepsilon/64$. Since $h^2\le h$, $EW/N\le\varepsilon/32$, and its second moment is at most $\varepsilon/64$. Apply [F1] separately to each clean half with $B=1$. Except on probability $e^{-x}$ for each half, its maximal empirical $h$ average is at most $\varepsilon/32+2\sqrt{5\varepsilon x/(16N)}+\sqrt8 x/N=\varepsilon/16+\sqrt8\varepsilon/1280<\varepsilon/8$. Thus each clean half has fewer than $\varepsilon N/8$ projections of centered absolute value at least $Q_0$, uniformly in direction. [F1, F3, step 1.1, algebra]

2.2 Fix $Q=2^{i_0}\in[2Q_0,4Q_0)$. Put $g_v(z)=\phi_{-Q,Q}(\langle z-\mu,v\rangle)$ and $W_Q(v)=N^{-1}\sum_i g_v(X_i)$. Antipodal directions and odd clipping make the absolute centered supremum equal its one-sided counterpart. Step 1.1 gives $EZ/N\le2r$. The square of clipping is $2Q$-Lipschitz and vanishes at zero, so the same symmetrization/contraction argument yields $EW/N\le\lambda+4Qr$ for the squared-class supremum. Here $|g_v|\le Q$ and $Pg_v^2\le\lambda$. Since $r\le\varepsilon Q/512$ and $\lambda\le\varepsilon Q^2/1024$, [F1] bounds $\sup_v|W_Q(v)-PW_Q(v)|$ outside probability $e^{-x}$ by $2r+2\sqrt{19\varepsilon Q^2x/(256N)}+\sqrt8 Qx/N<\varepsilon Q/32$. Also $|Pg_v|\le E[|\langle X-\mu,v\rangle|\mathbf1_{\{|\langle X-\mu,v\rangle|>Q\}}]\le\lambda/Q\le\varepsilon Q/1024$, since the unclipped projection is centered. [F1, F3, step 1.1, algebra]

3.1 Each observed half has at most $2\eta N\le\varepsilon N/5$ changes. On both events of step 2.1, fewer than $13\varepsilon N/40<\varepsilon N/2$ projections in either observed half are outside $[\langle\mu,v\rangle-Q_0,\langle\mu,v\rangle+Q_0]$. Both directional quantile ranks $k=\lceil\varepsilon N/2\rceil$ and $k=\lceil(1-\varepsilon/2)N\rceil$ satisfy $k\ge\varepsilon N/2$ and $N-k+1\ge\varepsilon N/2$; in the potentially integral boundary the strict count inequality suffices. Hence both quantiles lie in that interval, including at $\varepsilon=1$. Write $a_v=\alpha_v-\langle\mu,v\rangle$ and $b_v=\beta_v-\langle\mu,v\rangle$, so $-Q_0\le a_v\le b_v\le Q_0$. [F4, step 2.1, algebra]

4.1 For any clean centered projection $t$, the data-dependent clipping $\phi_{a_v-Q,b_v+Q}(t)$ differs from $\phi_{-Q,Q}(t)$ by at most $Q_0$ and agrees with it when $|t|<Q-Q_0$. Since $Q-Q_0\ge Q_0$, step 2.1 bounds the average difference by $\varepsilon Q_0/8\le\varepsilon Q/16$. The data-dependent clipping interval has length at most $2Q+2Q_0\le3Q$, so first-half replacements change its average by at most $6\eta Q\le3\varepsilon Q/5$. Combining these bounds with step 2.2 gives $\sup_v|U_Q(v)-\langle\mu,v\rangle|\le(3/5+1/16+1/32+1/1024)\varepsilon Q=3557\varepsilon Q/5120<\varepsilon Q$. Thus $\mu\in\Gamma(Q)$ and every $z\in\Gamma(Q)$ has $\|z-\mu\|\le3\varepsilon Q<12\varepsilon Q_0\le16\varepsilon Q_0$. [F4, step 2.1, step 3.1, step 2.2, algebra]

5.1 On the same events, for every $R\ge Q$ the clips at expanded intervals $[a_v-R,b_v+R]$ and $[a_v-2R,b_v+2R]$ differ by at most $R$. They differ only on observed centered projections with absolute value at least $R-Q_0\ge Q_0$. Their observed number is less than $13\varepsilon N/40$ by step 3.1, so $|U_{2R}(v)-U_R(v)|\le13\varepsilon R/40<2\varepsilon R$. Consequently $\Gamma(R)\subseteq\Gamma(2R)$, and $K_{i_0}=\Gamma(Q)$ is nonempty with the required radius. The three exceptional events in steps 2.1 and 2.2 have total probability at most $3e^{-x}\le3(\delta/2)^2\le\delta$, because $\varepsilon N\ge2560\log(2/\delta)$ and $0<\delta<1$. This proves the proposition simultaneously for every admissible replacement of the clean samples. [F4, step 2.1, step 2.2, step 3.1, step 4.1, algebra] ∎

## Remarks

The constant $4\varepsilon Q_0$ in the former statement and source Proposition 1 is false because the slab width scales with the chosen dyadic $Q$, not $Q_0$. [[cex-correct-scale-trimming-slab-radius-four-is-false]] gives an explicit continuous counterexample. The corrected bound preserves the main theorem's universal-constant rate. The zero-trace branch is [[lem-zero-covariance-multivariate-trimmed-mean-exact]].
