---
id: alg-near-orthonormal-hermitian-eigenvalue-certifier
kind: algorithm
title: Certified Hermitian eigenvalue intervals from residual and Gram bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-hermitian-residual-orthogonality-certificate, thm-near-orthonormal-hermitian-eigenvalue-enclosure, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
justified_by: [thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1–5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input $n\ge1$, a nonempty family of Hermitian $n\times n$ matrices enclosed by complex rectangles, a point matrix $V\in\mathbb C^{n\times n}$, a real diagonal matrix $\Theta\in\mathbb R^{n\times n}$, and proposed nonnegative bounds $\delta,\rho,M_A,M_\Theta,\tau$. Treat point data as exact dyadics and the family as any subset of its enclosure.

1. With outward interval evaluation, enclose $V^*V-I$ and every $AV-V\Theta$ for the full family. Form Frobenius upper bounds $d,r$ for these two matrices. Also form Frobenius upper bounds $m_A$ for every $A$ in the family and $m_\Theta$ for $\Theta$. If any enclosure or square-root operation is non-finite, return `inconclusive`.

2. Verify by outward scalar comparisons that $d\le\delta<1$, $r\le\rho$, $m_A\le M_A$, $m_\Theta\le M_\Theta$, and that $1-\sqrt{1-\delta}\le\tau$. If any comparison is undecided or false, return `inconclusive` with the failed check. Otherwise set $\eta=\rho+(M_A+M_\Theta)\tau$ by outward arithmetic and return `certified` with the intervals $[\theta_{(k)}-\eta,\theta_{(k)}+\eta]$, sorted increasingly by the diagonal entries of $\Theta$.

The checks use the Frobenius norm as an upper bound for the operator 2-norm. An inconclusive check makes no statement about the true spectrum.
