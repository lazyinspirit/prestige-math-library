---
id: def-real-power-series-and-radius-of-convergence
kind: definition
title: "A real power series about a centre, its interval of convergence, and its radius in $[0,+\\infty]$"
status: published
origin: session
deps: [def-series, def-absolute-and-conditional-convergence, def-integer-power, def-extended-reals, lem-extended-reals-complete, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Definition

Let $(a_n)_{n\in\mathbb N}$ be a sequence of reals and let $c\in\mathbb R$. The **real power series about the centre $c$ with coefficients $(a_n)$** is the series

$$\sum_{n=0}^{\infty}a_n(x-c)^n$$

at a real argument $x$, where powers are those of [[def-integer-power]] and convergence is that of [[def-series]]. Its value, when the series converges, is called its **sum at $x$**. At $x=c$ the series always converges to $a_0$: the term with $n=0$ is $a_0$ because $0^0=1$, and every later term is $0$.

For $r\ge0$ let $P(r)$ mean that the series converges absolutely at every real $x$ with $|x-c|<r$. The set of such $r$ contains $0$, since the condition $|x-c|<0$ has no solutions. The **radius of convergence** is

$$R:=\sup_{\overline{\mathbb R}}\{r\in\mathbb R:r\ge0\text{ and }P(r)\}\in[0,+\infty],$$

where the supremum is taken in the extended real line of [[def-extended-reals]]. Thus $R$ may be a nonnegative real or $+\infty$, but never $-\infty$.

The **open interval determined by the radius** is

$$I_R:=\{x\in\mathbb R:|x-c|<R\}.$$

When $0<R<+\infty$ this is $(c-R,c+R)$, when $R=+\infty$ it is all of $\mathbb R$, and when $R=0$ it is empty. The centre still carries the convergent value $a_0$ in the last case. No endpoint is included in $I_R$; convergence at $c-R$ or $c+R$, when these are real, is a separate question.

## Remarks

The radius is extended-valued, but no undefined arithmetic in $\overline{\mathbb R}$ is used. Expressions such as $c\pm R$ are written only when $R$ is finite. The reciprocal conventions used in Cauchy-Hadamard are stated explicitly in [[thm-cauchy-hadamard-for-real-power-series]].
