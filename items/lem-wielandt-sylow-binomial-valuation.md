---
id: lem-wielandt-sylow-binomial-valuation
kind: lemma
title: "If $|G|=p^a m$ with $p\\nmid m$, then $v_p\\binom{p^a m}{p^a}=0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-adic-valuation, lem-p-adic-valuation-additive, def-binomial-coefficient, thm-binomial-closed-formula, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $p$ be prime and let $a,m\in\mathbb N$ satisfy $p\nmid m$. Then $$v_p\!\left(\binom{p^am}{p^a}\right)=0.$$ The valuation is applied only to nonzero integers. See [[def-p-adic-valuation]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a prime $p$ and a nonzero integer $x$, the $p$-adic valuation is $$v_p(x):=\max\{k\in\mathbb N:p^k\mid x\};$$ the value $v_p(0)$ is undefined. ([[def-p-adic-valuation]]).

[L2] For a prime $p$ and nonzero integers $x,y$, the product $xy$ is nonzero and $$v_p(xy)=v_p(x)+v_p(y).$$ ([[lem-p-adic-valuation-additive]]).

[L3] For a finite set $A$ and $k \in \mathbb{N}$ put $$[A]^{k} := \{\, S \subseteq A \ :\ \lvert S\rvert = k \,\},$$ the set of $k$-element subsets of $A$. Every $S \subseteq A$ is finite (thm-subset-of-a-finite-set), so the condition $\lvert S\rvert = k$ makes sense for every subset. ([[def-binomial-coefficient]]).

[L4] Let $n,k\in\mathbb N$ with $k\le n$. Then $$\binom nk\,k!\,(n-k)!=n!,$$ and consequently $\binom nk\,k!=n^{\underline{k}}$. ([[thm-binomial-closed-formula]]).

[L5] The factorial and falling factorial satisfy $$0!=1,\qquad (n+1)!=n!(n+1),\qquad n^{\underline 0}=1,\qquad n^{\underline{k+1}}=n^{\underline k}(n-k),$$ and for $k\le n$, $n^{\underline k}$ is the product $n(n-1)\cdots(n-k+1)$. ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 We apply the valuation to the identity $\binom{p^am}{p^a}(p^a)!= (p^am)^{\underline{p^a}}$. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $0<j<p^a$, write $j=p^ru$ with $p\nmid u$; then $r<a$ and $p^am-j=p^r(p^{a-r}m-u)$, whose parenthesized factor is prime to $p$. Hence $v_p(p^am-j)=v_p(j)$. The factor $p^am$ contributes $a+v_p(m)=a$, exactly matching the contribution of $p^a$ in $(p^a)!$, so all valuations cancel. [step 1.1, given, algebra]

3.1 If $a=0$, the binomial coefficient is $\binom m1=m$, which is nonzero and prime to $p$. No valuation of zero occurs in either case. This proves the stated claim. [step 2.1, given, algebra] ∎
