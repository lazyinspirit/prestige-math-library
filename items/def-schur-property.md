---
id: def-schur-property
kind: definition
title: Schur property
status: draft
origin: pipeline
deps: [def-weak-topology-on-a-normed-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Example following Theorem 4.30, printed pp. 128–129"
---

## Definition

Let $X$ be a real or complex Banach space.  It has the **Schur property** if,
for every sequence $(x_n)_{n\in\mathbb N}$ in $X$ and every $x\in X$,

$$x_n\longrightarrow x\text{ in }\sigma(X,X^*) \quad\Longrightarrow\quad \|x_n-x\|\longrightarrow0.$$

Thus the premise is convergence in the weak topology from
[[def-weak-topology-on-a-normed-space]], while the conclusion is convergence
for the given norm.  Equivalently, it is enough to test weakly null sequences:
if $x_n\to x$ weakly, linearity of every $f\in X^*$ gives
$f(x_n-x)\to0$; conversely this applied to $x_n-x$ recovers weak convergence
to $x$.  The corresponding norm statements are equivalent because
$\|(x_n-x)-0\|=\|x_n-x\|$.

## Remarks

The definition concerns sequences only.  It does not say that the weak and
norm topologies coincide, nor does it turn weak convergence of arbitrary nets
into norm convergence.  The zero Banach space has the Schur property.
