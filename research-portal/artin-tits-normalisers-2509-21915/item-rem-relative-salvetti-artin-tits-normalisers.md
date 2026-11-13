---
title: Relative Salvetti models and the finiteness qualification
status: published
research_item: rem-relative-salvetti-artin-tits-normalisers
dependency_level: 11
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p.13, equation (3.26) and Remark 3.27; p.4, §2.2
      statement: Remark 3.27 asserts a finite CW-model for the relative complement
        from local finiteness in an open convex cone. Section 2.2 imposes
        spherical type only in Sections 5 and 6.
      hypotheses: General finite Coxeter diagram and relative subset J; no spherical
        assumption in Section 3.
      reading_limits: Read the frozen original PDF-extracted text at equation (3.26),
        the following spherical identification and complete Remark 3.27 on PDF
        p.13, and the standing spherical-scope sentence in §2.2 on PDF p.4
        during this assignment. No new visual PDF inspection or reconstruction
        of the article proof is claimed. This citation is attribution, not an
        input proving the corrected assertion.
---

PDF p. 13: ` Remark 3.27 `

## Prerequisites

- [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)
- [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers)
- [thm-salvetti-topology-input-artin-tits-prerequisites](item-thm-salvetti-topology-input-artin-tits-prerequisites)
- [lem-author-6f173a9d0001-finite-cw-obstruction](item-lem-author-6f173a9d0001-finite-cw-obstruction)
- [lem-author-6f173a9d0001-dihedral-tits-cone](item-lem-author-6f173a9d0001-dihedral-tits-cone)
- [lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians)
- [lem-author-6f173a9d0001-winding-independence](item-lem-author-6f173a9d0001-winding-independence)


## Statement

Let $(W,S)$ be a Coxeter system with finite $S$ and $J\subseteq S$. For the relative complement $\mathcal X_J^{\mathbb C}$ of [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers), assume its cone interior is nonempty. The locally finite relative arrangement of [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers) has a Salvetti CW model homotopy equivalent to $\mathcal X_J^{\mathbb C}$, by [thm-salvetti-topology-input-artin-tits-prerequisites](item-thm-salvetti-topology-input-artin-tits-prerequisites). This model is finite whenever the relative arrangement is finite; in particular it is finite when $W$ is finite. Local finiteness alone does not imply finite CW homotopy type: for $W=\langle s,t\mid s^2=t^2=1\rangle$ and $J=\varnothing$, there is no finite CW model, as established in [lem-author-6f173a9d0001-finite-cw-obstruction](item-lem-author-6f173a9d0001-finite-cw-obstruction).

## Proof

[F1] **Given:** The product-complement definition of [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers), the local finiteness and convexity of the relative cone arrangement from [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers), and the independent theorem [thm-salvetti-topology-input-artin-tits-prerequisites](item-thm-salvetti-topology-input-artin-tits-prerequisites). **Goal:** Retain the homotopy-model conclusion, state its sound finite-arrangement special case, and resolve the unrestricted finiteness assertion.

[F2] The finite-CW obstruction for the infinite-dihedral complement is supplied by [lem-author-6f173a9d0001-finite-cw-obstruction](item-lem-author-6f173a9d0001-finite-cw-obstruction).

[F3] For the infinite dihedral system, [lem-author-6f173a9d0001-dihedral-tits-cone](item-lem-author-6f173a9d0001-dihedral-tits-cone) supplies coordinates $x=f(\alpha_s)$, $y=f(\alpha_t)$, $a=x+y$, $b=x$, the Tits-cone interior $I=\{a>0\}$ and all root hyperplanes $H_k=\{b+ka=0\}$, $k\in\mathbb Z$. [lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians) defines $M=(I+iI)\setminus\bigcup_k H_k^{\mathbb C}$ and its meridians $\gamma_k$. [lem-author-6f173a9d0001-winding-independence](item-lem-author-6f173a9d0001-winding-independence) gives their independent classes in $H_1(M;\mathbb Z)$, the integral singular homology group of one-cycles modulo boundaries.

**Proof technique:** direct.

1.1 Apply [thm-salvetti-topology-input-artin-tits-prerequisites](item-thm-salvetti-topology-input-artin-tits-prerequisites) with $I=\mathrm{Cone}(J)^\circ$ in the finite-dimensional relative space. The assumed nonempty interior is open and convex; hyperplanes missing it are discarded, as in the arrangement convention. Local finiteness is supplied by [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers). Its product complement is exactly [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers). Thus the theorem gives the claimed Salvetti homotopy model, finite when the arrangement is finite. [F1]

2.1 If $W$ is finite, the relative-complement supplier establishes $\mathrm{Cone}(J)^\circ=\Theta_J$ and finiteness of the relative arrangement (there are only finitely many roots). Consequently the finite-arrangement clause applies. [F1, step 1.1]

3.1 Take $S=\{s,t\}$, $m(s,t)=\infty$ and $J=\varnothing$. In [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers), the empty vanishing condition gives $\Theta_\varnothing=\Theta$, so $\mathrm{Cone}(\varnothing)$ is the full Tits cone and the relative hyperplanes are exactly the root hyperplanes. By [F3], its interior is $I=\{a>0\}$ and these hyperplanes are precisely the $H_k$, all meeting $I$. Under $(u,v)\mapsto u+iv$, the product $I\times I$ identifies with $I+iI$, and each $H_k\times H_k$ identifies with $H_k^{\mathbb C}$ because its real defining linear form vanishes on $u+iv$ exactly when it vanishes on both $u$ and $v$. Thus $\mathcal X_\varnothing^{\mathbb C}$ is exactly the space $M$ of [lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians). Its meridian classes are independent in $H_1(M;\mathbb Z)$ by [lem-author-6f173a9d0001-winding-independence](item-lem-author-6f173a9d0001-winding-independence), and it has no finite CW model by [F2]. This finite-rank example satisfies the general Section 3 hypotheses and disproves unrestricted finiteness while leaving the homotopy-model assertion intact. [F1, F2, F3] ∎

## Source notes

Remark 3.27 of the original article explicitly says “has a finite CW-model”; the independent Paris theorem does not assert finiteness for infinite arrangements. The preceding sentence on spherical type is a conditional identification, not a standing assumption for the remark: §2.2 explicitly imposes spherical type only in Sections 5 and 6. Therefore the counterexample addresses the original article, rather than only a generated reconstruction. The correction preserves the cited Salvetti method and its finite spherical case; it does not claim finite type is necessary for every relative arrangement, or address equivariance under arbitrary normalizer actions. Exact PDF anchors and the explicit counterexample are retained in run-local evidence for the final assessor, who must independently compare the finding against the original PDF.
