---
id: ex-optimizing-the-prime-number-theorem-contour-height
title: "Optimizing the prime number theorem contour height"
kind: example
status: draft
origin: pipeline
deps: [thm-chebyshev-psi-prime-number-theorem-error, lem-zeta-explicit-formula-zero-free-error-balance]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.9 proof"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Example

At $T=\exp(A\sqrt{\log x})$ for fixed $A>0$, the exponential rates of the finite-zero and truncation terms in the explicit-formula error balance are respectively $c_0/A$ and $A$. They therefore have the same square-root-logarithm scale, optimized when $A=\sqrt{c_0}$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-chebyshev-psi-prime-number-theorem-error]]: There is an absolute $c>0$ such that for $x\ge2$, $\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$

[F2] [[lem-zeta-explicit-formula-zero-free-error-balance]]: For $x\ge2$ and finite $T\ge3$, the classical region and truncated explicit formula give $\psi(x)-x=O\left(xe^{-c_0\log x/\log(T+2)}\log^2T+\frac{x\log^2(xT)}{T}+\log x\right).$ Constants may be enlarged and the positive region constant decreased. The zero sum used in the proof is finite.

## Verification

1.1 Put $u=\sqrt{\log x}$. The error-balance lemma gives respectively $O(xu^2e^{-(c_0/A)u+o(1)})$, $O(xu^4e^{-Au})$, and O(u squared). Thus any $c<\min(c_0/A,A)$ absorbs all polynomial factors. Equality of the two exponential rates occurs at $A=\sqrt{c_0}$; a fixed positive A already suffices. [F2, algebra]

2.1 Thus the choice $A=\sqrt{c_0}$ balances the two exponential rates at $\sqrt{c_0}$. More generally any fixed $A>0$ gives a positive decay rate $\min(c_0/A,A)$; bounded x can use $T=3$ and an enlarged constant. This is the square-root-logarithm decay scale recorded in the theorem-level estimate [F1]. [F2, F1, step 1.1, algebra] ∎
