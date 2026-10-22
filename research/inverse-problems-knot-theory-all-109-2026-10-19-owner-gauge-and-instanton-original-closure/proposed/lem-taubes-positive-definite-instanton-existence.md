---
id: lem-taubes-positive-definite-instanton-existence
kind: lemma
title: Taubes existence of an irreducible self-dual instanton on a positive-definite four-manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - def-axiom-of-choice
  - lem-green-weighted-asd-correction-from-a-uniform-spectral-gap
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-higher-order-sobolev-embedding
  - thm-holder-inequality-for-integrals
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-obstruction-theory-for-lifting-through-a-fibration
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §I.5, printed285–286; exact existence conclusion and Proposition5 correction interface; the full construction is supplied locally
---

## Statement

Assume full AC. Let $X$ be a compact simply connected oriented smooth four-manifold with a Riemannian metric whose intersection form is positive definite, and let $P\to X$ be a principal $SU(2)$-bundle with $c_2(P)[X]=-1$. For the equation $F_A^-=0$ in the stated orientation convention, the moduli space contains an irreducible smooth connection. The conclusion is existence for the given metric and bundle; it does not assert that every connection is irreducible or that the unperturbed moduli space is regular.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §I.5, citing Taubes Theorem 1.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The given closed-manifold setup fixes $F_A^-=0$ and $c_2(P)[X]=-1$. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] If $P_A=d_A^-(d_A^-)^*$ has a fixed positive spectral gap, $\|F_A\|_2$ is bounded and $\|F_A^-\|_B$ is small, there is an actual smooth self-dual correction $A+a$ on the same bundle, with $\|a\|_4\le C\|F_A^-\|_B$. The scalar kernel is $G\le C(1+d^{-2})$, and the full proof gives $2P_A=\nabla_A^*\nabla_A+s/3-2W^-+\mathcal T(F_A^-)$ and Kato's inequality. [[lem-green-weighted-asd-correction-from-a-uniform-spectral-gap]]

[F3] Hodge identifies ordinary harmonic two-forms with cohomology. Here positive definiteness excludes a nonzero anti-self-dual harmonic form, since its square integral would be negative. Compact Sobolev/Rellich and higher embeddings are available. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[thm-higher-order-sobolev-embedding]] [[thm-holder-inequality-for-integrals]]

[F4] Chern–Weil represents the integral second Chern class with the stated sign. The top Chern class of a complex bundle is the Euler class of its underlying complex-oriented real bundle; its local zero indices are the relative Thom values. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] [[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]]

[F5] The actual finite smooth triangulation supplies a four-dimensional CW decomposition of $X$. Relative cell obstructions have their cellular coboundary change rule; sphere degree classifies maps $S^3\to S^3$. Cellular approximation gives $\pi_1(S^3)=\pi_2(S^3)=0$. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] [[thm-obstruction-theory-for-lifting-through-a-fibration]] [[thm-based-sphere-maps-are-classified-by-geometric-degree]] [[thm-cellular-approximation-for-maps-of-cw-pairs]]

[F6] $H^4(X;\mathbb Z)=\mathbb Z$, evaluated on the orientation class, by closed oriented Poincaré duality. Full AC is used through [F2]–[F6]. [[thm-poincare-duality-for-oriented-topological-manifolds]] [[def-axiom-of-choice]]

## Proof

**Given:** Full AC and the metric, bundle and charge of the original sign-fixed closed-manifold problem [F1]. No regularity or orientation theorem is assumed.

1.1 **The actual BPST bundle and almost solution.** Fix $p\in X$ and oriented normal coordinates, with $g_{ij}=\delta_{ij}+O(r^2)$. In quaternionic coordinates the regular BPST potential is $I_\lambda=\operatorname{Im}(q\,d\bar q)/(\lambda^2+|q|^2)$. Write $q=rv$, $|v|=1$, and $\theta=v\,d\bar v$, so $d\theta=-\theta\wedge\theta$. Differentiation gives $F_{I_\lambda}=\lambda^2(\lambda^2+r^2)^{-2}\operatorname{Im}(dq\wedge d\bar q)$, which is self-dual in the oriented Euclidean metric. Its Euclidean norm square is $48\lambda^4/(\lambda^2+r^2)^4$, with integral $8\pi^2$, and its three curvature components at zero span $\mathfrak{su}(2)$. Gauge transformation by $v$ gives the singular potential $\lambda^2(\lambda^2+r^2)^{-1}\bar v\,dv$, bounded by $C\lambda^2/r^3$ when $r\ge\lambda$. Fix a small coordinate radius $\rho$, independent of $\lambda$, cut off this singular potential on $\rho<r<2\rho$ to zero, and use the regular frame inside. The fixed transition $v$ on their overlap constructs one smooth bundle $P'$ independent of $\lambda$ and smooth connections $A_\lambda$ which equal the product connection outside the chart. It is this singular potential that is cut off; a cutoff of a regular potential is not assumed to commute with a gauge transformation. [F1, F2, F4, given, construct, algebra]

2.1 **Small error for the given curved metric.** The Hodge projection differs from its Euclidean value by $O(r^2)$ in the inner ball. Thus $E_\lambda=F_{A_\lambda}^-$ satisfies $|E_\lambda|\le C\lambda^2r^2/(\lambda^2+r^2)^2\le C\lambda^2/(\lambda^2+r^2)$ there, and $|E_\lambda|\le C_\rho\lambda^2$ on the fixed cutoff annulus. Direct radial integration gives $\|E_\lambda\|_2\le C\lambda^2\sqrt{1+|\log\lambda|}$ and $\|F_{A_\lambda}\|_2\le\Lambda$ uniformly. For the Green norm use [F2]'s kernel bound. If the pole has $|x|\le2\lambda$, split at radius $4\lambda$; the inner contribution is $O(\lambda^2)$ and the outer shells contribute $C\lambda^2\int_\lambda^{2\rho}dr/r$. If $s=|x|>2\lambda$, split into $|x-y|<s/2$, $|y|<2s$ outside that set, and $|y|\ge2s$. The first integral is at most $C(\lambda^2/s^2)s^2=C\lambda^2$, the second at most $Cs^{-2}\lambda^2\int_0^{2s}r^3/(\lambda^2+r^2)dr\le C\lambda^2$, and the third is bounded by the same logarithmic shell integral. A pole outside the coordinate region only improves the bound, and the fixed annulus contributes $O(\lambda^2)$. The non-singular kernel term is smaller; metric volumes are uniformly comparable. Consequently $\|E_\lambda\|_\sharp\le C\lambda^2(1+|\log\lambda|)$ and $\|E_\lambda\|_B\to0$ in the actual fixed metric. [F2, F3, step 1.1, construct, algebra]

2.2 **The charge of the constructed bundle.** The bundle $P'$ and its transition map in step 1.1 are fixed as $\lambda$ varies. Its Chern–Weil integral is consequently an integer independent of $\lambda$. On the fixed inner ball, the explicit Euclidean self-dual BPST integral tends to $-1$ in the convention $c_2=(8\pi^2)^{-1}\operatorname{tr}(F\wedge F)$. On the cutoff annulus its curvature is $O_\rho(\lambda^2)$, so its Chern integral tends to zero. The integral is metric independent. Hence $c_2(P')[X]=-1$ exactly. This computes the charge of the actual fixed bundle used by the contraction, not merely that of an abstract model. [F4, step 1.1, algebra]

3.1 **Uniform spectral gap with no hidden inverse assumption.** From [F2]'s Weitzenböck formula, scalar Sobolev applied to $|\xi|$ using Kato, and $\|E_\lambda\|_2\to0$, absorb $C\|E_\lambda\|_2\|\xi\|_4^2$ to get $\|\nabla_{A_\lambda}\xi\|_2^2\le C(\langle P_{A_\lambda}\xi,\xi\rangle+\|\xi\|_2^2)$. If no uniform positive gap existed as $\lambda\downarrow0$, take $\|\xi_n\|_2=1$ and $\|(d_{A_{\lambda_n}}^-)^*\xi_n\|_2\to0$. The displayed estimate and Kato give a uniform $L^4$ bound, so the $L^2$ mass in every radius-$r$ ball is at most $Cr^2$. In the global singular/product frame away from $p$, $A_{\lambda_n}\to0$ smoothly by step 1.1. Local $H^1$ bounds and Rellich therefore give a strongly locally $L^2$ convergent subsequence to an ordinary adjoint-valued anti-self-dual two-form $\xi$ with $d^*\xi=0$. The small-ball bound shows $\|\xi\|_2=1$, with no lost mass. Lower semicontinuity on each punctured compact set gives a finite ordinary $H^1$ norm off $p$, uniformly as the deleted radius tends to zero. Multiply by cutoffs vanishing near $p$: their error is bounded in $L^2$ by the $L^4$ norm of $\xi$ on a shrinking annulus times the bounded $L^4$ norm of the cutoff gradient, and tends to zero by absolute continuity. Thus $\xi$ extends in $H^1$ with $d^*\xi=0$ globally. Anti-self-duality then gives $d\xi=0$, so [F3] makes it harmonic, contrary to $b_-=0$ and $\|\xi\|_2=1$. Hence a fixed gap $c>0$ exists for all sufficiently small $\lambda$. This was proved before choosing the correction threshold depending on $c$. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Smooth solutions and actual irreducibility.** Steps 2.1–3.1 satisfy every hypothesis of [F2] for small $\lambda$. It produces smooth self-dual $A_\lambda+a_\lambda$ on the same $P'$, with $\|a_\lambda\|_4\to0$. If arbitrarily small members were reducible, choose unit parallel adjoint sections $u_\lambda$. Pull them back to the scale-$\lambda$ unit ball in the regular frame, where $A_\lambda$ is exactly $I_1$; four-dimensional $L^4$ norms of one-forms are invariant under this scaling and the fixed metric is uniformly comparable. Thus $\|\nabla_{I_1}u_\lambda\|_4\le C\|a_\lambda\|_4\to0$. Since $|u_\lambda|=1$, their ordinary $W^{1,4}$ norms are bounded in that fixed smooth frame. Rellich in $H^1\to L^2$, followed by $\|u_i-u_j\|_4^4\le C\|u_i-u_j\|_2^2$, gives a strongly $L^4$ convergent subsequence. Its limit is an $I_1$-parallel unit section; the first-order equation with smooth coefficients bootstraps it to a smooth section. Commuting derivatives at zero makes its value commute with all three curvature values of $I_1$. Those span $\mathfrak{su}(2)$, whose common centralizer in its Lie algebra is zero, a contradiction. Therefore sufficiently small corrected members are irreducible. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **Comparison with the specified bundle.** Use [F5]'s finite smooth triangulation of $X$. An $SU(2)$ bundle is the unit sphere bundle of its defining quaternionic line, since $SU(2)$ acts freely and transitively on its unit vectors. It is trivial on the three-skeleton: the obstruction groups $\pi_0,\pi_1,\pi_2$ of $SU(2)=S^3$ vanish. On each oriented four-cell a three-skeleton trivialization has a boundary unit-vector map $S^3\to S^3$, with integer degree. These degrees form its four-cochain obstruction; changing a three-cell trivialization changes it by that cellular coboundary, by [F5]. Here is the general Chern identification: in the pulled-back trivial bundle over one characteristic four-disk, extend the boundary unit section as a vector-valued map and make it transverse to zero in the interior, retaining its boundary homotopy class. The boundary degree is the sum of its local zero degrees, by excising disjoint small zero-balls and the boundary homology relation. Those local degrees are precisely the relative pullback of the oriented Thom class. Thus this cellular cocycle represents the Euler class of the underlying complex-oriented real four-plane bundle, and equals $c_2$ by [F4]. This is a general relative-cell computation, not an inference from the BPST calibration. For two bundles, the obstruction to extending a three-skeleton isomorphism over a four-cell is the difference of these two degrees; pointwise multiplication of the two boundary $S^3$ maps adds their degrees, by [F5]. By [F6] and step 2.2, $P$ and $P'$ have the same degree-four class. Adjusting the isomorphism on the three-cells kills the difference cochain by its coboundary, and degree classification then extends it over every four-cell. Smooth it as an everywhere nonzero section of the quaternionic homomorphism bundle, using finite smooth charts and a partition of unity, and normalize its quaternionic norm. Uniform approximation preserves nonvanishing; unit quaternionic maps are determinant-one unitary isomorphisms. Transfer the smooth irreducible self-dual connection of step 4.1 through this actual smooth bundle isomorphism to $P$. This proves the full given-metric, given-bundle conclusion. [F1, F4, F5, F6, step 4.1, step 2.2, construct, algebra] ∎

## Source notes

This is the full original existence construction, not a citation of Taubes. Its mathematical working form was independently reviewed in the two-cycle receipt `research/inverse-problems-knot-theory-all-109-2026-10-19-independent-original-taubes-review-final.json`; the general Euler/cell comparison is included explicitly. The preceding substantial supplier contains the completed Green-weight inverse, fixed point and same-bundle bootstrap. This proof does not consume generic moduli regularity, orientability, a classification of all charge-one spherical instantons, or an inverse small-instanton end theorem. In particular the unused former regularity and index dependencies have been removed.
