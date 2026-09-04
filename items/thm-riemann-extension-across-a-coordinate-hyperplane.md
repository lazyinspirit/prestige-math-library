---
id: thm-riemann-extension-across-a-coordinate-hyperplane
kind: theorem
title: "A locally bounded holomorphic function extends across a coordinate hyperplane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       lem-bounded-punctured-slice-has-holomorphic-parameter-extension,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Theorem 1.6.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge2$, let $\Omega\subseteq\mathbb C^m$ be a domain, and let

$$ H:=\Omega\cap\{z_m=0\}. $$

If $f:\Omega\setminus H\to\mathbb C$ is holomorphic and locally bounded near
$H$, then there exists a unique holomorphic $F:\Omega\to\mathbb C$ such that
$F=f$ on $\Omega\setminus H$.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$, a holomorphic function
$f:\Omega\setminus H\to\mathbb C$, and local boundedness near the coordinate
hyperplane $H$.

[L1] A bounded punctured slice extends holomorphically, and the missing value
depends holomorphically on the remaining parameters
([[lem-bounded-punctured-slice-has-holomorphic-parameter-extension]]).

[L2] A holomorphic function on a connected open set is determined by its values
on a nonempty open subset
([[thm-identity-theorem-in-several-complex-variables]]).

[L3] Holomorphic extension means agreement on some nonempty open overlap
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 Let $p=(p',0)\in H$. By local boundedness, choose a product neighborhood $U\times\{|w|<R\}\subseteq\Omega$ of $p$ on which $f$ is bounded whenever $0<|w|<R$, after translating coordinates so that $p_m=0$. Applying [L1] on this product neighborhood gives a holomorphic function $F_p:U\times\{|w|<R\}\to\mathbb C$ extending $f$ across the slice $U\times\{0\}$. [given, L1]

2.1 The functions $F_p$ and $f$ agree on the nonempty open overlap $U\times\{0<|w|<R\}$, so each $F_p$ is a local holomorphic extension in the sense of [L3]. [step 1.1, L3]

3.1 If two such neighborhoods overlap, their local extensions agree on the nonempty open subset of the overlap where $w\ne0$, because both equal $f$ there. The overlap is connected after shrinking if necessary, so [L2] makes the two local extensions equal on the whole overlap. [step 2.1, L2]

4.1 The local extensions therefore glue to a single holomorphic function on $\Omega$ that agrees with $f$ off $H$. Uniqueness follows from [L2], since two global extensions agree on the nonempty open set $\Omega\setminus H$. [step 3.1, L2] ∎
