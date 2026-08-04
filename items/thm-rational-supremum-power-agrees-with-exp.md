---
id: thm-rational-supremum-power-agrees-with-exp
kind: theorem
title: "The rational-supremum construction of real powers agrees with the exponential construction"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-power-by-rational-supremum, def-real-power, thm-real-power-agrees-with-rational-exponent, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, thm-real-power-laws, lem-rat-embeds-dense, lem-sup-epsilon]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-dependency-repair
    delegated_by: owner
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

For every $a>0$ and $x\in\mathbb R$, the rational-supremum value $a^{[x]}$ of [[def-real-power-by-rational-supremum]] equals the exponential real power $a^x$ of [[def-real-power]].

## Facts & Assumptions

**Given:** A real $x$ and a positive base $a$.

[L1] For $a>1$, $S_a(x):=\{a^q:q\in\mathbb Q,\ q<x\}$ and $a^{[x]}:=\sup S_a(x)$; for $0<a<1$, $a^{[x]}:=1/\bigl((a^{-1})^{[x]}\bigr)$; and $1^{[x]}:=1$ ([[def-real-power-by-rational-supremum]]).

[L2] Rational powers agree with exponential real powers, and $t\mapsto a^t$ is continuous; if $a>1$, then $\log a>0$, so $t\mapsto a^t=\exp(t\log a)$ is strictly increasing ([[thm-real-power-agrees-with-rational-exponent]], [[thm-real-power-continuity-and-derivatives]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[def-real-power]]).

[L3] Rational numbers are dense in $\mathbb R$, and the epsilon characterisation identifies a supremum of a nonempty bounded-above set ([[lem-rat-embeds-dense]], [[lem-sup-epsilon]]).

[L4] For $a,b>0$ and $r,s\in\mathbb R$: $a^{r+s}=a^ra^s$, $(ab)^r=a^rb^r$, $(a/b)^r=a^r/b^r$, and $(a^r)^s=a^{rs}$ ([[thm-real-power-laws]]).



## Proof

**Proof technique:** direct.

1.1 Assume $a>1$. For every rational $q<x$, strict increase of $t\mapsto a^t$ gives $a^q<a^x$, so $a^x$ is an upper bound of $S_a(x)$. [L1, L2]

1.2 Given $\varepsilon>0$, continuity of $t\mapsto a^t$ at $x$ supplies $\delta>0$ such that $|t-x|<\delta$ implies $|a^t-a^x|<\varepsilon$; density supplies rational $q$ with $x-\delta<q<x$, hence $a^x-\varepsilon<a^q\in S_a(x)$. [L2, L3, choose]

2.1 By the supremum characterisation, steps 1.1 and 1.2 give $a^{[x]}=a^x$ when $a>1$. [step 1.1, step 1.2, L3]

3.1 For $a=1$ both values are $1$. For $0<a<1$ the base $a^{-1}$ exceeds $1$, so step 2.1 applied to that base and the same exponent $x$ gives $(a^{-1})^{[x]}=(a^{-1})^{x}$; the subunit clause of [L1] then gives $a^{[x]}=1/\bigl((a^{-1})^{x}\bigr)$. By [L4] with $r=-1$ and $s=x$, $(a^{-1})^{x}=a^{-x}$; and by [L4] again, $a^{-x}a^{x}=a^{-x+x}=a^{0}=1$, so $1/a^{-x}=a^{x}$. Hence $a^{[x]}=a^{x}$. [step 2.1, L1, L2, L4] ∎
