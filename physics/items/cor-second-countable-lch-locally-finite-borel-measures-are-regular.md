---
id: cor-second-countable-lch-locally-finite-borel-measures-are-regular
kind: corollary
title: "Locally finite Borel measures on second-countable LCH spaces are regular"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, def-second-countable-space, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cor-second-countable-lch-locally-finite-borel-measures-are-regular). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Every Borel measure finite on compact sets on a second-countable LCH space is regular.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), $X$ is second-countable and LCH, and $\mu$ is finite on compact sets.

[L1] An LCH space has a base of open sets with compact closure. ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]])

[L2] Under Countable Choice, if every open set is sigma-compact, compact-finite Borel measures are regular ([[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]). The stated choice assumption is spent only in this theorem.

## Proof

**Proof technique:** direct.

1.1 Let $(B_n)$ be a given countable base and let $U$ be open. Take all indices $n$ for which $\overline{B_n}$ is compact and contained in $U$; this is a specified subfamily of the given base and needs no selection. For each $x\in U$, [L1] gives an open $W$ with $x\in W\subseteq\overline W\subseteq U$ and $\overline W$ compact. Choose one $B_n$ with $x\in B_n\subseteq W$; its closure is a closed subset of the compact $\overline W$, hence compact and contained in $U$. Thus the selected subfamily covers $U$, and $U$ is the union of the corresponding countably many compact closures. [L1, given, construct]

2.1 Thus every open set is sigma-compact. Apply [L2] under the stated Countable Choice premise to obtain regularity of $\mu$. [step 1.1, L2, given] ∎
