---
id: def-square-ica-model
kind: definition
title: "Square independent-component model with standardized sources"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.2, printed pp. 560–561"
    - title: "Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, Independent Component Analysis"
      url: "https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf"
      locator: "§7.2.2, printed pp. 152–154"
---

## Definition

Let $p\ge 1$ and let $X,S$ be random vectors in $\mathbb R^p$, considered through their probability laws. A **square independent-component representation** of $X$ is a representation in distribution

$$X\overset{d}=AS$$

where $A\in GL_p(\mathbb R)$ is an invertible mixing matrix and $S=(S_1,\ldots,S_p)^T$ has mutually independent real-valued components. Mutual independence means that for all Borel sets $B_1,\ldots,B_p\subseteq\mathbb R$,

$$\mathbb P(S_1\in B_1,\ldots,S_p\in B_p)=\prod_{j=1}^p\mathbb P(S_j\in B_j).$$

Each source is standardized: $\mathbb E S_j=0$ and $\mathbb E S_j^2=1$. A source is **Gaussian** if its law has density $(2\pi)^{-1/2}e^{-x^2/2}$, and is **non-Gaussian** otherwise. All vectors are columns and matrix transposes use the standard Euclidean inner product. The definition specifies a latent representation, not a claim that it can be recovered uniquely from the law of $X$.

## Definition references

[Hastie, Tibshirani, and Friedman, §14.7.2](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Hyvärinen, Karhunen, and Oja, §7.2.2](https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf)
