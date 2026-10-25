---
id: rem-aliasing-above-the-nyquist-rate
kind: remark
title: "Aliasing when spectral support has positive-measure overlap with a reciprocal translate"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
design_row: FR-19
deps: [lem-sampling-produces-periodisation-in-frequency, thm-shannon-sampling-for-bandlimited-ltwo-functions, def-countable-choice, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-plancherel, thm-l-two-fourier-inversion, thm-l-one-l-two-agreement-of-fourier-transform, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, cor-c-one-change-of-variables-for-l-one-functions, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 22, Remark 22.4(1)-(2): the sampling rate is proportional to bandwidth and the sinc kernel vanishes at the other samples, printed p. 131; the overlap witness is constructed locally"
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§3, Exercise 13: continuous rapidly decaying functions have the lattice Poisson expansion, PDF p. 4; the disconnected-support distinction and the overlap witness are local"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Remark

Assume Countable Choice ([[def-countable-choice]]). Let $h>0$ and let
$E\subseteq\mathbb R$ be Lebesgue measurable. Positive-measure overlap
$E\cap(E+m/h)$ for some $m\in\mathbb Z\setminus\{0\}$ gives a nonzero $L^2$
signal supported spectrally in $E$ whose samples on $h\mathbb Z$ all vanish.
This is the failure mechanism behind reciprocal-lattice periodisation in
[[lem-sampling-produces-periodisation-in-frequency]].

To see this, partition $\mathbb R$ into half-open intervals of length
$|m|/(2h)$. Since the overlap has positive measure, countable subadditivity
([[thm-finite-and-countable-subadditivity-of-measures]]) gives one interval
$J$ for which $D:=J\cap E\cap(E+m/h)$ has positive measure. It has finite
measure by the box formula ([[thm-lebesgue-measure-of-a-box-of-every-kind]]),
and $D$ and $D-m/h$ are disjoint because $J$ is shorter than $|m|/h$.
Therefore $g:=\mathbf 1_D-\mathbf 1_{D-m/h}$ is a nonzero $L^1\cap L^2$
function vanishing off $E$. Its inverse Plancherel transform $f$ is nonzero
([[thm-plancherel]]) and has the continuous representative
$f(x)=\int g(\xi)e^{2\pi ix\xi}d\xi$
([[thm-l-two-fourier-inversion]], [[thm-l-one-l-two-agreement-of-fourier-transform]],
[[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).
Translation substitution ([[cor-c-one-change-of-variables-for-l-one-functions]])
and the exponential addition and kernel laws
([[thm-complex-exponential-addition-and-real-extension]],
[[thm-kernel-and-fibres-of-complex-exponential]]) give
$f(hk)=(1-e^{-2\pi imk})\int_D e^{2\pi ihk\xi}d\xi=0$ for every integer $k$.
Thus $f$ and the zero signal have identical samples. No extension of the
Schwartz-only distributional sampling formula is needed for this witness.

In the classical interval-band case, an interval of length greater than $1/h$
has positive-measure overlap with its shift by $1/h$. This corresponds to
bandwidth beyond the cutoff $1/(2h)$ at fixed sampling spacing, rather than
a sampling rate above the Nyquist requirement. Being too wide to fit in an
interval of length $1/h$ is insufficient by itself for disconnected $E$:
when $h=1$, the set $E=(0,1/10)\cup(11/10,6/5)$ does not fit essentially in
such an interval, but its fractional parts lie in the disjoint intervals
$(0,1/10)$ and $(1/10,1/5)$. Within each interval the fractional-part map is
injective, so no distinct points of $E$ differ by an integer. Its integer
translates are therefore pairwise disjoint. The centered-band reconstruction
and its convergence modes remain those of
[[thm-shannon-sampling-for-bandlimited-ltwo-functions]].
