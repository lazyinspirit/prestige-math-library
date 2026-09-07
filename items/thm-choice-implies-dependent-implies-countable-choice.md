---
id: thm-choice-implies-dependent-implies-countable-choice
kind: theorem
title: "AC implies DC implies countable choice"
status: draft
origin: pipeline
deps: ["def-axiom-of-choice", "def-dependent-choice", "def-countable-choice", "thm-recursion", "lem-finite-choice", "def-choice-for-pairs-and-countable-finite-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4, pp.22–23"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF,

$$\mathrm{AC}\Longrightarrow\mathrm{DC}\Longrightarrow\mathrm{AC}_\omega\Longrightarrow\mathrm{AC}_{\omega,\mathrm{fin}}\Longrightarrow\mathrm{AC}_{\omega,2},\qquad \mathrm{AC}\Longrightarrow\mathrm{AC}_2.$$

DC here includes a prescribed initial point.

## Facts & Assumptions

[F1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F2] [[def-dependent-choice]]: DC supplies a serial path from any prescribed point.

[F3] [[thm-recursion]]: A specified self-map and initial point give a unique omega sequence.

[F4] [[def-countable-choice]]: Countable choice selects from every omega-indexed nonempty family.

[F5] [[def-choice-for-pairs-and-countable-finite-choice]]: The restricted principles have precisely the stated index and finite-size restrictions.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Assume AC, let $R$ be serial on $X\ne\varnothing$, and fix $a\in X$. Apply AC to the successor sets $R[x]=\{y:xRy\}$ to get a function $s:X\to X$ with $xRs(x)$. Repeated successor sets use the same selected value. [F1]

1.2 Assume DC and let $(X_n)$ be a nonempty-set family. The set $T$ of finite functions $t$ with domain some $n<\omega$ and $t(i)\in X_i$ contains the empty function. One-step extension is serial: for a particular $t$, one point of $X_n$ extends it. DC starting at the empty function gives nested $t_n$ of domain $n$. Their union is a function on omega selecting from each $X_n$. [F2, F4]

2.1 Recurse with $x_0=a$ and $x_{n+1}=s(x_n)$. This is the prescribed path and proves AC implies DC. [F2, F3, step 1.1]

3.1 The remaining implications restrict the eligible input families: nonempty finite sets are nonempty sets, and pairs are finite nonempty sets; AC also applies to any set-indexed family of pairs. This includes singleton-valued families without additional choices. [F1, F4, F5] ∎
