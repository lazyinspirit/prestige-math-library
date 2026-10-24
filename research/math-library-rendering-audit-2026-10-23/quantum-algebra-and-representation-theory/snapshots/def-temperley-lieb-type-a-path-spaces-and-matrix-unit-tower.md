---
id: def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower
kind: definition
title: "Type-A path spaces and their matrix-unit tower"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§4.2, PDF pp. 31–32: the A_n Bratteli diagram and Jones tower representation setting."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\ell\ge3$. The path graph $A_{\ell-1}$ has vertex set $\{0,1,\ldots,\ell-2\}$ and an edge between $a$ and $b$ exactly when $|a-b|=1$. For $n\ge0$ and a vertex $a$, let $\mathsf P_{n,a}$ be the set of sequences
$$
p=(a_0,a_1,\ldots,a_n)
$$
with $a_0=0$, $a_n=a$, each $a_j\in\{0,1,\ldots,\ell-2\}$, and $|a_j-a_{j-1}|=1$ for $1\le j\le n$. The set is finite; it may be empty. Let $V_{n,a}:=\mathbb C^{(\mathsf P_{n,a})}$ be the free complex vector space with basis $\{|p\rangle:p\in\mathsf P_{n,a}\}$, and put
$$
K_n:=\bigoplus_{a=0}^{\ell-2}\operatorname{End}_{\mathbb C}(V_{n,a}),
$$
omitting zero summands. For $p,q\in\mathsf P_{n,a}$, the matrix unit $E^{(n,a)}_{p,q}$ sends $|q\rangle$ to $|p\rangle$, sends every other path basis vector to zero, and is zero on every endpoint block other than $a$.

Equip each $V_{n,a}$ with the Hermitian inner product for which its path basis is orthonormal, and equip each endomorphism algebra with the corresponding adjoint. Thus $(E^{(n,a)}_{p,q})^*=E^{(n,a)}_{q,p}$, and $K_n$ has the componentwise involution.

For $b\sim a$, write $pb=(a_0,\ldots,a_n,b)$ for the path obtained by appending $b$. Define the unital algebra map candidate $\iota_n:K_n\to K_{n+1}$ on matrix units by
$$
\iota_n(E^{(n,a)}_{p,q})=\sum_{b\sim a}E^{(n+1,b)}_{pb,qb},
$$
and extend it linearly. The next local theorem proves that these assignments are injective unital $*$-homomorphisms and gives the corresponding branching rule. This is an abstract path-space tower definition; it does not assert that a particular quotient of a Temperley–Lieb algebra is isomorphic to $K_n$.

## Remarks

When $n=0$, the sole path is $(0)$ and $K_0\cong\mathbb C$. The vertex bounds are part of the definition, so a path attempting to step below $0$ or above $\ell-2$ is absent rather than assigned a zero multiplicity by convention.
