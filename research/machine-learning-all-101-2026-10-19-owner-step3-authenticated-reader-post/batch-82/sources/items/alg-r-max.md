---
id: alg-r-max
kind: algorithm
title: "R-MAX with an admissible heuristic"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-mdp-bounded-reward-model
  - def-admissible-mdp-heuristic
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§2.1 and Algorithm 1, PDF pp. 7–10 (printed pp. 2419–2422)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§4.2.3, PDF pp. 50–51; R-max as an optimistic model-based method."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "Chapter 8, §§8.1–8.3, printed pp. 195–206; distribution models and planning context."
---

## Definition

**Input:** A bounded-reward finite discounted MDP interaction, its discount $0\le\gamma<1$, an admissible upper heuristic $U$ with cap $V_{\max}$, an integer sample threshold $m\ge1$, a value-iteration error tolerance $0<\beta<(1-\gamma)^{-1}$, and a fixed total order on each finite action set. Write $\ln$ for the natural logarithm.

**Output:** At each interaction time $t$, the selected action $a_t$. The action-value table $Q$, known set, sample lists, and empirical model are internal state; the procedure does not return $Q$ as an output.

Initialize each pair as unknown, set $Q(s,a)=U(s,a)$, and give each pair an empty list of observed rewards and next states. For interaction times $t=1,2,\ldots$, in the current state choose a maximizing action using the fixed tie order, output and take that action $a_t$, and observe reward $R_{t+1}$ and next state $S_{t+1}$. If the pair is unknown, append this observation until its list has length $m$. When it reaches $m$, mark the pair known, set its empirical reward to the sample mean and its empirical transition law to the sample frequencies. Rebuild all action values by setting the working table $Q^{(0)}(s,a)=0$, then for $j=0,\ldots,L-1$ setting $Q^{(j+1)}=H_KQ^{(j)}$, and finally replacing $Q$ by $Q^{(L)}$, for the operator
$$H_KQ(s,a)=\begin{cases}\widehat r(s,a)+\gamma\sum_{s'}\widehat P(s'\mid s,a)\max_{b\in A(s')}Q(s',b),&(s,a)\in K,\\ U(s,a),&(s,a)\notin K,\end{cases}$$
where $K$ is the current known set and
$$L=\max\!\left\{1,\left\lceil\frac{\ln(1/[\beta(1-\gamma)])}{1-\gamma}\right\rceil\right\}.$$
Pairs and their samples are never removed from $K$ or discarded. After processing the observation and any rebuild, use the observed $S_{t+1}$ as the current state in the next iteration. The algorithm specifies no computational-time bound.

## Definition references

[[def-pac-mdp-bounded-reward-model|Finite discounted MDP interaction and the joint next-state/reward law]].

[[def-admissible-mdp-heuristic|Admissible upper heuristic and normalized reward-scale cap]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed.](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).
