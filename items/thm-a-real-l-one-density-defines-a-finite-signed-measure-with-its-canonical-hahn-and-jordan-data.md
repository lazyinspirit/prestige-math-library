---
id: thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data
kind: theorem
title: "A real L^1 density defines a finite signed measure with its canonical Hahn and Jordan data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hahn-decomposition-for-signed-measures, thm-jordan-decomposition-for-signed-measures, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, def-integrable-real-and-complex-functions-and-their-integrals, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 12.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, Example 6.15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $f\in L^1(\mu)$ be
real-valued. Define
$$\nu(E):=\int_E f\,d\mu\qquad(E\in\mathcal A).$$
Then $\nu$ is a finite signed measure. Its canonical Hahn sets are
$$P:=\{f>0\},\qquad N:=\{f\le0\},$$
its Jordan parts are
$$\nu^+(E)=\int_E f^+\,d\mu,\qquad \nu^-(E)=\int_E f^-\,d\mu,$$
and its total variation is
$$|\nu|(E)=\int_E |f|\,d\mu.$$

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and a real-valued function $f\in L^1(\mu)$.

[L1] A complex $L^1$ density defines a complex measure whose total variation is the integral of its modulus. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[L2] For a real integrable function, the positive and negative parts satisfy $f=f^+-f^-$ and $|f|=f^++f^-$. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L3] Arithmetic and threshold operations preserve measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L4] Hahn and Jordan decompositions are unique. ([[thm-hahn-decomposition-for-signed-measures]], [[thm-jordan-decomposition-for-signed-measures]])

## Proof

**Proof technique:** direct.

1.1 Because $f$ is real-valued, every $\nu(E)=\int_E f\,d\mu$ is a real number. The complex-density theorem [L1] shows that the same set function is countably additive and satisfies $$|\nu|(E)=\int_E |f|\,d\mu.$$ Also $$|\nu(E)|\le |\nu|(E)\le \int |f|\,d\mu<+\infty,$$ so $\nu$ takes no infinite values. Hence $\nu$ is a finite signed measure. The finiteness of $|\nu|(X)$ follows from $f\in L^1(\mu)$. [L1]

2.1 By [L3], the sets $P=\{f>0\}$ and $N=\{f\le0\}$ are measurable and form a partition of $X$. If $E\subseteq P$ is measurable, then $f\ge0$ on $E$, so $\nu(E)=\int_E f\,d\mu\ge0$; if $E\subseteq N$, then $f\le0$ on $E$, so $\nu(E)\le0$. Thus $P$ is positive and $N$ is negative, so [L4] makes them canonical Hahn sets up to null sets. [L3, L4, step 1.1]

3.1 The formulas in [L2] give $$\nu(E)=\int_E f^+\,d\mu-\int_E f^-\,d\mu.$$ On subsets of $P$ one has $f^-=0$ and $f=f^+$, while on subsets of $N$ one has $f^+=0$ and $-f=f^-$. Therefore the positive measures $E\mapsto\int_E f^+\,d\mu$ and $E\mapsto\int_E f^-\,d\mu$ are mutually singular and decompose $\nu$. By uniqueness in [L4], they are exactly $\nu^+$ and $\nu^-$. The total-variation formula from step 1.1 and [L2] then becomes $|\nu|(E)=\int_E |f|\,d\mu$. [L2, L4, step 1.1, step 2.1]

4.1 Steps 1.1 through 3.1 prove the signed-measure, Hahn, Jordan, and total-variation claims. [step 1.1, step 2.1, step 3.1] ∎
