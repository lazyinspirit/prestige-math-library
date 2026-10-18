---
id: lem-uniform-closure-of-a-real-function-algebra-is-a-lattice
kind: lemma
title: "The uniform closure of a unital real function algebra is closed under absolute value, maximum, and minimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra, cor-weierstrass-approximation-on-a-closed-interval, thm-c-k-complete-in-the-sup-metric]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/step2-published-stone-weierstrass-local-repairs/lem-uniform-closure-of-a-real-function-algebra-is-a-lattice.json
sources:
  scraped: []
  references:
    - title: "The Stone--Weierstrass Theorem and its Applications"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Gaddy.pdf"
pipeline_run: null
---

## Statement

If $A\subseteq C(K,\mathbb R)$ is a unital real function algebra and $\overline A$ is its uniform closure, then $u\in\overline A$ implies $|u|\in\overline A$; consequently $u\vee v$ and $u\wedge v$ lie in $\overline A$ whenever $u,v$ do.

## Facts & Assumptions

**Given:** A unital real function algebra $A$ and $u,v\in\overline A$.

[L1] The algebra operations and constants are those in [[def-unital-separating-real-function-algebra]].

[L2] Polynomials uniformly approximate $|t|$ on every bounded closed interval ([[cor-weierstrass-approximation-on-a-closed-interval]]).

## Proof

**Proof technique:** direct.

1.1 The closure $\overline A$ is a real subalgebra. Indeed, fix $w,z\in\overline A$, real $\alpha,\beta$, and a target error $\eta>0$. For each $\delta>0$ there are two witnesses $a,b\in A$ with $\|a-w\|_\infty<\delta$ and $\|b-z\|_\infty<\delta$. Then $\alpha a+\beta b,ab\in A$, and   $$\|\alpha a+\beta b-(\alpha w+\beta z)\|_\infty\le(|\alpha|+|\beta|)\delta,\qquad \|ab-wz\|_\infty\le\delta(\|w\|_\infty+\|z\|_\infty+\delta).$$ Choose $0<\delta<\min\{1,\eta/(1+|\alpha|+|\beta|+\|w\|_\infty+\|z\|_\infty)\}$ to make both errors less than $\eta$. Constants already belong to $A$. This proves the asserted algebra closure using only finitely many witnesses for each target error. [given, L1, algebra]


1.2 Fix $\eta>0$ and put $M=\|u\|_\infty+1$. Choose one $a\in A$ with $\|a-u\|_\infty<\min\{1,\eta/3\}$. Then $|a(x)|\le M$ on $K$. By [L2], choose one real polynomial $p$ with $\sup_{|t|\le M}|p(t)-|t||<\eta/3$. Since $A$ is unital, $p(a)\in A$, including its constant term. The inequality $||r|-|s||\le|r-s|$ gives   $$\|p(a)-|u|\|_\infty\le\|p(a)-|a|\|_\infty+\||a|-|u|\|_\infty<2\eta/3<\eta.$$ Thus $|u|\in\overline A$ by the metric definition of closure. No sequence of approximants or diagonal choice is used. [given, L1, L2, algebra]


2.1 Step 1.1 puts $u-v$ and $u+v$ in $\overline A$, and step 1.2 applies to $u-v$. The identities $u\vee v=(u+v+|u-v|)/2$ and $u\wedge v=(u+v-|u-v|)/2$ therefore give the remaining closure. [step 1.1, step 1.2, algebra] ∎

