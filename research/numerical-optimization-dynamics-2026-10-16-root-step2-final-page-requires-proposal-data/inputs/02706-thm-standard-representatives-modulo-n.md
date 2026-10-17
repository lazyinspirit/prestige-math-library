---
id: thm-standard-representatives-modulo-n
kind: theorem
title: "For $n\\ge 1$, every class in $\\mathbb{Z}/n$ has one representative $r$ with $0\\le r<n$, so $\\lvert\\mathbb{Z}/n\\rvert=n$; while $\\mathbb{Z}/0$ is in bijection with $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers-modulo-n, thm-division-algorithm-in-z, def-finite-cardinality, def-injection-surjection-bijection, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

Let $n$ be a positive integer. Every class in $\mathbb Z/n$
([[def-integers-modulo-n]]) contains exactly one integer $r$ with
$0\le r<n$. Consequently the map

$$r\longmapsto[r]_n\qquad(0\le r<n)$$

is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and
$|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$.
For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$.

## Facts & Assumptions

**Given:** A positive integer $n$ and integers $a,b$; separately, the modulus $0$.

[L1] For $n>0$ there are unique integers $q,r$ with $a=qn+r$ and $0\le r<n$ ([[thm-division-algorithm-in-z]]).

[F1] $[u]_n=[v]_n$ exactly when $n\mid(u-v)$ ([[def-integers-modulo-n]]).

[L2] The natural-number embedding into $\mathbb Z$ is injective and has image the nonnegative integers; the von Neumann natural $n$ is the set of naturals $r<n$ ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[F2] A bijection transports finite cardinality, and $|n|=n$ ([[def-injection-surjection-bijection]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $a=qn+r$ with $0\le r<n$. Then $n\mid(a-r)$, so $[a]_n=[r]_n$. [L1, F1]

1.2 If $0\le r,s<n$ and $[r]_n=[s]_n$, then $r-s=kn$ for some integer $k$, so $r=kn+s$. Both $r=0n+r$ and $r=kn+s$ express $r$ with a remainder in the range from $0$ to $n-1$, so uniqueness in [L1] gives $r=s$. [F1, L1]

1.3 At modulus $0$, [F1] says $[a]_0=[b]_0$ exactly when $0\mid(a-b)$, exactly when $a=b$. Hence $a\mapsto[a]_0$ is injective, and it is surjective by the definition of the quotient set. [F1, algebra]

2.1 Thus $r\mapsto[r]_n$ from the natural $n$ to $\mathbb Z/n$ is surjective by step 1.1 and injective by step 1.2, hence bijective. [step 1.1, step 1.2, L2, F2]

3.1 Since $n$ is finite with cardinality $n$, the bijection in step 2.1 gives $|\mathbb Z/n|=n$. At $n=1$ its domain is $1=\{0\}$, so there is one class. [step 2.1, F2, L2]

4.1 Steps 1.1 through 3.1 prove the positive-modulus statement, and step 1.3 proves the bijection at modulus $0$. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3] ∎
