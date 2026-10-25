---
id: cex-qa-37-projective-is-not-controlled
kind: counterexample
title: "A discarded global phase changes a controlled computation"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-qa-37-phase-reference-cost
  - lem-qa-37-fixed-sector-global-phase
  - thm-qc-controlled-global-phase-is-relative-phase
justified_by: []
axiom_use: "None; the witness is a two-dimensional exact matrix calculation."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.17, global phase under control, PDF pp. 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, phase convention, PDF pp. 53–57."
---

## Statement

On one target qubit, $I_2$ and $-I_2$ differ only by a global phase and
induce the same standalone ray and outcome probabilities. Controlled access
changes the comparison. With control first,
$$C(I_2)=I_4,\qquad C(-I_2)=\begin{pmatrix}I_2&0\\0&-I_2\end{pmatrix} =Z\otimes I_2.$$
On input $|+\rangle|0\rangle$, these give $|+\rangle|0\rangle$ and
$|-\rangle|0\rangle$. Measuring the control in the $X$ basis is
respectively deterministic for $+$ and $-$, so the total-variation distance
is one. Thus projective equivalence of an isolated braid gate is not
interchangeable with equality under coherent control.



## Diagram

The diagram uses a filled control dot on the upper wire and the scalar phase
$-I$ on the lower target branch. The final $X$ measurement reads the relative
phase on the control. It is a circuit convention only; the matrix calculation
below proves the claim.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw (0,1.2) -- (2.2,1.2);
  \draw (0,0) -- (1.65,0);
  \node at (0.15,1.45) {$|+\rangle$};
  \node at (0.15,0.25) {$|0\rangle$};
  \fill (2.2,1.2) circle (0.07);
  \draw (2.2,1.2) -- (2.2,0.35);
  \node[draw,minimum width=1.1cm,minimum height=0.7cm] at (2.2,0) {$-I$};
  \draw (2.75,0) -- (4.35,0);
  \node[draw,minimum width=0.9cm,minimum height=0.7cm] (measure) at (3.9,1.2) {$X$ meas.};
  \draw (2.2,1.2) -- (measure.west);
  \draw[->] (measure.east) -- ++(0.35,0) node[right] {$+/-$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** A single control qubit, a target qubit, and the two phase-related
target gates $I_2$ and $-I_2$.

[F1] Standalone global phase does not change ray probabilities, while a
controlled global phase becomes relative. [[lem-qa-37-fixed-sector-global-phase]]

[F2] The controlled-phase supplier states the control-target relative-phase
effect. [[thm-qc-controlled-global-phase-is-relative-phase]]

## Proof

1.1 Both $I_2$ and $-I_2$ send every target vector to the same ray, since the outputs differ by scalar $-1$; hence their standalone outcome probabilities coincide by [F1]. In the ordered control basis $|0\rangle,|1\rangle$, the controlled block matrix is $\operatorname{diag}(I_2,-I_2)=Z\otimes I_2$. [F1, given, algebra]

2.1 Applying this matrix to $|+\rangle|0\rangle=(|0\rangle+|1\rangle)|0\rangle/\sqrt2$ gives $|-\rangle|0\rangle$, whereas controlled $I_2$ leaves the input unchanged. The $X$-basis outcome laws are point masses on opposite outcomes, so their total-variation distance is $1$. This is the relative-phase effect in [F2]. [F2, step 1.1, algebra] ∎
