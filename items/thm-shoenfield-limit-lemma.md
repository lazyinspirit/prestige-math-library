---
id: thm-shoenfield-limit-lemma
kind: theorem
title: "Shoenfield's limit lemma"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limit-computable-function, def-relative-computability-and-enumerability, thm-posts-theorem, lem-oracle-computation-has-a-finite-query-witness]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Lemma 7.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

A set, equivalently its characteristic function, is computable in $0'$ if and
only if it is limit computable.

## Facts & Assumptions

**Given:** a set $A\subseteq\mathbb N$.

[L1] A halting oracle computation has a finite query witness
([[lem-oracle-computation-has-a-finite-query-witness]]).

## Proof

**Proof technique:** direct.

1.1 Use the halting-set meaning of $0'$ fixed in [[thm-posts-theorem]]. A query code $e$ specifies an ordinary computation whose halting is in question. Put $0'_s=\{e\le s:\text{the computation coded by }e\text{ halts within }s\text{ steps}\}$. Bounded simulation makes membership in $0'_s$ uniformly decidable in $(e,s)$. These sets are finite and increasing, and their union is $0'$: a genuinely halting computation enters once $s$ exceeds both its code and its halting time; a nonhalting computation never enters. [given, construct]

2.1 If $A\le_T0'$, fix $M^{0'}$ computing $\chi_A$. Define $g(x,s)$ by simulating at most $s$ oracle-machine transitions of $M(x)$, answering each query by the decidable set $0'_s$. Return the output if it halts with output in $\{0,1\}$ within the cutoff, and return $0$ otherwise. Each stage halts, so $g$ is total computable and bit-valued even when an incorrect oracle sends $M$ into a loop or an unintended output. No time-efficiency bound on this finite simulation is asserted. [step 1.1, construct]

3.1 For fixed $x$, the true run has a finite transition length $r$ and a finite query set $F$ by L1. All negative answers on $F$ are correct at every stage. Each positive answer becomes permanently correct by step 1.1; take $s_0\ge r$ beyond the finitely many corresponding entry stages. For every $s\ge s_0$, L1 gives exactly the true run with oracle $0'_s$, and the cutoff does not interrupt it. Thus $g(x,s)=\chi_A(x)$ eventually. An empty $F$ requires only the time cutoff, and $s_0$ is an existence bound, not a claimed computable modulus. [step 1.1, step 2.1, L1]

4.1 Conversely, let total computable $h(x,s)$ converge eventually to $\chi_A(x)$. For each $(x,s)$, effectively form the ordinary program that computes $h(x,s)$, searches $t=s+1,s+2,\ldots$, and halts upon finding $h(x,t)\ne h(x,s)$. Its halting is a $0'$ question. Ask these questions for $s=0,1,\ldots$ until receiving a negative answer. Eventual constancy ensures termination; a negative answer means that all later values equal the current value, which must therefore be $\chi_A(x)$. Output it. This computes $A$ in $0'$ and proves the reverse implication. [given, construct] ∎
