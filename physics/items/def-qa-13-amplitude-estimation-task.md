---
id: def-qa-13-amplitude-estimation-task
kind: definition
title: "Amplitude estimation and counting input/output contract"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-task-and-promise-domain
  - def-qa-input-encoding-and-size
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-projective-measurement
  - def-qc-dirac-notation-conversion
  - def-qa-phase-query
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
  - def-qc-reflection
  - def-qa-quantum-query-algorithm
  - thm-qc-reflection-unitary-involution
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, $|0\rangle$ a specified unit vector, $A:H\to H$ a supplied unitary, and $\Pi_{\rm good}$ an explicitly supplied orthogonal projection. Put
$$S_0=I-2|0\rangle\langle0|,\qquad S_{\rm good}=I-2\Pi_{\rm good},\qquad Q=-A S_0A^*S_{\rm good}.$$
Each classical instance has an injective encoding $\operatorname{enc}$ from its declared instance set into $\{0,1\}^*$, with input size $|\operatorname{enc}(z)|$; the promise domain and output obligation are stated for that task. Supplied operator or oracle access is a separate resource declaration.

The success amplitude is $a=\|\Pi_{\rm good}A|0\rangle\|^2\in[0,1]$, and $\theta=\arcsin\sqrt a\in[0,\pi/2]$. Amplitude estimation returns an algebraically encoded estimate of $a$; its requested accuracy and failure probability are stated separately.

For counting, let $n$ be a nonnegative integer and set $N=2^n$ with address basis $\{|x\rangle:x\in\{0,1\}^n\}$ and a Boolean predicate $f$. Write $H_{\rm Had}=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ for the one-qubit Hadamard gate, distinct from the space $H$, and set $A=H_{\rm Had}^{\otimes n}$, $|0\rangle=|0^n\rangle$, $\Pi_{\rm good}=\sum_{f(x)=1}|x\rangle\langle x|$, and $t=|\{x:f(x)=1\}|$. Then the counting amplitude is $a=t/N$. The preparation uses exactly $n$ ordinary Hadamard gates. Access to the controlled membership reflection is a separate explicit resource.

Two phase-estimation access modes are allowed. In the power-query mode, the model supplies each $C(Q^{2^j})$ for $0\le j<m$ as one declared query, with its individual cost recorded. In the repeated-unitary mode the model supplies $C(Q)$ and implements $C(Q^{2^j})$ by $2^j$ sequential calls, for exactly $2^m-1$ controlled-$Q$ calls. In repeated-unitary mode, each controlled-$Q$ call expands as the composite $C(-I)C(A)C(S_0)C(A^*)C(S_{\rm good})$; controlled $A$, controlled $A^*$, controlled $S_0$, controlled $S_{\rm good}$, and the control phase $C(-I)$ must all be supplied or implemented and charged. In power-query mode each supplied controlled power has its own declared cost vector, including any constituent implementations the model uses. An uncontrolled phase query does not supply any of them. Query, ordinary-gate, state-preparation, measurement, and classical bit costs are separate coordinates.

## Facts & Assumptions

**Given:** The finite-dimensional space, supplied unitary and predicate-reflection accesses, task encoding, and one of the two access models just stated.

[F1] A decision or search task specifies its promise domain and output obligation; correctness outside the promise is not imposed ([[def-qa-task-and-promise-domain]]).

[F2] For an orthogonal projection $\Pi$, the sign convention $S_\Pi=I-2\Pi$ is fixed, and controlled reflection access is separately declared ([[def-qc-reflection]]).

[F3] Controlled access means an explicit call to $C(U)=\operatorname{diag}(I,U)$; an ordinary black-box $U$ call does not silently grant it ([[def-qc-controlled-unitary-access]]).

[F4] Inverse-unitary access has its own declaration and cost ([[def-qc-inverse-unitary-access]]).

[F5] Gate and query costs are separate operation counts ([[def-qc-elementary-circuit-resources]]); this task also records measurement and classical-bit costs separately.

[F6] The one-qubit Hadamard matrix is $2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ ([[def-qc-one-qubit-gate-alphabet-and-rotations]]).

[F7] The reflections $I-2P$ of orthogonal projections are self-adjoint unitaries with square $I$ ([[thm-qc-reflection-unitary-involution]]).

[F8] An input encoding is injective, and its string length is the input size ([[def-qa-input-encoding-and-size]]).

[F9] Query algorithms count designated oracle calls separately from gates, and controlled access is charged only when the contract supplies it ([[def-qa-quantum-query-algorithm]]).

## Proof

1.1 The operators $S_0$ and $S_{\rm good}$ are the sign-reversed reflections of the projectors $|0\rangle\langle0|$ and $\Pi_{\rm good}$ in [F2]. The reflection-involution result says each is self-adjoint and squares to $I$; since $A$ is unitary, $Q=-AS_0A^*S_{\rm good}$ is a product of unitaries and is unitary. [given, F2, F7, algebra]

1.2 In the repeated-unitary mode, block multiplication gives $C(Q)^r=\operatorname{diag}(I,Q^r)=C(Q^r)$ for every integer $r\ge0$. Summing the $m$ controlled powers gives $\sum_{j=0}^{m-1}2^j=2^m-1$ calls; the power-query mode instead has exactly one declared query for each of the $m$ indices. These counts use [F3], the query convention [F9], and preserve the distinct costs in [F4]–[F5]. [given, F3, F4, F5, F9, algebra]

1.3 Since $H_{\rm Had}|0\rangle=(|0\rangle+|1\rangle)/\sqrt2$, tensoring its $n$ copies gives $A|0^n\rangle=N^{-1/2}\sum_x|x\rangle$. The orthonormal address basis and the displayed projector then give $\|\Pi_{\rm good}A|0^n\rangle\|^2=\sum_{f(x)=1}1/N=t/N$. The circuit applies exactly one $H_{\rm Had}$ to each address wire, hence $n$ ordinary Hadamards. [given, F6, algebra]

2.1 The input encoding and promise obligation are the declared task data of [F1] and [F8]. The definition states its output and separate access costs before any accuracy claim. Thus neither a controlled reflection nor a free power construction is inferred from an uncontrolled oracle call; every use must satisfy [F3]–[F5] and [F9]. [given, F1, F3, F4, F5, F8, F9, step 1.2] ∎

