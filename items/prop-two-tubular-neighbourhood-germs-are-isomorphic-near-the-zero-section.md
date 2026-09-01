---
id: prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section
kind: proposition
title: "Two tubular neighbourhood germs are isomorphic near the zero section"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tubular-neighbourhood-of-an-embedded-submanifold,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $\Phi_1:\Omega_1\to M$ and $\Phi_2:\Omega_2\to M$ be two tubular
neighbourhoods of the same closed embedded submanifold $S\subseteq M$ built on
the same normal bundle $\nu(S)$. Then, after shrinking $\Omega_1$ and
$\Omega_2$ around the zero section, there is a diffeomorphism
$$
\Psi:\Omega_1'\to\Omega_2'
$$
such that $\Phi_2\circ\Psi=\Phi_1$ and $\Psi$ restricts to the identity on the
zero section.

## Facts & Assumptions

**Given:** Two tubular neighbourhood charts $\Phi_1:\Omega_1\to M$ and
$\Phi_2:\Omega_2\to M$ for the same closed embedded submanifold $S\subseteq M$.

[F1] A tubular neighbourhood chart is a diffeomorphism from an open
normal-bundle neighbourhood of the zero section onto an ambient open
neighbourhood of $S$
([[def-tubular-neighbourhood-of-an-embedded-submanifold]]).

[L1] Tubular neighbourhoods exist in smooth ambient manifolds
([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], both $\Phi_1$ and $\Phi_2$ are diffeomorphisms onto open neighbourhoods of $S$. Shrink the domains so that their images lie in the common overlap. Then $$\Psi:=\Phi_2^{-1}\circ\Phi_1$$ is a diffeomorphism between the shrunken domains. [F1, given, construct]

2.1 On the zero section both tubular charts agree with the inclusion of $S$ into $M$, so $\Psi(p,0)=(p,0)$ for every $p\in S$. Thus $\Psi$ restricts to the identity on the zero section. [F1, step 1.1]

3.1 The relation $\Phi_2\circ\Psi=\Phi_1$ is built into the definition of $\Psi$, and [L1] guarantees that these tubular charts are honest smooth objects rather than formal placeholders. Hence the two tubular neighbourhoods define the same germ near the zero section. [L1, step 1.1, step 2.1] ∎
