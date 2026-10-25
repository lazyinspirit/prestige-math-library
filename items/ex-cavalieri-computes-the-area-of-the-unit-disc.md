---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-cavalieri-computes-the-area-of-the-unit-disc.json
  precheck: pass
id: ex-cavalieri-computes-the-area-of-the-unit-disc
kind: example
title: "Cavalieri computes the area of the unit disc from its sections"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-real-power-continuity-and-derivatives, cor-volume-of-the-unit-n-ball]
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.7.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

Let
$$D:=\{(x,y)\in\mathbb R^2 : x^2+y^2<1\}.$$
Then
$$\lambda_2(D)=\int_{-1}^1 2\sqrt{1-x^2}\,dx=\pi.$$

## Facts & Assumptions

**Given:** The unit disc $D \subseteq \mathbb R^2$.

[L1] Tonelli computes the area of a measurable set from the lengths of its sections. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] The unit ball in $\mathbb R^2$ has area $\pi$. ([[cor-volume-of-the-unit-n-ball]])

## Verification

**Proof technique:** direct.

1.1 For $x \in [-1,1]$, the vertical section of $D$ is $$D_x=(-\sqrt{1-x^2},\sqrt{1-x^2}),$$ so $\lambda_1(D_x)=2\sqrt{1-x^2}$; outside $[-1,1]$ the section is empty. Applying [L1] to $\mathbf 1_D$ therefore gives $$\lambda_2(D)=\int_{-1}^1 2\sqrt{1-x^2}\,dx.$$ [L1]

2.1 The same set $D$ is the unit ball in $\mathbb R^2$, so [L2] gives $$\int_{-1}^1 2\sqrt{1-x^2}\,dx=\lambda_2(D)=\pi.$$ [L2, step 1.1] ∎


## Remarks

The illustration shows a representative section at $0<x_0<1$. The dashed circle and open endpoints are excluded from the open disc $D$; the section is the open interval between the two endpoints. Its length is the integrand in the area formula.

```tikz
\begin{tikzpicture}[scale=2.2]
\fill[blue!10] (0,0) circle (1);
\draw[dashed] (0,0) circle (1);
\draw[->] (-1.3,0) -- (1.5,0) node[right] {$x$};
\draw[->] (0,-1.3) -- (0,1.35) node[above] {$y$};
\node[below left] at (0,0) {$0$};
\node[below] at (-1,0) {$-1$};
\node[below] at (1,0) {$1$};
\node at (-0.45,0.4) {$D$};
\draw[very thick,blue] (0.5,-0.8660254) -- (0.5,0.8660254);
\draw[draw=blue,fill=white,line width=0.7pt] (0.5,0.8660254) circle (0.055);
\draw[draw=blue,fill=white,line width=0.7pt] (0.5,-0.8660254) circle (0.055);
\node[below right] at (0.5,0) {$x_0$};
\node[above right] at (0.5,0.8660254) {$y=\sqrt{1-x_0^2}$};
\node[below right] at (0.5,-0.8660254) {$y=-\sqrt{1-x_0^2}$};
\draw[<->] (1.6,-0.8660254) -- (1.6,0.8660254);
\node[right] at (1.6,0.35) {$2\sqrt{1-x_0^2}$};
\end{tikzpicture}
```
