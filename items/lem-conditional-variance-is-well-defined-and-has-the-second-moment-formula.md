---
id: lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula
kind: lemma
title: "Conditional variance is well-defined and has the second-moment formula"
status: draft
origin: pipeline
deps: [def-conditional-variance, thm-taking-out-what-is-known, cor-conditional-lp-contraction, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice, cor-cauchy-schwarz-inequality-for-l-two, lem-conditioning-a-known-variable-and-an-independent-variable]
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

Assume AC. For real $X\in L^2(P)$, conditional variance is an integrable nonnegative class independent of representatives and satisfies $\operatorname{Var}(X\mid\mathcal G)=E[X^2\mid\mathcal G]-(E[X\mid\mathcal G])^2$ almost surely.

## Facts & Assumptions

**Given:** AC, real $X\in L^2(P)$, a sub-sigma-algebra G and the proposed conditional-variance definition.

[F1] Conditional variance is the conditional expectation of the squared residual. ([[def-conditional-variance]])

[F2] The conditional mean of X is square integrable. ([[cor-conditional-lp-contraction]])

[F3] Products of $L^2$ functions are integrable. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F4] The known factor can be taken outside after product integrability is checked. ([[thm-taking-out-what-is-known]])

[F5] Conditional expectation is positive and linear. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F6] Almost-everywhere equal integrable functions have identical event integrals. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[F7] Conditional expectation fixes an integrable known variable. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

## Proof

**Proof technique:** direct.

1.1 Write $U=E[X\mid\mathcal G]$. It is in $L^2$ by [F2]. Since $(X-U)^2\le2X^2+2U^2$, the squared residual is integrable; it is nonnegative and measurable. Thus [F1] exists as an integrable nonnegative class by [F5]. If X or U is replaced by an almost-surely equal measurable representative, the square changes only on the union of those two measurable null sets. Its event integrals are unchanged by [F6], so its conditional class is unchanged. [F1, F2, F5, F6]

2.1 The product XU is integrable by [F3]; U is finite and G-measurable. Hence [F4] yields $E[XU\mid\mathcal G]=U E[X\mid\mathcal G]=U^2$. Also U squared is integrable and G-measurable, so [F7] gives $E[U^2\mid\mathcal G]=U^2$. Expanding the residual square and using [F5] gives $E[(X-U)^2\mid\mathcal G]=E[X^2\mid\mathcal G]-2U^2+U^2=E[X^2\mid\mathcal G]-U^2$. All three conditional inputs are integrable, so the subtraction involves finite classes only. [step 1.1, F3, F4, F5, F7] ∎

## Source notes

Durrett Theorems 4.1.9, 4.1.11, 4.1.14–4.1.15, printed pp.210–213. The local square expansion supplies the formula and checks every product before taking-out.
