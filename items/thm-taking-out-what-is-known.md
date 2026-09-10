---
id: thm-taking-out-what-is-known
kind: theorem
title: "Taking out what is known"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice]
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

Assume AC for existence. If $X\in L^1(P)$ and $Z$ is bounded real $\mathcal G$-measurable, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely. The identity also holds for finite real $\mathcal G$-measurable $Z$ whenever $ZX$ and $ZE[X\mid\mathcal G]$ are integrable. In fact $X,ZX\in L^1$ imply the latter integrability.

## Facts & Assumptions

**Given:** AC, real integrable X, and a real G-measurable factor Z; first assume Z bounded, then assume Z finite and ZX integrable (or explicitly both products integrable).

[F1] Conditional versions are integrable and satisfy all event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Linearity, expectation preservation and the conditional modulus bound hold. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] The event identities characterize the version up to almost-sure equality. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F4] Nonnegative measurable functions have increasing nonnegative simple approximations. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F5] Pointwise almost-everywhere convergence with an integrable majorant permits convergence of event integrals. ([[thm-dominated-convergence]])

[F6] Integrals of increasing nonnegative functions converge to the integral of the limit. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Write $U=E[X\mid\mathcal G]$. If $Z=\mathbf1_B$ with $B\in\mathcal G$, then for every $A\in\mathcal G$, $\int_A ZU=\int_{A\cap B}U=\int_{A\cap B}X=\int_A ZX$. The products are integrable and $ZU$ is $\mathcal G$-measurable, so uniqueness gives the identity. Finite sums of such indicators give the identity for bounded simple $Z$ by linearity. [F1, F2, F3]

2.1 If $|Z|\le M$, apply [F4] to $Z^+$ and $Z^-$ and subtract their approximations to obtain simple $Z_n\to Z$ with $|Z_n|\le M$. Then $|Z_nX|\le M|X|$ and $|Z_nU|\le M|U|$, both integrable majorants. By [F5] in each event identity of step 1.1, $\int_A ZU=\int_A ZX$. The limit $ZU$ is measurable and integrable, so [F3] proves the bounded case. [step 1.1, F4, F5, F3]

3.1 For finite measurable $Z$ with $ZX\in L^1$, set $V=E[|X|\mid\mathcal G]\ge0$ and $R_n=|Z|\wedge n$. The bounded case and expectation preservation imply $E[R_nV]=E[R_n|X|]$. MCT gives $E[|Z|V]=E|ZX|<\infty$. Since $|U|\le V$ almost surely, $E|ZU|\le E|ZX|<\infty$. [step 2.1, F2, F6]

4.1 Let $Z_n=\max(-n,\min(Z,n))$. For each event $A$ the bounded case gives $\int_A Z_nU=\int_A Z_nX$. Now $Z_nU\to ZU$ and $Z_nX\to ZX$, dominated by the integrable $|ZU|$ and $|ZX|$ respectively. DCT and uniqueness yield $E[ZX\mid\mathcal G]=ZU$. This proves both the stated two-product extension and its stronger integrability observation. [step 2.1, step 3.1, F5, F3]

5.1 The same indicator identity gives locality: if $X=Y$ almost surely on $B\in\mathcal G$, then $\mathbf1_BE[X\mid\mathcal G]=E[\mathbf1_BX\mid\mathcal G]=E[\mathbf1_BY\mid\mathcal G]=\mathbf1_BE[Y\mid\mathcal G]$ as classes. No assertion is made about arbitrary values on exceptional points. [step 1.1, F1] ∎

## Source notes

Durrett Theorem 4.1.14, printed pp.212–213; locality Theorem 4.1.2, printed p.206. The absolute-product integrability estimate is explicitly proved by ordinary MCT before the signed DCT limit; conditional MCT is not used.
