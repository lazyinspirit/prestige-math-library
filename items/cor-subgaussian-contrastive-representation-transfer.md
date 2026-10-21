---
id: cor-subgaussian-contrastive-representation-transfer
kind: corollary
title: "Sub-Gaussian contrastive transfer with a mean-classifier margin loss"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-latent-class-contrastive-learning
  - lem-subgaussian-contrastive-margin-comparison
  - thm-contrastive-representation-transfer-under-within-class-deviation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Corollary 5.1.1 and Lemma 5.1"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
    - title: "Nikunj Saunshi et al., Supplementary Appendix A.2, complete proof of Lemma 5.1"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf"
---

## Statement

Assume the Axiom of Choice and the one-negative latent-class model with $\tau<1$. Use the source hinge loss for both contrastive training and the binary mean-classifier task. Fix $M\ge1$, a measurable exact empirical minimizer $\widehat f\in\mathcal F$ satisfying $\widehat L_{\rm un}(\widehat f)\le\widehat L_{\rm un}(g)$ for every $g\in\mathcal F$ almost surely, $0<\delta<1$, and $0<\epsilon\le1$. Let $f\in\mathcal F$ be any comparator whose centered class-conditional representation vectors are sub-Gaussian in every direction with common proxy $\sigma^2\ge0$. Define

$$\gamma:=\begin{cases}1+2R\sigma\sqrt{2\ln R+\ln(3/\epsilon)},&R\ge1,\\1+2R\sigma\sqrt{\ln(3/\epsilon)},&0<R<1.\end{cases}$$

Under the risk and supremum measurability hypotheses, with probability at least $1-\delta$,

$$L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon+\frac{\sqrt2L_0\tau s(f)+2\Gamma_M(S,\delta)}{1-\tau}.$$

The uniform-deviation quantity is

$$\Gamma_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell_{\rm h},R}\sqrt{\frac{\ln(4/\delta)}{2M}},$$

where $L^\mu_{\gamma,\rm sup}(f)$ is the average task risk of the class-mean weight $w_\mu$ using the scaled hinge loss $(1-Yw_\mu^\top f(X)/\gamma)_+$. The logistic transfer theorems remain separate; the source margin comparison does not supply their logistic analogue.

## Statement references

[[lem-subgaussian-contrastive-margin-comparison]]: supplies the exact piecewise margin parameter and the hinge comparison $L^\ne_{\rm un}(f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon$.

[[thm-contrastive-representation-transfer-under-within-class-deviation]]: supplies the empirical-minimizer transfer bound with a within-class covariance term.

[Saunshi et al., Corollary 5.1.1 and Lemma 5.1, main paper §5.2](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf).

[Saunshi et al., complete proof of Lemma 5.1, Supplementary Appendix A.2](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a-supp.pdf).

## Facts & Assumptions

**Given:** AC, the one-negative model with $\tau<1$, hinge loss, a measurable exact empirical minimizer, comparator $f$ with the stated classwise centered sub-Gaussian proxy, $M\ge1$, $0<\delta<1$, and $0<\epsilon\le1$.

[A1] AC enters through the uniform-generalization supplier used by the within-class transfer theorem. [[def-axiom-of-choice]], [[thm-contrastive-representation-transfer-under-within-class-deviation]]

[F1] With probability at least $1-\delta$, simultaneously for every comparator $f$, $L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le L^\ne_{\rm un}(f)+[\sqrt2L_0\tau s(f)+2\Gamma_M(S,\delta)]/(1-\tau)$. [[thm-contrastive-representation-transfer-under-within-class-deviation]]

[F2] Under the classwise centered sub-Gaussian assumption, the hinge distinct-class risk satisfies $L^\ne_{\rm un}(f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon$ for the specified $\gamma$. [[lem-subgaussian-contrastive-margin-comparison]]

## Proof

**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 On the event in [F1], the comparator $f$ from the Statement satisfies its transfer inequality. [A1, F1, given]

2.1 Apply [F2] to this comparator and substitute its bound for $L^\ne_{\rm un}(f)$ in [F1]. The result is $L_{\rm sup}(\widehat f)\le L^\mu_{\rm sup}(\widehat f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon+\frac{\sqrt2L_0\tau s(f)+2\Gamma_M(S,\delta)}{1-\tau}$. The event from [F1] has probability at least $1-\delta$, proving the corollary. [F1, F2, step 1.1, given, algebra] ∎
