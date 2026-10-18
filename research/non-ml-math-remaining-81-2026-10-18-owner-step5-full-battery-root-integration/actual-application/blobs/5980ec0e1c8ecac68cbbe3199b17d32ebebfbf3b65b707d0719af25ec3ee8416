---
id: lem-it-multisource-block-conditional-law-factorization
kind: lemma
title: "Conditional block law factors across IID coordinates"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-iid-multisource
  - def-it-finite-conditional-entropy
  - lem-it-finite-marginals-and-conditionals-are-pmfs
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the factorization is a finite distributive-law calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11 §§11.2 and 11.6, product IID block laws and conditional side-information probabilities, printed pp. 217–226."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.4, the IID correlated-source block model, printed pp. 549–550."
---

## Statement

Let $Z_t=(X_{1,t},\ldots,X_{k,t})$ be a finite-alphabet IID multisource with joint law $P$. For nonempty $S\subseteq[k]$, put $C=S^c$. If $(x_S^n,x_C^n)$ is supported under $P^{\otimes n}$, then the conditional block probability obtained from its joint and complement marginal satisfies
$$P^{\otimes n}(x_S^n\mid x_C^n)=\prod_{t=1}^nP_{X_S\mid X_C}(x_{S,t}\mid x_{C,t}).$$

## Facts & Assumptions

**Given:** The finite-alphabet IID multisource, a nonempty $S\subseteq[k]$, and supported blocks $(x_S^n,x_C^n)$.

[F1] [[def-it-finite-iid-multisource]]: the joint letter law is $P$, and $P^{\otimes n}(z^n)=\prod_{t=1}^nP(z_t)$.

[F2] [[def-it-finite-conditional-entropy]]: for $P_{X_S,X_C}(s,c)>0$, the conditional probability is $P_{X_S\mid X_C}(s\mid c)=P_{X_S,X_C}(s,c)/P_{X_C}(c)$.

[F3] [[lem-it-finite-marginals-and-conditionals-are-pmfs]]: finite joint-law marginals are probability vectors; positive-mass conditional vectors are well-defined probability vectors.

## Proof

1.1 For each coordinate $t$, support gives $P_{X_S,X_C}(x_{S,t},x_{C,t})>0$, and the finite marginal sum $P_{X_C}(x_{C,t})=\sum_{x_S}P_{X_S,X_C}(x_S,x_{C,t})$ is therefore positive by [F3]. Summing the finite product law over all $x_S^n$ and distributing the finite sums gives $P^{\otimes n}_{X_C^n}(x_C^n)=\sum_{x_S^n}\prod_{t=1}^nP_{X_S,X_C}(x_{S,t},x_{C,t})=\prod_{t=1}^nP_{X_C}(x_{C,t})>0$. Thus the conditional block probability is defined by dividing its joint mass by this positive complement marginal. [F1, F3, algebra]

2.1 Using [F1] for the numerator and step 1.1 for the denominator, that ratio is $\frac{\prod_{t=1}^nP_{X_S,X_C}(x_{S,t},x_{C,t})}{\prod_{t=1}^nP_{X_C}(x_{C,t})}=\prod_{t=1}^n\frac{P_{X_S,X_C}(x_{S,t},x_{C,t})}{P_{X_C}(x_{C,t})}=\prod_{t=1}^nP_{X_S\mid X_C}(x_{S,t}\mid x_{C,t})$, where each final factor is the conditional probability in [F2]. This proves the factorization. [F1, F2, step 1.1, algebra] ∎
