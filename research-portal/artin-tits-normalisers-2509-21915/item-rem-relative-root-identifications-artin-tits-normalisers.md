---
title: Distinct roots can define the same relative hyperplane
status: draft
research_item: rem-relative-root-identifications-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 7, §3.1, paragraph after (3.3)
      statement: Distinct positive J-roots may define the same hyperplane after
        intersection with the parabolic coordinate subspace.
      hypotheses: The Coxeter-system and relative-arrangement notation of §3.1.
      reading_limits: The frozen article text at the cited paragraph was read for
        attribution. The example and argument below are local; the article's
        assertion is not used as their proof.
---

PDF p. 7: ` §3.1, paragraph after (3.3) `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)
- [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)


## Statement

The map from positive $J$-roots to the relative arrangement $\mathcal H^J$, taking $\alpha$ to $H_\alpha\cap\Theta_J$, need not be injective. In particular, distinct positive $J$-roots can have the same restricted hyperplane.

## Statement references

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

## Proof


**Given:** A finite Coxeter system with its real simple-root representation and the relative-root notation in the Statement.

[F1] For a Coxeter matrix with $m(s,t)=3$, the simple-root form has $B(e_s,e_t)=-1/2$, and the simple reflection acts by $s(v)=v-2B(v,e_s)e_s$. The roots are the vectors $we_u$ with $w\in W$ and $u$ a simple generator. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F2] A positive root is a root whose coordinates in the simple-root basis are all nonnegative. [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)

[F3] For $J\subseteq S$, the space $\Theta_J$ consists of the linear functionals vanishing on $e_j$ for $j\in J$. A $J$-root is a root whose hyperplane does not contain $\Theta_J$, and $\mathcal H^J$ consists of its restricted hyperplanes. [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F4] For a real vector space with finite basis $(e_u)_{u\in S}$ and $J\subseteq S$, the evaluation $f\mapsto f(\gamma)$ on $E=\{f\in V^*:f(e_j)=0\text{ for every }j\in J\}$ is nonzero exactly when $\gamma\notin\operatorname{span}\{e_j:j\in J\}$. [prop-relative-linear-interface-artin-tits-prerequisites](item-prop-relative-linear-interface-artin-tits-prerequisites)



**Proof technique:** direct.

**Goal:** Exhibit two distinct positive $J$-roots with the same restricted hyperplane.

1.1 Take $S=\{s,t\}$ with $m(s,t)=3$ and $J=\{s\}$. Set $\alpha=e_t$ and $\beta=se_t$. By the reflection formula, $\beta=e_t+e_s$. Both are roots by [F1], both have nonnegative simple-root coordinates, and they are distinct because $e_s,e_t$ are basis vectors. Thus both are positive roots. [F1, F2, choose, algebra]

2.1 For every $f\in\Theta_J$, one has $f(e_s)=0$, so $f(\beta)=f(e_t)=f(\alpha)$. Consequently $H_\alpha\cap\Theta_J=H_\beta\cap\Theta_J$. Since $e_s,e_t$ are linearly independent, $\alpha=e_t\notin\operatorname{span}\{e_s\}$. By [F4], the evaluation $f\mapsto f(\alpha)$ is nonzero on $\Theta_J$; the equality $f(\beta)=f(\alpha)$ makes $f\mapsto f(\beta)$ nonzero there as well. Thus neither hyperplane contains $\Theta_J$. Hence both roots are positive $J$-roots and their common intersection is a member of $\mathcal H^J$, proving the stated noninjectivity. [F3, F4, step 1.1, algebra] ∎

## Source notes

The article is cited for attribution of the general observation. The displayed rank-two example proves the noninjectivity independently of that observation.
