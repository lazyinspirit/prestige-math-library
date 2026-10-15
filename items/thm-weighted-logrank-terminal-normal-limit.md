---
id: thm-weighted-logrank-terminal-normal-limit
kind: theorem
title: "Terminal normal limit for weighted logrank scores"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-logrank-risk-set-score-and-test
  - lem-logrank-risk-fraction-converges
  - lem-logrank-score-martingale-expansion
  - lem-logrank-variance-estimator-consistency
  - thm-independent-groups-terminal-influence-limit
  - def-counting-process-intensity-and-compensator-contract
  - def-l2-counting-process-integral
  - thm-l2-counting-process-integral-isometry
  - def-identically-distributed-and-iid-random-variables
  - def-independent-families-of-event-classes
  - def-random-element-and-real-random-variable
  - def-covariance-matrix-of-a-random-vector
  - thm-factorization-of-expectations-for-independent-variables
  - thm-variance-of-a-finite-sum
  - cor-markov-inequality-for-random-variables
  - thm-dominated-convergence
  - def-op-and-little-op-stochastic-bounds
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-standard-normal-and-normal-laws
  - thm-vector-slutsky
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
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 13: Large Sample Theory for 2-Sample Tests, PDF pp. 1-12"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-twosample.pdf"
    - title: "Michal Kulich, NMST531 Censored Data Analysis: Extended Course Notes, §5.4, PDF pp. 61-62"
      url: "https://www.karlin.mff.cuni.cz/~kulich/vyuka/cens/doc/cens_notes_ext_220102.pdf"
---

## Statement

Assume the Axiom of Choice. For $g\in\{0,1\}$, let
$(T_{gi},C_{gi})_{i\ge1}$ be IID within group, with
$T_{gi},C_{gi}\in[0,\infty)$ almost surely and the two group families
independent. Assume conditional independent censoring
$T_{gi}\perp C_{gi}\mid g$, and a common absolutely continuous event-time
law with hazard density $\lambda$ on $[0,\tau]$, where
$\Lambda(\tau)=\int_0^\tau\lambda(t)\,dt<\infty$. Censoring distributions
may differ between groups. Use the horizon-truncated record
$U_{gi}:=\min(T_{gi},C_{gi},\tau)$ and
$\delta_{gi}:=1\{T_{gi}\le C_{gi},\ T_{gi}\le\tau\}$, which lies in
$[0,\tau]\times\{0,1\}$ as required by
[[def-logrank-risk-set-score-and-test]].

For deterministic positive sample sizes $n_g$ along a sequence with
$n=n_0+n_1\to\infty$ and $n_1/n\to\rho\in(0,1)$, set
$\rho_1=\rho$, $\rho_0=1-\rho$,
$y_g(t)=\rho_gP(U_{g1}\ge t)$, $y(t)=y_0(t)+y_1(t)$, and
$\bar z(t)=y_1(t)/y(t)$. Assume $\inf_{t\le\tau}y(t)>0$. For each
subject define $N_{gi}(t)=1\{U_{gi}\le t,\delta_{gi}=1\}$ and
$Y_{gi}(t)=1\{U_{gi}\ge t\}$. Under one common filtration, assume $Y_{gi}$
is predictable and, separately, that
$$A_{gi}(t)=\int_0^tY_{gi}(s)\lambda(s)\,ds,\qquad M_{gi}=N_{gi}-A_{gi}$$
satisfies the finite-horizon square-integrable martingale contract of
[[def-counting-process-intensity-and-compensator-contract]]. Assume no two
subjects have simultaneous event jumps. Conditional independent censoring
and the displayed hazard are scientific model premises; they are not used
as substitutes for the explicit martingale contract.

Use $U_{n,w_n}$ and $\widehat V_{n,w_n}$ as defined in
[[def-logrank-risk-set-score-and-test]]. Let $w_n$ be a common predictable
weight sequence with $|w_n|\le C$ and a measurable supremum satisfying
$\sup_{t\le\tau}|w_n(t)-w(t)|\to_P0$ for a deterministic bounded Borel
predictable weight $w$. Define
$$\sigma_w^2:=\int_0^\tau w(t)^2\frac{y_0(t)y_1(t)}{y_0(t)+y_1(t)}\lambda(t)\,dt.$$
Then
$$\frac{U_{n,w_n}}{\sqrt n}\Rightarrow N(0,\sigma_w^2).$$
If $\sigma_w^2>0$, define the standardized statistic as
$U_{n,w_n}/\sqrt{\widehat V_{n,w_n}}$ when the denominator is positive and
assign any fixed finite value on the event that it is zero. Every such
extension converges to $N(0,1)$. If $\sigma_w^2=0$, only the degenerate
score limit is asserted. For a fixed deterministic weight, take $w_n=w$.
This is a terminal finite-dimensional limit; it asserts no process central
limit theorem.

## Facts & Assumptions

**Given:** Assume AC; two independent IID groups of subject records, deterministic allocation fractions tending to $\rho_g\in(0,1)$, equal continuous event hazard, group-conditional independent censoring, the explicit counting-process contracts and no-simultaneous-jump condition, positive pooled risk support, finite $\Lambda(\tau)$, and the bounded predictable weights in the Statement.

[A1] Assume the Axiom of Choice (AC), inherited from the counting-process integral and independent-groups terminal-limit suppliers. ([[def-axiom-of-choice]])

[A2] Since each $U_{gi}$ is the same measurable function of its within-group IID pair $(T_{gi},C_{gi})$, the observed times are IID within each group. The deterministic allocation limits and positive pooled-risk bound in the Statement therefore meet the hypotheses of [[lem-logrank-risk-fraction-converges]], which supplies the uniform risk-fraction limits required by [F4] and [F5].

[F1] [[def-identically-distributed-and-iid-random-variables]]: within each group the subject records share one law and are mutually independent.

[F2] [[def-independent-families-of-event-classes]]: independence of the two subject families means every finite choice of events from distinct subjects has product probability.

[F3] [[def-logrank-risk-set-score-and-test]]: $U_{n,w_n}$ and $\widehat V_{n,w_n}$ are the weighted risk-set score and its plug-in variance sum.

[F4] [[lem-logrank-score-martingale-expansion]]: under its stated martingale, risk-fraction, no-simultaneous-jump, and weight hypotheses,
$$U_{n,w_n}/\sqrt n=n^{-1/2}\sum_{g=0}^1\sum_{i=1}^{n_g}\phi_g(U_{gi},\delta_{gi})+o_P(1),$$
where $\phi_g=\int_0^\tau w(t)(g-\bar z(t))\,dM_{gi}(t)$.

[F5] [[lem-logrank-variance-estimator-consistency]]: $\widehat V_{n,w_n}/n\to_P\sigma_w^2$ under its stated continuous-event and plug-in variance hypotheses.

[F6] [[thm-independent-groups-terminal-influence-limit]]: for a fixed finite number of independent IID groups, centered square-integrable measurable group influences and a separately established terminal expansion imply a Gaussian limit with covariance $\sum_g\rho_g^{-1}\Sigma_g$.

[F7] [[def-counting-process-intensity-and-compensator-contract]]: $M_{gi}=N_{gi}-A_{gi}$ is a square-integrable martingale under the explicit model contract, and $A_{gi}=\int Y_{gi}\lambda$.

[F8] [[def-l2-counting-process-integral]]: predictable integrands of finite compensator energy have the stated $L^2$ counting-process integral when the approximating integrals converge.

[F9] [[thm-l2-counting-process-integral-isometry]]: the integral is a square-integrable martingale and $\mathbb E(\int H\,dM)^2=\mathbb E\int H^2\,dA$ for finite-energy predictable $H$.

[F10] [[def-covariance-matrix-of-a-random-vector]]: for a centered square-integrable scalar, its covariance is its second moment.

[F11] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable integrand may be integrated in either order on the product space.

[F12] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of finitely many independent integrable real random variables factor into the product of their expectations.

[F13] [[thm-variance-of-a-finite-sum]]: the variance of a finite sum is the sum of its variances and pairwise covariance terms.

[F14] [[cor-markov-inequality-for-random-variables]]: for $X\ge0$ and $a>0$, $P(X\ge a)\le E[X]/a$.

[F15] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant permits passage to the limit in the integral.

[F16] [[def-op-and-little-op-stochastic-bounds]]: $X_n=O_P(1)$ means its tails are bounded in probability, and $X_n=o_P(1)$ means convergence in probability to zero.

[F17] [[def-standard-normal-and-normal-laws]]: $N(0,v)$ is the law of $\sqrt v Z$ for $Z\sim N(0,1)$, including $v=0$.

[F18] [[thm-vector-slutsky]]: weak convergence is preserved after adjoining a quantity converging in probability to a constant and applying a continuous map.

## Proof

1.1 Put $h_g(t)=w(t)(g-\bar z(t))$. For a subject record $(u,\delta)$, define the real map $ \phi_g(u,\delta)=1\{\delta=1,\ u\le\tau\}h_g(u) -\int_0^{u\wedge\tau}h_g(t)\lambda(t)\,dt. $ The deterministic integrand is bounded and Borel, so its indefinite integral is Borel and this map is measurable. From the definitions of $N_{gi}$, $Y_{gi}$ and $A_{gi}$, this is exactly $\int_0^\tau h_g(t)\,dM_{gi}(t)$. Its energy is at most $\|h_g\|_\infty^2\Lambda(\tau)$; [F8] and [F9] therefore make it square-integrable and centered. It is the same measurable function of each subject record within group $g$, so [F1] makes the transformed records IID within group and [F2] makes the two groups independent. [A1, F1, F2, F7, F8, F9, given]

2.1 By [F9] and [F11], $ \mathbb E[\phi_g^2] =\int_0^\tau w(t)^2(g-\bar z(t))^2P(U_{g1}\ge t)\lambda(t)\,dt. $ Multiplying by $\rho_g$ and summing over $g=0,1$ gives $ \sum_{g=0}^1\rho_g\mathbb E[\phi_g^2] =\int_0^\tau w(t)^2\{y_1(t)(1-\bar z(t))^2+y_0(t)\bar z(t)^2\}\lambda(t)\,dt =\sigma_w^2, $ where the last equality follows by substituting $\bar z=y_1/(y_0+y_1)$. The integral is finite since $w$ is bounded, $0\le y_g\le1$, and $\Lambda(\tau)<\infty$. [F9, F11, given, step 1.1, algebra]

2.2 Fix $\epsilon>0$. Since $n_g\to\infty$, the integrand $\phi_g^2 1\{|\phi_g|>\epsilon\sqrt{n_g}\}$ tends pointwise to zero and is bounded by the integrable $\phi_g^2$. [F15] gives $ n_gP(|\phi_g|>\epsilon\sqrt{n_g}) \le\epsilon^{-2}\mathbb E[\phi_g^2 1\{|\phi_g|>\epsilon\sqrt{n_g}\}] \longrightarrow0. $ Thus each group satisfies the finite-variance no-large-jump condition. Also, for $S_{g,n}=n_g^{-1/2}\sum_{i=1}^{n_g}\phi_g(U_{gi},\delta_{gi})$, [F1] and [F12] make the cross covariances zero, and [F13] gives $\mathbb E[S_{g,n}^2]=\mathbb E[\phi_g^2]$. Applying [F14] to $S_{g,n}^2$ yields $P(|S_{g,n}|>M)\le\mathbb E[\phi_g^2]/M^2$; hence $S_{g,n}=O_P(1)$ by [F16]. [F1, F12, F13, F14, F15, F16, step 1.1]

3.1 By [A2], the risk-fraction hypotheses used by [F4] hold. Let $\widehat\theta_n=U_{n,w_n}/n$ and set $\theta=0$. By [F4], $ \sqrt n(\widehat\theta_n-\theta) =n^{-1/2}\sum_{g=0}^1\sum_{i=1}^{n_g}\phi_g(U_{gi},\delta_{gi})+o_P(1). $ Set $\psi_g=\rho_g\phi_g$. The group-sum term in [F6] is $ S_n^*=\sum_{g=0}^1\sqrt{\frac n{n_g}}\, \frac1{\sqrt{n_g}}\sum_{i=1}^{n_g}\psi_g(U_{gi},\delta_{gi}). $ Its difference from $n^{-1/2}\sum_{g,i}\phi_g(U_{gi},\delta_{gi})$ equals $ \sum_{g=0}^1\sqrt{\frac n{n_g}}\left(\rho_g-\frac{n_g}n\right)S_{g,n}=o_P(1), $ because $S_{g,n}=O_P(1)$ by step 2.2, $n_g/n\to\rho_g>0$, and there are only two groups. Thus the expansion required by [F6] is established with centered group influences $\psi_g$. [A2, F3, F4, F6, step 2.2, algebra]

4.1 Each $\psi_g$ is centered and square-integrable by step 1.1, and $\operatorname{Var}(\psi_g)=\rho_g^2\mathbb E[\phi_g^2]$ by [F10]. The covariance in [F6] is therefore $ \sum_{g=0}^1\rho_g^{-1}\operatorname{Var}(\psi_g) =\sum_{g=0}^1\rho_g\mathbb E[\phi_g^2]=\sigma_w^2 $ by step 2.1. Applying [F6] to the proved expansion in step 3.1 yields $U_{n,w_n}/\sqrt n\Rightarrow N(0,\sigma_w^2)$. [A1, F6, F10, step 1.1, step 2.1, step 3.1]

5.1 Suppose $\sigma_w^2>0$ and put $V_n=\widehat V_{n,w_n}/n$. By [A2] and [F5], $V_n\to_P\sigma_w^2$, so $P(V_n>\sigma_w^2/2)\to1$. The function $(x,v)\mapsto x/\sqrt{\max(v,\sigma_w^2/2)}$ is continuous everywhere. Apply [F18] and this map to the score limit and $V_n$; the result converges to $Z/\sigma_w$ for $Z\sim N(0,\sigma_w^2)$, which has law $N(0,1)$ by [F17]. On $\{V_n>\sigma_w^2/2\}$ this map equals the stated standardized statistic. Since the complement has probability tending to zero, changing the statistic there has no effect on weak convergence, including any fixed finite extension on the zero-denominator event. When $\sigma_w^2=0$, step 4.1 gives the degenerate score law and no standardized conclusion. [A2, F5, F17, F18, step 4.1] ∎