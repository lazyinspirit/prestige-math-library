---
id: lem-the-totient-of-a-gcd-and-of-a-least-common-multiple
kind: lemma
title: "$\\varphi(m)\\varphi(n)=\\varphi(\\gcd(m,n))\\,\\varphi(\\operatorname{lcm}(m,n))$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euler-totient-product-formula, thm-gcd-and-lcm-from-valuations, def-p-adic-valuation, def-unit-group-modulo-n-and-euler-totient, def-common-divisor-and-gcd, def-lcm, def-sum-over-a-finite-index-set, lem-divisor-bound, def-prime, def-divides-in-z]
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
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), formula (4.1) in Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Chapter 9, Section 1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

For all integers $m,n\ge1$,

$$\varphi(m)\,\varphi(n)=\varphi\bigl(\gcd(m,n)\bigr)\,\varphi\bigl(\operatorname{lcm}(m,n)\bigr)$$

([[def-unit-group-modulo-n-and-euler-totient]], [[def-common-divisor-and-gcd]],
[[def-lcm]]). At $m=n=1$ both sides are $1$; at $\gcd(m,n)=1$ the identity is the
multiplicativity $\varphi(m)\varphi(n)=\varphi(mn)$.

## Facts & Assumptions

**Given:** Integers $m,n\ge1$; write $g:=\gcd(m,n)$ and $\ell:=\operatorname{lcm}(m,n)$, both $\ge1$ because $m$ and $n$ are nonzero. For a prime $p$ ([[def-prime]]) and an integer $e\ge0$ put $w(p,e):=p^{e}-p^{e-1}$ when $e\ge1$ and $w(p,0):=1$. For $k\ge1$ write $D(k)$ for the set of primes dividing $k$ ([[def-divides-in-z]]); it is finite, being contained in $\{2,\dots,k\}$ by [[lem-divisor-bound]]. Put $P:=D(m)\cup D(n)$. Finite products over such sets are those of [[def-sum-over-a-finite-index-set]].

[L1] Let $k\ge1$ and let $p_0,\dots,p_{r-1}$ be an injective finite list consisting exactly of the prime divisors of $k$; put $e_i:=v_{p_i}(k)$, so $e_i\ge1$. Then $\varphi(k)=\prod_{i<r}\bigl(p_i^{e_i}-p_i^{e_i-1}\bigr)$ ([[thm-euler-totient-product-formula]]).

[L2] For $a,b\ge1$ and every prime $p$: $v_p(\gcd(a,b))=\min\{v_p(a),v_p(b)\}$ and $v_p(\operatorname{lcm}(a,b))=\max\{v_p(a),v_p(b)\}$ ([[thm-gcd-and-lcm-from-valuations]]).

[L3] For a prime $p$ and a nonzero integer $a$, $v_p(a)$ is the greatest $k\in\mathbb N$ with $p^{k}\mid a$ ([[def-p-adic-valuation]]).

## Proof

**Proof technique:** direct.

1.1 For a prime $p$ and an integer $k\ge1$: $p\mid k$ if and only if $v_p(k)\ge1$. If $v_p(k)\ge1$ then $p$ divides $p^{v_p(k)}$, which divides $k$ by [L3]; conversely $p\mid k$ says $p^{1}\mid k$, so the greatest such exponent is at least $1$. [L3]

1.2 For each $p\in P$ write $a:=v_p(m)$ and $b:=v_p(n)$; then $v_p(g)=\min\{a,b\}$ and $v_p(\ell)=\max\{a,b\}$ by [L2], and the unordered pair $\{\min\{a,b\},\max\{a,b\}\}$ is $\{a,b\}$, so $w(p,a)\,w(p,b)=w(p,v_p(g))\,w(p,v_p(\ell))$. [L2, given]

2.1 Consequently $D(g)=D(m)\cap D(n)$ and $D(\ell)=D(m)\cup D(n)$: by [L2] and step 1.1, $p\in D(g)$ says $\min\{v_p(m),v_p(n)\}\ge1$, that is $p\in D(m)$ and $p\in D(n)$; and $p\in D(\ell)$ says $\max\{v_p(m),v_p(n)\}\ge1$, that is $p\in D(m)$ or $p\in D(n)$. [step 1.1, L2]

3.1 The set $P$ is a finite set of primes containing $D(m)$, $D(n)$, $D(g)$ and $D(\ell)$ by step 2.1. For every $k\in\{m,n,g,\ell\}$ one has $\varphi(k)=\prod_{p\in P}w\bigl(p,v_p(k)\bigr)$: applying [L1] with the list $D(k)$ gives $\varphi(k)=\prod_{p\in D(k)}w(p,v_p(k))$, and for $p\in P$ outside $D(k)$ step 1.1 gives $v_p(k)=0$, so the extra factors are $w(p,0)=1$. [step 1.1, step 2.1, L1, given]

4.1 Multiplying the equalities of step 1.2 over the finite set $P$ and using step 3.1 four times gives $\varphi(m)\varphi(n)=\prod_{p\in P}w(p,v_p(m))w(p,v_p(n))=\prod_{p\in P}w(p,v_p(g))w(p,v_p(\ell))=\varphi(g)\varphi(\ell)$. [step 3.1, step 1.2] ∎

## Remarks

- **Why the identity is not simply multiplicativity.** For coprime $m$ and $n$ it reduces to $\varphi(mn)=\varphi(m)\varphi(n)$, but the general case is what the intersection theorem needs: the degrees of $\mathbb Q(\mu_m)$ and $\mathbb Q(\mu_n)$ multiply to the degree of the compositum times the degree of the intersection, and it is the gcd–lcm form of the identity that turns that into $\varphi(\gcd(m,n))$ ([[thm-intersections-of-rational-cyclotomic-fields]]).
