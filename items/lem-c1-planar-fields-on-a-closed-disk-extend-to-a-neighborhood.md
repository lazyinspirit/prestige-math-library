---
id: lem-c1-planar-fields-on-a-closed-disk-extend-to-a-neighborhood
kind: lemma
title: "C¹ planar fields on a closed disk extend to a neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-mean-value-theorem, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "Chapter 2 local ODE/dependence and §7.3 planar-flow setting; the finite-regularity and annulus constructions are supplied locally"
---

## Statement

Let $X$ be a planar vector field $C^1$ up to the boundary of the closed unit
disk $D$. It has a $C^1$ extension to an open neighborhood of $D$ whose value
and first derivative agree with $X$ on $D$, including its boundary. This is a
finite explicit extension, with no choice axiom.

## Facts & Assumptions

**Given:** A planar vector field $X$ on the closed unit disk $D$ whose components are $C^1$ up to the boundary, i.e. whose value and first partial derivatives extend continuously to $D$.

[F1] For composable differentiable maps the total derivative of the composite is the composite of the total derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F2] A function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some interior point $c$ ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Write every nonzero point in a collar of the unit circle uniquely as $q=(1+s)p$ with $p\in S^1$ and $s>-1$, fix once and for all a number $0<\varepsilon<1/2$, and define $E(q):=3X((1-s)p)-2X((1-2s)p)$ for $0<s<\varepsilon$ while $E(q):=X(q)$ for $|q|\le1$; this is an explicit finite formula with no choice. [given, construct]

2.1 On the unit circle, where $s=0$, the outer formula gives $3X(p)-2X(p)=X(p)$, so the two definitions agree there and $E$ is a well-defined map on $\{|q|<1+\varepsilon\}$. [step 1.1, algebra]

2.2 The inner formula is the restriction of $X$, which is $C^1$ up to the boundary; the outer formula is a composite of smooth scalar operations with the map $(s,p)\mapsto X((1-2s)p)$, and for $0<s<\varepsilon$ the points $(1-2s)p$ lie in the interior of $D$, where $X$ is $C^1$; hence [F1] shows that $E$ is $C^1$ on each of the two open regions $|q|<1$ and $1<|q|<1+\varepsilon$, with derivatives computed by the chain rule. [step 1.1, F1]

3.1 Parametrize the circle by $p=p(\theta)$. The chain rule gives $\partial_\theta E=3(1-s)DX_{(1-s)p}p\prime(\theta)-2(1-2s)DX_{(1-2s)p}p\prime(\theta)$ outside the disk. As $s\downarrow0$ this tends to $(3-2)DX_pp\prime(\theta)=DX_pp\prime(\theta)$, the inner tangential derivative. [step 2.2, F1]

3.2 The outer radial derivative is $\partial_sE=-3DX_{(1-s)p}p+4DX_{(1-2s)p}p$. As $s\downarrow0$ it tends to $(-3+4)DX_pp=DX_pp$, the inner radial derivative. Both limiting derivatives depend continuously on $p$. [step 2.2, F1]

4.1 The first partial derivatives of $E$ are therefore continuous across the unit circle, each side being $C^1$ with matching limits by step 3.1 and step 3.2; for $q$ on the circle and a small displacement $h$, applying [F2] on the segments on either side of the circle gives $|E(q+h)-E(q)-DE_qh|\le\sup_{0\le t\le1}\|DE_{q+th}-DE_q\|\,\|h\|$, and the supremum tends to $0$ because the partial derivatives are continuous at $q$, so $E$ is differentiable there with total derivative $DE_q$ and hence $C^1$ on $\{|q|<1+\varepsilon\}$. Since $E=X$ on $D$ and the derivative identity just established gives $DE=DX$ along the circle from the inner side, the value and first derivative of the extension agree with $X$ on the closed disk; the construction uses only the explicit formula of step 1.1 and finitely many evaluations. [F2, step 3.1, step 3.2] ∎
