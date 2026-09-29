---
id: def-strongly-continuous-unitary-representation
kind: definition
title: Strongly continuous unitary representations, invariant linear subspaces and intertwiners
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-group, def-hilbert-space, def-bounded-linear-operator, def-linear-subspace]
landmark: false
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition A.1.1 and Propositions A.1.2–A.1.4, Appendix A, printed pp. 305–307"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, Definition 3.4.1, §3.4, printed p. 106"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
---

## Definition

Let $G$ be a topological group and $H$ a complex Hilbert space. A
**unitary representation** of $G$ on $H$ is a group homomorphism
$\pi:G\to U(H)$, where $U(H)$ is the group of bijective complex-linear
isometries of $H$, such that the orbit map $g\mapsto\pi(g)v$ is norm-continuous
for every $v\in H$. This condition is **strong continuity**. A closed linear
subspace $M\subseteq H$ is **invariant** if $\pi(g)M=M$ for every $g\in G$.
The representation is **irreducible** if $H\ne\{0\}$ and its only closed
invariant linear subspaces are $\{0\}$ and $H$.

For unitary representations $\pi$ on $H$ and $\rho$ on $K$, a **bounded
intertwiner** is a bounded linear operator $T:H\to K$ satisfying
$$T\pi(g)=\rho(g)T\qquad(g\in G).$$
The representations are **unitarily equivalent** if there is a unitary
intertwiner between them. The **commutant** of $\pi$ is
$$\pi(G)'=\{T\in\mathcal B(H):T\pi(g)=\pi(g)T\text{ for every }g\in G\}.$$
