---
id: lem-qftx-special-unitary-column-fibration
kind: lemma
title: "Special-unitary column fibration"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-locally-trivial-fiber-bundle
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - def-axiom-of-choice
dependency_roles:
  def-locally-trivial-fiber-bundle: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  thm-numerable-fiber-bundles-are-hurewicz-fibrations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; locally trivial numerable bundles and their fibration property."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; sphere fibrations and homotopy sequences."
verification:
  precheck: pending
---
## Statement

For each integer $N\ge2$, let $SU(N)=\{U\in M_N(\mathbb C):U^*U=I,\det U=1\}$ and let $p:SU(N)\to S^{2N-1}\subset\mathbb C^N$ send a matrix to its last column. Then $p$ is a smooth, locally trivial fiber bundle with fiber $SU(N-1)$ over the last standard basis vector; for $N=2$, the fiber is the one-point group $SU(1)$.

## Statement references

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The matrix groups, standard Hermitian inner product on $\mathbb C^N$, and last-column map in the Statement. Work in ZF + AC for the imported numerable-bundle fibration result.

[F1] A locally trivial fiber bundle over a base with a supplied numeration is a Hurewicz fibration under the stated Axiom of Choice hypothesis. [[def-locally-trivial-fiber-bundle]], [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]], [[def-axiom-of-choice]]

[F2] A smooth partition of unity subordinate to the finite trivializing cover supplies a numeration of that cover. [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]

## Proof

1.1 Fix $v_0\in S^{2N-1}$. Choose an orthonormal basis $w_1,\ldots,w_{N-1}$ of $v_0^\perp$ so the matrix $(w_1,\ldots,w_{N-1},v_0)$ has determinant $1$. For $v$ in a sufficiently small neighborhood $U$ of $v_0$, project each $w_i$ onto $v^\perp$ and apply Gram–Schmidt in that fixed order. The projected vectors remain linearly independent after shrinking $U$, because their Gram determinant is continuous and equals $1$ at $v_0$. The resulting orthonormal frame depends smoothly on $v$. Multiply its first vector by the inverse of the determinant of the frame if necessary; this scalar has modulus one and the adjustment is smooth, preserves orthonormality, and makes the determinant exactly one. Thus $s(v)\in SU(N)$ is a smooth local section of $p$ on $U$. [given, algebra, construct]

2.1 For $g\in p^{-1}(U)$ with last column $v$, the matrix $s(v)^{-1}g$ fixes the last basis vector. Unitarity makes its orthogonal complement invariant, so it is block diagonal $\operatorname{diag}(A,1)$; determinant one gives $A\in SU(N-1)$. The maps
$$(A,v)\longmapsto s(v)\operatorname{diag}(A,1),\qquad g\longmapsto(\operatorname{upperBlock}(s(p(g))^{-1}g),p(g))$$
are smooth inverses between $SU(N-1)\times U$ and $p^{-1}(U)$. This proves local triviality with the asserted fiber. [step 1.1, construct]

3.1 The sphere is compact, so finitely many such neighborhoods cover it; [F2] gives a smooth partition of unity and hence a numeration. Applying [F1] proves the bundle is a Hurewicz fibration. For $N=2$, the stabilizer of the last column in $SU(2)$ has its upper block in $SU(1)=\{1\}$, so the fiber is a point. [F1, F2, step 2.1, given] ∎

