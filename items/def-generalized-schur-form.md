---
id: def-generalized-schur-form
kind: definition
title: "Complex and real generalized Schur forms"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
justified_by:
  - thm-generalized-schur-form-exists-for-regular-pencil
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Definition

Let $(A,B)$ be a regular pencil of order $n$. A **complex generalized Schur
form** is a factorisation
$$Q^*AZ=S,\qquad Q^*BZ=T,$$
where $Q,Z\in\mathbb C^{n\times n}$ are unitary in the sense of
[[def-linear-isometry-and-orthogonal-or-unitary-operator]], and $S,T$ are
upper triangular as in
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]. For its
$i$th one-by-one diagonal block, $[s_{ii}:t_{ii}]$ is the
**diagonal homogeneous pair**.

For real $A,B$, a **real generalized Schur form** has
$$Q^TAZ=S,\qquad Q^TBZ=T,$$
where $Q,Z$ are orthogonal, $S$ is block upper triangular with diagonal blocks
of size one or two, and $T$ is upper triangular. Each one-by-one diagonal
block has a nonzero real homogeneous pair. For a two-by-two diagonal block
$(S_{kk},T_{kk})$, the **diagonal homogeneous roots** are the zeros of
$\det(\beta S_{kk}-\alpha T_{kk})$ in $[\alpha:\beta]$; such a block has a
nonreal conjugate pair of finite roots. A singular pencil is outside this
definition.
