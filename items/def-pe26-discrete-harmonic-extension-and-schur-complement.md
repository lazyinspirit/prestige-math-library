---
id: def-pe26-discrete-harmonic-extension-and-schur-complement
kind: definition
title: Discrete harmonic extension and interface Schur complement
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe26-scalar-substructuring-model, def-pe26-primal-interface-spaces-and-jumps, thm-pe26-local-energy-kernel-and-interior-spd, def-block-lu-factorisation, thm-block-lu-factorisation-via-an-invertible-leading-block]
justified_by: []
aliases: []
axiom_use: "None; only finite-dimensional block elimination is used."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 35–37"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2, §§2.1–2.3"
      url: "https://d-nb.info/983219192/34"
verification:
  precheck: n/a
---

## Definition

Use the interior/interface ordering of [[def-pe26-scalar-substructuring-model]]. The boundary-trace spaces $W_i$, $W=\prod_iW_i$, the conforming space $\widehat W$, the partially assembled space $\widetilde W$, and the inclusion $R:\widehat W\to W$ are those of [[def-pe26-primal-interface-spaces-and-jumps]]. In particular, $R$ identifies the copies of a conforming interface trace. In subdomain $i$, write its stiffness matrix as

$$K_i=\begin{pmatrix}K_{II}^{(i)}&K_{I\Gamma}^{(i)}\\K_{\Gamma I}^{(i)}&K_{\Gamma\Gamma}^{(i)}\end{pmatrix}.$$

By [[thm-pe26-local-energy-kernel-and-interior-spd]], $K_{II}^{(i)}$ is positive definite when nonempty; on the zero-dimensional interior space its unique endomorphism is invertible. For admissible boundary trace $g_i$, the **discrete harmonic extension** is

$$H_i g_i:=\begin{pmatrix}-(K_{II}^{(i)})^{-1}K_{I\Gamma}^{(i)}g_i\\g_i\end{pmatrix}.$$

The local **interface Schur complement** is

$$S_i:=K_{\Gamma\Gamma}^{(i)}-K_{\Gamma I}^{(i)}(K_{II}^{(i)})^{-1}K_{I\Gamma}^{(i)}.$$

This is the Schur complement in [[def-block-lu-factorisation]]. The local Schur form on a trace is $g_i^TS_i g_i$. The block identity and the associated block LU factorization use [[thm-block-lu-factorisation-via-an-invertible-leading-block]] with leading block $K_{II}^{(i)}$. Assembling local Schur forms on $\widehat W$ gives $\widehat S=R^T(\operatorname{diag}_i S_i)R$; restricting the same block-diagonal form to $\widetilde W$ gives the partially assembled operator $\widetilde S$.
