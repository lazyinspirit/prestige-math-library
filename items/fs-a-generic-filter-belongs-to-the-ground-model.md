---
id: "fs-a-generic-filter-belongs-to-the-ground-model"
kind: "false-statement"
title: "A generic filter belongs to its ground model"
deps: ["prop-atomless-generics-are-not-ground-model-elements", "cor-generics-exist-over-countable-transitive-models", "ex-cohen-name-valuation-and-dense-set-meeting"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Theorems 1.13–1.14 p4; one-point forcing boundary
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

False claim, conditional on a supplied externally countable transitive ZF model M: every M-generic filter for a forcing notion in M belongs to M.

## Facts & Assumptions

**Given:** ZF conditional on the supplied countable transitive model and enumeration. Cohen splitting gives atomlessness, a generic exists by least-index recursion, and its failure to be ground-model follows both from the dense-complement theorem and the real-union calculation.

[F1] [[prop-atomless-generics-are-not-ground-model-elements]]: An M-generic filter on atomless forcing is not in M.

[F2] [[cor-generics-exist-over-countable-transitive-models]]: A supplied external enumeration produces an M-generic filter through any condition in ZF.

[F3] [[ex-cohen-name-valuation-and-dense-set-meeting]]: For Cohen forcing the union of a generic filter is a total binary sequence different from every ground-model binary sequence.

## Refutation

1.1 In the supplied M use $P=2^{<\omega}$ with extension order. Its finite sequences and order are the actual ones by transitivity and actual omega. Below each s the sequences formed by appending 0 and 1 are incompatible, so P is atomless. Apply F2 through the empty condition to obtain an M-generic filter G. [F2, construct]

2.1 F1 now gives $G\notin M$, refuting the universal claim. Equivalently, F3 makes $\bigcup G$ a binary sequence not in M, whereas G in M would put its actual union in M by internal Union and transitivity. The counterexample remains conditional on the supplied model; ZF does not here prove that such a model exists. Singleton forcing still has a ground-model generic filter, so the false claim is not replaced by an unconditional assertion about all forcing orders. [F1, F3, step 1.1] ∎
