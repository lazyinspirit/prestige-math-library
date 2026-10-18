---
id: prop-differential-graded-algebra-induces-an-a-infinity-structure
kind: proposition
title: "A differential graded algebra is an A∞-algebra with no higher products"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-differential-graded-algebra
  - def-koszul-sign-rule-for-graded-tensors
  - lem-field-is-a-commutative-ring
  - lem-low-arity-stasheff-identities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§9.2.1 and 9.2.5"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $k$ be a field and let $(A,d,\mu)$ be a cohomological differential graded
algebra over $k$ in the convention of
[[def-differential-graded-algebra]]. Put $m_1=d$, $m_2=\mu$, and $m_n=0$ for
all $n\ge3$. Then these maps make $A$ an uncurved cohomological A∞-algebra
in the unsuspended convention of [[def-a-infinity-algebra]].

## Facts & Assumptions

**Given:** A field $k$ and a cohomological differential graded algebra
$(A,d,\mu)$ over $k$.

[F1] [[def-a-infinity-algebra]]: the maps $m_n$ must have degree $2-n$ and
satisfy the all-arity Stasheff identity.

[F2] [[def-differential-graded-algebra]]: the DGA multiplication is
associative of degree zero, $d$ has degree $+1$ and $d^2=0$, and for
homogeneous $a,b$,
$d(ab)=d(a)b+(-1)^{|a|}a d(b)$.

[F3] [[lem-field-is-a-commutative-ring]]: the field $k$ is a commutative ring,
as required by the DGA definition.

[F4] [[lem-low-arity-stasheff-identities]]: the first three A∞ equations are
the square-zero, derivation, and associator-homotopy identities displayed
there.

## Proof

1.1 The maps have the required degrees: $m_1=d$ has degree $+1=2-1$, $m_2=\mu$ has degree $0=2-2$, and each zero map $m_n$ for $n\ge3$ is a homogeneous map of degree $2-n$. The ring and field hypotheses agree by [F3]. [given, F1, F2, F3]

1.2 By [F2], $d^2=0$ and $d$ satisfies the signed Leibniz rule, so the first two identities of [F4] hold for $m_1=d$ and $m_2=\mu$. [F2, F4]

1.3 Since $m_3=0$, the third identity of [F4] reduces to $\mu(\mu\otimes1)-\mu(1\otimes\mu)=0$, which is associativity from [F2]. [F2, F4, algebra]

2.1 For $n\ge4$, any nonzero summand in the Stasheff sum would require both the inner arity $s$ and the outer arity $r+1+t$ to lie in $\{1,2\}$. But $n=r+s+t=s+(r+1+t)-1\le3$, contradicting $n\ge4$. Thus every term in each such sum is zero. [F1, step 1.1, algebra]

3.1 Steps 1.2, 1.3, and 2.1 verify the Stasheff identity in every arity, so the specified maps define the claimed A∞-structure. [step 1.2, step 1.3, step 2.1] ∎

