---
id: lem-dalembert-minimum-modulus-descent
kind: lemma
title: "A nonzero value of a nonconstant complex polynomial cannot be a local minimum of its modulus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-polynomial-degree-and-monic, lem-complex-conjugation-and-modulus-laws, thm-complex-nth-roots-and-roots-of-unity, lem-binomial-theorem-over-complex-numbers, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: The Fundamental Theorem of Algebra"
      url: "https://www.jirka.org/ra/html/sec_fundalgeb.html"
pipeline_run: null
---

## Statement

If $p$ is nonconstant and $p(a)\ne0$, then $|p|$ is not minimal on any neighbourhood of $a$. The conventions and prerequisite facts used below are recorded in [[def-complex-polynomial-degree-and-monic]], [[lem-complex-conjugation-and-modulus-laws]], [[thm-complex-nth-roots-and-roots-of-unity]], [[lem-binomial-theorem-over-complex-numbers]], [[lem-finite-sum-laws]].

## Facts & Assumptions

**Given:** A nonconstant polynomial $p$ and a point $a$ with $p(a)\ne0$.

[L1] [[thm-complex-nth-roots-and-roots-of-unity]] supplies an $m$th root of every nonzero complex number when $m\ge1$.

[L2] [[lem-complex-conjugation-and-modulus-laws]] gives $|uv|=|u||v|$, the triangle inequality, and $v\overline v=|v|^2$.

[L3] [[lem-binomial-theorem-over-complex-numbers]] gives the finite expansion of $(a+z)^n$ in complex coefficients.

## Proof

**Proof technique:** constructive.

1.1 By [L3], expanding $p(a+z)-p(a)$ gives a nonzero polynomial in $z$ (its top coefficient is the nonzero leading coefficient of $p$). Let $m\ge1$ be its first nonzero degree, so $p(a+z)=p(a)+c_mz^m+z^{m+1}q(z)$ with $c_m\ne0$. Choose by [L1] a unit complex number $u$ with $u^m=-p(a)\overline{c_m}/(|p(a)||c_m|)$. Then $\overline{p(a)}c_mu^m=-|p(a)||c_m|$. [L1, L3, construct, algebra]

1.2 Write $M$ for the sum of the moduli of the finitely many coefficients of $q$. For $0<t\le1$, [L2] gives $|t^{m+1}q(tu)|\le Mt^{m+1}$. With $\lambda:=|p(a)||c_m|$ and $B:=2|p(a)|M+(|c_m|+M)^2>0$, choose $0<t<\min\{1,\lambda/B\}$. [L2, choose]

2.1 Put $R=t^{m+1}q(tu)$. By step 1.1 and [L2], $|p(a+tu)|^2\le |p(a)|^2-2\lambda t^m+2|p(a)|Mt^{m+1}+(|c_m|+M)^2t^{2m}\le |p(a)|^2-2\lambda t^m+Bt^{m+1}<|p(a)|^2$. Thus $a+tu$ is arbitrarily close to $a$ and has strictly smaller modulus. [L2, step 1.1, step 1.2, discharge-construct] ∎
