---
id: "lem-bounded-below-operator-has-closed-range"
kind: "lemma"
title: "A bounded-below operator has closed range"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-banach-space"
  - "def-bounded-below-operator"
  - "def-bounded-linear-operator"
  - "def-cauchy-in-metric"
  - "def-complete-metric-space"
  - "def-countable-choice"
  - "def-linear-subspace"
  - "def-norm-and-normed-space"
  - "def-operator-norm"
  - "lem-metric-limits-unique"
  - "lem-vector-operations-are-continuous-in-a-normed-space"
  - "thm-metric-closure-characterisation"
  - "thm-metric-continuity-characterisations"
  - "thm-metric-sequential-closure"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, the closed-range paragraph in the proof of Theorem 4.12, printed p. 99"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 7, `$T$ has closed range` derived from $c\\|u\\|\\le\\|Tu\\|$, printed p. 72"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, Remark 8(b): $R(A)$ is closed since $\\alpha|v|\\le|Av|$, printed p. 140"
---

## Statement

Assume Countable Choice. Let $X$ be a Banach space, $Y$ a normed space over the same field, and let $T\in\mathcal B(X,Y)$ satisfy $\|Tx\|\ge c\|x\|$ for all $x\in X$ and some $c>0$ ([[def-bounded-below-operator]], [[def-bounded-linear-operator]]). Then $T$ is injective and its range $\operatorname{ran}T$ is a closed linear subspace of $Y$; the inverse $\operatorname{ran}T\to X$ is bounded with norm at most $1/c$. The proof uses Countable Choice only to pass from sequential closedness to closedness; the Cauchy-sequence step uses completeness of $X$.

## Facts & Assumptions

**Given:** A Banach space $X$, a normed space $Y$ over the same field, and a bounded linear operator $T:X\to Y$ with $\|Tx\|\ge c\|x\|$ for all $x\in X$, for a constant $c>0$; write $Z:=\operatorname{ran}T$.

[F1] Bounded below and bounded: $T$ is linear and bounded, and $\|Tx\|\ge c\|x\|$ for every $x\in X$; also $T0=0$ and $T(u+v)=Tu+Tv$, $T(\lambda u)=\lambda Tu$ ([[def-bounded-below-operator]], [[def-bounded-linear-operator]]).

[F2] $X$ is complete: every Cauchy sequence in $X$ converges in $X$ ([[def-banach-space]], [[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[F3] In a metric space every sequentially closed set is closed, and this direction spends Countable Choice once, precisely by manufacturing a sequence from an adherence point ([[thm-metric-sequential-closure]], [[def-countable-choice]]).

[F4] Limits in a metric space are unique ([[lem-metric-limits-unique]]).

[F5] A subset $W$ of a vector space is a linear subspace exactly when $0\in W$, $u+v\in W$ and $\lambda u\in W$ for all $u,v\in W$ and all scalars $\lambda$ ([[def-linear-subspace]], [[def-norm-and-normed-space]]).

[F6] Suppose $x_k\to x$ in $X$ and $C\ge0$ is a bound for $T$; then $\|Tx_k-Tx\|=\|T(x_k-x)\|\le C\|x_k-x\|\to0$, so $Tx_k\to Tx$: this is continuity of $T$ in the sequential and in the $\varepsilon$-$\delta$ forms ([[def-bounded-linear-operator]], [[thm-metric-continuity-characterisations]], [[def-norm-and-normed-space]], [[lem-vector-operations-are-continuous-in-a-normed-space]]).



## Proof

1.1 Injectivity: if $Tx=0$ then $0=\|Tx\|\ge c\|x\|$ with $c>0$, so $\|x\|=0$ and $x=0$. [F1]

1.2 The range $Z$ is a linear subspace of $Y$: $0=T0\in Z$; if $z=Tu$ and $w=Tv$ then $z+w=T(u+v)\in Z$; and if $z=Tu$ then $\lambda z=T(\lambda u)\in Z$. [F1, F5]

2.1 Let $(z_k)\subseteq Z$ converge in $Y$ to some $y\in Y$, say $z_k=Tx_k$ with $x_k$ the unique preimage supplied by step 1.1. Then $\|x_k-x_m\|\le c^{-1}\|Tx_k-Tx_m\|=c^{-1}\|z_k-z_m\|$, so $(x_k)$ is Cauchy in $X$ and hence converges to some $x\in X$ by completeness of $X$. With any bound $C$ of $T$, $\|z_k-Tx\|=\|T(x_k-x)\|\le C\|x_k-x\|\to0$, so $z_k\to Tx$; uniqueness of limits in $Y$ forces $y=Tx\in Z$. Thus $Z$ is sequentially closed in $Y$. [F1, F2, F4, F6, step 1.1]

2.2 Define $S:Z\to X$ by $S(y):=x$ for the unique $x$ with $Tx=y$; step 1.1 makes $S$ well defined with $T(S(y))=y$, and it is the inverse of $T$ viewed as a map onto $Z$. For $y,z\in Z$ and scalars $a,b$, applying $T$ to $aS(y)+bS(z)$ gives $ay+bz$, so uniqueness gives $S(ay+bz)=aS(y)+bS(z)$: the inverse is linear. For $y=Tx\in Z$ we have $\|S(y)\|=\|x\|\le c^{-1}\|Tx\|=c^{-1}\|y\|$, so $S$ is bounded with operator norm at most $1/c$. [F1, step 1.1, algebra]

3.1 Since $Z$ is a sequentially closed subset of the metric space $Y$, it is closed; this is the one step that uses Countable Choice, through the cited sequential-closure theorem. [F3, step 2.1]

4.1 Therefore $T$ is injective, $Z=\operatorname{ran}T$ is a closed linear subspace of $Y$, and the inverse map $S:Z\to X$ is bounded with norm at most $1/c$. [step 1.1, step 1.2, step 3.1, step 2.2] ∎ 
