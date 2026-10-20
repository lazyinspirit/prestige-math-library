---
id: lem-pac-mdp-adaptive-sample-concentration
kind: lemma
title: "Concentration for adaptively sampled MDP observations"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-pac-mdp-bounded-reward-model
  - def-axiom-of-choice
  - def-countable
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-filtration-and-filtered-probability-space
  - def-martingale-difference-sequence
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - lem-conditional-hoeffding-bound-for-bounded-martingale-differences
  - thm-tower-property-of-conditional-expectation
  - thm-taking-out-what-is-known
  - cor-markov-inequality-for-random-variables
  - thm-azuma-hoeffding-inequality
  - cor-cauchy-schwarz-for-random-variables
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-finite-union-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§3.2.2, Lemmas 13–15 and footnote 12, PDF pp. 18–20 (printed pp. 2430–2432)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§§2.2 and 4.2.4, PDF pp. 8–12 and 51–54; online bounded observations and PAC context."
---

## Statement

Assume AC and fix a bounded-reward finite discounted MDP with state set $S$. For each admissible pair $(s,a)$, let $(S'_i,R_i)_{i\ge1}$ be an independent potential stream with common joint law $K(\cdot\mid s,a)$; an interaction reveals the next unused sample from that pair's stream only when the pair is visited. This construction has the same finite-trajectory law as interaction with the MDP under any history-dependent behavior. For a fixed pair and $m\ge1$, its reward samples satisfy
$$\mathbb P\!\left(\left|\frac1m\sum_{i=1}^m R_i-r(s,a)\right|>x\right)\le 2e^{-2mx^2}\qquad(x>0).$$
If $\widehat P_m$ is the empirical distribution of $S'_1,\ldots,S'_m$ and $P(\cdot\mid s,a)$ is the true next-state marginal, then
$$\mathbb E\|\widehat P_m-P(\cdot\mid s,a)\|_1\le\sqrt{\frac{|S|}{m}},\qquad \mathbb P\!\left(\|\widehat P_m-P(\cdot\mid s,a)\|_1>\sqrt{\frac{|S|}{m}}+\sqrt{\frac{2\ln(1/\delta)}{m}}\right)\le\delta\quad(0<\delta<1),$$
where $\|q\|_1=\sum_{s'\in S}|q(s')|$ and $\ln$ is the natural logarithm.
More generally, for a filtration $(\mathcal F_i)_{i=0}^m$, if $Y_i$ is $\mathcal F_i$-measurable, $0\le Y_i\le B$, and $\mu_i=\mathbb E[Y_i\mid\mathcal F_{i-1}]$, then
$$\mathbb P\!\left(\left|\sum_{i=1}^m(Y_i-\mu_i)\right|\ge mx\right)\le2e^{-2mx^2/B^2}\qquad(B>0,\ x>0).$$
No independence between reward and next state within a single transition is assumed. The confidence bounds are for a fixed deterministic sample size or a fixed-size batch; this item makes no uniform confidence claim at a data-dependent sample count. At a finite history-dependent visit count, the next fixed number of unused potential outcomes still has its conditional iid law.

## Statement references

[[def-pac-mdp-bounded-reward-model|The joint next-state/reward law and the finite state-action domain]].

[[def-axiom-of-choice|The Axiom of Choice used for the infinite potential-stream construction and conditional-expectation suppliers]].

[[thm-ionescu-tulcea-construction-of-a-markov-chain|A sequence of probability kernels has a unique infinite product path law under AC]].

[[lem-conditional-hoeffding-bound-for-bounded-martingale-differences|Conditional exponential-moment bound for bounded martingale differences with predictable endpoints]].

[[thm-azuma-hoeffding-inequality|Two-sided concentration for martingale increments with predictable bounded ranges]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

## Facts & Assumptions

**Given:** AC; a bounded-reward finite discounted MDP; a fixed state-action pair for the empirical estimates; and, in the final clause, a filtration and predictable bounded target sequence.

[F1] [[def-pac-mdp-bounded-reward-model]]: the pair's joint next-state/reward law is $K(\cdot\mid s,a)$, rewards lie in $[0,1]$, and the next-state marginal is a probability distribution on the finite set $S$.

[F2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is assumed here for the countable product law and the conditional-expectation classes.

[F3] [[def-countable]] and [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: the finite pair set can be enumerated, and a countable sequence of probability kernels admits the specified product law with the prescribed finite-prefix laws under AC.

[F4] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation preserves order and constants, so $0\le\mathbb E[Y_i\mid\mathcal F_{i-1}]\le B$ for $0\le Y_i\le B$.

[F5] [[lem-conditional-hoeffding-bound-for-bounded-martingale-differences]]: if $D\in L^1$, $\mathbb E[D\mid\mathcal G]=0$, and finite $\mathcal G$-measurable endpoints $A\le D\le C$ have deterministic width at most $b$, then $\mathbb E[e^{\lambda D}\mid\mathcal G]\le e^{\lambda^2b^2/8}$.

[F6] [[thm-tower-property-of-conditional-expectation]] and [[thm-taking-out-what-is-known]]: conditional expectations iterate through a filtration, and a finite measurable factor can be taken outside when the products are integrable.

[F7] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Z$ and $c>0$, $\mathbb P(Z\ge c)\le\mathbb E[Z]/c$.

[F8] [[thm-azuma-hoeffding-inequality]]: if a martingale has predictable increment endpoints of widths $c_i$, each one-sided tail is bounded by $\exp(-2t^2/\sum_i c_i^2)$.

[F9] [[cor-cauchy-schwarz-for-random-variables]]: $\mathbb E|X|\le(\mathbb E[X^2])^{1/2}$ when $X\in L^2$; [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives $\sum_j\sqrt{p_j}\le\sqrt{|S|}$ for a probability vector on $S$.

[F10] [[def-filtration-and-filtered-probability-space]] and [[def-martingale-difference-sequence]]: the visit/sample history is an increasing filtration, and a centered integrable adapted increment is a martingale difference relative to it.

[F11] [[thm-finite-union-bound]]: the probability of a finite union of events is at most the sum of their probabilities.

## Proof

1.1 Enumerate the finite pair set $D$. For each $d\in D$ and $i\ge1$, prescribe the same probability kernel $K(\cdot\mid d)$ on $S\times[0,1]$; applying [F3] to the resulting countable sequence gives an array of independent potential outcomes. Generate behavior actions by their history kernels and reveal outcome $(d,i)$ on the $i$th visit to pair $d$. Conditional on the interaction history, the selected unused coordinate still has law $K(\cdot\mid d)$, so each finite interaction prefix has the same iterated-kernel law as the MDP under the behavior. Equality of these prefixes proves the coupling claim. [given, F1, F2, F3, construct]

1.2 For the predictable-target clause, put $D_i=Y_i-\mu_i$ and use $\mathcal F_{i-1}$ as the conditioning sigma-algebra. By [F4], $0\le\mu_i\le B$, so the finite endpoints $-\mu_i$ and $B-\mu_i$ are $\mathcal F_{i-1}$-measurable, contain $D_i$, and have width $B$. Also $\mathbb E[D_i\mid\mathcal F_{i-1}]=0$. Thus [F5] gives $\mathbb E[e^{\lambda D_i}\mid\mathcal F_{i-1}]\le e^{\lambda^2B^2/8}$ for every real $\lambda$. [given, F4, F5, F10]

1.3 For each $s'\in S$, let $I_i(s')$ be one when $S'_i=s'$ and zero otherwise, and put $p_{s'}=P(s'\mid s,a)$. Independence across the potential stream gives $\mathbb E[(m^{-1}\sum_i I_i(s')-p_{s'})^2]=p_{s'}(1-p_{s'})/m\le p_{s'}/m$. By [F9], $\mathbb E|m^{-1}\sum_i I_i(s')-p_{s'}|\le\sqrt{p_{s'}/m}$. Summing over $s'$ and using $\sum_{s'}p_{s'}=1$ and [F9] gives $\mathbb E\|\widehat P_m-P\|_1\le\sqrt{|S|/m}$. [F1, F3, F9, F10, algebra]

1.4 Let $f(Z_1,\ldots,Z_m)=\|\widehat P_m-P\|_1$ and $M_i=\mathbb E[f\mid\mathcal F_i]$, where $\mathcal F_i=\sigma(Z_1,\ldots,Z_i)$ for the state coordinates of the potential stream. Replacing one state coordinate changes $\widehat P_m$ in $L^1$ by at most $2/m$, so, by independence of the remaining coordinates, the conditional range of $M_i$ given $\mathcal F_{i-1}$ has width at most $2/m$. The finite state alphabet makes its conditional minimum and maximum measurable functions of the prefix, so $(M_i)$ is a martingale with finite predictable increment endpoints of that width. [F3, F6, F8, F10, construct]

2.1 Fix a pair and write its independent potential stream as $(Z_i)_{i\ge1}$. Let $N$ be a finite visit count determined by the observed interaction history before the next sample, and let $A$ be an event observable at that history. For each integer $n$, the event $A\cap\{N=n\}$ depends only on the first $n$ coordinates of this pair's stream and on other revealed or behavior randomness, all independent of $Z_{n+1},\ldots,Z_{n+m}$. The product finite-prefix laws from [F3] therefore give, for every measurable block event $B$, $\mathbb P(A,N=n,(Z_{n+1},\ldots,Z_{n+m})\in B)=\mathbb P(A,N=n)K^{\otimes m}(B)$. Summing over $n$ proves that the next fixed-size block has conditionally the iid law at the history-dependent visit count. [given, F2, F3, step 1.1, construct]

2.2 For $\lambda>0$, set $S_k=\sum_{i=1}^kD_i$. The factor $e^{\lambda S_{k-1}}$ is bounded and $\mathcal F_{k-1}$-measurable; [F6] and step 1.2 give $\mathbb E[e^{\lambda S_k}]\le e^{\lambda^2B^2/8}\mathbb E[e^{\lambda S_{k-1}}]$. Iterating from $S_0=0$ yields $\mathbb E[e^{\lambda S_m}]\le e^{m\lambda^2B^2/8}$. Apply [F7] to $e^{\lambda S_m}$ and optimize $-\lambda mx+m\lambda^2B^2/8$ at $\lambda=4x/B^2$ to get $\mathbb P(S_m\ge mx)\le e^{-2mx^2/B^2}$. Applying the same argument to $-D_i$ gives the lower tail, and addition gives the stated two-sided inequality. [step 1.2, F6, F7, algebra]

2.3 Apply the upper-tail half of [F8] with $c_i=2/m$ and $t=\sqrt{2\ln(1/\delta)/m}$; since $\sum_i c_i^2=4/m$, the probability that $f-\mathbb E f>t$ is at most $e^{-mt^2/2}=\delta$. Combining this with step 1.3 gives the stated empirical transition bound. [step 1.3, step 1.4, F8, algebra]

3.1 For a fixed pair's potential stream, set $\mathcal F_i=\sigma((S'_j,R_j):j\le i)$. Independence of the stream makes $R_i$ independent of $\mathcal F_{i-1}$, so $\mathbb E[R_i\mid\mathcal F_{i-1}]=\mathbb E[R_i]=\int\rho\,K(ds',d\rho\mid s,a)=r(s,a)$ almost surely. Since $0\le R_i\le1$, apply step 2.2 with $B=1$, $Y_i=R_i$, and this conditional mean to obtain the displayed reward bound. [F1, F3, step 2.2]

4.1 At any finite history-dependent batch start, step 2.1 gives the next fixed-size block its conditional iid law. Applying steps 2.2, 3.1, and 2.3 conditionally at that start therefore supplies their stated concentration bounds for that batch; [F11] combines a finite set of such events when failure probabilities are allocated. This does not assert a uniform bound for a sample size chosen after observing its own samples. [step 2.1, step 2.2, step 3.1, step 2.3, F3, F11] ∎
