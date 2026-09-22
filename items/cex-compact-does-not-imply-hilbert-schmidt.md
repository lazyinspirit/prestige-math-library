---
id: cex-compact-does-not-imply-hilbert-schmidt
kind: counterexample
title: Compact does not imply Hilbert Schmidt
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-diagonal-schatten-class-criteria-on-ell-two, thm-p-series-rational, def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, def-compact-linear-operator, def-trace-class-operator, def-square-summable-family-on-an-arbitrary-index-set, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, compact but not Hilbert–Schmidt diagonal operators"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\ell^2:=\ell^2(\mathbb N,\mathbb F)$ with standard basis $(u_n)_{n\in\mathbb N}$
and define the diagonal operator
$$Tu_0:=0,\qquad Tu_n:=n^{-1/2}u_n\quad(n\ge1),$$
extended linearly and by continuity. Then $T$ is compact
([[def-compact-linear-operator]]) but not Hilbert–Schmidt relative to any
Hilbert basis ([[def-hilbert-schmidt-operator]]); that is, compactness does not
imply the Hilbert–Schmidt property.

## Facts & Assumptions

**Given:** Countable Choice, the space $\ell^2$ with its standard basis $(u_n)$, and the diagonal operator with $d_0=0$, $d_n=n^{-1/2}$ for $n\ge1$.

[A1] **Diagonal criteria.** For a diagonal operator with bounded sequence $d$, boundedness, compactness, the Hilbert–Schmidt criterion $\sum_n|d_n|^2<+\infty$ relative to the standard basis, and the trace-class criterion $\sum_n|d_n|<+\infty$ hold as in the diagonal example; the Hilbert–Schmidt property and norm are basis-independent, and the standard basis is orthonormal with $\|u_n\|_2=1$ ([[ex-diagonal-schatten-class-criteria-on-ell-two]], [[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-norm-is-basis-independent]], [[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] **Divergence and convergence of $p$-series.** For rational $p>1$ the series $\sum_{k\ge1}k^{-p}$ converges, while at $p=1$ the harmonic series $\sum_{k\ge1}1/k$ diverges; in particular $\sum_{n\ge1}n^{-1/2}$ is not summable because its terms dominate the harmonic terms for $n\ge1$ ([[thm-p-series-rational]]).

[A3] Countable Choice is the standing hypothesis ([[def-countable-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** Countable Choice, the sequence $d_0=0$, $d_n=n^{-1/2}$, and the diagonal operator $T$.

1.1 **$T$ is compact.** The sequence $(d_n)_{n\in\mathbb N}$ tends to $0$ (given rational $\varepsilon>0$, choose a natural $m>1/\varepsilon^2$; then $n^{-1/2}<\varepsilon$ for $n>m$), so by the diagonal compactness criterion [A1] the operator $T$ is compact. [A1, A2, algebra]

1.2 **$T$ is not Hilbert–Schmidt.** Relative to the standard basis, $\sum_n\|Tu_n\|_2^2=\sum_{n\ge1}n^{-1}=+\infty$ by the divergence of the harmonic series [A2], so $T$ is not Hilbert–Schmidt relative to the standard basis by the diagonal criterion [A1]; since the Hilbert–Schmidt property and its norm are independent of the chosen Hilbert basis [A1], $T$ is not Hilbert–Schmidt relative to any Hilbert basis. [A1, A2]

2.1 **Conclusion.** The operator $T$ is compact by [step 1.1] and fails to be Hilbert–Schmidt by [step 1.2]; hence compactness does not imply the Hilbert–Schmidt property. [step 1.1, step 1.2, A3] ∎
