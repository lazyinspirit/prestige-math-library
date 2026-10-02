---
id: cex-poisson-integral-on-the-half-space-is-not-unique-without-growth-control
kind: counterexample
title: Zero half-space trace does not ensure uniqueness without growth control
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-laplacian-of-a-c2-function]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, boundedness hypotheses in the half-space Dirichlet problem"
---

## Statement refuted

For $n\ge2$ the normal coordinate $u(x',t)=t$ is harmonic on $H=\{t>0\}$, continuous on its closure, and zero on the boundary plane, while $u$ is nonzero and unbounded. Hence the zero Dirichlet trace has at least the solutions $0$ and $t$ if boundedness or another valid growth condition is omitted.

## Facts & Assumptions

**Given:** an integer $n\ge2$ and the open upper half-space $H=\{x=(x',t)\in\mathbb R^{n-1}\times\mathbb R:t>0\}$.

[F1] For a $C^2$ function $f$ on an open set, $\Delta f=\sum_{i<n}\partial_i\partial_if$, and $f$ is called harmonic when $\Delta f=0$ ([[def-laplacian-of-a-c2-function]]).

## Counterexample

**Proof technique:** direct.

1.1 Define $u:H\to\mathbb R$ by $u(x',t):=t$, i.e. $u(x)=x_n$ with $x_n$ the last coordinate. Its first partial derivatives are $\partial_iu\equiv\delta_{in}$ and its second partial derivatives all vanish identically, so $\Delta u=\sum_i\partial_i\partial_iu=0$ on the open half-space $H$; hence $u$ is harmonic by [F1]. [given, F1, algebra]

2.1 The same formula defines a continuous extension of $u$ to the closed half-space $\overline H=\{x:x_n\ge0\}$, and on the boundary plane $\partial H=\{x_n=0\}$ this extension has the value $0$. The zero function $0$ is harmonic on $H$ with the same zero boundary values. [step 1.1, F1, algebra]

3.1 The two solutions differ and the second is unbounded: $u(e_n)=1\ne0=0(e_n)$ at the point $e_n=(0,1)\in H$, and along the vertical ray $\{se_n:s>0\}$ the value $u(se_n)=s$ tends to $+\infty$, so $\sup_H|u|=+\infty$ while $\sup_H|0|=0$. Thus $0$ and $u$ are two distinct solutions of the same zero Dirichlet problem on $H$ once boundedness --- or any other growth restriction excluding linear growth --- is dropped. [step 1.1, step 2.1, algebra]

4.1 Steps 1.1, 2.1 and 3.1 exhibit a nonzero unbounded harmonic function with the same continuous zero boundary trace as the zero function on the half-space; uniqueness of the half-space Dirichlet problem therefore requires a growth condition such as boundedness, and this witness is eliminated by it. The computation uses no choice principle. [step 1.1, step 2.1, step 3.1, F1] ∎
