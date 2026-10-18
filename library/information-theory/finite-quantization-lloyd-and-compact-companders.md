---
page: finite-quantization-lloyd-and-compact-companders
title: Finite Quantization, Lloyd Iteration, and Compact Companders
status: published
requires:
  - rate-distortion-and-lossy-source-coding
items:
  - lem-it-weighted-centroid-squared-error-identity
  - def-it-point-density-cumulative-map
  - def-it-finite-squared-error-quantizer
  - lem-it-point-density-cumulative-map-is-c2-diffeomorphism
  - lem-it-nearest-center-quantizer-is-borel-and-finite-distortion
  - def-it-compact-one-dimensional-compander
  - alg-it-finite-data-lloyd-quantizer
  - alg-it-exhaustive-global-empirical-quantizer
  - lem-it-compact-compander-quantizer-is-borel-and-finite-distortion
  - thm-it-finite-data-lloyd-termination-and-fixed-point
  - thm-it-exhaustive-global-empirical-quantizer-is-optimal
  - thm-it-compact-compander-high-rate-distortion
  - thm-it-optimal-compact-compander-density
examples: []
---

This page develops measurable finite squared-error quantizers and exact finite empirical optimization. The Lloyd iteration has strict descent whenever its centers change and terminates at a finite assignment/centroid fixed point; that conclusion does not imply global optimality. A separate exhaustive procedure checks all assignments and attains a global empirical optimum.

The asymptotic result is restricted to a positive $C^1$ source density and positive normalized $C^1$ point density on a fixed compact interval. It proves the exact one-dimensional compander limit and optimizes its coefficient within that class. The compander cells are uniform in the cumulative point-density coordinate and need not be nearest-center cells in the source coordinate. No unrestricted scalar, higher-dimensional, unbounded-support, or overload claim is made.

## Compander cell schematic

For $g=1$ on $[0,1]$ and $N=3$, the cumulative inverse is $\phi(u)=u$. The boundaries are $0,1/3,2/3,1$ and the reproduction points are $1/6,1/2,5/6$. The picture shows these explicit cells and points; the last cell includes $1$. It illustrates the definition and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[->] (-0.25,0) -- (6.55,0) node[right] {$x$};
  \draw (0,-0.08) -- (0,0.08);
  \draw[dashed] (2,-0.1) -- (2,0.82);
  \draw[dashed] (4,-0.1) -- (4,0.82);
  \draw (6,-0.08) -- (6,0.08);
  \node[below] at (0,-0.08) {$0$};
  \node[below] at (2,-0.08) {$1/3$};
  \node[below] at (4,-0.08) {$2/3$};
  \node[below] at (6,-0.08) {$1$};
  \draw (1,0) -- (1,0.34);
  \draw (3,0) -- (3,0.34);
  \draw (5,0) -- (5,0.34);
  \fill (1,0.34) circle (1.5pt);
  \fill (3,0.34) circle (1.5pt);
  \fill (5,0.34) circle (1.5pt);
  \node[above] at (1,0.36) {$r_1=1/6$};
  \node[above] at (3,0.36) {$r_2=1/2$};
  \node[above] at (5,0.36) {$r_3=5/6$};
  \node at (1,-0.42) {$C_1$};
  \node at (3,-0.42) {$C_2$};
  \node at (5,-0.42) {$C_3$};
\end{tikzpicture}
```

## Source trail

- Robert M. Gray, *Source Coding Theory*, first edition, Chapter 5 §§5.1–5.3 and §5.6: quantizer cells, high-rate assumptions and point-density optimization.
- Robert Gallager, MIT 6.450 Chapter 3, §§3.2.1–3.2.3 and Appendix 3A: nearest-center assignments, centroids, Lloyd iteration, local-optimum caveat and high-rate scalar context.
- Robert M. Gray and David L. Neuhoff, “Quantization,” §§II–IV: finite quantizer structure, Lloyd history and optimality conditions, Bennett’s integral, point density, and the limits of informal high-resolution approximations.

Each source supplies context; the exact finite termination, exhaustive global-search proof, and restricted compact limit are proved locally on this pair.
