---
id: lem-genus-two-ruled-surface-wall-has-fifth-surface-count-minus-two
kind: lemma
title: Genus-two ruled-surface wall has fifth surface count minus two
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-adjoint-incidence-insertions-have-rational-cutdown-counts
  - lem-kahler-orientation-and-signed-product-quotient-gluing
  - thm-odd-admissible-ordinary-cobordisms-support-insertion-counts
  - thm-grothendieck-riemann-roch-for-projective-morphisms
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

Assume full AC. Let $C$ be a smooth projective genus-two curve, let $S=C\times\mathbb{CP}^1$, and write $\Sigma=C\times\{q\}$ and $B=\{p\}\times\mathbb{CP}^1$. Fix a degree-one line bundle $N$ on $C$ and determinant $\mathcal O_{\mathbb{CP}^1}(1)\boxtimes N$, of class $w=\Sigma+B$. In the sector $c_2=1$, with a product Kahler polarization $H_t=t\Sigma+B$ and $t>1$ sufficiently close to one, the smooth ASD moduli is the projective bundle of lines
$$\mathbb P(V)\longrightarrow J=\operatorname{Pic}^0(C),\qquad V=R^1\pi_*(\mathcal M^2\otimes N^{-1})\otimes H^0(\mathbb{CP}^1,\mathcal O(1)),$$
where $\mathcal M$ is the normalized Poincare line on $C\times J$ and $\pi:C\times J\to J$. It is compact, regular, and has real dimension ten. With $\mu(\Sigma)=-p_1(\mathbb E)/4[\Sigma]$ and the lift-dependent Donaldson orientation, its five-surface cutdown is
$$D_S^{(B,\Sigma)}(\Sigma^5)=-2.$$
Here the chamber has period ray near $\Sigma$, on the $t>1$ side of its single wall. The ASD existence near that wall is obtained by the explicit reducible normal-form construction below; a general stable-bundle-to-ASD existence theorem is not assumed.

## Facts & Assumptions

**Given:** The specified product, actual determinant connection chosen of type $(1,1)$, product metrics, and fundamental-trace energy convention.

[F1] Local elliptic Coulomb slices, finite Fredholm augmentation, ordinary point-removal compactness and quadratic contraction for the ordinary ASD equation are the local operations used in [[thm-odd-admissible-ordinary-cobordisms-support-insertion-counts]]. They do not themselves identify this ruled-surface moduli or its count. The rational incidence normalization is [[lem-adjoint-incidence-insertions-have-rational-cutdown-counts]].

[F2] Complex and Donaldson orientations compare by $(-1)^{(w^2+K_Sw)/2}$ from [[lem-kahler-orientation-and-signed-product-quotient-gluing]]. The family Chern character is computed by [[thm-grothendieck-riemann-roch-for-projective-morphisms]]. Full AC is inherited through the local elliptic and family-index constructions. [[def-axiom-of-choice]]

## Proof

1.1 **What an ASD bundle on the ruling can be.** The trace-free ASD equation on the Kahler surface has $F^{0,2}=0$ and constant scalar $i\Lambda F$, so defines an integrable unitary holomorphic bundle. Any saturated holomorphic line subbundle satisfies $\mu_{H_t}(L)\le\mu_{H_t}(E)$: in its orthogonal splitting the upper curvature block is the line curvature minus the positive square of its second fundamental form; integrating its contraction with the Kahler form gives this inequality, with equality only for a parallel split. Restrict the holomorphic bundle to a generic ruling $\{x\}\times\mathbb{CP}^1$. Its total degree is one, so its unique maximal line has degree $a\ge1$. It extends by saturation to a line bundle on $S$: the quotient is torsion free, hence its rank-one kernel in the rank-two locally free bundle is reflexive on a smooth surface and therefore a line. Write its class $a\Sigma+bB$; its quotient is $I_Z\otimes Q$ with class $(1-a)\Sigma+(1-b)B$. Chern multiplication gives
$$\operatorname{length}Z=1-a-b+2ab=(2a-1)b-(a-1)\ge0.$$
If $a\ge2$, this forces the integer $b\ge1$; if $a=1$, it forces $b\ge0$. Every case except $a=1,b=0$ has line slope $a+bt\ge1+t>(1+t)/2$, contradicting the preceding ASD inequality. Thus $a=1,b=0,Z=\varnothing$. For some $M\in J$ every possible ASD holomorphic bundle is an extension
$$0\longrightarrow L=\mathcal O_{\mathbb{CP}^1}(1)\boxtimes M\longrightarrow E\longrightarrow Q=N\otimes M^{-1}\longrightarrow0.$$
For $t<1$ even this line has slope one greater than $(1+t)/2$, so there are no ASD solutions. At $t=1$ the slope equality forces the extension to split. This classifies the actual wall limit without assuming HYM existence for arbitrary stable bundles. [F1, given, construct, algebra]

2.1 **The finite kernel bundle at the wall.** For each $M$ use the product Chern connections on $L,Q$, with their prescribed determinant and constant curvature. At $t=1$ the difference of their curvatures is primitive and of type $(1,1)$, so the split connection is actually ASD. Its effective stabilizer is the diagonal circle modulo its central two-element subgroup. Its off-diagonal holomorphic first space is
$$H^1(S;LQ^{-1})=H^1(C;M^2N^{-1})\otimes H^0(\mathbb{CP}^1,\mathcal O(1)).$$
The curve line has degree minus one, so $H^0=0$ and $h^1=2$. The displayed space consequently has complex dimension four. The opposite line has the factor $\mathcal O(-1)$ on $\mathbb{CP}^1$, whose entire cohomology vanishes. Both off-diagonal second spaces vanish. The diagonal first space is the complex tangent to $J$, of dimension two, and its only real ASD obstruction is the one-dimensional self-dual harmonic scalar line. Gauge constants are retained as the stabilizer rather than counted as a deformation. The four-dimensional off-diagonal spaces form the actual vector bundle $V$ in the Statement: vanishing of $H^0$ and the constant dimension of $H^1$ give smooth local kernel projections for the family of elliptic operators. The compact base $J$ gives a uniform inverse on the orthogonal complement after these kernels and the one real obstruction are separated. [F1, step 1.1, construct, algebra]

3.1 **Actual ASD solutions on the $t>1$ side.** Impose the Coulomb slice and project the ASD equation off the finite spaces in step 2.1. Its derivative there has the uniform bounded inverse just constructed. Contraction, with the usual quadratic multiplication estimate, solves this normal equation smoothly in the base $M$, the four complex off-diagonal coordinates $v$ and $t-1$. The holomorphic obstruction spaces are zero, so the remaining equation is exactly the diagonal real moment equation. Its leading terms, with positive constants depending smoothly on $M$, are
$$c\|v\|^2-c'(t-1)+O(\|v\|^3+|t-1|\|v\|+(t-1)^2)=0,\qquad c,c'>0.$$
The sign of $c$ is the positive second-fundamental-form square in step 1.1. The sign of the parameter term follows from the explicit line slope $1-(1+t)/2=(1-t)/2$. Circle equivariance makes its quadratic form Hermitian; changing the kernel metric absorbs its positive definite coefficients. For each unit direction in $V$, divide the equation by $t-1$ and put $v=\sqrt{t-1}\,r\hat v$. Its radial derivative is positive near the unique root $r=\sqrt{c'/c}$. The implicit theorem therefore gives one small radius for every $\hat v$ and every sufficiently small positive $t-1$, uniformly on the compact unit-sphere bundle over $J$. Quotient by the effective stabilizer circle gives precisely $\mathbb P(V)$. Its normal and radial derivatives are onto, so this ASD moduli is regular. The weight-two original stabilizer acts through its effective weight-one quotient; no additional orbifold factor one half is inserted into its count. [F1, step 1.1, step 2.1, construct, algebra]

4.1 **Exhaustion and compactness, not just a local branch.** In this determinant sector $p_1=w^2-4c_2=2-4=-2$, so an ASD connection has trace-free energy $4\pi^2$. An ordinary bubble costs $8\pi^2$ in the same normalization, and thus cannot occur. A sequence with $t\to1$ has, by local Uhlenbeck compactness, a smooth ASD limit after gauges. Step 1.1 makes that limit one of the split wall connections. The uniform slices, kernel projections and inverse from step 2.1 put all sufficiently close solutions in step 3.1's contraction coordinates; its uniqueness gives the same radial solution. If arbitrarily near $t=1$ there were a component not constructed there, this extraction would give a sequence outside those coordinates with a limit inside them, a contradiction. Thus for all sufficiently small fixed $t-1>0$ the entire ASD moduli is the displayed compact projective bundle. Its complex orientation agrees with the extension-parameter orientation: the off-diagonal equation has its Dolbeault complex orientation and its radial circle reduction is the standard complex projectivization. [F1, step 1.1, step 2.1, step 3.1, construct]

5.1 **Universal extension and the actual surface class.** Write $\zeta=c_1(\mathcal O_{\mathbb P(V)}(1))$, $m=c_1(\mathcal M)$, $n=c_1(N)$ and $h=c_1(\mathcal O_{\mathbb{CP}^1}(1))$. The tautological extension class in $V\otimes\mathcal O(1)$ gives the universal extension
$$0\longrightarrow L\otimes\mathcal O(1)\longrightarrow\mathcal U\longrightarrow Q\longrightarrow0.$$
Its two line roots are $h+m+\zeta$ and $n-m$. Thus $p_1(\operatorname{ad}\mathcal U)=(h+2m+\zeta-n)^2$, an identity also valid for this nonsplit extension by Chern multiplicativity. Normalize the principal polarization $\theta$ on $J$ by a symplectic integral basis. The Poincare class gives $\pi_*m^2=-2\theta$, while $\pi_*n=1$. Restricting to a surface $C\times\{q\}$ sets $h=0$. The preceding square then gives
$$\mu(\Sigma)=-\tfrac14\pi_*(2m+\zeta-n)^2=2\theta+\frac\zeta2.$$
This uses the actual universal extension and the adjoint insertion definition; it is not a formal guess of a generator. The nonlinear local ASD construction identifies the same projective extension class, so its adjoint universal characteristic class is the one being used in the geometric incidence cutdown. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 **The top intersection and the Donaldson sign.** Put $W=R^1\pi_*(\mathcal M^2N^{-1})$, so $V=W\oplus W$. Since the zeroth direct image vanishes, [F2] gives
$$\operatorname{ch}(W)=-\pi_*\big(e^{2m-n}(1-[p])\big)=2+4\theta.$$
Indeed $n=[p]$ and the only positive curve-degree contributions are $-2[p]+2m^2$; higher powers have curve degree greater than two. Hence $\operatorname{ch}(V)=4+8\theta$, $c_1(V)=8\theta$ and $c_2(V)=32\theta^2$. For the projective bundle of lines with the positive dual tautological class, its relation and fiber integration give
$$\pi_*\zeta^3=1,\qquad\pi_*\zeta^4=-8\theta,\qquad\pi_*\zeta^5=32\theta^2.$$
Expanding the fifth power from step 5.1 therefore yields
$$\pi_*\left(\frac\zeta2+2\theta\right)^5=\frac{32\theta^2}{32}+\frac58(-8\theta^2)+5\theta^2=\theta^2.$$
The principal polarization on the two-dimensional Jacobian has $\int_J\theta^2=2$, directly by wedging its two integral symplectic pairs. The complex-oriented count is two. Here $K_S=2B-2\Sigma$, $w^2=2$ and $K_Sw=0$, so [F2] gives Donaldson sign minus one. The resulting five-surface incidence count is minus two. The determinant-$B$ sector has index $6$ modulo eight and cannot contribute to this ten-dimensional cutdown, so this is also the indicated quotient-sum value. [F1, F2, step 4.1, step 5.1, construct, algebra] ∎

## Authoring boundary

The local wall construction supplies ASD existence only near this particular reducible product wall. It does not prove general HYM existence on K3 or elsewhere. This completes the second ruled-surface numerical seed in Muñoz's genus-two pairing matrix, with its actual insertion class and orientation. It does not prove the K3 blowup relative-invariant vectors or turn their subsequent matrix pairing into a nonzero genus-two witness without those vectors. This is new unreviewed authoring within the original nonvanishing chain; no accepted sources or workflow metadata were changed.
