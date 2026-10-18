---
id: ex-one-mode-schrodinger-weyl-relations
kind: example
title: The one-mode Schrödinger formulas and their phase
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-countable-choice
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
axiom_use: "Countable Choice is used through the L² Hilbert-space interface."
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

Assume Countable Choice and let $\lambda\ne0$. On $L^2(\mathbb R)$ define
$U_qf(x)=f(x-q)$ and $V_pf(x)=e^{i\lambda px}f(x)$. Then
$U_qV_p=e^{-i\lambda qp}V_pU_q$. The phase-corrected operators
$$W_\lambda(q,p):=e^{i\lambda qp/2}U_qV_p$$
satisfy $W_\lambda(q,p)W_\lambda(q',p')=e^{-i\lambda(qp'-pq')/2}W_\lambda(q+q',p+p')$ and are exactly the
one-mode Schrödinger operators, acting by
$$\big(W_\lambda(q,p)f\big)(x)=e^{i\lambda p(x-q/2)}f(x-q).$$

## Facts & Assumptions

**Given:** $\lambda\ne0$, Lebesgue $L^2(\mathbb R)$, and the operators in the Statement.

[F1] Under Countable Choice, $L^2(\mathbb R)$ with its integral pairing is a complex Hilbert space; translation preserves Lebesgue measure, so $U_q$ is a well-defined isometry with inverse $U_{-q}$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F2] For every real $s$, $|e^{is}|=1$, so multiplication by $e^{i\lambda px}$ is unitary on complex $L^2$ and the scalar phase $e^{i\lambda qp/2}$ has modulus one ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F3] The Weyl phase convention is $e^{-i\lambda\omega(v,w)/2}$ with $\omega((q,p),(q',p'))=qp'-pq'$ ([[def-regular-weyl-system-on-a-symplectic-vector-space]]).

[A1] Countable Choice is the hypothesis used to make $L^2(\mathbb R)$ a Hilbert space ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 By [F1] and [F2], $U_q$ and $V_p$ are unitary. Direct evaluation gives $(U_qV_pf)(x)=e^{i\lambda p(x-q)}f(x-q)$ and $(V_pU_qf)(x)=e^{i\lambda px}f(x-q)$, so $U_qV_p=e^{-i\lambda qp}V_pU_q$. [A1, F1, F2, given, algebra]

2.1 The formula in the Statement yields $(W_\lambda(q,p)f)(x)=e^{i\lambda qp/2}e^{i\lambda p(x-q)}f(x-q)=e^{i\lambda p(x-q/2)}f(x-q)$, proving the asserted Schrödinger formula directly. [given, step 1.1, algebra]

3.1 The commutation identity from step 1.1 gives $V_pU_{q'}=e^{i\lambda pq'}U_{q'}V_p$. Therefore $W_\lambda(q,p)W_\lambda(q',p')=e^{i\lambda((qp+q'p')/2+pq')}U_{q+q'}V_{p+p'}$. The exponent coefficient satisfies $((qp+q'p')/2+pq')=((q+q')(p+p')-(qp'-pq'))/2$, so this is $e^{-i\lambda(qp'-pq')/2}W_\lambda(q+q',p+p')$, as required by [F3]. [F3, step 1.1, step 2.1, algebra] ∎
## Boundary cases

- The displayed formula requires no regularity or irreducibility result; its algebraic product identity also holds at $\lambda=0$.
- The two basic operator families commute up to the displayed scalar; omitting the factor $e^{i\lambda qp/2}$ changes the Weyl convention.
