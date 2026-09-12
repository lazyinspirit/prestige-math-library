---
id: "lem-no-recursive-bound-covers-all-recursive-unary-languages"
kind: "lemma"
title: "No recursive bound covers all recursive unary languages"
status: "draft"
origin: "pipeline"
deps: ["def-nondeterministic-acceptance-time-and-exact-clock"]
justified_by: []
landmark: false
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, Corollary 2.1, p. 148"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Statement

For every total recursive $b:\mathbb N\to\mathbb N$ there is a recursive unary language $R\subseteq\{1\}^*$ which no nondeterministic finite-tape machine recognizes with shortest acceptance time $O(b(n))$. The assertion permits zero values of b, arbitrary fixed machine constants and finite exceptional lengths.

## Facts & Assumptions

**Given:** One total algorithm computing b on natural inputs.

[F1] Nondeterministic machines have finite descriptions and finite branching; shortest-time bounds are uniform on the accepted inputs after a finite threshold ([[def-nondeterministic-acceptance-time-and-exact-clock]]).

## Proof

1.1 Enumerate all finite-tape nondeterministic machines, without a time claim for the enumeration. To be explicit, prepend a positive tape count $k$ to a finite numeric table: state/alphabet sizes and a list of allowed instructions for each state and $k$-symbol tuple, each instruction giving a state, $k$ written symbols and $k$ direction bits. This elementary enumeration needs no universal-simulation theorem. Encode each natural $a$ by the self-delimiting word $1^{|\operatorname{bin}(a)|}0\operatorname{bin}(a)$, where $\operatorname{bin}(a)$ is its ordinary binary notation (use $0$ for zero). Prepend the number of table entries, then encode each entry's number of fields and its fields by these words. Decoding is total on finite input strings: read the unary length up to the first zero and then exactly that many bits; if either segment ends early, or trailing bits remain after the advertised entries, declare the code invalid. Once $k$ and the finite state and alphabet sizes are recovered, check the source-tuple list, each instruction's fixed arity, and all finite state/symbol/direction bounds. Invalid strings denote a fixed rejecting machine. Enumerate all binary strings by length and lexicographic order. Every actual finite table has a valid encoding and hence occurs at some index $e$. Enumerate triples $(e,c,j)$ with $c\ge1,j\ge0$ by increasing $e+c+j$, lexicographically within each finite diagonal. Assign the $n$th triple to length $n$. Each pair $(e,c)$ consequently appears at infinitely many, hence unbounded, lengths. [F1, construct]

2.1 On input $1^n$, find its assigned $(e,c,j)$, compute b(n), and exhaust the finite computation tree of $M_e$ on $1^n$ through depth $c b(n)$. This is a terminating deterministic calculation: at each node the table has finitely many options, and the depth is a computed natural number. Decide membership in R by the opposite of whether any accepting node occurs by that depth. Reject nonunary words if a binary decider is desired. This makes R recursive with no claimed efficient bound. At b(n)=0 inspect just the initial node, so the construction still terminates. [step 1.1, F1]

3.1 Suppose some $M_e$ recognizes R with shortest-time bound $C b(n)$ at all accepted lengths $n\ge N$. Choose an integer $c\ge\max(1,C)$ and an assigned length $n\ge N$ for the pair $(e,c)$, possible by step 1.1. If the bounded tree contains acceptance, the construction declares $1^n\notin R$ although $M_e$ accepts it. If it contains no acceptance, it declares $1^n\in R$, so the supposed recognition and time bound give an accepting branch of length at most $C b(n)\le c b(n)$, again contrary to the tree result. Both alternatives contradict the assumption. [step 1.1, step 2.1, F1]

4.1 Therefore R has the claimed property. Repeating each pair at unbounded lengths, rather than merely enlarging c, handles finite exceptions even when b vanishes there. The enumeration, bounded tree search and selecting the first assigned length above N are effective finite or natural-number constructions and require no AC. No two-tape time normalization was used, so the result remains valid for sublinear or zero b. [step 3.1] ∎
