---
id: cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis
kind: counterexample
title: "An arbitrary transversal need not give the reduced Schreier basis"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-schreier-generator, def-schreier-transversal-and-schreier-system, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

Any transversal of right cosets automatically yields the reduced Schreier basis.

## Facts & Assumptions

**Given:** The false claim above.

[L1] For this counterexample, if $\mathcal T$ is any right transversal containing $1$, define its **raw transversal elements** by $r_{\mathcal T}(t,x)=tx\,\overline{tx}^{-1}$. When $\mathcal T$ is a Schreier system, these are the Schreier generators of [[def-schreier-generator]].

[L2] A Schreier system is stronger than an arbitrary transversal: it must be closed under initial segments ([[def-schreier-transversal-and-schreier-system]]).

[L3] Nielsen-Schreier extracts a free basis from the nontrivial Schreier generators only when the representatives form a Schreier system ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $H\le F(a,b)$ be the subgroup of words with even exponent sum in $a$. Its two right cosets are $H$ and $Ha$. The set $\mathcal T=\{1,ab\}$ is a transversal, but it is not a Schreier system because the initial segment $a$ of $ab$ is not in $\mathcal T$. [L2, given, construct]

2.1 Using [L1], the nontrivial raw transversal elements are $ab^{-1}a^{-1}$, $b$, $aba$, and $aba^{-1}$. Indeed, the last one is $r_{\mathcal T}(ab,b)=ab^2(ab)^{-1}=aba^{-1}$. This list is redundant because $ab^{-1}a^{-1}=(aba^{-1})^{-1}$. [L1, step 1.1, algebra]

3.1 By [L3], the reduced Schreier basis is guaranteed only for Schreier systems. Step 2.1 shows that the arbitrary transversal $\{1,ab\}$ instead gives a redundant list, so it does not yield the reduced Schreier basis. The Schreier initial-segment condition is load-bearing. [L3, step 2.1] ∎
