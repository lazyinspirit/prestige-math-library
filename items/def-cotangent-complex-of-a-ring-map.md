---
id: def-cotangent-complex-of-a-ring-map
kind: definition
title: "The cotangent complex of a ring map"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps:
  - def-standard-resolution-of-a-ring-map
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-kahler-differentials-algebra
  - def-derivation-algebra
  - def-shift-of-a-chain-complex
  - def-chain-complex-in-an-abelian-category
  - def-quasi-isomorphism
  - def-commutative-ring
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
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Section 92.3"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.3.2 (tag 08PN), the cotangent complex of a ring map; Lemmas 92.4.5 and 92.4.7 (tags 08QF, 08QH)"
---

## Definition

Let $A\to B$ be a homomorphism of commutative unital rings
([[def-commutative-ring]]) and let $\epsilon\colon P_\bullet\to B$ be its
standard resolution ([[def-standard-resolution-of-a-ring-map]],
[[def-simplicial-object-and-simplicial-commutative-ring]]).

For each $n\ge0$ the module of Kähler differentials
$\Omega_{P_n/A}$ ([[def-kahler-differentials-algebra]],
[[def-derivation-algebra]]) is a $P_n$-module, and the augmentation
$\epsilon_n\colon P_n\to B$ makes $B$ a $P_n$-algebra, so
$M_n:=\Omega_{P_n/A}\otimes_{P_n}B$ is a $B$-module. The face maps
$d_i\colon P_n\to P_{n-1}$ induce $B$-linear maps
$M_n\to M_{n-1}$ by
$\omega\otimes b\mapsto d_i(\omega\otimes b)$, using the $P_n$-algebra
structure on $M_{n-1}$ induced by $\epsilon$; the alternating sum
$$\partial_n=\sum_{i=0}^n(-1)^id_i\colon M_n\to M_{n-1}\qquad(n\ge1)$$
is completed by $\partial_0=0$ and satisfies
$\partial_{n-1}\partial_n=0$ by the simplicial identities together
with the Leibniz rule, so $(M_\bullet,\partial)$ is a chain complex of
$B$-modules concentrated in nonnegative degrees
([[def-chain-complex-in-an-abelian-category]]).

The **cotangent complex** $L_{B/A}$ is this complex, indexed cohomologically
by negating degrees: $L^{-n}_{B/A}:=M_n$ with differential
$\partial_n\colon L^{-n}_{B/A}\to L^{-(n-1)}_{B/A}$, the sign and reindexing
conventions being those of the shift operation on complexes
([[def-shift-of-a-chain-complex]]). Thus $L_{B/A}$ is concentrated in degrees
$\le0$, so that $H^0(L_{B/A})$ is the degree-zero cohomology of a map
$M_1\to M_0$.

The complex is well defined without any choice: the standard resolution
$P_\bullet$ is constructed explicitly by iterating the free polynomial
algebra functor, and the tensor product, the differential and the reindexing
are degreewise formulas. A **simplicial resolution** of $B$ over $A$ is any
augmented simplicial $A$-algebra $Q_\bullet\to B$ with every $Q_n$ a
polynomial $A$-algebra and the augmentation a weak equivalence
([[def-simplicial-object-and-simplicial-commutative-ring]]); its associated
complex $\Omega_{Q_\bullet/A}\otimes_{Q_\bullet}B$ is formed by the same
degreewise formula. The independence of $L_{B/A}$ from the chosen resolution,
up to canonical isomorphism in the derived category
$D(B)$ ([[def-quasi-isomorphism]]), is the comparison theorem proved
separately; it is not part of the definition.
