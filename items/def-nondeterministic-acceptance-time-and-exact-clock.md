---
id: "def-nondeterministic-acceptance-time-and-exact-clock"
kind: "definition"
title: "Nondeterministic acceptance time and exact clocks"
status: "draft"
origin: "pipeline"
deps: ["def-nondeterministic-accepting-computation", "def-dtime-ntime-dspace-and-nspace", "def-worst-case-time-and-space-complexity", "def-uniform-asymptotic-time-space-comparison", "def-machine-time-and-space-constructibility"]
justified_by: []
landmark: false
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, pp. 147-148"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
---

## Definition

For a fixed finitely branching nondeterministic multitape machine $N$, let $\tau_N(x)$ be the minimum length of an accepting branch, or $\infty$ if there is none. The minimum of a nonempty set of natural lengths exists by searching lengths in increasing order. This extends the existential acceptance convention in [[def-nondeterministic-accepting-computation]] to the finite-valued multitape transition map in [[def-dtime-ntime-dspace-and-nspace]]. Nonaccepting branches may diverge. For a finite integer $t$, acceptance within $t$ means $\tau_N(x)\le t$. For $b:\mathbb N\to\mathbb N$, put $L_b(N)=\{x:\tau_N(x)\le b(|x|)\}$. The acceptance-time class for $b$ consists of languages $L(N)$ with $\tau_N(x)=O(b(|x|))$ on their accepted inputs, uniformly in the input and with fixed machine-dependent constants.

This differs at the machine level from the maximum-branch convention in [[def-worst-case-time-and-space-complexity]]. The library class NTIME uses all-branch halting as in [[def-dtime-ntime-dspace-and-nspace]]. Big-O and little-o have the zero-safe and finite-exception meanings in [[def-uniform-asymptotic-time-space-comparison]].

An **exact clock for $T$** here is a deterministic fixed multitape machine that halts after exactly $T(n)$ transitions on every binary input of length $n$. Its initial state is nonhalting, so $T(n)\ge1$. We do not require monotonicity. The exact-clock clause of [[def-machine-time-and-space-constructibility]] motivates the terminology but its separate nondecreasing guard is not imported into this local definition; a unary-only clock can be run after copying a binary input to unary, paying $O(n+1)$ preprocessing time. No equivalence with an output constructor is asserted.

For an acceptor $N$ and such a clock, copy the input for $N$ to one tape set and simultaneously write one binary $0$ per input symbol to the clock's input tape, producing $0^{|x|}$ even when $N$ has a nonbinary input alphabet. Then perform one simulated transition of each machine per round. Check acceptance at the initial instant and after each N-transition, including the last allowed one; after the clock's $T(n)$th transition reject if no acceptance has occurred. Missing transition options count as rejecting branches. This recognizes exactly $L_T(N)$: an accepting branch of length at most T survives, and every surviving acceptance came from such a branch. Every branch terminates in $O_N(n+T(n)+1)$ real transitions. Temporary stay-put bookkeeping is implementable in the L/R-only model by a two-move excursion right and left, returning to the same cell even at zero, with intermediate states not halting.

To retain a bound $C T(n)$ rather than just $T(n)$, run C clock copies sequentially while continuing N for one step per simulated clock transition; for a fixed integer C this is still $O_N(n+T(n)+1)$. Resets or prebuilt copies cost the same order. If an acceptor recognizes a language within $O(T)$ and $T\ge n$, choose C covering the tail bound and the finitely many accepting exceptions (T is positive there). This yields an all-branch machine for the same language in NTIME(T). There is no such conversion asserted for arbitrary unclocked recursive b.
