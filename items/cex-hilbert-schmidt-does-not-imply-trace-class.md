---
id: cex-hilbert-schmidt-does-not-imply-trace-class
kind: counterexample
title: Hilbert Schmidt does not imply trace class
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-diagonal-schatten-class-criteria-on-ell-two, thm-p-series-rational, def-hilbert-schmidt-operator, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, def-square-summable-family-on-an-arbitrary-index-set, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Hilbert–Schmidt but not trace-class diagonal operators"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\ell^2:=\ell^2(\mathbb N,\mathbb F)$ with standard basis $(u_n)_{n\in\mathbb N}$
and define the diagonal operator
$$Tu_0:=0,\qquad Tu_n:=n^{-1}u_n\quad(n\ge1),$$
extended linearly and by continuity. Then $T$ is Hilbert–Schmidt relative to the
standard basis ([[def-hilbert-schmidt-operator]]) but not trace class
([[def-trace-class-operator]]); that is, the Hilbert–Schmidt property does not
imply the trace-class property.

## Facts & Assumptions

**Given:** Countable Choice, the space $\ell^2$ with its standard basis $(u_n)$, and the diagonal operator with $d_0=0$, $d_n=n^{-1}$ for $n\ge1$.

[A1] **Diagonal criteria.** For a diagonal operator with bounded sequence $d$: boundedness with $\|T\|=\sup_n|d_n|$, compactness in the case $d_n\to0$ and only there, the Hilbert–Schmidt criterion $\sum_n|d_n|^2<+\infty$ with $\|T\|_{HS}^2=\sum_n|d_n|^2$ relative to the standard basis, and the trace-class criterion $\sum_n|d_n|<+\infty$ with $\|T\|_1=\sum_n|d_n|$ ([[ex-diagonal-schatten-class-criteria-on-ell-two]], [[def-hilbert-schmidt-operator]], [[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **$p$-series.** For rational $p>1$ the series $\sum_{k\ge1}k^{-p}$ converges, and at $p=1$ the harmonic series diverges; in particular $\sum_{k\ge1}k^{-2}<+\infty$ and $\sum_{k\ge1}k^{-1}=+\infty$ ([[thm-p-series-rational]]).

[A3] Countable Choice is the standing hypothesis ([[def-countable-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** Countable Choice, the sequence $d_0=0$, $d_n=n^{-1}$, and the diagonal operator $T$.

1.1 **$T$ is Hilbert–Schmidt.** The sequence $(d_n)$ is bounded by $1$ and $\sum_{n\ge1}|d_n|^2=\sum_{n\ge1}n^{-2}<+\infty$ by [A2]; hence $T$ is Hilbert–Schmidt relative to the standard basis with $\|T\|_{HS}^2=\sum_{n\ge1}n^{-2}$ by the diagonal criterion [A1]. [A1, A2]

1.2 **$T$ is not trace class.** The positive singular values of the diagonal operator are $n^{-1}$, $n\ge1$, in nonincreasing order with multiplicity [A1]. Their series $\sum_{n\ge1}n^{-1}$ diverges by [A2], so the finiteness condition in the trace-class definition fails and $T$ is not trace class. No value of $\|T\|_1$ is assigned, because that norm is defined only for trace-class operators. [A1, A2]

2.1 **Conclusion.** $T$ is Hilbert–Schmidt by [step 1.1] and not trace class by [step 1.2]; hence the Hilbert–Schmidt property does not imply the trace-class property. [step 1.1, step 1.2, A3] ∎
