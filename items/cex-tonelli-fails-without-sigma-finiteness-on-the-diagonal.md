---
id: cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal
kind: counterexample
title: "The diagonal under Lebesgue times counting measure shows that Tonelli needs sigma-finiteness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 46"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

Tonelli's theorem holds without any sigma-finiteness hypothesis.

## Counterexample

**Proof technique:** direct.

Let $X=Y=[0,1]$, let $\mu$ be Lebesgue measure on $X$, let $\nu$ be counting
measure on $Y$, and let
$$D:=\{(x,y)\in[0,1]^2 : x=y\}.$$

## Facts & Assumptions

**Given:** Lebesgue measure $\mu$ on $[0,1]$, counting measure $\nu$ on $[0,1]$, and the diagonal set $D$.

[A1] For every $x,y \in [0,1]$, the horizontal and vertical sections of the diagonal are $D_x=\{x\}$ and $D^y=\{y\}$.

## Verification

1.1 For fixed $x \in [0,1]$, the section $D_x=\{x\}$ has counting measure $1$, so $$\int_X \nu(D_x)\,d\mu(x)=\int_0^1 1\,dx=1.$$ [given, A1]

2.1 For fixed $y \in [0,1]$, the section $D^y=\{y\}$ has Lebesgue measure $0$, so $$\int_Y \mu(D^y)\,d\nu(y)=\int_{[0,1]} 0\,d\nu=0.$$ The iterated integrals are unequal, so Tonelli fails once the counting-measure factor is not sigma-finite. [A1] ∎
