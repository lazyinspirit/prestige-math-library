---
id: def-parabolic-evolution-triple-and-energy-space
kind: definition
title: Evolution triples and the parabolic energy space
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §§11.1–11.2, PDF pp. 100–103: the Gelfand triple, parabolic energy space, trace, and weak formulation."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§1, pp. 1–2: the heat-equation variational formulation and its L2-in-time weak formulation."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Definition

Let $V$ and $H$ be real Hilbert spaces and let $i:V\to H$ be an injective,
continuous linear map with dense range. Let $V^*$ be the continuous real linear
dual of $V$. Identify $H$ with its Hilbert dual by its inner product and embed
$H$ into $V^*$ by
$$h\longmapsto\bigl(v\longmapsto (h,i v)_H\bigr).$$
The resulting dense continuous embeddings are written
$$V\hookrightarrow H\cong H^*\hookrightarrow V^*$$
and $(V,H,V^*)$ is called an **evolution triple**. The pairing between $V^*$
and $V$ is denoted $\langle\cdot,\cdot\rangle_{V^*,V}$.

For a Hilbert space $X$, $L^2(0,T;X)$ is the space of equivalence classes of
strongly measurable $X$-valued functions $w$ with
$$\int_0^T\|w(t)\|_X^2\,dt<\infty.$$
Strong measurability means being an almost-everywhere pointwise limit of
measurable simple functions. For $u\in L^2(0,T;V)$ and $g\in L^2(0,T;V^*)$,
say that $g$ is the **weak time derivative** of $u$ when
$$\int_0^T (i u(t),i v)_H\,\phi'(t)\,dt =-\int_0^T\langle g(t),v\rangle_{V^*,V}\,\phi(t)\,dt$$
for every $v\in V$ and every $\phi\in C_c^\infty(0,T)$. The derivative is
unique up to equality almost everywhere. The **parabolic energy space** is
$$W(0,T;V):=\{u\in L^2(0,T;V):u'\in L^2(0,T;V^*)\},$$
with norm
$$\|u\|_{W(0,T;V)}:=\bigl(\|u\|_{L^2(0,T;V)}^2+ \|u'\|_{L^2(0,T;V^*)}^2\bigr)^{1/2}.$$
No endpoint values are part of this definition; they are assigned only after
a continuous $H$ trace representative has been proved. Separability is an
additional hypothesis when it is needed by a later result.
