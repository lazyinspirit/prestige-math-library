---
id: cor-a-finite-dimensional-nilpotent-lie-algebra-has-a-codimension-one-ideal-containing-any-given-proper-subalgebra
kind: corollary
title: Codimension-one ideals in nilpotent Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center, prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras, def-quotient-lie-algebra, thm-rank-nullity]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Propositions 2.5–2.6"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Propositions 2.5–2.6, printed pp. 12–13"
---

## Statement

If $\mathfrak h$ is a proper subalgebra of a finite-dimensional nilpotent Lie
algebra $\mathfrak g$, then $\mathfrak h$ is contained in an ideal of
$\mathfrak g$ of codimension one.

## Facts & Assumptions

**Given:** A finite-dimensional nilpotent Lie algebra $\mathfrak g$ and a
proper subalgebra $\mathfrak h<\mathfrak g$.

[L1] A nonzero nilpotent Lie algebra has nonzero center
([[prop-a-nonzero-nilpotent-lie-algebra-has-nonzero-center]]).

[L2] Quotients of nilpotent Lie algebras are nilpotent
([[prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras]]).

[L3] A quotient by an ideal has a canonical surjective Lie homomorphism
([[def-quotient-lie-algebra]]).

[L4] Rank-nullity computes the codimension of an inverse image under a
surjective finite-dimensional linear map ([[thm-rank-nullity]]).

## Proof

**Proof technique:** induction on $\dim\mathfrak g$.

1.1 If $\dim\mathfrak g=1$, the only proper subalgebra is $0$, which is itself an ideal of codimension one. The case $\mathfrak g=0$ has no proper subalgebra and is vacuous. [base, given]

1.2 Assume $\dim\mathfrak g>1$ and the assertion for all nilpotent Lie algebras of smaller dimension. [ih, given]

1.3 By [L1], choose $0\neq z\in Z(\mathfrak g)$ and put $\mathfrak a=kz$. Then $\mathfrak a$ is a one-dimensional central ideal. [L1]

2.1 The quotient $\overline{\mathfrak g}=\mathfrak g/\mathfrak a$ is defined by [L3], has smaller dimension by [L4], and is nilpotent by [L2]. [L2, L3, L4, step 1.3]

3.1 If $z\in\mathfrak h$, then $\overline{\mathfrak h}=\mathfrak h/\mathfrak a$ is proper in $\overline{\mathfrak g}$. By step 1.2 there is a codimension-one ideal $\overline{\mathfrak m}$ containing it. Its inverse image $\mathfrak m$ under the quotient map is an ideal containing $\mathfrak h$, and [L4] gives codimension one. [L3, L4, step 1.2, step 2.1]

4.1 If $z\notin\mathfrak h$, set $\mathfrak s=\mathfrak h+\mathfrak a$; centrality makes this a subalgebra. If $\mathfrak s=\mathfrak g$, then $\mathfrak h$ has codimension one and $[\mathfrak g,\mathfrak h]=[\mathfrak h+\mathfrak a,\mathfrak h]\subseteq\mathfrak h$, so it is the required ideal. If $\mathfrak s$ is proper, then $\mathfrak s/\mathfrak a$ is proper in $\overline{\mathfrak g}$; apply step 1.2 there and take the inverse image as in step 3.1. [L3, L4, step 1.2, step 2.1, step 3.1, algebra]

5.1 The alternatives $z\in\mathfrak h$ and $z\notin\mathfrak h$, including both subcases of the latter, exhaust all possibilities and each yields a codimension-one ideal containing $\mathfrak h$. The only selections were one central witness and finitely many induction witnesses, so no Choice principle is used. [step 3.1, step 4.1, discharge-induction] ∎
