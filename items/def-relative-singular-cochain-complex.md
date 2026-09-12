---
id: def-relative-singular-cochain-complex
kind: definition
title: Relative singular cochain complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cohomology-with-coefficients, def-singular-cochain-complex-with-coefficients, def-singular-chain-complex-of-a-pair, lem-singular-boundary-descends-to-relative-chains]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, Relative Groups, printed pages 199–200
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Definition

For a subspace $A\subseteq X$ and an abelian group $G$, the **relative singular cochains** are
$$C^n(X,A;G)=\operatorname{Hom}_{\mathbb Z}(C_n(X,A;\mathbb Z),G)\quad(n\ge0),$$
and zero for $n<0$. The domain is the quotient chain group of [[def-singular-chain-complex-of-a-pair]]. The relative coboundary is positive precomposition with its induced boundary: $\delta\varphi=\varphi\bar\partial$. The well-defined relative chain differential of [[lem-singular-boundary-descends-to-relative-chains]] squares to zero, so precomposition twice also gives zero.

Precomposing with the quotient $q:C_n(X;\mathbb Z)\to C_n(X,A;\mathbb Z)$ identifies $C^n(X,A;G)$ with the subgroup of $C^n(X;G)$ vanishing on $C_n(A;\mathbb Z)$. Indeed $\varphi q$ vanishes there; conversely a homomorphism $\psi$ vanishing there defines $\bar\psi([c])=\psi(c)$, independently of the representative because its possible difference lies in $C_n(A;\mathbb Z)$. These inverse maps are additive and intertwine coboundaries by $q\partial=\bar\partial q$.

In the simplex-function description of [[def-singular-cochain-complex-with-coefficients]], these are exactly functions zero on simplices whose image lies in $A$. Their faces also lie in $A$, so their coboundaries still vanish there. The quotient integer chain group is free on the complementary set of simplices: remove the coefficients on simplices in $A$ from each finite formal chain; the remaining coefficients uniquely determine its relative class. This identifies the quotient with a free group without a choice of representatives. It does not assert that extension by zero commutes with the differential.

Define
$$H^n(X,A;G)=\ker(\delta:C^n(X,A;G)\to C^{n+1}(X,A;G))/\operatorname{im}(\delta:C^{n-1}(X,A;G)\to C^n(X,A;G)).$$
The image is inside the kernel by the relative square-zero calculation. As in [[def-singular-cohomology-with-coefficients]], this is an abelian quotient, zero in negative degrees; degree zero has no incoming coboundaries. For $A=\varnothing$ this is the absolute complex and cohomology, whereas $A=X$ gives zero in every degree. Empty $X$ and zero $G$ are included. All identifications are explicit and require no AC.
