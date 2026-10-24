---
id: ex-winding-number-of-a-figure-eight-cycle
kind: example
title: "A disjoint two-circle cycle has indices $+1$ and $-1$ in its two components"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-winding-number-chain-laws, thm-winding-number-circle-traversed-k-times, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

Let $\gamma_1(t)=-1+\tfrac12\exp(it)$ and $\gamma_2(t)=1+\tfrac12\exp(-it)$ for
$t\in[0,2\pi]$, and let $\Gamma$ be the complex chain
$\bigl((1,\gamma_1),(1,\gamma_2)\bigr)$. Then $\Gamma$ is a cycle whose trace is
the disjoint union of the two circles $\{|z+1|=\tfrac12\}$ and
$\{|z-1|=\tfrac12\}$, and for $z$ off that trace

$$n(\Gamma,z)=\begin{cases}+1,&|z+1|<\tfrac12,\\ -1,&|z-1|<\tfrac12,\\ 0,&|z+1|>\tfrac12\text{ and }|z-1|>\tfrac12.\end{cases}$$

## Facts & Assumptions

**Given:** The contours $\gamma_1,\gamma_2$ above and the chain $\Gamma=\bigl((1,\gamma_1),(1,\gamma_2)\bigr)$.

[L1] The trace of a sum of chains is the union of their traces; a sum of cycles is a cycle; and for $p$ off the traces involved, $n(\Gamma_1+\Gamma_2,p)=n(\Gamma_1,p)+n(\Gamma_2,p)$ ([[thm-winding-number-chain-laws]]).

[L2] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $\gamma_k(t)=a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with $n(\gamma_k,z)=k$ for $|z-a|<r$ and $n(\gamma_k,z)=0$ for $|z-a|>r$; for $k\ne0$ its trace is $\{z:|z-a|=r\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L3] A complex chain is a finite list of pairs $(m_k,\gamma_k)$; a list of closed contours is a cycle; and a single closed contour with coefficient $1$ is a cycle whose trace is the trace of that contour ([[def-complex-chain-and-cycle]]).

[L4] $n(\Gamma,p)=(2\pi i)^{-1}\int_\Gamma dz/(z-p)$, and for a single closed contour with coefficient $1$ this is the winding number of that contour ([[def-integration-and-index-of-complex-chain]]).

[L5] $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] with $a=-1$, $r=\tfrac12$, $k=1$ the contour $\gamma_1$ is closed with trace $\{|z+1|=\tfrac12\}$, $n(\gamma_1,z)=1$ for $|z+1|<\tfrac12$ and $n(\gamma_1,z)=0$ for $|z+1|>\tfrac12$; by [L2] with $a=1$, $r=\tfrac12$, $k=-1$ the contour $\gamma_2$ is closed with trace $\{|z-1|=\tfrac12\}$, $n(\gamma_2,z)=-1$ for $|z-1|<\tfrac12$ and $n(\gamma_2,z)=0$ for $|z-1|>\tfrac12$. [given, L2]

1.2 The two circles are disjoint: if $|z+1|\le\tfrac12$ and $|z-1|\le\tfrac12$ then $2=|(z+1)-(z-1)|\le|z+1|+|z-1|\le1$ by [L5], which is false. [L5]

2.1 Both contours are closed, so $\Gamma$ is a cycle by [L3], and by [L1] and [L3] its trace is the union of the two circles, which is disjoint by step 1.2. [step 1.1, step 1.2, L1, L3]

3.1 For $z$ off that trace, [L1] and [L4] give $n(\Gamma,z)=n(\gamma_1,z)+n(\gamma_2,z)$; with step 1.1 this is $1+0=1$ when $|z+1|<\tfrac12$, which forces $|z-1|>\tfrac12$ by step 1.2, and $0+(-1)=-1$ when $|z-1|<\tfrac12$, and $0+0=0$ when both moduli exceed $\tfrac12$. [step 1.1, step 2.1, L1, L4] ∎
