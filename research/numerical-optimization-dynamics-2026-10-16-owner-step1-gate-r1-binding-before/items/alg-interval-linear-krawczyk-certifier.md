---
id: alg-interval-linear-krawczyk-certifier
kind: algorithm
title: Interval Krawczyk linear system certifier with explicit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-krawczyk-set-inclusion-existence-and-uniqueness, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-complex-infinity-matrix-norm, lem-complex-infinity-matrix-norm-submultiplicative]
justified_by: [thm-interval-linear-krawczyk-certifier-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§1 and 5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Input $n\ge1$, a nonempty family of square matrices $\mathcal A$ and right-hand sides $\mathcal b$ enclosed by finite complex rectangles, a closed complex rectangle box $X\subset\mathbb C^n$, a point $x_0\in X$, and dyadic point matrices $R,S\in\mathbb C^{n\times n}$ with exact identities $RS=SR=I$. The witness $S$ establishes that $R$ is nonsingular. No independence assumption on the actual family is required beyond its inclusion in the input boxes.

1. Outward-evaluate, over the full family boxes and $x\in X$, the Krawczyk expression
$$
K=x_0-R(Ax_0-b)+(I-RA)(X-x_0).
$$
If any interval operation is not finite and defined, return `inconclusive`.

2. Compare the resulting enclosing rectangle box with $X$ by exact endpoint comparisons. If it is not contained in $X$, return `inconclusive`. Otherwise outward-bound the maximum row sum of $|I-RA|$ uniformly over the family by a number $q$. Return `existence-certified`; attach `unique-certified` for each fixed pair if $q<1$, and otherwise attach `uniqueness-inconclusive`.

The enclosure in step 1 may be wider than the exact set of Krawczyk values; only successful inclusion produces a claim. A failed inclusion or a failed norm bound does not imply singularity.
