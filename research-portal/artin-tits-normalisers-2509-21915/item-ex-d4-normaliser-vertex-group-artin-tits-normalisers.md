---
title: Eight-element D4 normaliser quotient vertex group
status: published
research_item: ex-d4-normaliser-vertex-group-artin-tits-normalisers
dependency_level: 18
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 29–30, §7.2.1 after Figure 4; red labels in Figure 3
      statement: In the D4 example the Brink–Howlett vertex group at J is identified
        with the eight displayed chamber labels over J and with the normaliser
        quotient; the paragraph also describes lifting arrows from the
        fundamental label.
      hypotheses: The D4 diagram with central vertex 2 and J={2}, in the article's
        Coxeter and chamber-label conventions.
      reading_limits: The frozen assignment supplies the extracted claim and locator.
        This reference is attribution of the article claim, not a proof premise;
        the verification below uses the completed suppliers.
---

PDF p. 29: ` §7.2.1 after Figure 4; red labels in Figure 3 `; PDF p. 30: ` §7.2.1 after Figure 4; red labels in Figure 3 `

## Prerequisites

- [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)
- [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)
- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers)
- [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)
- [cor-coxeter-normaliser-splitting-artin-tits-normalisers](item-cor-coxeter-normaliser-splitting-artin-tits-normalisers)
- [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)


## Example

For any finite-rank Coxeter system in the conventions of [prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers), an arrow $x:J\to I$ of the Brink–Howlett groupoid $\mathcal{BH}(J)$ lifts uniquely from the fundamental label $(e,J)$ to the label $(x,I)$.

For the $D_4$ Coxeter diagram with central vertex $2$, set $J=\{2\}$ and write $s=s_1$, $t=s_2$, $u=s_3$, $v=s_4$, and $e=1$. Abbreviate $(x,\{2\})$ to $(x,2)$. Let $W_J=\langle t\rangle$, let $\operatorname{Norm}_W(W_J)=\{w\in W:wW_Jw^{-1}=W_J\}$, and put $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$. Then the vertex group $\mathcal{BH}_J=\operatorname{Hom}_{\mathcal{BH}(J)}(J,J)$ is a subgroup of $W$, and the quotient map induces $\mathcal{BH}_J\cong N(W,J)$. More precisely,

$$\mathcal{BH}_J=\{x:(x,2)\in\mathrm{Cham}(J)\}=\{e,stuts,stuvts,stvts,vtsutv,stuvtsutvtu,vtutv,utsvtu\}.$$

These are eight distinct group elements. The eight corresponding labels are the red vertices in the article's figure.

## Example references

[def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers)

[def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers)

[def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers)

[def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers)

[cor-coxeter-normaliser-splitting-artin-tits-normalisers](item-cor-coxeter-normaliser-splitting-artin-tits-normalisers)

[ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)

## Facts & Assumptions


[F1] An associate of $J$ is a subset whose standard parabolic subgroup is conjugate to $W_J$. The objects of $\mathcal{BH}(J)$ are the associates of $J$; an arrow $x:I\to K$ is an element carrying the set of simple roots indexed by $K$ onto that indexed by $I$. Products of arrow labels compose from left to right. [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[F2] The label set $\mathrm{Cham}(J)$ consists of pairs $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum length in the right coset $xW_I$. Its universal wall groupoid has exactly one arrow from $(x,I)$ to $(y,K)$, labelled $x^{-1}y$. If $w:I\to K$ is a Brink–Howlett arrow and $(x,I)$ is a label, its unique lift from $(x,I)$ ends at $(xw,K)$. Conversely, the label of an arrow between two such labels is a Brink–Howlett arrow. [def-chamber-labels-artin-tits-normalisers](item-def-chamber-labels-artin-tits-normalisers) [prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers)

[F3] The vertex group $\mathcal{BH}_J$ is the root-permuting normaliser subgroup $N_J$, and the quotient map restricts to an isomorphism $N_J\to N(W,J)$. [def-normaliser-complement-artin-tits-normalisers](item-def-normaliser-complement-artin-tits-normalisers) [cor-coxeter-normaliser-splitting-artin-tits-normalisers](item-cor-coxeter-normaliser-splitting-artin-tits-normalisers)

[F4] In the specified $D_4$ example the completed chamber table lists all 32 distinct labels. Exactly its vertices 1, 5, 7, 9, 24, 26, 28 and 32 have second component $2$, with first components respectively $stuts,stuvts,e,stvts,vtsutv,stuvtsutvtu,vtutv,utsvtu$. [def-d4-example-data-artin-tits-normalisers](item-def-d4-example-data-artin-tits-normalisers) [ex-d4-labelled-chamber-graph-artin-tits-normalisers](item-ex-d4-labelled-chamber-graph-artin-tits-normalisers)

## Verification


**Given:** The finite-rank Coxeter, groupoid and label conventions in the Example, followed by the specified $D_4$ data.

**Goal:** Verify the lift, the vertex-group identification, and the eight-element list.

1.1 The pair $(e,J)$ satisfies the defining conditions of a label: $W_Je=eW_J$, and the identity has minimum length zero in $W_J$. Apply the lifting assertion in [F2] with starting label $(e,J)$ and arrow $x:J\to I$. Its endpoint is $(ex,I)=(x,I)$, and the lift is unique. This proves the first assertion. [F2, given]

2.1 If $x\in\mathcal{BH}_J$, step 1.1 gives the label $(x,J)$. Conversely, if $(x,J)$ is a label, the unique arrow from $(e,J)$ to $(x,J)$ has label $e^{-1}x=x$, and [F2] makes this a Brink–Howlett arrow $J\to J$. Thus $\mathcal{BH}_J=\{x:(x,J)\in\mathrm{Cham}(J)\}$. By [F3] it is a subgroup of $W$, and restriction of the quotient map identifies it with $N(W,J)$. [F2, F3, step 1.1]

3.1 The eight rows in [F4] are exactly the labels with second component $J=\{2\}$. Substituting their first components into the equality in step 2.1 gives the displayed set. The labels in the table are distinct; since their second components agree, their first components are distinct. Hence the subgroup has exactly eight elements, and the quotient has eight elements by the isomorphism in step 2.1. [F4, step 2.1] ∎

## Source notes

The article citation attributes the example and its figure. The calculation and group identification above use the completed suppliers; the article's assertion is not used as a proof premise.
