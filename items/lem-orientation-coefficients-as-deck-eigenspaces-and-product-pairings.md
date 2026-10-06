---
id: lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings
kind: lemma
title: Orientation coefficients are deck eigenspaces, with product and duality
  pairings
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-homology-and-cohomology-with-local-coefficients
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - lem-the-orientable-double-cover-of-a-smooth-manifold
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses
  - thm-poincare-duality-with-the-orientation-local-system
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - thm-singular-cohomology-is-graded-commutative
  - def-algebraic-lefschetz-number
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: Hatcher, Algebraic Topology, Sections 3.G–3.H; local adapter proved here
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Printed pp. 321–322 (transfer and invariant cohomology), 327–336 (local
        coefficients and twisted duality); not a citation for an already-proved
        Lefschetz adapter.
dependency_level: 8
---

## Statement

Assume AC. Let $M$ be a connected closed smooth $n$-manifold, $\mathcal O=\mathcal O_M^{\mathbb Q}$ its rational orientation system, and $\pi:\widetilde M\to M$ its orientation cover with involution $\tau$. Cohomology with constant coefficients and with $\mathcal O$ identifies respectively with the $+1$ and $-1$ eigenspaces of $\tau^*$ on $H^*(\widetilde M;\mathbb Q)$. With $p_1,p_2:M\times M\to M$, cross products give
$$H^r(M\times M;p_1^*\mathcal O)\cong\bigoplus_{i+j=r}H^i(M;\mathcal O)\otimes H^j(M;\mathbb Q),$$
and the analogous formula with $p_2^*\mathcal O$ has the two coefficient systems reversed. The pairing
$$H^{n-p}(M;\mathcal O)\otimes H^p(M;\mathbb Q)\longrightarrow\mathbb Q,\qquad (\beta,\alpha)\longmapsto\langle\beta\smile\alpha,[M]^{\mathrm{tw}}\rangle$$
is perfect. These products obey the usual Koszul rule, including graded commutativity with the coefficient factors interchanged, and evaluation on the product twisted fundamental class is the product of the two factor evaluations. The orientation system of $M\times M$ is $p_1^*\mathcal O\otimes p_2^*\mathcal O$, with factor order first then second.

## Facts & Assumptions

**Given:** The objects and AC in the statement.

[F1] [[def-homology-and-cohomology-with-local-coefficients]].

[F2] [[def-cup-and-cap-products-with-local-coefficient-pairings]].

[F3] [[lem-the-orientable-double-cover-of-a-smooth-manifold]].

[F4] [[thm-covering-space-lifting-criterion]].

[F5] [[thm-uniqueness-of-lifts-from-a-connected-space]].

[F6] [[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]].

[F7] [[thm-poincare-duality-with-the-orientation-local-system]].

[F8] [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]].

[F9] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]].

[F10] [[thm-singular-cohomology-is-graded-commutative]].

[F11] [[def-algebraic-lefschetz-number]].

[F12] [[def-axiom-of-choice]].

## Proof

1.1 On the cover, the tautological local orientation at $(x,o)$ trivializes $\pi^*\mathcal O$: a fiber coefficient is written $c\,o$ with $c\in\mathbb Q$. A local cochain $\varphi$ therefore assigns to a lifted simplex $\widetilde\sigma$ the scalar obtained by expressing $\varphi(\pi\widetilde\sigma)$ in the tautological orientation at its initial vertex. Replacing the lift by $\tau\widetilde\sigma$ negates this scalar. Conversely an anti-invariant scalar cochain defines a fiber value independent of the lift, since both scalar and orientation negate. For constant coefficients the same construction has no sign and gives invariant cochains. Each simplex lifts after its initial vertex is specified, and lift uniqueness makes restriction to faces agree with coefficient transport; thus these are inverse cochain maps, also for relative pairs. [given, F1, F3, F4, F5]

2.1 For a cochain complex with an involution $t$ commuting with its differential, $P_\pm=(1\pm t)/2$ are complementary cochain projections. An invariant or anti-invariant cohomology class has a cocycle representative in the same subcomplex by applying the corresponding projection. If a cocycle in that subcomplex bounds in the full complex, applying the projection to a primitive makes it bound there. Thus cohomology of the subcomplex equals the corresponding cohomology eigenspace. This proves the first assertion using step 1.1. For chains the identical proof uses the weighted sum of the two lifts: changing a chosen orientation negates both its coefficient and the lift difference. This identifies local chains with the anti-invariant chains, up to the harmless normalization factor two, and respects boundaries. [step 1.1, algebra]

3.1 Apply step 1.1 on the four-sheeted cover $q=\pi\times\pi$. A $p_1^*\mathcal O$ cochain is exactly a cochain anti-invariant under $(\tau,1)$ and invariant under $(1,\tau)$; a $p_2^*\mathcal O$ cochain has the reversed parities. The commuting projections $(1\pm(\tau,1)^*)/2$ and $(1\pm(1,\tau)^*)/2$ show, by step 2.1, that these identifications also hold in cohomology. The ordinary rational Kunneth isomorphism on $\widetilde M\times\widetilde M$ is natural for both involutions. Restricting it to the $(-,+)$ and $(+,-)$ summands gives exactly the two claimed cross-product isomorphisms; each degree has finitely many summands and finite-dimensional factors by closed-manifold finiteness. [F6, F11, step 1.1, step 2.1]

4.1 The local cup formula lifts to the ordinary scalar cup formula because transport of the tautological orientation along a lifted simplex is precisely its orientation-system transport. Consequently its cross-product and cup signs are the ordinary ones on $q$. Pullback to the relevant parity subcomplex is injective on cohomology by step 2.1, so graded commutativity and the Koszul rule upstairs prove these identities downstairs. On every product chart the ordered tangent splitting identifies the product orientation system with $p_1^*\mathcal O\otimes p_2^*\mathcal O$. This local identification is independent of the two orientation choices since a reversal negates the corresponding factor on each side. Hence it is a global identification. [F2, F10, step 1.1, step 3.1]

5.1 The canonical twisted fundamental chain on $M$ pulls up by the weighted lift construction to the ordinary fundamental class of the canonically oriented cover; pairing a lifted orientation-coefficient cocycle with that class is twice its downstairs evaluation, since each simplex has two lifts with equal signed evaluations. For $q$ the factor is four. Ordinary product evaluation on $\widetilde M\times\widetilde M$, divided by four, is therefore the product of the two downstairs evaluations (each divided by two). These statements also follow simplexwise from the lift sums, so do not depend on a triangulation. The local characterization of the twisted fundamental classes supplies the classes used here. [F2, F8, step 2.1, step 4.1]

6.1 Twisted Poincare duality sends $\beta\in H^{n-p}(M;\mathcal O)$ to $\beta\cap[M]^{\mathrm{tw}}\in H_p(M;\mathbb Q)$ using the canonical pairing $\mathcal O\otimes\mathcal O\to\underline{\mathbb Q}$, $(c o)\otimes(d o)\mapsto cd$; this pairing is independent of $o$ since both factors negate. The cohomology-first cap identity gives $\langle\beta\smile\alpha,[M]^{\mathrm{tw}}\rangle=\langle\alpha,\beta\cap[M]^{\mathrm{tw}}\rangle$. Duality is an isomorphism and rational cohomology is the full dual of finite-dimensional rational homology, so this pairing is perfect. AC is inherited from the duality, Kunneth and finiteness suppliers. No map $f$, and no lift of a map $f$, has been assumed or constructed. [F2, F7, F9, F11, F12, step 5.1] ∎
