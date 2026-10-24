---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-na-contravariant-piola-map.json
  precheck: n/a
id: def-na-contravariant-piola-map
kind: definition
title: Contravariant Piola map
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.4, equations (14.8)–(14.12): contravariant Piola mapping and facet flux transformation."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1, equation (2.1.69) and Lemmas 2.1.6–2.1.7."

---

## Definition

Let $\widehat K,K\subset\mathbb R^d$ be nondegenerate open simplices and let $F_K:\widehat K\to K$ be the orientation-preserving affine bijection $F_K(\widehat x)=A_K\widehat x+b_K$, where $J_K:=\det A_K>0$. For a measurable vector field $\widehat v$ on $\widehat K$, define its contravariant Piola push-forward by
$$
(\mathcal P_K\widehat v)(x):=J_K^{-1}A_K\widehat v(F_K^{-1}(x)),\qquad x\in K.
$$
The inverse pull-back is $\widehat v(\widehat x)=J_KA_K^{-1}v(F_K(\widehat x))$. Facet normals are oriented consistently with the chosen orientation of $F_K$; the associated oriented surface vector transforms by $n\,ds=J_KA_K^{-T}\widehat n\,d\widehat s$.


## Remarks

The planar example below uses $F_K(\widehat x)=\mathrm{diag}(2,1)\widehat x+(4,0)$, so $J_K=2$. Triangle outlines indicate the boundaries of the open simplices. On the highlighted sloping facets, the outward unit normals are $\widehat n=(1,1)/\sqrt2$ and $n=(1,2)/\sqrt5$. The vertical arrows show the constant field $\widehat v=(0,1)$ and its Piola image $v=(0,1/2)$; the oblique arrows show the unit normals.

```tikz
\begin{tikzpicture}[scale=1.15,>=stealth]
\draw (0,0) -- (1,0) -- (0,1) -- (0,0);
\draw[very thick,blue] (1,0) -- (0,1);
\node at (0.25,0.25) {$\widehat K$};
\node[below] at (0.5,0) {$\widehat v=(0,1)$};
\draw[->,thick,red] (0.5,0.5) -- (0.5,1.5);
\draw[->,thick,blue] (0.5,0.5) -- (1.207,1.207);
\node[above right] at (1.207,1.207) {$\widehat n$};
\draw[->] (1.9,0.5) -- (3.3,0.5) node[midway,above] {$F_K$};
\draw (4,0) -- (6,0) -- (4,1) -- (4,0);
\draw[very thick,blue] (6,0) -- (4,1);
\node at (4.5,0.25) {$K$};
\node[below] at (5,0) {$v=(0,1/2)$};
\draw[->,thick,red] (5,0.5) -- (5,1);
\draw[->,thick,blue] (5,0.5) -- (5.447,1.394);
\node[above right] at (5.447,1.394) {$n$};
\end{tikzpicture}
```

Here $ds=(\sqrt5/\sqrt2)\,d\widehat s$, and $n\,ds=(1,2)d\widehat s/\sqrt2=J_KA_K^{-T}\widehat n\,d\widehat s$. Consequently $v\cdot n\,ds=\widehat v\cdot\widehat n\,d\widehat s=d\widehat s/\sqrt2$, illustrating the cancellation between the two transformations. These identities follow directly from the definition; the illustration is not used to establish it.
