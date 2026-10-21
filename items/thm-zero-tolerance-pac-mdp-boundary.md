---
id: thm-zero-tolerance-pac-mdp-boundary
kind: theorem
title: "The zero-tolerance boundary of PAC-MDP exploration"
status: published
origin: session
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-pac-mdp-sample-complexity
  - def-pac-mdp-bounded-reward-model
  - def-admissible-mdp-heuristic
  - thm-pac-mdp-value-functions
  - alg-r-max
  - alg-delayed-q-learning
  - def-finite-probability-space-and-event
  - lem-finite-sum-laws
  - thm-of-archimedean
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Strehl, Li, and Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf
      locator: "§1.5 requires positive accuracy; Theorems11 and16 print nonnegative endpoint ranges beside singular threshold formulas. The finite coupling and algorithm witnesses below are local proofs of the endpoint boundary, not claims that the paper proves them."
    - title: "Strehl et al., PAC Model-Free Reinforcement Learning"
      url: https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf
      locator: "§3 explains the approximate criterion; Theorem1 requires positive accuracy. The zero-tolerance conclusions below are proved locally."
---

## Statement

Assume AC, and use the history-conditioned bad-step count $N_\epsilon$ for bounded-reward finite discounted MDPs. The endpoint $\epsilon=0$ has the following properties.

1. Fix any single learning rule whose action kernels depend only on its observed history and common supplied inputs, not on the unknown MDP reward means. For every finite real $B\ge0$ and $0<\delta<1/2$, some one-state, two-action MDP with $\gamma=0$, Bernoulli rewards and the common admissible heuristic $U(a)=U(b)=V_{\max}=1$ satisfies $\mathbb P(N_0>B)>\delta$. Thus no finite bound depending only on state/action sizes, confidence and discount can hold uniformly at zero tolerance, even allowing randomized history-dependent learners.
2. For R-MAX, fix any integer $m\ge1$, $0<\beta<1$, and a tie order selecting $a$ first. For each $0<p<1$, take one state, $\gamma=0$, $U(a)=U(b)=V_{\max}=1$, reward $a\sim\operatorname{Bernoulli}(p)$ and deterministic reward $b=p/2$. Then $\mathbb P(N_0=\infty)\ge(1-p)^m$. For every $0<\delta<1$, some $p$ makes this probability exceed $\delta$; no fixed finite legal sample threshold gives a uniform finite zero-tolerance bound.
3. For Delayed Q-learning, fix any integer $m\ge1$, $0<\epsilon_1<1$, and a tie order selecting $b$ first. In the one-state model with $\gamma=0$, $U(a)=U(b)=V_{\max}=1$ and deterministic rewards $a=1$, $b=1-\epsilon_1$, the algorithm chooses $b$ forever and $N_0=\infty$ with probability one.
4. If $V^*(s)=0$ at every state of any bounded-reward finite discounted MDP, then every behavior has $N_0=0$. The impossibility is a uniform assertion over unknown models, not a claim that zero-tolerance behavior must always fail.

All models in clauses1–3 have nonempty finite state/action sets, rewards in $[0,1]$, and an admissible normalized cap. No parameter formula that divides by $\epsilon$ is evaluated at zero.

## Statement references

[[def-pac-mdp-sample-complexity|History-conditioned bad-step counts, including zero tolerance]].

[[def-pac-mdp-bounded-reward-model|Finite MDPs and bounded joint transition/reward laws]].

[[def-admissible-mdp-heuristic|Admissibility and the normalized reward-scale cap]].

[[thm-pac-mdp-value-functions|Nonnegative continuation values and optimal values]].

[[alg-r-max|Finite first-batch empirical models and fixed tie order]].

[[alg-delayed-q-learning|The positive bonus, delayed batch update and learning flags]].

## Facts & Assumptions

**Given:** AC, the learning-rule information restriction, the finite bound and confidence in clause1, and the legal algorithm parameters and models in clauses2–4.

[F1] [[def-pac-mdp-sample-complexity]] and [[thm-pac-mdp-value-functions]]: when $\gamma=0$, continuation value is the mean immediate reward under the current action distribution; $N_0$ counts exactly the times this is strictly below the largest action mean. Every continuation value is nonnegative and at most $V^*$.

[F2] [[def-pac-mdp-bounded-reward-model]] and [[def-admissible-mdp-heuristic]]: one-state self-transitions with any reward law on $[0,1]$ are allowed; at $\gamma=0$, $U=V_{\max}=1$ is admissible for these models.

[F3] [[def-finite-probability-space-and-event]]: probabilities on a finite outcome space are sums of nonnegative weights with total one.

[F4] [[lem-finite-sum-laws]]: finite sums are additive, preserve inequalities, and allow a constant factor to be taken outside a sum. Thus, for a node of weight $w(h)$ and normalized child probabilities $p(c\mid h)$, $\sum_c w(h)p(c\mid h)=w(h)\sum_c p(c\mid h)=w(h)$. Induction over tree levels preserves total weight one.

[F5] [[thm-of-archimedean]]: a natural number exceeds every prescribed finite real bound.

[F6] [[alg-r-max]]: before the first $m$ observations an action retains its heuristic; afterwards its model uses only those observations. At $\gamma=0$, every rebuild sets known action values to their empirical reward means after its first sweep.

[F7] [[alg-delayed-q-learning]]: the initial values are $U$; a completed batch changes its entry only if the old value minus its mean target is at least $2\epsilon_1$. A failed batch with start time greater than the last global update disables further learning of that pair until a new global update.

## Proof

1.1 For clause1, choose an integer $T>2B$ by [F5] and choose $0<d<\min\{1/2,(1-2\delta)/T\}$. Define two one-state models $M_+,M_-$ whose action means are respectively $(1/2+d,1/2)$ and $(1/2,1/2+d)$, with Bernoulli rewards, discount zero, and common heuristic $1$. Their unique optimal actions are respectively $a,b$, and [F2] verifies their model and heuristic conditions. [given, F2, F5, choose, construct, algebra]

1.2 For clause2 use the stated R-MAX model, and let $E$ be the event that its first $m$ rewards from $a$ are all zero. Its action means are $p,p/2$, so $a$ is uniquely optimal and [F2] verifies admissibility. [given, F2, construct]

1.3 For clause3 the action means are $1,1-\epsilon_1$, so $a$ is uniquely optimal, the gap is $\epsilon_1>0$, and [F2] verifies all model and heuristic conditions. [given, F2, algebra]

2.1 Couple the two length-$T$ histories of step 1.1 recursively. At equal histories draw the same action with the learning rule’s common action probabilities. For that action let $r_+,r_-$ be its two means, and assign reward-pair probabilities $\min(r_+,r_-)$ to $(1,1)$, $1-\max(r_+,r_-)$ to $(0,0)$, $[r_+-r_-]_+$ to $(1,0)$, and $[r_--r_+]_+$ to $(0,1)$. These weights are nonnegative, sum to one, have the desired Bernoulli marginals, and disagree with probability $d$. After histories differ, use the product of the two prescribed action/reward laws. Give each child its parent weight times its conditional probability. At each node [F4] shows that the child weights sum to its parent weight, so induction from root weight one normalizes the finite coupling. Summing over the other component at each extension gives the prescribed action and Bernoulli reward marginals; induction over rounds therefore verifies each marginal is the learning rule’s actual length-$T$ law by [F3]–[F4]. [step 1.1, F3, F4, construct, induction, algebra]

2.2 Until $a$ becomes known, R-MAX always selects $a$, since both unknown values are $1$ and its tie order favors $a$. On $E$, the first rebuild sets its value to zero while $b$ remains unknown at $1$. It therefore selects $b$ for $m$ observations, then the two frozen empirical means are $0,p/2$. All later rebuilds and actions retain those means, so $b$ is selected forever. By [F1], all those later times are zero-bad. The first $m$ draws from $a$ have their Bernoulli law conditionally at each visit, hence $\mathbb P(E)=(1-p)^m$ and $E\subseteq\{N_0=\infty\}$. [step 1.2, F1, F6, algebra, induction]

2.3 Delayed Q-learning initially ties at $1$ and selects $b$. Every target in its first batch is $1-\epsilon_1$, since the discount is zero. The old value minus the mean is $\epsilon_1<2\epsilon_1$, so the batch fails and no value changes. Its start time is positive while $t^*=0$, so the flag becomes false. No other action is ever selected, no global update occurs, and the flag remains false. Induction gives $Q(a)=Q(b)=1$ and action $b$ forever. Its value is $1-\epsilon_1<1=V^*$, so [F1] gives $N_0=\infty$. [step 1.3, F1, F7, algebra, induction]

3.1 In the coupling of step 2.1, the probability that the first history disagreement occurs at a specified round is at most $d$, since its preceding equal histories have total probability at most one. Thus the chance of any disagreement by round $T$ is at most $Td$: sum the nonnegative weights of those disjoint first-disagreement events using [F3]–[F4]. Let $C$ be their complement, so $\mathbb P(C)\ge1-Td$. [step 1.1, step 2.1, F3, F4, algebra]

3.2 For the final assertion of clause2, fix $0<\delta<1$ and choose $p=(1-\delta)/(2m)\in(0,1)$. Among the first $m$ rewards from $a$, the event of at least one reward equal to one has probability at most $mp$, by summing their indicator weights. Consequently $(1-p)^m\ge1-mp=(1+\delta)/2>\delta$. Step 2.2 proves the claimed failure probability. [step 1.2, step 2.2, F3, F4, algebra, choose]

4.1 Suppose both models from step 1.1 had $\mathbb P(N_0\le B)\ge1-\delta$. The same is then true for the zero-bad count restricted to the first $T$ rounds, in each marginal of the finite coupling. The probability that both restricted counts are at most $B$ and $C$ occurs is at least $1-2\delta-Td>0$, by summing weights of the three complementary events as in [F3]–[F4]. On $C$, the two histories and hence their current action distributions coincide at every round. If $z$ is the probability of $a$, the two mean-reward deficits are respectively $d(1-z)$ and $dz$. Since $0\le z\le1$ and $d>0$, at least one deficit is strictly positive. Thus the two restricted zero-bad counts sum to at least $T>2B$, contradicting that both are at most $B$. At least one model must satisfy $\mathbb P(N_0>B)>\delta$. [step 1.1, step 2.1, step 3.1, F1, F3, F4, algebra, contradiction]

5.1 Step 4.1 proves clause1; steps 2.2 and3.2 prove clause2; step 2.3 proves clause3. For clause4, [F1] gives $0\le V^{A_t}(h_t)\le V^*(s_t)=0$, so no time is zero-bad. These statements establish all endpoint branches without assigning zero to a positive-tolerance denominator. [step 4.1, step 2.2, step 3.2, step 2.3, F1, algebra] ∎
