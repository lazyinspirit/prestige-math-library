---
id: ex-a-differential-graded-algebra-is-its-own-left-dg-module
kind: example
title: "A differential graded algebra as its regular left module"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-differential-graded-algebra
  - def-differential-graded-module
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $A$ be any cohomological DGA over a commutative ring $R$. Let $M=A$ as a
graded $R$-module, let $A$ act on $M$ by left multiplication, and let
$d_M=d_A$.

## Facts & Assumptions

**Given:** A cohomological DGA $A$ over $R$ with its multiplication and differential. Verify that its regular left module is a differential graded module.

[F1] [[def-differential-graded-algebra]]: The multiplication on $A$ is $R$-bilinear, associative and unital, has degree zero, and has central $R$-action.

[F2] [[def-differential-graded-algebra]]: For homogeneous $a\in A^p$ and $b\in A^q$, the differential satisfies $d^{p+q}(ab)=d^p(a)b+(-1)^p a d^q(b)$.

[F3] [[def-differential-graded-module]]: A cohomological left differential graded $A$-module is a graded unital left $A$-module whose action has degree zero, together with a degree-one square-zero differential satisfying $d_M(am)=d_A(a)m+(-1)^p a d_M(m)$ for homogeneous $a\in A^p$.

[F4] [[def-differential-graded-algebra]]: The differential consists of $R$-linear maps $d^n:A^n\to A^{n+1}$ with $d^{n+1}d^n=0$.

## Verification

1.1 Associativity and the unit of $A$ make left multiplication a unital left $A$-action on $M=A$, and degree preservation gives $A^pM^q\subseteq M^{p+q}$; zero acts by zero and the unit acts as the identity. [F1, F3, given, algebra]

1.2 The differential $d_M=d_A$ has degree $+1$ and squares to zero by [F4]. For homogeneous $a,m\in A$, the required identity $d_M(am)=d_A(a)m+(-1)^{|a|}a d_M(m)$ is the DGA Leibniz identity [F2]. [F2, F3, F4, given]

2.1 The action and differential therefore satisfy every condition in [F3], so $A$ is a left DG module over itself. [F3, step 1.1, step 1.2] ∎
