---
id: def-qa-35-finite-communication-protocol
kind: definition
title: "Finite communication problem and protocol model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: ["def-promise-problem", "def-qc-register-and-computational-basis", "def-qc-density-operator", "def-qc-povm-and-outcome-law", "def-qc-circuit-cost-model"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§1.1.3 (operator decompositions and norms), §2.1.2 (density operators), §2.3.1 (measurements), and §3.1.1, Theorem 3.4 (binary state discrimination)."
---

## Definition

A **finite communication problem** consists of nonempty finite input sets $X,Y$, disjoint sets $YES,NO\subseteq X\times Y$ with nonempty promise $P=YES\cup NO$, and a required output bit on promised pairs. This is the finite-relation generalization of a binary-string promise problem ([[def-promise-problem]]): choose fixed injective labels $c_X:X\to\{0,1\}^*$ and $c_Y:Y\to\{0,1\}^*$, and encode a pair by
$$e(x,y):=1^{|c_X(x)|}0\,c_X(x)c_Y(y).$$
The unary length prefix makes $e$ injective, so $e(YES)$ and $e(NO)$ are disjoint subsets of $\{0,1\}^*$. This encoding only formalizes the relation; it is not a transmitted message or part of communication cost unless a protocol explicitly sends it. A protocol specifies who receives each input, the message schedule and number of rounds, each message alphabet or finite-dimensional register ([[def-qc-register-and-computational-basis]]), the local maps that produce messages, the referee's finite POVM ([[def-qc-povm-and-outcome-law]]) and output rule, and any shared randomness or entanglement. A quantum message state is a density operator, meaning nonnegative with trace one ([[def-qc-density-operator]]). Its worst-case error is the supremum of the probability of a wrong output over promised input pairs; its communication cost is the maximum total number of transmitted bits or qubits on any promised input. Local computation, referee computation, and shared resources are separately declared and are not silently included in that communication count.

In a simultaneous-message protocol (SMP), Alice and Bob each send one message to a referee without seeing the other's message. For classical private-coin SMP with no shared resource, conditional on inputs $x,y$ the two messages are independent, so their joint law is a product of their individual message distributions. For quantum SMP with no shared entanglement or randomness, the received state is a product of the two locally prepared density operators. These factorization properties are part of the stated resource model.
