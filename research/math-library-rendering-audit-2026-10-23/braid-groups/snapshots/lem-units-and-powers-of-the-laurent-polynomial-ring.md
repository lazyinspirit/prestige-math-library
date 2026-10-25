---
id: lem-units-and-powers-of-the-laurent-polynomial-ring
kind: lemma
title: "Units, powers and the domain property of the Laurent polynomial ring"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-the-laurent-polynomial-ring
  - prop-units-in-a-localisation
  - prop-localisation-zero-equality-and-kernel-criteria
  - def-polynomial-degree-leading-coefficient-and-monic
  - thm-polynomial-degree-of-a-product-over-a-domain
  - cor-units-in-a-polynomial-ring-over-a-domain
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - lem-units-of-z
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Section 10.9 (Localization, Tag 00CM): background on fraction equality and localisation"
      url: "https://stacks.math.columbia.edu/tag/00CM"
      locator: "Section 10.9, fraction relation and injectivity discussion preceding Proposition 10.9.3; the Laurent unit classification is proved locally"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\Lambda_1=\mathbb Z[t^{\pm1}]$ be the Laurent polynomial ring of
[[def-the-laurent-polynomial-ring]]. Then:

(a) $\Lambda_1$ is an integral domain;

(b) $t^m\ne1$ for every $m\ne0$, and more generally $t^m\ne t^n$ for $m\ne n$;

(c) $u\in\Lambda_1$ is a unit if and only if $u=\pm t^m$ for some
$m\in\mathbb Z$;

(d) for $n\ge2$ the element $1+t+\cdots+t^{n-1}$ is not a unit of $\Lambda_1$.

No choice principle is used.

## Facts & Assumptions

**Given:** The Laurent polynomial ring $\Lambda_1=S^{-1}\mathbb Z[t]$ with $S=\{t^k:k\ge0\}$, a nonzero integer polynomial $p\in\mathbb Z[t]$, and integers $m,m'\in\mathbb Z$.

[F1] Every element of $\Lambda_1$ is a fraction $p/t^N$ with $p\in\mathbb Z[t]$ and $N\ge0$, and $t$ is a unit with inverse $t^{-1}$ ([[def-the-laurent-polynomial-ring]], [[prop-units-in-a-localisation]]).

[F2] A fraction $r/s$ is zero if and only if $t^kr=0$ for some $k\ge0$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F3] $\mathbb Z[t]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]): it has no zero divisors, so $t^kf=0$ forces $f=0$ for every $k\ge0$, since $t^k\ne0$; and for nonzero $f,g$ one has $\deg(fg)=\deg f+\deg g$ and the constant term of $fg$ is the product of the constant terms ([[thm-polynomial-degree-of-a-product-over-a-domain]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[F4] A polynomial $f\in\mathbb Z[t]$ is a unit if and only if it is constant with value a unit of $\mathbb Z$, and the units of $\mathbb Z$ are $1$ and $-1$ ([[cor-units-in-a-polynomial-ring-over-a-domain]], [[lem-units-of-z]]).

## Proof

**Proof technique:** direct.

1.1 *Normal form.* Write a nonzero element of $\Lambda_1$ as $p/t^N$ with $p\in\mathbb Z[t]$, $N\ge0$ by [F1], and factor out the largest power of $t$ dividing $p$: there are $d\ge0$ and $q\in\mathbb Z[t]$ with $p=t^d q$ and $t\nmid q$, the latter meaning $q(0)\ne0$. Then $p/t^N=t^{d-N}q$, so every nonzero element has a representative $t^mq$ with $m\in\mathbb Z$ and $q(0)\ne0$. This representative is unique: if $t^mq=t^{m'}q'$ with $q(0),q'(0)\ne0$, multiply by $t^{-m}$ to get $q=t^{m'-m}q'$; if $m'\ge m$, the constant term of the right-hand side equals $q'(0)\ne0$ when $m'=m$ and vanishes when $m'>m$, while the constant term of $q$ is $q(0)\ne0$, so $m'=m$ and $q=q'$; the case $m'<m$ is symmetric. [F1, F2, F3]

2.1 *$\Lambda_1$ is an integral domain.* Suppose $uv=0$ with $u=t^mp$, $v=t^nq$ nonzero in normal form, so $p(0),q(0)\ne0$ and $pq\ne0$ by [F3]. Then $uv=t^{m+n}pq$. If $m+n\ge0$, the element $t^{m+n}pq$ is a polynomial, and [F2] yields $k\ge0$ with $t^k t^{m+n}pq=t^{k+m+n}pq=0$ in $\mathbb Z[t]$; since $t^{k+m+n}\ne0$ and $\mathbb Z[t]$ is a domain by [F3], $pq=0$, a contradiction. If $m+n<0$, the element is $pq/t^{-(m+n)}$, and [F2] yields $k\ge0$ with $t^kpq=0$ in $\mathbb Z[t]$, again forcing $pq=0$ by [F3], a contradiction. Hence $uv\ne0$, so $\Lambda_1$ is a domain. [F2, F3, step 1.1]

2.2 *Distinct powers of $t$.* The elements $t^m=t^m\cdot1$ and $1=t^0\cdot1$ are in normal form, since the constant polynomial $1$ has $1\ne0$. By uniqueness in step 1.1, $t^m=1$ forces $m=0$ and $q=1$. More generally $t^m=t^{m'}$ forces $t^{m-m'}=1$, hence $m=m'$. [step 1.1]

2.3 *Units.* If $u=\pm t^m$, then $u\cdot(\pm t^{-m})=1$, so $u$ is a unit. Conversely let $u=t^mp$ in normal form be a unit, with inverse $v=t^nq$ in normal form; then $t^{m+n}pq=1$. Applying the normal form uniqueness of step 1.1 to $t^{m+n}pq$ and to $1=t^0\cdot1$ gives $m+n=0$ and $pq=1$ in $\mathbb Z[t]$. By [F4] the unit $p$ of $\mathbb Z[t]$ is one of the two constants $\pm1$; hence $u=\pm t^m$. [F4, step 1.1]

3.1 *The sum $1+t+\cdots+t^{n-1}$.* For $n\ge2$ put $f=1+t+\cdots+t^{n-1}$, a polynomial with constant term $1$ and at least two nonzero coefficients. In normal form $f=t^0f$. If $f$ were a unit, step 2.3 would give $f=\pm t^m$ for some $m$; two elements equal in $\Lambda_1$ have the same normal-form exponent and polynomial by step 1.1, so $m=0$ and $f=\pm1$, contradicting that $f$ has at least two nonzero coefficients. Hence $f$ is not a unit, which is (d); claims (a), (b), (c) are steps 2.1, 2.2 and 2.3. No choice principle is used. [step 1.1, step 2.1, step 2.2, step 2.3] ∎
