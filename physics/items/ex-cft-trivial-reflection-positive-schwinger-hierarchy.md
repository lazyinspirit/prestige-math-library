---
id: ex-cft-trivial-reflection-positive-schwinger-hierarchy
kind: example
title: Trivial reflection-positive Schwinger hierarchy
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-schwinger-hierarchy
  - def-cft-2d-reflection-positive-euclidean-data
dependency_roles:
  def-cft-2d-schwinger-hierarchy: mathematical-premise
  def-cft-2d-reflection-positive-euclidean-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, arXiv:1203.3991v2
      url: https://arxiv.org/pdf/1203.3991
      locator: Section 3, PDF pp. 9–10; reflection positivity is one independent OS condition and does not by itself imply reconstruction.
    - title: Pavel Mnev, Lecture Notes on Conformal Field Theory, Fall 2022
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_2022_notes.pdf
      locator: Sections 1.1.1–1.1.3, PDF pp. 5–10; functorial CFT axioms and sewing remain distinct from the OS hierarchy.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing-examples
reference: items/ex-cft-trivial-reflection-positive-schwinger-hierarchy.md
---

## Example

For each $n\geq1$, let $S_n$ be the zero functional on $\mathcal S((\mathbb R^2)^n)$, and set $S_0=1$. This is a degenerate but reflection-positive Euclidean Schwinger hierarchy in the two-dimensional conventions of this page.

## Example references

[[def-cft-2d-schwinger-hierarchy]]

[[def-cft-2d-reflection-positive-euclidean-data]]

## Facts & Assumptions

**Given:** Use the definitions of a Euclidean Schwinger hierarchy and its reflection-positive test algebra from this pair.

[F1] A Schwinger hierarchy fixes $S_0=1$ and continuous tempered functionals $S_n$ on $((\mathbb R^2)^n)$ ([[def-cft-2d-schwinger-hierarchy]]).

[F2] Euclidean covariance and block symmetry mean $S_n(T_{g,n}f)=S_n(f)$ and $S_n(T_{\pi,n}f)=S_n(f)$ ([[def-cft-2d-schwinger-hierarchy]]).

[F3] The reflection-positive quadratic form is $Q_S(F)=\sum_{j,k}\overline{a_j}a_kS_{j+k}(\Theta f_j\otimes f_k)$ ([[def-cft-2d-reflection-positive-euclidean-data]]).

[A1] The example chooses $S_n=0$ for every $n\geq1$ and $S_0=1$.

## Verification

1.1 The zero functional is complex-linear and continuous on every Schwartz space. Its pullback by every Euclidean isometry or block permutation is still zero, so the normalization in [F1] and covariance and symmetry equalities in [F2] hold; the chosen degree-zero value is the required normalization. [given, A1, F1, F2, algebra]

2.1 In [F3], every summand with $j+k\geq1$ vanishes by [A1]. The only possible surviving term is $j=k=0$, and it equals $|a_0|^2|f_0|^2 S_0=|a_0f_0|^2$. Hence $Q_S(F)=|a_0f_0|^2\geq0$ is real for every finite family, proving reflection positivity. [given, A1, F3, step 1.1, algebra]

3.1 Let $\eta(s)=\exp(-1/(1-s^2))$ for $|s|<1$ and $\eta(s)=0$ for $|s|\geq1$, and choose $f_1(t,x)=\eta(t-2)\eta(x)$, which is a nonzero smooth compactly supported test function in $O_+$; set $a_1=1$ and $a_0=0$, with every other coefficient zero. Then the polynomial is nonzero while step 2.1 gives $Q_S(F)=0$, so the positive form is degenerate. The example asserts neither a nontrivial field nor OS reconstruction. [given, A1, step 2.1, construct] ∎
