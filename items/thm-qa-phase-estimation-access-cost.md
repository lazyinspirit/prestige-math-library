---
id: thm-qa-phase-estimation-access-cost
kind: theorem
title: Phase-estimation query and gate costs
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - def-qc-elementary-circuit-resources
  - def-qc-controlled-unitary-access
  - thm-qa-exact-binary-qft-gate-count
  - def-nat-addition
  - def-nat-finite-sum-and-product
  - def-nat-multiplication
  - def-nat-power
  - lem-nat-add-associative
  - lem-nat-add-commutative
  - lem-nat-mult-identity
  - thm-induction-principle
justified_by: []
axiom_use: "None; the counts are finite sums of the explicitly supplied operations."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $m\ge1$ and $Q=2^m$. Count costs in the ideal continuous-rotation submodel, where each exact controlled phase used by the binary QFT is one gate. If the controlled powers $C(U^{2^j})$, $0\le j<m$, are supplied as one query each, one run uses exactly $m$ controlled-power queries. If the only oracle is $C(U)$, the repeated implementation uses exactly $Q-1$ controlled-$U$ queries. If the supplied controlled-power circuits have ordinary gate counts $C_j$, the unitary gate count after the eigenstate input is provided is
$$\sum_{j=0}^{m-1}C_j+2m+\frac{m(m-1)}2+\left\lfloor\frac m2\right\rfloor.$$
The final register measurement reads $m$ bits and is not included in this unitary gate count. No cost-free power construction, fixed finite gate alphabet, uniform family, or state-preparation bound is asserted.

## Facts & Assumptions

**Given:** The $m$-bit QPE procedure, $Q=2^m$, and the ideal gate-cost convention stated above.

[F1] The QPE procedure applies one controlled $U^{2^j}$ for each $j=0,\ldots,m-1$, with $m$ Hadamards to prepare the phase register ([[alg-qa-quantum-phase-estimation]]).

[F2] Under single-controlled-unitary access, one call is the control-first block $C(U)=\operatorname{diag}(I_H,U)$; the eigenphase-estimation model permits the $j$th controlled power to be implemented by $2^j$ sequential calls ([[def-qc-controlled-unitary-access]], [[def-qa-eigenphase-estimation-model]]).

[F3] The exact $m$-wire QFT circuit uses $m$ Hadamards, $m(m-1)/2$ controlled phases, and $\lfloor m/2\rfloor$ named swaps in the ideal model; its inverse has the same count ([[thm-qa-exact-binary-qft-gate-count]]).

[F5] The operation model may assign gate, classical-bit, and query costs separately, and each coordinate counts the calls actually made ([[def-qc-elementary-circuit-resources]]).

[F4] The natural-valued sum $S_n:=\sum_{j<n}2^j$ has $S_0=0$ and $S_{n+1}=S_n+2^n$ ([[def-nat-finite-sum-and-product]]).

[F6] Natural powers satisfy $2^0=1$ and $2^{n+1}=2^n\cdot2$; natural multiplication satisfies $a\cdot2=a+a$, using $a\cdot1=a$ ([[def-nat-power]], [[def-nat-multiplication]], [[lem-nat-mult-identity]]).

[F7] Natural induction is valid, and natural addition is associative and commutative ([[thm-induction-principle]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]).

## Proof

1.1 Under controlled-power access, the loop in [F1] invokes exactly one supplied operation for each of the $m$ indices $j=0,\ldots,m-1$, hence exactly $m$ controlled-power queries. [F1, given, algebra]

1.2 Under single controlled-unitary access, the repeated implementation specified by the procedure uses $2^j$ sequential calls to $C(U)$ for the controlled power at index $j$ [F2], so the total query count is the natural sum $S_m$. To identify this natural-valued sum, prove $S_n+1=2^n$ by induction. At $n=0$, $S_0+1=0+1=1=2^0$. If $S_n+1=2^n$, then [F4, F6, F7] give $S_{n+1}+1=(S_n+2^n)+1=(S_n+1)+2^n=2^n+2^n=2^n\cdot2=2^{n+1}$. Hence $S_m+1=2^m=Q$; by the defining truncated difference in [F4]'s source and commutativity of addition, $S_m=Q-1$. [F2, F4, F6, F7, given, base, ih, discharge-induction]

1.3 The supplied power circuits contribute $\sum_j C_j$ ordinary gates. Phase-register preparation contributes $m$ Hadamards, and the inverse QFT contributes the count in [F3]. Adding gives the displayed unitary gate count; reversing the QFT circuit changes neither its count nor the query count. [F1, F3, given, algebra]

2.1 Measurement outputs one $m$-bit label. The operation model [F5] keeps query, ordinary-gate, and classical-bit costs separate; the input eigenstate's preparation is outside the theorem's stated count. Therefore the displayed formula asserts only the stated gate profile and does not infer an implementation of powers from a black-box $U$. [F5, step 1.1, step 1.2, step 1.3] ∎
