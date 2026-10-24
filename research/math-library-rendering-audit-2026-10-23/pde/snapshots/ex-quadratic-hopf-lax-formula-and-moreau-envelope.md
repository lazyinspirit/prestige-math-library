---
id: ex-quadratic-hopf-lax-formula-and-moreau-envelope
kind: example
title: The quadratic Hopf--Lax formula as an infimal convolution
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-legendre-transform-of-a-hamiltonian
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Example 2.3, printed p. 62 (quadratic conjugate), and Example 2.4, printed p. 68 (quadratic Hopf--Lax). The separate unbounded quadratic datum is evaluated here.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $n\ge1$ and $H(p)=\tfrac12|p|^2$. Its Legendre transform is
$L(v)=\tfrac12|v|^2$. For every bounded uniformly continuous
$u_0:\mathbb R^n\to\mathbb R$, the Hopf--Lax operator of
[[def-hopf-lax-operator]] is, for $t>0$,
$$Q_tu_0(x)=\inf_{y\in\mathbb R^n}\Bigl\{u_0(y)+\frac{|x-y|^2}{2t}\Bigr\},$$
the infimal convolution with the quadratic kernel $q_t(z)=|z|^2/(2t)$. The
infimum is attained, and for every minimiser $y$ the Euler relation
$Du_0(y)=(x-y)/t$ holds whenever $u_0$ is differentiable at $y$
([[lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points]]).
Separately, the quadratic datum $w_0(y)=\tfrac12|y|^2$ is unbounded and so is
outside the datum class in [[def-hopf-lax-operator]]. Its algebraic infimal
convolution
$$I_t(x):=\inf_{y\in\mathbb R^n}\Bigl\{\tfrac12|y|^2+\frac{|x-y|^2}{2t}\Bigr\}$$
has the unique minimiser $y=x/(1+t)$ and value $I_t(x)=|x|^2/(2(1+t))$; this
separate calculation is the Moreau envelope of the quadratic function and does
not apply the bounded-data Hopf--Lax theorem to $w_0$.

## Verification

**Given:** The Hamiltonian $H(p)=\tfrac12|p|^2$ on $\mathbb R^n$, its Legendre transform $L$, a bounded uniformly continuous datum $u_0$, the operators $Q_t$ of [[def-hopf-lax-operator]], and the unbounded quadratic datum $w_0(y)=\tfrac12|y|^2$.

[F1] $L(v)=\sup_{p\in\mathbb R^n}(p\cdot v-H(p))$, the supremum taken in $\overline{\mathbb R}$ ([[def-legendre-transform-of-a-hamiltonian]]).

[F2] For $t>0$, $Q_tu_0(x)=\inf_{y}\{u_0(y)+tL((x-y)/t)\}$, and under convexity and superlinearity of $H$ the infimum is finite and attained for bounded uniformly continuous $u_0$ ([[def-hopf-lax-operator]], [[lem-hopf-lax-infima-localise]]).

[F3] At a minimiser $y$ of $u_0(y)+tL((x-y)/t)$, if $u_0$ is differentiable at $y$ and $L$ at $(x-y)/t$, then $Du_0(y)=DL((x-y)/t)$ ([[lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points]]).

**Proof technique:** compute the quadratic conjugate, use the in-class Hopf--Lax suppliers only for bounded uniformly continuous data, and evaluate the separate quadratic infimum by completing the square.

1.1 The conjugate of the quadratic Hamiltonian. Fix $v\in\mathbb R^n$ and complete the square: $p\cdot v-\tfrac12|p|^2=\tfrac12|v|^2-\tfrac12|p-v|^2$, whose supremum over $p$ is attained at $p=v$ with value $\tfrac12|v|^2$. Hence $L(v)=\tfrac12|v|^2$ by [F1]; in particular $L$ is finite, convex and superlinear. [F1, algebra]

2.1 The formula, attainment and the Euler relation. Substituting $L(v)=|v|^2/2$ into the definition of $Q_t$ gives the displayed infimal convolution. The infimum is attained by [F2], and for every minimiser $y$ the conditional Euler relation $Du_0(y)=DL((x-y)/t)=(x-y)/t$ is [F3]; both suppliers use only the bounded uniformly continuous data class. [step 1.1, F2, F3, algebra]

3.1 The separate quadratic infimum. For $t>0$ and all $x,y$, completing the square gives $\frac12|y|^2+\frac{|x-y|^2}{2t}=\frac{1+t}{2t}|y-\frac{x}{1+t}|^2+\frac{|x|^2}{2(1+t)}$. Since the coefficient $(1+t)/(2t)$ is positive, the infimum over $y$ is attained uniquely at $y=x/(1+t)$ with value $|x|^2/(2(1+t))$. This is a direct computation for the unbounded datum $w_0$ and makes no assertion that $w_0$ lies in the domain of the Hopf--Lax operator. [step 1.1, algebra] ∎

## Remarks

- **What is and is not applied.** The bounded-data statements are applied
  only to bounded uniformly continuous $u_0$; the quadratic datum is treated
  by the displayed algebraic computation, which is the Moreau envelope of
  $\tfrac12|\cdot|^2$ and does not claim a Hopf--Lax solution for it.
