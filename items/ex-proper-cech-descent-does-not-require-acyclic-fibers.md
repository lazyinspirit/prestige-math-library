---
id: ex-proper-cech-descent-does-not-require-acyclic-fibers
kind: example
title: "Proper Cech descent does not require acyclic fibers"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves, cor-homology-of-spheres, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-analytic-topology-and-finite-smooth-algebraic-stratifications, def-one-point-compactification, thm-one-point-compactification-properties, thm-stereographic-projection-riemann-sphere-homeomorphism, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, def-projective-morphism-classical, thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications, lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "D. Dugger, S. Hollander, D. C. Isaksen, Hypercovers and simplicial presheaves, Mathematical Proceedings of the Cambridge Philosophical Society 136 (2004), complete arXiv full text; Appendix A read at the cited pages."
      url: "https://arxiv.org/pdf/math/0205027"
    - title: "The Stacks Project, Hypercoverings (Chapter 0DEG), complete PDF; the homological-descent lemmas are read at the cited tags and pages."
      url: "https://stacks.math.columbia.edu/download/hypercovering.pdf"
---


## Example

Assume the Axiom of Choice; it is inherited from the descent lemma and from the field-dual corollary. Let $k$ be a field and let $S=\mathbb P^1(\mathbb C)$ be the complex projective line, realized as the classical complex algebraic variety obtained by gluing two affine lines along their punctured overlaps by $z=1/w$, with its analytic topology (equivalently, the Riemann sphere $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$). Then the unique morphism $f:S\to\mathrm{pt}$ is proper surjective, the single fiber $S$ satisfies $H^2(S;k)\cong k\neq0$ and is therefore not cohomologically acyclic, and yet the augmented Cech complex computes the constant sheaf: the unaugmented product total $\operatorname{Tot}_{p\geq0}R\Gamma(S^{p+1},k)$ has cohomology $k$ in degree $0$ and zero in all other degrees. In every internal degree $q$ the augmented row $H^q(k)\to H^q(S,k)\to H^q(S^2,k)\to\cdots$ is contracted by inserting one chosen point as first coordinate, even though the $q=2$ row contains the nonzero group $H^2(S;k)$ at $p=0$.

## Facts & Assumptions

**Given:** the field $k$, the two-chart classical complex variety $S=\mathbb P^1(\mathbb C)$ with its analytic topology, the terminal morphism $f:S\to\mathrm{pt}$, and the constant coefficient $k$; the fiber powers $S^{p+1}$ are the products of copies of $S$ over the point, the fiber product of the terminal map. The Axiom of Choice [[def-axiom-of-choice]] is assumed as inherited from the descent lemma and the field-dual corollary.

[F1] [[lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves]] supplies proper Cech descent for a proper surjective morphism of finite-type complex algebraic varieties with bounded constructible field coefficients, including the global form $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$ and the statement that no fiber acyclicity is assumed.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]] supplies the gluing definition of a classical algebraic variety over $\mathbb C$, its finite affine-model covers and its regular maps.

[F3] [[def-analytic-topology-and-finite-smooth-algebraic-stratifications]] fixes the analytic topology of a classical complex variety and its compatibility with regular maps.

[F4] [[def-one-point-compactification]] and [[thm-one-point-compactification-properties]] supply the Riemann sphere $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ with its topology and the compactness of $X^*$ for every space $X$.

[F5] [[thm-stereographic-projection-riemann-sphere-homeomorphism]] gives the explicit homeomorphism $\Sigma:\widehat{\mathbb C}\to S^2$.

[F6] [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]] gives that a homotopy equivalence induces isomorphisms on all singular homology groups.

[F7] [[cor-homology-of-spheres]] computes $\widetilde H_2(S^2;k)\cong k$.

[F8] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] identifies $H^2(S;k)$ with $\operatorname{Hom}_k(H_2(S;k),k)$.

[F9] [[def-projective-morphism-classical]] defines projective classical morphisms by a closed-immersion factorization.

[F10] [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]] carries the clause that a projective algebraic morphism is proper in the analytic topology, used here for $S\to\mathrm{pt}$.

[F11] Under AC, a metric space with a contractible-open neighbourhood basis has actual derived constant-sheaf cohomology equal to singular cohomology ([[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]).

## Verification

**Proof technique:** direct.

1.1 The space and its two charts. Glue the affine $z$-line and affine $w$-line along $zw=1$. Their regular transition gives a prevariety with a finite affine cover ([F2], [F3]). Its diagonal is closed: on the two same-chart products equality is $z=z'$ or $w=w'$, and on either cross-chart product it is $zw'=1$ or $wz'=1$. Equalizers of regular maps are inverse images of this diagonal, so $S$ is separated. The formulas of [F5] define a homeomorphism from this glued space to $S^2$: in the $w$-chart they become $(2\operatorname{Re}w,-2\operatorname{Im}w,1-|w|^2)/(1+|w|^2)$, including the north pole at $w=0$; the inverse coordinate there is $w=(x-iy)/(1+t)$, continuous near the north pole. In the other chart the formulas and inverse are those of [F5]. Composing with [F5]'s inverse identifies the analytic topology with the one-point compactification of [F4]. In particular $S$ is compact. [F2, F3, F4, F5, construct, algebra]

1.2 The map is proper surjective. The unique morphism $f:S\to\mathrm{pt}$ is surjective because $S$ is nonempty. It is projective in the sense of [F9]: the identity is a closed immersion $S\hookrightarrow\mathrm{pt}\times\mathbb P^1(\mathbb C)$ onto a reduced closed subvariety, and the projection to the point is the structure map. By the properness clause of [F10], a projective algebraic morphism is proper in the analytic topology; hence $f$ is a proper surjective morphism of finite-type complex algebraic varieties, and [F1] applies to it. [F9, F10, F1, given]

1.3 The single fiber is not acyclic. Stereographic projection is a homeomorphism $\widehat{\mathbb C}\to S^2$ ([F5]); a homeomorphism is a homotopy equivalence, so it induces isomorphisms on singular homology ([F6]) and $H_2(S;k)\cong H_2(S^2;k)\cong k$ by [F7]. The field-dual corollary [F8] then gives $H^2(S;k)\cong\operatorname{Hom}_k(H_2(S;k),k)\cong k\neq0$, since $k$ is a field. The sphere is metric with a contractible-open neighbourhood basis, and these properties transfer through the homeomorphism, so [F11] identifies this singular cohomology group with the actual derived constant-sheaf group $H^2(S,k_S)$. Thus the fiber $S$ of $f$ is not cohomologically acyclic. [F5, F6, F7, F8, F11, algebra]

2.1 The rows are still contracted. The fiber of $f$ over the unique point is $S$ and the fiber powers are $S^{p+1}$. Choose one point $y\in S$, for instance the point with $z=0$, and for $r\geq0$ let $\mathrm{ins}_r:S^r\to S^{r+1}$ insert $y$ as first coordinate, with $S^0=\mathrm{pt}$. For the compositions below the deletion maps are $d_i:S^{r+2}\to S^{r+1}$, and they satisfy $d_0\,\mathrm{ins}_{r+1}=\mathrm{id}$ and $d_i\,\mathrm{ins}_{r+1}=\mathrm{ins}_r\,d_{i-1}$ for $i>0$, so with $h_{p+1}:=\mathrm{ins}_{p+1}^*$ and $\delta_p$ the alternating sum of deletion pullbacks one gets $h_{p+1}\delta_p+\delta_{p-1}h_p=\mathrm{id}$ in every internal degree $q$, and $h_0\delta_{-1}=\mathrm{id}$; hence each augmented row is contractible. In the row $q=2$ the term at $p=0$ is $H^2(S;k)\cong k\neq0$, carried injectively into $H^2(S^2;k)$; the nonzero group is retained and does not obstruct exactness. [F1, step 1.3, algebra]

3.1 Conclusion. Applying [F1] to $f$ and the constant sheaf $k$, and using that the fiber powers of $f$ are $S^{p+1}$ and that $R\Gamma(\mathrm{pt},k)=k$ is concentrated in degree $0$, the augmented Cech map $k\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}R\Gamma(S^{p+1},k)$ is a quasi-isomorphism; therefore the unaugmented product total has cohomology $k$ in degree $0$ and zero in every other degree. The example shows that proper Cech descent does not require acyclic fibers: the nonvanishing $H^2$ of the fiber is retained throughout the contracted rows. The Axiom of Choice is inherited through the descent lemma and the field-dual corollary, and the construction of $S$, the homeomorphism with $S^2$, the choice of one point and the insertion argument use no further choice. [F1, F8, step 1.1, step 1.3, step 2.1] ∎
