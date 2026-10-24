---
id: ex-na-checkerboard-permeability-contrast
kind: example
title: Checkerboard permeability and the explicit contrast factor
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 11
deps:
  [
    def-na-neumann-darcy-mixed-problem,
    thm-na-rt0-p0-darcy-error-estimate,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 49:
        Well-posedness for PDEs in mixed form"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "Complete chapter, §§49.3–49.4: coefficient-dependent coercivity and
        mixed approximation constants."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapters 5 and 7: coefficient-weighted mixed Darcy
        norms and estimates."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice.

On a $2\times2$ checkerboard of equal squares, split each square into two affine triangles and set scalar permeability $K=1$ on one color and $K=10^6$ on the other. Then $\kappa_{\min}=1$, $\kappa_{\max}=10^6$, the weighted energy assigns coefficients $1$ and $10^{-6}$ to the two regions, and the RT0/P0 graph-norm error constants include $\alpha_*^{-1}=10^6$ and $M_a/\alpha_*=10^6$.

## Facts & Assumptions

**Given:** The checkerboard mesh and piecewise-constant scalar permeability just defined.

[A1] Countable Choice is inherited through the mixed error theorem. ([[def-countable-choice]])

[F1] The weighted flux energy is $\|v\|_{K^{-1}}^2=\int_DK^{-1}|v|^2$ and the coefficient bounds determine $M_a=\kappa_{\min}^{-1}$ and $\alpha_*=\kappa_{\max}^{-1}$. ([[def-na-neumann-darcy-mixed-problem]], [[thm-na-rt0-p0-darcy-error-estimate]])

[F2] The stable RT0/P0 inf-sup factor depends on the mesh/domain lift constant $C_R$, while the explicit error formula also contains $\alpha_*^{-1}$ and $M_a$. ([[thm-na-rt0-p0-darcy-error-estimate]])

## Proof

1.1 The two positive scalar values are $1$ and $10^6$, so their minimum and maximum are exactly $\kappa_{\min}=1$ and $\kappa_{\max}=10^6$. Their reciprocals in $K^{-1}$ are $1$ and $10^{-6}$; substituting into the energy definition gives $\|v\|_{K^{-1}}^2=\int_{D_1}|v|^2+10^{-6}\int_{D_{10^6}}|v|^2$. [given, F1, algebra]

2.1 The error theorem constants are $M_a=1$, $\alpha_*=10^{-6}$, so $\alpha_*^{-1}=10^6$ and $M_a/\alpha_*=10^6$. The inf-sup lower bound $\widehat\beta=(1+C_R^2)^{-1/2}$ has no permeability parameter because the divergence lift is geometric; this example therefore records an explicit contrast dependence and supplies no contrast-independent error claim. [A1, F1, F2, step 1.1, algebra] ∎

## Checkerboard mesh

```tikz
\begin{tikzpicture}[scale=1.25]
  \fill[blue!12] (0,0) rectangle (1,1);
  \fill[orange!18] (1,0) rectangle (2,1);
  \fill[orange!18] (0,1) rectangle (1,2);
  \fill[blue!12] (1,1) rectangle (2,2);
  \draw[thick] (0,0) rectangle (2,2);
  \draw[thick] (1,0)--(1,2) (0,1)--(2,1);
  \draw[thin] (0,0)--(1,1) (1,0)--(2,1) (0,1)--(1,2) (1,1)--(2,2);
  \node at (.5,.72) {$K=1$};
  \node at (1.5,.72) {$K=10^6$};
  \node at (.5,1.72) {$K=10^6$};
  \node at (1.5,1.72) {$K=1$};
\end{tikzpicture}
```

The four unit squares are coefficient regions, each split into two triangles along the drawn diagonal. Blue squares have permeability $1$, orange squares have permeability $10^6$; each label applies to both triangles in that square. The figure shows the alternating arrangement only; the proof substitutes the exact values into the constants.
