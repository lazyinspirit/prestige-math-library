---
id: cex-a-compact-operator-can-have-nondense-range
kind: counterexample
title: A compact operator can have nondense range
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-square-summable-family-on-an-arbitrary-index-set, def-bounded-linear-operator, def-operator-norm, def-compact-linear-operator, lem-finite-rank-operators-are-compact, cor-finite-dimensional-subspaces-are-closed, def-linear-subspace, def-linear-basis, thm-metric-closure-characterisation, def-metric-ball, def-metric-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1, finite-rank examples of compact operators"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.184, Example 4.23"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

The false general statement is: every compact operator has dense range. In fact
on the Hilbert space $\ell^2(\mathbb N,\mathbb K)$, $\mathbb K=\mathbb R$ or
$\mathbb C$ ([[def-square-summable-family-on-an-arbitrary-index-set]]), the
operator

$$P(x):=x_1e_1\qquad(x=(x_n)_{n\in\mathbb N})$$

is a nonzero compact operator ([[def-compact-linear-operator]]) whose range is
the closed one-dimensional subspace $\operatorname{span}\{e_1\}$, a proper
subspace; hence the range is not dense.

## Facts & Assumptions

[A1] In $\ell^2(\mathbb N,\mathbb K)$ one has $\|a\|_2^2=\sum_{n\in\mathbb N}|a_n|^2$ and $\langle a,b\rangle=\sum_{n\in\mathbb N}a_n\overline{b_n}$; the standard vectors satisfy $\langle e_i,e_j\rangle=\delta_{ij}$; and $\|a+b\|_2^2=\|a\|_2^2+2\operatorname{Re}\langle a,b\rangle+\|b\|_2^2$ for the inner-product norm ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] A bounded operator with finite-dimensional range is compact ([[lem-finite-rank-operators-are-compact]], [[def-compact-linear-operator]]); a finite-dimensional linear subspace of a normed space is closed ([[cor-finite-dimensional-subspaces-are-closed]], [[def-linear-basis]], [[def-linear-subspace]]).

[A3] For nonempty $A$ in a metric space, the closure is $\overline A=\{y:d(y,A)=0\}$ ([[thm-metric-closure-characterisation]], [[def-metric-ball]]); $\|Px\|_2\le\|P\|\,\|x\|_2$ for bounded $P$ ([[def-bounded-linear-operator]], [[def-operator-norm]]).

## Counterexample

**Proof technique:** direct.

**Given:** $\mathbb K\in\{\mathbb R,\mathbb C\}$ and the operator $P(x)=x_1e_1$ on $H:=\ell^2(\mathbb N,\mathbb K)$.

1.1 $P$ is well defined and linear with $\|Px\|_2=|x_1|\le\|x\|_2$, because $|x_1|^2\le\sum_n|x_n|^2$; hence $P$ is a bounded operator with $\|P\|\le1$. [A1, A3]

1.2 $P$ is nonzero: $P(e_1)=e_1\ne0$, and $\|e_1\|_2=1$. [A1]

2.1 The range of $P$ is $\operatorname{span}\{e_1\}$: every $Px=x_1e_1$ lies in it, and conversely $ce_1=P(ce_1)$; this span is one dimensional, hence finite dimensional, and closed by [A2]. [step 1.1, A2]

3.1 $P$ is compact by [A2], since it is bounded with finite-dimensional range. [step 1.1, step 2.1, A2]

3.2 The range is not dense: for every scalar $c\in\mathbb K$ one has $\|e_2-ce_1\|_2^2=\|e_2\|_2^2+|c|^2\|e_1\|_2^2=1+|c|^2\ge1$ by the orthogonality $\langle e_1,e_2\rangle=0$, so $\operatorname{dist}(e_2,\operatorname{span}\{e_1\})\ge1$ and $e_2\notin\overline{\operatorname{span}\{e_1\}}$ by [A3]; since the range is closed by [step 2.1], it is therefore a proper closed subspace. [step 2.1, A1, A3]

4.1 So $P$ is a nonzero compact operator with nondense range, which refutes the general statement; the claims are [step 3.1], [step 1.2] and [step 3.2]. [step 3.1, step 1.2, step 3.2] ∎
