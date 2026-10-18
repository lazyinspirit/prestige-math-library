---
id: def-pe26-scaled-averaging-and-bddc-preconditioner
kind: definition
title: Coefficient-scaled averaging and BDDC
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [ def-pe26-primal-interface-spaces-and-jumps, def-pe26-discrete-harmonic-extension-and-schur-complement, thm-pe26-primal-constraints-remove-floating-kernels ]
justified_by:
  - prop-pe26-bddc-constrained-local-minimization
aliases: []
axiom_use: "None; all interface spaces are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 87–90 and 96–97"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Jan Mandel and Bedřich Sousedík, BDDC and FETI-DP under Minimalist Assumptions, §§3.1–3.2"
      url: "https://arxiv.org/pdf/0708.4031"
verification:
  precheck: n/a
---

## Definition

Use the spaces and partial Schur operator of [[def-pe26-primal-interface-spaces-and-jumps]] and [[def-pe26-discrete-harmonic-extension-and-schur-complement]]. Let $E_0:\widetilde W\to\widehat W$ average every remaining interface degree of freedom and preserve every already-shared primal value. It is a scaled average if the weights for all copies of each such degree of freedom sum to one. Put $\bar E:=R E_0:\widetilde W\to\widetilde W$. Then $E_0R=I_{\widehat W}$ and $\bar E$ is a projection onto $\widehat W$.

In the PE26 two-dimensional corner-constraint branch, each non-primal node is interior to one interface edge shared by exactly two subdomains $i,j$. Set

$$ (E_0w)(x)=\frac{\rho_i}{\rho_i+\rho_j}w_i(x)+\frac{\rho_j}{\rho_i+\rho_j}w_j(x). $$

At primal nodes the copies already agree, so the average is the common value. For any finite-dimensional positive definite partial Schur operator $\widetilde S$, the **BDDC preconditioner** is

$$M_{\rm BDDC}^{-1}:=E_0\widetilde S^{-1}E_0^T:\widehat W'\to\widehat W,$$

for the assembled interface system with operator $\widehat S=R^T\widetilde S R$. Its constrained partial-energy interpretation is established in [[prop-pe26-bddc-constrained-local-minimization]].
