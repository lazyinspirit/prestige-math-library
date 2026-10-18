---
id: ex-zero-central-character-has-many-regular-characters
kind: example
title: At zero central parameter, distinct regular characters are inequivalent
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-complex-plane-is-complete
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---

## Statement

On $V=\mathbb R^2$ with $\omega((q,p),(q',p'))=qp'-pq'$, set $\lambda=0$.
For each real-linear functional $\ell:V\to\mathbb R$, the one-dimensional
operators $W_\ell(v)z=e^{i\ell(v)}z$ form a regular irreducible Weyl system
with central parameter zero. The choices $\ell_0(q,p)=0$ and
$\ell_1(q,p)=\pi q$ are inequivalent. Thus the nonzero central-parameter
hypothesis in the finite-dimensional uniqueness theorem is essential.

## Facts & Assumptions

**Given:** The standard symplectic plane, the parameter $\lambda=0$, and a real-linear functional $\ell$.

[F1] A Weyl system satisfies $W(0)=I$ and $W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)$; regularity is strong continuity of each line $t\mapsto W(tv)$ ([[def-regular-weyl-system-on-a-symplectic-vector-space]]).

[F2] With $\langle z,w\rangle=z\overline w$, $\mathbb C$ is a one-dimensional complex Hilbert space: the inner-product axioms are immediate and its norm metric is complete by [[thm-complex-plane-is-complete]]. Hence it has no nonzero proper linear subspaces ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[F3] $e^{i\pi}=-1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 Since $\ell$ is real-linear, $W_\ell(0)=1$ and $W_\ell(v)W_\ell(w)=e^{i(\ell(v)+\ell(w))}=e^{i\ell(v+w)}=W_\ell(v+w)$. This is exactly the Weyl relation at $\lambda=0$, and each scalar has modulus one. [F1, given, algebra]

2.1 For every $v$, the map $t\mapsto W_\ell(tv)=e^{it\ell(v)}$ is continuous, so the system is regular. Its Hilbert space is one-dimensional, hence [F2] shows it is irreducible. [F1, F2, step 1.1]

3.1 If a unitary intertwines $W_{\ell_0}$ with $W_{\ell_1}$, it is a nonzero scalar on $\mathbb C$, and the intertwining identity forces $e^{i\ell_0(v)}=e^{i\ell_1(v)}$ for every $v$. At $(q,p)=(1,0)$ these values are $1$ and $e^{i\pi}=-1$ by [F3], so they differ. Thus the two regular irreducible systems are inequivalent. [F3, step 1.1, algebra] ∎

## Boundary cases

- The example uses $\lambda=0$; it does not contradict uniqueness for fixed $\lambda\ne0$.
- The inequivalence claim concerns the displayed pair of characters only.
