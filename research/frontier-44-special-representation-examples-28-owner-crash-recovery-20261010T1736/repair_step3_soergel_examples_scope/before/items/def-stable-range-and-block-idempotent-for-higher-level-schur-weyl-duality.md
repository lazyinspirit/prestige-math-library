---
id: def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality
kind: definition
title: "Stable range and block idempotent corner for higher-level Schur-Weyl duality"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 34
deps: [def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       def-degenerate-cyclotomic-hecke-algebra,
       thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras,
       cor-the-regular-module-decomposes-into-projective-indecomposables,
       def-deformed-tensor-space-for-the-type-a-finite-w-algebra,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       def-classical-complex-matrix-lie-algebras, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 6.2, Lemma 6.5, Theorem 6.6 and Corollary 6.7, printed pp. 40-41: the stable-range condition q_l>=d, the stable injectivity, the central corner fH_d(a)f outside the stable range, and the enlargement/deletion construction of the supporting blocks."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.2, printed pp. 23-24: the generalized-eigenvalue idempotents e(i), their S_d-orbits and the primitive central idempotents of the cyclotomic quotient."
verification:
  precheck: pass
---

## Definition

Keep the pyramid $\lambda=(0\le p_1\le\cdots\le p_n)$ with columns
$q_1\ge\cdots\ge q_l$, an origin $c$, and the truncated tensor space
$V_c^{\otimes d}$ of
[[def-deformed-tensor-space-for-the-type-a-finite-w-algebra]]. The **stable
range** for $\lambda$ is the condition
$$q_l\ge d:$$
at least $d$ Jordan strings have the maximum length $l=p_n$, equivalently the
smallest column has height at least $d$.

The verification below records the structure attached to the stable range and
to its failure. In the stable range the raw $H_d(\mathbf a)$ action is
faithful. For admissible $c$ outside the stable range, the image of the Hecke
action is a central block corner
$$fH_d(\mathbf a)f,$$
where $f$ is the sum of the central blocks supporting the contractible simple
labels: one enlarges the pyramid by adding $r$ columns and enlarging every
$q_j$ by $r$ while preserving every root $a_j=c_j+q_j-n$, lets $e$ be the
idempotent selecting the added ground rows, identifies the supported blocks,
and deletes the added rows. The generalized-eigenvalue idempotents $e(\mathbf i)$
are not individually central; $f$ is a sum of entire central blocks, so the
corner is a two-sided algebraic object. For nonadmissible $c$ the genuine
image algebra and the full tensor double centralizer still exist by
[[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]],
but the same central-corner/Morita conclusion is not inferred without
admissibility.

## Facts & Assumptions

**Given:** The pyramid $\lambda$, the origins $c$, the truncated tensor space $V_c^{\otimes d}$, and the Hecke image $B_d\subseteq\operatorname{End}(V_c^{\otimes d})^{\mathrm{op}}$.

[F1] The double centralizer and stable injectivity statements are available; the stable range condition is $q_l\ge d$ ([[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]], [[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

[F2] The cyclotomic quotient $H_d(\mathbf a)$ has the bounded monomial basis and finite dimension $l^dd!$; its finite-dimensional modules decompose into generalized weight spaces with idempotents $e(\mathbf i)$ summing to $1$ ([[def-degenerate-cyclotomic-hecke-algebra]]).

[F3] Finite-dimensional algebras have projective covers, and the regular module decomposes into projective indecomposables indexed by the simple modules ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]], [[cor-the-regular-module-decomposes-into-projective-indecomposables]]).

[F4] The enlargement construction: adding columns and ground rows to the pyramid while keeping the roots $a_j$ fixed is the admissible-origin enlargement used by the source, and the resulting tensor modules restrict to the original one on the supported blocks ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], [[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]]).



## Proof

**Proof technique:** direct.

**Given:** The stable range condition and the Hecke image $B_d$.

1.1 Faithfulness in the stable range. If $q_l\ge d$, then $e$ has at least $d$ strings of maximum length and the stable injectivity of the Vust theorem makes the right action of the truncated polynomial/permutation algebra faithful on the associated graded; since the $H_d(\mathbf a)$ action has the bounded monomial basis and the filtration is separated, a nonzero element has nonzero leading symbol and hence nonzero image. So the raw $H_d(\mathbf a)$ action is faithful exactly in the stable range. [F1, F2, algebra]

1.2 The corner outside the stable range. For admissible $c$ outside the stable range, enlarge the pyramid as in [F4] until the stable range holds for the enlarged pyramid, with an idempotent $e$ selecting the added ground rows. The supported simple labels are exactly the contractible ones after deletion; the lowered tensor module is the original one on the supported blocks, and the graded first-centralizer argument identifies its image with the $e$-corner of the enlarged Hecke action. By [F3] the finite-dimensional algebras here have projective covers and their regular modules decompose into projective indecomposables; under the stable Morita equivalence the module $eM$ is a right progenerator precisely for the supporting central blocks, so its right annihilator is the sum of the complementary central blocks and the image is $fH_d(\mathbf a)f$ for the central idempotent $f$ of the supporting blocks. [F1, F3, F4, algebra, construct]

2.1 Centrality of $f$ and the status of the $e(\mathbf i)$. The individual generalized-eigenvalue idempotents $e(\mathbf i)$ are not central: the $S_d$-orbit sums of $e(\mathbf i)$ are the primitive central idempotents, so only orbit sums (and sums of such over supporting blocks) define two-sided corners. This is why $f$ is defined as a sum of entire central blocks. [F2, step 1.2, algebra]

3.1 Nonadmissible boundary. For nonadmissible $c$ the genuine image algebra exists and the tensor double centralizer holds by [F1], but the central-corner identification uses the admissible Morita equivalence and is not inferred here; the companion example with two equal charges shows that the corner statement fails without admissibility. [F1, step 1.2, given] ∎

## Remarks

- The equality $q_l\ge d$ is exactly the condition that the smallest column height is at least $d$; since the columns are the lengths of the Jordan strings counted with multiplicity, this says that there are at least $d$ maximum-length strings.

- The stable range makes the entire Hecke algebra visible; outside it, only the central corner of the contractible labels is visible, which is the form in which the Schur-Weyl correspondence continues to hold.
