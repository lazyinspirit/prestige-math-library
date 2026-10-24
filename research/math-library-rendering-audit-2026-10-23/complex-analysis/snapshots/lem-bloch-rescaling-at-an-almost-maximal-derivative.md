---
id: lem-bloch-rescaling-at-an-almost-maximal-derivative
kind: lemma
title: "Maximizing-point rescaling produces a normalized map with uniformly bounded derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-extreme-value-metric]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §7.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $f$ be holomorphic on $\mathbb D$ with $f'(0)\ne0$, let $R:=1/2$, and let
$\Phi(z):=(R-|z|)|f'(z)|$ on $|z|\le R$. If $z_0$ maximizes $\Phi$ on the closed
radius-$R$ disc and

$$r:=\frac{R-|z_0|}{2},\qquad g(w):=\frac{f(z_0+rw)-f(z_0)}{r f'(z_0)},$$

then $g$ is holomorphic on $\mathbb D$, satisfies $g(0)=0$ and $g'(0)=1$, obeys
$|g'(w)|\le2$ for $|w|<1$, and

$$r|f'(z_0)|\ge\frac{R|f'(0)|}{2}.$$

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb C$ with $f'(0)\ne0$, the radius $R=1/2$, and a maximizer $z_0$ of $\Phi(z)=(R-|z|)|f'(z)|$ on $|z|\le R$.

[L1] A continuous real-valued function on a nonempty compact metric space has a maximum ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 The closed disc $|z|\le R$ is compact, and $z\mapsto |f'(z)|$ is continuous, so [L1] justifies the maximizing point $z_0$. Since $|z_0|+r=(R+|z_0|)/2<R$, the affine disc $z_0+r\mathbb D$ lies in $\mathbb D$, so $g$ is holomorphic on $\mathbb D$ and direct differentiation gives $g(0)=0$, $g'(0)=1$. [L1, given, algebra]

2.1 If $|w|<1$, then $|z_0+rw|\le |z_0|+r<R$. Maximality of $z_0$ yields $\bigl(R-|z_0+rw|\bigr)|f'(z_0+rw)|\le\bigl(R-|z_0|\bigr)|f'(z_0)|=2r|f'(z_0)|$. Because $R-|z_0+rw|\ge R-|z_0|-r=r$, dividing gives $|g'(w)|=|f'(z_0+rw)|/|f'(z_0)|\le2$. [step 1.1, algebra]

3.1 Since $0$ lies in the maximizing disc, maximality also gives $R|f'(0)|\le(R-|z_0|)|f'(z_0)|=2r|f'(z_0)|$, which is the claimed lower bound. [given, step 1.1, algebra] ∎
