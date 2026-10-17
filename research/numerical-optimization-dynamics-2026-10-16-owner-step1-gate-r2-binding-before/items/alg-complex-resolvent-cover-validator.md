---
id: alg-complex-resolvent-cover-validator
kind: algorithm
title: Finite complex contour resolvent validator with cover and inconclusive statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-complex-resolvent-cover-certificate-soundness, lem-complex-infinity-neumann-inverse-norm-bound, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-complex-infinity-matrix-norm, lem-complex-infinity-matrix-norm-submultiplicative]
justified_by: [thm-complex-resolvent-cover-validator-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Input $n\ge1$ and a nonempty finite union of complex line segments $\Gamma$, with each segment assigned to a proposed disk $D_j=B(z_j,r_j)$; a nonempty matrix family $\mathcal A\subseteq\mathbb C^{n\times n}$ enclosed by complex rectangles; a point center matrix $A_0\in\mathbb C^{n\times n}$; and proposed point preconditioners $R_j\in\mathbb C^{n\times n}$. All centers, radii and point matrices are exact dyadics.

1. For each assigned segment verify that both endpoints lie in its disk by exact rational comparison of squared distances with $r_j^2$. Evaluate outward bounds
$$e_j\ge\|I-R_j(z_jI-A_0)\|_{\infty,\mathbb C},\quad \delta_A\ge\sup_{A\in\mathcal A}\|A-A_0\|_{\infty,\mathbb C},\quad s_j\ge\|R_j\|_{\infty,\mathbb C}$$
using the complex rectangle operations and row sums of outward modulus bounds. If any check or operation cannot be completed, return `inconclusive`.

2. Outward-compute $q_j=e_j+s_j(r_j+\delta_A)$. Require $q_j<1$ for every disk and compute an outward upper bound $m\ge\max_j s_j/(1-q_j)$. If a strict inequality or division cannot be certified, return `inconclusive`; otherwise return `certified-resolvent-cover` with the disk assignments and $m$.

The validated endpoint cover covers each whole segment because disks are convex. Success certifies a resolvent bound on this supplied contour cover, but this procedure does not count enclosed eigenvalues or validate contour topology.
