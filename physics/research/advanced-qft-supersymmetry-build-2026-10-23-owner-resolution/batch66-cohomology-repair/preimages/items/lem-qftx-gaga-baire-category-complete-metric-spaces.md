---
id: lem-qftx-gaga-baire-category-complete-metric-spaces
kind: lemma
title: Baire category theorem for complete metric spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-axiom-of-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
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
      locator: "Chapter IX §1.B, printed pp. 406–407: the successive-approximation proof of the Fréchet open-mapping and Schwartz compact-perturbation theorems uses Baire's theorem."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 1–3 and 8–10: Fréchet-space finiteness proof and Schwartz theorem use the Baire-category framework."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume the Axiom of Choice. Let $(X,d)$ be a nonempty complete metric space. If $X=\bigcup_{n\ge1}F_n$ for closed subsets $F_n\subseteq X$, then at least one $F_n$ has nonempty interior in $X$.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §1.B](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a nonempty complete metric space $(X,d)$; and closed sets $(F_n)_{n\ge1}$ covering $X$.

[A1] The Axiom of Choice permits the countable recursive choices of nested balls used below ([[def-axiom-of-choice]]).

## Proof

1.1 Suppose every $F_n$ has empty interior. Choose a nonempty open ball $B_0\subseteq X$. Since $F_1$ is closed with empty interior, $B_0\setminus F_1$ is nonempty and open; choose a closed ball $\overline B(x_1,r_1)\subset B_0\setminus F_1$ with $0<r_1\le2^{-1}$. [given, A1, construct]

1.2 Inductively, if $\overline B(x_n,r_n)$ has been chosen, its interior $B(x_n,r_n)$ is a nonempty open set. The closed set $F_{n+1}$ has empty interior, so $B(x_n,r_n)\setminus F_{n+1}$ is nonempty and open; choose a closed ball $\overline B(x_{n+1},r_{n+1})$ contained there with $0<r_{n+1}\le2^{-n-1}$. Thus the closed balls are nested, and the $n$th ball avoids $F_n$. [step 1.1, A1, construct]

2.1 The nested centers form a Cauchy sequence because for $k\ge n$ one has $x_k\in\overline B(x_n,r_n)$ and $r_n\to0$. Completeness gives a limit $x\in X$; each closed ball contains every later center and hence contains $x$. Therefore $x\notin F_n$ for every $n$, contradicting $X=\bigcup_nF_n$. Thus some $F_n$ has nonempty interior. [given, step 1.2, A1] ∎
