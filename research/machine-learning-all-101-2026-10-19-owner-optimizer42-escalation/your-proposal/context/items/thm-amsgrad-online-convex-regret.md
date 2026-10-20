---
id: thm-amsgrad-online-convex-regret
kind: theorem
title: AMSGrad has an online convex regret bound under decaying first-moment weights
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-amsgrad
  - lem-adaptive-moment-updates-well-defined
  - lem-amsgrad-one-step-regret-inequality
  - lem-amsgrad-momentum-energy-bound
  - def-natural-numbers
  - def-integer-power
  - thm-induction-principle
  - def-finite-sum
  - lem-finite-sum-laws
  - def-subgradient-and-subdifferential
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-of-square-roots
  - lem-of-square-monotone
  - def-ordered-field
  - lem-of-sign-rules
  - lem-of-inverse-positive
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - lem-algebra-of-continuous-real-maps-on-a-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "§4 Theorem 4 and Corollary 1; Appendix D proof and momentum-energy estimate, PDF pp. 5 and 15–16."
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6.1 adaptive regularization and the online potential/telescoping proof, PDF pp. 114–116."
---

## Statement

Let $d,T\in\mathbb N$ with $d,T\ge1$. Let $F\subseteq\mathbb R^d$ be nonempty, compact, and convex, choose $x_1\in F$, and suppose a finite $D_\infty\ge0$ satisfies $|x_i-u_i|\le D_\infty$ for every $x,u\in F$ and coordinate $i$. Let $\ell_1,\ldots,\ell_T:F\to\mathbb R$ be continuous convex losses, choose $g_t\in\partial\ell_t(x_t)$, and assume $|g_{t,i}|\le G_\infty$ for all $t,i$, where $G_\infty\ge0$. Run uncorrected AMSGrad with $\alpha_t=\alpha/\sqrt t$ for $\alpha>0$, fixed $\beta_2\in(0,1)$, $\beta_1=\beta_{1,1}\in[0,1)$, $0\le\beta_{1,t}\le\beta_1$, and $\gamma=\beta_1/\sqrt{\beta_2}<1$. For a comparator $u\in F$, define $R_T(u)=\sum_{t=1}^T(\ell_t(x_t)-\ell_t(u))$; the best-comparator regret is $R_T=\sup_{u\in F}R_T(u)$. Then
$$R_T(u)\le \frac{D_\infty^2\sqrt T}{2\alpha(1-\beta_1)}\sum_{i=1}^d\sqrt{\widehat v_{T,i}} +\frac{D_\infty^2}{(1-\beta_1)^2}\sum_{t=1}^T\sum_{i=1}^d\frac{\beta_{1,t}\sqrt{\widehat v_{t,i}}}{\alpha_t} +\frac{\alpha}{(1-\beta_1)^2(1-\gamma)\sqrt{1-\beta_2}} \sum_{i=1}^d\sum_{t=1}^T\frac{|g_{t,i}|}{\sqrt t}.$$
If, in addition, $\beta_{1,t}=\beta_1\lambda^{t-1}$ for a fixed $\lambda\in[0,1)$ or $\beta_{1,t}=\beta_1/t$, then with the other displayed parameters fixed, the best-comparator regret satisfies $R_T=O(\sqrt T)$.

## Statement references

[[alg-amsgrad]]: defines the uncorrected raw-moment update and coordinatewise historical maximum used here.

[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: convexity supplies the subgradient regret inequality.

[[def-subgradient-and-subdifferential]]: $g_t\in\partial\ell_t(x_t)$ means $\ell_t(u)\ge\ell_t(x_t)+\langle g_t,u-x_t\rangle$.

[[lem-amsgrad-one-step-regret-inequality]]: gives the per-round projection and momentum inequality.

[[lem-amsgrad-momentum-energy-bound]]: bounds the accumulated preconditioned momentum term.

[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous losses on the nonempty compact set have bounded sums, so the best-comparator regret is finite.

[[lem-algebra-of-continuous-real-maps-on-a-space]]: finite sums of continuous real-valued losses are continuous.

[Reddi, Kale, and Kumar, Theorem 4 and Appendix D](https://arxiv.org/pdf/1904.09237)

[Hazan, Introduction to Online Convex Optimization, §5.6.1](https://arxiv.org/pdf/1909.05207)

## Facts & Assumptions

**Given:** The finite horizon, compact convex domain, losses, subgradients, coordinate bounds, AMSGrad update, and parameters in the Statement.

[F1] [[alg-amsgrad]]: $v_{t,i}=\beta_2v_{t-1,i}+(1-\beta_2)g_{t,i}^2$, $\widehat v_{t,i}=\max\{\widehat v_{t-1,i},v_{t,i}\}$, $q_{t,i}:=\sqrt{\widehat v_{t,i}}$ is nondecreasing in $t$, and the weighted projection uses $\sum_iq_{t,i}(x_i-y_{t+1,i})^2$.

[F2] [[lem-adaptive-moment-updates-well-defined]]: all moment coordinates are finite and nonnegative; zero historical-maximum coordinates have zero first moments.

[F3] [[lem-amsgrad-one-step-regret-inequality]]: for each comparator $u$, the one-step loss difference is bounded by a potential difference, two momentum-energy terms, and a first-moment correction term.

[F4] [[lem-amsgrad-momentum-energy-bound]]: $\sum_t\alpha_tE_t(m_t)\le\frac{\alpha}{(1-\beta_1)(1-\gamma)\sqrt{1-\beta_2}}\sum_{i,t}|g_{t,i}|/\sqrt t$.

[F5] [[def-subgradient-and-subdifferential]]: $\ell_t(x_t)-\ell_t(u)\le\langle g_t,x_t-u\rangle$.

[F6] [[def-euclidean-inner-product]] and [[lem-finite-sum-laws]]: weighted squared distances and sums over coordinates expand termwise and telescope.

[F7] [[lem-of-square-monotone]] and [[thm-of-square-roots]]: $\widehat v_{t,i}\ge\widehat v_{t-1,i}\ge0$ implies $q_{t,i}\ge q_{t-1,i}$.

[F8] [[def-ordered-field]], [[lem-of-sign-rules]], and [[lem-of-inverse-positive]]: positive denominators preserve inequalities, and $1-\beta_1>0$, $1-\gamma>0$, and $1-\beta_2>0$.

[F9] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real-valued function on a nonempty compact subset of $\mathbb R^d$ attains a finite minimum.

[F10] [[def-natural-numbers]], [[def-integer-power]], [[def-finite-sum]], and [[lem-finite-sum-laws]]: integer powers obey $r^{n+1}=r^nr$, and finite sums may be telescoped and reindexed.

[F11] [[thm-induction-principle]]: induction propagates a base bound through every finite moment update.

[F12] [[lem-algebra-of-continuous-real-maps-on-a-space]]: the finite sum of the continuous losses is continuous.

## Proof

**Given:** All data and hypotheses in the Statement. Fix an arbitrary comparator $u\in F$.

1.1 By [F5] and the one-step inequality [F3], sum over $t=1,\ldots,T$. With $q_{t,i}=\sqrt{\widehat v_{t,i}}$, $\Phi_t=\sum_iq_{t,i}(x_{t,i}-u_i)^2$, and $\Psi_t=\sum_iq_{t,i}(x_{t+1,i}-u_i)^2$, the resulting bound is $$R_T(u)\le\sum_{t=1}^T\left[ \frac{\Phi_t-\Psi_t}{2\alpha_t(1-\beta_{1,t})} +\frac{\alpha_tE_t(m_t)}{2(1-\beta_{1,t})} +\frac{\beta_{1,t}\alpha_tE_t(m_{t-1})}{2(1-\beta_{1,t})} +\frac{\beta_{1,t}\Phi_t}{2\alpha_t(1-\beta_{1,t})} \right].$$ [F3, F5, F6, given, algebra]

1.2 The moment recurrence and $|g_{t,i}|\le G_\infty$ give $0\le v_{t,i}\le G_\infty^2$ by induction; since $\widehat v_{t,i}$ is the maximum of the raw second moments through round $t$, $q_{t,i}\le G_\infty$. Also $$\sum_{t=1}^T\frac{|g_{t,i}|}{\sqrt t}\le G_\infty\sum_{t=1}^T\frac1{\sqrt t}\le2G_\infty\sqrt T,$$ because $1/\sqrt t\le2(\sqrt t-\sqrt{t-1})$ for $t\ge1$. Thus the first and third terms in the bound are $O(\sqrt T)$. [F1, F2, F7, F8, F11, given, induction, algebra]

2.1 Since $q_{t,i}$ is nondecreasing and $\alpha_t$ is nonincreasing, $E_t(m_{t-1})\le E_{t-1}(m_{t-1})$ and $\alpha_t\le\alpha_{t-1}$ for $t\ge2$; the $t=1$ previous-moment term is zero. Also $\beta_{1,t}/(1-\beta_{1,t})\le\beta_1/(1-\beta_1)$. Thus the two energy sums in step 1.1 are at most $$\left(\frac{1}{2(1-\beta_1)}+\frac{\beta_1}{2(1-\beta_1)}\right) \sum_{t=1}^T\alpha_tE_t(m_t) \le\frac{1}{1-\beta_1}\sum_{t=1}^T\alpha_tE_t(m_t).$$ [F1, F2, F8, step 1.1, given, algebra]

2.2 In the potential sum of step 1.1, drop the final nonpositive term $-\Psi_T/(2\alpha_T(1-\beta_{1,T}))$, since $\Psi_T\ge0$. Fix coordinate $i$ and put $r_{t,i}=q_{t,i}/\alpha_t$, with $r_{0,i}=0$. The unpaired first positive potential is at most $D_\infty^2r_{1,i}/(2(1-\beta_1))$. For each $t\ge2$, pair the positive potential at round $t$ with the negative potential from round $t-1$. Its coefficient difference is $$\frac{q_{t,i}}{\alpha_t(1-\beta_{1,t})}-\frac{q_{t-1,i}}{\alpha_{t-1}(1-\beta_{1,t-1})} =\frac{r_{t,i}-r_{t-1,i}}{1-\beta_{1,t-1}} +r_{t,i}\left(\frac{1}{1-\beta_{1,t}}-\frac{1}{1-\beta_{1,t-1}}\right).$$ The first difference $r_{t,i}-r_{t-1,i}$ is nonnegative by [F1], [F7], and $\alpha_t=\alpha/\sqrt t$. The reciprocal difference is nonpositive when $\beta_{1,t}\le\beta_{1,t-1}$; otherwise it equals $(\beta_{1,t}-\beta_{1,t-1})/((1-\beta_{1,t})(1-\beta_{1,t-1}))\le\beta_{1,t}/(1-\beta_1)^2$. Thus the sum of all first coefficient differences, including the first-round term, is at most $D_\infty^2r_{T,i}/(2(1-\beta_1))$, because $r_{1,i}+\sum_{t=2}^T(r_{t,i}-r_{t-1,i})=r_{T,i}$. Summing coordinates gives $$\frac{D_\infty^2}{2\alpha_T(1-\beta_1)}\sum_iq_{T,i}.$$ The coefficient correction and the explicit last term of step 1.1 together contribute at most $$\frac{D_\infty^2}{2(1-\beta_1)^2}\sum_{t,i}\frac{\beta_{1,t}q_{t,i}}{\alpha_t} +\frac{D_\infty^2}{2(1-\beta_1)}\sum_{t,i}\frac{\beta_{1,t}q_{t,i}}{\alpha_t} \le\frac{D_\infty^2}{(1-\beta_1)^2}\sum_{t,i}\frac{\beta_{1,t}q_{t,i}}{\alpha_t},$$ because $2-\beta_1\le2$. [F1, F6, F7, F8, step 1.1, given, algebra]

3.1 Apply [F4] to the energy bound in step 2.1 and combine with step 2.2. Since $1/\alpha_T=\sqrt T/\alpha$, this gives the displayed regret inequality. [F4, step 2.1, step 2.2, given, algebra]

4.1 The cumulative loss $u\mapsto\sum_{t=1}^T\ell_t(u)$ is continuous by [F12], so [F9] gives a minimizer on $F$. The bound proved for arbitrary $u$ is uniform in $u$, hence it also holds for the best comparator. For any $r\in[0,1)$, [F10] gives the finite geometric identity $(1-r)\sum_{k=0}^Nr^k=\sum_{k=0}^N(r^k-r^{k+1})=1-r^{N+1}\le1$. For $\beta_{1,t}=\beta_1\lambda^{t-1}$, use $\sqrt t\le t$ and reindex the finite sum to obtain $$\sum_{t=1}^Tt\lambda^{t-1}=\sum_{j=1}^T\sum_{t=j}^T\lambda^{t-1}\le\frac1{1-\lambda}\sum_{j=1}^T\lambda^{j-1}\le\frac1{(1-\lambda)^2}$$ so $\sum_t\beta_{1,t}\sqrt t$ is bounded independently of $T$. For $\beta_{1,t}=\beta_1/t$, it is at most $\beta_1\sum_{t=1}^T1/\sqrt t\le2\beta_1\sqrt T$ by step 1.2. Therefore the second term is bounded by a constant for the geometric schedule and by a constant times $\sqrt T$ for the reciprocal schedule; both give $R_T=O(\sqrt T)$. [F4, F6, F8, F9, F10, F12, step 1.2, given, algebra] ∎
## Remarks

The theorem concerns online convex loss regret under the stated schedules. It does not imply convergence of a nonconvex neural-network training objective. A constant positive $\beta_{1,t}=\beta_1$ is not one of the two schedules in the $O(\sqrt T)$ conclusion.
