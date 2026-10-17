---
id: def-qsm-local-coercive-regulated-model
kind: definition
title: Finite coercive regulated polynomial model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
deps:
  - def-qft-regulated-polynomial-hamiltonian
  - thm-qft-self-adjoint-regulated-interaction
  - thm-qft-regulated-gibbs-trace
  - def-countable-choice
  - post-qsm-normal-measurement-state
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  thm-qft-regulated-gibbs-trace: mathematical-premise
  def-countable-choice: mathematical-premise
  post-qsm-normal-measurement-state: formulation-prerequisite
physical_scope: "A fixed finite-mode coercive real polynomial form Hamiltonian, its selected self-adjoint form realization and trace-class Gibbs operator, with normal-state Born interpretation conditional on the current batch-36 QSM postulate, whose readiness is unresolved. There is no regulator removal, continuum interacting QFT, or empirical realization claim."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, §§2.3 and 6.3
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf
    - title: Richard S. Laugesen, Spectral Theory of Partial Differential Equations, Chapters 8–9
      url: https://arxiv.org/pdf/1203.2344v1
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.3–4.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Definition

Fix a finite integer $r\ge1$, positive coefficients $a_j$, a real polynomial
$V$ on $\mathbb R^r$, and constants $c>0,C_0\ge0$ such that
$V(q)\ge c|q|^2-C_0$. Use the QFT supplier's form realization of
[[def-qft-regulated-polynomial-hamiltonian]] and
[[thm-qft-self-adjoint-regulated-interaction]] on
$L^2(\mathbb R^r,dq)$, and denote its self-adjoint operator by $h$. This
item's **regulated polynomial model** is the tuple of these finite data,
the selected form realization, and an energy scale $E_*>0$ joules, with
$H=E_*h$. The coordinate $q$ and coefficients are dimensionless rescaled
model parameters unless another dimensional map is explicitly supplied.
The class includes $V(q)=|q|^2$ as well as potentials with higher-degree
terms or terms coupling coordinates; neither higher-degree terms nor coupling
is required. No limit in $r$ is included.

For each $b>0$, [[thm-qft-regulated-gibbs-trace]] proves
$\operatorname{Tr}(e^{-b h})<\infty$ and positivity. Thus for physical
$\beta>0$ in joules$^{-1}$, $b=\beta E_*>0$ and
$$\rho_\beta=\frac{e^{-\beta H}}{Z_\beta},\qquad Z_\beta=\operatorname{Tr}(e^{-\beta H})\in(0,\infty)$$
is a trace-one positive trace-class density. Its interpretation as a normal
quantum measurement state uses the current batch-36 draft carrier
[[post-qsm-normal-measurement-state]], which adopts a trace-class density on a
specified separable Hilbert space and the PVM Born law
$\mathbb P_\rho\{A\in C\}=\operatorname{Tr}(\rho E_A(C))$. This interface
matches the mathematical state constructed here. The mathematical probability and bounded trace-pairing inputs now have exact canonical suppliers through the trace-state calculus. The normal-state interpretation remains an adopted physical premise; source adoption is separate from native readiness and empirical validation. The QFT mathematical trace theorem remains the mathematical supplier.

This selected finite-regulator realization does not assert essential
self-adjointness of the bare compact-support differential expression, a
unique realization among all self-adjoint extensions, regulator removal, or
an interacting continuum theory.
