---
id: ex-going-down-needs-normality
kind: example
title: "An integral domain extension can fail going down when the base is not normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-going-down-over-normal-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, Introduction to Commutative Algebra, Chapter 3, lecture of September 30"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Example

Let $K$ be a field, let
$$ R:=K[x(1-x),y,xy]\subseteq S:=K[x,y], $$
let
$$ P_0:=(x(1-x),xy)R,\qquad P:=(x(1-x),y,xy)R, $$
and let
$$ Q:=(1-x,y)S. $$
Then $R\subseteq S$ is an integral extension of domains, $P_0\subsetneq P$ is a strict prime chain in $R$, $Q$ lies over $P$, and there is no prime ideal $Q_0\subseteq Q$ of $S$ lying over $P_0$. So going down fails although both rings are domains.

## Facts & Assumptions

**Given:** A field $K$, the rings $R:=K[x(1-x),y,xy]\subseteq S:=K[x,y]$, the ideals $P_0\subsetneq P$ in $R$, and the prime $Q=(1-x,y)$ in $S$.

[L1] Assuming the Axiom of Choice, going down holds for integral extensions over integrally closed domains ([[thm-going-down-over-normal-domains]]).

## Verification

**Proof technique:** direct.

1.1 The ring $S$ is a domain, and $R$ is a subring of it, so $R$ is also a domain. Moreover $x$ satisfies the monic equation $T^2-T+x(1-x)=0$ with coefficient $x(1-x)\in R$, and $S=R[x]$ because $y\in R$ already. Hence $S$ is integral over $R$. [L1, given, algebra]

2.1 The ideals $P_0$ and $P$ are prime because they are contractions of the prime ideals $(x)$ and $(x,y)$ of $S$, and they are distinct because $y\in P\setminus P_0$. The ideal $Q=(1-x,y)$ is prime in $S$, and its contraction to $R$ is $P$, since mod $Q$ one has $x=1$ and $y=0$, so $x(1-x)$, $y$, and $xy$ all vanish. [step 1.1, given, algebra]

2.2 The base ring is not integrally closed: the element $x\in S$ is integral over $R$ by step 1.1, but $x\notin R$. Indeed, if $x\in R$, then setting $y=0$ would express $x$ as a polynomial in $x(1-x)$; evaluating at $x=0$ and $x=1$ would then give the same value on both inputs, impossible because $x$ takes the values $0$ and $1$. [L1, step 1.1, given, algebra]

3.1 Suppose $Q_0\subseteq Q$ were a prime ideal of $S$ with $Q_0\cap R=P_0$. Because $Q=(1-x,y)$ does not contain $x$, neither does $Q_0$. But $x(1-x)\in P_0\subseteq Q_0$ and $xy\in P_0\subseteq Q_0$, so primality of $Q_0$ and $x\notin Q_0$ force $1-x\in Q_0$ and $y\in Q_0$. Hence $Q=(1-x,y)\subseteq Q_0$, and therefore $Q_0=Q$. This contradicts $Q_0\cap R=P_0$ because step 2.1 showed $Q\cap R=P\ne P_0$. [step 2.1, given, algebra]

4.1 Thus the integral extension of domains $R\subseteq S$ has a prime chain $P_0\subsetneq P$ and a prime $Q$ over $P$ with no prime below $Q$ lying over $P_0$. So the normality hypothesis in [L1] is essential. [L1, step 2.2, step 3.1] ∎
