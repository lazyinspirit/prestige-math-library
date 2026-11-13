---
title: Atomic braid relations
status: draft
research_item: def-atomic-braid-artin-tits-normalisers
dependency_level: 19
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 19, Lemma 4.15, equation (4.16), and Definition 4.18
      statement: In the setting of Lemma 4.15, the equality of the two standard
        expressions in (4.16) is called an atomic braid relation.
      hypotheses: I is an associate of J; a and b are distinct vertices outside I; and
        the difference of parabolic root sets Φ_{I∪{a,b}} minus Φ_I is finite.
      reading_limits: The frozen extracted text at the cited passages was read for
        attribution. The article is not used as a proof of the existence or
        properties of the two expressions.
---

PDF p. 19: ` Definition 4.18 `

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [def-associates-artin-tits-normalisers](item-def-associates-artin-tits-normalisers)
- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)


## Definition

Let $(W,S)$ be a Coxeter system with diagram vertex set $\Gamma_0$, simple generators $s_i$ and Coxeter length $\ell$. Fix $J\subseteq\Gamma_0$. For $L\subseteq\Gamma_0$, let $W_L=\langle s_i:i\in L\rangle$ and let $\Phi_L=\{w\alpha_i:w\in W_L,\ i\in L\}$ be its parabolic root set in the geometric representation. A subset $I$ is an associate of $J$ when $W_I$ is conjugate to $W_J$ in $W$.

Let $I$ be an associate of $J$ and let distinct $a,b\in\Gamma_0\setminus I$ satisfy $|\Phi_{I\cup\{a,b\}}\setminus\Phi_I|<\infty$. In the Brink–Howlett groupoid $\mathcal{BH}(J)$, whose objects are associates of $J$ and whose composable morphism labels multiply from left to right, let $v_{a,b,I}:I\to K$ be the common left multiple supplied by the two-generator lemma. Here left divisibility means $u\leq w$ if $w=uz$ and $\ell(w)=\ell(u)+\ell(z)$.

A standard expression is a composable product of elementary wall-crossing morphisms $v_{c,L}$ whose Coxeter lengths sum to the length of the product. The two-generator lemma supplies exactly two such expressions for $v_{a,b,I}$, one starting with $v_{a,I}$ and the other with $v_{b,I}$. Write them as

$$v_{a,b,I}=v_{a_1,I_1}\cdots v_{a_m,I_m}=v_{b_1,L_1}\cdots v_{b_m,L_m},$$

where $a_1=a$, $b_1=b$, and $I_1=L_1=I$. The equality

$$v_{a_1,I_1}\cdots v_{a_m,I_m}=v_{b_1,L_1}\cdots v_{b_m,L_m}$$

is the **atomic braid relation** associated with $I,a,b$.

## Definition references

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)

[def-associates-artin-tits-normalisers](item-def-associates-artin-tits-normalisers)

[def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)

[def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)

## Justification

The two-generator lemma supplies the morphism and exactly two standard expressions with the stated first factors and equal factor counts. If two morphisms satisfy its common-divisor and minimality properties, each left-divides the other. The length-additive factorizations then force the intervening factors to have length zero, so the two labels are equal. Their targets agree because the geometric action sends each target's set of simple roots to the same source set, and the simple roots are distinct basis vectors. Thus the morphism and its pair of expressions are determined by the stated data; exchanging $a$ and $b$ merely reverses the displayed equality.
