---
id: lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
kind: lemma
title: "A sigma-finite positive measure has a nonnegative Radon–Nikodym density version"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measure
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-extended-real-valued-measurable-function
  - def-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-radon-nikodym-derivative
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.4 and proof, §13.2 (book pp. 100–103)"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8 (notes pp. 75–77)"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

## Statement

Assume AC. If $\mu$ and $\nu$ are sigma-finite positive measures on the same
measurable space and $\nu\ll\mu$, then the Radon–Nikodym class
$d\nu/d\mu$ has a finite-valued nonnegative measurable representative. Every
finite-valued representative of that class is nonnegative
$\mu$-almost everywhere.

## Facts & Assumptions

**Given:** AC, sigma-finite positive measures $\mu,\nu$ on $(X,\mathcal A)$,
and $\nu\ll\mu$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F1] [[def-finite-sigma-finite-and-semifinite-measures]]: sigma-finiteness gives a countable measurable cover by sets of finite measure.

[F2] [[def-total-variation-of-a-signed-or-complex-measure]]: total variation is the supremum of sums of absolute measure values over measurable partitions. For a positive measure, countable additivity makes every such sum equal to the measure of the partitioned set.

[F3] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] and [[def-radon-nikodym-derivative]]: under AC, absolute continuity and a common finite exhaustion give a nonempty almost-everywhere class of real-valued densities satisfying the setwise integral formula; its representatives are locally integrable on the exhaustion sets.

[F4] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: $\nu\ll\mu$ means every $\mu$-null measurable set is $\nu$-null.

[F5] [[def-extended-real-valued-measurable-function]] and [[def-sigma-algebra]]: if $f$ is measurable, $\{f\le c\}$ is measurable as the complement of $\{f>c\}$, and countable unions of measurable sets are measurable.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: on a finite-integral piece, a real integrable function has a defined signed integral; the nonnegative integral is monotone.

[F7] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: scalar multiples of measurable real functions and their positive parts, including $\max\{f,0\}$, are measurable.

## Proof

**Proof technique:** direct.

1.1 Choose increasing countable finite-measure covers $(A_i)$ for $\mu$ and $(B_j)$ for $\nu$, using [F1]. Set $X_n=\bigcup_{i,j\le n}(A_i\cap B_j)$. Then $X_n\uparrow X$ and both $\mu(X_n)$ and $\nu(X_n)$ are finite, since each finite union is contained in finite unions of sets from the corresponding cover. By [F2], $|\nu|(X_n)=\nu(X_n)<\infty$. Thus [F3] applies. Fix any finite-valued representative $f$ of the nonempty class; it satisfies $\nu(E)=\int_E f\,d\mu$ for every measurable $E$ and $\int_{X_n}|f|\,d\mu<\infty$. [A1, F1, F2, F3, given, choose]

2.1 For $n,m\ge1$, let $E_{n,m}=X_n\cap\{f\le-1/m\}$, which is measurable by [F5]. On $E_{n,m}$, $-f\ge1/m$; because $f$ is integrable on $X_n$, [F6] and [F7] give $\int_{E_{n,m}}f\,d\mu\le-\mu(E_{n,m})/m$. If $\mu(E_{n,m})>0$, the representation in step 1.1 would give $\nu(E_{n,m})<0$, contradicting positivity of $\nu$. Hence every $E_{n,m}$ is $\mu$-null. [F3, F5, F6, F7, step 1.1, given]

3.1 The countable union $N=\bigcup_{n,m\ge1}E_{n,m}$ is measurable and $\mu$-null by [F5]. Since the sets $X_n$ cover $X$, $N=\{f<0\}$. [F1, F5, step 2.1]

4.1 Define $\widetilde f=\max\{f,0\}$. By [F7], $\widetilde f$ is measurable; it is nonnegative, equals $f$ off $N$, and is zero on $N$. For every measurable $E$, absolute continuity gives $\nu(E)=\nu(E\setminus N)$ by [F4], while step 1.1 gives $\nu(E\setminus N)=\int_{E\setminus N}f\,d\mu=\int_E\widetilde f\,d\mu$. Thus $\widetilde f$ represents the Radon–Nikodym class. The argument also shows that any finite-valued representative is nonnegative outside a null set. [F3, F4, F7, step 1.1, step 3.1, given] ∎
