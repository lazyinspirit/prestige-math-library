---
id: alg-qa-14-zero-completion-query-simulation
kind: algorithm
title: Reversible zero-completion of an N-address bit query
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-14-boolean-search-query-model
  - def-qa-standard-bit-query
  - alg-qc-reversible-embedding
  - def-qc-clean-and-dirty-ancillas
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-toffoli-and-fredkin
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: No choice principle is used; the comparator and reversible embedding are finite and explicit.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 1, §1.4, PDF pp.10–11: reversible classical computation and clean registers."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 2, §§2.1.2–2.4, PDF pp.22–33: reversible Boolean computation and the XOR query."
---

## Definition

**Input:** An integer $N\ge1$, a power of two $M=2^m$ with $N\le M<2N$, a padded address register $A_M$ with basis $|j\rangle$ for $0\le j<M$, a response bit, and the raw XOR oracle $O_x$ whose address input is the $N$-level register with basis $|q\rangle$ for $0\le q<N$. If $N=M$, identify $A_M$ with the raw address register. If $N<M$, supply a separate clean $N$-level raw-address register $Q_N$ initialized to $|0\rangle$, together with clean comparator and routing workspace.

**Output:** The zero-completed query action $|j,b\rangle\mapsto|j,b\oplus\widetilde x_j\rangle$ on $A_M$ and the response bit, where $\widetilde x_j=x_{j+1}$ for $j<N$ and $\widetilde x_j=0$ for $j\ge N$, with every added register restored to its specified computational-basis zero state.

**Instructions:**

1. If $N=M$, call $O_x$ directly on $A_M$ and the response bit, then return. If $N<M$, continue with Steps 2--5.
2. Compute the validity bit $v=[j<N]$ into a clean bit by a reversible binary comparison. For most-significant-first address bits $j_r$ and the fixed binary digits $N_r$, initialize $E_0=1,L_0=0$ and update
   $$E_{r+1}=E_r\wedge\bigl((j_r\wedge N_r)\vee(\neg j_r\wedge\neg N_r)\bigr),\qquad L_{r+1}=L_r\vee(E_r\wedge\neg j_r\wedge N_r).$$
   Implement this Boolean comparison into the validity bit with [[alg-qc-reversible-embedding]], leaving its comparison workspace clean. The raw query address is an $N$-level register, not an $m$-bit target. Route it as follows. For each $j=1,\ldots,N-1$, apply the basis transposition $(0\ j)$ to $Q_N$ conditioned on $A_M=j$ and $v=1$; apply no transposition for other control values. These mutually disjoint controlled permutations define a finite input-independent unitary $R_{N,M}$, with
   $$R_{N,M}|j\rangle_{A_M}|0\rangle_{Q_N}|v\rangle=|j\rangle_{A_M}|q(j,v)\rangle_{Q_N}|v\rangle,$$
   where $q(j,v)=j$ if $v=1$ and $j<N$, and $q(j,v)=0$ otherwise. In particular, on the computed validity bit it writes $j$ for valid padded addresses and $0$ for invalid ones. The operation is a finite basis permutation; its inverse is itself.
3. Allocate a fresh clean response bit $r$ in $|0\rangle$ and apply $H$ to prepare $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$. Controlled on $v=1$, swap the caller's response bit with $r$ using Fredkin gates.
4. Make one ordinary call to $O_x$ on the $N$-level raw-address register $Q_N$ and response $r$.
5. Reverse the response swap, then apply $H$ to $r$ to return it to $|0\rangle$. Apply $R_{N,M}^{-1}$ to clear $Q_N$, and reverse the reversible comparison to restore $v$ and all comparison workspace to zero. Return the caller's padded address and response registers.

The address comparison, the finite basis-permutation routing operation, response preparation, controlled swaps, and cleanup are nonoracle operations and must be charged in a gate-cost coordinate. The procedure uses no controlled-oracle capability. For $N=1$, $M=1$ and the direct-call branch applies.

## Remarks

For $N<M$, the following register-flow schematic records the order of the operations in Steps 2--5. Let $B$ denote the caller's response bit, let $C$ be the clean-workspace comparison writing $v=[j<N]$, and let $S_v$ swap $B$ and $r$ exactly when $v=1$. Each box acts only on the registers named below it; all other registers pass through unchanged. Follow the arrows, including the right-to-left middle row.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (c) at (0,0) {$C$\\$A_M,v$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (r) at (3.5,0) {$R_{N,M}$\\$A_M,v,Q_N$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (h) at (7,0) {$H_r$\\$r$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (s) at (7,-1.9) {$S_v$\\$v,B,r$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (o) at (3.5,-1.9) {$O_x$\\$Q_N,r$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (t) at (0,-1.9) {$S_v$\\$v,B,r$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (i) at (0,-3.8) {$H_r$\\$r$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (u) at (3.5,-3.8) {$R_{N,M}^{-1}$\\$A_M,v,Q_N$};
\node[draw, minimum width=2.3cm, minimum height=0.95cm, align=center] (d) at (7,-3.8) {$C^{-1}$\\$A_M,v$};
\draw[->] (c) -- (r);
\draw[->] (r) -- (h);
\draw[->] (h) -- (s);
\draw[->] (s) -- (o);
\draw[->] (o) -- (t);
\draw[->] (t) -- (i);
\draw[->] (i) -- (u);
\draw[->] (u) -- (d);
\end{tikzpicture}
```

The added registers start and finish in $|0\rangle_{Q_N}|0\rangle_v|0\rangle_r$, with comparison workspace also clean. At the oracle box, valid addresses have $Q_N=j$ and the caller's response in $r$; invalid addresses have $Q_N=0$ and $r=|+\rangle$, which an XOR query leaves unchanged. The $O_x$ box is an ordinary unconditional query, with no control from $v$. The diagram abbreviates the prescribed operations and does not replace their algebraic definitions. When $N=M$, only the direct query on $A_M,B$ is used.
