---
id: def-continuous-function-of-positive-type
kind: definition
title: Continuous positive-type functions and normalization
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-group]
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Definition C.4.1 and Proposition C.4.2, Appendix C, printed pp. 373–374"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Definition 1.B.1, Chapter 1 §1.B, printed p. 26"
      url: "https://arxiv.org/pdf/1912.07262"
---

## Definition

Let $G$ be a topological group with identity $e$. A continuous function
$\varphi:G\to\mathbb C$ is **of positive type** if, for every integer $n\ge1$,
every list $g_1,\ldots,g_n\in G$ (repetitions allowed), and every list
$c_1,\ldots,c_n\in\mathbb C$ (zero values allowed), the matrix
$$\bigl(\varphi(g_i^{-1}g_j)\bigr)_{1\le i,j\le n}$$
is positive semidefinite. Write $P(G)$ for the set of continuous functions of
positive type and
$$P_1(G):=\{\varphi\in P(G):\varphi(e)=1\}$$
for the normalized positive-type functions. For $\psi,\varphi\in P(G)$, the
notation $0\le\psi\le\varphi$ means that both $\psi$ and $\varphi-\psi$ belong
to $P(G)$.
