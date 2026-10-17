---
id: lem-discrete-one-step-error-recurrence-bound
title: "Finite geometric error bound from a one-step recurrence"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-finite-sum
  - def-integer-power
  - def-natural-logarithm
  - def-real-power
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - lem-finite-sum-laws
  - lem-power-monotone
  - thm-real-power-laws
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $T>0$, $N\in\mathbb N$ with $N\ge1$, $h=T/N>0$, $p\in\mathbb R$ with $p\ge1$, and $C_0,C,L\ge0$. Real powers of the positive base $h$ are as in [[def-real-power]]. If nonnegative real numbers $e_0,\ldots,e_N$ satisfy
$$e_0\le C_0h^p,\qquad e_{n+1}\le(1+Lh)e_n+Ch^{p+1}\quad(0\le n<N),$$
then, when $L>0$,
$$\max_{0\le n\le N}e_n\le\left(C_0\exp(LT)+C\frac{\exp(LT)-1}{L}\right)h^p,$$
and, when $L=0$,
$$\max_{0\le n\le N}e_n\le(C_0+CT)h^p.$$

## Facts & Assumptions

**Given:** The constants, step size, and nonnegative error sequence in the Statement.

[A1] $T>0$, $N\ge1$, $h=T/N$, $p\ge1$, $C_0,C,L\ge0$, and the stated initial and recurrence inequalities hold.

[F1] The real exponential is $\exp(x)=\sum_{n=0}^{\infty}x^n/n!$, with $e:=\exp(1)$ and $\exp(0)=1$ ([[def-real-exponential-function-and-e]]).

[F2] For every real $x$, $1+x\le\exp(x)$ ([[lem-exponential-dominates-one-plus-x]]).

[F3] If $0\le a\le b$, then $a^n\le b^n$ for every natural $n$ ([[lem-power-monotone]]); natural powers satisfy $a^0=1$ and $a^{n+1}=a^na$ ([[def-integer-power]]).

[F4] $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$ ([[thm-exponential-addition-formula]]).

[F5] The real exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[F6] Finite sums satisfy additivity and scaling ([[lem-finite-sum-laws]], [[def-finite-sum]]).

[F7] Finite sums telescope as $\sum_{j<n}(c_{j+1}-c_j)=c_n-c_0$ ([[lem-finite-sum-laws]]).

[F8] For $h>0$ and $p\in\mathbb R$, $h^{p+1}=h^ph$: [[thm-real-power-laws]] gives $h^{p+1}=h^ph^1$, and [[def-real-power]] and [[def-natural-logarithm]] give $h^1=\exp(\log h)=h$.

## Proof

1.1 Put $a:=1+Lh$ and $b:=Ch^{p+1}$. By induction on $n$, the recurrence gives $e_n\le a^ne_0+b\sum_{j=0}^{n-1}a^j$ for $0\le n\le N$: the sum is empty at $n=0$, where the bound is equality in the first term, and substituting the bound at $n$ into $e_{n+1}\le ae_n+b$ appends the term $ba^n$. [A1, induction, algebra]

2.1 If $L>0$, then $a-1=Lh$ and [F6, F7] give $(a-1)\sum_{j<n}a^j=\sum_{j<n}(a^{j+1}-a^j)=a^n-1$, so $\sum_{j<n}a^j=(a^n-1)/(Lh)$. By [F2], $a=1+Lh\le\exp(Lh)$. If $n=0$ then $a^n=\exp(Lh)^n=1$; if $n\ge1$, [F3] gives $a^n\le\exp(Lh)^n$. Induction using [F1] and [F4] gives $\exp(Lh)^n=\exp(nLh)$ for every natural $n$. Since $n\le N$, $nLh\le LT$, and [F5] gives $a^n\le\exp(LT)$. Substitution in step 1.1, using [F8] to simplify the real-power factor, yields $e_n\le\left(C_0\exp(LT)+C\frac{\exp(LT)-1}{L}\right)h^p$. If $L=0$, then $a=1$ and step 1.1 gives $e_n\le C_0h^p+nCh^{p+1}=C_0h^p+Ch^p(nh)\le(C_0+CT)h^p$ by [F8], because $n\le N$ and $Nh=T$. Taking the maximum proves both cases. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra] ∎
