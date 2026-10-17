---
id: def-verified-linear-residual-certificate-data
kind: definition
title: Verified point and uniform linear residual certificate data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-operator-norm-on-a-finite-dimensional-inner-product-space]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Let $n\ge1$, let $\mathcal A$ be a nonempty set of matrices in $\mathbb C^{n\times n}$, and let $\mathcal b$ be a nonempty subset of $\mathbb C^n$. A **uniform residual certificate** consists of a point matrix $R\in\mathbb C^{n\times n}$, a point vector $\widehat x\in\mathbb C^n$, and numbers $q,r\ge0$ such that
$$
\|I-RA\|_2\le q,\qquad \|R(b-A\widehat x)\|_2\le r
$$
for every $A\in\mathcal A$ and $b\in\mathcal b$. Here $\|\cdot\|_2$ is the operator norm induced by the Euclidean vector norm, as in [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]. The certificate is **usable** when $q<1$; in that case its reported error radius is $r/(1-q)$. The point-data case is $\mathcal A=\{A\}$ and $\mathcal b=\{b\}$.

This definition specifies mathematical upper bounds; it does not specify how a computation establishes them.
