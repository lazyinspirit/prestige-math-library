---
id: def-partial-sum-projections-and-basis-constant
kind: definition
title: "Partial-sum projections and basis constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-schauder-basis-and-coordinate-functionals, def-operator-norm]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Definition 3.1.4, printed p.65"
pipeline_run: phase-2-next-18
---

## Definition

Let $(e_n)_{n\ge1}$ be a Schauder basis of $X$, with its algebraic coordinate
functionals $e_n^*$. For $N\ge1$ define the **partial-sum projection**

$$P_Nx:=\sum_{n=1}^{N}e_n^*(x)e_n,$$

and put $P_0:=0$. Each $P_N$ is linear, has finite-dimensional range, satisfies
$P_N^2=P_N$, and obeys $P_MP_N=P_{\min\{M,N\}}$; these assertions use only
uniqueness of coefficients.

If every $P_N$ is bounded and the real set
$\{\|P_N\|:N\ge0\}$ is bounded above, the **basis constant** is

$$K:=\sup_{N\ge0}\|P_N\|.$$

This is an ordinary finite real supremum. Under its stated Dependent Choice
hypothesis, the later boundedness theorem proves both hypotheses for every
Schauder basis; until then neither $\|P_N\|$ nor $K$ is used for an algebraic
projection not yet known to be bounded.
