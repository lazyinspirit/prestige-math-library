---
id: cor-local-multiplicity-count-holomorphic-map
kind: corollary
title: "A local degree-m holomorphic map has m nearby sheets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-local-normal-form-holomorphic-map, def-local-degree-holomorphic-map, thm-complex-nth-roots-and-roots-of-unity, def-biholomorphic-map]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Local degree counts nearby sheets"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 5.1.3"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Let $f:\Omega\to\mathbb C$ be nonconstant and holomorphic on a complex domain $\Omega$, let $a\in\Omega$, and put $m=\deg_a f$. After shrinking around $a$, every nearby value other than $f(a)$ has exactly $m$ distinct preimages.

Precisely, for every neighbourhood $N$ of $a$ in $\Omega$, there are an open neighbourhood $V$ of $a$ with $V\subseteq N$ and a real $\rho>0$ such that, for every $w$ with $0<|w-f(a)|<\rho^m$, the equation $f(z)=w$ has exactly $m$ distinct solutions in $V$. The value $f(a)$ has the single preimage $a$ in $V$, counted with multiplicity $m$.

## Facts & Assumptions

**Given:** A nonconstant holomorphic function $f:\Omega\to\mathbb C$ on a complex domain, a point $a\in\Omega$, the positive natural $m=\deg_a f$ ([[def-local-degree-holomorphic-map]]), and an arbitrary neighbourhood $N$ of $a$ in $\Omega$. A biholomorphism is bijective with holomorphic inverse ([[def-biholomorphic-map]]).

[L1] If $f:\Omega\to\mathbb C$ is nonconstant and holomorphic on a complex domain, $a\in\Omega$, and $m=\deg_a f$, then near $a$ there is a biholomorphic coordinate $\phi$ with $\phi(a)=0$ and $f(z)-f(a)=\phi(z)^m$ ([[thm-local-normal-form-holomorphic-map]]).

[L2] Every nonzero complex number has exactly $m$ distinct $m$th roots when $m\ge1$, while $0$ has the single $m$th root $0$ ([[thm-complex-nth-roots-and-roots-of-unity]]).

## Proof

**Proof technique:** direct.

1.1 Take a complex domain $V_0$ and biholomorphic coordinate $\phi$ from [L1]. Since $N$ is a neighbourhood of $a$, choose an open set $O$ with $a\in O\subseteq N$. The set $\phi[V_0\cap O]$ is open and contains $0$, so choose $\rho>0$ with $D(0,\rho)\subseteq\phi[V_0\cap O]$ and put $V:=\phi^{-1}[D(0,\rho)]\subseteq N$. [L1, given, choose]

2.1 If $0<|w-f(a)|<\rho^m$, then [L2] gives exactly $m$ distinct roots $u$ of $u^m=w-f(a)$, and each satisfies $|u|=|w-f(a)|^{1/m}<\rho$. [step 1.1, L2]

3.1 Since $\phi$ is bijective, its inverse transports those roots to exactly $m$ distinct points $z\in V$ satisfying $f(z)=w$. At $w=f(a)$, [L2] says the only coordinate root is $0$, so the only point is $a=\phi^{-1}(0)$, and the normal form records multiplicity $m$. [step 1.1, step 2.1, L2, given]

4.1 Thus every noncentral value in the stated target disc has exactly $m$ distinct preimages in $V$, while the central value has the one preimage of multiplicity $m$. [step 2.1, step 3.1] ∎
