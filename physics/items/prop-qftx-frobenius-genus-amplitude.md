---
id: prop-qftx-frobenius-genus-amplitude
kind: proposition
title: "Handle operators give explicit genus amplitudes"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps: [def-qftx-frobenius-semisimple-model]
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-frobenius-semisimple-model: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The classification input inherits AC_omega only through its boundary-relative surface normal-form supplier; the finite diagonal calculation uses no choice."
proof_strategy: direct
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories (short version)"
      url: "https://ncatlab.org/nlab/files/Kock-FrobAlgTQFT-short.pdf"
      locator: "§§1.3.5–1.3.20 and 3.1.12–3.1.13 (PDF pp. 14–20, 34–36), for the genus normal form and its handle operator."
    - title: "Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories (Cambridge book excerpt)"
      url: "https://assets.cambridge.org/97805218/32670/excerpt/9780521832670_excerpt.pdf"
      locator: "Excerpt pp. 1–7, for the closed category and the Frobenius sewing correspondence; the explicit weight sum is calculated locally."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–3.7 and 4 (PDF pp. 18–42), especially the closed-sector classification and its boundary convention."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

For the semisimple closed model defined by the stated idempotent data, let $H=\mu\circ\Delta$ and let $g\ge0$ be an integer. The connected closed genus-$g$ amplitude is $Z_A(\Sigma_g)=\sum_{i=1}^{r}w_i^{1-g}$. The cylinder acts by $1_A$, and the torus amplitude is $r$.

## Statement references

[[def-qftx-frobenius-semisimple-model]]

## Facts & Assumptions

**Given:** The algebra $A=\bigoplus_{i=1}^{r}\mathbb C e_i$, $e_ie_j=\delta_{ij}e_i$, $\eta(1)=\sum_i e_i$, $\epsilon(e_i)=w_i\ne0$, $\Delta(e_i)=w_i^{-1}e_i\otimes e_i$, and $H=\mu\circ\Delta$ from [[def-qftx-frobenius-semisimple-model]].

[F1] [[def-qftx-frobenius-semisimple-model]]: the idempotents form a basis, $H=\mu\Delta$, and the classification assigns $Z_A(\Sigma_g)=\epsilon(H^g(\eta(1)))$ to a connected closed genus-$g$ surface.

[F2] [[def-qftx-frobenius-semisimple-model]]: the cylinder convention is $1_A$, and $H^0=1_A$.

## Proof

1.1 For every $i$, $H(e_i)=\mu(w_i^{-1}e_i\otimes e_i)=w_i^{-1}e_i$ because $e_i^2=e_i$. [given, F1, algebra]

2.1 Since $\eta(1)=\sum_i e_i$, repeated application of the diagonal action in step 1.1 gives $H^g(\eta(1))=\sum_i w_i^{-g}e_i$ for each integer $g\ge0$; at $g=0$ this is the identity convention in [F2]. [given, F1, F2, step 1.1, algebra]

3.1 Apply $\epsilon$ and use $\epsilon(e_i)=w_i$ to obtain $Z_A(\Sigma_g)=\epsilon(H^g(\eta(1)))=\sum_i w_i^{1-g}$. The cylinder is $1_A$ by [F2], and for $g=1$ every summand is $1$, so the torus amplitude is $r$. [given, F1, F2, step 2.1, algebra] ∎

## Sewing diagram

The arrows are the unit map, the $g$-fold handle operator, and the counit. Their composite is the scalar assigned to the closed surface; the diagram is a type-checked summary of the formula, not a proof premise.

```tikzcd
\mathbb C \arrow[r,"\eta"] & A \arrow[r,"H^g"] & A \arrow[r,"\epsilon"] & \mathbb C
```
