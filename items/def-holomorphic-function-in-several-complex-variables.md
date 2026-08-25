---
id: def-holomorphic-function-in-several-complex-variables
kind: definition
title: "Holomorphic functions on an open subset of $\\mathbb{C}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-complex-differentiability-holomorphic-and-entire, def-vector-space, def-euclidean-linear-map, lem-uniqueness-of-the-total-derivative, def-total-derivative-in-euclidean-space, def-norm-and-normed-space, thm-complex-numbers-form-a-field, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Fix $m\ge1$, read $\mathbb C^m$ through
[[rem-complex-euclidean-space-dictionary]], and let $U\subseteq\mathbb C^m$ be
open and $a\in U$.

A map $L:\mathbb C^m\to\mathbb C$ is **$\mathbb C$-linear** when
$L(u+v)=L(u)+L(v)$ and $L(\lambda u)=\lambda L(u)$ for all $u,v\in\mathbb C^m$
and **all $\lambda\in\mathbb C$**, the vector-space operations being those of
[[def-vector-space]] over the field $\mathbb C$
([[thm-complex-numbers-form-a-field]]). Requiring the second clause only for real
$\lambda$ gives the strictly weaker notion of an $\mathbb R$-linear map
([[def-euclidean-linear-map]]) read through the dictionary.

A function $f:U\to\mathbb C$ is **complex differentiable at $a$** when there is a
$\mathbb C$-linear $L:\mathbb C^m\to\mathbb C$ with

$$f(a+h)=f(a)+L(h)+r(h),\qquad \frac{|r(h)|}{\lVert h\rVert}\longrightarrow0 \ \text{ as } h\to0,$$

the quotient being considered for $h\ne0$ with $a+h\in U$ and the norm being that
of the dictionary ([[def-norm-and-normed-space]]). The map $f$ is **holomorphic
on $U$** when it is complex differentiable at every point of $U$.

**Such an $L$ is unique**, so the notation $Df(a):=L$ is well posed. If $L_1$ and
$L_2$ both satisfy the condition, then $T=L_1-L_2$ is $\mathbb C$-linear and
$|T(h)|/\lVert h\rVert\to0$; fixing $h\ne0$ and taking $h$ replaced by $th$ for
real $t\in(0,1)$ small enough that $a+th\in U$, $\mathbb C$-linearity gives
$|T(h)|/\lVert h\rVert=|T(th)|/\lVert th\rVert$, whose limit as $t\to0$ is $0$;
so $T(h)=0$ for every $h$.

## Remarks

**No continuity and no local boundedness are built in.** The definition asks for
the linear approximation and nothing else. That a holomorphic function is
continuous is proved on this page rather than assumed, and the two theorems that
recover holomorphy from separate holomorphy — under continuity, and under local
boundedness — are theorems precisely because those properties are not part of the
definition. Defining holomorphy by local power-series representability or by the
$C^1$ Cauchy–Riemann system, as some treatments do, would make one or other of
them a tautology.

**At $m=1$ this is the published one-variable notion.** A $\mathbb C$-linear
$L:\mathbb C\to\mathbb C$ satisfies $L(h)=hL(1)$, so with $c=L(1)$ the condition
reads $f(a+h)=f(a)+ch+r(h)$ with $|r(h)|/|h|\to0$, which is exactly complex
differentiability at $a$ with $f'(a)=c$ in the sense of
[[def-complex-differentiability-holomorphic-and-entire]]; conversely that
condition produces the $\mathbb C$-linear map $h\mapsto f'(a)h$.

**Relation to the real total derivative.** Reading $f$ as a map
$\mathbb R^{2m}\to\mathbb R^2$ through the dictionary, the displayed condition is
the total-differentiability condition of
[[def-total-derivative-in-euclidean-space]] with the extra requirement that the
approximating linear map be $\mathbb C$-linear and not merely
$\mathbb R$-linear. So a complex differentiable $f$ is real totally
differentiable with $Df(a)$ as its real total derivative, and
[[lem-uniqueness-of-the-total-derivative]] says the two uses of the notation
cannot disagree. The standard basis vectors $e_k$ of
[[lem-standard-basis-of-f-n]] are the ones used to read off coordinates of $L$.
