---
id: ex-hyperspherical-coordinate-jacobian
kind: example
title: "The hyperspherical-coordinate Jacobian is the standard product of a radial power and sine powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobian-determinant-of-a-c-one-map, thm-determinant-multiplicative, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-induction-principle, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

For $n\ge2$, write hyperspherical coordinates as
$$\begin{aligned}x_1&=r\cos\phi_1,\\x_2&=r\sin\phi_1\cos\phi_2,\\&\ \vdots\\x_{n-1}&=r\sin\phi_1\cdots\sin\phi_{n-2}\cos\theta,\\x_n&=r\sin\phi_1\cdots\sin\phi_{n-2}\sin\theta.\end{aligned}$$
Its absolute Jacobian determinant is
$$r^{n-1}\sin^{n-2}\phi_1\sin^{n-3}\phi_2\cdots\sin\phi_{n-2}.$$
On compact boxes with $r>0$, every $\phi_j$ strictly between $0$ and $\pi$, and $\theta$ in a seam-free interval such as $[0,\pi/2]$, the factor is nonzero and the map is injective.

## Facts & Assumptions

**Given:** The displayed coordinate convention in every dimension $n\ge2$.

[L1] Sine and cosine have their standard derivatives and satisfy $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] Determinants multiply under matrix products ([[thm-determinant-multiplicative]]).

[L3] Mathematical induction proves a statement from its base case and induction step ([[thm-induction-principle]]).

[L4] Cosine is strictly decreasing on $[0,\pi]$, and sine vanishes there only at the endpoints ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Verification

**Proof technique:** induction.

1.1 For $n=2$, the formula is the polar determinant $r$, with the empty product of sine factors equal to $1$. Direct differentiation verifies it, while the image norm and strict cosine monotonicity recover the radius and seam-free angle. [L1, L4, base]

1.2 Assume the formula in dimension $n$. In dimension $n+1$, split off the first angle: the coordinate vector is $(r\cos\phi_1,r\sin\phi_1\,\omega)$ with $\omega$ on the unit sphere in $\mathbb R^n$. Arrange the derivative columns into the radial, $\phi_1$, and lower-dimensional angular blocks. [IH, assume-hyp]

2.1 Expanding this block determinant contributes $r^n\sin^{n-1}\phi_1$ times the unit-radius angular factor from step 1.2; [L2] and the induction hypothesis supply the remaining powers. On the stated boxes, the image norm recovers $r$, then successive coordinate ratios and strict cosine monotonicity [L4] recover every $\phi_j$, and the final planar pair recovers $\theta$. The sine factors do not vanish, so the map is injective with nonzero determinant. This proves the formula and box claim in dimension $n+1$, and [L3] completes the induction. [L2, L3, L4, step 1.2, discharge-induction: base and induction step] ∎
