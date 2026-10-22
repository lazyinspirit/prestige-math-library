---
id: def-csm-frontier-mean-field-ensemble
kind: definition
title: Finite-alphabet mean-field probability ensembles
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-it-empirical-type-and-type-class
  - def-it-finite-alphabet-product-law
  - lem-it-finite-product-law-is-iid
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
dependency_roles:
  def-it-empirical-type-and-type-class: mathematical-premise
  def-it-finite-alphabet-product-law: mathematical-premise
  lem-it-finite-product-law-is-iid: mathematical-premise
  def-qa-35-finite-probability-entropy-and-stochastic-matrices: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: Section IV.B, printed pp. 26–27; Sections V.B–V.D, printed pp. 39–50.
    - title: Julien Poisat, Introduction to Large Deviations, complete author-hosted lecture notes
      url: https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf
      locator: Section 2, printed pp. 4–6; Exercise 19, printed pp. 10–11.
---

## Definition

Let $\mathcal A$ be a finite nonempty alphabet, let $p=(p(a))_{a\in\mathcal A}$ be a probability vector with $p(a)>0$ for every $a$, and write
$$\Delta(\mathcal A):=\left\{q\in[0,1]^{\mathcal A}:\sum_{a\in\mathcal A}q(a)=1\right\}$$
with the metric $d_1(q,r):=\sum_{a\in\mathcal A}|q(a)-r(a)|$ and its induced topology, called the $\ell^1$ topology. This is a metric: symmetry, nonnegativity and separation follow coordinatewise, and the triangle inequality follows by summing $|q(a)-s(a)|\leq|q(a)-r(a)|+|r(a)-s(a)|$. For each integer $n\geq1$, the configuration space is $\Omega_n:=\mathcal A^n$ with the full power-set $\sigma$-algebra. Its reference probability is the product law $p^{\otimes n}$, which gives the word $x^n=(x_1,\ldots,x_n)$ mass $\prod_{i=1}^n p(x_i)$. By [[lem-it-finite-product-law-is-iid]], this mass assignment is normalized and is a probability law; explicitly, $\sum_{x^n\in\mathcal A^n}\prod_{i=1}^np(x_i)=\prod_{i=1}^n\sum_{a\in\mathcal A}p(a)=1$. The empirical macrostate is the probability vector
$$L_n(x^n)(a):=\frac1n\#\{i\in\{1,\ldots,n\}:x_i=a\},\qquad a\in\mathcal A.$$
Thus $L_n$ is the empirical type defined by the finite-alphabet supplier.

For a continuous function $h:\Delta(\mathcal A)\to\mathbb R$ and a real parameter $\beta$, define the finite canonical normalizer and word law by
$$Z_{n,\beta}:=\sum_{x^n\in\Omega_n}p^{\otimes n}(x^n)e^{-n\beta h(L_n(x^n))},\qquad p_{n,\beta}(x^n):=\frac{p^{\otimes n}(x^n)e^{-n\beta h(L_n(x^n))}}{Z_{n,\beta}}.$$
The normalizer is finite and positive because the sum is finite and every summand is finite and positive. The canonical macrostate law is the probability measure on Borel subsets $B\subseteq\Delta(\mathcal A)$ that assigns mass
$$p_{n,\beta}\bigl(\{x^n\in\Omega_n:L_n(x^n)\in B\}\bigr).$$

For a real-valued function $f$ on a nonempty set $S$, define $\operatorname*{argmin}_{x\in S}f(x):=\{x\in S:f(x)=\inf_{y\in S}f(y)\}$ and $\operatorname*{argmax}_{x\in S}f(x):=\{x\in S:f(x)=\sup_{y\in S}f(y)\}$; either set is empty if the corresponding extremum is not attained. For $q\in\Delta(\mathcal A)$, set
$$D(q\|p):=\sum_{a:q(a)>0}q(a)\ln\frac{q(a)}{p(a)},$$
omitting zero-mass terms, as in the finite relative-entropy convention. For $u\in h(\Delta(\mathcal A))$, define the constrained cost, entropy, canonical variational set, and constrained variational set by
$$d(u):=\inf_{q\in\Delta(\mathcal A):h(q)=u}D(q\|p),\qquad s(u):=-d(u),$$
$$\mathcal M_\beta:=\operatorname*{argmin}_{q\in\Delta(\mathcal A)}\bigl[D(q\|p)+\beta h(q)\bigr],\qquad \mathcal M_u:=\operatorname*{argmin}_{q\in\Delta(\mathcal A):h(q)=u}D(q\|p).$$
For $A\subseteq\Omega_n$ and an event $E\subseteq\Omega_n$ with $p^{\otimes n}(E)>0$, define the conditional probability by $p^{\otimes n}(A\mid E):=p^{\otimes n}(A\cap E)/p^{\otimes n}(E)$. For $\delta>0$, the microcanonical shell event is $E_{n,\delta,u}:=\{x^n:|h(L_n(x^n))-u|<\delta\}$. Whenever $p^{\otimes n}(E_{n,\delta,u})>0$, its microcanonical shell law is the conditional probability $p^{\otimes n}(\,\cdot\mid E_{n,\delta,u})$.

## Definition references

[[def-it-empirical-type-and-type-class]]

[[def-it-finite-alphabet-product-law]]

[[lem-it-finite-product-law-is-iid]]

[[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]
