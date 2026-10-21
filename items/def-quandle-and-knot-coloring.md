---
id: def-quandle-and-knot-coloring
kind: definition
title: "Quandles and knot-diagram colorings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ def-regular-oriented-link-diagram ]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "V. O. Manturov, Knot Theory, Chapter 5, §§5.1–5.2, printed pp. 49–55"
      url: "https://varf.ru/rudn/manturov/book.pdf"
    - title: "J. Scott Carter, A Survey of Quandle Ideas, §§2 and 2.1, arXiv:1002.4429v2, pp. 3–8"
      url: "https://arxiv.org/pdf/1002.4429"
    - title: "Józef H. Przytycki, 3-coloring and other elementary invariants of knots, §§1–2, arXiv:math/0608172, pp. 2–11"
      url: "https://arxiv.org/pdf/math/0608172"
verification:
  precheck: n/a
dependency_level: 0
---

## Definition

A **quandle** is a set $Q$ with a binary operation $*:Q\times Q\to Q$ such that:

1. $x*x=x$ for every $x\in Q$;
2. for every $y\in Q$, the right translation $R_y:Q\to Q$, $R_y(x)=x*y$, is a bijection;
3. $(x*y)*z=(x*z)*(y*z)$ for all $x,y,z\in Q$.

Write $x\mathbin{\bar *}y:=R_y^{-1}(x)$ for the unique element satisfying
$(x\mathbin{\bar *}y)*y=x$. Let $D$ be a regular oriented link diagram. An
**arc** of $D$ is a connected strand segment cut at each crossing where that
strand passes under; an overstrand continues through its crossing. Orient the
projection plane. Along an oriented overarc with tangent $t$, let $n$ be the
unit normal in the plane for which $(t,n)$ is positively oriented. At each
crossing, call the underarc from which $n$ points the source underarc and the
underarc toward which $n$ points the target underarc. A **quandle coloring**
of $D$ by $Q$ is an assignment $c$ of an element of $Q$ to every arc such
that, at each crossing, if the source, over, and target colors are $a,b,d$,
then $d=a*b$. Equivalently, when the source and target are named in the
opposite order, $a=d\mathbin{\bar *}b$. Write $\operatorname{Col}_Q(D)$ for
the set of all such assignments.

The local convention is shown below. The overarc is oriented from southwest
to northeast, so its positive normal points northwest; the underarc is
oriented from southeast to northwest. Thus $x$ is the source color, $y$ is
the overarc color, and $z=x*y$ is the target color. The gap marks the
underpassing strand.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[->] (1.15,-1.15) -- (0.18,-0.18);
  \draw[->] (-0.18,0.18) -- (-1.15,1.15);
  \draw[->,line width=1.2pt] (-1.15,-1.15) -- (1.15,1.15);
  \node at (0.92,-0.82) {$x$};
  \node at (-0.82,-0.82) {$y$};
  \node at (-0.82,0.92) {$z$};
  \node[right] at (1.25,0.05) {$z=x*y$};
\end{tikzpicture}
```

## Definition references

[[def-regular-oriented-link-diagram]].

[Manturov, *Knot Theory*, Chapter 5](https://varf.ru/rudn/manturov/book.pdf).

[Carter, *A Survey of Quandle Ideas*](https://arxiv.org/pdf/1002.4429).

[Przytycki, *3-coloring and other elementary invariants of knots*](https://arxiv.org/pdf/math/0608172).
