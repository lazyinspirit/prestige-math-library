---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-classification-of-irreducible-reduced-crystallographic-root-systems.json
  precheck: pass
id: thm-classification-of-irreducible-reduced-crystallographic-root-systems
kind: theorem
title: Classification of irreducible root systems
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching, thm-rank-two-root-system-classification, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram, def-reducible-and-irreducible-root-system, def-rank-and-isomorphism-of-root-systems, prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers, def-reduced-crystallographic-euclidean-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §7, Theorem 2.84 and Figure 2.4, printed pp. 180-183"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Theorem 23.7, printed pp. 121-127"
landmark: true
proof_strategy: direct

---

## Statement

Let $\Phi$ be an irreducible reduced crystallographic root system
([[def-reducible-and-irreducible-root-system]]). If $\Phi$ is empty, its ambient space is zero; this is irreducible under
the local convention. Otherwise $\Phi$ is isomorphic,
as a root system, to exactly one of
$$A_n\ (n\ge1),\quad B_n\ (n\ge2),\quad C_n\ (n\ge3),\quad D_n\ (n\ge4), \quad E_6,\ E_7,\ E_8,\ F_4,\ G_2,$$
with the low-rank identifications $B_1=C_1=A_1$, $B_2=C_2$,
$D_2=A_1\sqcup A_1$ and $D_3=A_3$, where the subscript denotes the number of
simple roots. Here $A_n$ is the type whose Dynkin diagram is a path on $n$
vertices with simple edges, $B_n$ and $C_n$ have path diagrams differing by
the direction of the arrow on the double edge, $D_n$ is the simply-laced
trivalent diagram with arms of lengths $1,1,n-3$, and $E_6,E_7,E_8,F_4,G_2$
have, respectively, simply-laced trivalent arms $(1,2,2)$, $(1,2,3)$,
$(1,2,4)$; a four-vertex path with central double edge; and two vertices
joined by a triple edge. Type names here specify these diagram types; their
coordinate realizations are constructed in the following existence theorem.

## Facts & Assumptions

**Given:** A nonempty irreducible reduced crystallographic root system $\Phi$ with base $\Delta$ and Dynkin diagram $\Gamma$.

[L1] $\Gamma$ is connected, and its underlying simple graph is a tree with at most one trivalent vertex and maximum degree at most three; in the simply-laced trivalent case with arms $p-1,q-1,r-1$ and $2\le p\le q\le r$ one has $1/p+1/q+1/r>1$; if $\Gamma$ has a multiple edge its underlying graph is a path, with the double edge at an end, a central double edge on four vertices, or a two-vertex triple edge ([[lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching]], [[prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram]]).

[L2] A based root system is determined up to isomorphism by its Cartan matrix, and its Cartan matrix is determined by its Dynkin diagram ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L3] For a double edge the squared-length ratio (long to short) of the two simple roots is $2$, and for a triple edge it is $3$; the arrow points to the shorter root ([[thm-rank-two-root-system-classification]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L4] A root-system isomorphism is linear, carries the root set onto the root set, and preserves every Cartan integer; every root has signed integral coordinates in a base, and the Weyl group acts transitively on the bases of a root system ([[def-rank-and-isomorphism-of-root-systems]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[prop-every-positive-system-is-weyl-conjugate-and-bases-correspond-to-chambers]]).

[L5] Roots are nonzero and span the ambient space; root reflections preserve the root set and Cartan integers are integral ([[def-reduced-crystallographic-euclidean-root-system]]). The local definition allows the empty root system and calls it irreducible ([[def-reducible-and-irreducible-root-system]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that all edges of $\Gamma$ are simple and there is no trivalent vertex. Then by [L1] the graph is a path on $n\ge1$ vertices, and the Cartan matrix is the $A_n$ matrix $a_{ii}=2$, $a_{i,i+1}=a_{i+1,i}=-1$, $a_{ij}=0$ for $|i-j|\ge2$; the corresponding root system is $A_n$. [L1, L2, algebra]

1.2 If $\Gamma$ is simply laced with exactly one trivalent vertex, write its arms as $p-1,q-1,r-1$ edges with $2\le p\le q\le r$; by [L1] $1/p+1/q+1/r>1$. If $p\ge3$ then $1/p+1/q+1/r\le3\cdot\frac13=1$, so $p=2$; then $1/q+1/r>1/2$, so $q\le3$: for $q=2$ every $r\ge2$ occurs, giving the diagrams $D_{r+2}$ with arms $1,1,r-1$, and for $q=3$ the condition $1/r>1/6$ gives $r=3,4,5$, the diagrams $E_6,E_7,E_8$. No other simply-laced trivalent diagrams occur. [L1, algebra]

1.3 If $\Gamma$ has a multiple edge, then by [L1] its underlying graph is a path and the possibilities are: a double edge at an end, which gives the two orientation choices $B_n$ and $C_n$ on $n\ge2$ vertices (the double edge being the end edge of the path); a central double edge on exactly four vertices, which is $F_4$; or a two-vertex triple edge, which is $G_2$. [L1, L2, L3, algebra]

1.4 The diagram types are distinguished by rank, edge multiplicities and positions, and, for a simply-laced branch, the unordered arm lengths. At rank $n\ge4$ the $D_n$ arms $(1,1,n-3)$ differ from the exceptional arms, which all have just one arm of length $1$. Reversing the path interchanges the two orientations for $F_4$ and for $G_2$, so these introduce no extra types. To check unbased uniqueness it remains to explain why isomorphisms preserve diagram types. In particular $B_n$ and $C_n$ for $n\ge3$ are non-isomorphic even as unbased root systems. If an isomorphism $\varphi:B_n\to C_n$ existed, the image of a chosen base $\Delta_B$ would be a base. Indeed it is a basis of roots, every root has integral coefficients of one sign relative to it because this is true relative to $\Delta_B$ and $\varphi$ is linear, and a vector pairing positively with every member of $\varphi(\Delta_B)$ therefore defines the corresponding positive system, whose indecomposable roots are precisely those basis vectors. By [L4] a Weyl element of $C_n$ carries $\varphi(\Delta_B)$ to the standard base $\Delta_C$. After ordering the bases, the composite based isomorphism would identify their Cartan matrices up to a simultaneous row-and-column permutation, because it preserves every Cartan integer. But for $n\ge3$ the $B_n$ and $C_n$ matrices are transposes and no vertex permutation identifies them: the unique double edge fixes its end of the path, while its arrow is reversed. This contradiction proves non-isomorphism. For $n=2$ the two orientations of the single double edge are interchanged by permuting the two vertices, so [L2] gives $B_2\cong C_2$; and for $n=1$ the unique reduced rank-one system $\{\pm\alpha\}$ is simultaneously $A_1$, $B_1$ and $C_1$. [L2, L3, L4, algebra]

1.5 For the low-rank $D$ coincidences, use the coordinate set $D_n=\{\pm e_i\pm e_j:i<j\}$ at $n=2,3$. These are root systems: a reflection in $e_i-e_j$ exchanges coordinates $i,j$, and one in $e_i+e_j$ exchanges them and negates both, preserving this set. Every root has squared norm $2$, pairwise inner products are integers, reducedness is immediate, and the displayed roots span. For $D_3$ put $a=e_1-e_2$, $b=e_2-e_3$, $c=e_2+e_3$. Its roots are exactly the positives and negatives of $$a,\ b,\ c,\ a+b,\ a+c,\ a+b+c.$$ The vector $(2,1,0)$ pairs positively with all three basis vectors, and this list shows they are exactly the simple positive roots. Their squared lengths are $2$, with $(a,b)=(a,c)=-1$ and $(b,c)=0$, so the diagram is the three-vertex path $b-a-c$, giving $D_3\cong A_3$ by [L2]. In $D_2$, the two root lines generated by $e_1+e_2$ and $e_1-e_2$ are orthogonal, each containing just a pair of opposite roots, giving $A_1\sqcup A_1$. In particular arms $(1,1,1)$ describe $D_4$, not $D_3$. [L2, L5, algebra]

2.1 Combining steps 1.1, 1.2 and 1.3, every irreducible system has one of the listed diagrams, and by [L2] its isomorphism class is determined by the Cartan matrix, hence by that diagram; so the classification list is complete, and steps 1.4–1.5 give the stated low-rank coincidences and uniqueness. Finally, if $\Phi=\varnothing$ then $E=0$ by [L5], and no decomposition into two nonzero orthogonal spaces exists, so it is the additional irreducible rank-zero case under the local definition. It is not one of the positive-rank types in the display. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L2, L5, algebra] ∎

## Remarks

The plate compares exact representatives of the four classical families with all five exceptional diagrams. Each circle denotes one simple root; straight-line lengths in the drawing do not encode root lengths. Every multiple-edge arrow points toward the shorter root, with squared-length ratio $2$ for a double edge and $3$ for a triple edge, as in [L3].

```tikz
\begin{tikzpicture}[x=0.85cm,y=0.85cm,line width=0.7pt]
\tikzset{root/.style={circle,draw,fill=white,inner sep=0pt,minimum size=3.5pt}}
\node[anchor=east] at (-0.45,0) {$A_5$};
\node[root] (a0) at (0,0) {};
\node[root] (a1) at (1,0) {};
\node[root] (a2) at (2,0) {};
\node[root] (a3) at (3,0) {};
\node[root] (a4) at (4,0) {};
\draw (a0) -- (a1);
\draw (a1) -- (a2);
\draw (a2) -- (a3);
\draw (a3) -- (a4);
\node[anchor=east] at (-0.45,-1.4) {$B_5$};
\node[root] (b0) at (0,-1.4) {};
\node[root] (b1) at (1,-1.4) {};
\node[root] (b2) at (2,-1.4) {};
\node[root] (b3) at (3,-1.4) {};
\node[root] (b4) at (4,-1.4) {};
\draw (b0) -- (b1);
\draw (b1) -- (b2);
\draw (b2) -- (b3);
\draw (3.06,-1.47) -- (3.94,-1.47);
\draw (3.06,-1.3299999999999998) -- (3.94,-1.3299999999999998);
\draw (3.36,-1.22) -- (3.6,-1.4) -- (3.36,-1.5799999999999998);
\node[anchor=east] at (-0.45,-2.8) {$C_5$};
\node[root] (c0) at (0,-2.8) {};
\node[root] (c1) at (1,-2.8) {};
\node[root] (c2) at (2,-2.8) {};
\node[root] (c3) at (3,-2.8) {};
\node[root] (c4) at (4,-2.8) {};
\draw (c0) -- (c1);
\draw (c1) -- (c2);
\draw (c2) -- (c3);
\draw (3.06,-2.8699999999999997) -- (3.94,-2.8699999999999997);
\draw (3.06,-2.73) -- (3.94,-2.73);
\draw (3.64,-2.6199999999999997) -- (3.4,-2.8) -- (3.64,-2.98);
\node[anchor=east] at (-0.45,-4.7) {$D_6$};
\node[root] (d0) at (0,-4.7) {};
\node[root] (d1) at (1,-4.7) {};
\node[root] (d2) at (2,-4.7) {};
\node[root] (d3) at (3,-4.7) {};
\draw (d0) -- (d1);
\draw (d1) -- (d2);
\draw (d2) -- (d3);
\node[root] (d4) at (4,-4.1) {};
\node[root] (d5) at (4,-5.3) {};
\draw (d3) -- (d4);
\draw (d3) -- (d5);
\node[anchor=east] at (6,0) {$E_6$};
\node[root] (e60) at (6.5,0) {};
\node[root] (e61) at (7.5,0) {};
\node[root] (e62) at (8.5,0) {};
\node[root] (e63) at (9.5,0) {};
\node[root] (e64) at (10.5,0) {};
\draw (e60) -- (e61);
\draw (e61) -- (e62);
\draw (e62) -- (e63);
\draw (e63) -- (e64);
\node[root] (e6top) at (8.5,0.65) {};
\draw (e62) -- (e6top);
\node[anchor=east] at (6,-1.4) {$E_7$};
\node[root] (e70) at (6.5,-1.4) {};
\node[root] (e71) at (7.5,-1.4) {};
\node[root] (e72) at (8.5,-1.4) {};
\node[root] (e73) at (9.5,-1.4) {};
\node[root] (e74) at (10.5,-1.4) {};
\node[root] (e75) at (11.5,-1.4) {};
\draw (e70) -- (e71);
\draw (e71) -- (e72);
\draw (e72) -- (e73);
\draw (e73) -- (e74);
\draw (e74) -- (e75);
\node[root] (e7top) at (8.5,-0.7499999999999999) {};
\draw (e72) -- (e7top);
\node[anchor=east] at (6,-2.8) {$E_8$};
\node[root] (e80) at (6.5,-2.8) {};
\node[root] (e81) at (7.5,-2.8) {};
\node[root] (e82) at (8.5,-2.8) {};
\node[root] (e83) at (9.5,-2.8) {};
\node[root] (e84) at (10.5,-2.8) {};
\node[root] (e85) at (11.5,-2.8) {};
\node[root] (e86) at (12.5,-2.8) {};
\draw (e80) -- (e81);
\draw (e81) -- (e82);
\draw (e82) -- (e83);
\draw (e83) -- (e84);
\draw (e84) -- (e85);
\draw (e85) -- (e86);
\node[root] (e8top) at (8.5,-2.15) {};
\draw (e82) -- (e8top);
\node[anchor=east] at (6,-4.3) {$F_4$};
\node[root] (f0) at (6.5,-4.3) {};
\node[root] (f1) at (7.5,-4.3) {};
\node[root] (f2) at (8.5,-4.3) {};
\node[root] (f3) at (9.5,-4.3) {};
\draw (f0) -- (f1);
\draw (7.56,-4.37) -- (8.44,-4.37);
\draw (7.56,-4.2299999999999995) -- (8.44,-4.2299999999999995);
\draw (7.86,-4.12) -- (8.1,-4.3) -- (7.86,-4.4799999999999995);
\draw (f2) -- (f3);
\node[anchor=east] at (6,-5.5) {$G_2$};
\node[root] (g0) at (6.5,-5.5) {};
\node[root] (g1) at (7.5,-5.5) {};
\draw (6.56,-5.6) -- (7.44,-5.6);
\draw (6.56,-5.5) -- (7.44,-5.5);
\draw (6.56,-5.4) -- (7.44,-5.4);
\draw (6.86,-5.32) -- (7.1,-5.5) -- (6.86,-5.68);
\end{tikzpicture}
```

The displayed classical ranks are $5,5,5,6$. In general $A_n$ is a path on $n$ vertices; $B_n$ and $C_n$ extend or shorten the simple-edge portion while retaining the end double edge and the indicated opposite arrow directions. For $D_n$, the long arm has $n-3$ edges and the two other arms have one edge each; the displayed $D_6$ therefore has arms $(1,1,3)$. The exceptional branch arms are $(1,2,2)$, $(1,2,3)$ and $(1,2,4)$ for $E_6,E_7,E_8$. The low-rank identifications and the empty rank-zero case remain as stated above; in particular, the $D_n$ family here starts at $n=4$. The classification proof is independent of this illustration.
