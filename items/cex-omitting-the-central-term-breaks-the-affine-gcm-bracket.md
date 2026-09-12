---
id: cex-omitting-the-central-term-breaks-the-affine-gcm-bracket
kind: counterexample
title: Omitting the central term breaks the affine GCM bracket
deps: ["def-loop-algebra-of-a-simple-lie-algebra", "lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root", "thm-loop-and-affine-gcm-presentations-are-isomorphic"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, equations (7.3)-(7.5)
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Theorem 12.2.15
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The normalized untwisted affine realization is unchanged if its residue central term is deleted from the loop bracket while retaining $h_0=c-\theta^\vee$.

## Facts & Assumptions

**Given:** The fixed nonzero central generator $c$ and normalized highest-root vectors.

[F1] The bracket without a central term is [[def-loop-algebra-of-a-simple-lie-algebra]].

[F2] The required affine coroot and bracket are [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]].

[F3] These assignments realize the full GCM algebra by [[thm-loop-and-affine-gcm-presentations-are-isomorphic]].

## Counterexample

1.1 Take $e_0=f_\theta\otimes t$ and $f_0=e_\theta\otimes t^{-1}$. F1 gives $[e_0,f_0]=[f_\theta,e_\theta]\otimes1=-\theta^\vee$. If we adjoin $c$ as an independent central vector but leave this bracket unchanged, it still has zero $c$ coordinate. F2 instead requires $[e_0,f_0]=c-\theta^\vee$, whose $c$ coordinate is one. These vectors differ by the nonzero $c$. [F1, F2, given, algebra]

2.1 Thus the required mixed relation fails and F3's realization cannot persist. In the unextended loop algebra there is not even a vector for this independent central coordinate. Sending $c$ to zero does produce a quotient representation of the derived affine algebra, but it cannot be the claimed faithful full realization. For finite $\mathfrak{sl}_2$ the same discrepancy is $-h$ versus $c-h$, already with degrees $1,-1$ and form value one. This explicit witness refutes the assertion without any choice assumption. [F3, step 1.1, algebra] ∎
