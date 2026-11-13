---
title: D4 diagram and generator conventions
status: published
research_item: def-d4-example-data-artin-tits-normalisers
dependency_level: 2
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 27, §7 opening diagram and paragraph; §7.1 opening sentence
      statement: The example uses the D4 diagram with vertex 2 joined to vertices 1, 3
        and 4, J={2}, and simple reflections s=s1, t=s2, u=s3 and v=s4. It
        writes V for the standard geometric representation and Θ=V* for its
        contragredient representation.
      hypotheses: The article's Coxeter-system and geometric-representation
        conventions in §§2–3.
      reading_limits: The frozen article text and rendered PDF page 27 were inspected
        for these conventions. This reference attributes the example and is not
        used to prove its mathematical prerequisites.
---

PDF p. 27: ` §7 opening diagram and paragraph `

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)


## Definition

For this example, let $\Gamma=D_4$ denote the Coxeter diagram with vertices $\{1,2,3,4\}$ and three unlabelled edges $\{1,2\}$, $\{2,3\}$ and $\{2,4\}$. Thus vertex $2$ is trivalent: it is incident to exactly three edges. Equivalently, the Coxeter matrix has $m(s_i,s_i)=1$, $m(s_2,s_i)=m(s_i,s_2)=3$ for $i\in\{1,3,4\}$, and $m(s_i,s_j)=2$ for distinct $i,j\in\{1,3,4\}$.

Let $(W,S)$ be the associated Coxeter system, with $S=\{s_1,s_2,s_3,s_4\}$, and set $J=\{2\}$. Write $s=s_1$, $t=s_2$, $u=s_3$ and $v=s_4$; in particular $t$ is the simple reflection at the trivalent vertex.

Let $V=\bigoplus_{i=1}^4\mathbb R\alpha_i$ be the standard geometric representation: its Coxeter form satisfies $B(\alpha_i,\alpha_i)=1$, $B(\alpha_2,\alpha_i)=-1/2$ for $i\in\{1,3,4\}$, and $B(\alpha_i,\alpha_j)=0$ for distinct $i,j\in\{1,3,4\}$; the generator $s_i$ acts by $x\mapsto x-2B(x,\alpha_i)\alpha_i$. Let $\Theta=V^*$ be the space of real linear functionals on $V$, with the contragredient action $(wf)(x)=f(w^{-1}x)$ for $w\in W$, $f\in\Theta$ and $x\in V$.

## Definition references

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

## Justification

By [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), an unlabelled edge records matrix entry $3$ and absence of an edge records entry $2$; hence the stated diagram and matrix specify the same data. The matrix is symmetric, has diagonal entries $1$ and allowed off-diagonal entries, so the associated presented Coxeter group and its simple generators are defined. The set $J$ is a subset of the vertex set, and the letters $s,t,u,v$ are aliases for those generators.

The finite-rank construction in [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites) supplies the representation and dual action for this matrix. Its form has off-diagonal values $-\cos(\pi/3)=-1/2$ on the three edges and $-\cos(\pi/2)=0$ on the remaining pairs, giving the displayed formulas. The same supplier ensures that the reflection maps define a group action and that the contragredient formula defines an action on $V^*$.
