---
id: lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four
kind: lemma
title: Order-two ASD bubbles have relative Fredholm index loss at least four
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-uhlenbeck-compactness-and-removable-singularities
  - thm-fredholm-index-is-stable-under-compact-perturbations
  - thm-fredholm-index-is-locally-constant
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - cor-homology-of-spheres
  - thm-higher-order-sobolev-embedding
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Knot homology groups from instantons
      url: https://people.math.harvard.edu/~kronheim/yaft.pdf
      locator: PDF36–37, minimum framed bubble dimension; PDF74–75, its role in low-index compactness; finite equivariant argument reconstructed locally
---

## Statement

Assume full AC. Let $\Gamma=\mathbb Z/2$ act on $S^4=\mathbb R^4\cup\{\infty\}$ by rotation by $\pi$ in one normal two-plane, with fixed two-sphere. Supply a smooth equivariant $SO(3)$ bundle whose isotropy on that fixed sphere is a rotation by $\pi$. If $A$ is any nonflat equivariant anti-self-dual connection, its unbased invariant ASD complex has zero obstruction space and kernel dimension at least three. The corresponding flat reference bundle with constant fiber action has unbased index $-1$. Consequently the relative ASD index of this bubble against that flat reference is at least four.

At an ordinary point the analogous relative index loss is at least eight. These conclusions include every nonflat charge, not just BPST charge one.

More precisely, suppose two Fredholm ASD deformation operators on a compact four-orbifold, or on a cylinder with identical invertible limiting Hessians, have bundles identified away from one standard ball or one such order-two quotient ball. Form the comparison bundle $Q$ on $S^4$ (respectively $S^4/\Gamma$) by gluing their local ball bundles with that boundary identification, and let $Q_0$ be the constant reference. Then their index difference is exactly $\operatorname{ind}D_Q-\operatorname{ind}D_{Q_0}$. Thus when $Q$ is an actual nonflat ASD bubble the preceding lower bounds apply. The result does not assume that every degeneration has such a comparison until point-removal and topological identification have been proved for that degeneration.

## Statement references

[Kronheimer–Mrowka, PDF36–37 and74–75](https://people.math.harvard.edu/~kronheim/yaft.pdf)

## Facts & Assumptions

[F1] Invariant local Sobolev, elliptic and Fredholm constructions, and exact Fredholm cylinder domains are proved in [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]].

[F2] Index is unchanged by compact zero-order perturbations and is locally constant on a continuous Fredholm family. [[thm-fredholm-index-is-stable-under-compact-perturbations]] [[thm-fredholm-index-is-locally-constant]]

[F3] Ordinary finite-energy point removal and smooth bundle comparison are supplied by [[lem-uhlenbeck-compactness-and-removable-singularities]]. Hodge theory identifies the ordinary scalar harmonic one- and two-form spaces on the sphere with their zero cohomology groups. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]] [[cor-homology-of-spheres]]

[F4] Sobolev regularity and smooth parallel-transport dependence apply on the finite invariant charts. Full AC is inherited through the analytic and Hodge constructions. [[thm-higher-order-sobolev-embedding]] [[def-axiom-of-choice]]



## Proof

**Given:** The actual local bundles and identifications in the Statement. Use $D=d_A^*\oplus\sqrt2d_A^+$; the positive target normalization does not alter its index.

1.1 **Finite block rotation proves the relative index identity.** First make the two operators and the comparison sphere operator have matching metrics and principal coefficients on their identified collars. This is legitimate: interpolate positive metrics on a slightly larger compact collar, preserving the ends. Their ASD Clifford symbols remain elliptic, and [F1] keeps every member Fredholm, so [F2] preserves index. Smooth connections and zero-order coefficients may be interpolated there for the same reason. Cut the two original bundles into the common outside piece and the ball piece. By definition $Q$ uses the discrepant clutching map $g$ and $Q_0$ uses the identity. On matched annuli compare the direct sums of the original-plus-reference pieces with the limiting-plus-$Q$ pieces by the rotation $U_\theta=\left(\begin{smallmatrix}\cos\theta&-\sin\theta\,g^{-1}\\ \sin\theta\,g&\cos\theta\end{smallmatrix}\right)$, where $\theta$ goes smoothly from zero to $\pi/2$. At its two constant ends this respectively keeps or swaps the corresponding local pieces, so it glues with the identity outside and the exchanged ball identifications inside. This is an actual bounded invertible map of the direct-sum Sobolev section spaces; on the collars it mixes sections at the matched points of the two pieces, and on the inner balls it exchanges the pieces. Apply the same map to the range bundles, acting only in the adjoint-bundle factor. Clifford principal multiplication commutes with $g$ and the scalar rotation, so conjugation changes the direct-sum operator only by a smooth zero-order term supported on the matched compact collars. Its terms are the derivatives of $\theta,g$ and the already smooth lower-coefficient differences. All matrices commute with the given finite action because the clutching map is equivariant and $\theta$ is radial. The difference is compact $H^k\to H^{k-1}$ by local Rellich [F1]. Therefore [F2] gives $\operatorname{ind}D_{\mathrm{new}}+\operatorname{ind}D_{Q_0}=\operatorname{ind}D_{\mathrm{old}}+\operatorname{ind}D_Q$. The same proof on a cylinder has unchanged end inverses and compactly supported remainders. This proves the exact comparison without a numerical orbifold index formula. [F1, F2, given, construct, algebra]

1.2 **The round bubble is unobstructed in the invariant space.** On unit round $S^4$ the direct expansion of the gauge-fixed square on self-dual two-forms gives $2d_A^+(d_A^+)^*=\nabla_A^*\nabla_A+4-2W^++\mathcal T(F_A^+)$. The scalar curvature term is $s/3=4$; the mixed gauge-curvature term is its self-dual projection, so vanishes for this ASD connection. Since $W^+=0$, integration gives $2\|(d_A^+)^*\eta\|_2^2=\|\nabla_A\eta\|_2^2+4\|\eta\|_2^2$. Averaging a weak inverse over $\Gamma$ preserves the equation, so the invariant obstruction space is also zero, with no assumption of transversality. There is no infinitesimal stabilizer: a nonzero parallel adjoint section splits off an oriented axis and leaves an abelian line-curvature form, which is closed and ASD and hence harmonic. On $S^4$ that two-form is zero by [F3], so the full curvature would be zero, a contradiction. Thus $H_A^0=H_A^2=0$ in both the ordinary and invariant ASD complex, and its real unbased index equals its harmonic first-space dimension. The displayed square identity may be checked in a normal orthonormal frame: commute the two derivatives in $d^+d^{+*}$; tangent curvature contributes $(s/3)I-2W^+$ and the adjoint curvature contributes only $\mathcal T(F^+)$, since self-dual and anti-self-dual quaternionic actions commute. It is the same sign-reversed Clifford expansion as the ordinary ASD module, not an appeal to its numerical index on a singular quotient. [F1, F3, F4, algebra]

2.1 **Three actual independent invariant directions.** In the Euclidean chart of the bubble, translations in the two tangent directions of the fixed plane and positive dilation commute with $\Gamma$, extend conformally over the sphere, and preserve anti-self-duality. Pulling the bundle and connection along each such isotopy gives actual equivariant solution families on identified bundles: parallel transport in the parameter direction identifies the pullback bundles, and the ordinary differential equation commutes with the finite action. Their infinitesimal classes are therefore invariant ASD tangent vectors. They are independent modulo gauge. Otherwise the corresponding nonzero affine vector field $V=a+b y$, $a$ in the fixed plane and $b\in\mathbb R$, would preserve the finite smooth energy measure $\mu=|F_A|^2dy$ on $\mathbb R^4$, because an infinitesimal gauge leaves that measure unchanged. Vanishing Lie derivative implies invariance under the complete affine flow. If $b=0$, nonzero translation invariance forces the measure of every bounded transverse slab to repeat over infinitely many disjoint translates; finite mass then makes it zero. If $b\ne0$, the flow is dilation about $-a/b$; equal masses on its infinitely many disjoint concentric annuli force zero mass away from that center. A smooth nonzero curvature measure cannot be supported at one point. Both contradict nonflatness. Thus the unbased invariant kernel dimension is at least three. At an ordinary point all four translations and dilation give the same argument with five independent vectors. No charge-one classification is used. [F1, F3, F4, step 1.2, construct, algebra]

3.1 **The reference stabilizer and the exact lower losses.** On the constant equivariant flat sphere bundle, harmonic first and second deformation spaces are zero by [F3], before and after taking invariants. Its invariant harmonic zero-forms are precisely the constant adjoint vectors fixed by the fiber rotation, a real line. Hence its gauge-fixed unbased index is $0-1-0=-1$. At an ordinary point that fixed space is all $\mathfrak{su}(2)$, giving index $-3$. Steps 1.2 and 2.1 therefore give $\operatorname{ind}D_Q-\operatorname{ind}D_{Q_0}\ge3+1=4$ in the singular case and at least $5+3=8$ in the ordinary case. Combining with step 1.1 proves all asserted relative index inequalities. The additional one or three dimensions are the actual reference stabilizer contribution; they have not been silently deleted by replacing an unbased index with a framed one. [F1, F3, step 1.1, step 1.2, step 2.1, algebra] ∎

## Source notes

The actual primary passages read are the complete minimum-dimension discussion at the end of §2.7, PDF36–37, and the low-index compactness and monotonicity discussion in §3.5, PDF74–76, of the authenticated118-page instanton paper. Its holomorphic inequalities and closed singular index formula are not imported as proofs. The local index comparison is instead proved by an explicit finite equivariant block rotation, and the sufficient lower loss by actual conformal symmetry directions and round-sphere cokernel vanishing. Establishing actual orbifold point removal, topological comparison, perturbed energy bounds and genericity at limiting levels remains necessary before applying this result to all trajectory sequences.
