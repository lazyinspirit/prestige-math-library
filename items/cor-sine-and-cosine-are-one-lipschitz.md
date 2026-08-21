---
id: cor-sine-and-cosine-are-one-lipschitz
kind: corollary
title: "Sine and cosine are $1$-Lipschitz on $\\mathbb{R}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-bounded-derivative-implies-lipschitz,
       thm-sine-and-cosine-derivatives,
       cor-differentiable-implies-continuous,
       cor-trigonometric-parity-and-pythagorean-identity]
justified_by: []
aliases: []
landmark: true
short: "$|\\sin u-\\sin v|,|\\cos u-\\cos v|\\le|u-v|$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, equation (2)"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

For all real $u,v$,

$$|\sin u-\sin v|\le|u-v|,$$

and

$$|\cos u-\cos v|\le|u-v|.$$

Thus sine and cosine are Lipschitz functions on $\mathbb R$, each with
Lipschitz constant $1$.

## Facts & Assumptions

**Given:** Real numbers $u,v$ and the functions sine and cosine on $\mathbb R$.

[L1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]).

[L2] For every real $x$, $|\sin x|\le1$ and $|\cos x|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] A function differentiable on a set is continuous at every point of that set ([[cor-differentiable-implies-continuous]]).

[L4] If $I\subseteq\mathbb R$ is order-convex, $f:I\to\mathbb R$ is continuous on $I$ and differentiable at every interior point, and $|f'(x)|\le M$ there for some $M\ge0$, then $|f(x)-f(y)|\le M|x-y|$ for all $x,y\in I$ ([[cor-bounded-derivative-implies-lipschitz]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $|\sin' x|=|\cos x|\le1$ and $|\cos' x|=|\sin x|\le1$ for every real $x$; both functions are continuous on $\mathbb R$ by [L3]. [L1, L2, L3]

2.1 Apply [L4] to sine on the order-convex set $\mathbb R$ with $M=1$: $|\sin u-\sin v|\le|u-v|$. [step 1.1, L4]

3.1 Apply [L4] to cosine on the same set with $M=1$: $|\cos u-\cos v|\le|u-v|$. [step 1.1, L4] ∎
