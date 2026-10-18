---
id: lem-qc-pure-projective-branch-norm
kind: lemma
title: Pure-state projective branch probability is a squared norm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-dirac-notation-conversion
  - def-qc-projective-measurement
  - def-trace-of-a-square-matrix
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
dependency_level: 0
proof_strategy: direct
sources:
  references:
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H$ be a finite-dimensional complex inner-product space, let $\psi\in H$
be a unit vector, and let $P:H\to H$ be an orthogonal projection. Under the
root-linear-first Dirac convention,

$$P|\psi\rangle\langle\psi|P=|P\psi\rangle\langle P\psi|,$$

$$\operatorname{Tr}(P|\psi\rangle\langle\psi|)
=\operatorname{Tr}(|\psi\rangle\langle\psi|P)
=\|P\psi\|^2.$$

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ maps $z$ to
$\langle z,y\rangle_{\rm root}x$, where the inner product is linear in its
first argument.

[F2] [[def-qc-projective-measurement]]: an orthogonal projection is
self-adjoint and idempotent.

[F3] [[def-trace-of-a-square-matrix]] and
[[def-trace-of-an-endomorphism]]: trace is the finite sum of diagonal
coefficients in a basis.

[F4] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
every finite-dimensional complex inner-product space has an orthonormal basis.

[F5] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible
finite-dimensional endomorphisms.

## Proof

**Given:** The data in the Statement.

1.1 Choose an orthonormal basis $(e_j)_{j=1}^d$ of $H$. By [F1],
$|\psi\rangle\langle\psi|e_j=\langle e_j,\psi\rangle_{\rm root}\psi$.
Therefore the finite diagonal sum defining the trace is

$$\operatorname{Tr}(P|\psi\rangle\langle\psi|)
=\sum_{j=1}^d\langle P|\psi\rangle\langle\psi|e_j,e_j\rangle_{\rm root}
=\sum_{j=1}^d\langle e_j,\psi\rangle_{\rm root}
\langle P\psi,e_j\rangle_{\rm root}
=\langle P\psi,\psi\rangle_{\rm root},$$

where the last equality is the expansion of $\psi$ in the orthonormal basis,
using linearity in the first argument. [F1, F3, F4, choose]

1.2 Since $P^\dagger=P$ and $P^2=P$ by [F2],
$\langle P\psi,(I-P)\psi\rangle_{\rm root}
=\langle\psi,P(I-P)\psi\rangle_{\rm root}=0$. Hence
$\langle P\psi,\psi\rangle_{\rm root}
=\langle P\psi,P\psi\rangle_{\rm root}=\|P\psi\|^2$. Combining with step
1.1 and cyclicity [F5] proves both trace expressions in the Statement equal
this squared norm. [F2, F5, step 1.1, algebra]

2.1 For any $z\in H$, [F1] gives
$P|\psi\rangle\langle\psi|Pz
=\langle Pz,\psi\rangle_{\rm root}P\psi
=\langle z,P\psi\rangle_{\rm root}P\psi
=|P\psi\rangle\langle P\psi|z$, where the middle equality uses
$P^\dagger=P$. Equality on every $z$ proves the operator identity. [F1, F2,
algebra]

2.2 If $P\psi\ne0$, put $\phi=P\psi/\|P\psi\|$. By step 2.1 and step 1.2,
the normalized branch
$P|\psi\rangle\langle\psi|P/\|P\psi\|^2$ is
$|\phi\rangle\langle\phi|$. Thus the branch density represents exactly the
ray of the normalized branch vector. [step 1.2, step 2.1, algebra] ∎

## Sources

Watrous Lesson 14 §14.1, PDF pp. 405–407, gives the projective outcome
probabilities; de Wolf §20.2, PDF pp. 186–188, gives the Pauli eigenspace
branch rule. The trace-to-squared-norm identity is proved here using the
declared root-linear-first Dirac convention.
