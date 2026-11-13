---
title: A3 relative arrangement and its six labelled chambers
status: draft
research_item: ex-a3-arrangement-artin-tits-normalisers
dependency_level: 13
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 10, Example 3.12 and diagram
      statement: For type A3 with J={3}, the relative space and the relative Tits cone
        and its interior coincide; the relative arrangement has the three stated
        lines, and the diagram gives the six displayed chamber labels.
      hypotheses: The type A3 Coxeter system with vertices numbered consecutively 1,
        2, 3 and J={3}, in the article's dual reflection representation.
      reading_limits: The frozen extracted article text for Example 3.12 and its
        diagram transcription were read. This citation attributes the example;
        the verification below uses the declared mathematical suppliers and
        explicit calculations.
---

PDF p. 10: ` Example 3.12 and diagram `

## Prerequisites

- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)
- [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)


## Example

Take the type $A_3$ Coxeter system with vertices $1,2,3$ in a chain, simple reflections $s_1,s_2,s_3$, simple roots $\alpha_1,\alpha_2,\alpha_3$, and dual basis $\alpha_1^*,\alpha_2^*,\alpha_3^*$. Let $J=\{3\}$. Then $\Theta_J=\mathbb R\alpha_1^*\oplus\mathbb R\alpha_2^*=\mathrm{Cone}(J)=\mathrm{Cone}(J)^\circ$. Its relative arrangement consists of the three lines $\mathbb R\alpha_2^*$, $\mathbb R\alpha_1^*$ and $\mathbb R(\alpha_1^*-\alpha_2^*)$, obtained respectively from $\alpha_1$, $\alpha_2$ and $\alpha_1+\alpha_2$.

The six chambers are the connected components of the complement of these lines. Counterclockwise from the positive quadrant, their labels are $(e,3)$, $(s_1,3)$, $(s_1s_2s_3,2)$, $(s_1s_2s_3s_1s_2,1)$, $(s_2s_3s_1s_2,1)$ and $(s_2s_3,2)$. Here $e$ is the identity and a numeral in the second position abbreviates the corresponding singleton subset.

## Example references

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

[math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

## Facts & Assumptions

[F1] The canonical representation has the stated simple-root basis, reflection formula and contragredient dual action; $C_I$ is the set of dual vectors vanishing on the simple roots indexed by $I$ and positive on the others. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F2] The relative space is the common kernel of the roots indexed by $J$, the relative cone is its intersection with the union of the closed chamber translates, and the relative arrangement consists of the distinct proper traces of root hyperplanes. [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F3] A label $(x,I)$ satisfies $W_Jx=xW_I$ and has $x$ of minimum length in $xW_I$; its chamber is $xC_I$, and this assignment is a bijection to the relative chambers. [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)

[F4] An element $x$ is the minimum in $xW_I$ exactly when it sends each positive root of the standard parabolic subsystem for $I$ to a positive root. [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

[F5] The canonical reflection representation is faithful. [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)

## Verification
**Given:** The type $A_3$ system and $J=\{3\}$ in the example. **Goal:** Verify the cone, arrangement and six labels.


1.1 Realize the root space as $V=\{(v_1,v_2,v_3,v_4)\in\mathbb R^4:\sum v_i=0\}$, with $\alpha_i=\varepsilon_i-\varepsilon_{i+1}$, where $\varepsilon_i$ are the standard coordinate vectors. The linear map from the simple-root basis to these differences is an isomorphism. The reflection formula in [F1] sends $s_i$ to the swap of coordinates $i,i+1$; these swaps generate all permutations, and [F5] makes the resulting identification $W\cong S_4$ faithful. Consequently the roots are precisely $\varepsilon_i-\varepsilon_j$ for $i\ne j$, and the positive roots are $\alpha_1$, $\alpha_2$, $\alpha_3$, $\alpha_1+\alpha_2$, $\alpha_2+\alpha_3$ and $\alpha_1+\alpha_2+\alpha_3$. [F1, F5, algebra]

2.1 A dual vector may be represented by a tuple $(t_1,t_2,t_3,t_4)$, unique up to adding a common constant, with $f(\alpha_i)=t_i-t_{i+1}$. The closed fundamental chamber is $t_1\geq t_2\geq t_3\geq t_4$. Sorting any tuple shows that its permutation translates cover all of $\Theta$; hence the Tits cone is all $\Theta$. The condition $f(\alpha_3)=0$ gives $\Theta_J=\mathbb R\alpha_1^*\oplus\mathbb R\alpha_2^*$, so [F2] gives $\mathrm{Cone}(J)=\Theta_J$ and its interior in $\Theta_J$ is the same space. [F1, F2, step 1.1, algebra]

2.2 In one-line permutation notation, multiplying the displayed words from right to left gives, in the stated order, $1234$, $2134$, $2341$, $3421$, $3412$ and $1342$. In each row the entries at positions $i,i+1$, where $I=\{i\}$ is the displayed second label, are $3,4$. Therefore $x s_i x^{-1}=s_3$ and $x\alpha_i=\alpha_3$ is positive. Since the only positive root of the rank-one subsystem is $\alpha_i$, [F4] shows that $x$ is minimal in $xW_I$, and $W_Jx=xW_I$. Thus each pair is a valid label in [F3]. [F3, F4, step 1.1, algebra]

3.1 Write $f=a\alpha_1^*+b\alpha_2^*$ on $\Theta_J$. The positive roots in step 1.1 restrict respectively to $a,b,0,a+b,b,a+b$. Thus $\alpha_3$ gives the whole relative space and is excluded, while the distinct proper traces are $a=0$, $b=0$ and $a+b=0$. These are respectively $\mathbb R\alpha_2^*$, $\mathbb R\alpha_1^*$ and $\mathbb R(\alpha_1^*-\alpha_2^*)$. Their complement has six sectors. [F2, step 1.1, step 2.1, algebra]

4.1 Normalize the tuple by $t_3=t_4=0$; then $(t_1,t_2,t_3,t_4)=(a+b,b,0,0)$. By [F1], $f\in xC_{\{i\}}$ exactly when $t_{x(1)}\geq t_{x(2)}\geq t_{x(3)}\geq t_{x(4)}$, with equality exactly at positions $i,i+1$. The six permutations in step 2.2 therefore give, respectively, the strict conditions $(a>0,b>0)$, $(a<0,a+b>0)$, $(b>0,a+b<0)$, $(a<0,b<0)$, $(a>0,a+b<0)$ and $(b<0,a+b>0)$. These are the six sectors of step 3.1 in counterclockwise order from the positive quadrant. Applying the labelling bijection [F3] establishes every displayed label and completes the verification. [F1, F3, step 3.1, step 2.2, algebra] ∎

## Source notes

The article reference attributes the example and the labels read from its diagram. The calculation above verifies them using the listed suppliers; it does not use the article's example as a premise.
