---
id: thm-conditional-fatou-and-dominated-convergence
kind: theorem
title: "Conditional fatou and dominated convergence"
status: draft
origin: pipeline
deps: [thm-conditional-monotone-convergence, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-dominated-convergence, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For nonnegative measurable $X_n$, $E[\liminf_n X_n\mid\mathcal G]\le\liminf_n E[X_n\mid\mathcal G]$ almost surely, in the extended sense. If real-valued measurable $X_n$ and $X$ satisfy $X_n\to X$ almost surely and $|X_n|\le W$ almost surely for one nonnegative $W\in L^1(P)$, then $E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ almost surely and in $L^1$.

## Facts & Assumptions

**Given:** AC and nonnegative measurable $X_n$; separately real-valued measurable $X_n$ and $X$ such that $X_n\to X$ almost surely and $|X_n|\le W$ for one nonnegative integrable $W$.

[F1] Extended conditional expectation preserves order and increasing limits. ([[thm-conditional-monotone-convergence]])

[F2] Integrable conditional expectation is linear and satisfies the modulus bound. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] A common integrable dominator and almost-sure convergence give integrability and $L^1$ convergence. ([[thm-dominated-convergence]])

[F4] Under AC integrable conditional classes and their versions exist. ([[def-conditional-expectation-as-an-ae-class]])

[F5] Countable infima and liminf of measurable functions are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

## Proof

**Proof technique:** direct.

1.1 Put $Z_n=\inf_{k\ge n}X_k$. These are measurable by [F5], nonnegative, and increase to $\liminf_kX_k$. For each $k\ge n$, [F1] gives $E[Z_n\mid\mathcal G]\le E[X_k\mid\mathcal G]$ almost surely. There are only countably many pairs $(n,k)$; after removing their null union, take the infimum over $k\ge n$ and then the increasing limit in $n$. Conditional MCT gives exactly the claimed Fatou inequality. [F1, F5]

2.1 In the dominated case, $|X|\le W$ almost surely, so [F3] gives $X\in L^1$. Set $T=E[W\mid\mathcal G]$, $U_n=E[X_n\mid\mathcal G]$ and $U=E[X\mid\mathcal G]$. These are finite almost surely. Apply step 1.1 to $W+X_n$ and $W-X_n$, which are nonnegative. By linearity this gives $T+U\le T+\liminf U_n$ and $T-U\le T-\limsup U_n$. The modulus bound gives $|U_n|,|U|\le T$ outside one common null set. Subtracting the finite $T$ yields $U\le\liminf U_n\le\limsup U_n\le U$, hence almost-sure convergence. [step 1.1, F2, F3, F4]

3.1 The differences $|U_n-U|$ tend to zero almost surely and are bounded by $2T$, with $ET=EW<\infty$. Ordinary DCT therefore gives $E|U_n-U|\to0$, the claimed $L^1$ convergence. [step 2.1, F2, F3] ∎

## Source notes

Van der Vaart Lemma 1.10(ii)–(iii), printed p.4, full statements read; ordinary MCT, conditional order and the two nonnegative dominated sequences supply the proof here.
