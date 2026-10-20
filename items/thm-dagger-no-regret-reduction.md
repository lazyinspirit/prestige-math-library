---
id: thm-dagger-no-regret-reduction
kind: theorem
title: DAgger no-regret reduction under strongly convex surrogate losses
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-imitation-learning-and-expert-surrogate-loss
  - alg-dagger
  - lem-dagger-strongly-convex-follow-the-leader-regret
  - lem-dagger-mixture-occupancy
  - lem-dagger-task-cost-from-expert-surrogate
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "The infinite-sample FTL proof is choice-free: finite occupancies are defined by finite recursion and cumulative minimizers are attained by hypothesis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Theorems 3.1–3.2 and §4.2 proofs, PDF pp. 3–4; the FTL stability and mixing-sum bounds are proved locally here."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Chapter 6, PDF pp. 4–7 / printed pp. 57–60: DAgger procedure and no-regret framing."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9, PDF pp. 51–54 / note pages 47–48: learner-induced loss, FTRL comparison, and recoverability convention."
---

## Statement

Consider the finite-horizon imitation-learning setting with deterministic expert $\pi^*$, positive integer horizon $T$, and expert surrogate $\ell(s,\theta)\in[0,1]$ defined previously. Let $d\ge1$ be an integer and let $K\subseteq\mathbb R^d$ be nonempty and convex, with $\|x-y\|_2=(\sum_{r=1}^d(x_r-y_r)^2)^{1/2}$. Assume there are constants $\mu>0$ and $G\ge0$ such that, uniformly in $s$, $\ell(s,\cdot)$ is $G$-Lipschitz, meaning $|\ell(s,x)-\ell(s,y)|\le G\|x-y\|_2$, and is $\mu$-strongly convex on $K$; that is,

$$\ell(s,(1-\lambda)x+\lambda y)\le(1-\lambda)\ell(s,x)+\lambda\ell(s,y)-\frac\mu2\lambda(1-\lambda)\|x-y\|_2^2$$

for all $x,y\in K$ and $\lambda\in[0,1]$. Run the population-loss version of DAgger for a positive integer $N$ rounds with exact FTL updates, and assume each cumulative population loss attains its minimum on $K$. Let $\beta_i\in[0,1]$ satisfy $\beta_1\le1$ and $\beta_i\le(1-\alpha)^{i-1}$ for $2\le i\le N$, where $\alpha\in(0,1]$ is fixed independently of $T$ and $N$. Suppose $u\ge0$ satisfies $Q_t^*(s,a)-V_t^*(s)\le u$ for every time $t$, state $s$, and admissible action $a$.

Let $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$ be the true round-$i$ loss under the mixed rollout policy, and let $\epsilon_N=\min_{\theta\in K}N^{-1}\sum_{i=1}^N L_i(\theta)$, with the minimum attained. Define $H_0=0$, $H_n=\sum_{j=1}^n1/j$, let $q_T$ be the least nonnegative integer with $T\le2^{q_T}$, and let $k_\alpha$ be the least positive integer with $k_\alpha\alpha\ge1$. Then some learned policy $\hat\pi\in\{\hat\pi_1,\ldots,\hat\pi_N\}$ satisfies

$$J(\hat\pi)\le J(\pi^*)+uT\left[\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}+k_\alpha(q_T+2)}{N}\right].$$

In particular, the additive term beyond $uT\epsilon_N$ is at most $1$ whenever $N\ge uT\bigl(1+\frac{4G^2}{\mu}H_{N-1}+k_\alpha(q_T+2)\bigr)$. For fixed $\alpha,\mu,G$ and a valid scale $u\ge1$, the sufficient iteration count is $\widetilde O(uT)$ because $H_{N-1}$ and $q_T$ grow logarithmically. If a valid one-step bound has $u<1$, it may be enlarged to $1$ for this iteration-count corollary; the exact inequality above remains valid with the original $u$. This is an infinite-sample statement: expert labels must be obtained by interaction on states visited under $\pi_i$.

## Statement references

[[def-imitation-learning-and-expert-surrogate-loss]]: defines task cost, finite-horizon state occupancy, surrogate disagreement domination, mixed rollout losses, and $\epsilon_N$.

[[alg-dagger]]: population-loss FTL updates, expert/learner mixture, and interactive expert labels.

[[lem-dagger-strongly-convex-follow-the-leader-regret]]: exact cumulative FTL regret bound $1+(4G^2/\mu)H_{N-1}$.

[[lem-dagger-mixture-occupancy]]: a bounded state loss changes by at most $\min(1,T\beta_i)$ between the mixed and learner occupancies.

[[lem-dagger-task-cost-from-expert-surrogate]]: task-cost increase is at most $uT$ times the learner's own-occupancy surrogate loss.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Theorems 3.1–3.2 and §4.2, PDF pp. 3–4.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 4–7 / printed pp. 57–60.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): PDF pp. 51–54 / note pages 47–48.

## Facts & Assumptions

**Given:** The finite-horizon MDP and expert definitions, uniform bounded strongly convex Lipschitz surrogate, exact population FTL updates, geometric expert-use schedule, attained minimum defining $\epsilon_N$, and one-step expert cost-to-go bound in the Statement.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: $d_\pi$ is the normalized average state occupancy; $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$; the surrogate upper-bounds action disagreement; and $J(\pi)$ is finite-horizon expected task cost.

[F2] [[alg-dagger]]: at round $i$, DAgger rolls out $\pi_i=\beta_i\pi^*+(1-\beta_i)\hat\pi_i$, obtains expert labels on visited states, and sets $\theta_{i+1}$ to an attained minimizer of the cumulative losses.

[F3] [[lem-dagger-strongly-convex-follow-the-leader-regret]]: for the stated bounded $\mu$-strongly convex $G$-Lipschitz losses, $\sum_iL_i(\theta_i)-N\epsilon_N\le1+(4G^2/\mu)H_{N-1}$.

[F4] [[lem-dagger-mixture-occupancy]]: for every $g:S\to[0,1]$, the absolute difference between its mixed-policy and learner-policy occupancy expectations is at most $\min(1,T\beta_i)$; in particular, either expectation is at most the other plus this error.

[F5] [[lem-dagger-task-cost-from-expert-surrogate]]: $J(\hat\pi_i)-J(\pi^*)\le uT\sum_s d_{\hat\pi_i}(s)\ell(s,\theta_i)$.

[A1] For every state $s$, $\ell(s,\cdot)$ is $G$-Lipschitz and $\mu$-strongly convex on the nonempty convex parameter set $K$, uniformly in $s$, with $0\le\ell\le1$.

[A2] Every cumulative population loss attains its minimum on $K$, and the minimum defining $\epsilon_N$ is attained.

[A3] The expert-use schedule satisfies $0\le\beta_1\le1$ and $0\le\beta_i\le(1-\alpha)^{i-1}$ for $2\le i\le N$, with fixed $0<\alpha\le1$.

[A4] The expert cost-to-go gap satisfies $Q_t^*(s,a)-V_t^*(s)\le u$ for every time, state, and admissible action, with $u\ge0$.

## Proof

1.1 Since $L_i$ is the finite probability-weighted average of the statewise losses, averaging the uniform strong-convexity inequality and the $G$-Lipschitz inequality in [A1] over $d_{\pi_i}$ shows that each $L_i$ is $\mu$-strongly convex, $G$-Lipschitz, and valued in $[0,1]$. The exact FTL updates [F2], attained minima [A2], and bound [F3] therefore give $\frac1N\sum_{i=1}^NL_i(\theta_i)\le\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}}{N}$. [A1, A2, F1, F2, F3, algebra]

1.2 Let $q=1-\alpha$ and $k=k_\alpha$. Since $(1-\alpha)(1+\alpha)=1-\alpha^2\le1$, $q\le(1+\alpha)^{-1}$. For every integer $n\ge1$, $(1+\alpha)^n\ge1+n\alpha$: it is equality at $n=1$, and multiplying the inductive inequality by $1+\alpha>0$ gives $(1+\alpha)^{n+1}\ge1+(n+1)\alpha+n\alpha^2\ge1+(n+1)\alpha$. Thus $(1+\alpha)^k\ge1+k\alpha\ge2$ and $q^k\le1/2$. Partition indices $i$ into blocks $i=jk+r+1$ with $j\ge0$ and $0\le r<k$. On block $j$, [A3] gives $\min(1,T\beta_i)\le\min(1,Tq^{jk})\le\min(1,T2^{-j})$. Hence $\sum_{i=1}^N\min(1,T\beta_i)\le k\sum_{j=0}^{\infty}\min(1,T2^{-j})\le k(q_T+2)$, because the first $q_T+1$ terms are at most $1$ and the remaining geometric tail is $T\sum_{j=q_T+1}^{\infty}2^{-j}=T2^{-q_T}\le1$. [A3, F2, algebra]

1.3 For every positive integer $n$, let $q_n$ be the least nonnegative integer with $n\le2^{q_n}$. If $N=1$, then $H_{N-1}=0\le1+q_N$. If $N\ge2$, group $H_{N-1}$ into the initial term $1$ and blocks $2^{j-1}<r\le2^j$, $1\le j\le q_N$. Each block has at most $2^{j-1}$ terms, each at most $2^{-(j-1)}$, so $H_{N-1}\le1+q_N$. These dyadic lengths grow logarithmically in their arguments. [F3, algebra, construct]

2.1 For each round, apply the absolute-value estimate [F4] to $g(s)=\ell(s,\theta_i)\in[0,1]$, using its direction $\sum_s d_{\hat\pi_i}(s)g(s)\le L_i(\theta_i)+\min(1,T\beta_i)$. Averaging over $i$ and using step 1.1 yields $\frac1N\sum_{i=1}^N\sum_s d_{\hat\pi_i}(s)\ell(s,\theta_i)\le\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}}N+\frac1N\sum_{i=1}^N\min(1,T\beta_i)$. [A2, F1, F2, F4, step 1.1, algebra]

3.1 By step 1.2 and step 2.1, the average own-occupancy surrogate loss of the finite sequence $\hat\pi_1,\ldots,\hat\pi_N$ is at most $\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}+k_\alpha(q_T+2)}N$. At least one member $\hat\pi_i$ has own-occupancy surrogate loss no larger than this average, because otherwise every term in the finite average would be strictly larger than the average. [F2, step 1.2, step 2.1, algebra]

4.1 Apply the one-step assumption [A4] through [F5] to that index $i$ and substitute the bound from step 3.1. This gives the stated task-cost inequality. [A4, F5, step 3.1, algebra]

5.1 If $N\ge uT\bigl(1+\frac{4G^2}{\mu}H_{N-1}+k_\alpha(q_T+2)\bigr)$, then the additive term in the Statement is at most $1$. To verify the iteration order, set $\bar u=\max(1,u)$ and $B=\bar uT\ge1$; let $b=\lceil B\rceil$ and let $Q$ be the least integer with $b+T+2\le2^Q$. Choose an integer $C\ge1$ and set $N=\lceil CbQ\rceil$. Since $b\le2^Q$ and $Q\le2^Q$, $N\le(C+1)2^{2Q}$, so the least $q_N$ with $N\le2^{q_N}$ satisfies $q_N\le2Q+q_{C+1}$. By step 1.3 and $q_T\le Q$, the bracket is at most $1+\frac{4G^2}{\mu}(2Q+q_{C+1}+1)+k_\alpha(Q+2)$. Set $c=4G^2/\mu$, $a=2c+k_\alpha$, $b_0=c$, and $b_1=1+c+2k_\alpha$; the bracket bound equals $aQ+b_0q_{C+1}+b_1$. Choose an integer $r\ge2$ so large that $r(r-1)/2\ge a+b_0(r+1)+b_1$; such an $r$ exists because the left side is quadratic with positive leading coefficient and the right side is affine in $r$. The binomial theorem gives $C:=2^r\ge r(r-1)/2$, while $C+1\le2^{r+1}$ gives $q_{C+1}\le r+1$. Hence $C\ge a+b_0q_{C+1}+b_1$. Since $Q\ge1$ and $a,b_0,b_1\ge0$, $CQ\ge(a+b_0q_{C+1}+b_1)Q\ge aQ+b_0q_{C+1}+b_1$; as $b\ge B$, this gives $N\ge CbQ\ge B(aQ+b_0q_{C+1}+b_1)$. Thus $N\ge\bar uT$ times the bracket, which also implies the required inequality with $u$. Moreover $Q=O(\log(B+2))$, so $N=O(B\log(B+2))=\widetilde O(\bar uT)$. When $u\ge1$, this is $\widetilde O(uT)$; if $u<1$, replacing it by $\bar u=1$ is a valid upper-bound normalization for the iteration count. The estimate retains the hindsight optimum $\epsilon_N$ and assumes no realizability condition $\pi^*\in\Pi$. [A1, A3, A4, step 1.3, step 4.1, algebra] ∎
