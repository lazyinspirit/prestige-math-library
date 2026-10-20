---
id: ex-on-policy-one-state-linear-td-is-stable
kind: example
title: A one-state on-policy linear TD(0) update contracts to zero
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-projected-bellman-error
  - lem-geometric-sequence-null
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
    - title: "John N. Tsitsiklis and Benjamin Van Roy, An Analysis of Temporal-Difference Learning with Function Approximation"
      url: "https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf"
      locator: "§IV, Theorem 1 and Assumptions 1–4, printed pp. 679–680; context only. This example is proved directly and does not invoke their diminishing-step-size theorem."
---

## Example

Let the state set be $\{s\}$ with one available action, deterministic transition $s\to s$, reward $0$, and discount $0\leq\gamma<1$. The unique behavior and target policies coincide, the state weighting is $\mu(s)=1$, the feature is $\phi(s)=1$, and the value estimate is $v_w(s)=w$. For a fixed step size $0<\alpha\leq1$, apply the one-step TD(0) update $w_{n+1}=w_n+\alpha\big(0+\gamma v_{w_n}(s)-v_{w_n}(s)\big)$ from any $w_0\in\mathbb R$. Then $w_n\to0$.

## Example references

[[def-finite-markov-decision-process|The finite one-step transition/reward model and stationary policy]].

[[def-projected-bellman-error|The linear feature-value convention]].

[[lem-geometric-sequence-null|A geometric sequence with ratio of absolute value less than one tends to zero]].

[Tsitsiklis and Van Roy, “An Analysis of Temporal-Difference Learning with Function Approximation,” §IV](https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf).

## Facts & Assumptions

**Given:** The one-state model, $0\leq\gamma<1$, $0<\alpha\leq1$, and an arbitrary initial weight $w_0$.

[F1] [[def-finite-markov-decision-process]]: the unique action and deterministic self-transition define a finite MDP with reward zero.

[F2] [[def-projected-bellman-error]]: for the feature $\phi(s)=1$, the linear value estimate is $v_w(s)=w$.

[F3] [[lem-geometric-sequence-null]]: if $|q|<1$, then $q^n\to0$.

## Verification

1.1 The behavior and target policies are the same unique action, so the importance ratio is $1$. The next state is always $s$, hence the TD error at weight $w_n$ is $0+\gamma w_n-w_n=-(1-\gamma)w_n$. Substitution in the update gives $w_{n+1}=q w_n$, where $q=1-\alpha(1-\gamma)$. [given, F1, F2, algebra]

2.1 Because $0<\alpha\leq1$ and $0\leq\gamma<1$, one has $\gamma\leq q<1$, so $|q|<1$. Induction gives $w_n=q^n w_0$ for every $n$, and [F3] implies $w_n\to0$. [given, F3, step 1.1, induction, algebra] ∎

## Diagram

The circle is the sole state and the loop is its deterministic transition under the unique action; its reward is zero. The diagram only displays the model stated above and is not used in the calculation.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[circle,draw] (s) at (0,0) {$s$};
  \draw[->] (s) to[loop above] node[above] {$a,\ r=0$} (s);
\end{tikzpicture}
```
