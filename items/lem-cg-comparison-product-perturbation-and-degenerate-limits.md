---
id: lem-cg-comparison-product-perturbation-and-degenerate-limits
kind: lemma
title: "Perturbation by a Euclidean regular polygon: comparison-disk bounds for degenerate comparison triangles"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: [cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-metric-ball, def-metric-continuity, def-metric-convergence, def-metric-space, def-real-limit, lem-cg-cat-one-short-and-closed-local-geodesics, lem-cg-comparison-convexity-and-model-spaces, lem-cg-finite-spherical-comparison-disks-and-radius-estimates, lem-cg-local-cat-one-products-from-sine-comparison, lem-cg-polygon-midpoint-drop-and-equality, lem-metrics-on-rn, cor-monotone-converges-iff-bounded]
proof_strategy: direct
axiom_use: "AC enters through the finite comparison disk supplier; the Euclidean perturbation, finite index subsequence and metric limit calculation use no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.9–3.3.15, printed pp. 23–28 (degenerate comparison triangles handled by a product with a small Euclidean regular polygon and a limit argument)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.2.1–I.2.3 (the round sphere $S^n$, its metric and law of cosines), I.2.10–I.2.16 (model spaces, comparison triangles, Alexandrov's lemma)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.15–I.2.16, printed pp. 504–505 (the CAT(0)-inequality and local geodesics)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $X$ be compact locally CAT(1) and let $l$, $n\ge3$, $h<l$ be as in [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]. Let $x\in C^0_h(n)$ satisfy $0<L(x)<2\pi$. Then the quantitative estimates of [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] (iv) extend to degenerate tuples by nondegenerate comparison disks in arbitrarily small product perturbations. The original tuple is assumed to satisfy the same edge bound $\xi_i\ge L(x)/(2n)>0$ as that quantitative estimate; a literal nondegenerate disk is not asserted for a degenerate tuple.

**(i) The perturbed tuple.** For $\varepsilon>0$ let $\zeta^\varepsilon_0,\dots,\zeta^\varepsilon_{n-1}$ be the vertices of a regular Euclidean $n$-gon of circumradius $\varepsilon$ in the plane $\mathbb R^2$ ([[lem-metrics-on-rn]]) and put $x^\varepsilon:=(x_i,\zeta^\varepsilon_i)$, a cyclic $n$-tuple in the $l^2$ product $X\times\mathbb R^2$ ([[lem-cg-local-cat-one-products-from-sine-comparison]]). Then, for $\varepsilon$ small enough that $L(x^\varepsilon)<2\pi$ and $\operatorname{mesh}(x^\varepsilon)<l$, the tuple $x^\varepsilon$ lies in the zero-limit basin of the product, its midpoint-operation comparison triangles are nondegenerate (the Euclidean triples are noncollinear), and the comparison disk and the quantitative output of [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] apply to $x^\varepsilon$.

**(ii) Limit.** As $\varepsilon\to0$ the product edge lengths, the energies of all iterates and the lengths converge to those of $x$, while the limiting radius constant $\eta=(\pi-r)/2$, $\mu=\min\{r/(2n),\eta\}$ and the quadrilateral constant $\delta(\eta,\mu)$ from [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] depend only on $n$ and $L$ and converge to their original values as $\varepsilon\to0$; the quantitative inequality for $x^\varepsilon$ therefore passes to the limit and holds for $x$. In particular the deficit estimate $\zeta_k\le(\xi_k+\xi_{k+1})/2-\delta(\eta,\mu)$ extends to tuples with degenerate comparison triangles, with the same constants.

**(iii) Hypotheses preserved.** The perturbation is chosen so small that every finite-cellulation triangle has strict comparison-triangle inequalities and the mesh and perimeter hypotheses are preserved; the Euclidean energies tend to $0$. A sum of squared CAT(0) convexity inequalities is not a substitute for the CAT(1) product comparison.

## Facts & Assumptions

**Given:** A compact locally CAT(1) space $X$ with uniform radius $l<\pi/2$, a fixed $n\ge3$ and $h<l$; a tuple $x\in C^0_h(n)$ with edge lengths $\xi_i\ge r/n$ and $r=L(x)/2>0$; the regular Euclidean $n$-gons $\zeta^\varepsilon$ of circumradius $\varepsilon$ and the product tuples $x^\varepsilon$ of (i).

[F1] [[lem-cg-local-cat-one-products-from-sine-comparison]]: the $l^2$ product of locally CAT(1) spaces is locally CAT(1) on balls whose product structure has the required componentwise radii, and the product geodesics are componentwise, so the midpoint map of the product is the componentwise midpoint map.

[F2] [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]]: the radius estimate (i), the quadrilateral separation (ii), the comparison disk (iii) with its clauses (a), (b) and the quantitative output (iv), under the nondegeneracy hypothesis of (iii).

[F3] [[lem-cg-polygon-midpoint-drop-and-equality]] and [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: mesh, $L$, $E$, the midpoint map $f$, its continuity and the invariance of the mesh bound; the basin $C^0_h(n)$ and its description by the limit of the iterated lengths.

[F4] [[def-metric-space]], [[def-metric-continuity]], [[def-metric-convergence]], [[def-real-limit]]: the triangle inequality, continuity, convergence of sequences and of real limits, and the $l^2$ product metric $d^2=d_X^2+d_{\mathbb R^2}^2$.

[F5] [[lem-cg-comparison-convexity-and-model-spaces]] and [[lem-cg-cat-one-short-and-closed-local-geodesics]]: small triangles in a CAT(1) space satisfy the comparison inequality; strict triangle inequalities characterise nondegenerate comparison triangles.

[F6] [[lem-metrics-on-rn]]: the Euclidean metric on $\mathbb R^2$, with the distance between adjacent vertices of the regular $n$-gon of circumradius $\varepsilon$ equal to $2\varepsilon\sin(\pi/n)$.

[F7] [[def-axiom-of-choice]]: AC enters only through the supplier [F2]; the perturbation and the limit argument are choice-free when [F2] is granted.



## Proof

**Proof technique:** direct.

1.1 **The auxiliary regular polygon.** Put $c=2\varepsilon\sin(\pi/n)$ and $q=\cos(\pi/n)\in(0,1)$. Euclidean chord midpoints show that the $k$-th iterate of the regular polygon has circumradius $\varepsilon q^k$, edge length $cq^k$, length $ncq^k$ and energy $nc^2q^{2k}$. The bounded decreasing sequence $q^k$ has a limit by [[cor-monotone-converges-iff-bounded]], and that limit equals $q$ times itself, hence is zero since $q<1$. Thus all four quantities tend to zero. [F6, F3, algebra]

1.2 **Product geometry and correct length bounds.** The product geodesics and midpoint operation are componentwise by [F1]. For any product tuple $y=(y^X,y^E)$, its edge lengths are $\sqrt{a_i^2+b_i^2}$, where $a_i,b_i$ are the component edge lengths, so $E(y)=E(y^X)+E(y^E)$ and $L(y)\le L(y^X)+L(y^E)$. In general the lengths themselves do not satisfy an additive squared identity. The product has the same uniform CAT(1) radius $l$: a radius-$l$ product ball lies in the product of the CAT(1) $X$-ball and a convex Euclidean ball, which is CAT(1) by [F1]; the product ball is a radius-$l<\pi/2$ ball in that CAT(1) chart, so is convex and CAT(1) by [F5]. Thus the finite construction of [F2], which uses the uniform radius but not ambient compactness, applies in this product. [F1, F3, F4, F5, algebra]

1.3 **The edge lower bound survives.** Let $a=\min_i\xi_i>0$. For $u\ge a$, $\sqrt{u^2+c^2}/\sqrt{a^2+c^2}\le u/a$, as follows by squaring. Summing gives $L(x^\varepsilon)/\min_i\xi_i^\varepsilon\le L(x)/a\le2n$. Thus every perturbed edge obeys $\xi_i^\varepsilon\ge L(x^\varepsilon)/(2n)$, exactly the hypothesis of the finite quantitative output; no strict slack in the original lower bound is required. [F4, algebra]

2.1 **Strict inequalities for the actual face triples.** The ear triples are an old regular-polygon vertex and the midpoints of its two incident edges; their Euclidean projections are noncollinear, since the two old incident edges are not collinear and their lengths are positive. The fan triples are three distinct vertices of the last regular polygon, also noncollinear. This holds at each finite iteration since $\varepsilon q^k>0$. If $a,b,c$ are the three $X$-distances and $\alpha,\beta,\gamma$ their Euclidean counterparts, then $a+b\ge c$ and $\alpha+\beta>\gamma$; hence $\sqrt{a^2+\alpha^2}+\sqrt{b^2+\beta^2}\ge\sqrt{(a+b)^2+(\alpha+\beta)^2}>\sqrt{c^2+\gamma^2}$. Relabeling proves every strict triangle inequality for every ear and cap face. [step 1.1, step 1.2, F4, F5, F6, algebra]

3.1 **Basin, mesh and finite cap.** Componentwise iteration and step 1.2 give $L(f^k x^\varepsilon)\le L(f^kx)+ncq^k\to0$. For sufficiently small $\varepsilon$, the product mesh $\max_i\sqrt{\xi_i^2+c^2}$ is below $l$ and its length is below $2\pi$; choose a product mesh bound $h_\varepsilon<l$ containing this tuple. The basin condition supplies an integer $m\ge1$ with product iterate length $<2l$, and step 2.1 makes every face of that finite disk nondegenerate. The finite supplier's conclusions therefore apply without any compactness assumption on $X\times\mathbb R^2$. [step 1.1, step 1.2, step 2.1, F2, F3, F4, algebra]

4.1 **The perturbed deficit.** Write $r_\varepsilon=L(x^\varepsilon)/2$, $\eta_\varepsilon=(\pi-r_\varepsilon)/2$, and $\mu_\varepsilon=\min\{r_\varepsilon/(2n),\eta_\varepsilon\}$. By steps 3.1 and 1.3 and [F2](iv), there is an index $k=k(\varepsilon)$ such that $\zeta_k^\varepsilon\le(\xi_k^\varepsilon+\xi_{k+1}^\varepsilon)/2-\delta(\eta_\varepsilon,\mu_\varepsilon)$. The constants are universal functions of the perturbed length and $n$, not of the space or mesh. AC is used solely through the finite CAT(1) disk supplier. [step 3.1, step 1.3, F2, F7, algebra]

5.1 **Limit and conclusion.** Take $\varepsilon_j\downarrow0$. The product edge lengths $\xi_i^{\varepsilon_j}=\sqrt{\xi_i^2+c_j^2}$ converge to $\xi_i$, and the midpoint lengths converge to $\zeta_i$ because the midpoint operation is componentwise and the Euclidean midpoint-edge length is $c_jq$. Consequently all fixed-iterate lengths and energies converge to their original values, $\eta_{\varepsilon_j}\to\eta$, $\mu_{\varepsilon_j}\to\mu$, and $\delta(\eta_{\varepsilon_j},\mu_{\varepsilon_j})\to\delta(\eta,\mu)$ by the finite supplier's continuity. Some index $k$ occurs infinitely often, since there are only finitely many indices; on that subsequence step 4.1 gives $\zeta_k\le(\xi_k+\xi_{k+1})/2-\delta(\eta,\mu)$. This proves the quantitative extension, including degenerate face triples; the perturbation energies vanish and the product comparison is the CAT(1) comparison of [F1]. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 4.1, F1, F2, F4, F7] ∎
