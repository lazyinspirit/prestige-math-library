---
id: thm-runge-approximation-on-plane-domains
kind: theorem
title: "Runge approximation on plane domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-runge-approximation-on-a-plane-domain,
       thm-runge-approximation-with-prescribed-poles,
       lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 9.2.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Theorem 4.4.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a plane domain, let
$P\subseteq\widehat{\mathbb C}\setminus\Omega$ meet every connected component of
$\widehat{\mathbb C}\setminus\Omega$, and let $f:\Omega\to\mathbb C$ be
holomorphic. Then $f$ is Runge-approximable on $\Omega$ with poles in $P$.

## Facts & Assumptions

**Given:** A plane domain $\Omega$, a pole set $P$ meeting every component of
$\widehat{\mathbb C}\setminus\Omega$, and a holomorphic function $f$ on
$\Omega$.

[L1] Every compact set inside an open Euclidean set has a compact Jordan
neighbourhood still inside that open set
([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] Runge approximation on one compact set holds once the pole set meets every
component of its complement
([[thm-runge-approximation-with-prescribed-poles]]).

[L3] Local-uniform approximation on a plane domain means uniform approximation
on each compact set in an exhaustion
([[def-runge-approximation-on-a-plane-domain]]).

## Proof

**Proof technique:** direct.

1.1 Choose an increasing exhaustion $K_1\subseteq K_2\subseteq\cdots$ of compact subsets of $\Omega$ with $\bigcup_nK_n=\Omega$ and $K_n\subseteq\operatorname{int}K_{n+1}$. By recursively applying [L1] and filling every complementary component of the chosen Jordan neighbourhood that lies entirely in $\Omega$, we may also require that every connected component of $\widehat{\mathbb C}\setminus K_n$ meets $P$. [given, L1, construct]

2.1 Apply [L2] to each $K_n$ with tolerance $2^{-n}$. This gives a rational function $r_n$ with poles in $P$ and $$\sup_{z\in K_n}|f(z)-r_n(z)|<2^{-n}.$$ [L2, step 1.1, choose]

3.1 Fix a compact set $K\subseteq\Omega$. Choose $N$ with $K\subseteq K_N$. Then for every $n\ge N$ one has $K\subseteq K_n$, so step 2.1 gives $\sup_{z\in K}|f(z)-r_n(z)|\le2^{-n}$. Hence $r_n\to f$ uniformly on $K$. Since $K$ was arbitrary, [L3] gives local-uniform convergence on $\Omega$. [step 2.1, L3, algebra] ∎
