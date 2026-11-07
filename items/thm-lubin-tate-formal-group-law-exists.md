---
id: thm-lubin-tate-formal-group-law-exists
kind: theorem
title: "Existence of a Lubin–Tate formal group law"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-lubin-tate-formal-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter I §2, Proposition 2.12"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

For every nonarchimedean local field $K$ with finite residue field, every
uniformizer $\pi$ admits a one-dimensional commutative formal group law
$F$ over $\mathcal O_K$ and an $\mathcal O_K$-module action for which
$[\pi]_F(X)=\pi X+O(X^2)$ and $[\pi]_F(X)\equiv X^q\pmod\pi$.

## Statement references

[[def-lubin-tate-formal-group]]

[J. S. Milne, *Class Field Theory*, Chapter I §2, Proposition 2.12, printed pp. 33–34](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The local field, uniformizer, and residue cardinality in the Statement.

[F1] A Lubin–Tate group is a formal group law admitting the specified $\mathcal O_K$ action and uniformizer endomorphism. [[def-lubin-tate-formal-group]]

## Proof

**Proof technique:** recursively lift homogeneous terms through the uniformizer endomorphism.

**Given:** The data above.

1.1 Choose $f(X)=\pi X+X^q$. More generally, for a linear form $L$ in finitely many variables, recursively construct the unique series $H=L+O(\text{degree }2)$ satisfying $f(H)=H(f(X_1),\ldots,f(X_s))$. Suppose terms through degree $r$ have been chosen and the error in degree $d=r+1$ is $E_d$. Modulo $\pi$, the two sides agree because $f(T)\equiv T^q$, the $q$th-power map is additive in the residue characteristic, and every coefficient reduces to the field of $q$ elements, where $c^q=c$; hence $E_d$ is divisible by $\pi$. Adding a homogeneous correction $Q_d$ changes the degree-$d$ error by $(\pi-\pi^d)Q_d=\pi(1-\pi^{d-1})Q_d$. The second factor is a unit, so there is a unique integral $Q_d$ cancelling $E_d$. [F1, given, algebra]

2.1 Apply the recursion to $L=X+Y$ to obtain $F(X,Y)$. Uniqueness shows $F(X,0)=X$ and $F(0,Y)=Y$, because each of those one-variable series satisfies the same commuting equation and linear term. The series $F(Y,X)$ and $F(X,Y)$ both solve the same equation with linear term $X+Y$, so they agree. [step 1.1, construct, algebra]

3.1 The two series $F(F(X,Y),Z)$ and $F(X,F(Y,Z))$ have the same linear part $X+Y+Z$ and each commutes with componentwise application of $f$. Uniqueness in step 1.1 makes them equal. The inverse series is obtained recursively from $F(X,I(X))=0$, since the coefficient of the new term at each degree is $1$. Thus $F$ is a commutative formal group law and $f$ is an endomorphism. [step 1.1, step 2.1, algebra]

4.1 Apply the same recursion in one variable with linear form $aX$ to obtain the unique commuting series $[a](X)=aX+O(X^2)$. The series $[a](F(X,Y))$ and $F([a](X),[a](Y))$ both have linear term $aX+aY$ and satisfy the same commuting equation, so they agree. Likewise $F([a],[b])$ and $[a+b]$ are commuting series with linear coefficient $a+b$, while $[a]\circ[b]$ and $[ab]$ are commuting series with linear coefficient $ab$; uniqueness gives the additive and multiplicative action laws. The identity is $[1](X)=X$, and uniqueness gives $[\pi]=f$. Hence the action satisfies [F1]. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎ 