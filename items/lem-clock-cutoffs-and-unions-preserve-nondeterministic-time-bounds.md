---
id: "lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds"
kind: "lemma"
title: "Clocks, cutoffs, and finite unions preserve nondeterministic time bounds"
status: "draft"
origin: "pipeline"
deps: ["def-nondeterministic-acceptance-time-and-exact-clock", "lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time"]
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
    - title: "Seiferas, Fischer, and Meyer, Lemma 1 and clock discussion, pp. 148-149"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
proof_strategy: "direct"
---

## Statement

For fixed acceptors A,B there are acceptors for $L(A)\cup L(B)$ and $L(A)\cap L(B)$ with shortest acceptance bounded respectively by $O(n+\min(\tau_A(x),\tau_B(x))+1)$ and $O(n+\tau_A(x)+\tau_B(x)+1)$ on the corresponding accepted inputs. Exact-clock cutoffs $L_T(A)$ have all-branch-halting machines with time $O_A(n+T(n)+1)$. These machines can be converted to two-tape acceptors with fixed linear shortest-acceptance overhead; all-branch bounds are asserted for the clocked constructions, not for an unclocked guessing simulator.

## Facts & Assumptions

**Given:** Fixed finite descriptions A,B and, when used, an exact clock T.

[F1] Shortest acceptance and the inclusive last-round cutoff clock are defined in [[def-nondeterministic-acceptance-time-and-exact-clock]].

[F2] Two-tape normalization preserves the language and costs $O(n+t+1)$ on a shortest accepting branch ([[lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time]]).

## Proof

1.1 For union, make an initial nondeterministic choice between two tagged branches. Copy the input to the selected machine's disjoint tapes and run it, accepting only on its acceptance. Thus a resulting accepting branch supplies acceptance by A or B, and each such acceptance supplies a branch of the union machine. Copy and setup cost at most $c(n+1)$; use the faster accepting alternative to obtain the displayed minimum bound, interpreting the other alternative as infinity when necessary. A divergent unselected computation has no effect. [F1, construct]

1.2 For intersection, prepare two input copies on disjoint tape sets. Simulate A, and only after an accepting branch of A continue with B on its untouched copy; accept only when B also accepts. A successful branch therefore witnesses both memberships. Conversely concatenate any two finite accepting instruction sequences, using the two independent copies. Their combined length plus copying cost is bounded by $c(n+\tau_A(x)+\tau_B(x)+1)$ for a fixed c. If either machine has no accepting branch, no combined branch accepts. [F1, construct]

1.3 For a cutoff, simulate A and its exact clock in rounds on disjoint tapes, testing A's acceptance no later than the inclusive last round. Every branch rejects at expiry unless already accepted. This recognizes precisely $L_T(A)$ and halts on every branch within $O_A(n+T(n)+1)$. For a fixed integer factor in the desired cutoff, use that many sequential clock runs as in F1. Finite unions/intersections of such clocked machines also halt on every branch, since there are finitely many sequential calls each with a bound; the corresponding min/sum estimates for acceptance remain valid. [F1]

2.1 Apply F2 to any of the fixed acceptors above if two tapes are required, multiplying the bounds by a fixed constant and adding $O(n+1)$. This does not by itself claim that the normalized machine halts on every branch; its guessing phase may diverge. When an all-branch result is required, use the direct clocked multitape construction from step 1.3, or separately supply and run an adequate clock after normalization. Empty inputs cost a constant; if both union languages are empty or one intersection language is empty, the construction correctly has no accepting branch. No choice beyond two finite alternatives is used. [F2, step 1.1, step 1.2, step 1.3] ∎
