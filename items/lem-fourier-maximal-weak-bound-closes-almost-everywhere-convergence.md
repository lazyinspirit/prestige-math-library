---
id: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence
kind: lemma
title: A weak maximal bound implies almost-everywhere Fourier convergence
deps: [def-carleson-maximal-partial-sum-operator, thm-fejer-convergence-in-lp, thm-chebyshev-markov-inequality-for-the-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'Theorem 6.4 and Remark 6.5, p. 37 (specialized to Fourier sums and p=q)'}]
status: draft
origin: pipeline
proof_strategy: Take the explicit polynomial approximants Q_j=sigma_j f, which tend to f in Lp. Orthogonality of finite characters gives S_N Q_j=Q_j for large N. Thus limsup_N |S_N f-f| <= C(f-Q_j)+|f-Q_j|. Bound the measure where this exceeds 2 lambda by (A+1)lambda^(-p)||f-Q_j||_p^p, let j grow, then take lambda=1/m. Include measurability of the limsup and countable null union inline.
---

## Statement

Assume countable choice and fix $1\le p<\infty$. On the period-one torus with normalized Haar measure, suppose a finite constant $A\ge0$ satisfies

$$m\{Cg>\lambda\}\le A\lambda^{-p}\|g\|_p^p\qquad(g\in L^p(\mathbb T),\ \lambda>0).$$

Then for every $f\in L^p(\mathbb T)$, $S_Nf(x)\to f(x)$ almost everywhere. The conclusion holds for any measurable representative of $f$.

## Facts & Assumptions

**Given:** Countable choice, $1\le p<\infty$, a finite weak-bound constant $A\ge0$ as in the statement, and $f\in L^p(\mathbb T)$.

[F1] For $g\in L^1(\mathbb T)$, $Cg=\sup_{N\ge0}|S_Ng|$ is a measurable extended nonnegative function, defined from the continuous finite Fourier sums and independent of the representative ([[def-carleson-maximal-partial-sum-operator]]).

[F2] Assuming countable choice, for each one-periodic complex $f\in L^p([0,1])$, $1\le p<\infty$, the Fejer means satisfy $\|\sigma_jf-f\|_p\to0$ ([[thm-fejer-convergence-in-lp]]).

[F3] For a measurable nonnegative extended function $h$ and $t>0$, $m\{h\ge t\}\le t^{-1}\int h\,dm$ ([[thm-chebyshev-markov-inequality-for-the-integral]]).

## Proof

**Proof technique:** polynomial approximation and level-set estimates.

1.1 Use a finite-valued measurable representative of $f$, changing it on a null set if needed. It is integrable since $|f|\le1+|f|^p$ and the torus has mass one. Set $Q_j=\sigma_jf=(j+1)^{-1}\sum_{r=0}^jS_rf$. These are explicit polynomials and $\|f-Q_j\|_p\to0$. Integrating $e^{2\pi i(k-\ell)x}$ over $[0,1]$ gives one for $k=\ell$ and zero otherwise, so $S_NQ_j=Q_j$ whenever $N\ge j$, including constants and the zero polynomial. [F1, F2, given]

2.1 The extended function $H(x)=\limsup_{N\to\infty}|S_Nf(x)-f(x)|$ is measurable: a limsup is a countable infimum of countable suprema of measurable functions. For each $j$ and $N\ge j$, linearity and the triangle inequality give $|S_Nf-f|\le|S_N(f-Q_j)|+|f-Q_j|$. Hence $H\le C(f-Q_j)+|f-Q_j|$. [F1, step 1.1]

3.1 For every $\lambda>0$, the set $\{H>2\lambda\}$ is contained in $\{C(f-Q_j)>\lambda\}\cup\{|f-Q_j|>\lambda\}$. Apply the assumed weak estimate to the first set and the integral inequality to $h=|f-Q_j|^p$, $t=\lambda^p$, for the second. The latter strict superlevel set is contained in $\{h\ge\lambda^p\}$. Subadditivity yields $m\{H>2\lambda\}\le(A+1)\lambda^{-p}\|f-Q_j\|_p^p$. [F3, step 2.1, given]

4.1 Let $j\to\infty$ with $\lambda$ fixed. The right side tends to zero, so $m\{H>2\lambda\}=0$. Because $H\ge0$, $\{H>0\}=\bigcup_{r=1}^\infty\{H>2/r\}$ has measure at most the sum of these zero measures, hence zero. Outside it the nonnegative errors have limsup zero and therefore tend to zero. Changing the representative alters the conclusion on only a null set. This proves convergence almost everywhere, including $p=1$ whenever its hypothesized weak estimate holds. [step 1.1, step 3.1, algebra] ∎
