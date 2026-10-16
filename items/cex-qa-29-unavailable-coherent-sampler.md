---
id: cex-qa-29-unavailable-coherent-sampler
kind: counterexample
title: "Sample-only access is not coherent sampler access"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-29-coherent-sampler
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; this is a distinction between two finite access interfaces."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Sections 1–2"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement refuted

A classical interface that returns independent samples from a finite law, by itself, supplies a coherent unitary sampler together with its inverse, controlled calls, value computation, and state reflections at no additional cost.

## Facts & Assumptions

**Given:** A sample-only procedure whose sole operation returns a classical sample; it exposes no circuit or oracle acting on quantum registers.

[F1] [[def-qa-29-coherent-sampler]] requires an explicitly supplied unitary $V$ with the stated coherent output state, as well as explicit inverse and controlled access and the value/rotation interfaces.

## Counterexample
1.1 Let $D$ be a classical procedure that, on each call, returns a bit $x\in\{0,1\}$ with $\Pr(x=1)=p$. Its interface is a classical input/output map from a fresh random seed to a bit; it has no quantum-register input and specifies no unitary $V$. [given, construct]

2.1 The law of $D$ does not provide a circuit for $V|0\rangle=\sqrt{1-p}|0\rangle|0\rangle|w_0\rangle+\sqrt p|1\rangle|1\rangle|w_1\rangle$, nor circuits for $V^\dagger$, controlled $V$, value rotations, or reflections. Thus the sample-only object fails the explicit interface required by [F1] and cannot be substituted directly into QA29's coherent-query bound. [given, F1, step 1.1, algebra]

3.1 This refutes the statement about the interface alone. It does not rule out constructing a separate coherent preparation circuit from additional information about $p$; such a circuit and all its costs would be new supplied inputs. [F1, step 2.1] ∎