---
id: alg-point-verified-linear-system-certifier
kind: algorithm
title: Finite precision point linear solve certificate with explicit status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-verified-linear-residual-certificate-data, thm-uniform-linear-residual-solution-enclosure, lem-rounded-linear-and-normal-residual-certificates, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
justified_by: [thm-point-verified-linear-system-certifier-soundness]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Definition

Input $n\ge1$, stored finite real or complex square data $A\in\mathbb C^{n\times n}$, $b\in\mathbb C^n$, a proposed computed inverse $R\in\mathbb C^{n\times n}$, and a proposed computed solution $\widehat x\in\mathbb C^n$. All stored entries are interpreted as exact dyadics. Use the operationwise arithmetic model with unit roundoff $u$; if $(n-1)u\ge1$, return `inconclusive` before applying the rounded-residual bounds. The procedure validates the proposals; it does not assume that the solver which produced them is stable.

1. Set $g_n=(1+6u)/(1-(n-1)u)-1$. Evaluate each column $a_j$ of $A$ through the operationwise model as $\widehat m_j=\operatorname{fl}(Ra_j)$. If any operation returns range-failure, return `range-failure` with its first operation index. Compute an outward upper bound $v_j$ for $g_n\|R\|_F\|a_j\|_2$, which by the rounded-linear-residual lemma bounds $\|\widehat m_j-Ra_j\|_2$. Every dot product used for these allowances must complete successfully under the no-underflow model. Outward-evaluate $I-[\widehat m_1\ \cdots\ \widehat m_n]$ and let $q$ be an outward upper bound for its Frobenius norm plus $\sqrt{\sum_jv_j^2}$.

2. Evaluate $\widehat v=\operatorname{fl}(A\widehat x)$ and $\widehat w=\operatorname{fl}(\widehat v-b)$. Compute an outward upper bound $W$ for $g_n\|A\|_F\|\widehat x\|_2+u(\|\widehat v\|_2+\|b\|_2)$, which bounds $\|\widehat w-(A\widehat x-b)\|_2$. Evaluate $\widehat c=\operatorname{fl}(R\widehat w)$ and compute an outward upper bound $v_c$ for $g_n\|R\|_F\|\widehat w\|_2$, which bounds $\|\widehat c-R\widehat w\|_2$. Let $r$ be an outward upper bound for
$$
\|\widehat c\|_2+\|R\|_F W+v_c.
$$
The Frobenius norm bounds $\|R\|_2$.

3. All norm bounds, square roots, and final scalar operations are evaluated outward. If a bound cannot be enclosed finitely, return `inconclusive`. If $q\ge1$, return `inconclusive` with the computed bounds. If $q<1$, outward-compute $s\ge r/(1-q)$ and return `certified` with the Euclidean ball $B(\widehat x,s)$.

The output `range-failure` describes failure of a requested floating operation. `inconclusive` means only that this validation did not prove a usable bound; it does not assert that $A$ is singular or that the proposed solution is inaccurate.
