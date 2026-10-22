---
id: lem-realized-periodic-whitney-index-is-morse-chern-plus-marks
kind: lemma
title: "The index of an actual periodic Whitney strip is its Morse Chern evaluation plus marks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index
  - lem-balanced-periodic-domain-morse-chern-evaluation
  - lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
  - lem-symmetric-product-quotient-determinant-has-vandermonde-ramification
  - lem-symmetric-product-divisor-intersections-and-point-movement
  - thm-parametric-transversality
  - lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain
  - lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding
proof_strategy: direct
justified_by: []
axiom_use: "Countable choice through finite-stratum smooth transversality and the physical strip-index supplier. All normal-clutching and signed intersection counts concern compact finite data."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Theorem4.9 and Section9.3. Here the periodic physical index is compared directly by signed root incidence, without importing move invariance."
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology"
      url: "https://arxiv.org/pdf/math/0502404"
      locator: "Section4.2, printed979–981, motivates the translation count. The argument below uses signed degrees and includes negative discriminant incidences rather than assuming a positive projection to the surface."
---

## Statement

Assume countable choice. In the finite balanced Morse Heegaard data of the Chern-evaluation lemma, let $u$ be an actual continuous Whitney class from a generator $\mathbf x$ to itself in $\operatorname{Sym}^m\Sigma$, $m\ge1$. Let $P=D(u)$ be its signed region domain. Use the standard complex bundle from $\operatorname{Sym}^m(j)$, or an actual supplied homotopy of complex structures to it preserving the totally real boundary tori and the specified transverse end caps. The protected nearly symmetric tame class has such a homotopy. Let $\mu(u)$ be the actual fixed-end real Fredholm index in this class, before source translation. Then
$$\mu(u)=e(P)+2n_{\mathbf x}(P)=\langle c_1(\mathfrak s_{\mathbf w}(\mathbf x)),H(P)\rangle+2\sum_l n_{w_l}(P).$$
This is an identity for every realized class, including negative domains, negative discriminant incidences and coincident incoming and outgoing generators. It asserts neither that every formal periodic domain is realized nor that a domain determines a literal homotopy class. It does not assume a positive or holomorphic incidence representative.

## Facts & Assumptions

**Given:** A realized periodic Whitney class, the actual balanced Morse data, product transverse end frames, and the specified standard complex bundle or actual boundary-preserving comparison homotopy.

[F1] The actual strip Fredholm index is its squared determinant boundary winding, is invariant under smooth relative homotopies, and has the usual matching-end additivity. [[lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index]]

[F2] In ordered root coordinates the derivative of the symmetric quotient has determinant the Vandermonde product. Squaring the determinant eliminates the sign of a root permutation. [[lem-symmetric-product-quotient-determinant-has-vandermonde-ramification]]

[F3] Point-divisor intersections are signed local degrees and give the region multiplicities. They are invariant under moving the test point within a region and under relative homotopies. [[lem-symmetric-product-divisor-intersections-and-point-movement]]

[F4] Finite-dimensional transversality under countable choice permits finitely many transverse simple-double-root incidences and avoidance of higher coincidences after the boundary-preserving smoothing in [F6]. [[thm-parametric-transversality]] [[def-countable-choice]]

[F5] The actual Morse determinant Chern evaluation is $e(P)+2n_{\mathbf x}(P)-2\sum_l n_{w_l}(P)$. [[lem-balanced-periodic-domain-morse-chern-evaluation]]

[F6] The finite collar construction gives boundary-preserving smoothing of continuous Whitney maps. Actual finite-ended operators with the same transverse end models have index differences equal to common-cap determinant winding differences, also for asymptotic coefficients; norm-cutting the tails preserves their index. [[lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain]] [[lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding]]

[F7] In the protected nearly symmetric tame class, the explicit Cayley contraction to the standard symmetric-product structure stays tame and keeps the Lagrangian boundary tori totally real. Joint complex frames identify the determinant windings throughout that actual homotopy. [[lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index]]

## Proof

1.1 **Use the incidence of the supplied map, not a claimed positive replacement.** Use the supplied standard complex bundle. If necessary apply the actual comparison homotopy, which preserves the squared determinant winding; for the protected nearly symmetric tame class this homotopy is [F7]. Use the boundary-preserving smoothing in [F6]. At a generator point choose a positive complex surface coordinate with the two tangent lines $\mathbb R$ and $e^{i\theta}\mathbb R$, $0<\theta<\pi$. There is a smooth orientation-preserving local map $F$ with derivative the identity carrying these two rays to the actual curve germs: in their real tangent basis set $F(xv_1+yv_2)=\alpha(x)+\beta(y)$ with the curve parameters based at zero, and apply the local inverse theorem in [F6]. Choose incoming root germs $F(ae^{\theta(s+it)})$ and outgoing germs $F(be^{-(\pi-\theta)(s+it)})$, $a,b>0$. Their source corners are acute in the straightened coordinates; no holomorphic assertion or change of the physical almost-complex data is made. Insert them in the contractible distinct-root end charts. Their derivatives decay exponentially; flattening them successively farther out changes the operator coefficients by a norm-small tail and leaves the actual index and common-cap winding unchanged by [F6]. By [F4] the interior map can be made transverse to the simple discriminant, avoiding higher coincidences. Its root incidence $S\subset(\mathbb R\times[0,1])\times\Sigma$ is an embedded oriented surface. At each simple collision its coordinates are $(z,w)=(\zeta^2,\zeta)$ or $(\zeta^2,\bar\zeta)$, according to the signed discriminant intersection. In both cases the source projection is an oriented branched cover. Denote the signed number of these incidences by $\delta(u)$. No claim is made that the projection to $\Sigma$ preserves orientation. [F1, F3, F4, F6, F7, given, construct]

2.1 **The squared root determinant gives $\mu=2e+\delta$.** Choose a surface tangent section $\xi$ with isolated zeros away from the attaching curves and their crossings. On a distinct-root tuple push forward the real root lines spanned by $\xi$ through the symmetric quotient. The square of their complex determinant is single-valued, because permuting roots changes the unsquared determinant by a sign. Around a simple collision [F2] makes its zero the discriminant coordinate, with signed winding $+1$ or $-1$. At a zero of $\xi$ of index $r$, its contribution is twice $r$ times the signed root degree there. Along a torus edge the ratio between the physical boundary determinant square and this root determinant square is the product of the squared ratios of its curve tangents to $\xi$. The end caps cancel in pairs because both generators are $\mathbf x$. Hence the boundary winding [F1] is $\delta(u)$ plus twice the tangent-section obstruction of the region chain $P$. The latter is $e(P)$: subdivide into the given finite regions, sum the interior zero indices and the curve-tangent boundary turns, and cancel paired edge turns. At a crossing the relation among the four coefficients makes the four quarter-turn contributions equal to its Euler-measure corner term. Since $\partial P$ is a sum of full curves, there is no uncancelled endpoint turn. This is the finite section-and-boundary-winding proof of the Euler obstruction, valid for signed coefficients. Thus $\mu(u)=2e(P)+\delta(u)$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 **Compute the normal clutch with its actual signs and end frames.** Give the normal plane of $S$ its orientation from the ambient four-manifold and the source orientation. Away from the collisions, projection of a vertical tangent vector identifies it with the pulled-back surface tangent plane. At $(\zeta^2,\zeta)$ the vertical vector $v$ has normal representative $-2\zeta v$ in the horizontal normal coordinate, giving a zero of index $+1$. At $(\zeta^2,\bar\zeta)$ subtract the tangent vector with parameter $\bar v$; the representative is $-2\zeta\bar v$. Here the oriented tangent plane is negative vertical, so the oriented normal plane is negative horizontal, and the zero has index $-1$. Consequently the normal clutch adds precisely $\delta(u)$ to the pulled-back tangent obstruction. Use the normal projection of source translation $\partial_s$ as a section. On a boundary arc it is a real multiple of the projected curve-tangent frame; a boundary zero is counted with half its reflected local index. At an incoming cutoff its normal representative has leading term $-\theta a e^{\theta(s+it)}$ and the cutoff is traversed with decreasing $t$, giving limiting angle change $-\theta$. At the corresponding outgoing cutoff its leading term is $+(\pi-\theta)b e^{-(\pi-\theta)(s+it)}$ and $t$ increases, giving $-(\pi-\theta)$. The higher terms from $F$ have identity first jet and tend to zero in these relative phases. Their sum is exactly $-\pi$ per common generator point, or $-1/2$ in winding units. There are $m$ such incoming/outgoing pairs. In orthogonal coordinates these are the familiar two quarter-turns; the argument does not assume the original complex angles were right angles. Summing the finite interior, reflected-boundary and cutoff windings proves that the signed relative self-intersection for a small positive source translation is $$I=e(P)+\delta(u)-m/2.$$ This half-boundary convention concerns actual reflected zeros, not an integer Euler number with unspecified end trivialization. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Translate far and retain the coincident-end corrections.** Translate a second copy of $S$ a distance $R$ along the source. For a bounded interval of positive $R$ all intersections stay in a compact region, by the exact exponential germs; an interior intersection reaching a boundary becomes the reflected pair of half-intersections. Thus $I$ is invariant. For sufficiently large $R$, the two compact cores are disjoint. In the regions meeting the other copy's core replace an exponentially close end by its constant generator cylinder, keeping the ends beyond these compact regions fixed. The signed intersection with that cylinder is its point-divisor degree [F3], with the missing end germs subtracted. A point belonging to just one end omits one acute sector of weight $1/4$. A point belonging to both ends omits two such sectors in each core count: the two core contributions are each $n_p(P)-1/2$. In that case one also counts the overlap of the two end germs. In the common straightening chart the equation on the real boundary is $a e^{\theta(s-R)}=b e^{-(\pi-\theta)s}$, with exactly one solution. If its common value is $c>0$, the difference map has derivatives $\pi c$ and $i\pi c$ in the two source directions, so this intersection is simple and positive. On the other boundary the two values have phases $e^{i\theta}$ and $-e^{i\theta}$, so there is none. Its boundary weight is $+1/2$. Therefore the total at a common point is $2n_p(P)-1/2$, exactly the same total quarter correction as its two punctures. This computation is a signed degree computation: the remaining root preimages, including orientation-reversing ones, enter with their local signs. A generic relative perturbation makes the finitely many core and boundary intersections transverse; the winding calculation is unchanged. Summing over the $m$ incoming and $m$ outgoing points, including all common ones, gives $$I=2n_{\mathbf x}(P)-m/2.$$ [F3, F4, step 1.1, step 3.1, construct, algebra]

5.1 **Conclude the physical periodic index formula.** Comparing step 3.1 with step 4.1 gives $\delta(u)=2n_{\mathbf x}(P)-e(P)$. Substitute in step 2.1 to obtain $\mu(u)=e(P)+2n_{\mathbf x}(P)$. The index is the actual fixed-end Fredholm index by [F1], rather than a newly defined combinatorial functional. Finally apply [F5] to this actual domain to obtain the Chern evaluation plus $2\sum_l n_{w_l}(P)$. None of the constructions inferred a homotopy classification from domains or replaced a negative incidence by an assumed positive representative. [F1, F5, step 2.1, step 3.1, step 4.1, algebra] ∎
