---
id: cor-littlewood-richardson-coefficients-have-conjugation-symmetry
kind: corollary
title: Conjugation and exchange symmetries of the Littlewood–Richardson coefficients
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - thm-littlewood-richardson-schur-product-expansion
  - def-littlewood-richardson-tableau-and-coefficient
  - prop-omega-conjugates-schur-functions
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §§2–3"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§2, equations (2.6)–(2.13), printed pp. 21–24 (the involution ω and its action on power sums); §3, equation (3.8), printed p. 42 (ω(s_λ)=s_{λ′})."
---

## Statement

For all partitions $\lambda,\mu,\nu$, with primes denoting conjugate partitions,
$$c^\lambda_{\mu\nu}=c^\lambda_{\nu\mu}\qquad\text{and}\qquad c^\lambda_{\mu\nu}=c^{\lambda'}_{\mu'\nu'},$$
where each $c$ is the Littlewood–Richardson coefficient of the inherited tableau definition ([[def-littlewood-richardson-tableau-and-coefficient]]). No choice principle is used.

## Facts & Assumptions

**Given:** Partitions $\lambda,\mu,\nu$ and their LR coefficients.

[F1] The coefficient $c^\lambda_{\mu\nu}$ is the number of LR tableaux of shape $\lambda/\mu$ and content $\nu$, and it is zero unless $\mu\subseteq\lambda$ and $|\lambda|=|\mu|+|\nu|$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F2] For every pair of partitions, $s_\mu s_\nu=\sum_\lambda c^\lambda_{\mu\nu}s_\lambda$, a finite sum in the stable symmetric-function ring ([[thm-littlewood-richardson-schur-product-expansion]]).

[F3] The graded $\mathbb Z$-algebra involution $\omega$ satisfies $\omega(s_\eta)=s_{\eta'}$ for every partition $\eta$ ([[prop-omega-conjugates-schur-functions]]).

[F4] In every degree the Schur functions form an orthonormal $\mathbb Z$-basis, so coefficients in a Schur expansion are unique ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F5] Conjugation transposes Young diagrams, preserves size, and is an involution; in particular $\mu\subseteq\lambda$ iff $\mu'\subseteq\lambda'$ and $\eta''=\eta$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F6] Multiplication in $\Lambda$ is coordinatewise multiplication of symmetric polynomials, hence is associative, commutative, and graded ([[def-stable-graded-ring-of-symmetric-functions]]).

## Proof

**Proof technique:** coefficient comparison.

1.1 By [F6], $s_\mu s_\nu=s_\nu s_\mu$. Expanding each side by [F2] and comparing coefficients in the Schur basis [F4] gives $c^\lambda_{\mu\nu}=c^\lambda_{\nu\mu}$ for every $\lambda$. [F2, F4, F6]

1.2 Apply the ring homomorphism $\omega$ [F3] to the expansion in [F2]. Since $\omega(s_\eta)=s_{\eta'}$, this gives $s_{\mu'}s_{\nu'}=\sum_\lambda c^\lambda_{\mu\nu}s_{\lambda'}=\sum_\eta c^{\eta'}_{\mu\nu}s_\eta$, where the reindexing $\eta=\lambda'$ is valid by [F5]. The LR expansion [F2] applied to $\mu',\nu'$ also gives $s_{\mu'}s_{\nu'}=\sum_\eta c^\eta_{\mu'\nu'}s_\eta$. Uniqueness in [F4] implies $c^\eta_{\mu'\nu'}=c^{\eta'}_{\mu\nu}$; taking $\eta=\lambda'$ and using $\lambda''=\lambda$ proves $c^\lambda_{\mu\nu}=c^{\lambda'}_{\mu'\nu'}$. [F2, F3, F4, F5]

2.1 If a partition is empty, the LR expansion [F2] includes the unit and all other coefficients are zero by [F1], so both symmetries still hold. If a coefficient is zero because its containment or size condition fails, [F1] gives zero and conjugation preserves those conditions by [F5]; when the LR set is empty despite valid containment and size, step 1.2 already proves the conjugate coefficient is equal to it. Thus the zero, unit, and boundary cases, including $\lambda=\mu$, require no strict-containment assumption. All coefficient comparisons are in finite homogeneous degrees. No tableau representatives, bases, or other objects are chosen, and no axiom of choice is used. [F1, F2, F5, step 1.1, step 1.2] ∎
