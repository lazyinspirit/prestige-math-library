---
id: lem-pure-even-character-excludes-2-adic-conductor-exponents-one-and-two
kind: lemma
title: Pure Even Characters Have No 2-Adic Conductor Exponent One or Two
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - lem-dirichlet-character-factorization-under-crt
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.2, purity indicator and the 2-adic coefficient cases in equations (2.13)–(2.14), (2.21)–(2.22), printed pp. 12–13."
---

## Statement

Let $N\ge1$, let $\chi$ be an even Dirichlet character modulo $N$, and let
$q=\operatorname{cond}(\chi)\mid N$. For each $p\mid N$, write
$\chi=\prod_{p\mid N}\chi_p$ as in the CRT factorization lemma, and put
$s_p=\operatorname{ord}_p(q)$. If $\chi_p(-1)=1$ for every odd prime
$p\mid N$, then $s_2\notin\{1,2\}$; when $2\nmid N$, $s_2=0$.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Facts & Assumptions

**Given:** An even Dirichlet character $\chi$ modulo $N$ with conductor $q$ and CRT factors $\chi_p$.

[F1] [[def-dirichlet-character-modulo-q]]: $\chi(-1)=1$ means the character takes the value one at the residue class $-1$.

[F2] [[lem-dirichlet-character-factorization-under-crt]]: $\chi=\prod_{p\mid N}\chi_p$, and $s_p=\operatorname{ord}_p(q)$ is the least exponent through which the local unit character $\chi_p$ factors.

## Proof

**Proof technique:** direct.

1.1 Suppose $2\mid N$. Since $\chi$ is even, $\chi(-1)=1$. By [F2],
$$1=\chi(-1)=\prod_{p\mid N}\chi_p(-1).$$
The assumed factors for odd $p$ are all one, so $\chi_2(-1)=1$. [given, F1, F2, algebra]

1.2 If $s_2=1$, [F2] says $\chi_2$ factors through the unit group modulo $2$, which has only its identity, so $\chi_2$ is trivial and its least factorization exponent is zero, contradicting $s_2=1$. If $s_2=2$, it factors through the unit group modulo $4$, whose elements are $1$ and $-1$; because $\chi_2(-1)=1$, it is again trivial and has least exponent zero, contradicting $s_2=2$. Thus neither exponent is possible. If $2\nmid N$, then $2\nmid q$ because $q\mid N$, so $s_2=0$. [given, F2, step 1.1, contradiction, algebra] ∎
