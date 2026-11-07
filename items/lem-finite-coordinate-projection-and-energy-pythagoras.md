---
id: lem-finite-coordinate-projection-and-energy-pythagoras
kind: lemma
title: "Finite algebra atom counts, projection identities and energy Pythagoras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-finite-coordinate-conditional-expectation-energy-and-discrepancy
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
  - thm-linearity-of-expectation
  - thm-expectation-monotonicity-and-bounds
  - lem-cauchy-schwarz-for-finite-random-variables
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§1 Definition 1.10 and complexity bound (2), printed pp. 3–4; §2 energy identity (9) and finite conditional-average calculations, printed pp. 8–9; the atom-count proof and zero/constant cases are local."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 456–460 (PDF pp. 476–480), finite energy-increment framework; the local proof does not rely on omitted higher-order arguments."
---

## Statement

A finite algebra of complexity at most an integer $n\ge0$ has at most $2^n$ atoms and at most $2^{2^n}$ members. Let $V_J$ be the nonempty finite product space and let $\mathcal B\subseteq\mathcal C$ be finite algebras on it. For every real function $f$, conditional averaging preserves its mean, and $f-\mathbb E(f\mid\mathcal B)$ is orthogonal in the finite average to every $\mathcal B$-measurable function. If $E\subseteq V_J$ is an event, then
$$\mathcal E_{\mathcal C}(E)-\mathcal E_{\mathcal B}(E) =\mathbb E\!\left(\mathbb E(1_E\mid\mathcal C)-\mathbb E(1_E\mid\mathcal B)\right)^2,$$
and $0\le\mathcal E_{\mathcal B}(E)\le1$. Finite normalized sums also satisfy Cauchy–Schwarz and the finite Fubini/reindexing rules.

## Facts & Assumptions

**Given:** A nonempty finite product space $V_J$, nested finite algebras $\mathcal B\subseteq\mathcal C$, a real function $f$ on $V_J$, and an event $E\subseteq V_J$.

[F1] Conditional averaging is the uniform average on the unique nonempty algebra atom containing a point; event energy is the average of the squared conditional average ([[def-finite-coordinate-conditional-expectation-energy-and-discrepancy]]).

[F2] Complexity is the least number of generating sets, atoms partition the space, and every algebra event is a union of atoms ([[def-finite-partite-hypergraph-system-and-coordinate-algebras]]).

[F3] Expectation on a finite probability space is linear for finite linear combinations ([[thm-linearity-of-expectation]]).

[F4] Finite sums can be regrouped by a finite partition and reindexed by a bijection ([[lem-finite-sum-reindexing-and-fubini]]).

[F5] Expectation preserves pointwise order and lies between attained minimum and maximum values ([[thm-expectation-monotonicity-and-bounds]]).

[F6] For finite real random variables $u,v$, $\mathbb E[uv]^2\le\mathbb E[u^2]\mathbb E[v^2]$ ([[lem-cauchy-schwarz-for-finite-random-variables]]).

## Proof

1.1 Choose $n$ generators for $\mathcal B$. Map each point of $V_J$ to its $n$-bit membership signature. Each nonempty signature fiber is an algebra member; distinct fibers differ on a generator and no algebra member can separate points with the same signature, so these fibers are exactly the atoms. There are at most $2^n$ signatures, and every algebra member is a union of atoms, giving at most $2^{2^n}$ members. [given, F2, algebra]

1.2 A finite algebra partitions $V_J$ into its nonempty atoms. On each atom $C$, $\mathbb E(f\mid\mathcal B)$ is the average of $f$ on $C$ by [F1]. Regrouping the finite sum over $V_J$ by these atoms gives $\mathbb E(\mathbb E(f\mid\mathcal B))=\mathbb E(f)$. [given, F1, F3, F4]

1.3 If $h$ is $\mathcal B$-measurable, it is constant, say $h_C$, on each atom $C$. On each such atom, $\sum_{x\in C}(f(x)-\mathbb E(f\mid\mathcal B)(x))h_C=h_C(\sum_{x\in C}f(x)-|C|\sum_{y\in C}f(y)/|C|)=0$. Summing over atoms proves $\mathbb E[(f-\mathbb E(f\mid\mathcal B))h]=0$. [given, F1, F4, algebra]

2.1 Put $u=\mathbb E(f\mid\mathcal C)$ and $v=\mathbb E(f\mid\mathcal B)$. Since $u-v$ is $\mathcal C$-measurable, step 1.3 applied to $\mathcal C$ gives $\mathbb E[(f-u)(u-v)]=0$. Since $v$ is $\mathcal B$-measurable and every $\mathcal B$-measurable function is $\mathcal C$-measurable, step 1.3 for $\mathcal B$ and $\mathcal C$ gives $\mathbb E[(u-v)v]=\mathbb E[(f-v)v]-\mathbb E[(f-u)v]=0-0=0$. Expanding $u=v+(u-v)$ therefore yields $\mathbb E[u^2]=\mathbb E[v^2]+\mathbb E[(u-v)^2]$. [given, step 1.3, F3, algebra]

3.1 Apply step 2.1 to $f=1_E$. Its conditional averages on atoms lie in $[0,1]$, since each is an average of zeros and ones. Thus their squares lie in $[0,1]$, and averaging proves $0\le\mathcal E_{\mathcal B}(E)\le1$; the equality in the Statement is step 2.1 with the energy definition. [given, step 2.1, F1, F5]

4.1 The finite Cauchy–Schwarz and Fubini/reindexing assertions in the Statement are exactly [F6] and [F4], which apply because the underlying product and all indexing families are finite. [given, F4, F6] ∎
