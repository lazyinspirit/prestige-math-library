---
id: thm-real-power-continuity-and-derivatives
kind: theorem
title: "Continuity and derivatives of positive-base real powers"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power, thm-logarithm-derivative-and-integral, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-differentiable-implies-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

For $a>0$, the function $x\mapsto a^x$ is continuous on $\mathbb R$ and
$$(a^x)'=a^x\log a.$$
For $\alpha\in\mathbb R$, the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$, with
$$(x^\alpha)'=\alpha x^{\alpha-1}.$$

## Facts & Assumptions

**Given:** A positive base $a$, a real exponent $\alpha$, and $x>0$.

[L1] $a^x=\exp(x\log a)$ and $x^\alpha=\exp(\alpha\log x)$ ([[def-real-power]]).

[L2] $\log'(x)=1/x$ on $(0,\infty)$ and $\exp'(u)=\exp(u)$ ([[thm-logarithm-derivative-and-integral]], [[thm-derivative-of-exponential]]).

[L3] The chain rule and algebra of derivatives apply to differentiable real functions, and differentiability implies continuity ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 The chain rule applied to $a^x=\exp(x\log a)$ gives $(a^x)'=\exp(x\log a)\log a=a^x\log a$. [L1, L2, L3]

1.2 The chain rule applied to $x^\alpha=\exp(\alpha\log x)$ gives $(x^\alpha)'=\exp(\alpha\log x)\alpha/x=\alpha x^{\alpha-1}$. [L1, L2, L3]

2.1 Both functions are continuous on their stated domains because the displayed derivatives exist there. [step 1.1, step 1.2, L3] ∎
