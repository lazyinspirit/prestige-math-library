---
id: lem-brouwer-fixed-point-for-closed-boxes
kind: lemma
title: Brouwer fixed points exist on every nonempty closed box
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-brouwer-fixed-point-theorem]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Let $d\ge0$ and let $X=\prod_{j=1}^d[a_j,b_j]\subset\mathbb R^d$ be a nonempty closed box, allowing $a_j=b_j$. Every continuous map $f:X\to X$ has a fixed point.

## Facts & Assumptions

**Given:** $d$, a nonempty closed box $X$ as stated, and a continuous $f:X\to X$.

[F1] Every continuous self-map of the closed Euclidean unit ball $D^m$ has a fixed point for every $m\ge0$ ([[thm-brouwer-fixed-point-theorem]]).

## Proof

1.1 Let $J=\{j:a_j<b_j\}$ and $m=|J|$. If $m=0$, $X$ is a singleton and its sole point is fixed. If $m>0$, deleting the fixed coordinates identifies $X$ with a box $X_J$ whose side lengths are all positive. The coordinatewise affine map $T:[-1,1]^m\to X_J$ is a homeomorphism. [given, choose, construct]

2.1 For $u\in D^m\setminus\{0\}$ define $h(u)=(\|u\|_2/\|u\|_\infty)u$ and set $h(0)=0$. Then $\|h(u)\|_\infty=\|u\|_2\le1$, so $h(D^m)\subseteq[-1,1]^m$. For $y\ne0$ in the cube define $h^{-1}(y)=(\|y\|_\infty/\|y\|_2)y$ and set $h^{-1}(0)=0$; its Euclidean norm is $\|y\|_\infty\le1$, and direct substitution shows the formulas are inverse. Both maps are continuous away from zero. At zero, $\|h(u)\|_2\le\sqrt m\|u\|_2$ and $\|h^{-1}(y)\|_2=\|y\|_\infty\le\|y\|_2$, so both are continuous there. Thus $h$ is a homeomorphism between the ball and cube. [step 1.1, algebra]

3.1 The map $g=(T\circ h)^{-1}\circ f_J\circ(T\circ h):D^m\to D^m$ is continuous, where $f_J$ is the restriction of $f$ to the non-fixed coordinates after identifying the fixed coordinates. By [F1], $g$ has a fixed point $u$; then $(T\circ h)(u)$ is fixed by $f_J$, and restoring the fixed coordinates gives a fixed point of $f$ in $X$. [F1, step 1.1, step 2.1, construct] ∎

