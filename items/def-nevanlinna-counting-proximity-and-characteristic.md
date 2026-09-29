---
id: def-nevanlinna-counting-proximity-and-characteristic
kind: definition
title: "Counting, chordal proximity and characteristic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-meromorphic-function-complex-domain, thm-zero-order-factorization-holomorphic-function, thm-pole-characterizations, def-integrable-real-and-complex-functions-and-their-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§1–3"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §§1–2, 4, 6–7; Ch. 2 §§1, 5"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Definition

Let $f$ be meromorphic on $\mathbb C$ and not identically $\infty$. Fix
$a\in\widehat{\mathbb C}$ with $f\not\equiv a$. For $r>0$, let
$n(r,a;f)$ be the sum of the local multiplicities of the $a$-points in the
closed disc $|z|\le r$; when $a=\infty$, these are the poles with their pole
orders. Define

$$ N(r,a;f)=n(0,a;f)\log r+\int_0^r\frac{n(t,a;f)-n(0,a;f)}{t}\,dt. $$

For finite $w,a$, put

$$ \delta(w,a)=\frac{|w-a|}{\sqrt{1+|w|^2}\sqrt{1+|a|^2}},\qquad \delta(w,\infty)=\delta(\infty,w)=\frac{1}{\sqrt{1+|w|^2}},\qquad \delta(\infty,\infty)=0. $$

At a pole or a point where $f=a$, the expressions below are understood as
logarithmic singularities in the angular Lebesgue integral. Define the
proximity and characteristic by

$$ m(r,a;f)=\frac1{2\pi}\int_0^{2\pi}\log\frac1{\delta(f(re^{it}),a)}\,dt,\qquad T(r,f)=m(r,\infty;f)+N(r,\infty;f). $$

For stereographic projection of the unit sphere, $\delta$ is half the
Euclidean chord length, so the chordal sphere has diameter one. This definition
allows constant finite maps, but excludes their attained target from $n$ and
$m$.
