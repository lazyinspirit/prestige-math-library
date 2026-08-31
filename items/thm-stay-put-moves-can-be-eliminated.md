---
id: thm-stay-put-moves-can-be-eliminated
kind: theorem
title: "Stay-put moves can be eliminated from fixed-tape Turing-machine models"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multitape-and-nondeterministic-machines, def-language-recognized-and-decided, def-partial-function-computed-by-a-machine]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Abrahim Ladha, Georgia Tech CS 4510, Lecture 10: Church-Turing Thesis, section 5.1"
      url: "https://cryptolab.gtisc.gatech.edu/ladha/4510/CS4510L11.pdf"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 6: TM Variants, Church-Turing Thesis"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/7405f6112c8ca7242e1edd9a021c1e63_MIT18_404f20_lec6.pdf"
---

## Statement

Fix $k\ge 1$. Let $M$ be a deterministic $k$-tape Turing machine variant whose
transition table is allowed to use the move set $\{L,R,S\}$. Then there exists
a deterministic $k$-tape Turing machine $\widehat M$ using only the move set
$\{L,R\}$ such that, on every input, $\widehat M$ has the same accept, reject,
diverge, and output behavior as $M$.

## Facts & Assumptions

**Given:** A fixed integer $k\ge 1$ and a deterministic $k$-tape machine variant $M$ as in the statement.

[L1] A deterministic $k$-tape Turing machine has $k$ right-infinite tapes, $k$ head positions, and one simultaneous move on each tape at each step, by [[def-multitape-and-nondeterministic-machines]].

[F1] For either $k$-tape variant, extend the clauses of
[[def-language-recognized-and-decided]] and
[[def-partial-function-computed-by-a-machine]] using the machine's accept,
reject, and divergence behavior and taking its first tape as the output tape.

## Proof

**Proof technique:** direct.

1.1 Before simulation, $\widehat M$ uses a finite preprocessing routine to place virtual cell $j$ of every tape at physical cell $2j$. On the first tape it shifts the finite input symbols to the even cells and writes `#` in the intervening odd cells; every blank work tape starts with a tagged blank at cell $0$. Tagged copies of all simulated symbols at physical cell $0$ let the control detect the left boundary. Heads on tapes not currently being prepared execute harmless right-then-left bounces, and the finite routine is padded to return every head to cell $0$. Thus preprocessing uses only left/right moves, terminates on every finite input, and begins each simulated step with every head on an even cell. [given, construct]

2.1 Consider one transition of $M$ that writes $b_1,\dots,b_k$, requests $D_i\in\{L,R,S\}$, and has next state $p$. Replace it by a two-step macro through a fresh auxiliary state that remembers $p$ and the requested directions. In the first microstep, $\widehat M$ writes $b_i$ at the scanned even cell—using its tagged copy at physical cell $0$—and moves head $i$ by $R$ for $D_i\in\{R,S\}$, by $L$ for a nonboundary $D_i=L$, and by $R$ for a boundary-clamped $D_i=L$. In the second microstep, each scanned odd cell is treated as a spacer whether it already contains `#` or is a fresh blank, and is written as `#`; head $i$ then moves $R$ for virtual $R$ and $L$ in the other three cases. The net displacements $RR,RL,LL,RL$ represent virtual right, stay, nonboundary left, and clamped left, respectively. Because $k$ and the alphabets are fixed, the finitely many tuples of spacer symbols and direction cases fit in a finite transition table. [L1, step 1.1, construct]

3.1 After step 2.1, every traversed odd cell is a separator, each $b_i$ occupies the correct even cell, origin symbols remain tagged, and every head is on the even cell encoding its simulated successor position. Hence the represented virtual configuration is exactly the one-step result of $M$, including left-boundary clamping and moves into previously unrepresented blank cells. [step 1.1, step 2.1]

4.1 Apply the macro to every source transition. If its remembered state $p$ is halting, $\widehat M$ postpones entering that state while a finite routine copies the first tape's even cells cell-for-cell to ordinary cells $0,1,\ldots$, removes the origin tag, preserves internal blanks, and erases all separators and later encoded cells; unused tape heads execute harmless bounces during this cleanup. Only then does it enter the corresponding halting state. By step 3.1, induction on simulated steps gives the same acceptance, rejection, divergence, and exact first-tape output on the original unencoded input. [step 1.1, step 3.1, construct]

5.1 Therefore the matching behavior in step 4.1 means, by [F1], that $\widehat M$ preserves every recognized or decided language and every computed partial function. [F1, step 4.1] ∎
