---
id: lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
kind: lemma
title: AC supplies the countable and dependent choices used in Banach integration
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-recursion]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas J. Jech, The Axiom of Choice, §2.4"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
      locator: "Definitions of Countable Choice and Dependent Choice and the proof DC implies Countable Choice, printed pp.20–23; the direct implications from AC are derived below"
pipeline_run: phase-2-next-18
---

## Statement

In ZF, assume the Axiom of Choice. Then the Axiom of Countable Choice holds.
Moreover, if $R\subseteq X\times X$ is a serial relation on a nonempty set
$X$ and $a\in X$, there is a sequence $(x_n)_{n\in\mathbb N}$ such that
$x_0=a$ and $x_nRx_{n+1}$ for every $n$. Thus AC supplies the
prescribed-initial-point form of Dependent Choice.

## Facts & Assumptions

**Given:** ZF and the Axiom of Choice.

[F1] AC supplies a choice function on any set of nonempty sets
([[def-axiom-of-choice]]).

[F2] Countable Choice asks for a choice function on every countable family of
nonempty sets ([[def-countable-choice]]).

[F3] Prescribed-initial-point Dependent Choice asks for a sequence through any
serial relation on a nonempty set, beginning at the supplied point
([[def-dependent-choice]]).

[F4] A supplied self-map $s:X\to X$ and starting point $a\in X$ determine a
unique sequence with $x_0=a$ and $x_{n+1}=s(x_n)$ ([[thm-recursion]]).

## Proof

**Proof technique:** direct.

1.1 Let $(A_n)_{n\in\mathbb N}$ be a countable family of nonempty sets. Its image $\mathcal A=\{A_n:n\in\mathbb N\}$ is a set of nonempty sets, so [F1] gives a choice function $c$ on $\mathcal A$. Define $b(n)=c(A_n)$. Then $b(n)\in A_n$ for every $n$, proving [F2]. Repeated members of the family cause no ambiguity because $c$ assigns them the same selected value. The empty subfamily has the empty choice function, and singleton members force their unique values. [F1, F2, construct]

1.2 Let $X$, $R$, and $a$ satisfy the second assertion. For $x\in X$ put $S_x=\{y\in X:xRy\}$. Seriality makes every $S_x$ nonempty. Apply [F1] to the set $\mathcal S=\{S_x:x\in X\}$, choose $c(S)\in S$ for every $S\in\mathcal S$, and define $s(x)=c(S_x)$. This is a well-defined self-map even if two successor sets coincide, and $xRs(x)$ for every $x$. [F1, given, construct]

2.1 Apply [F4] to $s$ and $a$. The resulting sequence satisfies $x_0=a$ and $x_{n+1}=s(x_n)$, hence $x_nRx_{n+1}$ by step 1.2. This is exactly [F3]. If $X$ is a singleton, seriality forces the constant sequence; the empty-set case is excluded by the supplied $a$. AC is used only for the fixed-family selections in steps 1.1 and 1.2, while recursion makes no further choice. [step 1.2, F3, F4] ∎
