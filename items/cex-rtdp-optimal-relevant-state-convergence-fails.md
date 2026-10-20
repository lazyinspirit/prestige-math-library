---
id: cex-rtdp-optimal-relevant-state-convergence-fails
kind: counterexample
title: "RTDP need not visit every state reachable under an optimal policy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-stochastic-shortest-path-problem
  - alg-real-time-dynamic-programming
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "Theorem 3, printed pp. 104–105 (PDF pp. 24–25): claimed convergence on states reachable under an optimal policy; Appendix A, printed pp. 132–133 (PDF pp. 52–53): recurrent-set and greedy-tie argument."
---

## Statement refuted

The following RTDP convergence claim is false with the stated generality: in every finite undiscounted stochastic shortest-path problem with absorbing zero-cost goals, a proper policy, strictly positive nonglobal costs, an initial cost table $f_0\le f^*$ with zero goal values, and trials that start from each designated start state infinitely often and use fresh uniform draws among current greedy actions, the estimates converge almost surely to $f^*$ on every state reachable with positive probability from a designated start under some optimal policy. A state with this reachability property is called optimal-relevant here. The source asserts in addition that the controller converges to an optimal, possibly nonstationary policy on all these states; the value-convergence assertion is already false, so the conjunction is false.

The same failure occurs when each trial is continued until the first goal rather than capped: every trial ends almost surely, yet the estimate of the optimal-relevant state $z$ remains incorrect forever.

## Statement references

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming,” Theorem 3 and Appendix A](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).

## Facts & Assumptions

**Given:** The five-state finite shortest-path model and RTDP run specified in the Counterexample.

[F1] [[def-finite-stochastic-shortest-path-problem]]: a finite SSP has absorbing zero-cost goals, and each nonglobal expected cost is at least a common positive constant; properness means goal-hitting probabilities tend to one from every state.

[F3] [[alg-real-time-dynamic-programming]]: RTDP backs up the current state's exact model-based greedy value and executes a uniformly sampled current greedy action, using the specified trial cap and recurrent start schedule.

## Counterexample

**Given:** Let $S=\{s,x,y,z,g\}$ and let $g$ be the sole goal. Every action incurs the displayed deterministic cost; the corresponding reward is its negative. At $g$ the dummy action remains at $g$ with cost $0$. At $s$, action $a$ costs $1$ and moves to $x$, while action $b$ costs $1$ and moves to $y$. At $x$, the sole action costs $1$ and moves to $x$ or $g$ with probability $1/2$ each. At $y$, the sole action costs $1$ and moves to $z$; at $z$, the sole action costs $1$ and moves to $g$. RTDP starts every trial at $s$, uses trial cap $L=2$, and starts with costs $f_0(s)=f_0(x)=f_0(z)=f_0(g)=0$ and $f_0(y)=2$. Its reward-value table is $V_0=-f_0$; throughout, write $V^*=-f^*$ and $V_k=-f_k$, so maximizing the reward action value is equivalent to minimizing the cost action value. Thus $V_0\ge V^*$ is exactly $f_0\le f^*$.

In the diagram, vertices are states and each arrow label gives its one-step cost $c$ and transition probability $p$; the arrows from $s$ also name the chosen action. The two arrows from $x$ are outcomes of its single action, and each other state has the unique action specified above. The diagram illustrates the model but is not used in the proof.

\begin{center}
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (s) at (0,0) {$s$};
  \node[circle,draw] (x) at (2,1.2) {$x$};
  \node[circle,draw] (y) at (2,-1.2) {$y$};
  \node[circle,draw] (z) at (4,-1.2) {$z$};
  \node[circle,draw] (g) at (6,0) {$g$};
  \draw[->] (s) -- node[above] {$a,\ c=1,\ p=1$} (x);
  \draw[->] (s) -- node[below] {$b,\ c=1,\ p=1$} (y);
  \draw[->] (x) to[loop above] node[above] {$c=1,\ p=1/2$} (x);
  \draw[->] (x) to[bend left=8] node[above] {$c=1,\ p=1/2$} (g);
  \draw[->] (y) -- node[below] {$c=1,\ p=1$} (z);
  \draw[->] (z) to[bend right=12] node[below] {$c=1,\ p=1$} (g);
  \draw[->] (g) to[loop right] node[right] {$c=0,\ p=1$} (g);
\end{tikzpicture}
\end{center}

1.1 Every nonglobal cost is $1$, and the policy choosing $a$ at $s$ reaches $x$ and then reaches $g$ almost surely because each visit to $x$ has probability $1/2$ of moving to $g$. From $y$ and $z$ the goal is reached deterministically. Thus this is a finite positive-cost SSP with a proper stationary policy. At $x$ there is no action choice; its survival probability after $n$ steps is $2^{-n}$, so its expected total cost is $\sum_{n=0}^\infty2^{-n}=2$ by the finite geometric identity and its limit. The deterministic costs at $y,z$ and the sole initial choice at $s$ therefore give $f^*(z)=1$, $f^*(y)=1+f^*(z)=2$, and $f^*(s)=\min\{1+f^*(x),1+f^*(y)\}=3$. The initial table is finite, zero at the goal, and no larger than these optimal costs. [given, F1, algebra]

2.1 Induct on the number $k$ of completed trials. At the first trial, $f_0(x)=0<2=f_0(y)$. If $y$ has not been visited in the first $k$ trials and $x$ has been backed up $k$ times, then $f_k(y)=2$ and the recurrence $f_{j+1}(x)=1+\frac12f_j(x)$, obtained from the sole action at $x$ and $f_j(g)=0$, gives $f_k(x)=2(1-2^{-k})<2$. Thus action $a$ has cost $1+f_k(x)<3$, whereas action $b$ has cost $1+f_k(y)=3$. Since $V=-f$ and $r=-c$, the RTDP reward-greedy rule is cost-minimizing; it therefore uniquely chooses $a$ at $s$. The next trial moves to $x$ and does not visit $y$. The cap $L=2$ then provides exactly one backup at $x$, completing the induction. Tie-breaking is never invoked at $s$. [given, F3, step 1.1, algebra]

3.1 Each trial first executes $a$ and moves to $x$. With cap $L=2$, RTDP then executes the sole action at $x$ and backs up $x$ once before the trial ends, whether that transition returns to $x$ or reaches $g$. Thus the recurrence in step 2.1 holds on every trial, and neither $y$ nor $z$ is ever visited or backed up. In particular, the estimate of $z$ remains $0$ forever although $f^*(z)=1$. [given, F3, step 2.1, algebra]

3.2 For the goal-terminated variant, after any finite total number $m$ of backups at $x$, its cost is $2(1-2^{-m})<2$. Thus every later departure from $s$ still uniquely selects $a$. Each trial then consists of visits to $x$ until its transition to $g$; the probability of at least $n$ self-transitions is $2^{-n}$, which tends to zero, so the trial is finite almost surely. The union over the countably many trials of their zero-probability nontermination events has probability zero by countable subadditivity. On the complementary event every finite trial boundary has only finitely many backups at $x$, so the strict inequality persists. Neither $y$ nor $z$ is ever visited, and $f(z)=0$ forever. [given, F3, step 2.1, algebra]

4.1 The stationary policy that chooses $b$ at $s$ and then follows the sole actions at $y$ and $z$ has total cost $1+2=3=f^*(s)$, so it is optimal from the designated start $s$ and reaches $z$ with probability one. Hence $z$ is optimal-relevant by the stated definition, but its estimate fails to converge on every capped run by step 3.1 and almost surely on goal-terminated runs by step 3.2. This refutes the claimed almost-sure convergence on all optimal-relevant states, and therefore also refutes the conjunction with the source's claimed eventual optimality on every such state. [step 1.1, step 3.1, step 3.2, algebra] ∎
