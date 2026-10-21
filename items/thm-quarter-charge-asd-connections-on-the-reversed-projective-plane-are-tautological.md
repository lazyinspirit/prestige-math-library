---
id: thm-quarter-charge-asd-connections-on-the-reversed-projective-plane-are-tautological
kind: theorem
title: Quarter-charge ASD connections on the reversed projective plane are tautological
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - ex-integral-cohomology-ring-of-complex-projective-space
  - thm-first-chern-class-classifies-complex-line-bundles
  - thm-asd-deformation-complex-index-formula
  - thm-geometric-clifford-module-dirac-index-formula
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-the-second-homotopy-group-of-so-three-vanishes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: complete §2.7, PDF22–24, especially Proposition2.10; its cited quarter-charge classification is proved here
---

## Statement

Assume full AC. Put the Fubini–Study metric of holomorphic sectional curvature four on $\mathbb{CP}^2$, and reverse its complex orientation. Write $H$ for the positive complex hyperplane class. On any oriented real three-plane bundle with first Pontryagin number $-1$, every anti-self-dual $SO(3)$ connection is isomorphic to the direct sum of the trivial real-line connection and the Chern connection of the tautological complex line, viewed as an oriented real plane. Its unbased deformation spaces have dimensions $(h^0,h^1,h^2)=(1,0,0)$, so its real ASD index is $-1$.

Complex conjugation lifts to this model by minus one on the real summand and conjugation on the tautological summand. The quotient is a connection on the order-two orbifold $\overline{\mathbb{CP}}^2/\mathrm{conj}$, with surface isotropy a rotation by $\pi$, trivial sheet system $\Delta$, curvature energy $\pi^2$ in the fundamental-trace normalization, and zero invariant kernel and cokernel. It is irreducible and regular. Among equivariant connections whose lifted bundle has Pontryagin number $-1$, it is the unique quotient connection up to determinant-one equivalence, including the chosen trivialization of $\Delta$.

This theorem is intrinsic to the projective plane and its quotient. Identifying that quotient smoothly as the required standard $(S^4,\mathbb{RP}^2)$ with normal Euler number $+2$, and identifying the local saddle embedding with it, are separate geometric operations.

## Statement references

[Kronheimer–Mrowka, §2.7 and Proposition2.10](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] The actual integral projective cohomology is $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[H]/(H^3)$, with $H$ the first Chern class of the dual tautological line. In particular $b_1=0$, the positive complex intersection form is $(1)$, and the tautological line has class $-H$. [[ex-integral-cohomology-ring-of-complex-projective-space]] [[thm-first-chern-class-classifies-complex-line-bundles]]

[F2] The accepted proof of the ASD index theorem constructs the actual Clifford module on one-forms and zero/two-forms and calibrates its untwisted index by Hodge theory. Its geometric Dirac theorem applies to an arbitrary finite-rank real orthogonal twist, not only to adjoints of an $SU(2)$ fundamental bundle. That twist calculation is performed below. [[thm-asd-deformation-complex-index-formula]] [[thm-geometric-clifford-module-dirac-index-formula]] [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[F3] Chern–Weil gives $p_1(G)=-\operatorname{tr}_{\mathbb R^3}(F_G\wedge F_G)/(8\pi^2)$ and $p_1(\mathbb R\oplus L_{\mathbb R})=c_1(L)^2$. Invariant elliptic operators have the actual smooth kernel and cokernel obtained by finite averaging. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]]

[A1] Full AC is inherited through [F1]–[F3]'s Hodge, index, bundle classification and elliptic suppliers. No local or global Spin structure is introduced. [[def-axiom-of-choice]]

## Proof

**Given:** The reversed projective plane and its Fubini–Study metric, and a smooth ASD connection $A$ with $p_1(G)[\overline{\mathbb{CP}}^2]=-1$. Normalize adjoint energy by $|F|^2=-\frac14\operatorname{tr}_{\mathbb R^3}(F\cdot F)$.

1.1 **The metric and its exact curvature block.** On the affine chart use $\varphi=\log(1+|z_1|^2+|z_2|^2)$ and $g_{a\bar b}=\partial_a\partial_{\bar b}\varphi=((1+|z|^2)\delta_{ab}-\bar z_a z_b)/(1+|z|^2)^2$, with the associated real metric and $\omega=(i/2)\partial\bar\partial\varphi$. On overlaps the potential changes by the real part of a holomorphic logarithm, so the metric patches. The projective unitary action preserves it and is transitive. At $z=0$, the first metric derivatives vanish and $-\partial_c\partial_{\bar d}g_{a\bar b}=\delta_{ab}\delta_{cd}+\delta_{ad}\delta_{cb}$. Passing to the real orthonormal frame $(e_1,Je_1,e_3,Je_3)$ gives sectional curvature four on a complex line and one on the orthogonal totally real planes, hence $\operatorname{Ric}=6g$ and $s=24$. More explicitly the real curvature operator is diagonal with eigenvalue six on $(e^{12}+e^{34})/\sqrt2$, zero on the other two self-dual forms, and two on all three anti-self-dual forms: substitution of those six forms into the displayed tensor gives these values. Thus in the complex orientation $W^-=0$, and in the reversed orientation $W^+=0$. Also $\int_{\mathbb{CP}^1}\omega=\int_{\mathbb C}(1+|z|^2)^{-2}dxdy=\pi$, so $[\omega]=\pi H$ and $\int_{\mathbb{CP}^2}\omega^2=\pi^2$. These computations fix the scale used below. [F1, F3, given, construct, algebra]

2.1 **The index for this actual $SO(3)$ twist.** Apply the Clifford-module calculation in [F2] with the complexification $G_{\mathbb C}$ of the real three-plane bundle. Through degree four its Chern character is $3+p_1(G)$: $c_1(G_{\mathbb C})=0$ and $p_1(G)=-c_2(G_{\mathbb C})$, and $\operatorname{ch}_2=-c_2$. The module multiplicity in [F2] has rank two. Consequently its twisting contribution for $d^*\oplus d^-$ in the complex orientation is $2\langle p_1(G),[\mathbb{CP}^2]\rangle$, while its untwisted contribution is $3(b_1-1-b_-)=-3$. Reversing orientation converts this to the required $d^*\oplus d^+$ operator on the reversed plane. Here the Pontryagin number in the complex orientation is $+1$, so the result is $2-3=-1$. This is the actual geometric Clifford index proof with its rank-three characteristic form substituted; the $SU(2)$-only numerical Statement is not applied to a bundle with nonzero $w_2$. Its real and complexified indices agree by the kernel/cokernel real-part argument in [F2]. [F1, F2, F3, step 1.1, construct, algebra]

3.1 **Automatic regularity forces reducibility.** The direct commutator expansion on self-dual two-forms is $2d_A^+(d_A^+)^*=\nabla_A^*\nabla_A+s/3-2W^++\mathcal T(F_A^+)$. In the reversed metric, step 1.1 gives $s/3=8$ and $W^+=0$, and anti-self-duality gives $F_A^+=0$. Therefore $2\|(d_A^+)^*\eta\|_2^2=\|\nabla_A\eta\|_2^2+8\|\eta\|_2^2$. This proves $H_A^2=0$. The gauge-fixed cokernel is $H_A^0\oplus H_A^2$: pair $d_Af+\sqrt2(d_A^+)^*\eta=0$ with $d_Af$, using $d_A^+d_Af=[F_A^+,f]=0$, to obtain $d_Af=0$ and then $(d_A^+)^*\eta=0$. Thus the index is $h^1-h^0$. If $h^0$ were zero, the index $-1$ from step 2.1 would be impossible. A nonzero parallel adjoint section is therefore present. Two linearly independent such sections would generate all three by their bracket and force $F_A=0$, contradicting the nonzero Pontryagin number. Hence $h^0=1$ and the same index calculation gives $h^1=0$. No genericity or charge-one classification on $S^4$ has been used. [F2, F3, step 1.1, step 2.1, algebra]

4.1 **The model exists and every connection equals it.** Choose the orientation of the parallel real axis. Its orthogonal complement is an oriented real plane, hence a complex line $L$, with $c_1(L)=mH$. Its Pontryagin number is $-m^2$ in the reversed orientation, so $m=\pm1$ by the given number and [F3]. Reversing the axis reverses the plane complex structure, interchanging these signs; choose $L$ tautological. In its affine frame the Hermitian norm is $h=1+|z|^2$, so its Chern curvature is $-\partial\bar\partial\log h=2i\omega$. This is anti-self-dual in the reversed orientation and supplies the model connection on $\mathbb R\oplus L_{\mathbb R}$. Its energy is $2\int|\omega|^2=4\operatorname{vol}(\mathbb{CP}^2)=2\pi^2$. Any abelian ASD curvature with this Chern class is its unique harmonic representative, by [F2]; the difference of two line connections with that curvature is a closed imaginary one-form. It is exact since $H^1=0$, so exponentiating its primitive gives an actual unitary gauge comparison. The complex line bundle itself is fixed by $c_1$ through [F1], so this is an actual bundle-and-connection isomorphism. This proves the full uniqueness assertion, not just a curvature-norm equality. [F1, F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 **The involution and invariant regularity.** Complex conjugation is an isometry, preserves the reversed four-orientation, and pulls $\omega$ to $-\omega$. It acts on the tautological line by vector conjugation, an antiunitary lift preserving its Chern connection. Act by $-1$ on the parallel real summand, making the resulting rank-three involution orientation preserving. At a real point its eigenvalues are $(-1,1,-1)$, so its surface isotropy is a rotation by $\pi$. Its fixed axis there is the real tautological line on $\mathbb{RP}^2$; its orientation line is the nontrivial tautological double cover. Since $o_{\mathbb{RP}^2}$ is that same line, the sheet system $\Delta=o_\Sigma\otimes o_Q$ is trivial. The involution acts as $-1$ on the one-dimensional parallel zero space and there are no first or second deformation spaces by step 3.1. Taking invariants therefore makes all three zero. The quotient connection is irreducible and its gauge-fixed operator is invertible, so it is regular and isolated. Its energy is half the lifted energy, $\pi^2$, or normalized action $1/8$. [F1, F3, step 1.1, step 3.1, step 4.1, construct, algebra]

6.1 **Uniqueness of the quotient and its determinant-one marking.** Any equivariant connection with the stipulated lifted Pontryagin number is the connection of step 4.1. Its parallel real axis is unique. An involution covering conjugation must reverse it: preserving it would give an orientation-preserving complex line isomorphism between $L$ and its conjugate pullback, whereas conjugation acts by $-1$ on $H$ and $c_1(L)\ne0$. Its plane lift is therefore antiunitary. Two connection-preserving antiunitary lifts differ by a constant plane phase; conjugation by a constant phase changes that difference by its square, so a square root makes the lifts equivalent. It remains to check the allowed determinant-one quotient. The complement of the real locus retracts to the isotropic conic: for $z=x+iy$ not real, its oriented plane has normal $(x\times y)/|x\times y|$, and damping the trace-free part of the positive Gram form on that plane to zero contracts its open disk fiber to the circular, isotropic line. Conjugation reverses this normal, so the quotient complement retracts to $\mathbb{RP}^2$ and its mod-two first cohomology is generated by the deck-cover class. The parallel adjoint gauge which is $+1$ on the real summand and $-1$ on $L$ descends to this quotient and has exactly that lifting obstruction: a unit-quaternion lift is sent to its negative by the deck involution. Composing a full comparison with it therefore kills any determinant-one lifting obstruction, as in the Hopf computation. At a fixed surface point this half-turn and the isotropy half-turn have perpendicular axes; their quaternion lifts anticommute. Its nontrivial lifting class around the meridian is therefore exactly its switch of the two sheet trivializations. These two comparison obstructions coincide, so the same composition fixes both when necessary. The resulting allowed comparison identifies the quotient connections with the prescribed trivialized $\Delta$. This proves uniqueness in the stated quotient sense. The separate smooth $S^4$ branched identification and the saddle normal-Euler sign have not been inferred from the complement retraction. [F1, F3, step 4.1, step 5.1, construct, algebra] ∎

## Source notes

The full primary §2.7 was read. The primary's cited uniqueness on the reversed projective plane is replaced by the explicit Fubini–Study curvature block, the actual general orthogonal-twist Clifford index and the automatic-cokernel argument. The already accepted ordinary index and determinant constructions are reused at their stated exact operations; no provider rereview or global Spin assumption is introduced.
