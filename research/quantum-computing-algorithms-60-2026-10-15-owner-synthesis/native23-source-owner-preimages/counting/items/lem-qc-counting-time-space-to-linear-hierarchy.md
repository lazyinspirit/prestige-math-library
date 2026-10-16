---
id: lem-qc-counting-time-space-to-linear-hierarchy
kind: lemma
title: "Counting time space to linear hierarchy"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-unbounded-error-time-space-counting-model
  - thm-qc-uniform-threshold-iterated-integer-arithmetic
  - lem-qc-logspace-predicates-in-linear-counting-hierarchy
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, Lemma 5"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Hesse, Allender, and Barrington, Uniform Threshold Circuits for Division"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
proof_strategy: direct
---

## Statement

For constants alpha>1 and 0<beta<1 there exists finite integer tau(alpha,beta) with PrTISP(n^alpha,n^(1−beta)) contained in LCH_tau.


## Facts & Assumptions

**Given:** α>1, 0<β<1, and a strict-majority probabilistic machine M that halts on every branch within T=⌈n^α⌉ steps and visits at most S=⌈n^{1−β}⌉ work cells.

[F1] The model and LCH access convention are fixed by [[def-qc-unbounded-error-time-space-counting-model]].

[A1] [[thm-qc-uniform-threshold-iterated-integer-arithmetic]] supplies the uniform constant-depth threshold subcircuits for large integer sums/products. Its product proof is unresolved, so this lemma is conditional and escalated.

[A2] [[lem-qc-logspace-predicates-in-linear-counting-hierarchy]] is the intended fixed-level simulation of the logspace-uniform gate-address predicates. Its proof is unresolved.

## Proof

1.1 After a branch halts, consume each remaining fair bit on two parallel dummy edges that merge into the same unchanged halted state. Thus every length-T random string corresponds to exactly one path, including the 2^{T−t} suffix choices after a t-step halt. M accepts with probability greater than one half exactly when the number of length-T accepting paths exceeds 2^{T−1}. Add the time t to every configuration; the resulting configuration graph is acyclic and has at most 2^{O(S+log T)} configurations. [F1, given, construct]

1.2 For path counts of length L, choose q=⌈n^β⌉ checkpoints spaced at most ⌈L/q⌉ transitions apart. Sum over all checkpoint configurations and multiply the q segment-path counts. Each checkpoint uses O(S+log T) bits, so one level has at most 2^{O(qS)}=2^{O(n)} checkpoint tuples. Repeating this factorization a fixed r>α/β times reduces the segment length from T to O(1); ceilings alter each length by at most one, which is absorbed by choosing r with strict slack. Thus the accepting-path count is computed by a constant-depth arithmetic circuit of size 2^{O(n)}, with O(T) output bits. [step 1.1, construct, algebra]

2.1 Replace every arithmetic sum and product node by the circuits in [A1]. Fan-in, operand length and output length are bounded by 2^{O(n)} and O(T), respectively; the substitutions keep constant depth and total size 2^{O(n)}. Gate labels contain the machine configuration descriptors, checkpoint tuple, arithmetic-gate address and local circuit address, all using O(n) bits. The transition relation and direct one-step path predicates are decidable from these labels and the input in O(n) sequential time. [A1, step 1.2, construct]

2.2 Convert each nonstrict MAJ gate to a strict threshold by appending one constant-one input when its original fan-in is even; for odd fan-in the thresholds already agree. Convert AND/OR to strict majority using N−1 constant zeros/ones, respectively. If the resulting fan-in is N and P is the next power of two, append ceil((P−N)/2) constant-one inputs. For N even the difference P−N is even and this preserves the strict threshold; for N odd it is odd and the added ones make the threshold x≥(N+1)/2, again exactly x>N/2. The fan-in is now P, so a linear-time probabilistic oracle machine chooses a predecessor uniformly with log₂P fair bits and queries whether it evaluates to 1. For a NOT gate it queries its unique predecessor and accepts exactly on answer 0. Induction on the constant circuit depth shows that a gate's value is decided by one more LCH oracle level; the uniform gate-address predicate uses a fixed lower level by [A2]. [step 2.1, F1, A2, induction]

2.3 The depth is a fixed constant depending only on α,β, and the uniform address predicate has a fixed LCH level; hence a finite τ(α,β) suffices. This proves the containment provided [A1] and [A2] are proved with the required uniformity. [step 2.2, A1, A2]
