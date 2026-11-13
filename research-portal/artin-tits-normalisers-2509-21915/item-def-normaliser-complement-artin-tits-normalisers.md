---
title: Root-permuting normaliser complement
status: draft
research_item: def-normaliser-complement-artin-tits-normalisers
dependency_level: 10
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 17, paragraph before Corollary 4.8
      statement: The vertex group $N_J$ is the set of elements of $W$ sending each
        simple root indexed by $J$ to a simple root indexed by $J$; it is a
        subgroup of the normaliser of $W_J$.
      hypotheses: The Coxeter-system and geometric-representation conventions of §§2.2
        and 4.1, with $J$ a subset of the vertex set.
      reading_limits: The frozen article text at the cited paragraph and the groupoid
        definition was read for attribution. The justification below is a local
        argument; the article is not used as its proof.
---

PDF p. 17: ` paragraph before Corollary 4.8 `

## Prerequisites

- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [math:def-normalizer-of-a-subgroup](https://alphabetamath.cc/item/def-normalizer-of-a-subgroup)
- [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword)
- [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness)


## Definition

Let $(W,S)$ be a Coxeter system with simple generators $S=\{s_i:i\in\Gamma_0\}$ and geometric representation on the real vector space with basis $\{\alpha_i:i\in\Gamma_0\}$. The index set may be infinite. For $J\subseteq\Gamma_0$, write $W_J=\langle s_j:j\in J\rangle$ and $\operatorname{Norm}_W(W_J)=\{w\in W:wW_Jw^{-1}=W_J\}$.

The **root-permuting normaliser subgroup** $N_J$, also denoted $\mathcal{BH}_J$, is

$$N_J=\mathcal{BH}_J=\{x\in W:(\forall j\in J)(\exists j'\in J)\ x\alpha_j=\alpha_{j'}\}.$$

It is the vertex group at $J$ of the Brink–Howlett groupoid and is a subgroup of $\operatorname{Norm}_W(W_J)$.

## Definition references

[def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers)

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)

[math:def-normalizer-of-a-subgroup](https://alphabetamath.cc/item/def-normalizer-of-a-subgroup)

## Justification

Put $A_J=\{\alpha_j:j\in J\}$. By the Coxeter-data definition, each $x\in W$ has a word with finite index support $F$, and each simple reflection changes any vector by a multiple of its own simple root. Consequently $x$ preserves the span of the roots indexed by $F$, and $x\alpha_j-\alpha_j$ lies in that span for every $j$.

Suppose $xA_J\subseteq A_J$. If $j\in J\setminus F$, comparison of basis coefficients shows that $x\alpha_j=\alpha_j$. If $j\in J\cap F$, the image lies in the span of the roots indexed by $F$, so $x\alpha_j$ belongs to $\{\alpha_k:k\in J\cap F\}$. Since $x$ acts invertibly, its restriction to this finite set is injective and hence bijective. Thus $xA_J=A_J$, including when $J$ is infinite. The converse is immediate. The Brink–Howlett definition identifies the elements satisfying this equality with the labels of endomorphisms of the object $J$. By [def-groupoid-conventions-artin-tits-normalisers](item-def-groupoid-conventions-artin-tits-normalisers), these endomorphisms, with multiplication and inverses inherited from $W$, form the vertex group $\mathcal{BH}_J$.

It remains to check inclusion in the normaliser. The reflection formula in the Coxeter-data definition shows that each simple reflection preserves the Coxeter form $B$; hence so does $x$. If $x\alpha_j=\alpha_k$, conjugating the reflection formula gives $\rho(x s_j x^{-1})=\rho(s_k)$ on the geometric representation. Choose a finite set of indices containing $j$, $k$ and the support of a word for $x$. The corresponding finite-generator Coxeter group embeds in $W$ by [math:thm-arbitrary-rank-finite-parabolics-and-bruhat-subword](https://alphabetamath.cc/item/thm-arbitrary-rank-finite-parabolics-and-bruhat-subword), and its geometric representation is faithful by [math:thm-cg-root-length-criterion-and-faithfulness](https://alphabetamath.cc/item/thm-cg-root-length-criterion-and-faithfulness). Restricting the displayed equality to its root span therefore gives $x s_j x^{-1}=s_k$ in $W$. Since $x$ permutes $A_J$, it permutes the generators $\{s_j:j\in J\}$ under conjugation. It follows from the definition of the generated subgroup that $xW_Jx^{-1}=W_J$, as required.
