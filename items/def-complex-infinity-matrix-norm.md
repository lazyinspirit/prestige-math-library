---
id: def-complex-infinity-matrix-norm
kind: definition
title: The complex induced infinity matrix norm
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-matrix-product-and-identity-matrix]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§4.2 and 10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

For $A=(a_{ij})\in\mathbb C^{m\times n}$ with $m,n\ge1$, define
$$
\|A\|_{\infty,\mathbb C}:=\max_{1\le i\le m}\sum_{j=1}^n |a_{ij}|.
$$
For a vector $x\in\mathbb C^n$, define $\|x\|_\infty:=\max_j|x_j|$. The absolute value is the complex modulus $|u+iv|=\sqrt{u^2+v^2}$. The subscript on the matrix norm emphasizes that entries and vectors are complex; this definition is not an appeal to the real-only induced matrix p-norm convention. For square matrices the identity has norm $1$.
