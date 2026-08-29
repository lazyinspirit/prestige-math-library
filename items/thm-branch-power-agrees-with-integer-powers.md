---
id: thm-branch-power-agrees-with-integer-powers
kind: theorem
title: "Branch-defined complex powers agree with integer powers"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-power-from-holomorphic-logarithm-branch, def-complex-integer-powers, def-complex-exponential, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $V\subseteq\mathbb C$ be open with $0\notin V$ and let $L:V\to\mathbb C$ be a holomorphic logarithm branch of $z$ on $V$. For every integer $n\in\mathbb Z$ and every $z\in V$, the branch power of [[def-complex-power-from-holomorphic-logarithm-branch]] equals the complex integer power of [[def-complex-integer-powers]]:

$$z^n_L:=\exp\bigl(nL(z)\bigr)=z^n.$$

In particular $\exp(nL(z))$ is independent of the choice of branch $L$: the right-hand side $z^n$ mentions no logarithm at all.

## Facts & Assumptions

**Given:** An open $V\subseteq\mathbb C$ with $0\notin V$, a holomorphic logarithm branch $L$ of $z$ on $V$, an integer $n$, and $z\in V$.

[F1] A holomorphic logarithm branch $L$ of $z$ on $V$ satisfies $\exp(L(z))=z$ for every $z\in V$, and its branch power is $z^\alpha_L:=\exp(\alpha L(z))$ ([[def-complex-power-from-holomorphic-logarithm-branch]]).

[F2] The complex integer powers satisfy $z^0=1$, $z^{m+1}=z^mz$ for $m\in\mathbb N$, and $z^r:=(z^m)^{-1}$ when $r<0$ with $-r$ the natural $m\ge1$ ([[def-complex-integer-powers]]).

[F3] For all $u,v\in\mathbb C$, $\exp(u+v)=\exp u\,\exp v$; for real $x$, the complex value $\exp(x+0i)$ equals the real exponential $e^x$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F4] The complex exponential is $\exp z=\sum_{n\ge0}z^n/n!$ for every $z\in\mathbb C$, so $\exp 0=1$ ([[def-complex-exponential]]).

## Proof

**Proof technique:** induction on the nonnegative integer $m$ with $\exp(mL(z))=z^m$.

1.1 Base case: $z^0_L=\exp(0\cdot L(z))=\exp 0=1=z^0$ [F1, F2, F4, base]

1.2 Assume for a fixed $m\ge0$ that $\exp(mL(z))=z^m$. [ih, assume-hyp]

2.1 By [F3] and [F1], $\exp((m+1)L(z))=\exp(mL(z))\exp(L(z))=z^mz=z^{m+1}$ [F1, F2, F3, step 1.2, ih]

3.1 For $r=-m<0$: [F3] and [F4] give $\exp(-mL(z))\exp(mL(z))=\exp 0=1$, so by step 2.1 and [F2], $\exp(-mL(z))=(z^m)^{-1}=z^{-m}=z^r$. [F2, F3, F4, step 2.1]

4.1 Steps 2.1 and 3.1 cover every integer, so $z^n_L=z^n$; the right side mentions no branch, giving independence. [step 2.1, step 3.1, discharge-induction] ∎
