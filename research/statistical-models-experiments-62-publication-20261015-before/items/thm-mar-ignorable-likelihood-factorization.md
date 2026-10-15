---
id: thm-mar-ignorable-likelihood-factorization
kind: theorem
title: "MAR factorization and likelihood ignorability for the full-data parameter"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-mcar-mar-and-mnar
  - def-parametric-statistical-model
  - def-law-or-distribution-of-a-random-element
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-monotone-convergence-for-the-integral
  - thm-integration-against-a-radon-nikodym-derivative
  - def-likelihood-density
  - def-axiom-of-choice
  - lem-observed-data-likelihood-under-response-model
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §1.4"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 60–61"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
---

## Statement

Assume AC and the hypotheses and notation of
[[lem-observed-data-likelihood-under-response-model]]. Suppose the full-data
parameter and response-mechanism parameter range independently over the
nonempty Cartesian product $\Theta\times\Psi$, so the full-data law is
$P_\theta$ and the response kernel is $g_\psi$. For each pattern let $m_r$
denote the pattern reference selected in the lemma: $m_r=\kappa_r$ in
general, and one may take $m_r=\nu_r^{\mathrm{obs}}$ in the product-reference
special case. Let $Q_{\theta,r}$ be the law of $W_{\mathrm{obs}}(r)$ under
$P_\theta$, and choose a finite-valued nonnegative density representative
$q_{\theta,r}=dQ_{\theta,r}/dm_r$. Suppose MAR holds for every $\psi$ and $r$
with one measurable factor $h_{\psi,r}$ valid $P_\theta$-almost surely for
every $\theta$. Clipping this factor to $[0,1]$ preserves those
almost-sure identities, so take $0\le h_{\psi,r}(x)\le1$ for every $x$. Then
$$\ell_{\theta,\psi}(r,x)=h_{\psi,r}(x)q_{\theta,r}(x)$$
is a selected observed-record likelihood version relative to the disjoint
union reference $\lambda_O(A)=\sum_rm_r(\{x:(r,x)\in A\})$. In the
product-reference special case, the missing-coordinate integrals
$$\bar q_{\theta,r}(x)=\int p_\theta(x,z)\,\nu_r^{\mathrm{mis}}(dz),\qquad \ell_{\theta,\psi}(r,x)=\int p_\theta(x,z)g_\psi(r\mid x,z)\,\nu_r^{\mathrm{mis}}(dz)$$
are density versions, and may be chosen in the displayed factorized form
after selecting finite-valued representatives.

For a fixed response parameter, if $h_{\psi,r}(x)>0$ and
$q_{\theta_2,r}(x)>0$, the factor cancels from the likelihood ratio in
$\theta$. Profiling over the same set $\Psi$ for each $\theta$ multiplies
$q_{\theta,r}(x)$ by the factor
$\sup_{\psi\in\Psi}h_{\psi,r}(x)$, which is independent of $\theta$; when
this factor is zero the observed record has zero likelihood for every
$\theta$. This licenses omission of the response factor for likelihood
inference about $\theta$ on its support. It does not license omission when the
target depends on $\psi$, or when the allowed parameter pairs are not a
Cartesian product.

## Facts & Assumptions

**Given:** AC; the full-data and response model, nonempty Cartesian parameter
space, pattern reference measures, and MAR hypothesis in the Statement.

[F1] [[lem-observed-data-likelihood-under-response-model]]: the full-data
marginal pushforward and each observed pattern sublaw have selected densities
relative to the same patternwise reference measures; in the
product-reference special case these densities have the missing-coordinate
integral versions.

[F2] [[def-mcar-mar-and-mnar]]: MAR means that each pattern probability
factors through that pattern's observed projection; for a family of full-data
laws the same response mechanism and observed-coordinate function are used
across the family.

[F3] [[def-parametric-statistical-model]]: a parameterized model is a map from
parameter labels to sampling laws.

[F4] [[def-law-or-distribution-of-a-random-element]]: the law under a
measurable projection is its pushforward measure; the identity for
nonnegative measurable integrands follows from its indicator-set definition
by simple approximation and monotone convergence.

[F5] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]]:
a nonnegative measurable function is the increasing pointwise limit of
nonnegative simple functions.

[F6] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative
measurable functions have integrals increasing to the integral of their
pointwise limit.

[F7] [[thm-integration-against-a-radon-nikodym-derivative]]: integration of a
simple function against a measure with density $q$ agrees with integration of
that function times $q$ against the reference measure; [F5] and [F6] extend
this to nonnegative measurable integrands.

[F8] [[def-likelihood-density]]: under AC a likelihood density uses a selected
finite-valued measurable nonnegative representative of its density class.

[A1] [[def-axiom-of-choice]]: AC supplies a choice function for a family of
nonempty sets.

## Proof

**Proof technique:** Factor the response probability through the observed
projection and use the parameter product.

1.1 For each MAR factor in the Statement, replace any measurable almost-sure version $h_{\psi,r}$ by $h^*_{\psi,r}=\min(1,\max(0,h_{\psi,r}))$. Since every kernel evaluation $g_\psi(r\mid w)$ lies in $[0,1]$ and equals $h_{\psi,r}(\pi_r(w))$ $P_\theta$-almost surely for every $\theta$, clipping leaves each of those identities true and makes $h^*_{\psi,r}$ pointwise $[0,1]$-valued. [F2, given, algebra]

2.1 For a measurable observed-coordinate set $B$, put $u=\mathbf1_Bh^*_{\psi,r}$. By [F4], the integral of any nonnegative simple function of $\pi_r(W)$ under $P_\theta$ equals its integral under the pushforward law $Q_{\theta,r}$; [F5] supplies increasing simple approximations to $u$, and [F6] passes to their limit. Since $Q_{\theta,r}$ has density $q_{\theta,r}$ with respect to $m_r$, [F7] gives the same integral as $\int_Bh^*_{\psi,r}(x)q_{\theta,r}(x)\,dm_r(x)$, again by simple approximation and monotone convergence. MAR therefore yields $P_{\theta,\psi}(R=r,\pi_r(W)\in B) =\int_Bh^*_{\psi,r}(x)q_{\theta,r}(x)\,dm_r(x)$. Thus $h^*_{\psi,r}q_{\theta,r}$ is a selected density version for the observed pattern section; in the product-reference case this agrees as a density class with the coordinate integral in the Statement. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given]

3.1 Because $q_{\theta,r}(x)\ge0$ and the same nonempty parameter set $\Psi$ is allowed for every $\theta$, the profile satisfies $\sup_{\psi\in\Psi}\ell_{\theta,\psi}(r,x) =q_{\theta,r}(x)\sup_{\psi\in\Psi}h^*_{\psi,r}(x)$. The multiplier is finite and common to every $\theta$, and if it is zero the record has zero likelihood for all $\theta$. For fixed $\psi$, whenever $h^*_{\psi,r}(x)>0$ and $q_{\theta_2,r}(x)>0$, the ratio at $\theta_1$ and $\theta_2$ is $q_{\theta_1,r}(x)/q_{\theta_2,r}(x)$. A target depending on $\psi$ can still depend on the response factor, and a non-Cartesian allowed parameter set need not permit common profiling. [step 2.1, given, algebra] ∎

## Remarks

The density-class identities are for each fixed parameter pair. As in
[[def-likelihood-density]], no common exceptional null set across an
uncountable parameter family is asserted; the displayed pointwise likelihood
claims use the selected versions stated above.
