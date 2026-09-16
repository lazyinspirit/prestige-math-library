---
id: thm-lie-third-fundamental-theorem
kind: theorem
title: Lie's third fundamental theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra, thm-lie-subgroup-lie-subalgebra-correspondence, thm-universal-covering-lie-group, thm-lie-second-fundamental-theorem, def-countable-choice]
landmark: true
proof_strategy: construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Theorem B.7"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Appendix B, Theorem B.7, printed p. 662"
---

## Statement

Assume countable choice. Every finite-dimensional real Lie algebra is the Lie
algebra of a connected simply connected real Lie group, unique up to Lie-group
isomorphism.

## Facts & Assumptions

**Given:** Countable choice and a finite-dimensional real Lie algebra $\mathfrak g$.

[A1] Countable choice is [[def-countable-choice]].

[L1] Ado embeds $\mathfrak g$ into a finite-dimensional matrix Lie algebra ([[cor-every-finite-dimensional-characteristic-zero-lie-algebra-is-a-matrix-lie-algebra]]).

[L2] Under [A1], a matrix Lie subalgebra integrates to a connected immersed Lie subgroup ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L3] Every connected Lie group has a simply connected covering Lie group ([[thm-universal-covering-lie-group]]).

[L4] A homomorphism from the Lie algebra of a connected simply connected real Lie group to that of any real Lie group integrates uniquely ([[thm-lie-second-fundamental-theorem]]).

## Proof

**Proof technique:** matrix integration followed by universal covering.

1.1 By [L1], identify $\mathfrak g$ with a Lie subalgebra of $\mathfrak{gl}_n(\mathbb R)$. By [L2], it is the tangent algebra of a connected immersed Lie subgroup $H$ of $\operatorname{GL}_n(\mathbb R)$. The intrinsic group $H$ is a finite-dimensional real Lie group even when its image is not closed. [A1, L1, L2]

2.1 Let $p:\widetilde H\to H$ be the universal covering Lie group from [L3]. A covering homomorphism is a local diffeomorphism, so $dp_e$ is a Lie-algebra isomorphism. Hence $\operatorname{Lie}(\widetilde H)\cong\operatorname{Lie}(H)\cong\mathfrak g$, and $\widetilde H$ is connected and simply connected. For $\mathfrak g=0$, this construction yields the one-point group. [A1, L2, L3, step 1.1]

3.1 Suppose $G_1$ and $G_2$ are connected simply connected integrations of $\mathfrak g$, and let $\alpha:\operatorname{Lie}(G_1)\to\operatorname{Lie}(G_2)$ be the Lie-algebra isomorphism induced by chosen identifications with $\mathfrak g$. By [L4], $\alpha$ and $\alpha^{-1}$ integrate uniquely to homomorphisms $F:G_1\to G_2$ and $Q:G_2\to G_1$. The differentials of $QF$ and $FQ$ are the identity maps, so uniqueness in [L4] makes these composites the identity homomorphisms. Thus $F$ is a Lie-group isomorphism. Countable choice enters only through [L2] and [L4]; Ado and the covering step add no stronger choice. [A1, L4, step 2.1, algebra] ∎