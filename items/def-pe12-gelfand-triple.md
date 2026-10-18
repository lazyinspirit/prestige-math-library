---
id: def-pe12-gelfand-triple
kind: definition
title: Banach evolution triples and weak time derivatives
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-parabolic-evolution-triple-and-energy-space, def-hilbert-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, evolution spaces and the H-valued trace, printed pp. 204–207
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 11 §§11.1–11.2, PDF pp. 96–101
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $V$ be a separable reflexive real Banach space, let $H$ be a real Hilbert
space, and let $i:V\to H$ be an injective continuous linear map with dense
range. Let $V^*$ be the continuous real dual of $V$ and write
$\langle\cdot,\cdot\rangle_{V^*,V}$ for its pairing with $V$. The canonical
map $J:H\to V^*$ is
$$J h(v)=(h,iv)_H\qquad(h\in H,\ v\in V).$$
It is continuous because $|Jh(v)|\le \|h\|_H\|i\|\|v\|_V$, and injective
because $i(V)$ is dense in $H$. A triple $(V,H,J)$ with these properties is
a **Banach evolution triple**. If $V$ is Hilbert, this is the real evolution
triple of [[def-parabolic-evolution-triple-and-energy-space]].

For $1<p<\infty$, $L^p(0,T;V)$ denotes the Bochner space of strongly
measurable $V$-valued functions with finite $p$th power norm, and
$p'=p/(p-1)$. For $u\in L^p(0,T;V)$ and $g\in L^{p'}(0,T;V^*)$, say
$g=u'$ in the distributional time sense if
$$\int_0^T (iu(t),iv)_H\,\phi'(t)\,dt =-\int_0^T\langle g(t),v\rangle_{V^*,V}\,\phi(t)\,dt$$
for every $v\in V$ and $\phi\in C_c^\infty(0,T)$. Define
$$W_p(0,T;V)=\{u\in L^p(0,T;V):u'\in L^{p'}(0,T;V^*)\}.$$
This definition assigns no endpoint values; a separate chain-rule theorem is
needed before evaluating a function in this space at an endpoint.

## Remarks

The published parabolic FEM definition uses $p=2$ and a Hilbert energy space.
This definition allows the reflexive Banach energy space needed for the
$p$-Laplacian branch. The pairing convention is real and bilinear throughout.
