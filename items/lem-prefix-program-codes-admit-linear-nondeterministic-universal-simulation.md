---
id: "lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation"
kind: "lemma"
title: "Prefix program codes admit linear nondeterministic universal simulation"
status: "draft"
origin: "pipeline"
deps: ["lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time", "def-effective-encoding-of-turing-machines", "lem-machine-encoding-is-injective-and-decodable"]
justified_by: []
landmark: false
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, coding conditions (1)-(3), p. 152"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Statement

There is an effective prefix-free coding $e$ of finite nondeterministic two-tape machines over binary inputs whose valid-code language is decidable in $O(|e|+1)$ time. One fixed nondeterministic two-tape machine $U$ recognizes precisely $\{ex:e\text{ is a valid code and }x\in L(M_e)\}$. For each fixed valid $e$ there are constants $c_e,d_e$ such that $\tau_U(ex)\le c_e(|x|+\tau_{M_e}(x))+d_e$ on accepted inputs.

## Facts & Assumptions

**Given:** Numeric finite-table descriptions of nondeterministic two-tape machines, with two distinguished binary input symbols and distinct initial/halting states.

[F1] Finite machine data admit explicit self-delimiting numeric tuple descriptions ([[def-effective-encoding-of-turing-machines]]).

[F2] Parsing and checking a finite table is total and uniquely recovers its specified machine ([[lem-machine-encoding-is-injective-and-decodable]]).

[F3] A fixed nondeterministic multitape acceptor can be converted to two tapes with $O(n+t+1)$ shortest-acceptance overhead ([[lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time]]).

## Proof

1.1 Adapt the finite table in F1 as follows. A payload d lists the state/alphabet sizes, and for each nonhalting state and pair of scanned symbols a finite list of target states, two written symbols and two L/R bits, in fixed lexicographic order without duplicates. Use the same unary-length-prefixed canonical numeral blocks and tuple-arity header. A deterministic fixed multitape decoder D parses d and checks all bounds, lengths and ordering, accepting exactly canonical valid tables. It halts on every d: all loops inspect finite parsed lists or finite integers from them. The same unique-decoding argument as F2 applies to these longer rows. Let $r(d)\ge1$ be D's exact number of transitions on d. It is a total recursive function, obtained by running D and counting. [F1, F2, construct]

2.1 Define $e(d)=1^{|d|}0d\,1^{r(d)}0$ for valid payloads. The first field uniquely ends at d's last bit, and the first zero thereafter uniquely ends the padding. Thus no valid code is a proper prefix of another, and distinct payloads give distinct codes. To validate a word, first recover d and prepare a copy on D's input tapes, costing $O(|d|+1)$. Then run one step of D while advancing a separate head by one padding symbol. Reject an early zero or blank before D halts, and after its r(d) steps require the next symbol to be the padding's terminal zero and no trailing input. Reject also if D rejects d. A too-short malformed word is rejected as soon as the available padding expires; the validator never completes an arbitrarily long D run after input exhaustion. This gives $O(|e|+1)$ time on all words, not only on valid codes. [step 1.1]

3.1 For universal recognition use the same parsing but regard everything after the terminal zero as data x. If parsing fails, reject. A fixed multitape interpreter stores the decoded table on one tape, the two simulated tapes in binary symbol blocks on two tapes, and the state and temporary fields on a fixed number of scratch tapes. For each fixed e, symbol blocks have a fixed width depending on e; translating the input into such blocks costs $O_e(|x|+1)$. At each step the interpreter reads the two current blocks, scans the stored finite table to find precisely the listed instruction options, guesses one, updates the two blocks and state, and moves the simulated heads to adjacent blocks. Boundary flags on block zero implement the clamped move. Scratch heads return to their bounded working zones after each step. Program and field scans cost a constant depending on e, never on x or the number of simulated steps. [step 1.1, step 2.1]

4.1 Every interpreter branch therefore corresponds to an actual instruction sequence, and accepts exactly at a simulated accepting state. Every accepting t-step run of $M_e$ yields a branch taking at most $a_e(|x|+t+1)$ interpreter steps, including code parsing; the fixed parsing cost is absorbed into $a_e$. Infinite computations need not halt. Apply F3 once to this one fixed interpreter, not separately to each code, obtaining one two-tape U. Its constant simulation factor and the input length $|e|+|x|$ yield constants $c_e,d_e$ with the asserted bound. Empty data x is allowed; an invalid or incomplete prefix gives no accepting branch. No decoding-time bound for the unpadded legacy syntax was assumed. [F3, step 2.1, step 3.1] ∎
