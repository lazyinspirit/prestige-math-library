---
id: lem-polynomial-time-computations-have-logspace-uniform-circuits
kind: lemma
title: "Polynomial-time computations have logspace-uniform circuit families"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dtime-ntime-dspace-and-nspace, def-logspace-uniform-circuit-family]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 6.7"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

For every fixed deterministic Turing machine $M$ that halts in polynomial
time, there is a polynomial-size logspace-uniform Boolean circuit family
$(C_n)$ such that $C_n(x)=1$ exactly when $M$ accepts
$x\in\{0,1\}^n$.

## Facts & Assumptions

**Given:** a fixed deterministic multitape machine $M$ and a fixed integer $k\ge1$ such that $B(n)=(n+2)^k+k$ bounds its running time on every input of length $n$.

[L2] Logspace uniformity requires logspace procedures for the indexed
circuit's size, gate types, predecessor queries, and designated output
([[def-logspace-uniform-circuit-family]]).

## Proof

**Proof technique:** computation tableau.

1.1 For $0\le t\le B=B(n)$, encode each configuration by one-hot state bits, head-position bits $H_{t,r,j}$ for each tape $r$, and symbol bits $X_{t,r,j,a}$. Use positions $0\le j\le n+B+1$; no head can leave this interval within $B$ steps. There are exactly $n$ input nodes labeled $x_1,\ldots,x_n$; the initial row uses these, their negations, and constants for the input, blank cells, initial heads, and start state. [given, construct]

2.1 For each tape and symbol, compute the scanned-symbol bit $R_{t,r,a}=\bigvee_j(H_{t,r,j}\wedge X_{t,r,j,a})$ with a binary OR chain. The fixed transition table applied to the state and these scanned-symbol bits gives constant-size Boolean formulas for the next state, write symbols, and movement directions. At a halting state define this circuit update to leave the entire configuration unchanged. This is an extension of the tableau update only; no transition from a halted machine is assumed. [step 1.1, construct]

3.1 At each cell, retain its old symbol unless its head bit is one, in which case use the computed write symbol. A new head bit is the OR of the old adjacent head bits conjoined with their computed movement directions; in a halted configuration keep its old head bit. At position zero also retain a head commanded to move left, as required by the right-infinite tape convention. Treat other out-of-range head bits as zero. These are constant-size formulas once the scanned-symbol bits are available. Induction on $t$ gives the genuine configuration until halting and its unchanged copy thereafter. Therefore the accepting-state bit at time $B$ equals one exactly when $M$ accepts $x$. [step 2.1, induction]

4.1 Each layer uses $O(n+B)$ gates: the tape count, alphabet, and state set are fixed, each scanned-symbol OR chain is linear, and each cell update has constant size. There are $B$ layers, so the size is $O(B(n+B))$, hence polynomial. All formulas use binary AND/OR and unary NOT. Designate the final accepting-state node as output. [step 3.1, algebra]

5.1 Number nodes by initial-row order and then by time layer, with scanned-symbol chains before transition formulas and cell updates. Pad fixed formula blocks with unused constant nodes if necessary so that each block length is a fixed constant or fixed multiple of $n+B$. A node is addressed by its layer, block, position, and constant-size formula slot; all are $O(\log(n+2))$-bit integers. Fixed-degree arithmetic computes block offsets, adjacent positions, OR-chain predecessors, and the initial input label from these indices. Counting $n$ on unary input and evaluating the fixed polynomial $B(n)$ also use logarithmic space. These procedures answer SIZE, TYPE, predecessor, and output queries and emit the topological encoding. Thus [L2] gives logspace uniformity, including $n=0$ where the initial row has only constants. [L2, step 4.1, construct] ∎
