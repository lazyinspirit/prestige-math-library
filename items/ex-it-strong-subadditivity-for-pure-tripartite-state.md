---
id: ex-it-strong-subadditivity-for-pure-tripartite-state
kind: example
title: Strong subadditivity for a pure GHZ tripartite state
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-von-neumann-entropy
  - thm-natural-logarithm-laws
  - thm-it-finite-strong-subadditivity
  - thm-qc-schmidt-decomposition
  - def-qc-density-operator
  - def-qc-partial-trace
  - def-qc-first-factor-partial-trace
  - def-qc-tensor-register-and-permutation
  - def-qc-register-and-computational-basis
  - thm-qc-wire-permutation-is-unitary
  - thm-non-negative-operator-characterisations
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For three qubit registers $A,B,C$, let
$$|\mathrm{GHZ}\rangle=(|000\rangle+|111\rangle)/\sqrt2,\qquad \rho_{ABC}=|\mathrm{GHZ}\rangle\langle\mathrm{GHZ}|.$$
Each one-register marginal and each two-register marginal has entropy $\ln2$, while $S(\rho_{ABC})=0$. In particular, for the displayed order,
$$S(\rho_{AB})+S(\rho_{BC})=2\ln2>\ln2=S(\rho_B)+S(\rho_{ABC}),$$
so strong subadditivity is strict.

## Facts & Assumptions

**Given:** The three-qubit computational basis and the normalized vector $|\mathrm{GHZ}\rangle$ in the Statement.

[F1] [[def-it-von-neumann-entropy]]: $S(\rho)=-\sum_{\lambda>0}\lambda\ln\lambda$ over the positive eigenvalues.

[F2] [[def-qc-density-operator]]: a density operator is positive semidefinite and has trace one.

[F3] [[def-qc-partial-trace]] and [[def-qc-first-factor-partial-trace]]: marginals are obtained by summing the diagonal matrix blocks for the traced-out last or first register.

[F4] [[def-qc-tensor-register-and-permutation]] and [[def-qc-register-and-computational-basis]]: the three qubit factors are ordered $A,B,C$ and their computational product basis is the corresponding tensor product basis.

[F5] [[thm-qc-schmidt-decomposition]]: a bipartite vector has an expansion $\sum_j s_j u_j\otimes v_j$ with positive coefficients and orthonormal factor families, and its squared norm is $\sum_j s_j^2$.

[F6] [[thm-it-finite-strong-subadditivity]]: every finite tripartite state satisfies $S(AB)+S(BC)\ge S(B)+S(ABC)$.

[F7] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing and $\ln1=0$.

[F8] [[thm-non-negative-operator-characterisations]]: an operator diagonal in an orthonormal basis with nonnegative real diagonal entries is non-negative.

[F9] [[thm-qc-wire-permutation-is-unitary]]: permuting tensor wires is a unitary basis permutation, preserving the spectrum under conjugation.

## Diagram convention

The central node denotes the state-preparation map $\mathbb C\to H_A\otimes H_B\otimes H_C$ taking $1$ to $|\mathrm{GHZ}\rangle$; the three outgoing legs are its ordered tensor factors. They describe one joint state, not a product of three states. No proof step relies on this diagram.

\begin{center}
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
  \node[draw,rounded corners,minimum width=1.8cm,minimum height=.8cm] (state) at (0,0) {$|\mathrm{GHZ}\rangle$};
  \draw[->] (state.north west) -- (-1.1,1) node[above] {$A$};
  \draw[->] (state.north) -- (0,1) node[above] {$B$};
  \draw[->] (state.north east) -- (1.1,1) node[above] {$C$};
\end{tikzpicture}
\end{center}

## Proof

1.1 By [F4], the vectors $g=|\mathrm{GHZ}\rangle$, $h=(|000\rangle-|111\rangle)/\sqrt2$, and the six computational basis vectors other than $|000\rangle,|111\rangle$ form an orthonormal basis. Direct multiplication by $\rho_{ABC}=gg^*$ gives $\rho_{ABC}g=g$ and zero on the other seven basis vectors. Thus its spectrum is $(1,0,\ldots,0)$; it is non-negative by [F8] and has trace one, so it is a state by [F2]. Consequently $S(\rho_{ABC})=-1\ln1=0$ by [F1] and [F7]. [given, F1, F2, F4, F7, F8, algebra]

1.2 Expanding $\rho_{ABC}$ gives the four terms $\frac12|000\rangle\langle000|$, $\frac12|000\rangle\langle111|$, $\frac12|111\rangle\langle000|$, and $\frac12|111\rangle\langle111|$. For any traced register, the first- or last-factor formula [F3], after the wire permutation [F9] when needed, kills both off-diagonal terms because $\operatorname{tr}(|0\rangle\langle1|)=\operatorname{tr}(|1\rangle\langle0|)=0$; the resulting two-register marginal is $\frac12|00\rangle\langle00|+\frac12|11\rangle\langle11|$. Tracing out two registers similarly gives $I/2$ for each one-register marginal. These diagonal matrices have positive eigenvalues $1/2,1/2$, with two additional zero eigenvalues for each two-register marginal. Across each one-versus-two split, the displayed vector itself is a Schmidt expansion of the form [F5], with coefficients $1/\sqrt2,1/\sqrt2$. [given, F3, F4, F5, F9, algebra]

2.1 For each reduced state in step 1.2, [F1] gives entropy $-2(\frac12\ln\frac12)=\ln2$. Hence the left side of the claimed SSA instance is $2\ln2$, and the right side is $\ln2+0$. Since $2>1$ and $\ln2>0$ by strict monotonicity in [F7], the inequality is strict and equals the stated comparison. [F1, F6, F7, step 1.1, step 1.2, algebra] ∎
