---
id: prop-fibonacci-fusion-ring-unit-is-not-tensor-invertible
kind: proposition
title: "The Fibonacci ring class is a unit but its simple object is not tensor-invertible"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-categorical-object-and-operator-invertibility, def-fusion-rules, ex-qc-tqc-fibonacci-data]
justified_by: []
proof_strategy: direct
axiom_use: None; finite semisimple objects are finite direct sums of simple objects.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.5–3.6, PDF pp. 13–18: fusion rings and Fibonacci fusion rules."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF p. 35, equation (3.71): Fibonacci fusion rule."
verification:
  precheck: pass
---

## Statement

In the coherent Fibonacci category [[ex-qc-tqc-fibonacci-data]], with simple objects $\mathbf1,\tau$ and $\tau\otimes\tau\cong\mathbf1\oplus\tau$, the fusion-ring class $[\tau]$ is a unit but the object $\tau$ is not tensor-invertible in the sense of [[def-categorical-object-and-operator-invertibility]].

## Facts & Assumptions

**Given:** The complex finite semisimple Fibonacci category and its simple fusion rule.

[F1] [[ex-qc-tqc-fibonacci-data]]: the simple labels are $\mathbf1,\tau$ and $\tau\otimes\tau=\mathbf1\oplus\tau$.

[F2] [[def-fusion-rules]]: simple-object multiplicities are nonnegative integers and form the basis coefficients in $K_0(\mathcal C)$.

[F3] [[def-categorical-object-and-operator-invertibility]]: tensor-invertibility requires an object right inverse; an object has a finite semisimple decomposition with nonnegative multiplicities.

## Proof

**Given:** The Fibonacci fusion rule and the definitions in [F2]–[F3].

1.1 In $K_0(\mathcal C)$, [F1] gives $[\tau]^2=[\mathbf1]+[\tau]$. Hence $[\tau]([\tau]-[\mathbf1])=[\mathbf1]$ and $([\tau]-[\mathbf1])[\tau]=[\mathbf1]$ by the same polynomial calculation. Thus $[\tau]$ is a fusion-ring unit, with inverse the virtual class $[\tau]-[\mathbf1]$. [F1, F2, algebra]

2.1 If an object $Y$ were a right tensor inverse, [F3] would give $[Y]=m[\mathbf1]+n[\tau]$ for some integers $m,n\ge0$. Then $[\tau][Y]=n[\mathbf1]+(m+n)[\tau]$. Equality with $[\mathbf1]$ would force $n=1$ and $m+n=0$, impossible for $m,n\ge0$. Therefore $\tau$ has no right tensor inverse and cannot be tensor-invertible. [F1, F2, F3, step 1.1, algebra] ∎
