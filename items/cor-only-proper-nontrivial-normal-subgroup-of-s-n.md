---
id: cor-only-proper-nontrivial-normal-subgroup-of-s-n
kind: corollary
title: 'For $n\ge5$, the only proper nontrivial normal subgroup of $S_n$ is $A_n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-alternating-group-is-simple-for-n-at-least-five, cor-alternating-group-is-normal-and-has-half-the-elements, cor-center-of-symmetric-group-is-trivial, thm-sign-is-a-homomorphism, def-alternating-group, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: frontier-11
---

## Statement

For $n\ge5$, the normal subgroups of $S_n$ are
$\{1\}$, $A_n$, and $S_n$. Thus $A_n$ is the only proper nontrivial one.

## Facts & Assumptions

**Given:** $n\ge5$ and $N\trianglelefteq S_n$.

[F1] $A_n$ is normal in $S_n$ and has index $2$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

[F2] $A_n$ is simple for $n\ge5$ ([[thm-alternating-group-is-simple-for-n-at-least-five]]).

[F3] Sign is a homomorphism ([[thm-sign-is-a-homomorphism]]) with kernel $A_n$ ([[def-alternating-group]]).

[F4] $Z(S_n)=\{1\}$ for $n\ge3$ ([[cor-center-of-symmetric-group-is-trivial]]).

[F5] A subgroup is normal exactly when it is invariant under conjugation ([[def-normal-subgroup]]).

## Proof

**Proof technique:** cases.

1.1 The intersection $N\cap A_n$ is normal in $A_n$ by [F5], so [F2] makes it either $\{1\}$ or $A_n$. [F2, F5, algebra]

1.2 Suppose $N\cap A_n=A_n$. [assume-case full]

1.3 Suppose $N\cap A_n=\{1\}$. [assume-case trivial]

2.1 In the case of step 1.2, $A_n\subseteq N$. Since [F1] gives only two cosets, $N=A_n$ or $N=S_n$. [F1, step 1.2, algebra]

2.2 In the case of step 1.3, the restriction of sign to $N$ is injective by [F3], so $|N|\le2$. [F3, step 1.3, algebra]

3.1 If the subgroup in step 2.2 were nontrivial, it would have a unique nonidentity element $t$. Normality [F5] would make every conjugate of $t$ the same unique element, so $t\in Z(S_n)$, contradicting [F4]. Thus this case gives $N=\{1\}$. [F4, F5, step 2.2]

4.1 The alternatives in step 1.1 are exhaustive, and steps 2.1 and 3.1 give exactly $N\in\{\{1\},A_n,S_n\}$. [step 1.1, step 2.1, step 3.1, cases-exhaustive] ∎
