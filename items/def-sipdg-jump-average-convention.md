---
id: def-sipdg-jump-average-convention
kind: definition
title: Jump and average conventions for symmetric interior-penalty DG
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-broken-and-conforming-polynomial-spaces
  ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 38:
        Discontinuous Galerkin"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf"
      locator: "§38.2.1, printed pp. 192–193: oriented interior faces, jumps,
        averages, and the one-sided boundary convention."
    - title: "Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella
        Marini, Unified Analysis of Discontinuous Galerkin Methods for Elliptic
        Problems, SIAM Journal on Numerical Analysis 39(5) (2002)"
      url: "https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_20\
        02.pdf"
      locator: "§§3.1–3.2, printed pp. 1756–1758: jump/average identities and the
        primal DG formulation."
verification: { precheck: n/a , judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
---

## Definition

Let $d\ge2$ and let $\mathcal T$ be a finite matching affine simplicial mesh of a bounded polyhedral open set $\Omega\subset\mathbb R^d$, with shape-regularity bound $\sigma$, as in [[def-matching-affine-simplicial-meshes]]. Write $\mathcal F_h^{\rm int}$ for its interior facets and $\mathcal F_h^{\rm bdy}$ for its boundary facets, and put $\mathcal F_h=\mathcal F_h^{\rm int}\cup\mathcal F_h^{\rm bdy}$. Fix a degree $k\in\mathbb N_0$ for this broken space. The trial functions below belong to the broken scalar polynomial space $V_h^{\rm br}=\prod_{K\in\mathcal T}\mathbb P_k(K;\mathbb R)$ from [[def-broken-and-conforming-polynomial-spaces]].

For each interior facet $F=K^-\cap K^+$, choose a unit normal $n_F$ pointing from $K^-$ to $K^+$. For a scalar or vector field $g$ with traces from both cells, define
$$[g]_F:=g^- - g^+,\qquad \{g\}_F:=\tfrac12(g^-+g^+).$$
For a boundary facet $F\subset\partial K\cap\partial\Omega$, let $n_F=n_K$ be the outward unit normal and define $[g]_F:=g|_K$ and $\{g\}_F:=g|_K$. Reversing the chosen interior normal also reverses $[g]_F$, so the scalar jump/average contractions used in the form are independent of that choice.

For one-dimensional interval examples, use the following separate extension of the same formulas. At an interior point shared by a left cell $K^-$ and right cell $K^+$, orient from left to right and set $[g]_F=g^- - g^+$ and $\{g\}_F=(g^-+g^+)/2$. At either endpoint use the one-sided trace for both jump and average, and use counting measure on the zero-dimensional face. This extension is not an instance of the published $d\ge2$ mesh definition above.

The following diagram records the interior orientation; the formulas above are the definitions, and the diagram is only a convention aid.

```tikz
\begin{tikzpicture}[baseline=-0.5ex]
  \fill[blue!8] (0,0) rectangle (1.5,1.5);
  \fill[orange!10] (1.5,0) rectangle (3,1.5);
  \draw[thick] (0,0) rectangle (1.5,1.5);
  \draw[thick] (1.5,0) rectangle (3,1.5);
  \draw[very thick] (1.5,0)--(1.5,1.5);
  \draw[->,thick] (1.2,0.75)--(2.1,0.75) node[midway,below] {$n_F$};
  \node at (0.75,1.15) {$K^-$};
  \node at (2.25,1.15) {$K^+$};
  \node[rotate=90] at (1.5,0.75) {$F$};
\end{tikzpicture}
```

## Remarks

This is the scalar-jump convention: on an interior facet the corresponding vector jump is $[v]_F n_F$. On a boundary facet the jump is the trace itself; this is the convention that makes the penalty and consistency terms impose homogeneous Dirichlet data weakly. A normal-flux contraction with the scalar jump is unchanged when the interior orientation is reversed.

