---
id: alg-interval-determinant-sign-certifier
kind: algorithm
title: Outward Leibniz determinant sign and nonsingularity certifier
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-interval-determinant-sign-certificate-soundness, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound]
justified_by: [thm-interval-determinant-sign-certifier-soundness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.10"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1 and 5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Input $n\ge1$ and a nonempty family of real $n\times n$ matrices contained in a box of real intervals. Evaluate the determinant's finite Leibniz expression
$$
\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^n a_{i,\sigma(i)}
$$
as an outward interval DAG, retaining every permutation term and reporting the final interval $D$. If any operation returns overflow or another non-finite status, return `inconclusive`.

If $0\notin D$, return `nonsingular` and the sign of $D$. If $D=\{0\}$, return `all-singular`. In every other case return `inconclusive`. This finite procedure has factorially many permutation terms; no efficiency or determinant sign is claimed when zero remains in the enclosure.
