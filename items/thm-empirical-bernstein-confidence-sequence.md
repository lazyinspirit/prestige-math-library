---
id: thm-empirical-bernstein-confidence-sequence
kind: theorem
title: Empirical-Bernstein confidence sequence under adaptive sampling
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-empirical-bernstein-confidence-sequence
  - def-subexponential-uniform-boundary
  - def-time-varying-target-confidence-sequence
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-predictable-discrete-time-process
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - def-martingale-submartingale-and-supermartingale
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - thm-tower-property-of-conditional-expectation
  - def-nonnegative-test-supermartingale
  - thm-mixture-of-null-supermartingales
  - thm-villes-inequality
  - def-axiom-of-choice
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
  - cor-exponential-reciprocal-and-positivity
  - thm-intermediate-value
  - lem-rat-embeds-dense
  - thm-logarithm-derivative-and-integral
  - lem-derivative-algebra-and-chain-rules
  - cor-mean-value-theorem
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-seven-generators-of-the-borel-sigma-algebra-on-r
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences"
      url: https://arxiv.org/pdf/1810.08240v9
    - title: "Joel A. Tropp, Probability Theory & Stochastic Processes, Caltech CMS 117 lecture notes"
      url: https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf
---

## Statement

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0},P)$ be a discrete filtered probability space, let $a\leq b$ be real numbers, and put $c=b-a$. Let $(X_t)_{t\geq1}$ be real with $X_t$ measurable with respect to $\mathcal F_t$ and $P(a\leq X_t\leq b)=1$ for every $t$. Let $(\widehat X_t)_{t\geq1}$ be real with $\widehat X_t$ measurable with respect to $\mathcal F_{t-1}$ and $P(a\leq\widehat X_t\leq b)=1$ for every $t$. Fix $\delta\in(0,1)$ and write $\alpha=\delta/2$. For $c>0$, let $u_{\alpha,c}$ be any Borel one-sided sub-exponential uniform boundary with crossing probability $\alpha$ at scale $c$. Choose any versions $m_t=E[X_t\mid\mathcal F_{t-1}]$ and define
$$\bar X_t=\frac1t\sum_{i=1}^tX_i,\qquad \mu_t=\frac1t\sum_{i=1}^tm_i,\qquad V_t=\sum_{i=1}^t(X_i-\widehat X_i)^2.$$
Let $C_t$ be the interval returned at time $t$ by the empirical-Bernstein interval-update algorithm, using $u_{\alpha,c}$ when $c>0$. Then
$$P\!\left(\mu_t\in C_t\text{ for every }t\geq1\right)\geq1-\delta.$$
The probability statement is independent of the chosen conditional-expectation versions. No common conditional mean is assumed. If there is a fixed real $\mu$ such that $E[X_i\mid\mathcal F_{i-1}]=\mu$ almost surely for every $i$, then $\mu_t=\mu$ simultaneously almost surely and the same intervals cover this fixed mean.

For $c>0$, the finite-mixture formula also supplies a valid boundary: choose an integer $J\geq1$, numbers $0<\lambda_j<1/c$, and weights $w_j>0$ with $\sum_{j=1}^Jw_j=1$. For every $v\geq0$, the unique nonnegative solution $s=u_{\alpha,c}(v)$ of
$$\sum_{j=1}^Jw_j\exp\!\left(\lambda_js-\psi_{E,c}(\lambda_j)v\right)=\frac1\alpha$$
defines a Borel one-sided sub-exponential uniform boundary with crossing probability $\alpha$ at scale $c$.

## Statement references

[Howard et al., Theorem 4, §4.1, and Appendix A.8 (arXiv v9 PDF pp. 14, 35)](https://arxiv.org/pdf/1810.08240v9)

[Tropp, Lecture 26, §§26.4.3–26.4.4 (PDF pp. 397–399; printed lecture pages 382–385)](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf)

## Facts & Assumptions

**Given:** Assume AC. The objects, hypotheses, conventions, error levels, versions, boundary, and interval process in the Statement.

[F1] [[def-filtration-and-filtered-probability-space]]: $(\mathcal F_t)$ is an increasing filtration on one probability space, indexed from time zero.

[F2] [[def-adapted-and-integrable-stochastic-process]]: each $X_t$ is an adapted real random variable; the almost-sure boundedness makes it integrable at each time.

[F3] [[def-predictable-discrete-time-process]]: each forecast $\widehat X_t$ is $\mathcal F_{t-1}$-measurable.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is real, integrable, measurable with respect to the conditioning sigma-algebra, and has the defining event integrals.

[F5] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are unique almost-sure classes of versions; the notation is independent of the chosen representative up to almost-sure equality.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, positive, order-preserving, and preserves constants.

[F7] [[thm-taking-out-what-is-known]]: for a bounded measurable factor $Z$, $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely.

[F8] [[thm-tower-property-of-conditional-expectation]]: if $\mathcal H\subseteq\mathcal G$, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ almost surely.

[F9] [[def-martingale-submartingale-and-supermartingale]]: an integrable adapted process is a supermartingale when its one-step conditional expectations are at most its current values almost surely.

[F10] [[def-nonnegative-test-supermartingale]]: under a null law, a test supermartingale is adapted, integrable, nonnegative, supermartingale, and has initial expectation at most one.

[F11] [[thm-mixture-of-null-supermartingales]]: a product-measurable mixture of null test supermartingales is again a null test supermartingale.

[F12] [[thm-villes-inequality]]: if $M$ is a nonnegative test supermartingale, then $P(\sup_{t\geq0}M_t\geq1/\alpha)\leq\alpha$.

[F13] [[def-subexponential-uniform-boundary]]: a scale-$c$ one-sided sub-exponential boundary bounds the crossing probability of every pair in its stated process class.

[F14] The exponential is positive, continuous and strictly increasing, has $\exp(0)=1$, and tends to $0$ at $-\infty$ and to $+\infty$ at $+\infty$. [[thm-exponential-is-strictly-increasing]] [[thm-exponential-limits-and-range]] [[cor-exponential-reciprocal-and-positivity]]

[F15] A continuous real function on a closed bounded interval takes every value between its endpoint values. [[thm-intermediate-value]]

[F16] Strictly between any two real numbers lies a rational. [[lem-rat-embeds-dense]]

[F17] On $(0,\infty)$, $\log'(x)=1/x$ and $\log x=\int_1^x dt/t$, so $\log1=0$. Derivatives obey the sum, product and chain rules, differentiability implies continuity, and the mean value theorem compares endpoint differences with interior derivatives. [[thm-logarithm-derivative-and-integral]] [[lem-derivative-algebra-and-chain-rules]] [[cor-mean-value-theorem]]

[F18] Affine functions are continuous, finite sums and scalar multiples preserve continuity, and compositions of continuous real functions are continuous. [[thm-algebra-of-continuous-functions]] [[thm-composition-of-continuous-functions]]

[F19] The open right rays $(r,\infty)$, $r\in\mathbb R$, generate the real Borel sigma-algebra. [[thm-seven-generators-of-the-borel-sigma-algebra-on-r]]

[L1] [[def-time-varying-target-confidence-sequence]]: an adapted target process has a confidence sequence when its random intervals are measurable and cover the target at all integer times with the stated probability.

[L2] [[alg-empirical-bernstein-confidence-sequence]]: when $c>0$, the algorithm updates $\bar X_t$ and $V_t$ from the observed data and returns the closed interval centered at $\bar X_t$ with radius $u_{\alpha,c}(V_t)/t$; when $c=0$, it returns $[a,a]$.

[A1] [[def-axiom-of-choice]]: AC is assumed for conditional-expectation existence and for the cited supermartingale and Ville interfaces.

## Proof

**Proof technique:** direct.

1.1 If $c=0$, then $X_t=\widehat X_t=a$ almost surely for every $t$. By [F6], each $m_t=a$ almost surely, so $\mu_t=a$ simultaneously almost surely and the algorithm's singleton $C_t=[a,a]$ covers it. If $c>0$, boundedness gives $X_t\in L^1(P)$; choose the versions in the Statement using [A1]. Any two versions agree almost surely by [F5], and the countable union of their exceptional null sets is null, so the all-times coverage probability does not depend on those choices. [given, F4, F5, F6, A1, L2, choose, algebra]

1.2 For $x>-1$ define $r(x)=(x-\log(1+x))/x^2$ when $x\ne0$ and $r(0)=1/2$. Direct integration gives $r(x)=\int_0^1 t/(1+tx)\,dt$. The integrand decreases in $x$ for every $t>0$, so $r$ is decreasing on $(-1,\infty)$. If $c>0$, $0<\lambda<1/c$, and $|\xi|\leq c$, then $x=\lambda\xi\geq-\lambda c>-1$, whence $\lambda\xi-\log(1+\lambda\xi)=(\lambda\xi)^2r(\lambda\xi)\leq(\lambda\xi)^2r(-\lambda c)=\psi_{E,c}(\lambda)\xi^2$. Exponentiating yields $\exp(\lambda\xi-\psi_{E,c}(\lambda)\xi^2)\leq1+\lambda\xi$; the same holds at $\lambda=0$ by equality. [given, F13, algebra]

1.3 Fix any one-sided sub-exponential pair at scale $c>0$ and any finite mixture parameters from the Statement. For each $j$, its defining condition [F13] supplies a dominating nonnegative test supermartingale $L^{\lambda_j}$. For $x=c\lambda_j\in(0,1)$, define $h(t)=-\log(1-t)-t$ on $t<1$. By [F17], $h(0)=0$ and the chain and sum rules give $h'(t)=1/(1-t)-1=t/(1-t)$. The function is continuous on $[0,x]$ and differentiable on $(0,x)$ by [F17]. The mean value theorem [F17] gives $h(x)-h(0)=x h'(\theta)\geq0$ for some $0<\theta<x<1$. Since $c^2>0$, $\psi_{E,c}(\lambda_j)=h(x)/c^2\geq0$. For each fixed $v\geq0$, $g_v(s)=\sum_jw_j e^{\lambda_js-\psi_{E,c}(\lambda_j)v}$ is continuous by [F14] and [F18]. Every term is strictly increasing in $s$, since $w_j>0$ and $\lambda_j>0$, so [F14] makes the sum strictly increasing. As $s\to-\infty$, each affine exponent tends to $-\infty$, so [F14] makes every term tend to zero; the finite sum tends to zero. As $s\to\infty$, its first term tends to infinity by [F14] and every other term is positive, so the sum tends to infinity. Also $g_v(0)=\sum_jw_j e^{-\psi_{E,c}(\lambda_j)v}\leq\sum_jw_j=1<1/\alpha$. The two limits give finite $s_-<0<s_+$ with $g_v(s_-)<1/\alpha<g_v(s_+)$; the intermediate value theorem [F15] on $[s_-,s_+]$ gives a root between them, and strict increase makes it unique and positive. Write this root as $u_{\alpha,c}(v)$. For each real $r\leq0$, $\{v\geq0:u_{\alpha,c}(v)<r\}$ is empty. For $r>0$, strict increase and the root equation give $\{v\geq0:u_{\alpha,c}(v)<r\}=\bigcup_{\substack{q\in\mathbb Q\\0<q<r}}\{v\geq0:g_v(q)>1/\alpha\}$. Indeed, if $u_{\alpha,c}(v)<r$, [F16] supplies a rational $q$ strictly between the positive root and $r$; conversely, $g_v(q)>1/\alpha$ implies $q>u_{\alpha,c}(v)$. For fixed $q$, $g_v(q)=\sum_jw_j e^{\lambda_jq-\psi_{E,c}(\lambda_j)v}$ is continuous in $v$ by [F14] and [F18], so each set in the union is open relative to $[0,\infty)$ and the union is open. To apply [F19] directly, if $r\geq0$, strict increase gives $\{v\geq0:u_{\alpha,c}(v)>r\}=\{v\geq0:g_v(r)<1/\alpha\}$, which is also relatively open by [F14] and [F18]; if $r<0$, this inverse image is all of $[0,\infty)$. Thus the inverse images of every open right ray are Borel. The real sets whose inverse images are Borel form a sigma-algebra, so [F19] implies that $u_{\alpha,c}$ is Borel. There are finitely many indices $j$ and countably many integer times, so the almost-sure domination inequalities for all $L^{\lambda_j}$ hold simultaneously outside one null set. The finite mixture $L_t=\sum_jw_jL_t^{\lambda_j}$ is a test supermartingale by [F11]; finite support makes its product measurability immediate. If $S_t\geq u_{\alpha,c}(V_t)$, then $L_t\geq g_{V_t}(S_t)\geq1/\alpha$. Ville's inequality [F12] bounds this crossing event by $\alpha$, so the root is a boundary as in [F13]. [given, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, A1, algebra]

2.1 On the increasing filtration [F1], for $t\geq1$ put $Y_t=X_t-m_t$, $\eta_t=\widehat X_t-m_t$, and $\xi_t=Y_t-\eta_t=X_t-\widehat X_t$. By [F6], $a\leq m_t\leq b$ almost surely, so $|\eta_t|\leq c$; by [F8], $E[Y_t\mid\mathcal F_{t-1}]=0$. Also [F3] and [F4] make $\eta_t$ bounded and $\mathcal F_{t-1}$-measurable, and $|\xi_t|\leq c$. Apply step 1.2 to $\xi_t$ and multiply by $e^{\lambda\eta_t}$. Taking conditional expectations, using [F6] and the bounded-factor identity [F7], gives $E[e^{\lambda Y_t-\psi_{E,c}(\lambda)\xi_t^2}\mid\mathcal F_{t-1}]\leq e^{\lambda\eta_t}(1-\lambda\eta_t)\leq1$, since $1-z\leq e^{-z}$ for $z=\lambda\eta_t<1$. [F1, F2, F3, F4, F6, F7, F8, A1, step 1.2]

3.1 For each $0\leq\lambda<1/c$, define $M_0^\lambda=1$ and $M_t^\lambda=\exp\!\left(\lambda\sum_{i=1}^tY_i-\psi_{E,c}(\lambda)V_t\right)$. This process is nonnegative and adapted. At each fixed $t$, its exponent is bounded because $|Y_i|\leq c$ and $0\leq V_t\leq c^2t$, so it is integrable. The one-step inequality in step 2.1, multiplied by the bounded $\mathcal F_{t-1}$-measurable $M_{t-1}^\lambda$, proves the supermartingale condition. Thus [F9], [F10], and [A1] make $M^\lambda$ a nonnegative test supermartingale with initial expectation one, so $L_t^\lambda=M_t^\lambda$ verifies the domination condition in [F13]. Replacing every $Y_i,\eta_i$ by $-Y_i,-\eta_i$ gives the same conclusion for the pair $(-S_t,V_t)$, where $S_t=\sum_{i=1}^tY_i$. [F2, F3, F9, F10, A1, F13, step 2.1]

4.1 For the supplied boundary, [F13] and step 3.1 show that the crossing probability is at most $\alpha$ for both $(S_t,V_t)$ and $(-S_t,V_t)$. Outside their union, $|S_t|<u_{\alpha,c}(V_t)$ for every $t$. Since $S_t=t(\bar X_t-\mu_t)$, this is exactly $\mu_t\in C_t$ for every interval returned by [L2], with probability at least $1-2\alpha=1-\delta$. By [F1] and [F4], each $m_i$ is $\mathcal F_{i-1}$-measurable, so $\mu_t$ is $\mathcal F_t$-measurable; $\bar X_t,V_t$ are also $\mathcal F_t$-measurable by [F2] and [F3], and composition with the Borel boundary makes the interval endpoints measurable. Thus [L1] applies. If all $m_i=\mu$ almost surely for one fixed $\mu$, their countable intersection has probability one and then $\mu_t=\mu$ for all $t$, proving the fixed-mean clause. [given, F1, F2, F3, F4, F13, L1, L2, step 1.1, step 3.1, algebra] ∎
