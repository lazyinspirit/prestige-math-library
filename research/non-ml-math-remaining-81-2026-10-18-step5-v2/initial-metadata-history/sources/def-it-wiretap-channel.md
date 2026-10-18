---
id: def-it-wiretap-channel
kind: definition
title: "Finite discrete memoryless wiretap channel and code model"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel, def-finite-stochastic-kernel, lem-it-finite-wiretap-product-kernel-is-stochastic]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the alphabets, stochastic matrices, and products are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-8–23-9: finite DM-WTC, randomized encoder, uniform message, and secrecy capacity statement."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 12"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_12.pdf
      locator: "PDF pp. 1–2: finite wiretap converse notation, error/leakage model, and auxiliary-variable formulation."
---

## Definition

Let $\mathcal X,\mathcal Y,\mathcal Z$ be finite nonempty alphabets and let $W(y,z\mid x)$ be a stochastic kernel from $\mathcal X$ to $\mathcal Y\times\mathcal Z$ ([[def-finite-stochastic-kernel]]). Its Bob and Eve marginals are $W_Y(y\mid x):=\sum_z W(y,z\mid x)$ and $W_Z(z\mid x):=\sum_y W(y,z\mid x)$; each is a finite DMC in the sense of [[def-discrete-memoryless-channel]].

For each integer $n\ge1$, use one-based coordinate labels for blocks: for $a^n\in\mathcal A^n$, a function on $\{0,\ldots,n-1\}$, write $a_i:=a^n(i-1)$ for $1\le i\le n$. With these labels, the joint channel law is

$$W^n(y^n,z^n\mid x^n):=\prod_{i=1}^n W(y_i,z_i\mid x_i).$$

The product formula is a stochastic kernel by [[lem-it-finite-wiretap-product-kernel-is-stochastic]]. Finite distributivity gives $\sum_{z^n}W^n(y^n,z^n\mid x^n)=\prod_i\sum_{z_i}W(y_i,z_i\mid x_i)=\prod_iW_Y(y_i\mid x_i)=W_Y^n(y^n\mid x^n)$, and the analogous finite sum over $y^n$ gives marginal $W_Z^n$. The pair $(Y^n,Z^n)$ may be correlated conditional on $X^n$; neither marginal changes if that coupling changes while the two marginal channels stay fixed.

An $(n,\mathcal M_n)$ wiretap code has a finite message set $\mathcal M_n$, a uniform message $M_n$, a stochastic encoder $P_{X^n\mid M_n}$ using private randomness independent of channel noise, and a decoder $\hat M_n:\mathcal Y^n\to\mathcal M_n\cup\{e\}$, where $e\notin\mathcal M_n$ denotes erasure and is counted as error. The encoder uses no feedback and the parties have no preshared secret key or forward public aid. The public code description is known to Eve, who observes $Z^n$. Average error is $P_{e,av}^{(n)}:=\Pr[\hat M_n(Y^n)\ne M_n]$; maximal error is $P_{e,max}^{(n)}:=\max_{m\in\mathcal M_n}\Pr[\hat M_n(Y^n)\ne m\mid M_n=m]$. The rate is $n^{-1}\ln|\mathcal M_n|$ nats per channel use. A secrecy metric is specified separately.
