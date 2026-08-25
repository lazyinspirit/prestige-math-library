---
id: thm-sauer-shelah
kind: theorem
title: "Sauer–Shelah: a family on $[n]$ of VC dimension at most $d$ has at most $\\sum_{i=0}^{d}\\binom{n}{i}$ members"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-shattering-and-vc-dimension, def-down-shift-of-a-set-family, lem-the-down-shift-preserves-the-number-of-sets, lem-the-down-shift-creates-no-new-shattered-set, lem-iterated-down-shifting-terminates-in-a-downward-closed-family, lem-a-downward-closed-family-shatters-each-of-its-members, def-binomial-coefficient, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{F}\subseteq\mathcal{P}([n])$ have VC dimension at most $d$. Then

$$\lvert\mathcal{F}\rvert\le\sum_{i=0}^{d}\binom{n}{i}.$$

## Facts & Assumptions

**Given:** a family $\mathcal{F}\subseteq\mathcal{P}([n])$ with $\operatorname{VC}(\mathcal{F})\le d$.

[L1] Iterated down-shifting terminates in a downward-closed family ([[lem-iterated-down-shifting-terminates-in-a-downward-closed-family]]).

[L2] Down-shifting preserves the number of sets ([[lem-the-down-shift-preserves-the-number-of-sets]]).

[L3] Down-shifting creates no new shattered set ([[lem-the-down-shift-creates-no-new-shattered-set]]).

[L4] A downward-closed family shatters each of its members ([[lem-a-downward-closed-family-shatters-each-of-its-members]]).

[F1] The $i$-element subsets of $[n]$ are counted by $\binom{n}{i}$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to obtain a downward-closed family $\mathcal{G}$ by iterated shifting from $\mathcal{F}$. [L1]

2.1 By [L2], the shift process preserves the number of sets, so $\lvert\mathcal{G}\rvert=\lvert\mathcal{F}\rvert$; and by [L3], the VC dimension does not increase, so $\operatorname{VC}(\mathcal{G})\le d$. [L2, L3, step 1.1]

3.1 Because $\mathcal{G}$ is downward closed, [L4] says that every member of $\mathcal{G}$ is shattered. Since $\operatorname{VC}(\mathcal{G})\le d$, every member of $\mathcal{G}$ therefore has size at most $d$. [L4, step 2.1]

4.1 So $\mathcal{G}$ is a subset of the union of the layers $[ [n] ]^0,\dots,[ [n] ]^d$, whose total size is $\sum_{i=0}^{d}\binom{n}{i}$ by [F1]. Using step 2.1, the same bound holds for $\mathcal{F}$. [F1, step 2.1, step 3.1] ∎

## Remarks

- The argument is purely combinatorial. The page later gives a second proof through multilinear polynomials, but this theorem itself uses only shifting.
