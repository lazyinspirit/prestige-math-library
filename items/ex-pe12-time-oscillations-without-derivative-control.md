---
id: ex-pe12-time-oscillations-without-derivative-control
kind: example
title: Time oscillations defeat compactness without derivative control
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-pe12-gelfand-triple ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Statement

Let $(V,H,J)$ be a Banach evolution triple, let $T>0$, and fix
$0\ne v\in V$. For each positive integer $n$, define
$$u_n(t)=\sin(2\pi nt/T)\,v.$$
Then $(u_n)$ is bounded in $L^p(0,T;V)$ for every $1\le p<\infty$, but it
has no strongly convergent subsequence in $L^2(0,T;H)$. Its time-derivative
norm grows linearly in $n$ in every $L^q(0,T;V^*)$, $1\le q\le\infty$.

## Facts & Assumptions

**Given:** The evolution triple, $T>0$, $0\ne v\in V$, and the family
defined in the statement.

[F1] The canonical embedding $i:V\to H$ is injective, and $J(iv)$ acts on
$w\in V$ by $(iv,iw)_H$
([[def-pe12-gelfand-triple]]).

## Proof

1.1 Since each interval $[0,T]$ contains exactly $n$ periods of $\sin(2\pi nt/T)$, a change of variable gives $$\|u_n\|_{L^p(0,T;V)}^p =\|v\|_V^p\frac{T}{2\pi} \int_0^{2\pi}|\sin s|^p\,ds,$$ independent of $n$. Thus the family is uniformly bounded in each stated $L^p(V)$. [given, algebra]

1.2 For distinct positive integers $n\ne m$, sine orthogonality over $[0,T]$ gives $$\|u_n-u_m\|_{L^2(0,T;H)}^2 =\|iv\|_H^2\int_0^T (\sin(2\pi nt/T)-\sin(2\pi mt/T))^2\,dt =T\|iv\|_H^2>0,$$ where positivity follows from injectivity in [F1]. Every two distinct members therefore stay a fixed positive distance apart, so no subsequence is Cauchy and none converges strongly in the complete space $L^2(0,T;H)$. [F1, given, algebra]

2.1 Scalar integration by parts against each $w\in V$ shows that the pivot weak derivative is $u_n'(t)=(2\pi n/T)\cos(2\pi nt/T)\,J(iv)$. Its $L^q(V^*)$ norm is $$(2\pi n/T)\|J(iv)\|_{V^*} \left(\frac{T}{2\pi}\int_0^{2\pi}|\cos s|^q\,ds\right)^{1/q}$$ for finite $q$, and $(2\pi n/T)\|J(iv)\|_{V^*}$ for $q=\infty$. Since $\langle J(iv),v\rangle=\|iv\|_H^2>0$ by [F1], these norms grow linearly in $n$. Hence no positive exponent derivative bound is present. [F1, step 1.1, given, algebra] ∎