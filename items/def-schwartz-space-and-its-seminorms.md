---
id: def-schwartz-space-and-its-seminorms
kind: definition
title: Schwartz space and its seminorms
deps: ["def-complex-lp-and-euclidean-test-function-conventions", "def-ck-and-multi-index-notation-in-several-variables", "def-c-c-and-c-c-infinity-on-rn"]
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Definition 11.3, p.120
---

## Definition

Fix an integer $n\ge1$. With the complex smooth-function convention of [[def-complex-lp-and-euclidean-test-function-conventions]] and multi-indices of [[def-ck-and-multi-index-notation-in-several-variables]], define
$$p_{\alpha\beta}(f)=\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta f(x)|,\qquad \mathcal S(\mathbb R^n)=\{f\in C^\infty(\mathbb R^n;\mathbb C):p_{\alpha\beta}(f)<\infty\text{ for all }\alpha,\beta\}.$$
The zero multi-index gives $x^0=1$ and $\partial^0f=f$. These are actual smooth functions, not equivalence classes. The notation $C_c^\infty$ uses the support convention in [[def-c-c-and-c-c-infinity-on-rn]].

Pointwise differentiation is linear; thus $p_{\alpha\beta}(f+g)\le p_{\alpha\beta}(f)+p_{\alpha\beta}(g)$ and $p_{\alpha\beta}(cf)=|c|p_{\alpha\beta}(f)$. In particular this set is a complex vector space and each $p_{\alpha\beta}$ is a seminorm. The zero function belongs to it. Since $p_{00}(f)=0$ forces $f(x)=0$ for every $x$, the family separates functions. No choice principle is needed.
