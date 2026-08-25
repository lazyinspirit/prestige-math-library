---
id: cor-one-more-than-n-divides-the-central-binomial-coefficient
kind: corollary
title: "$n+1$ divides $\\binom{2n}{n}$ for every $n\\in\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-catalan-closed-formula, def-divides-in-z, def-catalan-number, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5 Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$ the integer $n+1$ divides $\binom{2n}{n}$
([[def-divides-in-z]]), and the quotient is the Catalan number $C_n$
([[def-catalan-number]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $(n+1)\,C_n=\binom{2n}{n}$ in $\mathbb{N}$ ([[cor-catalan-closed-formula]]).

[F2] $C_n=\lvert\mathcal{D}_n\rvert\in\mathbb{N}$ ([[def-catalan-number]]).

[L1] For $d,a\in\mathbb{Z}$, $d$ divides $a$ when $a=dq$ for some $q\in\mathbb{Z}$ ([[def-divides-in-z]]).

[L2] The embedding of $\mathbb{N}$ into $\mathbb{Z}$ sending $k$ to $[(k,0)]$ is injective and preserves addition, multiplication, and order ([[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 The Catalan number $C_n$ is a natural number, so its image in $\mathbb{Z}$ is an integer, and the identity $(n+1)C_n=\binom{2n}{n}$ of [F1] holds between natural numbers. [F1, F2]

2.1 Since the embedding preserves multiplication and addition, the same identity holds in $\mathbb{Z}$ between the corresponding integers; taking $q:=C_n$ in [L1] with $d=n+1$ and $a=\binom{2n}{n}$ shows that $n+1$ divides $\binom{2n}{n}$ and exhibits $C_n$ as the quotient. [L1, L2, step 1.1] ∎

## Remarks

- **The quotient is exhibited as a count, and that is the whole proof.** No
  arithmetic property of $\binom{2n}{n}$ is used: the divisibility holds because a
  set of Dyck paths was counted and the count turned out to be the quotient. An
  argument from prime factorisations would have to be made separately for every
  prime dividing $n+1$, and would give no combinatorial meaning to the quotient.

- **What is not claimed.** Nothing here says $n+1$ is the largest such divisor,
  or that $\binom{2n}{n}$ has any other divisibility property. The statement is
  the single divisibility, for every $n$, with $n=0$ included: there $1$ divides
  $1$.
