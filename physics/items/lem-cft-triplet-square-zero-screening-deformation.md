---
id: lem-cft-triplet-square-zero-screening-deformation
kind: lemma
title: Full module Jacobi identity for a square-zero screening deformation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-vertex-algebra-module
dependency_roles:
  def-vertex-algebra-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: "Theorem 2.1; §4 square-zero extension; Lemma 9.1 and Theorem 9.1. This lemma proves the square-zero special case directly, including the formal identity and module-Jacobi transport."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $A$ be an ordinary vertex algebra over $\mathbb C$, with state fields $Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1}$ satisfying the adjoint Jacobi identity. Let $I\subset A$ be a square-zero ideal: $Y(A,z)I\subset I((z))$, $Y(I,z)A\subset I((z))$ and $Y(I,z)I=0$. Fix $v\in I$ and a vertex subalgebra $S\subset\ker_A v_{(0)}$. For $a\in A$ put
$$D(x)a=\sum_{n\ge1}\frac{(-1)^{n+1}}{n}x^{-n}v_{(n)}a,\qquad \Delta(x)=1+D(x).$$
Each sum on a fixed $a$ is finite. For every ordinary $A$-module $(M,Y_M)$, the state fields
$$\widetilde Y_M(a,x)=Y_M(\Delta(x)a,x),\qquad a\in S,$$
define an ordinary $S$-module on the same vector space $M$. In particular they satisfy the full module Jacobi identity with the undeformed state products of $S$ and the ordinary formal binomial expansions. This assertion requires an actual ambient vertex algebra and an actual ambient module; it does not construct either from oscillator formulas.

## Statement references

[[def-vertex-algebra-module]]

[Adamović–Milas, Theorem 2.1 and §4; compare Lemma 9.1 and the Jacobi transport in Theorem 9.1](https://arxiv.org/pdf/0902.3417v2)

## Facts & Assumptions

**Given:** The ordinary vertex algebra $A$ with its adjoint Jacobi identity, the square-zero ideal $I$, $v\in I$, the subalgebra $S\subset\ker v_{(0)}$, and the actual $A$-module $(M,Y_M)$. Extend $Y$ and $Y_M$ coefficientwise to finite Laurent-polynomial state inputs; expansions of $(x+z)^{-j}$ below use nonnegative powers of $z$.

[F1] The module convention in [[def-vertex-algebra-module]] requires lower truncation, vacuum action and the full three-variable formal-delta Jacobi identity. The Given adjoint identity has the same formula with $M=A$ and $Y_M=Y$.

## Proof

1.1 Truncation in $A$ makes $v_{(n)}a=0$ for sufficiently large $n$ for each fixed $a$, so $D(x)a\in I[x^{-1}]$. Every mode of $v$ annihilates $I$ by $Y(I,z)I=0$, and therefore $D(x)I=0$ and $D(x)D(y)a=0$. The vacuum creation identity $Y(v,z)\mathbf1\in A\!\left[\left[z\right]\right]$ gives $v_{(n)}\mathbf1=0$ for $n\ge0$, whence $\Delta(x)\mathbf1=\mathbf1$. Each deformed field is a finite sum of monomials in $x^{-1}$ times module fields; it is thus linear in $a$ and lower truncated on every vector of $M$. The vacuum acts as the identity by [F1]. [given, F1, algebra]

2.1 Taking $\operatorname{Res}_{z_0}$ of the Given adjoint Jacobi identity and then $\operatorname{Res}_{z_1}z_1^n$, for an integer $n\ge0$, gives $[v_{(n)},Y(a,z)]=\sum_{j=0}^n\binom nj z^{n-j}Y(v_{(j)}a,z)$. Indeed, in the right-hand formal delta one substitutes $z_1=z+z_0$, whose $n$th power is the finite binomial sum; the residue in $z_0$ selects $v_{(j)}a$. For $a\in S$ the $j=0$ summand is zero. Thus, with $c_n=(-1)^{n+1}/n$, coefficientwise in $x^{-1}$ one obtains $[D(x),Y(a,z)]=Y(D(x+z)a,z)$, because for each $j\ge1$ the scalar coefficient is $\sum_{n\ge j}c_n\binom nj z^{n-j}x^{-n}=\frac{(-1)^{j+1}}j(x+z)^{-j}$. To verify this last equality, put $n=j+k$, use $\binom{j+k}{j}/(j+k)=\binom{j+k-1}{k}/j$, and expand $(1+z/x)^{-j}=\sum_{k\ge0}(-1)^k\binom{j+k-1}{k}(z/x)^k$. [given, F1, step 1.1, algebra]

3.1 Apply step 2.1 to $b\in A$. Since $D(x+z)a\in I((x^{-1}))\left[\left[z\right]\right]$ and $D(x)b\in I[x^{-1}]$, square-zero multiplication gives $Y(D(x+z)a,z)D(x)b=0$. Consequently the commutator identity rearranges to the exact intertwining identity $\Delta(x)Y(a,z)b=Y(\Delta(x+z)a,z)\Delta(x)b$, for $a\in S$. Every coefficient in $x^{-1}$ is a finite sum in step 2.1, so this equality has the stated binomial expansion and does not require evaluating convergent series. [given, step 1.1, step 2.1, algebra]

4.1 Fix $a,b\in S$ and write $\delta(u)=\sum_{r\in\mathbb Z}u^r$. Apply the original module Jacobi identity [F1] coefficientwise to the finite Laurent-polynomial inputs $\Delta(x_1)a$ and $\Delta(x_2)b$. Its left-hand side is exactly $x_0^{-1}\delta((x_1-x_2)/x_0)\widetilde Y_M(a,x_1)\widetilde Y_M(b,x_2)-x_0^{-1}\delta((x_2-x_1)/(-x_0))\widetilde Y_M(b,x_2)\widetilde Y_M(a,x_1)$. Its right-hand side is $x_2^{-1}\delta((x_1-x_0)/x_2)Y_M(Y(\Delta(x_1)a,x_0)\Delta(x_2)b,x_2)$. Formal-delta substitution replaces $x_1$ here by $x_2+x_0$, expanded in nonnegative powers of $x_0$; for a Laurent monomial this follows from $x_1^r\delta((x_1-x_0)/x_2)=(x_2+x_0)^r\delta((x_1-x_0)/x_2)$, for every integer $r$. Step 3.1 then changes the inner state to $\Delta(x_2)Y(a,x_0)b$. Since $S$ is a vertex subalgebra, the coefficients of $Y(a,x_0)b$ lie in $S$, so the resulting right-hand side is precisely $x_2^{-1}\delta((x_1-x_0)/x_2)\widetilde Y_M(Y(a,x_0)b,x_2)$. This is the full module Jacobi identity. Together with the truncation and vacuum verification in step 1.1 it proves every required module axiom. [given, F1, step 1.1, step 3.1, algebra] ∎
