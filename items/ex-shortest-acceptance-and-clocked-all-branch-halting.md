---
id: "ex-shortest-acceptance-and-clocked-all-branch-halting"
kind: "example"
title: "Shortest acceptance versus clocked all-branch halting"
status: "draft"
origin: "pipeline"
deps: ["def-nondeterministic-acceptance-time-and-exact-clock", "lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds"]
justified_by: []
landmark: false
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, pp. 147-149"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
generation:
  role: "example"
proof_strategy: "direct"
---

## Example

Let N have distinct states $q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},q_\infty$. For each scanned symbol a, its initial options are $(q_{\mathrm{acc}},a,L)$ and $(q_\infty,a,R)$. At $q_\infty$ the only option writes the scanned symbol unchanged, moves right and stays in $q_\infty$. Thus on every binary input it has a one-step accepting branch and a diverging branch. A one-transition exact clock converts its cutoff to an all-branch-halting acceptor.

## Facts & Assumptions

**Given:** The displayed finite machine, on any input x including the empty word.

[F1] Shortest acceptance takes a minimum and may coexist with divergence; an inclusive exact-clock cutoff preserves precisely the timely accepting branches ([[def-nondeterministic-acceptance-time-and-exact-clock]]).

[F2] Cutoff scheduling gives a bounded all-branch machine for the cutoff language ([[lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds]]).

## Verification

1.1 On either a bit or the blank scanned for empty x, N's first option enters the accepting state in one transition. Its start state is not accepting, so no length-zero acceptance exists and $\tau_N(x)=1$. On the other branch it reaches cell one in state $q_\infty$ after the first transition and cell t in that state after t transitions, for every $t\ge1$. Hence this branch never halts and N has no finite all-branch running-time function. Its language is nevertheless all binary words. [F1, given]

2.1 Take a clock whose first transition on every symbol enters its halt state, so T(n)=1 exactly. Here its transition can be incorporated directly into the finite control: make the same two initial choices as N, but replace the $q_\infty$ target by rejection. The resulting machine C has precisely two one-step branches, one accepting and one rejecting, on every input. Thus every branch halts after one step and $L(C)=\{x:\tau_N(x)\le1\}=\{0,1\}^*$. This is an explicit optimized instance of the inclusive product-clock construction of F2, with no copying needed. [F1, F2, step 1.1]

3.1 If one tests the cutoff zero instead, its language is empty because the initial state is nonaccepting. A decider can recognize it by a single rejecting transition, but it is not a zero-transition physical exact clock. At cutoff one, testing acceptance before expiry matters: rejecting immediately at the clock's last transition without testing N's simultaneous acceptance would incorrectly remove all inputs. C keeps that acceptance, as its two explicit branches show. This separates raw shortest and worst-branch times while verifying the correct clocked language and endpoints without AC. [F1, step 1.1, step 2.1] ∎
