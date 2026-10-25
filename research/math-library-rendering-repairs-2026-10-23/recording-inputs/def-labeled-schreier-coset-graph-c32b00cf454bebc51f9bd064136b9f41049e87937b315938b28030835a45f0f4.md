---
id: def-labeled-schreier-coset-graph
kind: definition
title: "The labeled Schreier coset graph of a subgroup of a free group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coset, def-free-group]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $F(X)$ be a free group on a set $X$, and let $H\le F(X)$. The
**labeled Schreier coset graph** of $H$ in $F(X)$ is the pointed directed graph
whose vertices are the right cosets

$$V=\{Hg:g\in F(X)\},$$

with base vertex $H$, and whose directed edges are the $x$-labeled arrows

$$Hg\xrightarrow{x}Hgx\qquad (g\in F(X),\ x\in X).$$

Traversing an $x$-edge backward is read as $x^{-1}$. Hence a path labeled by a
word $a_1\cdots a_n$ on $X\sqcup X^{-1}$ starts at a coset $Hg$ and ends at
$Hga_1\cdots a_n$.

## Remarks

For $F(\{a\})$ and $H=\langle a^2\rangle$, every element is $a^n$ for a
unique integer $n$. Even and odd exponents give exactly the two right cosets
$H$ and $Ha$. The base vertex is marked by an incoming arrow. The two curved
arrows are distinct directed edges, both labeled $a$.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,circle,minimum size=12mm] (H) at (0,0) {$H$};
\node[draw,circle,minimum size=12mm] (Ha) at (4,0) {$Ha$};
\draw[->] (-1.3,0) -- (H);
\draw[->] (H) to[bend left=35] node[above] {$a$} (Ha);
\draw[->] (Ha) to[bend left=35] node[below] {$a$} (H);
\end{tikzpicture}
```

Indeed, right multiplication by $a$ sends $H$ to $Ha$ and $Ha$ to
$Ha^2=H$. Traversing either directed edge backward reads $a^{-1}$; it does
not create a third edge. For example, starting at $H$, the two forward edges
read $aa$ and end at $Ha^2=H$, whereas traversing the upper edge backward
starts at $Ha$ and ends at $Haa^{-1}=H$. These are instances of the endpoint
formula in the definition; the illustration is not needed to define the graph.
