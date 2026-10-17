---
id: thm-local-maximum-modulus-principle
kind: theorem
title: "Local maximum modulus principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-mapping-theorem-holomorphic-functions, lem-complex-conjugation-and-modulus-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "An interior modulus maximum forces constancy"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 3.3.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.14"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "J. A. Tropp, Matrix Analysis, Proposition 7.11"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant.

Precisely, if $f$ is holomorphic on a complex domain $\Omega$ and there are $a\in\Omega$ and a neighbourhood $V\subseteq\Omega$ of $a$ such that $|f(z)|\le|f(a)|$ for every $z\in V$, then $f$ is constant on $\Omega$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a complex domain $\Omega$, a point $a\in\Omega$, and a neighbourhood $V$ on which $|f(z)|\le|f(a)|$. The modulus obeys the usual multiplicative and positivity laws ([[lem-complex-conjugation-and-modulus-laws]]).

[L1] Every nonconstant holomorphic function on a complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is nonconstant. Choose an open disc $D$ about $a$ contained in $V$. By [L1], $f[D]$ is an open set containing $f(a)$, so it contains a disc $D(f(a),\rho)$ for some $\rho>0$. [L1, given]

2.1 If $f(a)\ne0$, the point $w=(1+t)f(a)$ lies in $D(f(a),\rho)$ and has $|w|>|f(a)|$ for sufficiently small $t>0$. If $f(a)=0$, any nonzero $w$ with $|w|<\rho$ has larger modulus. Thus in either case $f[D]$ contains a value whose modulus is greater than $|f(a)|$. [step 1.1, algebra]

3.1 Step 2.1 contradicts the local maximum on $V$. Hence $f$ cannot be nonconstant and must be constant on $\Omega$. [step 1.1, step 2.1] ∎
