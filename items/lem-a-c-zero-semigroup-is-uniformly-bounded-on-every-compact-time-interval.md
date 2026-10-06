---
id: lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
kind: lemma
title: "A semigroup with continuity at zero is uniformly bounded on every compact time interval"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-strongly-continuous-semigroup
  - thm-uniform-boundedness-principle
  - def-bounded-linear-operator
  - def-operator-norm
  - lem-composition-operator-norm-inequality
  - def-dependent-choice
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
      locator: "Chapter I Section 5, Lemma 5.2 and Proposition 5.3, printed pp. 37-38"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Lemma 11.6, printed pp. 253-254"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Lemma 1.4 and Lemma 1.7, printed pp. 3-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $X$ be a Banach space and let $(T(t))_{t\ge0}\subseteq\mathcal B(X)$ satisfy $T(0)=I$, $T(t+s)=T(t)T(s)$ for $s,t\ge0$ and $\lim_{t\downarrow0}T(t)x=x$ for every $x\in X$ (in particular every strongly continuous semigroup satisfies these hypotheses, [[def-strongly-continuous-semigroup]]). Then for every $t_0\ge0$, $\sup_{0\le t\le t_0}\|T(t)\|<\infty$.

## Facts & Assumptions

**Given:** A Banach space $X$ and a family $(T(t))_{t\ge0}\subseteq\mathcal B(X)$ with $T(0)=I$, $T(t+s)=T(t)T(s)$ for all $s,t\ge0$, and $\lim_{t\downarrow0}T(t)x=x$ for every $x\in X$. These are the hypotheses of [[def-strongly-continuous-semigroup]] with continuity at every time weakened to continuity at $0$; the item assumes Dependent Choice ([[def-dependent-choice]]), carried by the cited uniform boundedness principle, and step 1.1 selects a sequence, which uses Countable Choice, a consequence of DC.

[F1] The operator norm satisfies $\|ST\|\le\|S\|\,\|T\|$ for all $S,T\in\mathcal B(X)$ ([[lem-composition-operator-norm-inequality]]), and $\|\cdot\|$ is the operator norm on $\mathcal B(X)$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

[F2] Under DC, a pointwise bounded family of bounded linear operators between a Banach space and a normed space is norm bounded ([[thm-uniform-boundedness-principle]]).

[F3] For every $x\in X$ one has $T(t)x\to x$ as $t\downarrow0$; this is hypothesis (iii) of [[def-strongly-continuous-semigroup]] at the point $0$, where $T(0)x=x$.



## Proof

**Proof technique:** direct, combining the uniform boundedness principle with the semigroup law: first a finite bound on a small interval $[0,\delta]$, then iteration over $\lfloor t_0/\delta\rfloor$ steps.

1.1 There are $\delta>0$ and $M_0<\infty$ with $\sup_{0\le t\le\delta}\|T(t)\|\le M_0$. Otherwise $\sup_{0<t\le1/n}\|T(t)\|=\infty$ for every $n$, so for each $n$ one may select $t_n\in(0,1/n]$ with $\|T(t_n)\|\ge n$; this selection is the only use of Countable Choice, available because DC implies $\mathrm{AC}_\omega$. [F2, F3, given]

2.1 For every $x\in X$ the sequence $T(t_n)x$ converges to $x$, because $t_n\le1/n\to0$ and $\lim_{t\downarrow0}T(t)x=x$; hence the family $\{T(t_n):n\ge1\}$ is pointwise bounded on the Banach space $X$. [F3, step 1.1]

3.1 By the uniform boundedness principle [F2] the family $\{T(t_n)\}$ is norm bounded, that is $\sup_n\|T(t_n)\|<\infty$, contradicting $\|T(t_n)\|\ge n\to\infty$; hence the assumed unboundedness of every right neighbourhood of $0$ is impossible, proving [step 1.1]. [F2, step 1.1, step 2.1]

4.1 Put $M:=\max\{1,M_0\}\ge1$. For $t_0\ge0$ and $t\in[0,t_0]$ write $t=n\delta+s$ with $n:=\lfloor t/\delta\rfloor\in\mathbb N_0$ and $s\in[0,\delta)$. The functional equation gives $T(t)=T(\delta)^nT(s)$, by induction on $n$ from $T(u+\delta)=T(u)T(\delta)$. [F1, step 3.1, algebra]

5.1 Therefore $\|T(t)\|\le\|T(\delta)\|^n\|T(s)\|\le M^{n+1}$ by [F1] and [step 1.1], where $n=\lfloor t/\delta\rfloor\le\lfloor t_0/\delta\rfloor$; hence $\sup_{0\le t\le t_0}\|T(t)\|\le M^{\lfloor t_0/\delta\rfloor+1}<\infty$. [F1, step 3.1, step 4.1, algebra]

6.1 Since $t_0\ge0$ was arbitrary, $\sup_{0\le t\le t_0}\|T(t)\|<\infty$ for every $t_0$, as required. [step 5.1] ∎ 
