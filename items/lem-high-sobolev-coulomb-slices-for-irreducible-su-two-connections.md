---
id: lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
kind: lemma
title: High-Sobolev Coulomb slices and the framed quotient of irreducible SU(2) connections
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-gauge-group-of-a-smooth-principal-bundle
  - thm-higher-order-sobolev-embedding
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-lax-milgram
  - thm-inverse-function-theorem-for-banach-spaces
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: printed pp.288–289, Theorem 6 and its proof; printed p.294 for the based quotient
---

## Statement

Assume full AC. Let $P$ be a smooth principal $SU(2)$-bundle over a connected closed Riemannian four-manifold $X$. Fix a smooth reference connection and use the corresponding finite-chart Sobolev norms. Let $\mathcal A^3$ be its affine $H^3$ space of connections, and let $\mathcal G^4$ be the group of $H^4$ sections of the bundle with fiber $SU(2)$ and conjugation transition maps. A connection is called irreducible when its stabilizer in this group is precisely the two constant central transformations. The irreducible locus is open. Its quotient $\mathcal B^*=\mathcal A^{3,*}/(\mathcal G^4/\{\pm1\})$ is a Hausdorff, second-countable smooth Hilbert manifold. At each irreducible $A$, a neighborhood is represented uniquely by a sufficiently small ball in $\ker(d_A^*:H^3(\Lambda^1\otimes\operatorname{ad}P)\to H^2(\operatorname{ad}P))$.

The corresponding quotient of $H^2(\Lambda^-\otimes\operatorname{ad}P)$ is a smooth Hilbert bundle over $\mathcal B^*$, with smooth curvature section $[A]\mapsto F_A^-$. Its slice linearization is $a\mapsto d_A^-a$. Fixing a point of $P$ above $x_0\in X$, quotienting instead by transformations with value $1$ there gives a principal $SO(3)$-bundle over $\mathcal B^*$. In local product coordinates the curvature section is its pullback. In particular its linearization has three additional kernel directions and the same cokernel; framing must not be identified with the unbased deformation problem.

## Statement references

[Donaldson, Theorem 6 and §II.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] Compact bundle Sobolev spaces are Hilbert, have smooth dense subspaces and compact inclusions $H^{j+1}\to H^j$. Smooth scalar-principal Laplace-type operators have weak higher regularity and Green inverses on their kernel complements. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F2] Higher-order Sobolev embedding in dimension four gives $H^1\to L^4$, $H^2\to L^q$ for finite $q$, $H^3\to C^0$, and $H^4\to C^1$. Products are estimated by Hölder. [[thm-higher-order-sobolev-embedding]] [[thm-holder-inequality-for-integrals]]

[F3] A bounded coercive bilinear form on a Hilbert space has a unique bounded weak inverse, and a smooth Banach map with an invertible derivative is a local smooth diffeomorphism. [[thm-lax-milgram]] [[thm-inverse-function-theorem-for-banach-spaces]]

[F4] Smooth gauge transformations are fiber-preserving principal automorphisms. In associated quaternionic coordinates their composition is multiplication, inverse is conjugate transpose, and their action is $u^*A=u^{-1}Au+u^{-1}du$. [[def-gauge-group-of-a-smooth-principal-bundle]]

[A1] Full AC supplies the analytic prerequisites, subsequence extractions and countable atlas selections. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC and the bundle, norms, Sobolev classes and irreducibility convention in the Statement.

1.1 **The Sobolev group and action.** On each finite chart the weak Leibniz formula and [F2] give bounded multiplication $H^3\times H^3\to H^3$, $H^3\times H^2\to H^2$ and $H^3\times H^1\to H^1$. For the first estimate, a derivative of order three has either one undifferentiated $L^\infty$ factor and one $L^2$ factor, or derivatives of orders one and two, both in $L^4$; all lower terms have the same bounds. For the second, the second derivatives use $D^2f\in L^4$, $g\in L^4$, or $Df,Dg\in L^4$, or $f\in L^\infty$, $D^2g\in L^2$. For the third use $Df,g\in L^4$. Smooth approximation from [F1] proves the weak formulas. The same reasoning gives the $H^4$ algebra and $H^4\times H^3\to H^3$. Matrix exponential and its local inverse logarithm converge in these Banach algebras on norm-small balls; the logarithm of an $SU(2)$ matrix near $1$ is in $\mathfrak{su}(2)$, by unitary diagonalization or its two-eigenvalue formula. Thus multiplication translates the exponential charts to a smooth Hilbert group structure on $\mathcal G^4$. Membership in the unit-quaternion bundle is closed under $H^4$ limits, since convergence is uniform. The formula in [F4] and the product estimates make its action on $\mathcal A^3$ smooth. All constructions agree on overlaps because transition maps act by conjugation. [F1, F2, F4, A1, construct, algebra]

2.1 **The covariant scalar inverse, including nonsmooth centers.** A weak $H^1$ parallel adjoint section is actually $H^4$: the equation $dv=-[A,v]$ and the multipliers $H^3\cdot H^j\subset H^j$, $j=1,2,3$, proved in step 1.1 successively give $v\in H^2,H^3,H^4$ in nested charts. Thus it is $C^1$ and is determined by its value at one point, since $A$ is continuous and the ordinary linear transport equation has a unique solution on each piecewise smooth path. A nonzero parallel adjoint section exponentiates to a noncentral stabilizer, and the imaginary part of any noncentral stabilizer is such a section. Thus irreducibility is equivalent to $\ker d_A=0$. There is then an estimate $\|v\|_{H^1}\le C_A\|d_Av\|_2$: otherwise take unit $H^1$ sections with $d_Av_j\to0$. The bounded coefficient $A$ and the identity $dv_j=d_Av_j-[A,v_j]$ imply that an $L^2$ convergent subsequence supplied by [F1] is Cauchy in $H^1$. Its unit limit is parallel, a contradiction. Therefore $(d_Av,d_Aw)_2$ is coercive on $H^1$, so [F3] solves $d_A^*d_Av=f$ uniquely weakly for $f\in H^2$. Relative to a smooth reference connection this is a scalar-principal smooth Laplacian with lower terms $A\nabla v$, $(\nabla A)v$ and $A^2v$. Starting with $v\in H^1$, these terms are $L^2$: use $A\in L^\infty$ and $\nabla A,v\in L^4$. [F1] gives $v\in H^2$. The products of two $H^2$ functions lie in $H^1$, because each differentiated term uses $L^4\cdot L^4\subset L^2$; together with step 1.1 this makes the lower terms $H^1$ and gives $v\in H^3$. They are now $H^2$ by $H^3\cdot H^2\subset H^2$, giving $v\in H^4$. At each stage the stated estimates and the weak inverse bound control the new norm by $\|f\|_{H^2}$. Consequently $d_A^*d_A:H^4\to H^2$ is a bounded isomorphism. [F1, F2, F3, step 1.1, construct, algebra]

2.2 **Control of arbitrary connecting gauges.** If $B=u^*A$ with $A,B$ in a bounded $H^3$ set, then in fixed local frames $du=uB-Au$. The compact target gives $|u|\le C$, so $A,B\in C^0$ first bound $u$ in $W^{1,\infty}$. Differentiating once gives an $H^2$ bound from $\nabla A,\nabla B\in L^2$. Step 1.1 then bounds $uB-Au$ in $H^2$, giving $u\in H^3$, and its $H^3$ algebra bound gives $u\in H^4$, uniformly on that bounded set. These statements use finitely many nested charts and a partition of unity, so do not require a trivial bundle. If $A_j\to A$, $B_j\to B$ in $H^3$ and $B_j=u_j^*A_j$, compactness [F1] gives a subsequence $u_j\to u$ in $H^3$. The equation and the algebra bound then make $du_j\to du$ in $H^3$, hence $u_j\to u$ in $H^4$. Uniform convergence preserves $SU(2)$ and the transition identities. The limit is an actual gauge with $B=u^*A$. In particular, for $A_j,B_j\to A$ irreducible the limit is $1$ or $-1$, so every such sequence of gauges is eventually close to the central stabilizer after a subsequence. [F1, F2, step 1.1, construct, algebra]

3.1 **Local coordinates.** Put $S_A=\ker d_A^*\subset H^3(\Lambda^1\otimes\operatorname{ad}P)$. Every $b\in H^3$ decomposes uniquely as $b=a+d_Av$, where $v=(d_A^*d_A)^{-1}d_A^*b\in H^4$ and $a\in S_A$. Both projections are bounded by step 2.1. The map $(a,v)\mapsto e^v{}^*(A+a)$ from $S_A\times H^4$ to $\mathcal A^3$ is smooth by step 1.1 and has derivative $(a,v)\mapsto a+d_Av$ at zero. The inverse theorem [F3] gives a smooth product chart near $A$. Its uniqueness controls gauge transformations close to $1$; multiplication by $-1$ gives the identical action near $-1$. [F3, step 1.1, step 2.1, construct, algebra]

4.1 **The quotient is a manifold.** Shrink the slice ball in step 3.1. If no sufficiently small ball had unique representatives modulo the center, two distinct representatives tending to $A$ would be connected by gauges. Step 2.2 brings a subsequence of those gauges into one of the two inverse-theorem charts, where step 3.1 forces the representatives equal. Similarly irreducibility is open: if reducible $A_j\to A$ irreducible, choose parallel adjoint sections $v_j$ normalized by $|v_j(x_0)|=1$. Transport preserves their pointwise norm; $dv_j=-[A_j,v_j]$ and the bootstrap of step 2.2 give an $H^4$ convergent subsequence with a nonzero parallel limit, contrary to step 2.1. Distinct orbits can be separated: otherwise choose $A_j\to A$, $B_j\to B$ joined by gauges, and step 2.2 would join $A$ to $B$. The quotient map is open, since a saturation is a union of translates of an open set. Images of a countable base of the separable affine Hilbert space give a countable base of the quotient. Separability follows by finite-chart smooth approximation and rational polynomial approximations on compact coordinate sets. Slice transition maps are smooth by the local inverse in step 3.1, with a fixed connecting gauge inserted when the slice centers differ. Thus these slices define the asserted Hausdorff second-countable smooth Hilbert manifold. [F1, step 2.1, step 3.1, step 2.2, construct, algebra]

5.1 **Equation bundle and section.** On the slice product chart use its unique near-identity gauge to identify the target fibers with the fixed $H^2$ space. Products $H^4\cdot H^2\to H^2$ from step 1.1 make these identifications smooth; uniqueness makes their transition maps satisfy the cocycle identity. The formula $F_{A+a}^-=F_A^-+d_A^-a+(a\wedge a)^-$ defines a smooth map $H^3\to H^2$, with derivative $d_A^-a$ at zero, where the conventional coefficient of the bilinear bracket is included in $a\wedge a$. These formulas are gauge-equivariant first on smooth sections and then by approximation. They therefore give the stated bundle and section on the quotient. [F1, F4, step 1.1, step 3.1, step 4.1, construct, algebra]

6.1 **The framed quotient.** Evaluation at $x_0$ is smooth on $\mathcal G^4$ by [F2]. It is onto $SU(2)$: write a desired value as $e^\xi$ and exponentiate a smooth adjoint section supported in a bundle chart and equal to $\xi$ at $x_0$. This construction also supplies local smooth sections of evaluation near any value. Its kernel is the based gauge group $\mathcal G^4_0$. Hence quotienting a local slice product first by that kernel leaves $SU(2)/\{\pm1\}=SO(3)$ as its fiber over the unbased slice; the change-of-slice gauges supply its principal transition maps. The target bundle is the pullback of the unbased target bundle. In these product trivializations the curvature section is independent of the $SO(3)$ coordinate. Its differential therefore has the same image and cokernel and kernel equal to the unbased kernel plus a three-dimensional tangent space. This proves all assertions and explicitly separates the two quotient conventions. [F2, F4, step 3.1, step 4.1, step 5.1, construct, algebra] ∎

## Source notes

The full proof of Donaldson's Theorem 6, printed pp.288–289, and the based-quotient orientation construction on printed p.294 were read. The argument here supplies the scalar inverse and arbitrary-gauge compactness at the actual $H^3/H^4$ regularity, including nonsmooth slice centers. It establishes slices and the equation bundle; transversality, determinant-line orientability and existence of instantons require further arguments.
