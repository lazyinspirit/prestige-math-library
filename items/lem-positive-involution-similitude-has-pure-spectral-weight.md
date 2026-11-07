---
id: lem-positive-involution-similitude-has-pure-spectral-weight
kind: lemma
title: "A positive-involution similitude has pure spectral weight"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: locally-derived
  proof: ai-generated
deps: []
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Rosati involution and its positive trace form; the finite-dimensional spectral implication is proved below."
---

## Statement

Let $E$ be a finite-dimensional unital $\mathbb Q$-algebra with a $\mathbb Q$-linear involutive anti-automorphism $x\mapsto x^\dagger$. Suppose a $\mathbb Q$-linear trace $t:E\to\mathbb Q$ satisfies $t(xy)=t(yx)$ and that $\langle x,y\rangle=t(xy^\dagger)$ extends to a positive-definite real inner product on $E\otimes_\mathbb Q\mathbb R$. Let $q>0$ be rational and $\pi\in E$ satisfy $\pi^\dagger\pi=q1$. Then every complex root of the characteristic polynomial of left multiplication by $\pi$ on $E$ has absolute value $\sqrt q$. Moreover, for any field extension $F/\mathbb Q$ and finite-dimensional left $E\otimes_\mathbb Q F$-module $V$, every eigenvalue of $\pi$ on $V$ is a root of this same rational polynomial.

## Facts & Assumptions

**Given:** $E,\dagger,t,q,\pi,F,V$ with the stated algebraic, positivity and module hypotheses.

## Proof

**Proof technique:** left multiplication is a scaled orthogonal operator.

1.1 Extend scalars to $E_\mathbb R=E\otimes\mathbb R$. For $x,y\in E_\mathbb R$, cyclicity of $t$, the anti-automorphism law and $\pi^\dagger\pi=q1$ give $\langle\pi x,\pi y\rangle=t(\pi xy^\dagger\pi^\dagger)=t(xy^\dagger\pi^\dagger\pi)=q\langle x,y\rangle$. Thus $q^{-1/2}L_\pi$ is orthogonal for the given positive-definite real inner product. [given, algebra]

2.1 Complexify this real inner-product space and use its Hermitian extension. An orthogonal operator preserves the Hermitian norm, so any complex eigenvector of $L_\pi$ with eigenvalue $\lambda$ satisfies $|\lambda|=\sqrt q$. Hence every root of its rational characteristic polynomial has that absolute value. [step 1.1, algebra]

3.1 Let $P(X)\in\mathbb Q[X]$ be the characteristic polynomial of $L_\pi$ on $E$. Cayley–Hamilton gives $P(L_\pi)=0$. Applying this operator to the unit $1\in E$ gives $P(\pi)=0$ in the algebra. Therefore $P(\pi)$ acts as zero on any $E\otimes F$-module $V$. Every eigenvalue of $\pi$ on $V$ is consequently a root of $P$, proving the second assertion. [step 2.1, given, algebra] ∎
