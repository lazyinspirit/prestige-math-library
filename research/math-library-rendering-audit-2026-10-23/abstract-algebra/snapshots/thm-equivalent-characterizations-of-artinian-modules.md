---
id: thm-equivalent-characterizations-of-artinian-modules
kind: theorem
title: "DCC and minimal-condition characterizations of Artinian modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

For a left $R$-module $M$, DCC is equivalent to the condition that every nonempty family of submodules has a minimal member. The implication from DCC to the minimal condition uses dependent choice. See [[def-artinian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. The adopted axiom of dependent choice is assumed for the one direction identified in the Statement; it is not cited as a forward dependency.

[L1] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

## Proof

**Proof technique:** direct.

1.1 DCC gives a minimal member of every nonempty family by contradiction: under dependent choice, absence of a minimal member yields a strict descending chain. [L1, given, algebra]

2.1 Conversely, a nonstabilizing descending chain has no minimal member. [step 1.1, given, algebra]

3.1 Repeated terms are what make step 2.1 correct rather than an equivocation: minimality of $M_k$ in the family $\{M_n\}$ means no member is properly contained in it, so $M_n=M_k$ for all $n\ge k$, which is stabilization. For the zero module the only submodule is $0$, every nonempty family is $\{0\}$ with minimal member $0$, and every descending chain is constant, so both conditions hold. This proves the stated claim. [step 2.1, given, algebra] ∎
