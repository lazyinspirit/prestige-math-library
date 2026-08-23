---
id: cex-circular-curve-defeats-vector-valued-mean-value-equality
kind: counterexample
title: "The circular curve defeats the equality form of the vector-valued mean value theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sine-and-cosine-derivatives,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       def-vector-valued-derivative-and-integral,
       def-vector-valued-functions-limits-and-continuity,
       thm-componentwise-limits-and-continuity,
       cor-differentiable-implies-continuous,
       def-p-norms-on-rn,
       def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
cx_machine_verified: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 8.3 and 11.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, section 2.1 Differentiation of real-valued functions"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html"
    - title: "W. S. Hall and M. L. Newell, The Mean Value Theorem for Vector Valued Functions: A Simple Proof"
      url: "https://www.maths.tcd.ie/pub/ims/news07/news_all07.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $m\in\mathbb N$ with $m\ge1$, if $a<b$ are real, and if $f:[a,b]\to\mathbb R^m$ is continuous on $[a,b]$ and
differentiable on $(a,b)$, then there is some $\xi\in(a,b)$ such that

$$f(b)-f(a)=(b-a)f'(\xi).$$

The claim is false already for $m=2$. The curve

$$f:[0,2\pi]\longrightarrow\mathbb R^2,\qquad f(t)=(\cos t,\sin t),$$

is continuous on its interval and differentiable in its interior, its endpoint
increment is zero, and $\lVert f'(t)\rVert_2=1$ for every $t\in(0,2\pi)$. Hence no
$\xi\in(0,2\pi)$ satisfies the displayed equality.

## Facts & Assumptions

**Given:** The curve $f(t)=(\cos t,\sin t)$ on $[0,2\pi]$.

[L1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$; also $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L2] Let $m\in\mathbb N$ with $m\ge1$, let $A\subseteq\mathbb R$, and let $c\in A$ be a limit point of $A$. A map $g:A\to\mathbb R^m$ is differentiable at $c$ if and only if every component is differentiable there, and its derivative then has the component derivatives as coordinates ([[def-vector-valued-derivative-and-integral]]).

[L3] Let $m\in\mathbb N$ with $m\ge1$, let $A$ be a subspace of a metric space, and let $g:A\to\mathbb R^m$. The map $g$ is continuous at a point of $A$ if and only if every component is continuous there ([[thm-componentwise-limits-and-continuity]]).

[L4] For a real-valued function on $A\subseteq\mathbb R$, differentiability at a limit point $c\in A$ implies continuity there ([[cor-differentiable-implies-continuous]]).

[L5] For every real $t$, $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L6] Both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L7] On $\mathbb R^2$, $\lVert(u,v)\rVert_2=\sqrt{u^2+v^2}$ ([[def-p-norms-on-rn]]).

[L8] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] and [L4], both components of $f$ are continuous on $[0,2\pi]$, so $f$ is continuous there by [L3]. [L1, L3, L4]

1.2 Periodicity and the values at zero give $f(2\pi)=f(0)=(1,0)$, so $f(2\pi)-f(0)=(0,0)$. [L1, L6, algebra]

1.3 Componentwise differentiation gives $f'(t)=(-\sin t,\cos t)$ for every $t\in(0,2\pi)$. [L1, L2]

1.4 Since $\pi>0$, the scalar $2\pi$ is nonzero. [L8, algebra]

2.1 For every $t\in(0,2\pi)$, $\lVert f'(t)\rVert_2=\sqrt{\sin^2t+\cos^2t}=1$. [step 1.3, L5, L7, algebra]

3.1 If the refuted equality held at some $\xi\in(0,2\pi)$, step 1.2 would give $(0,0)=2\pi f'(\xi)$; step 1.4 would then force $f'(\xi)=(0,0)$, contradicting step 2.1. Thus no such $\xi$ exists. [step 1.2, step 2.1, step 1.4, algebra] ∎

## Remarks

The obstruction is geometric: the curve returns to its initial point while its velocity never vanishes. The scalar mean value theorem is not weakened by this example; the failure is the demand that one point encode a vector increment.
