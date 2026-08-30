---
id: thm-dvr-ideal-and-module-length
kind: theorem
title: "Length and valuation in a DVR"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dvr-element-normal-form, thm-ideals-in-a-dvr, def-composition-series-and-length-of-a-module, cor-length-is-additive-in-short-exact-sequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Discrete valuation rings after Example 20.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §23"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a discrete valuation ring with uniformiser $\pi$. Then for every
integer $n\ge0$,
$$
\ell_V(V/(\pi^n))=n.
$$
More generally, if $x\in V$ is nonzero and $x=u\pi^n$ with $u$ a unit, then
$$
\ell_V(V/(x))=n.
$$

## Facts & Assumptions

**Given:** A discrete valuation ring $V$ with uniformiser $\pi$.

[L1] Every nonzero element of the fraction field of $V$ is uniquely
$u\pi^n$ with $u$ a unit and $n\in\mathbb Z$
([[thm-dvr-element-normal-form]]).

[L2] Every nonzero ideal of $V$ is $(\pi^n)$ for a unique integer $n\ge0$
([[thm-ideals-in-a-dvr]]).

[F1] A composition series has finitely many simple factors, and the length is
their number ([[def-composition-series-and-length-of-a-module]]).

[L3] Length is additive in short exact sequences
([[cor-length-is-additive-in-short-exact-sequences]]).

## Proof

**Proof technique:** direct.

1.1 The case $n=0$ is $V/(1)=0$, whose length is $0$ by [F1]. For $n=1$, the ideals of $V/(\pi)$ correspond to the ideals of $V$ containing $(\pi)$. By [L2], those are only $(\pi)$ and $V$, so $V/(\pi)$ is simple and has length $1$. [F1, L2, given]

2.1 For each $n\ge1$ there is a short exact sequence $0\to(\pi^n)/(\pi^{n+1})\to V/(\pi^{n+1})\to V/(\pi^n)\to0$. Multiplication by $\pi^n$ induces an isomorphism $V/(\pi)\cong(\pi^n)/(\pi^{n+1})$, so step 1.1 gives $\ell_V((\pi^n)/(\pi^{n+1}))=1$. Therefore [L3] yields $\ell_V(V/(\pi^{n+1}))=\ell_V(V/(\pi^n))+1$. [L2, L3, step 1.1, algebra]

3.1 By induction on $n$, step 1.1 and step 2.1 give $\ell_V(V/(\pi^n))=n$ for every $n\ge0$. [step 1.1, step 2.1, induction]

4.1 Let $x\in V$ be nonzero, and write $x=u\pi^n$ as in [L1]. Multiplication by the unit $u^{-1}$ identifies the ideals $(x)$ and $(\pi^n)$, so $V/(x)\cong V/(\pi^n)$ as $V$-modules. Hence $\ell_V(V/(x))=\ell_V(V/(\pi^n))=n$. [L1, step 3.1, algebra] ∎
