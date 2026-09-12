---
id: lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity
kind: lemma
title: The loop residue form satisfies the Lie two cocycle identity
deps: ["def-residue-two-cocycle-on-a-loop-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Lemma 12.2.5
        and Corollary 12.2.6
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For all $u,v,w\in L\mathfrak g$,
$$\omega([u,v],w)+\omega([v,w],u)+\omega([w,u],v)=0.$$

## Facts & Assumptions

**Given:** The algebraic loop bracket and the residue form.

[F1] The form in [[def-residue-two-cocycle-on-a-loop-algebra]] is defined using invariant symmetric $B$ and Laurent differentiation.

## Proof

1.1 For $x,y,z\in\mathfrak g$, invariance and symmetry give $B([x,y],z)=B(x,[y,z])=B([y,z],x)$, and the cyclic repetition gives $B([z,x],y)$ as the same scalar $b$. [F1, algebra]

2.1 For $u=x\otimes f$, $v=y\otimes q$, $w=z\otimes r$, the required cyclic sum is $b\operatorname{Res}(((fq)'r+(qr)'f+(rf)'q)\,dt)$. Expanding the three derivatives gives twice each of $f'qr,fq'r,fqr'$, so the sum is $2b\operatorname{Res}((fqr)'\,dt)$. [F1, step 1.1, algebra]

3.1 If $fqr=\sum_j a_jt^j$, its derivative has $t^{-1}$ coefficient $0a_0=0$. Step 2.1 therefore vanishes. Each general input is a finite sum of pure tensors, and the cyclic expression is trilinear; distributing reduces it to these vanishing summands. Empty sums, zero arguments and repeated arguments are included. [step 2.1, given, algebra] ∎
