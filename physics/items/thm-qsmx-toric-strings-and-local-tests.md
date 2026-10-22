---
id: thm-qsmx-toric-strings-and-local-tests
kind: theorem
title: Crossing strings and local scalar compression
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-toric-cellular-hamiltonian
  - thm-qsmx-toric-ground-space
  - lem-qsmx-toric-local-pauli-centralizer
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-toric-cellular-hamiltonian: mathematical-premise
  thm-qsmx-toric-ground-space: mathematical-premise
  lem-qsmx-toric-local-pauli-centralizer: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: Exact finite square-torus stabilizer algebra only; no perturbation-stability or thermodynamic-limit claim.
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: §1, PDF pp. 2–5; primal and dual loop operators, homology, and local-error discussion.
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.6–9.7, PDF pp. 16–21; torus cycles, logical loops, and exact ground-space degeneracy.
---

## Statement

Assume the Axiom of Choice and use the square $L\times L$ torus cellulation, $L\ge3$. A closed primal $Z$ string and a closed dual $X$ string commute or anticommute according to the parity of their edge crossings: their commutator sign is $(-1)^{I}$, where $I$ is the mod-two intersection number. Let $P_0$ be the orthogonal projection onto the common $+1$ eigenspace of all vertex and face stabilizers. For any operator $O$ supported on an edge set contained in a disk whose complement contains the coordinate cycles $p_1,p_2,q_1,q_2$ specified in the definition, there is a scalar $\lambda(O)\in\mathbb C$ such that $P_0OP_0=\lambda(O)P_0$. This is exact local indistinguishability for the unperturbed finite Hamiltonian.

## Statement references

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §1](https://arxiv.org/pdf/quant-ph/9707021)

[John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §§9.6–9.7](https://www.preskill.caltech.edu/ph219/topological.pdf)

## Facts & Assumptions

**Given:** A square $L\times L$ torus with $L\ge3$, the toric-code operators of the definition, the common ground projection $P_0$, and the Axiom of Choice inherited by the ground-space theorem.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]), used only through the surface Euler-characteristic input in [F2].

[F1] [[def-qsmx-toric-cellular-hamiltonian]]: $X(a)Z(b)$ is the canonical Pauli basis; $A_v=X(\partial_1^Tv)$, $B_f=Z(\partial_2f)$; primal and dual crossing parity is the mod-two intersection number.

[F2] [[thm-qsmx-toric-ground-space]]: under [A1], the common $+1$ eigenspace is nonzero, is the ground space, and has dimension $2^{2g}$.

[F3] [[lem-qsmx-toric-local-pauli-centralizer]]: a Pauli string supported on the stated disk-local set and commuting with every stabilizer is a product of stabilizers.

## Proof
1.1 On each edge, $XZ=-ZX$, while Pauli operators on distinct edges commute. Moving the $X$ factors of a dual string past the $Z$ factors of a primal string therefore contributes one minus sign for each shared crossed edge. The total sign is $(-1)^I$, with $I$ the number of crossings modulo two. [F1, algebra]

1.2 Let $T\subseteq E$ be a finite edge support for $O$ contained in the disk from the statement. On one edge, $I,X,Z,XZ$ are four linearly independent matrices in the four-dimensional space $M_2(\mathbb C)$; their tensor products indexed by $a,b\in\mathbb F_2^T$ form a basis of the matrix algebra on $(\mathbb C^2)^{\otimes T}$. Extend $a,b$ by zero on $E\setminus T$ and expand $O=\sum_{a,b}c_{a,b}X(a)Z(b)$ in that basis. For a Pauli term $Q$ that anticommutes with some stabilizer $S$, the ground projection satisfies $P_0S=SP_0=P_0$ and $SQ=-QS$. Hence $P_0QP_0=P_0SQP_0=-P_0QSP_0=-P_0QP_0$, so $P_0QP_0=0$. [given, A1, F1, F2, algebra]

2.1 Every Pauli term in the expansion either anticommutes with a stabilizer, and has zero compression by step 1.2, or commutes with every stabilizer. In the latter case [F3] writes it as a product of stabilizers; each acts as the identity on the range of $P_0$, so its compression is $P_0$. Summing the finitely many compressed terms gives $P_0OP_0=\lambda(O)P_0$ for the sum of their coefficients. [given, A1, F2, F3, step 1.2, algebra] ∎

## Remarks

The proof is independent of the diagram. The picture shows one representative pair of fundamental cycles on the square fundamental domain; opposite sides are identified, the blue solid path is primal, and the red dashed path is dual.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw[gray!55] (0,0) grid (3,3);
  \draw[thick] (0,0) rectangle (3,3);
  \draw[blue,very thick] (0,1) -- (3,1);
  \draw[red,dashed,very thick] (1.5,0) -- (1.5,3);
  \fill[black] (1.5,1) circle (2pt);
  \node[blue,left] at (0,1) {$p_1$};
  \node[red,above] at (1.5,3) {$q_1$};
  \node at (1.5,-0.45) {left/right and top/bottom sides are identified};
\end{tikzpicture}
```

At the displayed crossing the primal and dual strings meet on one edge, so their intersection parity is one and their Pauli strings anticommute. A diagram illustrates the convention; it supplies no proof step. No perturbation-stability claim follows from this exact compression identity.
