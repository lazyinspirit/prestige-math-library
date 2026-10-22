---
id: lem-boundary-spin-c-restriction-and-line-twists-are-equivariant
kind: lemma
title: "Boundary Spin-c restriction is normal reduction and commutes with line twists"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-real-pin-spin-topological-double-covers
  - lem-real-local-spin-lift-by-matrix-logarithm
  - lem-spin-c-structures-form-an-h2-torsor
  - lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section2 boundary Spin-c conventions; the actual normal reduction and twist equivariance are constructed below."
---

## Statement

Assume AC. Let $M$ be a compact connected oriented smooth four-manifold with nonempty connected boundary $Y$, a specified Riemannian metric, and a Spin$^c(4)$ lift $P$ of its oriented tangent frame bundle. Give $Y$ the outward-normal-first orientation. The outward unit normal identifies $TM|_Y$ with $\mathbb R\oplus TY$. Restricting $P$ to $Y$ and reducing to frames with first vector that normal constructs a Spin$^c(3)$ lift $\operatorname{res}P$ of $TY$.

This construction induces a bijection between Spin$^c$ lift classes of $\mathbb R\oplus TY$ and those of $TY$, inverse to extension by $\operatorname{Spin}^c(3)\hookrightarrow\operatorname{Spin}^c(4)$. For every complex line bundle $L\to M$ there is a natural isomorphism
$$\operatorname{res}(P\otimes L)\cong(\operatorname{res}P)\otimes L|_Y.$$
Consequently, with the actual $H^2$ torsor actions, boundary restriction is equivariant for $H^2(M;\mathbb Z)\to H^2(Y;\mathbb Z)$. The determinant line of $\operatorname{res}P$ is the restriction of that of $P$; its change under a line twist is twice the line's first Chern class, while the torsor action is by the line's first Chern class itself. No Spin$^c$ existence or Floer map is asserted.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|The actual group quotient and lift definition]]

[[lem-spin-c-structures-form-an-h2-torsor|The line-bundle action, including two-torsion]]

## Facts & Assumptions

**Given:** The compact oriented metric manifold and the specified lift in the statement. All bundle maps cover the identity on their indicated base unless restriction is written.

[F1] [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]] defines $\operatorname{Spin}^c(n)=(\operatorname{Spin}(n)\times U(1))/\langle(-1,-1)\rangle$ and its projection to $SO(n)$ through the even negative-square Clifford group.

[F2] [[thm-real-pin-spin-topological-double-covers]] proves surjectivity and central kernel $\{1,-1\}$ for the Spin-to-$SO$ map. [[lem-real-local-spin-lift-by-matrix-logarithm]] constructs the local section by actual matrix-logarithm and Clifford-exponential series; their smoothness needed here is checked in step 2.1.

[F3] [[lem-spin-c-structures-form-an-h2-torsor]] constructs the actual free transitive line-bundle action on lifts, identifies it naturally with $H^2$ by first Chern class, and proves pullback equivariance under AC.

[F4] [[lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology]] gives compact $M$ and $Y$ finite CW homotopy types, so their bases satisfy the torsor supplier's CW-type and paracompact hypotheses.

[A1] [[def-axiom-of-choice]] is retained for the $H^2$ classification and these topological interfaces. The normal subgroup and bundle reduction computations add no further choice.

## Proof

1.1 **The exact stabilizer subgroup.** Write the oriented Euclidean four-space as $\mathbb R e_0\oplus V$, $\dim V=3$, in normal-first order. The universal Clifford homomorphism from the negative-square algebra of $V$ to that of the four-space maps normalized even vector products to such products. Their images commute with $e_0$, so they fix $e_0$ and map onto $SO(V)$ by [F2]. The resulting map on $\operatorname{Spin}(3)$ is injective: an element mapping to $1$ has trivial $SO(V)$ image, hence is $1$ or $-1$ by [F2], and those two real scalar elements have distinct four-dimensional images. Thus it gives an actual included $\operatorname{Spin}(3)$. Conversely, if $s\in\operatorname{Spin}(4)$ projects to a rotation fixing $e_0$, its restriction to $V$ is orientation preserving. Choose a lift $h\in\operatorname{Spin}(3)$ of that rotation. Then $sh^{-1}$ has trivial four-dimensional image, so lies in $\{1,-1\}\subset\operatorname{Spin}(3)$ by [F2]. Hence the full preimage of this $SO(3)$ stabilizer is exactly $\operatorname{Spin}(3)$. Passing to [F1]'s quotient gives preimage $\operatorname{Spin}^c(3)$ inside $\operatorname{Spin}^c(4)$, with the same central $U(1)$. This proves the actual group identity needed for reduction. [F1, F2, construct, algebra]

2.1 On $Y$ the unit normal $\nu$ is a smooth section of the unit sphere bundle of $TM|_Y$. Frames of the form $(\nu,v_1,v_2,v_3)$ make a principal $SO(3)$ subbundle of the restricted $SO(4)$ frame bundle, canonically the oriented orthonormal frame bundle of $TY$. Define $P_\nu$ as its inverse image under the lift map $P|_Y\to P_{SO}(TM)|_Y$. Step 1.1 identifies each fiber's transitive free group with $\operatorname{Spin}^c(3)$. It is an actual smooth principal subbundle: over a local boundary frame chart, lift that frame section through the local sections in [F2] and a local trivialization of $P$. The local section used here is smooth: on a smaller matrix ball the logarithm series and every fixed derivative converge uniformly, since their bounds are a polynomial in the term number times a geometric sequence of ratio less than one. The Clifford exponential series has the same derivative property. Thus the explicit section of [F2] is smooth, and translation gives smooth local sections at any group point. The inverse image consequently has product form $U\times\operatorname{Spin}^c(3)$. The restricted equivariant projection to the three tangent vectors gives the required Spin$^c(3)$ structure. Conversely extend any such three-dimensional lift $Q$ to $Q\times_{\operatorname{Spin}^c(3)}\operatorname{Spin}^c(4)$ and append the fixed normal to its projected tangent frames. Reducing this extension at the normal recovers $Q$; extending $P_\nu$ recovers $P|_Y$ by $[p,g]\mapsto pg$. These maps are well-defined mutually inverse local product maps. Therefore the asserted bijection is on actual lifts and their isomorphism classes. [F1, F2, step 1.1, construct]

3.1 A line twist multiplies a local Spin$^c$ transition $h_{ij}$ by its central line transition $u_{ij}$. This central element projects to the identity orthogonal matrix, so the normal-frame reduction condition is unchanged. The transition functions of the reduced twisted lift are precisely those of $P_\nu$ multiplied by $u_{ij}|_Y$. Thus reduction commutes with line twist by the displayed canonical local isomorphisms, which agree on overlaps. In [F1]'s quotient the determinant character is $[s,z]\mapsto z^2$, well-defined because $(-1,-1)$ has square-one central coordinate. It is the same character on the subgroup in step 1.1. Hence the determinant restricts as asserted and a twist by $L$ changes it by $L^{\otimes2}$. This does not replace the line action by its doubled determinant action. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 The given lift makes the two lift spaces nonempty; [F4] verifies the base hypotheses of [F3] for $M$ and $Y$. Identify the line actions with $H^2$ by that supplier's natural first-Chern-class map. Step 3.1 becomes $\operatorname{res}(P+a)=\operatorname{res}(P)+i^*a$ for every $a\in H^2(M;\mathbb Z)$. All torsion, including elements killed by two, remains in this equation, even when the corresponding determinant class is unchanged. The normal-first convention in step 2.1 fixes the boundary orientation; no boundary orientation was independently selected. These constructions need an initial lift and do not manufacture one or a cobordism map. This proves the stated restriction interface. [A1, F3, F4, step 2.1, step 3.1, construct, algebra] ∎
