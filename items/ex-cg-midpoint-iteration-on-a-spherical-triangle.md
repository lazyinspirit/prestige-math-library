---
id: ex-cg-midpoint-iteration-on-a-spherical-triangle
kind: example
title: "Midpoint iteration on a small equilateral spherical triangle contracts geometrically to its centre"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [cor-inner-product-induces-a-norm, def-real-and-complex-inner-product-space, def-euclidean-spheres-and-closed-balls, cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-metric-ball, def-metric-space, def-principal-inverse-sine-and-cosine, lem-cg-comparison-convexity-and-model-spaces, lem-cg-polygon-midpoint-drop-and-equality, lem-cg-uniform-energy-decrement-and-short-class-closedness, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-addition-formulas, cor-sin-x-over-x-limit, cor-monotone-converges-iff-bounded]
proof_strategy: direct
axiom_use: "AC enters through the cited general quantitative or short-loop criterion; the explicit model-space computations require no additional choice."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.1–3.3.6, printed pp. 20–23 (midpoint polygons on the sphere and the equality case)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.2.1–I.2.3 (the round sphere and its law of cosines)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice for the cited uniform decrement. Let $S^2$ be the round unit sphere with the metric $d_S(x,y)=\arccos(x\cdot y)$ ([[lem-cg-comparison-convexity-and-model-spaces]], [[def-cg-cat-zero-cat-one-and-local-geodesic]]) and let $0<s<\pi/2$. Let $x=(x_0,x_1,x_2)$ be the vertices of the equilateral spherical triangle of side $s$ centred at the north pole; fix a uniform local radius of the page with $s<l<\pi/2$ and $x\in P_h(3)$. Then:

**(i)** $fx$ is again an equilateral triangle centred at the north pole, with side
$$s_1=\arccos\Bigl(\frac{1+3\cos s}{2+2\cos s}\Bigr)<s,$$
so $L(fx)=3s_1<3s=L(x)$, $E(fx)=3s_1^2<3s^2=E(x)$ and $\operatorname{mesh}(fx)=s_1<s=\operatorname{mesh}(x)$ ([[def-metric-ball]]).

**(ii)** Iterating, each $f^k x$ is equilateral with side $s_k$ given by $s_{k+1}=\arccos((1+3\cos s_k)/(2+2\cos s_k))$, and $s_k\downarrow0$; hence $x$ lies in the zero-limit basin $C^0_h(3)$, the iterates converge to the constant tuple at the north pole, and the drop agrees with [[lem-cg-polygon-midpoint-drop-and-equality]] (ii) and [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (i).

**(iii)** The equality case [[lem-cg-polygon-midpoint-drop-and-equality]] (iii) does not occur: $E(fx)<E(x)$, and the deficit is strictly positive for every $s>0$.

## Facts & Assumptions

**Given:** The round unit sphere $S^2$ with its intrinsic metric; a real $s$ with $0<s<\pi/2$; the equilateral triangle centred at the north pole with vertices $x_0,x_1,x_2$ at pairwise distance $s$.

[L1] [[lem-cg-comparison-convexity-and-model-spaces]]: comparison triangles and the spherical cosine rule on $S^2$, the midpoint identity $\cos d_S(x,a)=(\cos d_S(x,y)+\cos d_S(x,z))/(2\cos(d_S(y,z)/2))$, and the convexity of balls of radius $<\pi/2$.

[L2] [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]] and [[lem-cg-polygon-midpoint-drop-and-equality]]: the midpoint operation $f$, the quantities $\operatorname{mesh},L,E$, the zero-limit basin $C^0_h(n)$, and the equality case.

[L3] [[thm-sine-and-cosine-addition-formulas]], [[cor-sin-x-over-x-limit]], [[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-pi-is-the-first-positive-sine-zero]]: $\cos$ strictly decreasing on $[0,\pi]$, $\arccos$ its inverse there, and $\sin>0$ on $(0,\pi)$.

[L4] [[def-metric-space]], [[def-metric-ball]], [[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-euclidean-spheres-and-closed-balls]]: balls, the triangle inequality, and unit-vector coordinates with Euclidean dot products on $S^2$.

[L5] [[def-axiom-of-choice]]: AC enters only through the supplier [[lem-cg-uniform-energy-decrement-and-short-class-closedness]]; the explicit spherical computation is choice-free.



## Verification

**Proof technique:** explicit spherical computation.

1.1 **The actual midpoint side.** Represent the vertices by unit vectors $u_0,u_1,u_2$ with $u_i\cdot u_j=c:=\cos s\in(0,1)$ for $i\ne j$. The midpoint of the short arc from $u_i$ to $u_j$ is $(u_i+u_j)/\sqrt{2+2c}$. Two adjacent such midpoints have dot product $(u_i+u_j)\cdot(u_j+u_k)/(2+2c)=(1+3c)/(2+2c)$, so their spherical distance is $s_1=\arccos((1+3c)/(2+2c))$. The rotational symmetry fixes the north pole and permutes these midpoints, so the midpoint triangle is equilateral with that same centre. [L1, L3, L4, algebra]

2.1 **Strict contraction.** For $0<c<1$, the quotient $u=(1+3c)/(2+2c)$ satisfies $u<1$ and $u-c=(1-c)(1+2c)/(2+2c)>0$. Thus $0<s_1=\arccos u<\arccos c=s$ by [L3]. [step 1.1, L3, algebra]

3.1 **The midpoint triangle is equilateral (i).** The symmetry group of the equilateral triangle acts transitively on its vertices and fixes the centre $N$; the midpoint operation is equivariant under isometries of $S^2$, so $fx$ is again an equilateral triangle with centre $N$ and side $s_1$; hence $L(fx)=3s_1$, $E(fx)=3s_1^2$ and $\operatorname{mesh}(fx)=s_1$, and step 2.1 gives the strict inequalities of (i). [step 1.1, step 2.1, L2, algebra]

4.1 **The iteration contracts to zero (ii).** By step 3.1 applied to each iterate, $f^kx$ is equilateral with side $s_k$, where $s_{k+1}=\arccos((1+3\cos s_k)/(2+2\cos s_k))$, and $(s_k)$ is strictly decreasing and bounded below by $0$; hence it converges to some $\lambda\ge0$ by [[cor-monotone-converges-iff-bounded]], and continuity of the recursion ([L1], [L3]) gives $c_\infty=(1+3c_\infty)/(2+2c_\infty)$ with $c_\infty=\cos\lambda>0$, so $(c_\infty-1)(2c_\infty+1)=0$ and $c_\infty=1$, hence $\lambda=0$. Moreover $1-\cos s_{k+1}=(1-\cos s_k)/(2+2\cos s_k)\le(1-\cos s_k)/2$, so $\sin(s_k/2)\le2^{-k/2}\sin(s_0/2)$. Since $s_k\le s_0<\pi/2$, [[cor-sin-x-over-x-limit]] bounds $u/\sin u$ near zero; away from zero its numerator is bounded and its denominator is bounded below by [L3]. Thus $s_k\le C2^{-k/2}$ for some $C>0$, establishing the geometric rate in the title. Therefore $L(f^kx)=3s_k\to0$, so $x\in C^0_h(3)$ by the description of the basin [L2]. Moreover $L(f^kx)=3s_k\in(0,2\pi)$ for every $k$, so the uniform decrement of [L5] applies to each iterate and gives $E(f^{k+1}x)\le E(f^kx)-\lambda_3(3s_k)$, in agreement with the strict drop computed in step 3.1. [step 3.1, L2, L3, L5, algebra]

4.2 **The equality case does not occur (iii).** By step 3.1, $E(fx)=3s_1^2<3s^2=E(x)$ for every $s>0$, so the tuple is neither constant nor equally spaced along a closed local geodesic; the deficit $E(x)-E(fx)$ is strictly positive and the equality characterization of [L2](iii) does not apply. [step 3.1, L2, algebra]

5.1 **Convergence to the constant tuple.** The three vertex vectors have equal dot product with the north-pole vector $N$ and sum to a positive multiple of $N$. Thus $\cos^2\rho_k=(1+2\cos s_k)/3$, by squaring their sum; since $s_k\to0$, $\rho_k\to0$; hence the iterates converge uniformly to the constant tuple at the north pole. [step 4.1, L4, algebra]

6.1 **Conclusion.** Clause (i) is steps 1.1, 2.1 and 3.1, clause (ii) is steps 4.1 and 5.1, and clause (iii) is step 4.2: the midpoint iteration on a small equilateral spherical triangle stays equilateral, contracts the side strictly, converges to the centre and realises a strict energy drop at every step. [step 1.1, step 3.1, step 4.1, step 5.1, step 4.2] ∎
