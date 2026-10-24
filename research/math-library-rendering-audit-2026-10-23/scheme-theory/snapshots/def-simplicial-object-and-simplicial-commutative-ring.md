---
id: def-simplicial-object-and-simplicial-commutative-ring
kind: definition
title: "Simplicial objects, simplicial commutative rings and homotopy groups"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-category
  - def-functor-and-contravariant-functor
  - def-natural-transformation
  - def-commutative-ring
  - def-ring-homomorphism
  - def-chain-complex-in-an-abelian-category
  - def-homology-object-of-a-chain-complex
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Section 14.2 (simplex category), Definition 14.3.1 (tag 016A), Sections 14.11 and 14.15 (homotopy groups), Sections 14.23-14.26 including Theorem 14.24.3 (tag 019G), and Example 14.34.7 (tag 09CB, the standard resolution)"
    - title: "Bertrand Toen, Derived algebraic geometry, EMS Surveys in Mathematical Sciences 1 (2014)"
      url: "https://perso.math.univ-toulouse.fr/btoen/files/2012/04/dag-ems.pdf"
      locator: "Sections 2.1-2.2 (simplicial rings, derived rings)"
---

## Definition

Let $\Delta$ be the **simplex category**: its objects are the finite nonempty
ordered sets $[n]=\{0<1<\dots<n\}$ for $n\ge0$, and its morphisms are the
order-preserving maps. A **simplicial object** in a category $\mathcal C$ is a
functor $\Delta^{\mathrm{op}}\to\mathcal C$
([[def-category]], [[def-functor-and-contravariant-functor]]). A **simplicial
set** is a simplicial object in sets; a **simplicial commutative ring** is a
simplicial object in commutative rings ([[def-commutative-ring]]), so that
each $A_n$ is a commutative ring and the structure maps are ring
homomorphisms ([[def-ring-homomorphism]]); a **simplicial module** over a
simplicial ring $A_\bullet$ is a simplicial object $M_\bullet$ in abelian
groups together with a compatible $A_\bullet$-action, and the resulting
category of simplicial $A_\bullet$-modules is abelian.

Writing $d_i\colon M_n\to M_{n-1}$ for the image of the injection
$[n-1]\to[n]$ omitting $i$ (a **face map**) and $s_i\colon M_n\to M_{n+1}$
for the image of the surjection $[n+1]\to[n]$ repeating $i$ (a **degeneracy
map**), these maps satisfy the usual simplicial identities
$$d_i d_j=d_{j-1}d_i\ (i<j),\qquad s_i s_j=s_{j+1}s_i\ (i\le j),\qquad d_i s_j=\begin{cases} s_{j-1}d_i, & i<j,\\ \mathrm{id}, & i=j\ \text{or}\ i=j+1,\\ s_j d_{i-1}, & i>j+1.\end{cases}$$
Conversely, such a sequence of face and degeneracy maps determines the
functor.

The **Moore complex** of a simplicial abelian group or module $M_\bullet$ is
the chain complex concentrated in nonnegative degrees with $M_n$ in degree
$n$ and differential
$$\partial_n=\sum_{i=0}^{n}(-1)^i d_i\colon M_n\to M_{n-1}\qquad(n\ge1),$$
with $\partial_0=0$; the $d_i$ are the face maps
([[def-chain-complex-in-an-abelian-category]]);
the simplicial identities give $\partial_{n-1}\partial_n=0$. Its homology is
written
$$\pi_n(M_\bullet)=H_n(M_\bullet)\qquad(n\ge0)$$
([[def-homology-object-of-a-chain-complex]]). By the Dold-Kan normalization
theorem this agrees with the classical homotopy-group definition
$H_n(NM_\bullet)$ via the normalized subcomplex, so the convention is
canonical; no model-category machinery is introduced here.

For a simplicial commutative ring $A_\bullet$, each $\pi_n(A_\bullet)$ is defined as above, and $\pi_0(A_\bullet)=A_0/(d_0-d_1)(A_1)$ is a commutative ring. The image is an ideal: for $a\in A_0$, multiplying a representative $b\in A_1$ by $s_0a$ gives $a(d_0b-d_1b)$. Every $\pi_n(A_\bullet)$ is a $\pi_0(A_\bullet)$-module. Indeed multiplication by the totally degenerate simplex of a vertex $a\in A_0$ is a chain map on the Moore complex: its faces are the corresponding totally degenerate simplex of $a$ in the preceding degree. If two vertices are the endpoints of $b\in A_1$, multiplication by the simplicial path defined by $b$ gives a homotopy between these chain maps (the alternating prism sum inserts the degeneracies of $b$). Consequently $(d_0-d_1)(b)$ acts as zero on homology, so the action factors through the displayed quotient. Additivity, associativity and the unit descend from levelwise ring multiplication.

A **morphism of simplicial commutative rings** is a natural transformation
$A_\bullet\to B_\bullet$ ([[def-natural-transformation]]). Such a morphism is
a **weak equivalence** when it induces isomorphisms
$\pi_n(A_\bullet)\to\pi_n(B_\bullet)$ for all $n\ge0$. The **category of
derived rings** is the localization of the category of simplicial commutative
rings at the weak equivalences; constructions on derived rings are used below
only through statements that are independent of the chosen replacement up to
canonical isomorphism.
