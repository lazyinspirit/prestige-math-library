---
id: fs-tonelli-holds-without-sigma-finiteness
kind: false-statement
title: "FALSE: Tonelli's theorem still holds without any sigma-finiteness hypothesis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, def-finite-sigma-finite-and-semifinite-measures]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., remark after Theorem 2.37"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

For arbitrary measure spaces, every nonnegative product-measurable function
satisfies Tonelli's theorem.

## Facts & Assumptions

**Given:** Lebesgue measure $\mu$ on $[0,1]$, counting measure $\nu$ on $[0,1]$, the diagonal $D:=\{(x,y)\in[0,1]^2:x=y\}$, and the indicator function $f:=\mathbf 1_D$.

[L1] Tonelli's theorem holds on sigma-finite product spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[A1] Counting measure on the uncountable set $[0,1]$ is not sigma-finite in the sense of [[def-finite-sigma-finite-and-semifinite-measures]].

[A2] For every $x,y\in[0,1]$, the diagonal sections are $D_x=\{x\}$ and $D^y=\{y\}$.

## Refutation

**Proof technique:** direct.

1.1 The diagonal $D$ is closed in $[0,1]^2$, so $f=\mathbf 1_D$ is a nonnegative measurable function; by [A1], it lives on a product space outside the sigma-finite scope of [L1]. [A1, algebra]

1.2 For fixed $x\in[0,1]$, [A2] gives $\nu(D_x)=1$, so $$\int_{[0,1]} \nu(D_x)\,d\mu(x)=\int_0^1 1\,dx=1.$$ [A2, algebra]

1.3 For fixed $y\in[0,1]$, [A2] gives $\mu(D^y)=0$, so $$\int_{[0,1]} \mu(D^y)\,d\nu(y)=\int_{[0,1]} 0\,d\nu=0.$$ [A2, algebra]

2.1 Steps 1.2 and 1.3 give unequal iterated integrals for the same nonnegative measurable function on a non-sigma-finite product space. Hence the displayed universal claim is false, and [L1] cannot be extended by simply deleting sigma-finiteness. [L1, step 1.1, step 1.2, step 1.3] ∎
