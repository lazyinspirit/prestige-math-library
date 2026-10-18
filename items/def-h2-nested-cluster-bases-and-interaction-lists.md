---
id: def-h2-nested-cluster-bases-and-interaction-lists
kind: definition
title: "Nested H² cluster bases and interaction lists"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-hlr-and-h2-block-matrix-representations]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), Chapter 9, §§9.1–9.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.6"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

In the H-matrix setting of [[def-hlr-and-h2-block-matrix-representations]], an **H² representation** assigns a row basis $U_\tau\in\mathbb F^{\tau\times r_\tau}$ to every row cluster $\tau$ and a column basis $V_\sigma\in\mathbb F^{\sigma\times s_\sigma}$ to every column cluster $\sigma$, with $0\le r_\tau,s_\sigma\le k$. For every internal row cluster $\tau$ with children $\tau_1,\tau_2$, it stores transfer matrices $E^U_{\tau_i}\in\mathbb F^{r_{\tau_i}\times r_\tau}$ satisfying

$$U_\tau|_{\tau_i}=U_{\tau_i}E^U_{\tau_i}\qquad(i=1,2).$$

For every internal column cluster $\sigma$ with children $\sigma_1,\sigma_2$, it stores transfer matrices $E^V_{\sigma_j}\in\mathbb F^{s_{\sigma_j}\times s_\sigma}$ satisfying $V_\sigma|_{\sigma_j}=V_{\sigma_j}E^V_{\sigma_j}$. These identities are the **nested-basis conditions**. An admissible block leaf $(\tau,\sigma)$ is represented by $U_\tau S_{\tau\sigma}V_\sigma^*$ with coupling matrix $S_{\tau\sigma}\in\mathbb F^{r_\tau\times s_\sigma}$; near block leaves remain dense.

Let $\mathcal P_{\rm far}$ denote the admissible leaves of the block-cluster partition. The row interaction list of $\tau$ is $\mathcal L_U(\tau)=\{\sigma:(\tau,\sigma)\in\mathcal P_{\rm far}\}$, and the column interaction list of $\sigma$ is $\mathcal L_V(\sigma)=\{\tau:(\tau,\sigma)\in\mathcal P_{\rm far}\}$. An H² representation may impose a bound on these list lengths or on their total count; any complexity theorem must state which bound it uses.

**Storage convention:** Store the basis arrays explicitly only at leaf clusters. Store each internal cluster's child-to-parent transfer matrices; the basis of an internal cluster is reconstructed recursively from its children and these transfers.
