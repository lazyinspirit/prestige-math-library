---
id: thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane
kind: theorem
title: "Nonprincipal Dirichlet L-functions are holomorphic on Re s greater than 0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-l-function, lem-nonprincipal-dirichlet-character-partial-sums, thm-dirichlet-series-summatory-integral]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.5"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Proposition 18.20"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $\chi\ne\chi_0$ is a Dirichlet character, then the Dirichlet series
$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ converges for every $\operatorname{Re}s>0$
and defines a holomorphic function there.

## Facts & Assumptions

**Given:** A nonprincipal Dirichlet character $\chi$.

[L1] The partial sums $A(x)=\sum_{1\le n\le x}\chi(n)$ satisfy $A(x)=O(1)$
([[lem-nonprincipal-dirichlet-character-partial-sums]]).

[L2] If $A(x)=O(x^\theta)$, then
$\sum_{n\ge1}a_n n^{-s}=s\int_1^\infty A(x)x^{-s-1}\,dx$ for $\operatorname{Re}s>\theta$
([[thm-dirichlet-series-summatory-integral]]).

[L3] The Dirichlet $L$-function is the Dirichlet series
$\sum_{n\ge1}\chi(n)n^{-s}$ ([[def-dirichlet-l-function]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the coefficients $a_n=\chi(n)$ with $\theta=0$. By [L1], the summatory function is bounded, so for every $\operatorname{Re}s>0$ one has $L(s,\chi)=s\int_1^\infty A(x)x^{-s-1}\,dx$, and the integral converges absolutely and locally uniformly on each half-plane $\operatorname{Re}s\ge\varepsilon>0$ because $A(x)=O(1)$ and $x^{-s-1}=O(x^{-\varepsilon-1})$. [L1, L2, L3, given, algebra]

2.1 A locally uniformly convergent parameter integral of holomorphic integrands is holomorphic in the parameter. Hence the right-hand side of step 1.1 defines a holomorphic function on $\operatorname{Re}s>0$, and on the smaller half-plane $\operatorname{Re}s>1$ it agrees with the defining Dirichlet series [L3]. Therefore $L(s,\chi)$ is holomorphic on $\operatorname{Re}s>0$. [step 1.1, L3, algebra] ∎
