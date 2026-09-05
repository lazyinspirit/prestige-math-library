---
id: ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values
kind: example
title: "The four Dini derivatives of x sin(1/x) at 0 take two distinct values"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-four-dini-derivatives-at-a-point, def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references: []
---

## Example

Let $f(0)=0$ and $f(x)=x\sin(1/x)$ for $x \neq 0$. Then

$$D^{+}f(0)=D^{-}f(0)=1, \qquad D_{+}f(0)=D_{-}f(0)=-1.$$

In particular the four Dini derivatives at $0$ are not all equal, so $f$ is not
differentiable at $0$.

## Facts & Assumptions

**Given:** The function $f(x)=x\sin(1/x)$ for $x \neq 0$ and $f(0)=0$.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 For $h \neq 0$, $\frac{f(h)-f(0)}{h} = \sin(1/h)$. Choose $h_n = \frac{1}{\pi/2 + 2\pi n}$ and $k_n = \frac{1}{3\pi/2 + 2\pi n}$, both positive. Then $\sin(1/h_n)=1$ and $\sin(1/k_n)=-1$, so the upper and lower right Dini derivatives are at least $1$ and at most $-1$ respectively. Since $|\sin(1/h)| \le 1$ always, we get $D^{+}f(0)=1$ and $D_{+}f(0)=-1$. [given, algebra]

2.1 Choose instead $h_n^- = -\frac{1}{3\pi/2 + 2\pi n}$ and $k_n^- = -\frac{1}{\pi/2 + 2\pi n}$. Then $\sin(1/h_n^-)=1$ and $\sin(1/k_n^-)=-1$, so the upper and lower left Dini derivatives are $D^{-}f(0)=1$ and $D_{-}f(0)=-1$. [step 1.1]

3.1 Therefore the four Dini derivatives are exactly the four stated values and are not all equal. [step 1.1, step 2.1] ∎
