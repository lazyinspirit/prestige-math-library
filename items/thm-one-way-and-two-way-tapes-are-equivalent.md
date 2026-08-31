---
id: thm-one-way-and-two-way-tapes-are-equivalent
kind: theorem
title: "One-way and two-way infinite tape conventions are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-stay-put-moves-can-be-eliminated, def-language-recognized-and-decided, def-partial-function-computed-by-a-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elaine Rich, Automata Theory and Applications, Theorem 17.5"
      url: "https://www.cs.utexas.edu/~ear/cs341/automatabook/AutomataTheoryBook.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Statement

The deterministic one-tape Turing-machine convention with a right-infinite tape
indexed by $\mathbb N$ and the convention with a two-way infinite tape indexed
by $\mathbb Z$ have the same computational power: they recognize and decide the
same languages and compute the same partial functions on binary strings.

## Facts & Assumptions

**Given:** The one-way and two-way tape conventions described in the statement.

[L1] Stay-put moves may be eliminated without changing accepted languages or computed partial functions, by [[thm-stay-put-moves-can-be-eliminated]].

[F1] Extend the clauses of [[def-language-recognized-and-decided]] and
[[def-partial-function-computed-by-a-machine]] to the two-way convention. Input
occupies cells $0,1,\ldots$ and all negative cells are initially blank. A
halting two-way configuration outputs a word $u$ exactly when $u$ occupies
cells $0,\ldots,|u|-1$ and every other cell in $mathbb Z$ is blank. Thus a
nonblank negative cell prevents the configuration from outputting an ordinary
word.

## Proof

**Proof technique:** direct.

1.1 Given a right-infinite-tape machine, let a two-way simulator use tagged copies of tape symbols at cell $0$, so it can recognize the simulated boundary. Every ordinary move is copied directly except a simulated left move at cell $0$: after performing the write, the simulator moves right in a fresh auxiliary state and then left without changing the intervening symbol, thereby returning to cell $0$ in the requested next state. If that next state is halting, it is postponed until the return move; before any halt, a finite sweep removes the origin tag. Hence the two-way simulator never visits a negative cell and has exactly the source machine's accept, reject, divergence, and output behavior. [given, construct]

1.2 For the converse, enlarge the one-way simulator's finite alphabet by ordered pairs, marked copies, and special origin symbols. It converts ordinary contiguous input into a folded representation by finitely many sweeps: cell $0$ stores the two-way origin, while cell $n\ge1$ stores the ordered pair of symbols at $+n$ and $-n$, initially with every negative component blank. Exactly one stored symbol or pair component is marked to record the simulated head. Because every configuration has finite tape support and one head position, initialization terminates and every folded encoding has finite support. [given, construct]

2.1 A simulated move changes only one stored symbol and the marked component. Moving right from $+n$ to $+(n+1)$ or left from $-n$ to $-(n+1)$ shifts the mark one cell to the right; moving left from $+n$ to $+(n-1)$ or right from $-n$ to $-(n-1)$ shifts it one cell to the left; and the four boundary transitions through the origin move the mark between cell $0$ and cell $1$. Thus one deterministic one-tape machine can update the folded representation by a finite local macro for each source transition. [step 1.2, construct]

3.1 Induction on simulated steps shows that the folded machine represents the current two-way configuration exactly. On a simulated halt it postpones its own halting state and scans the finite folded encoding. If every negative component is blank, it copies the nonnegative components cell-for-cell to cells $0,1,\ldots$, preserving internal blanks, and erases all auxiliary cells. If some negative component is nonblank, the source has no ordinary-word output by [F1]; the simulator likewise leaves a fixed malformed pattern consisting of a blank cell $0$ followed by a nonblank auxiliary marker. It then enters the corresponding halting state. Thus it preserves acceptance, rejection, divergence, and whether—and which—ordinary word is output. If a local macro uses stay-put housekeeping, [L1] removes it without changing behavior. [F1, L1, step 1.2, step 2.1, construct]

4.1 Combining steps 1.1 and 3.1, the two conventions have identical behavior on every input; by [F1], they therefore recognize and decide the same languages and compute the same partial functions. [F1, step 1.1, step 3.1] ∎
