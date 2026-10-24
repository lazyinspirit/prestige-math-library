---
id: ex-strip-to-disc-biholomorphism-by-exponential-and-cayley
kind: example
title: "A horizontal strip is mapped biholomorphically to the disc by an exponential and a Cayley transform"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-principal-exponential-biholomorphism-from-principal-strip, thm-upper-half-plane-automorphisms-are-real-mobius-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

Let

$$S:=\{\,z\in\mathbb C:0<\operatorname{Im}z<\pi\,\}.$$

The map

$$\Phi(z):=\frac{e^z-i}{e^z+i}$$

is a biholomorphism from $S$ onto the unit disc $\mathbb D$.

## Facts & Assumptions

**Given:** The strip $S$ and the map $\Phi$ above.

[F1] The exponential is holomorphic on $\mathbb C$, and in particular on $S$ ([[thm-principal-exponential-biholomorphism-from-principal-strip]]).

[F2] The upper half-plane is the domain $$\mathbb H=\{\,w\in\mathbb C:\operatorname{Im}w>0\,\},$$ and Möbius maps with real coefficients give its automorphisms ([[thm-upper-half-plane-automorphisms-are-real-mobius-maps]]).

## Verification

1.1 If $z=x+iy\in S$, then $0<y<\pi$, so $e^z=e^x(\cos y+i\sin y)$ has imaginary part $e^x\sin y>0$; hence $e^z\in\mathbb H$. [F1, given]

2.1 For $w=u+iv\in\mathbb H$ one has $|w-i|^2=u^2+(v-1)^2<u^2+(v+1)^2=|w+i|^2$, so $C(w):=(w-i)/(w+i)$ satisfies $|C(w)|<1$ and maps $\mathbb H$ into $\mathbb D$. [step 1.1, algebra]

3.1 The inverse Möbius map is $C^{-1}(\zeta)=i(1+\zeta)/(1-\zeta)$; for $|\zeta|<1$, the identity $\operatorname{Im}\!\left(i\frac{1+\zeta}{1-\zeta}\right)=\frac{1-|\zeta|^2}{|1-\zeta|^2}>0$ shows $C^{-1}(\zeta)\in\mathbb H$, so [F2] confirms that this Cayley map is exactly the standard upper-half-plane automorphism sending $\mathbb H$ biholomorphically to $\mathbb D$. Together with step 1.1, this makes $\Phi=C\circ e^z:S\to\mathbb D$ biholomorphic. [F2, step 2.1, algebra] ∎


## Remarks

The illustration shows the two stages $S\xrightarrow{\exp}\mathbb H\xrightarrow{C}\mathbb D$, where $C(w)=(w-i)/(w+i)$. The strip and half-plane are shown only in finite windows; dashed boundaries are excluded from the domains.

```tikz
\begin{tikzpicture}[scale=0.9]
\path[use as bounding box] (-0.3,-0.6) rectangle (11.6,3.5);
\fill[blue!10] (0,0) rectangle (2.8,2.2);
\draw[dashed] (0,0) -- (2.8,0);
\draw[dashed] (0,2.2) -- (2.8,2.2);
\node at (1.4,3.1) {$S$};
\node[below] at (1.4,0) {$\mathrm{Im}z=0$};
\node[above] at (1.4,2.2) {$\mathrm{Im}z=\pi$};
\fill (1.4,1.1) circle (0.04);
\node[above] at (1.4,1.1) {$i\pi/2$};
\draw[->] (3.0,1.1) -- (4.2,1.1);
\node[above] at (3.6,1.1) {$\exp$};
\fill[blue!10] (4.5,0) rectangle (7.1,2.2);
\draw[dashed] (4.5,0) -- (7.1,0);
\node at (5.8,3.1) {$\mathbb H$};
\node[below] at (4.9,0) {$-r$};
\node[below] at (5.8,0) {$0$};
\node[below] at (6.7,0) {$r$};
\fill (5.8,1.1) circle (0.04);
\node[above] at (5.8,1.1) {$i$};
\draw[->] (7.3,1.1) -- (8.5,1.1);
\node[above] at (7.9,1.1) {$C$};
\fill[blue!10] (10,1.1) circle (1.1);
\draw[dashed] (10,1.1) circle (1.1);
\node at (10,3.1) {$\mathbb D$};
\fill (10,1.1) circle (0.04);
\node[above] at (10,1.1) {$0$};
\node[left] at (8.9,1.1) {$-1$};
\node[right] at (11.1,1.1) {$1$};
\end{tikzpicture}
```

For $r=e^x>0$, the lower strip edge $x$ maps to $r$, and the upper edge $x+i\pi$ maps to $-r$. Under $C$, the positive real ray maps to the lower unit semicircle and the negative real ray to the upper unit semicircle. The boundary limits $r\to0$ and $r\to\infty$ map to $-1$ and $1$, respectively; neither endpoint belongs to the open domains. The marked interior points satisfy $\exp(i\pi/2)=i$ and $C(i)=0$. These boundary correspondences illustrate the formula; the verification above is independent of the picture.
