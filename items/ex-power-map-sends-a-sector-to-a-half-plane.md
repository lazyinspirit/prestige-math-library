---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-power-map-sends-a-sector-to-a-half-plane.json
  precheck: pass
id: ex-power-map-sends-a-sector-to-a-half-plane
kind: example
title: "A power map sends a sector to a half-plane"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sector-power-map-is-biholomorphic-on-narrow-sectors]
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

$$S:=\{\,re^{i\theta}:r>0,\ -\pi/4<\theta<\pi/4\,\}.$$

Then the square map $z\mapsto z^2$ biholomorphically sends $S$ onto the right
half-plane

$$\{\,w\in\mathbb C:\operatorname{Re}w>0\,\}.$$

## Facts & Assumptions

**Given:** The sector $S$ above.

[F1] On sectors of angular width less than $\pi$, the square map is a biholomorphism onto the angle-doubled sector ([[thm-sector-power-map-is-biholomorphic-on-narrow-sectors]]).

## Verification

1.1 The argument interval of $S$ is $(-\pi/4,\pi/4)$, which has width $\pi/2<\pi$, so [F1] applies to $z\mapsto z^2$. [F1, given]

2.1 Doubling the argument interval gives $(-\pi/2,\pi/2)$, hence the image is $\{\,\rho e^{i\phi}:\rho>0,\ -\pi/2<\phi<\pi/2\,\}$, which is exactly the right half-plane. Therefore $z\mapsto z^2$ is a biholomorphism from $S$ onto $\{\,\operatorname{Re}w>0\,\}$. [F1, step 1.1, algebra] ∎


## Remarks

The shaded regions below are schematic portions of the unbounded open sector and right half-plane. Dashed boundary rays and the origin are excluded. The boundary angles indicate limiting directions: the map doubles angles and squares radii, so $z=re^{i\theta}$ maps to $w=r^2e^{2i\theta}$. The verification above is independent of the picture.

```tikz
\begin{tikzpicture}[scale=0.95,>=stealth]
\begin{scope}
\fill[blue!12] (0,0) -- (2.7,-2.7) -- (2.7,2.7) -- cycle;
\draw[->] (-0.5,0) -- (3.1,0) node[right] {$\mathrm{Re}z$};
\draw[->] (0,-2.8) -- (0,2.9) node[above] {$\mathrm{Im}z$};
\draw[dashed,->] (0,0) -- (2.7,2.7);
\draw[dashed,->] (0,0) -- (2.7,-2.7);
\node[above left] at (2.1,2.1) {$\pi/4$};
\node[below left] at (2.1,-2.1) {$-\pi/4$};
\draw[->] (0.7,0) arc (0:20:0.7);
\node at (0.95,0.2) {$\theta$};
\draw[blue,->] (0,0) -- (20:1.5);
\fill[blue] (20:1.5) circle (1.5pt);
\node[above right] at (20:1.5) {$z=re^{i\theta}$};
\draw[fill=white] (0,0) circle (2pt);
\node[below left] at (0,0) {$0$};
\node at (1,-3.25) {$S:\ -\pi/4<\theta<\pi/4$};
\end{scope}
\draw[->,thick] (3.8,0.7) -- (5.6,0.7) node[midway,above] {$z\mapsto z^2$};
\begin{scope}[shift={(7,0)}]
\fill[blue!12] (0,-2.7) rectangle (3.0,2.7);
\draw[->] (-0.5,0) -- (3.4,0) node[right] {$\mathrm{Re}w$};
\draw[dashed,<->] (0,-2.8) -- (0,2.9) node[above] {$\mathrm{Im}w$};
\node[left] at (0,2.1) {$\pi/2$};
\node[left] at (0,-2.1) {$-\pi/2$};
\draw[->] (0.7,0) arc (0:40:0.7);
\node at (0.95,0.35) {$2\theta$};
\draw[blue,->] (0,0) -- (40:2.25);
\fill[blue] (40:2.25) circle (1.5pt);
\node[above] at (1.8,1.8) {$w=r^2e^{2i\theta}$};
\draw[fill=white] (0,0) circle (2pt);
\node[below left] at (0,0) {$0$};
\node at (1.3,-3.25) {$\mathrm{Re}w>0$};
\end{scope}
\end{tikzpicture}
```
