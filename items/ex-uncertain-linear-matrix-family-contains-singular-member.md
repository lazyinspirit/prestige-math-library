---
id: ex-uncertain-linear-matrix-family-contains-singular-member
kind: example
title: An interval matrix family can contain a singular member
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-uniform-linear-residual-solution-enclosure, thm-interval-determinant-sign-certificate-soundness]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "§§5.1–5.5 and10.5: interval families and verified linear systems. The singular family member is exhibited locally; no unique-solution enclosure is inferred for a family containing it."
---

## Example

The real family
$$
\mathcal A=\left\{A(t)=\begin{pmatrix}1&t\\t&1\end{pmatrix}:-1\le t\le1\right\}
$$
is represented by the entrywise interval box with off-diagonal entries $[-1,1]$. It contains a singular matrix, and its natural Leibniz interval evaluation $[0,2]$ does not certify uniform nonsingularity.

## Facts & Assumptions

**Given:** The interval family $\mathcal A$ displayed above.

[F1] A determinant interval excluding zero is sufficient for nonsingularity; an interval containing zero without being exactly $\{0\}$ yields no such assertion ([[thm-interval-determinant-sign-certificate-soundness]]).

[F2] A usable uniform residual certificate with defect $q<1$ would make every family member invertible ([[thm-uniform-linear-residual-solution-enclosure]]).

## Verification

1.1 For each $t\in[-1,1]$, $\det A(t)=1-t^2\in[0,1]$. The direct interval product $[-1,1]\cdot[-1,1]=[-1,1]$ encloses $t^2$, so the Leibniz interval expression $1-[-1,1]=[0,2]$ contains every determinant. At $t=1$, $A(1)(1,-1)^{\mathsf T}=0$ with a nonzero vector, so $A(1)$ is singular. The interval $[0,2]$ includes zero and is not $\{0\}$; [F1] therefore makes no uniform nonsingularity claim from this enclosure. [given, F1, algebra]

2.1 If uniform residual data with $q<1$ existed for this whole family and any nonempty right-hand-side set, [F2] would make $A(1)$ invertible. This contradicts the nonzero null vector just exhibited. Hence such a usable uniform residual certificate cannot hold for the family. [given, F2, step 1.1, contradiction] ∎

