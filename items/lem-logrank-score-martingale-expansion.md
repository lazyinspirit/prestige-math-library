---
id: lem-logrank-score-martingale-expansion
kind: lemma
title: "Weighted logrank score expansion under a common-hazard model"
status: published
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
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 2-7"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.3, PDF pp. 59-60"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

Assume the Axiom of Choice. Let $n_0,n_1$ be deterministic, $n=n_0+n_1$,
and let $Z_i=g$ for subject $i$ in group $g\in\{0,1\}$. On a common
finite-horizon filtration, each subject has the one-event process
$$N_{gi}(t)=1\{U_{gi}\le t,\ \delta_{gi}=1\},\qquad Y_{gi}(t)=1\{U_{gi}\ge t\},$$
and satisfies the separate counting-process contract
$$A_{gi}(t)=\int_0^tY_{gi}(s)\lambda(s)\,ds,\qquad M_{gi}=N_{gi}-A_{gi},$$
where $\lambda$ is a common deterministic nonnegative hazard density with
$\Lambda(\tau):=\int_0^\tau\lambda(s)\,ds<\infty$. Assume each $M_{gi}$ is
a square-integrable martingale under this contract, $Y_{gi}$ is predictable,
and no two subjects have simultaneous event jumps. Write $N_{g,n}$ and
$Y_{g,n}$ for the group sums, $N_n=N_{0,n}+N_{1,n}$, and
$p_n(t)=Y_{1,n}(t)/(Y_{0,n}(t)+Y_{1,n}(t))$, with $p_n(t)=0$ on an empty
pooled risk set.

Assume the observed-time and allocation hypotheses of
[[lem-logrank-risk-fraction-converges]]: within each group the observed
times are IID, $n\to\infty$, $n_g/n\to\rho_g\in(0,1)$, and, with
$y_g(t)=\rho_gP(U_{g1}\ge t)$ and $y=y_0+y_1$,
$\inf_{0\le t\le\tau}y(t)>0$. Set $\bar z(t)=y_1(t)/y(t)$. Let $w_n$ be a common predictable
weight process with $|w_n(t)|\le C$ and a measurable supremum satisfying
$\sup_{t\le\tau}|w_n(t)-w(t)|\to_P0$ for a deterministic bounded predictable
weight $w$. Then the weighted logrank score satisfies
$$\frac{U_{n,w_n}}{\sqrt n} =\frac1{\sqrt n}\sum_{g=0}^1\sum_{i=1}^{n_g} \int_0^\tau w(t)\bigl(g-\bar z(t)\bigr)\,dM_{gi}(t)+o_P(1).$$
In particular, fixed deterministic bounded predictable weights are included
by taking $w_n=w$.

## Facts & Assumptions

**Given:** A finite horizon, two fixed groups, the common-hazard model contract for each subject, no simultaneous event jumps, the uniform risk-fraction limit, and the bounded predictable weight sequence in the Statement.

[A1] Assume the Axiom of Choice, inherited from the continuous-time martingale, bracket, and $L^2$-integral interfaces. ([[def-axiom-of-choice]])

[F1] [[def-counting-process-intensity-and-compensator-contract]]: for a simple counting process, $A=\int Y\lambda$ is continuous and has finite expectation, and the model separately assumes $M=N-A$ is a square-integrable martingale.

[F2] [[def-l2-counting-process-integral]]: a predictable $H$ with $\mathbb E\int H^2\,dA<\infty$ has an integral defined by $L^2$ limits of bounded predictable step integrals when the limit exists.

[F3] [[thm-compensated-counting-process-brackets]]: under the counting-process contract, $M^2-A$ is a martingale and $\langle M\rangle=A$.

[F4] [[thm-l2-counting-process-integral-isometry]]: every predictable finite-energy integrand has a square-integrable martingale integral with $\mathbb E(\int H\,dM)^2=\mathbb E\int H^2\,dA$.

[F5] [[lem-logrank-risk-fraction-converges]]: $p_n$ converges uniformly in probability to $\bar z$ on $[0,\tau]$.

[F6] [[def-logrank-risk-set-score-and-test]]: $U_{n,w_n}=\sum_jw_n(t_j)(O_j-E_j)$ with $E_j=d_jY_{1,n}(t_j)/Y_n(t_j)$.

## Proof

1.1 Each $Y_{gi}$ is predictable by assumption. Sums of these processes are predictable, and the ratio map $(a,b)\mapsto a/b$ for $b>0$, extended by zero when $b=0$, is Borel; hence $p_n$ is predictable. At an event time $t_j$, the Stieltjes increment of $N_{1,n}$ is $O_j$ and that of $N_n$ is $d_j$. Therefore [F6] gives $ U_{n,w_n}=\int_0^\tau w_n(t)\{dN_{1,n}(t)-p_n(t)dN_n(t)\}. $ Using $dN_{gi}=dM_{gi}+Y_{gi}\lambda(t)\,dt$, the compensator part equals $w_n(t)\{Y_{1,n}(t)-p_n(t)(Y_{0,n}(t)+Y_{1,n}(t))\}\lambda(t)\,dt=0$. Thus, with $M_n=\sum_{g,i}M_{gi}$, $ U_{n,w_n}=\sum_{g,i}\int_0^\tau w_n(t)(g-p_n(t))\,dM_{gi}(t). $ [A1, F1, F2, F6, given, algebra]

2.1 No simultaneous event jumps make $N_n=\sum_{g,i}N_{gi}$ a simple unit-jump counting process. Its compensator is the continuous process $A_n=\sum_{g,i}A_{gi}$, and $M_n=N_n-A_n=\sum_{g,i}M_{gi}$ is a square-integrable martingale by finite summation. Also $A_n(\tau)\le n\Lambda(\tau)$ pathwise. By [F3], $M_n^2-A_n$ is a martingale; [F2]-[F4] apply to the common predictable integrand $H_n=w_n(p_n-\bar z)$, whose compensator energy is finite. The isometry gives $ \mathbb E\left[ \left\{\frac1{\sqrt n}\int_0^\tau w_n(p_n-\bar z)\,dM_n\right\}^2 \right] \le C^2\Lambda(\tau)\, \mathbb E\!\left[\sup_{t\le\tau}|p_n(t)-\bar z(t)|^2\right]\longrightarrow0. $ The last expectation tends to zero because the supremum is bounded by one and converges to zero in probability by [F5]. Replacing $p_n$ by $\bar z$ therefore changes $U_{n,w_n}/\sqrt n$ by $o_P(1)$. [A1, F2, F3, F4, F5, step 1.1]

3.1 For the remaining weight replacement, put $D_n=\sum_{g,i}\int_0^\tau(w_n-w)(g-\bar z)\,dM_{gi}$. Since $g$ is constant within each group, $ D_n=\int_0^\tau(w_n-w)(1-\bar z)\,dM_{1,n} -\int_0^\tau(w_n-w)\bar z\,dM_{0,n}. $ Each group aggregate has a simple counting process, continuous compensator, and square-integrable martingale because there are no simultaneous event jumps within that group. Applying [F2]-[F4] to each aggregate and using $(a-b)^2\le2a^2+2b^2$ yields $ \mathbb E[(D_n/\sqrt n)^2] \le 2\Lambda(\tau)\, \mathbb E\!\left[\sup_{t\le\tau}|w_n(t)-w(t)|^2\right]\longrightarrow0. $ Boundedness of $w_n$ and $w$ makes the squared supremum bounded, so its convergence in probability implies convergence of its expectation. Combining the risk-fraction replacement in step 2.1 with this weight replacement proves the stated expansion. No martingale process central limit theorem is used. [A1, F1, F2, F3, F4, given, step 2.1, algebra] ∎
