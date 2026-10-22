---
id: lem-link-diagram-upper-region-free-meridians
kind: lemma
title: The upper link-diagram region is free on strand meridians
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-countable-choice
  - lem-link-wirtinger-crossing-ball-cover
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - lem-simply-connected-hypersurface-complement-adds-free-generator
  - def-based-string-link-and-labeled-link-peripheral-system
  - thm-seifert-van-kampen
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation
        Proposition
      url: https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf
      locator: Claim 2 and the vertical-sheet decomposition, printed pp. 71–72, PDF
        pp. 72–73
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume countable choice.

Let $D$ be a finite regular oriented diagram of a nonempty labeled link with
$n\geq1$ crossings. Fix a smooth height realization
$L_D=\{(\gamma(s),\eta(s))\}\subset\mathbb R^2\times[-1,0]$ such that
$\eta(s)=-1$ exactly at the $n$ underpassing points and $\eta(s)>-1$
elsewhere, and assume each component has at least one underpassing point. Put
$$M=(\mathbb R^2\times(-1,\infty))\setminus L_D.$$
Cut every component parameter circle at its underpassing points; the resulting
$n$ open intervals are the strands. For each strand interval $I_j$, its
vertical sheet is
$$D_j=\{(\gamma(s),z):s\in I_j,\ -1<z<\eta(s)\}\subset M.$$
Set $Z=M\setminus\bigcup_{j=1}^nD_j$. Choose a common basepoint in $Z$, and
for each strand choose a positive meridian circle meeting only its own sheet
once, with its access path in $Z$. Then $\pi_1(M)$ is free on these based
positive meridians $x_1,\ldots,x_n$. The inclusion $M\hookrightarrow A_L$
also induces an isomorphism on fundamental groups.

## Statement references

[Friedl, §5.3, Claim 2](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

## Facts & Assumptions

**Given:** The diagram, height realization, product-tube data, and based positive meridians specified in the statement.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] The inclusion of the upper half-space with its point at infinity into $A_L$ is a homotopy equivalence by the variable-width level-sphere collar. [[lem-link-wirtinger-crossing-ball-cover]]

[F2] For an open cover by two path-connected sets with path-connected intersection, Seifert–van Kampen identifies the fundamental group of the union with the pushout. [[thm-seifert-van-kampen]]

[F3] Under countable choice, every closed smooth embedded submanifold has an open tubular neighborhood in its normal bundle. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-countable-choice]]

[F4] Cutting along a closed simply connected hypersurface with a two-sided simply connected tube and a one-tube corridor in the complement adds one free cyclic factor to the fundamental group. [[lem-simply-connected-hypersurface-complement-adds-free-generator]]

[F5] A positive meridian is the oriented boundary of a normal disk, with orientation fixed by the link tangent followed by disk orientation. [[def-based-string-link-and-labeled-link-peripheral-system]]

## Proof

**Given:** The diagram and height realization in the statement.

1.1 Let $A_L^\circ=((\mathbb R^2\times(-1,\infty))\cup\{\infty\})\setminus L_D$. By [F1], $\pi_1(A_L^\circ)\cong\pi_1(A_L)$. A small neighborhood $H$ of $\infty$ in $A_L^\circ$ is the open upper half-ball together with its cone vertex $\infty$, disjoint from $L_D$; other points of the level-sphere boundary have been deleted. The open cover $A_L^\circ=M\cup H$ has intersection $H\setminus\{\infty\}$, which is homeomorphic to $(0,1)\times\operatorname{int}(S^2_+)$ and is contractible because the open hemisphere $\operatorname{int}(S^2_+)$ is an open disk. Since $H$ is also contractible, [F2] gives $\pi_1(M)\cong\pi_1(A_L^\circ)$. [F1, F2, given, construct]

1.2 Each $D_j$ is the image of the open region $(s,t)\mapsto(\gamma(s),-1+t(\eta(s)+1))$ with $s\in I_j$ and $0<t<1$; this is an embedded open disk. At a projected double point, the underpassing branch has height $-1$ and is absent from $M$, while the overpassing branch has height greater than $-1$. Thus sheets over distinct intervals are disjoint. Each sheet is closed in $M$: its only limit points outside itself lie on the excluded plane $z=-1$ or on the excluded link. Hence it is a proper smooth embedded simply connected surface. [given, construct]

2.1 At a fixed vertical line, every point of $Z$ lies above all link points on that line. Since every link height is at most $0$, the straight homotopy $(x,y,z)\mapsto(x,y,(1-t)z+t)$ ($0\le t\le1$) stays above those link points and contracts $Z$ onto the plane $z=1$. This plane is contained in $Z$, so $Z$ is contractible. [step 1.2, given, construct]

3.1 For $j=1,\ldots,n$, put $M_j=M\setminus\bigcup_{k>j}D_k$. Then $M_0=Z$ and $M_j=M_{j-1}\cup D_j$. At each stage $M_{j-1}$ is path-connected: it contains path-connected $Z$, and every point of an earlier sheet joins to $Z$ along a short normal segment. Orient $D_j$ by its interval and height coordinates. The ambient orientation orients its normal line, so that line bundle is trivial; a bundle metric gives the unique positive unit vector in each fibre. By [A1, F3], choose a tubular neighborhood disjoint from the other sheets. Radial contraction shows the whole neighborhood and each of its two side components are simply connected. Choose a small positive meridian circle around an interior point of the $j$th strand in a ball disjoint from all other sheets. It meets $D_j$ transversely once. Remove a short open arc about that intersection; the remaining compact arc lies in $M_{j-1}$ and joins the two sides of $D_j$. Shrink the tubular neighborhood so that it meets this arc only in two end balls. This gives the corridor required by [F4], and its complement hypothesis holds because $M_j\setminus D_j=M_{j-1}$ is path-connected. [A1, F3, F4, given, step 1.2, step 2.1, induction, construct]

4.1 The cut lemma [F4] gives $\pi_1(M_j)\cong\pi_1(M_{j-1})*\mathbb Z$. Its cyclic generator is represented by the short meridian arc crossing $D_j$ followed by the complementary arc from step 3.1. Joining this loop to the basepoint by its access path in $Z$ gives exactly $x_j$, with positive orientation fixed by [F5]. Since $\pi_1(M_0)=\pi_1(Z)=1$, induction yields that $\pi_1(M)$ is free on $x_1,\ldots,x_n$. Step 1.1 identifies this with $\pi_1(A_L)$. [F4, F5, step 1.1, step 3.1, induction, construct] ∎

## Remarks

The cross-section shows one sheet below a strand between two underpassing points. The embedded sheet is a disk strip, and its two side collars are the two components used in the van Kampen step; the proof uses these products, not the drawing.

~~~tikz
\begin{tikzpicture}[scale=1.0,>=stealth]
  \draw[thick] (-2,0) -- (2,0) node[right] {$z=-1$};
  \draw[thick,->] (-1.5,2) .. controls (-0.5,2.3) and (0.5,2.3) .. (1.5,2);
  \draw[dashed] (-1.5,0) .. controls (-0.5,0.5) and (0.5,0.5) .. (1.5,0);
  \draw[dotted] (-1.5,0) -- (-1.5,2);
  \draw[dotted] (1.5,0) -- (1.5,2);
  \node at (-1.5,-0.25) {$p_-$};
  \node at (1.5,-0.25) {$p_+$};
  \node at (0,0.85) {$D_j$};
  \node at (0,2.35) {strand};
  \node at (0,-0.55) {level sphere};
\end{tikzpicture}
~~~
