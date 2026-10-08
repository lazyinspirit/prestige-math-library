---
id: lem-cg-uniform-energy-decrement-and-short-class-closedness
kind: lemma
title: "The uniform energy decrement on the basin, bounded iteration, and the closedness of the basin inside the short polygon space"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [cor-connected-subsets-of-the-line, cor-inner-product-induces-a-norm, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-metric-ball, def-metric-compactness, def-metric-continuity, def-metric-convergence, def-metric-space, def-real-and-complex-inner-product-space, def-real-limit, lem-cg-cat-one-short-and-closed-local-geodesics, lem-cg-comparison-convexity-and-model-spaces, lem-cg-comparison-product-perturbation-and-degenerate-limits, lem-cg-finite-spherical-comparison-disks-and-radius-estimates, lem-cg-polygon-midpoint-drop-and-equality, lem-metrics-on-rn, thm-cauchy-schwarz-in-an-inner-product-space, thm-cg-compact-local-cat-one-short-circle-criterion, thm-extreme-value-metric]
proof_strategy: direct
axiom_use: "AC enters through the finite comparison disk and perturbation suppliers; the variance estimate, energy summation and closedness argument require no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.8–3.3.9, printed pp. 23–24 (the uniform decrement $E(fx)\\le E(x)-\\lambda(L(x))$ with $\\lambda$ independent of the mesh bound) and §3.3.15, printed p. 28 (closedness of the class of polygons converging to a point inside the length-$<2\\pi$ piece)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.2.1–I.2.3, I.2.10–I.2.16 (model spaces, comparison triangles, local geodesics)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.15–I.2.16, printed pp. 504–505"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $X$ be compact locally CAT(1) and let $l$, $n\ge3$, $h<l$ be as in [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]. Then:

**(i) Uniform decrement.** There is a continuous function $\lambda_n\colon(0,2\pi)\to(0,\infty)$ — choose
$$\lambda_n(2r):=\tfrac12\min\Bigl\{\frac{r^2}{n^4},\ \delta\bigl(\eta(\pi-r),\ \min\{r/(2n),\eta(\pi-r)\}\,\bigr)\frac{r}{n}\Bigr\},\qquad \eta(\varepsilon):=\varepsilon/2,$$
with $\delta$ from [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] — such that for every $x\in C^0_h(n)$ with $L(x)\in(0,2\pi)$,
$$E(fx)\ \le\ E(x)-\lambda_n(L(x)).$$
$\lambda_n$ depends only on $n$ and $L$, not on $h$, on $X$ or on the mesh; it is allowed to tend to $0$ at both ends of $(0,2\pi)$ (and does), and this explicit minorant has no positive lower bound uniform near $0$ or near $2\pi$.

**(ii) Bounded iteration.** For all $0<a<b<2\pi$ there is $M\in\mathbb N$ — for example $M=\lceil b^2/\min_{[a,b]}\lambda_n\rceil+1$ — such that every $x\in C^0_h(n)$ with $L(x)\le b$ satisfies $L(f^M x)<a$.

**(iii) Closedness and separation.** $C^0_h(n)$ is open in $P_h(n)$ and closed in the piece $\{x\in P_h(n):L(x)<2\pi\}$ in which the estimate (i) is available; hence inside that piece no short-loop homotopy connects a tuple of the basin to a tuple outside it. The basin contains no nonconstant tuple which is equilateral and straight at every vertex, i.e. no nonconstant list of equally spaced points of a closed local geodesic (the equality case of [[lem-cg-polygon-midpoint-drop-and-equality]] (iii)); a straight equilateral closed local geodesic tuple has constant positive length under $f$ and therefore lies outside the basin.

**(iv) No circularity.** The comparison disk used for (i) is built inside the basin and uses the midpoint operation, the CAT(1) comparisons, the quadrilateral constant and the compact short-circle criterion; shrinkability is never assumed. The identification of the basin with the constant short-homotopy class is made in the short-loop transfer result proved later on this page.

## Facts & Assumptions

**Given:** A compact locally CAT(1) space $X$ with uniform radius $l<\pi/2$; a fixed $n\ge3$ and $h<l$; tuples $x\in C^0_h(n)$ with edge lengths $\xi_i=d(x_i,x_{i+1})$, midpoint lengths $\zeta_i=d(fx_i,fx_{i+1})$, length $L(x)=2r\in(0,2\pi)$ and energy deficit $\Delta:=E(x)-E(fx)$.

[F1] [[lem-cg-polygon-midpoint-drop-and-equality]] and [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: the pointwise bound $\zeta_i\le(\xi_i+\xi_{i+1})/2$, continuity and mesh-invariance of $f$, invariance of the basin under $f$, and the description of $C^0_h(n)$ as the set of tuples with some iterate of length $<l/2$ (clause (iv)); equality in the energy drop holds exactly for constant tuples and for equally spaced vertices of a closed local geodesic (clause (iii)).

[F2] [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]]: clauses (i)-(iv), in particular the quadrilateral constant $\delta$ and the quantitative output $\zeta_k\le(\xi_k+\xi_{k+1})/2-\delta(\eta,\mu)$ under the hypothesis $\xi_i\ge r/n$, where $\eta=(\pi-r)/2$ and $\mu=\min\{r/(2n),\eta\}$.

[F3] [[lem-cg-comparison-product-perturbation-and-degenerate-limits]]: the quantitative output of [F2] extends to tuples whose comparison triangles may be degenerate, with constants independent of the perturbation.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-real-and-complex-inner-product-space]]: the Cauchy–Schwarz inequality and the norm on $\mathbb R^n$.

[F5] [[cor-connected-subsets-of-the-line]], [[def-metric-space]], [[def-metric-continuity]], [[def-metric-compactness]], [[thm-extreme-value-metric]], [[def-real-limit]]: the triangle inequality, continuity, compactness of $[a,b]$, attained extrema of continuous functions, limits of real sequences, and connectedness of real intervals.

[F6] [[def-axiom-of-choice]], [[thm-cg-compact-local-cat-one-short-circle-criterion]]: the compact short-circle criterion consumes AC; the variance estimate, the two-case decrement and the closedness argument are choice-free when [F2] is granted.

[F7] [[def-metric-convergence]]: convergence in $P_h(n)$ is convergence of the $n$-tuples, and $f^{M}$ and $L$ are continuous with respect to it.



## Proof

**Proof technique:** direct.

1.1 **Variance estimate for the edge lengths.** By [F1], $\zeta_i\le(\xi_i+\xi_{i+1})/2$ for every $i$, whence $E(fx)=\sum_i\zeta_i^2\le\sum_i((\xi_i+\xi_{i+1})/2)^2$ and therefore $\Delta=\sum_i(\xi_i^2-\zeta_i^2)\ge\sum_i\left(\xi_i^2-(\xi_i+\xi_{i+1})^2/4\right)=\frac14\sum_i(\xi_i-\xi_{i+1})^2\ge0$, where the middle identity is the algebraic expansion of the square and the cyclic sums. Consequently $\sum_i(\xi_i-\xi_{i+1})^2\le4\Delta$. [F1, algebra]

1.2 **First case of the decrement.** If $\Delta>r^2/n^4$, then $\Delta\ge\lambda_n(2r)$, because $\lambda_n(2r)$ is half of a minimum one of whose entries is $r^2/n^4$, so $\lambda_n(2r)\le r^2/n^4<\Delta$. [F2, algebra]

1.3 **Openness of the basin.** By [F1], $C^0_h(n)$ is the union over $k\ge0$ of the sets $\{x\in P_h(n):L(f^kx)<l/2\}$; each of these is open because $f^k$ and $L$ are continuous ([F7]), so the basin is open in $P_h(n)$. [F1, F7, algebra]

1.4 **The basin contains no straight equilateral tuple (iii, second part).** If $x$ is nonconstant, equilateral ($\xi_i=\xi>0$ for all $i$) and straight at every vertex, then $fx$ consists of the same closed local geodesic's points shifted by arclength $\xi/2$. Every subarc of that curve of length at most $2\xi$ lies in the uniform CAT(1) ball of radius $\xi<l$ about its arclength midpoint; it minimizes there by [[lem-cg-cat-one-short-and-closed-local-geodesics]] (ii), since $2\xi<\pi$. Thus every shifted consecutive triple is straight, and induction gives $L(f^kx)=L(x)=n\xi>0$ for every $k$; therefore $L(f^kx)$ does not tend to $0$ and $x\notin C^0_h(n)$. Such tuples are exactly the equally spaced lists of points of a closed local geodesic by the equality analysis of [F1](iii). [F1, algebra]

2.1 **Each edge is close to the mean $2r/n$.** Put $\delta_i:=\xi_i-\xi_{i+1}$ and recall $\sum_i\xi_i=2r$. For each $i$, $\xi_i-2r/n=\frac1n\sum_{k=0}^{n-1}(\xi_i-\xi_{i+k})=\frac1n\sum_{k=0}^{n-1}\sum_{j=0}^{k-1}\delta_{i+j}$; by Cauchy–Schwarz the absolute value of each inner sum is at most $2\sqrt{k\Delta}\le n\sqrt\Delta$, since $k\le n-1$ and $2\sqrt{n-1}\le n$, so $|\xi_i-2r/n|\le n\sqrt\Delta$. [step 1.1, F4, algebra]

3.1 **Second case of the decrement.** If $\Delta\le r^2/n^4$, then $\xi_i\ge r/n$ for every $i$ by step 2.1. Put $\eta=(\pi-r)/2$ and $\mu=\min\{r/(2n),\eta\}$, so that $0<\mu<2\eta<\pi$; by [F2](iv) and [F3] there is an index $k$ with $\zeta_k\le(\xi_k+\xi_{k+1})/2-\delta(\eta,\mu)$, where the constants are continuous in $(n,L)$ and independent of the perturbation. Since $\zeta_k\ge0$, this forces $\delta(\eta,\mu)\le(\xi_k+\xi_{k+1})/2$, and the sharpened bound $\zeta_k^2\le((\xi_k+\xi_{k+1})/2)^2-\delta(\xi_k+\xi_{k+1})+\delta^2$ at the index $k$, combined with the unsharpened bounds at the other indices, gives $\Delta\ge\delta(\xi_k+\xi_{k+1})-\delta^2\ge(\delta/2)(\xi_k+\xi_{k+1})\ge\delta r/n$, where the middle inequality uses $\delta\le(\xi_k+\xi_{k+1})/2$. [step 1.1, step 2.1, F2, F3, algebra]

4.1 **The decrement (i).** In view of steps 1.2 and 3.1, $\Delta\ge\min\{r^2/n^4,\delta(\eta,\mu)r/n\}\ge\lambda_n(2r)$ for $\lambda_n$ the half of the displayed minorant. Since $\delta$ is continuous and positive on its domain, $\eta(\pi-r)=(\pi-r)/2>0$ and $\mu=\min\{r/(2n),\eta\}>0$ depend continuously on $r\in(0,\pi)$ with $\mu<2\eta$, the function $\lambda_n$ is continuous and positive on $(0,2\pi)$; it depends only on $n$ and on the length, not on $h$ or on $X$. The explicit separation constant obeys $0<\delta(\eta,\mu)\le\mu/2$, since it is $2(\mu/4)$ minus a nonnegative chord length. Thus $0<\lambda_n(2r)\le r^2/(2n^4)$ and $\lambda_n(2r)\le\mu r/(4n)$: the first bound tends to zero as $r\to0$, and the second as $r\to\pi$ because $\mu\le(\pi-r)/2$. Hence $E(fx)\le E(x)-\lambda_n(L(x))$ for every $x\in C^0_h(n)$ with $L(x)\in(0,2\pi)$. [step 1.2, step 3.1, F2, F3, algebra]

5.1 **Bounded iteration (ii).** Let $0<a<b<2\pi$; the restriction of the continuous positive function $\lambda_n$ to the compact interval $[a,b]$ attains a positive minimum $\lambda_0$ ([F5]). Fix $x\in C^0_h(n)$ with $L(x)\le b$ and put $M=\lceil b^2/\lambda_0\rceil+1$. Since $L$ does not increase along the iterates and the basin is invariant ([F1]), every $f^jx$ with $j\le M$ is in the basin with $L(f^jx)\le b$; as long as $L(f^jx)\ge a$, step 4.1 gives $E(f^{j+1}x)\le E(f^jx)-\lambda_0$. If $L(f^jx)\ge a$ held for all $j<M$, then $E(f^Mx)\le E(x)-M\lambda_0<0$ because $E(x)\le L(x)^2\le b^2$ and $M\lambda_0>b^2$, a contradiction; hence $L(f^jx)<a$ for some $j<M$, and then $L(f^Mx)\le L(f^jx)<a$ by monotonicity of $L$. [step 4.1, F1, F5, algebra]

6.1 **Closedness of the basin inside the short piece.** Let $x_j\in C^0_h(n)$ converge to $x\in P_h(n)$ with $L(x)<2\pi$; choose $b$ with $\max\{L(x),l/4\}<b<2\pi$ and then $j_0$ with $L(x_j)\le b$ for all $j\ge j_0$, and let $M$ be the integer of step 5.1 for the parameters $a=l/4$ and $b$. Then $L(f^Mx_j)<l/4$ for all $j\ge j_0$, and continuity of $f^M$ and $L$ ([F7]) gives $L(f^Mx)\le l/4<l/2$, so $x\in C^0_h(n)$ by the description [F1]. Hence the basin is closed in $\{x\in P_h(n):L(x)<2\pi\}$. [step 5.1, F1, F7, algebra]

7.1 **No homotopy crosses the basin boundary.** Let $s\mapsto y_s$ be a continuous family in the piece $\{L<2\pi\}$, $s\in[0,1]$. The basin is open by [F1] and closed in that piece by step 6.1. Its inverse image under the family is therefore both open and closed in $[0,1]$. Connectedness of the real interval [F5] excludes a nonempty proper subset that is both open and closed. Thus membership is constant along the family. Nonconstant equally spaced closed local geodesic tuples have fixed positive length under $f$ by [F1] and lie outside the basin. [step 6.1, F1, F5]

8.1 **Conclusion.** The finite comparison disk is built from midpoint iterates of a tuple already in the basin; no loop shrinkability assumption is used. Steps 1.1–4.1 prove the decrement, step 5.1 proves bounded iteration, and steps 6.1 and 7.1 prove closedness and separation, with openness supplied by [F1]. The constants depend only on $n$ and length; AC enters through the finite-disk supplier and its perturbation extension. [step 4.1, step 5.1, step 6.1, step 7.1, F1, F2, F3, F6] ∎
