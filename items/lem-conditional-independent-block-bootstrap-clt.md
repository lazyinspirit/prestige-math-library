---
id: lem-conditional-independent-block-bootstrap-clt
kind: lemma
title: Conditional CLT for independent resampled weighted blocks
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-hilbert-schmidt-operator
  - lem-finite-bessel-inequality
  - lem-nuclear-series-characterizes-trace-norm
  - cor-characteristic-function-criterion-for-weak-convergence
  - cor-markov-inequality-for-random-variables
  - cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator
  - def-axiom-of-choice
  - def-conditional-weak-convergence-in-probability
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-second-order-characteristic-function-expansion
  - lem-weighted-overlapping-block-moment-and-covariance-limits
  - thm-almost-sure-subsequence-from-convergence-in-probability
  - thm-cramer-wold-device
  - thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts
  - thm-portmanteau-theorem
  - thm-subsequence-characterization-of-convergence-in-probability
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-levy-prokhorov-metric-metrizes-weak-convergence
proof_strategy: uniform integrability, conditional characteristic functions, projection tails and a negligible partial block
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), proof of Theorem 2.1; weighted-block and arbitrary-length extension proved locally
      url: https://arxiv.org/pdf/1711.01070
dependency_level: 4
---

## Statement

Assume AC and all the process and weight hypotheses of [[lem-weighted-overlapping-block-moment-and-covariance-limits]], including squared normalization and convergence of each fixed-lag weight autocorrelation to one. Let $b=b_n\to\infty$ with $b/\sqrt n\to0$, $N=n-b+1$, $k=\lfloor n/b\rfloor$, $r=n-kb$, and

$$B_{j,q}=\sum_{\ell=1}^q c_{b,\ell}X_{j+\ell-1},\qquad \bar B_q=N^{-1}\sum_{j=1}^NB_{j,q},\qquad C_q=N^{-1}\sum_{j=1}^N(B_{j,q}-\bar B_q)\otimes(B_{j,q}-\bar B_q),$$

with $B_{j,0}=\bar B_0=C_0=0$. Conditional on the observations choose independent uniform starts $J_1,\ldots,J_{k+1}$ in $\{1,\ldots,N\}$ and set

$$Z_n^*=n^{-1/2}\left\{\sum_{s=1}^k(B_{J_s,b}-\bar B_b)+(B_{J_{k+1},r}-\bar B_r)\right\}.$$

Then, for the centered Hilbert Gaussian $G$ of covariance $\Gamma$,

$$\mathcal L^*(Z_n^*)\Rightarrow\mathcal L(G)\quad\hbox{in probability},\qquad \left\|\operatorname{Cov}^*(Z_n^*)-\Gamma\right\|_1\longrightarrow0\quad\hbox{in probability}.$$

Trace-norm convergence implies convergence in Hilbert-Schmidt norm as well. The conditional laws are tight in probability: for every $\varepsilon,\eta>0$ there is a deterministic compact $K\subset H$ such that $\limsup_nP\{P^*(Z_n^*\notin K)>\varepsilon\}<\eta$. The complete blocks satisfy conditional Lindeberg, and the final partial block has $E E^*\|n^{-1/2}(B_{J_{k+1},r}-\bar B_r)\|^2=O(b/n)$. Replacing every $X_t$ by $X_t-M_n$ for any common data-dependent $M_n\in H$ leaves $Z_n^*$ and all its conditional covariances unchanged.

## Facts & Assumptions

**Given:** The assumptions and the conditional uniform-start randomization of the Statement. Write $\|\cdot\|_1$ for trace norm.

[F1] [[lem-weighted-overlapping-block-moment-and-covariance-limits]] supplies uniform integrability of $\|b^{-1/2}B_{1,b}\|^2$, $C_b/b\to\Gamma$ in trace norm in probability, $E\|\bar B_b/\sqrt b\|^2=O(b/N)$, and $E\|B_{1,q}\|^2\le Dq$ uniformly for $q\le b$. For any complete orthonormal basis and its projections $P_d$, putting $R_d=I-P_d$, it also supplies $E\|R_dB_{1,q}\|^2\le qD_d$ with $D_d\to0$.

[F2] [[thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts]] supplies $G$ with positive trace-class covariance $\Gamma$. Under AC choose a complete eigenbasis for $\Gamma$ by [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]]. Thus $E\|R_dG\|^2=\operatorname{tr}(R_d\Gamma R_d)\to0$. AC is used for these inherited Hilbert-space constructions, not for an additional uncountable randomization.

[F3] [[lem-second-order-characteristic-function-expansion]] gives $|e^{iu}-1-iu+u^2/2|\le\min(|u|^3/3,4u^2)$. A centered normal of variance $v\ge0$ has characteristic function $e^{-t^2v/2}$ by [[lem-characteristic-function-of-a-normal-law]], and the characteristic function of a finite independent sum is the product of the individual characteristic functions ([[lem-characteristic-functions-under-affine-maps-and-independent-sums]]). The characteristic-function criterion and Cramer--Wold apply also to degenerate limits ([[cor-characteristic-function-criterion-for-weak-convergence]], [[thm-cramer-wold-device]]).

[F4] A scalar sequence converges in probability exactly when every subsequence has an almost-surely convergent further subsequence ([[thm-subsequence-characterization-of-convergence-in-probability]], [[thm-almost-sure-subsequence-from-convergence-in-probability]]). Weak convergence on a metric space is equivalent to convergence against all bounded uniformly continuous tests by [[thm-portmanteau-theorem]]. Under the assumed AC, [[thm-levy-prokhorov-metric-metrizes-weak-convergence]] supplies the Levy-Prokhorov metric generating weak convergence on the separable Hilbert space $H$. Use this metric in [[def-conditional-weak-convergence-in-probability]]. For each $n$ the conditional law is a finite mixture with deterministic probabilities and Borel data-dependent atoms: finite independent starts have only finitely many configurations. The map from its atom tuple to this law is continuous for weak convergence (test each bounded continuous function), hence its metric distance to the fixed law is a Borel data function.

[F5] Markov's inequality is [[cor-markov-inequality-for-random-variables]]. The trace-class ideal estimate is [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], and [[lem-nuclear-series-characterizes-trace-norm]] identifies the trace norm with the infimum of nuclear sums. The Hilbert-Schmidt norm is the basis square-sum in [[def-hilbert-schmidt-operator]]; [[lem-finite-bessel-inequality]] bounds finite sums of squared coordinates. These give the operator bounds proved in step 1.1.

[F6] Hilbert-space Cauchy–Schwarz gives $|\langle a,x\rangle_H|\le\|a\|_H\|x\|_H$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A1] [[def-axiom-of-choice]] is assumed as in [F2].

## Proof

**Given:** The stated process, weights, data and independent conditional block starts.

1.1 First, for a nuclear representation $T=\sum_j\langle\cdot,u_j\rangle v_j$ and an orthogonal projection $R$, its absolutely convergent trace has $|\operatorname{tr}(RTR)|\le\sum_j\|u_j\|\|v_j\|$. For every finite orthonormal set $E$, Minkowski and Bessel give $(\sum_{e\in E}\|Te\|^2)^{1/2}\le\sum_j\|v_j\|(\sum_{e\in E}|\langle e,u_j\rangle|^2)^{1/2}\le\sum_j\|u_j\|\|v_j\|$. Infinite nuclear sums follow from their summable tails. Taking the nuclear infimum proves $|\operatorname{tr}(RTR)|\le\|T\|_1$ and $\|T\|_{\mathrm{HS}}\le\|T\|_1$ by [F5]. Subtraction of $M_n$ replaces $B_{j,q}$ by $B_{j,q}-s_qM_n$, where $s_q=\sum_{\ell=1}^qc_{b,\ell}$ does not depend on $j$. It changes $\bar B_q$ by exactly the same amount. Thus every centered block is unchanged. Independence of the starts gives $\operatorname{Cov}^*(Z_n^*)=(kC_b+C_r)/n$. Positivity and the rank-one trace formula give $E\operatorname{tr}C_r\le E\|B_{1,r}\|^2\le Dr$, so $E\|C_r/n\|_1\le Db/n\to0$. Since $kb/n\to1$, [F1] now gives the asserted trace-norm covariance limit. The conditional squared norm of the centered remainder has expectation $\operatorname{tr}(C_r/n)$ and therefore its unconditional expectation tends to zero at rate $O(b/n)$. [given, F1, F5, algebra]

2.1 Set $U_j=B_{j,b}/\sqrt b$, $\bar U=\bar B_b/\sqrt b$, and $V_j=U_j-\bar U$. For any vectors $x,y$ and $a>0$, splitting according as the larger summand exceeds $a/2$ gives $\|x+y\|^2\mathbf1_{\{\|x+y\|>a\}}\le4\|x\|^2\mathbf1_{\{\|x\|>a/2\}}+4\|y\|^2\mathbf1_{\{\|y\|>a/2\}}$. Consequently, for each $\varepsilon>0$, the conditional Lindeberg sum of the $k$ complete blocks is at most $L_n(\varepsilon)=\frac{kb}{nN}\sum_{j=1}^N\|V_j\|^2\mathbf1_{\{\|V_j\|>\varepsilon\sqrt{n/b}\}},\qquad E L_n(\varepsilon)\le4E\!\left[\|U_1\|^2\mathbf1_{\{\|U_1\|>(\varepsilon/2)\sqrt{n/b}\}}\right]+4E\|\bar U\|^2\longrightarrow0.$ Here $n/b\to\infty$, stationarity makes the expected empirical uncentered tail equal to that of $U_1$, and [F1] supplies uniform integrability and $E\|\bar U\|^2\to0$. Hence $L_n(\varepsilon)\to0$ in probability by [F5]. [F1, F5, step 1.1, algebra]

3.1 Take any subsequence. Apply [F4] diagonally to the scalar trace-norm covariance error, $\operatorname{tr}(C_r/n)$, and $L_n(1/j)$ for positive integers $j$. There is a further subsequence on which all tend to zero almost surely. Fix a data outcome in this probability-one event. For any $a\in H$, let $\xi_n=\langle a,B_{J_1,b}-\bar B_b\rangle/\sqrt n$ and $v_n=kE^*\xi_n^2$. Step 1.1 and remainder negligibility give $v_n\to\langle\Gamma a,a\rangle$, and the norm Lindeberg bounds imply $kE^*[\xi_n^2\mathbf1_{\{|\xi_n|>\rho\}}]\to0$ for every $\rho>0$. The Taylor bound in [F3], split at $\rho$, gives $k\left|E^*e^{i\xi_n}-1+\tfrac12E^*\xi_n^2\right|\le (\rho/3)v_n+4kE^*[\xi_n^2\mathbf1_{\{|\xi_n|>\rho\}}].$ Let $n\to\infty$ and then $\rho\downarrow0$. Thus $k(E^*e^{i\xi_n}-1)\to-\langle\Gamma a,a\rangle/2$ and $k|E^*e^{i\xi_n}-1|^2\to0$, since $k\to\infty$. The convergent power-series expansion $\log(1+z)=z+O(|z|^2)$ near zero proves $(E^*e^{i\xi_n})^k\to\exp(-\langle\Gamma a,a\rangle/2)$. The remainder's characteristic function tends to one because its conditional mean is zero and [F3], [F6] give $|E^*e^{i\langle a,R_n\rangle}-1|\le E^*\langle a,R_n\rangle^2\le\|a\|_H^2\operatorname{tr}(C_r/n)\to0$, where $R_n=n^{-1/2}(B_{J_{k+1},r}-\bar B_r)$. Replacing $a$ by $ta$ covers every real frequency. Therefore [F3] gives weak convergence of every finite-dimensional projection of the conditional law to that of $G$, on this fixed outcome; no positive lower bound on any variance was used. [F2, F3, F4, F6, step 1.1, step 2.1, choose, algebra]

4.1 On the same outcome let $T_n=\operatorname{Cov}^*(Z_n^*)$. For every fixed $d$, conditional centering and [F5] give $E^*\|R_dZ_n^*\|^2=\operatorname{tr}(R_dT_nR_d)\to\operatorname{tr}(R_d\Gamma R_d)$. If $\phi$ is bounded uniformly continuous, put $M=\sup|\phi|$ and $\omega_\phi(h)=\sup_{\|x-y\|\le h}|\phi(x)-\phi(y)|$. Markov gives $|E^*\phi(Z_n^*)-E^*\phi(P_dZ_n^*)|\le\omega_\phi(h)+2Mh^{-2}\operatorname{tr}(R_dT_nR_d).$ The analogous bound for $G$ uses $\operatorname{tr}(R_d\Gamma R_d)$. Step 3.1 gives convergence of the projected expectations. Take the limit superior in $n$, then $d\to\infty$, and finally $h\downarrow0$. All such test expectations converge, so [F4] gives weak convergence of the full conditional laws on this outcome. Thus their distance to the law of $G$ in the metric of [F4] tends to zero almost surely on the extracted subsequence. The subsequence characterization proves convergence in probability along the original sequence. [F2, F4, F5, step 1.1, step 3.1, algebra]

5.1 To verify tightness explicitly, empirical centering decreases each projected second moment. By [F1] and independence, $E E^*\|R_dZ_n^*\|^2\le\frac{k b+r}{n}D_d=D_d.$ The same bound without projection is $D$. Enlarge constants to cover any finitely many initial admissible block lengths. Given $\varepsilon,\eta>0$, choose $R$ and increasing integers $d_j$ so that $D/R^2<\varepsilon\eta/4$ and $j^2D_{d_j}<\varepsilon\eta\,2^{-j-2}$. The closed set $K=\{x\in H:\|x\|\le R,\ \|R_{d_j}x\|\le1/j\text{ for every }j\ge1\}$ is compact: for any radius choose $j$ with $1/j$ smaller than half the radius, and a finite net for the bounded ball in $P_{d_j}H$; this gives a finite net for $K$, and closedness in complete $H$ gives compactness. Markov and the union bound yield $E P^*(Z_n^*\notin K)<\varepsilon\eta/2$, and then $P\{P^*(Z_n^*\notin K)>\varepsilon\}<\eta/2$. This proves the stated conditional tightness, and steps 1.1-4.1 establish all the other assertions. [A1, F1, F5, step 1.1, step 4.1, choose, algebra] ∎
