---
id: lem-author-7dc5154c7a6f-spectral-kzero-stability
kind: lemma
title: Spectral K-zero equality gives an actual projective stabilization
status: draft
domain: mathematics
deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-module-stabilization
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  lem-k-zero-stable-equivalence: mathematical-premise
  lem-author-7dc5154c7a6f-module-stabilization: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
Assume AC and the suitable universes of the article's perfect K-theory construction. Let $A$ be a commutative unital noetherian ring, put $X=\operatorname{Spec}A$, and let $E,F$ be vector bundles on $X$, meaning finite locally free $\mathcal O_X$-modules. Equality $[E]=[F]$ in the article's perfect spectral $K_0(X)$ is equivalent to an isomorphism of finite projective $A$-modules $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ for some integer $N\geq0$. This is the bundle/perfect K-zero interface, without a passage through coherent-sheaf G-theory.

## Facts & Assumptions

**Given:** AC, the stated universes, a commutative unital noetherian ring $A$, the affine scheme $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Establish the stated conclusion.

[A1] AC is assumed through the supplied affine perfect-K-zero comparison and affine bundle/module interfaces; their universe bounds are also assumed. No choice principle stronger than those supplier hypotheses is introduced. [[math:def-axiom-of-choice]]

[F1] The spectral group identifies with vector-bundle $K^0$ and preserves bundle classes. [[def-vector-bundle-classes]]

[F2] Equality in $K^0$ is equivalent to stabilization by the same finite free bundle. [[lem-k-zero-stable-equivalence]]

[F3] Stabilization is carried to and from modules. [[lem-author-7dc5154c7a6f-module-stabilization]]

## Proof

1.1 Suppose $[E]=[F]$ in spectral $K_0(X)$. The affine comparison identifies these classes with the classes of the bundles $E,F$ in $K^0(X)$. Since $X$ is noetherian affine and $E,F$ are vector bundles, [F2] gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ for an integer $N\geq0$. By [F3], global sections give the asserted isomorphism of finite projective modules. The choice and size hypotheses required by these suppliers are included in the given assumptions. [A1, F1, F2, F3, given]

2.1 Conversely, suppose the displayed module isomorphism holds for some integer $N\geq0$. By [F3] it gives a bundle isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. By [F2], $E$ and $F$ have equal classes in $K^0(X)$, and [F1] identifies these with their spectral classes. Together with step 1.1 this proves the equivalence. [A1, F1, F2, F3, step 1.1] ∎
