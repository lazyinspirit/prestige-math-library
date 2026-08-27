---
id: lem-left-and-right-amenability-agree-by-inversion
kind: lemma
title: "Left and right amenability agree by inversion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Let $G$ be a group. Then $G$ admits a left-invariant mean if and only if it
admits a right-invariant mean.

Here a mean $m$ is **right invariant** when
$m(f\cdot g)=m(f)$ for every $g\in G$, where $(f\cdot g)(x)=f(xg^{-1})$.

## Facts & Assumptions

**Given:** A group $G$.

[L1] Amenability is defined by existence of a left-invariant mean
([[def-left-invariant-mean-and-amenable-group]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $m$ is left invariant. For bounded $f$, define $If(x)=f(x^{-1})$ and $m_r(f)=m(If)$. Then $m_r$ is a mean, and for every $g\in G$ one has $I(f\cdot g)=g^{-1}\cdot If$, so left invariance of $m$ gives $m_r(f\cdot g)=m_r(f)$. Thus a left-invariant mean produces a right-invariant mean. [L1, given, construct]

2.1 Replacing $g$ by $g^{-1}$ in the same computation shows that inversion also carries right-invariant means back to left-invariant means. Hence the two notions are equivalent. [step 1.1] ∎
