---
id: "lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time"
kind: "lemma"
title: "Linear acceptance-time simulation on two tapes"
status: "draft"
origin: "pipeline"
deps: ["def-nondeterministic-acceptance-time-and-exact-clock", "def-multitape-and-nondeterministic-machines"]
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
    - title: "Seiferas, Fischer, and Meyer, Lemma 3, pp. 149-150"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Statement

For every fixed finitely branching nondeterministic $k$-tape machine $M$ there is a nondeterministic two-tape machine $S$ recognizing the same language, with constants $c,d$ such that $\tau_S(x)\le c(|x|+\tau_M(x))+d$ whenever $M$ accepts $x$. Every accepting branch of $S$ verifies a genuine accepting branch of $M$. The tapes are semi-infinite and left-clamped.

## Facts & Assumptions

**Given:** A fixed finite transition table and positive tape count $k$.

[F1] Shortest acceptance, finite branching and the clamped L/R model, including constant-overhead bookkeeping macros, are fixed in [[def-nondeterministic-acceptance-time-and-exact-clock]].

[F2] Each transition reads one symbol per tape, writes one symbol per tape and moves each head one position ([[def-multitape-and-nondeterministic-machines]]).

## Proof

1.1 A display consists only of the state and the $k$ scanned symbols, not whole tape configurations. Guess on tape two a sequence $D_0,A_0,D_1,A_1,\ldots,A_{t-1},D_t$ of displays and chosen instructions, ending with a delimiter. Each display and instruction is one letter from a finite alphabet depending on M. While guessing, check that $D_0$ has the initial state, each $A_j$ is allowed for the state and scanned symbols in $D_j$, its target state is that of $D_{j+1}$, and only the last display has an accepting state. Reject premature halting states. A branch may guess forever, which is permitted for an acceptor; finite guesses cost $O_M(t+1)$. [F1, F2, construct]

2.1 Rewind tape two. Use tape one, still containing the original input, as the first simulated tape. For each $j$, compare its actual scanned symbol with the first-tape component of $D_j$, rejecting a mismatch, then perform on tape one the write and move specified by $A_j$. Advance tape two to the next display. At $D_t$ also check the final scanned symbol. During this pass both heads move only constantly many times per record; tape one's head physically follows the simulated head, so a left move at zero is automatically clamped. Input symbols never visited retain their input values. [F1, F2, step 1.1]

3.1 Before the next virtual-tape pass, erase tape one and return its head to zero. This can be done in $O_M(|x|+t+1)$ time: initially scan the input and mark an extra right delimiter beyond its extent; maintain a track marking the furthest initialized or visited cell, moving the frontier mark one cell when a replay first reaches it. The replayed tape symbols occupy a separate track, so the delimiter/zero marks do not alter comparisons. A sweep from zero through this frontier erases the tape, and a reverse sweep returns to zero. It lies within $\max(|x|,t)+1$. Rewind the display tape, whose length is $O_M(t+1)$, and replay the second virtual tape starting blank. Repeat for each remaining tape, always comparing its own component of every display and executing that component of each action. There are exactly k passes. [step 1.1, step 2.1, F2]

4.1 On an accepting verification, each tape's replay proves by induction on j that its displayed scanned symbols agree with the tape contents obtained from the input and the preceding actions. The state checks and instruction checks were already made while guessing. Hence all components together satisfy M's full transition table at every step and the last state accepts. Conversely the displays/actions of any accepting t-step computation pass all these tests. This proves language equality and the stated soundness for every accepting branch, even if other guesses diverge or reject. [step 1.1, step 2.1, step 3.1]

5.1 The initial input scan, guessing, k replay passes, k erasures and rewinds together take at most $c_M(|x|+t+1)$ transitions for one fixed $c_M$. Use a shortest accepting computation and absorb the additive constant into d. Empty input only requires its marked blank zero cell, and t=0 could be checked by the same display procedure, though the fixed distinct initial/accepting states forbid an actual zero-step accepting run. All choices are finite instruction guesses; no AC is used. [F1, step 3.1, step 4.1] ∎
