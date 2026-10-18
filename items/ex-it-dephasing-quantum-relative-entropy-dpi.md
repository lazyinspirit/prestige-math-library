---
id: ex-it-dephasing-quantum-relative-entropy-dpi
kind: example
title: Qubit dephasing decreases quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - thm-it-quantum-relative-entropy-channel-data-processing
  - def-qc-density-operator
  - def-qc-quantum-channel
  - def-qc-completely-positive-map
  - def-qc-register-and-computational-basis
  - thm-trace-of-ab-equals-trace-of-ba
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-non-negative-operator-characterisations
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

On the qubit space with computational basis $|0\rangle,|1\rangle$, define the dephasing channel
$$\Delta(X)=|0\rangle\langle0|X|0\rangle\langle0|+|1\rangle\langle1|X|1\rangle\langle1|.$$
For $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $\rho=|+\rangle\langle+|$, $\sigma=\operatorname{diag}(3/4,1/4)$, one has
$$D(\rho\|\sigma)=\tfrac12\ln(16/3)>\tfrac12\ln(4/3)=D(\Delta(\rho)\|\Delta(\sigma)).$$
For the orthogonal pure states $|+\rangle,| -\rangle=(|0\rangle-|1\rangle)/\sqrt2$, the input relative entropy is $+\infty$, whereas both dephased states equal $I/2$ and their relative entropy is $0$.

## Facts & Assumptions

**Given:** The finite qubit register with ordered orthonormal basis $|0\rangle,|1\rangle$ and the operators in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: the finite branch is $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$, and support failure gives $+\infty$.

[F2] [[def-qc-density-operator]]: a state is nonnegative with trace one.

[F3] [[def-qc-register-and-computational-basis]]: $|0\rangle,|1\rangle$ is an orthonormal basis of the two-dimensional qubit register.

[F4] [[def-qc-completely-positive-map]]: complete positivity means every finite ancillary amplification sends positive operators to positive operators.

[F5] [[def-qc-quantum-channel]]: a quantum channel is complex-linear, completely positive, and trace-preserving.

[F6] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible finite-dimensional operators, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.

[F7] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\ln$ is the natural logarithm on positive numbers, is strictly increasing, and satisfies the product and quotient laws.

[F8] [[thm-non-negative-operator-characterisations]]: a positive semidefinite operator is diagonalizable with nonnegative eigenvalues; rank-one orthogonal projections have eigenvalues $0,1$.

[F9] [[thm-it-quantum-relative-entropy-channel-data-processing]]: a finite quantum channel does not increase quantum relative entropy, including its support-sensitive extended value.

## Diagram convention

The one wire is the qubit operator input/output, and the rectangular box denotes the linear map $\Delta$ defined above. This is only a map schematic; the channel and entropy claims are proved by the finite matrix calculations below.

\begin{center}
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \draw[->] (0,0) -- (1.2,0) node[midway,above] {$X$};
  \node[draw,rounded corners,minimum width=1.5cm,minimum height=.75cm] (deph) at (2,0) {$\Delta$};
  \draw[->] (deph.east) -- (3.3,0) node[midway,above] {$\Delta(X)$};
\end{tikzpicture}
\end{center}

## Proof

1.1 Put $P_j=|j\rangle\langle j|$ for $j=0,1$. Then $P_j=P_j^\dagger=P_j^2$ and $P_0+P_1=I$ by [F3]. The map $\Delta(X)=\sum_jP_jXP_j$ is complex-linear. For any finite ancilla dimension $r$ and positive $Q$ on $H\otimes\mathbb C^r$, its amplification is $\sum_j(P_j\otimes I_r)Q(P_j\otimes I_r)^\dagger$, a sum of positive operators since each summand has quadratic form $\langle Q(P_j\otimes I_r)^\dagger z,(P_j\otimes I_r)^\dagger z\rangle\ge0$. Thus [F4] gives complete positivity. Also [F6] gives $\operatorname{tr}(\Delta(X))=\sum_j\operatorname{tr}(P_jXP_j)=\operatorname{tr}(X(P_0+P_1))=\operatorname{tr}(X)$. Hence $\Delta$ is a channel by [F5]. [given, F3, F4, F5, F6, algebra]

2.1 The state $\rho$ has eigenvalues $1,0$, while $\sigma$ has eigenvalues $3/4,1/4$; both are density operators by direct trace and positivity. Since $\rho$ is the rank-one projection onto $|+\rangle$, $\operatorname{tr}(\rho\ln\rho)=0$ under $0\ln0=0$, and $\langle+|\ln\sigma|+\rangle=\frac12\ln(3/4)+\frac12\ln(1/4)$. Therefore [F1] gives $D(\rho\|\sigma)=\frac12\ln(16/3)$. Dephasing gives $\Delta(\rho)=I/2$ and $\Delta(\sigma)=\sigma$; the diagonal trace formula gives $D(I/2\|\sigma)=\frac12\ln((1/2)/(3/4))+\frac12\ln((1/2)/(1/4))=\frac12\ln(4/3)$. Since $16/3>4/3$, strict monotonicity of the logarithm in [F7] proves the strict decrease; this explicit calculation is consistent with [F9] applied to the channel in step 1.1. [given, F1, F2, F3, F7, F8, F9, step 1.1, algebra]

3.1 The supports of $|+\rangle\langle+|$ and $|-\rangle\langle-|$ are distinct one-dimensional subspaces, so the first is not contained in the second and [F1] gives input divergence $+\infty$. Their diagonal entries are both $(1/2,1/2)$, so $\Delta(|+\rangle\langle+|)=\Delta(|-\rangle\langle-|)=I/2$; consequently the output relative entropy is $D(I/2\|I/2)=0$ by [F1]. [given, F1, F3, algebra] ∎
