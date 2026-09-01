---
id: prop-units-in-an-adically-complete-ring
kind: proposition
title: "Elements congruent to $1$ modulo a defining ideal are units"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, def-separated-and-complete-filtered-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.16"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.96.6"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I \subseteq R$ be an ideal. Assume that
$R$ is $I$-adically complete. If $u \in R$ satisfies
$$
u \equiv 1 \pmod I,
$$
then $u$ is a unit of $R$.

Consequently, every element of $I$ lies in the Jacobson radical of $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \subseteq R$, and an
$I$-adically complete ring element $u=1-a$ with $a \in I$.

[L1] The completion map $R \to \varprojlim R/I^n$ is an isomorphism because $R$
is $I$-adically complete ([[def-separated-and-complete-filtered-module]], [[def-adic-completion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \ge 1$, the finite geometric sum $$v_n:=1+a+a^2+\cdots+a^{n-1}$$ satisfies $$(1-a)v_n=1-a^n.$$ Since $a \in I$, one has $a^n \in I^n$, so the image of $v_n$ in $R/I^n$ is an inverse to the image of $u=1-a$. [given, algebra]

2.1 The residue classes $(v_n \bmod I^n)_n$ are compatible: the image of $v_{n+1}$ in $R/I^n$ equals the image of $v_n$ because $v_{n+1}-v_n=a^n \in I^n$. Therefore they define an element $$v \in \varprojlim R/I^n.$$ [step 1.1, construct]

3.1 By [L1], there is a unique element $w \in R$ corresponding to $v$. Since each component of $v$ is an inverse to the image of $u$, the products $uw$ and $wu$ map to $1$ in every quotient $R/I^n$. Completeness includes separatedness, so the kernel of $R \to \varprojlim R/I^n$ is $0$; hence $$uw=wu=1.$$ Thus $u$ is a unit. [L1, step 2.1, algebra]

4.1 Let $x \in I$ and $r \in R$. Then $1-rx \equiv 1 \pmod I$, so step 3.1 shows $1-rx$ is a unit. The elementary ideal characterization of the Jacobson radical now gives $x \in J(R)$: if a maximal ideal omitted $x$, its image would generate the residue field, contradicting invertibility of every $1-rx$. Therefore $I \subseteq J(R)$. [step 3.1, algebra] ∎
