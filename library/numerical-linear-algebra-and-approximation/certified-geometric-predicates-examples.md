---
page: certified-geometric-predicates-examples
title: Certified geometric predicates — Examples
status: draft
items: []
examples:
  - ex-uncertain-coordinate-interval-with-ambiguous-sign
  - ex-nearly-cocircular-sites-certified-incircle
  - ex-nearly-collinear-triangle-certified-orientation
requires:
  - certified-geometric-predicates
---

## Examples

The examples show an exact sign after a near-degenerate floating filter,
a nearly cocircular lifted determinant certified at higher precision, and an
interval input whose possible coordinates give both orientation signs.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw[gray,dashed] (0,0) -- (3,3);
  \fill (0,0) circle (2pt) node[below left] {$A$};
  \fill (1.5,1.5) circle (2pt) node[below left] {$B$};
  \fill (3,3.35) circle (2pt) node[above right] {$C$};
  \node at (1.5,-0.7) {nearly collinear (vertical gap exaggerated)};

  \begin{scope}[xshift=5.2cm]
    \draw[gray] (5,1) circle (1.414);
    \fill (4,0) circle (2pt) node[below left] {$A$};
    \fill (6,0) circle (2pt) node[below right] {$B$};
    \fill (4,2) circle (2pt) node[above left] {$C$};
    \fill (6,2.25) circle (2pt) node[above right] {$D$};
    \node at (5,-0.7) {nearly cocircular (gap exaggerated)};
  \end{scope}
\end{tikzpicture}
```

The drawings are schematic: the displayed gaps are enlarged for visibility.
Exact coordinates and all sign calculations are given in the example items;
no proof relies on a measured diagram distance.

