---
id: def-unitary-dual-of-a-compact-group
kind: definition
title: The unitary dual of a compact group
deps:
- def-strongly-continuous-unitary-representation
- thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
- def-dimension
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §§5.4–5.5, printed pp. 230–242
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2, printed pp. 1–12
status: published
origin: pipeline
---
## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff topological group. Two strongly continuous unitary representations $\pi$ on $H$ and $\sigma$ on $H'$ of $K$ are **unitarily equivalent** when there is a unitary intertwiner between them, that is, a bijective linear isometry $U:H\to H'$ with $U\pi(k)=\sigma(k)U$ for every $k\in K$ ([[def-strongly-continuous-unitary-representation]]). The **unitary dual** (dual object) $\widehat K$ is the set of unitary equivalence classes of irreducible strongly continuous unitary representations of $K$.

By [[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]], under the Axiom of Choice ([[def-axiom-of-choice]]) every irreducible strongly continuous unitary representation of $K$ has finite-dimensional carrier: the carrier admits an ordered basis of finite length $d$, its dimension $d_\pi:=\dim_{\mathbb C}H_\pi\ge1$ ([[def-dimension]]), and every class contains a representative whose carrier is $\mathbb C^d$ ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] realizes the carrier as $\mathbb C^d$ through an orthonormal basis). Consequently $\widehat K$ is a set: it is the union over $d\ge1$ of the set of unitary equivalence classes of irreducible representations on the fixed carrier $\mathbb C^d$, and equivalence on a fixed carrier is a relation on the set of group homomorphisms $K\to U(d)$.

**Standing conventions.** When a statement uses a representative $\pi$ of a class in $\widehat K$, or an orthonormal basis of its carrier, such choices are licensed by the Axiom of Choice ([[def-axiom-of-choice]]) and every assertion made this way must be invariant under unitary equivalence; the normalized coefficient family of [[def-normalized-irreducible-matrix-coefficient-basis]] is the first instance. Irreducibility is understood in the sense of [[def-strongly-continuous-unitary-representation]], so every class in $\widehat K$ has nonzero carrier and $d_\pi\ge1$. No topology is placed on $\widehat K$ and no countability of $\widehat K$ is asserted.
