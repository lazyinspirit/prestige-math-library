---
id: ex-hyperspherical-coordinate-jacobian
kind: example
title: "The hyperspherical-coordinate Jacobian is the standard product of a radial power and sine powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobian-determinant-of-a-c-one-map, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-induction-principle, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §5.5"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

For $n=2$, use the polar coordinates $x_1=r\cos\theta$ and $x_2=r\sin\theta$. For $n\ge3$, write hyperspherical coordinates as
$$\begin{aligned}x_1&=r\cos\phi_1,\\x_k&=r\left(\prod_{j=1}^{k-1}\sin\phi_j\right)\cos\phi_k\quad(2\le k\le n-2),\\x_{n-1}&=r\left(\prod_{j=1}^{n-2}\sin\phi_j\right)\cos\theta,\\x_n&=r\left(\prod_{j=1}^{n-2}\sin\phi_j\right)\sin\theta.\end{aligned}$$
Its absolute Jacobian determinant is
$$r^{n-1}\sin^{n-2}\phi_1\sin^{n-3}\phi_2\cdots\sin\phi_{n-2}.$$
On compact boxes with $r>0$, every $\phi_j$ in a compact subinterval of $(0,\pi)$, and $\theta\in[\pi/6,\pi/3]$, the factor is nonzero and the map is injective.

## Facts & Assumptions

**Given:** The displayed coordinate convention in every dimension $n\ge2$.

[L1] Sine and cosine have their standard derivatives and satisfy $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The determinant is the finite signed-permutation sum ([[def-determinant-of-a-square-matrix]]), and for same-sized finite square matrices over a commutative ring one has $\det(AB)=\det(A)\det(B)$ ([[thm-determinant-multiplicative]]).

[L3] Mathematical induction proves a statement from its base case and induction step ([[thm-induction-principle]]).

[L4] Cosine is strictly decreasing on $[0,\pi]$, and sine vanishes there only at the endpoints ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Verification

**Proof technique:** induction.

1.1 For $n=2$, the formula is the polar determinant $r$, with the empty product of sine factors equal to $1$. Direct differentiation verifies it, while the image norm and strict cosine monotonicity recover the radius and seam-free angle. [L1, L4, base]

1.2 Assume the formula in dimension $n$. Factor the dimension-$(n+1)$ coordinate map as $$ (r,\phi_1,\xi)\longmapsto(s,\rho,\xi)=(r\cos\phi_1,r\sin\phi_1,\xi) \longmapsto(s,\Phi_n(\rho,\xi)), $$ where $\Phi_n$ is the dimension-$n$ hyperspherical map in the induction hypothesis. [ih, assume-hyp]

2.1 By [L1] and [L2], the first map in step 1.2 has a $2\times2$ Jacobian block of determinant $r(\cos^2\phi_1+\sin^2\phi_1)=r$ and an identity block in $\xi$. The second has a $1\times1$ identity block and the Jacobian of $\Phi_n$ at radius $\rho$; [L3] will discharge the induction after this step. The signed-permutation formula gives these block determinants, and multiplicativity with the induction hypothesis gives $$r\rho^{n-1}\prod_{j=2}^{n-1}\sin^{n-j}\phi_j =r^n\sin^{n-1}\phi_1\prod_{j=2}^{n-1}\sin^{n-j}\phi_j.$$ On the stated boxes, the image norm recovers $r$, then successive coordinate ratios and strict cosine monotonicity [L4] recover every $\phi_j$, and the final planar pair recovers $\theta$. The sine factors do not vanish, so the map is injective with nonzero determinant. This proves the formula and box claim in dimension $n+1$, and [L3] completes the induction. [L1, L2, L3, L4, step 1.2, discharge-induction: base and induction step] ∎
