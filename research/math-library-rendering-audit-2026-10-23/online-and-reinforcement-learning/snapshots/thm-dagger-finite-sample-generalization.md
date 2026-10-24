---
id: thm-dagger-finite-sample-generalization
kind: theorem
title: Finite-sample DAgger surrogate-loss guarantee
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-imitation-learning-and-expert-surrogate-loss
  - alg-dagger
  - lem-dagger-strongly-convex-follow-the-leader-regret
  - lem-dagger-mixture-occupancy
  - thm-azuma-hoeffding-inequality
  - def-filtration-and-filtered-probability-space
  - def-adapted-and-integrable-stochastic-process
  - def-martingale-difference-sequence
  - def-martingale-submartingale-and-supermartingale
  - thm-martingales-and-martingale-differences-correspond
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-induction-principle
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice for the conditional-expectation and martingale interfaces and the Azuma–Hoeffding theorem; no further choice is used in the finite-sample argument."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Theorem 4.2 and complete proof, §4.2, PDF pp. 4–5; the local proof states its trajectory conditional-mean and Azuma inputs explicitly."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Chapter 6, PDF pp. 4–7 / printed pp. 57–60: interactive DAgger rounds and the no-regret framing."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9, PDF pp. 51–54 / note pages 47–48: learner-induced loss and finite-sample DAgger conventions; its final cost proof sketch is not used."
---

## Statement

Assume the finite-horizon imitation-learning setting with deterministic expert $\pi^*$, positive integer horizon $T$, expert surrogate $\ell(s,\theta)\in[0,1]$, learner policies $\pi_\theta$, and nonempty convex parameter set $K\subseteq\mathbb R^d$ defined previously. Let $d\ge1$ be an integer and use $\|x-y\|_2=(\sum_{r=1}^d(x_r-y_r)^2)^{1/2}$. Suppose for every state $s$, $\ell(s,\cdot)$ is $G$-Lipschitz and $\mu$-strongly convex on $K$, with constants $G\ge0$ and $\mu>0$, where Lipschitz means $|\ell(s,x)-\ell(s,y)|\le G\|x-y\|_2$ and strong convexity means $\ell(s,(1-\lambda)x+\lambda y)\le(1-\lambda)\ell(s,x)+\lambda\ell(s,y)-\frac\mu2\lambda(1-\lambda)\|x-y\|_2^2$ for $x,y\in K$ and $\lambda\in[0,1]$. Assume also that $\theta\mapsto\pi_\theta(a\mid s)$ is Borel measurable for every state-action pair.

Run finite-trajectory DAgger for positive integers $N,m$, with per-decision expert-use probabilities $\beta_i\in[0,1]$ satisfying $\beta_1\le1$ and $\beta_i\le(1-\alpha)^{i-1}$ for $2\le i\le N$, where $\alpha\in(0,1]$ is fixed. Let $\hat\pi_i=\pi_{\theta_i}$ and $\pi_i=\beta_i\pi^*+(1-\beta_i)\hat\pi_i$. In round $i$, let $S_{ijt}$, $1\le j\le m$, $0\le t<T$, be the states of trajectory $j$, and define $\bar\ell_{ij}(\theta)=T^{-1}\sum_{t=0}^{T-1}\ell(S_{ijt},\theta)$, $\hat L_i(\theta)=m^{-1}\sum_{j=1}^m\bar\ell_{ij}(\theta)$, and $\hat\epsilon_N=\min_{\theta\in K}N^{-1}\sum_{i=1}^N\hat L_i(\theta)$. Assume this minimum and every cumulative empirical-loss minimum are attained, and DAgger uses exact Follow-the-Leader updates.

Assume the samples are observed in a filtered probability space with nested sigma-algebras $\mathcal F_{i,j}$, where $\mathcal F_{1,0}=\mathcal F_0$, $\mathcal F_{i,0}=\mathcal F_{i-1,m}$ for $i>1$, and $\mathcal F_{i,j-1}\subseteq\mathcal F_{i,j}$. Suppose $\theta_i$ is $\mathcal F_{i,0}$-measurable, each trajectory state $S_{ijt}$ is $\mathcal F_{i,j}$-measurable, and the conditional rollout law satisfies $\mathbb E[\bar\ell_{ij}(\theta_i)\mid\mathcal F_{i,j-1}]=L_i(\theta_i)$ almost surely, where $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$ is the true round-$i$ loss under the mixed rollout policy. Assume the Axiom of Choice for the conditional-expectation and martingale results used below. Let $\delta\in(0,1)$, define $H_0=0$ and $H_n=\sum_{r=1}^n1/r$, let $q_T$ be the least nonnegative integer with $T\le2^{q_T}$, and let $k_\alpha$ be the least positive integer with $k_\alpha\alpha\ge1$. Then with probability at least $1-\delta$, some $i\in\{1,\ldots,N\}$ satisfies

$$\sum_s d_{\hat\pi_i}(s)\ell(s,\theta_i)\le\hat\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}+k_\alpha(q_T+2)}{N}+\sqrt{\frac{2\ln(1/\delta)}{mN}}.$$

For each fixed $m\ge1$, $\alpha\in(0,1]$, $\mu>0$, and $G\ge0$, there are constants $C,C'>0$ depending only on these parameters such that if $\delta\in(0,1/2]$ and $N\ge C T^2\ln(1/\delta)$, the right side is at most $\hat\epsilon_N+C'/T$. This is a surrogate-loss guarantee with interactive expert labels; it does not assert a finite-sample task-cost bound.

## Statement references

[[def-imitation-learning-and-expert-surrogate-loss]]: defines finite-horizon state occupancy, the mixed rollout policy, and the true round loss.

[[alg-dagger]]: defines finite-trajectory DAgger, empirical round loss, and exact FTL updates using interactive expert labels.

[[lem-dagger-strongly-convex-follow-the-leader-regret]]: supplies the empirical FTL regret bound $1+(4G^2/\mu)H_{N-1}$.

[[lem-dagger-mixture-occupancy]]: bounds the absolute change in a bounded state-loss expectation under expert mixing by $\min(1,T\beta_i)$.

[[thm-azuma-hoeffding-inequality]]: supplies the bounded-increment martingale tail bound under the stated Axiom of Choice assumption.

[[def-filtration-and-filtered-probability-space]]: defines the nested information sigma-algebras used to reveal samples.

[[def-adapted-and-integrable-stochastic-process]]: defines adaptedness and integrability of the trajectory-loss increments.

[[def-martingale-difference-sequence]]: defines the centered adapted increments.

[[thm-martingales-and-martingale-differences-correspond]]: converts the centered increments to a martingale.

[[def-martingale-submartingale-and-supermartingale]]: defines the martingale property used by Azuma–Hoeffding.

[[def-conditional-expectation-as-an-ae-class]]: fixes the almost-sure class convention for conditional means.

[[def-axiom-of-choice]]: states the axiom assumed by the conditional-expectation and Azuma interfaces.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Theorem 4.2 and complete proof, §4.2, PDF pp. 4–5.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 4–7 / printed pp. 57–60.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): PDF pp. 51–54 / note pages 47–48; cited for conventions, not for the incomplete final cost-proof sketch.

## Facts & Assumptions

**Given:** The finite-horizon MDP, expert and surrogate definitions, bounded strongly convex Lipschitz loss, exact empirical DAgger updates, nested sample filtration, conditional rollout-mean identity, attained empirical minima, geometric expert-use schedule, confidence parameter, and Axiom of Choice in the Statement.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: $d_\pi$ is the normalized average state occupancy and $L_i(\theta)=\sum_s d_{\pi_i}(s)\ell(s,\theta)$ is the true round loss.

[F2] [[alg-dagger]]: $\hat L_i(\theta)=\frac1{mT}\sum_{j=1}^m\sum_{t=0}^{T-1}\ell(S_{ijt},\theta)$ and $\theta_{i+1}$ minimizes $\sum_{r=1}^i\hat L_r$.

[F3] [[lem-dagger-strongly-convex-follow-the-leader-regret]]: for bounded, $G$-Lipschitz, $\mu$-strongly convex round losses with attained cumulative minima, empirical FTL regret is at most $1+(4G^2/\mu)H_{N-1}$.

[F4] [[lem-dagger-mixture-occupancy]]: for every $g:S\to[0,1]$, the absolute difference between its mixed-policy and learner-policy occupancy expectations is at most $\min(1,T\beta_i)$.

[F5] [[thm-azuma-hoeffding-inequality]]: under AC, martingale increments with predictable endpoints of width at most $c_k$ satisfy $\mathbb P(M_n-M_0\ge t)\le\exp(-2t^2/\sum_kc_k^2)$.

[F6] [[def-martingale-difference-sequence]]: a martingale difference is integrable, adapted, and has zero conditional mean given the preceding sigma-algebra.

[F7] [[thm-martingales-and-martingale-differences-correspond]]: an adapted integrable martingale-difference sequence sums, from any integrable initial value, to a martingale.

[F8] [[def-filtration-and-filtered-probability-space]]: a filtered probability space has nested sigma-algebras $\mathcal F_n\subseteq\mathcal F_{n+1}$.

[F9] [[def-adapted-and-integrable-stochastic-process]]: adaptedness means time-$n$ measurability with respect to $\mathcal F_n$, and integrability means finite $E|X_n|$ at each time.

[F10] [[def-martingale-submartingale-and-supermartingale]]: an integrable adapted process is a martingale when $E[M_{n+1}\mid\mathcal F_n]=M_n$ almost surely.

[F11] [[def-conditional-expectation-as-an-ae-class]]: conditional expectations are unique almost-sure equivalence classes of measurable integrable versions.

[F12] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F13] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear on integrable random variables.

[F14] [[lem-conditioning-a-known-variable-and-an-independent-variable]]: if an integrable variable is measurable with respect to the conditioning sigma-algebra, its conditional expectation is itself almost surely.

[F15] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite sums and products of real-valued Borel-measurable functions are Borel measurable.

[F16] [[thm-induction-principle]]: a property of positive integer indices that holds at the first index and is preserved by successors holds for every positive integer index.

[A1] For every state, $\ell(s,\cdot)$ is valued in $[0,1]$, $G$-Lipschitz, and $\mu$-strongly convex on the nonempty convex set $K$.

[A2] All cumulative empirical-loss minima and the minimum defining $\hat\epsilon_N$ are attained; the algorithm uses exact FTL updates.

[A3] The per-sample conditional mean identity $\mathbb E[\bar\ell_{ij}(\theta_i)\mid\mathcal F_{i,j-1}]=L_i(\theta_i)$ holds almost surely, with $\theta_i$ measurable before round $i$ and trajectory states measurable when revealed.

[A4] $0\le\beta_1\le1$ and $0\le\beta_i\le(1-\alpha)^{i-1}$ for $i\ge2$, with fixed $0<\alpha\le1$.

[A5] For the rate corollary, $0<\delta\le1/2$, while the main probability bound only requires $0<\delta<1$.

## Proof

1.1 For any realized sample sequence, $\hat L_i$ is a finite average of functions $\ell(S_{ijt},\cdot)$, so [A1] makes it $[0,1]$-valued, $G$-Lipschitz, and $\mu$-strongly convex on $K$. By [F2] and [A2], the iterates are exact FTL iterates and the hindsight minimum is attained. Applying [F3] samplewise gives $\frac1N\sum_{i=1}^N\hat L_i(\theta_i)\le\hat\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}}N$. [A1, A2, F2, F3, algebra]

1.2 Flatten the pairs $(i,j)$ in round-major order. Put $\mathcal G_0=\mathcal F_{1,0}$ and, for $r=(i-1)m+j$ with $1\le i\le N$ and $1\le j\le m$, put $\mathcal G_r=\mathcal F_{i,j}$; for every $r>mN$, put $\mathcal G_r=\mathcal G_{mN}$. Within each round the sigma-algebras are nested, and at round boundaries $\mathcal F_{i,0}=\mathcal F_{i-1,m}$, so $(\mathcal G_r)_{r\ge0}$ is an infinite filtration. Define $D_{(i-1)m+j}=L_i(\theta_i)-\bar\ell_{ij}(\theta_i)$ for the sample indices and set $D_r=0$ for $r>mN$. For each fixed round $i$, the policy probabilities are Borel functions of $\theta$, the finite occupancy recursion uses only finite sums and products, and $\ell(s,\cdot)$ is continuous by its Lipschitz property. Thus [F15] makes $L_i(\theta)$ Borel, so $L_i(\theta_i)$ is measurable with respect to $\mathcal G_{(i-1)m}=\mathcal F_{i,0}$ and hence with respect to each $\mathcal G_{r-1}$ in round $i$. Since the state set is finite and each statewise loss is continuous, $(s,\theta)\mapsto\ell(s,\theta)$ is measurable; the revealed states and preceding measurable parameter therefore make each $\bar\ell_{ij}(\theta_i)$ measurable with respect to $\mathcal G_r$. By [A1] and the probability-occupancy property in [F1], both $L_i(\theta_i)$ and $\bar\ell_{ij}(\theta_i)$ lie in $[0,1]$, so each sample increment is integrable and in $[-1,1]$; the zero extension has the same properties. For $r=(i-1)m+j\le mN$, [A3], [F13], and [F14] give $\mathbb E[D_r\mid\mathcal G_{r-1}]=L_i(\theta_i)-L_i(\theta_i)=0$. For $r>mN$, [F14] gives $\mathbb E[0\mid\mathcal G_{r-1}]=0$. Thus $D$ is an infinite adapted martingale-difference sequence by [F6], using the filtration and process conventions [F8, F9, F11]. [A1, A3, F1, F6, F8, F9, F11, F13, F14, F15, construct]

1.3 Put $q=1-\alpha$ and $k=k_\alpha$. For every integer $n\ge1$, $(1+\alpha)^n\ge1+n\alpha$: equality holds for $n=1$, and if it holds for $n$, then multiplication by $1+\alpha>0$ gives $(1+\alpha)^{n+1}\ge(1+n\alpha)(1+\alpha)=1+(n+1)\alpha+n\alpha^2\ge1+(n+1)\alpha$. Thus [F16] gives $(1+\alpha)^k\ge1+k\alpha\ge2$. Also $q(1+\alpha)=1-\alpha^2\le1$, so $q\le(1+\alpha)^{-1}$ and $q^k\le1/2$. For block $j\ge0$, let $I_j=\{jk+1,\ldots,(j+1)k\}$. If $j=0$, [A4] gives $\beta_1\le1=q^0$ and $\beta_i\le q^{i-1}\le1$ for the other indices; if $j\ge1$, every $i\in I_j$ satisfies $\beta_i\le q^{i-1}\le q^{jk}$. Thus each block contributes at most $k\min(1,T2^{-j})$. Let $J=\lceil N/k\rceil-1$, so the blocks $j=0,\ldots,J$ cover all sample indices. Their terms with $j\le q_T$ contribute at most $q_T+1$ inside the sum over blocks. If $J\ge q_T+1$, the identity $2^{-j}=2^{-(j-1)}-2^{-j}$ telescopes to $\sum_{j=q_T+1}^{J}2^{-j}=2^{-q_T}-2^{-J}\le2^{-q_T}$; if $J<q_T+1$, this tail is empty. Hence the remaining block contribution is at most $T2^{-q_T}\le1$, and $\sum_{i=1}^N\min(1,T\beta_i)\le k_\alpha(q_T+2)$. [A4, F16, algebra, induction]

2.1 By [F7], $M_0=0$ and $M_r=\sum_{k=1}^rD_k$ form a martingale on the infinite filtration $(\mathcal G_r)$. Its restriction to $r=0,\ldots,mN$ is the finite martingale required by [F5]. Each of its first $mN$ increments has predictable endpoints $-1$ and $1$, of width $2$, so [F5] and the AC hypothesis [F12] give $\mathbb P(M_{mN}\ge t)\le\exp(-t^2/(2mN))$. Taking $t=\sqrt{2mN\ln(1/\delta)}$ makes this probability at most $\delta$. Since $M_{mN}=m\sum_{i=1}^N(L_i(\theta_i)-\hat L_i(\theta_i))$, outside that event $\frac1N\sum_iL_i(\theta_i)\le\frac1N\sum_i\hat L_i(\theta_i)+\sqrt{\frac{2\ln(1/\delta)}{mN}}$. [A3, F5, F7, F10, F12, step 1.2, algebra]

3.1 On the event from step 2.1, combine its mixed-policy loss bound with step 1.1 to obtain $\frac1N\sum_iL_i(\theta_i)\le\hat\epsilon_N+\frac{1+\frac{4G^2}{\mu}H_{N-1}}N+\sqrt{\frac{2\ln(1/\delta)}{mN}}$. [A2, step 1.1, step 2.1, algebra]

4.1 Apply both directions of the absolute occupancy estimate [F4] with $g(s)=\ell(s,\theta_i)$, giving $\sum_sd_{\hat\pi_i}(s)\ell(s,\theta_i)\le L_i(\theta_i)+\min(1,T\beta_i)$. Average over $i$ and use step 3.1 and step 1.3. At least one of the $N$ own-occupancy losses is no larger than their average, so on the event of step 2.1 some $i$ satisfies the displayed inequality in the Statement. Its probability is at least $1-\delta$. [A1, F1, F4, step 2.1, step 3.1, step 1.3, algebra]

5.1 For the rate claim, set $L=\ln(1/\delta)\ge\ln2$ and choose a fixed $C\ge3/\ln2$, so $N_0=CT^2L\ge3>e$. With $c=4G^2/\mu$, for $N\ge2$ we have $H_{N-1}=1+\sum_{r=2}^{N-1}1/r\le1+\sum_{r=2}^{N-1}\int_{r-1}^r dx/x=1+\ln(N-1)\le1+\ln N$, with the sum empty when $N=2$. The derivative of $x\mapsto[1+c(1+\ln x)]/x$ is $(c-1-c\ln x)/x^2\le0$ for $x\ge e$, so for $N\ge N_0$ the FTL term is at most $[1+c(1+\ln N_0)]/N_0=O((1+\ln T)/T^2)$, since $L\ge\ln2$ and $(1+\ln L)/L$ is bounded on $[\ln2,\infty)$. Also $q_T\le1+\log_2T$, so the mixing term is $O((1+\ln T)/T^2)$, while the Azuma term is at most $\sqrt{2/(mC)}/T$. As $1+\ln T\le T$ for $T\ge1$, the two former terms are $O(1/T)$ as well. This proves the stated rate on the same event as step 4.1. [A5, step 4.1, algebra] ∎
