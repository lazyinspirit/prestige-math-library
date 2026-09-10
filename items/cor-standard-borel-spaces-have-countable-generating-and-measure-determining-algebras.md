---
id: cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
kind: corollary
title: "Standard borel spaces have countable generating and measure determining algebras"
status: draft
origin: pipeline
deps: [thm-standard-borel-spaces-admit-bimeasurable-real-codings, thm-dynkin-pi-lambda, thm-seven-generators-of-the-borel-sigma-algebra-on-r, def-axiom-of-choice, thm-rationals-countable, thm-countable-union-of-countable, def-countable-choice, lem-rat-embeds-dense]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Every standard-Borel space $(E,\mathcal S)$ has a countable algebra $\mathcal A$ which generates $\mathcal S$, separates points, and determines finite measures: if finite measures $\mu,\nu$ agree on $\mathcal A$, then $\mu=\nu$. In particular it determines probability measures.

## Facts & Assumptions

**Given:** AC and a standard-Borel space $(E,\mathcal S)$; in the determination assertion, two finite measures agreeing on the constructed algebra.

[F1] There is a bimeasurable bijection $f:E\to B$ with $B\subseteq[0,1]$ Borel. ([[thm-standard-borel-spaces-admit-bimeasurable-real-codings]])

[F2] The rational cuts can be enumerated. ([[thm-rationals-countable]])

[F3] Rational right rays generate real Borel sets; their complementary closed left rays do also. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[F4] Under countable choice a countable union of finite sets is countable. ([[thm-countable-union-of-countable]])

[F5] Countable choice selects from each nonempty set in a sequence. ([[def-countable-choice]])

[F6] AC supplies that countable choice by restriction of a choice function. ([[def-axiom-of-choice]])

[F7] A lambda-system containing a pi-system contains its generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F8] Rational cuts separate two distinct real numbers. ([[lem-rat-embeds-dense]])

## Proof

**Proof technique:** direct.

1.1 Fix $f$ from [F1]. Enumerate the pullbacks $H_q=f^{-1}[B\cap(-\infty,q]]$ using [F2]. Let $\mathcal A_n$ be the Boolean algebra on the first $n$ pullbacks, with $\mathcal A_0=\{\varnothing,E\}$. Its atoms are the at most $2^n$ intersections obtained by taking each generator or its complement; every member is a union of atoms. Thus each $\mathcal A_n$ is finite, and $\mathcal A=\bigcup_n\mathcal A_n$ is an algebra: any two elements lie in a common $\mathcal A_n$. [F1, F2]

2.1 AC implies [F5], so [F4] makes $\mathcal A$ countable. This is the exact countable-choice use for enumerating the finite algebras. The trace of the generators of [F3] generates $\mathcal B(B)$, so bimeasurability of $f$ gives $\sigma(\mathcal A)=\mathcal S$. If $x\ne y$, injectivity gives different codes; [F8] provides a rational between them, and its pullback contains exactly the lower-coded point. [step 1.1, F1, F3, F4, F5, F6, F8]

3.1 For finite $\mu,\nu$ agreeing on $\mathcal A$, their total masses agree because $E\in\mathcal A$. The equality class $\mathcal D=\{A\in\mathcal S:\mu(A)=\nu(A)\}$ contains $E$, is closed under complements by subtracting from the common finite total, and under countable disjoint unions by countable additivity. It is a lambda-system containing the pi-system $\mathcal A$. By [F7], $\mathcal S\subseteq\mathcal D$. This also covers zero total mass and $E=\varnothing$; finiteness prevents subtraction of infinite totals. [step 1.1, step 2.1, F7] ∎

## Source notes

Durrett Theorem 2.1.22 (printed pp.53–54) motivates real coding. The finite-algebra construction and finite-total lambda-system argument are derived here from the exact local countability and pi-lambda statements; arbitrary infinite measures are outside the claim.
