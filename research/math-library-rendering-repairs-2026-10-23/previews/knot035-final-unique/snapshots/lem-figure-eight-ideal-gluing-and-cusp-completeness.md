---
id: lem-figure-eight-ideal-gluing-and-cusp-completeness
kind: lemma
title: "The standard two-tetrahedron figure-eight gluing is complete"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-elementary-geometric-half-twist
  - thm-geometric-braids-form-a-group
  - def-closure-of-a-geometric-braid
  - def-knot-exterior
  - lem-knot-exterior-has-peripheral-torus
  - def-finite-volume-hyperbolic-knot-exterior
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-tetrahedron-shape-parameter-relations
  - lem-ideal-torus-cusp-holonomy-criterion
  - lem-horocusp-truncation-has-finite-volume
  - thm-regular-ideal-tetrahedron-volume
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "Chapter 1, §§1.1–1.1.5, printed pp.19–25; §4.3, Examples 4.8 and 4.14 and Proposition 4.15, printed pp.72–77"
    - title: "J. Hyam Rubinstein and Stephan Tillmann, Even triangulations of n-dimensional pseudo-manifolds"
      url: "https://msp.org/agt/2015/15-5/agt-v15-n5-p14-s.pdf"
      locator: "Example 3 and Figure 2(b), printed p.2951, exact two-tetrahedron face pairings"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/3.pdf"
      locator: "Chapter 3, §3.1, printed p.29; Chapter 4, §§4.3–4.4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Define the standard figure-eight knot $K_8$ to be the oriented closure of the three-strand geometric braid $(\sigma_1\sigma_2^{-1})^2$. Its endpoint permutation is a $3$-cycle, so this closure has one component.

Let $\Delta_0=[0,1,2,3]$ and $\Delta_1=[0',1',2',3']$ be oriented ideal tetrahedra with orientation-reversing affine face maps
$$[0,1,2]\to[3',1',2'],\quad [0,1,3]\to[0',1',2'],\quad [0,2,3]\to[0',1',3'],\quad [1,2,3]\to[0',2',3'].$$
This is the two-tetrahedron ideal triangulation obtained from the standard four-crossing figure-eight diagram by cutting along crossing arcs, identifying upper and lower polyhedron faces with equal region labels, and collapsing the two bigon faces. Its edge classes are
$$\{01,02,23,0'1',1'3',2'3'\},\qquad \{12,03,13,1'2',0'2',0'3'\};$$
each has valence six, and the unique ideal vertex link is a torus. Put shape $z_1$ on $01,23$, shape $z_2$ on $03,12$, and shape $z_3$ on $02,13$ in $\Delta_0$; put shape $w_1$ on $0'1',2'3'$, shape $w_2$ on $0'3',1'2'$, and shape $w_3$ on $0'2',1'3'$ in $\Delta_1$. Unfold the eight cusp-link triangles by the face maps into the standard rectangular strip. Its upper-row labels are $a,b,c,d$ and its lower-row labels are $h,g,f,e$, both read from left to right; the corner trace across the strip is therefore $a,h,b,g,c,f,d,e$. Identify the strip boundary sides as prescribed by those same maps. Let $\alpha$ be the edge path across the strip from the left side of $a$ on the left boundary to the left side of $a$ on the right boundary, and let $\beta$ be the edge path on the left boundary from the base of $a$ to the top of $h$. Their ordered corner factors are respectively $z_3,w_2^{-1},z_2,w_3^{-1},z_3,w_2^{-1},z_2,w_3^{-1}$ and $z_2^{-1},w_1$. The face-pairing incidence check gives one positive transverse intersection, so their homology classes form a basis of $H_1$ and the loops form a basis of $\pi_1$ of the torus link. The two edge products are $z_1^2z_3w_1^2w_3$ and $z_2^2z_3w_2^2w_3$, while
$$H(\alpha)=\left(\frac{z_2z_3}{w_2w_3}\right)^2,\qquad H(\beta)=\frac{w_1}{z_2}.$$
For $\omega=e^{i\pi/3}$, assigning $z_1=z_2=z_3=w_1=w_2=w_3=\omega$ makes both edge products and both cusp multipliers equal to $1$ and gives total angle $2\pi$ around each edge. The gluing therefore gives the figure-eight complement a complete finite-volume curvature $-1$ metric with one peripheral torus cusp.

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Chapter 1 and §4.3](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[Rubinstein and Tillmann, *Even triangulations of n-dimensional pseudo-manifolds*, Example 3](https://msp.org/agt/2015/15-5/agt-v15-n5-p14-s.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapters 3–4](https://library.slmath.org/nonmsri/gt3m/PDF/3.pdf)

## Diagram

The two edge-graph drawings are projections, not embeddings of tetrahedra in the plane; each shape label denotes the indicated edge and its opposite edge. In the lower schematic, $\phi_i$ denotes the displayed face map whose source face omits vertex $i$, and $u|v$ denotes the truncation corner at ideal vertex $u$ on edge $uv$. The schematic records the face-side order and corner factors in the cusp strip, not a metric development. The proof checks the incidence and equations from the vertex-pairing table and corner trace, independently of the drawings.

```tikz
\begin{tikzpicture}[scale=1.1,line cap=round,line join=round]
  \coordinate (a) at (0,0);
  \coordinate (b) at (1.4,0);
  \coordinate (c) at (0.7,1.15);
  \coordinate (d) at (0.7,0.42);
  \draw[thick] (a)--(b)--(c)--cycle;
  \draw[thick] (d)--(a) (d)--(b) (d)--(c);
  \node[below left] at (a) {$0$};
  \node[below right] at (b) {$1$};
  \node[above] at (c) {$2$};
  \node[right] at (d) {$3$};
  \node at (0.7,-0.35) {$\Delta_0$};
  \node at (0.7,0.1) {$z_1$};
  \node at (0.34,0.69) {$z_3$};
  \node at (1.04,0.69) {$z_2$};
  \begin{scope}[xshift=3.0cm]
    \coordinate (a) at (0,0);
    \coordinate (b) at (1.4,0);
    \coordinate (c) at (0.7,1.15);
    \coordinate (d) at (0.7,0.42);
    \draw[thick] (a)--(b)--(c)--cycle;
    \draw[thick] (d)--(a) (d)--(b) (d)--(c);
    \node[below left] at (a) {$0'$};
    \node[below right] at (b) {$1'$};
    \node[above] at (c) {$2'$};
    \node[right] at (d) {$3'$};
    \node at (0.7,-0.35) {$\Delta_1$};
    \node at (0.7,0.1) {$w_1$};
    \node at (0.34,0.69) {$w_3$};
    \node at (1.04,0.69) {$w_2$};
  \end{scope}
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (a) at (0,2) {$a:\Delta_0,\ 0$\\ $0|2:\ z_3$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (b) at (2.2,2) {$b:\Delta_0,\ 1$\\ $1|2:\ z_2$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (c) at (4.4,2) {$c:\Delta_0,\ 2$\\ $2|0:\ z_3$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (d) at (6.6,2) {$d:\Delta_0,\ 3$\\ $3|0:\ z_2$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (h) at (0,0) {$h:\Delta_1,\ 0'$\\ $0'|3':\ w_2^{-1}$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (g) at (2.2,0) {$g:\Delta_1,\ 1'$\\ $1'|3':\ w_3^{-1}$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (f) at (4.4,0) {$f:\Delta_1,\ 2'$\\ $2'|1':\ w_2^{-1}$};
  \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (e) at (6.6,0) {$e:\Delta_1,\ 3'$\\ $3'|1':\ w_3^{-1}$};
  \draw[red,thick,->] (a.south) -- node[left,black] {$\phi_1$} (h.north);
  \draw[red,thick,->] (h.east) -- node[below,black] {$\phi_0$} (b.south west);
  \draw[red,thick,->] (b.south) -- node[left,black] {$\phi_3$} (g.north);
  \draw[red,thick,->] (g.east) -- node[below,black] {$\phi_1$} (c.south west);
  \draw[red,thick,->] (c.south) -- node[left,black] {$\phi_3$} (f.north);
  \draw[red,thick,->] (f.east) -- node[below,black] {$\phi_2$} (d.south west);
  \draw[red,thick,->] (d.south) -- node[left,black] {$\phi_1$} (e.north);
  \draw[red,thick,dashed,->] (e.north east) to[out=90,in=90,looseness=1.15] node[above,black] {$\phi_3$ (strip closure)} (a.north west);
  \node[align=left] at (3.3,-1.0) {$\beta$: $a\ (0|3,\ \mathrm{right},\ z_2^{-1})\longrightarrow h\ (0'|1',\ \mathrm{left},\ w_1)$.};
  \node[align=center] at (3.3,-1.55) {Red arrows show the successive $\alpha$ side identifications; the diagram is schematic.};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The stated face-paired ideal triangulation of the complement of the standard figure-eight knot, with positive tetrahedron shapes as specified.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] defines the normalized ideal-tetrahedron shapes, corner factors, upper half-space metric, and cusp multiplier.

[F2] [[lem-ideal-tetrahedron-shape-parameter-relations]] proves that setting $z=\omega=e^{i\pi/3}$ makes all three shapes equal to $\omega$ and each dihedral angle equal to $\pi/3$.

[F3] [[lem-ideal-torus-cusp-holonomy-criterion]] says that edge products $1$, edge angle sums $2\pi$, and cusp multipliers $1$ on a torus basis imply completeness at that cusp.

[F4] [[lem-horocusp-truncation-has-finite-volume]] computes the volume of a rank-two horocusp quotient as half the area of its Euclidean cross-section.

[F5] [[thm-regular-ideal-tetrahedron-volume]] gives the finite volume $v_3=3\Lambda(\pi/3)$ of a regular ideal tetrahedron.

[F6] [[def-knot-exterior]] fixes the chosen compact knot exterior, and [[lem-knot-exterior-has-peripheral-torus]] identifies its boundary as the peripheral torus.

[F7] [[def-elementary-geometric-half-twist]] defines $\sigma_1,\sigma_2$ as the positive adjacent geometric half twists and their opposites as their group inverses; [[thm-geometric-braids-form-a-group]] gives the endpoint-permutation homomorphism.

[F8] [[def-closure-of-a-geometric-braid]] says the components of a closed geometric braid correspond to cycles of its endpoint permutation.

## Proof

1.1 The endpoint permutation of $(\sigma_1\sigma_2^{-1})^2$ is $(12)(23)(12)(23)=(1\ 3\ 2)$, because each half twist has the adjacent transposition as endpoint permutation and inverse has the same transposition. By [F8], its closure is one component. Cut the standard four-crossing figure-eight diagram along its projection regions and four crossing arcs. Above and below the diagram this produces two ideal balls: each crossing arc has four face-side copies, and every face is a diagram region. Gluing upper and lower faces with the same region label restores the cut-open complement, because each cut face and crossing-arc side is identified with exactly its original mate; the only unfilled points are the deleted knot arcs, which are ideal vertices. Collapsing the two bigon faces gives two tetrahedra. Recording the vertex matches on their four faces gives exactly the four maps in the statement. [given, F6, F7, F8, construct]

1.2 By [F2], at $z_1=z_2=z_3=w_1=w_2=w_3=\omega$ every edge parameter is $\omega$. The first edge class has product $\omega^6=1$, and the second has product $\omega^6=1$; each class contains six edge copies, so its total dihedral angle is $6(\pi/3)=2\pi$. [F2, given, algebra]

2.1 Applying the four vertex maps identifies all eight tetrahedron vertices into one ideal vertex and the twelve tetrahedron edges into the two six-edge classes in the statement. To check the link vertices explicitly, write $u|v$ for the truncation corner at ideal vertex $u$ on edge $uv$. The four corner classes are $\{0|1,0|2,3|2,3'|1',3'|2',0'|1'\}$, $\{1|0,1'|3',2|0,2'|3',1'|0',2|3\}$, $\{1|2,1'|2',0|3,0'|2',1|3,0'|3'\}$, and $\{2|1,2'|1',3|0,2'|0',3|1,3'|0'\}$; these are disjoint and contain all $24$ link corners. The eight link triangles have their $24$ sides identified in $12$ pairs, so $\chi=4-12+8=0$. The four face maps give a connected adjacency graph on the eight link triangles; their induced boundary-orientation signs are respectively negative, negative, negative, negative. Hence the link is connected, closed and orientable, and therefore is a torus. [given, step 1.1, algebra]

3.1 Write $\phi_i$ for the displayed face map whose source face omits vertex $i$. The strip triangles are $a=0$, $h=0'$, $b=1$, $g=1'$, $c=2$, $f=2'$, $d=3$, and $e=3'$. In the $\alpha$ trace the successive corners are $0|2$, $0'|3'$, $1|2$, $1'|3'$, $2|0$, $2'|1'$, $3|0$, and $3'|1'$; their left/right signs and edge parameters give $z_3,w_2^{-1},z_2,w_3^{-1},z_3,w_2^{-1},z_2,w_3^{-1}$. The link side crossed after each listed corner is paired with the next triangle by $\phi_1,\phi_0,\phi_3,\phi_1,\phi_3,\phi_2,\phi_1,\phi_3$, with the last pairing closing $e$ to $a$. The $\beta$ trace cuts off corner $0|3$ on its right and $0'|1'$ on its left, giving $H(\beta)=z_2^{-1}w_1$; hence its two regular-shape factors multiply to $1$. Cutting the strip open along $\alpha$ makes $\beta$ an arc joining the two boundary copies, and the face-pairing incidence gives one crossing from the negative to the positive side. Thus $[\alpha]\cdot[\beta]=+1$, so their classes form a homology basis; since $\pi_1(T)=H_1(T;\mathbb Z)\cong\mathbb Z^2$, they also form a basis of $\pi_1(T)$. At $z_i=w_i=\omega$, the $\alpha$ factors multiply to $((\omega\omega)/(\omega\omega))^2=1$. [F1, given, step 2.1, algebra]

4.1 The edge conditions in step 1.2, torus link in step 2.1, and basis cusp multipliers in step 3.1 satisfy [F3], so the glued metric is complete at its unique torus cusp. The face maps are hyperbolic face isometries; the $2\pi$ edge-angle sums make the metric smooth across every edge, and the only omitted locus is the single ideal vertex. Thus completeness at this cusp is completeness of the whole glued complement. Each tetrahedron has volume $v_3$ by [F5], so additivity gives total volume $2v_3<\infty$; its horospherical cusp truncation also has finite volume by [F4]. The induced metric on the figure-eight complement is therefore complete and finite-volume with one peripheral torus cusp. [F3, F4, F5, step 1.2, step 2.1, step 3.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Chapter 1 and §4.3](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[Rubinstein and Tillmann, *Even triangulations of n-dimensional pseudo-manifolds*, Example 3](https://msp.org/agt/2015/15-5/agt-v15-n5-p14-s.pdf)
