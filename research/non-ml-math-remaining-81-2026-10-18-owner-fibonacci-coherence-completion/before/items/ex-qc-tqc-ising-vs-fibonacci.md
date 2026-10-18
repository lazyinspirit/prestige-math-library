---
id: ex-qc-tqc-ising-vs-fibonacci
kind: example
title: Ising Clifford versus Fibonacci dense qubit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-qc-tqc-ising-braids-clifford-only
  - def-qc-tqc-ising-majorana-interface
  - thm-qc-tqc-fibonacci-single-qubit-density
  - def-countable-choice
dependency_level: 10
axiom_use: Assumes ACω through the Fibonacci density theorem; the Ising Clifford calculation is choice-free.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: Sections IV.A and IV.B.c, PDF pp. 31–32 and 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: Sections 9.9 and 9.17, PDF pp. 24–25 and 61–62; opposite Fibonacci chirality and a four-anyon encoding
---

## Example

In a Majorana–Ising realization satisfying
[[def-qc-tqc-ising-majorana-interface]], braid-only gates on a fixed parity
sector normalize the logical Pauli group and form a finite projective
Clifford subgroup. In the
three-$\tau$, total-$\tau$ Fibonacci sector, the two braid generators instead
generate a subgroup dense in $PU(2)$. The models therefore have different
projective gate power even though both use unitary braid matrices.

## Facts & Assumptions

**Given:** The fixed Ising and Fibonacci sectors and the countable-choice
assumption for the Fibonacci density result.

[F1] Even-Ising braid operations in the stated Majorana interface normalize
the logical Pauli group and have
finite projective image. [[thm-qc-tqc-ising-braids-clifford-only]]

[F2] Three-Fibonacci-anyon braid generators are dense in $PU(2)$ under
$\mathrm{AC}_\omega$.
[[thm-qc-tqc-fibonacci-single-qubit-density]] [[def-countable-choice]]

[F3] The Majorana–Ising interface explicitly assumes the pair-channel
identification and common relative phase for every adjacent pair.
[[def-qc-tqc-ising-majorana-interface]]

## Verification

1.1 Under the stated interface [F3], the Ising conclusion is [F1]: signed
permutations of the Majorana generators normalize the finite logical Pauli
group, so the projective image is finite. [F1, F3]

1.2 The Fibonacci conclusion is [F2]: the two noncommuting generators
produce two nonparallel circle subgroups whose Lie bracket spans
$\mathfrak{so}(3)$, so their closure is $PU(2)$. A finite projective group
cannot equal this dense infinite group. [F1, F2, algebra] ∎

## Remarks

The Ising comparison is conditional on the explicit Majorana–Ising interface.
The three-anyon Ising supplier supplies the relative phase in its stated
sector but does not establish the all-$m$ channel identification.

The diagram fixes only the crossing convention; none of the proofs relies on
the drawing. Time runs from top to bottom, the positive generator is the
exchange whose channel matrix is $R$, and the continuous strand is drawn over
the broken strand.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.8pt]
\draw (0,2) -- (0,1.08);
\draw (1,2) .. controls (1,1.5) and (0.72,1.25) .. (0.58,1.05);
\draw (0.42,0.95) .. controls (0.28,0.75) and (0,0.5) .. (0,0);
\draw (0,2) .. controls (0,1.4) and (1,0.6) .. (1,0);
\draw (2,2) -- (2,0);
\node at (0,2.2) {$1$};
\node at (1,2.2) {$2$};
\node at (2,2.2) {$3$};
\node at (0,1) {$\sigma_1$};
\node at (1,-0.25) {$t$};
\end{tikzpicture}
```

The drawn braid is a convention aid for the adjacent generator on strands
$1,2$; an identical local crossing on strands $2,3$ gives $\sigma_2$.
