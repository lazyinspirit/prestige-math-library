---
id: thm-classification-of-irreducible-reduced-crystallographic-root-systems
kind: theorem
title: Classification of irreducible root systems
status: draft
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
