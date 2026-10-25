---
id: ex-same-observed-law-different-intervention-law
kind: example
title: "The same observed law can have different intervention laws"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-parametric-statistical-model
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-1, pp. 674–675"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, §6.1, pp. 71–74"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $U\sim\mathrm{Bernoulli}(1/2)$. In SCM 1 set $A=U$ and $Y=A$; its graph
is $U\to A\to Y$. In SCM 2 set $A=U$ and $Y=U$; its graph is
$U\to A$ and $U\to Y$. Degenerate independent exogenous errors at $A$ and
$Y$ complete both Markovian SCMs.

## Facts & Assumptions

**Given:** The two binary SCMs in the Example.

[F1] Observational equivalence means equality of the induced sampling laws.
[[def-parametric-statistical-model]], [[def-observational-equivalence]]

[F2] An estimand is identifiable only if it is constant over parameter values
with the same observed law. [[def-estimand-on-a-statistical-model]],
[[def-identifiability-of-an-estimand]]

[F3] Under an intervention only the named structural equation is replaced.
[[def-recursive-structural-causal-model-and-dag]]

## Verification
**Proof technique:** compare the finite observational laws and then compute both truncated structural systems.

**Given:** [F1]–[F3] and the two SCMs in the Example.

1.1 In either model, $A=Y=U$, so the observed joint law assigns probability $1/2$ to $(A,Y)=(0,0)$ and $1/2$ to $(A,Y)=(1,1)$, and zero to the other pairs. The parameter values representing the two SCMs are observationally equivalent by [F1]. [given, F1, algebra]

2.1 Under $do(A=a)$ in SCM 1, the equation $Y=A$ remains and gives $Y=a$ with probability one. Under $do(A=a)$ in SCM 2, the equation $Y=U$ remains and $U$ is unchanged, so $Y$ is Bernoulli$(1/2)$. Thus for $a=0$ the interventional success probabilities are respectively $0$ and $1/2$; the intervention-law estimand is not constant on the observational-equivalence class in step 1.1. It is therefore not identifiable on the two-model statistical model by [F2]. [step 1.1, F2, F3, algebra] ∎

## Remarks

The paired graphs below show the original systems (top) and the systems after
$do(A=a)$ (bottom), for $a\in\{0,1\}$. The boxed vertex has its equation
replaced by $A=a$, so its incoming arrow is removed. The degenerate exogenous
errors at $A$ and $Y$ are omitted. Here $U$ is unobserved; the observed pair
$(A,Y)$ has the same law in both original systems, as computed in step 1.1.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node at (1.5,1.2) {SCM 1};
\node at (6,1.2) {SCM 2};
\node (u1) at (0,0) {$U$};
\node (a1) at (1.5,0) {$A$};
\node (y1) at (3,0) {$Y$};
\draw[->] (u1) -- (a1);
\draw[->] (a1) -- (y1);
\node (u2) at (6,0.4) {$U$};
\node (a2) at (5.1,-0.5) {$A$};
\node (y2) at (6.9,-0.5) {$Y$};
\draw[->] (u2) -- (a2);
\draw[->] (u2) -- (y2);
\node at (1.5,-1) {$A=Y=U$};
\node at (6,-1.2) {$A=Y=U$};
\node at (3.75,-2) {$do(A=a)$};
\node (u3) at (0,-3) {$U$};
\node[draw,rectangle,inner sep=5pt] (a3) at (1.5,-3) {$A=a$};
\node (y3) at (3,-3) {$Y$};
\draw[->] (a3) -- (y3);
\node (u4) at (6,-2.6) {$U$};
\node[draw,rectangle,inner sep=5pt] (a4) at (5.1,-3.5) {$A=a$};
\node (y4) at (6.9,-3.5) {$Y$};
\draw[->] (u4) -- (y4);
\node at (1.5,-4.3) {$Y=a\text{ surely}$};
\node at (6,-4.3) {$Y\sim\mathrm{Bernoulli}(1/2)$};
\end{tikzpicture}
```

Only SCM 1 retains an arrow from $A$ to $Y$ after intervention. The displayed
response laws follow from the unchanged equations for $Y$, as computed in
step 2.1; the verification is independent of this illustration.
