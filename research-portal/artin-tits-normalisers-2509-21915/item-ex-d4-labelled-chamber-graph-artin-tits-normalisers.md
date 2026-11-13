---
title: D4 chamber labels and complete adjacency graph
status: published
research_item: ex-d4-labelled-chamber-graph-artin-tits-normalisers
dependency_level: 17
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 28–29, Figures 2–3 and §7.2.1
      statement: For the D4 example with J={2}, the figures display 32 labelled
        chambers and their adjacency graph; each adjacency gives opposite
        generating arrows.
      hypotheses: The D4 diagram and generator conventions of §7, with J={2}.
      reading_limits: Read the frozen extracted §7.2.1 and visually inspected original
        PDF pp. 28–29, Figures 2–3 and equation (7.1). This citation attributes
        the chamber labels, graph and universal-groupoid interpretation. The
        sign certificate and verification below are local calculations from the
        declared suppliers; the article's conclusion is not a proof premise.
---

PDF p. 28: ` Figures 2–3; §7.2.1 `; PDF p. 29: ` Figures 2–3; §7.2.1 `

## Prerequisites

- [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)
- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)
- [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)
- [def-universal-wall-groupoid-artin-tits-normalisers](item-def-universal-wall-groupoid-artin-tits-normalisers)
- [prop-universal-generators-artin-tits-normalisers](item-prop-universal-generators-artin-tits-normalisers)


## Example

For the $D_4$ diagram with central vertex $2$, put $J=\{2\}$ and write $s=s_1$, $t=s_2$, $u=s_3$, and $v=s_4$. A label $(x,i)$ abbreviates the pair $(x,\{i\})$, and $e$ is the identity. The 32 relative chambers have the following labels; the vertex numbers are used only to specify their graph.

| Vertex | Label | Vertex | Label |
|---|---|---|---|
| 1 | $(stuts,2)$ | 17 | $(stutsvtsu,4)$ |
| 2 | $(stu,1)$ | 18 | $(stuvtsutv,3)$ |
| 3 | $(stuv,1)$ | 19 | $(stvtsutv,3)$ |
| 4 | $(st,1)$ | 20 | $(vtsu,4)$ |
| 5 | $(stuvts,2)$ | 21 | $(vtu,4)$ |
| 6 | $(stv,1)$ | 22 | $(utv,3)$ |
| 7 | $(e,2)$ | 23 | $(stutsvtu,4)$ |
| 8 | $(stutsvt,4)$ | 24 | $(vtsutv,2)$ |
| 9 | $(stvts,2)$ | 25 | $(utsv,3)$ |
| 10 | $(uts,3)$ | 26 | $(stuvtsutvtu,2)$ |
| 11 | $(stutsvts,4)$ | 27 | $(vtutvstv,1)$ |
| 12 | $(stuvtsut,3)$ | 28 | $(vtutv,2)$ |
| 13 | $(stvtsut,3)$ | 29 | $(utsvtustv,1)$ |
| 14 | $(vts,4)$ | 30 | $(vtutvst,1)$ |
| 15 | $(vt,4)$ | 31 | $(utsvtust,1)$ |
| 16 | $(ut,3)$ | 32 | $(utsvtu,2)$ |

The undirected adjacency pairs are $(1,2), (1,8), (1,10), (2,3), (2,4), (3,5), (3,6), (4,6), (4,7), (5,11), (5,12), (6,9), (7,15), (7,16), (8,11), (8,23), (9,13), (9,14), (10,16), (10,25), (11,17), (12,13), (12,18), (13,19), (14,15), (14,20), (15,21), (16,22), (17,23), (17,26), (18,19), (18,26), (19,24), (20,21), (20,24), (21,28), (22,25), (22,28), (23,32), (24,27), (25,32), (26,29), (27,29), (27,30), (28,30), (29,31), (30,31), (31,32)$. Each adjacency between $A=(x,I)$ and $B=(y,K)$ supplies opposite arrows in the universal wall groupoid $\widetilde{\mathcal{BH}}(J)$. This groupoid has the chamber labels as objects and one arrow from $A$ to $B$, labelled $x^{-1}y$; composition multiplies labels in traversal order. These adjacent-crossing arrows generate the groupoid.

## Example references

[def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)

[thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)

[def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[def-universal-wall-groupoid-artin-tits-normalisers](item-def-universal-wall-groupoid-artin-tits-normalisers)

[prop-universal-generators-artin-tits-normalisers](item-prop-universal-generators-artin-tits-normalisers)

## Facts & Assumptions


[F1] In the simple-root basis, $s_i$ changes only coordinate $i$, replacing it by its negative plus the sum of its neighbours' coordinates. The dual action is $(xf)(a)=f(x^{-1}a)$. [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)

[F2] A label is a pair $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum length in $xW_I$. Such labels correspond bijectively to relative chambers by $(x,I)\mapsto xC_I$. Here $C_I$ consists of dual functionals vanishing on the simple roots indexed by $I$ and positive on the others. [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers) [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[F3] The relative space is all of $\Theta_J$, its arrangement has the seven hyperplanes represented by $\alpha_1,\alpha_3,\alpha_4,\alpha_1+\alpha_2+\alpha_3,\alpha_1+\alpha_2+\alpha_4,\alpha_2+\alpha_3+\alpha_4,\alpha_1+\alpha_2+\alpha_3+\alpha_4$, and it has exactly 32 chambers. [ex-d4-restricted-arrangement-artin-tits-normalisers](item-ex-d4-restricted-arrangement-artin-tits-normalisers)

[F4] If $x\alpha_i$ is positive then $\ell(xs_i)>\ell(x)$. The geometric representation is faithful. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

[F5] Adjacent labelled chambers have mutually inverse simple wall crossings, one in each direction. The simple wall-crossing notation is $\omega_{a,I}(x,I)=(xv_{a,I},K)$; for the wall from $(x,I)$ to $(y,K)$ it gives $y=xv_{a,I}$. [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers) [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)

[F6] The universal wall groupoid $\widetilde{\mathcal{BH}}(J)$ has objects $\mathrm{Cham}(J)$ and one arrow from $(x,I)$ to $(y,K)$, labelled $x^{-1}y$. Composition multiplies labels in traversal order; the reverse arrow, labelled $y^{-1}x$, is its inverse. [def-universal-wall-groupoid-artin-tits-normalisers](item-def-universal-wall-groupoid-artin-tits-normalisers)

[F7] For a finite-rank Coxeter system, the arrows between adjacent chambers generate the universal wall groupoid. [prop-universal-generators-artin-tits-normalisers](item-prop-universal-generators-artin-tits-normalisers)

## Verification


**Given:** The $D_4$ data, labels and vertex numbering in the Example.

**Goal:** Verify the labels, the complete adjacency list, and the opposite arrows.

1.1 For each row $(x,i)$, apply the reflection rule in [F1] from right to left to $\alpha_i$. The result is $x\alpha_i=\alpha_2$ in every row. Therefore $xs_ix^{-1}=s_2$, so $W_Jx=xW_{\{i\}}$. Also $x\alpha_i$ is positive; by [F4], $\ell(xs_i)>\ell(x)$. Since $W_{\{i\}}=\{e,s_i\}$, $x$ is shortest in its right coset. Thus each row is a valid label in [F2]. [F1, F2, F4, given]

2.1 For an independently reproducible chamber certificate, let $f_i(\alpha_i)=0$ and $f_i(\alpha_j)=1$ for $j\ne i$. For each row calculate the signs of $(xf_i)(r)$ in the order of the seven roots in [F3], applying the letters of $x$ from left to right to each root before evaluating with $f_i$. The resulting sign strings for vertices 1 through 32, in order, are $--+-+++,-++-+++,-++--++,-++++++,-++--+-,-+++-++,+++++++,--+-++-,-+-+-++,+-+-+++,--+--+-,-+---+-,-+-+-+-,++-+-++,++-++++,+-+++++,--+----,-+-----,-+-+---,++-+--+,++-++-+,+-+++-+,--+-+--,++-+---,+-+-+-+,-------,+--+---,+--++-+,+------,+--++--,+---+--,+-+-+--$. No entry is zero and all strings are distinct. Each $f_i$ lies in $C_{\{i\}}$, so [F2] places $xf_i$ in the chamber represented by its row. The 32 distinct chambers exhaust the 32 chambers of [F3]. [F1, F2, F3, step 1.1]

3.1 Two regions of a finite real hyperplane arrangement are adjacent exactly when their sign strings differ in one position. Indeed, adjacent regions differ only across their common wall. Conversely, for points in two regions differing only at one hyperplane, their joining segment stays strictly on the common side of every other hyperplane and crosses the remaining hyperplane at a point in no other hyperplane; a small neighbourhood there supplies a common facet. Comparing the strings in step 2.1 gives exactly the 48 pairs in the Example. In particular no adjacency is omitted. [F3, step 2.1]

4.1 For any listed adjacency from $A=(x,I)$ to $B=(y,K)$, [F5] gives $y=xv_{a,I}$, so [F6] identifies its arrow label as $x^{-1}y=v_{a,I}$. The reverse arrow has label $y^{-1}x$ and is its inverse in this groupoid. The $D_4$ system has four simple generators, so [F7] applies. Since step 3.1 lists every adjacency, these are precisely the adjacent-crossing arrows and they generate $\widetilde{\mathcal{BH}}(J)$. [F5, F6, F7, given, step 3.1]

5.1 Vertex 7 is the fundamental label $(e,2)$. The listed graph is connected, as can be checked by following its edges from vertex 7 to every listed vertex. Following such a path recovers each displayed label by the iterative simple wall-crossing formula in [F5]; the bijection in [F2] ensures that the recovered label is the one in its row. Together with the exhaustive chamber and adjacency certificates and the generating-arrow identification, this proves the example. [F2, F5, step 2.1, step 3.1, step 4.1] ∎

## Source notes

The article reference attributes the figures. The sign calculation and adjacency argument above are local; the article's table is not used as their proof.
