---
page: meshfree-kernel-approximation-and-conservative-sph-examples
title: "Meshfree kernel approximation and conservative sph — Examples"
status: draft
requires: [meshfree-kernel-approximation-and-conservative-sph]
items: []
examples:
  - cex-truncated-kernel-loses-boundary-constant-reproduction
  - ex-interior-constant-and-affine-kernel-reproduction
  - ex-two-particle-sph-force-pair
  - cex-fixed-neighbor-irregular-derivative-not-consistent
  - cex-conservative-sph-can-clump-under-positive-pressure
---

The examples test the precise hypotheses and limits of the A-page results.

The first schematic uses coordinates divided by ε. The red segment is the kernel support centered at x=0; the cells are Voronoi intervals. The node at 0 lies in the support but contributes zero to the affine derivative sum, leaving the two off-center terms computed exactly in [[cex-fixed-neighbor-irregular-derivative-not-consistent]]. The drawing is illustrative; the proof uses the stated coordinates and cell lengths.

~~~tikz
\begin{tikzpicture}[x=2.1cm,>=stealth]
  \draw[->] (-1.45,0) -- (1.55,0) node[right] {$y/\varepsilon$};
  \foreach \a/\b/\lab in {-1.25/-0.25/C_L,-0.25/0.30/C_0,0.30/1.30/C_R} {
    \draw[fill=blue!8] (\a,-0.10) rectangle (\b,0.10);
    \node[above=3pt] at ({(\a+\b)/2},0.10) {\ensuremath{\lab}};
  }
  \foreach \x in {-0.5,0,0.6} {
    \fill[blue!65!black] (\x,0) circle (2pt);
  }
  \node[below=4pt] at (-0.5,0) {$-\frac12$};
  \node[below=4pt] at (0,0) {$0$};
  \node[below=4pt] at (0.6,0) {$\frac35$};
  \draw[red,dashed,thick] (-1,0.48) -- (1,0.48);
  \draw[red,dashed] (-1,0.43) -- (-1,0.07);
  \draw[red,dashed] (1,0.43) -- (1,0.07);
  \draw[green!50!black,dotted,thick] (0,-0.43) -- (0,0.65);
  \node[red,above] at (0,0.48) {$|x-y|\le\varepsilon$};
  \node[green!45!black,below] at (0,-0.43) {$x=0$};
\end{tikzpicture}
~~~

The next schematic shows the initial three-particle geometry in [[cex-conservative-sph-can-clump-under-positive-pressure]], with distances measured in units of ε. Here α is the force magnitude for the 1–2 pair and β is the force magnitude for the 2–3 pair. The 1–3 distance exceeds the kernel radius, while the kernel derivative gives β>2α. The arrows show the pairwise forces; for the gap r=q₂−q₁ the exact calculation is r̈(0)=2α−β<0, as proved in the item.

~~~tikz
\begin{tikzpicture}[x=3cm,>=stealth]
  \draw[->] (-0.22,0) -- (1.62,0) node[right] {$q/\varepsilon$};
  \draw[thick] (0,0) -- (0.9,0) -- (1.3,0);
  \fill (0,0) circle (2.5pt) node[below=5pt] {$q_1=0$};
  \fill (0.9,0) circle (2.5pt) node[below=5pt] {$q_2=0.9$};
  \fill (1.3,0) circle (2.5pt) node[below=5pt] {$q_3=1.3$};
  \draw[->,blue,thick] (0,0.28) -- (-0.18,0.28) node[left] {$\alpha$};
  \draw[->,blue,thick] (0.9,0.40) -- (1.08,0.40) node[right] {$\alpha$};
  \draw[->,red,thick] (0.9,0.68) -- (0.48,0.68) node[left] {$\beta>2\alpha$};
  \draw[->,red,thick] (1.3,0.28) -- (1.72,0.28) node[right] {$\beta$};
  \draw[<->,gray,dashed] (0,0.98) -- (1.3,0.98) node[midway,above] {$1.3\varepsilon>\varepsilon$};
\end{tikzpicture}
~~~

- [[cex-truncated-kernel-loses-boundary-constant-reproduction]] computes the half-mass boundary bias from a missing kernel footprint.
- [[ex-interior-constant-and-affine-kernel-reproduction]] verifies exact full-space reproduction of constants and affine fields.
- [[ex-two-particle-sph-force-pair]] checks the equal-and-opposite central force identity.
- [[cex-fixed-neighbor-irregular-derivative-not-consistent]] gives a disordered fixed-ratio particle family with a nonvanishing affine derivative error.
- [[cex-conservative-sph-can-clump-under-positive-pressure]] shows a positive-pressure neighbor force can close a gap while semidiscrete invariants remain conserved.
