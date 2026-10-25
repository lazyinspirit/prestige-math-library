---
id: ex-value-iteration-attains-error-rate
kind: example
title: "A one-state value-iteration model attains the Bellman error bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - alg-value-iteration
  - thm-value-iteration-convergence-error-bound
  - def-bellman-optimality-operator
  - thm-bellman-contraction-and-unique-fixed-point
  - def-integer-power
  - lem-power-laws
  - thm-induction-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: induction
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.4, value-iteration update; the exact one-state error witness is computed locally."
---

## Example

Let $S=\{s\}$, $A(s)=\{a\}$, $\gamma=1/2$, with a deterministic self-loop reward $1$, and initialize $V_0(s)=0$. Then $V^*(s)=2$ and $V_m(s)=2(1-2^{-m})$, so

$$ \|V_m-V^*\|_\infty=2^{1-m}=\gamma^m\|V_0-V^*\|_\infty $$

for every $m\ge0$; the general value-iteration error bound is attained at every iteration.

## Example references

[[def-finite-markov-decision-process|The one-state deterministic MDP data]].

[[def-bellman-optimality-operator|The one-state Bellman backup]].

[[alg-value-iteration|The finite-iterate value-iteration procedure]].

[[thm-value-iteration-convergence-error-bound|The general contraction error estimate]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** The one-state MDP, $\gamma=1/2$, and $V_0(s)=0$ in the example.

[F1] [[def-finite-markov-decision-process]]: the sole state transitions to itself with reward $1$.

[F2] [[def-bellman-optimality-operator]] and [[alg-value-iteration]]: the optimality backup is applied exactly at every iteration.

[F3] [[thm-bellman-contraction-and-unique-fixed-point]]: the Bellman optimality operator has a unique fixed point.

[L1] [[def-integer-power]]: for $n\ge1$, $a^{-n}=(a^n)^{-1}$ when $a\ne0$; in particular $2^{-1}=1/2$.

[F4] [[lem-power-laws]]: for nonzero $a$, $a^{m+n}=a^ma^n$ for all integers $m,n$. Setting $a=2$, $m=-(m+1)$, and $n=1$ gives $2^{-m}=2^{-(m+1)}2$; since $2^{-1}=1/2$, this yields $2^{-(m+1)}=\tfrac12\,2^{-m}$.

[F5] [[thm-induction-principle]]: if a property holds at $0$ and is preserved by each successor, then it holds for every natural number.

[F6] [[thm-value-iteration-convergence-error-bound]]: the exact value-iteration error is at most $\gamma^m\|V_0-V^*\|_\infty$ for every $m\ge0$.

## Verification

1.1 The one-state optimality map is $(T^*v)(s)=1+\tfrac12v(s)$ by [F1] and [F2]. Its fixed-point equation gives $v(s)=2$, and [F3] identifies this as $V^*$. [given, F1, F2, F3, algebra]

1.2 At $m=0$, $V_0(s)=0=2(1-2^{-0})$. Thus the claimed iterate formula holds at the base index. [given, L1, base]

2.1 Fix $m\in\mathbb N$ and assume $V_m(s)=2(1-2^{-m})$. The exact backup in [F2] gives $V_{m+1}(s)=1+\tfrac12V_m(s)=1+(1-2^{-m})=2-2^{-m}=2(1-2^{-(m+1)})$ by [L1]. [step 1.2, F1, F2, F4, L1, ih, algebra]

3.1 By [F5], the base case in step 1.2 and successor step 2.1 establish $V_m(s)=2(1-2^{-m})$ for every $m\ge0$. Using $V^*(s)=2$ from step 1.1 gives $\|V_m-V^*\|_\infty=2^{1-m}$; also $\gamma^m\|V_0-V^*\|_\infty=2^{-m}\cdot2=2^{1-m}$. This equals the general error bound in [F6], so it is attained at every iteration. [step 1.1, step 1.2, step 2.1, F5, F6, induction, discharge-induction: step 2.1, algebra] ∎

## Remarks

The diagram shows the one-state model used by the value-iteration calculation. The circle is the state, the rectangle is its sole action, and the labeled return arrow is the deterministic transition with reward $1$. The discount and initial value are specified in the example statement; the verification does not rely on the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (s) at (0,0) {$s$};
  \node[rectangle,draw] (a) at (2,0) {$a$};
  \draw[->] (s) -- node[above] {choose $a$} (a);
  \draw[->] (a) to[bend left=35] node[below] {$p(s,1\mid s,a)=1$} (s);
\end{tikzpicture}
```
