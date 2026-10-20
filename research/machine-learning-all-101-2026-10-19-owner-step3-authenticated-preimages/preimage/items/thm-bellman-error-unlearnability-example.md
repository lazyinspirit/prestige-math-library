---
id: thm-bellman-error-unlearnability-example
kind: theorem
title: The Bellman error and its minimizer are not determined by feature-reward data
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-projected-bellman-error
  - thm-finite-mdp-policy-induces-reward-state-chain
  - thm-ionescu-tulcea-construction-of-a-markov-chain
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf"
      locator: "§11.6, Example 11.4, Bellman-error objective and two MRP diagrams; PDF pp. 298–299 in this copy, printed pp. 276–277."
    - title: "Marcus Hutter, Samuel Yang-Zhao, and Sultan J. Majeed, Conditions on Features for Temporal Difference-Like Methods to Converge"
      url: "https://www.hutter1.net/publ/rlwlinfa.pdf"
      locator: "§§2.1–2.2 and §4, printed pp. 2571–2573: weighted Bellman-error convention, transition matrices, stationary distributions, and the independently reproduced Sutton–Barto pair. The paper omits its supporting proofs; all calculations here are local."
---

## Statement

Assume the Axiom of Choice to form the infinite trajectory laws. Fix $0\leq\gamma<1$. An actionless finite Markov reward process (MRP) here means a nonempty finite state set with a joint probability law for next state and reward at each state. Consider the following two MRPs, each with its stated stationary state-weighting distribution, meaning that one transition leaves the distribution unchanged.

In MRP 1 the state set is $\{A,B\}$, with transitions $A\to B$ receiving reward $0$ deterministically and $B\to A$ receiving reward $1$ with probability $1/2$ or $B\to B$ receiving reward $-1$ with probability $1/2$. Its stationary weighting is $\mu_1(A)=1/3$, $\mu_1(B)=2/3$.

In MRP 2 the state set is $\{A,B,B'\}$, with transitions $A\to B$ and $A\to B'$ each receiving reward $0$ with probability $1/2$, $B\to A$ receiving reward $1$ deterministically, and $B'\to B$ or $B'\to B'$ each receiving reward $-1$ with probability $1/2$. Its stationary weighting is $\mu_2(A)=\mu_2(B)=\mu_2(B')=1/3$.

In both processes the observed feature is $\psi(A)=(1,0)$ and $\psi(B)=\psi(B')=(0,1)$, so a parameter $w=(a,b)^\mathsf T$ assigns values $v_w(A)=a$ and $v_w(B)=v_w(B')=b$. Starting from the stated stationary weighting, the two processes induce the same probability law on the observed feature/reward sequence $((\psi(S_n),R_{n+1}))_{n\geq0}$. Their mean square Bellman errors, defined as the stationary-weighted square of the conditional expected one-step TD error, are
$$
\begin{aligned}\operatorname{BE}_1(a,b)&=\frac13(\gamma b-a)^2+\frac23\left(\frac{\gamma}{2}(a+b)-b\right)^2,\\ \operatorname{BE}_2(a,b)&=\frac13\left((\gamma b-a)^2+(1+\gamma a-b)^2+(-1+(\gamma-1)b)^2\right).\end{aligned}
$$
MRP 1 has the unique minimizer $(a,b)=(0,0)$ and minimum $0$. With $D=1+\gamma+\gamma^2$, MRP 2 has the unique minimizer $(a,b)=\left(-\frac{\gamma}{D},\frac{\gamma}{2D}\right)$ and minimum $\frac{(\gamma+2)^2}{6D}$; also $\operatorname{BE}_2(0,0)=2/3$. For every $0<\gamma<1$ the minimizing parameters differ. Thus the Bellman-error objective and, for positive discount, its minimizing parameter are not determined by the observable feature/reward sequence law. An MRP here has no action-dependent policy; it is not an unseen-action offline-MDP policy-impossibility claim.

## Statement references

[[def-axiom-of-choice|The axiom used for the infinite trajectory-law construction]].

[[def-finite-markov-decision-process|Finite joint reward-transition laws and their state-transition marginals]].

[[def-projected-bellman-error|The state-weighted Bellman-error objective as the squared norm of the expected TD-error vector]].

[[def-policy-bellman-operator|The finite discounted policy Bellman operator used for the conditional expected residual]].

[[thm-finite-mdp-policy-induces-reward-state-chain|A finite MDP with a stationary policy has a reward-state path law under Choice]].

[[thm-ionescu-tulcea-construction-of-a-markov-chain|Uniqueness of a path law with specified finite-prefix kernels under Choice]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §11.6](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

[Hutter, Yang-Zhao, and Majeed, “Conditions on Features for Temporal Difference-Like Methods to Converge,” §§2 and 4](https://www.hutter1.net/publ/rlwlinfa.pdf).

## Facts & Assumptions

**Given:** The two finite MRPs, their transition/reward laws, stationary weightings, feature map, $0\leq\gamma<1$, and Choice for the infinite path laws.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. This is used only through the path-law suppliers in step 1.2.

[F1] [[def-finite-markov-decision-process]]: a finite joint reward-transition law determines the expected reward $r(s)$ and state-transition probabilities $P(s'\mid s)$ by finite sums; an MRP can be represented by giving every state a singleton action.

[F2] [[def-projected-bellman-error]] and [[def-policy-bellman-operator]]: $\operatorname{BE}_\mu(w)=\sum_s\mu(s)((T v_w)(s)-v_w(s))^2$, where $(Tv_w)(s)=r(s)+\gamma\sum_{s'}P(s'\mid s)v_w(s')$ for a single-action process.

[F3] [[thm-finite-mdp-policy-induces-reward-state-chain]]: under Choice, every finite MDP with a nonempty state set and stationary policy has a path law with the prescribed one-step reward-state kernel.

[F4] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under Choice, an initial law and a sequence of transition kernels determine a unique path law with the corresponding finite-prefix laws.

## Proof

1.1 The transition matrices, with states ordered as displayed in the Statement, are $P_1=\begin{pmatrix}0&1\\1/2&1/2\end{pmatrix}$ and $P_2=\begin{pmatrix}0&1/2&1/2\\1&0&0\\0&1/2&1/2\end{pmatrix}$. Every row sums to one. Direct multiplication gives $\mu_1P_1=(1/3,2/3)=\mu_1$ and $\mu_2P_2=(1/3,1/3,1/3)=\mu_2$. The observed feature has mass $1/3$ at $A$ and $2/3$ at feature $B$ in each process. [given, F1, algebra]

1.2 Represent each MRP as a one-action finite MDP. Under Choice, [F3] supplies a state/reward path law for each fixed initial state; the finite mixture of these laws with weights $\mu_1$ or $\mu_2$ gives the stated random initial state. Let $Y_n=(\psi(S_n),R_{n+1})$ and set $x_A=((1,0),0)$, $x_+=((0,1),1)$, and $x_-=((0,1),-1)$. In MRP 1, the initial state law and its outgoing rewards give probability $1/3$ to each of $x_A,x_+,x_-$; MRP 2 gives the same probabilities. In each process the transition kernel of $Y_n$ is $x_A\mapsto\frac12x_++\frac12x_-$, $x_+\mapsto x_A$, and $x_-\mapsto\frac12x_++\frac12x_-$. Indeed, in MRP 1, $x_A$ comes from state $A$ and the next state is $B$, whose outgoing reward is equally likely $1$ or $-1$; $x_+$ records the transition $B\to A$, so the next observation is $x_A$; and $x_-$ records $B\to B$, after which the next outgoing reward is equally likely $1$ or $-1$. In MRP 2, $x_A$ comes from state $A$, whose next state is $B$ or $B'$ equally; $x_+$ identifies state $B$, whose next state is $A$; and $x_-$ identifies state $B'$, whose next state is $B$ or $B'$ equally. Thus both observed processes have the same initial law $\nu$ and transition kernel $K$, and their finite-prefix laws factor as $\nu(x_0)\prod_{k=0}^{n-1}K(x_k,\{x_{k+1}\})$ by repeated conditioning. By [F4], the path law with these finite-prefix laws is unique, so their observable path laws agree. [given, A1, F3, F4, induction]

2.1 In MRP 1 the conditional expected Bellman residual at $A$ is $\gamma b-a$, because $A$ moves to $B$ with reward zero. At $B$, expected reward is $(1-1)/2=0$ and the expected next value is $(a+b)/2$, so the residual is $\gamma(a+b)/2-b$. Weighting their squares by $\mu_1$ gives the stated $\operatorname{BE}_1$. In MRP 2, the residuals at $A,B,B'$ are respectively $\gamma b-a$, $1+\gamma a-b$, and $-1+\gamma b-b=-1+(\gamma-1)b$, which gives the stated $\operatorname{BE}_2$ under $\mu_2$. At $(0,0)$ the first objective is zero and the second is $2/3$. [given, F2, step 1.1, algebra]

3.1 Since $\operatorname{BE}_1$ is a sum of nonnegative squares and vanishes at $(0,0)$, that point is a minimizer. If it vanishes at $(a,b)$, its first residual gives $a=\gamma b$ and its second gives $b=\gamma(a+b)/2=\gamma(\gamma+1)b/2$. Since $\gamma(\gamma+1)/2<1$ for $0\leq\gamma<1$, $b=0$ and then $a=0$, proving uniqueness. [given, step 2.1, algebra]

3.2 Let $r_A=\gamma b-a$, $r_B=1+\gamma a-b$, and $r_{B'}=-1+(\gamma-1)b$. Then $3\operatorname{BE}_2=r_A^2+r_B^2+r_{B'}^2$. Its residual matrix is $X=\begin{pmatrix}-1&\gamma\\\gamma&-1\\0&\gamma-1\end{pmatrix}$, with residual vector $X(a,b)^\mathsf T+(0,1,-1)^\mathsf T$. At $(a,b)=(-\gamma/D,\gamma/(2D))$, direct substitution gives $r_B=(\gamma+2)/(2D)$, $r_A=\gamma r_B$, and $r_{B'}=-(\gamma+1)r_B$. Hence $X^\mathsf T(r_A,r_B,r_{B'})^\mathsf T=0$. For any increment $h\in\mathbb R^2$, expanding the squared residual gives $3(\operatorname{BE}_2(w+h)-\operatorname{BE}_2(w))=\|Xh\|_2^2$ at this point. If $Xh=0$, its first two rows give $h_1=\gamma h_2$ and $\gamma h_1=h_2$, so $(1-\gamma^2)h_2=0$; because $\gamma<1$, $h=0$. Thus the objective is strictly larger at every nonzero perturbation and the stated point is the unique global minimizer. Its minimum value is $\frac13\big(\gamma^2+1+(\gamma+1)^2\big)\big(\frac{\gamma+2}{2D}\big)^2=(\gamma+2)^2/(6D)$. [given, step 2.1, algebra]

4.1 The observable path laws agree by step 1.2, but the Bellman-error functions differ because their values at $(0,0)$ are $0$ and $2/3$. For $0<\gamma<1$, their unique minimizers also differ because MRP 1 has minimizer $(0,0)$ whereas MRP 2 has first coordinate $-\gamma/D<0$. Any quantity determined only by the observable law must be the same for two models with that law; it cannot equal these distinct objectives or, for positive discount, both minimizing parameters. This proves the non-identifiability claims. [given, step 1.2, step 2.1, step 3.1, step 3.2, algebra] ∎

## Remarks

The exact MRP 2 minimizer above has one-sided limit $(-1/3,1/6)$ as $\gamma\uparrow1$. At the excluded endpoint $\gamma=1$, the objective is $\frac13\big((b-a)^2+(1+a-b)^2+1\big)$ and is minimized exactly when $b-a=1/2$, so $(-1/2,0)^\mathsf T$ is one of multiple endpoint minimizers. It is not the limit of the unique minimizers for $\gamma<1$, despite the book’s printed limiting value. The exact finite-$\gamma$ calculation, rather than that limiting value, is used in the Statement.

## Diagram

Each arrow is a transition and its label gives the reward; the probability is shown in parentheses when that state has two outgoing edges. $B$ and $B'$ have the same feature, while $A$ has a separate feature. The diagrams encode the transition data in the Statement; the proof uses the explicit kernels and feature map.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (a1) at (0,0) {$A$};
  \node[circle,draw] (b1) at (2,0) {$B$};
  \draw[->] (a1) to[bend left=18] node[above] {$0$} (b1);
  \draw[->] (b1) to[bend left=18] node[below] {$1\;(1/2)$} (a1);
  \draw[->] (b1) to[loop right] node[right] {$-1\;(1/2)$} (b1);
  \node at (1,-1.25) {MRP 1};

  \node[circle,draw] (a2) at (5,0) {$A$};
  \node[circle,draw] (b2) at (7,0.45) {$B$};
  \node[circle,draw] (bp) at (9,0.45) {$B'$};
  \draw[->] (a2) to[bend left=18] node[above] {$0\;(1/2)$} (b2);
  \draw[->] (a2) to[bend right=18] node[below] {$0\;(1/2)$} (bp);
  \draw[->] (b2) to[bend left=22] node[above] {$1$} (a2);
  \draw[->] (bp) to[bend left=14] node[above] {$-1\;(1/2)$} (b2);
  \draw[->] (bp) to[loop right] node[right] {$-1\;(1/2)$} (bp);
  \node at (7,-1.25) {MRP 2};
\end{tikzpicture}
```
