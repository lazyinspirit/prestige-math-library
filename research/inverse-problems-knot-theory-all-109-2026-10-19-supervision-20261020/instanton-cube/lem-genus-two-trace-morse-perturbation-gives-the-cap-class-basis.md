---
id: lem-genus-two-trace-morse-perturbation-gives-the-cap-class-basis
kind: lemma
title: Genus-two trace Morse perturbation gives the cap-class basis
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-odd-admissible-ordinary-cobordisms-support-insertion-counts
  - lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half
  - lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two
  - lem-kahler-orientation-and-signed-product-quotient-gluing
  - lem-two-ordinary-exceptional-ends-give-the-needed-low-insertion-counts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Donaldson invariants for connected sums along surfaces of genus 2, Lemma18
      url: https://arxiv.org/pdf/dg-ga/9702004
---

## Statement

Assume full AC and the actual ordinary quotient Floer/count construction. For $Y=\Sigma_2\times S^1$ with determinant odd on $\Sigma_2$, the quotient theory has a sufficiently small genuine holonomy perturbation with exactly eight critical points, four of each parity. Its four even product-cap classes
$$e_i=\phi(\Sigma_2\times D^2,\Sigma_2^i),\qquad0\le i\le3,$$
form a basis of its even Floer homology. No collapse theorem for its entire Morse--Bott spectral sequence or product ring presentation is assumed.

For the actual twice-blown-up K3 relative invariants $v=\phi(B^\circ,1)$ and $u=\phi(B^\circ,\Sigma_2)$ supplied by the low insertion construction, both lie in this four-class span. The full quotient pairing is
$$\langle v,u\rangle=-8.$$
Thus its particular doubled relative cobordism has a nonzero signed quotient count, and its usual coefficient calibration $4\langle v,u\rangle$ equals $-32$. This proves that particular geometric pairing; it does not prove a universal genus-two fiber-sum formula or a higher-genus product-ring presentation. The K3 ASD seed required by the low insertion construction remains a premise at its actual separately authored extent.

## Facts & Assumptions

**Given:** The actual ordinary determinant-one theory and its correctly signed product quotient. The K3 application additionally uses its supplied ASD seed and actual two-exceptional-end count construction.

[F1] Finite ordinary critical sets, local slices, all-class differential and the product degree-four quotient action are [[thm-odd-admissible-ordinary-cobordisms-support-insertion-counts]]. Signed quotient gluing and cap orientation are [[lem-kahler-orientation-and-signed-product-quotient-gluing]].

[F2] The compact smooth odd surface moduli, its symplectic normalization and zero-energy ruled-surface count are [[lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half]]. The ten-dimensional ruled-surface count is [[lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two]].

[F3] The low closed twice-blown-up evaluations, using their actual K3 ASD premise, are [[lem-two-ordinary-exceptional-ends-give-the-needed-low-insertion-counts]]. Full AC is inherited through the local analytic constructions. [[def-axiom-of-choice]]

## Proof

1.1 **A concrete Morse--Bott function on the actual odd surface moduli.** Use the compact smooth quotient
$$N_2=\{(A,B,C,D)\in SU(2)^4:[A,B][C,D]=-1\}/SU(2)$$
from [F2], and set $f=\tfrac12\operatorname{tr}A$. At $A=\pm1$ the second commutator must be minus one. Its pair is conjugate uniquely to $(i,j)$, with central stabilizer, leaving $B\in SU(2)$. Hence each endpoint critical set is a smooth $S^3$. The derivative of the second commutator at $(i,j)$ is onto, so the implicit relation gives normal coordinates equal to the three imaginary components of $A$. The expansion $f=\pm(1-|a|^2/2)+O(|a|^4)$ makes these clean critical manifolds with normal indices respectively three and zero. No quotient by an extra nonliftable surface gauge is taken here. [F1, F2, given, construct, algebra]

2.1 **Every interior critical point and its normal index.** When $A=\cos\theta+i\sin\theta$ with $0<\theta<\pi$, twisting $B\mapsto B\exp(\varphi i)$ preserves the relation. The collar integration defining [F2]'s symplectic form identifies this flow as a nonzero scalar multiple of the Hamiltonian field of $f$. It vanishes in the quotient exactly when it is an infinitesimal simultaneous conjugation. Such a conjugation commutes with $A$, so is a nonzero multiple of $i$; it must also commute with $C,D$. Thus $C,D$ lie in its axis circle. Their commutator is one, and $[A,B]=-1$ then forces $A=i$ and $B$ perpendicular trace-zero. Residual axis conjugation normalizes $B=j$, leaving the full critical torus
$$C=e^{ci},\qquad D=e^{di},\qquad(c,d)\in(\mathbb R/2\pi\mathbb Z)^2.$$
There is no further Weyl quotient: a conjugation fixing the chosen $A=i,B=j$ is central. The linearized commutator in the three variables $\theta-\pi/2$, the scalar part of $B$, and its $i$ component is onto. Consequently $C,D$ are local six-dimensional coordinates after this normalization, with four normal coordinates their off-axis components. The twist, followed by renormalizing $B$, acts on those components by a nontrivial circle rotation, with no zero weight. Its fixed set is exactly the displayed smooth torus, so the Hamiltonian Hessian is nondegenerate normal to it. Its signature is constant on this connected torus. At $C=D=1$, write their small off-axis parts as $u,v\in\operatorname{span}(j,k)$. Their commutator has leading $i$ component $2(u_jv_k-u_kv_j)$. The constraint gives $\theta-\pi/2=-(u_jv_k-u_kv_j)+O(3)$, so $f$ has quadratic term $u_jv_k-u_kv_j$, of signature $(2,2)$. The middle normal index is therefore two. This proves the full critical classification and clean Hessian, not just an Euler-characteristic identity. [F1, F2, step 1.1, construct, algebra]

3.1 **An actual Morse function with four points of each parity.** Perturb $f$ near its three disjoint clean critical sets by a small height function on each $S^3$ and a perfect product Morse function on the middle $T^2$. The normal Hessian is uniformly invertible on their compact neighborhoods, so normal implicit solution reduces the perturbed critical equation precisely to these tangential Morse equations. Outside those neighborhoods the original gradient has a positive lower bound, so no further critical point appears. The resulting Morse indices are $0,3$ from the minimum $S^3$, $2,3,3,4$ from the torus, and $3,6$ from the maximum $S^3$. Thus there are exactly four even and four odd points. The surface moduli is connected as well: any other compact component would have a minimum, and the only index-zero clean critical component is that one connected minimum $S^3$. [F2, step 1.1, step 2.1, construct, algebra]

4.1 **Realizing this finite perturbation in the ordinary Floer theory.** The unperturbed product critical set has two copies of $N_2$, one for each central $S^1$ holonomy, exchanged by the free projective action; its quotient has exactly one copy. Its normal Hessian has kernel precisely the tangent first cohomology of $N_2$, and no further zero modes, since the surface adjoint zeroth space vanishes. The kernel dimension is constantly six and its compact family has a common positive normal spectral gap. Finitely many holonomy traces give a smooth embedding of this compact critical manifold into a finite-dimensional coordinate space: their infinitesimal separation gives finitely many local immersion charts, and finitely many further trace functions separate pairs outside the diagonal neighborhoods. Extend step 3.1's Morse function to that coordinate space with a cutoff. It is a genuine cylinder function in [F1]'s perturbation space, chosen invariant under the central-lift involution. Lyapunov--Schmidt solution of the invertible normal critical equation leaves its tangential equation equal to the chosen small Morse equation plus a smaller $C^1$ error. Its eight nondegenerate critical points persist with their indices. Small-perturbation properness in [F1] puts every critical point in these normal neighborhoods; otherwise a sequence of perturbations tending to zero would converge to a flat point outside the complete flat critical set. Thus the actual quotient Floer chain complex, not just a page over a formal energy parameter, has four generators of each parity. Morse index gives the parity relative to one common normal shift; that shift can only interchange the two equal lists. The all-class differential may be nonzero, but its even homology dimension is at most four. No specialization of a Novikov rank bound is used. [F1, F2, step 3.1, construct]

5.1 **Four actual cap classes exhaust the needed sector.** The cap's flat deformation space has dimension six, and each surface insertion has codimension two, so $e_0,e_1,e_2,e_3$ are all even under the actual deformation-index convention. Positive class periods are divisible by four in the quotient and do not alter parity. Gluing two caps gives the signed quotient count on $\Sigma_2\times\mathbb{CP}^1$. By [F2] its three- and five-surface values are minus one half and minus two. The latter value continues from the explicitly constructed $t>1$ wall side to the long-neck chamber: step 1.1 of that wall construction classifies the only possible reducible as its $t=1$ split; for $t>1$ there is no other wall, and its energy $4\pi^2$ is below the ordinary bubble quantum. The other entries required here vanish by degree, except the potential one-surface sector, whose topological energy is negative and so is empty. Thus the actual pairing of the four cap classes is
$$N=\begin{pmatrix}0&0&0&-1/2\\0&0&-1/2&0\\0&-1/2&0&-2\\-1/2&0&-2&0\end{pmatrix}.$$
Its determinant is $1/16$, so the four classes are linearly independent in Floer homology. Step 4.1 bounds that even homology by four; hence they form a basis of the ENTIRE required parity sector. This is the geometric upper-bound premise that a nondegenerate matrix alone would not provide. [F1, F2, step 4.1, construct, algebra]

6.1 **Containment and the full geometric relative pairing.** The relative invariants $v,u$ are homogeneous in parity, and a surface insertion preserves it. The actual nonzero evaluation $\langle v,e_2\rangle=2$ from [F3] puts them in the same even sector as the cap classes. They are therefore contained in the span proved in step 5.1, with no unmeasured orthogonal component. Their dual pairing vectors have the form
$$v=(v_0,0,2,0),\qquad u=(0,2,0,8)$$
by [F3] and parity. The value $v_0$ is unnecessary and is not replaced by a number from a projected point sector. Directly solving $Nz=u$ gives $z=(0,0,-4,0)^t$, so the COMPLETE pairing is $v^tN^{-1}u=-8$. The ordinary relative gluing theorem and its signed quotient normalization in [F1] identify it with the actual count on the specified double, with one surface insertion on one half. There is no factor of two left from the quotient. Its coefficient calibration is $4(-8)=-32$. This uses matrix algebra only after actual containment and actual geometric gluing have been established. It gives a particular nonzero genus-two witness, not a universal formula for arbitrary fiber sums. [F1, F3, step 4.1, step 5.1, construct, algebra] ∎

## Original-facing boundary

The genus-two even cap basis and this particular doubled relative pairing are the scope supplied here. No higher-genus primitive decomposition, all-genus product recurrence, extremal eigenspace multiplicity, taut hierarchy or KHI rank theorem is inferred. The actual separately authored K3 ASD seed remains part of the full premise graph. All sources in this new chain are author-stage until a complete original-facing review; no accepted supplier was reread, no review counter was reset, and no helper-only review is requested.
