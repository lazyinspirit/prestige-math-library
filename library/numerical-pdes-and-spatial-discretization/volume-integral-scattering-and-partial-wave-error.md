---
page: volume-integral-scattering-and-partial-wave-error
title: Volume integral scattering and partial wave error
status: published
requires:
  [
    nystrom-product-integration-and-fredholm-error,
    stable-special-function-recurrences-and-certified-evaluation,
    randomized-quasi-monte-carlo-and-replicates
  ]
items:
  - def-volume-integral-scattering-model
  - lem-finite-volume-hilbert-schmidt-rescaling
  - lem-dyadic-cell-average-projections-converge-in-l2
  - def-spherical-harmonic-partial-wave-conventions
  - lem-three-dimensional-scattering-kernel-is-square-integrable
  - lem-volume-far-field-map-is-bounded
  - lem-spherical-harmonics-form-complete-basis-and-addition-formula
  - lem-outgoing-helmholtz-kernel-is-a-fundamental-solution
  - lem-volume-integral-operator-well-defined-and-bounded
  - thm-exponential-partial-wave-truncation-bound
  - thm-volume-integral-operator-is-compact
  - thm-volume-integral-scattering-born-neumann-error
  - def-volume-product-integration-scheme
  - thm-volume-integral-scattering-fredholm-stability
  - thm-volume-scattering-radial-partial-wave-boundary-problem
  - thm-volume-product-integration-solution-and-far-field-error
examples: []
---

This page defines the three-dimensional outgoing volume integral model on $L^2(D)$, proves boundedness and compactness with the singular diagonal treated explicitly, and separates the small-norm Born branch from the injective Fredholm branch. Its cell-volume product rule integrates complete cell pairs and obtains eventual solution and far-field convergence from a locally verified collective-compactness argument. The radial section derives conditional spherical-harmonic mode equations with explicit regular-origin, outgoing, and matching hypotheses, and proves a uniform cutoff estimate under an explicit exponential coefficient-decay assumption. The PC-SFUN page supplies certified scaled and unscaled spherical Bessel and outgoing Hankel values and first argument derivatives on positive real argument interfaces. The radial matching discussion constructs the $kR$ interface from certified parameter enclosures; the square-well example also constructs $\sqrt{k^2+V_0}R$ and propagates absolute error through its nonzero matching denominator. These numerical representation conditions leave the exact real-parameter scattering statements unchanged. No unconditional scattering uniqueness or resonance existence is asserted.

The following schematic records the radial regions and the conditions at their interface. It is not to scale, its horizontal coordinate is radius rather than a graph of $w_{\ell m}$, and the radial theorem is proved from the differential equation and continuity hypotheses rather than from the drawing.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
  \draw[->] (0,0) -- (8.1,0) node[right] {$r$};
  \draw[very thick,blue] (0.5,0) -- (4,0);
  \draw[very thick,red] (4,0) -- (7.5,0);
  \draw[dashed] (4,-0.7) -- (4,1.15);
  \fill (0.5,0) circle (1.5pt);
  \fill (4,0) circle (1.5pt);
  \node[above,blue,align=center] at (2.15,0.28) {Interior: radial contrast};
  \node[above,red,align=center] at (6.05,0.28) {Exterior: incident plus outgoing mode};
  \node[below,align=center] at (0.5,-0.18) {Origin: regular mode};
  \node[below,align=center] at (4,-0.75) {Radius R: match value and radial derivative};
  \draw[->,red] (6.75,0.78) -- (7.7,0.78) node[right] {outgoing};
\end{tikzpicture}
```
