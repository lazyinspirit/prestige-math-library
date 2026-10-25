---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-qa-33-feynman-kitaev-history-hamiltonian.json
  precheck: n/a
id: def-qa-33-feynman-kitaev-history-hamiltonian
kind: definition
title: Feynman–Kitaev history Hamiltonian
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-33-qma-promise-class
  - def-qa-33-k-local-hamiltonian-promise
  - def-qc-dirac-notation-conversion
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, Feynman–Kitaev construction, PDF pp. 10–18
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 179–184
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §4, PDF pp. 5–8
---

## Definition

Let a verifier circuit have $T\ge1$ gates $U_1,\ldots,U_T$, each acting on at most two computation qubits, with its accept/reject predicate reversibly computed into one output qubit (accept is $|1\rangle$). Let $N=T+1$ and encode time $t$ by the unary clock word $|c_t\rangle=|1^t0^{T-t}\rangle$ on $T$ clock qubits. For an initial computation vector $\phi$ define its history vector
$$|\eta_\phi\rangle=N^{-1/2}\sum_{t=0}^T(U_t\cdots U_1\phi)\otimes|c_t\rangle,$$
where the $t=0$ product is $I$. Orthogonality of the clock words and unitarity give $\|\eta_\phi\|=\|\phi\|$; this history is normalized exactly when $\|\phi\|=1$. For each propagation edge $t=1,\ldots,T$, let $|pre_t\rangle,|post_t\rangle$ be the local clock patterns which $c_{t-1},c_t$ have on their smallest common window: for $T=1$ these are $0,1$ on $C_1$; for $T\ge2,t=1$ they are $00,10$ on $C_1C_2$; for $t=T$ they are $10,11$ on $C_{T-1}C_T$; and for $1<t<T$ they are $100,110$ on $C_{t-1}C_tC_{t+1}$. Define
$$H_{prop,t}=\tfrac12\bigl(I\otimes|pre_t\rangle\langle pre_t|+I\otimes|post_t\rangle\langle post_t|-U_t\otimes|post_t\rangle\langle pre_t|-U_t^*\otimes|pre_t\rangle\langle post_t|\bigr),$$
where each clock ket is only on the displayed local window. For each local pre/post block, its quadratic form is one half the squared norm of the difference between the post component and $U_t$ applied to the pre component, so it is positive semidefinite. On legal clock words these patterns identify exactly the adjacent times $t-1,t$. Put $H_{prop}=\sum_tH_{prop,t}$. Define
$$H_{in}=\sum_{a\in A}|1\rangle\langle1|_a\otimes|0\rangle\langle0|_{C_1},\quad H_{out}=N|0\rangle\langle0|_{out}\otimes|1\rangle\langle1|_{C_T},\quad H_{clock}=\sum_{i=1}^{T-1}|01\rangle\langle01|_{C_iC_{i+1}}.$$
Here $A$ indexes initially zero verifier workspace qubits, and the output predicate is computed into the displayed accept qubit. The history Hamiltonian is the positive sum $H_{in}+H_{prop}+H_{out}+H_{clock}$. A propagation term uses at most two computation and three clock qubits; each other summand uses at most two qubits.


## Remarks

For $T=4$, the legal clock runs through the strip below. Write $\psi_0=\phi$ and $\psi_t=U_t\cdots U_1\phi$. Each arrow denotes the update $(\psi_{t-1},c_{t-1})\mapsto(U_t\psi_{t-1},c_t)$, rather than the action of the full propagation Hamiltonian. The lower labels show the local pre/post clock patterns used by that edge.

```tikz
\begin{tikzpicture}[x=2.7cm,y=1cm]
\node (a) at (0,0) {$\psi_0\otimes|0000\rangle$};
\node (b) at (1,0) {$\psi_1\otimes|1000\rangle$};
\node (c) at (2,0) {$\psi_2\otimes|1100\rangle$};
\node (d) at (3,0) {$\psi_3\otimes|1110\rangle$};
\node (e) at (4,0) {$\psi_4\otimes|1111\rangle$};
\draw[->] (a) -- node[above] {$U_1$} (b);
\draw[->] (b) -- node[above] {$U_2$} (c);
\draw[->] (c) -- node[above] {$U_3$} (d);
\draw[->] (d) -- node[above] {$U_4$} (e);
\node at (0.5,-0.8) {$00\to10$};
\node at (0.5,-1.3) {$C_1C_2$};
\node at (1.5,-0.8) {$100\to110$};
\node at (1.5,-1.3) {$C_1C_2C_3$};
\node at (2.5,-0.8) {$100\to110$};
\node at (2.5,-1.3) {$C_2C_3C_4$};
\node at (3.5,-0.8) {$10\to11$};
\node at (3.5,-1.3) {$C_3C_4$};
\end{tikzpicture}
```

On these legal clock states, $H_{in}$ tests workspace qubits only at $t=0$, $H_{out}$ tests rejection only at $t=4$ (with weight $N=5$), and $H_{clock}$ vanishes because no word contains $01$. Each displayed edge uses the indicated clock window and the computation qubits of $U_t$. The $T=1$ window is instead $0\to1$ on $C_1$, as in the definition. The illustration does not replace any of the algebraic definitions or positivity arguments above.
