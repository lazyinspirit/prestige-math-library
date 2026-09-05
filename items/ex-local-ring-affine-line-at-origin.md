---
id: ex-local-ring-affine-line-at-origin
kind: example
title: "The local ring of the affine line at the origin consists of rational functions defined at the origin"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-field-classical-point, thm-local-ring-affine-variety-localization]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 5.1.10"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "The Stacks Project, local-ring examples"
      url: "https://stacks.math.columbia.edu/tag/07BH"
---

## Example

Assume the Axiom of Choice, let $k$ be an algebraically closed field, and take
$X=\mathbf A_k^1$ with coordinate $t$. The origin corresponds to the maximal
ideal $(t) \subseteq k[t]$. By
[[thm-local-ring-affine-variety-localization]],
$$ \mathcal O_{X,0}\cong k[t]_{(t)}=\left\{r\in k(t):r=\frac{f(t)}{g(t)}\text{ for some }f,g\in k[t]\text{ with }g(0)\ne0\right\}. $$

Thus a rational function is regular at the origin exactly when it admits a
presentation $f/g$ with $g(0)\ne0$; another presentation may have a denominator
that vanishes at $0$. The maximal ideal consists of the elements admitting such
a presentation with $f(0)=0$, and [[def-residue-field-classical-point]]
identifies the residue field with $k$.
