---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-qc-controlled-t-clean-ancilla-circuit.json
  precheck: n/a
id: alg-qc-controlled-t-clean-ancilla-circuit
kind: algorithm
title: Controlled T using a clean ancilla
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-clifford-t-gate-library
  - def-qc-clean-and-dirty-ancillas
  - def-qc-toffoli-and-fredkin
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-controlled-unitary-access
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 10
---

## Definition

Input two data bits $a,b$ and a third clean work bit $t=0$. On the ordered
register $(a,b,t)$, apply the following chronological word:

1. $H_t$.
2. $\operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t},T_t,
   \operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t}$.
3. $T_b,T_t,H_t$.
4. $\operatorname{CNOT}_{a,b},T_a,T_b^\dagger,\operatorname{CNOT}_{a,b}$.
5. $T_t$.
6. Apply the same 15-gate word from steps 1–4 again.

The 15-gate word in steps 1–4 is the specified three-wire block. The output
is the complete three-wire circuit, with no implicit fourth wire.

## Remarks

The source's controlled-$T$ construction computes $ab$ into the clean bit,
applies $T$ there, and uncomputes. The target operation $C(T)$ is the
control-first block in [[def-qc-controlled-unitary-access]]. Its exact
correctness and restoration claim is the separate proposition above.

The following overview uses $B$ for exactly the 15-gate word in steps 1–4;
both boxes have the same expansion below. Time runs from left to right,
and each picture has precisely the ordered wires $(a,b,t)$. The middle
$T$ is step 5, and the second $B$ is step 6.

```tikz
\begin{tikzpicture}[x=1cm,y=0.9cm]
\draw (0,0) -- (9,0);
\draw (0,-1) -- (9,-1);
\draw (0,-2) -- (9,-2);
\node[left] at (0,0) {$a$};
\node[left] at (0,-1) {$b$};
\node[left] at (0,-2) {$t:\ |0\rangle$};
\node[right] at (9,-2) {$|0\rangle$};
\node[draw,fill=white,minimum width=1.1cm,minimum height=2.4cm] at (2,-1) {$B$};
\node[draw,fill=white,inner sep=4pt] at (4.5,-2) {$T$};
\node[draw,fill=white,minimum width=1.1cm,minimum height=2.4cm] at (7,-1) {$B$};
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[x=0.72cm,y=0.9cm]
\draw (0,0) -- (16,0);
\node[left] at (0,0) {$a$};
\draw (0,-1) -- (16,-1);
\node[left] at (0,-1) {$b$};
\draw (0,-2) -- (16,-2);
\node[left] at (0,-2) {$t$};
\node[draw,fill=white,inner sep=3pt] at (1,-2) {$H$};
\draw (2,-1) -- (2,-2);
\fill (2,-1) circle (2pt);
\draw (2,-2) circle (4pt);
\draw (2,-2.12) -- (2,-1.88);
\draw (1.88,-2) -- (2.12,-2);
\node[draw,fill=white,inner sep=3pt] at (3,-2) {$T^\dagger$};
\draw (4,0) -- (4,-2);
\fill (4,0) circle (2pt);
\draw (4,-2) circle (4pt);
\draw (4,-2.12) -- (4,-1.88);
\draw (3.88,-2) -- (4.12,-2);
\node[draw,fill=white,inner sep=3pt] at (5,-2) {$T$};
\draw (6,-1) -- (6,-2);
\fill (6,-1) circle (2pt);
\draw (6,-2) circle (4pt);
\draw (6,-2.12) -- (6,-1.88);
\draw (5.88,-2) -- (6.12,-2);
\node[draw,fill=white,inner sep=3pt] at (7,-2) {$T^\dagger$};
\draw (8,0) -- (8,-2);
\fill (8,0) circle (2pt);
\draw (8,-2) circle (4pt);
\draw (8,-2.12) -- (8,-1.88);
\draw (7.88,-2) -- (8.12,-2);
\node[draw,fill=white,inner sep=3pt] at (9,-1) {$T$};
\node[draw,fill=white,inner sep=3pt] at (10,-2) {$T$};
\node[draw,fill=white,inner sep=3pt] at (11,-2) {$H$};
\draw (12,0) -- (12,-1);
\fill (12,0) circle (2pt);
\draw (12,-1) circle (4pt);
\draw (12,-1.12) -- (12,-0.88);
\draw (11.88,-1) -- (12.12,-1);
\node[draw,fill=white,inner sep=3pt] at (13,0) {$T$};
\node[draw,fill=white,inner sep=3pt] at (14,-1) {$T^\dagger$};
\draw (15,0) -- (15,-1);
\fill (15,0) circle (2pt);
\draw (15,-1) circle (4pt);
\draw (15,-1.12) -- (15,-0.88);
\draw (14.88,-1) -- (15.12,-1);
\node at (8,0.65) {$B$: steps 1--4, left to right};
\end{tikzpicture}
```

In the expansion, a filled dot is the CNOT control and a circled plus is
its target; every other wire passes through unchanged at that gate. The
clean input and return labels describe the complete circuit, not either
block in isolation. Its correctness argument is independent of these pictures.

## Unresolved supplier checks

The actual QC09 syntax/denotational-semantics and QC10 Toffoli/ancilla
carriers were inspected. Their ordered-wire and clean-return interfaces
agree with this circuit. This is interface reconciliation, not acceptance of
the supplier drafts.
