---
id: def-it-finite-iid-multisource
kind: definition
title: "Finite-alphabet IID multisource"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-alphabet-iid-source
  - def-it-finite-conditional-entropy
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the source alphabets are finite."
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
      locator: "§15.4, printed pp. 549–550, jointly IID correlated sources and the distributed source model."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, printed pp. 224–225, multi-terminal compression model."
---

## Definition

Fix an integer $k\ge2$ and finite nonempty alphabets $\mathcal X_1,\ldots,\mathcal X_k$. Let $\mathcal X:=\prod_{i=1}^k\mathcal X_i$, identified with a finite alphabet as in [[def-finite-alphabet-iid-source]]. A **finite-alphabet IID $k$-source** is an IID sequence of vectors
$$Z_t=(X_{1,t},\ldots,X_{k,t})\in\mathcal X,\qquad t\ge1,$$
with common joint probability vector $P$ on $\mathcal X$. Thus for every $n\ge1$ its block law is $P^{\otimes n}$, and terminal $i$ observes $X_i^n=(X_{i,1},\ldots,X_{i,n})$. For $S\subseteq[k]:=\{1,\ldots,k\}$ write $X_S=(X_i)_{i\in S}$, let $S^c=[k]\setminus S$, and define $H_P(X_S\mid X_{S^c})$ by [[def-it-finite-conditional-entropy]] for the induced finite joint law. When $S=[k]$, $X_{S^c}$ takes values in the singleton empty product, so $H_P(X_S\mid X_{S^c})=H(P)$ under [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Unmarked logarithms and information rates use nats by [[def-it-information-units-and-logarithm-base]].
