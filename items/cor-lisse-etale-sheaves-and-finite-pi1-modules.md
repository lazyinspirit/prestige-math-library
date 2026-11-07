---
id: cor-lisse-etale-sheaves-and-finite-pi1-modules
kind: corollary
title: "Lisse finite étale module sheaves are finite fundamental-group modules"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-lisse-etale-sheaf-of-finite-modules
  - lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers
  - def-etale-fundamental-group-and-fibre-functor
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC, exactly as required by the finite étale cover classification supplier. No additional choice is used in transporting the module operations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Sections 59.64 and 59.71"
      url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6, Proposition 6.16"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Statement

Assume AC. Let $X$ be a connected Noetherian scheme, let $\bar x$ be an algebraically closed geometric basepoint, and let $\Lambda$ be a finite commutative ring with identity. Taking the geometric stalk at $\bar x$ defines an equivalence between the category of lisse étale sheaves of finite $\Lambda$-modules on $X$ and the category of finite $\Lambda$-modules with continuous left $\pi_1^{\mathrm{et}}(X,\bar x)$-action by $\Lambda$-linear automorphisms. Morphisms on the representation side are equivariant $\Lambda$-linear maps.

## Statement references

[The Stacks Project, Sections 59.64 and 59.71](https://stacks.math.columbia.edu/download/etale-cohomology.pdf)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6, Proposition 6.16](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** AC, the connected Noetherian scheme $X$, geometric basepoint $\bar x$, finite ring $\Lambda$, and finite locally constant module sheaves as in [[def-lisse-etale-sheaf-of-finite-modules]].

[F1] [[def-lisse-etale-sheaf-of-finite-modules]]: a lisse module sheaf is étale locally constant with finite $\Lambda$-module values.

[F2] [[lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers]]: finite locally constant sheaves of sets are equivalent to finite étale covers, via their represented sheaves.

[F3] [[def-etale-fundamental-group-and-fibre-functor]]: $\pi_1^{\mathrm{et}}(X,\bar x)$ is the group of natural automorphisms of the geometric fiber functor on finite étale covers, with its profinite topology.

[F4] [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]: under AC, this fiber functor is an equivalence with finite sets carrying continuous left $\pi_1^{\mathrm{et}}(X,\bar x)$-actions; it is fully faithful and conservative.

[A1] [[def-axiom-of-choice]]: the finite étale classification [F4] assumes AC.

## Proof

**Given:** The data and interfaces [F1]–[F4] under [A1].

1.1 Let $\mathcal F$ be a lisse sheaf of finite $\Lambda$-modules. Forgetting its module operations gives a sheaf of finite sets that is finite locally constant by [F1]. By [F2] it is represented by a finite étale cover $Y\to X$. The fiber $M=\mathcal F_{\bar x}$ is finite, and [F4] equips it with a continuous left action of $\pi_1^{\mathrm{et}}(X,\bar x)$. Every automorphism in this action commutes with the natural transformations induced by addition, zero, and scalar multiplication on $\mathcal F$, so it acts $\Lambda$-linearly. [F1, F2, F3, F4]

1.2 Conversely, let $M$ be a finite $\Lambda$-module with a continuous left action by $\Lambda$-linear automorphisms. Its underlying finite set action corresponds by [F4] to a finite étale cover $Y\to X$, and therefore by Yoneda to a finite locally constant sheaf of sets. The maps $M\times M\to M$ for addition, $\{0\}\to M$, and $M\to M$ for each scalar in $\Lambda$ are equivariant, because the action is $\Lambda$-linear. Products of the corresponding finite étale sheaves are again represented by their fiber products. Full faithfulness in [F4] therefore lifts each operation uniquely to a sheaf map on the represented sheaf. [F2, F4, given, construct]

2.1 The module identities hold on the fiber $M$. Each identity is equality of two composites of the lifted sheaf maps; faithfulness in [F4] implies the corresponding sheaf maps are equal. Hence the represented sheaf is a sheaf of $\Lambda$-modules, and it is lisse because its underlying finite-set sheaf is finite locally constant. [F1, F4, step 1.2, algebra]

3.1 A lisse module sheaf and the module sheaf reconstructed from its geometric fiber have canonically isomorphic underlying finite-set sheaves by [F2] and [F4]. Their module operations agree because they induce the same operations on the fiber and the fiber functor is faithful. Conversely, the reconstructed sheaf has fiber $M$ with its original action. Full faithfulness for module maps follows by applying [F4] to the underlying finite-set map and observing that equivariance preserves each module operation. Thus the two constructions are inverse equivalences. The only axiom used is AC through [F4]. [F2, F3, F4, A1, step 1.1, step 2.1] ∎
