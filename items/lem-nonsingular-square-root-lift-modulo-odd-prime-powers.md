---
id: lem-nonsingular-square-root-lift-modulo-odd-prime-powers
kind: lemma
title: "A nonsingular square root lifts uniquely by one odd-prime-power step"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-linear-congruence-solvability-and-solution-count,
       thm-euclids-lemma, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime, let $k\ge1$, and let $a,x_k\in\mathbb Z$ satisfy $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$. Then there is a unique class $t\pmod p$ such that $(x_k+tp^k)^2\equiv a\pmod{p^{k+1}}$.

Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and integers $a,x_k$ with $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$.

[L1] If $d=\gcd(c,n)$, then $ct\equiv b\pmod n$ is soluble exactly when $d\mid b$, and when soluble it has exactly $d$ solution classes modulo $n$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L2] If a prime $p$ divides a product $uv$, then $p\mid u$ or $p\mid v$ ([[thm-euclids-lemma]]).

[L3] If a prime $p$ does not divide an integer $u$, then $\gcd(p,u)=1$ ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 Reducing the given congruence modulo $p$ shows that $p\mid x_k$ would force $p\mid a$, contrary to the hypothesis. If $p\mid2x_k$, [L2] would give $p\mid2$ or $p\mid x_k$; both are impossible because $p$ is odd. Hence $p\nmid2x_k$, and [L3] gives $\gcd(2x_k,p)=1$. [L2, L3, given]

2.1 Write $x_k^2-a=cp^k$. Every class modulo $p^{k+1}$ reducing to $x_k$ modulo $p^k$ has a unique form $x_k+tp^k$ with $t$ modulo $p$, and expansion gives $(x_k+tp^k)^2-a=p^k(c+2x_kt+t^2p^k)$. Since $k\ge1$, the lift is a root modulo $p^{k+1}$ exactly when $2x_kt\equiv-c\pmod p$. By step 1.1 and [L1], this linear congruence has exactly one solution class $t$ modulo $p$. [step 1.1, L1, algebra] ∎
