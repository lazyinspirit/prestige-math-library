---
id: lem-qftx-gaga-frechet-open-mapping
kind: lemma
title: Open mapping theorem for Fréchet spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-qftx-gaga-frechet-space
  - lem-qftx-gaga-baire-category-complete-metric-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  lem-qftx-gaga-baire-category-complete-metric-spaces: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §1.B, Theorem 1.8 and the proof of Theorem 1.9, printed pp. 406–407; the Fréchet open-mapping input is needed in the compact perturbation argument."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 8–10: complete Fréchet section spaces and the compact-complex finiteness proof."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume the full Axiom of Choice. Let $E$ and $F$ be Fréchet spaces over $\mathbb C$ and let $T:E\to F$ be a continuous, surjective, complex-linear map. Then $T$ is open: it sends every open subset of $E$ to an open subset of $F$.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §1.B](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

## Facts & Assumptions

**Given:** Full AC; Fréchet spaces $E,F$; and a continuous surjective complex-linear map $T:E\to F$.

[A1] Full AC is the set-choice postulate ([[def-axiom-of-choice]]).

[F1] A Fréchet space is a Hausdorff locally convex topological vector space with a countable seminorm basis and a compatible complete metric ([[def-qftx-gaga-frechet-space]]).

[F2] In a nonempty complete metric space, a countable closed cover has a member with nonempty interior ([[lem-qftx-gaga-baire-category-complete-metric-spaces]]).

## Proof

1.1 Fix an open neighborhood $U$ of $0$ in $E$. Since $E$ is metrizable and locally convex, choose an absolutely convex neighborhood $W_0$ whose closure is contained in $U$. Choose a decreasing sequence of absolutely convex neighborhoods $W_n$ such that $W_n\subseteq2^{-n}W_0$ and, for each of the first $n$ members $p_1,\ldots,p_n$ of a defining countable seminorm family, $p_j(x)\le2^{-n}$ for all $x\in W_n$. For each fixed $j$, the seminorms of the tails are bounded by a convergent geometric series, so any series $\sum_{n\ge1}x_n$ with $x_n\in W_n$ is Cauchy in the Fréchet topology and converges by completeness. Its partial sums lie in $W_0$ because $W_0$ is convex and balanced and $\sum_{n\ge1}2^{-n}=1$; hence its limit lies in $\overline{W_0}\subset U$. [A1, F1, given, construct]

2.1 For each $n$, the neighborhoods $kW_n$ ($k\ge1$) cover $E$, since every neighborhood of $0$ in a topological vector space is absorbing. Surjectivity gives $F=\bigcup_{k\ge1}kT(W_n)\subseteq\bigcup_{k\ge1}\overline{kT(W_n)}$. By [F2], some $\overline{kT(W_n)}$ has nonempty interior; scaling shows $\overline{T(W_n)}$ has nonempty interior. If $O_n\subseteq\overline{T(W_n)}$ is a nonempty open set, then $O_n-O_n$ is an open neighborhood of $0$ contained in $\overline{T(W_n)-T(W_n)}\subseteq\overline{T(2W_n)}$; scaling by $1/2$ gives a neighborhood $V_n\subseteq\overline{T(W_n)}$. Shrink $V_n$ so its diameter tends to $0$ in a compatible metric on $F$. [A1, F1, F2, step 1.1, algebra]

3.1 Take $y_1\in V_1$. If $y_n\in V_n$, then $y_n\in\overline{T(W_n)}$, so choose $x_n\in W_n$ such that $y_{n+1}:=y_n-Tx_n\in V_{n+1}$. The series $x=\sum_{n\ge1}x_n$ converges in $E$ and belongs to $U$ by step 1.1, while $y_n\to0$ by the diameter choice. Continuity of $T$ gives $Tx=\sum_{n\ge1}Tx_n=y_1$. Hence $V_1\subseteq T(U)$, so $T(U)$ is a neighborhood of $0$. [A1, F1, step 1.1, step 2.1, construct]

4.1 Let $O\subseteq E$ be open and choose any $y\in T(O)$ with $Tx=y$ for some $x\in O$. There is an open neighborhood $N$ of $0$ with $x+N\subseteq O$. Step 3.1 gives a neighborhood $V$ of $0$ contained in $T(N)$, so $y+V\subseteq T(O)$. Every point of $T(O)$ is therefore interior, hence $T(O)$ is open and $T$ is open. [step 3.1, given, algebra] ∎
