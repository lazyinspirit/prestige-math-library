---
id: lem-empirical-bayes-maximizer-bracket-on-polished-tails
kind: lemma
title: "Marginal-likelihood maximizer bracket on polished tails"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-polished-tail-class-for-gaussian-sequence
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No additional choice principle is identified in the source bracket argument."
provenance:
  statement: literature-derived
  proof: not-supplied
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
$$ N_{n,\alpha}=n^{1/(1+2\alpha+2p)},\qquad h_n(\alpha;\theta_0)= \frac{1+2\alpha+2p}{N_{n,\alpha}\log n} \sum_{i=1}^{\infty} \frac{n^2 i^{1+2\alpha}(\log i)\theta_{0,i}^2} {(i^{1+2\alpha+2p}+n)^2}. $$
Define
$$ \underline\alpha_n= \inf\{\alpha\in[0,A]:h_n(\alpha;\theta_0)\ge(16C^8)^{-1}\}, \qquad \overline\alpha_n= \sup\{\alpha\in[0,A]:h_n(\alpha;\theta_0)\le8C^8\}, $$
with the source conventions $\inf\varnothing=A$ and $\sup\varnothing=0$.
Then the source bracket result is
$$ \inf_{\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho),\,\theta_{0,1}=0} P_{\theta_0}^{(n)} \bigl(\underline\alpha_n\le\widehat\alpha_n\le\overline\alpha_n\bigr) \longrightarrow1. $$
For fixed $A$, the two rates
$n^{-2\underline\alpha_n/(1+2\underline\alpha_n+2p)}$ and
$n^{-2\overline\alpha_n/(1+2\overline\alpha_n+2p)}$ are uniformly
comparable over the same polished-tail class.

## Escalation record

**Given:** The source-specific Gaussian sequence model and the fixed
polished-tail class in the Statement.

**Escalated proof gap:** The full local proof of this bracket is not supplied
in this batch. The source proof requires two uniform bounds for the
derivative of the random marginal score on $(0,\underline\alpha_n]$ and
$[\overline\alpha_n,A]$, including an entropy-integral maximal inequality
for the centered Gaussian quadratic score process. Its variance and metric
estimates also invoke Knapik et al. (2012), Lemmas 5.2–5.3 and technical
series bounds whose complete local proofs have not been authored here.
The source statement is retained as the required local supplier; it is not
certified by this citation.
