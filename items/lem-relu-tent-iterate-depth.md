---
id: lem-relu-tent-iterate-depth
kind: lemma
title: "Tent-map iterates and ReLU implementation"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-relu-network]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Proposition 2"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "Proof of Proposition 2, pp. 6–7; repeated tent-map implementation."
    - title: "Matus Telgarsky, Benefits of Depth in Neural Networks, Lemma 3.10 and Corollary 3.9"
      url: "https://proceedings.mlr.press/v49/telgarsky16.pdf"
      locator: "§3.4, tent-map iterates and their crossing counts."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Statement

Let $\rho(z)=\max\{0,z\}$ and define $\tau(x)=2\rho(x)-4\rho(x-1/2)$ for $x\in[0,1]$. For each integer $q\ge0$, $\tau^q$ is affine and maps bijectively onto $[0,1]$ on each of the $2^q$ dyadic intervals $[j2^{-q},(j+1)2^{-q}]$, with slope of magnitude $2^q$. It is computed on $[0,1]$ by a ReLU network with $2q$ hidden units, $q$ hidden layers, and $O(q+1)$ weights; its depth, counting input and output layers, is $q+2$.

## Statement references

[Yarotsky, Proposition 2 proof: repeated tent-map implementation](https://arxiv.org/pdf/1610.01145)

[Telgarsky, Lemma 3.10 and Corollary 3.9: tent-map crossing count](https://proceedings.mlr.press/v49/telgarsky16.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The ReLU network and depth convention in [[def-relu-network]], the map $\rho(z)=\max\{0,z\}$, and $q\in\mathbb N_0$.

[F1] A ReLU unit applies $\rho$ to an affine combination of outputs of earlier units, and skip connections are allowed ([[def-relu-network]]).

## Proof

1.1 On $[0,1/2]$, $\tau(x)=2x$, and on $[1/2,1]$, $\tau(x)=2-2x$. Thus $\tau$ maps each half interval bijectively onto $[0,1]$ with slope magnitude $2$. If $\tau^q$ has the stated property, each of its dyadic intervals is split at its midpoint by the preimage of $1/2$; composition with $\tau$ makes two dyadic intervals, each mapped bijectively onto $[0,1]$, with slopes multiplied by $2$. Induction proves the interval and slope claims. [given, F1, induction]

2.1 A layer with two ReLU units computes $u=\rho(2v)$ and $w=\rho(2v-1)$ from the preceding scalar value $v\in[0,1]$, and the affine output $u-2w$ equals $\tau(v)$. For each next block substitute the preceding block's affine output expression for $v$ in its two preactivations, so one hidden layer suffices per iterate. Forward each block's affine output to the final affine unit; these skip edges add only $O(q)$ parameters. The network uses $2q$ hidden units and $O(q+1)$ weights; counting input and output gives depth $q+2$. [step 1.1, F1, construct] ∎
