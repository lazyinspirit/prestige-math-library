---
id: alg-qa-truncated-binary-qft-circuit
kind: algorithm
title: Truncated binary QFT
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps: [alg-qa-exact-binary-qft-circuit, def-qa-qft-gate-cost-model, def-qc-circuit-denotational-semantics]
axiom_use: "No choice axiom is used; the truncated list is a finite deletion from the exact list."
justified_by: []
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

Input: an $n$-qubit ordered register as in [[alg-qa-exact-binary-qft-circuit]] and an integer cutoff $m\ge1$.

Output: run the exact binary QFT circuit except omit every controlled phase $\mathrm{CP}_s$ with denominator index $s>m$. Retain every Hadamard and every final reversal SWAP. The resulting gate list is finite and unitary for every $n\ge0,m\ge1$ under [[def-qc-circuit-denotational-semantics]]. If $m\ge n$, no controlled phase is omitted and the circuit is exactly the full circuit. The ideal gate-count convention is [[def-qa-qft-gate-cost-model]].


## Remarks

For $n=3$ and $m=2$, read the circuit from left to right with ordered wires $q_2,q_1,q_0$ from top to bottom. The dashed $\mathrm{CP}_3$ position is omitted, not executed; all solid gates remain. A filled dot marks the control of the phase gate on the connected wire, and the two crosses denote the final SWAP of $q_0$ and $q_2$.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1cm]
\draw (0,2) -- (8,2);
\draw (0,1) -- (8,1);
\draw (0,0) -- (8,0);
\node[left] at (0,2) {$q_2$};
\node[left] at (0,1) {$q_1$};
\node[left] at (0,0) {$q_0$};
\node[draw,fill=white,minimum size=0.45cm] at (1,2) {$H$};
\draw[dashed] (2,0) -- (2,2);
\draw[dashed,fill=white] (1.65,1.73) rectangle (2.35,2.27);
\node at (2,2) {$\mathrm{CP}_3$};
\draw[dashed,fill=white] (2,0) circle (0.06);
\node[above] at (2,2.45) {omitted};
\draw (3,1) -- (3,2);
\fill (3,1) circle (0.05);
\node[draw,fill=white,minimum height=0.5cm] at (3,2) {$\mathrm{CP}_2$};
\node[draw,fill=white,minimum size=0.45cm] at (4,1) {$H$};
\draw (5,0) -- (5,1);
\fill (5,0) circle (0.05);
\node[draw,fill=white,minimum height=0.5cm] at (5,1) {$\mathrm{CP}_2$};
\node[draw,fill=white,minimum size=0.45cm] at (6,0) {$H$};
\draw (7,0) -- (7,2);
\draw (6.89,1.89) -- (7.11,2.11);
\draw (6.89,2.11) -- (7.11,1.89);
\draw (6.89,-0.11) -- (7.11,0.11);
\draw (6.89,0.11) -- (7.11,-0.11);
\node[above] at (7,2.45) {SWAP};
\end{tikzpicture}
```

The retained phase gates have index $j-i+1=2$ on pairs $(q_1,q_2)$ and $(q_0,q_1)$; the omitted pair $(q_0,q_2)$ has index $3$. Thus the illustration is precisely the deletion rule applied to the chronological list in the exact circuit definition. The algorithm is defined by that list and cutoff rule independently of the figure.
