---
title: Chamber open sets used for the topological equivalence
status: draft
research_item: def-chamber-open-sets-artin-tits-normalisers
dependency_level: 10
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 25, proof of Lemma 6.6
      statement: For each chamber C the article defines XC by requiring the imaginary
        part to lie on the C side of every relative hyperplane containing the
        real part. For adjacent chambers C and C′ separated by H0 it defines
        XC,C′ by additionally putting the real part on the C side of H0, and
        interchanges the chambers to define XC′,C.
      hypotheses: The spherical Coxeter diagram and relative arrangement in Lemma 6.6,
        with J a subset of its vertices.
      reading_limits: The frozen article text at the cited proof was read for
        attribution. It is not used as a proof of well-definedness or openness.
---

PDF p. 25: ` Lemma 6.6, proof: definitions of XC and XC,Cprime `

## Prerequisites

- [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites)
- [prop-gallery-separation-interface-artin-tits-prerequisites](item-prop-gallery-separation-interface-artin-tits-prerequisites)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)



## Definition

Let $(W,S)$ be a Coxeter system with finite $W$, and let $J\subseteq S$. Use the finite-dimensional relative space $E=\Theta_J$, its finite set $\mathcal H^J$ of distinct linear hyperplanes, and the relative complexified complement $\mathcal X_J^{\mathbb C}$ from [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers). Thus $\mathcal X_J^{\mathbb C}$ consists of $x+iy$ with $x,y\in E$ and no $H\in\mathcal H^J$ containing both $x$ and $y$. The arrangement has ambient domain $E$; its chambers are the connected components of $E\setminus\bigcup_{H\in\mathcal H^J}H$, and adjacent chambers are distinct chambers sharing a wall, as in [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers).

For $H\in\mathcal H^J$ and a chamber $C$, let $D_H(C)$ be the open half-space bounded by $H$ that contains $C$: if $a:E\to\mathbb R$ is a nonzero linear functional with kernel $H$, it is either $\{v:a(v)>0\}$ or $\{v:a(v)<0\}$, according to which contains $C$. Define

$$X_C=\{x+iy\in\mathcal X_J^{\mathbb C}:\text{ for every }H\in\mathcal H^J,\ x\in H\Rightarrow y\in D_H(C)\}.$$

Let $C,C'$ be adjacent, and let $H_0$ be their unique separating hyperplane. Define

$$X_{C,C'}=\{x+iy\in\mathcal X_J^{\mathbb C}:x\in D_{H_0}(C),\ \text{and for every }H\in\mathcal H^J,\ x\in H\Rightarrow y\in D_H(C)\cap D_H(C')\}.$$

Define $X_{C',C}$ by interchanging $C$ and $C'$ in this formula. These are subsets of $\mathcal X_J^{\mathbb C}$ with its subspace topology.

## Definition references

[def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites)

[prop-gallery-separation-interface-artin-tits-prerequisites](item-prop-gallery-separation-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F1] In the geometric representation, the simple roots form a basis and $\Phi=\{w\alpha_i:w\in W,\ i\in\Gamma_0\}$; $S=\{s_i:i\in\Gamma_0\}$ indexes the simple generators. The dual space is $\Theta=\operatorname{Hom}_{\mathbb R}(V,\mathbb R)$, as in [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers).

[F2] The relative space is $E=\Theta_J$, and every $H\in\mathcal H^J$ has the form $H=H_\alpha\cap E$ for a root $\alpha$ with $E\not\subseteq H_\alpha$, where $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$, by [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers).

[F3] In spherical type the relative complement is $(E\times E)\setminus\bigcup_{H\in\mathcal H^J}(H\times H)$, with the product subspace topology and the notation $(x,y)\leftrightarrow x+iy$, by [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers).

[F4] The space $E$ has its finite-dimensional coordinate Euclidean topology, a linear hyperplane has codimension one, and a finite arrangement is locally finite: every neighbourhood meets at most its finitely many members. Chambers, walls, adjacency and galleries have the meanings in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) and [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers).

[F5] In an open convex domain with a locally finite arrangement and chosen nonzero defining functionals, every chamber is a strict sign cell, by [prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites).

[F6] A shortest gallery crosses each separating hyperplane exactly once and no other hyperplane; each adjacency has a unique defining hyperplane, by [prop-gallery-separation-interface-artin-tits-prerequisites](item-prop-gallery-separation-interface-artin-tits-prerequisites).

## Justification

**Given:** A finite Coxeter group $W$, its simple generators $S$, a subset $J\subseteq S$, and the relative arrangement and complement in the Definition.

**Goal:** Justify the finiteness, defining half-spaces, adjacent-chamber convention and openness used by the Definition.

1.1 Since the simple generators form a subset $S\subseteq W$ and $W$ is finite, $S$ and its index set $\Gamma_0$ are finite. By [F1], $\Phi$ is the image of the finite set $W\times\Gamma_0$ under $(w,i)\mapsto w\alpha_i$, so $\Phi$ is finite. By [F2], $\mathcal H^J$ is an image of a subset of $\Phi$, with coincident hyperplanes counted once, and is therefore finite. The simple-root space, its dual and the subspace $E$ are finite-dimensional. With ambient domain $T=E$, which is open and convex in itself, this is a locally finite arrangement by [F4]; every member meets $E$ at zero. If $E$ has dimension zero there are no proper hyperplanes, so the arrangement is empty and these conclusions remain valid. [F1, F2, F4, given]

2.1 Fix $H\in\mathcal H^J$. By [F2], choose a root $\alpha$ with $H=H_\alpha\cap E$ and $E\not\subseteq H_\alpha$. Define $a_H:E\to\mathbb R$ by $a_H(f)=f(\alpha)$. Evaluation is linear by [F1], its kernel is exactly $H$, and the noncontainment supplies $f\in E$ with $a_H(f)\ne0$, so it is nonzero. The choices can be made for all $H$ by finite choice, since step 1.1 gives a finite family. For any linear functional $a$ on $E$, in the coordinates $c:E\to\mathbb R^n$ of [F4] there are coefficients $b_i$ with $a(c^{-1}(z))=\sum_{i=1}^n b_i z_i$. Thus $|a(u)-a(v)|\leq(\sum_i|b_i|)\|c(u)-c(v)\|_2$, which proves continuity directly: for a desired positive tolerance $\eta$ use coordinate distance less than $\eta/(1+\sum_i|b_i|)$. Hence $H$ is closed and the two strict half-spaces are open in $E$. [F1, F2, F4, step 1.1, construct]

3.1 The hypotheses of [F5] now hold by steps 1.1 and 2.1. Therefore every chamber lies entirely in exactly one of the two strict half-spaces for each $H$. To check independence of the defining functional, let $a,b$ be nonzero linear functionals with the same kernel $H$, and choose $e\in E$ with $a(e)=1$. For any $v\in E$, $v-a(v)e\in H$, so $b(v)=a(v)b(e)$. Here $b(e)\ne0$, since otherwise $b$ would vanish identically. Thus replacing $a$ by $b$ either preserves or exchanges its two strict half-spaces; the one containing $C$ is unchanged. This proves that $D_H(C)$ is well-defined. The complement and complex notation are those of [F3]. [F3, F5, step 1.1, step 2.1, algebra]

4.1 For adjacent distinct chambers $C,C'$, their one-edge gallery is shortest, since a gallery of length zero has equal endpoints. By [F6] it crosses exactly their separating hyperplanes, so there is exactly one, denoted $H_0$. For $H\ne H_0$ the chambers have the same strict sign, hence $D_H(C)=D_H(C')$ by step 3.1. In the formula for $X_{C,C'}$, the requirement $x\in D_{H_0}(C)$ implies $x\notin H_0$. Thus whenever its implication has true antecedent $x\in H$, the two half-spaces in that implication agree. Interchanging $C,C'$ gives the reverse ordered set. [F6, step 1.1, step 2.1, step 3.1]

5.1 For a fixed $H$, failure of the implication defining $X_C$ is the condition $(x,y)\in H\times(E\setminus D_H(C))$. Both factors are closed by steps 2.1 and 3.1. Their product is closed in $E\times E$: its complement is the union of the open sets $(E\setminus H)\times E$ and $E\times D_H(C)$. A finite union of these failure sets is closed, so by [F3] and step 1.1 its complement in $\mathcal X_J^{\mathbb C}$ is open. This is precisely $X_C$. For $X_{C,C'}$, replace $D_H(C)$ in this argument by the open intersection $D_H(C)\cap D_H(C')$, and additionally intersect with the open product $D_{H_0}(C)\times E$. The same reasoning proves openness of $X_{C,C'}$ and, with the chambers interchanged, of $X_{C',C}$. If the arrangement is empty, $X_C=\mathcal X_J^{\mathbb C}=E\times E$, and there are no adjacent distinct chambers, so the same conclusions cover this case. [F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎



The article reference attributes the chamber-set formulas only. The root-orbit formula and restricted root evaluations are supplied by the existing mathematical definitions [F1] and [F2]; the finiteness, existence and independence of the defining functionals, and openness are proved locally above. No claim or proof from the article is used to establish its own prerequisite.

## Source notes

The article reference attributes the chamber-set formulas only. The root-orbit formula and restricted root evaluations are supplied by the existing mathematical definitions [F1] and [F2]; the finiteness, existence and independence of the defining functionals, and openness are proved locally above. No claim or proof from the article is used to establish its own prerequisite.
