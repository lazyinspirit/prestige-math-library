---
id: def-trace-class-operator
kind: definition
title: Trace class operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, def-series-and-absolute-convergence-in-a-normed-space, def-compact-linear-operator, def-operator-norm, def-metric-convergence, def-infimum, def-dimension, def-hilbert-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, trace class operators (printed pp. 93–96)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]) and let
$T\in\mathcal B(H,K)$ be a compact operator ([[def-compact-linear-operator]])
with zero-padded singular-value sequence $(s_n(T))_{n\ge1}$
([[def-absolute-value-and-singular-values-of-a-compact-operator]]).

**Trace class.** The operator $T$ is **trace class** when
$$\sum_{n\ge1}s_n(T)<+\infty ,$$
the series being the limit of the partial sums of the numerical sequence
([[def-series-and-absolute-convergence-in-a-normed-space]]). In that case its
**trace norm** is
$$\|T\|_1:=\sum_{n\ge1}s_n(T)\in[0,+\infty),$$
and $\|T\|_1$ is also written $\|T\|_{\mathrm{tr}}$. The set of trace-class
operators $H\to K$ is written $\mathcal S_1(H,K)$.

**Immediate consequences.** Since $0\le s_n(T)\le s_1(T)=\|T\|$
([[def-absolute-value-and-singular-values-of-a-compact-operator]]), the terms
are nonnegative and $\|T\|_1\ge\|T\|\ge0$ whenever $T$ is trace class; the zero
operator is trace class with $\|0\|_1=0$. When $T$ has finite rank $r$ the
sequence is zero-padded, the series is the finite sum
$\sum_{n\le r}s_n(T)=\sum_{\lambda>0}\lambda\dim E_\lambda(|T|)$ over the finitely
many positive eigenvalues of $|T|$ counted with multiplicity ([[def-dimension]]),
and every finite-rank operator is therefore trace class; in particular every
operator with finite-dimensional range and every rank-one operator is trace
class. If $T$ has infinite rank then $s_n(T)>0$ for every $n$ and the series
$\sum_n s_n(T)$ converges in the summable case. A trace-class operator with infinite rank has $s_n(T)\to0$, hence
is a norm limit of finite-rank operators
([[thm-singular-value-decomposition-for-compact-operators]]).

**Choice accounting.** Trace class is defined through the singular values of
[[def-absolute-value-and-singular-values-of-a-compact-operator]], whose
construction uses $\mathrm{AC}_\omega$ through the countable selection of finite
orthonormal bases of the eigenspaces of $|T|$ and the spectral theorem; no
Hilbert basis of the ambient space, and no stronger choice, is used here.

