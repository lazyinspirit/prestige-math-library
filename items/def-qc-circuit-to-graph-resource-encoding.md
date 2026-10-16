---
id: def-qc-circuit-to-graph-resource-encoding
kind: definition
title: "Circuit-to-open-graph resource encoding with normalized transport rounds"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-finite-simple-graph, def-qc-normalized-transport-schedule, def-qc-binary-adjacency-matrix, def-qc-adaptive-measurement-pattern, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities, lem-qc-adaptive-angle-pauli-frame-update, lem-qc-cz-matching-pauli-frame-action, def-qc-phase-aware-n-qubit-pauli-group, lem-qc-transport-encoding-is-simple-and-size-bounded, lem-qc-normalized-rounds-preserve-circuit]
justified_by: []
dependency_level: 10
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–G"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Definition

Let $C$ be a finite J/CZ circuit and let $\mathcal T(C)$ have rounds
$(M_s,(\alpha_{s1},\ldots,\alpha_{sn}))_{s=1}^R$ and recorded scalar
$\sigma_C$ as in [[def-qc-normalized-transport-schedule]]. The schedule index
$j\in\{1,\ldots,n\}$ denotes source circuit wire $j-1$; thus a schedule edge
$\{j,k\}$ corresponds to the source-wire pair $\{j-1,k-1\}$. Coordinate
$j$ of every frame vector denotes this same wire. The encoded graph
$G_C$ has vertices $v_{j,s}$ for $1\le j\le n$ and $0\le s\le R$,
horizontal edges $\{v_{j,s-1},v_{j,s}\}$, and vertical edges
$\{v_{j,s-1},v_{k,s-1}\}$ for $\{j,k\}\in M_s$. It is a finite simple
graph by [[lem-qc-transport-encoding-is-simple-and-size-bounded]]. Its input
vertices are $I=\{v_{j,0}:1\le j\le n\}$, its outputs are
$O=\{v_{j,R}:1\le j\le n\}$, and its ordered vertex register follows wire
index first and then column index. In particular, the inherited orders on
$I$ and $O$ are $v_{1,0},\ldots,v_{n,0}$ and
$v_{1,R},\ldots,v_{n,R}$, matching source circuit wire order
$0,\ldots,n-1$. The pattern’s measurement order on the vertices
$v_{j,s-1}$ is round-major, wire-minor, for $s=1,\ldots,R$ and
$j=1,\ldots,n$.

The adaptive basis angles and terminal correction are defined from the
outcome blocks $b^s=(b^s_1,\ldots,b^s_n)$ as follows. Let $A_s$ be the binary
adjacency matrix of $M_s$ with vertex order $1,\ldots,n$ (vertex $j$ is
position $j-1$ in the zero-based order of [[def-qc-binary-adjacency-matrix]]),
so
$(A_s)_{jk}=1$ exactly when $\{j,k\}\in M_s$. Matrix-vector products and
all frame vectors use these coordinates; binary dot products mean
$u\cdot v=\sum_{j=1}^n u_jv_j\in\mathbb F_2$. The frame functions are defined recursively by
$x^0=z^0=0\in\mathbb F_2^n$ and the following formulas. Before round $s$, define

$$z^{s,*}:=z^{s-1}\oplus A_sx^{s-1},\qquad \theta_{sj}:=(-1)^{x^{s-1}_j}\alpha_{sj}.$$

For an outcome block $b^s$, the post-round frame is defined by
$x^s:=b^s\oplus z^{s,*}$ and $z^s:=x^{s-1}$. The function of earlier
outcomes given by these recurrences selects the equatorial measurement basis
at each vertex. For a complete transcript $\mathbf b$, the
terminal frame and correction are the following functions. For $n\ge1$, the zero-scalar Pauli frame is
$P(x,z):=X^xZ^z=P(0,x,z)$ from
[[def-qc-phase-aware-n-qubit-pauli-group]], and the terminal correction is
$C(\mathbf b):=P(x^R,z^R)^\dagger$. For $n=0$, the empty frame is
$P((),()):=I_{\mathbb C}$ and the correction is the identity on the
one-dimensional register.

For $n\ge1$, define
$\gamma(x,z,\alpha)=1$ if $x=0$ and
$\gamma(x,z,\alpha)=(-1)^ze^{-i\alpha}$ if $x=1$, as in
[[lem-qc-adaptive-angle-pauli-frame-update]], and put

$$\lambda_{\mathbf b}:=\sigma_C\prod_{s=1}^R\left[ (-1)^{\sum_{\{j,k\}\in M_s}x^{s-1}_jx^{s-1}_k} \prod_{j=1}^n\gamma(x^{s-1}_j,z^{s,*}_j,\alpha_{sj})\right].$$

For $n=0$, the empty transcript has scalar $\lambda=1$. The encoding
retains these exact scalars; no global phase is discarded. Its graph has
$n(R+1)$ vertices and $R\le3d$ for $d$ original layers. The item
[[lem-qc-normalized-rounds-preserve-circuit]] proves that the normalized
round circuit is $\sigma_C U_C$; the branch theorem proves the resulting
pattern's relation to $U_C$.
