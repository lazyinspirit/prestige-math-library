---
id: lem-qc-logspace-uniform-cook-formula-encoding
kind: lemma
title: "Logspace uniform near-linear Cook formula encoding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-effective-binary-encoding-and-decoder
  - def-qc-unbounded-error-time-space-counting-model
  - lem-qc-uniform-probabilistic-clocked-simulation
  - lem-qc-basis-query-time-normalization
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen A. Cook, Short Propositional Formulas Represent Nondeterministic Computations"
      url: https://www.ccs.neu.edu/home/viola/classes/papers/Cook1988.pdf
    - title: "Pippenger and Fischer, Relations among Complexity Measures"
      url: https://www.khoury.northeastern.edu/~viola/classes/papers/PippengerF-Oblivious.pdf
proof_strategy: direct
---

## Statement

Use raw binary input pairs and the fixed-width clause encoding in the proof. For each fixed deterministic sequential multitape computation of worst-case time $T\ge1$ on $(x,y)$, there is a formula $F(x,y,z)$ of size $O(T\log^{O(1)}(T+2))$, each encoded output bit generated in $\log^{O(1)}(T+2)$ time and $O(\log(T+2))$ workspace with direct input-bit access. Its input-dependent constants form one ordered initial block, permitting sequential on-demand generation with the same polylogarithmic overhead per output-head transition. For fixed $x,y$ there is exactly one satisfying $z$ when the computation accepts, and none otherwise. The same conclusions hold for a fixed derived-basis machine when $T$ is at least its input length. Variable blocks and malformed-input behavior are fixed with the machine.

## Facts & Assumptions

**Given:** a fixed deterministic machine, an integer time bound $T\ge1$, and its finite transition table.

[F1] [[def-effective-binary-encoding-and-decoder]] fixes effectiveness; the proof specifies raw bit arrays and fixed-width clause slots explicitly rather than inferring resource bounds from an arbitrary decoder.

[F2] [[lem-qc-uniform-probabilistic-clocked-simulation]] supplies the sequential/index-only interpreters, and [[lem-qc-basis-query-time-normalization]] normalizes derived basis queries into an index-only computation with polynomially bounded physical addresses for clocks at least input length. The distinct profiles are defined in [[def-qc-unbounded-error-time-space-counting-model]].

## Proof


1.1 Use the declared sequential multitape model, with its fixed finite alphabet, fixed number of heads, and heads initially at zero. Make halting states absorbing. In $T$ steps a head visits only positions $0,\ldots,T$, so each head address has $O(\log(T+2))$ bits. A candidate trace lists, for every time $t<T$, its state, head addresses and scanned/written symbols, together with the final state and addresses. Constant-table transition checks, binary increment/decrement/clamping checks, the initial state/address checks and final acceptance check have bounded-fan-in circuits of total size $O(T\log(T+2))$. Each table lookup has constant size because the simulated machine is fixed. [F1, given, construct]

1.2 For a fixed deterministic machine in the derived basis profile and $T\ge n$, the deterministic instance of [F2] gives an exact index-only interpreter of time $T'=T\log^{O(1)}(T+2)$ whose actually used physical addresses and index words have $O(\log(T+2))$ bits. The description is fixed and its fair-bit tables agree, so no probabilistic choices affect this computation. The interpreter's source input, code and clock have total length $O(n+\log(T+2))$. Its explicit time bound can be rounded up to a fixed uniformly computable $T\log^c(T+2)$ clock. No sublinear-space preservation is needed for this formula construction. [F2, construct]

2.1 For every tape and time create an access record containing tape ID, address, time, read symbol and written symbol, copied by wires from the trace. A read-only access has equal read/write symbols. Include initial records at time $-1$ for the at most $T+1$ relevant cells of the input tape, each with its actual input symbol as written symbol. Other tapes are initially blank. Use a validity bit and pad the records to a power of two by dummy records. Sort by (validity,tape,address,time), putting dummies last. Require each real record's read symbol to equal the preceding record's written symbol when the tape/address keys agree; at a first access to an address with no initial record require blank. Initial records need no read check. Thus the trace satisfies all these checks if and only if every reported read is the last symbol actually written to its addressed tape cell, or the correct initial symbol. [step 1.1, construct]

3.1 Here is the complete sorting construction used in step 2.1. Compare two $b$-bit keys lexicographically using the first unequal bit, realized by a prefix equality chain and Boolean gates; select both output records with multiplexers. This costs $O(b)$ gates. A bitonic merge of $2h$ records compares pairs at distance $h$, retaining smaller records in the first half and larger in the second, then recursively merges each half. To verify this, it suffices to consider Boolean keys: if sorting failed, applying a threshold between two inverted output keys commutes with every comparator and gives a Boolean failure. In a circular bitonic Boolean sequence the ones form one circular interval. The distance-$h$ comparisons therefore either remove all ones from the smaller half or all zeros from the larger half; both halves remain circular bitonic, and every smaller-half bit is at most every larger-half bit. Induction proves merge correctness. Sort two halves in opposite directions recursively, concatenate to form a bitonic sequence and merge. For $L$ padded records the merge uses $O(L\log L)$ comparisons and the sort uses $O(L\log^2L)$ comparisons. Here $L=O(T+1)$ and record width $b=O(\log(T+2))$, yielding $O(T\log^3(T+2))$ Boolean gates. [step 2.1, construct, induction]

4.1 Memory consistency and the transition checks determine the trace uniquely from the input: induction on time first determines the scanned symbols from the earlier writes, and then the fixed deterministic transition determines the state, writes and next head addresses. The true trace passes all checks exactly when the original computation accepts. All sorting and checking gates are deterministic functions of the candidate trace. Introduce one variable for each gate output and constant-size clauses enforcing that gate's truth table; require the final checking conjunction to be true. For each input there is therefore exactly one satisfying assignment of all trace/gate variables when it accepts and none when it rejects. The number of clauses is the circuit size, and explicit binary variable names increase formula encoding length by at most $O(\log(T+2))$. [step 1.1, step 2.1, step 3.1, construct, induction]

5.1 Fix the formula as the concatenation of fixed-width padded encodings of those local clauses. A gate has a tuple address consisting of module type, trace time or sorting round, wire number and bit/gate offset. Bitonic sorting pairs wire $i$ with $i\mathbin{\mathrm{xor}}2^j$ in its round $(k,j)$; its direction is fixed by the relevant $k$th bit of $i$. In the recursive implementation this same tuple rule follows by the successive half merges described in step 3.1. Ripple comparisons and multiplexers have locally indexed predecessors. Thus one requested clause/variable-name bit is generated by $O(\operatorname{polylog}T)$ operations on $O(\log T)$-bit counters, storing only a fixed number of such counters. Decoding fixed-width clause offsets is integer arithmetic on $O(\log T)$ bits and costs polynomial time in $\log T$ even with school algorithms. Fix input-gate variables by unit clauses in one initial ordered block, with a common fixed clause-slot width and the clause for $x_i$ in slot $i$. Only this block contains actual $x$ symbols; all other clauses refer to variable names. Unfixed $y$ symbols remain input variables. For isolated bit generation, the bit generator uses the declared direct access to the indicated input bit. For sequential consumers, a unit move of the formula-input head changes the required source-input position by at most one inside this block; outside it park the source head at the nearest endpoint. This monotone address map charges all source-head motion to formula-head motion plus initial setup, so sequential on-demand generation uses polynomial-logarithmic overhead per formula-input transition and $O(\log T)$ workspace without uncharged random access. This proves logarithmic workspace and polylogarithmic output-bit time for the sequential construction; the separate derived-basis extension follows below. [step 3.1, step 4.1, F1, construct]

6.1 Apply step 1.1 and step 2.1 and step 3.1 and step 4.1 and step 5.1 to a trace of this bounded-address interpreter, with one addition: each fixed native index tape is represented by its $O(\log T)$-bit accumulating value and length, updated by shift-and-append on an emitted bit and reset on use. A jump's next head address must equal that accumulated value. Head collisions and the source's suppressed-write rule are fixed local checks; records at equal time are sorted further by head label, and colliding heads have no intervening writes, so the adjacent-record memory test remains correct. All addresses, states, index prefixes and counters use $O(\log T)$ bits, and the fixed number of heads contributes only a constant factor. The verifier and clauses consequently have size $T\log^{O(1)}T$ and the same local polylogarithmic-time/logspace generation. The deterministic interpreter has exactly one valid trace, so the unique-witness conclusion is unchanged. Input-dependent unit clauses remain in the ordered initial block. This establishes the claimed extension for the derived basis profile while retaining the sequential construction. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 1.2, construct] ∎

