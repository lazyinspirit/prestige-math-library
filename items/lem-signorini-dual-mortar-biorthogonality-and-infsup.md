---
id: lem-signorini-dual-mortar-biorthogonality-and-infsup
kind: lemma
title: "The dual mortar basis is biorthogonal and uniformly stable on the trace space"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    def-signorini-dual-mortar-contact-pair,
    def-signorini-nodal-p1-contact-scheme
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rolf H. Krause and Barbara I. Wohlmuth, Multigrid Methods for Mortar
        Finite Elements, complete 7-page paper"
      url: "https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf"
      locator: "§2, printed pp. 2–3: local dual basis, biorthogonality, and diagonal
        mass pairing."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the spaces and basis of [[def-signorini-dual-mortar-contact-pair]], put $d_i:=\sum_{e_k\ni a_i}h_k$. Then
$$\int_{\Gamma_C}\chi_i\phi_j\,ds=d_i\delta_{ij}\qquad(0\le i,j\le N).$$
The pair $(\Lambda_h,W_h)$ satisfies the mesh-independent trace-space inf-sup bound
$$\inf_{0\ne\lambda_h\in\Lambda_h}\sup_{0\ne g_h\in W_h}\frac{\int_{\Gamma_C}\lambda_hg_h\,ds}{\|\lambda_h\|_{L^2(\Gamma_C)}\|g_h\|_{L^2(\Gamma_C)}}\ge\frac1{\sqrt3}.$$
Moreover, $\lambda_h\in\Lambda_h^+$ defines a nonnegative functional on the cone of nonnegative functions in $W_h$, and $\langle\lambda_h,g_h\rangle=\sum_i d_i\lambda_i g_h(a_i)$.

## Facts & Assumptions

**Given:** A finite contact partition with edge lengths $h_k>0$, continuous P1 nodal basis $\phi_i$, and local dual functions $\chi_i$ as in [[def-signorini-dual-mortar-contact-pair]].

[F1] On each edge, the local endpoint basis is $(\phi_L,\phi_R)=(1-t,t)$ for $0\le t\le1$, with arclength measure $h_k\,dt$. ([[def-signorini-dual-mortar-contact-pair]])

[F2] The local dual functions are $\chi_L=4\phi_L-2\phi_R$ and $\chi_R=-2\phi_L+4\phi_R$, assembled by their nodal indices. ([[def-signorini-dual-mortar-contact-pair]])

## Proof

**Proof technique:** direct.

**Given:** A contact edge partition, its continuous P1 trace basis, and the broken dual basis.

1.1 On one edge, direct integration of [F1]–[F2] gives $\int_e\chi_L\phi_L=h_k$, $\int_e\chi_L\phi_R=0$, $\int_e\chi_R\phi_L=0$, and $\int_e\chi_R\phi_R=h_k$. Summing over edges, only the edges incident to node $a_i$ contribute to $\int\chi_i\phi_i$, and no edge contributes to $\int\chi_i\phi_j$ for $i\ne j$; hence the global pairing is $d_i\delta_{ij}$. This also proves linear independence of the $\chi_i$. [F1, F2, given, algebra]

2.1 On an edge, the consistent P1 mass matrix is $h_k\begin{pmatrix}1/3&1/6\\1/6&1/3\end{pmatrix}$, whose eigenvalues are $h_k/6,h_k/2$. The local dual coefficient map is $\begin{pmatrix}4&-2\\-2&4\end{pmatrix}$, with eigenvalues $2,6$ on the same sum/difference vectors. Therefore, for local nodal coefficients $(\lambda_L,\lambda_R)$, $2h_k(\lambda_L^2+\lambda_R^2)\le\|\lambda_L\chi_L+\lambda_R\chi_R\|_{L^2(e)}^2\le6h_k(\lambda_L^2+\lambda_R^2)$; for primal nodal coefficients $(g_L,g_R)$, $\frac{h_k}{6}(g_L^2+g_R^2)\le\|g_L\phi_L+g_R\phi_R\|_{L^2(e)}^2\le\frac{h_k}{2}(g_L^2+g_R^2)$. [F1, F2, step 1.1, algebra]

3.1 Summing the local inequalities in step 2.1 gives $2S_\lambda\le\|\lambda_h\|_2^2\le6S_\lambda$ and $S_g/6\le\|g_h\|_2^2\le S_g/2$, where $S_\lambda=\sum_i d_i\lambda_i^2$ and $S_g=\sum_i d_i g_i^2$. By step 1.1, $\langle\lambda_h,g_h\rangle=\sum_i d_i\lambda_i g_i$. Taking $g_h$ with nodal coefficients $g_i=\lambda_i$ makes the numerator $S_\lambda$ and the denominator at most $\sqrt{6S_\lambda}\sqrt{S_\lambda/2}=\sqrt3S_\lambda$, proving the inf-sup bound. If $\lambda_i\ge0$ and $g_h\ge0$, then every $g_i\ge0$ and the same pairing is nonnegative; conversely testing against each nonnegative hat $\phi_i$ shows any nonnegative functional has $d_i\lambda_i\ge0$, hence $\lambda_i\ge0$. [step 1.1, step 2.1, F1, F2, algebra] ∎
