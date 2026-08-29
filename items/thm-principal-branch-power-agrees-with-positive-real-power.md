---
id: thm-principal-branch-power-agrees-with-positive-real-power
kind: theorem
title: "On positive reals, the principal branch power agrees with the published real power"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-power-from-holomorphic-logarithm-branch, def-real-power, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

For $x>0$ and real $\alpha\in\mathbb R$, the principal branch power $x^\alpha_{\operatorname{Log}}:=\exp(\alpha\operatorname{Log}x)$ of [[def-complex-power-from-holomorphic-logarithm-branch]] equals the published real power $x^\alpha$ of [[def-real-power]]:

$$x^\alpha_{\operatorname{Log}}=x^\alpha\qquad(x>0,\ \alpha\in\mathbb R).$$

## Facts & Assumptions

**Given:** A positive real $x>0$ and a real exponent $\alpha\in\mathbb R$.

[F1] On the slit plane, the principal branch power is $z^\alpha_{\operatorname{Log}}:=\exp(\alpha\operatorname{Log}z)$, where $\operatorname{Log}$ is the holomorphic principal logarithm branch ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F2] For $a>0$ and $x\in\mathbb R$, the real power is $a^x:=\exp(x\log a)$ ([[def-real-power]]).

[F3] For real $x$, the complex value $\exp(x+0i)$ equals the published real exponential $e^x$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** direct.

1.1 $\operatorname{Log}x=\log x+i0$, the real logarithm embedded in $\mathbb C$: the polar form of $x>0$ uses angle $0$. [F1, given]

2.1 Steps 1.1, [F1], [F3], and [F2] give $x^\alpha_{\operatorname{Log}}=\exp((\alpha\log x)+i0)=e^{\alpha\log x}=x^\alpha$. [F1, F2, F3, step 1.1, algebra] ∎
