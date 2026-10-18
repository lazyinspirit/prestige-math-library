---
id: def-signorini-dual-mortar-contact-pair
kind: definition
title: "Dual P1 mortar multipliers for boundary contact"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-signorini-nodal-p1-contact-scheme, def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs]
justified_by: [lem-signorini-dual-mortar-biorthogonality-and-infsup]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Rolf H. Krause and Barbara I. Wohlmuth, Multigrid Methods for Mortar Finite Elements, complete 7-page paper"
      url: "https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf"
      locator: "§2, printed pp. 2–3: dual P1 mortar multiplier functions and biorthogonality."
---

## Definition

On a contact mesh with nodes $a_0,\ldots,a_N$ and edges $e_k=[a_k,a_{k+1}]$ of lengths $h_k>0$, let $W_h$ be the continuous piecewise-affine scalar trace space with nodal basis $\phi_0,\ldots,\phi_N$. On $e_k$, write the local endpoint basis as $\phi_k^{e_k},\phi_{k+1}^{e_k}$. Define broken piecewise-affine dual functions by
$$\chi_i|_{e_k}=\begin{cases}4\phi_k^{e_k}-2\phi_{k+1}^{e_k},&i=k,\\-2\phi_k^{e_k}+4\phi_{k+1}^{e_k},&i=k+1,\\0,&i\notin\{k,k+1\},\end{cases}$$
and set $\Lambda_h:=\operatorname{span}\{\chi_i:0\le i\le N\}\subset L^2(\Gamma_C)$. The **positive discrete multiplier cone** is
$$\Lambda_h^+:=\left\{\lambda_h=\sum_{i=0}^N\lambda_i\chi_i:\lambda_i\ge0\right\}.$$
The functions $\chi_i$ have support on the one or two contact edges incident to $a_i$ and can jump at contact nodes. For $v_h\in V_h$ and $\lambda_h\in\Lambda_h$, define the exact mortar coupling
$$b_h(v_h,\lambda_h):=\int_{\Gamma_C}\lambda_h\,T_Cv_h\cdot n\,ds.$$
The cone $\Lambda_h^+$ is coefficientwise; its elements need not be pointwise nonnegative. Its dual-cone and stability properties are proved in [[lem-signorini-dual-mortar-biorthogonality-and-infsup]]. This is a matching boundary mortar pair and makes no nonmatching-interface claim.
