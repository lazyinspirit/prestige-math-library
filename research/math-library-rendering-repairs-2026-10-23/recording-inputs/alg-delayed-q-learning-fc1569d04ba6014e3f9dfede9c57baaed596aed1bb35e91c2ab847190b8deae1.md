---
id: alg-delayed-q-learning
kind: algorithm
title: "Delayed Q-learning with an admissible heuristic"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-mdp-bounded-reward-model
  - def-admissible-mdp-heuristic
  - alg-q-learning
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
      locator: "§2.2, Algorithm 2, PDF pp. 10–12 (printed pp. 2422–2424)."
    - title: "Alexander L. Strehl, Lihong Li, Eric Wiewiora, John Langford, and Michael L. Littman, PAC Model-Free Reinforcement Learning"
      url: "https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf"
      locator: "§§4.1–4.4, PDF p. 3, and Algorithm 1, PDF p. 4 (printed pp. 883–884)."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§§4.2.4 and 4.3.1, PDF pp. 53–57; PAC-MDP and Q-learning context."
---

## Definition

**Input:** A bounded-reward finite discounted MDP interaction, its discount $0\le\gamma<1$, an admissible upper heuristic $U$ with cap $V_{\max}$, an integer batch size $m\ge1$, a bonus $0<\epsilon_1<1$, and a fixed total order on each action set.

**Output:** At each interaction time $t$, the selected action $a_t$. The table $Q$, batch sums, sample counts, batch-start times, learning flags, and global last-update time are internal state; the procedure does not return them as outputs.

Initialize $Q(s,a)=U(s,a)$, batch sum $B(s,a)=0$, sample count $\ell(s,a)=0$, batch start $b(s,a)=0$, learning flag $L(s,a)=\mathrm{true}$, and global last-update time $t^*=0$. For interaction times $t=1,2,\ldots$, in current state $s$, choose an action maximizing $Q(s,\cdot)$ under the fixed tie order, output and take that action $a_t$, then observe reward $r$ and next state $s'$. If $b(s,a)\le t^*$, set $L(s,a)=\mathrm{true}$. If $L(s,a)$ is true, set $b(s,a)=t$ when $\ell(s,a)=0$, increment $\ell(s,a)$ by one, and add $r+\gamma\max_{c\in A(s')}Q(s',c)$ to $B(s,a)$. When $\ell(s,a)=m$, set $\bar B=B(s,a)/m$. If $Q(s,a)-\bar B\ge2\epsilon_1$, replace $Q(s,a)$ by $\bar B+\epsilon_1$ and set $t^*=t$. Otherwise set $L(s,a)=\mathrm{false}$ exactly when $b(s,a)>t^*$. In either outcome reset $B(s,a)=0$ and $\ell(s,a)=0$ after a completed batch; if $L(s,a)$ remains false, make no sample or Q update on this visit. Leave all other entries unchanged. Use $s'$ as the current state in the next iteration.

## Definition references

[[def-pac-mdp-bounded-reward-model|Finite discounted MDP interaction and the joint next-state/reward law]].

[[def-admissible-mdp-heuristic|The admissible initialization and value cap]].

[[alg-q-learning|The one-step reward plus discounted greedy-successor target]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Strehl et al., *PAC Model-Free Reinforcement Learning*](https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).

## Remarks

For a fixed pair $(s,a)$, the diagram shows changes to the learning flag during visits. A successful batch means $Q(s,a)-\bar B\ge2\epsilon_1$; a failed batch means the strict opposite inequality. On success, set $Q(s,a)=\bar B+\epsilon_1$ and $t^*=t$. Every completed batch resets $B$ and $\ell$ to zero. An incomplete batch retains its accumulated samples. The clock $t^*$ is global, so a successful update at another pair can reactivate this pair on its next visit. The visit test precedes sampling, including the first sample after reactivation.

```tikz
\begin{tikzpicture}[>=stealth, line width=0.8pt, every node/.style={font=\small}, state/.style={draw,rounded corners,align=center,minimum width=3.5cm,minimum height=1cm}]
\node[state] (E) at (0,0) {Learning enabled\\ $L(s,a)=\mathrm{true}$};
\node[state] (D) at (7,0) {Learning paused\\ $L(s,a)=\mathrm{false}$};
\draw[->] (E) to[bend right=25] node[below,align=center] {failed batch\\ $b(s,a)>t^*$} (D);
\draw[->] (D) to[bend right=25] node[above,align=center] {visit with $b(s,a)\le t^*$\\reactivate before sampling} (E);
\draw[->] (E.north west) .. controls (-2,2.6) and (2,2.6) .. (E.north east) node[pos=0.5,above,align=center] {successful batch\\update $Q(s,a)$ and $t^*$};
\draw[->] (E.south east) .. controls (2,-3) and (-2,-3) .. (E.south west) node[pos=0.5,below,align=center] {incomplete batch, or\\failed batch with $b(s,a)\le t^*$};
\draw[->] (D.north east) .. controls (10,2) and (10,-2) .. (D.south east) node[pos=0.5,right,align=center] {visit with\\ $b(s,a)>t^*$:\\skip sampling};
\end{tikzpicture}
```

Each self-loop describes a visit while the corresponding flag remains unchanged. Reactivation and completion of a batch can occur on the same visit, so the diagram can traverse two arrows during one visit. A completed-batch transition is taken only after all $m$ samples have been accumulated; the batch-start time $b(s,a)$ is set when its first sample is collected. This illustration adds no convergence or sample-complexity claim.
