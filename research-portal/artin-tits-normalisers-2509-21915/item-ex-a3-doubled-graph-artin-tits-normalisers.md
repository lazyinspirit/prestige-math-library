---
title: A3 doubled adjacency graph
status: draft
research_item: ex-a3-doubled-graph-artin-tits-normalisers
dependency_level: 18
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 14, Example 3.31 and diagram
      statement: For type A3 and J={3}, the six displayed chamber labels form a
        doubled hexagon with the indicated simple-crossing labels in both
        directions.
      hypotheses: The type A3 Coxeter system with vertices numbered consecutively 1,
        2, 3 and J={3}, using the article's chamber and crossing conventions.
      reading_limits: Read the frozen extracted text and page-14 image of Example 3.31
        and its diagram in this adjudication. This reference attributes the
        example only. The local verification uses the declared mathematical
        suppliers and explicit calculations, not the article claim as a proof
        premise.
---

PDF p. 14: ` Example 3.31 and diagram `

## Prerequisites

- [ex-a3-arrangement-artin-tits-normalisers](item-ex-a3-arrangement-artin-tits-normalisers)
- [def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)
- [thm-finite-wall-crossing-input-artin-tits-prerequisites](item-thm-finite-wall-crossing-input-artin-tits-prerequisites)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)


## Example

Take the type $A_3$ Coxeter system with vertices $1,2,3$ in a chain and $J=\{3\}$. Write a numeral in a chamber label for the corresponding singleton subset. In cyclic order, put $C_0=(e,3)$, $C_1=(s_1,3)$, $C_2=(s_1s_2s_3,2)$, $C_3=(s_1s_2s_3s_1s_2,1)$, $C_4=(s_2s_3s_1s_2,1)$ and $C_5=(s_2s_3,2)$. The directed chamber graph is a doubled hexagon: for each $i$ modulo $6$ it has one arrow $C_i\to C_{i+1}$ and one arrow $C_{i+1}\to C_i$, and no other arrows.

The labels of the forward arrows, in the order $i=0,\ldots,5$, are $\omega_{1,3},\omega_{2,3},\omega_{1,2},\omega_{3,1},\omega_{2,1},\omega_{3,2}$. The corresponding reverse-arrow labels are $\omega_{1,3},\omega_{3,2},\omega_{2,1},\omega_{3,1},\omega_{1,2},\omega_{2,3}$. Here $\omega_{a,I}$ denotes the simple wall crossing from a label with second component $I$ at the index $a\notin I$; the numeral in its second subscript abbreviates the singleton $I$.

## Example references

[ex-a3-arrangement-artin-tits-normalisers](item-ex-a3-arrangement-artin-tits-normalisers)

[def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)

[def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[thm-finite-wall-crossing-input-artin-tits-prerequisites](item-thm-finite-wall-crossing-input-artin-tits-prerequisites)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

## Facts & Assumptions

[F1] The six displayed labels are the six chambers, in cyclic order, of an arrangement of three distinct lines through the origin in the relative plane. [ex-a3-arrangement-artin-tits-normalisers](item-ex-a3-arrangement-artin-tits-normalisers)

[F2] The directed chamber graph has exactly one arrow for each ordered pair of distinct chambers sharing a wall. [def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)

[F3] For a label $(x,I)$ and $a\notin I$, put $D$ for the component containing $a$ in the diagram induced on $I\cup\{a\}$. The crossing is $\omega_{a,I}(x,I)=(xw_{D\setminus\{a\}}w_D,(I\cup\{a\})\setminus\{\iota_D(a)\})$, where $w_D$ is the longest element and $\iota_D$ its opposition permutation. [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[F4] If the standard parabolic on $I\cup\{a\}$ is finite, the longest-element crossing gives an adjacent chamber and crossing back at the opposition image of $a$ returns the original label. [thm-finite-wall-crossing-input-artin-tits-prerequisites](item-thm-finite-wall-crossing-input-artin-tits-prerequisites)

[F5] The canonical representation has simple-root basis $\alpha_i$ and reflection formula $r_i(v)=v-2B(v,\alpha_i)\alpha_i$, with $B(\alpha_i,\alpha_i)=1$ and $B(\alpha_i,\alpha_j)=-\cos(\pi/m_{ij})$ for $i\ne j$. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F6] For a finite generating set and its Coxeter matrix, the canonical reflection homomorphism is injective. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F7] Coxeter length is the minimum number of simple generators in a word for the element; in type $A_3$ the presentation has $s_i^2=e$, $(s_1s_2)^3=(s_2s_3)^3=e$ and $(s_1s_3)^2=e$. [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

## Verification

**Given:** The type $A_3$ system and $J=\{3\}$ in the example. **Goal:** Verify the graph and all displayed crossing labels.

1.1 Three distinct lines through the origin divide the plane into six sectors. Each sector shares a wall with precisely the preceding and following sectors in cyclic order. By [F1] these are $C_0,\ldots,C_5$, and by [F2] each shared wall supplies exactly the two indicated directed arrows. There are no other arrows. [F1, F2]

1.2 Put $H=\{(t_1,t_2,t_3,t_4)\in\mathbb R^4:t_1+t_2+t_3+t_4=0\}$ and let $\varepsilon_i$ be the coordinate vectors of $\mathbb R^4$. The map $T$ sending $\alpha_i$ to $\varepsilon_i-\varepsilon_{i+1}$ is an isomorphism onto $H$, since these three differences form a basis. In type $A_3$, [F5] gives $r_i(\alpha_i)=-\alpha_i$, $r_i(\alpha_j)=\alpha_j+\alpha_i$ for $|i-j|=1$, and $r_i(\alpha_j)=\alpha_j$ for $|i-j|>1$. Hence $Tr_iT^{-1}$ is the restriction of the coordinate transposition $(i\ i+1)$. The action of coordinate permutations on $H$ is faithful: fixing every difference $\varepsilon_p-\varepsilon_q$ forces every index to be fixed. Adjacent transpositions generate every permutation, because swapping an adjacent inverted pair reduces the number of inversions until the entries are sorted. Thus [F6] identifies $W$ with the symmetric group $S_4$, preserving all three simple generators. Products of permutations act from right to left. This derives the model locally without invoking internal proof steps of the arrangement supplier. [F5, F6, algebra]

2.1 An inversion of a permutation $p$ is a pair $r<t$ with $p(r)>p(t)$. Right multiplication by an adjacent transposition swaps adjacent entries, changing the inversion count by exactly one. Starting at the identity gives a lower bound on every word length, and sorting adjacent inverted pairs gives a word of exactly that length. By [F7], Coxeter length therefore equals inversion count under step 1.2. For $i=1,2$, the parabolic generated by $s_i,s_{i+1}$ consists of all permutations of positions $i,i+1,i+2$, fixing the remaining position. It is finite; its unique permutation of greatest inversion count reverses those three positions, so $w_{\{i,i+1\}}=s_i s_{i+1}s_i=s_{i+1}s_i s_{i+1}$. On the root differences this reversal sends $\alpha_i$ to $-\alpha_{i+1}$ and $\alpha_{i+1}$ to $-\alpha_i$, so opposition interchanges the two vertices. The disconnected parabolic on $\{1,3\}$ consists of $e,s_1,s_3,s_1s_3$; its longest element is $s_1s_3$ and opposition fixes both vertices. A singleton parabolic has longest element its sole generator and fixes its vertex under opposition. Consequently [F3] gives crossing elements $s_1,s_2s_3,s_1s_2,s_3,s_2s_1,s_3s_2$ for $(a,I)=(1,3),(2,3),(1,2),(3,1),(2,1),(3,2)$ respectively. For connected pairs $D=I\cup\{a\}$; for the disconnected pair $w_Iw_{I\cup\{a\}}=s_a=w_{D\setminus\{a\}}w_D$. Thus in all six cases the component formula [F3] agrees with the full-parabolic formula in [F4], whose finiteness hypothesis holds. [F3, F4, F7, step 1.2, algebra]

3.1 Represent the first components of $C_0,\ldots,C_5$ in one-line permutation notation as $1234,2134,2341,3421,3412,1342$. Right multiplication by the six crossing elements in step 2.1 takes each entry to the next, cyclically. The opposition rule in [F3] gives the corresponding second components $3,2,1,1,2,3$. Thus the six forward labels are exactly those displayed. All relevant parabolics are finite, so [F4] applies to each crossing. [F3, F4, step 1.2, step 2.1, algebra]

4.1 For the connected pairs, opposition exchanges the two indices, so [F4] gives reverse labels $\omega_{3,2}$ after $\omega_{2,3}$, $\omega_{2,1}$ after $\omega_{1,2}$, $\omega_{1,2}$ after $\omega_{2,1}$, and $\omega_{2,3}$ after $\omega_{3,2}$. For the disconnected pair $\{1,3\}$, opposition fixes the crossing index, so the reverse labels remain $\omega_{1,3}$ and $\omega_{3,1}$ respectively. These are precisely the displayed reverse labels, completing the verification. [F3, F4, step 2.1, step 3.1] ∎

## Source notes

The article reference attributes the example and diagram. The graph and labels are verified above from the listed suppliers, rather than assumed from that attribution.
