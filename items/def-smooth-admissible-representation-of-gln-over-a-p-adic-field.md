---
id: def-smooth-admissible-representation-of-gln-over-a-p-adic-field
kind: definition
title: "Smooth and admissible representations of GLₙ over a p-adic field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-vector-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Torsten Wedhorn, The Local Langlands Correspondence for GL(n) over p-adic Fields, §2.1"
      url: "https://arxiv.org/pdf/math/0011210"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §3.2"
      url: "https://masaooi.github.io/LLC.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a finite extension of $\mathbb Q_p$, let $n\ge1$, let $\mathcal O_K$ be its valuation ring, let $\pi_K$ be a uniformizer, and put $G=\mathrm{GL}_n(K)$ and $K_0=\mathrm{GL}_n(\mathcal O_K)$. A complex representation of $G$ is a group homomorphism $\pi:G\to\mathrm{GL}_{\mathbb C}(V)$ on a complex vector space $V$. It is **smooth** if every $v\in V$ has an open stabilizer $\{g\in G:\pi(g)v=v\}$. It is **admissible** if it is smooth and, for every compact open subgroup $U\subseteq G$, the fixed subspace $V^U=\{v\in V:\pi(u)v=v\text{ for all }u\in U\}$ is finite-dimensional. It is **irreducible** if $V$ has no nonzero proper $G$-invariant subspace. It is **unramified** if $V^{K_0}\ne0$.

## Definition references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[Torsten Wedhorn, *The Local Langlands Correspondence for GL(n) over p-adic Fields*, §§2.1 and 4.1](https://arxiv.org/pdf/math/0011210)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §3.2](https://masaooi.github.io/LLC.pdf)
