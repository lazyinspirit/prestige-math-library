---
id: cex-ip-real-failed-complement-partition
kind: counterexample
title: A two-vector real family with a failed partition and an ambiguous pair
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-real-frame-phase-retrieval
  - lem-ip-real-phase-retrieval-quotient-metric
  - def-ip-frame-complement-property
  - def-linear-combination-and-span
  - def-linear-subspace
  - def-euclidean-inner-product
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), the partition construction in the converse proof of Theorem 2.8"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015), Theorem 3.2 proof"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

In $\mathbb R^2$ with $u\cdot v=u_0v_0+u_1v_1$, take the real measurement family $\Phi=(a_1,a_2)$ with $a_1=(1,0)$ and $a_2=(0,1)$, and define its intensity data by $I_\Phi(x)=((a_1\cdot x)^2,(a_2\cdot x)^2)$. The partition $S=\{1\}$ has neither side spanning $\mathbb R^2$. The signals $x=(1,1)$ and $z=(-1,1)$ satisfy neither $z=x$ nor $z=-x$, but $I_\Phi(x)=I_\Phi(z)$.

## Statement references

[[def-ip-real-frame-phase-retrieval|Real intensity data and global-sign classes]]

[[def-ip-frame-complement-property|Complement property]]

[[lem-ip-real-phase-retrieval-quotient-metric|Sign classes and well-defined intensity data]]

[Radu Balan, Pete Casazza, and Dan Edidin, converse partition construction, Theorem 2.8 proof](https://arxiv.org/pdf/math/0412411)

[Radu Balan, partition construction, Theorem 3.2 proof](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)

## Facts & Assumptions

**Given:** $\mathbb R^2$ with the standard dot product, the family $a_1=(1,0)$ and $a_2=(0,1)$, and the global-sign quotient used for real phase retrieval.

[F1] [[def-ip-real-frame-phase-retrieval]]: intensity coordinates are $\langle a_i,x\rangle^2$, and the target identifies $x$ with $-x$.

[F2] [[def-ip-frame-complement-property]]: the complement property requires one side of every label partition to span the full ambient space.

[F3] [[lem-ip-real-phase-retrieval-quotient-metric]]: two real signal classes agree exactly when their representatives are equal or negatives.

[F4] [[def-linear-combination-and-span]], [[def-linear-subspace]]: each span is the smallest linear subspace containing its measurement vectors; in particular, coordinate axes are subspaces and spans are closed under scalar multiplication.

## Counterexample



1.1 Let $E_1=\{(t,0):t\in\mathbb R\}$ and $E_2=\{(0,t):t\in\mathbb R\}$; coordinatewise addition and scalar multiplication show these are subspaces. Since $a_1\in E_1$, minimality of the span gives $\operatorname{span}\{a_1\}\subseteq E_1$, while every $(t,0)=t a_1$ belongs to the span because it is a subspace containing $a_1$. Thus $\operatorname{span}(\Phi_{\{1\}})=E_1$. The same two inclusions for $a_2$ give $\operatorname{span}(\Phi_{\{2\}})=E_2$. Both are proper subspaces of $\mathbb R^2$, so [F2] says the complement property fails. [given, F2, F4, algebra]

1.2 The vectors $(1,1)$ and $(-1,1)$ are neither equal nor negatives: equality fails in the first coordinate, while equality with the negative fails in the second coordinate. Thus they define distinct signal classes by [F3]. [given, F3, algebra]

2.1 Their measurements are $((1,1)\cdot a_1,(1,1)\cdot a_2)=(1,1)$ and $((-1,1)\cdot a_1,(-1,1)\cdot a_2)=(-1,1)$. Squaring coordinatewise gives $(1,1)$ in both cases, so [F1] gives equal intensity data on the distinct classes from step 1.2. Together with the failed partition in step 1.1, this exhibits the required ambiguity when the complement property fails. [step 1.1, step 1.2, F1, algebra] ∎
