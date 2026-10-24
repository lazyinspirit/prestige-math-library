---
id: lem-iterated-down-shifting-terminates-in-a-downward-closed-family
kind: lemma
title: "Applying down-shifts until none changes the family terminates, and the result is closed under taking subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-down-shift-of-a-set-family, lem-the-down-shift-preserves-the-number-of-sets, thm-subset-of-a-finite-set, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.5"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Starting from a finite family $\mathcal{F}\subseteq\mathcal{P}([n])$ and
repeatedly applying effective down-shifts eventually stops. The final family is
closed under taking subsets.

## Facts & Assumptions

**Given:** a finite family $\mathcal{F}\subseteq\mathcal{P}([n])$.

[F1] The weight $w(\mathcal{F})=\sum_{F\in\mathcal{F}}\lvert F\rvert$ is a natural number ([[def-down-shift-of-a-set-family]]).

[L1] An effective shift strictly decreases the weight and preserves the number of sets ([[lem-the-down-shift-preserves-the-number-of-sets]]).

## Proof

**Proof technique:** direct.

1.1 Every effective shift strictly decreases the natural number $w(\mathcal{F})$ by [L1]. Therefore there cannot be an infinite sequence of effective shifts, so the process terminates. [F1, L1]

1.2 Let $\mathcal{G}$ be a family on which every down-shift is ineffective. If $F\in\mathcal{G}$ and $j\in F$, then the definition of an ineffective shift forces $F\setminus\{j\}\in\mathcal{G}$. [F1]

2.1 By repeatedly removing one element at a time and using step 1.2, every subset of every member of $\mathcal{G}$ also lies in $\mathcal{G}$. So the terminal family is downward closed. [step 1.2] ∎

## Remarks

- The proof spends no order on the points of $[n]$ beyond the ability to choose which shift to apply next; any effective shift decreases the same weight.
