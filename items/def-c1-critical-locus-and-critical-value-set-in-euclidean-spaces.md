---
id: def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces
kind: definition
title: "$C^1$ critical loci and values for Euclidean maps"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Introduction"
      url: "https://arxiv.org/pdf/1511.05822"
---

## Definition

Let $m\ge0$ and $n\ge1$, let $U\subseteq\mathbb R^m$ be open, and let
$F\in C^1(U,\mathbb R^n)$. Here $C^1$ has the componentwise Euclidean
meaning of [[def-c-r-and-smooth-maps-between-smooth-manifolds]]. For each
$x\in U$, $DF_x$ is the total derivative: the linear map $L$ satisfying
$F(x+h)=F(x)+Lh+o(\|h\|_2)$ as in
[[def-total-derivative-in-euclidean-space]]. The **$C^1$ critical locus** of
$F$ is

$$
\operatorname{Crit}_{C^1}(F):=\{x\in U:DF_x(\mathbb R^m)\ne\mathbb R^n\}.
$$

The **$C^1$ critical-value set** is

$$
\operatorname{CV}_{C^1}(F):=F(\operatorname{Crit}_{C^1}(F)).
$$

A value outside this set is a regular value; in particular, a value with empty
fibre is regular. This definition uses only the first derivative, so it applies
to $C^1$ maps that need not be smooth.

When $m=0$, the only open domains are $\varnothing$ and $\{0\}$. On
$\varnothing$ both sets are empty. On $\{0\}$, the unique total derivative
$\mathbb R^0\to\mathbb R^n$ is zero and is not onto because $n\ge1$, so the
domain point is critical and its image is the critical-value set.
