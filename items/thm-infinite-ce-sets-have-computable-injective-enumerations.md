---
id: thm-infinite-ce-sets-have-computable-injective-enumerations
kind: theorem
title: "Infinite computably enumerable sets have computable injective enumerations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computably-enumerable-set, def-computable-and-partial-computable-function]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Statement

Every infinite computably enumerable subset of an effectively encoded set $X$ is
the range of a total computable injective function $\mathbb N\to X$.

## Facts & Assumptions

**Given:** An infinite computably enumerable set $A\subseteq X$.

[L1] By [[def-computably-enumerable-set]], since $A$ is infinite it is in particular nonempty, so there exists a total computable function $e:\mathbb N\to X$ whose range is exactly $A$.

[L2] By [[def-computable-and-partial-computable-function]], the total computable enumerator from [L1] is realized by a machine that halts with the code of $e(n)$ on every input $n$.

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a total computable enumerator $e:\mathbb N\to X$ with range exactly $A$, and let $E$ be a machine as in [L2] that computes it. On input $n$, simulate the computations of $E$ on $0,1,2,\dots$ one after another, keep the list of distinct output codewords already seen, and halt when the $(n+1)$st new codeword appears, outputting that codeword. [L1, L2, construct]

2.1 The resulting function $g:\mathbb N\to X$ is injective by construction, because each output is the next codeword not seen before. Every value of $g$ lies in $A$ because every output of $E$ lies in the range of $e$. Conversely, if $x\in A$, then some stage of the sequential scan in step 1.1 encounters the codeword $e_X(x)$ among the outputs of $E$, so that codeword is eventually appended to the distinct-output list. Hence the range of $g$ is exactly $A$. [step 1.1]

3.1 Because $A$ is infinite, for each $n$ there are at least $n+1$ distinct elements of $A$. Step 2.1 shows that each of their codewords appears somewhere in the scan from step 1.1, so the $(n+1)$st new codeword is found after finitely many outputs of $E$. Therefore the machine of step 1.1 halts on every input $n$, and it computes a total injective function $g:\mathbb N\to X$ with range $A$. [step 2.1, given]

4.1 Thus every infinite c.e. set has a computable injective enumeration. [step 2.1, step 3.1] ∎
