---
id: lem-ideal-orthoscheme-volume
kind: lemma
title: "Volume of an ideal orthoscheme region"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - def-lobachevsky-function
  - lem-lobachevsky-fourier-expansion-and-pi-third-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§9.1, Lemma 9.8 and its volume integral, printed pp.178–179"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/7.pdf"
      locator: "Chapter 7, Milnor's derivation of ideal tetrahedron volume"
---

## Statement

For $0<\zeta<\pi/2$, let
$$\mathcal O_\zeta= \{(x+iy,t)\in\mathbb H^3: 0\le x\le\cos\zeta,\quad 0\le y\le x\tan\zeta,\quad t\ge\sqrt{1-x^2-y^2}\}.$$
Its hyperbolic volume in the upper half-space metric is $\frac12\Lambda(\zeta)$.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Lemma 9.8](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Diagram

The shaded triangle is the vertical projection of $\mathcal O_\zeta$. The dashed arc is the unit circle; the vertex $(\cos\zeta,\sin\zeta)$ lies on it. The region in $\mathbb H^3$ lies above the corresponding unit hemisphere and is unbounded toward the ideal point at infinity. This is a projection only; the proof uses the stated coordinate inequalities and integral.

\begin{center}
\begin{tikzpicture}[scale=2.2]
  \def\a{38}
  \coordinate (O) at (0,0);
  \coordinate (A) at ({cos(\a)},0);
  \coordinate (B) at ({cos(\a)},{sin(\a)});
  \fill[blue!12] (O)--(A)--(B)--cycle;
  \draw[thick,blue!70!black] (O)--(A)--(B)--cycle;
  \draw[dashed] (1,0) arc[start angle=0,end angle=\a,radius=1];
  \draw[->] (-0.08,0)--(1.13,0) node[right] {$x$};
  \draw[->] (0,-0.08)--(0,0.92) node[above] {$y$};
  \draw (0.16,0) arc[start angle=0,end angle=\a,radius=0.16];
  \node[below left] at (O) {$O$};
  \node[below] at (A) {$A=(\cos\zeta,0)$};
  \node[above right] at (B) {$B=(\cos\zeta,\sin\zeta)$};
  \node at (0.28,0.09) {$\zeta$};
  \node[below right] at (0.92,0.12) {$x^2+y^2=1$};
\end{tikzpicture}
\end{center}

## Facts & Assumptions

**Given:** The region $\mathcal O_\zeta$ and $0<\zeta<\pi/2$.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] gives the upper half-space metric with volume density $dx\,dy\,dt/t^3$.

[F2] [[def-lobachevsky-function]] defines $\Lambda(\theta)=-\int_0^\theta\log|2\sin u|\,du$.

[F3] [[lem-lobachevsky-fourier-expansion-and-pi-third-bound]] proves that $\Lambda$ is odd and $\pi$-periodic, $\Lambda(\pi/2)=0$, and $\Lambda(2\theta)=2\Lambda(\theta)+2\Lambda(\theta+\pi/2)$.

## Proof

1.1 Integrating the volume density in $t$ gives $\operatorname{Vol}(\mathcal O_\zeta)=\int_0^{\cos\zeta}\int_0^{x\tan\zeta}\frac{dy\,dx}{2(1-x^2-y^2)}$. For fixed $x$, put $A=\sqrt{1-x^2}$; since $x\tan\zeta<A$ for $0\le x<\cos\zeta$, the inner integral is $\frac1{4A}\log\frac{A+x\tan\zeta}{A-x\tan\zeta}$. [given, F1, algebra]

2.1 Set $x=\cos\theta$, so $\zeta\le\theta\le\pi/2$. Sine addition identities change the logarithm ratio to $\sin(\theta+\zeta)/\sin(\theta-\zeta)$, and therefore $\operatorname{Vol}(\mathcal O_\zeta)=\frac14\int_\zeta^{\pi/2}\log\frac{\sin(\theta+\zeta)}{\sin(\theta-\zeta)}\,d\theta=\frac14(\Lambda(2\zeta)-\Lambda(\pi/2+\zeta)+\Lambda(\pi/2-\zeta))$. The logarithmic singularity at $\theta=\zeta$ is integrable, so the substitution and improper endpoint evaluation are valid. [F2, step 1.1, algebra]

3.1 By oddness and period $\pi$ from [F3], $\Lambda(\pi/2-\zeta)=-\Lambda(\pi/2+\zeta)$. Also [F3] gives $\Lambda(2\zeta)=2\Lambda(\zeta)+2\Lambda(\zeta+\pi/2)$. Substitution in step 2.1 cancels the two $\Lambda(\zeta+\pi/2)$ terms and leaves $\operatorname{Vol}(\mathcal O_\zeta)=\frac12\Lambda(\zeta)$. [F3, step 2.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Lemma 9.8](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
