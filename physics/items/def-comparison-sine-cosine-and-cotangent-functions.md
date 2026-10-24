---
id: def-comparison-sine-cosine-and-cotangent-functions
kind: definition
title: Comparison sine, cosine and cotangent functions
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§24.1, pp.173–176: the model functions sn_k, cs_k and ct_k and their domains"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§2, pp.6–11: the scalar model solutions and their first zero"
---

## Definition

For a real number $k\in\mathbb R$ the **comparison sine** is the smooth function
$\operatorname{sn}_k:\mathbb R\to\mathbb R$ given by
$$\operatorname{sn}_k(t):=\begin{cases}\dfrac{\sin(\sqrt k\,t)}{\sqrt k},&k>0,\\ t,&k=0,\\ \dfrac{\sinh(\sqrt{-k}\,t)}{\sqrt{-k}},&k<0.\end{cases}$$
The **comparison cosine** is its derivative $\operatorname{cs}_k:=\operatorname{sn}_k'$, so that
$$\operatorname{cs}_k(t)=\begin{cases}\cos(\sqrt k\,t),&k>0,\\ 1,&k=0,\\ \cosh(\sqrt{-k}\,t),&k<0.\end{cases}$$
The **comparison cotangent** is the quotient $\operatorname{ct}_k:=\operatorname{cs}_k/\operatorname{sn}_k$,
defined at every real $t$ with $\operatorname{sn}_k(t)\neq0$. Thus its domain is
$\mathbb R\setminus\{m\pi/\sqrt k:m\in\mathbb Z\}$ when $k>0$, and
$\mathbb R\setminus\{0\}$ when $k\le0$; these are unions of the open intervals
on which $\operatorname{sn}_k$ has constant sign.

The following data are part of the definition and are used throughout the pair:
$\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=\operatorname{cs}_k(0)=1$,
$\operatorname{cs}_k(0)=1$, and $\operatorname{sn}_k$ is odd while $\operatorname{cs}_k$ is even.
The **positive domain** of $\operatorname{sn}_k$ is $t\in(0,\pi/\sqrt k)$ when $k>0$ and
$t\in(0,+\infty)$ when $k\le0$; there $\operatorname{sn}_k(t)>0$. For $k\le0$,
$\operatorname{ct}_k(t)>0$ for every $t>0$. For $k>0$, $\operatorname{ct}_k$
is positive on $(0,\pi/(2\sqrt k))$, zero at $\pi/(2\sqrt k)$, and negative
on $(\pi/(2\sqrt k),\pi/\sqrt k)$. The terminal value is
$\operatorname{sn}_k(\pi/\sqrt k)=0$: the spherical endpoint is excluded from the domain
of $\operatorname{ct}_k$, and no value of $\operatorname{ct}_k$ at that endpoint is
asserted. For $k\le0$ no positive zero of $\operatorname{sn}_k$ exists.

In dimension $n\ge2$ the same functions describe the radial behaviour of the model
spaces: $\operatorname{sn}_k$ is the profile of the model normal Jacobi fields and
$\operatorname{sn}_k^{\,n-1}$ the model radial density used on this page. Only the
displayed piecewise formulas, their stated values at $0$ and the stated sign domains are
part of this definition; the differential identities satisfied by these functions are
proved separately.
