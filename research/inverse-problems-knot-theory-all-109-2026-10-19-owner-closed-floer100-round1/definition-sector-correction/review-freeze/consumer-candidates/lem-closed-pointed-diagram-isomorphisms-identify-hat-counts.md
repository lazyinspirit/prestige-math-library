---
id: lem-closed-pointed-diagram-isomorphisms-identify-hat-counts
kind: lemma
title: "Closed pointed diagram isomorphisms identify the actual hat count operators"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Pointed Heegaard data in§2 and actual count conventions in§4; transported-data conjugacy proved locally"
---

## Statement

Assume countable choice. Let $f$ be an orientation-preserving isomorphism of two embedded closed-manifold pointed Heegaard diagrams, carrying their handlebodies, attaching systems and basepoints. Transport $j$, the surface area form, protected sets, and $J_t$ by its surface restriction $\varphi$ and $\Psi=\operatorname{Sym}^g\varphi$.

Then $\Psi$ gives bijections of generators, Whitney classes, their region coefficients, periodic domains and basepoint multiplicities. Postcomposition gives translation-equivariant bijections of the actual finite-energy strip spaces; their geometric linearizations are conjugate by the transported bundle maps, metrics and connections. Consequently actual Fredholm index and regularity agree. Ordinary admissibility in any specified Spin-c sector and full-module admissibility hold on one side exactly when they hold on the other, including sectors with no generators. The global mixed-sign condition corresponds as well.

The actual quotient-count and sum-finiteness conditions are equivalent. Whenever these counts are defined, the generator bijection $f_\#x=\Psi(x)$ intertwines the two hat operators and has the inverse induced by $f^{-1}$. If one operator squares to zero, so does the other, and the two actual diagram chain complexes and homologies are isomorphic. For $g=0$ this is the identity on the empty generator. No analytic existence, comparison between independently selected perturbations, or identity action of an isotopy on homology is asserted.

## Statement references

[[def-countable-choice]]

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]

## Facts & Assumptions

**Given:** The actual diagram isomorphism and explicitly transported analytic data in the Statement.

[F1] [[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]] specifies the product-torus images, classes, count equation, exact regularity and finiteness conditions, and the two admissibility conventions. It asserts no existence theorem for these counts.

## Proof

1.1 Set $j'=d\varphi j d\varphi^{-1}$, $\eta'=(\varphi^{-1})^*\eta$ and $J_t'=d\Psi J_t d\Psi^{-1}$. The surface map is biholomorphic for the transported structures. The symmetric-product map is smooth with smooth inverse even at repeated tuples: disjoint holomorphic disks around the distinct support points and their transported coordinates give identical elementary symmetric charts. It carries the product-torus images, diagonal and point divisors to their counterparts. The protected integrable sets and constant endpoint collars are transported exactly; tameness holds for the transported descended area form by its defining inequality. Thus the new data are genuinely allowed data, rather than a formal relabeling of counts. [F1, given, construct, algebra]

2.1 Postcomposition by $\Psi$ carries maps and relative homotopies to maps and homotopies with the same marked ends and transported boundary tori. Its inverse reverses this, so the Whitney classes and generators are bijected. Oriented surface regions and divisor coorientations are preserved, hence all region and basepoint multiplicities agree, and periodic full-curve boundaries correspond. The exact chain rule gives $\partial_s(\Psi u)+J_t'(\Psi u)\partial_t(\Psi u)=d\Psi(u_s+J_t(u)u_t)$. Both directions therefore carry actual solutions. Uniform ends and longitudinal translations are preserved. For the transported metric energy is exactly equal; any other fixed smooth metric on the compact target is uniformly equivalent, so energy finiteness agrees. This proves an actual translation-equivariant bijection. [F1, step 1.1, construct, algebra]

3.1 Transport a connection and metric on the tangent bundle by $\Psi$. Its differential is an isometry on pulled-back bundles and commutes with their covariant derivatives, hence is an isomorphism of the geometric $H^1$ domain and $L^2$ target with their actual boundary subbundles. Differentiate the nonlinear identity of step 2.1 at a zero. The term differentiating $d\Psi$ multiplies the zero nonlinear section and vanishes. Thus $P_{\Psi u}d\Psi=d\Psi P_u$, identifying kernels, ranges and cokernels. Index and surjectivity agree. Equivalently the covariant linearization of the conjugated section is natural with these transported connections on representatives; this also respects the class index wherever that class index is defined. Normalized periodic classes and all formal periodic domains correspond bijectively, as do their coefficients. Push a Spin-c lift forward by the oriented tangent-bundle isomorphism of the diagram transport. Its determinant line is pushed forward as well, and its cap cycles satisfy $H(f_\#P)=f_*H(P)$. The determinant clutch definition of the first Chern pairing therefore gives $\langle c_1(f_\#\mathfrak s),H(f_\#P)\rangle=\langle c_1(\mathfrak s),H(P)\rangle$. This bijects ALL Spin-c structures, even the empty-generator sectors. Consequently the specified-sector Chern-kernel predicate and its full-all-sector version in [F1] correspond, as does the global mixed-sign predicate. This conclusion is not based merely on the indices of realized classes. This argument makes no unproved identification with a Chern-class formula. [F1, step 1.1, step 2.1, construct, algebra]

4.1 At index one the equivariant bijection descends to actual translation-quotient sets, with inverse, preserving finiteness and parity. The entire list of nonempty index-one, zero-basepoint pairs is bijected, so the sum-finiteness condition agrees too. The two generator operators consequently satisfy $f_\#\widehat\partial=\widehat\partial' f_\#$, with inverse $(f^{-1})_\#$. Squaring this identity proves the stated square-zero transfer, and the inverse chain maps induce inverse homology maps whenever defined. For $g=0$ all spaces are the point symmetric product and the empty generator gives the claimed identity. These maps are constructed by transport; no step equated them with an identity action for an ambient isotopy or compared independently chosen almost complex paths. [F1, step 2.1, step 3.1, construct, algebra] ∎
