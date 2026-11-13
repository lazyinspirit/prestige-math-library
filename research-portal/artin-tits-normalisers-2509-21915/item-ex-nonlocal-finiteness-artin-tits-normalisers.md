---
title: Failure of local finiteness on the full cone
status: published
research_item: ex-nonlocal-finiteness-artin-tits-normalisers
dependency_level: 9
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 8, §3.1, opening paragraph
      reading_limits: Read the opening paragraph of §3.1 in the frozen article text.
        This citation attributes the example; the proof below uses the declared
        mathematical suppliers.
---

PDF p. 8: ` §3.1, opening paragraph `

## Prerequisites

- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-hyperplane-arrangement-artin-tits-normalisers](item-def-hyperplane-arrangement-artin-tits-normalisers)
- [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)


## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, in its canonical real Coxeter representation. Let $\Phi_+$ be its positive roots, $H_\alpha=\{f\in V^*:f(\alpha)=0\}$, and $\mathrm{Cone}$ the union of the translates of the closed fundamental chamber. For $J=\varnothing$, the relative cone is $\mathrm{Cone}$ and the relative hyperplanes are the distinct root hyperplanes $\mathcal H=\{H_\alpha:\alpha\in\Phi_+\}$. If $W$ is infinite, $\mathcal H$ is infinite and the arrangement $(\mathrm{Cone},\mathcal H)$ is not locally finite at the origin.

Here local finiteness at a point means that some neighborhood of the point in the subspace topology on $\mathrm{Cone}$ meets only finitely many distinct members of $\mathcal H$.

## Statement references

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-hyperplane-arrangement-artin-tits-normalisers](item-def-hyperplane-arrangement-artin-tits-normalisers)

[prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites)

## Facts & Assumptions

[F1] For $w\in W$, its word length $\ell(w)$ is the least length of a word in the finite generating set $S$ representing it. Its inversion set $N(w)=\{\alpha\in\Phi_+:w\alpha\in-\Phi_+\}$ has cardinality $\ell(w)$, and distinct positive roots define distinct full hyperplanes. [prop-root-inversion-interface-artin-tits-prerequisites](item-prop-root-inversion-interface-artin-tits-prerequisites)

[F2] The root hyperplanes are linear, $0\in\mathrm{Cone}$, and for $J=\varnothing$ the relative cone and hyperplanes are $\mathrm{Cone}$ and $\mathcal H$, respectively. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites) [prop-tits-domain-interface-artin-tits-prerequisites](item-prop-tits-domain-interface-artin-tits-prerequisites) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F3] The arrangement is locally finite at $0$ precisely if some neighborhood of $0$ in $\mathrm{Cone}$ meets only finitely many distinct hyperplanes in $\mathcal H$. [def-hyperplane-arrangement-artin-tits-normalisers](item-def-hyperplane-arrangement-artin-tits-normalisers)

## Proof
**Given:** The finite-rank Coxeter system and the notation in the Statement, with $W$ infinite and $J=\varnothing$.


**Proof technique:** direct.

**Goal:** Prove that there are infinitely many distinct hyperplanes and that no neighborhood of $0$ in the full cone meets only finitely many of them.

1.1 **Unbounded lengths.** For each nonnegative integer $n$, only finitely many words in the finite alphabet $S$ have length at most $n$. Their values therefore form a finite set. Since $W$ is infinite, some element has length greater than $n$. By [F1], its inversion set contains more than $n$ positive roots. Hence $\Phi_+$ is infinite. [F1, given]

2.1 **Hyperplanes through the origin.** By [F1], distinct positive roots yield distinct hyperplanes, so $\mathcal H$ is infinite. By [F2], every member contains $0$, and $0$ lies in $\mathrm{Cone}$. Consequently every neighborhood of $0$ in $\mathrm{Cone}$ meets every member of $\mathcal H$. By [F3], the arrangement is not locally finite at $0$. This proves the example. [F1, F2, F3, step 1.1] ∎

## Source notes

The article states this example in the opening paragraph of §3.1. The proof above uses the root-inversion and arrangement suppliers, rather than the article's assertion as a premise.
