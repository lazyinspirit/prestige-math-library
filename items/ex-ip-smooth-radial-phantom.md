---
id: ex-ip-smooth-radial-phantom
kind: example
title: A smooth radial phantom and its sinogram
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
aliases: []
deps:
  - def-ip-2d-radon-transform
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references: []
---

## Example

Define $\eta(u)=0$ for $u\le0$ and $\eta(u)=e^{-1/u}$ for $u>0$, and put $f(x)=\eta(1-|x|^2)$ on $\mathbb R^2$. This is a nonzero, smooth, compactly supported radial phantom. Its Euclidean Radon transform is independent of $\theta$ and is
$$Rf(\theta,s)=\begin{cases}\displaystyle\int_{-\sqrt{1-s^2}}^{\sqrt{1-s^2}}\eta(1-s^2-t^2)\,dt,&|s|<1,\\[1.2ex]0,&|s|\ge1.\end{cases}$$

## Facts & Assumptions

**Given:** The function $\eta$ and the radial phantom $f$ in the Example.

[F1] [[def-ip-2d-radon-transform]]: $Rf(\theta,s)=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt$ with $\theta\in S^1$ and $\theta^\perp=(-\theta_2,\theta_1)$.

[F2] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: continuous real functions on compact Jordan sets are Riemann integrable; use real and imaginary parts for complex integrands.

## Verification

1.1 For $u>0$, repeated differentiation gives $\eta^{(k)}(u)=P_k(1/u)e^{-1/u}$ for a polynomial $P_k$. For every integer $m\ge0$, $v^me^{-v}\to0$ as $v\to\infty$: if $v>0$, the exponential series gives $e^v\ge v^{m+1}/(m+1)!$. Hence each right derivative tends to $0$ at $u=0$, and the quotient $\eta^{(k)}(u)/u$ also tends to $0$ because it is again a polynomial in $1/u$ times $e^{-1/u}$. Induction on $k$ shows the zero extension is smooth on $\mathbb R$. [given, algebra]

2.1 The composition $f(x)=\eta(1-|x|^2)$ is smooth and radial; it vanishes whenever $|x|\ge1$ and is positive at $x=0$. Thus it is nonzero and has compact support in the closed unit disk. [given, step 1.1, algebra]

3.1 For every $\theta\in S^1$, orthogonality gives $|s\theta+t\theta^\perp|^2=s^2+t^2$, so [F1] yields $Rf(\theta,s)=\int_{\mathbb R}\eta(1-s^2-t^2)\,dt$. If $|s|\ge1$, then $1-s^2-t^2\le0$ for every $t$, so the line integral is $0$; if $|s|<1$, the integrand vanishes outside $|t|<\sqrt{1-s^2}$ and equals the exponential displayed in the Example inside that interval, with value $0$ at its endpoints because $\eta(0)=0$. It depends on $\theta$ only through the norm identity, so the sinogram is radial-data independent of orientation. The continuous compactly supported integrands are Riemann integrable by [F2]. [F1, F2, step 2.1] ∎
