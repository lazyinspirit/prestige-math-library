---
id: def-p-typical-witt-vectors-of-a-perfect-ring
kind: definition
title: P-typical Witt vectors of a perfect ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by:
- lem-integral-p-typical-witt-coordinate-operations
- lem-perfect-base-witt-frobenius-and-p-adic-completeness
- lem-perfect-base-witt-teichmuller-expansions-and-units
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, Theorem 2.6, Corollary 2.10,
      Theorem 2.13, section 5
    url: https://arxiv.org/abs/1409.7445
  - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge
      Theory, section 4.2, printed pages 48–51
    url: https://math.stanford.edu/~conrad/papers/notes.pdf
verification:
  precheck: n/a
---

## Definition

Fix a prime $p$ and a perfect commutative ring $R$ of characteristic $p$, meaning that $a\mapsto a^p$ is bijective. For $n\ge0$ put
$$w_n(X_0,\ldots,X_n)=\sum_{i=0}^n p^iX_i^{p^{n-i}}.$$
The ring $W_p(R)$ of $p$-typical Witt vectors has underlying set $R^{\mathbb N}$. Its addition, multiplication and additive inverse are obtained by evaluating the unique integral coordinate polynomials $S_n,P_n,N_n$ characterized by the **formal identities in integer polynomial rings**
$$w_n(S(X,Y))=w_n(X)+w_n(Y),\quad w_n(P(X,Y))=w_n(X)w_n(Y),\quad w_n(N(X))=-w_n(X).$$
The zero and unit are $(0,0,\ldots)$ and $(1,0,\ldots)$. The integral operations lemma establishes integrality, existence, uniqueness and the ring laws. In particular the ghost maps after evaluation in $R$ are ring homomorphisms; they are not required to be injective.

The Witt Frobenius $\sigma$ is defined universally by the integral coordinate identities $w_n(\sigma X)=w_{n+1}(X)$. On this characteristic-$p$ base it is $\sigma((a_i))=(a_i^p)$ and is an automorphism. The ring is separated and complete for powers of $p$, multiplication by $p$ is injective, and first-coordinate reduction gives $W_p(R)/p=R$. The perfect-base completeness lemma proves these assertions. The multiplicative Teichmüller representative is $[a]=(a,0,\ldots)$; the Teichmüller expansion lemma proves unique $p$-adic expansions and the unit criterion. These constructions use no choice axiom and allow the zero ring.

## Remarks

Over a fixed characteristic-$p$ base, ghosts alone do not characterize the ring operations: $w_n(a)=a_0^{p^n}$ there. The coordinatewise product-ring operations on $R^{\mathbb N}$ also make all these maps ring homomorphisms. For $R=\mathbb F_p$ that product ring has characteristic $p$, whereas the universal Witt ring has characteristic zero. The formal identities above are therefore essential; they preserve the universal Witt construction rather than selecting an arbitrary ring structure compatible with degenerate ghosts.

## Definition references

[[lem-integral-p-typical-witt-coordinate-operations]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[Joseph Rabinoff, *The theory of Witt vectors*, sections 2–5](https://arxiv.org/abs/1409.7445)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, §4.2, pp.48–51](https://math.stanford.edu/~conrad/papers/notes.pdf)
