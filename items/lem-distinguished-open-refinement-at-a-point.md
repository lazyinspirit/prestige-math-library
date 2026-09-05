---
id: lem-distinguished-open-refinement-at-a-point
kind: lemma
title: "Every point of a Zariski-open set has a distinguished-open neighbourhood inside it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-distinguished-opens-cover-every-open, def-principal-distinguished-subset-of-spectrum]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.21: Open and closed subsets of spectra"
      url: "https://stacks.math.columbia.edu/tag/04PN"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring, let $U\subseteq\operatorname{Spec}(R)$ be Zariski-open, and let $\mathfrak p\in U$. Then there exists $f\in R$ such that $$ \mathfrak p\in D(f)\subseteq U. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a Zariski-open set $U\subseteq\operatorname{Spec}(R)$, and a point $\mathfrak p\in U$.

[L1] Every Zariski-open subset is a union of distinguished opens ([[lem-distinguished-opens-cover-every-open]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the open set $U$ is a union of distinguished opens. Since $\mathfrak p\in U$, there exists $f\in R$ with $\mathfrak p\in D(f)$ and $D(f)\subseteq U$. [L1, given, choose]

2.1 The chosen $D(f)$ is therefore a distinguished-open neighbourhood of $\mathfrak p$ contained in $U$. [step 1.1]

3.1 Hence every point of a Zariski-open set has a distinguished-open neighbourhood inside that open set. [step 2.1] ∎
