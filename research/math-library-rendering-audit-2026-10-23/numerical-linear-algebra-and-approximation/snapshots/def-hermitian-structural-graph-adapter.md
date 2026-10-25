---
id: def-hermitian-structural-graph-adapter
kind: definition
title: Undirected structural graph of a Hermitian matrix
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §§4–5"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$ satisfy $A=A^*$, where $A^*=\overline A^{\,T}$. Define a real symmetric pattern matrix $H\in\{0,1\}^{n\times n}$ by $H_{ii}=0$ and, for $i<j$, set $H_{ij}=H_{ji}=1$ exactly when $A_{ij}\ne0$; otherwise set both entries to zero. Since $A_{ji}=\overline{A_{ij}}$, this pattern records exactly the undirected off-diagonal support of $A$.

Apply the graph and elimination-ordering convention of [[def-symmetric-structural-elimination-graph-and-ordering]] to $H$. Its structural graph is the **Hermitian structural graph** of $A$, and its filled graphs are the symbolic pattern used for Hermitian elimination. The real matrix $H$ records only support; numerical Schur complements are formed from $A$.
