---
id: lem-random-subsum-verifies-all-quadratic-equations-with-constant-error
kind: lemma
title: "A random subsum checks all quadratic equations at once"
status: published
origin: pipeline
deps:
  - def-quadratic-equation-instance-and-tensor-code-oracles
  - lem-random-subsum-detects-a-nonzero-binary-vector
  - def-self-correction-of-a-noisy-linear-function
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2, proof of Theorem 18.21 Step 3, printed p. 367"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $(A_j,b_j)_{j=1}^M$ be a canonical QUADEQ instance over $N$ variables and
let $u\in\mathbb F_2^N$ fail at least one equation. For uniform
$z\in\mathbb F_2^M$, define
$$A(z)=\sum_{j=1}^M z_jA_j,\qquad b(z)=\sum_{j=1}^M z_jb_j.$$
Then the combined equation $A(z)\cdot(u\otimes u)=b(z)$ fails with probability
exactly $1/2$.

More generally, let $g:\mathbb F_2^{N\times N}\to\mathbb F_2$ and set
$G=\operatorname{WH}_{N^2}(u\otimes u)$ and
$\delta=2^{-N^2}|\{Y:g(Y)\ne G(Y)\}|$. The nonadaptive test that chooses
$z$ and $y$ independently and uniformly, queries $g(y)$ and
$g(y+A(z))$ (using the row-major tensor coordinates), and rejects when their
sum differs from $b(z)$ has rejection probability at least
$\frac12-2\delta$. It uses $M+N^2$ unbiased random bits and two symbol queries.

## Facts & Assumptions

**Given:** A canonical QUADEQ instance, a fixed candidate vector $u$, and the
fixed oracle table $g$.

[F1] Each equation is $A_j\cdot(u\otimes u)=b_j$ after flattening its
canonical coefficient matrix in row-major order.
([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F2] The intended tensor oracle is $G=\operatorname{WH}_{N^2}(u\otimes u)$;
for every tensor coordinate $q$, it satisfies
$G(q)=q\cdot(u\otimes u)$. ([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F3] For every nonzero $d\in\mathbb F_2^M$ and uniform $z$,
$\Pr[z\cdot d=1]=1/2$. ([[lem-random-subsum-detects-a-nonzero-binary-vector]])

[F4] The two-query self-corrector at request $q$ chooses uniform $y$ and
returns $g(y)+g(q+y)$. ([[def-self-correction-of-a-noisy-linear-function]])

## Proof

1.1 Put $d_j=A_j\cdot(u\otimes u)+b_j$. Since $u$ fails at least one equation, $d\ne0$. Linearity gives $A(z)\cdot(u\otimes u)+b(z)=z\cdot d$, so the combined equation fails exactly when $z\cdot d=1$; by [F3] this occurs with probability exactly $1/2$. [F1, F3, given, algebra]

1.2 Fix any requested tensor coordinate $q$. Let $E=\{y:g(y)\ne G(y)\}$, so $|E|/2^{N^2}=\delta$. Both $y$ and $q+y$ are uniform, and by [F4] the corrector returns $g(y)+g(q+y)$. Unless one of these two points lies in $E$, this equals $G(y)+G(q+y)=G(q)$ by linearity of the intended oracle in [F2]; a union bound therefore gives correction failure probability at most $2\delta$, uniformly for every $q$, including $q=0$. [F2, F4, given, algebra]

2.1 For the test, condition on each $z$ and set $q=A(z)$. By [F2] and [F1], on the event from step 1.1 the ideal value $G(q)=A(z)\cdot(u\otimes u)$ differs from $b(z)$; whenever the correction in step 1.2 returns $G(q)$, the test rejects. Its failure probability conditional on each $z$ is at most $2\delta$, so averaging gives $\Pr[\text{reject}]\ge\Pr[z\cdot d=1]-2\delta=\frac12-2\delta$, without any independence assumption between rejection and correction errors. [F1, F2, F4, step 1.1, step 1.2, algebra]

3.1 The test samples $M$ bits for $z$ and $N^2$ bits for $y$, computes both query locations before reading $g$, and makes exactly two symbol queries; thus it is nonadaptive and uses one combined equation instead of querying all $M$ original equations. If $M=0$, its premise is impossible; if $N=0$, the tensor domain is a singleton and the corrector queries that same coordinate twice, as allowed by [F4]. [F2, F4, step 2.1, construct, discharge-construct] ∎
