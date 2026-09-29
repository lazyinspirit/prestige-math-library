---
id: thm-polygonal-normal-form-for-compact-connected-surfaces
kind: theorem
title: "Polygonal normal forms for compact connected surfaces"
status: draft
origin: pipeline
deps: [lem-compact-surface-admits-a-finite-triangulation, lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema, lem-polygonal-schema-reduction-moves, def-polygonal-schema-and-edge-pairing, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, prop-singular-chains-and-homology-are-covariantly-functorial, def-axiom-of-choice]
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6, Lemma 6.1, Steps 1–6, printed pp.92–95 (PDF pp.102–105)"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every nonempty compact
connected boundaryless topological surface has a one-polygon surface schema
([[def-polygonal-schema-and-edge-pairing]]) homeomorphic to it and reducible by
finite homeomorphism-preserving polygon moves to one of these forms:

1. the sphere digon with boundary word $a a^{-1}$, denoted by the **empty
   reduced word** after the terminal inverse-pair cancellation;
2. a handle word $\prod_{i=1}^{g}a_i b_i a_i^{-1}b_i^{-1}$ for some $g\geq1$;
3. a crosscap word $\prod_{j=1}^{k}c_jc_j$ for some $k\geq1$.

The empty reduced word is notation for the genuine paired sphere digon; an
empty-boundary polygon is not a polygonal schema. A mixed handle/crosscap word
reduces to crosscap form. This theorem asserts existence; uniqueness of $g$ or
$k$ is proved by the classification theorem.

## Facts & Assumptions

**Given:** a nonempty compact connected boundaryless topological surface $S$.

[L1] Under AC, $S$ has a finite triangulation with two incident triangles at
each edge and a cyclic link at each vertex
([[lem-compact-surface-admits-a-finite-triangulation]],
[[def-axiom-of-choice]]). A connected triangulated surface with these
conditions has a one-polygon surface schema with the same realization
([[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]]).

[L2] A one-polygon surface schema is a genuine nondegenerate closed disk
(a polygon or a permitted bigon) with boundary sides paired, each label occurring twice; its quotient has
one face, one edge per side pair and one vertex per paired-corner class
([[def-polygonal-schema-and-edge-pairing]]).

[L3] The finite edge subdivision, cyclic rotation, orientation reversal,
nonterminal adjacent inverse cancellation, polygon split and inverse merge,
same-direction-pair extraction, conjugation and interlaced-handle extraction
of [[lem-polygonal-schema-reduction-moves]] preserve quotient homeomorphism
type. The corrected conjugation rule is
$aUVa^{-1}X\sim bVU b^{-1}X$; the corrected handle extraction is
$aUbVa^{-1}Xb^{-1}Y\sim cdc^{-1}d^{-1}YXVU$.
The corrected mixed move takes $aaXbcb^{-1}c^{-1}Y$ through a finite chain of
split/merge moves to $a_2a_2Xc_1c_1b_1b_1Y$. When $X$ is empty, the three
square blocks are consecutive. These operations select only finite data.

[L4] For a cyclic side word $W$ of length $2E$, number its corner occurrences
$0,\ldots,2E-1$ cyclically. Each paired side identifies its two endpoint
corners in the order specified by the pairing; the transitive closure is the
set of vertex classes. The connected one-skeleton of a one-polygon connected
surface schema has a path between any two vertex classes. This is finite
combinatorics of [L2].

[L5] A polygonal schema carries a finite CW structure with cell counts
$(V,E,F)$ by [L2]. Its Euler characteristic $V-E+F$ equals the alternating
rank of singular homology, so a homeomorphism between finite schema
realizations preserves that number
([[def-euler-characteristic-of-a-finite-cw-complex]],
[[thm-euler-poincare-formula-for-finite-cw-complexes]],
[[prop-singular-chains-and-homology-are-covariantly-functorial]]).

## Proof

**Given:** $S$ as in the statement.

1.1 Apply [L1] to obtain a finite triangulated model of $S$, and then a one-polygon surface schema $P$ with quotient homeomorphic to $S$. Let $W$ be its finite cyclic paired word. Its word has at least one pair by [L2]. All subsequent operations are the finite quotient-preserving operations of [L3], with the local vertex reduction detailed in step 2. [L1, L2]

2.1 Whenever $W$ has a cyclic adjacent inverse pair $a a^{-1}$ and at least one other paired edge remains, use the inverse-pair cancellation of [L3]. It removes one paired edge, so finite repetition stops. If $W$ consists only of $a a^{-1}$, stop at this actual digon. Its formal reduced word is empty; no zero-sided polygon is constructed. [L2, L3,step 1.1]

3.1 Suppose $W$ still has more than one vertex class and no adjacent inverse pair. Choose a vertex class $\alpha$ joined by an edge $b_1$ to a different class; such an edge exists by connectedness of the finite one-skeleton [L4]. Relabel its reference direction so the selected occurrence is $b_1$. In the cyclic oriented-corner list at $\alpha$, let $b_2$ be the oriented edge following $b_1$ locally. Since an immediately returning inverse edge would be an adjacent inverse pair, this list has at least two members. Reading the face from $b_1$, its word has one of the two forms $b_1 b_2^{-1} A b_2 B$ or $b_1 b_2^{-1} A b_2^{-1} B$, with $A,B$ possibly empty. In either case split the polygon along a fresh diagonal $c$, obtaining face words $b_1 b_2^{-1}c$ and $c^{-1}A b_2^{\varepsilon}B$, where $\varepsilon=+1$ or $-1$. If $\varepsilon=+1$, rotate and merge along the opposite $b_2$ sides to get the cyclic one-face word $B c^{-1} A c b_1$. If $\varepsilon=-1$, reverse the orientation of the second face, whose word becomes $B^{-1}b_2 A^{-1}c$, then merge it with the first face along the now opposite $b_2$ sides. The cyclic result is $c b_1 A^{-1} c B^{-1}$. Reversal of one face before gluing changes only its presentation, and each split/merge preserves the quotient by [L3]. This equal-sign branch is necessary for nonorientable words such as $abab$, which has two vertex classes and no adjacent inverse pair. [L2,L3,L4,step 2.1]

4.1 For the exact vertex-class calculation, use oriented edge germs: $b$ and $d$ lead to the same vertex when a boundary occurrence of $d^{-1}$ succeeds an occurrence of $b$, and take the transitive closure. This is the side-endpoint pairing rule [L4] expressed with directed sides. Before either move of step 3.1, $b_1,b_2$ belong to the selected cyclic class $\alpha$ because $b_2^{-1}$ succeeds $b_1$. In the split face $b_1 b_2^{-1}c$, the new $c^{-1}$ germ follows the same old $b_2^{-1}$ side. In the opposite-sign branch, the merged word $B c^{-1}A c b_1$ identifies $c$ with the old $b_1^{-1}$ successor; in the equal-sign branch, reversing the second oriented face gives $c b_1 A^{-1}c B^{-1}$ and the corresponding reversed successor relation. For a direct corner check, number the input corners $v_0,v_1,\ldots$ starting before $b_1$, and write $m=|A|$. The input corner $v_1$ just after $b_1$ is paired by the two $b_2$ sides with $v_{m+3}$ in the opposite-sign case, and with $v_{m+2}$ in the equal-sign case. The displayed merged word has one corner after $b_1$ representing exactly that paired pair. The vertex class containing input $v_0$ (before $b_1$, outside $\alpha$) gains one occurrence: in the equal-sign output the corners just before $b_1$ and just after the second $c$ both represent $v_0$; in the opposite-sign output the corner after $B$ and the corner before $b_1$ both represent $v_0$. Every remaining old corner has one output representative. Thus the total number of boundary corners stays fixed, the selected class shrinks and the other class gains one occurrence. Thus the chosen class $\alpha$ loses one corner occurrence in either sign case. In oriented-germ language, if $b_2^{-1}\notin\alpha$, $b_2$ leaves $\alpha$; if $b_2^{-1}\in\alpha$, both $b_2$ and $b_2^{-1}$ leave and one $c$ orientation replaces them. All other members stay in the same cyclic order. The split and inverse merge preserve $E,F$ and the quotient surface, hence preserve $V$ by [L5] and the finite-cell Euler count; equivalently direct endpoint tracing gives the same result. This is Gallier–Xu Lemma 6.1 Step 2's oriented-corner calculation applied to a one-face schema, including its inverse-face option. Repeat at most $|\alpha|-1$ times. At length one its incident side returns immediately as an adjacent inverse pair, which step 2.1 cancels; then both $V$ and $E$ decrease by one. Restart with a remaining nontrivial vertex class. Each outer restart decreases finite $V$ and each inner operation decreases finite selected-class length, so the process ends at one vertex class or at the sphere digon. [L3,L4,L5,step 2.1,step 3.1]

5.1 Assume a nonterminal one-vertex word with no adjacent inverse pair. If a letter $a$ occurs twice in the same boundary direction, write the cyclic word $aXaY$. The same-direction extraction of [L3] gives $bbY^{-1}X$, an adjacent square block followed by a paired residual word. It replaces one side pair by one side pair, keeps one face and preserves the quotient surface, so [L5] and the finite-cell Euler count keep the vertex count equal to one. Every previously extracted square block consists of two consecutive occurrences of a different label, so neither occurrence of the selected $a$ can cut between its two sides. Such a block lies wholly in $X$ or $Y$; the rewrite may reverse its order and reference direction, but its two equal-sign occurrences remain consecutive. Declare these intact blocks processed and repeat on the other paired letters. Each extraction consumes one previously unprocessed side pair, so this stage is finite. [L2, L3,L5,step 4.1]

6.1 If no unprocessed pair has equal exponents, every remaining pair is of the form $a,a^{-1}$. The one-vertex nonterminal schema has no adjacent inverse pair: in a cyclic string $bb^{-1}Y$ with $Y$ nonempty, the corner between $b$ and $b^{-1}$ is paired only with itself by those two sides and is separate from the corners of $Y$, contradicting one vertex. Now take any unprocessed inverse pair $b,b^{-1}$. If no other pair crosses it, rotate the word to $bXb^{-1}Y$. Both $X$ and $Y$ are nonempty by the preceding observation. Every other paired label has both occurrences wholly in $X$ or wholly in $Y$; in particular an earlier contiguous square or handle block cannot straddle the two arcs. The opposite-direction $b$ pairing joins the two end corners of $X$ to each other and the two end corners of $Y$ to each other, while every other paired side joins corners within its own arc. Thus the corner classes carried by $X$ and $Y$ stay distinct, again contradicting the one-vertex hypothesis. Consequently an unprocessed inverse pair has a crossing partner, and that partner is unprocessed because each processed block is contiguous. Orient and cyclically rotate the two interlaced pairs, reversing the polygon if needed, to obtain $aUbVa^{-1}Xb^{-1}Y$. By [L3] its interlaced pair extracts one commutator block $cdc^{-1}d^{-1}$, leaving residual word $YXVU$. This move replaces two paired labels by two and keeps one face and the quotient homeomorphism type, so [L5] and the Euler cell count keep one vertex for the next repetition. Any earlier contiguous square or handle block involves labels different from $a,b$ and therefore lies wholly in one of $U,V,X,Y$; the rewrite only moves those strings, so it never splits an earlier block. Reversal of a whole block, if needed by a preceding square extraction, still gives a square block or a commutator block after relabelling. Repeat on the shorter unprocessed residual word. The number of unprocessed pairs drops by two at each step, so this too terminates. [L2, L3,L5, step 2.1,step 4.1,step 5.1]

7.1 After steps 5.1–6.1, the word is a finite product of handle and square blocks. When both kinds occur, cyclically put one square block next to one handle block and apply the mixed move of [L3], replacing that pair by three square blocks. The handle-block count drops by one. Iterate until either all blocks are handles or all are squares. All intermediate cyclic words have a positive even number of sides and remain surface schemas by [L2, L3]. Consequently the terminal form is one of the three forms in the statement. The only AC use is the one inherited from the triangulation in [L1]; the word manipulations and their termination use finite choices. [L1,L2,L3,step 2.1,step 3.1,step 4.1,step 5.1,step 6.1] ∎
## Remarks

The genus-zero surface is represented geometrically by the paired sphere
digon. “Empty word” is a terminal reduction convention only. The vertex
reduction has two measures: a split/merge shortens one chosen cyclic vertex
class, and only the subsequent adjacent-inverse cancellation decreases the
number of vertex classes. The word $abab$ illustrates the equal-sign branch: $abab\sim caa^{-1}c\sim cc$, with the intermediate vertex count unchanged at two. The proof gives no numerical uniqueness.
