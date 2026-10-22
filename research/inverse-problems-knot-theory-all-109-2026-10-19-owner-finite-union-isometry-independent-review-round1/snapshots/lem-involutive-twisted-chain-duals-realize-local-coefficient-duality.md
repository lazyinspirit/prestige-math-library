---
id: lem-involutive-twisted-chain-duals-realize-local-coefficient-duality
kind: lemma
title: Twisted right-chain duals realize local coefficient duality
status: draft
origin: session
deps: [lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction, def-singular-and-cellular-chain-complexes-with-local-coefficients, thm-compact-oriented-manifold-local-coefficient-duality-in-zf]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology, local coefficients and duality, Section3.H
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and L2-signatures, Theorem2.13
      url: https://arxiv.org/pdf/math/9908117
---

## Statement

Let $(M,o)$ be a compact connected based Hausdorff manifold, let $R$ be an involutive unital ring, and supply a rank-one right-$R$ local system $\mathcal R$ with an identification $\mathcal R_o=R$. Assume every based-loop monodromy is left multiplication by a unit $u$ satisfying $\bar u=u^{-1}$. Equip the base fiber with the standard Hermitian form $h_o(a,b)=\bar a b$. Transport extends this to a path-independent parallel Hermitian form $h$ on $\mathcal R$. Put $C_*=C_*(M;\mathcal R)$. For a right $R$-module $P$, write $\overline P$ for its conjugate left module, with $r\cdot\bar p=\overline{p\bar r}$.

The left-$R$ cochain complex $\operatorname{Hom}_R(C_*,R)$ is the intrinsic cochain complex of the left-$R$ local system with fiber $R$ and transport $a\mapsto au^{-1}$. Relative to the supplied parallel Hermitian form, that local system is naturally isomorphic to $\overline{\mathcal R}$ by $\bar v\mapsto[w\mapsto h(v,w)]$. The identifications are independent of unitary fiber frames; an arbitrary change of Hermitian structure is not asserted to preserve them. If $M$ is oriented, boundaryless and of dimension $n$, cap duality therefore gives
$$H^p(\operatorname{Hom}_R(C_*,R))\cong\overline{H_{n-p}(C_*)}.$$
If $R\subseteq K$ is an embedding into an involutive division ring extending the involution, the same conclusion is valid for $K$, with $C_*\otimes_R K$ in the homology target. If $R$ is involution-stable in $K$, the complex $\operatorname{Hom}_R(C_*,K/R)$ is the corresponding intrinsic left-$R$ cochain complex with fiber $K/R$ and transport by right multiplication by $u^{-1}$. These identifications require no choice principle and commute with the coefficient maps $R\to K\to K/R$.

## Facts & Assumptions

**Given:** The supplied based coefficient system, standard Hermitian form on its identified base fiber, involutions and manifold data.

[F1] A left or right module local system here is a groupoid functor with linear transport; forgetting the action gives an abelian-group local system, to which the intrinsic definition applies at commutative base ring $\mathbb Z$. Finite atlas rules supply basepoint paths and specified rank-one bases in every fiber; the one-vertex supplier proves the arbitrary right-$R$ first-edge boundary and its square-zero identity directly. [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[def-singular-and-cellular-chain-complexes-with-local-coefficients]]

[F2] Compact oriented manifold duality holds without choice for every abelian-group local system and respects commuting scalar actions. [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]]

## Proof

1.1 Use the finite-atlas paths of [F1] to transport the supplied base vector $1$ to a frame $e_x$ in every fiber. Two paths to $x$ give frames $e_x$ and $e'_x=e_xv$ where $v$ is unitary, because their difference is a based loop. Define $h_x(e_xa,e_xb)=\bar a b$. In the second frame the coordinates are $v^{-1}a,v^{-1}b$, and
$$\overline{v^{-1}a}\,v^{-1}b=\bar a(\bar v)^{-1}v^{-1}b=\bar a b.$$
Thus this definition is path-independent and every transport preserves $h$. The finite-atlas rule supplies all the paths by a formula, so no infinite family of choices is required. The resulting frames are unitary and their transition units are unitary. [F1, given, construct, algebra]

1.2 Use the paths from [F1] to put a specified basis on every fiber, and let $u_{01}$ be the transition unit along the first edge of a singular simplex. In this gauge its right-chain boundary has first term $e_{\partial_0\sigma}u_{01}$ and its remaining terms $(-1)^i e_{\partial_i\sigma}$ for $i>0$. A right-linear cochain $f$ consequently has coboundary first term $f(e_{\partial_0\sigma})u_{01}$, with the same remaining signed terms. Intrinsic local cochains use inverse first-edge transport. Thus these are exactly the cochain formulas for the coefficient system whose transport is right multiplication by $u_{01}^{-1}$; that transport commutes with left multiplication by $R$. Sending $f$ to its values on these supplied simplex basis elements is a bijection, in every degree, with the intrinsic cochains, and the displayed formulas show that it commutes with coboundaries. No values in an infinite product are lifted or chosen. [F1, given, construct, algebra]

2.1 Intrinsically send $\bar v$ to the right-linear functional $w\mapsto h(v,w)$. In a unitary frame this is $J:\overline R\to R$, $J(\bar a)=\bar a$, where the bar on the right is the ring involution. It is left-linear: $J(r\cdot\bar a)=\overline{a\bar r}=r\bar a$. It commutes with transport, since $\overline{ua}=\bar a\bar u=\bar a u^{-1}$. Hence it identifies the conjugate chain-coefficient local system with the dual system of step 1.2. Conjugation changes neither underlying abelian-group cycles nor boundaries and is involutive, so the homology of that dual system identifies with $\overline{H_*(C_*)}$. When $M$ is oriented and closed, apply [F2] to the actual dual local system from step 1.2, viewed as a local system of abelian groups with a commuting left-$R$ action. Its cap isomorphism gives precisely the displayed cohomology-to-conjugate-homology identification. [F2, step 1.2, construct, algebra]

3.1 For $K$ coefficients, every right-linear $f:C_j\to K$ extends uniquely to the right-$K$ linear map $C_j\otimes_RK\to K$, $c\otimes k\mapsto f(c)k$. Balancing proves that formula well-defined; its inverse is restriction to $c\otimes1$. These maps commute with the differentials and left $K$ actions. The chain coefficient system is now the scalar extension with fiber $K$, and its transport units have the same unitary involution property. Steps 1.2 and 2.1 applied to it give the asserted $K$ conclusion, including its left-$K$ linearity. This uses explicit tensor adjunction and no basis selection over $K$. [F1, F2, step 1.2, step 2.1, construct, algebra]

4.1 The quotient $K/R$ is an $R$-bimodule because $R$ is a subring, and the involution descends because $\bar R=R$. Replace the value module in step 1.2 by this bimodule. Right multiplication by $u^{-1}$ is still well-defined and commutes with left $R$, so exactly the same simplex formula identifies its dual cochains. Inclusion and quotient of the three value modules commute with those multiplications, and therefore with the chain/cochain identifications. The dual-to-conjugate identification is intrinsic relative to $h$. Explicitly, under a unitary frame change $e'=ev$, vector coordinates change to $a'=v^{-1}a$ and right-linear functional coordinates to $q'=qv$. Then $\overline{a'}=\bar a(\bar v)^{-1}=\bar a v$, which is exactly the functional transformation. Equivalently its inverse sends $f$ to $\overline{e\,\overline{f(e)}}$; replacing $e$ by $ev$ leaves this unchanged since $v\bar v=1$. The same standard Hermitian structure extends to $K$, and these unitary frame identities hold there as well. All constructions used only the finite atlas data of [F1] and formula-defined maps on supplied generators. This proves every claimed compatibility without a choice principle. [F1, step 1.2, step 2.1, step 3.1, construct, algebra] ∎
