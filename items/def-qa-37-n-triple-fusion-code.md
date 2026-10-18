---
id: def-qa-37-n-triple-fusion-code
kind: definition
title: "Arbitrary-n triple-anyon fixed-charge code"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-qc-tqc-fusion-tree-basis
  - lem-qc-tqc-fusion-tree-dimension
  - ex-qc-tqc-fibonacci-data
  - def-qc-tqc-fixed-charge-encoding
  - def-qc-tqc-unitary-fusion-category
  - thm-qc-tqc-f-symbol-unitary
justified_by: []
axiom_use: "None; finite fusion-tree bases, tensor products, and unitary reassociation are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.17, printed pp. 53–62."
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§II.A and §IV.B.c, PDF pp. 3–6 and 53–57."
---
## Definition

Let $n\ge1$ and $c\in\{1,\tau\}$ with $V(\tau^n\to c)\ne0$, using the
left-associated tree for both fixed-charge spaces. In the ordered list of
$3n$ Fibonacci $\tau$ charges, group consecutive leaves into $n$ triples;
within each triple fuse its first two charges and then its third, and fuse the
$n$ triple outputs by the left-associated $n$-leaf tree to total $c$. Restrict
each triple output to $\tau$; its two local paths are indexed by the charge
$x\in\{1,\tau\}$ after the first two leaves. Fix a rebracketing sequence
of associators from this grouped tree to the fixed left-associated $3n$-leaf
tree, and let $R_{n,c}$ be the induced composite unitary. For each tensor
basis vector $e_{x_1}\otimes\cdots\otimes e_{x_n}\otimes v_\lambda$, where
$e_1,e_\tau$ are the local triple paths and $v_\lambda$ is a basis vector of
$V(\tau^n\to c)$, map it to its grouped fusion-tree basis vector, then
apply $R_{n,c}$. Extend linearly and call the resulting map $J_{n,c}$. Its
image is the code $\mathcal C_{n,c}$ and it is an isometry; set
$P_{n,c}=J_{n,c}J_{n,c}^*$ for the code projector.
The factor $V(\tau^n\to c)$ retains all spectator fusion paths and is not a
physical preparation at zero cost.

## Facts & Assumptions

**Given:** The Fibonacci fusion rule $\tau\otimes\tau=1\oplus\tau$ with
multiplicity one, the orthonormal fusion-tree basis and dimension recurrence,
and unitary associator moves.

[F1] The Fibonacci rule has the only nontrivial fusion channels
$\tau\otimes\tau=1\oplus\tau$, each of multiplicity one.
[[ex-qc-tqc-fibonacci-data]]

[F2] Fusion-tree vectors form an orthonormal basis, with dimension computed
by the finite multiplicity recurrence. [[lem-qc-tqc-fusion-tree-dimension]]

[F3] The fixed-charge code projector associated with an isometry is
$JJ^*$. [[def-qc-tqc-fixed-charge-encoding]]

[F4] The associator and its induced F-matrices are unitary, so rebracketing
preserves the fusion-space inner product. [[thm-qc-tqc-f-symbol-unitary]]

## Proof

1.1 Write $m_k(a)=\dim V(\tau^k\to a)$. The Fibonacci rule [F1] and the fusion-tree recurrence [F2] give $m_2(1)=m_2(\tau)=1$ from the two channels of $\tau\otimes\tau$. Applying the same recurrence once more gives $m_3(1)=m_2(\tau)=1$ and $m_3(\tau)=m_2(1)+m_2(\tau)=2$. Thus the local total-$\tau$ triple has exactly the two orthogonal paths labelled $x=1,\tau$ used as one logical basis. [F1, F2, given, algebra]

2.1 Choose the fusion-tree basis of the finite spectator space $V(\tau^n\to c)$. Tensoring its basis with the $n$ local two-path bases from step 1.1 gives an orthonormal basis of the domain. By [F2], its grouped-tree images are precisely an orthonormal family in $V(\tau^{3n}\to c)$. The specified associator rebracketing is unitary by [F4], so their images in the fixed tree remain orthonormal; the linear map $J_{n,c}$ sending the tensor basis to these vectors is therefore an isometry. Applying [F3] gives the orthogonal projector $P_{n,c}=J_{n,c}J_{n,c}^*$. All choices are from fixed finite bases, and no choice axiom is used. [F2, F3, F4, step 1.1, algebra] ∎
