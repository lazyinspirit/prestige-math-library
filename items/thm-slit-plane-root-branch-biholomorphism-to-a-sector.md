---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-slit-plane-root-branch-biholomorphism-to-a-sector.json
  precheck: pass
id: thm-slit-plane-root-branch-biholomorphism-to-a-sector
kind: theorem
title: "A slit-plane root branch biholomorphically parametrizes a sector"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-power-from-holomorphic-logarithm-branch, cor-principal-logarithm-is-holomorphic-on-the-slit-plane, thm-branch-power-agrees-with-integer-powers, thm-complex-exponential-is-entire-with-derivative-itself, def-biholomorphic-map]
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

## Statement

Let $n\ge1$ be an integer, let

$$S:=\mathbb C\setminus\{x\in\mathbb R:x\le0\},\qquad V_n:=\{\,re^{i\theta}:r>0,\ -\pi/n<\theta<\pi/n\,\},$$

and define

$$R_n(z):=\exp\!\left(\frac{\operatorname{Log}z}{n}\right)\qquad(z\in S).$$

Then $R_n$ is a biholomorphism from $S$ onto $V_n$, and its inverse is the
power map $w\mapsto w^n$ on $V_n$.

## Facts & Assumptions

**Given:** The integer $n\ge1$, the slit plane $S$, and the map $R_n$ above.

[F1] The principal logarithm is holomorphic on $S$ and satisfies $\exp(\operatorname{Log}z)=z$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F2] Branch powers are defined by $z^\alpha_L=\exp(\alpha L(z))$ ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F3] For integer exponents, branch powers agree with ordinary powers ([[thm-branch-power-agrees-with-integer-powers]]).

[F4] A map is biholomorphic when it is bijective, holomorphic, and has holomorphic inverse ([[def-biholomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{Log}$ is holomorphic on $S$ by [F1], the map $R_n(z)=\exp(\operatorname{Log}z/n)$ is holomorphic on $S$; if $z=re^{i\theta}$ with $-\pi<\theta<\pi$, then $\arg R_n(z)=\theta/n\in(-\pi/n,\pi/n)$, so $R_n[S]\subseteq V_n$. [F1, given, algebra]

2.1 If $w\in V_n$, write $w=re^{i\theta}$ with $r>0$ and $-\pi/n<\theta<\pi/n$. Then $w^n=r^ne^{in\theta}$ lies in $S$ because $n\theta\in(-\pi,\pi)$, and the principal logarithm of $w^n$ is $$\operatorname{Log}(w^n)=\log(r^n)+in\theta=n(\log r+i\theta).$$ Therefore $$R_n(w^n)=\exp\!\left(\frac{\operatorname{Log}(w^n)}{n}\right)=\exp(\log r+i\theta)=w.$$ [F1, step 1.1, algebra]

3.1 For $z\in S$, [F2] with [F3] gives $(R_n(z))^n=\exp(\operatorname{Log}z)=z$ by [F1], so the inverse of $R_n$ on $V_n$ is $w\mapsto w^n$. Therefore [F4] makes $R_n:S\to V_n$ biholomorphic. [F1, F2, F3, F4, step 2.1, algebra] ∎

## Remarks

The illustration shows $n=3$: the principal root divides arguments by three,
and its inverse triples them. Dashed red rays and the open origins are excluded.
The shaded regions are displayed only in finite circular windows; their outer
arcs are not boundaries of the domains. In general the sector angles are
$\pm\pi/n$; when $n=1$, $V_1=S$ and $R_1$ is the identity.
The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=1.05]
\fill[blue!10] (0,0) circle (1.65);
\draw[->,gray] (-1.9,0)--(1.95,0) node[right] {$\mathrm{Re}\,z$};
\draw[->,gray] (0,-1.9)--(0,1.95) node[above] {$\mathrm{Im}\,z$};
\draw[red,dashed,thick] (-1.7,0)--(0,0);
\filldraw[fill=white,draw=red] (0,0) circle (0.055);
\node at (0,-2.25) {$S:\ -\pi<\arg z<\pi$};
\begin{scope}[xshift=7cm]
\fill[blue!10] (0,0)--(60:1.65) arc (60:-60:1.65)--cycle;
\draw[->,gray] (-1.0,0)--(2.0,0) node[right] {$\mathrm{Re}\,w$};
\draw[->,gray] (0,-1.9)--(0,1.95) node[above] {$\mathrm{Im}\,w$};
\draw[red,dashed,thick] (0,0)--(60:1.8) node[above right] {$\pi/3$};
\draw[red,dashed,thick] (0,0)--(-60:1.8) node[below right] {$-\pi/3$};
\filldraw[fill=white,draw=red] (0,0) circle (0.055);
\node at (0.4,-2.25) {$V_3:\ -\pi/3<\arg w<\pi/3$};
\end{scope}
\draw[->,thick] (2.5,0.6)--(5.1,0.6) node[midway,above] {$z\mapsto R_3(z)$};
\draw[->,thick] (5.1,-0.6)--(2.5,-0.6) node[midway,below] {$w\mapsto w^3$};
\end{tikzpicture}
```
