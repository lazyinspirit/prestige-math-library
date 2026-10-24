---
id: def-temperley-lieb-diagram-category
kind: definition
title: "Temperley–Lieb planar diagram data and endomorphism modules"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-free-module-on-a-set-and-standard-basis]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra, §2"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF/printed pp. 4–9: diagram algebra, generator relations, normal form, and Catalan count; their displayed proof is over C."
    - title: "Dana C. Ernst, Michael G. Hastings, and Sarah K. Salmon, Factorization of Temperley–Lieb diagrams"
      url: "https://msp.org/involve/2017/10-1/involve-v10-n1-p07-s.pdf"
      locator: "§§2–3, printed pp. 96–100: type-A presentation, diagram algebra, and simple generators."
    - title: "Vaughan F. R. Jones, The Jones Polynomial, author-hosted notes"
      url: "https://math.berkeley.edu/~vfr/jones.pdf"
      locator: "§3, printed pp. 6–8: local generator normalization and Temperley–Lieb relations."
verification:
  precheck: n/a
---

## Definition

Let $R$ be a commutative ring with unit ([[def-algebra-over-a-commutative-ring]]) and let $\delta\in R$. The object labels are the nonnegative integers $n=0,1,2,\ldots$. For labels $m,n$, place bottom points $b_1,\ldots,b_m$ and top points $t_1,\ldots,t_n$ along the rectangle from left to right on their respective edges. Their cyclic order is $t_1,\ldots,t_n,b_m,\ldots,b_1$. When $m=n=0$, the empty matching is included.

An $(m,n)$ **diagram** is a perfect matching of these $m+n$ boundary labels which is noncrossing: there are no four labels $a,b,c,d$ in cyclic order whose matched pairs are $\{a,c\}$ and $\{b,d\}$. A picture consists of disjoint arcs realizing the matching; equality is equality of the matching, so planar deformation that fixes the boundary does not change a diagram. If $m+n$ is odd, there are no such diagrams. Write $\mathcal D(m,n)$ for this set and define the $R$-module

$$M_R(m,n):=R^{(\mathcal D(m,n))},$$

the free $R$-module on the set of diagrams ([[def-free-module-on-a-set-and-standard-basis]]). In particular, its diagram basis is empty when $m+n$ is odd.

For basis diagrams $D:m\to n$ and $E:n\to p$, stack $E$ above $D$ and identify the $n$ matching boundary points. The resulting finite graph has degree two at each identified point, where degree means the number of incident arcs. Each component is a path joining two exterior boundary points or a closed cycle. Remove every cycle and multiply the remaining exterior matching by $\delta^c$, where $c$ is the number of removed cycles. Denote this output by $E\circ D$ and extend the rule $R$-bilinearly to a map $M_R(n,p)\times M_R(m,n)\to M_R(m,p)$. A following result proves closure of these operations on the diagram modules and the category axioms.

The matching $1_n:n\to n$ pairs each bottom point to the top point directly above it. Horizontal juxtaposition, with the left diagram placed first, defines $m\otimes m'=m+m'$ on object labels and $D\otimes D'$ on basis diagrams; extend it $R$-bilinearly to the modules. A following result proves that these operations give a strict monoidal category.

For $1\le i<n$, let $d_i\in M_R(n,n)$ be the diagram with a cap joining top points $i,i+1$, a cup joining bottom points $i,i+1$, and vertical through strands at every other position. Define $\mathrm{TL}_n(R,\delta)$ to be the $R$-module $M_R(n,n)$ with bilinear multiplication $xy:=x\circ y$ and distinguished element $1_n$. A following result proves that it is a unital associative $R$-algebra and identifies it with the endomorphism algebra at object $n$.

The left factor is stacked above the right factor. The loop value is $\delta$; no invertibility or nonzero condition on $\delta$ is part of these data.

## Remarks

This TikZ picture shows $d_1$ on three strands. The top and bottom labels increase left to right; the cap is on top, the cup is on the bottom, and the third strand passes through. The algebraic definition is the matching on labeled boundary points, not the drawing.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw (-0.35,-0.25) rectangle (2.35,1.25);
  \foreach \x in {0,1,2} {
    \fill (\x,1) circle (1.5pt);
    \fill (\x,0) circle (1.5pt);
  }
  \node[above] at (0,1.04) {t1};
  \node[above] at (1,1.04) {t2};
  \node[above] at (2,1.04) {t3};
  \node[below] at (0,-0.04) {b1};
  \node[below] at (1,-0.04) {b2};
  \node[below] at (2,-0.04) {b3};
  \draw (0,1) .. controls (0,0.68) and (1,0.68) .. (1,1);
  \draw (0,0) .. controls (0,0.32) and (1,0.32) .. (1,0);
  \draw (2,0) -- (2,1);
\end{tikzpicture}
```

These data are over a commutative ring; associativity and the $R$-algebra structure are proved on this page. They make no semisimplicity, trace, cellularity, or Hecke-quotient assertion. The published localized Hecke quotient [[def-temperley-lieb-quotient-and-jones-specialization]] uses idempotent generators and a separate parameter conversion; the diagram/presentation isomorphism is proved locally below.
