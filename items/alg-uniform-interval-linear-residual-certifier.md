---
id: alg-uniform-interval-linear-residual-certifier
kind: algorithm
title: Uniform interval linear residual certificate with inconclusive status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-verified-linear-residual-certificate-data, thm-uniform-linear-residual-solution-enclosure, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
justified_by: [thm-uniform-interval-linear-residual-certifier-soundness]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5 and 10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§1 and 5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Input $n\ge1$, nonempty families $\mathcal A\subseteq\mathbb C^{n\times n}$ and $\mathcal b\subseteq\mathbb C^n$, each enclosed entrywise by finite complex rectangles, together with stored point proposals $R$ and $\widehat x$. The represented family need only be a subset of the supplied product of rectangles; correlations between entries may be discarded. All stored point data are exact dyadics.

1. Use outward rectangle operations to evaluate the expression DAGs
$$
E(A)=I-RA,\qquad c(A,b)=R(b-A\widehat x)
$$
over the full input rectangles. If an operation has no finite enclosure or returns a domain or range status, return `inconclusive`.

2. For each complex rectangle entry $X+iY$, outward-enclose its modulus by computing $\sqrt{X^2+Y^2}$ and taking the upper endpoint. Combine those bounds by outward sums of squares and square roots to obtain $q\ge\sup_{A\in\mathcal A}\|E(A)\|_F$ and $r\ge\sup_{A\in\mathcal A,b\in\mathcal b}\|c(A,b)\|_2$. If any modulus, sum, square root or final division has no finite outward result, return `inconclusive`. The Frobenius upper bound also bounds the operator 2-norm. If $q\ge1$, return `inconclusive` with $q,r$. Otherwise return `certified` with the uniform residual data $(R,\widehat x,q,r)$ and radius $r/(1-q)$, rounded outward if represented as a ball.

The interval DAG encloses every value for every admitted pair, including dependencies between repeated inputs because natural interval evaluation may enlarge the range. `inconclusive` makes no assertion that a member is singular.
