---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-extended-value-iteration.json
  precheck: n/a
id: alg-extended-value-iteration
kind: algorithm
title: "Extended value iteration for a confidence set"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-bounded-reward-finite-mdp]
justified_by: [lem-ucrl2-evi-termination]
aliases: []
forward_refs: []
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§3.1.2, Figure 2 and equation (5) (PDF lines 586–667); §3.1.3, Theorem 7 (PDF lines 747–760); Appendix B, proof sketch of Theorem 7 (PDF lines 3649–3708)."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, Proposition 7.3 and Theorem 7.10; Proposition 7.3's proof is omitted there."}
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Input finite nonempty state and action sets, upper reward estimates $\widetilde r(s,a)$, empirical transition laws $\widehat P(\cdot\mid s,a)$, nonnegative transition radii $b_p(s,a)$, a tolerance $\varepsilon>0$, and fixed orders of the states and actions for tie-breaking. For a vector $v\in\mathbb R^S$, write $\operatorname{span}(v)=\max_s v(s)-\min_s v(s)$ and let $\Delta(S)$ be the probability simplex on $S$. Initialize $u_0(s)=0$. At iteration $i\ge1$, compute
$$u_i(s)=\max_{a\in A(s)}\left[\widetilde r(s,a)+\max_{q\in\Delta(S):\|q-\widehat P(\cdot\mid s,a)\|_1\le b_p(s,a)}q\cdot u_{i-1}\right].$$
For every state-action pair $(s,a)$, run the following transfer routine using $v=u_{i-1}$. Put $q=\widehat P(\cdot\mid s,a)$, $c=\min\{1,b_p(s,a)/2\}$, and order the states $x_1,\ldots,x_m$ by nondecreasing $v(x_j)$, using the fixed state order to break ties. Set $j=1$ and $\ell=m$. While $c>0$ and $j<\ell$, advance $j$ while $q(x_j)=0$, then decrease $\ell$ while $j<\ell$ and $q(x_\ell)=1$. If $j\ge\ell$, stop. If $v(x_j)\ge v(x_\ell)$, stop. Otherwise set $d=\min\{c,q(x_j),1-q(x_\ell)\}$, replace $q(x_j)$ by $q(x_j)-d$ and $q(x_\ell)$ by $q(x_\ell)+d$, and replace $c$ by $c-d$; repeat. Call the resulting vector $q_{i,s,a}$.

For each state, compute $B_i(s,a)=\widetilde r(s,a)+q_{i,s,a}\cdot u_{i-1}$ for every action, record the first action $a_i(s)$ in the fixed action order attaining $\max_{a\in A(s)}B_i(s,a)$, and set $q_i(\cdot\mid s)=q_{i,s,a_i(s)}$. If $\operatorname{span}(u_i-u_{i-1})<\varepsilon$, return the stationary deterministic policy $\pi_i(s)=a_i(s)$, its corresponding transition rows $q_i$, the vector $u_{i-1}$ used in that backup, and the iteration index. Otherwise continue. The procedure is partial unless a separate termination result applies.

## Definition references

[Bounded-reward finite MDP](../items/def-bounded-reward-finite-mdp.md): provides the finite state/action sets and reward/transition laws.

[EVI correctness and termination](../items/lem-ucrl2-evi-termination.md): proves that the transfer routine returns the exact row maximum and that positive radii give finite termination.

[UCRL2 Extended Value Iteration](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3.1.2, Figure 2 and equation (5).

[Average-reward value iteration discussion](https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf): Chapter 7, §§7.3–7.4.

## Remarks

For fixed $(s,a)$ and $v=u_{i-1}$, the first panel shows one positive transfer between the current lowest-value source $x_j$ and highest-value destination $x_\ell$. The amount $d$ is limited by the remaining mass budget $c$, available source mass, and destination capacity. The other coordinates are unchanged. Such a transfer preserves total probability and increases $q\cdot v$ by $d(v(x_\ell)-v(x_j))>0$. The second panel shows the subsequent action comparison at a fixed state $s$: each action has its own optimized row, and the fixed action order resolves ties only after the backed-up values are computed.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node at (5,3.6) {One positive transfer: $j<\ell$, $v(x_j)<v(x_\ell)$};
\node[draw, rounded corners, minimum width=3.3cm, minimum height=1.1cm, align=center] (low) at (1.8,2.3) {$x_j$ (lower value)\\ $q(x_j)\longmapsto q(x_j)-d$};
\node[draw, rounded corners, minimum width=3.3cm, minimum height=1.1cm, align=center] (high) at (8.2,2.3) {$x_\ell$ (higher value)\\ $q(x_\ell)\longmapsto q(x_\ell)+d$};
\draw[->, thick] (low) -- node[above] {mass $d$} (high);
\node at (5,1.2) {$d=\min\{c,q(x_j),1-q(x_\ell)\},\qquad c\longmapsto c-d$};
\node at (5,0.15) {After each action's row optimization, at fixed $s$:};
\node[draw, rounded corners, minimum height=1cm, align=center] (row) at (1.3,-1) {For each $a\in A(s)$\\ $q_{i,s,a}$};
\node[draw, rounded corners, minimum height=1cm, align=center] (backup) at (5,-1) {$B_i(s,a)$\\ $=\widetilde r(s,a)+q_{i,s,a}\cdot v$};
\node[draw, rounded corners, minimum height=1cm, align=center] (choice) at (9,-1) {$a_i(s)$: first action\\attaining $\max_a B_i(s,a)$};
\draw[->] (row) -- (backup);
\draw[->] (backup) -- (choice);
\end{tikzpicture}
```

This illustration does not replace the transfer routine or its separate correctness and termination arguments.
