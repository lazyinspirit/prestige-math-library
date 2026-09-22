---
id: cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections
kind: counterexample
title: Continuous calculus does not contain discontinuous spectral projections
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, def-axiom-of-choice, ex-functional-calculus-for-a-multiplication-operator, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-orthogonal-projection]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, §4, pp.10–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

Assume AC. For the self-adjoint operator $T=M_t$ of multiplication by the coordinate on $L^2(0,1)$, every orthogonal projection commuting with $T$ is of the form $f(T)$ for some continuous $f$ on $[0,1]$.

## Facts & Assumptions

[A1] For $T=M_t$ on $L^2(0,1)$ one has $\sigma(T)=[0,1]$ and $f(T)=M_f$ for every continuous $f$ on $[0,1]$, where $M_f$ is multiplication by $f$ ([[ex-functional-calculus-for-a-multiplication-operator]]).

[A2] $L^2(0,1)$ is a Hilbert space of a.e. classes with $\langle f,g\rangle=\int_0^1f\overline g$; multiplication by a bounded function is a bounded operator on it ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[A3] For a measurable set $A$, pointwise multiplication gives
$M_{\mathbf 1_A}^2=M_{\mathbf 1_A}$ and
$\langle M_{\mathbf 1_A}u,v\rangle=\langle u,M_{\mathbf 1_A}v\rangle$; its
range is the closed subspace of classes supported in $A$, so it is the Hilbert
orthogonal projection onto that subspace
([[def-hilbert-orthogonal-projection]]).

[A4] AC is the hypothesis of the calculus supplier ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

**Given:** $H=L^2(0,1)$, $T=M_t$ and the multiplication operator $P:=M_{\mathbf 1_{(0,1/2)}}$ where $\mathbf 1_{(0,1/2)}$ is the indicator of the interval $(0,1/2)$.

1.1 $P$ is an orthogonal projection commuting with $T$: pointwise multiplication by an indicator is idempotent and self-adjoint, and multiplication operators commute, so $PT=TP$. [A2, A3]

2.1 If $P=f(T)$ for a continuous $f\in C([0,1])$, then $M_f=P=M_{\mathbf 1_{(0,1/2)}}$ by the multiplication form of the calculus, so the two bounded functions agree as elements of $L^2(0,1)$, that is $f=\mathbf 1_{(0,1/2)}$ almost everywhere. [step 1.1, A1]

3.1 A continuous function agreeing almost everywhere with an indicator of a proper subinterval is impossible: $f=1$ a.e. on $(0,1/2)$ and $f=0$ a.e. on $(1/2,1)$, so continuity at $1/2$ would give $f(1/2)=\lim_{t\to1/2^-}f(t)=1$ and simultaneously $f(1/2)=\lim_{t\to1/2^+}f(t)=0$; the two limits are computed along intervals where the continuous function is a.e. constant, hence constant there. [step 2.1, A2, algebra]

4.1 Hence no continuous $f$ satisfies $P=f(T)$, so the commuting projection $P$ demonstrates that the continuous calculus does not contain every spectral projection of $T$. [step 1.1, step 3.1, A4] ∎
