---
id: thm-mean-zero-square-integrable-space-is-hilbert
kind: theorem
title: The mean-zero L² space is a Hilbert space
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-mean-zero-square-integrable-space
  - def-countable-choice
  - def-hilbert-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: Edward H. Kennedy, Semiparametric theory, §4
      url: https://arxiv.org/pdf/1709.06418
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For any probability measure $P$, the space $L^2_0(P)$ of [[def-mean-zero-square-integrable-space]] is a closed real linear subspace of real $L^2(P)$ with pairing $\langle f,g\rangle_P:=\int fg\,dP$; consequently it is a real Hilbert space ([[def-hilbert-space]]). The only choice use is the Countable Choice assumption already required by the general $L^2(P)$ completeness supplier.

## Facts & Assumptions

**Given:** Countable Choice and a probability measure $P$ on $(\mathcal X,\mathcal A)$.

[A1] Countable Choice is the stated selection principle ([[def-countable-choice]]).

[F1] Under Countable Choice, real $L^2(P)$ with pairing $\langle f,g\rangle=\int fg\,dP$ is a complete real inner-product space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F2] Cauchy–Schwarz in an inner-product space gives $|\langle f,g\rangle|\le\|f\|\|g\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F3] $L^2_0(P)=\{f\in L^2(P):Pf=0\}$, with $Pf$ well-defined on equivalence classes ([[def-mean-zero-square-integrable-space]]).

## Proof

**Proof technique:** Identify the mean-zero space as the kernel of the continuous expectation functional.

1.1 The constant function $1$ belongs to $L^2(P)$ and has norm $1$, since $P(\mathcal X)=1$. For each $f\in L^2(P)$, the pairing in [F1] satisfies $Pf=\langle f,1\rangle_P$, so [F2] gives $|Pf|\le\|f\|_2$. Thus $f\mapsto Pf$ is a bounded linear functional, and its kernel is exactly $L^2_0(P)$ by [F3]. [F1, F2, F3, algebra]

2.1 The kernel is linear. If $f_n\in L^2_0(P)$ and $f_n\to f$ in $L^2(P)$, then $|Pf|=|P(f-f_n)|\le\|f-f_n\|_2\to0$ by step 1.1 and linearity of the pairing [F1], so $f\in L^2_0(P)$. Hence the kernel is closed. [step 1.1, F1, F3]

3.1 Every Cauchy sequence in $L^2_0(P)$ is Cauchy in $L^2(P)$, which is complete by [F1] under the Countable Choice assumption [A1]; its $L^2(P)$ limit lies in $L^2_0(P)$ by step 2.1. The restricted inner product is therefore complete, proving the asserted Hilbert-space property. [A1, F1, step 2.1] ∎
