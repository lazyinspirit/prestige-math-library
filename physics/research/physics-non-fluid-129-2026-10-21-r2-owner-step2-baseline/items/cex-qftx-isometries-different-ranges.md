---
id: cex-qftx-isometries-different-ranges
kind: counterexample
title: Two isometric wave maps can give a nonunitary comparison
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - prop-qftx-scattering-isometry-not-completeness
dependency_roles:
  prop-qftx-scattering-isometry-not-completeness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Detlev Buchholz and Wojciech Dybalski, Scattering in relativistic quantum field theory: basic concepts, tools, and results"
      url: https://arxiv.org/pdf/math-ph/0509047
      locator: "Version 3, revised 2024-11-03; §1, PDF pp. 2–3, and §2, PDF pp. 4–5: incoming and outgoing maps have ranges in the physical Hilbert space; full completeness is a further condition."
    - title: "Klaus Fredenhagen, Quantum Field Theory, lecture notes, Wintersemester 2009/10 and Sommersemester 2010"
      url: https://www.physik.uni-hamburg.de/th2/ag-fredenhagen/dokumente/qft09-10.pdf
      locator: "Chapter IV §3, PDF p. 85: isometric wave maps need not be unitary without range information."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement refuted

For every pair of isometries $\Omega_\pm:\mathbb C\to\mathbb C^2$, the
comparison $\Omega_+^*\Omega_-$ is unitary.

## Statement references

[[prop-qftx-scattering-isometry-not-completeness]]

## Facts & Assumptions

**Given:** $\mathcal H_{\mathrm{as}}=\mathbb C$ and
$\mathcal H=\mathbb C^2$ with their standard Hilbert norms, and the maps
$\Omega_-(z)=(z,0)$ and $\Omega_+(z)=(0,z)$.

[F1] [[prop-qftx-scattering-isometry-not-completeness]]: for isometric maps
from one asymptotic Hilbert space to a physical Hilbert space, the comparison
is $S=\Omega_+^*\Omega_-$ and its unitarity requires equal ranges.

## Counterexample

1.1 For every $z,w\in\mathbb C$,
$(\Omega_-(z),\Omega_-(w))=z\overline w=(z,w)$ and
$(\Omega_+(z),\Omega_+(w))=z\overline w=(z,w)$ in the standard
first-variable-linear inner products, so both maps are isometries.
Their ranges are $\mathbb C\times\{0\}$ and $\{0\}\times\mathbb C$,
respectively, and are distinct proper subspaces of $\mathbb C^2$.
[given, algebra]

2.1 The Hilbert adjoint is $\Omega_+^*(x,y)=y$, since
$(\Omega_+z,(x,y))=(z,y)$ for all $z,x,y$. Hence
$\Omega_+^*\Omega_-(z)=\Omega_+^*(z,0)=0$ for every $z$. The zero map is
not unitary because it does not preserve the norm of $1\in\mathbb C$ and is
not surjective. This refutes the unqualified claim and shows that isometry
and limit existence do not imply full asymptotic completeness.
[F1, given, step 1.1, algebra] ∎
