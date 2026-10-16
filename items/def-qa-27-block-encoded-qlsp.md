---
id: def-qa-27-block-encoded-qlsp
kind: definition
title: "Block-encoded QLSP input and singular-gap promise"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - def-qa-26-qlsp-task
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-singular-value-decomposition
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
justified_by:
  - lem-qa-27-supported-pseudoinverse-target
axiom_use: "None; all spaces and singular decompositions are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: "https://arxiv.org/pdf/0811.3171"
      locator: "Appendix A, §§A1–A4, PDF pp.5–12."
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 41, PDF pp.37–38; Definition 43 and block-encoding constructions, PDF pp.41–48."
---

## Definition

Let $A:\mathbb C^n\to\mathbb C^m$ with $m,n\ge1$, $0<\alpha$, and $0<\gamma\le\alpha$. The input is an exact or approximate $(\alpha,a,\epsilon_{\rm BE})$ block encoding of $A$ under the access contract of [[def-qa-22-block-encoding-access-model]], together with the QLSP state-output data of [[def-qa-26-qlsp-task]]. The latter means a supplied unitary prepares a normalized $|b/\|b\||\rangle$ from a designated zero input, $b\in\operatorname{ran}A\setminus\{0\}$, the target is $A^+b/\|A^+b\|$ on the domain register, and every singular vector with nonzero coefficient in $b$ has singular value at least $\gamma$.

Put $\bar A=A/\alpha$ and $\delta=\gamma/\alpha\in(0,1]$. The support-gap promise then says every nonzero supported singular value of $\bar A$ is at least $\delta$; it makes no promise about singular values in $(0,\delta)$ outside the support of $b$. In the QSVT branch below we use $\delta\le1/2$ and $0<\epsilon\le\delta$ as additional algorithm inputs. The block-encoding approximation and all phase, inverse, controlled, reflection, and state-preparation access costs are separate input data. A finite polynomial or a matrix alone is not an oracle.

The QSVT target map is $(\delta/2)\bar A^+=(\gamma/2)A^+$. It has the same normalized output on $b$ as $A^+$ because $\gamma/2>0$. The scale conversion and nonzero normalization of this target are established by [[lem-qa-27-supported-pseudoinverse-target]].
