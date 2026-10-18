---
id: lem-pe05-discrete-weak-identity-with-source
kind: lemma
title: Exact space-time weak identity for the hydrostatic update
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe05-shallow-water-balance-law, def-pe05-hydrostatic-hll-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Full 143-page course-note PDF inspected; Chapter 3, §§3.4.1 and 3.4.3, PDF pp. 94–99, on cell-average updates and shared-flux cancellation."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "Complete six-page lecture; pp. 1–2, cell-average states, signed face fluxes and the finite-volume update."
---

## Statement

Let $d,\tau>0$, $I_i=[id,(i+1)d)$, $t_n=n\tau$, and $J_n=[t_n,t_{n+1})$. Suppose vector states and shared face fluxes satisfy
$$d(U_i^{n+1}-U_i^n)+\tau(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)=d\tau S_i^n$$
as in [[def-pe05-hydrostatic-hll-scheme]]. For $\varphi\in C_c^\infty(\mathbb R\times(-\infty,T);\mathbb R^2)$ define the space-time cell average
$$\Phi_i^n=\frac1{d\tau}\int_{J_n}\int_{I_i}\varphi(x,t)\,dx\,dt.$$
Choose $N$ such that $\varphi$ vanishes for $t\ge t_{N-1}$. Then
$$\sum_i d\,U_i^0\cdot\Phi_i^0+\sum_{n=1}^{N-1}\sum_i d\,U_i^n\cdot(\Phi_i^n-\Phi_i^{n-1})+\sum_{n=0}^{N-1}\sum_i\tau\,\widehat F_{i+1/2}^n\cdot(\Phi_{i+1}^n-\Phi_i^n)+\sum_{n=0}^{N-1}\sum_i d\tau\,S_i^n\cdot\Phi_i^n=0.$$
Every sum is finite because the test is compactly supported.

## Facts & Assumptions

**Given:** The vector finite-volume recurrence with shared face fluxes and cell source, the half-open space-time grid, and the cell-average test values above.

[F1] [[def-pe05-hydrostatic-hll-scheme]]: the update is equivalent to $d(U_i^{n+1}-U_i^n)+\tau(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)=d\tau S_i^n$ with one shared HLL flux at every face.

## Proof

1.1 Multiply the recurrence in [F1] by $\Phi_i^n$ using the Euclidean dot product and sum over cells $i$ and time levels $0\le n<N$. Compact support leaves only finitely many nonzero terms, and the resulting exact sum is zero. [F1, given]

2.1 For each cell, summing in time and using $\Phi_i^{N-1}=0$ gives $\sum_{n=0}^{N-1}(U_i^{n+1}-U_i^n)\cdot\Phi_i^n=-U_i^0\cdot\Phi_i^0+\sum_{n=1}^{N-1}U_i^n\cdot(\Phi_i^{n-1}-\Phi_i^n)$. This is finite summation by parts; no limit or infinite rearrangement is used. [step 1.1, algebra]

3.1 Reindexing the spatial face sum gives $\sum_i(\widehat F_{i+1/2}^n-\widehat F_{i-1/2}^n)\cdot\Phi_i^n=\sum_i\widehat F_{i+1/2}^n\cdot(\Phi_i^n-\Phi_{i+1}^n)$. Insert this and step 2.1 into step 1.1, retain the source sum with its minus sign from [F1], and multiply the zero identity by $-1$. The displayed identity follows. [F1, step 1.1, step 2.1, algebra] ∎
