---
id: "rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle"
kind: "remark"
title: "Nonsymmetric Lax--Milgram is not a scalar minimisation principle"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 6
deps:
  - "cor-symmetric-lax-milgram-is-energy-minimisation"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-hilbert-space"
  - "lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive"
  - "thm-lax-milgram"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the remark that the general operator need not be symmetric and the discussion of the formal adjoint, printed pp. 101–103"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, Remark 7 on the connection between equation (17) and the minimisation problem (18), printed p. 140"
---

## Remark

Existence and uniqueness in [[thm-lax-milgram]] do not require symmetry: only boundedness and coercivity are used, and the contraction proof never symmetrises the form. Symmetry is, however, exactly what the energy characterisation of [[cor-symmetric-lax-milgram-is-energy-minimisation]] consumes. If $a$ is bounded and coercive but not symmetric, and $F$ is bounded and conjugate-linear, then the solution of $a(u,v)=F(v)$ is in general not a critical point, and not a minimiser, of $v\mapsto\tfrac12\operatorname{Re}a(v,v)-\operatorname{Re}F(v)$: the Euler--Lagrange equation of that functional involves the symmetrised form $a_s=\tfrac12(a+a^*)$, whose operator is $\tfrac12(A+A^*)$, whereas the weak equation involves $A$. The two coincide exactly when $a$ is symmetric. The companion page's positive-definite-plus-skew counterexample and drift example exhibit the failure concretely. This is a remark: it records the boundary of the variational statement and is not used as a proof step.
