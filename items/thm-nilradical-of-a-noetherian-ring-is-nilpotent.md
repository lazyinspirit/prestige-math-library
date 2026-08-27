---
id: thm-nilradical-of-a-noetherian-ring-is-nilpotent
kind: theorem
title: "The nilradical of a Noetherian ring is nilpotent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nilradical-and-reduced-ring, thm-noetherian-ring-ideal-characterisations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "The Stacks Project, Section 10.32: Rings and modules with finiteness conditions"
      url: "https://stacks.math.columbia.edu/tag/00IM"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring. Then its nilradical $\operatorname{Nil}(R)$ is a nilpotent ideal: there exists an integer $N\ge 1$ such that $\operatorname{Nil}(R)^N=(0)$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$.

[L1] The nilradical is the ideal of nilpotent elements ([[def-nilradical-and-reduced-ring]]).

[L2] In a Noetherian commutative ring, every ideal is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the ideal $\operatorname{Nil}(R)$ is finitely generated. Choose generators $a_1,\dots,a_r$, and for each $i$ choose an integer $n_i\ge 1$ with $a_i^{n_i}=0$. Set $N=n_1+\cdots+n_r$. [L1, L2, choose]

2.1 Every element of $\operatorname{Nil}(R)^N$ is a finite sum of monomials of total degree $N$ in the generators $a_1,\dots,a_r$. In each such monomial, some generator $a_i$ occurs at least $n_i$ times, so that monomial contains the factor $a_i^{n_i}=0$ and therefore vanishes. Hence every monomial, and therefore every finite sum of them, is zero. [step 1.1, algebra]

3.1 Thus $\operatorname{Nil}(R)^N=(0)$ for the integer $N$ chosen in step 1.1. [step 2.1] ∎
