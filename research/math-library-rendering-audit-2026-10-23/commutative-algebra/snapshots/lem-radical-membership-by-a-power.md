---
id: lem-radical-membership-by-a-power
kind: lemma
title: "Radical membership via positive powers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-of-an-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $x\in R$. Then
$$ x\in\sqrt{I}\quad\Longleftrightarrow\quad x^n\in I\text{ for some integer }n\ge 1. $$
In particular, $\sqrt{R}=R$, and if $R$ is the zero ring then $\sqrt{(0)}=R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and an element $x\in R$.

[L1] The radical of $I$ is the set of elements whose positive powers land in $I$ ([[def-radical-of-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 The displayed equivalence is exactly the defining membership criterion in [L1]. [L1]

2.1 Taking $I=R$ in step 1.1 gives $\sqrt{R}=R$, because every element already has its first power in $R$. If $R$ is the zero ring, then $(0)=R$, so the same observation gives $\sqrt{(0)}=R$. [step 1.1, given, algebra]

3.1 Steps 1.1 and 2.1 prove the claim and record the unit-ideal and zero-ring boundaries explicitly. [step 1.1, step 2.1] ∎
