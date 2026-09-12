---
id: "lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations"
kind: "lemma"
title: "The tableau formula characterizes accepting computations"
status: published
origin: "pipeline"
deps: ["def-bounded-turing-computation-tableau-interface", "def-one-step-configuration-relation", "def-turing-machine-initial-and-halting-configuration-interface"]
justified_by: []
landmark: false
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3.4, proof of Lemma 2.12"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
proof_strategy: "direct"
---

## Statement

The formula $\Phi_{M,x}$ is satisfiable exactly when some permitted certificate makes the normalized verifier accept within $T(|x|)$ steps. Every satisfying assignment decodes a genuine computation followed only by repetitions of its halting configuration.

## Facts & Assumptions

**Given:** The fixed verifier, input and tableau parameters.

[F1] The cell variables, exactly-one constraints, initial row, forbidden-window clauses and accepting row are specified in [[def-bounded-turing-computation-tableau-interface]].

[F2] An ordinary step rewrites only the scanned cell and moves the head right or clamped left ([[def-one-step-configuration-relation]]).

[F3] The initial head is at zero and acceptance is equality of the state to the designated accepting state ([[def-turing-machine-initial-and-halting-configuration-interface]]).

## Proof

1.1 Suppose an allowed certificate gives acceptance at time $s\le T$. Write its initial row, then its ordinary successor rows through $s$, then repeat its accepting row through $T$. Set exactly the variables for these symbols to 1. The initial tape length is less than $T$, and at time $t$ the head is at most $t$, so cell $T+1$ stays blank. Every local tuple is allowed: at the old head it performs the prescribed write, at the destination it receives the new head, and elsewhere it preserves the symbol. At zero the rule uses the clamped move. After halting it preserves the whole row. Thus every clause is true, including the final accepting clause. [F1, F2, F3, given]

1.2 Conversely, from a satisfying assignment the exactly-one clauses select a unique symbol in each cell. The initial-row clauses give one ordinary initial configuration with a certificate of the required length. Consider any decoded row already known to be a genuine padded configuration. It has one head. For each cell its three old symbols therefore have no conflicting heads; the local rule has exactly the unique output obtained from the ordinary transition, or from halting repetition. Any different new symbol would make the forbidden-tuple clause for these actual four symbols false: all its negated literals would be zero. Consequently the whole next row equals that padded successor. [F1, F2, F3]

2.1 Starting with row zero and applying the preceding implication $T$ times proves that every row is the actual padded run. The last clause locates an accepting head at time $T$. Rejection cannot become acceptance because a rejected row only repeats; a nonhalting run can acquire an accepting state only through a genuine transition. Deleting the repeated terminal rows therefore gives an accepting computation of length at most $T$. The verifier's own syntax check makes its certificate permitted. [step 1.2, F1, F3]

3.1 This proves both implications, including empty inputs and zero-length certificates. The construction uses a positive padded bound, so no absent predecessor row is invoked; a hypothetical already-accepting row would simply repeat, while the actual initial state is nonhalting. Every symbol was read from a finite assignment or explicitly written from a run, so there is no choice assumption. [step 1.1, step 2.1, F1, F3] ∎
