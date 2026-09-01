---
id: lem-diagonal-self-application-machine
kind: lemma
title: "A hypothetical decider for $A_{TM}$ yields a diagonal self-application machine"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-machine-acceptance-problem, def-effective-encoding-of-turing-machines, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Statement

Assume that some deterministic one-tape Turing machine $H$ decides $A_{TM}$.
For a binary word $x=b_1\cdots b_\ell$, let $\overline x$ be the word over
$\Sigma_2=\{1,2\}$ obtained by replacing each bit $0$ by $1$ and each bit $1$
by $2$. Then there exists a deterministic one-tape Turing machine $D_H$ with
input alphabet $\Sigma_2$ such that, for every coded deterministic one-tape
Turing machine $M$ whose input alphabet contains $\Sigma_2$,
$$ D_H \text{ accepts } \overline{\ulcorner M\urcorner}\iff M \text{ does not accept } \overline{\ulcorner M\urcorner}. $$

## Facts & Assumptions

**Given:** A deterministic one-tape Turing machine $H$ deciding $A_{TM}$.

[L1] A binary word belongs to $A_{TM}$ exactly when it is a coded pair $\langle\ulcorner M\urcorner,\widehat w\rangle$ whose decoded machine $M$ accepts the decoded input word $w$, by [[def-turing-machine-acceptance-problem]].

[L2] The chosen machine encoding has a total decoder, so machine codes can be checked and decoded effectively, by [[def-effective-encoding-of-turing-machines]].

[L3] A decider halts on every input and answers membership correctly, by [[def-decidable-and-recognizable-language]].

## Proof

**Proof technique:** direct.

1.1 Construct a deterministic one-tape machine $D_H$ with input alphabet $\Sigma_2$ as follows. On input a word $y\in\Sigma_2^*$, first check whether every symbol is $1$ or $2$ and, if so, recover the unique binary word $x$ obtained by replacing $1$ by $0$ and $2$ by $1$. Use [L2] to decode $x$ as a candidate machine code. If $x$ is malformed or decodes to a machine whose input alphabet does not contain both symbols $1$ and $2$, reject. Otherwise form the coded pair $\langle x,\widehat{\overline x}\rangle$ and run $H$ on that binary input. If $H$ accepts, then loop forever; if $H$ rejects, then accept. This machine is effective because the recoding $x\leftrightarrow\overline x$, the machine-code decoder, and the call to $H$ are all effective, and [L3] guarantees that the call to $H$ halts. [L2, L3, given, construct]

2.1 Let $M$ be any coded deterministic one-tape Turing machine whose input alphabet contains $\Sigma_2$, and put $x=\ulcorner M\urcorner$. On input $\overline x$, the preliminary checks in step 1.1 succeed, and the query sent to $H$ is exactly $\langle\ulcorner M\urcorner,\widehat{\overline x}\rangle=\langle\ulcorner M\urcorner,\widehat{\overline{\ulcorner M\urcorner}}\rangle$. By [L1] and the correctness of the decider $H$ from [L3], $H$ accepts that query exactly when $M$ accepts $\overline x$. Because $D_H$ does the opposite of $H$'s answer, $D_H$ accepts $\overline x$ exactly when $M$ does not accept $\overline x$. [L1, L3, step 1.1]

3.1 Step 2.1 is exactly the required diagonal property. Therefore the constructed machine $D_H$ exists. [step 2.1] ∎
