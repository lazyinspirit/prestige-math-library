---
id: thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
kind: theorem
title: "$[t]\\mapsto(\\cos 2\\pi t,\\sin 2\\pi t)$ is a homeomorphism from $\\mathbb R/\\mathbb Z$ to the unit circle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, prop-real-line-mod-integers-is-compact-and-path-connected, thm-quotient-universal-property, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes, thm-componentwise-limits-and-continuity, def-subspace-topology-top, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-parametrize-the-unit-circle, def-pi-via-first-positive-cosine-zero, lem-integer-part, thm-compactness-under-continuous-maps, lem-metrics-on-rn, cor-metrizability-and-first-countability-are-hereditary, thm-metric-hausdorff-separation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Section 3.4, Proposition 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

Let

$$C=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$$

with the Euclidean subspace topology. The function

$$h:\mathbb R/\mathbb Z\longrightarrow C,\qquad h([t])=(\cos 2\pi t,\sin 2\pi t),$$

is a homeomorphism. Thus $[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from $\mathbb R/\mathbb Z$ to the unit circle and sends $[0]$ to $(1,0)$.

## Facts & Assumptions

**Given:** The quotient projection $p:\mathbb R\to\mathbb R/\mathbb Z$ and the unit circle $C\subseteq\mathbb R^2$.

[L1] If $q:X\to Y$ is a quotient map and a continuous function $f:X\to W$ is constant on every fibre of $q$, then there is exactly one continuous function $\bar f:Y\to W$ with $\bar f\circ q=f$ ([[thm-quotient-universal-property]]).

[L2] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L3] A real function differentiable on a set is continuous at every point of that set ([[cor-differentiable-implies-continuous]]).

[L4] If $m\ge1$, $(X,d)$ is a metric space, $A\subseteq X$, and $f:A\to\mathbb R^m$, then $f$ is continuous exactly when all its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]]).

[L5] Both sine and cosine have period $2\pi$, and no smaller positive number is a common period ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L6] The map $s\mapsto(\cos s,\sin s)$ is a bijection from $[0,2\pi)$ onto $C$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[L7] $\mathbb R/\mathbb Z$ is compact and path-connected ([[prop-real-line-mod-integers-is-compact-and-path-connected]]).

[L8] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

[L9] Every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[L10] Every constant real-valued function and the identity are continuous, and finite sums, products, and scalar multiples of continuous functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L11] The quotient projection $p:\mathbb R\to\mathbb R/\mathbb Z$ induces the quotient topology and satisfies $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$ ([[def-circle-as-real-line-mod-integers]]).

[L12] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L13] The Euclidean distance $d_2$ is a metric on $\mathbb R^2$ ([[lem-metrics-on-rn]]).

[L14] A subspace of a metrizable space is metrizable by the restricted metric ([[cor-metrizability-and-first-countability-are-hereditary]]).

[L15] A map into a subspace is continuous if and only if its composite with the inclusion into the ambient space is continuous ([[def-subspace-topology-top]]).

[L16] $\pi>0$ and $\pi/2$ is the smallest positive zero of cosine ([[def-pi-via-first-positive-cosine-zero]]).

[L17] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 Define $F(t)=(\cos 2\pi t,\sin 2\pi t)$. By [L2] and [L3], sine and cosine are continuous; by [L10], $t\mapsto2\pi t$ is continuous; hence their composites are continuous by [L17], and [L4] makes $F:\mathbb R\to\mathbb R^2$ continuous. For $t=m+r$ with $m=\lfloor t\rfloor$ and $0\le r<1$ from [L12], periodicity [L5] gives $F(t)=F(r)$, while [L6] applied to $2\pi r\in[0,2\pi)$, using [L16], shows $F(r)\in C$; [L15] therefore makes $F:\mathbb R\to C$ continuous. Finally [L5] gives $F(t+n)=F(t)$ for every integer $n$. [L2, L3, L4, L5, L6, L10, L12, L15, L16, L17]

2.1 By [L11], the fibres of $p$ are precisely the integer-translation classes, so step 1.1 says that $F$ is constant on every fibre. The quotient universal property [L1] gives a unique continuous $h:\mathbb R/\mathbb Z\to C$ satisfying $h\circ p=F$, namely $h([t])=F(t)$. [step 1.1, L1, L11]

3.1 To prove surjectivity, let $z\in C$. By [L6], $z=(\cos s,\sin s)$ for a unique $s\in[0,2\pi)$; since [L16] gives $2\pi>0$, the real $r=s/(2\pi)$ lies in $[0,1)$ and $h([r])=z$. For injectivity, suppose $h([x])=h([y])$. Write $x=m+r$ and $y=n+q$ with $m,n\in\mathbb Z$ and $r,q\in[0,1)$ using [L12]. Periodicity [L5] gives $F(r)=F(q)$, and the injectivity in [L6] on $[0,2\pi)$ gives $2\pi r=2\pi q$, hence $r=q$. Thus $x-y=m-n\in\mathbb Z$, so [L11] gives $[x]=[y]$. Therefore $h$ is bijective. [step 2.1, L5, L6, L11, L12, L16, algebra]

4.1 The source is compact by [L7]. By [L13], $\mathbb R^2$ is metrizable; by [L14], its subspace $C$ is metrizable, and [L9] makes $C$ Hausdorff. Thus the continuous bijection from steps 2.1 and 3.1 is a homeomorphism by [L8]. Finally [L2] gives $h([0])=(\cos0,\sin0)=(1,0)$. [step 2.1, step 3.1, L2, L7, L8, L9, L13, L14] ∎
