---
id: thm-integral-exponential-solves-the-normalised-ivp
kind: theorem
title: "The inverse E is differentiable, E'=E, and E(0)=1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-exponential,
       thm-integral-logarithm-derivative-and-normalisation,
       thm-derivative-of-an-inverse,
       cor-differentiable-implies-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

The inverse function $E:\mathbb R\to(0,\infty)$ is differentiable and

$$E'(y)=E(y)\quad(y\in\mathbb R),\qquad E(0)=1.$$

## Facts & Assumptions

**Given:** $y\in\mathbb R$.

[F1] $E=L^{-1}$, $L(E(y))=y$, and $E(L(x))=x$
([[def-integral-exponential]]).

[L1] $L'(x)=1/x$ for $x>0$, and $L(1)=0$
([[thm-integral-logarithm-derivative-and-normalisation]]).

[L2] If a continuous injective function on a nondegenerate interval has a
nonzero derivative at $c$, then its inverse is differentiable at $f(c)$ with
derivative $1/f'(c)$ ([[thm-derivative-of-an-inverse]]).

[L3] A differentiable function is continuous
([[cor-differentiable-implies-continuous]]).

## Proof

**Proof technique:** direct.

1.1 The function $L$ is injective because it has inverse $E$, and it is continuous by [L1] and [L3]. At $c=E(y)>0$ its derivative is $L'(c)=1/c\neq0$. [F1, L1, L3]
1.2 Since $L(1)=0$, the inverse identity gives $E(0)=1$. [L1, F1]
2.1 Apply [L2] at $c=E(y)$. Since $L(c)=y$, $$ E'(y)=\frac1{L'(E(y))}=E(y). $$ [step 1.1, L2, L1, F1, algebra]
3.1 The arbitrary choice of $y$, together with steps 2.1 and 1.2, proves all claims. [step 2.1, step 1.2] ∎
