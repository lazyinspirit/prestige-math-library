---
id: def-lanczos-process-as-hermitian-arnoldi
kind: definition
title: "The Lanczos process as Arnoldi specialized to a Hermitian matrix, with the usual real-subdiagonal phase convention"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-arnoldi-process,
       prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]
justified_by: [thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence]
verification:
  audited: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Definition

Let $A$ be Hermitian and let $q_1=b/\|b\|_2$ for a nonzero start vector $b$.
Running Arnoldi on $(A,b)$ is called the **Lanczos process** when one records
the coefficients, at every step before Arnoldi breakdown, in the three-term
form

$$Aq_j=\beta_{j-1}q_{j-1}+\alpha_jq_j+\beta_jq_{j+1}\qquad (j\ge1,\ q_0:=0,\ \beta_0:=0),$$

with $\alpha_j\in\mathbb R$ and the phase of $q_{j+1}$ chosen so that
$\beta_j\ge0$ is real. In matrix form this is the Hermitian specialization of
[[def-arnoldi-process]].
