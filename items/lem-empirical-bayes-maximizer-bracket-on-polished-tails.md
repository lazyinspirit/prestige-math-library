---
id: lem-empirical-bayes-maximizer-bracket-on-polished-tails
kind: lemma
title: "Marginal-likelihood maximizer bracket on polished tails"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-polished-tail-class-for-gaussian-sequence
  - lem-uniform-empirical-bayes-marginal-score-bound
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No additional choice principle is identified in the source bracket argument."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 5.1 and complete proof in §5 and Appendix A, printed pp. 22–26 and 35–39 (PDF pp. 23–27 and 36–40)."
    - title: "B. T. Knapik, B. Szabó, A. W. van der Vaart and J. H. van Zanten, Bayes procedures for adaptive inference in inverse problems for the white noise model, arXiv:1209.3628"
      url: "https://arxiv.org/pdf/1209.3628"
      locator: "§§5.2–5.4, printed pp. 18–24 (PDF pp. 18–24); score-process variance and increment bounds used in the marginal-likelihood maximizer analysis."
---

## Statement

Use the inverse Gaussian sequence procedure of
[[def-adaptive-empirical-bayes-gaussian-sequence-procedure]] with fixed
$p\ge0$, $C\ge1$, $A>0$, and $\kappa_i^2\in[C^{-2}i^{-2p},C^2i^{-2p}]$.
Fix $L_0\ge1$, $N_0\ge1$, and $\rho\ge2$. Let
$\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ with $\theta_{0,1}=0$.
For $n\ge3$ and $\alpha\in[0,A]$, put
$$N_{n,\alpha}=n^{1/(1+2\alpha+2p)},\qquad h_n(\alpha;\theta_0)= \frac{1+2\alpha+2p}{N_{n,\alpha}\log n} \sum_{i=1}^{\infty} \frac{n^2 i^{1+2\alpha}(\log i)\theta_{0,i}^2} {(i^{1+2\alpha+2p}+n)^2}.$$
Define
$$\underline\alpha_n= \inf\{\alpha\in[0,A]:h_n(\alpha;\theta_0)\ge(16C^8)^{-1}\}, \qquad \overline\alpha_n= \sup\{\alpha\in[0,A]:h_n(\alpha;\theta_0)\le8C^8\},$$
with the source conventions $\inf\varnothing=A$ and $\sup\varnothing=0$.
Then the source bracket result is
$$\inf_{\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho),\,\theta_{0,1}=0} P_{\theta_0}^{(n)} \bigl(\underline\alpha_n\le\widehat\alpha_n\le\overline\alpha_n\bigr) \longrightarrow1.$$
More generally, the same conclusion holds with $A=A_n$ whenever
$$0<A_n\le\frac{\sqrt{\log n}}{4\sqrt{\log(\rho\vee e)}}$$
for all sufficiently large $n$. Uniformly in the polished-tail class, for all sufficiently large $n$,
$$\frac{n^{-2\underline\alpha_n/(1+2\underline\alpha_n+2p)}}{n^{-2\overline\alpha_n/(1+2\overline\alpha_n+2p)}}\le\left[128C^{16}\{4+36L_0\rho^{1+2A_n}\}\right]^{1+2p}.$$
In particular, for fixed $A$ the two rates are uniformly comparable. The lower bracket alone is valid uniformly over arbitrary $\theta_0\in\ell^2$, using the same definition of $\underline\alpha_n$ and the same procedure/domain hypotheses:
$$\inf_{\theta_0\in\ell^2}P_{\theta_0}^{(n)}(\underline\alpha_n\le\widehat\alpha_n)\longrightarrow1.$$

## Facts & Assumptions

**Given:** The model, thresholds and hypotheses of the Statement.

[F1] The procedure supplies a measurable global maximizer and the specified endpoint likelihood. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]]

[F2] The continuous score, its expectation inequalities, uniform centered-score bounds and polished-tail kernel comparison hold as stated in [[lem-uniform-empirical-bayes-marginal-score-bound]].

## Proof

1.1 Set $u=(16C^8)^{-1}$ and $v=8C^8$. Continuity of $h_n$ implies $h_n\le u$ on $[0,\underline\alpha_n]$ whenever $\underline\alpha_n>0$, and $h_n\ge v$ on $[\overline\alpha_n,A]$ whenever $\overline\alpha_n<A$. These implications include the empty-set conventions. Moreover $\underline\alpha_n\le\overline\alpha_n$: otherwise any point strictly between them would have $h_n<u$ by the first-infimum definition and $h_n>v$ by the last-supremum definition, a contradiction. At a nontrivial threshold, continuity gives $h_n(\underline\alpha_n)\ge u$ if $\underline\alpha_n<A$ and $h_n(\overline\alpha_n)\le v$ if $\overline\alpha_n>0$. [F2, given, algebra]

2.1 Write $V_\alpha=N_{n,\alpha}\log N_{n,\alpha}$. The expectation bounds in F2 imply $E M_n/V_\alpha\ge1/(16C^4)$ when $h_n\le u$, and $E M_n/(V_\alpha h_n)\le-5/(8C^4)$ when $h_n\ge v$. Therefore $E M_n/[V_\alpha(1+h_n)]$ has a positive margin at least $1/(32C^4)$ on the lower interval and a negative margin of magnitude at least $1/(32C^4)$ on the upper interval. For a nonnegative variable $Y$, integrating $\varepsilon\mathbf1_{\{Y>\varepsilon\}}\le Y$ proves $P(Y>\varepsilon)\le EY/\varepsilon$. The uniform centered-score bound and this inequality show that, uniformly in polished-tail truths, with probability tending to one the likelihood derivative is positive throughout the lower interval and negative throughout the upper interval. Integration shows strict increase and decrease, including comparisons with the interval endpoints. Every global maximizer lies in the asserted bracket, proving the first conclusion. [F1, F2, step 1.1, algebra]

3.1 For an arbitrary square-summable truth with $\underline\alpha_n>0$, the lower interval still has $h_n\le u$. Apply the final, arbitrary-truth bound in F2 to $[0,\underline\alpha_n]$ with $H=u$. The positive expectation margin $1/(16C^4)$ is unchanged. Markov's inequality makes the derivative positive throughout that interval with probability tending to one uniformly in all such truths. Thus no global maximizer lies below $\underline\alpha_n$. If this endpoint is zero, the conclusion holds automatically. [F1, F2, step 1.1, step 2.1, algebra]

4.1 If $\underline\alpha_n=A$ or $\overline\alpha_n=0$, their ordering forces equality of both endpoints and the rate ratio is one. Otherwise apply F2's kernel comparison at $a=\underline\alpha_n$, $b=\overline\alpha_n$. Step 1.1 gives $u\le(4+36L_0\rho^{1+2A})(N_b/N_a)v$, hence $N_a/N_b\le128C^{16}(4+36L_0\rho^{1+2A})$. Finally $n^{-2\alpha/(1+2\alpha+2p)}=N_\alpha^{1+2p}/n$. Raising the last bound to the power $1+2p$ gives the displayed rate comparison. All constants and probability bounds are uniform in the specified classes. [F2, step 1.1, algebra] ∎
