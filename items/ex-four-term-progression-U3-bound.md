---
id: ex-four-term-progression-U3-bound
kind: example
title: "A singleton indicator in the four-term progression $U^3$ bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
aliases: []
deps: [thm-generalized-von-neumann-for-k-term-progressions,
       def-gowers-uniformity-norm-on-finite-cyclic-groups,
       def-integers-modulo-n,
       thm-integers-modulo-n-basic-algebra]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references: []
---

## Example

Let $p>8$ be prime, $G=\mathbb Z/p\mathbb Z$, $f_0=1_{\{0\}}$, and $f_1=f_2=f_3=1$. Define

$$\Lambda_4:=p^{-2}\sum_{x,r\in G}\prod_{j=0}^{3}f_j(x+jr),$$

and define $\|f\|_{U^3(G)}$ as the nonnegative eighth root of

$$\mathbb E_{x,h_1,h_2,h_3\in G}\prod_{\omega\in\{0,1\}^3}\mathcal C^{|\omega|}f(x+\omega\cdot h),$$

where the average is uniform over all $p^4$ tuples, $|\omega|=\omega_1+\omega_2+\omega_3$, $\omega\cdot h=\sum_{i=1}^3\omega_i h_i$, and $\mathcal C^m$ is conjugation for odd $m$ and the identity for even $m$. Then $\Lambda_4=1/p$, $\|f_0\|_{U^3}=p^{-1/2}$, and $\|f_1\|_{U^3}=\|f_2\|_{U^3}=\|f_3\|_{U^3}=1$; hence the theorem gives the explicit inequality $1/p\le p^{-1/2}$.

## Facts & Assumptions

**Given:** A prime $p>8$, $G=\mathbb Z/p\mathbb Z$, and the four functions specified in the example.

[F1] For $k=4$, prime $p>2k$, and functions bounded in magnitude by $1$, the normalized progression average is at most the minimum of their $U^3$ norms ([[thm-generalized-von-neumann-for-k-term-progressions]]).

[F2] The $U^3$ norm is the unique nonnegative eighth root of the normalized alternating $3$-cube average ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F3] The set $G=\mathbb Z/p\mathbb Z$ consists of the congruence classes modulo $p$ ([[def-integers-modulo-n]]).

[F4] Addition modulo $p$ makes $G$ a group, so $x+h=0$ implies $h=-x$ ([[thm-integers-modulo-n-basic-algebra]]).

## Verification

1.1 In the progression sum, the product is nonzero exactly when $x=0$, since $f_0$ is the indicator of $\{0\}$ and the other functions are $1$. For every $r\in G$ there is exactly one such pair $(x,r)$, out of $p^2$ pairs, so $\Lambda_4=p/p^2=1/p$. [given, F3]

1.2 The alternating cube product for $f_0$ is $1$ exactly when every vertex $x+\omega\cdot h$ is $0$. The zero vertex gives $x=0$, and the three unit-coordinate vertices then give $h_1=h_2=h_3=0$ because addition in $G$ has inverses; conversely this one tuple makes every vertex zero. Hence the cube average is $1/p^4$, and its unique nonnegative eighth root is $p^{-1/2}$. For a constant function $1$, every cube product is $1$, so its $U^3$ norm is $1$. [F2, F4, given, algebra]

2.1 The four functions are $1$-bounded and satisfy the theorem's prime and length hypotheses, so $|\Lambda_4|\le\min(p^{-1/2},1,1,1)=p^{-1/2}$. Step 1.1 gives the claimed left side, and step 1.2 gives the stated norm values. [given, F1, step 1.1, step 1.2] ∎
