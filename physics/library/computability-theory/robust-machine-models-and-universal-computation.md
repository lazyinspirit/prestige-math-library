---
page: robust-machine-models-and-universal-computation
title: "Robust Machine Models and Universal Computation"
status: published
items:
  - def-effective-encoding-of-turing-machines
  - lem-machine-encoding-is-injective-and-decodable
  - thm-stay-put-moves-can-be-eliminated
  - thm-one-way-and-two-way-tapes-are-equivalent
  - thm-multitape-machines-have-one-tape-simulations
  - lem-multitape-simulation-has-quadratic-time-overhead
  - thm-nondeterministic-and-deterministic-recognizability-agree
  - def-random-access-and-register-machine-programs
  - thm-ram-register-and-turing-computability-agree
  - def-universal-turing-machine
  - lem-step-by-step-interpreter-for-machine-codes
  - thm-existence-of-a-universal-turing-machine
  - cor-effective-enumeration-of-turing-machines
  - def-church-turing-thesis
  - rem-model-equivalence-supports-but-does-not-prove-the-thesis
  - fs-universality-decides-halting
examples: []
---

This page records the standard robustness results around Turing computability.
Finite variations of the machine model do not change which languages are
recognizable or which partial functions are computable, concrete machine codes
can be decoded and enumerated effectively, and one fixed machine can simulate
every coded machine. The closing items state the Church-Turing thesis honestly:
the equivalence theorems support it, but they do not convert the informal idea
of an effective procedure into a theorem by themselves.
