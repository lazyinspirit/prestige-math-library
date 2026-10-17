---
id: cex-qsm-dt-correlated-marginal
kind: counterexample
title: Correlated preparations with identical marginals diverge
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-qc-partial-trace
  - thm-qsm-dt-reduced-unitary
dependency_roles:
  def-qc-partial-trace: mathematical-premise
  thm-qsm-dt-reduced-unitary: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §2.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §§3.2–3.3
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement refuted

For fixed finite system and environment spaces and a fixed joint unitary $U$, the final system matrix $\operatorname{Tr}_E(U\omega U^*)$ is determined by the initial system marginal $\operatorname{Tr}_E\omega$ for every positive semidefinite trace-one matrix $\omega$.

## Facts & Assumptions

**Given:** Two qubit spaces $H_S=H_E=\mathbb C^2$, the standard ordered product basis, and the finite partial trace over $H_E$.

[F1] [[def-qc-partial-trace]]: in product-basis coordinates, $(\operatorname{Tr}_ER)_{aa'}=\sum_{b=0}^1R_{(a,b),(a',b)}$; the second tensor factor is contracted.


[F2] [[thm-qsm-dt-reduced-unitary]]: a fixed finite unitary and a fixed product preparation $\rho\otimes\sigma_E$ induce a finite channel. This result makes no claim that correlated joint preparations are determined by the system marginal alone.

## Counterexample


1.1 Let $|\psi_\pm\rangle=(|00\rangle\pm|11\rangle)/\sqrt2$ and $\omega_\pm=|\psi_\pm\rangle\langle\psi_\pm|$; each $\omega_\pm$ is positive semidefinite with trace one. Using [F1], the cross terms $|00\rangle\langle11|$ and $|11\rangle\langle00|$ vanish under $\operatorname{Tr}_E$ because their environment indices differ, while the diagonal terms give $\operatorname{Tr}_E\omega_+=\operatorname{Tr}_E\omega_-=I_2/2$. [given, F1, algebra]

2.1 Define $U|a,b\rangle=|a,a\oplus b\rangle$ for $a,b\in\{0,1\}$, where $\oplus$ is addition modulo two. This CNOT map permutes the orthonormal product basis and is therefore unitary. It sends $|\psi_\pm\rangle$ to $|\pm\rangle\otimes|0\rangle$, where $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$. Thus $\operatorname{Tr}_E(U\omega_\pm U^*)=|\pm\rangle\langle\pm|$, and the outputs are distinct because their $(0,1)$ matrix entries are $1/2$ and $-1/2$. Equal system marginals therefore do not determine the final system state for these correlated preparations, refuting the claim. The product-preparation theorem [F2] is unaffected. [given, F1, F2, step 1.1, algebra] ∎
## Remarks

The diagram uses the standard circuit convention: horizontal wires carry the system $S$ and environment $E$ from left to right; the filled control dot is on $S$, and $\oplus$ is the target on $E$. It depicts the same basis permutation defined in step 2.1 and is illustrative only.

```tikz
\begin{tikzpicture}[x=1.2cm,y=0.8cm,baseline=(current bounding box.center)]
  \draw (0,1) -- (3,1);
  \draw (0,0) -- (3,0);
  \node[left] at (0,1) {$S$};
  \node[left] at (0,0) {$E$};
  \fill (1.5,1) circle (2pt);
  \draw (1.5,1) -- (1.5,0);
  \draw (1.38,0) circle (0.12);
  \draw (1.38,0) -- (1.62,0);
  \draw (1.5,-0.12) -- (1.5,0.12);
\end{tikzpicture}
```
