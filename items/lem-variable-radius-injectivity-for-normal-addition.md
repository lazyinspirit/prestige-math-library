---
id: lem-variable-radius-injectivity-for-normal-addition
kind: lemma
title: "Variable-radius injectivity for normal addition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section,
       thm-smooth-partitions-of-unity-exist-on-manifolds,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Corollary 6.22"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Theorem 3.54"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold, and let
$E:N^\perp S\to\mathbb R^m$ be the normal addition map. Then there exists a
positive smooth function $\delta:S\to(0,\infty)$ such that $E$ is injective on
$$ \Omega_\delta:=\{(p,v)\in N^\perp S:\|v\|<\delta(p)\}. $$

## Facts & Assumptions

**Given:** An embedded smooth submanifold $S\subseteq\mathbb R^m$ and its normal addition map $E$.

[L1] The map $E$ is a local diffeomorphism along the zero section ([[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]).

[L2] Smooth partitions of unity and smooth Urysohn cutoffs exist on manifolds ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], for every $y\in S$ there is some $\varepsilon_y>0$ such that the normal addition map is a diffeomorphism on $$ V_{\varepsilon_y}(y):=\{(y',v')\in N^\perp S:\|y'-y\|<\varepsilon_y,\ \|v'\|<\varepsilon_y\}. $$ Define $$ r(y):=\min\Bigl(1,\sup\{\varepsilon>0:E|_{V_\varepsilon(y)}\text{ is a diffeomorphism}\}\Bigr). $$ Then $r(y)>0$ for every $y\in S$. [L1, given, construct]

2.1 The function $r$ is continuous. Indeed, if $\|y-y'\|<r(y)$ and $0<\varepsilon<r(y)-\|y-y'\|$, then $V_\varepsilon(y')\subseteq V_{r(y)}(y)$, so $E|_{V_\varepsilon(y')}$ is also a diffeomorphism. Hence $r(y')\ge r(y)-\|y-y'\|$. Swapping $y$ and $y'$ gives $|r(y)-r(y')|\le \|y-y'\|$. [step 1.1, algebra]

3.1 By [L2], choose a smooth positive function $\delta:S\to(0,\infty)$ with $\delta(y)\le r(y)/2$ for every $y\in S$. [L2, step 2.1, construct]

4.1 Suppose $E(y,v)=E(y',v')$ with both points in $\Omega_\delta$, and assume without loss of generality that $r(y')\le r(y)$. Then $$ \|y-y'\|=\|v-v'\|\le \|v\|+\|v'\|<\delta(y)+\delta(y') \le \frac{r(y)}2+\frac{r(y')}2\le r(y). $$ Also $\|v\|<\delta(y)\le r(y)/2<r(y)$ and $\|v'\|<\delta(y')\le r(y')/2\le r(y)/2<r(y)$. Therefore both $(y,v)$ and $(y',v')$ lie in $V_{r(y)}(y)$, where $E$ is injective by step 1.1. Hence $(y,v)=(y',v')$. So $E$ is injective on $\Omega_\delta$. [step 1.1, step 3.1, algebra] ∎
