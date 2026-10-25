---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-qc-adaptive-pauli-circuit-tree.json
  precheck: n/a
id: def-qc-adaptive-pauli-circuit-tree
kind: definition
title: Finite adaptive Pauli-measurement circuit tree
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pauli-measurement-projectors
justified_by: []
dependency_level: 10
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.1"
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Definition

Fix an ordered $n$-qubit register and a finite gate alphabet as in
[[def-qc-circuit-syntax-and-register-order]]. A **finite adaptive
Pauli-measurement circuit tree** is a finite rooted tree whose leaves are
terminal and whose nonterminal nodes are of one of these two types:

1. A gate node is labelled by a gate occurrence on the ordered register and
   has one successor. Its state update is conjugation by the global unitary
   assigned to that occurrence by
   [[def-qc-circuit-denotational-semantics]].
2. A measurement node is labelled by a Hermitian Pauli observable $M$ and has
   two outgoing edges labelled $b=0,1$. On input density operator $\rho$,
   edge $b$ has weight $p_b=\operatorname{Tr}(\rho P_b)$ and unnormalized
   output $P_b\rho P_b$, where $P_b=(I+(-1)^bM)/2$ as in
   [[def-qc-pauli-measurement-branch-semantics]]. Its child state is
   $P_b\rho P_b/p_b$ only if $p_b>0$; an edge of weight zero is impossible
   and has no conditional state.

The observed measurement transcript is the ordered list of measurement-edge
labels on a root-to-leaf path. The tree itself specifies every later
instruction from that observed history, so its classical control is
deterministic. A path whose edges all have positive weights has probability
equal to their product. A path passing through a zero-weight edge has
probability zero, and its descendants are not evaluated because no
conditional state is assigned. A leaf outputs its terminal state; a ray is
assigned only on a positive-probability path whose input and gate/measurement
updates remain pure.

The complementary-projector and total-probability facts for each measurement
node are supplied by [[lem-qc-pauli-measurement-projectors]]. This definition
does not identify an instrument with a POVM or require uniqueness of such a
POVM.

## Sources

De Wolf §20.3, PDF pp. 187–188, defines measurement-controlled Clifford
circuits with feed-forward from earlier outcomes. Watrous Lesson 14 §14.1,
printed pp. 405–407 (PDF pp. 411–413), defines the two Pauli measurement
branches. The local tree fixes the finite branch and zero-probability
conventions used here.

## Remarks

The schematic below separates a branch weight from its conditional state.
All operators act on the same ordered register. Write
$\sigma=U\rho U^\dagger$, $P_b=(I+(-1)^bM)/2$ and
$p_b=\operatorname{Tr}(\sigma P_b)$. When $p_b>0$, write
$\sigma_b=P_b\sigma P_b/p_b$. The symbol $\bot$ means no conditional
state; it is not a density operator. The continuation gate $U_b$ is fixed
by the observed transcript $b$ and is evaluated only when that branch is
possible. Each bottom node is a terminal leaf in this schematic.

```tikz
\begin{tikzpicture}[>=stealth]
\node (g) at (0,0) {$U:\ \rho\mapsto\sigma$};
\node (m) at (0,-1.2) {measure $M$ on $\sigma$};
\node (c0) at (-3,-2.8) {$\begin{array}{c}\sigma_0\quad(p_0>0)\\\bot\quad(p_0=0)\end{array}$};
\node (c1) at (3,-2.8) {$\begin{array}{c}\sigma_1\quad(p_1>0)\\\bot\quad(p_1=0)\end{array}$};
\node (u0) at (-3,-4.4) {gate $U_0$};
\node (u1) at (3,-4.4) {gate $U_1$};
\node (l0) at (-3,-5.6) {$U_0\sigma_0U_0^\dagger$};
\node (l1) at (3,-5.6) {$U_1\sigma_1U_1^\dagger$};
\draw[->] (g) -- (m);
\draw[->] (m) -- node[above left] {$b=0,\ p_0$} (c0);
\draw[->] (m) -- node[above right] {$b=1,\ p_1$} (c1);
\draw[->] (c0) -- node[left] {$p_0>0$ only} (u0);
\draw[->] (c1) -- node[right] {$p_1>0$ only} (u1);
\draw[->] (u0) -- (l0);
\draw[->] (u1) -- (l1);
\end{tikzpicture}
```

At a zero-weight edge the path is impossible: the displayed $\bot$ has no
evaluated descendants. Thus the lower arrows apply only in the positive-weight
case. This illustrates the definition; no argument depends on the figure.
