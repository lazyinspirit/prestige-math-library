---
id: lem-higher-order-blanchfield-pairings-are-nonsingular
kind: lemma
title: Classical and localized PTFA Blanchfield nonsingularity criteria
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-blanchfield-pairing-and-higher-order-rho-invariant
  - lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions
  - lem-ore-localization-is-flat-and-detects-module-torsion
  - lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction
  - lem-principal-boundary-chain-evaluation-over-division-fractions
  - lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
  - lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance, Whitney towers and L²-signatures”
      url: https://arxiv.org/pdf/math/9908117
      locator: Theorem 2.13 and its proof
forward_refs:
  - cex-ptfa-ore-localization-alone-does-not-give-blanchfield-nonsingularity
---

## Statement

Let $M$ be a closed oriented three-manifold, with a specified coefficient homomorphism $\phi:\pi_1(M_j)\to\Gamma$ on each component $M_j$, where $\Gamma$ is PTFA. Let $k=\mathbb Z$ or a commutative field, put $A=k[\Gamma]$, and let $K$ be its fraction division ring with the involution fixing $k$ and inverting group elements. Let $A\subseteq R\subseteq K$ be an involution-stable unital intermediate ring, and assume $H_1(M;K)=0$.

Then $H_1(M;R)$ is an $R$-torsion module and the coefficient Bockstein, oriented duality and evaluation define its Blanchfield pairing with target $K/R$. This pairing is nonsingular provided that on each component at least one of the following holds: every right ideal of $R$ is principal; $H_0(M_j;R)=0$; or the image of $\phi|_{\pi_1(M_j)}$ is cyclic. The last condition includes the usual integral infinite-cyclic coefficient case $R=\mathbb Z[t^{\pm1}]$, without asserting that this ring is a principal ideal domain. No choice principle is assumed.

## Statement references

[[def-blanchfield-pairing-and-higher-order-rho-invariant]]

[COT, Theorem 2.13 and proof, printed page 451](https://arxiv.org/pdf/math/9908117)

## Facts & Assumptions

**Given:** The closed manifold, coefficient systems, coefficient rings and vanishing in the Statement; the additional alternative is imposed only for the nonsingularity conclusion.

[F1] The Blanchfield convention is the inverse coefficient Bockstein after oriented duality, followed by evaluation; its first argument is conjugate-linear and its second argument right-linear. [[def-blanchfield-pairing-and-higher-order-rho-invariant]]

[F2] Integral and field PTFA group rings and their intermediate rings have the asserted Ore fractions and compatible involutions. [[lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions]]

[F3] Ore localization is exact, commutes with arbitrary chain homology, and annihilates exactly the elements with a nonzero right annihilator. [[lem-ore-localization-is-flat-and-detects-module-torsion]]

[F4] Twisted singular chains admit a choice-free one-vertex reduction with degree-zero boundary ideal $\sum_{h\in\operatorname{im}\phi}(h-1)R$. For a principal such ideal, degree-one evaluation with $K/R$ is an isomorphism. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-principal-boundary-chain-evaluation-over-division-fractions]]

[F5] Involutive twisted-chain duals have the actual intrinsic local cochain models, and oriented duality identifies $H^p(\operatorname{Hom}_R(C_*,R))$ with $\overline{H_{3-p}(C_*)}$. [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]]

[F6] The low-degree coefficient Bockstein is exact at $H^1(K/R)$ and $H^2(R)$ without an infinite product lifting assumption. [[lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]]

## Proof

1.1 Work first on one nonempty connected component. Put $C_*=C_*(M;R)$ in the right-module convention. By [F2], $R$ has no zero divisors, satisfies both Ore conditions, and has fraction division ring $K$. The supplied homomorphism has unitary transport units for the given involution. By [F4], replace $C_*$ by its explicitly homotopy equivalent free complex $C'_*$ with $C'_0=R$. This replacement preserves homology, dual cohomology and the natural evaluation maps; the discarded summand has an explicitly contracted identity differential. [F2, F4, given, construct, algebra]

2.1 By [F3] and $H_1(M;K)=0$, one has $H_1(C_*)\otimes_RK=0$. The elementwise zero criterion of [F3] says that every element of $H_1(C_*)$ has a nonzero right annihilator. Thus the whole module equals its torsion submodule. This uses arbitrary-complex localization, so no finite CW or triangulation assumption is introduced. [F3, step 1.1, given, algebra]

2.2 The degree-zero term of $C'_*\otimes_RK$ is $K$, and the image of its degree-one differential is either zero or $K$. In the first case $d_1=0$, and $H_1(M;K)=0$ implies that every degree-one chain is a boundary, so every degree-one dual cocycle vanishes. In the second case choose $z$ with $d_1z=1$; then $C'_1\otimes_RK=\ker d_1\oplus zK$. The same homology vanishing says $\ker d_1=\operatorname{im}d_2$, so every dual cocycle factors through $d_1$ and is the coboundary of its value on $z$. Hence $H^1(\operatorname{Hom}_R(C_*,K))=0$, using the tensor adjunction in [F5]. Also [F5] directly identifies $H^2(\operatorname{Hom}_R(C_*,K))$ with $\overline{H_1(M;K)}=0$. The exact segment [F6], applied to the compatible dual local systems of [F5], therefore gives a Bockstein isomorphism $\beta:H^1(\operatorname{Hom}_R(C_*,K/R))\to H^2(\operatorname{Hom}_R(C_*,R))$. [F5, F6, step 1.1, given, construct, algebra]

2.3 Restriction of a cocycle to cycles always defines the left-$R$ linear evaluation map $\kappa:H^1(\operatorname{Hom}_R(C_*,K/R))\to\operatorname{Hom}_R(H_1(C_*),K/R)$. Under the additional alternatives it is an isomorphism by [F4]. Indeed the reduced boundary image $B_0\subseteq C'_0=R$ is a right ideal, so it is principal if $R$ is right principal. If $H_0(M;R)=0$, it is all of $R$. If the coefficient image is cyclic generated by $t$, it is $(t-1)R$, including zero for trivial image. These verify precisely the hypothesis of the principal-boundary evaluation lemma, whose proof allows arbitrary $C'_1$. Thus no finite generation or principal-ideal assumption is silently imposed in the other two branches. [F4, step 1.1, construct, algebra]

3.1 By [F5], the inverse oriented duality map is an isomorphism $\overline{H_1(C_*)}\to H^2(\operatorname{Hom}_R(C_*,R))$. Compose it with $\beta^{-1}$ from step 2.2 and the evaluation map $\kappa$ from step 2.3. Evaluating the resulting functional on $y$ defines $B(x,y)\in K/R$. The composition is left-$R$ linear on the conjugate module and its values are right-$R$ linear functions of $y$, so $B(xr,y)=\bar rB(x,y)$ and $B(x,ys)=B(x,y)s$. This is exactly [F1]'s Bockstein–duality pairing, defined before any claim that $\kappa$ is invertible. Under the alternatives of step 2.3, all three maps in its adjoint are isomorphisms. Therefore $\overline{H_1(C_*)}\to\operatorname{Hom}_R(H_1(C_*),K/R)$ is an isomorphism, which is nonsingularity in the stated right-module convention. [F1, F5, step 2.1, step 2.2, step 2.3, construct, algebra]

4.1 A compact manifold has finitely many components, since its connected components are open and cover it. Apply the argument to each, using only finitely many basepoint and finite-atlas choices. Chains split over those components, and cochains are a finite product, so their cycle/boundary and Bockstein decompositions need no infinite primitive selection. The oriented fundamental class is the sum of the component classes, and the pairing is their orthogonal direct sum. Under the stated componentwise alternatives, each adjoint is an isomorphism, hence so is their finite direct sum. Empty $M$ gives the unique pairing on the zero module. In particular a cyclic integral coefficient image satisfies the third alternative even when $R=\mathbb Z[t^{\pm1}]$ is not right principal. This proves the full stated scope without a choice axiom. [F4, F5, F6, step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, algebra] ∎

## Remarks

The unrestricted implication over an unlocalized multivariable group ring is false. The explicit $T^3$ example with coefficient image $\mathbb Z^2$ has nonzero torsion first homology and zero dual; it is recorded separately in the PTFA counterexample. This example is contextual evidence for the necessary coefficient hypothesis, not a supplier in the proof.

## Remarks references

[[cex-ptfa-ore-localization-alone-does-not-give-blanchfield-nonsingularity]]
