---
id: lem-qc-tqc-pu2-is-so3
kind: lemma
title: The projective one-qubit group is SO(3)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-projective-gate-and-metric
  - thm-heine-borel-rn
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - ex-su-two-to-so-three-as-a-covering-homomorphism
  - def-countable-choice
dependency_level: 9
axiom_use: Assumes exactly ACω through the SU(2)-to-SO(3) covering supplier; the quotient and compactness arguments add no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21; projective SU(2) actions
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.17, PDF pp. 61–62; projective one-qubit gates
---

## Statement

Assume $\mathrm{AC}_\omega$. Give $PU(2)$ the quotient metric from
[[def-qc-tqc-projective-gate-and-metric]]. The map
$$q:SU(2)\longrightarrow PU(2),\qquad q(A)=[A],$$
is a two-sheeted covering with kernel $\{I,-I\}$. It induces a topological
group isomorphism $SU(2)/\{\pm I\}\cong PU(2)\cong SO(3)$.

## Facts & Assumptions

**Given:** The projective unitary group $PU(2)$ with its quotient metric, the
matrix group $SU(2)$, and $\mathrm{AC}_\omega$.

[F1] The projective distance is a metric and
$d_P([A],[B])=\min_{|z|=1}\|A-zB\|_{\mathrm{op}}$.
[[def-qc-tqc-projective-gate-and-metric]]

[F2] Closed bounded subsets of finite-dimensional Euclidean space are compact.
[[thm-heine-borel-rn]]

[F3] A compact subset of a Hausdorff space is closed.
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]

[F4] Every unit complex number has the form $e^{i\theta}$ for some real
$\theta$. [[thm-sine-and-cosine-parametrize-the-unit-circle]]

[F5] Quaternionic conjugation gives a surjective two-sheeted covering
$\rho:SU(2)\to SO(3)$ with kernel $\{I,-I\}$.
[[ex-su-two-to-so-three-as-a-covering-homomorphism]]

[A1] Assume $\mathrm{AC}_\omega$, the exact choice principle used by [F5].
[[def-countable-choice]]

## Proof

1.1 The determinant of a unitary $A\in U(2)$ has modulus one, since $1=\det(A^*A)=\overline{\det A}\det A$. Write $\det A=e^{i\theta}$ by [F4] and put $\lambda=e^{-i\theta/2}$. Then $|\lambda|=1$ and $\det(\lambda A)=\lambda^2\det A=1$, so $\lambda A\in SU(2)$ and $q(\lambda A)=q(A)$. Thus $q$ is onto. [given, F4, algebra]

2.1 If $A\in SU(2)$ and $q(A)=[I]$, then $A=\lambda I$ for some $|\lambda|=1$. The determinant condition gives $\lambda^2=1$, hence $\lambda=\pm1$. Conversely $I$ and $-I$ have the same projective class. Therefore $\ker q=\{\pm I\}$, and two matrices have the same $q$-image exactly when they differ by this kernel. [given, step 1.1, algebra]

2.2 The map $q$ is continuous: by [F1], $d_P(q(A),q(B))\le\|A-B\|_{\mathrm{op}}$. Identify $M_2(\mathbb C)$ with $\mathbb R^8$. The equations $A^*A=I$ and $\det A=1$ define a closed subset, and each matrix entry is bounded in modulus by $1$ because each column has norm $1$. Thus $SU(2)$ is compact by [F2]. The metric space $PU(2)$ is Hausdorff by [F1]. If $F\subseteq SU(2)$ is closed, then it is compact and $q(F)$ is compact, hence closed by [F3]. It is a quotient map: if $q^{-1}(W)$ is open, then $q^{-1}(PU(2)\setminus W)$ is closed; surjectivity and closedness of $q$ make its image $PU(2)\setminus W$ closed, so $W$ is open. [F1, F2, F3, step 1.1, algebra]

3.1 By [F5] and step 2.1, $q$ and $\rho$ have exactly the same fibers. There is therefore a unique bijective group homomorphism $\bar\rho:PU(2)\to SO(3)$ with $\bar\rho(q(A))=\rho(A)$. It is continuous because $q$ is a quotient map and $\rho=\bar\rho\circ q$ is continuous. The space $PU(2)=q(SU(2))$ is compact, while $SO(3)$ is Hausdorff as a subspace of the real $3\times3$ matrix space. A continuous bijection from a compact space to a Hausdorff space is a homeomorphism: images of closed sets are compact and therefore closed by [F3]. Hence $\bar\rho$ is a topological group isomorphism. Since $q$ is a quotient map and its fibers are exactly the cosets of $\{\pm I\}$ by step 2.1, the induced map $SU(2)/\{\pm I\}\to PU(2)$ is also a homeomorphism. The covering sheets for $q$ are carried from those of $\rho$ by this homeomorphism, so $q$ is a two-sheeted covering. [A1, F3, F5, step 2.1, step 2.2, algebra] ∎
