---
id: thm-transfer-matrix-cofactor-formula
kind: theorem
title: 'Transfer-matrix theorem: weighted-walk generating functions are cofactors of $I-xA$ divided by $\det(I-xA)$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-weighted-walks-are-entries-of-transfer-matrix-powers, lem-formal-matrix-geometric-series, thm-formal-power-series-ring-and-polynomial-embedding, def-matrix-minors-cofactors-and-adjugate, thm-adjugate-identity-over-a-commutative-ring, cor-inverse-matrix-by-adjugate, def-determinant-of-a-square-matrix, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.7.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "J. Gallier and J. Quaintance, Linear Algebra for Computer Vision, Robotics, and Machine Learning, Section 6.4"
      url: "https://www.cis.upenn.edu/~cis5150/linalg-I-f.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let a finite weighted directed multigraph have $p\ge1$ vertices and transfer matrix $A$, and put $M(x)=I_p-xA$. For vertices $u,v$,

$$\sum_{n\ge0}\left(\sum_{W:u\leadsto v,\ |W|=n}w(W)\right)x^n=(M^{-1})_{uv}=\frac{(-1)^{u+v}\det M^{(v,u)}}{\det M}.$$

The quotient is a rational formal power series over $R$ because $\det M$ has constant coefficient $1_R$.

## Facts & Assumptions

**Given:** A nonempty finite weighted directed multigraph over $R$, its $p\times p$ transfer matrix $A$, vertices $u,v$, and $M=I_p-xA$.

[L1] The $(u,v)$ entry of $A^n$ is the total weight of length-$n$ walks from $u$ to $v$ ([[thm-weighted-walks-are-entries-of-transfer-matrix-powers]]).

[L2] Formally, $M^{-1}=\sum_{n\ge0}A^nx^n$ over every commutative coefficient ring ([[lem-formal-matrix-geometric-series]]).

[L3] The adjugate satisfies $\operatorname{adj}(M)_{uv}=(-1)^{u+v}\det M^{(v,u)}$ ([[def-matrix-minors-cofactors-and-adjugate]]).

[L4] For a positive-sized square matrix, $M\operatorname{adj}(M)=\operatorname{adj}(M)M=\det(M)I$ ([[thm-adjugate-identity-over-a-commutative-ring]]).

[L5] If $\det(M)$ is a unit, then $M^{-1}=\det(M)^{-1}\operatorname{adj}(M)$ ([[cor-inverse-matrix-by-adjugate]]).

[L6] The determinant is the finite Leibniz sum over permutations ([[def-determinant-of-a-square-matrix]]).

[L7] A formal series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[L8] Cauchy multiplication makes $R\llbracket x\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the $(u,v)$ entry of $M^{-1}$ is $\sum_{n\ge0}(A^n)_{uv}x^n$, and [L1] identifies each coefficient with the total weight of the corresponding walks. [given, L1, L2]

1.2 Setting $x=0$ gives $M(0)=I_p$. In the Leibniz sum [L6], only the identity permutation contributes to $\det(I_p)$, so $\det M$ has constant coefficient $1_R$ and is a unit by [L7]. [given, L6, L7]

2.1 Apply [L4] and [L5] over the commutative ring $R\llbracket x\rrbracket$ from [L8] to obtain $M^{-1}=\det(M)^{-1}\operatorname{adj}(M)$. [step 1.2, L4, L5, L8]

3.1 Taking the $(u,v)$ entry in step 2.1 and using [L3] gives $(M^{-1})_{uv}=(-1)^{u+v}\det M^{(v,u)}/\det M$. [step 2.1, L3]

4.1 Combining steps 1.1 and 3.1 proves the formula, with no analytic hypothesis. The assumption $p\ge1$ is exactly the positive-size domain of [L3] through [L6]. [step 1.1, step 3.1, L3, L6] ∎
