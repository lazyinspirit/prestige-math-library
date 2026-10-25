---
id: def-belief-state-and-bayes-filter
kind: definition
title: "Belief states and the finite Bayes filter"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-pomdp
  - thm-bayes-formula-for-dominated-kernels
  - def-measure-kernel-and-probability-kernel
  - def-sum-over-a-finite-index-set
justified_by:
  - lem-finite-pomdp-belief-update-is-probability-kernel
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §§3.2–3.4, PDF pp. 9–11. The filter is defined only for positive observation probability."
    - title: "Russ Tedrake, Planning Under Uncertainty: Partially-observable Markov decision processes, MIT Underactuated Robotics course notes"
      url: "https://underactuated.mit.edu/belief.html"
      locator: "Complete relevant page, lines 18–24."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 7–8."
---

## Definition

For a finite POMDP with state set $S$, define its **belief simplex** by $\Delta(S)=\{b:S\to[0,1]:\sum_{s\in S}b(s)=1\}$, with the Euclidean subspace topology and its Borel sigma-algebra. At time $t$, the observed-history random variable is $H_t=(A_0,O_1,\ldots,A_{t-1},O_t)$, and a realized history is $h_t=(a_0,o_1,\ldots,a_{t-1},o_t)$; at $t=0$ both histories are empty. A (possibly randomized) **history policy** assigns to each finite history $h_t$ a probability distribution $\pi_t(\cdot\mid h_t)$ on $A$; a deterministic choice is the point-mass case. Let $\Pr_\pi$ be the induced finite law: multiply the initial belief, these action probabilities, and the one-step factors $p(s',\rho\mid s,a)O(o\mid s')$, and sum out hidden states and unobserved rewards when taking marginals. Thus policy randomization depends only on the observed history and is conditionally independent of the hidden state given that history. The history $h_t$ is **reachable** when $\Pr_\pi(H_t=h_t)>0$. Its **belief state** is

$$b_t(s)=\Pr_\pi(S_t=s\mid H_t=h_t)=\frac{\Pr_\pi(S_t=s,H_t=h_t)}{\Pr_\pi(H_t=h_t)},$$

where both probabilities are finite sums of products of the specified initial, action, transition, joint reward-transition, and observation probabilities, with unobserved rewards summed out. At $t=0$, the empty history has belief $b_0$.

For $b\in\Delta(S)$ and $a\in A$, define the predicted state distribution $\bar b_{b,a}(s')=\sum_{s\in S}T(s'\mid s,a)b(s)$ and, for $o\in\Omega$, the observation probability

$$q(o\mid b,a)=\sum_{s'\in S}O(o\mid s')\bar b_{b,a}(s').$$

When $q(o\mid b,a)>0$, the **Bayes filter** is the probability vector

$$\tau(b,a,o)(s')=\frac{O(o\mid s')\bar b_{b,a}(s')}{q(o\mid b,a)}.$$

When $q(o\mid b,a)=0$, $\tau(b,a,o)$ is undefined; no quotient or filler value is assigned. For each $(b,a)$, the **belief-state transition kernel** on Borel sets $C\subseteq\Delta(S)$ is

$$K(C\mid b,a)=\sum_{o\in\Omega:q(o\mid b,a)>0}q(o\mid b,a)\,1_C(\tau(b,a,o)),$$

and the expected one-step reward at belief $b$ under action $a$ is $\bar r(b,a)=\sum_{s\in S}b(s)r(s,a)$, where $1_C$ denotes the indicator function of $C$.

## Definition references

[[def-finite-pomdp|The finite known transition and next-state observation laws used by the finite filter]].

[[thm-bayes-formula-for-dominated-kernels|For a dominated observation kernel, Bayes' formula gives the conditional law at positive finite marginal density and specifies a filler on null fibres]].

[[def-measure-kernel-and-probability-kernel|A probability kernel assigns a probability measure at every input and has measurable event sections]].

[[def-sum-over-a-finite-index-set|Finite sums are defined independently of an enumeration of the finite index set]].

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Tedrake, MIT Underactuated Robotics course notes](https://underactuated.mit.edu/belief.html).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).

## Remarks

For fixed $b\in\Delta(S)$, $a\in A$, and $o\in\Omega$, write $\bar b=\bar b_{b,a}$, $q(o)=q(o\mid b,a)$, and $\tau(o)=\tau(b,a,o)$ when defined. The schematic separates prediction through $T$, evaluation of the observation likelihood through $O$, and normalization only on the positive-likelihood branch. The zero-likelihood branch has no posterior belief.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,rounded corners,minimum width=1.3cm,minimum height=0.8cm] (input) at (0,0) {$b,a$};
\node[draw,rounded corners,minimum width=1.3cm,minimum height=0.8cm] (pred) at (2.6,0) {$\bar b$};
\node[draw,rounded corners,minimum width=1.3cm,minimum height=0.8cm] (obs) at (5.2,0) {$q(o)$};
\node[draw,rounded corners,minimum width=1.6cm,minimum height=0.8cm] (post) at (8.5,1.4) {$\tau(o)$};
\node[align=center] (zero) at (8.5,-1.4) {undefined\\no posterior};
\draw[->] (input) -- node[above] {$T$} (pred);
\draw[->] (pred) -- node[above] {$O,\ o$} (obs);
\draw[->] (obs) -- node[above,sloped] {$q(o)>0$} (post);
\draw[->] (obs) -- node[below,sloped] {$q(o)=0$} (zero);
\node at (8.5,2.2) {normalize};
\end{tikzpicture}
```

The arrows describe the formulas in the definition, rather than transitions between hidden states. The kernel $K$ collects the posterior beliefs from all positive-likelihood observations with their weights $q(o\mid b,a)$; zero-likelihood observations contribute no term. This illustration supplies no premise for the mathematical arguments.
