---
id: ex-qa-37-fusion-measurement-branches
kind: example
title: "Fibonacci fusion measurement branches and zero outcomes"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-qa-37-fusion-measurement
  - thm-qa-37-fusion-branch-validity
  - ex-qc-tqc-fibonacci-data
justified_by: []
axiom_use: "None; the two-channel example is a finite orthogonal projection calculation."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.15, fusion-space measurement, PDF pp. 53–59."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci fusion/readout, PDF pp. 53–57."
---

## Example

In the two-dimensional Fibonacci fusion space for three $\tau$ anyons of
total charge $\tau$, use the basis $|1\rangle,|\tau\rangle$ labelled by the
charge after fusing the first two anyons. This is the fixed convention of
[[ex-qc-tqc-fibonacci-data]]. For
$$|\psi\rangle=\sqrt{3/5}\,|1\rangle+\sqrt{2/5}\,|\tau\rangle,$$
measurement of that pair's total charge yields probabilities $3/5$ and
$2/5$ and conditional states $|1\rangle$ and $|\tau\rangle$. If either
coefficient is zero, its outcome has probability zero and there is no
normalized conditional state for that outcome.

The circuit below is schematic: the pair enters the declared fusion-channel
projective measurement, the classical outcome is the charge label, and the
post-measurement quantum branch is $P_a|\psi\rangle$. It records no physical
measurement hardware or any unproved braid diagram rule.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \draw (0,1.2) -- (1.5,1.2);
  \draw (0,0.4) -- (1.5,0.4);
  \node at (0.25,1.45) {$\tau$};
  \node at (0.25,0.65) {$\tau$};
  \draw[->] (1.5,0.8) -- (2.1,0.8);
  \node[draw,minimum width=1.5cm,minimum height=0.9cm] at (3,0.8) {$\{P_1,P_\tau\}$};
  \draw[->] (3.75,0.8) -- (4.4,0.8);
  \node[draw,minimum width=1.0cm,minimum height=0.7cm] at (5,0.8) {classical $a$};
  \draw[->] (3.0,0.35) -- (3.0,-0.45);
  \node at (3.45,-0.35) {$P_a|\psi\rangle$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The two orthogonal Fibonacci channel basis vectors and the finite
projective measurement of their pair charge.

[F1] The two basis states are the total-charge channels of the first pair in
the stated Fibonacci convention. [[ex-qc-tqc-fibonacci-data]]

[F2] Channel outcome probability and conditional state are given by the
fusion-branch theorem. [[thm-qa-37-fusion-branch-validity]]

## Verification

1.1 The coefficients have squared moduli $3/5$ and $2/5$, whose sum is one. The channel projectors are $P_1=|1\rangle\langle1|$ and $P_\tau=|\tau\rangle\langle\tau|$, so they send $|\psi\rangle$ to the corresponding coefficient times its basis vector. Thus the probabilities are $3/5$ and $2/5$, and after division by the coefficient magnitudes the conditional states are $|1\rangle$ and $|\tau\rangle$ by [F1]–[F2]. [F1, F2, given, algebra]

2.1 If the coefficient of one channel is zero, its projected vector is zero and the corresponding probability is zero. The branch-validity theorem says that this case has no normalized conditional state; the other coefficient has modulus one and its branch is the original basis state. This checks both zero-coefficient boundary cases. [F2, step 1.1, algebra] ∎
