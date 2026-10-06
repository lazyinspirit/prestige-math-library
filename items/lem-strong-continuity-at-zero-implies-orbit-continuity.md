---
id: lem-strong-continuity-at-zero-implies-orbit-continuity
kind: lemma
title: "Continuity at time zero implies continuity of every orbit"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-dependent-choice
  - def-strongly-continuous-semigroup
  - lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
  - def-operator-norm
  - lem-composition-operator-norm-inequality
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 5, Proposition 5.3, printed pp. 37-38"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Lemma 1.7, printed pp. 4-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $X$ be a Banach space and $(T(t))_{t\ge0}\subseteq\mathcal B(X)$ satisfy $T(0)=I$, $T(t+s)=T(t)T(s)$ for $s,t\ge0$ and $\lim_{t\downarrow0}T(t)x=x$ for every $x\in X$. Then $(T(t))$ is a strongly continuous semigroup ([[def-strongly-continuous-semigroup]]): every orbit map $t\mapsto T(t)x$ is continuous on $[0,\infty)$.

## Facts & Assumptions

**Given:** Dependent Choice; A Banach space $X$ and a family $(T(t))_{t\ge0}\subseteq\mathcal B(X)$ with $T(0)=I$, $T(t+s)=T(t)T(s)$ for $s,t\ge0$ and $\lim_{t\downarrow0}T(t)x=x$ for every $x\in X$.

[F1] Local boundedness: for every $t_0\ge0$ there is $M<\infty$ with $\|T(t)\|\le M$ for all $t\in[0,t_0]$; this uses DC through the uniform boundedness principle ([[lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval]]).

[F2] For $S\in\mathcal B(X)$ the operator norm satisfies $\|Sy\|\le\|S\|\,\|y\|$ for all $y$, and $\|ST\|\le\|S\|\,\|T\|$ ([[def-operator-norm]], [[lem-composition-operator-norm-inequality]]).

[F3] The hypotheses are those of a strongly continuous semigroup with continuity required only at $0$ ([[def-strongly-continuous-semigroup]]): $T(0)=I$, the functional equation holds, and $T(h)x\to x$ as $h\downarrow0$ for every $x$.



## Proof

**Proof technique:** direct, transporting continuity at $0$ to an arbitrary time with the functional equation and the local bound.

1.1 Fix $t_0\ge0$ and let $M$ be a bound for $\|T(t)\|$ on $[0,t_0]$, which exists by [F1]; fix also $x\in X$. [F1]

1.2 Right continuity at $t_0$: for $h>0$, the functional equation gives $T(t_0+h)x-T(t_0)x=T(t_0)\bigl(T(h)x-x\bigr)$, whose norm is at most $\|T(t_0)\|\,\|T(h)x-x\|\to0$ as $h\downarrow0$ by [F2] and [F3]. [F2, F3]

1.3 Left continuity at $t_0$: for $0<h\le t_0$ one has $T(t_0)=T(t_0-h+h)=T(t_0-h)T(h)$, hence $T(t_0-h)x-T(t_0)x=T(t_0-h)\bigl(x-T(h)x\bigr)$ and, since $t_0-h\in[0,t_0]$, $\|T(t_0-h)x-T(t_0)x\|\le M\|x-T(h)x\|\to0$ by [F1], [F2] and [F3]. [F1, F2, F3]

2.1 The two one-sided limits at $t_0$ both equal $T(t_0)x$, so the orbit $t\mapsto T(t)x$ is continuous at every $t_0\ge0$; as $x$ was arbitrary, all orbits are continuous on $[0,\infty)$, and the family is a strongly continuous semigroup as defined in [F3]. [F3, step 1.2, step 1.3] ∎
