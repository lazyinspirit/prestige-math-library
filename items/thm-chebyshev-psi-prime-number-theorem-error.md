---
id: thm-chebyshev-psi-prime-number-theorem-error
title: "Chebyshev psi prime number theorem error"
kind: theorem
status: published
origin: pipeline
deps: [lem-zeta-explicit-formula-zero-free-error-balance, thm-zeta-bounds-in-classical-zero-free-region]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.9, pp.179\u2013181; independently Kedlaya Theorem 7.7"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

There is an absolute $c>0$ such that for $x\ge2$,
$$\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-zeta-explicit-formula-zero-free-error-balance]]: For $x\ge2$ and finite $T\ge3$, the classical region and truncated explicit formula give $\psi(x)-x=O\left(xe^{-c_0\log x/\log(T+2)}\log^2T+\frac{x\log^2(xT)}{T}+\log x\right).$ Constants may be enlarged and the positive region constant decreased. The zero sum used in the proof is finite.

[F2] [[thm-zeta-bounds-in-classical-zero-free-region]]: There are $0<c_2<c_1<c_0$ and $C>0$ such that for $|t|\ge3$ and $\sigma\ge1-c_1/\log(|t|+2)$, $|\zeta'/\zeta(\sigma+it)|\le C\log(|t|+2)\le C\log^2(|t|+2).$ In the narrower $c_2$ region, $|1/\zeta(s)|\le C\log(|t|+2)$. For $|t|\le3$ and $1-c_2/\log(|t|+2)\le\sigma\le2$, $\zeta'/\zeta(s)+1/(s-1)=O(1),\qquad 1/\zeta(s)=O(|s-1|),$ with removable interpretations at one.

## Proof

1.1 Put $u=\sqrt{\log x}$ and choose a fixed $A>0$. For sufficiently large x take $T=e^{Au}\ge3$. Then $\log(T+2)=Au+O(e^{-Au})$, so the finite-zero term is $O(xu^2e^{-(c_0/A)u+o(1)})$, the truncation term is $O(xu^4e^{-Au})$, and the remaining error is $O(u^2)$. [F1]

2.1 Choose $0<c<\min(A,c_0/A)$. For any fixed k and positive epsilon, $u^ke^{-\epsilon u}$ is bounded; thus each error above is $O(xe^{-cu})$. Enlarging the constant over the initial compact x-range proves the assertion for all $x\ge2$. [step 1.1, algebra]

3.1 The contour interpretation is consistent with the same bound: take $\sigma_1=1-c_1/\log(T+2)$ with a sufficiently small region constant and $\sigma_0=1+1/\log x$. Throughout $|t|\le T$ the left edge stays in the proved region. At high heights the derivative is $O(\log T)$; integrating $1/|s|$ gives a vertical contribution $O(x^{\sigma_1}\log^2T)$, and horizontal edges give $O(x\log^2(xT)/T)$. At bounded height the pole-subtracted estimate bounds the derivative by $O(1+1/|s-1|)$; on the left edge its integral is $O(\log\log(T+2))$. Only the pole at one is crossed. These edge bounds explain the scale used in the finite-zero proof. [F2, step 1.1, step 2.1] ∎
