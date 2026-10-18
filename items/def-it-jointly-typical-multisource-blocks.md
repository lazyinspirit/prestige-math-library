---
id: def-it-jointly-typical-multisource-blocks
kind: definition
title: "Jointly typical blocks for a finite IID multisource"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-finite-iid-multisource
  - lem-it-multisource-block-conditional-law-factorization
  - def-it-empirical-type-and-type-class
  - def-finite-law-self-information-and-entropy
  - def-finite-source-information-density-and-typical-set
  - def-it-finite-conditional-entropy
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; all block alphabets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.2, jointly typical sequences, printed pp. 520–523; §15.4, printed pp. 551–554."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §§11.2 and 11.6, AEP and Slepian–Wolf decoding, printed pp. 217–226."
---

## Definition

Let $P$ and $Z_t=(X_{1,t},\ldots,X_{k,t})$ be as in [[def-it-finite-iid-multisource]], and let $\mathcal X_+:=\{x\in\mathcal X:P(x)>0\}$. For $z^n\in\mathcal X_+^n$, write $\widehat P_{z^n}$ for its empirical type from [[def-it-empirical-type-and-type-class]], and write $I_n(z^n)$ for its normalized block information from [[def-finite-source-information-density-and-typical-set]] applied to the vector source on $\mathcal X$. For each nonempty $S\subseteq[k]$ and supported pair $(x_S^n,x_{S^c}^n)$, define the conditional block information
$$J_{S,n}(x_S^n\mid x_{S^c}^n):=-\frac1n\ln P^{\otimes n}(x_S^n\mid x_{S^c}^n),$$
where the conditional probability is the finite conditional law of the block under $P^{\otimes n}$. Its positive denominator and coordinatewise factorization on supported tuples are proved in [[lem-it-multisource-block-conditional-law-factorization]].

For $\delta,\epsilon>0$, the **jointly typical set** is
$$\mathcal T_n(P,\delta,\epsilon):=\left\{z^n\in\mathcal X_+^n:\|\widehat P_{z^n}-P\|_\infty\le\delta,\ |I_n(z^n)-H(P)|\le\epsilon,\ |J_{S,n}(x_S^n\mid x_{S^c}^n)-H_P(X_S\mid X_{S^c})|\le\epsilon\text{ for every nonempty }S\subseteq[k]\right\}.$$
Here $\|q-P\|_\infty:=\max_{x\in\mathcal X}|q(x)-P(x)|$, $H(P)$ is the finite entropy of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]], and each $H_P(X_S\mid X_{S^c})$ is from [[def-it-finite-conditional-entropy]] under the multisource law.
