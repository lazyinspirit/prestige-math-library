---
id: thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness
kind: theorem
title: The residual and orthogonality certifier encloses the full ordered spectrum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-near-orthonormal-hermitian-eigenvalue-certifier, thm-near-orthonormal-hermitian-eigenvalue-enclosure, def-hermitian-residual-orthogonality-certificate, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1–5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

If [[alg-near-orthonormal-hermitian-eigenvalue-certifier]] returns `certified` with radius $\eta$, then for every admitted Hermitian $A$ its increasing eigenvalues lie in the returned intervals centered at the increasing rearrangement of the diagonal entries of $\Theta$. Inconclusive output makes no spectral claim.

## Facts & Assumptions

**Given:** A nonempty Hermitian family and a `certified` algorithm return with validated bounds $\delta,\rho,M_A,M_\Theta,\tau$.

[F1] Outward interval calculations enclose every exact family residual, Gram defect and norm upper bound ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] The algorithm checks the hypotheses of the near-orthonormal residual enclosure ([[alg-near-orthonormal-hermitian-eigenvalue-certifier]], [[def-hermitian-residual-orthogonality-certificate]]).

[F3] Such residual and orthogonality data enclose every ordered Hermitian eigenvalue within $\rho+(M_A+M_\Theta)\tau$ ([[thm-near-orthonormal-hermitian-eigenvalue-enclosure]]).

[F4] The operator 2-norm is at most the Frobenius norm ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

## Proof

1.1 By [F1], the reported interval bounds dominate the corresponding Frobenius norms for every admitted $A$, and [F4] makes them upper bounds for the operator norms in the residual and orthogonality certificate. The algorithm accepts only if these bounds satisfy each inequality in that definition, including $\delta<1$ and $1-\sqrt{1-\delta}\le\tau$. Thus [F2] supplies valid certificate data uniformly for the whole family. [F1, F2, F4, algebra]

2.1 Apply [F3] to each $A$. The theorem gives $|\lambda_k(A)-\theta_{(k)}|\le\eta$ for every increasing index $k$, with the same validated $\eta$ for all members. This is exactly containment in the returned intervals. [F2, F3, step 1.1] ∎

