---
id: fs-every-countable-language-is-decidable
kind: false-statement
title: "FALSE: every countable language is decidable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable, def-decidable-and-recognizable-language, cor-effective-enumeration-of-turing-machines, def-effective-encoding-of-turing-machines, def-computation-alphabet-and-word-convention]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Every countable language is decidable.

## Facts & Assumptions

**Given:** The unary alphabet $\{1\}$.

[L1] By [[def-countable]], a language is countable when it is finite or countably infinite.

[L2] By [[cor-effective-enumeration-of-turing-machines]], the coded deterministic one-tape Turing machines can be effectively listed.

[L3] By [[def-decidable-and-recognizable-language]], a decider for a language must halt on every input and give the correct membership answer.

[L4] By [[def-effective-encoding-of-turing-machines]], a coded machine has input alphabet $\Sigma_s=\{1,\dots,s\}$, so every coded machine with $s\ge 1$ can read every unary word $1^n$ as a legal input.

[F1] Any deterministic one-tape decider over the unary alphabet can be put in
the normalized coded form by relabelling its finite state and tape alphabets,
adding unreachable designated states if necessary, and filling any omitted
transition entries with a rejecting transition. This preserves its behavior on
unary inputs.

## Refutation

**Proof technique:** direct.

1.1 The set $\{1\}^*$ is countable by length, so write its elements as $w_n:=1^n$ for $n\ge 0$. Filter the effective list from [L2] by keeping only the coded machines whose input-alphabet parameter satisfies $s\ge 1$; by [L4], this gives an effective enumeration $N_0,N_1,N_2,\dots$ of all coded deterministic one-tape machines that can read every unary word. Let $D:=\{w_n:N_n \text{ does not accept } w_n\}$. By [L1], the language $D$ is countable because it is a subset of the countable set $\{1\}^*$. [L1, L2, L4, given, construct]

2.1 Suppose a decider decides $D$. By [F1], an equivalent coded decider occurs as some $N_k$ in the filtered enumeration. If $w_k\in D$, then step 1.1 says that $N_k$ does not accept $w_k$, contradicting the requirement that a decider for $D$ accept members. If $w_k\notin D$, then step 1.1 says that $N_k$ accepts $w_k$, contradicting the requirement that a decider reject nonmembers. [L3, F1, step 1.1]

3.1 Thus no decider decides the countable language $D$, so the statement is false. [step 2.1] ∎
