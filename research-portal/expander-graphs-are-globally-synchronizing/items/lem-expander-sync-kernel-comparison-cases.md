---
id: lem-expander-sync-kernel-comparison-cases
title: Pointwise comparisons used in kernel stability
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-kernel
  - def-expander-sync-graph-notation
  - def-expander-prereq-phase-torus
  - def-expander-sync-energy
  - def-expander-sync-states
  - prop-expander-sync-stable-hessian
  - def-expander-prereq-phasor-calculus
  - prop-expander-prereq-ordered-angle-inequalities
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:def-countable-choice
  - math:thm-sine-and-cosine-addition-formulas
dependency_roles:
  def-expander-sync-kernel: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-sync-energy: mathematical-premise
  def-expander-sync-states: mathematical-premise
  prop-expander-sync-stable-hessian: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-sine-and-cosine-addition-formulas: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 17, proof of Lemma 2.8, Cases 1–3
      statement: The proof compares the kernel to the signed sine of the phase
        difference in the first two cases and evaluates the kernel sum using the
        local order parameter in the third case.
      hypotheses: The article's finite undirected graph model and stable phase state,
        with phase representatives in $(-\pi,\pi]$.
      reading_limits: The frozen extraction and its attribution were inspected. This
        reference attributes the article's cases; it is not a premise of the
        local proof.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 8
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set, self-loops allowed, and symmetric binary adjacency matrix $A$. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of the energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{x,y}(1-\cos(\theta_x-\theta_y))$, and choose representatives $\theta_x\in(-\pi,\pi]$. Define $K(\alpha,\beta)=\sin(|\alpha|-\min\{|\beta|,\pi/2\})$. For each $y$, let $r_y=\sum_x A_{x,y}\cos(\theta_x-\theta_y)$.

For every $x,y\in V$: if $0\le\theta_y\le\pi/2$, then $K(\theta_x,\theta_y)\ge\sin(\theta_x-\theta_y)$; if $-\pi/2\le\theta_y\le0$, then $K(\theta_x,\theta_y)\ge-\sin(\theta_x-\theta_y)$. If $|\theta_y|\ge\pi/2$, then $K(\theta_x,\theta_y)=-\cos\theta_x$ and $\sum_x A_{x,y}K(\theta_x,\theta_y)=-r_y\operatorname{Re}(e^{-i\theta_y})\ge0$.

## Facts & Assumptions

[F1] The kernel has branches $K(\alpha,\beta)=\sin(|\alpha|-|\beta|)$ for $|\beta|\le\pi/2$ and $K(\alpha,\beta)=-\cos\alpha$ for $|\beta|\ge\pi/2$ ([[def-expander-sync-kernel]]).

[F2] Sine is nonnegative on $[0,\pi]$. Sine is odd, cosine is even, and $\cos t=\sin(\pi/2-t)$ ([[prop-expander-prereq-ordered-angle-inequalities]], [[math:cor-trigonometric-parity-and-pythagorean-identity]], [[math:thm-quarter-turn-values-and-shift-formulas]]).

[F3] For real $u,v$, $e^{i(u-v)}=e^{iu}e^{-iv}=\cos(u-v)+i\sin(u-v)$, and real parts distribute over finite sums ([[def-expander-prereq-phasor-calculus]]).

[F4] Under countable choice, for the graph and stable state in the Statement, $r_y\ge0$ and $\sum_x A_{x,y}e^{i\theta_x}=r_ye^{i\theta_y}$ ([[math:def-countable-choice]], [[prop-expander-sync-stable-hessian]]). The graph, phase, energy and stable-state conventions are those of [[def-expander-sync-graph-notation]], [[def-expander-prereq-phase-torus]], [[def-expander-sync-energy]] and [[def-expander-sync-states]].

[F5] For all real $u,v$, $\sin(u+v)=\sin u\cos v+\cos u\sin v$ ([[math:thm-sine-and-cosine-addition-formulas]]).

## Proof

**Given:** The graph, stable state, representatives and kernel in the Statement, under countable choice.

**Goal:** Prove the two pointwise inequalities and the branch identity and nonnegative sum in the third case.

1.1 Write $a=\theta_x$ and $b=\theta_y$. If $0\le b\le\pi/2$ and $a\ge0$, [F1] gives $K(a,b)=\sin(a-b)$. If instead $a<0$, put $t=|a|\in[0,\pi]$. By [F1], parity and the sine addition formula in [F5], $K(a,b)-\sin(a-b)=\sin(t-b)+\sin(t+b)=2\sin t\cos b\ge0$. Here $\sin t\ge0$ by [F2], and $\cos b=\sin(\pi/2-b)\ge0$ because $\pi/2-b\in[0,\pi]$. This proves the first comparison. [F1, F2, F5, algebra]

2.1 If $-\pi/2\le b\le0$ and $a\le0$, [F1] and oddness give $K(a,b)=-\sin(a-b)$. If $a>0$, put $s=|b|\in[0,\pi/2]$. By [F5], $K(a,b)+\sin(a-b)=\sin(a-s)+\sin(a+s)=2\sin a\cos s\ge0$, by the same sign argument as in step 1.1. This proves the second comparison, including the endpoints. [F1, F2, F5, step 1.1, algebra]

3.1 If $|b|\ge\pi/2$, [F1] gives $K(a,b)=-\cos a$. Taking the real part of the phasor identity in [F4] and using [F3] yields $\sum_x A_{x,y}\cos\theta_x=r_y\cos\theta_y$. Thus the kernel sum is $-r_y\cos\theta_y=-r_y\operatorname{Re}(e^{-i\theta_y})$. Since $|\theta_y|\in[\pi/2,\pi]$, cosine is nonpositive there: by [F2], $\cos|\theta_y|=-\sin(|\theta_y|-\pi/2)\le0$, and cosine is even. Together with $r_y\ge0$, this proves the nonnegativity and completes the proof. [F1, F2, F3, F4, algebra] ∎

## Source notes

The three comparisons are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 17, proof of Lemma 2.8. The proof above uses the stated mathematical suppliers.
