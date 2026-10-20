---
id: lem-fourth-moment-quadratic-form-resolvent-bound
kind: lemma
title: "Fourth-moment bound for a centered quadratic form of an independent vector"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3, §3.3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Chapter 2, §2.1"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Let $\xi=(\xi_1,\ldots,\xi_d)^{\mathsf T}$ have independent identically distributed real coordinates with $\mathbb E\xi_i=0$, $\mathbb E\xi_i^2=1$, and $\mu_4:=\mathbb E\xi_i^4<\infty$. Let $A$ be an independent random complex symmetric $d\times d$ matrix with $\mathbb E\|A\|_F^2<\infty$, where $\|A\|_F^2:=\sum_{i,j}|A_{ij}|^2$. Then
$$\mathbb E\left|\xi^{\mathsf T}A\xi-\operatorname{tr}A\right|^2\le C_{\mu_4}\,\mathbb E\|A\|_F^2,\qquad C_{\mu_4}:=\max\{\mu_4-1,2\}.$$

## Statement references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 57–58 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Chapter 2, §2.1.3, printed pp. 35–37 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** The independent coordinates $\xi_1,\ldots,\xi_d$ and independent random symmetric matrix $A$ in the Statement.

[F1] The coordinates of an IID family are mutually independent and have one common distribution ([[def-identically-distributed-and-iid-random-variables]]).

[F2] Independent random elements have the product joint law ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] Fubini's theorem permits integration in either order for an integrable function on a sigma-finite product measure ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Given:** The moment hypotheses, independence, and the finite Frobenius-norm second moment in the Statement.

1.1 First fix a deterministic complex symmetric matrix $A$. Since $A_{ji}=A_{ij}$, $$\xi^{\mathsf T}A\xi-\operatorname{tr}A =\sum_i A_{ii}(\xi_i^2-1)+2\sum_{i<j}A_{ij}\xi_i\xi_j.$$ The diagonal summands have mean zero. Distinct diagonal summands are uncorrelated; a diagonal summand and an off-diagonal summand are uncorrelated because at least one independent centered coordinate occurs to the first power; and two off-diagonal summands are uncorrelated unless their unordered index pairs coincide. Therefore $$\mathbb E\left|\xi^{\mathsf T}A\xi-\operatorname{tr}A\right|^2 =(\mu_4-1)\sum_i|A_{ii}|^2+4\sum_{i<j}|A_{ij}|^2 \le C_{\mu_4}\sum_{i,j}|A_{ij}|^2.$$ Here $\mu_4\ge1$ follows from $\mathbb E\xi_i^2=1$ and Cauchy–Schwarz. [given, F1, algebra]

2.1 By [F2], the joint law of $(\xi,A)$ is the product of its marginal laws. The integrand is integrable: $|\xi^{\mathsf T}A\xi-\operatorname{tr}A|^2\le2\|A\|_F^2\|\xi\|_2^4+2d\|A\|_F^2$, and $\mathbb E\|\xi\|_2^4<\infty$ because $d$ is finite and $\mathbb E\xi_i^4<\infty$. Thus [F3] permits integration of the deterministic inequality in step 1.1 against the law of $A$, giving the asserted bound. [given, F2, F3, step 1.1, algebra] ∎ 