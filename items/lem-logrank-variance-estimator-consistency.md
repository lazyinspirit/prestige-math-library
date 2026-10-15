---
id: lem-logrank-variance-estimator-consistency
kind: lemma
title: "Consistency of the weighted logrank variance estimate"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-logrank-risk-set-score-and-test
  - lem-logrank-risk-fraction-converges
  - def-counting-process-intensity-and-compensator-contract
  - def-l2-counting-process-integral
  - thm-compensated-counting-process-brackets
  - thm-l2-counting-process-integral-isometry
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 4-7"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.3-5.4, PDF pp. 59-62"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

Assume the two-group common-hazard model with finite-horizon predictable
risk processes and the explicit square-integrable martingale contracts
$M_{gi}=N_{gi}-A_{gi}$, $A_{gi}(t)=\int_0^tY_{gi}(s)\lambda(s)\,ds$; assume
no simultaneous event jumps. Let $Y_{g,n}=\sum_iY_{gi}$,
$Y_n=Y_{0,n}+Y_{1,n}$, and assume the uniform risk-fraction convergence
$Y_n/n\to y$ and $p_n=Y_{1,n}/Y_n\to\bar z$ in probability on $[0,\tau]$,
with $p_n=0$ on an empty risk set (as proved in
[[lem-logrank-risk-fraction-converges]]). Let $w_n\to w$ uniformly in
probability, where the predictable weights are uniformly bounded and $w$
is deterministic. Suppose event times are continuous, so every observed
failure time has $d_j=1$ almost surely. Here $\widehat V_{n,w_n}$ is the
plug-in statistic defined in [[def-logrank-risk-set-score-and-test]]; the
claim is its asymptotic consistency and does not assert an exact finite-sample
conditional variance law. Here $y_0,y_1$ are deterministic nonnegative Borel functions,
$y=y_0+y_1$, $\inf_{0\le t\le\tau}y(t)>0$, and $\bar z=y_1/y$. Define
$$\sigma_w^2:=\int_0^\tau w(t)^2\frac{y_0(t)y_1(t)}{y(t)}\lambda(t)\,dt.$$
Then the weighted plug-in variance sum from
[[def-logrank-risk-set-score-and-test]] satisfies
$$\frac{\widehat V_{n,w_n}}n\longrightarrow_P\sigma_w^2.$$

## Facts & Assumptions

**Given:** The model and convergence hypotheses in the Statement, with finite horizon and $\Lambda(\tau)<\infty$.

[A1] Assume the Axiom of Choice inherited from the counting-process martingale and integral interfaces. ([[def-axiom-of-choice]])

[F1] [[def-logrank-risk-set-score-and-test]]: $\widehat V_{n,w_n}=\sum_jw_n(t_j)^2V_j$ and $V_j$ is the stated conditional risk-set variance.

[F2] [[def-logrank-risk-set-score-and-test]]: the plug-in contribution is $V_j=Y_{1,n}(t_j)Y_{0,n}(t_j)d_j(Y_n(t_j)-d_j)/(Y_n(t_j)^2(Y_n(t_j)-1))$ for $Y_n(t_j)>1$, and zero for $Y_n(t_j)=1$.

[F3] [[lem-logrank-risk-fraction-converges]]: $p_n\to\bar z$ and $Y_n/n\to y$ uniformly in probability on $[0,\tau]$.

[F4] [[def-counting-process-intensity-and-compensator-contract]]: for the aggregate simple process the compensator is $A_n=\int Y_n\lambda$ and $M_n=N_n-A_n$ is a square-integrable martingale under the separately stated model contract.

[F5] [[thm-compensated-counting-process-brackets]]: $M_n^2-A_n$ is a martingale and its predictable bracket is $A_n$.

[F6] [[thm-l2-counting-process-integral-isometry]]: for predictable $h$ with finite compensator energy, $\mathbb E(\int h\,dM_n)^2=\mathbb E\int h^2\,dA_n$.

## Proof

1.1 Since $d_j=1$, the variance formula [F2] reduces to $V_j=Y_{1,n}(t_j)Y_{0,n}(t_j)/Y_n(t_j)^2 =p_n(t_j)(1-p_n(t_j))$ when $Y_n(t_j)>1$. If $Y_n(t_j)=1$, both groups' product is zero and [F1] assigns variance zero. Thus $ \frac{\widehat V_{n,w_n}}n =\frac1n\int_0^\tau w_n(t)^2p_n(t)(1-p_n(t))\,dN_n(t). $ [F1, F2, given]

2.1 Uniform convergence of $w_n$ to $w$ and of $p_n$ to $\bar z$, together with their uniform bounds, gives $\sup_{t\le\tau}|w_n(t)^2p_n(t)(1-p_n(t))-w(t)^2\bar z(t)(1-\bar z(t))|\to_P0$. Because $N_n(\tau)\le n$, replacing the integrand in step 1.1 by $h(t):=w(t)^2\bar z(t)(1-\bar z(t))$ changes the normalized integral by at most this supremum, hence by $o_P(1)$. [F1, F3, given, step 1.1, algebra]

3.1 The aggregate process $N_n$ is simple because no two subjects jump simultaneously, and $A_n(\tau)\le n\Lambda(\tau)$. The deterministic $h$ is bounded and predictable, so [F4]-[F6] give $ \mathbb E\left[\left\{\frac1n\int_0^\tau h(t)\,dM_n(t)\right\}^2\right] =\frac1{n^2}\mathbb E\int_0^\tau h(t)^2\,dA_n(t) \le\frac{\|h\|_\infty^2\Lambda(\tau)}n\longrightarrow0. $ Hence the martingale part of the normalized variance sum tends to zero in probability. [A1, F4, F5, F6, given, step 2.1]

4.1 The compensator part of that sum is $ \frac1n\int_0^\tau h(t)\,dA_n(t) =\int_0^\tau h(t)\frac{Y_n(t)}n\lambda(t)\,dt. $ Uniform convergence of $Y_n/n$ to $y$ and $\int_0^\tau\lambda(t)\,dt<\infty$ make this converge in probability to $\int_0^\tau h(t)y(t)\lambda(t)\,dt$. Since $\bar z=y_1/y$, the limit is $\int_0^\tau w(t)^2y_0(t)y_1(t)y(t)^{-1}\lambda(t)\,dt=\sigma_w^2$. Combining this with steps 2.1 and 3.1 proves the assertion. [F3, given, step 1.1, step 2.1, step 3.1, algebra] ∎
