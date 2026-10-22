---
id: lem-reducible-charge-one-su-two-connections-admit-controlled-projective-links
kind: lemma
title: Reducible charge-one SU(2) connections and their controlled projective links
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - thm-asd-deformation-complex-index-formula
  - lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
  - lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable
  - thm-first-chern-class-classifies-complex-line-bundles
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-de-rham-theorem
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - lem-fredholm-splitting-and-parametrix
  - thm-inverse-function-theorem-for-banach-spaces
  - thm-implicit-function-theorem-for-banach-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: printed pp.287–292, reducible classification, circle slice, and equivariant Kuranishi perturbation; printed280–281 for the cut projective links
---

## Statement

Assume full AC. Let $X$ be a closed simply connected oriented smooth Riemannian four-manifold with positive-definite intersection form, and $E$ a Hermitian rank-two bundle with fixed unit determinant and $c_2(E)[X]=-1$. Use the equation $F_A^-=0$ and the unbased $H^3/H^4$ configuration quotient. The actual smooth reducible solution orbits are finite. Sending such a solution to its pair of parallel eigenlines gives an injection into the unordered pairs $\{x,-x\}$ in $H^2(X;\mathbb Z)$ with $x^2[X]=1$. Distinct pairs arising in this way are orthogonal, so there are at most $b_2(X)$ reducible solution orbits.

At each such orbit there are invariant Coulomb-slice coordinates with effective circle stabilizer. The finite obstruction map is a smooth circle-equivariant map $\phi:\mathbb C^{3+p}\to\mathbb C^p$, with $\phi(0)=D\phi(0)=0$ and scalar circle action of the same nonzero weight on both spaces. Arbitrarily small $C^1(H^3,H^2)$, bounded $H^3$-valued, equivariant perturbations supported near that orbit can be chosen so that their zero set near it, before taking the circle quotient, is equivariantly diffeomorphic to a neighborhood of $0$ in $\mathbb C^3$. After quotient it is a cone on $\mathbb{CP}^2$, with smooth irreducible punctured part. The finitely many constructions may have disjoint supports.

Deleting a smaller cone neighborhood leaves a smooth boundary link diffeomorphic to $\mathbb{CP}^2$. An orientation of the surrounding regular moduli manifold induces one of its two orientations; the result does not assert a common sign for distinct links. This is a local preparation operation and does not assert a small-instanton end or a global compactification.

## Statement references

[Donaldson, §§I.2 and II.1–II.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The sign and the charge are fixed by [[def-asd-moduli-fredholm-index-and-lattice-setup]]. The real gauge-fixed ASD index is five here, and the proof constructs its Clifford symbol and real kernel/cokernel realization. [[thm-asd-deformation-complex-index-formula]]

[F2] The high-Sobolev matrix algebra, arbitrary connecting-gauge compactness and local inverse construction are proved in [[lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections]]. The proof's compactness of arbitrary gauges does not use irreducibility. Smooth scalar-principal Laplace operators have smooth finite kernels and Green inverses on their orthogonal complements. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F3] The first Chern class classifies line bundles on this compact smooth finite-CW-type base. Harmonic forms represent de Rham classes, and integral Chern classes map to the specified curvature classes. [[thm-first-chern-class-classifies-complex-line-bundles]] [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]] [[thm-de-rham-theorem]] [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[F4] Simple connectivity gives $H_1(X;\mathbb Z)=0$; the cohomology UCT consequently makes $H^2(X;\mathbb Z)=\operatorname{Hom}(H_2(X;\mathbb Z),\mathbb Z)$ free of finite rank, using the finite CW model. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]

[F5] Bounded Fredholm splittings and the inverse/implicit theorems are supplied by [[lem-fredholm-splitting-and-parametrix]], [[thm-inverse-function-theorem-for-banach-spaces]] and [[thm-implicit-function-theorem-for-banach-spaces]].

[F6] The real determinant orientation on the regular irreducible quotient is supplied by [[lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable]]. Full AC is inherited through the analytic, characteristic-class and finite-model suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC and the manifold, bundle, sign, quotient and charge of the Statement.

1.1 **Parallel splitting and stabilizer.** A noncentral stabilizer has a nonzero imaginary quaternionic part, a parallel skew-Hermitian trace-free endomorphism; this follows directly by differentiating the stabilizer equation $du=uA-Au$. Normalize that endomorphism to square $-1$. Its eigenvalues are $i,-i$, giving smooth parallel lines $L,L^{-1}$ and the splitting $E=L\oplus L^{-1}$. The line curvature is harmonic: it is closed by the abelian Bianchi identity and self-dual by $F_A^-=0$, so $d^*F=-*dF=0$. The total curvature polynomial is $(1+x)(1-x)=1-x^2$, where $x=c_1(L)$, hence [F3] gives $x^2[X]=1$. In particular the curvature is nonzero. Any parallel stabilizer commutes with it, whose nonzero diagonal value at a point has centralizer precisely the diagonal circle; parallel transport then determines the stabilizer from that value. Conversely all constant diagonal phases relative to the parallel splitting are stabilizers. Thus the stabilizer is exactly $S^1$, with central kernel $\{\pm1\}$ in its slice action. [F1, F2, F3, given, construct, algebra]

2.1 **Uniqueness and finiteness.** If two such solutions give the same $x$, their lines are isomorphic by [F3]. A continuous isomorphism may be smooth-approximated as a line homomorphism and normalized by its positive pointwise norm; uniform approximation preserves nonvanishing. Thus choose a smooth unitary isomorphism and extend it on the dual line so its determinant is one. The two induced unitary line connections now have equal harmonic curvature by [F3], since they represent the same class. Their difference is $i\alpha$ with $d\alpha=0$, and $H^1_{\mathrm{dR}}(X)=0$ by [F3]–[F4], so $\alpha=df$ and the unitary gauge $e^{if}$ identifies them (with the inverse sign if the opposite gauge convention is used). Extending on the dual identifies the full solutions. Interchanging the eigenlines replaces $x$ by $-x$ and no other ambiguity occurs. By [F4] there is an integral finite basis. Positive definiteness bounds the Euclidean square of the coordinate vector by a constant times $x^2[X]$, so only finitely many integral vectors have norm one. For two distinct unordered pairs, Cauchy–Schwarz gives $|x\cdot y|<1$, since equality forces $y=\pm x$; integrality makes this product zero. Such mutually orthogonal nonzero vectors are linearly independent, proving the bound $b_2(X)$. [F1, F3, F4, step 1.1, construct, algebra]

2.2 **The actual reducible slice.** At a smooth reducible $A$, put $\mathfrak h=\ker d_A$, the one-dimensional real stabilizer Lie algebra. The Green inverse in [F2] gives $d_A^*d_A:H^4\cap\mathfrak h^\perp\to H^2\cap\mathfrak h^\perp$ as a bounded isomorphism. Thus $H^3$ one-forms split as $S_A\oplus d_A(H^4\cap\mathfrak h^\perp)$, $S_A=\ker d_A^*$. The action map from this product has invertible derivative and gives a local chart by [F5], exactly as in [F2]. A gauge near the circle factors uniquely locally into a circle element and an exponential from $\mathfrak h^\perp$, by applying the same inverse theorem to multiplication in the $H^4$ gauge group. The compactness proof for arbitrary connecting gauges in [F2] shows that any gauges joining two slice points tending to $A$ approach this compact circle after a subsequence. Shrinking an invariant slice ball therefore makes two representatives equivalent exactly when the circle identifies them. The slice norm can be taken from the connection $A$, so is circle invariant. This supplies the quotient slice $S_A/S^1$, rather than applying an irreducible slice theorem at a reducible point. [F2, F5, step 1.1, construct, algebra]

3.1 **Kernel, obstruction and their circle weights.** At this solution the sequence $d_A$, $d_A^-$ is a complex, since $d_A^-d_Av=[F_A^-,v]=0$. Its finite harmonic spaces $H_A^0,H_A^1,H_A^2$ are smooth by the Clifford-square Green construction in [F1]–[F2]. The diagonal real summand of $\mathfrak{su}(E)$ has $H_A^1=H^1(X;\mathbb R)=0$ and $H_A^2=H^-(X;\mathbb R)=0$ by simple connectivity and positive definiteness; these identifications follow from the ordinary Hodge decomposition in [F3]. Its $H_A^0$ is $\mathbb R$. The off-diagonal summand is the complex line $L^2$, on which $\operatorname{diag}(e^{i\theta},e^{-i\theta})$ acts by multiplication by $e^{2i\theta}$. The covariant derivative is complex linear there. Hence $H_A^1,H_A^2$ are complex spaces with this same scalar weight. The adjoint equation splits orthogonally into these harmonic terms: the images of $d_A$ and $(d_A^-)^*$ are orthogonal because $d_A^-d_A=0$, so the square norm of their sum is the sum of their square norms. Thus the gauge-fixed cokernel is $H_A^0\oplus H_A^2$, its kernel is $H_A^1$, and its index is $\dim_\mathbb R H_A^1-\dim_\mathbb R H_A^0-\dim_\mathbb R H_A^2=5$, so their complex dimensions are $3+p,p$ for some $p\ge0$. Equivalently the slice operator has real index six, the additional dimension being the stabilizer contribution, not the irreducible index. [F1, F2, F3, F4, step 1.1, step 2.2, algebra]

4.1 **Equivariant finite reduction.** Split $S_A=H_A^1\oplus S'$ and the target as $R\oplus H_A^2$, where $R$ is the range of $d_A^-$. Choose orthogonal splittings for invariant norms; they commute with the circle. The restriction $d_A^-:S'\to R$ is a bounded isomorphism by [F5]. The map $a\mapsto(u,z)=(\operatorname{pr}_R\Phi(A+a),\operatorname{pr}_{H_A^1}a)$ consequently has an invertible derivative at zero. Its local inverse is circle equivariant by uniqueness. In these coordinates $\Phi=(u,g(u,z))$, with $g$ smooth, $g(0,0)=0$ and $Dg(0,0)=0$. Thus its zeros are $u=0$, $\phi(z)=g(0,z)=0$. This does not drop the possible dependence of $g$ on $u$ away from the zero locus. The obstruction target consists of smooth forms, so is contained in $H^3$. [F1, F2, F5, step 2.2, step 3.1, construct, algebra]

5.1 **A controlled perturbation.** Choose a complex-linear epimorphism $\alpha:H_A^1\to H_A^2$; when $p=0$ use the zero map to the zero space. It is circle equivariant by step 2.2. Choose invariant radial smooth bumps $\chi(u,z)$ supported within the coordinate neighborhood and equal to one near zero, and $\beta(|z|^2/\eta^2)$ equal to one near zero and zero for $|z|\ge\eta$. Add the section with range component zero and obstruction component $\chi(u,z)\eta\beta(|z|^2/\eta^2)\alpha z$. It is smooth, equivariant and valued in the fixed smooth finite-dimensional obstruction space. Its derivative in the slice has finite-dimensional range, hence is compact into $H^2$, and it is smooth into $H^3$. As $\eta\to0$ its uniform section norm is $O(\eta^2)$ and its $C^1$ norm is $O(\eta)$: a derivative of the rescaled bump contributes at most $C|z|/\eta^2$, paired with $\eta\alpha z$ on $|z|\le\eta$; derivatives of the fixed coordinate changes and fixed bump are bounded after one shrink. Extend equivariantly from the slice and by zero outside its invariant neighborhood, using step 2.2. Distinct reducible orbits have disjoint neighborhoods, since there are finitely many and their orbit relation is closed by [F2]. Thus these perturbations may be made simultaneously with disjoint supports. [F2, F5, step 2.1, step 2.2, step 3.1, step 4.1, construct, algebra]

6.1 **The cone and its smooth cut.** Near zero the perturbed obstruction is $\phi(z)+\eta\alpha z$. Its derivative at zero is $\eta\alpha$, onto when $p>0$; for $p=0$ its zero locus is already the whole $H_A^1=\mathbb C^3$. Split $H_A^1=\ker\alpha\oplus W$ complex linearly, with $\dim_\mathbb C\ker\alpha=3$. The implicit theorem [F5] gives the perturbed zero locus as an equivariant smooth graph over a small ball in $\ker\alpha$, since the inverse and equation are equivariant and the solution in $W$ is unique. Its only fixed point is zero, and the effective scalar action is free away from zero. The quotient is therefore $[0,\varepsilon)\times\mathbb{CP}^2$ with its entire zero-radius face collapsed: the map is $k\mapsto(|k|,[k])$, and on $k_j\ne0$ the ratios $k_i/k_j$ give the usual smooth projective charts. Cutting at $|k|=\delta>0$ gives a smooth projective boundary. An orientation from [F6] on the punctured regular quotient fixes its induced boundary orientation by the outward-normal convention. Comparison with complex projective orientation gives one sign for that link, with no conclusion that signs for different reducibles agree. This proves all asserted local and finiteness conclusions without asserting a global end theorem. [F5, F6, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra] ∎

## Source notes

Donaldson's full reducible discussion on printed pp.287–292 and the method-of-proof passage on pp.280–281 were read. The source explicitly permits unknown projective-link orientation signs; it uses the signature inequality to determine enough norm-one vectors. The proof here retains the $u$ dependence in the genuine Fredholm normal form, and perturbs only its finite obstruction component. It classifies actual reducibles injectively; it does not invoke an unproved classification of all $SU(2)$ bundles to assert that every possible line splitting occurs in a fixed bundle.
