---
id: lem-pac-mdp-value-simulation
kind: lemma
title: "Value stability under empirical model error"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-pac-mdp-bounded-reward-model
  - thm-pac-mdp-value-functions
  - lem-finite-set-has-max
  - lem-finite-sum-laws
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
      locator: "§3.2.2, Lemma 12, PDF p. 18 (printed p. 2430)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§2.3, PDF pp. 12–16; value functions and Bellman operators."
---

## Statement

Let $M_1$ and $M_2$ be bounded-reward finite discounted MDPs on the same finite state set $S$ and the same admissible action sets, with common discount $0\le\gamma<1$. Write $r_i,P_i,V_i^\pi,V_i^*$ for their mean rewards, transition laws, stationary-policy values, and optimal values. Suppose $0\le V_i^\pi(s),V_i^*(s)\le V$ for every state, model index $i$, and stationary policy $\pi$, and that for every admissible pair
$$|r_1(s,a)-r_2(s,a)|\le\alpha,\qquad \|P_1(\cdot\mid s,a)-P_2(\cdot\mid s,a)\|_1\le\beta.$$
For finite vectors, $\|v\|_\infty=\max_{s\in S}|v(s)|$ and $\|p\|_1=\sum_{s\in S}|p(s)|$.
Then every common stationary policy and the optimal values satisfy
$$\|V_1^\pi-V_2^\pi\|_\infty\le\frac{\alpha+\gamma V\beta}{1-\gamma},\qquad \|V_1^*-V_2^*\|_\infty\le\frac{\alpha+\gamma V\beta}{1-\gamma}.$$
There is also a trap-model form that does not assume a tight cap for the second model: for $W>0$, suppose all stationary-policy and optimal values in $M_1$ are at most $2W$, all rewards in $M_2$ lie in $[0,1]$, and $\gamma\beta\le(1-\gamma)/2$. Then every common stationary policy and the optimal values satisfy
$$\|V_1^\pi-V_2^\pi\|_\infty\le\frac{2(\alpha+2\gamma W\beta)}{1-\gamma},\qquad \|V_1^*-V_2^*\|_\infty\le\frac{2(\alpha+2\gamma W\beta)}{1-\gamma}.$$

## Statement references

[[def-pac-mdp-bounded-reward-model|Finite discounted MDPs, rewards, and transition laws]].

[[thm-pac-mdp-value-functions|Stationary and optimal Bellman fixed-point equations]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

## Facts & Assumptions

**Given:** The two MDPs, common state/action/discount data, the uniform reward and transition error bounds, and the common value cap $V$ in the Statement.

[F1] [[thm-pac-mdp-value-functions]]: each stationary value solves its policy Bellman equation, and each optimal value is the unique fixed point of its optimality Bellman operator.

[F2] [[lem-finite-set-has-max]]: a maximum over each nonempty finite action set is attained.

[F3] [[lem-finite-sum-laws]]: finite weighted sums preserve inequalities and satisfy the triangle inequality.

[A1] [[def-pac-mdp-bounded-reward-model]]: rewards in $M_2$ lie in $[0,1]$, so its stationary and optimal discounted values are at most $(1-\gamma)^{-1}$.

## Proof

1.1 Fix a stationary policy $\pi$ and put $d=\|V_1^\pi-V_2^\pi\|_\infty$. Subtract its two Bellman equations. For each state, split the transition term as $P_1(V_1^\pi-V_2^\pi)+(P_1-P_2)V_2^\pi$. The first part has absolute value at most $d$ because $P_1$ is a probability vector; the second is at most $V\|P_1-P_2\|_1\le V\beta$ because $0\le V_2^\pi\le V$. Averaging over the common policy's action distribution and using the reward error gives $|V_1^\pi(s)-V_2^\pi(s)|\le\alpha+\gamma d+\gamma V\beta$. Taking the maximum over states and rearranging yields the first bound. [given, F1, F3, algebra]

1.2 Put $d=\|V_1^*-V_2^*\|_\infty$. For any state and action, the two optimal Bellman backup entries differ by at most $\alpha+\gamma d+\gamma V\beta$, by the same transition splitting and the cap on $V_2^*$. For finite lists $(x_a),(y_a)$, $|\max_a x_a-\max_a y_a|\le\max_a|x_a-y_a|$: each $x_a\le y_a+m$ and $y_a\le x_a+m$ for $m=\max_a|x_a-y_a|$. Thus the optimal Bellman equations in [F1] imply $d\le\alpha+\gamma d+\gamma V\beta$. Rearranging proves the second bound. [given, F1, F2, F3, algebra]

2.1 Under the additional trap-model hypotheses, fix $\pi$ and put $d=\|V_1^\pi-V_2^\pi\|_\infty$. Bellman subtraction as in step 1.1 gives $d\le\alpha+\gamma d+\gamma\beta\|V_2^\pi\|_\infty$. By [A1] and the triangle inequality, $\|V_2^\pi\|_\infty\le\|V_1^\pi\|_\infty+d\le2W+d$. Hence $(1-\gamma-\gamma\beta)d\le\alpha+2\gamma W\beta$. Since $\gamma\beta\le(1-\gamma)/2$, the left coefficient is at least $(1-\gamma)/2$, yielding $d\le2(\alpha+2\gamma W\beta)/(1-\gamma)$. [given, F1, F3, A1, step 1.1, algebra]

3.1 For optimal values, use the finite-maximum inequality from step 1.2 in the Bellman subtraction. It gives $d=\|V_1^*-V_2^*\|_\infty\le\alpha+\gamma d+\gamma\beta\|V_2^*\|_\infty$. Again [A1] and the triangle inequality give $\|V_2^*\|_\infty\le2W+d$. The same rearrangement as step 2.1 proves the optimal-value bound. [given, F1, F2, F3, A1, step 1.2, step 2.1, algebra] ∎
