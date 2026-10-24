---
id: lem-uniform-law-on-finite-subset-families
kind: lemma
title: "Uniform laws on finite subset families"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-finite-cardinality
  - def-finite-probability-space-and-event
  - thm-cardinality-of-a-set-of-functions
  - thm-subset-of-a-finite-set
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
sources:
  references:
    - title: "P.J. Bickel, F. Götze and W.R. van Zwet, Resampling Fewer Than n Observations, Statistica Sinica 7 (1997), §3, pp. 8–11"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.2, PDF pp. 3–7"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Statement

For $n\ge0$, let $[n]:=\{1,\ldots,n\}$, with $[0]=\varnothing$. For an integer $r$ with $0\le r\le n$, let
$$\mathcal S_{n,r}:=\{I\subseteq[n]:|I|=r\}.$$
Then $\mathcal S_{n,r}$ is finite and nonempty, and assigning weight $1/|\mathcal S_{n,r}|$ to each member defines a finite probability space on $\mathcal S_{n,r}$.

## Facts & Assumptions

**Given:** Integers $n\ge0$ and $0\le r\le n$, the index set $[n]$, and the subset family $\mathcal S_{n,r}$ in the statement.

[F1] [[def-finite-cardinality]]: finiteness means being bijective with a von Neumann natural.

[F2] [[thm-cardinality-of-a-set-of-functions]]: for finite sets $A,B$, the function set $A^B$ is finite with cardinality $|A|^{|B|}$. In particular, the set of maps $[n]\to\{0,1\}$ is finite.

[F3] [[thm-subset-of-a-finite-set]]: every subset of a finite set is finite.

[F4] [[def-finite-probability-space-and-event]]: a finite outcome set with nonnegative weights summing to $1$ is a finite probability space, with every subset an event.

[F5] [[def-finite-cardinality]]: the cardinality of a finite set is the unique von Neumann natural bijective with it.

[F6] [[def-finite-cardinality]]: a finite set has cardinality $0$ exactly when it is empty.

## Proof

1.1 Let $B=\{0,1\}$. The shift $j\mapsto j-1$ is a bijection from the conventional index set $[n]=\{1,\ldots,n\}$ to the von Neumann natural $n=\{0,\ldots,n-1\}$; for $n=0$ both sets are empty. Thus $[n]$ is finite by [F1]. The set $B$ is bijective with $2$, so it is finite as well. For each $I\in\mathcal S_{n,r}$ define its indicator function $\chi_I:[n]\to B$ by $\chi_I(j)=1$ if $j\in I$ and $0$ otherwise. The map $I\mapsto\chi_I$ is injective because equal indicator functions have equal inverse images of $\{1\}$. Its image is a subset of the finite set $B^{[n]}$, which is finite by [F2] and [F3]. Therefore some natural $k$ is bijective with this image; composing that bijection with $I\mapsto\chi_I$ makes $\mathcal S_{n,r}$ bijective with $k$, so [F1] makes it finite. [F1, F2, F3, construct]

1.2 If $r=0$, then $\varnothing\in\mathcal S_{n,r}$. If $r>0$, then $\{1,\ldots,r\}\subseteq[n]$ because $r\le n$, and the shift $j\mapsto j-1$ is a bijection from $\{1,\ldots,r\}$ to the von Neumann natural $r$; hence this subset has cardinality $r$ by [F1, F5], so $\{1,\ldots,r\}\in\mathcal S_{n,r}$. Thus $\mathcal S_{n,r}$ is nonempty. By [F5], its cardinality $M:=|\mathcal S_{n,r}|$ is defined; by [F6] and nonemptiness, $M\ge1$. Give each $I\in\mathcal S_{n,r}$ weight $q(I)=1/M$. These weights are nonnegative and their finite sum is $M(1/M)=1$. [given, F1, F5, F6, construct, algebra]

2.1 The outcome set is finite by step 1.1 and its weights satisfy the conditions in step 1.2, so [F4] makes $(\mathcal S_{n,r},q)$ a finite probability space. The argument includes $n=0$, $r=0$, and $r=n$. [F4, step 1.1, step 1.2] ∎
