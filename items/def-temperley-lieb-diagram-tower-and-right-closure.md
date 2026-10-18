---
id: def-temperley-lieb-diagram-tower-and-right-closure
kind: definition
title: "Finite diagram tower inclusion and normalized right closure"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - def-temperley-lieb-normalized-markov-trace-by-closure
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§2.1.4, PDF pp. 7–8: the right inclusion, conditional-expectation tangle, closure trace, and trace rules."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§2.1, printed pp. 27–29, and §4.1, printed pp. 81–82: diagram generators, right-closure maps, and the subfactor tower convention."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Use the diagram algebra $\mathrm{TL}_n(\mathbb C,\delta)$ and its stacking convention from [[def-temperley-lieb-diagram-category]] and [[thm-temperley-lieb-diagram-category-laws]]. For $n\ge1$, append a rightmost vertical strand to every $(n,n)$ diagram and extend linearly; denote this map by
$$
\iota_n:\mathrm{TL}_n(\mathbb C,\delta)\longrightarrow \mathrm{TL}_{n+1}(\mathbb C,\delta),\qquad x\longmapsto x\otimes1.
$$
For a basis diagram $D:(n+1)\to(n+1)$, join its rightmost top and bottom boundary points by an arc outside the rectangle, remove every resulting closed component with the factor $\delta$, and retain the induced $(n,n)$ matching. Extend this **right closure** linearly as $c_n$. When $\delta\in\mathbb C^\times$, define the normalized right-closure map
$$
E_n:=\delta^{-1}c_n:\mathrm{TL}_{n+1}(\mathbb C,\delta)\longrightarrow\mathrm{TL}_n(\mathbb C,\delta).
$$
The normalized closure traces $\tau_n$ are those of [[def-temperley-lieb-normalized-markov-trace-by-closure]]. No positivity of $\tau_n$ is included in this definition. The next result proves the algebraic expectation identities for $E_n$ and states precisely when it is a positive conditional expectation.

When $\delta\in\mathbb R$, equip each diagram algebra with the conjugate-linear involution that reflects a diagram across a horizontal line and conjugates coefficients. Reflection reverses stacking and fixes the loop weight, so $(xy)^*=y^*x^*$ and $1^*=1$. The positivity assertion below assumes this involution and a compatible finite-dimensional $C^*$-algebra structure.

## Remarks

For $n=2$, closing the rightmost strand of $d_2\in\mathrm{TL}_3$ removes the cap and cup on the last two points and leaves the identity diagram on the first two points; the extra factor $\delta^{-1}$ is the normalization. The diagram below records the endpoint convention only. The proof uses the finite matching graph, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.8]
  \draw (-0.3,-0.2) rectangle (2.5,1.2);
  \foreach \x in {0,1,2} {
    \fill (\x,1) circle (1.5pt);
    \fill (\x,0) circle (1.5pt);
  }
  \node[above] at (0,1.03) {$t_1$};
  \node[above] at (1,1.03) {$t_2$};
  \node[above] at (2,1.03) {$t_3$};
  \node[below] at (0,-0.03) {$b_1$};
  \node[below] at (1,-0.03) {$b_2$};
  \node[below] at (2,-0.03) {$b_3$};
  \draw (0,0) -- (0,1);
  \draw (1,1) .. controls (1,0.68) and (2,0.68) .. (2,1);
  \draw (1,0) .. controls (1,0.32) and (2,0.32) .. (2,0);
  \draw[dashed] (2,1) .. controls (3.0,1.0) and (3.0,0.0) .. (2,0);
  \node[right] at (2.65,0.5) {close};
\end{tikzpicture}
```
