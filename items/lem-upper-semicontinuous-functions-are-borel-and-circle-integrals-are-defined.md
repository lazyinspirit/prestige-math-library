---
id: lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined
kind: lemma
title: "Upper semicontinuous functions are Borel and their circle averages are defined"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open and let $u:\Omega\to[-\infty,\infty)$ be
upper semicontinuous. Then:

1. $u$ is Borel measurable;
2. for every circle $C=\{a+re^{it}:0\le t\le2\pi\}\subseteq\Omega$, the
   boundary function $t\mapsto u(a+re^{it})$ is Borel measurable and bounded
   above, so its average
   $$\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt$$
   is a well-defined element of $[-\infty,\infty)$.

## Facts & Assumptions

**Given:** An upper semicontinuous function $u:\Omega\to[-\infty,\infty)$ and a circle $C=\{a+re^{it}:0\le t\le2\pi\}\subseteq\Omega$.

[A1] The function $u$ is upper semicontinuous on $\Omega$, and the circle $C$ lies in $\Omega$.

## Proof

**Proof technique:** direct.

1.1 For every real $\alpha$, the set $\{z\in\Omega:u(z)<\alpha\}$ is open because $u$ is upper semicontinuous. Hence the sets $\{u\ge\alpha\}$ are closed, and therefore $u$ is Borel measurable. [A1]

1.2 The circle $C$ is compact. If $u$ is not identically $-\infty$ on $C$, upper semicontinuity gives a point of maximum and therefore a finite upper bound $M$ on $C$; if $u\equiv-\infty$ on $C$, then $-\infty$ is already an upper bound. So the boundary function on $[0,2\pi]$ is Borel measurable and bounded above. [A1]

2.1 The parametrization $t\mapsto a+re^{it}$ is continuous, so composing it with the Borel function from step 1.1 makes $t\mapsto u(a+re^{it})$ Borel measurable on $[0,2\pi]$. [step 1.1]

3.1 A Borel measurable function bounded above on a finite interval has an extended-real integral in $[-\infty,\infty)$, so the displayed circle average is well defined. [step 2.1, step 1.2] ∎
