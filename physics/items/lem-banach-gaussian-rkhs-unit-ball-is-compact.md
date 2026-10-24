---
id: lem-banach-gaussian-rkhs-unit-ball-is-compact
kind: lemma
title: "The Cameron–Martin unit ball is compact in the Banach norm"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-cameron-martin-translation-for-separable-banach-gaussian-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - thm-every-borel-probability-on-a-polish-space-is-tight
  - cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - thm-ultrafilter-lemma
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-relative-hahn-banach-dual-norming
  - thm-hahn-banach-dominated-extension
  - def-hahn-banach-extension-principle-relative
  - cor-cauchy-schwarz-for-random-variables
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC supplies HB for continuous-dual separation, the ultrafilter lemma, and DC/countable choice through the listed implication theorems; these discharge the weak sequential compactness and Hilbert reflexivity assumptions. Tightness uses the stated Borel probability supplier on Polish spaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Theorem 3.1.9 and complete proof, source PDF pp. 38–39."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Section 4.2: compactness of the Cameron–Martin unit ball."
---

## Statement

Assume AC. Let $\mu$ be a centered tight Borel Gaussian law on a real separable Banach
space $B$, and let $H\subset B$ be its covariance RKHS. The closed Hilbert
unit ball
$$H_1=\{h\in H:\|h\|_H\le1\}$$
is compact in the Banach norm.

## Facts & Assumptions

[A1] AC is inherited from the Gaussian translation and tightness suppliers. Under AC, the ultrafilter lemma follows from [[thm-ultrafilter-lemma]], and DC and countable choice follow from [[thm-choice-implies-dependent-implies-countable-choice]].

[A2] Under AC, the real dominated-extension theorem supplies the Hahn–Banach principle HB used by the dual-norming interface ([[thm-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F1] For $h\in H$, the translated law has density
$D_h=\exp(z_h-\|h\|_H^2/2)$, where $z_h$ is centered normal of variance
$\|h\|_H^2$ ([[thm-cameron-martin-translation-for-separable-banach-gaussian-law]],
[[def-standard-normal-and-normal-laws]]).

[F2] A Borel probability on the separable Banach space is tight
([[thm-every-borel-probability-on-a-polish-space-is-tight]],
[[thm-prokhorov-tightness-theorem-on-polish-spaces]]).

[F3] Under the ultrafilter lemma, DC and HB, a Banach space is reflexive exactly when every bounded sequence has a weakly convergent subsequence; under countable choice, a Hilbert space is reflexive ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[thm-hilbert-spaces-are-reflexive-by-riesz-representation]]). The needed choice hypotheses follow from [A1] and [A2].

[F4] The canonical embedding satisfies
$\ell(ih)=\langle h,[\ell]\rangle_H$, and continuous linear functionals
separate points ([[def-banach-gaussian-covariance-operator-and-rkhs]],
[[cor-relative-hahn-banach-dual-norming]]).


[F5] Cauchy–Schwarz applies to the square-integrable density and event indicator ([[cor-cauchy-schwarz-for-random-variables]]).

## Proof


**Given:** AC and a centered tight Borel Gaussian law $\mu$ on $B$, its covariance RKHS $H$, and $H_1$.

1.1 If $h\in H_1$, write $v=\|h\|_H^2\le1$. If $v=0$, then $z_h=0$ almost surely and $D_h=1$. If $v>0$, completing the square in the normal density of $z_h$ gives $E e^{2z_h}=e^{2v}$. In both cases [F1] yields $\int D_h^2\,d\mu=e^v\le e$. Choose compact $K\subset B$ with $\mu(K^c)<1/(16e)$ using [F2]. Cauchy–Schwarz [F5] then gives $\mu_h(K^c)=\int_{K^c}D_h\,d\mu<1/4$, uniformly for all $h\in H_1$, while $\mu(K)>3/4$. Hence $\mu(K\cap(K-h))\ge\mu(K)+\mu_h(K)-1>0$. For each $h\in H_1$ there is $x\in K$ with $x+h\in K$, so $h\in K-K$. The difference $K-K$ is compact; therefore $H_1$ is relatively compact in $B$. [A1, F1, F2, F5, given, algebra]

2.1 Let $(h_n)$ be any sequence in $H_1$. By [F3], pass to a subsequence weakly converging in $H$ to some $h\in H_1$. Relative compactness from step 1.1 gives a further subsequence with $ih_n\to y$ in $B$. For every $\ell\in B^*$, [F4] gives $\ell(y)=\lim_n\langle h_n,[\ell]\rangle_H=\langle h,[\ell]\rangle_H =\ell(ih)$. By [F4], $y=ih$. Thus every sequence in $H_1$ has a norm-convergent subsequence whose limit lies in $H_1$; in the metric space $B$, this is compactness. [A1, A2, F3, F4, step 1.1, algebra] ∎

