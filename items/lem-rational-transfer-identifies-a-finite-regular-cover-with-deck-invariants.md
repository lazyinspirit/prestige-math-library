---
id: lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants
kind: lemma
title: Rational transfer identifies a finite regular cover with deck invariants
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-deck-transformation-and-deck-group, def-singular-cohomology-with-coefficients, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; AC selects the simplex lifts used in the transfer."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, section 3.G"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Transfer homomorphisms, printed pp.321-326"
---

## Statement

Assume AC. Let $p:Y\to X$ be a finite $d$-sheeted regular covering of CW
complexes with deck group $G=\operatorname{Deck}(p)$. Then the pullback
$$p^*:H^*(X;\mathbb Q)\longrightarrow H^*(Y;\mathbb Q)$$
is injective, and its image is exactly the $G$-invariant subalgebra
$H^*(Y;\mathbb Q)^G$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, and is used exactly to choose one lift of every singular simplex in the construction of the transfer ([[def-axiom-of-choice]]).

[F1] A covering map has evenly covered neighbourhoods, so every singular simplex of $X$ has exactly $d$ lifts to $Y$, and paths and homotopies lift uniquely once an initial lift is fixed ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F2] The deck group $G$ acts on $Y$ by homeomorphisms over $X$, and the action is free with orbit space $X$ ([[def-deck-transformation-and-deck-group]]).

[F3] Singular cohomology with rational coefficients is the cohomology of the singular cochain complex, contravariantly in the space ([[def-singular-cohomology-with-coefficients]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a finite $d$-sheeted regular covering $p:Y\to X$ of CW complexes with deck group $G$, and a singular simplex $\sigma:\Delta^k\to X$.

1.1 Choose one lift $\widetilde\sigma$ of $\sigma$; by [F1] the $d$ simplicial maps $g\circ\widetilde\sigma$, $g\in G$, are precisely the $d$ lifts of $\sigma$, so the chain $\operatorname{tr}(\sigma):=\sum_{g\in G}g\circ\widetilde\sigma$ is independent of the chosen lift. Extend linearly to a chain map $\operatorname{tr}:C_*(X)\to C_*(Y)$. [A1, F1, F2]

2.1 The transfer is a chain map: for a singular simplex $\sigma$, $\partial\operatorname{tr}(\sigma)=\sum_gg\circ\partial\widetilde\sigma$, and the $d$ summands are exactly the lifts of the faces of $\partial\sigma$ with their orientations, so this equals $\operatorname{tr}(\partial\sigma)$. [F1, step 1.1, algebra]

3.1 Dualizing step 2.1 gives a cochain map $\operatorname{tr}^*:C^*(Y;\mathbb Q)\to C^*(X;\mathbb Q)$ and hence a homomorphism $\operatorname{tr}:H^*(Y;\mathbb Q)\to H^*(X;\mathbb Q)$. [F3, step 2.1]

4.1 The two compositions are multiplication by $d$ away from the two sides: at the chain level $p_\#\operatorname{tr}(\sigma)=d\cdot\sigma$ because summing the $d$ lifts and projecting adds $d$ copies of $\sigma$, so $p^*\circ\operatorname{tr}=d$ on cohomology; dually $\operatorname{tr}(p^\#\tau)=\sum_{g\in G}g^*\tau$ for a cochain $\tau$ on $Y$, because a simplex of $Y$ and its $d$ deck translates account for each lift once. [F1, F2, step 3.1, algebra]

5.1 Injectivity: if $p^*x=0$ then $d\,x=p^*\operatorname{tr}(x)=0$ and $d$ is invertible in $\mathbb Q$, so $x=0$. Image: by the second identity of step 4.1, $p^*(H^*(X;\mathbb Q))$ consists of invariant classes, and for an invariant $y\in H^*(Y;\mathbb Q)^G$ one has $p^*\bigl(\tfrac1d\operatorname{tr}(y)\bigr)=\tfrac1d\sum_g g^*y=y$, so the image is exactly the invariants. [step 4.1]

6.1 Boundary cases. For $d=1$ the covering is a homeomorphism, $G$ is trivial, and the statement reduces to the identity map being an isomorphism onto all of $H^*(Y;\mathbb Q)$. The empty space is allowed as a CW complex; both sides vanish and the statement holds vacuously. The coefficient field $\mathbb Q$ is nonzero and $d$ is invertible in it, which is the only place division occurs. AC is used only in the choice of lifts in step 1.1, as recorded in [A1]. [A1, F1, F3, step 1.1, step 5.1] ∎

## Source notes

Hatcher, *Algebraic Topology* section 3.G, printed pp. 321-326, defines the transfer for finite-sheeted coverings and proves the two composition identities used above. The rational coefficients make $d$ invertible, which is what converts the composition identity into injectivity and the image-identification.
