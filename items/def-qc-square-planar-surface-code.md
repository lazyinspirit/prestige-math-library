---
id: def-qc-square-planar-surface-code
kind: definition
title: Square planar surface code
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-css-code-from-nested-binary-codes
  - def-qc-generator-and-parity-check-matrices
  - def-qc-pauli-matrices
  - def-qc-register-and-computational-basis
  - def-qc-stabilizer-code-space
justified_by: []
proof_strategy: direct
axiom_use: "None; all spaces, matrices, and incidence maps are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory
      url: https://www.preskill.caltech.edu/pubs/preskill-2002-memory.pdf
---

## Definition

Fix an integer $d\ge2$. Take the square grid with vertices $(i,j)$ for
$0\le i,j\le d$, unit horizontal and vertical edges, and $d^2$ square faces.
Let $R$ consist of the left and right vertical boundary edges together with
their vertices. The physical qubits are the edges not in $R$; there are
$2d^2$ such edges. Order vertices and faces lexicographically by their
coordinates, and order physical edges lexicographically by their lower
endpoint, with horizontal edges before vertical edges when endpoints tie.

Let $Q_0$ be the binary vector space on vertices outside $R$, $Q_1$ the
binary vector space on physical edges, and $Q_2$ the binary vector space on
faces. Define $\partial_1:Q_1\to Q_0$ by sending each physical edge to the
sum of its endpoints that are outside $R$. Define $\partial_2:Q_2\to Q_1$
by sending each face to its boundary with any edge in $R$ deleted.

The X-check matrix is $H_X=\partial_1$, with rows indexed by vertices
outside $R$ and columns by physical edges. The Z-check matrix is
$H_Z=\partial_2^{\mathsf T}$, with rows indexed by faces and columns by
physical edges. Thus X checks are the rows of $H_X$ and Z checks are the
rows of $H_Z$. The maps satisfy $\partial_1\partial_2=0$. The rough
boundaries are the left and right sides; the top and bottom are the
complementary dual boundaries.

## Facts & Assumptions

**Given:** The finite grid, the relative chain spaces, and the two boundary
maps just defined.

[F1] [[def-qc-generator-and-parity-check-matrices]]: generator and
parity-check matrices use the declared finite coordinate order; a matrix row
specifies a binary support vector.

[F2] [[def-qc-pauli-matrices]]: $X$ and $Z$ are the exact Hermitian
one-qubit Pauli matrices.

## Verification

1.1 For each face, every vertex outside $R$ is incident to either zero or two of its boundary edges. If a boundary edge lies in $R$, its endpoints are in $R$ and are omitted from $Q_0$. Therefore every nonrough vertex appears an even number of times in $\partial_1\partial_2$ of that face, so $\partial_1\partial_2=0$. [given, construct, algebra]

2.1 The row vectors of $H_X$ and $H_Z$ have binary dot products given by $H_XH_Z^{\mathsf T}=\partial_1\partial_2=0$ from step 1.1. Hence every X check commutes with every Z check; X checks commute among themselves, as do Z checks, since equal-type Pauli factors commute. This defines a commuting CSS stabilizer family without any physical or topological-order premise. [F1, F2, step 1.1, algebra] ∎

## Remarks

The relative cellulation fixes every boundary convention. In particular,
rough edges are removed from the physical register, and only vertices outside
the rough boundary index X checks.
