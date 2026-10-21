---
id: ex-behavior-cloning-covariate-shift
kind: example
title: Behavior cloning can incur quadratic cost under state-distribution shift
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-imitation-learning-and-expert-surrogate-loss
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Theorem 2.1 and behavior-cloning discussion, §2.1, PDF pp. 1–2; the finite two-state calculation below is local."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Behavior cloning and state-distribution shift, Chapter 6, PDF pp. 3–4 / printed pp. 56–57."
---

## Example

Let the states be $g$ (good) and $b$ (bad), with initial state $S_0=g$. At $g$ the actions are $c$ and $e$; action $c$ stays at $g$ with task cost $0$, while action $e$ moves to $b$ with cost $1$. At $b$ the actions are $r$ and $e$; action $r$ moves to $g$ with cost $0$, while action $e$ stays at $b$ with cost $1$. The transition is deterministic for every state/action pair. The deterministic expert chooses $c$ at $g$ and $r$ at $b$. For a parameter $\epsilon$ with $0<\epsilon\le1/T$, the learner chooses $e$ at $g$ with probability $\epsilon$ and $c$ otherwise, and always chooses $e$ at $b$. Use the statewise 0–1 expert-action disagreement as surrogate loss.

The diagram labels each deterministic transition by action/task-cost; the text specifies the two stochastic action probabilities of the learner. The expert occupancy is concentrated at $g$, so the behavior-cloning disagreement loss on expert states is $\epsilon$. Under the learner, the expected total task cost is

$$\sum_{k=1}^{T}\bigl(1-(1-\epsilon)^k\bigr),$$

which lies between $\epsilon T^2/8$ and $\epsilon T^2$. Thus an $\epsilon$ disagreement rate on expert states can correspond to quadratic-in-$T$ learner cost when a mistake moves the learner to states absent from expert demonstrations.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle] (g) at (0,0) {$g$};
  \node[draw,circle] (b) at (4,0) {$b$};
  \draw[->] (g) edge[loop above] node[above] {$c/0$} (g);
  \draw[->] (g) to[bend left=18] node[above] {$e/1$} (b);
  \draw[->] (b) edge[loop above] node[above] {$e/1$} (b);
  \draw[->] (b) to[bend left=18] node[below] {$r/0$} (g);
\end{tikzpicture}
```

## Example references

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Theorem 2.1 and §2.1, PDF pp. 1–2.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 3–4 / printed pp. 56–57.

## Facts & Assumptions

**Given:** The two-state transition/task-cost model, expert, learner, horizon, and surrogate loss in the Example.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: $d_\pi$ is the normalized average of the state distributions at times $0,\ldots,T-1$, and an expert surrogate is a $[0,1]$-valued upper bound on the probability of taking an action different from the deterministic expert. The Example chooses the surrogate equal to that disagreement probability.

[A1] $T\ge1$ and $0<\epsilon\le1/T$.

## Verification

1.1 Under the expert, the state remains $g$ at every decision time, so $d_{\pi^*}$ is the point mass at $g$. The learner's action-disagreement probability at $g$ is $\epsilon$, hence its behavior-cloning surrogate loss averaged under $d_{\pi^*}$ equals $\epsilon$. [F1, A1, given]

1.2 Put $q=1-\epsilon$. The probability that the learner is at $g$ at time $t$ is $q^t$: it is $1$ at $t=0$, and if it is $g$ at time $t$ it remains there at the next state with probability $q$, while if it is $b$ it remains $b$. Thus the probability at time $t+1$ is $q^tq=q^{t+1}$. At decision time $t$, expected cost is $q^t\epsilon+(1-q^t)=1-q^{t+1}$. Summing for $t=0,\ldots,T-1$ gives the displayed cost. [A1, F1, algebra]

2.1 For each integer $k\ge1$, $(1-\epsilon)^k\ge1-k\epsilon$: the case $k=1$ is equality, and if it holds at $k$, multiplication by $1-\epsilon\ge0$ gives $(1-\epsilon)^{k+1}\ge(1-k\epsilon)(1-\epsilon)=1-(k+1)\epsilon+k\epsilon^2\ge1-(k+1)\epsilon$. Therefore $1-q^k\le k\epsilon$. [A1, step 1.2, algebra]

2.2 If $T=1$, the displayed cost is $\epsilon$, which lies between $\epsilon T^2/8$ and $\epsilon T^2$. Now assume $T\ge2$, so $0<\epsilon\le1/2$. Then $(1-\epsilon)^{-1}\ge1+\epsilon$ because $(1-\epsilon)^{-1}-(1+\epsilon)=\epsilon^2/(1-\epsilon)\ge0$. Also $(1+\epsilon)^k\ge1+k\epsilon$ for all $k\ge1$: it is equality for $k=1$, and multiplication by $1+\epsilon>0$ gives $(1+\epsilon)^{k+1}\ge(1+k\epsilon)(1+\epsilon)=1+(k+1)\epsilon+k\epsilon^2\ge1+(k+1)\epsilon$. Hence $q^k\le1/(1+k\epsilon)$. For $k\le T$, [A1] gives $k\epsilon\le1$, so $1-q^k\ge k\epsilon/(1+k\epsilon)\ge k\epsilon/2$. Let $r=\lceil T/2\rceil$; there are at least $T/2$ integer indices from $r$ through $T$, each at least $T/2$, so $\sum_{k=1}^T k\ge T^2/4$. The expected cost is at least $\epsilon T^2/8$. [A1, step 1.2, algebra]

3.1 Summing the upper estimate $1-q^k\le k\epsilon$ from step 2.1 gives cost at most $\epsilon\sum_{k=1}^T k\le\epsilon T^2$. Together with the lower estimate from step 2.2, this proves the claimed bounds. [A1, step 2.1, step 2.2, algebra] ∎
