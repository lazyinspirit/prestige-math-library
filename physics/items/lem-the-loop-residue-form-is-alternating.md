---
id: lem-the-loop-residue-form-is-alternating
kind: lemma
title: The loop residue form is alternating
deps: ["def-residue-two-cocycle-on-a-loop-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, equations (7.1)-(7.2)
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Lemma 12.2.5
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For all $u,v\in L\mathfrak g$, $\omega(u,v)=-\omega(v,u)$ and $\omega(u,u)=0$.

## Facts & Assumptions

**Given:** A loop algebra over $\mathbb C$ and its residue form.

[F1] [[def-residue-two-cocycle-on-a-loop-algebra]] defines $\omega(x\otimes f,y\otimes q)=B(x,y)\operatorname{Res}(f'q\,dt)$ with $B$ symmetric.

## Proof

1.1 For any Laurent polynomial $a=\sum_j a_jt^j$, the coefficient of $t^{-1}$ in $a'=\sum_j ja_jt^{j-1}$ is $0a_0=0$. Thus $\operatorname{Res}(a'\,dt)=0$, including constant and zero $a$. [F1, algebra]

2.1 For pure tensors $u=x\otimes f$, $v=y\otimes q$, symmetry of $B$ and the product rule give $\omega(u,v)+\omega(v,u)=B(x,y)\operatorname{Res}((fq)'\,dt)=0$. [F1, step 1.1, algebra]

3.1 Expand arbitrary $u,v$ into their finite tensor sums and apply step 2.1 term by term. This proves skewness for all inputs, including empty sums. Setting $v=u$ gives $2\omega(u,u)=0$; since the field is $\mathbb C$, division by $2$ gives alternatingness. [step 2.1, given, algebra] ∎
