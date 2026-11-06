---
id: rem-cft-formal-and-affine-chiral-input-boundaries
kind: remark
title: Formal and affine vertex-algebra input boundaries
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-state-field
  - def-conformal-vertex-algebra
  - thm-universal-affine-vertex-algebra
dependency_roles:
  def-formal-distribution-on-a-vector-space: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, arXiv:0809.1380v3
      url: https://arxiv.org/pdf/0809.1380v3
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, 2024 author-hosted monograph
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Remark

Use the ordinary, non-super complex convention in which a formal distribution is a coefficient family and a field additionally satisfies vectorwise lower truncation. An ordinary vertex algebra uses such fields in a state–field map with a nonzero vacuum, translation operator, vacuum and creation, translation covariance, and locality. Those algebraic axioms alone impose no specified Virasoro vector or associated weight decomposition. They require neither that the only subspaces stable under translation and all state modes are zero and the whole space, nor a positive-definite conjugate-symmetric sesquilinear form with any prescribed compatibility with the modes. They assert no analytic convergence of operator products.

For this workspace, “conformal vertex algebra of CFT type” means the selected stronger convention: a specified Virasoro vector with $L(-1)=T$, diagonalizable $L(0)$, a nonnegative integer grading with finite-dimensional weight spaces, and $V_0=\mathbb C\mathbf1$. A vector-space grading that may accompany an algebraic construction does not supply this specified conformal vector or the CFT-type vacuum-space condition.

For a finite-dimensional complex simple Lie algebra $\mathfrak g$, the normalized invariant form $B$ used in the affine central extension, and each $k\in\mathbb C$, the universal affine theorem gives a unique ordinary algebraic vertex-algebra structure on the induced affine vacuum module $V^k(\mathfrak g)$ with the prescribed current fields. Fact [F4] records the theorem's exact hypotheses and conclusion; the supplier's proof works at every complex level and uses no division by a level-dependent scalar. It does not choose the conformal vector or grading data specified in [F3], make any further assertion about the module's affine action, or select a quotient and assert properties of that quotient. It neither supplies a conjugate-symmetric sesquilinear form $\langle\cdot,\cdot\rangle$ on $V^k(\mathfrak g)$ with $\langle v,v\rangle>0$ for nonzero $v$, nor asserts that the affine action preserves such a form. The formal identities in [F1]–[F2] assert no analytic convergence of operator products or correlation functions. These algebraic results therefore do not establish existence of an analytic or physical CFT.

## Remark references

[Christophe Nozaradan, Introduction to Vertex Algebras, §§1.3–1.4 and 4.2–4.3](https://arxiv.org/pdf/0809.1380v3)

[Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.2–2.3, 2.5, 2.7, and §3.1, Proposition 3.1](https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf)

## Facts & Assumptions

**Given:** Work over $\mathbb C$ in the ordinary non-super formal convention. Use the current pinned definitions of formal distributions and vertex algebras, the selected CFT-type convention, and the published universal affine theorem with exactly its stated Lie-algebra, form, and level hypotheses.

[F1] [[def-formal-distribution-on-a-vector-space]]: a formal distribution is an arbitrary coefficient family; a field adds vectorwise lower truncation, and locality and products use formal coefficient and residue conventions without an analytic convergence assertion.

[F2] [[def-vertex-algebra-state-field]]: a vertex algebra consists of the ordinary state–field data and lower-truncated fields satisfying vacuum and creation, translation covariance, and locality; these axioms choose no Virasoro vector or associated weight decomposition and introduce no positive-definite sesquilinear form or analytic-convergence assertion.

[F3] [[def-conformal-vertex-algebra]]: the selected CFT-type convention requires a specified Virasoro vector, $L(-1)=T$, diagonalizable $L(0)$, a nonnegative integer grading with finite-dimensional weight spaces, and $V_0=\mathbb C\mathbf1$.

[F4] [[thm-universal-affine-vertex-algebra]]: for finite-dimensional complex simple $\mathfrak g$, its normalized invariant form, and every $k\in\mathbb C$, the induced affine vacuum module has a unique vertex-algebra structure with the prescribed current fields; its level hypothesis is exactly $k\in\mathbb C$, with no excluded value. Its conclusion supplies the state–field structure on that induced module: it does not choose the Virasoro vector or grading in [F3], select a quotient of the module, impose an additional condition on its affine-mode action, or supply a positive-definite sesquilinear form as described in the Remark.

## Verification

1.1 By [F1], a formal distribution need not be a field: the latter must be lower-truncated on each vector. By [F2], an ordinary vertex algebra uses fields and adds the vacuum, translation, state–field, creation, covariance, and locality data. Thus the formal coefficient-family convention, the field condition, and the ordinary vertex-algebra structure are distinct algebraic interfaces. [given, F1, F2, algebra]

2.1 The ordinary axioms in [F2] do not supply a conformal vector or grading. The selected convention in [F3] separately requires the Virasoro vector, its translation-mode condition, the stated grading data, and $V_0=\mathbb C\mathbf1$. Hence a separate vector-space grading, if present, does not by itself meet [F3]. [F2, F3, step 1.1, algebra]

3.1 The exact hypotheses and conclusion of [F4] give the ordinary algebraic vertex-algebra structure on $V^k(\mathfrak g)$ for every $k\in\mathbb C$, without excluding any complex level. This selects neither the additional Virasoro vector and weight data in [F3] nor a quotient of $V^k(\mathfrak g)$, and it introduces no additional affine-action condition or positive-definite sesquilinear form. The formal scope in [F1]–[F2] supplies no analytic convergence or positivity premise. Thus these inputs support the stated algebraic conclusions only, not analytic correlation-function convergence or physical CFT existence. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
