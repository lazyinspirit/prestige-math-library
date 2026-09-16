---
id: thm-classification-of-irreducible-reduced-crystallographic-root-systems
kind: theorem
title: Classification of irreducible root systems
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching, thm-rank-two-root-system-classification, thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram, def-reducible-and-irreducible-root-system]
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
([[def-reducible-and-irreducible-root-system]]). Then $\Phi$ is isomorphic,
as a root system, to exactly one of
$$A_n\ (n\ge1),\quad B_n\ (n\ge2),\quad C_n\ (n\ge3),\quad D_n\ (n\ge4), \quad E_6,\ E_7,\ E_8,\ F_4,\ G_2,$$
with the low-rank identifications $B_1=C_1=A_1$, $B_2=C_2$,
$D_2=A_1\sqcup A_1$ and $D_3=A_3$, where the subscript denotes the number of
simple roots. Here $A_n$ is the type whose Dynkin diagram is a path on $n$
vertices with simple edges, $B_n$ and $C_n$ have path diagrams differing by
the direction of the arrow on the double edge, $D_n$ is the simply-laced
trivalent diagram with arms of lengths $1,1,n-3$, and $E_6,E_7,E_8,F_4,G_2$
are specified by their diagrams of the classification list.

## Facts & Assumptions

**Given:** An irreducible reduced crystallographic root system $\Phi$ with base $\Delta$ and Dynkin diagram $\Gamma$.

[L1] $\Gamma$ is connected, and its underlying simple graph is a tree with at most one trivalent vertex and maximum degree at most three; in the simply-laced trivalent case with arms $p-1,q-1,r-1$ and $2\le p\le q\le r$ one has $1/p+1/q+1/r>1$; if $\Gamma$ has a multiple edge its underlying graph is a path, with the double edge at an end, a central double edge on four vertices, or a two-vertex triple edge ([[lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching]], [[prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram]]).

[L2] A based root system is determined up to isomorphism by its Cartan matrix, and its Cartan matrix is determined by its Dynkin diagram ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L3] For a double edge the length ratio of the two simple roots is $2$, and for a triple edge it is $3$; the arrow points to the shorter root ([[thm-rank-two-root-system-classification]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that all edges of $\Gamma$ are simple and there is no trivalent vertex. Then by [L1] the graph is a path on $n\ge1$ vertices, and the Cartan matrix is the $A_n$ matrix $a_{ii}=2$, $a_{i,i+1}=a_{i+1,i}=-1$, $a_{ij}=0$ for $|i-j|\ge2$; the corresponding root system is $A_n$. [L1, L2, algebra]

1.2 If $\Gamma$ is simply laced with exactly one trivalent vertex, write its arms as $p-1,q-1,r-1$ edges with $2\le p\le q\le r$; by [L1] $1/p+1/q+1/r>1$. If $p\ge3$ then $1/p+1/q+1/r\le3\cdot\frac13=1$, so $p=2$; then $1/q+1/r>1/2$, so $q\le3$: for $q=2$ every $r\ge2$ occurs, giving the diagrams $D_{r+2}$ with arms $1,1,r-1$, and for $q=3$ the condition $1/r>1/6$ gives $r=3,4,5$, the diagrams $E_6,E_7,E_8$. No other simply-laced trivalent diagrams occur. [L1, algebra]

1.3 If $\Gamma$ has a multiple edge, then by [L1] its underlying graph is a path and the possibilities are: a double edge at an end, which gives the two orientation choices $B_n$ and $C_n$ on $n\ge2$ vertices (the double edge being the end edge of the path); a central double edge on exactly four vertices, which is $F_4$; or a two-vertex triple edge, which is $G_2$. [L1, L2, L3, algebra]

1.4 The list has no repetitions beyond the stated coincidences: $B_n$ and $C_n$ for $n\ge3$ have Cartan matrices that are transposes of one another and are not related by a permutation, so the corresponding based systems are non-isomorphic by [L2]; for $n=2$ the two orientations of the single double edge are interchanged by permuting the two vertices, so $B_2\cong C_2$; and for $n=1$ the unique reduced rank-one system $\{\pm\alpha\}$ is simultaneously $A_1$, $B_1$ and $C_1$. [L2, L3, algebra]

1.5 The remaining recorded coincidences are similar degenerate cases: $D_3$ is the simply-laced trivalent diagram with arm lengths $1,1,1$, whose underlying graph is the path on three vertices, hence $D_3\cong A_3$; and the rank-two member of the $D$-series, whose standard realization is $\{\pm(e_1+e_2),\pm(e_1-e_2)\}$, is the orthogonal union of two copies of $A_1$, that is $D_2=A_1\sqcup A_1$ as a reducible system (which is why the $D$-series begins at $n=4$). [L2, L3, algebra]

2.1 Combining steps 1.1, 1.2 and 1.3, every irreducible system has one of the listed diagrams, and by [L2] its isomorphism class is determined by the Cartan matrix, hence by that diagram; so the classification list is complete, and step 1.4 lists exactly the identifications among the listed names. [step 1.1, step 1.2, step 1.3, step 1.4, L2, algebra] ∎
