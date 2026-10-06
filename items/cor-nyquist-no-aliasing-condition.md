---
id: cor-nyquist-no-aliasing-condition
kind: corollary
title: "The Nyquist no-aliasing condition"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
design_row: FR-19
deps: [lem-sampling-produces-periodisation-in-frequency, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-l-p-space-as-a-quotient-by-null-functions, thm-shannon-sampling-for-bandlimited-ltwo-functions, def-measure-null-set-and-almost-everywhere, def-countable-choice, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-plancherel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, Theorem 22.3 and Remark 22.4(1): centered-band sampling at spacing proportional to reciprocal bandwidth, printed p. 131; the measurable translate-disjointness assertion is proved locally"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§1, Exercise 2 and §2, Exercise 7(1)-(2): the dual lattice and its periodic exponential characters, PDF pp. 1-2; the no-overlap conclusion is proved locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).
Let $h>0$ and let $E\subseteq\mathbb R$ be Lebesgue measurable which, up to a
Lebesgue null set, is contained in an interval of length $1/h$ (for instance
$\lambda_1\bigl(E\setminus[-1/(2h),1/(2h)]\bigr)=0$). Then the reciprocal
translates $E+m/h$ ($m\in\mathbb Z$) are pairwise disjoint up to null sets:
$\lambda_1\bigl((E+m/h)\cap(E+n/h)\bigr)=0$ for $m\ne n$. Consequently, if $f\in L^2(\mathbb R)$ has Plancherel transform
$\widehat f$ vanishing almost everywhere off $E$, then for almost every $\xi$
at most one term of $Q(\xi):=\sum_{m\in\mathbb Z}\widehat f(\xi-m/h)$ is nonzero,
and $Q(\xi)=\widehat f(\xi)$ for almost every $\xi\in E$. These assertions are
independent of the measurable representative of $\widehat f$.
For Schwartz $f$, [[lem-sampling-produces-periodisation-in-frequency]]
identifies $h^{-1}Q$ with the Fourier transform of the sampled distribution;
the corollary does not extend that lemma's distributional identity to arbitrary
$L^2$ inputs. If $E$ is essentially contained in the centered band
$[-1/(2h),1/(2h)]$, [[thm-shannon-sampling-for-bandlimited-ltwo-functions]]
also gives the stated reconstruction. A general translated interval of length
$1/h$ has the same no-overlap property, but is not itself that centered-band
hypothesis.

## Facts & Assumptions

**Given:** Countable Choice, $h>0$, a Lebesgue measurable $E\subseteq\mathbb R$ with $E\subseteq I\cup N$ for an interval $I$ of length $1/h$ and a null set $N$, and an $L^2$ class $f$ whose Plancherel transform $\widehat f$ vanishes almost everywhere off $E$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-measure-null-set-and-almost-everywhere]]).

[F1] Translation invariance: $\lambda_1(F+t)=\lambda_1(F)$ for every Lebesgue measurable $F$ and $t\in\mathbb R$, and measurability is preserved by translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F2] Sampling periodisation: for Schwartz $f$ and $\Lambda=h\mathbb Z$, $\mathcal F(\sum_{k}f(hk)\delta_{hk})=h^{-1}\sum_{m\in\mathbb Z}\widehat f(\cdot-m/h)$, the periodisation of the spectrum over the dual lattice $h^{-1}\mathbb Z$ ([[lem-sampling-produces-periodisation-in-frequency]]).

[F3] Shannon sampling holds for $L^2$ functions whose transform vanishes almost everywhere off the band $[-1/(2h),1/(2h)]$, with the convergence modes stated there ([[thm-shannon-sampling-for-bandlimited-ltwo-functions]]).

[F4] A countable union of measurable null sets is null, by the countable-subadditivity inequality of [[thm-finite-and-countable-subadditivity-of-measures]]. Singletons have measure zero by the degenerate-box case of [[thm-lebesgue-measure-of-a-box-of-every-kind]].

## Proof

**Proof technique:** direct.

1.1 Let $m\ne n$ be integers. Then $(E+m/h)\cap(E+n/h)$ is contained in $((I+m/h)\cap(I+n/h))\cup(N+m/h)\cup(N+n/h)$. The interval translates have length $1/h$ and their positions differ by $|m-n|/h\ge1/h$, so their intersection contains at most one point. This intersection and both translates of $N$ are null by [F1] and [F4]; hence the measurable intersection of the translates of $E$ is null. [F1, F4, given, algebra]

2.1 Fix a measurable representative $g$ of $\widehat f$ and a null set $Z$ outside which $g$ vanishes off $E$. The set $T:=\bigcup_{m\ne n}((E+m/h)\cap(E+n/h))\cup\bigcup_m(Z+m/h)$ is null by step 1.1, [F1] and [F4]; both unions are countable. For $\xi\notin T$, at most one index $m$ satisfies $\xi-m/h\in E$, and all other terms $g(\xi-m/h)$ vanish. For $\xi\in E\setminus T$, the only possible index is $m=0$, giving $Q(\xi)=g(\xi)$. Changing $g$ on a null set affects the translated terms only on its countable union of reciprocal translates, again null by [F1] and [F4], so the conclusions are representative-independent. [step 1.1, F1, F4, given, algebra]

3.1 Thus $h^{-1}Q=h^{-1}\widehat f$ almost everywhere on $E$, with no contribution from a nonzero reciprocal shift. For Schwartz inputs, [F2] identifies $h^{-1}Q$ as the transform of the sampled distribution. For a centered containing band, [F3] gives Shannon reconstruction; its cutoff is $1/(2h)$ and its total band length is $1/h$. The closed band's endpoints can differ by $1/h$, so the disjointness assertion remains an almost-everywhere assertion. Countable Choice is inherited from the stated measure and Fourier suppliers. [step 1.1, step 2.1, F2, F3, given] ∎
