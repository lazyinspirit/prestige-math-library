---
id: lem-finite-weighted-upper-tail-pvalues-and-randomized-ties
kind: lemma
title: "Finite weighted upper-tail p-values and randomized ties"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Statement

Let $(\Omega,w)$ be a finite probability space, let $T:\Omega\to\mathbb R$,
and let $Z$ have law $w$. Define
$$q(z):=\sum_{\omega\in\Omega}w(\omega)1\{T(\omega)\ge T(z)\}.$$
Then $\Pr(q(Z)\le u)\le u$ for every $u\in[0,1]$. If an auxiliary random
variable $U$ is independent of $Z$ and uniform on $[0,1]$, define
$$q^+(Z,U):=\sum_{\omega\in\Omega}w(\omega)1\{T(\omega)>T(Z)\}+U\sum_{\omega\in\Omega}w(\omega)1\{T(\omega)=T(Z)\}.$$
Then $\Pr(q^+(Z,U)\le u)=u$ for every $u\in[0,1]$.

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$, a real score $T$ on it, and, for the randomized assertion, an independent $U$ with $\Pr(U\le u)=u$ for $u\in[0,1]$.

[F1] [[def-finite-probability-space-and-event]]: $w(\omega)\ge0$ and $\sum_{\omega\in\Omega}w(\omega)=1$; event probabilities are sums of the weights over the event.

[A1] The auxiliary randomizer is independent of $Z$ and has the continuous uniform distribution on $[0,1]$, characterized by $\Pr(U\le u)=u$.

## Proof

**Proof technique:** direct finite enumeration of score levels.

1.1 The positive-weight support is nonempty by [F1]. List its finitely many distinct score values in decreasing order as $t_1>\cdots>t_m$, let $d_j=\sum_{T(\omega)=t_j}w(\omega)>0$, and put $a_0=0$ and $a_j=\sum_{k=1}^j d_k$. These cumulative masses satisfy $0=a_0<a_1<\cdots<a_m=1$. [given, F1, construct]

2.1 If $T(Z)=t_j$, then $q(Z)=a_j$. For $u<1$, the indices with $a_j\le u$ form an initial segment; if its last index is $j_0$, then $\Pr(q(Z)\le u)=\sum_{j\le j_0}d_j=a_{j_0}\le u$, while an empty segment has probability zero. At $u=1$ the probability is one. Thus $q(Z)$ is superuniform. [given, F1, step 1.1, algebra]

2.2 On the score level $t_j$, the strict-tail mass is $a_{j-1}$ and the tied mass is $d_j$, so $q^+(Z,U)=a_{j-1}+Ud_j$. By [A1], conditional on this score level its probability of being at most $u$ is zero for $u\le a_{j-1}$, $(u-a_{j-1})/d_j$ for $a_{j-1}<u<a_j$, and one for $u\ge a_j$. [given, A1, step 1.1, algebra]

3.1 Multiplying these conditional probabilities by $d_j$ gives the lengths of $[a_{j-1},a_j]\cap[0,u]$. These consecutive intervals partition $[0,1]$, so their lengths sum to $u$. Therefore $\Pr(q^+(Z,U)\le u)=u$ for every $u\in[0,1]$. [step 2.2, step 1.1, algebra] ∎
