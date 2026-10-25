---
id: thm-associative-symmetrization-satisfies-jordan-identity
kind: theorem
title: The symmetrized product of an associative algebra is Jordan
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: jordan-spin-factor-and-alternative-algebras
dependency_level: 2
deps: [def-associative-jordan-product, def-involutive-complex-associative-algebra, def-jordan-algebra, def-algebra-over-a-commutative-ring]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Jacobson, Lectures on Quadratic Jordan Algebras, §1"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr45.pdf
    - title: "John C. Baez, The Octonions, §3.1, PDF p. 20"
      url: https://arxiv.org/pdf/math/0105155v4
---

## Statement

Let $k$ be a field with $\operatorname{char}(k)\ne2$ and $A$ a unital
associative $k$-algebra. The product $a\circ b=(ab+ba)/2$ makes $A^+$ of
[[def-associative-jordan-product]] a Jordan algebra. If $A$ is a complex
associative algebra with involution as in
[[def-involutive-complex-associative-algebra]], then its self-adjoint part
$A_{\rm sa}$ is a real vector subspace closed under $\circ$, hence a real
Jordan subalgebra of $A^+$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$, a unital associative $k$-algebra $A$, and, for the second claim, a complex algebra involution on $A$. Write $a^3:=aaa$ in the associative multiplication.

[F1] The product on $A^+$ is $a\circ b=(ab+ba)/2$ ([[def-associative-jordan-product]]).

[F2] Multiplication on $A$ is bilinear and associative ([[def-algebra-over-a-commutative-ring]]).

[F3] A Jordan algebra has a commutative bilinear product satisfying $x\circ(y\circ x^2)=(x\circ y)\circ x^2$ ([[def-jordan-algebra]]).

[F4] In a complex algebra with involution, $*$ is conjugate-linear, $(ab)^*=b^*a^*$, $(a^*)^*=a$, and $1^*=1$ ([[def-involutive-complex-associative-algebra]]).

## Proof
1.1 By [F1] and the bilinearity of multiplication in [F2], $\circ$ is bilinear; swapping $a,b$ leaves $ab+ba$ unchanged, so it is commutative. Also $a^2_{\circ}:=a\circ a=aa$ because $2$ is invertible in $k$. [given, F1, F2, algebra]

2.1 Using associativity from [F2], expand $a\circ(b\circ a^2_{\circ})=\frac14(aba^2+a^3b+ba^3+a^2ba).$ Here $a^3=(aa)a=a(aa)$. [given, F1, F2, step 1.1, algebra]

2.2 In the complex involutive case, $A_{\rm sa}$ is closed under addition and real scalar multiplication by conjugate-linearity in [F4], and it contains the unit because $1^*=1$. For $a,b\in A_{\rm sa}$, $(a\circ b)^*=\tfrac12((ab)^*+(ba)^*)=\tfrac12(ba+ab)=a\circ b,$ so it is closed under $\circ$. [given, F1, F4, step 1.1, algebra]

3.1 The other side expands, using [F2], as $(a\circ b)\circ a^2_{\circ}=\frac14(aba^2+ba^3+a^3b+a^2ba),$ which contains the same four terms as step 2.1. [given, F1, F2, step 1.1, step 2.1, algebra]

4.1 Since $A$ is unital, [F1] gives $1\circ a=(1a+a1)/2=a$ for every $a\in A$. Steps 1.1, 2.1, and 3.1 prove bilinearity, commutativity, and the Jordan identity in [F3]. Thus $A^+$ is a unital Jordan algebra. [given, F1, F2, step 1.1, step 2.1, step 3.1, F3]

5.1 The real subspace $A_{\rm sa}$ inherits commutativity, bilinearity, and the Jordan identity from $A^+$, so it is a real Jordan subalgebra. [step 4.1, step 2.2, F3] ∎
