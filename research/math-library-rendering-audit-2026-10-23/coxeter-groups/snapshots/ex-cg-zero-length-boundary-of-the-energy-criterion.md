---
id: ex-cg-zero-length-boundary-of-the-energy-criterion
kind: example
title: "The zero-length boundary: constant tuples, collapsed edges and the degeneracy of the energy decrement at $L=0$"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-metric-ball, def-metric-space, def-real-limit, lem-cg-cat-one-short-and-closed-local-geodesics, lem-cg-bowditch-quantitative-short-loop-control, lem-cg-comparison-product-perturbation-and-degenerate-limits, lem-cg-finite-spherical-comparison-disks-and-radius-estimates, lem-cg-polygon-midpoint-drop-and-equality, lem-cg-uniform-energy-decrement-and-short-class-closedness]
proof_strategy: direct
axiom_use: "AC enters through the cited general quantitative or short-loop criterion; the explicit model-space computations require no additional choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.1–3.3.9, printed pp. 20–24 (the energy functional, its zero level and the decrement function on $(0,2\\pi)$)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.1.4(2)–(3) (degenerate geodesics and midpoint conventions)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Example

Assume the Axiom of Choice for the cited quantitative suppliers. Let $X$ be compact locally CAT(1) and let $l$, $n\ge3$, $h<l$ be as in [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]. Then:

**(i) Constant tuples.** If $x=(p,\dots,p)$ is constant, then $\operatorname{mesh}(x)=L(x)=E(x)=0$, the midpoint of every degenerate pair is $p$, $f(x)=x$, and $x\in C^0_h(n)$; the corresponding constant loop is short and shrinkable (a constant short-loop homotopy), and it is the unique zero-energy state up to the choice of $p$.

**(ii) The decrement degenerates at $L=0$ and at $L=2\pi$.** The function $\lambda_n$ of [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (i) is positive on $(0,2\pi)$ but has $\lim_{r\to0^+}\lambda_n(2r)=0$ and $\lim_{r\to\pi^-}\lambda_n(2r)=0$: the explicit minorant contains the factors $r^2/n^4$ and $\delta(\eta,\mu)\,r/n$ with $\eta=\eta(\pi-r)$ and $\mu=\min\{r/(2n),\eta\}$, and $\eta(\varepsilon)=\varepsilon/2$ tends to $0$ as $r\to\pi$. Consequently this explicit minorant has no positive lower bound near either endpoint. Basin membership is defined by $\lim_kL(f^k x)=0$, equivalently by an iterate of length $<l/2$; it is not a test for a fixed positive one-step deficit.

**(iii) Collapsed edges.** If $x$ has some but not all consecutive pairs equal (say $x_i=x_{i+1}$), then that edge contributes $0$ to mesh, length and energy, the midpoint of the degenerate pair is $x_i$, and the estimates of [[lem-cg-polygon-midpoint-drop-and-equality]] (ii) and its equality analysis remain valid; if $x$ is nonconstant, then $E(x)>0$ and a collapsed edge puts it in the variance case of [[lem-cg-uniform-energy-decrement-and-short-class-closedness]], without applying the positive-edge perturbation estimate to that tuple. If $X$ is geodesic and $L(x)<2\pi$, deleting repeated consecutive vertices while retaining at least three entries preserves basin membership, by [[lem-cg-bowditch-quantitative-short-loop-control]] (ii).

**(iv) No uniform gap at zero.** The value $L=0$ is not excluded from the basin by the decrement argument (which is vacuous at $r=0$); it is the limiting value itself. This is why the basin is open in [[lem-cg-polygon-midpoint-drop-and-equality]] (iv) and closed in [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (iii) without a uniform positive gap near $L=0$.

## Facts & Assumptions

**Given:** A compact locally CAT(1) space $X$ with uniform radius $l<\pi/2$; a fixed $n\ge3$ and $h<l$; the function $\lambda_n$ of [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (i).

[L1] [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: the definitions of $\operatorname{mesh}$, $L$, $E$ and $f$, and the convention that the midpoint of a degenerate pair is its point.

[L2] [[lem-cg-polygon-midpoint-drop-and-equality]]: the pointwise midpoint bound, the equality analysis and the description of the basin by the limit of the iterated lengths.

[L3] [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (i): the explicit minorant defining $\lambda_n$, its continuity and positivity on $(0,2\pi)$.

[L4] [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] (ii) and [[lem-cg-comparison-product-perturbation-and-degenerate-limits]]: the quadrilateral constant $\delta$ with its domain and continuity, and the removal of the nondegeneracy hypothesis.

[L5] [[def-real-limit]], [[def-metric-space]], [[def-metric-ball]]: limits of real sequences and the metric axioms.

[L7] [[lem-cg-bowditch-quantitative-short-loop-control]] (ii): for compact geodesic locally CAT(1) $X$, short polygon loops lie in the basin exactly when they are shrinkable.

[L6] [[def-axiom-of-choice]]: AC enters only through the suppliers [L3], [L4] and [L7]; the evaluations of the explicit constants and the degenerate-edge conventions are choice-free.



## Verification

**Proof technique:** direct evaluation of the explicit constants.

1.1 **Constant tuples (i).** If $x=(p,\dots,p)$ then every consecutive distance is $0$, so $\operatorname{mesh}(x)=L(x)=E(x)=0$; every pair $(x_i,x_{i+1})$ is degenerate with midpoint $p$ by [L1], so $f(x)=x$, and then $L(f^kx)=0$ for all $k$, so $x\in C^0_h(n)$ by [L2]. The corresponding constant loop is short (length $0<2\pi$) and shrinkable through constant loops, and conversely $E(x)=0$ forces all edges to have length $0$, i.e. $x$ to be constant. [L1, L2, L5, algebra]

1.2 **Degeneracy at zero (ii).** The chosen positive minorant obeys $0<\lambda_n(2r)\le r^2/(2n^4)$, so $\lambda_n(2r)\to0$ as $r\to0^+$. No boundedness assertion about $\delta$ near a parameter-domain endpoint is needed. [L3, L5, algebra]

1.3 **Degeneracy at $2\pi$ (ii).** As $r\to\pi^-$, $\eta=(\pi-r)/2\to0$ and $\mu=\min\{r/(2n),\eta\}\to0$. The intrinsic separation construction gives $0<\delta(\eta,\mu)\le2(\mu/4)=\mu/2$, since its cut chord length is nonnegative. Therefore $0<\lambda_n(2r)\le\delta r/(2n)\le\mu r/(4n)\to0$. This proves the claimed limit using an actual bound, rather than continuity at a point outside $\delta$'s domain. [L3, L4, L5, algebra]

1.4 **Collapsed edges (iii).** A zero edge contributes zero to mesh, length and energy, and its midpoint is its endpoint by [L1]. If $x$ is nonconstant, another edge is positive and $E(x)>0$; equality of energies cannot hold, since [L2] requires all positive-length equality edges to have the same positive length, contradicting the zero edge. When $x$ is in the short basin, put $r=L(x)/2>0$ and $\Delta=E(x)-E(fx)$. The variance estimate of [L3] gives $|\xi_i-2r/n|\le n\sqrt\Delta$; at the zero edge this forces $\Delta\ge4r^2/n^4>r^2/n^4$, so the first decrement case applies. The perturbation supplier is needed instead for degenerate face triples in the small-deficit case, where all edges are $\ge r/n>0$. Finally, deleting consecutive repeated vertices preserves the normalized polygonal loop; if both lists have at least three entries, $X$ is geodesic and their common length is $<2\pi$, [L7] identifies both basin memberships with shrinkability of that same loop. Equal initial energies alone do not identify their different midpoint iterations. [L1, L2, L3, L4, L7, algebra]

2.1 **The basin criterion (ii), (iv).** The explicit $\lambda_n$ supplies no uniform positive decrement near either length endpoint, by steps 1.2 and 1.3. The basin's defining condition is $\lim_k L(f^kx)=0$, and [L2](iv) gives the equivalent eventual threshold $L(f^mx)<l/2$. Openness follows from that strict threshold; closedness inside $\{L<2\pi\}$ uses [L3]'s bounded iteration on positive compact length bands. Neither conclusion requires a positive lower bound for $\lambda_n$ near zero. [step 1.2, step 1.3, L1, L2, L3, algebra]

3.1 **Conclusion.** Clause (i) is step 1.1, clause (ii) is steps 1.2, 1.3 and 2.1, clause (iii) is step 1.4, and clause (iv) is step 2.1: the zero-length boundary is a genuine limit of the basin, the decrement function degenerates at both endpoints of $(0,2\pi)$, and degenerate edges do not disturb the estimates; AC enters only through the suppliers [L3] and [L4] ([L6]). [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, L6] ∎

