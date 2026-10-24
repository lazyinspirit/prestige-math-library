---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-helicoid-model-of-the-logarithm-surface.json
  precheck: pass
id: ex-helicoid-model-of-the-logarithm-surface
kind: example
title: "The logarithm surface admits the standard helicoid model"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-surface-of-the-logarithm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Write $w=x+iy$. Under the biholomorphism
$\Lambda:\mathcal R_{\log}\to\mathbb C$ of
[[thm-riemann-surface-of-the-logarithm]], the logarithm surface is modeled in
$\mathbb R^3$ by the helicoid

$$H(w):=(e^x\cos y,\ e^x\sin y,\ y).$$

Its projection to the first two coordinates is the punctured-plane point
$e^w \in \mathbb C^\times$.

## Facts & Assumptions

**Given:** The biholomorphism $\Lambda:\mathcal R_{\log}\to\mathbb C$.

[L1] The logarithm surface is biholomorphic to $\mathbb C$, and its projection corresponds to $\exp$ ([[thm-riemann-surface-of-the-logarithm]]).

## Verification

**Proof technique:** direct.

1.1 Writing $w=x+iy$, Euler's formula gives $e^w=e^x(\cos y+i\sin y)$. So the first two coordinates of $H(w)$ are exactly the complex number $e^w$. [given, algebra]

2.1 By [L1], the point of the logarithm surface corresponding to $w$ projects to $e^w$. Step 1.1 therefore identifies the abstract surface with the standard helicoid model in $\mathbb R^3$, whose vertical coordinate records the argument before taking it modulo $2\pi$. [L1, step 1.1] ∎


## Remarks

The illustration shows only the patch $H(\log r+i\theta)$ with
$3/5\le r\le17/10$ and $\pi/4\le\theta\le3\pi/4$; its boundary is a
plotting cutoff, not a boundary of the full surface. The full model has
$r>0$ and $\theta\in\mathbb R$. Its height is exactly $Z=\theta$, with
no reduction modulo $2\pi$, and its radius is $r=e^x$.

```tikz
\begin{tikzpicture}[scale=1.45, x={(1cm,0cm)}, y={(0.45cm,0.3cm)}, z={(0cm,0.8cm)}, >=stealth]
\path[use as bounding box] (-3,-2,0) -- (3,-2,0) -- (3,3,3.5) -- (-3,3,3.5) -- cycle;
\draw[gray] (-2,-1,0) -- (2,-1,0) -- (2,2,0) -- (-2,2,0) -- cycle;
\draw[->,gray] (-1.9,0,0) -- (2.2,0,0) node[right] {$X$};
\draw[->,gray] (0,-0.8,0) -- (0,2.2,0) node[above right] {$Y$};
\draw[->,gray] (0,0,0) -- (0,0,3) node[above] {$Z$};
\draw[gray,fill=white] (0,0,0) circle (1.3pt);
\node[below left] at (0,0,0) {$0$};
\node[right] at (1.8,-0.65,0) {$\mathbb C^\times$};
\fill[blue!18] plot[domain=45:135,samples=45,variable=\t] ({1.7*cos(\t)},{1.7*sin(\t)},{\t*pi/180})
 -- plot[domain=135:45,samples=45,variable=\t] ({0.6*cos(\t)},{0.6*sin(\t)},{\t*pi/180}) -- cycle;
\foreach \r in {0.6,0.875,1.15,1.425,1.7} {
 \draw[blue!65!black] plot[domain=45:135,samples=45,variable=\t] ({\r*cos(\t)},{\r*sin(\t)},{\t*pi/180});
}
\foreach \t in {45,60,75,90,105,120,135} {
 \draw[blue!65!black] ({0.6*cos(\t)},{0.6*sin(\t)},{\t*pi/180}) -- ({1.7*cos(\t)},{1.7*sin(\t)},{\t*pi/180});
}
\fill (0,1,1.570796) circle (1.6pt);
\node[right] at (0,1,1.570796) {$H(i\pi/2)$};
\draw[->,dashed,thick] (0,1,1.51) -- (0,1,0.08);
\fill (0,1,0) circle (1.6pt);
\node[right] at (0,1,0) {$i$};
\node[left] at (-1.6,1.4,2.7) {$Z=\theta$};
\end{tikzpicture}
```

The dashed arrow is the restriction of
$\pi_{XY}:H(\mathbb C)\to\mathbb C^\times$,
$(X,Y,Z)\mapsto X+iY$: here $H(i\pi/2)=(0,1,\pi/2)$ projects to $i$.
In general $\pi_{XY}\circ H=\exp$. The deck translations are
$w\mapsto w+2\pi i k$, $k\in\mathbb Z$, corresponding to
$(X,Y,Z)\mapsto(X,Y,Z+2\pi k)$ on the full model. Thus points with the
same planar projection can have different heights. On
$-\pi<\theta<\pi$ the projection gives the principal branch over
$\mathbb C\setminus(-\infty,0]$; the height convention does not define
a single-valued logarithm on all of $\mathbb C^\times$.
