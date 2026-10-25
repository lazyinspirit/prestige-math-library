---
id: ex-real-gamma-and-beta-special-values
kind: example
title: 'Special values of the real Gamma and Beta functions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, thm-real-beta-gamma-identity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §§1.2, 1.4, 2.2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Example

The real Gamma and Beta functions have the values

$$\Gamma(1)=1,\quad\Gamma(2)=1,\quad\Gamma(3)=2,\quad\Gamma(1/2)=\sqrt\pi,\quad\Gamma(3/2)=\frac{\sqrt\pi}{2},\quad B(1,1)=1,\quad B(2,3)=\frac1{12}.$$

## Facts & Assumptions

**Given:** The displayed positive arguments.

[F1] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F2] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

[F3] For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[thm-real-beta-gamma-identity]]).

## Verification

**Proof technique:** direct.

1.1 Repeated use of [F1] gives $\Gamma(1)=1$, $\Gamma(2)=1$, and $\Gamma(3)=2$. [F1, algebra]

1.2 Fact [F2] and [F1] give $\Gamma(1/2)=\sqrt\pi$ and $\Gamma(3/2)=(1/2)\sqrt\pi$. [F1, F2, algebra]

2.1 Substituting the integer values into [F3] gives $B(1,1)=1$ and $B(2,3)=1\cdot2/24=1/12$. [step 1.1, F3, algebra] ∎
