---
id: ex-qftx-su2-two-plaquette-wilson-loop
kind: example
title: Two-plaquette SU(2) rectangle
status: draft
origin: session
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega through the finite lattice datum."
deps:
  - def-countable-choice
  - lem-qftx-su2-one-plaquette-average
  - thm-qftx-strong-coupling-wilson-area-law
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qftx-su2-one-plaquette-average: mathematical-premise
  thm-qftx-strong-coupling-wilson-area-law: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.4.1.1, printed pp. 22–24, for the minimal plaquette tiling and leading area power; the exact two-plaquette finite expectation follows from the local theorem."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§4.1–4.2, printed pp. 59–63, for exact rectangular Wilson-loop area dependence; the SU(2) coefficient and finite free-boundary calculation are supplied locally."
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Take a free-boundary $SU(2)$ square lattice containing a rectangle two plaquettes wide and one plaquette high, with $0<\beta\leq1$ and the defining normalized Wilson loop. Its enclosed area is $A=2$ plaquettes, so the exact finite-lattice expectation is $\langle W(C)\rangle_\beta=\lambda(\beta)^2=\beta^2/16+O(\beta^4)$ as $\beta\downarrow0$, where $\lambda(\beta)$ is the one-plaquette coefficient from the finite SU(2) Wilson measure.

## Example references

[[thm-qftx-strong-coupling-wilson-area-law|Exact finite-lattice Wilson area formula]]

[[lem-qftx-su2-one-plaquette-average|One-plaquette strong-coupling coefficient]]

[Meyer, §1.4.1.1, printed pp. 22–24, on the leading minimal plaquette tiling](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §4.2, printed pp. 61–63, on exact rectangular Wilson-loop area dependence](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Diagram

The black arrows are positively oriented links (east along rows and north along columns). The red arrows trace the counterclockwise boundary $C$; the top and left portions therefore use inverse link variables. The labels $p_{0,0}$ and $p_{1,0}$ are the two plaquettes, and the area count is two. The proof below uses only the ordered products and the theorem, not the diagram.

```tikz
\begin{tikzpicture}[scale=1.15,>=stealth]
  \coordinate (v00) at (0,0); \coordinate (v10) at (1,0); \coordinate (v20) at (2,0);
  \coordinate (v01) at (0,1); \coordinate (v11) at (1,1); \coordinate (v21) at (2,1);
  \draw[->] (v00)--(v10); \draw[->] (v10)--(v20);
  \draw[->] (v01)--(v11); \draw[->] (v11)--(v21);
  \draw[->] (v00)--(v01); \draw[->] (v10)--(v11); \draw[->] (v20)--(v21);
  \draw[red,very thick,->] (v00)--(v20);
  \draw[red,very thick,->] (v20)--(v21);
  \draw[red,very thick,->] (v21)--(v01);
  \draw[red,very thick,->] (v01)--(v00);
  \node at (0.5,0.5) {$p_{0,0}$}; \node at (1.5,0.5) {$p_{1,0}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The free-boundary SU(2) Wilson model with $0<\beta\leq1$ and a rectangle two plaquettes wide and one plaquette high.

[A1] The proof is carried out over $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] [[thm-qftx-strong-coupling-wilson-area-law]]: for area $A$, the normalized fundamental loop expectation is $\lambda(\beta)^A$.

[F2] [[lem-qftx-su2-one-plaquette-average]]: $\lambda(\beta)=\beta/4+O(\beta^3)$ as $\beta\downarrow0$.

## Verification

1.1 The rectangle has $A=2\cdot1=2$ plaquettes, so [F1] gives $\langle W(C)\rangle_\beta=\lambda(\beta)^2$. The only inherited choice premise is [A1]. [given, A1, F1, algebra]

2.1 Write $\lambda(\beta)=\beta/4+r(\beta)$ with $r(\beta)=O(\beta^3)$ by [F2]. Then $\lambda^2=\beta^2/16+(\beta/2)r+r^2=\beta^2/16+O(\beta^4)$. [F2, step 1.1, algebra] ∎
