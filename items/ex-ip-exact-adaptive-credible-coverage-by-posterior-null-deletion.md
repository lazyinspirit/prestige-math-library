---
id: ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion
kind: example
title: Exact adaptive credible coverage by posterior-null deletion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-credible-set-and-frequency-coverage
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
  - lem-uniform-empirical-bayes-marginal-score-bound
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
  - def-polished-tail-class-for-gaussian-sequence
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
aliases:
  - op-ip-honest-coverage-over-ill-posed-truth-classes
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: AC supplies the countable Gaussian product probability model and its inherited Countable Choice. All choices of constants, finite sums, countable sums and set operations below use no stronger choice principle.
sources:
  references:
    - title: "Szabó, van der Vaart and van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets (2015)"
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "Theorem 3.6 and §5 supply conservative inflated-ball coverage; model §§2–3. The posterior-null deletion construction and compact-beta uniform diameter argument here are local deductions from the stated local suppliers, not attributed to this article."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume AC and Countable Choice. Fix $p>0$, $C\ge1$, $0<\beta_-<\beta_+<A<\infty$, $R\ge1$, $L_0\ge1$, an integer $N_0\ge1$, $\rho\ge2$, $m\in(0,R]$, and $0<\gamma<1$. Let a known positive singular-value sequence satisfy $C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$, and observe $X_i=\kappa_i\theta_i+n^{-1/2}\xi_i$ for $i\ge1$, where the fixed truth $\theta=(\theta_i)\in\ell^2(\mathbb N,\mathbb R)$ and the $\xi_i$ are independent $N(0,1)$ variables. For $\alpha>0$, use the product prior $\Pi_\alpha=\bigotimes_{i\ge1}N(0,i^{-1-2\alpha})$ and its product Gaussian posterior with coordinate mean $n\kappa_iX_i/(i^{1+2\alpha}+n\kappa_i^2)$ and variance $(i^{1+2\alpha}+n\kappa_i^2)^{-1}$. Select $\widehat\alpha_n$ as a Borel global maximizer over $[0,A]$ of the marginal log-likelihood score
$$\ell_n(\alpha;X)=-\frac12\sum_{i\ge1}\left[\log\left(1+\frac{n\kappa_i^2}{i^{1+2\alpha}}\right)-\frac{n^2\kappa_i^2X_i^2}{i^{1+2\alpha}+n\kappa_i^2}\right],$$
assuming the score series is finite on a Borel data domain of probability one for the truths below and is upper semicontinuous in $\alpha$ there. The $\widehat\alpha_n=0$ branch uses the whole space $\ell^2$ and asserts no posterior probability on $\ell^2$.

For $\theta\in\ell^2$, write $\|\theta\|_2=(\sum_{i\ge1}\theta_i^2)^{1/2}$. For $B\subseteq\ell^2$, define $\operatorname{diam}_{\ell^2}(B)=\sup_{u,v\in B}\|u-v\|_2$, with $\operatorname{diam}_{\ell^2}(\varnothing)=0$.

For $\beta\in[\beta_-,\beta_+]$, let $\Theta_\beta(R)=\{\theta\in\ell^2:\sum_{i\ge1}i^{2\beta}\theta_i^2\le R^2\}$ and let $\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ consist of those $\theta\in\ell^2$ satisfying $\sum_{i=N}^{\infty}\theta_i^2\le L_0\sum_{i=N}^{\lfloor\rho N\rfloor}\theta_i^2$ for every integer $N\ge N_0$. Put $\mathcal G_\beta=\Theta_\beta(R)\cap\Theta_{\mathrm{pt}}(L_0,N_0,\rho)\cap\{\theta:\theta_1=0,\ \|\theta\|_2\ge m\}$ and assume the fixed constants make each $\mathcal G_\beta$ nonempty. There exists a single graph-measurable data-indexed set rule $C_{n,\gamma}(X)\subseteq\ell^2$, depending only on the known model and class constants and not on $\theta$ or $\beta$, such that on $\widehat\alpha_n>0$ it has posterior mass $\Pi_{\widehat\alpha_n}(C_{n,\gamma}(X)\mid X)\ge1-\gamma$, its uniform frequentist coverage satisfies
$$\sup_{\beta\in[\beta_-,\beta_+]}\sup_{\theta\in\mathcal G_\beta}\left|P_\theta^{(n)}\{\theta\in C_{n,\gamma}(X)\}-(1-\gamma)\right|\longrightarrow0,$$
and its $\ell^2$-diameter has the no-log rate $n^{-\beta/(1+2\beta+2p)}$ uniformly in the following sense: for every $\eta>0$ there is $K_\eta<\infty$ such that
$$\limsup_{n\to\infty}\sup_{\beta\in[\beta_-,\beta_+]}\sup_{\theta\in\mathcal G_\beta}P_\theta^{(n)}\left\{\operatorname{diam}_{\ell^2}(C_{n,\gamma}(X))>K_\eta n^{-\beta/(1+2\beta+2p)}\right\}\le\eta.$$

## Example references

[[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails|Uniform conservative coverage of an inflated empirical-Bayes ball]]

[[lem-empirical-bayes-maximizer-bracket-on-polished-tails|The lower-selector bracket used in the diameter proof]]

[Szabó, van der Vaart and van Zanten (2015), Theorem 3.6 and §5](https://arxiv.org/pdf/1310.4489v5). The null-deletion construction is a local consequence for the unrestricted set-rule formulation; it is not attributed to that paper.

## Facts & Assumptions

**Given:** Exactly the original question's model, constants, score domain and selector, posterior, nonempty classes $\mathcal G_\beta$, AC and Countable Choice. No change in the permitted set geometry is made.

[A1] AC and Countable Choice are assumed as stated. [[def-axiom-of-choice]], [[def-countable-choice]]

[F1] The procedure and posterior formula give the coordinate means and variances. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]], [[lem-gaussian-sequence-empirical-bayes-posterior-formula]]

[F2] For fixed cap $A$, a constant inflation $L\ge1$ gives coverage tending uniformly to one over polished-tail truths with first coordinate zero, with the whole-space convention at selector zero. [[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails]]

[F3] The lower-selector bracket holds uniformly over all square-summable truths, with the score normalization and threshold $t=(16C^8)^{-1}$ stated there. [[lem-empirical-bayes-maximizer-bracket-on-polished-tails]] Its score hypotheses and uniform probability bound are supplied by [[lem-uniform-empirical-bayes-marginal-score-bound]].

[F4] Credibility means graph-measurable membership and posterior mass at least $1-\gamma$ on the declared domain; coverage is fixed-truth sampling probability. [[def-ip-credible-set-and-frequency-coverage]]

[F5] The polished-tail condition is the fixed tail-to-block energy inequality in the Example. [[def-polished-tail-class-for-gaussian-sequence]]

## Verification

**Given:** The complete model, class constants, supplied score domain and selector, and quantified conclusions in the Example and Facts & Assumptions. The sequence coordinates are exactly $i\ge1$, as in the displayed model and norm; thus $\ell^2$ here means $\ell^2(\{1,2,\ldots\},\mathbb R)$. No coordinate zero is added to that model.

1.1 Fix the inflation $L\ge1$ in [F2], depending only on the known constants. Let $B_n=\widehat C_n(L)$, including its whole-space zero-selector branch. With $U=\bigcup_{\beta\in[\beta_-,\beta_+]}\mathcal G_\beta$, [F2] gives $\epsilon_n:=\sup_{\theta\in U}P_\theta^{(n)}\{\theta\notin B_n\}\to0$. This is uniform because $U$ is a subset of the single polished-tail class in that theorem. This step claims conservative coverage only. [A1, F2, F5, given]

1.2 The random positive-selector posterior is supported on $\ell^2$ on a single Borel domain, not merely on a separate almost-sure domain for each fixed hyperparameter. Indeed intersect the supplied score domain with $$T_n=\left\{x:\sum_i n^2\kappa_i^2x_i^2/i^2<\infty\right\}.$$ For every square-summable truth the expectation of this nonnegative sum is $$n^2\sum_i\kappa_i^4\theta_i^2/i^2+n\sum_i\kappa_i^2/i^2<\infty.$$ Thus $T_n$ is Borel and has probability one under every such truth. For every $x\in T_n$ and every $a\ge0$, the squared posterior mean is bounded by that same sum, since $i^{1+2a}+n\kappa_i^2\ge i$. For every $a>0$ the variance trace is finite. Hence all positive-parameter posterior laws at these data are supported on $\ell^2$, including the selected law. Extend the selector by zero and use the whole space outside this common declared domain. This changes none of the sampling probabilities and asserts no posterior on the zero branch. [F1, given, construct]

1.3 We verify the diameter rate uniformly in $\beta$, rather than import a pointwise Sobolev assertion. Write $q_a=1+2a+2p$, $N_a=n^{1/q_a}$, and $d=\beta-a\ge0$. In the score $h_n(a;\theta)$ of [F3], put $e_i=i^{2\beta}\theta_i^2$, so $\sum_i e_i\le R^2$. For $i\le N_a$, the multiplier of $e_i$ is at most $$\frac{i^{1-2d}\log i}{N_a\log N_a}\le N_a^{-\min(1,2d)}.$$ If $1-2d\ge0$, bound both powers and logarithms by their values at $N_a$; otherwise use $i^{1-2d}\le1$. For $i>N_a$, the multiplier is at most $$\frac{N_a^{2q_a}}{N_a\log N_a}i^{-1-2a-4p-2\beta}\log i\le N_a^{-2d}.$$ The last function of $i$ is decreasing for $i\ge N_a$ once $n$ is uniformly large, since its negative power has exponent at least $1+4p$. Both ranges therefore give $$h_n(a;\theta)\le R^2N_a^{-\min(1,2(\beta-a))}.$$ These bounds hold simultaneously for $0\le a\le\beta$, every $\beta$ in the fixed compact interval, and every $\theta\in\Theta_\beta(R)$. [F3, given, algebra]

2.1 Choose a fixed $D>0$ with $R^2\exp\{-2D/(1+2\beta_++2p)\}<t$. For all sufficiently large $n$, put $a_{n,\beta}=\beta-D/\log n\ge\beta_-/2$. For every $0\le a\le a_{n,\beta}$, step 1.3 makes $h_n(a;\theta)<t$: here $\min(1,2(\beta-a))\log N_a\ge2D/(1+2\beta_++2p)$ when $\log n\ge2D$. Consequently $\underline\alpha_n\ge a_{n,\beta}$, including the empty-threshold convention $\underline\alpha_n=A$. The uniform lower bracket [F3] yields $$\sup_{\beta,\theta\in\mathcal G_\beta}P_\theta^{(n)}\{\widehat\alpha_n<a_{n,\beta}\}\longrightarrow0.$$ In particular $\delta_n:=\sup_{\theta\in U}P_\theta^{(n)}\{\widehat\alpha_n=0\}\to0$. [F3, step 1.3, algebra]

2.2 Put $H=\{u\in\ell^2:u_1=0\}$, $Z_n=\{\widehat\alpha_n=0\}$ and $E_n=\{\sqrt nX_1\le\Phi^{-1}(1-\gamma)\}$. Define $$C_n=\begin{cases}\ell^2,&Z_n,\\B_n,&Z_n^c\cap E_n,\\B_n\setminus H,&Z_n^c\cap E_n^c.\end{cases}$$ For $n<3$ one may use $\ell^2$. The positive-selector posterior's first-coordinate variance is $(1+n\kappa_1^2)^{-1}>0$, so it assigns $H$ mass zero for every data point of the declared domain, even though the hyperparameter is data-selected. Since $L\ge1$, $B_n$ has posterior mass at least $1-\gamma$; deleting $H$ preserves that mass. On $Z_n$ the specified whole-space convention is retained. [F1, F4, step 1.2, construct]

3.1 Uniformly for $a\in[\beta_-/2,A]$, split the posterior variance trace at $N_a$. Below that cutoff use $v_i(a)\le C^2i^{2p}/n$; above it use $v_i(a)\le i^{-1-2a}$. Summation and an integral comparison give $$\sum_i v_i(a)\le K n^{-2a/q_a},$$ where $K$ depends only on the fixed constants (the tail factor $1/(2a)$ is uniformly bounded). Markov's inequality applied to the centered posterior squared norm bounds its $(1-\gamma)$ norm quantile by $\sqrt{K/\gamma}\,n^{-a/q_a}$. The variances, hence the norm quantile, decrease with $a$ by coupling all centered coordinates with the same standard normals. On the event of step 2.1, the selected radius is therefore at most $\sqrt{K/\gamma}\,n^{-a_{n,\beta}/q_{a_{n,\beta}}}$. The derivative of $a/q_a$ is $(1+2p)/q_a^2\le1/(1+2p)$, so this is at most $K' n^{-\beta/(1+2\beta+2p)}$ with one $K'$ for the full compact $\beta$ interval. Thus outside an event of uniformly vanishing probability, $\operatorname{diam}(B_n)\le2LK'n^{-\beta/(1+2\beta+2p)}$. This includes the uniformly negligible infinite-diameter zero-selector branch. [F1, step 2.1, algebra]

3.2 This is one rule independent of $\theta$ and $\beta$. Its graph is Borel: the coordinate posterior means and selector are Borel, and the squared norm is the limit of its finite coordinate sums. For completeness, on a fixed countable standard-normal product space the map $(a,z)\mapsto\sum_i v_i(a)z_i^2$ is nonnegative Borel. Integrating its threshold indicators gives a Borel distribution function in $(a,s)$. Its quantile is Borel, by taking the infimum of positive rational radii whose distribution function is at least $1-\gamma$; right continuity ensures this quantile has the required posterior mass. The centered norm has a positive finite quantile: it is finite by its finite second moment and has no atom at zero because its first coordinate is nondegenerate. Thus the radius is positive. Deleting the closed codimension-one hyperplane leaves a dense subset of any positive-radius ball: perturb a point toward the center if necessary and then a sufficiently small amount along the first coordinate. Hence $B_n\setminus H$ has the same diameter $2Lr_{n,\gamma}(\widehat\alpha_n)$ as $B_n$. Diameter is consequently an extended Borel random variable, equal to this expression off $Z_n$ and infinity on $Z_n$. [F1, step 1.2, step 2.2, construct]

4.1 Every allowed truth lies in $H$ and has $P_\theta^{(n)}(E_n)=1-\gamma$ exactly, since $\theta_1=0$. Its coverage equals $$P_\theta(Z_n)+P_\theta(Z_n^c\cap E_n\cap\{\theta\in B_n\}).$$ Subtracting $P_\theta(E_n)$ leaves $$P_\theta(Z_n\cap E_n^c)-P_\theta(Z_n^c\cap E_n\cap\{\theta\notin B_n\}).$$ Its absolute value is at most $\delta_n+\epsilon_n\to0$ uniformly over both suprema in the question. No independence among $E_n$, the selector and $B_n$ is used. Also $C_n\subseteq B_n$ on every branch, so step 3.1 proves the requested diameter statement, in fact with limiting supremum zero for one sufficiently large fixed diameter constant. The nonzero lower norm bound $m$ is retained and needs no additional argument. This answers the unchanged unrestricted existence question affirmatively. It does not identify the constructed sets as balls or attribute this null-deletion construction to the cited literature. [F4, step 1.1, step 2.1, step 3.1, step 2.2, algebra] ∎
