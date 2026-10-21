---
id: ex-logistic-loss-not-covered-by-hinge-margin-comparison
kind: example
title: "The hinge margin comparison does not extend to logistic contrastive loss"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 9
deps:
  - cor-subgaussian-contrastive-representation-transfer
  - def-axiom-of-choice
  - def-latent-class-contrastive-learning
  - lem-subgaussian-contrastive-margin-comparison
  - lem-contrastive-hinge-and-logistic-loss-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Lemma 5.1 and Corollary 5.1.1"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
---

## Example

Consider two equally likely deterministic classes $a,b$ and the scalar representation $f(a)=2$, $f(b)=4$, so $R=4$, $\tau=1/2$, and the classwise centered representation has sub-Gaussian proxy $\sigma^2=0$. For the distinct-class tasks, the mean classifier has logistic risk

$$L^\mu_{\rm sup}(f)=\frac12\bigl[\log_2(1+e^4)+\log_2(1+e^{-8})\bigr]>\frac52,$$

while its source hinge margin risk at $\gamma=1$ is exactly $L^\mu_{1,\rm sup}(f)=5/2$. The logistic contrastive risk conditioned on distinct classes has the same value as the displayed logistic mean-classifier risk. Consequently, for every $0<\epsilon\le1$ smaller than the positive gap, the source hinge margin comparison $L^\ne_{\rm un}(f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon$ fails for logistic contrastive loss. In particular, the hinge-margin corollary cannot be transferred unchanged to logistic training.

For the optional transfer comparison, assume the Axiom of Choice, fix $M\ge1$ and $0<\delta<1$, impose the corollary's remaining model, risk and supremum measurability, and measurable exact-empirical-minimizer hypotheses, and use the singleton $\mathcal F=\{f\}$. The proposed extension is

$$L^\mu_{\rm sup}(\widehat f)\le\gamma L^\mu_{\gamma,\rm sup}(f)+\epsilon+\frac{\sqrt2L_0\tau s(f)+2\Gamma^{\rm log}_M(S,\delta)}{1-\tau},$$

where $L^\mu_{\rm sup}(\widehat f)$ uses logistic task loss, $L^\mu_{\gamma,\rm sup}(f)$ uses the scaled hinge margin loss, $\gamma=1$ here, and

$$\Gamma^{\rm log}_M(S,\delta):=\frac{2\sqrt{18}L_0R\,\mathcal R_S(\mathcal F)}{M}+3B_{\ell_{\rm log},R}\sqrt{\frac{\ln(4/\delta)}{2M}}$$

uses the logistic loss oscillation. The example tests this claimed mean-classifier bound with logistic contrastive training.

## Example references

[[def-latent-class-contrastive-learning]]: defines the latent-class risks, scores and centered classwise representations.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: defines the base-2 logistic loss and hinge margin loss.

[[lem-subgaussian-contrastive-margin-comparison]]: states the one-negative margin inequality for hinge contrastive loss.

[[cor-subgaussian-contrastive-representation-transfer]]: states the source margin transfer corollary with its hinge-only scope.

[[def-axiom-of-choice]]: supplies the choice assumption for the optional transfer comparison.

[Saunshi et al., Lemma 5.1 and Corollary 5.1.1](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf): states the margin comparison in the hinge-loss section.

## Facts & Assumptions

**Given:** The deterministic two-class model and representation in the Example; base-2 logistic contrastive loss; hinge loss for the scaled mean-classifier margin; and $0<\epsilon\le1$. For the optional transfer comparison, also assume AC, $M\ge1$, $0<\delta<1$, the stated risk and supremum measurability hypotheses, and a measurable exact empirical selector for $\mathcal F=\{f\}$.

[A1] The optional transfer comparison assumes the Axiom of Choice required by the transfer corollary's uniform-generalization route. [[def-axiom-of-choice]], [[cor-subgaussian-contrastive-representation-transfer]]

[F1] The ordered distinct class pairs $(a,b)$ and $(b,a)$ have equal conditional probability, the means equal their deterministic embeddings, and the positive-pair and negative sampling rules are those in the latent-class model. [[def-latent-class-contrastive-learning]]

[F2] The contrastive score is $q_f=f(x)^\top(f(x^-)-f(x^+))$, logistic loss is $\log_2(1+e^q)$, and the scaled hinge mean-classifier loss is $(1-Yw_\mu^\top f(x)/\gamma)_+$. [[def-latent-class-contrastive-learning]], [[lem-contrastive-hinge-and-logistic-loss-properties]]

[F3] The source sub-Gaussian margin parameter equals $\gamma=1$ when $\sigma=0$, and the source margin corollary is hinge-only. [[lem-subgaussian-contrastive-margin-comparison]], [[cor-subgaussian-contrastive-representation-transfer]]

## Proof

**Given:** The finite deterministic model in the Example.

1.1 The class means are $\mu_a=2$ and $\mu_b=4$. For task $(a,b)$, the mean weight is $w_\mu=\mu_a-\mu_b=-2$. The positive-label example $a$ has logistic argument $-w_\mu f(a)=4$, while the negative-label example $b$ has argument $w_\mu f(b)=-8$. Swapping the classes gives the same two losses in reverse order, proving the displayed mean-classifier logistic risk. [F1, F2, given, algebra]

1.2 For the mean classifier, the two hinge-margin arguments at $\gamma=1$ are $4$ and $-8$, so the losses are $5$ and $0$ and their average is $5/2$. The sub-Gaussian proxy is zero because each class is deterministic, so [F3] gives $\gamma=1$ for every permitted $\epsilon$. [F2, F3, given, algebra]

2.1 For distinct classes, the contrastive score is $q_f=2(4-2)=4$ for $(a,b)$ and $q_f=4(2-4)=-8$ for $(b,a)$. Therefore $L^\ne_{\rm un}(f)=\frac12[\log_2(1+e^4)+\log_2(1+e^{-8})]$, equal to the value in step 1.1. [F1, F2, step 1.1, given, algebra]

3.1 The exponential series has positive terms and $e^4>1+4+4^2/2!+4^3/3!+4^4/4!=103/3>31$. Hence $1+e^4>32$, so $\log_2(1+e^4)>5$; also $\log_2(1+e^{-8})>0$. Thus the value in step 2.1 exceeds $5/2$ by a positive gap $\Delta$. Choose $0<\epsilon<\min(\Delta/4,1)$. Then $L^\ne_{\rm un}(f)>L^\mu_{1,\rm sup}(f)+\epsilon$, contradicting the proposed logistic extension. [F2, step 2.1, step 1.2, given, algebra]

4.1 Under [A1] and the transfer hypotheses in the Statement, take $\mathcal F=\{f\}$ and the logistic objective. The only element is an exact empirical minimizer, its vector Rademacher complexity is zero because the expectation of its finite signed sum is zero, and $s(f)=0$ because both class covariances vanish. Therefore $\Gamma^{\rm log}_M(S,\delta)=3B_{\ell_{\rm log},4}\sqrt{\ln(4/\delta)/(2M)}\to0$ as $M\to\infty$ for the fixed $0<\delta<1$. The mean-classifier logistic risk $L^\mu_{\rm sup}(f)$ exceeds $5/2$ by $\Delta$, while the proposed logistic-training extension would upper-bound that risk by $5/2+\epsilon+4\Gamma^{\rm log}_M(S,\delta)$ (since $1-\tau=1/2$). Taking $0<\epsilon<\min(\Delta/4,1)$ and then $M$ large enough that $4\Gamma^{\rm log}_M<\Delta/4$ makes that right side less than $5/2+\Delta/2$, contradicting $L^\mu_{\rm sup}(f)=5/2+\Delta$. [A1, F1, F2, F3, step 1.2, given, algebra] ∎
