---
id: cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category
kind: counterexample
title: "A zero kernel does not force monicity in a merely semiadditive category"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-semiadditive-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Exercise 2A"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-20
---

## Statement refuted

**Refuted claim:** in every semiadditive category, a morphism with zero kernel
is monic.

The witness is the morphism $q:\mathbb N\to\{0,a\}$ in the semiadditive
category $\mathbf{CMon}$ of commutative monoids, where $a+a=a$ and
$q(0)=0,\ q(n)=a$ for $n>0$.

## Facts & Assumptions

**Given:** The category $\mathbf{CMon}$ and the morphism $q:\mathbb N\to\{0,a\}$.

[L1] A semiadditive category is one with finite biproducts ([[def-semiadditive-category]]).

## Counterexample

**Proof technique:** direct.

1.1 For commutative monoids $M$ and $N$, the Cartesian product $M\times N$ is also their coproduct: if $f:M\to P$ and $g:N\to P$ are homomorphisms, then $$h(m,n):=f(m)+g(n)$$ is a homomorphism $M\times N\to P$, and it is the unique one with $h(m,0)=f(m)$ and $h(0,n)=g(n)$ because every $(m,n)$ equals $(m,0)+(0,n)$. Hence finite products and finite coproducts in $\mathbf{CMon}$ agree, so [L1] shows that $\mathbf{CMon}$ is semiadditive. [given, L1, construct]

1.2 Let $s,t:\mathbb N\to\mathbb N$ be the monoid homomorphisms $s(n)=n$ and $t(n)=2n$. They are distinct, but $qs=qt$ because both send every positive integer to $a$ and $0$ to $0$. Hence $q$ is not monic. [given]

2.1 The equalizer of $q$ and the zero map $\mathbb N\to\{0,a\}$ consists only of $0$, because $q(n)=0$ holds exactly for $n=0$. So the kernel of $q$ is zero. [given, step 1.1]

3.1 Thus a zero kernel does not force monicity once one weakens preadditivity to mere semiadditivity. [step 1.1, step 1.2, step 2.1] ∎
