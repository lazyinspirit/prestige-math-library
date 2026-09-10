---
id: cor-conditional-cauchy-schwarz-inequality
kind: corollary
title: "Conditional cauchy schwarz inequality"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, lem-rat-embeds-dense, thm-rationals-countable]
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

Assume AC. For real $X,Y\in L^2(P)$, $|E[XY\mid\mathcal G]|^2\le E[X^2\mid\mathcal G]E[Y^2\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC, real $X,Y\in L^2(P)$ and a sub-sigma-algebra G.

[F1] XY is integrable because X and Y are square integrable. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F2] Integrable inputs have finite conditional versions under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F3] Conditional positivity and linearity hold. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Rationals approximate every real parameter. ([[lem-rat-embeds-dense]])

[F5] There are only countably many rational parameters. ([[thm-rationals-countable]])

## Proof

**Proof technique:** direct.

1.1 By [F1], XY is integrable. Fix finite versions $a=E[X^2\mid\mathcal G]$, $b=E[XY\mid\mathcal G]$, and $c=E[Y^2\mid\mathcal G]$. Positivity gives $a,c\ge0$ almost surely. For every rational t, $(X+tY)^2$ is integrable and nonnegative, and linearity and positivity give $a+2tb+t^2c\ge0$ almost surely. By [F5] one null union removes every rational-parameter exception. [F1, F2, F3, F5]

2.1 At a remaining point, the polynomial $q(t)=a+2tb+t^2c$ is continuous: $q(t)-q(s)=(t-s)(2b+c(t+s))$, which tends to zero as $t\to s$. If q were negative at any real s, it would stay negative on an interval around s, containing a rational by [F4], contrary to step 1.1. Thus q is nonnegative for all real t. [step 1.1, F4]

3.1 If $c=0$ and $b\ne0$, the choice $t=-(a+1)/(2b)$ gives $q(t)=-1$, impossible; hence $b=0$ and $b^2\le ac$. If $c>0$, put $t=-b/c$ to get $0\le a-b^2/c$, so again $b^2\le ac$. The cases cover every remaining point and prove the conditional inequality. [step 2.1] ∎

## Source notes

Durrett §4.1.2, Theorem 4.1.9(a)–(b), printed pp.210–211, supplies positivity and linearity. The conditional quadratic argument is written here in full, using rational parameters and explicit zero-coefficient handling.
