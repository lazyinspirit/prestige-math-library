---
id: def-poisson-nmf-model
kind: definition
title: "Poisson nonnegative matrix-factorization model"
status: published
dependency_level: 0
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.6, printed pp. 553–554"
    - title: "Daniel D. Lee and H. Sebastian Seung, Algorithms for Non-negative Matrix Factorization, NIPS 2000"
      url: "https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf"
      locator: "§§2–3, PDF pp. 1–2"
---

## Definition

Let $n,p,r$ be positive integers and write $\mathbb N_0=\{0,1,2,\ldots\}$. An observed count matrix $X=(x_{ij})\in\mathbb N_0^{n\times p}$ is admissible when every row and every column contains a positive entry. A Poisson nonnegative matrix-factorization parameter of inner dimension $r$ consists of matrices

$$W\in[0,\infty)^{n\times r}, \qquad H\in[0,\infty)^{r\times p}, \qquad \lambda_{ij}=(WH)_{ij}=\sum_{k=1}^r W_{ik}H_{kj}.$$

At this parameter, the random counts $Y_{ij}$ are mutually independent and have Poisson means $\lambda_{ij}$. For $\lambda>0$, the Poisson law is

$$\mathbb P(Y=m)=e^{-\lambda}\frac{\lambda^m}{m!}, \qquad m\in\mathbb N_0;$$

for $\lambda=0$, it assigns probability $1$ to $m=0$ and probability $0$ to every $m>0$. This model defines a likelihood for the observed matrix; it makes no convexity or global-optimality assertion about the factor parameters.

## Definition references

[Hastie, Tibshirani, and Friedman, §14.6](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Lee and Seung, §§2–3](https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf)
