---
id: thm-qc-oracle-phase-query-cost-boundary
kind: theorem
title: "Oracle phase queries and compiled gate costs are distinct"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qc-coherent-function-oracle
  - thm-qc-phase-kickback-from-xor-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - thm-qc-reversible-embedding-cost
  - def-qc-elementary-circuit-resources
  - def-qc-controlled-unitary-access
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp.14–20: reversible embedding and its gate costs."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.4, printed p.17: an oracle query and phase-query implementation by kickback."
---

## Statement

An invocation counts as one oracle query only under an explicit oracle-access contract. A declared phase oracle therefore costs one phase query per invocation. A declared XOR oracle for a Boolean function $f$ also implements its phase action in one XOR-oracle query by using target $|-\rangle$, with the cost of preparing that target stated separately. If $f$ is instead given by an explicit Boolean circuit, constructing its XOR or phase action incurs the compiled gate, depth, and workspace costs of [[thm-qc-reversible-embedding-cost]]; it is not a free query. Controlled black-box access must be declared or constructed with its own cost. The XOR oracle is self-inverse, but an invocation used to apply that inverse still counts as one query.

## Facts & Assumptions

**Given:** The explicit query-counting convention, the XOR-oracle contract, the phase-kickback identity, and the reversible compiler's gate bounds. Establish the query/gate distinction.

[F1] [[def-qc-coherent-function-oracle]]: Query count belongs to a declared black-box XOR-oracle contract; an explicit circuit implementation is a compiled gate list.

[F2] [[thm-qc-phase-kickback-from-xor-oracle]]: A Boolean XOR oracle applies the phase $(-1)^{f(x)}$ with target $|-\rangle$ in one oracle invocation and returns that target unchanged.

[F3] [[thm-qc-reversible-embedding-cost]]: An explicit Boolean circuit can be compiled to a clean XOR embedding with its gate, depth, and work costs charged.

[F4] [[thm-qc-reversible-xor-oracle-unitary]]: The XOR oracle is its own inverse.

[F5] [[def-qc-controlled-unitary-access]]: Controlled access means the chosen operation model explicitly grants the block operator $C(U)$; an ordinary black-box call to $U$ does not grant it implicitly.

[F6] [[def-qc-elementary-circuit-resources]]: The operation model records query costs separately from gate occurrences, depth layers, and classical bit costs.

## Proof

1.1 A phase oracle for a Boolean function $g$ means the diagonal map $P_g|x\rangle=(-1)^{g(x)}|x\rangle$, and a declared query contract counts each invocation of its named black box as one query. Thus a declared phase-oracle invocation is one phase query. If the supplied black box is instead the XOR map, [F2] gives the same phase action using exactly one XOR-oracle invocation; target-state preparation is a separate ordinary circuit operation, charged in the separate coordinates of [F6]. [given, F1, F2, F6]

2.1 If the only input for $f$ is an explicit Boolean circuit, [F3] replaces each required function evaluation by its finite compiled gate list, so the listed gates, depth, and work are charged under the separate resource coordinates [F6]. There is no black-box invocation to count unless the contract separately supplies one. Likewise a controlled black-box call requires declared controlled access [F5]; and although $O_f^{-1}=O_f$ by [F4], each call made to apply it remains one query invocation. [F1, F3, F4, F5, F6, algebra] ∎

