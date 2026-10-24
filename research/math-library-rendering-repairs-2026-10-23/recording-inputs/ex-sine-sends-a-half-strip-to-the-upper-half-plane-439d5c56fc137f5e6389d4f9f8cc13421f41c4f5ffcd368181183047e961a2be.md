---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-sine-sends-a-half-strip-to-the-upper-half-plane.json
  precheck: pass
id: ex-sine-sends-a-half-strip-to-the-upper-half-plane
kind: example
title: "Boundary tracking for the sine biholomorphism of the upper half-strip"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sine-biholomorphism-from-upper-half-strip]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Let

$$S:=\{\,z\in\mathbb C:-\pi/2<\operatorname{Re}z<\pi/2,\ \operatorname{Im}z>0\,\}.$$

The boundary components of $S$ map under $\sin$ to the real axis:

$$\sin\bigl(\pi/2+iy\bigr)=\cosh y,\qquad \sin\bigl(-\pi/2+iy\bigr)=-\cosh y,\qquad \sin x\in(-1,1)\text{ for }x\in(-\pi/2,\pi/2).$$

Thus the sine biholomorphism of
[[thm-sine-biholomorphism-from-upper-half-strip]] carries the whole boundary of
$S$ onto $\mathbb R$.

## Facts & Assumptions

**Given:** The upper half-strip $S$ above.

[F1] The sine map biholomorphically sends $S$ onto the upper half-plane ([[thm-sine-biholomorphism-from-upper-half-strip]]).

## Verification

1.1 For $y>0$, $\sin\bigl(\pi/2+iy\bigr)=\sin(\pi/2)\cosh y+i\cos(\pi/2)\sinh y=\cosh y>0$, and similarly $\sin\bigl(-\pi/2+iy\bigr)=-\cosh y<0$. [given, algebra]

2.1 For real $x\in(-\pi/2,\pi/2)$ one has $\sin x\in(-1,1)\subset\mathbb R$; together with step 1.1, every boundary component of $S$ maps into $\mathbb R$, and [F1] identifies the interior image as $\mathbb H$. [F1, step 1.1, algebra] ∎

## Remarks

The sketch tracks the continuous extension of sine to the finite boundary of $S$. The colored boundary lines are excluded from $S$; the corner points map to $-1$ and $1$. Arrows on the vertical sides indicate increasing $y$, and the bottom arrow indicates increasing $x$. Their image arrows follow $-\cosh y$, $\cosh y$, and $\sin x$, respectively. The picture is schematic and the verification above is independent of it.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.1,font=\large]
\fill[blue!10] (-1.5,0) rectangle (1.5,2.9);
\draw[->,gray] (-2,0) -- (2,0) node[right] {$\mathrm{Re}z$};
\draw[->,gray] (0,-0.25) -- (0,3.25) node[above] {$\mathrm{Im}z$};
\draw[thick,blue,->] (-1.5,0) -- (-1.5,2.9);
\draw[thick,red,->] (1.5,0) -- (1.5,2.9);
\draw[thick,green!55!black,->] (-1.5,0) -- (1.5,0);
\fill (-1.5,0) circle (1.5pt) node[below] {$-\pi/2$};
\fill (1.5,0) circle (1.5pt) node[below] {$\pi/2$};
\node at (0.7,1.4) {$S$};
\node[blue,left] at (-1.5,1.6) {$y\uparrow$};
\node[red,right] at (1.5,1.6) {$y\uparrow$};
\node[green!55!black,below] at (0,-0.4) {$x\ \longrightarrow$};
\draw[->,thick] (2.6,1.5) -- (4.2,1.5) node[midway,above] {$w=\sin z$};
\begin{scope}[xshift=7.5cm]
\fill[blue!10] (-2.6,0) rectangle (2.6,2.9);
\draw[->,gray] (-2.9,0) -- (3,0) node[right] {$\mathrm{Re}w$};
\draw[->,gray] (0,-0.25) -- (0,3.25) node[above] {$\mathrm{Im}w$};
\draw[thick,blue,->] (-1,0) -- (-2.6,0);
\draw[thick,green!55!black,->] (-1,0) -- (1,0);
\draw[thick,red,->] (1,0) -- (2.6,0);
\fill (-1,0) circle (1.5pt) node[below] {$-1$};
\fill (1,0) circle (1.5pt) node[below] {$1$};
\node[blue,above] at (-1.9,0.1) {$-\cosh y$};
\node[green!55!black,below] at (0,-0.4) {$\sin x$};
\node[red,above] at (1.9,0.1) {$\cosh y$};
\node at (1.2,1.5) {$\mathbb H$};
\end{scope}
\end{tikzpicture}
```
