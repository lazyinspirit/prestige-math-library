---
id: cex-disconnected-comparison-support-does-not-identify-policy
kind: counterexample
title: Disconnected comparison support does not identify Gibbs policy mass
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-bradley-terry-preference-model
  - def-kl-regularized-policy-improvement
  - thm-finite-action-gibbs-policy-optimum
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Statement refuted

For one prompt with finite nonempty response set $Y$, reference probability vector $q=(q_y)_{y\in Y}$ with $q_y>0$ and $\sum_yq_y=1$, coefficient $\beta>0$, and undirected graph $G=(Y,E)$ with $E\subseteq\{\{u,v\}:u,v\in Y,\ u\ne v\}$ and at least two connected components, the exact Bradley–Terry probabilities on every observed edge uniquely determine the Gibbs-optimal policy for every reward $r:Y\to\mathbb R$. For an edge $\{u,v\}$ the two orientations have probabilities $\sigma(r(u)-r(v))$ and $\sigma(r(v)-r(u))$, where $\sigma(t)=(1+e^{-t})^{-1}$. An edge is one observed pair, and two vertices lie in the same connected component exactly when a finite path of observed edges joins them.

## Statement references

[[def-bradley-terry-preference-model|Finite Bradley–Terry preference model]]: gives the comparison probability from a reward difference.

[[thm-finite-action-gibbs-policy-optimum|Finite-action Gibbs policy theorem]]: gives the unique policy for each reward and reference.

[[def-natural-logarithm|Natural logarithm]]: gives $e^{\log3}=3$ in the witness.

## Facts & Assumptions

**Given:** The finite response set $Y=\{a,b,c,d\}$, uniform reference $q_y=1/4$, coefficient $\beta=1$, and observed edge set $E=\{\{a,b\},\{c,d\}\}$.

[F1] [[def-bradley-terry-preference-model]]: for a distinct pair, $\Pr(u\succ v)=\sigma(r(u)-r(v))$ with $\sigma(t)=(1+e^{-t})^{-1}$.

[F2] [[thm-finite-action-gibbs-policy-optimum]]: the unique regularized policy is $p_y^*=q_y e^{r(y)/\beta}/Z$ with $Z=\sum_y q_y e^{r(y)/\beta}$.

[F3] [[def-natural-logarithm]]: $e^{\log t}=t$ for $t>0$.

## Counterexample

1.1 Let $r_0(a)=r_0(b)=r_0(c)=r_0(d)=0$ and let $r_1(a)=r_1(b)=0$, $r_1(c)=r_1(d)=\log3$. On each observed edge the two endpoint rewards agree under both functions, so [F1] gives the same comparison probability $\sigma(0)=1/2$. [F1, given, algebra]

2.1 Under $r_0$, [F2] has four unnormalized weights $1/4$, so $Z_0=1$ and $p_0^*=(1/4,1/4,1/4,1/4)$. Under $r_1$, [F3] gives unnormalized weights $(1/4,1/4,3/4,3/4)$, hence $Z_1=2$ and $p_1^*=(1/8,1/8,3/8,3/8)$. [F2, F3, given, step 1.1, algebra]

3.1 The observed edge probabilities are identical by step 1.1, while the two Gibbs policies differ by step 2.1. Therefore the exact comparison probabilities on this disconnected graph do not uniquely determine the policy, refuting the Statement. [given, step 1.1, step 2.1, algebra] ∎

## Comparison graph

The vertices below are responses, and an undirected edge records one observed pair. The two connected components are $\{a,b\}$ and $\{c,d\}$; there are no observed cross-component comparisons. This diagram only displays the stated edge set; the verification above uses the explicit set $E$ and formulas.

```tikz
\begin{tikzpicture}[every node/.style={circle,draw,minimum size=8mm}]
  \node (a) at (0,0) {$a$};
  \node (b) at (1.5,0) {$b$};
  \node (c) at (4,0) {$c$};
  \node (d) at (5.5,0) {$d$};
  \draw (a) -- (b);
  \draw (c) -- (d);
\end{tikzpicture}
```
