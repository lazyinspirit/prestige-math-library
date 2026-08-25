---
id: ex-index-of-the-boundary-cycle-of-a-round-annulus
kind: example
title: "The boundary cycle of a round annulus has index $1$ inside the annulus and $0$ on either side"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-winding-number-chain-laws, thm-winding-number-circle-traversed-k-times, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, def-null-homologous-and-homologous-complex-cycles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Let $p\in\mathbb C$ and $0<r_1<r_2$, and let $C_j(t)=p+r_j\exp(it)$ on
$[0,2\pi]$ for $j=1,2$. Let $\Gamma$ be the complex chain
$\bigl((1,C_2),(-1,C_1)\bigr)$, written $C_2-C_1$. Then $\Gamma$ is a cycle with
trace $\{|z-p|=r_1\}\cup\{|z-p|=r_2\}$, and

$$n(\Gamma,z)=\begin{cases}0,&|z-p|<r_1,\\ 1,&r_1<|z-p|<r_2,\\ 0,&|z-p|>r_2.\end{cases}$$

Let $s_1,s_2$ be reals with $0<s_1<r_1$ and $r_2<s_2$, and put
$\Omega=\{z:s_1<|z-p|<s_2\}$. Then $\Gamma$ has trace in the open set $\Omega$
and is null-homologous in $\Omega$. The ambient open set is named before the
homology because the notion depends on it: the smaller annulus
$\{r_1<|z-p|<r_2\}$ does not contain the trace of $\Gamma$ and is therefore not
an open set in which $\Gamma$ is a chain at all.

## Facts & Assumptions

**Given:** A point $p$, radii $0<r_1<r_2$, the circles $C_1,C_2$ above, and the chain $\Gamma=C_2-C_1$.

[L1] The trace of a sum of chains is the union of their traces, the negative of a chain has the same trace, a sum of cycles and the negative of a cycle are cycles, and for $p'$ off the traces involved $n(\Gamma_1+\Gamma_2,p')=n(\Gamma_1,p')+n(\Gamma_2,p')$ and $n(-\Gamma,p')=-n(\Gamma,p')$ ([[thm-winding-number-chain-laws]]).

[L2] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $\gamma_k(t)=a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with $n(\gamma_k,z)=k$ for $|z-a|<r$ and $n(\gamma_k,z)=0$ for $|z-a|>r$; for $k\ne0$ its trace is $\{z:|z-a|=r\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L3] A complex chain is a finite list of pairs $(m_k,\gamma_k)$; a list of closed contours is a cycle; the negative of a chain negates every coefficient; and a single closed contour with coefficient $1$ is a cycle whose trace is that contour's trace ([[def-complex-chain-and-cycle]]).

[L4] $n(\Gamma,p')=(2\pi i)^{-1}\int_\Gamma dz/(z-p')$, and for a single closed contour with coefficient $1$ this is that contour's winding number ([[def-integration-and-index-of-complex-chain]]).

[L5] A cycle $\Gamma$ with trace in an open $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,q)=0$ for every $q\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] with $k=1$ each $C_j$ is a closed complex contour with trace $\{|z-p|=r_j\}$, with $n(C_j,z)=1$ for $|z-p|<r_j$ and $n(C_j,z)=0$ for $|z-p|>r_j$. [given, L2]

2.1 By [L1] and [L3] the chain $\Gamma=C_2-C_1$ is a cycle and its trace is $\{|z-p|=r_1\}\cup\{|z-p|=r_2\}$, and by [L1] and [L4] its index off that trace is $n(C_2,z)-n(C_1,z)$. [step 1.1, L1, L3, L4]

3.1 Evaluating step 2.1 with step 1.1: for $|z-p|<r_1<r_2$ the value is $1-1=0$; for $r_1<|z-p|<r_2$ it is $1-0=1$; for $|z-p|>r_2>r_1$ it is $0-0=0$. [step 1.1, step 2.1]

4.1 With $0<s_1<r_1$ and $r_2<s_2$ the trace of $\Gamma$ lies in $\Omega=\{s_1<|z-p|<s_2\}$, and $\mathbb C\setminus\Omega=\{|z-p|\le s_1\}\cup\{|z-p|\ge s_2\}$; every point of the first set has $|z-p|\le s_1<r_1$ and every point of the second has $|z-p|\ge s_2>r_2$, so step 3.1 gives index $0$ at each, and [L5] makes $\Gamma$ null-homologous in $\Omega$. [step 2.1, step 3.1, L5] ∎
